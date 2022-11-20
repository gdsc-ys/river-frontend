import PropTypes from 'prop-types';
import styled from 'styled-components';

const BoxRow = ({ label, children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Label>{label}</Label>
      <Content>{children}</Content>
    </Wrapper>
  );
};

BoxRow.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BoxRow;

const Wrapper = styled.div`
  display: flex;
`;

const Label = styled.h3`
  min-width: 150px;

  font-size: 15px;
  font-weight: 400;
  color: gray;
`;

const Content = styled.p`
  font-size: 15px;
  font-weight: 400;

  white-space: pre-line;
`;
