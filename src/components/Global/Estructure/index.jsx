import React from 'react';
import { Box } from '@mui/material';
import { style } from './style.js';

import SideBar from '../SideBar/index.jsx';

function Estructure({ children, userPermitions }) {
  const [side, setSide] = React.useState(false);

  return (
    <>
      <Box sx={style().page}>
        <SideBar sideState={{ side, setSide }} userPermitions={userPermitions} />
        <Box sx={side ? style().bodyOpen : style().bodyClosed}>
          {React.Children.map(children, child => 
            React.cloneElement(child, { userPermitions })
          )}
        </Box>
      </Box>
    </>
  );
}

export default Estructure;
