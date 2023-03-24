import Box from "components/Box";
import { useApi } from "hooks/useApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CarCreate } from "types/CarCreate";
import styles from './CadastrarCarro.module.scss';

export default function CadastrarCarro() {

  const [car, setCar] = useState<CarCreate>({
    color: "",
    license: "",
    model: "",
    state: ""
  });

  const api = useApi();
  const navigate = useNavigate();

  function createCar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    api.createCar(car);

    navigate('/lista_carros');
  }

  return (
    <Box>
      <form className={styles.form} onSubmit={createCar}>
        <input 
          className={styles.form__input} 
          type="text" 
          name="modelo_carro" 
          id="modelo_carro" 
          placeholder="Modelo Do Carro"
          value={car.model}
          onChange={(event) => {
            setCar({
              ...car,
              model: event.currentTarget?.value || "",
            })
          }}
        />

        <input 
          className={styles.form__input} 
          type="text" 
          name="cor_carro" 
          id="cor_carro" 
          placeholder="Cor Do Carro"
          value={car.color}
          onChange={(event) => {
            setCar({
              ...car,
              color: event.currentTarget?.value || "",
            })
          }}
        />

        <input 
          className={styles.form__input} 
          type="text" 
          name="placa_carro" 
          id="placa_carro" 
          placeholder="Placa Do Carro"
          value={car.license}
          onChange={(event) => {
            setCar({
              ...car,
              license: event.currentTarget?.value || "",
            })
          }}
        />

        <input 
          className={styles.form__input} 
          type="text" 
          name="estado_carro" 
          id="estado_carro" 
          placeholder="Estado Do Carro"
          value={car.state}
          onChange={(event) => {
            setCar({
              ...car,
              state: event.currentTarget?.value || "",
            })
          }}
        />

        <button className={styles.form__button}>Cadastrar</button>
      </form>
    </Box>
  );
}