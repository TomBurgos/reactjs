// import { useState} from 'react'
import Header from './componentes/header/Header'
import ItemListContainer from './componentes/menu/ItemListContainer'
import ItemDetailContainer from './componentes/menu/ItemDetailContainer'
import Contact from './componentes/menu/Contact'
import Cart from './componentes/cart/Cart'
import Footer from './componentes/footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const links = [
  { href: '/productos', name: 'Productos', id: 1 },
  { href: '/contacto', name: 'Contacto', id: 2 },
  { href: '/Informacion', name: 'Información', id: 3 },
]

const App = () => {
  // let [show, setShow] = useState(false)

  return (
    <BrowserRouter>
      <Header nombre="NunZia" links={links} />
      <menu>
        <Routes>
          <Route path="home" element="" />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/información" element="" />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </menu>
      <Footer />
    </BrowserRouter>
  )
}

export default App