export const selectToys = ({toys}) => toys;
export const selectToy = (toyId) => ({toys}) => toys.find(toy => toy.id === parseInt(toyId));
