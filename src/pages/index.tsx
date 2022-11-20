import { Navigate, useOutlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from '@components/common/Header';
import { trackingPageUrl } from '@data/urls';

const RootPage = () => {
  const outlet = useOutlet();

  if (!outlet) {
    return <Navigate to={trackingPageUrl} replace />;
  }

  return (
    <Wrapper>
      <Header />
      {outlet}
    </Wrapper>
  );
};

export default RootPage;

const Wrapper = styled.div`
  padding-top: 80px;
`;
