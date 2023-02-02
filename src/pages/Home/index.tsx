import { useEffect, useState } from 'react';
import carsJson from './data.json';
import styles from './Home.module.scss';

export default function Home() {
  const [cars, setCars] = useState(carsJson);
  const [car, setCar] = useState('');
  const [license, setLicense] = useState('');

  useEffect(() => {
    
  }, [car, license]);

  function teste(car: string) {
    console.log("Carro: " + car)
  }

  return (
    <main className={styles.main}>
      <section className={styles.box}>
        <div className={styles.box__itens}>
          {cars.cars.map(car => (
            <div className={styles.box__item} onClick={() => {setCar(car.model); setLicense(car.license)}}>
              <h2>Modelo: {car.model}</h2>
              <p>Placa: {car.license}</p>
              <p>Cor: {car.color}</p>
              <p>Estado: {car.state}</p>
              <p>Entrada: {car.entryDate}</p>
            </div>
          ))}
        </div>
        <button className={styles.box__botao} onClick={() => teste(license)}>Registrar Saída: {car}</button>
      </section>
      
    </main>
  );
}