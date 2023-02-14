import { AuthContext } from 'contexts/auth/AuthContext';
import { useContext } from 'react';
import styles from './ButtonLogout.module.scss';

export default function ButtonLogout() {
  const auth = useContext(AuthContext);

  const efetuaLogout = async () => {
      await auth.signout();
      window.location.href = window.location.href;
  }

  return (
    <>
      {auth.user ? <button className={styles.botao} onClick={efetuaLogout}>Sair</button> : ''}
    </>
  );
}