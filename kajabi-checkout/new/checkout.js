/* ===================================================================
   SYNCHO AI ACADEMY — Checkout behaviour  (v2, Claude Design redesign)
   Paste into:  Theme Settings → Custom JS   (replace everything)
   Goes with:   kajabi-checkout/new/checkout.css  (Custom CSS)

   Safety rules this file follows (an earlier version hung the page):
   - every write is ADDITIVE and GUARDED: it only acts when its target is
     missing or its text differs, so running twice changes nothing;
   - the MutationObserver is disconnected while we write;
   - observer callbacks are debounced;
   - everything runs inside try/catch so one error can't wedge checkout.
   =================================================================== */
(function () {
  if (window.__synchoCheckoutV2) return;          // never install twice
  window.__synchoCheckoutV2 = true;

  /* ---------- copy you may want to edit ---------- */
  var COPY = {
    title: 'Start your child’s trial',
    subtitle: 'AI Coding Academy for Kids · Ages 9–17 · about 60 seconds to finish.',
    product: 'AI Coding Academy for Kids',
    productMetaDesktop: '6 levels · Lifetime access · Certificate',
    productMetaMobile: 'Ages 9–17 · 6 levels · Lifetime access',
    emailLabel: 'Parent’s email',
    emailPlaceholder: 'you@example.com',
    emailHelp: 'Your login and lesson access go here.',
    optinLabel: 'Send me tips and updates from Syncho',
    next: [
      'Account ready in seconds — your login lands in your inbox',
      'Your child can start Level 1 today',
      'Live mentor office hours every week on Zoom, grouped by age'
    ],
    quote: '“My 11-year-old built her own website in week 2 and showed the whole class.”',
    quoteBy: 'Sarah M. · Mom of Priya, 11'
  };
  /* fallbacks, used only until Kajabi's checkout has rendered its own numbers */
  var FALLBACK = { today: '$1.99', monthly: '$29', days: 30 };

  /* ---------- icons (inline stroke SVG) ---------- */
  function svg(size, paths) {
    return '<svg class="syncho-ico" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths + '</svg>';
  }
  var I = {
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
    code: '<path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path>',
    check: '<path d="M20 6 9 17l-5-5"></path>',
    x: '<circle cx="12" cy="12" r="9"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path>',
    cal: '<rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path>'
  };

  /* ---------- read the real offer numbers from Kajabi's (hidden) summary ---------- */
  function txt(el) { return el ? (el.textContent || '').replace(/\s+/g, ' ').trim() : ''; }
  function money(s) { var m = (s || '').match(/\$\s?[\d,]+(?:\.\d\d)?/); return m ? m[0].replace(/\s/g, '') : ''; }
  function offer() {
    var today = '', monthly = '', days = 0;
    var dueRows = document.querySelectorAll('.embedded-checkout-price-summary .embedded-checkout-price-detail');
    for (var i = 0; i < dueRows.length; i++) {
      if (/due now/i.test(txt(dueRows[i]))) { today = money(txt(dueRows[i])); break; }
    }
    monthly = money(txt(document.getElementById('offer-price'))).replace(/\.00$/, '');
    var m = txt(document.querySelector('.embedded-checkout')).match(/(\d+)[-\s]day trial/i);
    if (m) days = parseInt(m[1], 10);
    days = days || FALLBACK.days;
    var d = new Date(Date.now() + days * 864e5);
    return {
      today: today || FALLBACK.today,
      monthly: monthly || FALLBACK.monthly,
      days: days,
      renew: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    };
  }

  /* set text only when it differs (keeps re-runs write-free) */
  function setText(root, key, value) {
    var els = root.querySelectorAll('[data-s="' + key + '"]');
    for (var i = 0; i < els.length; i++) if (els[i].textContent !== value) els[i].textContent = value;
  }
  function make(tag, cls, html) { var el = document.createElement(tag); el.className = cls; el.innerHTML = html; return el; }

  /* ---------- 1) header: wordmark + "secure checkout" ---------- */
  function header() {
    var logos = document.querySelectorAll('.header .logo');
    for (var i = 0; i < logos.length; i++) {
      var logo = logos[i];
      if (logo.getAttribute('data-syncho-v2')) continue;
      logo.setAttribute('data-syncho-v2', '1');
      logo.style.textDecoration = 'none';
      // same markup/sizes as the syncho.ai homepage header (styled in the CSS)
      logo.innerHTML =
        '<span class="syncho-logo">' +
          '<span class="syncho-logo__mark"><span>S</span></span>' +
          '<span class="syncho-logo__word">Syncho<span> Academy</span></span>' +
        '</span>';
    }
    var bars = document.querySelectorAll('.header .header__container');
    for (var j = 0; j < bars.length; j++) {
      if (bars[j].querySelector('.syncho-secure')) continue;
      bars[j].appendChild(make('span', 'syncho-secure', svg(15, I.lock) + 'Secure checkout<span class="syncho-secure__long">&nbsp;· encrypted</span>'));
    }
  }

  /* ---------- 2) cards around the checkout (outside Kajabi's React app) ---------- */
  function cards(o) {
    var col = document.querySelector('.checkout-column');
    var app = col && col.querySelector('.kjb-embedded-checkout');
    if (!col || !app) return;

    if (!col.querySelector('.syncho-title')) {
      col.insertBefore(make('div', 'syncho-title',
        '<h1>' + COPY.title + '</h1><p>' + COPY.subtitle + '</p>'), app);
    }
    if (!col.querySelector('.syncho-mhead')) {
      col.insertBefore(make('div', 'syncho-mhead',
        '<div class="syncho-sum__head"><div class="syncho-sum__badge">' + svg(24, I.code) + '</div>' +
          '<div style="min-width:0"><h1>' + COPY.product + '</h1><p>' + COPY.productMetaMobile + '</p></div></div>' +
        '<div class="syncho-mhead__price"><p class="syncho-eyebrow" style="margin:0 0 4px">You pay today</p>' +
          '<div><strong data-s="today"></strong><span class="usd">USD</span></div>' +
          '<p>Then <span data-s="monthly"></span>/month starting <span data-s="renew"></span>. Cancel before then and your card is never charged again.</p></div>'), app);
    }
    if (!col.querySelector('.syncho-tiles')) {
      col.appendChild(make('div', 'syncho-tiles',
        '<div>' + svg(18, I.cal) + '<span data-s="trial"></span></div>' +
        '<div>' + svg(18, I.x) + 'Cancel anytime</div>' +
        '<div>' + svg(18, I.lock) + 'Encrypted</div>'));
    }
    if (!col.querySelector('.syncho-next')) {
      var li = '';
      for (var i = 0; i < COPY.next.length; i++) li += '<li>' + svg(20, I.check) + '<span>' + COPY.next[i] + '</span></li>';
      col.appendChild(make('section', 'syncho-card syncho-next', '<p class="syncho-eyebrow">What happens next</p><ol>' + li + '</ol>'));
    }
    if (!col.querySelector('.syncho-aside')) {
      col.appendChild(make('aside', 'syncho-aside',
        '<section class="syncho-card syncho-sum">' +
          '<div class="syncho-sum__head"><div class="syncho-sum__badge">' + svg(22, I.code) + '</div>' +
            '<div style="min-width:0"><h3>' + COPY.product + '</h3><p>' + COPY.productMetaDesktop + '</p></div></div>' +
          '<div class="syncho-sum__rows">' +
            '<div class="syncho-sum__row"><span>First <span data-s="days"></span> days</span><b data-s="today"></b></div>' +
            '<div class="syncho-sum__row"><span>Then monthly from <span data-s="renew"></span></span><b data-s="monthly"></b></div>' +
          '</div>' +
          '<div class="syncho-sum__today"><span class="syncho-eyebrow">You pay today</span><strong data-s="today"></strong></div>' +
        '</section>' +
        '<section class="syncho-card syncho-cancel">' + svg(24, I.x) +
          '<div><h3>Cancel anytime before <span data-s="renew"></span></h3>' +
          '<p>Cancel before your trial ends and you won’t be charged <span data-s="monthly"></span>/month. Your child keeps everything they’ve unlocked.</p></div>' +
        '</section>' +
        '<figure class="syncho-card syncho-quote" style="margin:0"><blockquote>' + COPY.quote + '</blockquote><figcaption>' + COPY.quoteBy + '</figcaption></figure>'));
    }
    setText(col, 'today', o.today);
    setText(col, 'monthly', o.monthly);
    setText(col, 'renew', o.renew);
    setText(col, 'days', String(o.days));
    setText(col, 'trial', o.days + '-day trial');
  }

  /* ---------- 3) small touches INSIDE Kajabi's form (additive, guarded) ---------- */
  function form(o) {
    // numbered badges on Contact + Payment (skip Summary)
    var legends = document.querySelectorAll('.embedded-checkout__form .embedded-checkout__legend');
    var step = 0;
    for (var i = 0; i < legends.length; i++) {
      var lg = legends[i];
      if (/summary/i.test(lg.textContent)) continue;
      step++;
      if (lg.querySelector('.syncho-num')) continue;
      var b = document.createElement('span');
      b.className = 'syncho-num'; b.setAttribute('aria-hidden', 'true'); b.textContent = step;
      lg.insertBefore(b, lg.firstChild);
    }

    // email field: label, placeholder, helper line
    var email = document.querySelector('.embedded-checkout pds-input[type=email]');
    if (email) {
      if (email.getAttribute('label') !== COPY.emailLabel) email.setAttribute('label', COPY.emailLabel);
      if (email.getAttribute('placeholder') !== COPY.emailPlaceholder) email.setAttribute('placeholder', COPY.emailPlaceholder);
      var wrap = email.parentNode;
      if (wrap && !wrap.querySelector('.syncho-help')) wrap.appendChild(make('p', 'syncho-help', COPY.emailHelp));
    }

    // opt-in label (text node only)
    var opt = document.querySelector('.embedded-checkout .sage-checkbox__label');
    if (opt && /subscribe to our email list/i.test(opt.textContent)) {
      for (var n = opt.firstChild; n; n = n.nextSibling) {
        if (n.nodeType === 3 && /subscribe/i.test(n.nodeValue)) { n.nodeValue = COPY.optinLabel; break; }
      }
    }

    // pay button: "Pay $1.99 USD" -> "Start the trial — $1.99" (only while Kajabi's text is there)
    var btn = document.querySelector('.embedded-checkout__cta button[type=submit], .embedded-checkout button.sage-btn--primary');
    if (btn) {
      var w = document.createTreeWalker(btn, NodeFilter.SHOW_TEXT, null), t;
      while ((t = w.nextNode())) {
        if (/^\s*pay\b/i.test(t.nodeValue) && /\$/.test(t.nodeValue)) {
          t.nodeValue = 'Start the trial — ' + (money(t.nodeValue) || o.today);
          break;
        }
      }
    }

    // fine print under the button
    var cta = document.querySelector('.embedded-checkout__cta');
    if (cta) {
      var fine = cta.querySelector('.syncho-fine');
      if (!fine) {
        fine = make('p', 'syncho-fine', '<span data-s="today"></span> charged today. Nothing else until <span data-s="renew"></span> — cancel any time before then.');
        cta.appendChild(fine);
      }
      setText(fine, 'today', o.today);
      setText(fine, 'renew', o.renew);
    }
  }

  /* ---------- runner: disconnect → write → reconnect, debounced ---------- */
  var observer = null, timer = null;
  function run() {
    try {
      if (observer) observer.disconnect();
      var o = offer();
      header();
      cards(o);
      form(o);
    } catch (e) {
      /* swallow — never let the checkout hang */
    } finally {
      if (observer && document.body) observer.observe(document.body, { childList: true, subtree: true });
    }
  }
  function schedule() {
    if (timer) return;
    timer = setTimeout(function () { timer = null; run(); }, 120);
  }

  function start() {
    run();
    [400, 1200, 2500, 4000].forEach(function (ms) { setTimeout(run, ms); });
    if (window.MutationObserver) {
      observer = new MutationObserver(schedule);
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
