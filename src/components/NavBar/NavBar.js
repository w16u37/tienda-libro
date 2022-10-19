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
                'claseInactiva'} to="/">Inicio</NavLink>
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 
                'claseInactiva'} to="/category/finanzas">Finanzas</NavLink>                  
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 
                'claseInactiva'} to="/category/gestion">Gestión</NavLink>
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 
                'claseInactiva'} to="/category/software">Software</NavLink>                
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 
                'claseInactiva'} to="/category/informatica">Informática</NavLink>                                
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}