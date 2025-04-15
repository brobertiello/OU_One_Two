import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUserCircle,
  faBullhorn,
  faGraduationCap,
  faFileAlt,
  faUniversity,
  faEllipsisH,
  faTimes,
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
import { useState, useEffect } from 'react';

interface ModalContent {
  content: React.ReactNode;
  type?: string;
}

export const AppView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isTopModal, setIsTopModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    setIsVisible(true);
  }, []);

  const showModal = (content: React.ReactNode, isTop = false, type?: string) => {
    setModalContent({ content, type });
    setIsTopModal(isTop);
    setIsModalVisible(true);
    setIsClosing(false);
    if (type) {
      window.dispatchEvent(new CustomEvent('modalChange', { detail: type }));
    }
  };

  const hideModal = () => {
    setIsClosing(true);
    window.dispatchEvent(new CustomEvent('modalChange', { detail: null }));
    setTimeout(() => {
      setIsModalVisible(false);
      setModalContent(null);
      setIsTopModal(false);
      setIsClosing(false);
    }, 300);
  };

  const handleTabClick = (path: string) => {
    navigate(path);
  };

  const handleProfileClick = () => {
    if (isModalVisible && modalContent?.type === 'profile') {
      hideModal();
    } else {
      showModal(
        <div className={styles.topModalContent}>
          <div className={styles.topModalHeader}>
            <h2 className={styles.topModalTitle}>Profile</h2>
            <button 
              className={styles.modalClose}
              onClick={hideModal}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className={styles.topModalBody}>
            <div className={styles.profileInfo}>
              <div className={styles.profileAvatar}>
                <FontAwesomeIcon icon={faUserCircle} className={styles.profileIcon} />
              </div>
              <div className={styles.profileDetails}>
                <h3 className={styles.profileName}>John Smith</h3>
                <p className={styles.profileEmail}>john.smith@ou.edu</p>
              </div>
            </div>
            <div className={styles.profileSection}>
              <h4 className={styles.sectionTitle}>Personal Information</h4>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Student ID</span>
                  <span className={styles.infoValue}>12345678</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Major</span>
                  <span className={styles.infoValue}>Computer Science</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Class Standing</span>
                  <span className={styles.infoValue}>Senior</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Expected Graduation</span>
                  <span className={styles.infoValue}>Spring 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>,
        true,
        'profile'
      );
    }
  };

  const handleAnnouncementsClick = () => {
    if (isModalVisible && modalContent?.type === 'announcements') {
      hideModal();
    } else {
      showModal(
        <div className={styles.topModalContent}>
          <div className={styles.topModalHeader}>
            <h2 className={styles.topModalTitle}>Announcements</h2>
            <button 
              className={styles.modalClose}
              onClick={hideModal}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className={styles.topModalBody}>
            <div className={styles.announcementList}>
              <div className={styles.announcementItem}>
                <div className={styles.announcementHeader}>
                  <span className={styles.announcementDate}>Today</span>
                  <span className={styles.announcementTime}>2:30 PM</span>
                </div>
                <h3 className={styles.announcementTitle}>Registration for Spring 2025 Opens</h3>
                <p className={styles.announcementText}>
                  Registration for Spring 2025 courses will open on November 1st. Please check your enrollment window in the Degree section.
                </p>
              </div>
              <div className={styles.announcementItem}>
                <div className={styles.announcementHeader}>
                  <span className={styles.announcementDate}>Yesterday</span>
                  <span className={styles.announcementTime}>10:15 AM</span>
                </div>
                <h3 className={styles.announcementTitle}>Campus Safety Alert</h3>
                <p className={styles.announcementText}>
                  A safety alert has been issued for the Norman campus. Please check your email for more information.
                </p>
              </div>
            </div>
          </div>
        </div>,
        true,
        'announcements'
      );
    }
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
    <div className={`${styles.container} ${isVisible ? styles.fadeIn : ''}`}>
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
          <Route path="/other" element={<Other showModal={showModal} hideModal={hideModal} />} />
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
          <span>Degree</span>
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
          className={`${isTopModal ? styles.topModalOverlay : styles.modalOverlay} ${isClosing ? styles.closing : ''}`}
          onClick={hideModal}
        >
          <div 
            className={`${isTopModal ? styles.topModal : styles.modal} ${isClosing ? styles.closing : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            {modalContent?.content}
          </div>
        </div>
      )}
    </div>
  );
}; 