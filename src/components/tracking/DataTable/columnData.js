import {
  MdAddTask,
  MdAlarmOff,
  MdAlarmOn,
  MdNewReleases,
  MdOutlineHistory,
} from 'react-icons/md';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import styled from 'styled-components';

import {
  MLFLOW_GIT_COMMIT,
  MLFLOW_GIT_REPO_URL,
  MLFLOW_SOURCE_NAME,
} from '@data/mlflow_tags';

dayjs.extend(relativeTime);
dayjs.extend(duration);

export const columnData = [
  {
    Header: 'Run ID',
    accessor: 'info.run_id',
    sticky: 'left',
    width: 150,
    sortType: (rowA, rowB) => {
      const a = rowA.values['info.run_id'];
      const b = rowB.values['info.run_id'];

      return a.localeCompare(b);
    },
  },
  {
    Header: 'Source',
    accessor: 'info.source.name',
    sticky: 'left',
    Cell: (info) => {
      const source_name = info?.row?.cells
        ?.filter((el) => el.column.Header === 'Github URL')[0]
        ?.value?.filter((el) => el.key === MLFLOW_SOURCE_NAME)[0]?.value;
      return source_name === undefined ? '-' : source_name;
    },
  },
  {
    Header: 'Status',
    accessor: 'info.status',
    sticky: 'left',
    Cell: (info) => {
      const iconName = (stat) => {
        switch (stat) {
          case 'RUNNING':
            return <MdOutlineHistory />;
          case 'SCHEDULED':
            return <MdAddTask color="#FFFF66" />;
          case 'FINISHED':
            return <MdAlarmOn color="green" />;
          case 'FAILED':
            return <MdNewReleases color="red" />;
          case 'KILLED':
            return <MdAlarmOff />;
        }
      };

      const status = info.value;
      return (
        <StatusWrapper>
          <IconWrapper>{iconName(status)}</IconWrapper>
          {status}
        </StatusWrapper>
      );
    },
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
    accessor: 'info_runtime',
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
    sortType: (rowA, rowB) => {
      let rowA_startTime = rowA.values['info.start_time'];
      let rowA_endTime = rowA.values['info.end_time'] || -1;
      let rowB_startTime = rowB.values['info.start_time'];
      let rowB_endTime = rowB.values['info.end_time'] || -1;

      let rowA_elapsed = rowA_endTime - rowA_startTime;
      let rowB_elapsed = rowB_endTime - rowB_startTime;
      if (rowA_elapsed === rowB_elapsed) {
        return 0;
      } else {
        return rowA_elapsed > rowB_elapsed ? 1 : -1;
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
      const url = info?.value?.filter(
        (el) => el.key === MLFLOW_GIT_REPO_URL,
      )[0];
      return url === undefined ? (
        '-'
      ) : (
        <ExtLink href={`${url.value}`}>{url.value}</ExtLink>
      );
    },
  },
  {
    Header: 'Version',
    accessor: 'data.version',
    Cell: (info) => {
      const commit = info?.row?.cells
        ?.filter((el) => el.column.Header === 'Github URL')[0]
        ?.value?.filter((el) => el.key === MLFLOW_GIT_COMMIT)[0]
        ?.value?.substring(0, 7);
      return commit === undefined ? '-' : commit;
    },
  },
];

const ExtLink = styled.a`
  text-decoration: none;
  color: blue;
`;

const StatusWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  padding-left: 15px;

  font-size: 16px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  line-height: 1;
`;
