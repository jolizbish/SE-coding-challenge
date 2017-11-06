import React from 'react';
import ItemList from './ItemList.jsx';

const JobDescription = (props) => (
  <div className="search-bar form-inline">
    <h4>Job Description</h4>
    <textarea className="form-control" type="text" rows="8" placeholder="text to analyze for skills..." onChange={(event) => props.onTextEntryHandleChange(event)}></textarea>
  </div>
);

export default JobDescription;
