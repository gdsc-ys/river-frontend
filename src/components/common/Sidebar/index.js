import { MdInfoOutline } from 'react-icons/md';
import { AiOutlineExperiment, AiOutlineTable } from 'react-icons/ai';
import { MdSegment } from 'react-icons/md';
import { TbReportAnalytics } from 'react-icons/tb';
import { FiDatabase } from 'react-icons/fi';
import styled, { css } from 'styled-components';
import { useState } from 'react';

const Sidebar = () => {
  const [isOnOverview, setIsOnOverview] = useState(false);
  const [isOnExp, setIsOnExp] = useState(false);
  const [isOnTable, setIsOnTable] = useState(false);
  const [isOnLog, setIsOnLog] = useState(false);
  const [isOnAnalysis, setIsOnAnalysis] = useState(false);
  const [isOnArtifact, setIsOnArtifact] = useState(false);

  return (
    <>
      <Wrapper>
        <IconWrapper
          onMouseOver={() => {
            setIsOnOverview(true);
          }}
          onMouseLeave={() => {
            setIsOnOverview(false);
          }}
        >
          <OverviewIcon />
        </IconWrapper>
        <IconWrapper
          onMouseOver={() => {
            setIsOnExp(true);
          }}
          onMouseLeave={() => {
            setIsOnExp(false);
          }}
        >
          <ExperimentIcon />
        </IconWrapper>
        <IconWrapper
          onMouseOver={() => {
            setIsOnTable(true);
          }}
          onMouseLeave={() => {
            setIsOnTable(false);
          }}
        >
          <TableIcon />
        </IconWrapper>
        <IconWrapper
          onMouseOver={() => {
            setIsOnLog(true);
          }}
          onMouseLeave={() => {
            setIsOnLog(false);
          }}
        >
          <LogIcon />
        </IconWrapper>
        <IconWrapper
          onMouseOver={() => {
            setIsOnAnalysis(true);
          }}
          onMouseLeave={() => {
            setIsOnAnalysis(false);
          }}
        >
          <AnalysisIcon />
        </IconWrapper>
        <IconWrapper
          onMouseOver={() => {
            setIsOnArtifact(true);
          }}
          onMouseLeave={() => {
            setIsOnArtifact(false);
          }}
        >
          <ArtifactIcon />
        </IconWrapper>
      </Wrapper>
      <OverviewTooltip hover={isOnOverview}>Overview</OverviewTooltip>
      <ExpTooltip hover={isOnExp}>Experiments</ExpTooltip>
      <TableTooltip hover={isOnTable}>Table</TableTooltip>
      <LogTooltip hover={isOnLog}>Logs</LogTooltip>
      <AnalysisTooltip hover={isOnAnalysis}>Analysis</AnalysisTooltip>
      <ArtifactTooltip hover={isOnArtifact}>Artifacts</ArtifactTooltip>
    </>
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

  border-right: 1px solid #e8e8e8;

  z-index: 1000;
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

    background: #e8e8e8;
    border-radius: 100%;
    transform: scale(0);
    transition: transform 0.2s ease-in-out;
  }

  &:hover:before {
    transform: scale(2);
  }
`;

const IconStyle = css`
  width: 100%;
  height: 100%;
`;

const Tooltip = styled.div`
  position: absolute;
  left: ${(props) => (props.hover ? '60px' : '70px')};
  opacity: ${(props) => (props.hover ? '1' : '0')};
  background-color: black;
  color: white;

  padding: 5px 10px;

  border-radius: 5px;

  transition: left 0.2s ease-in-out, opacity 0.2s ease-in-out,
    z-index 0.2s ease-in-out;

  z-index: ${(props) =>
    props.hover ? '100' : '-1'}; // Need for UX!! Do not change me

  &:after {
    content: '';
    position: absolute;
    left: -5px;
    top: 11px;

    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 5px solid black;
  }
`;

const OverviewTooltip = styled(Tooltip)`
  top: 50px;
`;

const ExpTooltip = styled(Tooltip)`
  top: 105px;
`;

const TableTooltip = styled(Tooltip)`
  top: 160px;
`;

const LogTooltip = styled(Tooltip)`
  top: 215px;
`;

const AnalysisTooltip = styled(Tooltip)`
  top: 270px;
`;

const ArtifactTooltip = styled(Tooltip)`
  top: 325px;
`;

//// Icons

const OverviewIcon = styled(MdInfoOutline)`
  ${IconStyle};
`;

const ExperimentIcon = styled(AiOutlineExperiment)`
  ${IconStyle};
`;

const TableIcon = styled(AiOutlineTable)`
  ${IconStyle};
`;

const LogIcon = styled(MdSegment)`
  ${IconStyle};
  transform: rotateY(180deg);
`;

const AnalysisIcon = styled(TbReportAnalytics)`
  ${IconStyle};
`;

const ArtifactIcon = styled(FiDatabase)`
  ${IconStyle};
`;
