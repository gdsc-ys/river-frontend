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
          isCurrentPath={currentPath === trackingUrl}
        >
          Tracking
        </Navigation>
        <Navigation to={deployUrl} isCurrentPath={currentPath === deployUrl}>
          Deploy
        </Navigation>
      </NavigationList>
      <BiUser size="24px" />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  width: 100%;
  align-items: center;

  padding: 20px;
  box-sizing: border-box;

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
  padding: 10px 15px;
  border-radius: 20px;

  font-weight: 600;
  text-decoration: none;
  color: black;

  transition: background-color ease 0.3s, color ease 0.3s;

  ${(props) =>
    props.isCurrentPath &&
    css`
      background-color: #00000050;
      color: white;
    `}
`;
