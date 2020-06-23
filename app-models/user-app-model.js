// General imports
import { observable, action } from 'mobx';

// Repositories import
import UsersRepository from '../repositories/users-repository';

// Services import
import NotificationsService from '../services/notifications-service';

// Models import
import User from '../models/user';

/**
 * Class represents the app model for the user data.
 *
 * @class UserAppModel
 */
class UserAppModel {
  /**
   * Instance of the app model.
   *
   * @static
   * @memberof UserAppModel
   */
  static _appModel = null;

  /**
   * Returns the app model's instance.
   *
   * @static
   * @returns app model's instance
   * @memberof UserAppModel
   */
  static get() {
    // Creates instance if it isn't set yet
    if (UserAppModel._appModel === null) {
      UserAppModel._appModel = new UserAppModel();
    }

    return UserAppModel._appModel;
  }

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
