import React from 'react';
import {storiesOf} from '@storybook/react';

import getCountry from '../../.storybook/util/get-country';
import {Game} from './index';

const sweden = getCountry('SE');
const norway = getCountry('NO', 100);
const finland = getCountry('FI', 200);

storiesOf('Game', module)
  .add('x', () => (
    <Game
      boundingBox={{
        minX: 0,
        maxX: 300,
        minY: 0,
        maxY: 300
      }}
      allCountries={[sweden, norway, finland]}
    />
  ))
  .add('shows dialog when all questions are answered', () => (
    <Game
      boundingBox={{
        minX: 0,
        maxX: 300,
        minY: 0,
        maxY: 300
      }}
      allCountries={[]}
    />
  ));
