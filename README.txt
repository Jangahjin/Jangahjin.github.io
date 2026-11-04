장아진 포트폴리오 — AH JIN SESSION 2027
========================================

캔버스 디자인을 그대로 옮긴 HTML · CSS · JS 사이트예요.
빌드 도구 없이 VS Code로 열고 바로 수정할 수 있어요.


■ 바로 보기
  1) 폴더를 VS Code로 열기
  2) 확장 프로그램 "Live Server" 설치
  3) index.html 우클릭 → Open with Live Server
  (파일을 더블클릭해도 열리지만, Live Server로 보는 게 실제 사이트와 같아요.)


■ 페이지 구성
  index.html              인트로 (처음 방문할 때만 재생 → 4.4초 뒤 홈으로) — 구겨진 종이 배경
                          다시 보고 싶으면 index.html?intro
  home.html               홈 (데스크톱 1440px) — 프로필 · 목차 · 연락처, 인트로와 같은 종이 디자인
  m.html                  홈 (모바일 390px) — 폰으로 home.html에 들어오면 자동으로 이동
  yakfit.html             01 YAKFIT — 발표 자료(우리동네약값) 디자인 (흰 바탕 · 청록 · 픽셀 장식)
  withus.html             02 WITHUS — 발표 자료(WithUs) 디자인 (코발트 블루 · 네온 라임)

  css/home.css · m.css     홈 스타일 / css/project.css  두 상세 페이지 공통 스타일(색만 프로젝트별)
  js/reveal.js            상세 페이지 스크롤 등장 모션 · 수치 카운트업
  images/                 이미지 (YAKFIT · WithUs 실제 화면 캡처, paper.jpg = 종이 질감 배경)
  files/                  이력서 PDF 넣는 곳


■ 사이즈
  데스크톱 페이지는 1440px 고정이에요. 더 넓은 화면에서는 가운데 정렬되고,
  폰에서는 전체가 축소돼서 보여요. 홈만 모바일 전용 화면(m.html)이 따로 있어요.


■ 꼭 바꿔야 할 것
  1) 이미지 — YAKFIT · WithUs · 홈 썸네일은 실제 화면 캡처(JPG)예요.
     · 같은 이름으로 덮어쓰면 HTML 수정 없이 바뀌어요.
     · 이미지를 바꾸면 alt 설명도 실제 내용으로 바꿔 주세요.
     · 홈 목차 썸네일은 흑백으로 보이고, 마우스를 올리면 원본 색이 보여요.

  2) 이력서 — 이력서 버튼은 지금 없어요. 필요하면 files/에 PDF를 넣고 홈에 링크를 추가하세요.

  3) 링크 — YAKFIT은 GitHub 프론트·백엔드 저장소, WithUs는 라이브 사이트(withus2.kro.kr)와
     팀 저장소로 연결돼 있어요.

  4) [ ] 로 표시된 빈칸 — 기간, 클릭 수, DB 이름, 연도 등은 실제 내용으로 채우세요.


■ 이미지 파일 → 쓰이는 페이지
  images/thumb/main-01.jpg                      → home.html, m.html
  images/thumb/main-02.jpg                      → home.html, m.html
  images/withus/analytics.jpg                   → withus.html
  images/withus/dashboard.jpg                   → withus.html
  images/withus/m-coupon.jpg · m-unsubscribe.jpg → withus.html (휴대폰 목업)
  images/withus/project-01.jpg                  → withus.html
  images/withus/project-02.jpg                  → withus.html
  images/withus/project-03.jpg                  → withus.html
  images/withus/project-04.jpg                  → withus.html
  images/withus/project-05.jpg                  → withus.html
  images/withus/public.jpg                      → withus.html
  images/withus/roles.jpg                       → withus.html
  images/yakfit/landing-01.jpg                  → yakfit.html
  images/yakfit/landing-02.jpg                  → yakfit.html
  images/yakfit/landing-03.jpg                  → yakfit.html
  images/yakfit/m-home.jpg · m-search.jpg      → yakfit.html (실제 모바일 390px 캡처)
  images/yakfit/m-pharmacy.jpg                  → (예비) 모바일 약국 상세
  images/yakfit/screen-01.jpg                   → yakfit.html
  images/yakfit/screen-03.jpg                   → yakfit.html
  images/yakfit/screen-04.jpg                   → yakfit.html
  images/yakfit/screen-05.jpg                   → yakfit.html


■ GitHub Pages로 무료 배포
  1) GitHub에 새 저장소 만들기 (예: portfolio)
  2) 이 폴더 안의 파일을 전부 올리기 (index.html이 맨 위에 있어야 해요)
  3) 저장소 Settings → Pages → Branch: main / root → Save
  4) 몇 분 뒤 https://jangahjin.github.io/portfolio/ 에서 열려요


■ 폰트
  인트로·홈은 Google Fonts(Big Shoulders Display, IBM Plex Sans KR, IBM Plex Mono),
  YAKFIT은 Gothic A1, WITHUS는 Pretendard(jsDelivr)를 불러와요.
  인터넷이 연결돼 있어야 디자인 그대로 보여요.
