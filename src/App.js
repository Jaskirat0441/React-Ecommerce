import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import Error from './Pages/Error';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path='/products' element={<Products/>} />
    <Route path='/singleproduct/:id' element={<SingleProduct/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='*' element={<Error/>} />
  </Routes>
  <Footer/>
  </BrowserRouter>
  );
}

export default App;
