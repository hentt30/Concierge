/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

export const columns = [

  {field: 'id', headerName: 'Id', width: 150},
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
  },
  {
    field: 'genre',
    headerName: 'Genre',
    width: 150,
  },
  {
    field: 'link',
    headerName: 'Link',
    renderCell: (rowData) => {
      return (<a href={rowData.row.link} target="_blank"
        rel="noreferrer"
      >
        Link</a>);
    },
    width: 350,
  },
];

