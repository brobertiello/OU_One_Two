import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SplashScreen.module.css';

export const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically navigate to login after 3 seconds
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.container}>
      <img
        src="/ou-logo.svg"
        alt="University of Oklahoma"
        className={styles.logo}
      />
      <h1 className={styles.title}>University of Oklahoma</h1>
      <p className={styles.subtitle}>Loading...</p>
    </div>
  );
}; 