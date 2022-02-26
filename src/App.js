import logo from './logo.svg';
import ResultCard from "./ResultCard";
import './App.css';
import './ResultCard.css'

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        <span className="title">IATRI</span>
      </header>
      <div>
        <div className='searchbar'></div>
      </div>
      <div className='resultSection'>
        <ResultCard></ResultCard>
        <ResultCard></ResultCard>
        <ResultCard></ResultCard>
        <ResultCard></ResultCard>
        <ResultCard></ResultCard>
        <ResultCard></ResultCard>
        <ResultCard></ResultCard>
        <ResultCard></ResultCard>
        </div>
    </div>
  );
}

export default App;
