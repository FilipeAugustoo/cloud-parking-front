import styles from './BoxCar.module.scss';

interface IProps {
  children: React.ReactNode;
}

export default function BoxCar({ children }: IProps) {
  return (
      <div className={styles.box}>
        { children }
      </div>
  );
}