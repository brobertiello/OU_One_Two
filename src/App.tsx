import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { IPhone } from './components/IPhone';
import { SplashScreen } from './screens/SplashScreen/SplashScreen';
import { LoginScreen } from './screens/LoginScreen/LoginScreen';
import { AppView } from './screens/AppView/AppView';

function App() {
  return (
    <Router>
      <IPhone>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/app/*" element={<AppView />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </IPhone>
    </Router>
  );
}

export default App;
