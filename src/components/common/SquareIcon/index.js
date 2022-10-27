import PropTypes from 'prop-types';
import styled from 'styled-components';

import { flexCenter } from '@styles/layout';

const SquareIcon = ({ Icon, size, ...props }) => {
  return (
    <Wrapper {...props}>
      <Icon size={size} />
    </Wrapper>
  );
};

SquareIcon.propTypes = {
  Icon: PropTypes.func.isRequired,
  size: PropTypes.number,
};

export default SquareIcon;

const Wrapper = styled.div`
  ${flexCenter}
  padding: 6px;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.05);
`;
