import React, {useState} from 'react';
import {Country} from './country';

interface Props {
  country: Country;
  blink: boolean;
  selectCountry: () => void;
}

export const Active = ({country: {boundingBox, d}, blink, selectCountry}: Props) => {
  const [hover, setHover] = useState(false);

  return (
    <g
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={selectCountry}
      style={{cursor: 'pointer'}}
      transform={`translate(${boundingBox.minX}, ${boundingBox.minY})`}
    >
      <path
        fill={blink ? 'red' : hover ? '#444' : '#333'}
        stroke="grey"
        strokeWidth={0.1}
        fillOpacity={1}
        d={d}
      />
    </g>
  );
};
