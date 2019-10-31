import {useState} from 'react';

export const useBlink = (timeout = 100) => {
  const [blinkingCountry, setBlink] = useState('');

  return {
    blinkCountry: (countryId: string) => {
      let i = 0;

      const blink = () => {
        i++;
        setBlink(countryId);
        setTimeout(() => {
          setBlink('');

          if (i < 3) {
            setTimeout(blink, timeout);
          }
        }, timeout);
      };
      blink();
    },
    blinkingCountry
  };
};
