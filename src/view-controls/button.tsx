import React, {FunctionComponent} from 'react';

import {useRepeatingAction} from '../hooks/use-repeating-action';

interface Props {
  className: string;
  action: () => void;
  disabled: boolean;
  icon: string;
}

export const Button: FunctionComponent<Props> = ({className, action, disabled, icon}) => {
  const {startAction, stopAction} = useRepeatingAction(action);

  return (
    <div
      className={`${className}${disabled ? ' disabled' : ''}`}
      onMouseDown={startAction}
      onMouseUp={stopAction}
      onMouseLeave={stopAction}
    >
      {icon}
    </div>
  );
};
