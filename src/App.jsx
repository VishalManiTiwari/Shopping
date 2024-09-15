import React,{useState} from 'react';
import MainSection from './components/MainSection';
import Login from './components/register/Login';
import Register from './components/register/Register';
import Home from  './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router , Route, Routes  } from 'react-router-dom';
import Cart from './components/Cart';
import AddProduct from './components/AddProduct';
import Footer from './components/Footer';
import Header from './components/Header';
import Womens from './components/Womens';
import MensWear from './components/MensWear';
import Electronics from './components/Electronics';

const App = () => {
  
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <Router>
     <div>
     <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
     </div>
      <Routes>
        <Route  path='/' element ={<Home/>}/>
        <Route  path='/login' element ={<Login/>}/>
        <Route  path='/register' element ={<Register/>}/>
        <Route  path='/about' element ={<About/>}/>
        <Route  path='/cart' element ={<Cart/>}/>
        <Route  path='/contact' element ={<Contact/>}/>
        <Route  path='/mainsection' element ={<MainSection />}/>
        <Route  path='/addproduct' element ={<AddProduct  />}/>
        <Route  path='/womens' element ={<Womens  />}/>
        <Route  path='/mens' element ={<MensWear  />}/>
        <Route  path='/electronics' element ={<Electronics  />}/>
      </Routes>
      <div> 
        {/* <div className='relative top-[3rem]'>
          <MainSection searchTerm={searchTerm} />
        </div> */}
        <Footer/>
      </div>
    </Router>
    
  )
}

export default App















