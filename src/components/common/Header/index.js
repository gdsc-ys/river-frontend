import { deployUrl, trackingUrl } from 'data/urls';
import styled from 'styled-components';
import { BiUser } from 'react-icons/bi';
import LabelNavigation from '../LabelNavigation';

const Header = () => {
  return (
    <Wrapper>
      <Icon>R</Icon>
      <NavigationContainer>
        <LabelNavigation targetPath={trackingUrl}>Tracking</LabelNavigation>
        <LabelNavigation targetPath={deployUrl}>Deploy</LabelNavigation>
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
