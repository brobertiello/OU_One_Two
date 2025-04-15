import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginScreen.module.css';

export const LoginScreen = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, navigate to app view
    navigate('/app');
  };

  return (
    <div className={styles.container}>
      <img
        src="/ou-logo.svg"
        alt="University of Oklahoma"
        className={styles.logo}
      />
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Sign In</h1>
        <div className={styles.inputGroup}>
          <label htmlFor="username" className={styles.label}>
            Username (4x4)
          </label>
          <input
            type="text"
            id="username"
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        <button type="submit" className={styles.button}>
          Sign In
        </button>
        <div className={styles.footer}>
          <p>Forgot password?</p>
          <p>Need help?</p>
        </div>
      </form>
    </div>
  );
}; 