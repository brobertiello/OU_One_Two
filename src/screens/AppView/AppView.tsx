import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUserCircle,
  faBullhorn,
  faGraduationCap,
  faFileAlt,
  faUniversity,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import styles from './AppView.module.css';
import { Home } from '../../views/Home/Home';
import { Academics } from '../../views/Academics/Academics';
import { Administrative } from '../../views/Administrative/Administrative';
import { Campus } from '../../views/Campus/Campus';
import { Other } from '../../views/Other/Other';
import { Profile } from '../../views/Profile/Profile';
import { Announcements } from '../../views/Announcements/Announcements';
import { useState } from 'react';

export const AppView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (content: React.ReactNode) => {
    setModalContent(content);
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
    setModalContent(null);
  };

  const handleTabClick = (path: string) => {
    navigate(path);
  };

  const handleProfileClick = () => {
    navigate('/app/profile');
  };

  const handleAnnouncementsClick = () => {
    navigate('/app/announcements');
  };

  const getSelectedTab = () => {
    const path = location.pathname;
    if (path.includes('/app/profile')) return 'profile';
    if (path.includes('/app/announcements')) return 'announcements';
    if (path.includes('/app/academics')) return 'academics';
    if (path.includes('/app/administrative')) return 'administrative';
    if (path.includes('/app/campus')) return 'campus';
    if (path.includes('/app/other')) return 'other';
    return 'home';
  };

  const selectedTab = getSelectedTab();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <FontAwesomeIcon 
            icon={faUserCircle} 
            className={`${styles.headerIcon} ${selectedTab === 'profile' ? styles.selected : ''}`} 
            onClick={handleProfileClick}
          />
        </div>
        <div className={styles.headerCenter}>
          <span className={styles.headerTitle}>John Smith</span>
        </div>
        <div className={styles.headerRight}>
          <FontAwesomeIcon 
            icon={faBullhorn} 
            className={`${styles.headerIcon} ${selectedTab === 'announcements' ? styles.selected : ''}`} 
            onClick={handleAnnouncementsClick}
          />
        </div>
      </header>

      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/academics" element={<Academics showModal={showModal} hideModal={hideModal} />} />
          <Route 
            path="/administrative" 
            element={<Administrative showModal={showModal} hideModal={hideModal} />} 
          />
          <Route path="/campus" element={<Campus />} />
          <Route path="/other" element={<Other />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/announcements" element={<Announcements />} />
        </Routes>
      </main>

      <footer className={styles.footer}>
        <div 
          className={`${styles.footerItem} ${selectedTab === 'home' ? styles.selected : ''}`} 
          onClick={() => handleTabClick('/app/home')}
        >
          <FontAwesomeIcon icon={faHome} className={styles.footerIcon} />
          <span>Home</span>
        </div>
        <div 
          className={`${styles.footerItem} ${selectedTab === 'academics' ? styles.selected : ''}`} 
          onClick={() => handleTabClick('/app/academics')}
        >
          <FontAwesomeIcon icon={faGraduationCap} className={styles.footerIcon} />
          <span>Academics</span>
        </div>
        <div 
          className={`${styles.footerItem} ${selectedTab === 'administrative' ? styles.selected : ''}`} 
          onClick={() => handleTabClick('/app/administrative')}
        >
          <FontAwesomeIcon icon={faFileAlt} className={styles.footerIcon} />
          <span>Administrative</span>
        </div>
        <div 
          className={`${styles.footerItem} ${selectedTab === 'campus' ? styles.selected : ''}`} 
          onClick={() => handleTabClick('/app/campus')}
        >
          <FontAwesomeIcon icon={faUniversity} className={styles.footerIcon} />
          <span>Campus</span>
        </div>
        <div 
          className={`${styles.footerItem} ${selectedTab === 'other' ? styles.selected : ''}`} 
          onClick={() => handleTabClick('/app/other')}
        >
          <FontAwesomeIcon icon={faEllipsisH} className={styles.footerIcon} />
          <span>Other</span>
        </div>
      </footer>

      {/* Modal Overlay */}
      {isModalVisible && (
        <div 
          className={styles.modalOverlay}
          onClick={hideModal}
        >
          <div 
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            {modalContent}
          </div>
        </div>
      )}
    </div>
  );
}; 