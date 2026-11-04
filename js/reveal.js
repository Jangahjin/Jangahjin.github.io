// 스크롤 등장 모션 + 수치 카운트업 (움직임 줄이기 설정이면 바로 보여 준다)
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var groups = ['.sec > .sh', '.sec > h2', '.sec > .lead', '.sec > .flow', '.devices', '.nums > div', '.screens > figure', '.parts > .card', '.pager > a'];
  var targets = [];
  groups.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el, i) {
      el.classList.add('rv');
      // 같은 묶음 안에서는 순서대로 조금씩 늦게
      if (/nums|screens|parts|pager/.test(sel)) el.style.setProperty('--d', (i % 6) * 90 + 'ms');
      targets.push(el);
    });
  });

  // 수치 카운트업: 첫 텍스트의 숫자만 0부터 올린다 (예: 87,614 / 22)
  function countUp(b) {
    var node = b.firstChild;
    if (!node || node.nodeType !== 3) return;
    var raw = node.textContent.trim();
    var target = parseInt(raw.replace(/,/g, ''), 10);
    if (isNaN(target)) return;
    var comma = raw.indexOf(',') > -1, start = null, dur = 900;
    function fmt(n) { return comma ? n.toLocaleString('en-US') : String(n); }
    function step(t) {
      if (!start) start = t;
      var p = Math.min((t - start) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      node.textContent = fmt(Math.round(target * e));
      if (p < 1) requestAnimationFrame(step);
    }
    node.textContent = fmt(0);
    requestAnimationFrame(step);
  }

  if (reduce || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      var b = en.target.matches('.nums > div') && en.target.querySelector('b');
      if (b) countUp(b);
      io.unobserve(en.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(function (el) { io.observe(el); });
})();
