import React, {useState} from 'react';
import {Game} from './game';

import {Continents} from './continents';

import {allContinents} from './data/continents';
import {allCountries} from './data/countries';
import {shuffle} from './data/shuffle';

export const App = () => {
  const [selectedContinent, setSelectedContinent] = useState<Continent>();

  return selectedContinent ? (
    <Game
      allCountries={shuffle(
        allCountries.map(country => ({
          ...country,
          active: selectedContinent.countries.includes(country.id)
        }))
      )}
      boundingBox={selectedContinent.boundingBox}
    />
  ) : (
    <Continents continents={allContinents} select={setSelectedContinent} />
  );
};
