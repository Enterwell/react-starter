// General imports
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';

// Components import
import { TextField } from '@material-ui/core';

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
    userAppModel
  } = props;
  const {
    user,
    loadUser,
    editUser
  } = userAppModel;

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

export default observer(UserInformation);
