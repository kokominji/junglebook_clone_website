-- GitHub OAuth 사용자 정보 테이블
CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    github_id VARCHAR(20) UNIQUE NOT NULL,
    user_name VARCHAR(20) NOT NULL,
    display_name VARCHAR(20) NOT NULL,
    profile_url TEXT,
    access_token TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 예약 테이블 (추후 사용)
CREATE TABLE IF NOT EXISTS reservations (
    res_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    slot_time DATETIME NOT NULL,
    slot_status ENUM('available', 'reserved', 'cancelled') NOT NULL DEFAULT 'available',
    button_status BOOLEAN NOT NULL DEFAULT TRUE,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- 샘플 데이터 (선택사항)
-- INSERT INTO users (github_id, username, name, email, avatar_url, bio) VALUES 
-- ('123456', 'testuser', 'Test User', 'test@example.com', 'https://avatars.githubusercontent.com/u/123456?v=4', 'Test bio');
