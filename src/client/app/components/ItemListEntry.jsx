import React from 'react';

const ItemListEntry = (props) => (
  <div className="item-list-entry" >
      <button onClick={() => props.onSelect(props.skill)}>{props.symbol}</button><p>{props.skill}</p>
  </div>
);

export default ItemListEntry;
