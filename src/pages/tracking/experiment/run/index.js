import { Link, useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import DataTable from '@components/tracking/DataTable';

const runList = [
  { name: 'Sample run 1', runId: '1' },
  { name: 'Sample run 2', runId: '2' },
  { name: 'Sample run 3', runId: '3' },
];

const RunPage = () => {
  const { pathname } = useLocation();
  const [queries] = useSearchParams();

  const runId = queries.get('runId');

  return (
    <Wrapper>
      <RunContainer>
        <Title>Run</Title>
        <RunList>
          {runList.map((run) => (
            <RunItem
              key={run.name}
              to={{ pathname, search: `?runId=${run.runId}` }}
              replace
              $active={run.runId === runId}
            >
              {run.name}
            </RunItem>
          ))}
        </RunList>
      </RunContainer>
      {runId && <DataTable />}
    </Wrapper>
  );
};

export default RunPage;

const Wrapper = styled.div`
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

const RunItem = styled(Link)`
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  color: black;

  opacity: ${({ $active }) => ($active ? 1 : 0.3)};
  transition: opacity ease 0.3s;
`;
