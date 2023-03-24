import BoxCar from "components/BoxCar";
import { useApi } from "hooks/useApi";
import { useEffect, useState } from "react";
import { Car } from "types/Car";
import styles from './ListaDeCarros.module.scss';

export default function ListaDeCarros() {
  const [cars, setCars] = useState<Car[]>();
  const api = useApi();

  useEffect(() => {
    api.findAllCars().then((res) => { 
      setCars(res);
    });
  }, [])
  
  return (
    <section className={styles.box}>
      <div className={styles.box__cars}>
        {cars?.map(car => (
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