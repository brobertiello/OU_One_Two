import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faGraduationCap,
  faTasks,
  faEnvelope,
  faTimes,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import styles from './Academics.module.css';

interface AcademicsProps {
  showModal: (content: React.ReactNode) => void;
  hideModal: () => void;
}

export const Academics = ({ showModal, hideModal }: AcademicsProps) => {
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({
    schedule: false,
    grades: false,
    assignments: false,
  });

  const toggleSection = (section: string) => {
    setCollapsedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Sample schedule data
  const schedule = [
    { day: 'Monday', time: '9:00 AM - 10:15 AM', course: 'CS 2413 - Data Structures', location: 'Devon Energy Hall 120', instructor: 'Dr. Smith', section: '001', description: 'Advanced data structures and algorithms course focusing on implementation and analysis.' },
    { day: 'Monday', time: '1:30 PM - 2:45 PM', course: 'MATH 1823 - Calculus I', location: 'Adams Hall 201', instructor: 'Dr. Johnson', section: '002', description: 'Introduction to differential and integral calculus.' },
    { day: 'Wednesday', time: '9:00 AM - 10:15 AM', course: 'CS 2413 - Data Structures', location: 'Devon Energy Hall 120', instructor: 'Dr. Smith', section: '001', description: 'Advanced data structures and algorithms course focusing on implementation and analysis.' },
    { day: 'Wednesday', time: '1:30 PM - 2:45 PM', course: 'MATH 1823 - Calculus I', location: 'Adams Hall 201', instructor: 'Dr. Johnson', section: '002', description: 'Introduction to differential and integral calculus.' },
    { day: 'Friday', time: '9:00 AM - 10:15 AM', course: 'CS 2413 - Data Structures', location: 'Devon Energy Hall 120', instructor: 'Dr. Smith', section: '001', description: 'Advanced data structures and algorithms course focusing on implementation and analysis.' },
  ];

  // Group schedule by day
  const scheduleByDay = schedule.reduce((acc, item) => {
    if (!acc[item.day]) {
      acc[item.day] = [];
    }
    acc[item.day].push(item);
    return acc;
  }, {} as Record<string, typeof schedule>);

  // Sample grades data
  const grades = [
    { course: 'CS 2413 - Data Structures', grade: 'A', credits: 3, assignments: [
      { name: 'Project 1', grade: '95%' },
      { name: 'Midterm', grade: '88%' },
      { name: 'Project 2', grade: '92%' }
    ]},
    { course: 'MATH 1823 - Calculus I', grade: 'B+', credits: 4, assignments: [
      { name: 'Quiz 1', grade: '85%' },
      { name: 'Midterm', grade: '82%' },
      { name: 'Quiz 2', grade: '88%' }
    ]},
  ];

  // Sample assignments data
  const assignments = [
    { course: 'CS 2413', name: 'Final Project', dueDate: '2024-05-10', status: 'upcoming' },
    { course: 'MATH 1823', name: 'Chapter 5 Homework', dueDate: '2024-05-08', status: 'upcoming' },
    { course: 'CS 2413', name: 'Project 3', dueDate: '2024-04-30', status: 'past-due' },
    { course: 'MATH 1823', name: 'Quiz 3', dueDate: '2024-04-28', status: 'past-due' },
  ];

  const renderEventModal = (event: any) => (
    <>
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>{event.course}</h2>
        <button 
          className={styles.modalClose}
          onClick={hideModal}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className={styles.modalContent}>
        <div className={styles.modalSection}>
          <h3>Details</h3>
          <p><strong>Day:</strong> {event.day}</p>
          <p><strong>Time:</strong> {event.time}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Instructor:</strong> {event.instructor}</p>
          <p><strong>Section:</strong> {event.section}</p>
        </div>
        {event.description && (
          <div className={styles.modalSection}>
            <h3>Description</h3>
            <p>{event.description}</p>
          </div>
        )}
      </div>
    </>
  );

  const renderClassModal = (classInfo: any) => (
    <>
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>{classInfo.course}</h2>
        <button 
          className={styles.modalClose}
          onClick={hideModal}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className={styles.modalContent}>
        <div className={styles.modalSection}>
          <h3>Course Information</h3>
          <p><strong>Grade:</strong> {classInfo.grade}</p>
          <p><strong>Credits:</strong> {classInfo.credits}</p>
        </div>
        <div className={styles.modalSection}>
          <h3>Assignment Grades</h3>
          {classInfo.assignments && (
            <div className={styles.gradeBreakdown}>
              {classInfo.assignments.map((assignment: any, index: number) => (
                <div key={index} className={styles.gradeItem}>
                  <span>{assignment.name}</span>
                  <span>{assignment.grade}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );

  const renderAssignmentModal = (assignment: any) => (
    <>
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>{assignment.name}</h2>
        <button 
          className={styles.modalClose}
          onClick={hideModal}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className={styles.modalContent}>
        <div className={styles.modalSection}>
          <h3>Assignment Details</h3>
          <p><strong>Course:</strong> {assignment.course}</p>
          <p><strong>Due Date:</strong> {assignment.dueDate}</p>
          <p><strong>Status:</strong> {assignment.status === 'past-due' ? 'Past Due' : 'Upcoming'}</p>
        </div>
      </div>
    </>
  );

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div 
          className={styles.sectionHeader}
          onClick={() => toggleSection('schedule')}
        >
          <FontAwesomeIcon 
            icon={faCalendarAlt} 
            className={`${styles.sectionIcon} ${collapsedSections.schedule ? styles.collapsed : ''}`}
          />
          <h2 className={styles.sectionTitle}>Schedule</h2>
          <FontAwesomeIcon 
            icon={collapsedSections.schedule ? faChevronDown : faChevronUp} 
            className={styles.collapseIcon}
          />
        </div>
        {!collapsedSections.schedule && (
          <div className={`${styles.scheduleContent} ${collapsedSections.schedule ? styles.collapsed : ''}`}>
            {Object.entries(scheduleByDay).map(([day, classes]) => (
              <div key={day} className={styles.scheduleDayGroup}>
                <div className={styles.scheduleDayHeader}>{day}</div>
                {classes.map((classItem, index) => (
                  <div 
                    key={index} 
                    className={styles.scheduleItemCompact}
                    onClick={() => showModal(renderEventModal(classItem))}
                  >
                    <div className={styles.scheduleTimeCompact}>{classItem.time}</div>
                    <div className={styles.scheduleCourseCompact}>{classItem.course}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.section}>
        <div 
          className={styles.sectionHeader}
          onClick={() => toggleSection('grades')}
        >
          <FontAwesomeIcon 
            icon={faGraduationCap} 
            className={`${styles.sectionIcon} ${collapsedSections.grades ? styles.collapsed : ''}`}
          />
          <h2 className={styles.sectionTitle}>Grades</h2>
          <FontAwesomeIcon 
            icon={collapsedSections.grades ? faChevronDown : faChevronUp} 
            className={styles.collapseIcon}
          />
        </div>
        {!collapsedSections.grades && (
          <div className={`${styles.gradesContent} ${collapsedSections.grades ? styles.collapsed : ''}`}>
            {grades.map((course, index) => (
              <div 
                key={index} 
                className={styles.gradeCard}
                onClick={() => showModal(renderClassModal(course))}
              >
                <div className={styles.gradeHeader}>
                  <h3 className={styles.courseName}>{course.course}</h3>
                  <div className={styles.gradeBadge}>{course.grade}</div>
                </div>
                <div className={styles.gradeDetails}>
                  <div className={styles.credits}>Credits: {course.credits}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.section}>
        <div 
          className={styles.sectionHeader}
          onClick={() => toggleSection('assignments')}
        >
          <FontAwesomeIcon 
            icon={faTasks} 
            className={`${styles.sectionIcon} ${collapsedSections.assignments ? styles.collapsed : ''}`}
          />
          <h2 className={styles.sectionTitle}>Assignments</h2>
          <FontAwesomeIcon 
            icon={collapsedSections.assignments ? faChevronDown : faChevronUp} 
            className={styles.collapseIcon}
          />
        </div>
        {!collapsedSections.assignments && (
          <div className={`${styles.assignmentsContent} ${collapsedSections.assignments ? styles.collapsed : ''}`}>
            <div className={styles.assignmentsGroup}>
              <h3 className={styles.assignmentsSubtitle}>Upcoming</h3>
              {assignments
                .filter(a => a.status === 'upcoming')
                .map((assignment, index) => (
                  <div 
                    key={index} 
                    className={styles.assignmentItem}
                    onClick={() => showModal(renderAssignmentModal(assignment))}
                  >
                    <div className={styles.assignmentCourse}>{assignment.course}</div>
                    <div className={styles.assignmentName}>{assignment.name}</div>
                    <div className={styles.assignmentDue}>Due: {assignment.dueDate}</div>
                  </div>
                ))}
            </div>
            <div className={styles.assignmentsGroup}>
              <h3 className={styles.assignmentsSubtitle}>Past Due</h3>
              {assignments
                .filter(a => a.status === 'past-due')
                .map((assignment, index) => (
                  <div 
                    key={index} 
                    className={`${styles.assignmentItem} ${styles.pastDue}`}
                    onClick={() => showModal(renderAssignmentModal(assignment))}
                  >
                    <div className={styles.assignmentCourse}>{assignment.course}</div>
                    <div className={styles.assignmentName}>{assignment.name}</div>
                    <div className={styles.assignmentDue}>Due: {assignment.dueDate}</div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.sectionIcon} />
          <h2 className={styles.sectionTitle}>Email</h2>
        </div>
        <div className={styles.sectionContent}>
          <p>Access your university email account</p>
        </div>
      </div>
    </div>
  );
}; 