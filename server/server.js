const express = require('express')
const passport = require("passport")
const Strategy = require("passport-github").Strategy
const cors = require('cors')
const db = require('./config/db.js')
const app = express()
const port = 4000

// CORS 설정
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// Configure the GitHub strategy for use by Passport.
passport.use(
  new Strategy(
    {
      clientID: process.env["GITHUB_CLIENT_ID"] || "your_github_client_id",
      clientSecret: process.env["GITHUB_CLIENT_SECRET"] || "your_github_client_secret",
      callbackURL: "http://localhost:4000/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log("GitHub profile:", profile);
      // 사용자 정보를 데이터베이스에 저장하거나 조회하는 로직
      return cb(null, profile);
    }
  )
);

// Configure Passport authenticated session persistence.
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require("morgan")("combined"));
app.use(require("cookie-parser")());
app.use(require("body-parser").json());
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "junglebook_secret_key",
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: false, // 개발환경에서는 false
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000 // 24시간
    }
  })
);

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

// API Routes
app.get('/auth/status', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({
      isAuthenticated: true,
      displayName: req.user.displayName || req.user.username,
      username: req.user.username,
      avatar: req.user.photos?.[0]?.value
    });
  } else {
    res.status(401).json({ isAuthenticated: false });
  }
});

app.post('/auth/logout', (req, res) => {
  // 세션 삭제
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: '로그아웃 실패' });
    }
    res.json({ message: '로그아웃 성공' });
  });
});

// GitHub OAuth Routes
app.get("/auth/github", passport.authenticate("github"));

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "http://localhost:3000/" }),
  function (req, res) {
    res.redirect("http://localhost:3000/");
  }
);

// 예약 관련 API
app.get('/api/reservations', (req, res) => {
  // 예약 목록 조회 로직
  res.json([]);
});

app.post('/api/reservations', (req, res) => {
  // 예약 생성 로직
  res.json({ message: '예약이 완료되었습니다.' });
});

// 기존 API
app.get('/users', (req, res) => { 
    db.query('select * from people', (err,data) => {
        res.send(data)
    })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});