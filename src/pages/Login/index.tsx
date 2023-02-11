import Box from "components/Box";
import { AuthContext } from "contexts/auth/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Login.module.scss';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const efetuarLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(username && password) {
      const isLogged = await auth.signin(username, password);
      if(isLogged) {
        navigate('/');
      } else {
        alert("Usuário ou senha incorreto");
      }
    }
  }

  return (
    <Box>
      <form className={styles.form} onSubmit={efetuarLogin}>
        <input 
          className={styles.form__input} 
          type="text" 
          name="user" 
          id="user" 
          placeholder="Usuário" 
          onChange={(e) => setUsername(e.target.value)}
        />

        <input 
          className={styles.form__input} 
          type="password" 
          name="password" 
          id="password" 
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.form__botao}>Entrar</button>
      </form>
    </Box>
  );
}