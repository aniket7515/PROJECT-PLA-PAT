
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Schemes from './pages/Schemes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<LandingPage/>}/>
          <Route path='/schemes' exact element={<Schemes/>}/>

          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
