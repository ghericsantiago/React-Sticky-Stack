import React from 'react';
import { Provider } from './Context'
import { StickyStackContext } from './index';

export const StickyStackContainer = props => {
    return (
        <Provider>
            <StickyStackContext>
                { props.children }
            </StickyStackContext>
        </Provider>
    );
}

export default StickyStackContainer;