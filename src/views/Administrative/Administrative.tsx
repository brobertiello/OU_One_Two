import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap,
  faChevronDown,
  faChevronUp,
  faTimes,
  faExternalLinkAlt,
  faUserGraduate,
  faCalendarAlt,
  faDollarSign
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import styles from './Administrative.module.css';

interface AdministrativeProps {
  showModal: (content: React.ReactNode, isNew: boolean, type: string) => void;
  hideModal: () => void;
}

export const Administrative = ({ showModal, hideModal }: AdministrativeProps) => {
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({
    academicProfile: false,
    enrollment: false,
    financials: false,
    graduation: false
  });

  const toggleSection = (section: string) => {
    setCollapsedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Sample data for demonstration
  const academicProfile = {
    gpa: '3.75',
    creditsEarned: 90,
    creditsRemaining: 30,
    major: 'Computer Science',
    minor: 'Mathematics',
    advisor: 'Dr. Johnson',
    classStanding: 'Senior',
    expectedGraduation: 'Spring 2025',
    honors: 'Dean\'s List',
    academicStatus: 'Good Standing',
    transcriptLink: 'https://example.com/transcript',
  };

  const enrollmentInfo = {
    spring2025Hours: '15 ',
    enrollmentStatus: 'Full-time',
    nextEnrollmentWindow: 'April 1 - April 15',
  };

  const financialInfo = {
    balance: 1250.00,
    dueDate: '2024-05-01',
    financialAid: 5000.00,
    scholarships: 2000.00,
  };

  const graduationInfo = {
    expectedGraduation: 'Spring 2025',
    degreeProgress: '75%',
    requirementsMet: 24,
    requirementsRemaining: 8,
  };

  const renderAcademicModal = () => (
    <>
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>Academic Profile</h2>
        <button 
          className={styles.modalClose}
          onClick={hideModal}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className={styles.modalContent}>
        <div className={styles.modalSection}>
          <div className={styles.modalGPA}>
            <span className={styles.modalGPALabel}>GPA</span>
            <span className={styles.modalGPAValue}>{academicProfile.gpa}</span>
          </div>
          <div className={styles.modalInfoGrid}>
            <div className={styles.modalInfoItem}>
              <span className={styles.modalInfoLabel}>Major</span>
              <span className={styles.modalInfoValue}>{academicProfile.major}</span>
            </div>
            <div className={styles.modalInfoItem}>
              <span className={styles.modalInfoLabel}>Minor</span>
              <span className={styles.modalInfoValue}>{academicProfile.minor}</span>
            </div>
            <div className={styles.modalInfoItem}>
              <span className={styles.modalInfoLabel}>Class Standing</span>
              <span className={styles.modalInfoValue}>{academicProfile.classStanding}</span>
            </div>
            <div className={styles.modalInfoItem}>
              <span className={styles.modalInfoLabel}>Credits Earned</span>
              <span className={styles.modalInfoValue}>{academicProfile.creditsEarned}</span>
            </div>
          </div>
        </div>
        <div className={styles.transcriptLink}>
          View Full Transcript
          <FontAwesomeIcon icon={faExternalLinkAlt} className={styles.externalLinkIcon} />
        </div>
      </div>
    </>
  );

  const renderEnrollmentModal = () => (
    <>
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>Enrollment & Advising Details</h2>
        <button 
          className={styles.modalClose}
          onClick={hideModal}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className={styles.modalContent}>
        <div className={styles.modalSection}>
          <div className={styles.modalInfoGrid}>
            <div className={styles.modalInfoItem}>
              <span className={styles.modalInfoLabel}>Current Term</span>
              <span className={styles.modalInfoValue}>Spring 2025</span>
            </div>
            <div className={styles.modalInfoItem}>
              <span className={styles.modalInfoLabel}>Credit Hours</span>
              <span className={styles.modalInfoValue}>{enrollmentInfo.spring2025Hours}</span>
            </div>
            <div className={styles.modalInfoItem}>
              <span className={styles.modalInfoLabel}>Enrollment Status</span>
              <span className={styles.modalInfoValue}>{enrollmentInfo.enrollmentStatus}</span>
            </div>
            <div className={styles.modalInfoItem}>
              <span className={styles.modalInfoLabel}>Next Enrollment Window</span>
              <span className={styles.modalInfoValue}>{enrollmentInfo.nextEnrollmentWindow}</span>
            </div>
          </div>
        </div>
        <div className={styles.modalSection}>
          <h3 className={styles.modalSectionTitle}>Academic Advisor</h3>
          <div className={styles.modalAdvisorCard}>
            <div className={styles.modalAdvisorHeader}>
              <div>
                <div className={styles.modalAdvisorName}>Dr. Jane Smith</div>
                <div className={styles.modalAdvisorTitle}>Academic Advisor</div>
              </div>
              <FontAwesomeIcon icon={faUserGraduate} className={styles.modalAdvisorIcon} />
            </div>
            <div className={styles.modalAdvisorDetails}>
              <div className={styles.modalAdvisorDetail}>
                <span className={styles.modalAdvisorLabel}>Department</span>
                <span className={styles.modalAdvisorValue}>Computer Science</span>
              </div>
              <div className={styles.modalAdvisorDetail}>
                <span className={styles.modalAdvisorLabel}>Email</span>
                <span className={styles.modalAdvisorValue}>jane.smith@university.edu</span>
              </div>
              <div className={styles.modalAdvisorDetail}>
                <span className={styles.modalAdvisorLabel}>Office Hours</span>
                <span className={styles.modalAdvisorValue}>Mon-Wed 10:00 AM - 2:00 PM</span>
              </div>
              <div className={styles.modalAdvisorDetail}>
                <span className={styles.modalAdvisorLabel}>Office Location</span>
                <span className={styles.modalAdvisorValue}>Engineering Building, Room 205</span>
              </div>
            </div>
          </div>
          <div className={styles.transcriptLink}>
            Schedule Advising Appointment
            <FontAwesomeIcon icon={faExternalLinkAlt} className={styles.externalLinkIcon} />
          </div>
        </div>
      </div>
    </>
  );

  const renderFinancialModal = () => (
    <>
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>Financial Details</h2>
        <button 
          className={styles.modalClose}
          onClick={hideModal}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className={styles.modalContent}>
        <div className={styles.modalSection}>
          <div className={styles.modalInfoGrid}>
            <div className={styles.modalInfoItem}>
              <span className={styles.modalInfoLabel}>Current Balance</span>
              <span className={styles.modalInfoValue}>${financialInfo.balance.toFixed(2)}</span>
            </div>
            <div className={styles.modalInfoItem}>
              <span className={styles.modalInfoLabel}>Due Date</span>
              <span className={styles.modalInfoValue}>{financialInfo.dueDate}</span>
            </div>
            <div className={styles.modalInfoItem}>
              <span className={styles.modalInfoLabel}>Financial Aid</span>
              <span className={styles.modalInfoValue}>${financialInfo.financialAid.toFixed(2)}</span>
            </div>
            <div className={styles.modalInfoItem}>
              <span className={styles.modalInfoLabel}>Scholarships</span>
              <span className={styles.modalInfoValue}>${financialInfo.scholarships.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div className={styles.transcriptLink}>
          View Payment History
          <FontAwesomeIcon icon={faExternalLinkAlt} className={styles.externalLinkIcon} />
        </div>
      </div>
    </>
  );

  const renderGraduationModal = () => (
    <>
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>Graduation & Degree Details</h2>
        <button 
          className={styles.modalClose}
          onClick={hideModal}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className={styles.modalContent}>
        <div className={styles.modalSection}>
          <div className={styles.modalInfoGrid}>
            <div className={styles.modalInfoItem}>
              <span className={styles.modalInfoLabel}>Expected Graduation</span>
              <span className={styles.modalInfoValue}>{graduationInfo.expectedGraduation}</span>
            </div>
            <div className={styles.modalInfoItem}>
              <span className={styles.modalInfoLabel}>Degree Progress</span>
              <span className={styles.modalInfoValue}>{graduationInfo.degreeProgress}</span>
            </div>
            <div className={styles.modalInfoItem}>
              <span className={styles.modalInfoLabel}>Requirements Met</span>
              <span className={styles.modalInfoValue}>{graduationInfo.requirementsMet}</span>
            </div>
            <div className={styles.modalInfoItem}>
              <span className={styles.modalInfoLabel}>Requirements Remaining</span>
              <span className={styles.modalInfoValue}>{graduationInfo.requirementsRemaining}</span>
            </div>
          </div>
        </div>
        <div className={styles.transcriptLink}>
          View Degree Audit
          <FontAwesomeIcon icon={faExternalLinkAlt} className={styles.externalLinkIcon} />
        </div>
      </div>
    </>
  );

  return (
    <div className={styles.container}>
      {/* Academic Profile Section */}
      <div className={styles.section}>
        <div 
          className={styles.sectionHeader}
          onClick={() => toggleSection('academicProfile')}
        >
          <FontAwesomeIcon 
            icon={faUserGraduate} 
            className={styles.sectionIcon}
          />
          <h2 className={styles.sectionTitle}>Academic Profile</h2>
          <FontAwesomeIcon 
            icon={collapsedSections.academicProfile ? faChevronDown : faChevronUp} 
            className={`${styles.collapseIcon} ${collapsedSections.academicProfile ? styles.collapsed : ''}`}
          />
        </div>
        {!collapsedSections.academicProfile && (
          <div className={styles.sectionContent}>
            <div 
              className={styles.academicProfileMain}
              onClick={() => showModal(renderAcademicModal(), false, 'academicProfile')}
            >
              <div className={styles.academicProfileGPA}>
                <span className={styles.gpaLabel}>GPA</span>
                <span className={styles.gpaValue}>{academicProfile.gpa}</span>
              </div>
              <div className={styles.academicProfileDetails}>
                <div className={styles.academicProfileDetail}>
                  <span className={styles.detailLabel}>Major</span>
                  <span className={styles.detailValue}>{academicProfile.major}</span>
                </div>
                <div className={styles.academicProfileDetail}>
                  <span className={styles.detailLabel}>Class Standing</span>
                  <span className={styles.detailValue}>{academicProfile.classStanding}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enrollment Section */}
      <div className={styles.section}>
        <div 
          className={styles.sectionHeader}
          onClick={() => toggleSection('enrollment')}
        >
          <FontAwesomeIcon 
            icon={faCalendarAlt} 
            className={styles.sectionIcon}
          />
          <h2 className={styles.sectionTitle}>Enrollment & Advising</h2>
          <FontAwesomeIcon 
            icon={collapsedSections.enrollment ? faChevronDown : faChevronUp} 
            className={`${styles.collapseIcon} ${collapsedSections.enrollment ? styles.collapsed : ''}`}
          />
        </div>
        {!collapsedSections.enrollment && (
          <div 
            className={styles.sectionContent}
            onClick={() => showModal(renderEnrollmentModal(), false, 'enrollment')}
          >
            <div className={styles.enrollmentHeader}>
              <span className={styles.enrollmentTitle}>Spring 2025 Hours</span>
              <span className={styles.enrollmentHours}>{enrollmentInfo.spring2025Hours}</span>
            </div>
            <div className={styles.enrollmentDetails}>
              <div className={styles.enrollmentDetail}>
                <span className={styles.detailLabel}>Enrollment Status</span>
                <span className={styles.detailValue}>{enrollmentInfo.enrollmentStatus}</span>
              </div>
              <div className={styles.enrollmentDetail}>
                <span className={styles.detailLabel}>Next Enrollment Window</span>
                <span className={styles.detailValue}>{enrollmentInfo.nextEnrollmentWindow}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Financials Section */}
      <div className={styles.section}>
        <div 
          className={styles.sectionHeader}
          onClick={() => toggleSection('financials')}
        >
          <FontAwesomeIcon 
            icon={faDollarSign} 
            className={styles.sectionIcon}
          />
          <h2 className={styles.sectionTitle}>Financials</h2>
          <FontAwesomeIcon 
            icon={collapsedSections.financials ? faChevronDown : faChevronUp} 
            className={`${styles.collapseIcon} ${collapsedSections.financials ? styles.collapsed : ''}`}
          />
        </div>
        {!collapsedSections.financials && (
          <div 
            className={styles.sectionContent}
            onClick={() => showModal(renderFinancialModal(), false, 'financials')}
          >
            <div className={styles.enrollmentHeader}>
              <span className={styles.enrollmentTitle}>Current Balance</span>
              <span className={styles.enrollmentHours}>${financialInfo.balance.toFixed(2)}</span>
            </div>
            <div className={styles.enrollmentDetails}>
              <div className={styles.enrollmentDetail}>
                <span className={styles.detailLabel}>Due Date</span>
                <span className={styles.detailValue}>{financialInfo.dueDate}</span>
              </div>
              <div className={styles.enrollmentDetail}>
                <span className={styles.detailLabel}>Financial Aid</span>
                <span className={styles.detailValue}>${financialInfo.financialAid.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Graduation Section */}
      <div className={styles.section}>
        <div 
          className={styles.sectionHeader}
          onClick={() => toggleSection('graduation')}
        >
          <FontAwesomeIcon 
            icon={faGraduationCap} 
            className={styles.sectionIcon}
          />
          <h2 className={styles.sectionTitle}>Graduation & Degree</h2>
          <FontAwesomeIcon 
            icon={collapsedSections.graduation ? faChevronDown : faChevronUp} 
            className={`${styles.collapseIcon} ${collapsedSections.graduation ? styles.collapsed : ''}`}
          />
        </div>
        {!collapsedSections.graduation && (
          <div 
            className={styles.sectionContent}
            onClick={() => showModal(renderGraduationModal(), false, 'graduation')}
          >
            <div className={styles.enrollmentHeader}>
              <span className={styles.enrollmentTitle}>Expected Graduation</span>
              <span className={styles.enrollmentHours}>{graduationInfo.expectedGraduation}</span>
            </div>
            <div className={styles.enrollmentDetails}>
              <div className={styles.enrollmentDetail}>
                <span className={styles.detailLabel}>Degree Progress</span>
                <span className={styles.detailValue}>{graduationInfo.degreeProgress}</span>
              </div>
              <div className={styles.enrollmentDetail}>
                <span className={styles.detailLabel}>Requirements Met</span>
                <span className={styles.detailValue}>{graduationInfo.requirementsMet}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 