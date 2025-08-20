# 정글북 예약 시스템 서버

## 설정 방법

### 1. GitHub OAuth 앱 설정

1. GitHub에서 새로운 OAuth 앱을 생성합니다:
   - GitHub Settings > Developer settings > OAuth Apps > New OAuth App
   - Application name: `Junglebook Reservation`
   - Homepage URL: `http://localhost:3000`
   - Authorization callback URL: `http://localhost:4000/auth/github/callback`

2. 생성된 Client ID와 Client Secret을 환경 변수로 설정:
   ```bash
   export GITHUB_CLIENT_ID=your_client_id_here
   export GITHUB_CLIENT_SECRET=your_client_secret_here
   ```

### 2. 의존성 설치

```bash
npm install
```

### 3. 서버 실행

```bash
node server.js
```

서버는 `http://localhost:4000`에서 실행됩니다.

## API 엔드포인트

- `GET /auth/status` - 로그인 상태 확인
- `POST /auth/logout` - 로그아웃
- `GET /auth/github` - GitHub OAuth 로그인 시작
- `GET /auth/github/callback` - GitHub OAuth 콜백
- `GET /api/reservations` - 예약 목록 조회
- `POST /api/reservations` - 예약 생성
