export const selectToys = ({ toys }) => toys;
export const selectToy =
  (toyId) =>
  ({ toys }) =>
    toys.find((toy) => toy.id === Number(toyId));

export const searchToysSelector =
  (sortDirection, reviewFilter, searchInput) =>
  ({ toys }) => {
    let results = Object.assign([], toys);

    if (searchInput)
      results = results.filter((toy) =>
        toy.name.toLowerCase().includes(searchInput.toLowerCase())
      );

    if (reviewFilter === 'on')
      results = results.filter((toy) => toy.reviews.length > 0);

    results.sort((toyA, toyB) => toyA.name.localeCompare(toyB.name));

    return sortDirection === 'backward' ? results.reverse() : results;
  };