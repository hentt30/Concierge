import React from 'react';
import Dashbar from '../../components/Dashbar';
import Table from '../../components/Table';
import {rows, columns} from './data';

const Dashboard: React.FC = ()=>{
  return (
    <div>

      <Table rowsData={rows} columnsData={columns}/>
    </div>
  );
};


export default Dashboard;
