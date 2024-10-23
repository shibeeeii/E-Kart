
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Whishlist from './pages/Whishlist'
import Cart from './pages/Cart'

function App() {


  return (
    <>
    
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Whishlist' element={<Whishlist/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
    <Footer/>
     
    </>
  )
}

export default App
