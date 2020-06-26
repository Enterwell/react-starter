// General imports
import { observable, action } from 'mobx';

// Repositories import
import UsersRepository from '../repositories/UsersRepository';

// Services import
import NotificationsService from '../services/NotificationsService';

// Models import
import User from '../models/User';

/**
 * Class represents the app model for the user data.
 *
 * @class UserAppModel
 */
class UserAppModel {
  /**
   * User.
   *
   * @type {User}
   * @memberof UserAppModel
   */
  @observable user;

  /**
   * Creates an instance of UserAppModel.
   *
   * @memberof UserAppModel
   */
  constructor() {
    this.user = null;
  }

  /**
   * Loads the user.
   *
   * @memberof UserAppModel
   */
  @action.bound
  loadUser() {
    try {
      this.user = UsersRepository.getUser();
    } catch (e) {
      NotificationsService.showDefaultErrorNotification();
    }
  }

  /**
   * Edits the user.
   *
   * @param {string} name Name
   * @memberof UserAppModel
   */
  @action.bound
  editUser(name) {
    try {
      const payload = this.user ? this.user.clone() : new User();
      payload.name = name;

      this.user = UsersRepository.editUser(payload);
    } catch (e) {
      NotificationsService.showDefaultErrorNotification();
    }
  }
}

export default UserAppModel;
