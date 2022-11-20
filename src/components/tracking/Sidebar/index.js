import { AiOutlineExperiment, AiOutlineTable } from 'react-icons/ai';
import { MdInfoOutline, MdSegment } from 'react-icons/md';
import styled from 'styled-components';

import IconNavigation from '@components/common/IconNavigation';
import {
  comparePageUrl,
  experimentPageUrl,
  overviewPageUrl,
  tablePageUrl,
} from '@data/urls';

const Sidebar = () => {
  return (
    <Wrapper>
      <IconNavigation targetPath={overviewPageUrl} Icon={MdInfoOutline}>
        Overview
      </IconNavigation>
      <IconNavigation targetPath={experimentPageUrl} Icon={AiOutlineExperiment}>
        Experiment
      </IconNavigation>
      <IconNavigation targetPath={comparePageUrl} Icon={MdSegment}>
        Compare
      </IconNavigation>
      <IconNavigation targetPath={tablePageUrl} Icon={AiOutlineTable}>
        Table
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
