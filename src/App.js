
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
// import Schemes from './pages/Schemes';
import InsauranceScheme from './componenets/InsauranceScheme';
import FinancialSchemes from './pages/FinancialSchemes';
import CropFieldScheme from './pages/CropFieldScheme';
import Msp from './pages/Msp';
import KrishiMarket from './pages/KrishiMarket';
// import Weather from './pages/Weather';
import Login from './pages/Login';
import Loan from './pages/Loan';
import TypesFarming from './pages/TypesFarming';
import UseofPesticides from './pages/UseofPesticides';
import SustainabaleAgri from './pages/SustainabaleAgri';
import Seeds from './pages/Seeds';
import Faq from './pages/Faq';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<LandingPage/>}/>
          <Route path='/insaurancescheme' exact element={<InsauranceScheme/>}/>
          <Route path='/financialcheme' exact element={<FinancialSchemes/>}/>
          <Route path='/cropscheme' exact element={<CropFieldScheme/>}/>
          <Route path='/msp' exact element={<Msp/>}/>
          <Route path='/krishikshetra' exact element={<KrishiMarket/>}/>
          {/* <Route path='/weather' exact element={<Weather/>}/> */}
          <Route path='/login' exact element={<Login/>}/>
          <Route path='/loan' exact element={<Loan/>}/>
          <Route path='/typeoffarming' exact element={<TypesFarming/>}/>
          <Route path='/useofpesticides' exact element={<UseofPesticides/>}/>
          <Route path='/sustainableagri' exact element={<SustainabaleAgri/>}/>
          <Route path='/seed' exact element={<Seeds/>}/>
          <Route path='/faq' exact element={<Faq/>}/>
          
          

          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
