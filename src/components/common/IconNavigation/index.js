import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const IconNavigation = ({ targetPath, Icon, label }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Navigation
      to={targetPath}
      $isCurrentPath={currentPath.startsWith(targetPath)}
      $label={label}
    >
      <Icon size={25} />
    </Navigation>
  );
};

IconNavigation.propTypes = {
  targetPath: PropTypes.string.isRequired,
  Icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
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
  color: gray;

  transition: color ease 0.3s;

  ${(props) =>
    props.$isCurrentPath &&
    css`
      color: black;
    `}

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
