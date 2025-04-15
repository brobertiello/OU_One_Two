import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SplashScreen.module.css';

export const SplashScreen = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show login button after 2 seconds
    const loginTimer = setTimeout(() => {
      setShowLogin(true);
    }, 2000);

    return () => clearTimeout(loginTimer);
  }, []);

  const handleLoginClick = () => {
    setIsFading(true);
    // Wait for fade animation to complete before navigating
    setTimeout(() => {
      navigate('/login');
    }, 300); // Match this with the fade-out animation duration
  };

  return (
    <div className={`${styles.container} ${isFading ? styles.fadeOut : ''}`}>
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