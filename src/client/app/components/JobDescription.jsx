import React from 'react';
import ItemList from './ItemList.jsx';
import $ from 'jquery';

const JobDescription = (props) => (
  <div className="search-bar form-inline">
    <h2>Job Description</h2>
    <textarea className="form-control" type="text" rows="5" onChange={() => props.onTextEntryHandleChange($('.form-control').val())}></textarea>
  </div>
);

export default JobDescription;