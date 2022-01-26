import './App.css';
import RatesList from './Components/RatesList';
import Header from './Components/Header'
import Calculator from './Components/Calculator'
function App() {
  return (
    <div className="App">
      <Header/>
      <RatesList/>
      <Calculator/>
    </div>
  );
}

export default App;
