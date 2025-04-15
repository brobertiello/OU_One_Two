import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SplashScreen.module.css';

export const SplashScreen = () => {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically navigate to login after 3 seconds
    const timer = setTimeout(() => {
      setShowLogin(true);
    }, 2000); // Show login button after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <img
        src="/ou-logo.svg"
        alt="University of Oklahoma"
        className={styles.logo}
      />
      <h1 className={styles.title}>University of Oklahoma</h1>
      <p className={`${styles.subtitle} ${showLogin ? styles.hidden : ''}`}>Loading...</p>
      <button 
        className={`${styles.loginButton} ${showLogin ? styles.visible : ''}`} 
        onClick={handleLoginClick}
      >
        Login
      </button>
    </div>
  );
}; 