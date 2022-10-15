import Button from 'react-bootstrap/Button';
import "./NavBar.css";
import ImagenLogo from "../../assets/logo.jpg";
import { CartWidget } from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = ()=>{
    return(
        <nav className='nav-container'>
            <div>
                <img className='logo' src={ImagenLogo} alt="logo" />
            </div>
            <div className='navegacion'>
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 
                'claseInactiva'} to="/inicio">Inicio</NavLink>
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 
                'claseInactiva'} to="/categorias">Categorias</NavLink>                  
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 
                'claseInactiva'} to="/niveles">Niveles</NavLink>
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 
                'claseInactiva'} to="/socios">Socios</NavLink>                
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 
                'claseInactiva'} to="/contacto">Sugerencias</NavLink>                                
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}