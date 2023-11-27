import { makeObservable, observable, action } from 'mobx';

import { showDefaultErrorNotification } from '@/services/NotificationsService';
import { getUser, editUser } from '@/repositories/UsersRepository';
import User from '@/models/User';

/**
 * Class represents the app model for the user data.
 *
 * @class UserAppModel
 */
export default class UserAppModel {
  /**
   * Instance of the app model.
   *
   * @static
   * @memberof UserAppModel
   */
  static _appModel: UserAppModel = null;

  /**
   * Returns the app model's instance.
   *
   * @static
   * @returns app model's instance
   * @memberof UserAppModel
   */
  static get instance() {
    // Creates instance if it isn't set yet
    if (UserAppModel._appModel === null) {
      UserAppModel._appModel = new UserAppModel();
    }

    return UserAppModel._appModel;
  }

  /**
   * User.
   *
   * @memberof UserAppModel
   */
  user: User;

  /**
   * Creates an instance of UserAppModel.
   *
   * @memberof UserAppModel
   */
  constructor() {
    this.user = null;

    makeObservable(this, {
      user: observable,
      loadUser: action.bound,
      editUser: action.bound
    });
  }

  /**
   * Loads the user.
   *
   * @memberof UserAppModel
   */
  loadUser() {
    try {
      this.user = getUser();
    } catch (e) {
      console.error(e);
      showDefaultErrorNotification();
    }
  }

  /**
   * Edits the user.
   *
   * @param name Name
   * @memberof UserAppModel
   */
  editUser(name: string) {
    try {
      const payload = this.user ? this.user.clone() : new User();
      payload.name = name;

      this.user = editUser(payload);
    } catch (e) {
      console.error(e);
      showDefaultErrorNotification();
    }
  }
}