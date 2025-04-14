import { ReactNode } from 'react';
import styles from './IPhone.module.css';

interface IPhoneProps {
  children?: ReactNode;
}

export const IPhone = ({ children }: IPhoneProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.phone}>
        <div className={styles.screen}>
          <div className={styles.notch} />
          {children}
        </div>
      </div>
    </div>
  );
}; 