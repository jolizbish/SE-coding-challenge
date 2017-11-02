"use strict";

var JobDescription = function JobDescription(props) {
  return React.createElement(
    "div",
    { className: "search-bar form-inline" },
    React.createElement(
      "h2",
      null,
      "Job Description"
    ),
    React.createElement("input", { className: "form-control", type: "textarea", onChange: props.onTextEntryHandleChange })
  );
};

window.JobDescription = JobDescription;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9Kb2JEZXNjcmlwdGlvbi5qc3giXSwibmFtZXMiOlsiSm9iRGVzY3JpcHRpb24iLCJwcm9wcyIsIm9uVGV4dEVudHJ5SGFuZGxlQ2hhbmdlIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRDtBQUFBLFNBQ25CO0FBQUE7QUFBQSxNQUFLLFdBQVUsd0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFFRSxtQ0FBTyxXQUFVLGNBQWpCLEVBQWdDLE1BQUssVUFBckMsRUFBZ0QsVUFBVUEsTUFBTUMsdUJBQWhFO0FBRkYsR0FEbUI7QUFBQSxDQUFyQjs7QUFPQUMsT0FBT0gsY0FBUCxHQUF3QkEsY0FBeEIiLCJmaWxlIjoiSm9iRGVzY3JpcHRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSm9iRGVzY3JpcHRpb24gPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyIGZvcm0taW5saW5lXCI+XG4gICAgPGgyPkpvYiBEZXNjcmlwdGlvbjwvaDI+XG4gICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0YXJlYVwiIG9uQ2hhbmdlPXtwcm9wcy5vblRleHRFbnRyeUhhbmRsZUNoYW5nZX0vPlxuICA8L2Rpdj5cbik7XG5cbndpbmRvdy5Kb2JEZXNjcmlwdGlvbiA9IEpvYkRlc2NyaXB0aW9uO1xuIl19