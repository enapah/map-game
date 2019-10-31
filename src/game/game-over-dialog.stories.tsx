import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {GameOverDialog} from './game-over-dialog';

storiesOf('Game Over Dialog', module)
  .add('x', () => (
    <GameOverDialog
      show={true}
      onRestart={action('restart')}
      score={13}
      startTime={Date.now() - 5123}
    />
  ));
