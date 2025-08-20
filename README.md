# 정글북 예약 시스템 🏢

이미지와 동일한 다크 테마의 예약 시스템을 클론코딩한 프로젝트입니다.

## 🎯 주요 기능

- **다크 테마 UI**: 이미지와 동일한 디자인
- **GitHub OAuth 로그인**: GitHub 계정으로 로그인
- **시간대별 예약**: 오전 10시부터 오후 3시까지 1시간 단위
- **사용자 프로필**: 로그인한 사용자 정보 표시
- **방 정보**: 303 코칭실 정보 표시

## 🏗️ 프로젝트 구조

```
clone_junglebook-/
├── client/          # React 프론트엔드
│   ├── src/
│   │   ├── App.js   # 메인 애플리케이션
│   │   ├── components/
│   │   │   └── Login.js  # 로그인 컴포넌트
│   │   └── ...
│   └── package.json
└── server/          # Express 백엔드
    ├── server.js    # 메인 서버 파일
    ├── config/
    │   └── db.js    # 데이터베이스 설정
    └── package.json
```

## 🚀 실행 방법

### 1. GitHub OAuth 설정

1. GitHub에서 OAuth 앱 생성:
   - GitHub Settings > Developer settings > OAuth Apps > New OAuth App
   - Application name: `Junglebook Reservation`
   - Homepage URL: `http://localhost:3000`
   - Authorization callback URL: `http://localhost:4000/auth/github/callback`

2. 환경 변수 설정:
   ```bash
   export GITHUB_CLIENT_ID=your_client_id_here
   export GITHUB_CLIENT_SECRET=your_client_secret_here
   ```

### 2. 서버 실행

```bash
cd server
npm install
node server.js
```

서버는 `http://localhost:4000`에서 실행됩니다.

### 3. 클라이언트 실행

```bash
cd client
npm install
npm start
```

클라이언트는 `http://localhost:3000`에서 실행됩니다.

## 🎨 UI 구성 요소

### 사용자 프로필
- 🐰 아바타 (토끼 이모지)
- 사용자 이름: "고민지"
- 설명: "크래프톤 정글 9기"

### 방 정보
- 📦 방 아이콘
- 방 이름: "303 코칭실"

### 예약 시간대
- 오전 10:00 - 오전 11:00
- 오전 11:00 - 오후 12:00
- 오후 12:00 - 오후 1:00
- 오후 1:00 - 오후 2:00
- 오후 2:00 - 오후 3:00
- 오후 3:00 - 오후 4:00

각 시간대에는 "예약" 버튼이 있으며, 현재는 "이미 지난 시간이에요" 상태로 표시됩니다.

## 🛠️ 기술 스택

### 프론트엔드
- React 19
- React Router DOM
- Styled Components
- Axios

### 백엔드
- Express.js
- Passport.js (GitHub OAuth)
- Express Session
- CORS

## 📝 API 엔드포인트

- `GET /auth/status` - 로그인 상태 확인
- `POST /auth/logout` - 로그아웃
- `GET /auth/github` - GitHub OAuth 로그인
- `GET /auth/github/callback` - OAuth 콜백
- `GET /api/reservations` - 예약 목록
- `POST /api/reservations` - 예약 생성

## 🔧 개발 환경

- Node.js
- npm
- MySQL (데이터베이스)

## 📱 브라우저 지원

- Chrome (권장)
- Firefox
- Safari
- Edge
