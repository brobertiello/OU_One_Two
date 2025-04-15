import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { IPhone } from './components/IPhone';
import { SplashScreen } from './screens/SplashScreen/SplashScreen';
import { LoginScreen } from './screens/LoginScreen/LoginScreen';
import { AppView } from './screens/AppView/AppView';
import styles from './App.module.css';

const ViewDescription = () => {
  const location = useLocation();
  const path = location.pathname;

  const getDescription = () => {
    switch (path) {
      case '/':
        return {
          title: 'Splash Screen',
          description: 'The Splash Screen serves as the initial entry point to the application, featuring the university\'s crimson color (#841617) as its background. The screen displays the university logo with a subtle pulsing animation to create an engaging first impression. After a brief loading period, a login button appears, allowing users to transition to the authentication process. The design maintains a clean, minimalist aesthetic while effectively communicating the university\'s brand identity.'
        };
      case '/app/home':
        return {
          title: 'Home View',
          description: 'The Home view serves as the central hub of the application, featuring a clean and intuitive interface. The header displays the student\'s name "John Smith" in the center, with profile and announcements icons on either side. The footer navigation bar uses a modern tab-based design with five main sections: Home, Academics, Administrative, Campus, and Other. Each tab features an icon and label, with the selected tab highlighted in crimson (#841617) and slightly enlarged for better visibility. The interface implements smooth transitions and hover effects to enhance user interaction.'
        };
      case '/app/profile':
        return {
          title: 'Profile View',
          description: 'The Profile view provides a comprehensive overview of the student\'s information. The header maintains consistency with the app\'s design language, featuring the student\'s name and navigation icons. This view is accessible through the profile icon in the header, which highlights when selected. The interface emphasizes user identity and personal information management.'
        };
      case '/app/announcements':
        return {
          title: 'Announcements View',
          description: 'The Announcements view serves as a communication hub, accessible through the bullhorn icon in the header. When selected, the icon highlights in crimson (#841617) and scales up slightly. This view is designed to keep students informed about important updates, events, and news within the university community. The interface maintains visual consistency with the rest of the application while prioritizing readability and information hierarchy.'
        };
      case '/app/academics':
        return {
          title: 'Academics View',
          description: 'The Academics view focuses on educational content and academic resources. Accessible through the graduation cap icon in the footer, this view provides students with tools and information related to their courses, grades, and academic progress. The selected tab is highlighted with a crimson color and subtle scaling animation, maintaining the app\'s consistent visual language.'
        };
      case '/app/administrative':
        return {
          title: 'Administrative View',
          description: 'The Administrative view handles university administrative tasks and documentation. Accessed through the file icon in the footer, this section provides access to important documents, forms, and administrative processes. The interface maintains the app\'s design consistency with highlighted navigation and smooth transitions between states.'
        };
      case '/app/campus':
        return {
          title: 'Campus View',
          description: 'The Campus view offers information about university facilities and campus life. Accessible through the university building icon in the footer, this section provides resources about campus locations, services, and events. The interface uses consistent visual cues with highlighted navigation and smooth transitions.'
        };
      case '/app/other':
        return {
          title: 'Other View',
          description: 'The Other view serves as a catch-all section for additional resources and features. Accessed through the ellipsis icon in the footer, this view maintains the app\'s consistent design language while providing access to supplementary tools and information. The navigation highlights and transitions remain consistent with other views.'
        };
      default:
        return {
          title: 'Welcome',
          description: 'This is a university mobile application designed with a focus on user experience and visual consistency. The app features a modern interface with smooth transitions, clear navigation, and intuitive design patterns. Each view is carefully crafted to provide specific functionality while maintaining a cohesive user experience.'
        };
    }
  };

  const { title, description } = getDescription();

  return (
    <div className={styles.descriptionPanel}>
      <h2 className={styles.descriptionTitle}>{title}</h2>
      <p className={styles.descriptionText}>{description}</p>
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
