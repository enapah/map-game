import React, {FunctionComponent} from 'react';

interface Props {
  currentCountry?: Country;
}

export const CurrentCountryInfo: FunctionComponent<Props> = ({currentCountry}) =>
  currentCountry ? (
    <section className="current-country-info">
      <img alt="title" width="102" height="60" src={`flags/${currentCountry.id}.png`} />
      <div>{currentCountry.title}</div>
    </section>
  ) : null;
