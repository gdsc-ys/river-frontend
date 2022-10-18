import { MdInfoOutline } from 'react-icons/md';
import { AiOutlineExperiment } from 'react-icons/ai';
import { CiViewTable } from 'react-icons/ci';
import { MdSegment } from 'react-icons/md';
import { TbReportAnalytics } from 'react-icons/tb';
import styled, { css } from 'styled-components';

const Sidebar = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <OverviewIcon />
      </IconWrapper>
      <IconWrapper>
        <ExperimentIcon />
      </IconWrapper>
      <IconWrapper>
        <TableIcon />
      </IconWrapper>
      <IconWrapper>
        <LogIcon />
      </IconWrapper>
      <IconWrapper>
        <AnalysisIcon />
      </IconWrapper>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;

  position: fixed;
  left: 0;
  width: 50px;
  height: 100%;

  background-color: white;

  border-right: 1px solid gray;
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 55px;
  padding: 10px;

  color: gray;

  cursor: pointer;

  overflow: hidden;
  backface-visibility: hidden;
  position: relative;
  transition: color 0.3s;
  transform: translateZ(0);

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: #f9f9f9;
    border-radius: 100%;
    transform: scale(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover:before {
    transform: scale(2);
  }
`;

const IconStyle = css`
  width: 100%;
  height: 100%;
`;

//// Icons

const OverviewIcon = styled(MdInfoOutline)`
  ${IconStyle};
`;

const ExperimentIcon = styled(AiOutlineExperiment)`
  ${IconStyle};
`;

const TableIcon = styled(CiViewTable)`
  ${IconStyle};
`;

const LogIcon = styled(MdSegment)`
  ${IconStyle};
  transform: rotateY(180deg);
`;

const AnalysisIcon = styled(TbReportAnalytics)`
  ${IconStyle};
`;
