import React from 'react'
import CreateLineTable from './CreateLineTable';

export const ProductList = ({ products, columns }) => {
  return (
    <div id="product-list">
      <header>
        <strong>Product List ({products.length} items)</strong>
      </header>
      <table>
        <thead>
          <tr>
          { columns.id && <th>ID</th>}
          { columns.name && <th>Name</th>}
          { columns.department && <th>Department</th>}
          { columns.price && <th>Price</th>}
          { columns.currency && <th>Currency</th>}
          </tr>
        </thead>
        <tbody>
          { products && products.map((each, i) => (
            <CreateLineTable key={i} obj={each} columns={columns} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
