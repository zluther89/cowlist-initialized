import React from "react";
import IndividualCow from "./individialCow.jsx";

var CowList = props => (
  <ul className="cow-list">
    {props.Cows.map(cow => (
      <IndividualCow Cow={cow} Handler={props.Handler} />
    ))}
  </ul>
);

export default CowList;
