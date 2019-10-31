import React, {FunctionComponent, useEffect, useState} from 'react';

import {Duration} from './duration';

interface Props {
  countries: Country[];
  score: number;
  startTime: number;
}

export const ScoreBoard: FunctionComponent<Props> = ({countries, score, startTime}) => {
  const [endTime, setEndTime] = useState(Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => setEndTime(Date.now()), 1000);

    return () => clearInterval(intervalId);
  });

  const numberOfActive = countries.filter(c => c.active).length;
  const numberOfAnswered = countries.filter(c => c.answered).length;

  if (numberOfAnswered === numberOfActive) {
    return null;
  }

  return (
    <section className="score-board">
      {numberOfAnswered} / {numberOfActive}
      <br />
      {score} poäng
      <br />
      Tid: <Duration startTime={startTime} endTime={endTime} />
    </section>
  );
};
