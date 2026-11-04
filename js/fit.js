// 1440px보다 좁은 노트북·태블릿 화면: 가로 스크롤 대신 페이지 전체를 폭에 맞게 비율대로 줄인다.
// 넓은 화면에서 키우지는 않는다(1440 고정 유지). 폰(화면 폭 768 미만)은 별도 레이아웃이라 제외.
(function () {
  var root = document.documentElement;
  function fit() {
    root.style.zoom = '';
    var w = root.clientWidth || window.innerWidth;   // 세로 스크롤바를 뺀 실제 보이는 폭
    root.style.zoom = (screen.width >= 768 && w < 1440) ? String(w / 1440) : '';
  }
  fit();
  document.addEventListener('DOMContentLoaded', fit);
  window.addEventListener('resize', fit);
})();
