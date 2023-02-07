import Box from "components/Box";
import styles from './Login.module.scss';

export default function Login() {
  return (
    <Box>
      <form className={styles.form}>
        <input className={styles.form__input} type="text" name="user" id="user" placeholder="Usuário"/>

        <input className={styles.form__input} type="password" name="password" id="password" placeholder="Senha"/>
        <button className={styles.form__botao}>Entrar</button>
      </form>
    </Box>
  );
}