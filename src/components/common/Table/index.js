import { useTable } from 'react-table';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <TableWrapper {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup, idx) => (
          <Tr key={idx} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, idx) => (
              <Th key={idx} {...column.getHeaderProps()}>
                {column.render('Header')}
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row, idx) => {
          prepareRow(row);
          return (
            <Tr key={idx} {...row.getRowProps()}>
              {row.cells.map((cell, idx) => (
                <Td key={idx} {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </TableWrapper>
  );
};

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
};

export default Table;

const TableWrapper = styled.table``;

const Thead = styled.thead;

const Tr = styled.tr;

const Th = styled.th;

const Td = styled.td``;

const Tbody = styled.tbody``;
