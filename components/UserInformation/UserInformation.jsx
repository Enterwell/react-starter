// General imports
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

// Components import
import { TextField } from '@material-ui/core';

// App models import
import UserAppModel from '../../app-models/UserAppModel';

// Helpers import
import { withAppModels } from '../../helpers/ComponentsHelper';

// Styles import
import styles from './UserInformation.module.scss';

/**
 * Function represents the user information component.
 *
 * @param {Object} props Various component's props
 * @returns component's elements
 */
function UserInformation(props) {
  const {
    appModel
  } = props;
  const {
    user,
    loadUser,
    editUser
  } = appModel;

  const [name, setName] = useState('');

  useEffect(() => {
    loadUser();
  }, []);

  const onChangeName = () => {
    editUser(name);
    setName('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.nameWrapper}>
        Hi
        {' '}
        <span className={styles.name}>{(user && user.name) || 'John Doe'}</span>
        !
      </div>
      <div className={styles.newNameWrapper}>
        That's not really my name. You should rather call me
        <TextField
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

export default withAppModels(observer(UserInformation), UserAppModel);
