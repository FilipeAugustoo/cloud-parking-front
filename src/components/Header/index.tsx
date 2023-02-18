import logo from 'assets/logo_cloud.png';
import classNames from 'classnames';
import { AuthContext } from 'contexts/auth/AuthContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  const auth = useContext(AuthContext);
  const user = auth.user;

  return (
    <header>
      <nav className={styles.navbar}>
        <NavLink to="/" className={classNames({
          [styles.navbar__logo]: user,
          [styles.navbar__logo__center]: !user
        })}><img src={logo} alt="Logo do site" /></NavLink>   

        {true ? <ul className={styles.navbar__list}>          
          <NavLink className={styles.navbar__list__item} to="/registrar_entrada" style={({ isActive }) =>
            isActive ? { color: 'white' } : undefined
          }>Registrar Entrada</NavLink>

          <NavLink className={styles.navbar__list__item} to="/cadastrar_carro" style={({ isActive }) =>
            isActive ? { color: 'white' } : undefined
          }>Cadastrar Carro</NavLink>
          
          <NavLink className={styles.navbar__list__item} to="" style={({ isActive }) =>
            isActive ? { color: 'white' } : undefined
          }>Lista De Carros</NavLink>
        </ul>  : ''}
        
      </nav>    
    </header>
  );
}