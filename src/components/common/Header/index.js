import { deployUrl, trackingUrl } from 'data/urls';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { BiUser } from 'react-icons/bi';

const Header = () => {
  const location = useLocation();

  const currentPath = location.pathname;

  return (
    <Wrapper>
      <Icon>R</Icon>
      <NavigationList>
        <Navigation
          to={trackingUrl}
          $isCurrentPath={currentPath.startsWith(trackingUrl)}
        >
          Tracking
        </Navigation>
        <Navigation
          to={deployUrl}
          $isCurrentPath={currentPath.startsWith(deployUrl)}
        >
          Deploy
        </Navigation>
      </NavigationList>
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

const NavigationList = styled.div`
  display: flex;
  flex: 1 1 0;
`;

const Navigation = styled(Link)`
  padding: 5px 10px;

  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  color: gray;

  transition: color ease 0.3s;

  ${(props) =>
    props.$isCurrentPath &&
    css`
      color: black;
    `}
`;
