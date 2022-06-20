import React from 'react'

export const FilterForm = (props) => {

  const onPriceInputChange = ({ target }) => {
    props.onPriceInputChange(target.id, Number(target.value))
  }

  return (
    <div>
      <label htmlFor="priceFrom">Price From:</label>
      <input
        type="number"
        onChange={(e) => onPriceInputChange(e)}
        id="priceFrom"
        value={props.priceFrom}
        name="priceFrom"
        placeholder="Price from..." />
      <label htmlFor="priceTo">Price To:</label>
      <input
        type="number"
        onChange={(e) => onPriceInputChange(e)}
        id="priceTo"
        value={props.priceTo}
        name="priceTo"
        placeholder="Price to..." />
    </div>
  )
}
