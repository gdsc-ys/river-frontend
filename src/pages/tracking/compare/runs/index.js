import { useState } from 'react';
import styled from 'styled-components';

import DataTable from '@components/tracking/DataTable';

const runList = [
  { name: 'Sample run 1', runId: '1' },
  { name: 'Sample run 2', runId: '2' },
  { name: 'Sample run 3', runId: '3' },
];

const RunsPage = () => {
  const [runs, setRuns] = useState([]);

  const handleClickRunItem = (runId) => {
    if (runs.includes(runId)) {
      setRuns((runs) => runs.filter((run) => run !== runId));
    } else {
      setRuns((runs) => [...runs, runId]);
    }
  };

  return (
    <Wrapper>
      <RunContainer>
        <Title>Run</Title>
        <RunList>
          {runList.map((run) => (
            <RunItem
              key={run.name}
              onClick={() => handleClickRunItem(run.runId)}
              $active={runs.includes(run.id)}
            >
              {run.name}
            </RunItem>
          ))}
        </RunList>
      </RunContainer>
      <Content>
        <Title>Compare</Title>
        <DataTable />
      </Content>
    </Wrapper>
  );
};

export default RunsPage;

const Wrapper = styled.div`
  flex: 1 1 0;
  height: calc(100vh - 80px);
  display: flex;
`;

const Title = styled.h1`
  margin-bottom: 30px;

  font-size: 30px;
`;

const RunContainer = styled.div`
  min-width: 250px;
  flex-shrink: 0;
  padding: 30px;

  border-right: 1px solid #00000020;

  overflow-y: scroll;
`;

const RunList = styled.div`
  display: flex;
  flex-direction: column;

  > :not(:first-child) {
    margin-top: 20px;
  }
`;

const RunItem = styled.button`
  padding: 0;

  font-size: 17px;
  font-weight: 600;
  border: none;
  color: black;

  text-align: start;

  opacity: ${({ $active }) => ($active ? 1 : 0.3)};
  transition: opacity ease 0.3s;
`;

const Content = styled.div`
  min-width: 600px;
  flex: 1 1 0;
  padding: 30px;

  overflow-y: scroll;

  > :not(:first-child) {
    margin-top: 20px;
  }
`;
