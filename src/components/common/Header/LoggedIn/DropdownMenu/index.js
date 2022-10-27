import { FaGithub } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import styled from 'styled-components';

import SquareIcon from '@components/common/SquareIcon';
import { flexCenter } from '@styles/layout';

const DropdownMenu = () => {
  return (
    <Wrapper>
      <Menus>
        <MenuWrapper>
          <SquareIcon Icon={MdLogout} size={24} />
          <MenuDesc>Logout</MenuDesc>
        </MenuWrapper>
        <MenuWrapper
          href="https://github.com/gdsc-ys/river-frontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SquareIcon Icon={FaGithub} size={24} />
          <MenuDesc>TFRiver Github</MenuDesc>
        </MenuWrapper>
      </Menus>
    </Wrapper>
  );
};

export default DropdownMenu;

const Wrapper = styled.div`
  ${flexCenter({ horizontal: false })};
  position: fixed;
  top: 0;
  right: 0;
  transform: translate(-30px, 65px); // change me to move postiion

  max-height: 30vh;

  margin-left: 0;
  padding: 8px;

  background-color: white;
  border: 1px #dfe8f9 solid;
  border-radius: 8px;
  filter: drop-shadow(2px 2px 1.5px black);

  z-index: 10;
`;

const Menus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  margin: 0;
  padding: 5px 10px;
`;

const MenuWrapper = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  padding: 5px 10px;

  background-color: transparent;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  color: black;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.025);
  }
`;

const MenuDesc = styled.span`
  font-size: 1em;
  font-weight: 600;
`;
