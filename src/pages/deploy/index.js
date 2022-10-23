import { Navigate, useOutlet } from 'react-router-dom';
import styled from 'styled-components';

import Sidebar from '@components/deploy/Sidebar';
import { versionPageUrl } from '@data/urls';

const DeployPage = () => {
  const outlet = useOutlet();

  if (!outlet) {
    return <Navigate to={versionPageUrl} replace />;
  }
  return (
    <Wrapper>
      <Sidebar />
      {outlet}
    </Wrapper>
  );
};

export default DeployPage;

const Wrapper = styled.div`
  padding-left: 80px;
`;
