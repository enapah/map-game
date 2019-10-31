import React, {FunctionComponent} from 'react';

import {useResizeAware} from '../hooks/use-resize-aware';
import {Country} from './country';
import {ScaledSvg} from './scaled-svg';

interface Props {
  boundingBox: BoundingBox;
  countries: Country[];
  selectCountry: (country: string) => void;
  blink: string;
  zoom: number;
  pan: {x: number; y: number};
}

export const Map: FunctionComponent<Props> = ({
  boundingBox,
  countries,
  selectCountry,
  blink,
  zoom,
  pan
}) => {
  const {size, ref} = useResizeAware();

  return (
    <main ref={ref}>
      <ScaledSvg boundingBox={boundingBox} size={size} zoom={zoom} pan={pan}>
        {countries.map(country => (
          <Country
            key={country.id}
            country={country}
            blink={blink === country.id}
            selectCountry={() => selectCountry(country.id)}
          />
        ))}
      </ScaledSvg>
    </main>
  );
};
