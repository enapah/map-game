import React from 'react';
import {storiesOf} from '@storybook/react';

import {Duration} from './duration';

storiesOf('Duration', module)
  .add('12s', () => <Duration startTime={Date.now()} endTime={Date.now() + 12 * 1000} />)
  .add('123s', () => <Duration startTime={Date.now()} endTime={Date.now() + 123 * 1000} />)
  .add('1234s', () => <Duration startTime={Date.now()} endTime={Date.now() + 1234 * 1000} />)
  .add('123456s', () => <Duration startTime={Date.now()} endTime={Date.now() + 123456 * 1000} />);
