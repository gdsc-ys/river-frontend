import styled from 'styled-components';

import DataTable from '@components/tracking/DataTable';

const ComparePage = () => {
  return (
    <Wrapper>
      <Title>Compare</Title>
      <DataTable />
    </Wrapper>
  );
};

export default ComparePage;

const Wrapper = styled.div`
  padding: 30px;
`;

const Title = styled.h1`
  font-size: 30px;
`;
