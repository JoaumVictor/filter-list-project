import React, { useEffect, useState } from 'react'

import '../styles/Search.css';
import { ToggleColumns } from './ToggleColumns';
import { ProductList } from './ProductList';
import { FilterForm } from './FilterForm';

export const Search = (props) => {
  const products = props.products;
  const [price, setPrice] = useState({ priceFrom: '', priceTo: '' });

  const [allProducts, setAllProducts] = useState([]);

  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const onPriceInputChange = (name, value) => {
    setPrice({...price, [name]: value})
  }

  const onCheckboxClick = (name, checked) => {
    setColumns({...columns, [name]: checked})
  }

  const filterProducts = () => {
    const filter = allProducts.filter((each) => each.price >= Number(price.priceFrom))
    if (price.priceTo !== '') return filter.filter((each) => each.price <= Number(price.priceTo))
    return filter
  }

  let displayedProducts = filterProducts();

  useEffect(() => {
    const newArray = JSON.parse(JSON.stringify(allProducts));
    products.forEach((each) => newArray.push(each));
    setAllProducts(newArray)
  }, [products])

  return (
    <>
      <div className="Products">
        <FilterForm
          priceFrom={price.priceFrom}
          priceTo={price.priceTo}
          onPriceInputChange={onPriceInputChange} />

        <ToggleColumns
          onCheckboxClick={onCheckboxClick}
          columns={columns} />

        <ProductList
          products={displayedProducts}
          columns={columns} />
      </div>
    </>
  );
}

export default Search;
