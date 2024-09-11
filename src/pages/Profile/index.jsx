import React from 'react';
import { style } from './style.js';

import Estructure from '../../components/Global/Estructure/index.jsx';
import ProfileStudent from '../../components/Global/Profile/ProfileStudent/index.jsx';
import ProfileAdmin from '../../components/Global/Profile/ProfileAdmin/index.jsx';
import ProfileSchool from '../../components/Global/Profile/ProfileSchool/index.jsx';

function Profile() {

  const user = sessionStorage.getItem('permissions');

  switch (user) {
    case 'student':
      return (
        <Estructure>
          <ProfileStudent />
        </Estructure>
      );
    case 'admin':
      return (
        <Estructure>
          <ProfileAdmin />
        </Estructure>
      );
    case 'school':
      return (
        <Estructure>
          <ProfileSchool />
        </Estructure>
      );
  }

}

export default Profile;