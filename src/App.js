import LoginPage from 'pages/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RootPage from 'pages';
import TrackingPage from 'pages/tracking';
import OverviewPage from 'pages/tracking/overview';
import ExperimentPage from 'pages/tracking/experiment';
import TablePage from 'pages/tracking/table';
import LogPage from 'pages/tracking/log';
import DeployPage from 'pages/deploy';
import VersionPage from 'pages/deploy/version';

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
            <Route path="table" element={<TablePage />} />
            <Route path="log" element={<LogPage />} />
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
