import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@components/common/Button';
import { flexCenter } from '@styles/layout';

const NotLoggedIn = () => {
  return (
    <Wrapper>
      <LoginLink to="/login">
        <LoginButton backgroundColor="white" color="#4E98B3" size="16px">
          Sign in
        </LoginButton>
      </LoginLink>
    </Wrapper>
  );
};

export default NotLoggedIn;

const Wrapper = styled.div``;

const LoginButton = styled(Button)`
  ${flexCenter};
  padding: 10px;
  border: 1px #4e98b3 solid;
`;

const LoginLink = styled(Link)`
  text-decoration: none;
`;
