import styled, { css } from 'styled-components';
import { flexCenter } from '../../../../styles/layout';
import { IoShuffle } from 'react-icons/io5';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { MdChevronRight } from 'react-icons/md';

const DropdownMenu = () => {
  return (
    <Wrapper>
      <a href="/">
        <Menu>
          <VersionIcon />
          <DescriptionWrapper>
            <DescriptionTitle>Version Control</DescriptionTitle>
            <Description>For Continuous Actions</Description>
            <ChevronRight />
          </DescriptionWrapper>
        </Menu>
      </a>
      <a
        href="https://www.mlflow.org/docs/latest/index.html"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Menu>
          <DocsIcon />
          <DescriptionWrapper>
            <DescriptionTitle>Documentation</DescriptionTitle>
            <Description>Official Documentation of MLRiver</Description>
          </DescriptionWrapper>
          <ChevronRight />
        </Menu>
      </a>
      <a
        href="https://github.com/gdsc-ys/river-frontend"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Menu>
          <GithubIcon />
          <DescriptionWrapper>
            <DescriptionTitle>Github</DescriptionTitle>
            <Description>Official Repo of MLRiver</Description>
          </DescriptionWrapper>
          <ChevronRight />
        </Menu>
      </a>
    </Wrapper>
  );
};

export default DropdownMenu;

const IconStyle = css`
  font-size: 40px;
`;

const ChevronRight = styled(MdChevronRight)`
  position: absolute;
  right: 50px;

  font-size: 32px;
  opacity: 0;
  color: #89c9ff;

  transition: right 0.15s ease-in-out, opacity 0.15s ease-in-out;
`;

const Wrapper = styled.ul`
  ${flexCenter({ horizontal: false })};
  gap: 10px;
  position: absolute;
  top: 42px;
  left: 0px;

  padding: 20px;

  background-color: black;
  border-radius: 10px;

  cursor: auto;

  z-index: 1;
`;

const Menu = styled.li`
  ${flexCenter}
  width: 100%;
  padding: 10px 15px;

  border-radius: 10px;

  background-color: transparent;

  cursor: pointer;

  &:hover {
    background-color: #282828;
  }

  &:hover ${ChevronRight} {
    opacity: 1;
    right: 35px;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 7px;

  width: 270px;

  margin-left: 0;
  padding: 10px 20px;
`;

const DescriptionTitle = styled.h3`
  font-size: 18px;
  color: white;

  margin-bottom: 0;
`;

const Description = styled.h4`
  font-size: 12px;
  color: gray;

  margin-bottom: 0;
`;

// Icons

const VersionIcon = styled(IoShuffle)`
  ${IconStyle};
`;

const DocsIcon = styled(HiOutlineDocumentText)`
  ${IconStyle};
`;

const GithubIcon = styled(FaGithub)`
  ${IconStyle};
`;
