import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fullscreen } from '../../styles/layout';

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
  ${fullscreen}

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1``;

const LoginButton = styled.button`
  padding: 10px 20px;
`;
