import React from 'react';

interface Props {
  continents: Continent[];
  select: (continent: Continent) => void;
}

export const Continents = ({select, continents}: Props) => (
  <main className="continents">
    <h3>Pick a continent</h3>
    <ul>
      {continents.map(continent => (
        <li key={continent.code} onClick={() => select(continent)}>
          {continent.name}
        </li>
      ))}
    </ul>
  </main>
);
