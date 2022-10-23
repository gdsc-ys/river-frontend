import styled from 'styled-components';

import Box from '@components/common/Box';

const OverviewPage = () => {
  return (
    <Wrapper>
      <Title>Overview</Title>
      <Box title="Section 1">Content</Box>
      <Box title="Section 2">Content</Box>
      <Box title="Section 3">Content</Box>
    </Wrapper>
  );
};

export default OverviewPage;

const Wrapper = styled.div`
  padding: 30px;

  > :not(:first-child) {
    margin-top: 20px;
  }
`;

const Title = styled.h1`
  margin-bottom: 30px;

  font-size: 30px;
`;
