import Loader from 'components/common/Loader';
import componentMap from 'data/componentMap';
import { TARGET_SITE } from 'data/urls';
import useClone from 'hooks/useClone';
import { mapper } from 'utils/mapper';

const MainPage = () => {
  // Define component mapper
  mapper(componentMap);

  // Clone MLflow site
  useClone(TARGET_SITE);

  return <Loader />;
};

export default MainPage;
