export const selectToys = ({ toys }) => toys;
export const selectToy = (toyId) => ({ toys }) => toys.find((toy) => toy.id === Number(toyId));

export const searchToysSelector =
  (sortDirection, reviewFilter, searchTerm) =>
  ({ toys }) => {
    let results = Object.assign([], toys);

    if (searchTerm)
      results = results.filter((toy) =>
        toy.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

    if (reviewFilter === 'on')
      results = results.filter((toy) => toy.reviews.length > 0);

    results.sort((toyA, toyB) => toyA.name.localeCompare(toyB.name));

    return sortDirection === 'backward' ? results.reverse() : results;
  };

