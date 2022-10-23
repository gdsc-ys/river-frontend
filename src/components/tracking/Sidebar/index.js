import { experimentUrl, logUrl, overviewUrl, tableUrl } from 'data/urls';
import styled from 'styled-components';
import { MdInfoOutline, MdSegment } from 'react-icons/md';
import { AiOutlineExperiment, AiOutlineTable } from 'react-icons/ai';
import IconNavigation from 'components/common/IconNavigation';

const Sidebar = () => {
  return (
    <Wrapper>
      <IconNavigation targetPath={overviewUrl} Icon={MdInfoOutline}>
        Overview
      </IconNavigation>
      <IconNavigation targetPath={experimentUrl} Icon={AiOutlineExperiment}>
        Experiment
      </IconNavigation>
      <IconNavigation targetPath={tableUrl} Icon={AiOutlineTable}>
        Table
      </IconNavigation>
      <IconNavigation targetPath={logUrl} Icon={MdSegment}>
        Log
      </IconNavigation>
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
