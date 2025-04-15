import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faClock, 
  faCalendar, 
  faGraduationCap,
  faChevronDown,
  faChevronUp,
  faSun,
  faCloud,
  faCloudRain,
  faSnowflake,
  faTimes,
  faChartBar,
  faCalendarAlt,
  faMoneyBillWave,
  faUniversity,
  faClipboardList,
  faThermometerHalf,
  faTint,
  faWind,
  faEye
} from '@fortawesome/free-solid-svg-icons';
import styles from './Home.module.css';

interface HomeProps {
  showModal: (content: React.ReactNode, isTop: boolean, type: string) => void;
  hideModal: () => void;
}

export const Home = ({ showModal, hideModal }: HomeProps) => {
  const [expandedSection, setExpandedSection] = useState<string | null>('upcoming');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const quickAccessItems = [
    {
      title: 'Next Class', 
      icon: faClock, 
      info: 'CS 4173 in 30min', 
      link: '/app/academics',
      modalContent: (
        <>
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>Next Class</h2>
            <button 
              className={styles.modalClose}
              onClick={hideModal}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className={styles.modalContent}>
            <div className={styles.modalSection}>
              <h3>CS 4173 - Software Engineering</h3>
              <p><strong>Time:</strong> 2:00 PM - 3:15 PM</p>
              <p><strong>Location:</strong> Devon Energy Hall, Room 101</p>
              <p><strong>Instructor:</strong> Dr. Smith</p>
            </div>
          </div>
        </>
      )
    },
    {
      title: 'Due Soon', 
      icon: faCalendar, 
      info: '2 assignments due today', 
      link: '/app/academics',
      modalContent: (
        <>
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>Due Soon</h2>
            <button 
              className={styles.modalClose}
              onClick={hideModal}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className={styles.modalContent}>
            <div className={styles.modalSection}>
              <h3>Today's Assignments</h3>
              <div className={styles.assignmentList}>
                <div className={styles.assignmentItem}>
                  <p><strong>CS 4173:</strong> Project Proposal</p>
                  <p>Due: 11:59 PM</p>
                </div>
                <div className={styles.assignmentItem}>
                  <p><strong>MATH 1823:</strong> Chapter 5 Homework</p>
                  <p>Due: 11:59 PM</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      title: 'Today\'s Schedule', 
      icon: faCalendar, 
      info: '3 classes remaining', 
      link: '/app/academics',
      modalContent: (
        <>
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>Today's Schedule</h2>
            <button 
              className={styles.modalClose}
              onClick={hideModal}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className={styles.modalContent}>
            <div className={styles.modalSection}>
              <div className={styles.scheduleItem}>
                <p><strong>10:00 AM - 11:15 AM</strong></p>
                <p>CS 2413 - Data Structures</p>
                <p>Devon Energy Hall, Room 201</p>
              </div>
              <div className={styles.scheduleItem}>
                <p><strong>2:00 PM - 3:15 PM</strong></p>
                <p>CS 4173 - Software Engineering</p>
                <p>Devon Energy Hall, Room 101</p>
              </div>
              <div className={styles.scheduleItem}>
                <p><strong>4:00 PM - 5:15 PM</strong></p>
                <p>MATH 1823 - Calculus I</p>
                <p>Physical Sciences Center, Room 100</p>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      title: 'Latest Grade', 
      icon: faGraduationCap, 
      info: 'CS 4173: Project 2 - 92%', 
      link: '/app/academics',
      modalContent: (
        <>
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>Latest Grade</h2>
            <button 
              className={styles.modalClose}
              onClick={hideModal}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className={styles.modalContent}>
            <div className={styles.modalSection}>
              <h3>CS 4173 - Software Engineering</h3>
              <div className={styles.gradeInfo}>
                <p><strong>Assignment:</strong> Project 2</p>
                <p><strong>Grade:</strong> 92%</p>
                <p><strong>Points:</strong> 46/50</p>
                <p><strong>Graded On:</strong> March 15, 2024</p>
              </div>
              <div className={styles.gradeBreakdown}>
                <h4>Grading Criteria</h4>
                <div className={styles.gradeItem}>
                  <span>Functionality</span>
                  <span>25/25</span>
                </div>
                <div className={styles.gradeItem}>
                  <span>Code Quality</span>
                  <span>12/15</span>
                </div>
                <div className={styles.gradeItem}>
                  <span>Documentation</span>
                  <span>9/10</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    }
  ];

  const events = [
    { day: '15', month: 'MAR', title: 'Midterm Exams Begin', description: 'All courses' },
    { day: '20', month: 'MAR', title: 'Spring Break', description: 'No classes' }
  ];

  const renderWeatherModal = () => (
    <>
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>Weather Details</h2>
        <button 
          className={styles.modalClose}
          onClick={hideModal}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className={styles.modalContent}>
        <div className={styles.modalSection}>
          <div className={styles.weatherDetails}>
            <div className={styles.weatherCurrent}>
              <div className={styles.weatherMain}>
                <div className={styles.weatherIcon}>
                  <FontAwesomeIcon icon={faSun} />
                </div>
                <div className={styles.weatherText}>
                  <h3>Sunny</h3>
                  <p>Clear skies</p>
                </div>
              </div>
              <div className={styles.weatherStats}>
                <span className={styles.weatherTemp}>72°F</span>
                <span className={styles.weatherLocation}>Norman, OK</span>
              </div>
            </div>
            <div className={styles.weatherConditions}>
              <div className={styles.weatherCondition}>
                <div className={styles.conditionIcon}>
                  <FontAwesomeIcon icon={faThermometerHalf} />
                </div>
                <span className={styles.conditionText}>Feels like 75°F</span>
              </div>
              <div className={styles.weatherCondition}>
                <div className={styles.conditionIcon}>
                  <FontAwesomeIcon icon={faTint} />
                </div>
                <span className={styles.conditionText}>Humidity 45%</span>
              </div>
              <div className={styles.weatherCondition}>
                <div className={styles.conditionIcon}>
                  <FontAwesomeIcon icon={faWind} />
                </div>
                <span className={styles.conditionText}>Wind 5 mph NW</span>
              </div>
              <div className={styles.weatherCondition}>
                <div className={styles.conditionIcon}>
                  <FontAwesomeIcon icon={faEye} />
                </div>
                <span className={styles.conditionText}>Visibility 10 mi</span>
              </div>
            </div>
          </div>
          <div className={styles.forecastSection}>
            <h3>5-Day Forecast</h3>
            <div className={styles.forecastGrid}>
              <div className={styles.forecastDay}>
                <p>Mon</p>
                <FontAwesomeIcon icon={faSun} />
                <p>75°F</p>
              </div>
              <div className={styles.forecastDay}>
                <p>Tue</p>
                <FontAwesomeIcon icon={faCloud} />
                <p>72°F</p>
              </div>
              <div className={styles.forecastDay}>
                <p>Wed</p>
                <FontAwesomeIcon icon={faCloudRain} />
                <p>68°F</p>
              </div>
              <div className={styles.forecastDay}>
                <p>Thu</p>
                <FontAwesomeIcon icon={faCloud} />
                <p>70°F</p>
              </div>
              <div className={styles.forecastDay}>
                <p>Fri</p>
                <FontAwesomeIcon icon={faSun} />
                <p>74°F</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className={styles.container}>
      {/* Welcome Section */}
      <div className={styles.welcomeSection}>
        <h1 className={styles.welcomeTitle}>{getTimeBasedGreeting()}, John</h1>
        <p className={styles.welcomeSubtitle}>Here's what's happening today</p>
      </div>

      {/* Weather Widget */}
      <div 
        className={styles.weatherWidget}
        onClick={() => showModal(renderWeatherModal(), false, 'weather')}
      >
        <div className={styles.weatherWidgetMain}>
          <div className={styles.weatherWidgetIcon}>
            <FontAwesomeIcon icon={faSun} />
          </div>
          <div className={styles.weatherWidgetText}>
            <h3>Current Weather</h3>
            <p>Norman, OK</p>
          </div>
          <div className={styles.weatherWidgetStats}>
            <span className={styles.weatherWidgetTemp}>72°F</span>
          </div>
        </div>
        <div className={styles.weatherWidgetConditions}>
          <div className={styles.weatherWidgetCondition}>
            <div className={styles.weatherWidgetConditionIcon}>
              <FontAwesomeIcon icon={faThermometerHalf} />
            </div>
            <span className={styles.weatherWidgetConditionText}>Feels like 75°F</span>
          </div>
          <div className={styles.weatherWidgetCondition}>
            <div className={styles.weatherWidgetConditionIcon}>
              <FontAwesomeIcon icon={faTint} />
            </div>
            <span className={styles.weatherWidgetConditionText}>Humidity 45%</span>
          </div>
        </div>
      </div>

      {/* Quick Access Cards */}
      <div className={styles.quickAccess}>
        {quickAccessItems.map((item, index) => (
          <div 
            key={index} 
            className={styles.quickAccessCard}
            onClick={() => showModal(item.modalContent, false, item.title.toLowerCase())}
          >
            <FontAwesomeIcon icon={item.icon} className={styles.quickAccessIcon} />
            <div className={styles.quickAccessInfo}>
              <h3>{item.title}</h3>
              <p>{item.info}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Section */}
      <div className={styles.progressSection}>
        <div className={styles.progressItem}>
          <span>Semester Progress</span>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: '65%' }} />
          </div>
          <span>Week 10 of 16</span>
        </div>
        <div className={styles.progressItem}>
          <span>Degree Progress</span>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: '75%' }} />
          </div>
          <span>90/120 Credits</span>
        </div>
      </div>

      {/* Events Section */}
      <div className={styles.section}>
        <div 
          className={styles.sectionHeader}
          onClick={() => toggleSection('upcoming')}
        >
          <h2>Upcoming Events</h2>
          <FontAwesomeIcon 
            icon={expandedSection === 'upcoming' ? faChevronUp : faChevronDown} 
            className={styles.collapseIcon} 
          />
        </div>
        {expandedSection === 'upcoming' && (
          <div className={styles.sectionContent}>
            {events.map((event, index) => (
              <div key={index} className={styles.eventItem}>
                <div className={styles.eventDate}>
                  <span className={styles.eventDay}>{event.day}</span>
                  <span className={styles.eventMonth}>{event.month}</span>
                </div>
                <div className={styles.eventDetails}>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}; 