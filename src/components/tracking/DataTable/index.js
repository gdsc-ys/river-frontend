import { useState } from 'react';

import { createColumnHelper, useReactTable } from '@tanstack/react-table';

const Table = () => {
  const table = useReactTable();
  const columnHelper = createColumnHelper();

  const tableData = [
    {
      name: 'Test',
    },
  ];
  const [data, setData] = useState([...tableData]);
};

export default Table;
