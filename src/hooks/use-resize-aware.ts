import {useEffect, useRef, useState} from 'react';

export const useResizeAware = () => {
  const [size, setSize] = useState({width: 0, height: 0});
  const ref = useRef<HTMLElement>(null);

  const resize = () => {
    const current = ref.current;

    if (current) {
      const {width, height} = current.getBoundingClientRect();

      setSize({width, height});
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resize, false);
    resize();

    return () => window.addEventListener('resize', resize, false);
  }, []);

  return {size, ref};
};
