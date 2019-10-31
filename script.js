const world = require('./src/data/countries.json');

const re = /([lLM]-?\d+(?:\.\d+)?,-?\d+(?:\.\d+)?)|(z)|([vVhH]-?\d+(?:\.\d+)?)/;

const fix = ({id, d, boundingBox}) => {
	const parts = d.split(re).filter(Boolean);
	
	const transformX = (x) => (Number(x) - boundingBox.minX).toFixed(3);
	const transformY = (y) => (Number(y) - boundingBox.minY).toFixed(3);
	
	const parts2 = parts.map((part) => {
		const command = part[0];
		let pos;
		
		switch (command) {
			case 'z':
				return 'z';
			case 'M':
				pos = part.slice(1).split(',');

				return `M${transformX(pos[0])},${transformY(pos[1])}`;
			case 'L':
				pos = part.slice(1).split(',');

				return `L${transformX(pos[0])},${transformY(pos[1])}`;
			case 'l':
				return part;
			case 'h':
				return part;
			case 'H':
				pos = part.slice(1).split(',');

				return `H${transformX(pos[0])}`;
			case 'v':
				return part;
			case 'V':
				pos = part.slice(1).split(',');
				
				return `V${transformY(pos[0])}`;
			default:
				throw new Error('unknown command ' + command);
		}
	});

	return {
		id,
		d: parts2.join(''),
		boundingBox
	};
};

console.log(JSON.stringify(world.map(fix), null, 2));

