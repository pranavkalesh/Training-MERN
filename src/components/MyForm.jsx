// import React, { Component } from 'react';



// class MyForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       textValue: '',
//       skillValue: 'Skill not selected'
//     };
//   }

//   changeTextValue = (event) => {
//     this.setState({ textValue: event.target.value });
//   };

//   changeSkillValue = (event) => {
//     this.setState({ skillValue: event.target.value });
//   };

//   submitted = (event) => {
//     event.preventDefault();
//     alert(`Form is submitted: ${this.state.textValue} and ${this.state.skillValue}`);
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.submitted}>
//           <label>College Name:</label>
//           <input 
//             type='text' 
//             value={this.state.textValue} 
//             onChange={this.changeTextValue} 
//           />
//           <br /><br />
//           <label>Skill:</label>
//           <select value={this.state.skillValue} onChange={this.changeSkillValue}>
//             <option value="React">React</option>
//             <option value="Angular">Angular</option>
//             <option value="Springboot">Spring Boot</option>
//           </select>
//           <br /><br />
//           <button type='submit'>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default MyForm;
