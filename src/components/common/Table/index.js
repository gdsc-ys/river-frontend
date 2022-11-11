import { useMemo, useState } from 'react';
import {
  useBlockLayout,
  useResizeColumns,
  useSortBy,
  useTable,
} from 'react-table';
import { useSticky } from 'react-table-sticky';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { textTruncate } from '@styles/layout';
import { customScrollbar } from '@styles/scrollbar';

// TODO : Implement Drag-n-Drop by row!
// TODO : Adjust box-shadow if scrollbar if on leftmost position.
const Table = ({ columns, data }) => {
  const [hoveredCell, setHoveredCell] = useState(undefined);
  const defaultColumn = useMemo(
    () => ({
      minWidth: 50,
      width: 180,
    }),
    [],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      { columns, data, defaultColumn },
      useSticky,
      useBlockLayout,
      useResizeColumns,
      useSortBy,
    );

  return (
    <TableWrapper
      hoveredCell={hoveredCell}
      onMouseLeave={() => setHoveredCell(undefined)}
    >
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, idx) => (
            <tr key={idx} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, idx) => (
                <th
                  key={idx}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  onClick={() => column.toggleSortBy(!column.isSortedDesc)}
                  onMouseOver={() => setHoveredCell(idx + 1)}
                >
                  {column.render('Header')}
                  <SortedSpan>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? '\t⬇︎'
                        : '\t⬆︎'
                      : ''}
                  </SortedSpan>
                  {column.canResize && (
                    <Resizer
                      {...column.getResizerProps()}
                      onClick={(event) => event.stopPropagation()}
                    />
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, idx) => {
            prepareRow(row);
            return (
              <tr key={idx} {...row.getRowProps()}>
                {row.cells.map((cell, idx) => (
                  <td
                    key={idx}
                    onMouseOver={() => setHoveredCell(idx + 1)}
                    {...cell.getCellProps()}
                  >
                    <TextWrapper>{cell.render('Cell')}</TextWrapper>
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableWrapper>
  );
};

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default Table;

const TextWrapper = styled.div`
  ${textTruncate};
`;

const Resizer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 0;
  height: 100%;

  background: #bdbdbd;
  z-index: 1;
  touch-action: none;

  transition: 0.2s ease;
`;

const SortedSpan = styled.span`
  font-size: 16px;
`;

// Style table at here!
// If wrapping inner jsx element with styled, react throws warning!
const TableWrapper = styled.div`
  margin: 16px;
  font-size: 16px;

  overflow-x: auto;
  white-space: nowrap;
  user-select: none;
  ${customScrollbar};

  table {
    border-spacing: 0;
    text-align: center;
    will-change: background-color;

    [data-sticky-td] {
      position: sticky !important;
      background-color: #fafafa;
    }

    [data-sticky-last-left-td] {
      box-shadow: 3px 3px 3px #939393;
    }

    thead {
      overflow-y: auto;
      overflow-x: hidden;

      th {
        border-bottom: 1px solid black;
        background-color: #f4f4f4;

        :hover {
          ${Resizer} {
            width: 7.5px;
          }
        }

        :active {
          ${Resizer} {
            width: 15px;
            background-color: #8e8e8e;
          }
        }
      }
    }

    tbody {
      overflow-y: scroll;
      overflow-x: hidden;
    }

    th,
    td {
      position: relative;
      margin: 0;
      padding: 10px 15px;
      overflow: hidden;
      background: #f9f9f9;

      transition: 0.2s ease;
    }

    th:nth-child(${(props) => props.hoveredCell}),
    td:nth-child(${(props) => props.hoveredCell}),
    tbody tr:hover {
      background-color: #f1f1f1;

      td {
        background-color: #f1f1f1;
      }
    }
  }
`;
