import Noty from 'noty';

// Overrides the default values
Noty.overrideDefaults({
  layout: 'bottomRight',
  theme: 'metroui',
  timeout: 0
});

export const SUCCESS_TYPE = 'success';
export const ERROR_TYPE = 'error';
export const WARNING_TYPE = 'warning';
export const INFO_TYPE = 'info';

/**
 * Creates the notification.
 *
 * @static
 * @param message Notification message
 * @param type Notification type
 * @returns notification
 */
function _createNotification(message: string, type: Noty.Type, timeout: number) {
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
 * @param message Notification message
 * @param type Notification type
 * @returns notification
 */
export function showNotification(message: string, type: Noty.Type, timeout: number = 0) {
  // Creates and shows the notification
  const notification = _createNotification(message, type, timeout);
  notification.show();

  return notification;
}

/**
 * Shows the success notification.
 *
 * @static
 * @param message Success message
 * @returns notification
 */
export function showSuccessNotification(message: string) {
  return showNotification(message, SUCCESS_TYPE, 3000);
}

/**
 * Shows the error notification.
 *
 * @static
 * @param message Error message
 * @returns notification
 */
export function showErrorNotification(message: string) {
  return showNotification(message, ERROR_TYPE);
}

/**
 * Shows the warning notification.
 *
 * @static
 * @param message Warning message
 * @returns notification
 */
export function showWarningNotification(message: string) {
  return showNotification(message, WARNING_TYPE);
}

/**
 * Shows the info notification.
 *
 * @static
 * @param messageInfo message
 * @returns notification
 */
export function showInfoNotification(message: string) {
  return showNotification(message, INFO_TYPE);
}

/**
 * Shows the default error notification.
 *
 * @static
 * @returns notification
 */
export function showDefaultErrorNotification() {
  return showErrorNotification('Trenutno nije moguće dohvatiti podatke. Osvježite stranicu da biste pokušali ponovno.');
}
