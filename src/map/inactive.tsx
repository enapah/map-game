import React, {FunctionComponent} from 'react';

import {Country} from './country';

interface Props {
  country: Country;
}

export const Inactive: FunctionComponent<Props> = ({
  country: {
    d,
    boundingBox: {minX, minY}
  }
}) => (
  <g transform={`translate(${minX}, ${minY})`}>
    <path fill="grey" d={d} />
  </g>
);
