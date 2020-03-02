import React from "react";

import CowList from "./cowlist";

var IndividualCow = props => (
  <li onClick={() => props.Handler(props.Cow)}>{props.Cow.name}</li>
);

export default IndividualCow;
