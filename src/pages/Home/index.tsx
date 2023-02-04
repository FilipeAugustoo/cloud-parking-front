import Box from 'components/Box';
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
    <Box>
      <div className={styles.itens}>
        {cars.cars.map(car => (
          <div className={styles.item} onClick={() => {setCar(car.model); setLicense(car.license)}}>
            <h2>Modelo: {car.model}</h2>
            <p>Placa: {car.license}</p>
            <p>Cor: {car.color}</p>
            <p>Estado: {car.state}</p>
            <p>Entrada: {car.entryDate}</p>
          </div>
        ))}
      </div>
      <button className={styles.botao} onClick={() => teste(license)}>Registrar Saída: {car}</button>
    </Box>
  );
}