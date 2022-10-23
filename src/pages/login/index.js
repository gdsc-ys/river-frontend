import styled from 'styled-components';

import GithubLogo from '@assets/GitHub-Mark-32px.png';
import { absCenter, flexCenter, fullscreen } from '@styles/layout';

const LoginPage = () => {
  const handleLoginClick = () => {
    //TODO: Change me to Auth
    console.log('Hi!');
  };

  return (
    <Container>
      <Wrapper>
        <Title>MLRiver</Title>
        <a href="/">
          <LoginButton onClick={handleLoginClick}>
            <img src={GithubLogo} width="30" height="30" alt="GithubLogo" />
            Sign In With Github
          </LoginButton>
        </a>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  ${fullscreen};
`;

const Wrapper = styled.main`
  ${absCenter};
  ${flexCenter({ horizontal: false })};
  width: 400px;
  padding: 20px;

  background-color: #fafafa;
  border-radius: 20px;

  a {
    text-decoration: none;
  }
`;

const Title = styled.h1`
  font-size: 36px;
`;

const LoginButton = styled.button`
  ${flexCenter}
  gap: 15px;
  height: fit-content;

  margin: 10px;
  padding: 10px 30px;

  color: black;
  background-color: #ffffff;
  cursor: pointer;
  text-decoration: none;

  font-size: 20px;
  font-weight: 600;

  border: 0.5px solid #7e7d7d;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,
    rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;

  transition: box-shadow 0.15s ease-in-out 0s;

  &:active {
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
      rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  }
`;
