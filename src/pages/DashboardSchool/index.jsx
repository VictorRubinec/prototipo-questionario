import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { style } from './style.js';

import Estructure from '../../components/Global/Estructure/index.jsx';

import Bars from '../../components/Dashboards/Bars/index.jsx';
import Lines from '../../components/Dashboards/Lines/index.jsx';
import Pie from '../../components/Dashboards/Pie/index.jsx';
import Scatter from '../../components/Dashboards/Scatter/index.jsx';

function DashboardSchool() {
  return (
    <Estructure userPermitions={"school"}>
      <Box sx={style().box}>
        <Typography variant="h4" sx={style().title}>
          Dashboard
        </Typography>
        <Divider sx={style().divider} />
        <Typography variant="h5" sx={style().subtitle}>
          Gráficos
        </Typography>
        <Box sx={style().charts}>
          <Bars />
          <Lines />
        </Box>
        <Box sx={style().charts}>
          <Pie />
          <Scatter />
        </Box>
      </Box>
    </Estructure>
  );
}

export default DashboardSchool;
