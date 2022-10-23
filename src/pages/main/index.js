import Header from 'components/common/Header';
import Sidebar from 'components/tracking/Sidebar';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      Content
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  padding: 100px 20px 20px 100px;
`;
