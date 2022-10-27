import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { flexCenter } from '@styles/layout';

/**
 * Square Button
 * @param {children} ChildrenNode children node of button
 * @param {backgroundColor} BackgroundColor background color of button
 * @param {color} Color font color or children color of button
 * @param {size}fontSize font size of button
 * @returns {DivComponent} Button components, StraightForward!
 * Addtional Styling should you needed!
 */
const Button = ({ children, backgroundColor, color, size, ...props }) => {
  return (
    <ButtonWrapper
      backgroundColor={backgroundColor}
      color={color}
      size={size}
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
};

export default Button;

const ButtonWrapper = styled.button`
  ${flexCenter}
  width: fit-content;
  height: fit-content;

  padding: 10px 30px;

  background-color: ${(props) => props.backgroundColor || 'white'};
  color: ${(props) => props.color || 'black'};

  cursor: pointer;
  text-decoration: none;

  font-size: ${(props) => props.size || '20px'};
  font-weight: bold;

  border: none;
  border-radius: 5px;
`;
