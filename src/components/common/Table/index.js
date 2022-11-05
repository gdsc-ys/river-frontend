import { useMemo, useRef, useState } from 'react';
import {
  useBlockLayout,
  useResizeColumns,
  useSortBy,
  useTable,
} from 'react-table';
import { useSticky } from 'react-table-sticky';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { customScrollbar } from '@styles/scrollbar';

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
                    <Resizer {...column.getResizerProps()} />
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
                    {cell.render('Cell')}
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
// FIXME: Background color performance issue on hover?
const TableWrapper = styled.div`
  margin: 16px;
  font-size: 16px;

  overflow-x: auto;
  white-space: nowrap;
  user-select: none;
  ${customScrollbar};

  // TODO : Make it Resizable
  table {
    border-spacing: 0;
    text-align: center;
    will-change: background-color;

    [data-sticky-td] {
      position: sticky !important;
      background-color: #fafafa;
      // HARD - CODED
      box-shadow: 1px 3px 3px #939393;
    }

    thead {
      overflow-y: auto;
      overflow-x: hidden;
      th {
        border-bottom: 1px solid black;

        :hover {
          ${Resizer} {
            width: 5px;
          }
        }

        :active {
          ${Resizer} {
            width: 10px;
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

      :first-child {
        border-right: 1px solid black;
      }
    }

    th:nth-child(${(props) => props.hoveredCell}),
    td:nth-child(${(props) => props.hoveredCell}),
    tbody tr:hover {
      background-color: #f1f1f1;
    }
  }
`;
