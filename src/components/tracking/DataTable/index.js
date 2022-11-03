import { Suspense, useEffect, useState } from 'react';

import Table from '@components/common/Table';
import { trackingService } from '@services/trackingService';

const DataTable = () => {
  const [runs, setRuns] = useState({});
  const [loading, setLoading] = useState(true);

  // fetch runs
  const fetchRuns = async () => {
    await trackingService
      .getExperiments()
      .then((res) => {
        const data = res.filter((exp) => exp.lifecycle_stage !== 'deleted');
        const experiment_ids = [];
        for (let datum of data) {
          experiment_ids.push(datum.experiment_id);
        }
        trackingService
          .searchRun(experiment_ids)
          .then((run) => {
            setRuns(run);
          })
          .catch((err) => console.log(err));
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchRuns();
  }, []);

  if (loading) {
    return <span>Loading...</span>;
  }

  const columns = [{ header: 'Created' }, { header: 'Last Runtime' }];

  return <Table columns={columns} runs={runs}></Table>;
};

export default DataTable;
