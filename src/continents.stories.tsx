import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {Continents} from './continents';
import continents from './data/continents.json';

storiesOf('Continents', module).add('x', () => (
  <Continents continents={continents} select={action('Navigate')} />
));
