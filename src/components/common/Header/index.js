import styled from 'styled-components';
import { flexCenter } from '../../../styles/layout';

const Header = () => {
  return (
    <Wrapper>
      <TitleLink href="/">
        <Title>MLRiver</Title>
      </TitleLink>
      {/* TODO: Change Title to favicon! */}
      <LinkWrapper>
        <Extlink
          href="https://github.com/gdsc-ys/river-frontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          MLRiver Github
        </Extlink>
        <Extlink
          href="https://github.com/mlflow/mlflow"
          target="_blank"
          rel="noopener noreferrer"
        >
          MLFlow Github
        </Extlink>
        <Extlink
          href="https://www.mlflow.org/docs/latest/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Docs
        </Extlink>
        <Extlink href="/login">Login</Extlink>
      </LinkWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  ${flexCenter}

  background-color: #000000;
`;

const Title = styled.h1`
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0 auto;

  color: white;

  font-size: 28px;
  font-weight: 700;

  line-height: normal;
`;

const LinkWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding-right: 40px;

  gap: 15px;
`;

const Extlink = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: whitesmoke;

  &:hover {
    color: whitesmoke;
  }

  &:focus {
    color: whitesmoke;
  }
`;

const TitleLink = styled(Extlink)`
  position: relative;
  left: 100px;
`;
