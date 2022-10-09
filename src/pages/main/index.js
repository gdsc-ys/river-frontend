import Loader from '../../components/common/Loader';
import { TARGET_SITE } from '../../data/urls';
import useClone from '../../hooks/useClone';

const MainPage = () => {
  useClone(TARGET_SITE);

  return <Loader />;
};

export default MainPage;
