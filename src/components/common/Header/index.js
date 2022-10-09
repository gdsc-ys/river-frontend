import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <Title>River</Title>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #000000;
`;

const Title = styled.h1`
  margin: 0;
  color: white;
  letter-spacing: 10px;
`;
