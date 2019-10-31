import continents from './continents.json';

const mergeToWorld = (continents: Continent[]) => ({
  name: 'World',
  code: 'all',
  boundingBox: continents
    .map(({boundingBox}) => boundingBox)
    .reduce(({minX, maxX, minY, maxY}, boundingBox) => ({
      minX: Math.min(minX, boundingBox.minX),
      maxX: Math.max(maxX, boundingBox.maxX),
      minY: Math.min(minY, boundingBox.minY),
      maxY: Math.max(maxY, boundingBox.maxY)
    })),
  countries: continents.reduce((all: string[], {countries}) => [...all, ...countries], [])
});

export const allContinents = [mergeToWorld(continents), ...continents];
