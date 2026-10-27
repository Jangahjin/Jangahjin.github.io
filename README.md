# Ah Jin's Burger · 장아진 포트폴리오 사이트

## 폴더 구조

```
portfolio/   (D:\portfolio)
├─ index.html              메인 (버거 → 프로필 → 프로젝트 → 연락처)
├─ projects/
│  ├─ onion.html           하이볼 브랜드 상세
│  ├─ tomato.html          찻잔 브랜드 상세
│  ├─ cheese.html          WithUs 상세
│  └─ patty.html           약값알림 재디자인 상세
├─ css/style.css           색, 글자 크기, 배치 (메인 + 상세 공통)
├─ js/main.js              버거 라벨, 프로젝트 카드, 복사 버튼
├─ images/
│  ├─ burger.webp          버거 누끼
│  ├─ cola.png             (직접 넣기) 콜라 누끼
│  └─ projects/            (직접 넣기) 프로젝트 이미지
└─ .vscode/                Live Server 추천 설정
```

## VS Code에서 열기

1. **파일 > 폴더 열기** → `D:\portfolio` 폴더 선택
2. 오른쪽 아래 추천 확장 알림 → **Live Server 설치**
3. `index.html` 연 상태에서 오른쪽 아래 **Go Live**
4. 저장할 때마다 브라우저가 자동 새로고침돼요

## 이미지 넣기 (파일 이름만 맞추면 자동으로 보여요)

`images/projects/` 폴더에 아래 이름으로 저장하세요. 없는 이미지는 안내 문구가 대신 보여요.

| 용도 | 파일 이름 | 권장 크기 |
|---|---|---|
| 메인 카드 대표 이미지 | `onion.jpg` `tomato.jpg` `cheese.jpg` `patty.jpg` | 1600 × 1200 |
| 상세 페이지 커버 | `patty-cover.jpg` 처럼 `이름-cover.jpg` | 1920 × 1080 |
| 과정 이미지 | `이름-process-1.jpg`, `이름-process-2.jpg` | 1600 × 1000 |
| 최종 디자인 | `이름-final-1.jpg`, `이름-final-2.jpg` | 1600 × 1000 |

(onion = 하이볼, tomato = 찻잔, cheese = WithUs, patty = 약값알림)

## 콜라 넣기

1. 누끼 딴 콜라 이미지를 `images/cola.png`로 저장
2. `index.html`에서 `cola.png` 검색 → 앞뒤 `<!--` `-->` 지우기
3. 위치·크기는 `css/style.css`의 `.plate .cola` 에서 `left`, `top`, `width` 조절

## 글 고치기

| 고칠 것 | 파일 | 검색할 단어 |
|---|---|---|
| 자기소개, 학력, 교육, 활동, 자격증 | index.html | `about` |
| 연락처 | index.html | `CONTACT` |
| 메인 카드의 프로젝트 이름·설명 | js/main.js | `const L=[` |
| 상세 페이지 내용 | projects/*.html | `[` 로 시작하는 대괄호 문구 |
| 브랜드 색 | css/style.css | `:root` |

상세 페이지의 `[ ]` 대괄호 부분(기간, 개요, 문제, 과정, 결과)은 직접 채워야 하는 자리예요.

## 인터넷에 올리기 (GitHub Pages)

이미 배포되어 있어요.

- 저장소: https://github.com/Jangahjin/Jangahjin.github.io
- 사이트: https://jangahjin.github.io/

수정한 뒤 커밋하고 `main`에 푸시(Sourcetree의 Push)하면 1~2분 뒤 사이트에 반영돼요.
