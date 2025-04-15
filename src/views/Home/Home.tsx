import { useState } from 'react';
import styles from './Home.module.css';

export const Home = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('upcoming');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div 
          className={styles.sectionHeader}
          onClick={() => toggleSection('upcoming')}
        >
          <h2>Upcoming Events</h2>
          <i className={`fas fa-chevron-${expandedSection === 'upcoming' ? 'up' : 'down'} ${styles.collapseIcon}`} />
        </div>
        {expandedSection === 'upcoming' && (
          <div className={styles.sectionContent}>
            <div className={styles.eventItem}>
              <div className={styles.eventDate}>
                <span className={styles.eventDay}>15</span>
                <span className={styles.eventMonth}>MAR</span>
              </div>
              <div className={styles.eventDetails}>
                <h3>Midterm Exams Begin</h3>
                <p>All courses</p>
              </div>
            </div>
            <div className={styles.eventItem}>
              <div className={styles.eventDate}>
                <span className={styles.eventDay}>20</span>
                <span className={styles.eventMonth}>MAR</span>
              </div>
              <div className={styles.eventDetails}>
                <h3>Spring Break</h3>
                <p>No classes</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 