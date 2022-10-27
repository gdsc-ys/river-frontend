import { useState } from 'react';
import { GoTriangleDown } from 'react-icons/go';
import styled from 'styled-components';

import GithubMark from '@assets/GitHub-Mark-32px.png';
import DropdownMenu from '@components/common/Header/LoggedIn/DropdownMenu';
import { flexCenter } from '@styles/layout';

const LoggedIn = () => {
  //TODO: Fetch user info
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <Wrapper>
        {/* TODO: Change to real user */}
        <UserWrapper>
          <UserIcon src={GithubMark}></UserIcon>
          <Username>TestTestTest</Username>
        </UserWrapper>
        <ChevronWrapper
          onClick={() => {
            setIsDropdownOpen((prev) => !prev);
          }}
          dropdown={isDropdownOpen}
        >
          <ChevronIcon dropdown={isDropdownOpen} />
        </ChevronWrapper>
      </Wrapper>
      {isDropdownOpen && <DropdownMenu />}
    </>
  );
};

export default LoggedIn;

const Wrapper = styled.div`
  ${flexCenter}
  gap: 10px;
`;

const UserWrapper = styled.div`
  ${flexCenter}
  gap: 10px;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: transparent;

  transition: 0.2s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
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
    props.dropdown ? '#C4F9FF' : 'rgba(0, 0, 0, 0.05)'};

  cursor: pointer;
  transition: 0.3s ease;
`;

const ChevronIcon = styled(GoTriangleDown)`
  position: relative;
  top: 2px;
  color: ${(props) => (props.dropdown ? '#4E98B3' : 'black')};

  transition: 0.3s ease;

  font-size: 16px;
`;
