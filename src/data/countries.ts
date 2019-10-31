import titles from './swedish-titles.json';
import countries from './countries.json';

export const allCountries: Country[] = countries.map(country => ({
  ...country,
  title: (titles as {[code: string]: string})[country.id],
  active: false,
  answered: false
}));
