import styled from 'styled-components';
import { fullscreen, flexCenter } from '../../../styles/layout';

const Loader = () => {
  return (
    <Wrapper>
      <Title>River</Title>
      <Description>The Next Gen MLOps Tracker</Description>
    </Wrapper>
  );
};

export default Loader;

const Wrapper = styled.div`
  ${fullscreen};
  ${flexCenter({ horizontal: false })};
  line-height: 1.2;
`;

const Title = styled.span`
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 10px;

  color: black;
  opacity: 0.5;
`;

const Description = styled.span`
  font-size: 36px;
  font-weight: 500;

  color: black;
  opacity: 0.35;
`;
