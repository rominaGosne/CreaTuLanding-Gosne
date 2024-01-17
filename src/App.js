import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

export const App =()=>{
  return(
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/'element={<ItemListContainer/>}/>
      <Route path='/category/:category'element={<ItemListContainer/>}/>
      <Route path='/producto/:id'element={<ItemDetailContainer/>}/>
      <Route path='*'element={<h1> 404 </h1>}/>
      </Routes>
      </BrowserRouter>
  )
}


export default App;
