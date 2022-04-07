export const sortToys = (toys, direction = 'forward') => {
  const sortedToys = toys.sort((toyA, toyB) => toyA.name.localeCompare(toyB.name));
  return direction === "backward" ? sortedToys.reverse() : sortedToys;
};

export const filterReview = (toys, filter = 'off') => {
  if (filter === "on") return toys.filter((toy) => toy.reviews.length > 0);
  return toys;
};
