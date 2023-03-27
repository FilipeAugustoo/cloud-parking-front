import Box from 'components/Box';
import { format, parseISO } from 'date-fns';
import { useApi } from 'hooks/useApi';
import { useEffect, useState } from 'react';
import { Parking } from 'types/Parking';
import styles from './Home.module.scss';

export default function Home() {
  const [parking, setParking] = useState<Parking>();
  const [car, setCar] = useState('');
  const [license, setLicense] = useState('');
  const api = useApi();
  Date.parse("DD/MM/YYYY - HH:mm:ss");

  useEffect(() => {
    api.findParking().then((res) => { 
      setParking(res);
    });
  }, [parking]);

  function registrarSaida(license: string) {
    api.exitCar(license).then((res) => {
      console.log(res);
    });
  }

  return (
    <Box>
      <h2 className={styles.vagas}>Vagas: {parking?.occupied_VACANCIES}/{parking?.number_VACANCIES}</h2>
      <div className={styles.itens}>
        {parking?.cars.map(car => (
          <div className={styles.item} onClick={() => {setCar(car.model); setLicense(car.license)}}>
            <h2>Modelo: {car.model}</h2>
            <p>Placa: {car.license}</p>
            <p>Cor: {car.color}</p>
            <p>Estado: {car.state}</p>
            <p>Entrada: {format(parseISO(car.entryDate), "dd'/'MM'/'yyyy '-' HH':'mm':'ss")}</p>
          </div>
        ))}
      </div>
      <button className={styles.botao} onClick={() => registrarSaida(license)}>Registrar Saída: {car}</button>
    </Box>
  );
}