import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <Wrapper>
      <Title>River</Title>
      <Link to="/" replace>
        <LoginButton>Login</LoginButton>
      </Link>
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1``;

const LoginButton = styled.button`
  padding: 10px 20px;
`;
