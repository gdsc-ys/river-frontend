import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexCenter, fullscreen } from 'styles/layout';

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
  ${fullscreen};
  ${flexCenter({ horizontal: false })};
`;

const Title = styled.h1``;

const LoginButton = styled.button`
  padding: 10px 20px;
`;
