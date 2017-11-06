import React from 'react';

const ItemListEntry = (props) => (
  <div>
    <div className="item-list-button" onClick={() => props.onSelect(props.skill)}>
      <div className="line-item button"><p className="button">{props.symbol}</p></div>
    </div>
    <div className="item-list-entry">
      <div className="line-item skill"><p >{props.skill}</p></div>
    </div>
  </div>
);

export default ItemListEntry;
