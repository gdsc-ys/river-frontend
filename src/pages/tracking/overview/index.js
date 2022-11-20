import styled from 'styled-components';

import Box from '@components/common/Box';
import BoxRow from '@components/common/Box/BoxRow';

const OverviewPage = () => {
  return (
    <Wrapper>
      <Title>Overview</Title>
      <Box title="About">
        {/* Sample data */}
        <BoxContent>
          <BoxRow label="Project">Sample Project</BoxRow>
          <BoxRow label="Author">Sample user</BoxRow>
          <BoxRow label="Last modified">2022-11-20</BoxRow>
          <BoxRow label="Total experiments">5</BoxRow>
          <BoxRow label="Total runs">11</BoxRow>
          <BoxRow label="Status">ACTIVE</BoxRow>
        </BoxContent>
      </Box>
      <Box title="Description">
        {/* Sample data */}
        <BoxContent>This is a description of Sample Project.</BoxContent>
      </Box>
      <Box title="Participants">
        {/* Sample data */}
        <BoxContent>
          <BoxRow label="Author">Sample user 1</BoxRow>
          <BoxRow label="Contributor">Sample user 2</BoxRow>
          <BoxRow label="Contributor">Sample user 3</BoxRow>
          <BoxRow label="Contributor">Sample user 4</BoxRow>
        </BoxContent>
      </Box>
      <Box title="Links">
        {/* Sample data */}
        <BoxContent>
          <BoxRow label="Repository">Github</BoxRow>
          <BoxRow label="River">River</BoxRow>
        </BoxContent>
      </Box>
      <Box title="README">
        {/* Sample data */}
        <BoxContent>Parsed from Github README.md</BoxContent>
      </Box>
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

const BoxContent = styled.div`
  font-size: 15px;

  > :not(:first-child) {
    margin-top: 10px;
  }
`;
