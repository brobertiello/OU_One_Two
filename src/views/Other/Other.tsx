import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, 
  faChevronRight,
  faUser,
  faShieldAlt,
  faLock,
  faBell,
  faPalette,
  faGlobe,
  faQuestionCircle,
  faHeadset,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import styles from './Other.module.css';
import appStyles from '../../screens/AppView/AppView.module.css';

interface OtherProps {
  showModal: (content: React.ReactNode, isTop: boolean, type: string) => void;
  hideModal: () => void;
}

export const Other = ({ showModal, hideModal }: OtherProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const actions = [
    { title: 'Academic Calendar', url: 'https://www.ou.edu/registrar/academic-records/academic-calendars' },
    { title: 'Academic Integrity', url: 'http://integrity.ou.edu/index.html' },
    { title: 'Accessibility and Disability Resource Center', url: 'https://www.ou.edu/adrc' },
    { title: 'Add FERPA Authorized User', url: 'https://sis.ou.edu/BannerGeneralSsb/ssb/proxyManagement#/home' },
    { title: 'Add/Drop', url: 'https://customapps.ou.edu/Other/ElectronicStatement' },
    { title: 'Advising', url: 'http://www.ou.edu/advising.html' },
    { title: 'Apply for Financial Aid', url: 'https://one.ou.edu/financial/financial-aid' },
    { title: 'Apply for Graduation', url: 'https://sis.ou.edu/StudentSelfService/ssb/graduationApplication' },
    { title: 'Bill Pay', url: 'https://market.ou.edu/C20233_tsa/web/caslogin.jsp' },
    { title: 'Bookstore', url: 'https://ou.textbookbrokers.com/' },
    { title: 'Campus Activities Council', url: 'http://www.ou.edu/sga/cac' },
    { title: 'Campus Map', url: 'https://ou.edu/dam/homepage/visit/campus-map.pdf' },
    { title: 'Canvas', url: 'https://canvas.ou.edu/login/saml' },
    { title: 'Career Services', url: 'http://www.ou.edu/career' },
    { title: 'CART', url: 'http://www.ou.edu/content/cart.html' },
    { title: 'Class Nav', url: 'https://classnav.ou.edu/' },
    { title: 'Computer Labs', url: 'https://libraries.ou.edu/locations/loveridge-computer-lab' },
    { title: 'Create', url: 'https://create.ou.edu/' },
    { title: 'Degree Checksheets', url: 'http://www.ou.edu/checksheets.html' },
    { title: 'Degree Navigator', url: 'https://degree.ou.edu/account/ssoredirect' },
    { title: 'EMBA Canvas', url: 'https://pricecollege.instructure.com/login' },
    { title: 'Engage', url: 'http://ou.edu/engage' },
    { title: 'Enroll', url: 'https://customapps.ou.edu/Other/ElectronicStatement' },
    { title: 'Enrollment Verification', url: 'https://www.ou.edu/content/dam/registrar/docs/2023-2024/Verification%20Request%20Form.pdf' },
    { title: 'Federal Aid Title IV Authorization', url: 'https://lfforms.ou.edu/Forms/titleivauthorization' },
    { title: 'Fine Arts Performance', url: 'https://www.ou.edu/content/finearts/universitytheatre.html' },
    { title: 'Fitness + Recreation', url: 'http://www.ou.edu/far/hours.html' },
    { title: 'GPA Calculator', url: 'http://www.ou.edu/production/cgi-bin/gpaou.pl' },
    { title: 'Graduation Office', url: 'https://www.ou.edu/registrar/graduation' },
    { title: 'Honors College', url: 'http://www.ou.edu/honors.html' },
    { title: 'Human Resources', url: 'https://hr.ou.edu/' },
    { title: 'iAdvise', url: 'https://iadvise.ou.edu/' },
    { title: 'Intramural Sports', url: 'https://www.ou.edu/far/intramural-sports' },
    { title: 'IT Help', url: 'https://itsupport.ou.edu/TDClient/30/Unified/Home/' },
    { title: 'IT Software', url: 'https://itsoftware.ou.edu/' },
    { title: 'Job Search', url: 'http://jobs.ou.edu/' },
    { title: 'Loan Info', url: 'https://www.ou.edu/sfc/financial-aid/applying-for-aid/types/loans' },
    { title: 'Lynda.com', url: 'http://lynda.ou.edu/' },
    { title: 'MyMedia', url: 'https://mymedia.ou.edu/' },
    { title: 'Office 365', url: 'http://portal.office.com/' },
    { title: 'OnPoint', url: 'https://onpoint.ou.edu' },
    { title: 'OU Calendar', url: 'http://calendar.ou.edu/' },
    { title: 'OU Cousins', url: 'http://www.ou.edu/oucousins.html' },
    { title: 'OU Food Pantry', url: 'https://www.ou.edu/foodpantry' },
    { title: 'OU General Catalog', url: 'http://ou-public.courseleaf.com/' },
    { title: 'OU Handshake', url: 'https://ou.joinhandshake.com/login' },
    { title: 'OU Mobile App', url: 'https://itunes.apple.com/us/app/ou/id586241493?mt=8' },
    { title: 'Parking', url: 'http://www.ou.edu/parking.html' },
    { title: 'Ping Identity', url: 'https://link.ou.edu/pingid' },
    { title: 'Qualtrics', url: 'http://survey.ou.edu/' },
    { title: 'Records & Transcripts', url: 'http://www.ou.edu/recordsandtranscripts.html' },
    { title: 'Repeat Policy Request Form', url: 'https://lfforms.ou.edu/Forms/ApplyRepeatPolicy' },
    { title: 'Report IT!', url: 'https://ouregents.ethicspoint.com/' },
    { title: 'Safe Ride', url: 'https://www.ou.edu/studentaffairs/about-us/departments/saferide' },
    { title: 'Safe Walk', url: 'https://www.ou.edu/police/resources' },
    { title: 'Scholarships', url: 'http://www.ou.edu/scholarships' },
    { title: 'Sooner Card/Sense', url: 'http://www.ou.edu/content/soonercard.html' },
    { title: 'Sooner Sports', url: 'http://www.soonersports.com/' },
    { title: 'Student Government', url: 'http://www.ou.edu/sga' },
    { title: 'Study Abroad', url: 'http://www.ou.edu/cis/education_abroad.html' },
    { title: 'Transfer Equivalencies', url: 'https://one.ou.edu/public/transfer-equivalencies' },
    { title: 'Tuition Estimator', url: 'http://www.ou.edu/bursar/tuition_fees/calculator.html' },
    { title: 'Tutoring Services', url: 'http://www.ou.edu/univcoll/about/action_tutoring/tutoring-across-campus.html' },
    { title: 'University Libraries', url: 'https://libraries.ou.edu/' },
    { title: 'Unofficial Transcript', url: 'https://sis.ou.edu/StudentSelfService/ssb/academicTranscript' },
    { title: 'Update Emergency Contact', url: 'https://one.ou.edu/account/general' },
    { title: 'Update Personal Information', url: 'https://sis.ou.edu/BannerGeneralSsb/ssb/personalInformation#/personalInformationMain' },
    { title: 'Veterans Course Confirmation', url: 'https://crimson.ou.edu/register/CCF' },
    { title: 'Veterans Parent School Letter', url: 'http://laserfiche.ou.edu/Forms/VAPSL' },
    { title: 'Writing Center', url: 'http://www.ou.edu/writingcenter.html' }
  ];

  const filteredActions = actions.filter(action => 
    action.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSettingsClick = () => {
    showModal(
      <div className={appStyles.settingsModal}>
        <div className={appStyles.settingsModalHeader}>
          <h2 className={appStyles.settingsModalTitle}>Settings</h2>
          <button className={appStyles.settingsModalClose} onClick={hideModal}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className={appStyles.settingsModalContent}>
          <div className={appStyles.settingsGroup}>
            <h3 className={appStyles.settingsGroupTitle}>Account</h3>
            <div className={appStyles.settingsItem}>
              <div className={appStyles.settingsItemIcon}>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className={appStyles.settingsItemContent}>
                <div className={appStyles.settingsItemTitle}>Profile</div>
                <div className={appStyles.settingsItemDescription}>Manage your personal information</div>
              </div>
              <FontAwesomeIcon icon={faChevronRight} className={appStyles.settingsItemArrow} />
            </div>
            <div className={appStyles.settingsItem}>
              <div className={appStyles.settingsItemIcon}>
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <div className={appStyles.settingsItemContent}>
                <div className={appStyles.settingsItemTitle}>Security</div>
                <div className={appStyles.settingsItemDescription}>Password and security settings</div>
              </div>
              <FontAwesomeIcon icon={faChevronRight} className={appStyles.settingsItemArrow} />
            </div>
            <div className={appStyles.settingsItem}>
              <div className={appStyles.settingsItemIcon}>
                <FontAwesomeIcon icon={faLock} />
              </div>
              <div className={appStyles.settingsItemContent}>
                <div className={appStyles.settingsItemTitle}>Privacy</div>
                <div className={appStyles.settingsItemDescription}>Control your data and privacy</div>
              </div>
              <FontAwesomeIcon icon={faChevronRight} className={appStyles.settingsItemArrow} />
            </div>
          </div>

          <div className={appStyles.settingsGroup}>
            <h3 className={appStyles.settingsGroupTitle}>Preferences</h3>
            <div className={appStyles.settingsItem}>
              <div className={appStyles.settingsItemIcon}>
                <FontAwesomeIcon icon={faBell} />
              </div>
              <div className={appStyles.settingsItemContent}>
                <div className={appStyles.settingsItemTitle}>Notifications</div>
                <div className={appStyles.settingsItemDescription}>Manage your notification preferences</div>
              </div>
              <FontAwesomeIcon icon={faChevronRight} className={appStyles.settingsItemArrow} />
            </div>
            <div className={appStyles.settingsItem}>
              <div className={appStyles.settingsItemIcon}>
                <FontAwesomeIcon icon={faPalette} />
              </div>
              <div className={appStyles.settingsItemContent}>
                <div className={appStyles.settingsItemTitle}>Appearance</div>
                <div className={appStyles.settingsItemDescription}>Customize the app's look and feel</div>
              </div>
              <FontAwesomeIcon icon={faChevronRight} className={appStyles.settingsItemArrow} />
            </div>
            <div className={appStyles.settingsItem}>
              <div className={appStyles.settingsItemIcon}>
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <div className={appStyles.settingsItemContent}>
                <div className={appStyles.settingsItemTitle}>Language</div>
                <div className={appStyles.settingsItemDescription}>Choose your preferred language</div>
              </div>
              <FontAwesomeIcon icon={faChevronRight} className={appStyles.settingsItemArrow} />
            </div>
          </div>

          <div className={appStyles.settingsGroup}>
            <h3 className={appStyles.settingsGroupTitle}>Support</h3>
            <div className={appStyles.settingsItem}>
              <div className={appStyles.settingsItemIcon}>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </div>
              <div className={appStyles.settingsItemContent}>
                <div className={appStyles.settingsItemTitle}>Help Center</div>
                <div className={appStyles.settingsItemDescription}>Find answers to common questions</div>
              </div>
              <FontAwesomeIcon icon={faChevronRight} className={appStyles.settingsItemArrow} />
            </div>
            <div className={appStyles.settingsItem}>
              <div className={appStyles.settingsItemIcon}>
                <FontAwesomeIcon icon={faHeadset} />
              </div>
              <div className={appStyles.settingsItemContent}>
                <div className={appStyles.settingsItemTitle}>Contact Support</div>
                <div className={appStyles.settingsItemDescription}>Get help from our support team</div>
              </div>
              <FontAwesomeIcon icon={faChevronRight} className={appStyles.settingsItemArrow} />
            </div>
            <div className={appStyles.settingsItem}>
              <div className={appStyles.settingsItemIcon}>
                <FontAwesomeIcon icon={faInfoCircle} />
              </div>
              <div className={appStyles.settingsItemContent}>
                <div className={appStyles.settingsItemTitle}>About</div>
                <div className={appStyles.settingsItemDescription}>App version and information</div>
              </div>
              <FontAwesomeIcon icon={faChevronRight} className={appStyles.settingsItemArrow} />
            </div>
          </div>
        </div>
      </div>,
      false,
      'settings'
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.settingsCard} onClick={handleSettingsClick}>
        <div className={styles.settingsContent}>
          <div className={styles.settingsIcon}>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" 
                stroke="#841617" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.2573 9.77255 19.9885C9.57998 19.7197 9.3109 19.5166 9 19.41C8.68741 19.2761 8.34141 19.2386 8.00624 19.3027C7.67107 19.3668 7.36273 19.5294 7.12 19.77L7.06 19.83C6.87425 20.0157 6.65368 20.1632 6.41088 20.2639C6.16808 20.3645 5.9078 20.4163 5.645 20.4163C5.3822 20.4163 5.12192 20.3645 4.87912 20.2639C4.63632 20.1632 4.41575 20.0157 4.23 19.83C4.04425 19.6443 3.89675 19.4237 3.79608 19.1809C3.69541 18.9381 3.64365 18.6778 3.64365 18.415C3.64365 18.1522 3.69541 17.8919 3.79608 17.6491C3.89675 17.4063 4.04425 17.1857 4.23 17L4.29 16.94C4.52054 16.7043 4.67521 16.405 4.73404 16.0806C4.79287 15.7562 4.75315 15.4216 4.62 15.12C4.49323 14.8242 4.28277 14.572 4.01447 14.3943C3.74617 14.2166 3.43179 14.1213 3.11 14.12H3C2.46957 14.12 1.96086 13.9093 1.58579 13.5342C1.21071 13.1591 1 12.6504 1 12.12C1 11.5896 1.21071 11.0809 1.58579 10.7058C1.96086 10.3307 2.46957 10.12 3 10.12H3.09C3.42099 10.1123 3.74273 10.0051 4.01152 9.81255C4.28032 9.61998 4.48337 9.3509 4.59 9.04C4.72389 8.72741 4.76144 8.38141 4.69732 8.04624C4.63321 7.71107 4.47061 7.40273 4.23 7.16L4.17 7.1C3.98425 6.91425 3.83675 6.69368 3.73608 6.45088C3.63541 6.20808 3.58365 5.9478 3.58365 5.685C3.58365 5.4222 3.63541 5.16192 3.73608 4.91912C3.83675 4.67632 3.98425 4.45575 4.17 4.27C4.35575 4.08425 4.57632 3.93675 4.81912 3.83608C5.06192 3.73541 5.3222 3.68365 5.585 3.68365C5.8478 3.68365 6.10808 3.73541 6.35088 3.83608C6.59368 3.93675 6.81425 4.08425 7 4.27L7.06 4.33C7.29568 4.56054 7.59498 4.71521 7.91937 4.77404C8.24377 4.83287 8.57841 4.79315 8.88 4.66C9.17577 4.53323 9.42802 4.32277 9.6057 4.05447C9.78338 3.78617 9.87872 3.47179 9.88 3.15V3C9.88 2.46957 10.0907 1.96086 10.4658 1.58579C10.8409 1.21071 11.3496 1 11.88 1C12.4104 1 12.9191 1.21071 13.2942 1.58579C13.6693 1.96086 13.88 2.46957 13.88 3V3.09C13.8813 3.41179 13.9766 3.72617 14.1543 3.99447C14.332 4.26277 14.5842 4.47323 14.88 4.6C15.1816 4.73315 15.5162 4.77287 15.8406 4.71404C16.165 4.65521 16.4643 4.50054 16.7 4.27L16.76 4.21C16.9457 4.02425 17.1663 3.87675 17.4091 3.77608C17.6519 3.67541 17.9122 3.62365 18.175 3.62365C18.4378 3.62365 18.6981 3.67541 18.9409 3.77608C19.1837 3.87675 19.4043 4.02425 19.59 4.21C19.7757 4.39575 19.9232 4.61632 20.0239 4.85912C20.1246 5.10192 20.1763 5.3622 20.1763 5.625C20.1763 5.8878 20.1246 6.14808 20.0239 6.39088C19.9232 6.63368 19.7757 6.85425 19.59 7.04L19.53 7.1C19.2995 7.33568 19.1448 7.63498 19.086 7.95937C19.0272 8.28377 19.0669 8.61841 19.2 8.92C19.3268 9.21577 19.5372 9.46802 19.8055 9.6457C20.0738 9.82338 20.3882 9.91872 20.71 9.92H21C21.5304 9.92 22.0391 10.1307 22.4142 10.5058C22.7893 10.8809 23 11.3896 23 11.92C23 12.4504 22.7893 12.9591 22.4142 13.3342C22.0391 13.7093 21.5304 13.92 21 13.92H20.91C20.5882 13.9213 20.2738 14.0166 20.0055 14.1943C19.7372 14.372 19.5268 14.6242 19.4 14.92Z" 
                stroke="#841617" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles.settingsText}>
            <h2>Settings</h2>
            <p>Manage your account preferences</p>
          </div>
          <div className={styles.settingsArrow}>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M6 12L10 8L6 4" 
                stroke="#666666" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className={styles.sectionDivider} />
      
      <div className={styles.sectionHeader}>
        <h2>Resources</h2>
      </div>

      <div className={styles.searchContainer}>
        <svg 
          className={styles.searchIcon}
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" 
            stroke="#666666" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M14 14L11.1 11.1" 
            stroke="#666666" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
        <input
          type="text"
          placeholder="Search resources..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div>
      
      <div className={styles.actionsGrid}>
        {filteredActions.map((action, index) => (
          <a 
            key={index} 
            href={action.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.actionCard}
          >
            <div className={styles.actionContent}>
              <h3>{action.title}</h3>
              <i className="fas fa-external-link-alt" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}; 