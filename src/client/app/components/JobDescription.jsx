import React from 'react';
import ItemList from './ItemList.jsx';

const JobDescription = (props) => (
  <div className="search-bar form-inline">
    <h2>Job Description</h2>
    <input className="form-control" type="textarea" onChange={props.onTextEntryHandleChange}/>
  </div>
);

export default JobDescription;
