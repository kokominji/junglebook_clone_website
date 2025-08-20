const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

async function setupDatabase() {
  // 데이터베이스 연결 설정
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: '12340',
    database: 'junglebook_db',
    port: 3306,
  });

  try {
    console.log('데이터베이스에 연결되었습니다.');

    // SQL 파일 읽기
    const sqlFilePath = path.join(__dirname, 'database.sql');
    const sqlContent = fs.readFileSync(sqlFilePath, 'utf8');

    // SQL 문을 세미콜론으로 분리
    const sqlStatements = sqlContent
      .split(';')
      .map(statement => statement.trim())
      .filter(statement => statement.length > 0 && !statement.startsWith('--'));

    // 각 SQL 문 실행
    for (const statement of sqlStatements) {
      if (statement.trim()) {
        console.log('실행 중:', statement.substring(0, 50) + '...');
        await connection.execute(statement);
      }
    }

    console.log('✅ 데이터베이스 테이블이 성공적으로 생성되었습니다!');
    
    // 테이블 확인
    const [tables] = await connection.execute('SHOW TABLES');
    console.log('생성된 테이블:', tables.map(table => Object.values(table)[0]));

  } catch (error) {
    console.error('❌ 데이터베이스 설정 중 오류 발생:', error);
  } finally {
    await connection.end();
    console.log('데이터베이스 연결이 종료되었습니다.');
  }
}

// 스크립트 실행
setupDatabase();
