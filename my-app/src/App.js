// import logo from './logo.svg';
import logo from './skillbrain_logo.jpeg';
import './App.css';

function App() {
  console.log("App js before return");
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
          Learn React JS
        </a>
      </header>
    </div>
  );
}

export default App;
