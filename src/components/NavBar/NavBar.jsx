import Button from 'react-bootstrap/Button';
import "./NavBar.css";
import ImagenLogo from "../../assets/logo.jpg";
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = ()=>{
    return(
        <nav className='navegacion'>
            <img className='logo' src={ImagenLogo} alt="logo" />
            <ul className='list'>
                <li>
                    <a href="">Inicio</a>                   
                </li>
                <li>
                    <a href="">Categorias</a>
                </li>
                <li>
                <a href="">Nivel Educativo</a>
                </li>
                <li>
                <a href="">Hazte socio</a>
                </li>
                <li>
                <a href="">Sugerencias</a>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    )
}