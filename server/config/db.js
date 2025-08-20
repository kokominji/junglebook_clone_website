const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',       // DB 서버 주소
  user: 'admin',            // DB 사용자 계정
  password: '12340',    // DB 비밀번호
  database: 'junglebook_db', // 사용할 DB 이름
  port: 3306,              // MySQL 기본 포트
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// 연결 테스트
pool.getConnection()
  .then(connection => {
    console.log('Connected to the database');
    connection.release();
  })
  .catch(err => {
    console.error('Error connecting to the database: ', err);
  });

module.exports = pool;
