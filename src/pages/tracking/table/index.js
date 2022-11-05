import styled from 'styled-components';

import Table from '@components/tracking/DataTable';

const TablePage = () => (
  <Wrapper>
    <Title>Table</Title>
    <Table />
  </Wrapper>
);

export default TablePage;

const Wrapper = styled.div``;

const Title = styled.h1`
  font-size: 30px;
`;
