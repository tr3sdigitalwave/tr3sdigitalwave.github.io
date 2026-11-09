/* Tr3sDigitalWave — interactions + demo bot (vanilla JS, no dependencies) */
document.documentElement.classList.add('js');

(function () {
  'use strict';

  /* i18n shorthand: page strings via TDW.t, bot script via TDW.bot */
  var TDW = window.TDW;
  function bt(key, vars) {
    var s = TDW.bot(key);
    if (vars) {
      Object.keys(vars).forEach(function (k) {
        s = s.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]);
      });
    }
    return s;
  }

  /* ---------- header: frosted glass on scroll ---------- */
  var header = document.getElementById('siteHeader');
  var onScroll = () => header.classList.toggle('scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- mobile nav ---------- */
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');
  var closeMenu = () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
  };
  toggle.addEventListener('click', () => {
    var open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('open')) { closeMenu(); toggle.focus(); }
  });

  /* ---------- active nav link ---------- */
  var sections = [...document.querySelectorAll('main section[id]')];
  var navLinks = [...menu.querySelectorAll('a')];
  var spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => spy.observe(s));

  /* ---------- reveal on scroll ---------- */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealer = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); revealer.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealer.observe(el));

  /* ---------- animated counters ---------- */
  var animateCounter = el => {
    var target = parseFloat(el.dataset.counter);
    var suffix = el.dataset.suffix || '';
    var dur = reduceMotion ? 1 : 1400;
    var t0 = performance.now();
    var tick = now => {
      var p = Math.min((now - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString('en-US') + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  var counterObs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { animateCounter(en.target); counterObs.unobserve(en.target); }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('[data-counter]').forEach(el => counterObs.observe(el));

  /* =====================================================
     WhatsApp demo bot — scripted lead-capture conversation
     ===================================================== */
  var chat = document.getElementById('chat');
  var input = document.getElementById('chatInput');
  var sendBtn = document.getElementById('chatSend');
  var status = document.getElementById('botStatus');
  var waLink = document.getElementById('waLink');
  var wait = ms => new Promise(r => setTimeout(r, reduceMotion ? 60 : ms));

  var WA_NUMBER = '593981681345'; /* business mobile — WhatsApp Business (EC +593) */
  var EMAIL = 'tr3sdigitalwave@proton.me';

  var profile = { name: '', business: '', need: '' };
  var started = false;
  var step = 'idle'; // idle | name | business | need | done

  var scrollChat = () => { chat.scrollTop = chat.scrollHeight; };

  function userSay(text) {
    var div = document.createElement('div');
    div.className = 'msg msg-user';
    div.textContent = text;
    chat.appendChild(div);
    scrollChat();
  }

  async function botSay(html, delay) {
    status.textContent = TDW.t('demo.status_typing');
    var typing = document.createElement('div');
    typing.className = 'msg msg-bot msg-typing';
    typing.innerHTML = '<i></i><i></i><i></i>';
    chat.appendChild(typing);
    scrollChat();
    await wait(delay || 900);
    typing.remove();
    var msg = document.createElement('div');
    msg.className = 'msg msg-bot';
    msg.innerHTML = html;
    chat.appendChild(msg);
    status.textContent = TDW.t('demo.status_online');
    scrollChat();
  }

  function showChips(options) {
    var existing = chat.querySelector('.chips');
    if (existing) existing.remove();
    var wrap = document.createElement('div');
    wrap.className = 'chips';
    options.forEach(opt => {
      var b = document.createElement('button');
      b.className = 'chip';
      b.type = 'button';
      b.textContent = opt.label;
      b.addEventListener('click', () => { wrap.remove(); opt.action(); });
      wrap.appendChild(b);
    });
    chat.appendChild(wrap);
    scrollChat();
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  var needChips = () => [
    { label: bt('need_wa'), action: () => chooseNeed(bt('need_wa')) },
    { label: bt('need_auto'), action: () => chooseNeed(bt('need_auto')) },
    { label: bt('need_web'), action: () => chooseNeed(bt('need_web')) },
    { label: bt('need_data'), action: () => chooseNeed(bt('need_data')) }
  ];

  async function startConversation() {
    started = true;
    step = 'idle';
    await botSay(bt('greet1'), 1200);
    await botSay(bt('greet2'), 800);
    showChips([
      { label: bt('chip_yes'), action: demoFlow },
      { label: bt('chip_what'), action: servicesFlow }
    ]);
  }

  async function demoFlow() {
    await botSay(bt('ask_name'), 900);
    input.focus();
    step = 'name';
  }

  async function servicesFlow() {
    await botSay(bt('svc_answer'), 1300);
    await botSay(bt('want_try'), 900);
    showChips([
      { label: bt('chip_try'), action: demoFlow },
      { label: bt('chip_human'), action: handoff }
    ]);
  }

  async function handleUserText(text) {
    userSay(text);
    if (step === 'name') {
      profile.name = text.split(' ')[0];
      step = 'business';
      await botSay(bt('nice', { n: escapeHtml(profile.name) }), 900);
    } else if (step === 'business') {
      profile.business = text;
      step = 'need';
      await botSay(bt('gotbiz', { b: escapeHtml(profile.business) }), 900);
      showChips(needChips());
    } else {
      await freeTextFallback(text);
    }
  }

  async function chooseNeed(need) {
    profile.need = need;
    userSay(need.charAt(0).toUpperCase() + need.slice(1));
    step = 'done';
    await botSay(bt('then_next'), 1400);
    await botSay(bt('profile', {
      n: escapeHtml(profile.name || '—'),
      b: escapeHtml(profile.business || '—'),
      i: escapeHtml(need)
    }), 1200);
    updateWaLink(need);
    await botSay(bt('keep_talking'), 900);
    showChips([
      { label: bt('chip_continue'), action: () => { window.open(waLink.href, '_blank', 'noopener'); } },
      { label: bt('chip_restart'), action: restart }
    ]);
  }

  function updateWaLink(need) {
    var FROM = { en: ' from ', es: ' de ', zh: '，来自', de: ' von ', ca: ' de ', fr: ' de ' };
    var biz = profile.business ? (FROM[TDW.getLang()] || ' from ') + profile.business : '';
    var msg = bt('wa_msg', {
      n: profile.name || 'a client',
      b: biz,
      i: need || 'your services'
    });
    waLink.href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);
  }

  async function handoff() {
    step = 'done';
    await botSay(bt('handoff').replace('tr3sdigitalwave@proton.me', EMAIL), 1000);
    showChips([
      { label: bt('chip_open'), action: () => { window.open(waLink.href, '_blank', 'noopener'); } },
      { label: bt('chip_restart'), action: restart }
    ]);
  }

  async function freeTextFallback(text) {
    var t = text.toLowerCase();
    if (/price|cost|how much|quote|precio|cuánto|cuesta|devis|tarif|preis|kosten|价格|价钱|报价/.test(t)) {
      await botSay(bt('price_answer'), 1300);
      showChips([
        { label: bt('chip_book'), action: handoff },
        { label: bt('chip_restart'), action: restart }
      ]);
    } else if (/human|person|agent|talk|humano|persona|agente|hablar|mensch|sprechen|humain|parler|人工|真人|客服/.test(t)) {
      await handoff();
    } else if (/^(hello|hi|hey|hola|buenas|hallo|bonjour|salut|holi|你好|嗨)/i.test(t)) {
      await botSay(bt('hello_answer'), 800);
      showChips([
        { label: bt('chip_demo2'), action: demoFlow },
        { label: bt('chip_explore'), action: servicesFlow }
      ]);
    } else {
      await botSay(bt('fallback'), 1200);
      showChips([
        { label: bt('chip_team'), action: handoff },
        { label: bt('chip_restart'), action: restart }
      ]);
    }
  }

  async function restart() {
    chat.innerHTML = '';
    Object.keys(profile).forEach(k => profile[k] = '');
    step = 'idle';
    await startConversation();
  }

  var send = async () => {
    var text = input.value.trim();
    if (!text) return;
    input.value = '';
    if (step === 'idle' || step === 'done') { await freeTextFallback(text); return; }
    await handleUserText(text);
  };
  sendBtn.addEventListener('click', send);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });

  /* restart the conversation in the new language when the user switches */
  document.addEventListener('tdw:lang', () => {
    updateWaLink(profile.need || null);
    if (started) restart();
  });

  /* start the conversation when the phone scrolls into view */
  var demoObs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting && !started) { demoObs.disconnect(); startConversation(); }
    });
  }, { threshold: 0.35 });
  demoObs.observe(chat);
})();

/* ---------- title wave animation (plays on every page load) ---------- */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var idx = 0;
  function split(node) {
    Array.prototype.slice.call(node.childNodes).forEach(function (child) {
      if (child.nodeType === 3) {           // text node -> per-character spans
        var frag = document.createDocumentFragment();
        child.textContent.split('').forEach(function (ch) {
          if (ch === ' ') { frag.appendChild(document.createTextNode(' ')); return; }
          var s = document.createElement('span');
          s.className = 'wch';
          s.textContent = ch;
          s.style.setProperty('--wi', idx++);   // global cascade: ripples down the page
          frag.appendChild(s);
        });
        node.replaceChild(frag, child);
      } else if (child.nodeType === 1) {    // <em> accent words keep their styling
        split(child);
      }
    });
  }
  document.querySelectorAll('.hero h1, .section-head h2').forEach(split);
})();
