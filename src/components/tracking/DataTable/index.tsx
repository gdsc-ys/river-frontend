import { useEffect, useMemo, useState } from 'react';

import Table from '@components/common/Table';
import { columnData } from '@components/tracking/DataTable/columnData';
import { Run } from '@entities/run';
import { trackingService } from '@services/trackingService';
import { isObjectEmpty } from '@utils/isObjectEmpty';

const DataTable = () => {
  const [runs, setRuns] = useState<Run[]>([]);
  const [isError, setIsError] = useState(false);

  const columns = useMemo(() => columnData, []);

  // fetch runs
  useEffect(() => {
    const searchRun = async (experiment_ids: string[]) => {
      await trackingService
        .searchRun({ experiment_ids })
        .then(({ runs }) => {
          setRuns(runs);
        })
        .catch((err) => console.log(err));
    };

    const fetchRuns = async () => {
      await trackingService
        .getExperiments({})
        .then(({ experiments }) => {
          const data = experiments.filter(
            (exp) => exp.lifecycle_stage !== 'deleted',
          );
          const experiment_ids = [];
          for (const datum of data) {
            experiment_ids.push(datum.experiment_id);
          }
          searchRun(experiment_ids);
        })
        .catch((err) => console.log(err));
    };

    try {
      fetchRuns();
    } catch (err) {
      setIsError(true);
    }
  }, []);

  if (isError) {
    return <span>Oops... Error Occured!</span>;
  } else if (isObjectEmpty(runs)) {
    return <span>Loading...</span>;
  } else {
    return <Table columns={columns} data={runs} />;
  }
};

export default DataTable;
