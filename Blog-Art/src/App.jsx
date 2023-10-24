import { BrowserRouter, useRoutes } from 'react-router-dom'
import './index.css'

import Navbar from './pages/MenuPages'
import  Inicio  from './pages/InicioPages'
import Obras from './pages/ObrasPages'
import Contactanos from './pages/ContactanosPages'
import Registrate from './pages/RegistratePages'
import Login from './pages/LoginPages'
import Perfil from './pages/PerfilPages'
import Carrito from './pages/CarritoPages'
import FormularioObrasPages from './pages/FormularioObrasPages'

function Router() {
  let router = useRoutes([
    {path: '/', element:<Inicio/>},
    {path: '/Obras', element:<Obras/>},
    {path: '/Contactanos', element:<Contactanos/>},
    {path: '/Registrate', element:<Registrate/>},
    {path: '/Login', element:<Login/>},
    {path: '/Perfil', element:<Perfil/>},
    {path: '/Carrito', element:<Carrito/>},
    {path: '/Formulario', element:<FormularioObrasPages/>}
  ])
 return router
}

function App() {
  return(
    <div>
    <BrowserRouter>
    <Navbar/>
      <Router>
      </Router>
    </BrowserRouter>
  </div>
  )
}

export default App
