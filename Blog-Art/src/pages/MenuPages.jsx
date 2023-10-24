import { NavLink } from "react-router-dom"
import { LuLogIn } from 'react-icons/Lu'
import '../css/Menu.css'

function Navbar() {
    return(
    <div className="principal">
            <div className="container">
                <h1 className="titulo1"><a href="/">BLog Art</a></h1>
                <nav className="navegador" >
                    <ul>
                        <li><NavLink to='/' className={({isActive})=> isActive ? "border-b-2 border-blue-700 hover:border-b-2 hover:border-blue-700 transition duration-700" : "" }>Inicio</NavLink></li>
                        <li><NavLink to='/Obras' className={({isActive})=> isActive ? "border-b-2 border-blue-700 hover:border-b-2 hover:border-blue-700 transition duration-700" : "" }>Obras</NavLink></li>
                        <li><NavLink to='/Contactanos' className={({isActive})=> isActive ? "border-b-2 border-blue-700 hover:border-b-2 hover:border-blue-700 transition duration-700" : "" }>Contactanos</NavLink></li>
                        <li><NavLink to='/Registrate' className={({isActive})=> isActive ? "border-b-2 border-blue-700 hover:border-b-2 hover:border-blue-700 transition duration-700" : "" }>Registrate</NavLink></li>
                        <li className="login"><NavLink to='/Login' className={({isActive})=> isActive ? "flex items-center border-b-2 border-blue-700 hover:border-b-2 hover:border-blue-700 transition duration-700" : "flex items-center"  }><div className="logo"><LuLogIn/></div>Login</NavLink></li>
                    </ul>
                </nav>
            </div>
    </div>
    )
}

export default Navbar