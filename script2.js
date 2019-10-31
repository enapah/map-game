const world = require('./src/data/countries.json');

const countries = world.filter(({title}) => true);

const boundingBox = countries
	.map(({boundingBox}) => boundingBox)
	.reduce(({minX, maxX, minY, maxY}, boundingBox) => ({
		minX: Math.min(minX, boundingBox.minX),
		maxX: Math.max(maxX, boundingBox.maxX),
		minY: Math.min(minY, boundingBox.minY),
		maxY: Math.max(maxY, boundingBox.maxY)
	}));
const height = 650;
const width = 1010;

const xScale = width / (boundingBox.maxX - boundingBox.minX);
const yScale = height / (boundingBox.maxY - boundingBox.minY);

console.log({
	translate: `${-boundingBox.minX}, ${-boundingBox.minY}`,
	scale: Math.min(xScale, yScale)
});

console.log(boundingBox)