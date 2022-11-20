import styled from 'styled-components';

import DataTable from '@components/tracking/DataTable';

const ExperimentPage = () => {
  return (
    <Wrapper>
      <Title>Experiment</Title>
      <DataTable />
    </Wrapper>
  );
};

export default ExperimentPage;

const Wrapper = styled.div`
  padding: 30px;
`;

const Title = styled.h1`
  font-size: 30px;
`;
