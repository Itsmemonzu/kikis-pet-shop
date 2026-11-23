"""Build site/bn/*.html (standard Dhaka Bangla) from the English pages, and add the language switch to both.
Usage: python -I build_bn.py <site_dir> <bn_strings.json>
Re-run after any English edit: it regenerates bn/ and is idempotent on the English pages."""
import re, sys, json, html, pathlib, urllib.parse

site = pathlib.Path(sys.argv[1]); T = json.loads(pathlib.Path(sys.argv[2]).read_text(encoding="utf-8"))
PAGES = ["index.html", "shop.html", "about.html", "contact.html"]
KEEP = {"KIKI'S", "PET SHOP", "Wanpy", "Snacky", "Paw Paw", "Bellotta", "Lola & Co", "Unsplash", "@kikispetshopbd",
        "facebook.com/kikispetshopbd", "kikis.petshopbd@gmail.com", "2F", "122", "01680-042538"}
BASE = "https://itsmemonzu.github.io/kikis-pet-shop/"
(site / "bn").mkdir(exist_ok=True)

def switch(lang, page):
    if lang == "en":
        return f'<a class="k-lang" href="bn/{page}" hreflang="bn" lang="bn"><i class="fa-solid fa-language" aria-hidden="true"></i>বাংলা</a>'
    return f'<a class="k-lang" href="../{page}" hreflang="en" lang="en"><i class="fa-solid fa-language" aria-hidden="true"></i>English</a>'

def alternates(page):
    return (f'  <link rel="alternate" hreflang="en" href="{BASE}{page}">\n'
            f'  <link rel="alternate" hreflang="bn" href="{BASE}bn/{page}">\n')

def add_switch(s, lang, page):
    s = re.sub(r'\s*<a class="k-lang"[^>]*>.*?</a>', "", s, flags=re.S)
    s = re.sub(r'[ \t]*<link rel="alternate" hreflang="[a-z]+"[^>]*>\n', "", s)
    s = s.replace('<a class="k-btn k-btn--white"', switch(lang, page) + '\n    <a class="k-btn k-btn--white"', 1)
    s = s.replace('  <link rel="stylesheet" href="', alternates(page) + '  <link rel="stylesheet" href="', 1)
    return s

def tr_text(m):
    raw = m.group(1); t = html.unescape(raw).strip()
    if not t or t in KEEP or t not in T: return m.group(0)
    lead = raw[: len(raw) - len(raw.lstrip())]; trail = raw[len(raw.rstrip()):]
    return ">" + lead + html.escape(T[t], quote=False) + trail + "<"

def tr_attr(m):
    name, val = m.group(1), m.group(2); t = html.unescape(val).strip()
    return f'{name}="{html.escape(T[t])}"' if t in T and t not in KEEP else m.group(0)

def tr_wa(m):
    msg = urllib.parse.unquote(html.unescape(m.group(1)))
    key = "WA::" + msg
    return "wa.me/8801680042538?text=" + urllib.parse.quote(T[key], safe="") if key in T else m.group(0)

missing = set()
for page in PAGES:
    en_path = site / page
    en = add_switch(en_path.read_text(encoding="utf-8"), "en", page)
    en_path.write_text(en, encoding="utf-8")

    s = en
    s = s.replace('<html lang="en">', '<html lang="bn">', 1)
    s = re.sub(r'(href|src)="(assets|css|js)/', r'\1="../\2/', s)
    s = s.replace('url("assets/', 'url("../assets/')
    # chips: Bangla numerals and word order
    s = s.replace('<b class="k-num">2F</b>2nd floor', '<b class="k-num">২য়</b>তলা')
    s = s.replace('<b class="k-num">122</b>Shop number', '<b class="k-num">১২২</b>নং দোকান')
    s = s.replace('<b class="k-num">122</b>Shop', '<b class="k-num">১২২</b>নং দোকান')
    # the Bangla sub-lines become the main text, so drop the duplicates
    s = re.sub(r'<(p|span|small)\b[^>]*\blang="bn"[^>]*>.*?</\1>', "", s, flags=re.S)
    s = re.sub(r"wa\.me/8801680042538\?text=([^\"']+)", tr_wa, s)
    s = re.sub(r'\b(alt|aria-label|title|content)="([^"]*)"', tr_attr, s)
    body_parts = re.split(r"(<script[\s\S]*?</script>|<style[\s\S]*?</style>)", s)
    s = "".join(p if p.startswith(("<script", "<style")) else re.sub(r">([^<>]+)<", tr_text, p) for p in body_parts)
    s = add_switch(s, "bn", page)
    s = s.replace("পোষা প্রাণীর সবকিছুই এক ঠিকানায়।<br>", "পোষা প্রাণীর সবকিছুই এক ঠিকানায়।")
    (site / "bn" / page).write_text(s, encoding="utf-8")

    # report English left in visible text
    vis = re.sub(r"<(script|style)[\s\S]*?</\1>", "", s)
    for t in re.findall(r">([^<>]+)<", vis):
        t = html.unescape(t).strip()
        if t and re.search(r"[A-Za-z]{2}", t) and t not in KEEP and not re.search(r"[ঀ-৿]", t):
            missing.add((page, t))
    for a in re.findall(r'\b(?:alt|aria-label|title)="([^"]*)"', s):
        if re.search(r"[A-Za-z]{3}", a) and not re.search(r"[ঀ-৿]", a):
            missing.add((page, "attr: " + a))
    assert s.count("<div") == s.count("</div>"), page

print("built", len(PAGES), "Bangla pages")
for m in sorted(missing): print("UNTRANSLATED", m)
