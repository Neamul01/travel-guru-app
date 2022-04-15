import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Booking from './pages/Booking/Booking';
import Search from './pages/Search/Search';
import Login from './pages/Login/Login';
import NotFound from './pages/Shared/NotFound/NotFound'
import Header from './pages/Shared/Header/Header';
import Blog from './pages/Blog/Blog';
import Destination from './pages/Destination/Destination';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/booking' element={<Booking></Booking>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/destination' element={<Destination></Destination>}></Route>
        <Route path='/news' element={<News></News>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
