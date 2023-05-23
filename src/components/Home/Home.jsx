import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import './style.scss';
import Table from './Table/Table';

const Home = () => {
  const data = [
    { label: '1' },
    { label: '2' },
    { label: '3' },
    { label: '4' },
    { label: '5' },
  ];
  return (
    <div className="home">
      <h2>Информация о поливе</h2>
      <div className="home_info">
        <div className="home_info-departament">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={data}
            sx={{ width: 150 }}
            renderInput={(params) => (
              <TextField {...params} label="Отделение" />
            )}
          />
        </div>
        <div className="home_info-date-time">
          <h2>Date</h2>
          <h2>Time</h2>
        </div>
      </div>
      <div className="home_table">
        <Table />
      </div>
    </div>
  );
};

export default Home;
