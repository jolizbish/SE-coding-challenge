import React from 'react';

const ItemListEntry = (props) => (
  <div className="item-list-entry" >
      <button className="line-item" onClick={() => props.onSelect(props.skill)}>{props.symbol}</button><p className="line-item skill">{props.skill}</p>
  </div>
);

export default ItemListEntry;
