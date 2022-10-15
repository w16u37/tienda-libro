import Button from 'react-bootstrap/Button';
import "./NavBar.css";
import ImagenLogo from "../../assets/logo.jpg";
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = ()=>{
    return(
        <nav className='nav-container'>
            <div>
                <img className='logo' src={ImagenLogo} alt="logo" />
            </div>
            <div className='navegacion'>
                <Link to="/inicio">Inicio</Link>                  
                <Link to="/categorias">Categorias</Link>
                <Link to="/nivel">Niveles</Link>
                <Link to="/socios">Socios</Link>
                <Link to="/contacto">Sugerencias</Link>                
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}