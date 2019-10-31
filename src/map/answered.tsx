import React, {FunctionComponent} from 'react';

import {Country} from './country';

interface Props {
  country: Country;
}

export const Answered: FunctionComponent<Props> = ({
  country: {
    id,
    d,
    boundingBox: {maxX, minY, minX, maxY}
  }
}) => (
  <g transform={`translate(${minX}, ${minY})`}>
    <clipPath id={id}>
      <path d={d} />
    </clipPath>
    <image
      clipPath={`url(#${id})`}
      href={`flags/${id}.png`}
      width={maxX - minX}
      height={maxY - minY}
      preserveAspectRatio="none"
    />
    <path stroke="grey" fill="#333" strokeWidth={0.1} fillOpacity={0.5} d={d} />
  </g>
);
