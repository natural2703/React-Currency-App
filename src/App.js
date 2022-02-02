import './App.css';
import RatesList from './Components/RatesList';
import Header from './Components/Pagetemplate/Header'
import Calculator from './Components/Calculator'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './Components/Currencydetails/Details';
import Nav from './Components/Nav';
import NotFound from './Components/Pagetemplate/NotFound';
import Footer from './Components/Pagetemplate/Footer';
import UserSettings from './Components/UserSettings';
function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<RatesList/>}/>
          <Route path='/calculator' element={<Calculator/>}/>
          <Route path='/details/:currCode' element={<Details/>}/>
          <Route path="/settings" element={<UserSettings/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
