import React from 'react';
import Search from './Toys/SearchToys';
import FilterButtons from './Toys/FilterButtons';
import Toys from './Toys/Toys';
import SortButtons from './Toys/SortButtons';

const ToyList = () => (
  <>
    <Search />
    <SortButtons />
    <FilterButtons />
    <Toys />
  </>
);

export default ToyList;
