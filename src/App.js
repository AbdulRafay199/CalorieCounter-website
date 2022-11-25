import Navbar from './components/Navbar';
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import FoodState from './context/FoodState';
import Consumptionstate from './context/Consumptionstate';
import Outermain from './components/Outermain';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Consumptionstate>
        <FoodState>
          <Navbar/>
          <Routes>
            <Route path='*' element={<Outermain/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/Signup' element={<Signup/>}/>
          </Routes>      
        </FoodState>
      </Consumptionstate>
    </>
  );
}

export default App;
