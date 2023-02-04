import Box from "components/Box";
import { useState } from "react";
import styles from './CadastrarCarro.module.scss';

export default function CadastrarCarro() {

  const [modelo, setModelo] = useState('');
  const [cor, setCor] = useState('');
  const [placa, setPlaca] = useState('');
  const [estado, setEstado] = useState('');

  function testeForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const carro = {
      model: modelo,
      color: cor,
      license: placa,
      state: estado
    }

    console.log(carro)
  }

  return (
    <Box>
      <form className={styles.form} onSubmit={testeForm}>
        <input 
          className={styles.form__input} 
          type="text" 
          name="modelo_carro" 
          id="modelo_carro" 
          placeholder="Modelo Do Carro"
          onChange={(e) => setModelo(e.target.value)}
        />

        <input 
          className={styles.form__input} 
          type="text" 
          name="cor_carro" 
          id="cor_carro" 
          placeholder="Cor Do Carro"
          onChange={(e) => setCor(e.target.value)}
        />

        <input 
          className={styles.form__input} 
          type="text" 
          name="placa_carro" 
          id="placa_carro" 
          placeholder="Placa Do Carro"
          onChange={(e) => setPlaca(e.target.value)} 
        />

        <input 
          className={styles.form__input} 
          type="text" 
          name="estado_carro" 
          id="estado_carro" 
          placeholder="Estado Do Carro"
          onChange={(e) => setEstado(e.target.value)} 
        />

        <button className={styles.form__button}>Cadastrar</button>
      </form>
    </Box>
  );
}