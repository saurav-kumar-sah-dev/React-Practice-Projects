import { useParams } from 'react-router-dom';
import styles from './student.module.css';

export const Student = () => {
  const { id, name } = useParams();

  return (
    <div className={styles.container}>
      <p className={styles.text}>Student Name:{name}</p>
      <p className={styles.text}>Student ID: {id}</p>
    </div>
  );
};
