import countries from '../../src/data/countries.json';
import titles from '../../src/data/titles.json';

export default (code: string, offsetX = 0, offsetY = 50): Country => {
  const {
    boundingBox: {minX, maxX, minY, maxY},
    ...country
  } = countries.find(({id}) => id === code)!;

  return {
    ...country,
    title: (titles as {[code: string]: string})[code],
    active: true,
    answered: false,
    boundingBox: {
      minX: offsetX,
      minY: offsetY,
      maxX: offsetX + maxX - minX,
      maxY: offsetY + maxY - minY
    }
  };
};
