export const findNextCountryId = (
  countries: Country[],
  currentCountryId?: string,
): string => {
  const unanswered = countries.filter(c => c.active && !c.answered);

  if (unanswered.length === 0) {
    return '';
  }

  let index = unanswered.findIndex(c => c.id === currentCountryId);
  index++;
  if (index === unanswered.length) {
    index = 0;
  }

  return unanswered[index].id;
};
