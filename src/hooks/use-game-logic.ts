import {useState} from 'react';

import {useCountries} from './use-countries';
import {useScore} from './use-score';
import {useBlink} from './use-blink';

export const useGameLogic = (allCountries: Country[]) => {
  const [startTime, setStartTime] = useState(Date.now());
  const {countries, currentCountry, correctAnswer, incorrectAnswer, reset} = useCountries(
    allCountries
  );
  const {score, increaseScore, decreaseScore, resetScore} = useScore();
  const {blinkingCountry, blinkCountry} = useBlink();

  return {
    score,
    currentCountry,
    countries,
    startTime,
    selectCountry: (id: string) => {
      if (currentCountry) {
        if (id === currentCountry.id) {
          increaseScore();
          correctAnswer();
        } else {
          blinkCountry(currentCountry.id);
          decreaseScore();
          incorrectAnswer();
        }
      }
    },
    blinkingCountry,
    restart: () => {
      setStartTime(Date.now());
      resetScore();
      reset();
    }
  };
};
