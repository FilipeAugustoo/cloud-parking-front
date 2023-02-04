import styles from './Box.module.scss';

interface IProps {
  children: React.ReactNode;
}

export default function Box({children}: IProps ) {
  return (
    <main className={styles.main}>
      <section className={styles.box}>
        {children}
      </section>
    </main>
  );
}