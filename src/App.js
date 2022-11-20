import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import RootPage from '@pages';
import DeployPage from '@pages/deploy';
import VersionPage from '@pages/deploy/version';
import LoginPage from '@pages/login';
import TrackingPage from '@pages/tracking';
import ComparePage from '@pages/tracking/compare';
import ExperimentPage from '@pages/tracking/experiment';
import OverviewPage from '@pages/tracking/overview';

function App() {
  return (
    <Router>
      <Routes>
        {/* Before logged in */}
        <Route path="login" element={<LoginPage />} />
        {/* After logged in */}
        <Route path="*" element={<RootPage />}>
          <Route path="tracking" element={<TrackingPage />}>
            <Route path="overview" element={<OverviewPage />} />
            <Route path="experiment" element={<ExperimentPage />} />
            <Route path="compare" element={<ComparePage />} />
          </Route>
          <Route path="deploy" element={<DeployPage />}>
            <Route path="version" element={<VersionPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
