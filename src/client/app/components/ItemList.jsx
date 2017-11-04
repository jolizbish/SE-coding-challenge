import React from 'react';
import ItemListEntry from './ItemListEntry.jsx';

const ItemList = (props) => (
  <div className="item-list">
    <h3>{props.title}</h3>
    {props.skills.map((skill) =>
      <ItemListEntry skill={skill} onSelect={props.onSelect} symbol={props.symbol}/>
    )}
  </div>
);


export default ItemList;
