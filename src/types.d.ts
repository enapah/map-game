interface RawCountry {
  id: string;
  boundingBox: BoundingBox;
  d: string;
}

interface Country extends RawCountry {
  title: string;
  active: boolean;
  answered: boolean;
}

interface Continent {
  code: string;
  name: string;
  boundingBox: BoundingBox;
  countries: string[];
}

interface BoundingBox {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}
