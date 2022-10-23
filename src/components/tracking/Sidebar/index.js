import { experimentUrl, logUrl, overviewUrl, tableUrl } from 'data/urls';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { MdInfoOutline, MdSegment } from 'react-icons/md';
import { AiOutlineExperiment, AiOutlineTable } from 'react-icons/ai';

const Sidebar = () => {
  const location = useLocation();

  const currentPath = location.pathname;

  return (
    <Wrapper>
      <Navigation
        to={overviewUrl}
        isCurrentPath={currentPath.startsWith(overviewUrl)}
      >
        <MdInfoOutline size="25px" />
      </Navigation>
      <Navigation
        to={experimentUrl}
        isCurrentPath={currentPath.startsWith(experimentUrl)}
      >
        <AiOutlineExperiment size="25px" />
      </Navigation>
      <Navigation
        to={tableUrl}
        isCurrentPath={currentPath.startsWith(tableUrl)}
      >
        <AiOutlineTable size="25px" />
      </Navigation>
      <Navigation to={logUrl} isCurrentPath={currentPath.startsWith(logUrl)}>
        <MdSegment size="25px" />
      </Navigation>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  padding-top: 80px;

  background-color: white;
  border-right: 1px solid #00000020;
`;

const Navigation = styled(Link)`
  display: inline-flex;
  padding: 20px;

  justify-content: center;
  align-items: center;
  border-radius: 50%;

  text-decoration: none;
  color: gray;

  transition: color ease 0.3s;

  ${(props) =>
    props.isCurrentPath &&
    css`
      color: black;
    `}
`;
