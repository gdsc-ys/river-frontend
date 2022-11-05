import { useMemo } from 'react';
import { useBlockLayout, useTable } from 'react-table';
import { useSticky } from 'react-table-sticky';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { customScrollbar } from '@styles/scrollbar';

const Table = ({ columns, data }) => {
  const defaultColumn = useMemo(
    () => ({
      width: 180,
    }),
    [],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data, defaultColumn }, useSticky, useBlockLayout);

  return (
    <TableWrapper>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, idx) => (
            <tr key={idx} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, idx) => (
                <th key={idx} {...column.getHeaderProps()}>
                  {column.render('Header')}
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
                  <td key={idx} {...cell.getCellProps()}>
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

// Style table at here!
// If wrapping inner jsx element with styled, react throws warning!
const TableWrapper = styled.div`
  margin: 16px;
  font-size: 16px;
  overflow-x: scroll;
  ${customScrollbar};

  table {
    border-spacing: 0;
    text-align: center;

    [data-sticky-td] {
      position: sticky;
      background-color: #fafafa;
    }

    thead {
      th {
        border-bottom: 1px solid black;
      }
    }

    th,
    td {
      margin: 0;
      padding: 10px 15px;
      overflow: hidden;
      background: #f9f9f9;

      transition: 0.2s ease;
      :hover {
        background: rgb(230, 230, 230);
      }

      :first-child {
        border-right: 1px solid black;
      }
    }
  }
`;
