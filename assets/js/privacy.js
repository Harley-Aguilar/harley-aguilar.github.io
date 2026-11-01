'use strict';
(() => {
  const key = 'harley-privacy-notice-v1';
  try { if (localStorage.getItem(key) === 'seen') return; } catch { /* Browsing works without storage. */ }
  const english = document.documentElement.lang === 'en';
  const script = document.currentScript;
  const root = new URL('../../', script.src);
  const notice = document.createElement('aside');
  notice.className = 'privacy-notice';
  notice.setAttribute('aria-label', english ? 'Privacy notice' : 'Aviso de privacidade');
  const copy = document.createElement('div');
  const heading = document.createElement('strong');
  heading.textContent = english ? 'Your privacy matters.' : 'Sua privacidade importa.';
  const text = document.createElement('p');
  text.textContent = english
    ? 'HTTPS connection. No analytics or advertising trackers. YouTube loads only when you play a video.'
    : 'Conexão HTTPS. Sem analytics ou rastreadores publicitários. O YouTube só carrega quando você reproduz um vídeo.';
  const details = document.createElement('a');
  details.href = new URL(english ? 'privacy.html' : 'pt/privacidade.html', root).href;
  details.textContent = english ? 'Privacy details' : 'Detalhes de privacidade';
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'button lime';
  close.textContent = english ? 'Got it' : 'Entendi';
  close.addEventListener('click', () => {
    try { localStorage.setItem(key, 'seen'); } catch { /* Acknowledgement is optional. */ }
    const focused = notice.contains(document.activeElement);
    notice.remove();
    if (focused) document.querySelector('main')?.focus({preventScroll:true});
  });
  copy.append(heading, text, details);
  notice.append(copy, close);
  document.body.append(notice);
})();
