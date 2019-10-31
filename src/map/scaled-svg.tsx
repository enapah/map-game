import React, {FunctionComponent} from 'react';

interface Props {
  boundingBox: BoundingBox;
  size: {width: number; height: number};
  zoom: number;
  pan: {x: number; y: number};
}

export const ScaledSvg: FunctionComponent<Props> = ({
  boundingBox: {minX, maxX, minY, maxY},
  size: {width, height},
  zoom,
  pan,
  children
}) => {
  const scale = Math.min(width / (maxX - minX), height / (maxY - minY)) * zoom;

  const centerX = (width - (maxX - minX) * scale) / 2;
  const centerY = (height - (maxY - minY) * scale) / 2;
  const x = minX + pan.x;
  const y = minY + pan.y;

  return (
    <svg className="map">
      <g transform={`translate(${centerX}, ${centerY})`}>
        <g transform={`scale(${scale})`}>
          <g transform={`translate(${-x}, ${-y})`}>{children}</g>
        </g>
      </g>
    </svg>
  );
};
