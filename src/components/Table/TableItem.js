import React from 'react';

const TableItem = ( {id, fav, name,toggleChecked}) => (
  <tr>
    <td>{id}</td>
    <td><input type="checkbox" checked={fav} onChange={() => toggleChecked(id)} className="star"/></td>
    <td name={name}>{name}</td>
  
  </tr>
)

export default TableItem;