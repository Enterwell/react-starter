// General imports
import React from 'react';

/**
 * Wrapper around components that use view model.
 *
 * @export
 * @param {React.Component} Component Component that should be wrapped
 * @param {function} ViewModelProvider View model provider
 * @returns component with view model injected
 */
export const withViewModel = (Component, ViewModelProvider) => (props) => React.createElement(Component, {
  ...props,
  displayName: Component.displayName,
  viewModel: ViewModelProvider.get()
}, null);

export default {
  withViewModel
};
