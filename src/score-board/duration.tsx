import React, {FunctionComponent} from 'react';

interface Props {
  startTime: number;
  endTime: number;
}

const durationToString = (hours: number, minutes: number, seconds: number) => {
  if (hours) {
    return `${hours}h ${minutes}min ${seconds}s`;
  }
  if (minutes) {
    return `${minutes}min ${seconds}s`;
  }
  return `${seconds}s`;
};

export const Duration: FunctionComponent<Props> = ({startTime, endTime}) => {
  const milliseconds = endTime - startTime;
  const hours = Math.floor(milliseconds / 1000 / 60 / 60);
  const minutes = Math.floor((milliseconds - hours * 60 * 60 * 1000) / 1000 / 60);
  const seconds = Math.floor((milliseconds - hours * 60 * 60 * 1000 - minutes * 60 * 1000) / 1000);

  return <>{durationToString(hours, minutes, seconds)}</>;
};
