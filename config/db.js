const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',       // DB 서버 주소
  user: 'root',            // DB 사용자 계정
  password: '1234',    // DB 비밀번호
  database: 'your_database', // 사용할 DB 이름
  port: 3306,              // MySQL 기본 포트
});

module.exports = pool;
