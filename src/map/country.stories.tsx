import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import getCountry from '../../.storybook/util/get-country';
import {Country} from './country';

const sweden = getCountry('SE', 0, 0);

const Sweden = (props: {country: Country; blink?: boolean}) => (
  <Country blink={false} {...props} selectCountry={action('answer')} />
);

storiesOf('Country', module)
  .addDecorator((Story: any) => (
    <svg style={{width: '100%', height: '600px'}}>
      <g transform={`scale(4)`}>
        <Story />
      </g>
    </svg>
  ))
  .add('answered', () => <Sweden country={{...sweden, active: true, answered: true}} />)
  .add('not answered', () => <Sweden country={{...sweden, active: true, answered: false}} />)
  .add('inactive', () => <Sweden country={{...sweden, active: false}} />)
  .add('blink', () => <Sweden country={{...sweden, active: true}} blink={true} />);
