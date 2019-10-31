import React, {FunctionComponent} from 'react';

import {Inactive} from './inactive';
import {Answered} from './answered';
import {Active} from './active';

interface Props {
  selectCountry: () => void;
  blink: boolean;
  country: Country;
}

export const Country: FunctionComponent<Props> = ({country, blink, selectCountry}) => {
  if (!country.active) {
    return <Inactive country={country} />;
  }
  if (country.answered) {
    return <Answered country={country} />;
  }
  return <Active country={country} blink={blink} selectCountry={selectCountry} />;
};
