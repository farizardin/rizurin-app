import logo from './logo.svg';
import './App.css';
// import Wave from './landing/Wave';
import Wave2 from './landing/Wave2';

function App() {
  return (
    <div>
      <div
      style={{
        height: '100vh', // Half the screen height
        width: 'auto', // Full screen width
        overflow: 'hidden',
      }}
      >
        {/* <h1>Hello, Waves!</h1> */}
        <Wave2
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute', // Position it absolutely to fill the parent div
            top: '0',
            left: '0',
          }}
        />
      </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
