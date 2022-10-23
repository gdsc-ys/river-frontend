import { BiUser } from 'react-icons/bi';
import styled from 'styled-components';

import LabelNavigation from '@components/common/LabelNavigation';
import { deployPageUrl, trackingPageUrl } from '@data/urls';

const Header = () => {
  return (
    <Wrapper>
      <Icon>R</Icon>
      <NavigationContainer>
        <LabelNavigation targetPath={trackingPageUrl}>Tracking</LabelNavigation>
        <LabelNavigation targetPath={deployPageUrl}>Deploy</LabelNavigation>
      </NavigationContainer>
      <BiUser size="24px" />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  height: 80px;

  padding: 0 20px;
  box-sizing: border-box;

  background-color: white;
  border-bottom: 1px solid #00000020;

  z-index: 100;

  > :not(:first-child) {
    margin-left: 20px;
  }
`;

// FIXME : Temp icon
const Icon = styled.div`
  width: 40px;
  height: 40px;

  background-color: skyblue;
  border-radius: 50%;

  line-height: 40px;
  text-align: center;
  color: white;
  font-weight: 700;
  font-size: 18px;
`;

const NavigationContainer = styled.div`
  display: flex;
  flex: 1 1 0;
`;
