'use client';

// General imports
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { TextField } from '@mui/material';

import { withAppModels } from '@/helpers/ComponentsHelper';
import UserAppModel from '@/app-models/UserAppModel';

// Styles import
import styles from './UserInformation.module.scss';

type MockedUserAppModel = {
  user: {
    name: string;
  },
  loadUser: () => void;
  editUser: () => void;
}

type UserInformationProps = {
  appModel: UserAppModel | MockedUserAppModel;
}

/**
 * Function representing the user information component.
 *
 * @returns UserInformation component
 */
function UserInformation({ appModel }: UserInformationProps) {
  const {
    user,
    loadUser,
    editUser
  } = appModel;

  const [name, setName] = useState('');

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const onChangeName = () => {
    editUser(name);
    setName('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.nameWrapper}>
        Hi
        {' '}
        <span className={styles.name} data-testid="user-name">{(user && user.name) || 'John Doe'}</span>
        !
      </div>
      <div className={styles.newNameWrapper}>
        That&apos;s not really my name. You should rather call me
        <TextField
          label="Name"
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onChangeName();
            }
          }}
        />
      </div>
    </div>
  );
}

// Export component without injected props so we can use it in Storybook
export { UserInformation as SimpleUserInformation };

// Default export with injected App Model
// @ts-ignore
export default withAppModels(observer(UserInformation), UserAppModel);
