import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {Controls} from '.';

storiesOf('Controls', module).add('x', () => (
  <Controls
    pan={{x: 0, y: 0}}
    zoom={0}
    canZoomIn={true}
    canZoomOut={true}
    zoomIn={action('zoom in')}
    zoomOut={action('zoom out')}
    panUp={action('pan up')}
    panLeft={action('pan left')}
    resetPan={action('reset pan')}
    panRight={action('pan right')}
    panDown={action('pan down')}
  />
));
