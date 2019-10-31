import {useEffect} from 'react';

export const useWindowKeyListener = (mapping: {[key: string]: () => void}) => {
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      const f = mapping[e.key];

      f && f();
    };

    window.addEventListener('keydown', listener);

    return () => window.removeEventListener('keydown', listener);
  }, [mapping]);
};
