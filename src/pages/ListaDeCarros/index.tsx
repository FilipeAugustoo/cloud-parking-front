import BoxCar from "components/BoxCar";
import { useState } from "react";
import carsJson from './data.json';
import styles from './ListaDeCarros.module.scss';

export default function ListaDeCarros() {
  const [cars, setCars] = useState(carsJson);
  return (
    <section className={styles.box}>
      <div className={styles.box__cars}>
        {cars.map(car => (
          <BoxCar>
            <h2>Modelo: {car.model}</h2>
            <p>Placa: {car.license}</p>
            <p>Cor: {car.color}</p>
            <p>Estado: {car.state}</p>
            <p>Está Estacionado: {car.isParked ? 'Sim' : 'Não'}</p>
            <p>Vezes Estacionado: {car.amountParked}</p>
          </BoxCar>
        ))}
      </div>
    </section>
  );
}