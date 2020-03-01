import React from "react";

import CowList from "./cowlist";

var IndividualCow = props => <li>{props.Cow.name}</li>;

export default IndividualCow;

// import FishTable from "./FishTable.js";

// class FishTableRow extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showDescription: false
//     };
//   }

//   // Currently, the image being displayed is hardcoded from tinyurl.com
//   render(props) {
//     return (
//       <tr
//         onClick={() =>
//           this.setState({ showDescription: !this.state.showDescription })
//         }
//       >
//         <td className="fish-name">{this.props.fish.name}</td>
//         <td>
//           <img src={this.props.fish.image} />
//         </td>
//         {this.state.showDescription ? (
//           <td className="fish-description">{this.props.fish.description}</td>
//         ) : null}
//       </tr>
//     );
//   }
// }

// // PropTypes tell other developers what `props` a component expects
// // Warnings will be shown in the console when the defined rules are violated
// FishTableRow.propTypes = {
//   fish: React.PropTypes.object.isRequired
// };

// export default FishTableRow;
