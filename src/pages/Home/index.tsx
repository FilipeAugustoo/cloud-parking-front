import { useState } from 'react';
import carsJson from './data.json';
import styles from './Home.module.scss';

export default function Home() {
  const [cars, setCars] = useState(carsJson);

  return (
    <main className={styles.main}>
      <section className={styles.box}>
       {cars.cars.map(car => (
        <div className={styles.box__item}>
          <h2>Modelo: {car.model}</h2>
          <p>Placa: {car.license}</p>
          <p>Cor: {car.color}</p>
          <p>Estado: {car.state}</p>
          <p>Entrada: {car.entryDate}</p>
        </div>
       ))}
      </section>
    </main>
  );
}