import React from 'react';
import { Box } from '@mui/material';
import { style } from './style.js';

import SideBarLoading from '../SideBarLoading/index.jsx';

function EstructureLoading({ children }) {
  const [side, setSide] = React.useState(false);

  return (
    <>
      <Box sx={style().page}>
        <SideBarLoading sideState={{ side, setSide }}/>
        <Box sx={side ? style().bodyOpen : style().bodyClosed}>
          {children}
        </Box>
      </Box>
    </>
  );
}

export default EstructureLoading;
