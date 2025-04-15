import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { IPhone } from './components/IPhone';
import { SplashScreen } from './screens/SplashScreen/SplashScreen';
import { LoginScreen } from './screens/LoginScreen/LoginScreen';
import { AppView } from './screens/AppView/AppView';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

const ViewDescription = () => {
  const location = useLocation();
  const path = location.pathname;
  const [modalType, setModalType] = useState<string | null>(null);

  useEffect(() => {
    // Listen for modal state changes
    const handleModalChange = (event: CustomEvent) => {
      setModalType(event.detail);
    };

    window.addEventListener('modalChange', handleModalChange as EventListener);
    return () => {
      window.removeEventListener('modalChange', handleModalChange as EventListener);
    };
  }, []);

  const getDescription = () => {
    if (modalType) {
      switch (modalType) {
        case 'profile':
          return {
            title: 'Profile Modal',
            description: 'The Profile modal displays your personal information including student ID, major, class standing, and expected graduation date. The modal slides down from the top of the screen and can be dismissed by clicking the X button or clicking outside the modal.'
          };
        case 'announcements':
          return {
            title: 'Announcements Modal',
            description: 'The Announcements modal displays important university updates and notifications. It shows a list of announcements with dates and times, allowing you to stay informed about campus events, deadlines, and other important information. The modal slides down from the top of the screen and can be dismissed by clicking the X button or clicking outside the modal.'
          };
        case 'academicProfile':
          return {
            title: 'Academic Profile Modal',
            description: 'The Academic Profile modal shows your academic performance details including GPA, major, minor, class standing, and credits earned. You can also access your full transcript through a link at the bottom of the modal. The modal can be dismissed by clicking the X button or clicking outside the modal.'
          };
        case 'enrollment':
          return {
            title: 'Enrollment & Advising Modal',
            description: 'The Enrollment & Advising modal provides information about your current term enrollment, credit hours, enrollment status, and next enrollment window. It also includes your academic advisor\'s contact information, office hours, and location, with an option to schedule an advising appointment. The modal can be dismissed by clicking the X button or clicking outside the modal.'
          };
        case 'financials':
          return {
            title: 'Financial Details Modal',
            description: 'The Financial Details modal displays your current balance, payment due date, financial aid amount, and scholarship information. You can access your payment history through a link at the bottom of the modal. The modal can be dismissed by clicking the X button or clicking outside the modal.'
          };
        case 'graduation':
          return {
            title: 'Graduation & Degree Modal',
            description: 'The Graduation & Degree modal shows your progress toward graduation, including expected graduation date, degree progress percentage, and the number of requirements met and remaining. You can access your degree audit through a link at the bottom of the modal. The modal can be dismissed by clicking the X button or clicking outside the modal.'
          };
        case 'classDetails':
          return {
            title: 'Class Details Modal',
            description: 'The Class Details modal shows comprehensive course information including the course title, instructor, meeting times, location, section number, and course description. For grade entries, it also displays your current grade, credits, and a breakdown of assignment grades. The modal can be dismissed by clicking the X button or clicking outside the modal.'
          };
        case 'assignmentDetails':
          return {
            title: 'Assignment Details Modal',
            description: 'The Assignment Details modal provides information about specific assignments including the course name, due date, and current status (upcoming or past due). The modal can be dismissed by clicking the X button or clicking outside the modal.'
          };
        case 'eventDetails':
          return {
            title: 'Event Details Modal',
            description: 'The Event Details modal shows academic event information including the event title, date, time, location, and description. The modal can be dismissed by clicking the X button or clicking outside the modal.'
          };
        default:
          return null;
      }
    }

    switch (path) {
      case '/':
        return {
          title: 'Splash Screen',
          description: 'The Splash Screen serves as the initial entry point to the application, featuring the university\'s crimson color (#841617) as its background. The screen displays the university logo with a subtle pulsing animation to create an engaging first impression. After a brief loading period, a login button appears, allowing users to transition to the authentication process.'
        };
      case '/login':
        return {
          title: 'Login Screen',
          description: 'The Login Screen provides a secure authentication interface for users to access their university account. It features a clean, centered layout with the university logo at the top, followed by a form containing username and password fields. The screen includes options for password recovery and help, maintaining the university\'s crimson color scheme for the sign-in button.'
        };
      case '/app/home':
        return {
          title: 'Home View',
          description: 'The Home view serves as the central hub of the application, featuring a clean and intuitive interface. The header displays your name in the center, with profile and announcements icons on either side. The footer navigation bar provides access to Home, Academics, Degree, Campus, and Other sections.'
        };
      case '/app/profile':
        return {
          title: 'Profile View',
          description: 'The Profile view provides a comprehensive overview of your student information. The header maintains consistency with the app\'s design language, featuring your name and navigation icons. This view is accessible through the profile icon in the header.'
        };
      case '/app/announcements':
        return {
          title: 'Announcements View',
          description: 'The Announcements view serves as a communication hub, accessible through the bullhorn icon in the header. This view keeps you informed about important updates, events, and news within the university community.'
        };
      case '/app/academics':
        return {
          title: 'Academics View',
          description: 'The Academics view organizes your current academic information into three main sections: Schedule, Grades, and Assignments. The Schedule section displays your weekly class schedule grouped by day. The Grades section shows your current courses with grades and credits. The Assignments section lists both upcoming and past due assignments. Each section can be collapsed for easier navigation, and clicking on items reveals detailed information in a modal.'
        };
      case '/app/administrative':
        return {
          title: 'Degree View',
          description: 'The Degree view provides comprehensive information about your academic journey through four main sections: Academic Profile, Enrollment & Advising, Financials, and Graduation & Degree. Each section displays key information at a glance and can be expanded for more details. The Academic Profile shows your GPA and major details, Enrollment & Advising displays current term information, Financials shows your balance and aid, and Graduation tracks your progress toward your degree.'
        };
      case '/app/campus':
        return {
          title: 'Campus View',
          description: 'The Campus view provides access to campus-related resources and information.'
        };
      case '/app/other':
        return {
          title: 'Other View',
          description: 'The Other view provides access to additional university resources and services.'
        };
      default:
        return null;
    }
  };

  const description = getDescription();
  if (!description) return null;

  return (
    <div className={styles.descriptionPanel}>
      <h2 className={styles.descriptionTitle}>{description.title}</h2>
      <p className={styles.descriptionText}>{description.description}</p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className={styles.appContainer}>
        <div className={styles.phoneContainer}>
          <IPhone>
            <Routes>
              <Route path="/" element={<SplashScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/app/*" element={<AppView />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </IPhone>
      </div>
        <ViewDescription />
      </div>
    </Router>
  );
}

export default App;
