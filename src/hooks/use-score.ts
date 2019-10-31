import {useState} from 'react';

export const useScore = () => {
  const [score, setScore] = useState(0);

  return {
    score,
    increaseScore: () => setScore(score + 1),
    decreaseScore: () => setScore(score - 1),
    resetScore: () => setScore(0)
  };
};
