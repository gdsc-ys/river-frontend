import { flexCenter } from '@styles/layout';
import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import styled, { css } from 'styled-components';
import DropdownMenu from './DropdownMenu';

const Header = () => {
  const [isHoverMoreTab, setIsHoverMoreTab] = useState(false);

  return (
    <Wrapper>
      {/* TODO: Change Title to favicon! */}
      <TitleLink href="/#/experiments/0">
        <Title>MLRiver</Title>
      </TitleLink>
      <InternalLinks>
        <InternalLink>
          <a href="/#/experiments/0">Experiments</a>
        </InternalLink>
        <InternalLink>
          <a href="/#/models">Models</a>
        </InternalLink>
        <InternalLink
          onMouseEnter={() => {
            setIsHoverMoreTab(true);
          }}
          onMouseLeave={() => {
            setIsHoverMoreTab(false);
          }}
        >
          {/* TODO: Make it dropdown menu */}
          <DropdownWrapper>
            More
            <DownChevron ishovered={isHoverMoreTab} />
            {isHoverMoreTab && <DropdownMenu />}
          </DropdownWrapper>
        </InternalLink>
      </InternalLinks>
      <ExtLinkWrapper>
        <Extlink
          href="https://github.com/mlflow/mlflow"
          target="_blank"
          rel="noopener noreferrer"
        >
          MLFlow Github
        </Extlink>
        <Extlink href="/login">Login</Extlink>
      </ExtLinkWrapper>
    </Wrapper>
  );
};

export default Header;

const linkStyleWrap = css`
  color: whitesmoke;

  &:hover {
    color: whitesmoke;
  }

  &:focus {
    color: whitesmoke;
  }
`;

const Wrapper = styled.nav`
  width: 100%;
  height: 40px;
  ${flexCenter};
  background-color: black;

  position: fixed;
  top: 0;

  z-index: 100;
`;

const Title = styled.h1`
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0 auto;

  color: whitesmoke;

  font-size: 24px;
  font-weight: 700;

  line-height: normal;
`;

const ExtLinkWrapper = styled.div`
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
  ${linkStyleWrap}
`;

const InternalLinks = styled.ul`
  ${flexCenter};
  gap: 15px;

  position: relative;
  left: 125px;

  margin: 0;
  padding: 0;

  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const InternalLink = styled.li`
  ${flexCenter({ horizontal: false })};
  position: relative;
  color: white;
  background-color: transparent;
  list-style: none;

  font-size: 16px;
  font-weight: 400;

  line-height: 1;
  padding-inline-start: 0;
  padding: 5px;

  cursor: pointer;

  a {
    ${linkStyleWrap}
  }
`;

const TitleLink = styled(Extlink)`
  position: relative;
  left: 75px;
`;

const DropdownWrapper = styled.div`
  ${flexCenter};
  gap: 5px;
`;

const DownChevron = styled(MdKeyboardArrowDown)`
  font-size: 20px;

  transform: rotate(${(props) => (props.ishovered ? '180deg' : '360deg')});

  transition: transform 0.15s ease-in-out;
`;
