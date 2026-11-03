// 모바일 햄버거 메뉴
(function () {
  var btn = document.getElementById('menuBtn');
  var drawer = document.getElementById('drawer');
  if (!btn || !drawer) return;
  function set(open) {
    drawer.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  }
  btn.addEventListener('click', function () { set(drawer.hidden); });
  drawer.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
})();
