import { experimentUrl, logUrl, overviewUrl, tableUrl } from 'data/urls';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { MdInfoOutline, MdSegment } from 'react-icons/md';
import { AiOutlineExperiment, AiOutlineTable } from 'react-icons/ai';
import IconNavigation from 'components/common/IconNavigation';

const Sidebar = () => {
  return (
    <Wrapper>
      <IconNavigation
        targetPath={overviewUrl}
        Icon={MdInfoOutline}
        label="Overview"
      />
      <IconNavigation
        targetPath={experimentUrl}
        Icon={AiOutlineExperiment}
        label="Experiment"
      />
      <IconNavigation
        targetPath={tableUrl}
        Icon={AiOutlineTable}
        label="Table"
      />
      <IconNavigation targetPath={logUrl} Icon={MdSegment} label="Log" />
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
