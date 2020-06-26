// App models import
import UserAppModel from '../app-models/UserAppModel';

/**
 * Class represents the app models factory. It's main purpose is providing app
 * models everyone who needs them.
 *
 * @class AppModelsFactory
 */
class AppModelsFactory {
  /**
   * User app model.
   *
   * @type {UserAppModel}
   * @memberof AppModelsFactory
   */
  userAppModel;

  /**
   * Creates an instance of AppModelsFactory.
   *
   * @memberof AppModelsFactory
   */
  constructor() {
    this.userAppModel = new UserAppModel();
  }
}

export default new AppModelsFactory();
