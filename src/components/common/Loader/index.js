import styled from 'styled-components';
import { fullscreen } from '../../../styles/layout';

const Loader = () => {
  return (
    <Wrapper>
      <Title>River</Title>
    </Wrapper>
  );
};

export default Loader;

const Wrapper = styled.div`
  ${fullscreen}

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 10px;

  color: black;
  opacity: 0.5;
`;
