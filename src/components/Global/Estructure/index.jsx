import React from 'react';
import { Box } from '@mui/material';
import { style } from './style.js';

import SideBar from '../SideBar/index.jsx';

function Estructure({ children }) {
  const [side, setSide] = React.useState(false);

  return (
    <>
      <Box sx={style().page}>
        <SideBar sideState={{ side, setSide }}/>
        <Box sx={side ? style().bodyOpen : style().bodyClosed}>
          {children}
        </Box>
      </Box>
    </>
  );
}

export default Estructure;
