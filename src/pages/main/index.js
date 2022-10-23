import Header from 'components/common/Header';
import Sidebar from 'components/tracking/Sidebar';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div``;

const Content = styled.div``;
