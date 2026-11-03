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
  index.html              인트로 (처음 방문할 때만 재생 → 4.4초 뒤 홈으로)
                          다시 보고 싶으면 index.html?intro
  home.html               홈 (데스크톱 1440px)
  m.html                  홈 (모바일 390px) — 폰으로 home.html에 들어오면 자동으로 이동
  yakfit.html             TRACK 01 YAKFIT
  withus.html             TRACK 02 WithUs
  tipsy-zest.html         TRACK 03 TIPSY ZEST
  milk-first-club.html    TRACK 04 Milk First Club

  css/페이지이름.css       각 페이지 스타일 (캔버스 디자인 그대로)
  js/carousel.js          YAKFIT 주요 화면 슬라이드 (←/→ 키도 동작)
  js/menu.js              모바일 햄버거 메뉴
  images/                 이미지 (지금은 전부 예시 목업)
  files/                  이력서 PDF 넣는 곳


■ 사이즈
  데스크톱 페이지는 1440px 고정이에요. 더 넓은 화면에서는 가운데 정렬되고,
  폰에서는 전체가 축소돼서 보여요. 홈만 모바일 전용 화면(m.html)이 따로 있어요.


■ 꼭 바꿔야 할 것
  1) 이미지 — YAKFIT · WithUs · 홈 썸네일(01·02)은 실제 화면 캡처(JPG)로 교체됐어요.
     TIPSY ZEST · Milk First Club의 SVG는 아직 예시 목업이니 실제 작업 이미지로 교체하세요.
     · 같은 이름으로 덮어쓰기: 파일 이름을 똑같이 맞추면 HTML 수정 없이 바뀌어요.
     · PNG/JPG로 바꾸기: HTML에서 src="images/....svg" 의 확장자도 같이 고치세요.
     · 이미지를 바꾸면 alt="예시 목업 이미지" 도 실제 설명으로 바꿔 주세요.
       (예: alt="YAKFIT 최저가 약국 목록 화면")
     · 홈 썸네일은 라임 듀오톤 필터가 자동으로 씌워져요. 원본 색은 마우스를 올리면 보여요.

  2) 이력서 — files/resume.pdf 파일을 넣으면 "이력서 PDF" 버튼이 다운로드돼요.

  3) 링크 — YAKFIT은 GitHub 프론트·백엔드 저장소, WithUs는 팀 저장소로 연결돼 있어요.
     실제 배포 주소나 시연 영상이 생기면 그 주소로 바꿔 주세요.

  4) [ ] 로 표시된 빈칸 — 기간, 클릭 수, DB 이름, 연도 등은 실제 내용으로 채우세요.


■ 이미지 파일 → 쓰이는 페이지
  images/milk-first-club/milkfirst-01.svg       → milk-first-club.html
  images/milk-first-club/milkfirst-02.svg       → milk-first-club.html
  images/milk-first-club/milkfirst-03.svg       → milk-first-club.html
  images/milk-first-club/milkfirst-04.svg       → milk-first-club.html
  images/milk-first-club/milkfirst-05.svg       → milk-first-club.html
  images/thumb/main-01.jpg                      → home.html, m.html
  images/thumb/main-02.jpg                      → home.html, m.html
  images/thumb/main-03.svg                      → home.html, m.html
  images/thumb/main-07.svg                      → home.html, m.html
  images/tipsy-zest/branding-01.svg             → tipsy-zest.html
  images/tipsy-zest/branding-02.svg             → tipsy-zest.html
  images/tipsy-zest/branding-03.svg             → tipsy-zest.html
  images/tipsy-zest/branding-04.svg             → tipsy-zest.html
  images/tipsy-zest/branding-05.svg             → tipsy-zest.html
  images/tipsy-zest/branding-06.svg             → tipsy-zest.html
  images/tipsy-zest/branding-07.svg             → tipsy-zest.html
  images/tipsy-zest/branding-08.svg             → tipsy-zest.html
  images/withus/analytics.jpg                   → withus.html
  images/withus/dashboard.jpg                   → withus.html
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
  images/yakfit/screen-01.jpg                   → yakfit.html
  images/yakfit/screen-02.jpg                   → yakfit.html
  images/yakfit/screen-03.jpg                   → yakfit.html
  images/yakfit/screen-04.jpg                   → yakfit.html
  images/yakfit/screen-05.jpg                   → yakfit.html


■ GitHub Pages로 무료 배포
  1) GitHub에 새 저장소 만들기 (예: portfolio)
  2) 이 폴더 안의 파일을 전부 올리기 (index.html이 맨 위에 있어야 해요)
  3) 저장소 Settings → Pages → Branch: main / root → Save
  4) 몇 분 뒤 https://jangahjin.github.io/portfolio/ 에서 열려요


■ 폰트
  Google Fonts에서 불러와요 (Big Shoulders Display, IBM Plex Sans KR, IBM Plex Mono,
  Milk First Club 페이지만 Great Vibes · Cormorant SC · Gowun Dodum 추가).
  인터넷이 연결돼 있어야 디자인 그대로 보여요.
