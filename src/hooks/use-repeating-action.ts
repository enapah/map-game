import {useRef} from 'react';

export const useRepeatingAction = (action: () => void, timeout = 100) => {
  const intervalRef = useRef<number>();

  return {
    startAction: () => {
      action();

      return intervalRef.current = window.setInterval(action, timeout);
    },
    stopAction: () => window.clearInterval(intervalRef.current)
  };
};
