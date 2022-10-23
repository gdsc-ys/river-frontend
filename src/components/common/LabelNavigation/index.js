import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LabelNavigation = ({ targetPath, children }) => {
  const { pathname: currentPath } = useLocation();

  return (
    <Navigation to={targetPath} $active={currentPath.startsWith(targetPath)}>
      {children}
    </Navigation>
  );
};

LabelNavigation.propTypes = {
  targetPath: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LabelNavigation;

const Navigation = styled(Link)`
  padding: 5px 10px;

  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  color: black;

  opacity: ${({ $active }) => ($active ? 1 : 0.3)};
  transition: opacity ease 0.3s;
`;
