{
  const root = document.documentElement;
  const C = window.CCHP || {};
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const store = (k, v) => { try { v === undefined ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch (e) {} };
  const read = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };

  /* Tema día / noche (día por defecto) */
  const themeBtn = document.getElementById('theme');
  const syncThemeBtn = () => themeBtn.setAttribute('aria-label', root.dataset.theme === 'dark' ? 'Cambiar a modo día' : 'Cambiar a modo noche');
  themeBtn.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    store('cchp-theme', root.dataset.theme);
    syncThemeBtn();
  });
  syncThemeBtn();

  /* Galería */
  const gal = document.getElementById('gallery');
  gal.innerHTML = (C.gallery || []).map(g => `
    <figure class="slide">
      <img src="assets/img/${esc(g.img)}.webp" alt="${esc(g.title)}" loading="lazy" decoding="async">
      <figcaption><b>${esc(g.title)}</b><span>${esc(g.text)}</span></figcaption>
    </figure>`).join('');
  const step = dir => {
    const w = gal.querySelector('.slide')?.getBoundingClientRect().width || gal.clientWidth;
    gal.scrollBy({ left: dir * (w + 16), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };
  document.querySelectorAll('.nb').forEach(b => b.addEventListener('click', () => step(+b.dataset.dir)));
  gal.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
  });

  /* Créditos */
  document.getElementById('credit-list').innerHTML = (C.credits || []).map(([, t, a, l, u]) =>
    `<li><a href="${esc(u)}" rel="noopener">${esc(t)}</a> · ${esc(a)} · ${esc(l)}</li>`).join('');

  /* Contacto */
  if (C.contactEmail) {
    const el = document.getElementById('contact-email');
    el.innerHTML = `<a href="mailto:${esc(C.contactEmail)}">${esc(C.contactEmail)}</a>`;
  }

  /* Idioma: solo se activa si existe diccionario en i18n.js */
  const en = (window.CCHP_I18N || {}).en || {};
  if (Object.keys(en).length) {
    const nodes = [...document.querySelectorAll('[data-i18n]')];
    nodes.forEach(n => { n.dataset.es = n.innerHTML; });
    const btn = document.getElementById('lang');
    const apply = lang => {
      nodes.forEach(n => { const k = n.dataset.i18n; n.innerHTML = lang === 'en' && en[k] ? esc(en[k]) : n.dataset.es; });
      root.lang = lang; btn.textContent = lang === 'en' ? 'ES' : 'EN'; store('cchp-lang', lang);
    };
    btn.hidden = false;
    btn.addEventListener('click', () => apply(root.lang === 'en' ? 'es' : 'en'));
    const q = new URLSearchParams(location.search).get('lang');
    apply(q || read('cchp-lang') || 'es');
  }
}
