// YAKFIT 주요 화면 캐러셀 (캔버스 버전과 같은 동작)
(function () {
  var root = document.querySelector('.carousel');
  if (!root) return;
  var slides = root.querySelectorAll('.slide');
  var dots = document.querySelectorAll('.dotb');
  var N = slides.length, idx = 0;

  function render() {
    slides.forEach(function (el, i) {
      var off = i - idx, a = Math.abs(off);
      el.style.transform = 'translateX(' + (off * 360) + 'px) scale(' + (a === 0 ? 1 : 0.8) + ')';
      el.style.opacity = a > 2 ? 0 : a === 0 ? 1 : 0.45;
      el.style.zIndex = 10 - a;
      el.setAttribute('aria-hidden', a === 0 ? 'false' : 'true');
    });
    dots.forEach(function (d, i) {
      d.style.width = i === idx ? '28px' : '8px';
      d.style.background = i === idx ? '#ECEDE4' : '#4A4D3E';
      d.setAttribute('aria-current', i === idx ? 'true' : 'false');
    });
  }
  function go(i) { idx = (i + N) % N; render(); }

  document.querySelector('[data-carousel="prev"]').addEventListener('click', function () { go(idx - 1); });
  document.querySelector('[data-carousel="next"]').addEventListener('click', function () { go(idx + 1); });
  dots.forEach(function (d, i) { d.addEventListener('click', function () { go(i); }); });
  document.addEventListener('keydown', function (e) {
    if (e.target.closest && e.target.closest('input, textarea')) return;
    if (e.key === 'ArrowLeft') go(idx - 1);
    if (e.key === 'ArrowRight') go(idx + 1);
  });
  render();
})();
