import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import { Cart } from 'react-bootstrap-icons/dist';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
