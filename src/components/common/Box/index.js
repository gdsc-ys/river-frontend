import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Wrapper>
  );
};

Box.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Box;

const Wrapper = styled.div`
  padding: 20px;
  border: 1px solid #00000020;

  background-color: white;
`;

const Title = styled.h2`
  font-size: 16px;
  /* font-weight: 400; */
`;

const Content = styled.div`
  margin-top: 20px;
`;
