import './App.css';
import RatesList from './Components/RatesList';
import Header from './Components/Header'
import Calculator from './Components/Calculator'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './Components/Currencydetails/Details';
import Nav from './Components/Nav';
function App() {
  return (
    <div className="App">
      <Header/>
      
      <Router>
        <Routes>
          <Route path='/' element={<RatesList/>}/>
          <Route path='/calculator' element={<Calculator/>}/>
         
          <Route path='/details/:currCode' element={<Details/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
