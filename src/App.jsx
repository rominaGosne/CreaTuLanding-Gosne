import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartContextProvider } from './context/CartContext';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import Checkout from './pages/Checkout';
import { MyContext } from './context/MyContext';


export const App =()=>{
  return(
    <MyContext.Provider> 
      <CartContextProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/'element={<ItemListContainer/>}/>
      <Route path='/category/:category'element={<ItemListContainer/>}/>
      <Route path='/producto/:id'element={<ItemDetailContainer/>}/>
      <Route path='*'element={<h1> 404 </h1>}/>
      <Route path='/admin'element={<Admin/>}/>
      <Route path='/cart'element={<Cart/>}/>
      <Route path='/checkout'element={<Checkout/>}/>
      </Routes>
      </BrowserRouter>
      </CartContextProvider>
      </MyContext.Provider>
      
  )
}


export default App;
