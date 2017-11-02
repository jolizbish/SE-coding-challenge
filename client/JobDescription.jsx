var JobDescription = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="textarea" onChange={props.onTextEntryHandleChange}/>
  </div>
);

window.JobDescription = JobDescription;
