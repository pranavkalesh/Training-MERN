// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React, { Component } from 'react';
import '../styles/formStyles.css';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
      skillValue: 'Skill not selected'
    };
  }

  changeTextValue = (event) => {
    this.setState({ textValue: event.target.value });
  };

  changeSkillValue = (event) => {
    this.setState({ skillValue: event.target.value });
  };

  submitted = (event) => {
    event.preventDefault();
    alert(`Form is submitted: ${this.state.textValue} and ${this.state.skillValue}`);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitted}>
          <label>College Name:</label>
          <input 
            type='text' 
            value={this.state.textValue} 
            onChange={this.changeTextValue} 
          />
          <br /><br />
          <label>Skill:</label>
          <select value={this.state.skillValue} onChange={this.changeSkillValue}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Springboot">Spring Boot</option>
          </select>
          <br /><br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyForm;
