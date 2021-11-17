// ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

import logo from "./logo.svg";
import "./App.css";
const { v4: uuidv4 } = require("uuid");
uuidv4();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
