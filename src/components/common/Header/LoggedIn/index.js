import { useRef, useState } from 'react';
import { GoTriangleDown } from 'react-icons/go';
import { HiOutlineBell } from 'react-icons/hi';
import styled from 'styled-components';

import GithubMark from '@assets/GitHub-Mark-32px.png';
import DropdownMenu from '@components/common/Header/LoggedIn/DropdownMenu';
import SquareIcon from '@components/common/SquareIcon';
import useComponentVisible from '@hooks/useComponentVisible';
import { flexCenter } from '@styles/layout';

const LoggedIn = () => {
  //TODO: Fetch user info
  const { ref, isVisible, setIsVisible } = useComponentVisible(false);

  return (
    <>
      <Wrapper>
        {/* TODO: Change to real user */}
        <UserWrapper>
          <UserIcon src={GithubMark}></UserIcon>
          <Username>TestTestTest</Username>
        </UserWrapper>
        <NotiIcon Icon={HiOutlineBell} size={26} />
        <ChevronWrapper
          onClick={() => {
            setIsVisible((prev) => !prev);
          }}
          dropdown={isVisible}
        >
          <ChevronIcon />
        </ChevronWrapper>
      </Wrapper>
      <div ref={ref}>{isVisible && <DropdownMenu />}</div>
    </>
  );
};

export default LoggedIn;

const Wrapper = styled.div`
  ${flexCenter}
  gap: 15px;
`;

const UserWrapper = styled.div`
  ${flexCenter}
  gap: 10px;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: transparent;

  transition: 0.2s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const UserIcon = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

const Username = styled.span`
  font-size: 20px;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ChevronWrapper = styled.div`
  ${flexCenter}
  padding: 12px;
  border-radius: 12px;
  background-color: ${(props) =>
    props.dropdown ? '#e6f6ff' : 'rgba(0, 0, 0, 0.05)'};

  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.dropdown ? '#e6f6ff' : 'rgba(0, 0, 0, 0.1)'};
  }
`;

const ChevronIcon = styled(GoTriangleDown)`
  position: relative;
  top: 2px;
  color: black;

  transition: 0.3s ease;

  font-size: 16px;
`;

const NotiIcon = styled(SquareIcon)`
  padding: 8px;
  cursor: pointer;

  transition: 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
