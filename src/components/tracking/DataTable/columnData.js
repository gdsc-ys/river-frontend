import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import styled from 'styled-components';

import { MLFLOW_GIT_COMMIT, MLFLOW_GIT_REPO_URL } from '@data/mlflow_tags';

dayjs.extend(relativeTime);
dayjs.extend(duration);

export const columnData = [
  {
    Header: 'Run ID',
    accessor: 'info.run_id',
    sticky: 'left',
    width: 300,
  },
  {
    Header: 'Created',
    accessor: 'info.start_time',
    Cell: (info) => {
      const { $y, $M, $D } = dayjs.unix(info.cell.value / 1000);
      return dayjs(`${$y}-${$M + 1}-${$D}`).fromNow();
    },
  },
  {
    Header: 'Updated',
    accessor: 'info.end_time',
    Cell: (info) => {
      const lastRuntime = dayjs.unix(info.value / 1000).format('YYYY-MM-DD');
      return lastRuntime === 'Invalid Date' ? '-' : lastRuntime;
    },
  },
  {
    Header: 'Runtime',
    Cell: (info) => {
      const cell_info = info.row.cells;
      const startTimestamp = cell_info?.filter(
        (el) => el.column.Header === 'Created',
      )[0].value;
      const endTimestamp = cell_info?.filter(
        (el) => el.column.Header === 'Updated',
      )[0].value;
      if (startTimestamp && endTimestamp) {
        const endTime = dayjs(endTimestamp);
        const startTime = dayjs(startTimestamp);
        const { days, hours, minutes, seconds, milliseconds } = dayjs.duration(
          endTime - startTime,
        ).$d;
        let runtime = '';
        runtime += days !== 0 ? `${days}d ` : '';
        runtime += hours !== 0 ? `${hours}h ` : '';
        runtime += minutes !== 0 ? `${minutes}m ` : '';
        runtime +=
          seconds !== 0 ? `${seconds}.${parseInt(milliseconds / 100)}s` : '';
        return runtime;
      } else {
        return '-';
      }
    },
  },
  {
    Header: 'User',
    accessor: 'info.user_id',
    Cell: (info) => {
      return info.value ?? '-';
    },
  },
  {
    Header: 'Github URL',
    accessor: 'data.tags',
    Cell: (info) => {
      const url = info.value.filter((el) => el.key === MLFLOW_GIT_REPO_URL)[0];
      return url === undefined ? (
        '-'
      ) : (
        <ExtLink href={`${url.value}`}>{url.value}</ExtLink>
      );
    },
  },
  {
    Header: 'Commit Hash',
    Cell: (info) => {
      const commit = info.row.cells
        ?.filter((el) => el.column.Header === 'Github URL')[0]
        .value?.filter((el) => el.key === MLFLOW_GIT_COMMIT)[0]
        .value.substring(0, 7);
      return commit === undefined ? '-' : commit;
    },
  },
];

const ExtLink = styled.a`
  text-decoration: none;
  color: blue;
`;
