import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1a1a1a;
  color: white;
`;

const LoginCard = styled.div`
  background-color: #2a2a2a;
  border-radius: 16px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 600;
`;

const Subtitle = styled.p`
  margin-bottom: 40px;
  color: #888;
  font-size: 16px;
`;

const GitHubButton = styled.button`
  background-color: #24292e;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2f363d;
  }
`;

const GitHubIcon = styled.span`
  font-size: 20px;
`;

function Login() {
  const handleGitHubLogin = () => {
    // GitHub OAuth URL로 리다이렉트
    window.location.href = 'http://localhost:4000/auth/github';
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Title>정글북 예약 시스템</Title>
        <Subtitle>GitHub 계정으로 로그인하여 예약 서비스를 이용하세요</Subtitle>
        <GitHubButton onClick={handleGitHubLogin}>
          <GitHubIcon>🐙</GitHubIcon>
          GitHub로 로그인
        </GitHubButton>
      </LoginCard>
    </LoginContainer>
  );
}

export default Login;
