import logo from 'assets/logo_cloud.png';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header>
      <nav className={styles.navbar}>
        <h1 className={styles.navbar__logo}><img src={logo} alt="Logo do site" /></h1>    
        <ul className={styles.navbar__list}>          
          <li>Registrar Entrada</li>
          <li>Cadastrar Carro</li>
          <li>Lista De Carros</li>
        </ul>  
      </nav>    
    </header>
  );
}