import React from 'react';
import { Box } from '@mui/material';
import { style } from './style.js';

import SideBar from '../SideBar/index.jsx';

import useVerifyUserPermissions from '../../../utils/functions/useVerifyUserPermissions/index.jsx';

function Estructure({ children, userPermissionsInfo }) {

  const verifyUserPermissions = useVerifyUserPermissions(userPermissionsInfo);

  const [side, setSide] = React.useState(false);

  if (!verifyUserPermissions) {
    return <></>;
  } else {
    return (
      <>
        <Box sx={style().page}>
          <SideBar sideState={{ side, setSide }} />
          <Box sx={side ? style().bodyOpen : style().bodyClosed}>
            {children}
          </Box>
        </Box>
      </>
    );
  }
}

export default Estructure;
