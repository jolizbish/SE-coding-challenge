import React from 'react';
import ItemListEntry from './ItemListEntry.jsx';

const ItemList = (props) => (
  <div className="item-list">
    <h4>{props.title}</h4>
    <hr />
    {props.skills.map((skill) =>
      <ItemListEntry skill={skill} onSelect={props.onSelect} symbol={props.symbol} key={props.skills.indexOf(skill)}/>
    )}
  </div>
);


export default ItemList;
