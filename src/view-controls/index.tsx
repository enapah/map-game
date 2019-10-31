import React, {FunctionComponent} from 'react';

import {useWindowKeyListener} from '../hooks/use-window-key-listener';
import {ControlsProps} from '../hooks/use-controls';
import {Button} from './button';

export const Controls: FunctionComponent<ControlsProps> = ({
  canZoomIn,
  canZoomOut,
  zoomIn,
  zoomOut,
  panLeft,
  panRight,
  resetPan,
  panUp,
  panDown
}) => {
  useWindowKeyListener({
    ArrowLeft: panLeft,
    ArrowRight: panRight,
    ArrowUp: panUp,
    ArrowDown: panDown,
    '+': zoomIn,
    '-': zoomOut,
    '0': resetPan
  });

  return (
    <nav>
      <section className="zoom">
        <Button className="zoom-in" action={zoomIn} disabled={!canZoomIn} icon="+" />
        <Button className="zoom-out" action={zoomOut} disabled={!canZoomOut} icon="-" />
      </section>
      <section className="pan">
        <Button className="pan-up" action={panUp} disabled={false} icon="▲" />
        <Button className="pan-left" action={panLeft} disabled={false} icon="◀" />
        <Button className="pan-reset" action={resetPan} disabled={false} icon="•" />
        <Button className="pan-right" action={panRight} disabled={false} icon="▶" />
        <Button className="pan-down" action={panDown} disabled={false} icon="▼" />
      </section>
    </nav>
  );
};
