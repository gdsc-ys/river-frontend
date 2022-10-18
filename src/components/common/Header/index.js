import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { flexCenter } from '../../../styles/layout';
import { MdKeyboardArrowDown } from 'react-icons/md';
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
          onMouseEnter={(event) => {
            setIsHoverMoreTab(true);
          }}
          onMouseLeave={(event) => {
            setIsHoverMoreTab(false);
          }}
        >
          {/* TODO: Make it dropdown menu */}
          <DropdownWrapper>
            More
            <DownChevron isHovered={isHoverMoreTab} />
            {isHoverMoreTab && <DropdownMenu />}
            {/* <DropdownMenu /> */}
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
  height: 55px;
  ${flexCenter}

  background-color: #000000;
`;

const Title = styled.h1`
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0 auto;

  color: white;

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
  left: 150px;

  margin: 0;
  padding: 0;

  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const InternalLink = styled.li`
  ${flexCenter({ horizontal: false })};
  position: relative;
  color: whitesmoke;
  background-color: transparent;
  list-style: none;

  font-size: 16px;
  font-weight: 400;

  line-height: 1;
  padding-inline-start: 0;
  padding: 10px;

  border-color: transparent;
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;

  transition: border-color 0.05s ease-in-out;

  cursor: pointer;

  &:hover {
    border-color: #505363;
    border-radius: 8px;
  }

  a {
    ${linkStyleWrap}
  }
`;

const TitleLink = styled(Extlink)`
  position: relative;
  left: 100px;
`;

const DropdownWrapper = styled.div`
  ${flexCenter};
  gap: 5px;
`;

const DownChevron = styled(MdKeyboardArrowDown)`
  font-size: 20px;

  transform: rotate(${(props) => (props.isHovered ? '180deg' : '360deg')});

  transition: transform 0.15s ease-in-out;
`;
