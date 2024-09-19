import React from 'react';
import { style } from './style.js';

import Estructure from '../../components/Global/Estructure/index.jsx';
import ProfileStudent from '../../components/Global/Profile/ProfileStudent/index.jsx';
import ProfileAdmin from '../../components/Global/Profile/ProfileAdmin/index.jsx';
import ProfileSchool from '../../components/Global/Profile/ProfileSchool/index.jsx';

function Profile() {
  const userPermissionsInfo = sessionStorage.getItem('permissions');

  return (
    <Estructure userPermissionsInfo={userPermissionsInfo}>
      {userPermissionsInfo === 'student' && <ProfileStudent />}
      {userPermissionsInfo === 'admin' && <ProfileAdmin />}
      {userPermissionsInfo === 'school' && <ProfileSchool />}
      {userPermissionsInfo !== 'student' && userPermissionsInfo !== 'admin' && userPermissionsInfo !== 'school' && (
        <Typography variant="h6" color="error">
          Permissão não reconhecida. Por favor, faça login novamente.
        </Typography>
      )}
    </Estructure>
  );
}

export default Profile;
