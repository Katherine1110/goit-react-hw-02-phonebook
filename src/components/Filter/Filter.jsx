import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);

// class Filter extends Component {
//   state = {
//     contacts: [],
//     filter: "",
//     name: "",
//     number: "",
//   };

//   randomId = uuidv4();

//   handleChange = (e) => {
//     const { name, value } = e.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//     console.log(e);
//     // this.props.onChange(value);
//   };

//   render() {
//     return (
//       <label htmlFor={this.randomId}>
//         Find contacts by name
//         <input
//           onChange={this.handleChange}
//           type="text"
//           value={this.state.name}
//           id={this.randomId}
//           name="name"
//         />
//       </label>
//     );
//   }
// }
export default Filter;
