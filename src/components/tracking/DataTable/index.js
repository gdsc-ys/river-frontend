import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { trackingService } from '@services/trackingService';
import { createColumnHelper, useReactTable } from '@tanstack/react-table';

const DataTable = () => {
  const [runs, setRuns] = useState([]);

  useEffect(() => {
    trackingService.getExperiments().then((res) => {
      const data = res.filter((exp) => exp.lifecycle_stage !== 'deleted');
      const experiment_ids = [];
      for (let datum of data) {
        experiment_ids.push(datum.experiment_id);
      }
      trackingService.searchRun(experiment_ids).then((run) => {
        setRuns(run);
      });
    });

    console.log(runs);
  }, []);

  return (
    <Wrapper>
      <table>
        <thead></thead>
        <tbody></tbody>
        <tfoot></tfoot>
      </table>
    </Wrapper>
  );
};

export default DataTable;

const Wrapper = styled.div``;
