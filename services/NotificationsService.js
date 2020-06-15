// General imports
import Noty from 'noty';

// Overrides the default values
Noty.overrideDefaults({
  layout: 'bottomRight',
  theme: 'metroui',
  timeout: 0
});

/**
 * Class represents the notification service.
 * To use it properly, be sure that css files are included.
 *
 * @class NotificationService
 */
class NotificationService {
  /**
   * Success notification type.
   *
   * @static
   * @memberof NotificationService
   */
  static SUCCESS_TYPE = 'success';

  /**
   * Error notification type.
   *
   * @static
   * @memberof NotificationService
   */
  static ERROR_TYPE = 'error';

  /**
   * Warning notification type.
   *
   * @static
   * @memberof NotificationService
   */
  static WARNING_TYPE = 'warning';

  /**
   * Info notification type.
   *
   * @static
   * @memberof NotificationService
   */
  static INFO_TYPE = 'info';

  /**
   * Creates the notification.
   *
   * @static
   * @param {string} message Notification message
   * @param {string} type Notification type
   * @returns notification
   * @memberof NotificationService
   */
  static _createNotification(message, type, timeout) {
    // Creats the notification
    const notification = new Noty({
      text: message,
      type,
      timeout
    });

    // Returns the notification
    return notification;
  }

  /**
   * Shows the notification.
   *
   * @static
   * @param {string} message Notification message
   * @param {string} type Notification type
   * @returns notification
   * @memberof NotificationService
   */
  static showNotification(message, type, timeout = 0) {
    // Creates and shows the notification
    const notification = NotificationService._createNotification(message, type, timeout);
    notification.show();

    return notification;
  }

  /**
   * Shows the success notification.
   *
   * @static
   * @param {string} message Success message
   * @returns notification
   * @memberof NotificationService
   */
  static showSuccessNotification(message) {
    return NotificationService.showNotification(message, NotificationService.SUCCESS_TYPE, 3000);
  }

  /**
   * Shows the error notification.
   *
   * @static
   * @param {string} message Error message
   * @returns notification
   * @memberof NotificationService
   */
  static showErrorNotification(message) {
    return NotificationService.showNotification(message, NotificationService.ERROR_TYPE);
  }

  /**
   * Shows the warning notification.
   *
   * @static
   * @param {string} message Warning message
   * @returns notification
   * @memberof NotificationService
   */
  static showWarningNotification(message) {
    return NotificationService.showNotification(message, NotificationService.WARNING_TYPE);
  }

  /**
   * Shows the info notification.
   *
   * @static
   * @param {string} messageInfo message
   * @returns notification
   * @memberof NotificationService
   */
  static showInfoNotification(message) {
    return NotificationService.showNotification(message, NotificationService.INFO_TYPE);
  }

  /**
   * Shows the default error notification.
   *
   * @static
   * @returns notification
   * @memberof NotificationService
   */
  static showDefaultErrorNotification() {
    return NotificationService.showErrorNotification('Trenutno nije moguće dohvatiti podatke. Osvježite stranicu da biste pokušali ponovno.');
  }
}

export default NotificationService;
