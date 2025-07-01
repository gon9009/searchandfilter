## 프로젝트 소개

**EmojiHub는 원하는 이모지를 쉽고 빠르게 찾고, 모아두고, 복사할 수 있는 웹 애플리케이션입니다.**  
일상에서 자주 쓰는 이모지를 더 편리하게 관리하고 활용할 수 있도록 만든 도구이며,  
검색, 분류, 저장, 복사,좋아요까지 — 필요한 기능만 직관적으로 담았습니다.

## 개발 기간과 인원

```
1인
12/22 - 1/21
```

## 배포 URL

https://emoji-hub.vercel.app

## 기능

```
- 전체 이모지 목록 불러오기
- 실시간 검색 (디바운싱 적용)
- 그룹(카테고리)별 이모지 필터링
- 좋아요 등록 및 해제 (localStorage 저장)
- 이모지 누적 후 복사/초기화 기능 포함된 클립보드 패널
- 클라이언트 사이드 페이지네이션

```

## 사용기술과 그 이유

```
- React 18
- Zustand (상태 관리 및 localStorage persist)
- React Query (데이터 패칭 및 캐싱)
- React Router v6
- SCSS (컴포넌트 기반 스타일링, 반응형 설계)
```

#### React 18

- 빠른 렌더링과 컴포넌트 기반 UI 구축을 위해 최신 React 버전을 사용했습니다.

#### Zustand

- 전역 상태(즐겨찾기, 클립보드 등)를 간단하게 관리하며, `persist` 미들웨어로 localStorage에 상태를 저장하여 새로고침 후에도 데이터가 유지됩니다

#### React Query

- API 데이터 패칭과 캐싱, 로딩/에러 상태 관리를 일관되게 처리하기 위해 사용했습니다

#### React Router

- 페이지 전환과 URL 파라미터 관리, 특히 쿼리스트링을 이용한 페이지네이션을 구현하기 위해 활용했습니다

#### SCSS

- 모듈화된 스타일 관리와 반응형 레이아웃 구현을 위해 SCSS를 도입했습니다

## 프로젝트 구조

```
searchandfilter/
├── public/
│   └── favicon.ico
├── src/
│   ├── App.jsx
│   ├── index.js
│   ├── Pages/                  # 라우트별 페이지
│   │   ├── Group.jsx
│   │   ├── Home.jsx
│   │   ├── Liked.jsx
│   │   └── Search.jsx
│   ├── components/
│   │   ├── Layout/             # 공통 레이아웃 구성요소
│   │   │   ├── ClipboardPanel.jsx
│   │   │   ├── EmojiPageLayout.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── MobileSidebar.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── common/             # 아이콘, 로딩 스피너 등
│   │   │   ├── EmptyState.jsx
│   │   │   ├── Icons.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── LoadingSpinner.scss
│   │   └── emoji/              # 이모지 카드 관련 컴포넌트
│   │       ├── EmojiCard.jsx
│   │       ├── EmojiCardList.jsx
│   │       └── Pagination.jsx
│   ├── assets/
│   │   └── logo.png
│   ├── hooks/                  # 커스텀 훅
│   │   ├── useCurrentPage.jsx
│   │   ├── useDebounce.jsx
│   │   └── usePagination.jsx
│   ├── lib/                    # API 호출 및 React Query 래퍼
│   │   ├── api.js
│   │   └── queries.js
│   ├── store/                  # Zustand 스토어
│   │   ├── useClipboardStore.js
│   │   └── useEmojiStore.js
│   ├── utils/
│   │   └── utils.js
│   └── scss/                   # SCSS 스타일
│       ├── style.scss
│       ├── components/
│       │   ├── _button.scss
│       │   ├── _emoji-card.scss
│       │   ├── _index.scss
│       │   └── _pagination.scss
│       ├── layout/
│       │   ├── _copyAndPaste.scss
│       │   ├── _header.scss
│       │   ├── _sidebar.scss
│       │   └── index.scss
│       ├── global/
│       │   ├── _bolilerplate.scss
│       │   ├── _index.scss
│       │   └── _variables.scss
│       └── util/
│           ├── _breakpoints.scss
│           ├── _functions.scss
│           └── _index.scss
├── package.json
├── package-lock.json
└── README.md
```

## UI

![데스크탑](/docs/EmojiHubDesktop.png)
![모바일](/docs/EmojihubMobile.png)
![검색 시연](/docs/Emojihub%20검색.gif)
![사이드바](/docs/Emojihub%20사이드바.gif)
![좋아요](/docs/Emojihub%20좋아요.gif)
![클립보드복사](/docs/Emojihub%20카피페이스트.gif)
![페이지네이션](/docs/EmojiHub%20페이지네이션.gif)

## 트러블 슈팅

#### 1. URL 기반 페이지네이션 유지

- **문제 상황**  
   페이지 번호를 컴포넌트 상태로만 관리할 경우 새로고침을 하면 해당 값이 초기화되어 항상 첫 페이지로 돌아가는 문제가 있었습니다.
- **해결 방법**  
   `useSearchParams`를 활용해 현재 페이지 값을 URL 쿼리스트링(`?page=x`)으로 저장하도록 `useCurrentPage` 훅을 구현했습니다. 이 훅은 다음과 같이 동작합니다.
  - `currentPage`를 `searchParams.get("page")`로 읽어와, 값이 없으면 1을 기본값으로 사용합니다.
  - `handlePageChange`에서는 페이지 값을 변경할 때 `searchParams.set("page", 페이지)`로 갱신하고, 1페이지일 때는 깔끔한 URL을 위해 `searchParams.delete("page")`로 제거합니다.
  - 이렇게 갱신한 `searchParams`를 `setSearchParams`로 다시 반영하면, 페이지 이동 시 URL에 바로 반영되며 새로고침 후에도 이전 페이지 번호가 유지됩니다.

#### 2. 즐겨찾기(좋아요) 상태 유지

- **문제 상황**  
   사용자가 좋아요를 클릭해도 페이지 이동이나 새로고침을 하면 목록이 초기화되어 경험이 불안정했습니다.
- **해결 방법**  
   상태 관리를 위해 `zustand`를 사용하고, 여기에 `persist` 미들웨어를 적용했습니다.
  - `useEmojiStore`에서 `create(persist(...))` 패턴을 사용하여 `likedEmojis` 배열을 로컬 스토리지에 자동으로 저장하도록 구성했습니다.
  - `toggleLike` 함수가 호출되면 배열을 수정한 뒤 `set`으로 상태를 변경하면, `persist`가 해당 값을 `likedEmojis`라는 key로 로컬 스토리지에 동기화합니다.
  - 앱이 재실행되더라도 `persist`가 로컬 스토리지 값을 읽어와 초기 상태에 반영하므로, 사용자가 표시한 좋아요 목록이 그대로 복원됩니다.

#### 3. 검색 입력 디바운싱 처리

- **문제 상황**  
   검색창에 한 글자씩 입력될 때마다 API 호출이 발생하여 성능이 떨어질 우려가 있었습니다.
- **해결 방법**  
   커스텀 훅 `useDebounce`를 작성하여 입력값 변화를 일정 시간(예: 500ms) 지연시킨 후에만 실제 검색 요청을 보내도록 수정했습니다.
  - `useDebounce`는 내부에서 `setTimeout`을 이용해 일정 시간 후에만 `debouncedValue`를 갱신합니다.
  - `Header` 컴포넌트에서 `useDebounce(query, 500)`를 사용하고, `debouncedQuery` 값이 바뀔 때마다 `useEffect`에서 검색 페이지로 라우팅하고 `search` 쿼리스트링을 업데이트합니다.
  - 따라서 사용자가 입력을 멈춘 뒤 짧은 지연 시간 후에만 API 요청이 발생하여, 불필요한 네트워크 트래픽을 줄이고 응답 속도를 안정적으로 유지할 수 있습니다.
