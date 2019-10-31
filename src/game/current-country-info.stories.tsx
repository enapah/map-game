import React from 'react';
import {storiesOf} from '@storybook/react';

import getCountry from '../../.storybook/util/get-country';
import {CurrentCountryInfo} from './current-country-info';

storiesOf('Current Country Info', module)
  .add('x', () => <CurrentCountryInfo currentCountry={getCountry('SE')} />)
  .add('hides when no country is selected', () => <CurrentCountryInfo />);
