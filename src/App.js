
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Schemes from './pages/Schemes';
import InsauranceScheme from './componenets/InsauranceScheme';
import FinancialSchemes from './pages/FinancialSchemes';
import CropFieldScheme from './pages/CropFieldScheme';
import Msp from './pages/Msp';
import KrishiMarket from './pages/KrishiMarket';

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

          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
