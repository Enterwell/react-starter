// General imports
import { createElement } from 'react';

/**
 * Wrapper around components that use view model.
 *
 * @export
 * @param {React.Component} Component Component that should be wrapped
 * @param {function} ViewModelProvider View model provider
 * @returns component with view model injected
 */
export const withViewModel = (Component, ViewModelProvider) => function WithViewModel(props) {
  return createElement(Component, {
    ...props,
    displayName: Component.displayName,
    viewModel: ViewModelProvider.instance
  }, null);
};

/**
 * Wrapper around components that use app models.
 *
 * @export
 * @param {React.Component} Component Component that should be wrapped
 * @param {function|Object.<string, function>} AppModelProviders App model providers
 * @returns component with app models injected
 */
export const withAppModels = (Component, AppModelProviders) => function WithAppModels(props) {
  return createElement(Component, {
    ...props,
    displayName: Component.displayName,
    ...typeof AppModelProviders === 'function' ? {
      appModel: AppModelProviders.instance
    } : {
      appModels: Object.entries(AppModelProviders).reduce((a, [k, v]) => ({
        ...a,
        [k]: v.instance
      }), {})
    }
  }, null);
};

const exports = {
  withViewModel,
  withAppModels
};
export default exports;
