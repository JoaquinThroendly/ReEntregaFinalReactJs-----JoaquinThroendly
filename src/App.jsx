import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailsContainer } from "./components/ItemDetailsContainer"
import { Provider } from './contexts/ItemsContext'
import { NavBar } from "./components/navbar"
import { Cart } from "./components/Cart"
function App() {
  return (
    <Provider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/titulo/:id" element={<ItemListContainer />} />
        <Route path="/nombre/:id" element={<ItemDetailsContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={404} />
      </Routes>
    </BrowserRouter></Provider>
  );
}


export default App
