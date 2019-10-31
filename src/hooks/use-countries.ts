import {useState} from 'react';

import {findNextCountryId} from '../game/find-next-country-id';

export const useCountries = (allCountries: Country[]) => {
  const [{countries, currentCountryId}, setCountries] = useState({
    countries: allCountries,
    currentCountryId: findNextCountryId(allCountries)
  });

  return {
    countries,
    currentCountry: countries.find(({id}) => id === currentCountryId),
    reset: () =>
      setCountries({
        countries: allCountries,
        currentCountryId: findNextCountryId(allCountries)
      }),
    correctAnswer: () =>
      setCountries(({countries, currentCountryId}) => {
        const nextCountries = countries.map(c =>
          c.id === currentCountryId ? {...c, answered: true} : c
        );

        return {
          countries: nextCountries,
          currentCountryId: findNextCountryId(nextCountries)
        };
      }),
    incorrectAnswer: () => {
      setCountries(({countries, currentCountryId}) => ({
        countries,
        currentCountryId: findNextCountryId(countries, currentCountryId)
      }));
    }
  };
};
