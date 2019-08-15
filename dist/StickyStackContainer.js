import React from 'react';
import { Provider } from './Context';
import { StickyStackContext } from './index';
export const StickyStackContainer = props => {
  return React.createElement(Provider, null, React.createElement(StickyStackContext, null, props.children));
};
export default StickyStackContainer;