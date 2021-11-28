import React from 'react';
import {DataGrid, GridRowData, GridColDef} from '@mui/x-data-grid';

type TableProps = {
    rowsData: GridRowData[];
    columnsData:GridColDef[];
}

const Table : React.FC<TableProps> = ({rowsData, columnsData})=>{
  return (
    <>
      <DataGrid
        rows={rowsData}
        columns={columnsData}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </>
  );
};

export default Table;
