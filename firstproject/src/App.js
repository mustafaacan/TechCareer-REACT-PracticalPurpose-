import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App h-50">
      <header className="App-header pb-4">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-center text-primary bg-danger diplay-4 px-3">
          Hello World, this is the first edit
        </p>
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
