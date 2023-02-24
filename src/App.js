import './App.css';
import COunter from './counter';
import MyHeader from './MyHeader';

function App() {
  return (
    <div className="App">
        <MyHeader />
        <COunter />
        <h2>Hello World</h2>
        <b id='bold_text'>React.js</b>
    </div>
  );
}

export default App;
