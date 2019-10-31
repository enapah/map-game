import React from 'react';

import {Map} from '../map';
import {Controls} from '../view-controls';
import {ScoreBoard} from '../score-board';
import {useGameLogic} from '../hooks/use-game-logic';
import {useControls} from '../hooks/use-controls';
import {CurrentCountryInfo} from './current-country-info';
import {GameOverDialog} from './game-over-dialog';

interface Props {
  allCountries: Country[];
  boundingBox: BoundingBox;
}

export const Game = ({allCountries, boundingBox}: Props) => {
  const controls = useControls();
  const {
    score,
    countries,
    selectCountry,
    currentCountry,
    blinkingCountry,
    startTime,
    restart
  } = useGameLogic(allCountries);

  return (
    <>
      <CurrentCountryInfo currentCountry={currentCountry} />
      <ScoreBoard countries={countries} score={score} startTime={startTime} />
      <Controls {...controls} />
      <Map
        selectCountry={selectCountry}
        boundingBox={boundingBox}
        countries={countries}
        blink={blinkingCountry}
        zoom={controls.zoom}
        pan={controls.pan}
      />
      <GameOverDialog
        show={countries.every(c => !c.active || c.answered)}
        onRestart={restart}
        score={score}
        startTime={startTime}
      />
    </>
  );
};
