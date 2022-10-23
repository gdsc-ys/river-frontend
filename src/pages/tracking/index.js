import Sidebar from 'components/tracking/Sidebar';
import { overviewPageUrl } from 'data/urls';
import { Navigate, useOutlet } from 'react-router-dom';
import styled from 'styled-components';

const TrackingPage = () => {
  const outlet = useOutlet();

  if (!outlet) {
    return <Navigate to={overviewPageUrl} replace />;
  }

  return (
    <Wrapper>
      <Sidebar />
      {outlet}
    </Wrapper>
  );
};

export default TrackingPage;

const Wrapper = styled.div`
  padding-left: 80px;
`;
