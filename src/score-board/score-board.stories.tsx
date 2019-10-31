import React from 'react';
import {storiesOf} from '@storybook/react';

import getCountry from '../../.storybook/util/get-country';
import {ScoreBoard} from '.';

storiesOf('Score Board', module)
  .add('x', () => (
    <ScoreBoard
      countries={[
        {
          ...getCountry('SE'),
          answered: false,
          active: true
        }
      ]}
      score={1}
      startTime={Date.now()}
    />
  ))
  .add('not shown when all questions are answered', () => (
    <ScoreBoard
      countries={[
        {
          ...getCountry('SE'),
          answered: true,
          active: true
        }
      ]}
      score={1}
      startTime={Date.now()}
    />
  ));
