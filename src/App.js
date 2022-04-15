import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Booking from './pages/Booking/Booking';
import Search from './pages/Search/Search';
import Login from './pages/Login/Login';
import NotFound from './pages/Shared/NotFound'

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/booking' element={<Booking></Booking>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
