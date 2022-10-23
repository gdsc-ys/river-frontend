import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const IconNavigation = ({ targetPath, Icon, children }) => {
  const { pathname: currentPath } = useLocation();

  return (
    <Navigation
      to={targetPath}
      $active={currentPath.startsWith(targetPath)}
      $label={children}
    >
      <Icon size={25} />
    </Navigation>
  );
};

IconNavigation.propTypes = {
  targetPath: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default IconNavigation;

const Navigation = styled(Link)`
  position: relative;
  display: inline-flex;
  padding: 20px;

  justify-content: center;
  align-items: center;
  border-radius: 50%;

  text-decoration: none;
  color: ${({ $active }) => ($active ? 'black' : '#0000004d')};

  transition: color ease 0.3s;

  ::after {
    position: absolute;
    content: '${(props) => props.$label}';
    top: 50%;
    left: 100%;
    padding: 10px 15px;
    background-color: black;

    color: white;

    transform: translateY(-50%);
    opacity: 0;
    transition: opacity ease 0.3s;

    pointer-events: none;
  }

  :hover::after {
    opacity: 1;
  }
`;
