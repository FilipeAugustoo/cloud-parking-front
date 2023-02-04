import logo from 'assets/logo_cloud.png';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header>
      <nav className={styles.navbar}>
        <NavLink to="/home" className={styles.navbar__logo}><img src={logo} alt="Logo do site" /></NavLink>    
        <ul className={styles.navbar__list}>          
          <NavLink className={styles.navbar__list__item} to="" style={({ isActive }) =>
            isActive ? { color: 'white' } : undefined
          }>Registrar Entrada</NavLink>

          <NavLink className={styles.navbar__list__item} to="/cadastrar_carro" style={({ isActive }) =>
            isActive ? { color: 'white' } : undefined
          }>Cadastrar Carro</NavLink>
          
          <NavLink className={styles.navbar__list__item} to="" style={({ isActive }) =>
            isActive ? { color: 'white' } : undefined
          }>Lista De Carros</NavLink>
        </ul>  
      </nav>    
    </header>
  );
}