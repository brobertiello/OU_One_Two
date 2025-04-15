import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faGraduationCap,
  faTasks,
  faEnvelope,
  faTimes,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import styles from './Academics.module.css';

export const Academics = () => {
  const [selectedClass, setSelectedClass] = useState<typeof schedule[0] | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<typeof grades[0] | null>(null);
  const [selectedAssignment, setSelectedAssignment] = useState<typeof assignments[0] | null>(null);
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
        </div>
        <div className={`${styles.scheduleContent} ${collapsedSections.schedule ? styles.collapsed : ''}`}>
          {Object.entries(scheduleByDay).map(([day, classes]) => (
            <div key={day} className={styles.scheduleDayGroup}>
              <div className={styles.scheduleDayHeader}>{day}</div>
              {classes.map((classItem, index) => (
                <div 
                  key={index} 
                  className={styles.scheduleItemCompact}
                  onClick={() => setSelectedClass(classItem)}
                >
                  <div className={styles.scheduleTimeCompact}>{classItem.time}</div>
                  <div className={styles.scheduleCourseCompact}>{classItem.course}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
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
        </div>
        <div className={`${styles.gradesContent} ${collapsedSections.grades ? styles.collapsed : ''}`}>
          {grades.map((course, index) => (
            <div 
              key={index} 
              className={styles.gradeCard}
              onClick={() => setSelectedGrade(course)}
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
        </div>
        <div className={`${styles.assignmentsContent} ${collapsedSections.assignments ? styles.collapsed : ''}`}>
          <div className={styles.assignmentsGroup}>
            <h3 className={styles.assignmentsSubtitle}>Upcoming</h3>
            {assignments
              .filter(a => a.status === 'upcoming')
              .map((assignment, index) => (
                <div 
                  key={index} 
                  className={styles.assignmentItem}
                  onClick={() => setSelectedAssignment(assignment)}
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
                  onClick={() => setSelectedAssignment(assignment)}
                >
                  <div className={styles.assignmentCourse}>{assignment.course}</div>
                  <div className={styles.assignmentName}>{assignment.name}</div>
                  <div className={styles.assignmentDue}>Due: {assignment.dueDate}</div>
                </div>
              ))}
          </div>
        </div>
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

      {/* Class Modal */}
      {selectedClass && (
        <div className={styles.modalOverlay} onClick={() => setSelectedClass(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>{selectedClass.course}</h3>
              <button className={styles.modalClose} onClick={() => setSelectedClass(null)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.modalInfo}>
                <div className={styles.modalInfoItem}>
                  <span className={styles.modalLabel}>Time:</span>
                  <span>{selectedClass.time}</span>
                </div>
                <div className={styles.modalInfoItem}>
                  <span className={styles.modalLabel}>Location:</span>
                  <span>{selectedClass.location}</span>
                </div>
                <div className={styles.modalInfoItem}>
                  <span className={styles.modalLabel}>Instructor:</span>
                  <span>{selectedClass.instructor}</span>
                </div>
                <div className={styles.modalInfoItem}>
                  <span className={styles.modalLabel}>Section:</span>
                  <span>{selectedClass.section}</span>
                </div>
              </div>
              <div className={styles.modalDescription}>
                <h4 className={styles.modalSubtitle}>Description</h4>
                <p>{selectedClass.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grade Modal */}
      {selectedGrade && (
        <div className={styles.modalOverlay} onClick={() => setSelectedGrade(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>{selectedGrade.course}</h3>
              <button className={styles.modalClose} onClick={() => setSelectedGrade(null)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.modalInfo}>
                <div className={styles.modalInfoItem}>
                  <span className={styles.modalLabel}>Overall Grade:</span>
                  <span className={styles.gradeValue}>{selectedGrade.grade}</span>
                </div>
                <div className={styles.modalInfoItem}>
                  <span className={styles.modalLabel}>Credits:</span>
                  <span>{selectedGrade.credits}</span>
                </div>
              </div>
              <div className={styles.modalDescription}>
                <h4 className={styles.modalSubtitle}>Assignment Grades</h4>
                <div className={styles.gradeList}>
                  {selectedGrade.assignments.map((assignment, index) => (
                    <div key={index} className={styles.gradeListItem}>
                      <span className={styles.assignmentName}>{assignment.name}</span>
                      <span className={styles.assignmentGrade}>{assignment.grade}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Assignment Modal */}
      {selectedAssignment && (
        <div className={styles.modalOverlay} onClick={() => setSelectedAssignment(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>{selectedAssignment.name}</h3>
              <button className={styles.modalClose} onClick={() => setSelectedAssignment(null)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.modalInfo}>
                <div className={styles.modalInfoItem}>
                  <span className={styles.modalLabel}>Course:</span>
                  <span>{selectedAssignment.course}</span>
                </div>
                <div className={styles.modalInfoItem}>
                  <span className={styles.modalLabel}>Due Date:</span>
                  <span>{selectedAssignment.dueDate}</span>
                </div>
                <div className={styles.modalInfoItem}>
                  <span className={styles.modalLabel}>Status:</span>
                  <span className={selectedAssignment.status === 'past-due' ? styles.pastDueStatus : styles.upcomingStatus}>
                    {selectedAssignment.status === 'past-due' ? 'Past Due' : 'Upcoming'}
                  </span>
                </div>
              </div>
              <div className={styles.modalDescription}>
                <h4 className={styles.modalSubtitle}>Description</h4>
                <p>This is a sample assignment description. In a real application, this would contain the actual assignment details provided by the instructor.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 