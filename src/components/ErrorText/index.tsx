import styles from './ErrorText.module.scss';

interface IProps {
  children: React.ReactNode;
}

export default function ErrorText({children}: IProps ) {
  return (
    <span className={styles.span}>{children}</span>
  );
}