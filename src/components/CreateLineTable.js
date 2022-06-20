import React from 'react'

export default function CreateLineTable({obj, columns}) {
  const { name, department, id, price, currency } = obj;
  return (
    <tr>
      { columns.id && <td>{ id }</td>}
      { columns.name && <td>{ name }</td>}
      { columns.department && <td>{ department }</td>}
      { columns.price && <td>{ price }</td>}
      { columns.currency && <td>{ currency }</td>}
    </tr>
  )
}
