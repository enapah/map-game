export const shuffle = <T>(arr: T[]): T[] =>
  arr.reduce((acc: T[], t) => {
    acc.splice(Math.round(Math.random() * acc.length), 0, t);
    return acc;
  }, []);
