/* ===================================================================
   SYNCHO AI ACADEMY — Checkout behaviour
   Paste into:  Theme Settings → Custom JS
   =================================================================== */

/* 1) Brandmark — replace the logo image with the Syncho.ai wordmark */
document.fonts.ready.then(function () {
  var logo = document.querySelector('.logo');
  if (logo && !logo.dataset.synchoDone) {
    logo.dataset.synchoDone = '1';
    logo.style.textDecoration = 'none';
    logo.innerHTML =
      '<div style="display:flex;align-items:center;gap:10px;">' +
        '<div class="syncho-logo-icon" style="width:40px;height:40px;background:oklch(68% .19 35);border:2.5px solid oklch(22% .05 260);border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 0 0 oklch(22% .05 260);transition:transform .2s;">' +
          '<span style="font-family:Fredoka,sans-serif;font-size:20px;font-weight:700;color:oklch(99% .01 95);line-height:1;">S</span>' +
        '</div>' +
        '<span style="font-family:Fredoka,sans-serif;font-size:20px;font-weight:700;color:oklch(22% .05 260);letter-spacing:-.01em;">Syncho<span style="color:oklch(68% .19 35);"> Academy</span></span>' +
      '</div>';
    var ic = logo.querySelector('.syncho-logo-icon');
    logo.addEventListener('mouseenter', function () { ic.style.transform = 'rotate(-6deg)'; });
    logo.addEventListener('mouseleave', function () { ic.style.transform = 'rotate(0)'; });
  }
});

/* 2) Left marketing column — homepage-matched copy */
(function () {
  function fill() {
    var block = document.querySelector('#block-1746107473790 .block');
    if (!block || block.dataset.synchoDone) return;
    block.dataset.synchoDone = '1';
    block.innerHTML =
      '<span class="syncho-pill">✨ Ages 9–14 · No experience needed</span>' +
      '<h2 style="font-size:2rem;line-height:1.1;margin:18px 0 0;">Your child learns to code — with <span class="syncho-hl">AI as their co-pilot.</span></h2>' +
      '<p style="color:var(--s-muted);font-size:1.05rem;line-height:1.6;margin:14px 0 0;">Real coding skills and real websites they build themselves, with step-by-step guidance. Beginner-friendly, fun, and designed for just <strong style="color:var(--s-fg);">1–2 hours a week.</strong></p>' +
      '<div style="display:flex;align-items:center;gap:10px;margin:18px 0 0;flex-wrap:wrap;"><span class="syncho-stars">★★★★★</span> <strong>4.9</strong> <span style="color:var(--s-muted);font-size:14px;">from 1,200+ parents · 3,400+ kids building</span></div>' +
      '<h3 style="font-size:.95rem;text-transform:uppercase;letter-spacing:.04em;margin:26px 0 14px;">Here’s what your child gets</h3>' +
      '<ul class="syncho-check">' +
        '<li><span class="ico">💻</span><div><strong>Coding fundamentals</strong><br><span style="color:var(--s-muted);font-size:14px;">HTML, CSS &amp; intro JavaScript — the real thing</span></div></li>' +
        '<li><span class="ico">🤖</span><div><strong>An AI tutor that explains in plain English</strong><br><span style="color:var(--s-muted);font-size:14px;">Patient, age-safe help whenever they’re stuck</span></div></li>' +
        '<li><span class="ico">🧩</span><div><strong>5 levels of hands-on learning</strong><br><span style="color:var(--s-muted);font-size:14px;">From first website to their own AI app</span></div></li>' +
        '<li><span class="ico">🚀</span><div><strong>5 real projects they can show off</strong><br><span style="color:var(--s-muted);font-size:14px;">Published online — shareable the same week</span></div></li>' +
        '<li><span class="ico">👩‍🏫</span><div><strong>Live weekly mentor office hours</strong><br><span style="color:var(--s-muted);font-size:14px;">Vetted, group-only Zoom sessions</span></div></li>' +
        '<li><span class="ico">❤️</span><div><strong>Lifetime access + certificate</strong><br><span style="color:var(--s-muted);font-size:14px;">Keep every lesson, even after you cancel</span></div></li>' +
      '</ul>' +
      '<div class="syncho-quote"><div class="syncho-stars">★★★★★</div><p style="font-weight:600;font-size:16px;line-height:1.4;margin:8px 0 0;">“My 11-year-old built her own website in week 2 and showed the whole class. I’ve never seen her this proud of anything she’s made.”</p><div style="margin-top:12px;font-size:13px;"><strong>Sarah M.</strong> · <span style="color:var(--s-muted);">Mom of Priya, 11</span></div></div>' +
      '<div class="syncho-trust"><div>🛡️<br><strong>30-day</strong><br><span style="color:var(--s-muted);">guarantee</span></div><div>✕<br><strong>Cancel</strong><br><span style="color:var(--s-muted);">anytime</span></div><div>🔒<br><strong>Secure</strong><br><span style="color:var(--s-muted);">checkout</span></div></div>';
  }
  if (document.readyState !== 'loading') fill();
  document.addEventListener('DOMContentLoaded', fill);
})();

/* 3) Checkout injections — proof strip, guarantee, trust row.
      The checkout mounts via React, so retry + observe DOM changes. */
var synchoObserver = null;

/* Every operation below is ADDITIVE and GUARDED — it only acts when its target
   is missing, and never re-writes an element it already created. That, plus
   disconnecting the observer while we mutate, is what prevents the infinite
   loop that was hanging the page. */
function synchoApply() {
  // Proof strip under the price
  var price = document.querySelector('.embedded-checkout-price-display');
  if (price && !price.querySelector('.syncho-proof')) {
    var p = document.createElement('div');
    p.className = 'syncho-proof';
    p.innerHTML = '<span class="syncho-stars">★★★★★</span> 4.9 · Loved by 1,200+ parents <span style="opacity:.4">·</span> 🔥 3,400+ kids building';
    price.appendChild(p);
  }
  // Guarantee + trust row near the pay button
  var cta = document.querySelector('.embedded-checkout__cta');
  if (cta && !cta.querySelector('.syncho-guarantee')) {
    var g = document.createElement('div');
    g.className = 'syncho-guarantee';
    g.innerHTML = '<span style="font-size:20px;line-height:1;flex-shrink:0;">🛡️</span><div><div style="font-family:Fredoka,sans-serif;font-weight:700;font-size:14px;margin-bottom:2px;">30-day money-back guarantee</div><div style="font-size:13px;line-height:1.4;">If your child doesn’t love it, we refund every penny. No questions, no hassle.</div></div>';
    cta.insertBefore(g, cta.firstChild);
  }
  if (cta && !cta.querySelector('.syncho-row')) {
    var r = document.createElement('div');
    r.className = 'syncho-row';
    r.innerHTML = '<span>🔒 Secure &amp; encrypted</span><span>🛡️ 30-day guarantee</span><span>✕ Cancel anytime</span>';
    cta.appendChild(r);
  }

  // Number ONLY Contact + Payment (skip Summary). step counts every
  // non-summary legend so positions stay correct; we only INSERT when the
  // badge is missing (never rewrite — that's what caused the loop).
  var legends = [].slice.call(document.querySelectorAll('.embedded-checkout__legend'));
  var step = 0;
  legends.forEach(function (lg) {
    if (/summary/i.test(lg.textContent)) return;
    step++;
    if (lg.querySelector('.syncho-num')) return;
    var badge = document.createElement('span');
    badge.className = 'syncho-num';
    badge.textContent = step;
    lg.insertBefore(badge, lg.firstChild);
  });

  // CTA label: "Pay $1.99 USD" -> "Start my $1.99 trial" (text-only, once).
  var payBtn = document.querySelector('.embedded-checkout__cta button, .embedded-checkout button.sage-btn--primary, [class*=embedded-checkout] button[type=submit]');
  if (payBtn && payBtn.getAttribute('data-syncho-btn') !== '1') {
    var walker = document.createTreeWalker(payBtn, NodeFilter.SHOW_TEXT, null);
    var node;
    while ((node = walker.nextNode())) {
      if (/pay\s*\$/i.test(node.nodeValue)) {
        var pr = (node.nodeValue.match(/\$[\d.,]+/) || ['$1.99'])[0];
        node.nodeValue = 'Start my ' + pr + ' trial';
        payBtn.setAttribute('data-syncho-btn', '1');
        break;
      }
    }
  }
}

/* Run guarded by disconnect/reconnect so our OWN DOM writes can never
   re-trigger the observer. Wrapped in try/catch so one error can't wedge
   the page. */
function synchoRun() {
  try {
    if (synchoObserver) synchoObserver.disconnect();
    synchoApply();
  } catch (e) {
    /* swallow — never let the checkout hang */
  } finally {
    if (synchoObserver) synchoObserver.observe(document.body, { childList: true, subtree: true });
  }
}

// Debounce so Kajabi's rapid React re-renders don't thrash.
var synchoTimer = null;
function synchoSchedule() {
  if (synchoTimer) return;
  synchoTimer = setTimeout(function () { synchoTimer = null; synchoRun(); }, 120);
}

[400, 1200, 2500, 4000].forEach(function (ms) { setTimeout(synchoRun, ms); });
if (window.MutationObserver) {
  synchoObserver = new MutationObserver(synchoSchedule);
  synchoObserver.observe(document.body, { childList: true, subtree: true });
}
