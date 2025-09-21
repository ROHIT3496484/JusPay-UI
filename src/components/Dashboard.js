import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import './Layout.css';

const Sidebar = ({ active, isDarkMode }) => (
  <aside className={`sidebar${isDarkMode ? ' dark' : ''}`}> 
    <div className="sidebar-logo">
      <span className="sidebar-logo-dot" /> <span className="sidebar-logo-text">ByeWind</span>
    </div>
    <nav className="sidebar-nav">
      <div className="sidebar-section">Dashboards</div>
      <ul className="sidebar-list">
        <li className={`sidebar-item${active === 'default' ? ' active' : ''}`}>Default</li>
        <li className={`sidebar-item${active === 'ecommerce' ? ' active' : ''}`}>eCommerce</li>
        <li className="sidebar-item">Projects</li>
        <li className="sidebar-item">Online Courses</li>
      </ul>
      <div className="sidebar-section">Pages</div>
      <ul className="sidebar-list">
        <li className="sidebar-item">User Profile</li>
        <li className="sidebar-item">Account</li>
        <li className="sidebar-item">Corporate</li>
        <li className="sidebar-item">Blog</li>
        <li className="sidebar-item">Social</li>
      </ul>
    </nav>
    {/* sidebar theme toggle removed; theme toggle lives in topbar */}
  </aside>
);

const NotificationPanel = ({ isDarkMode }) => (
  <aside className={`notification-panel${isDarkMode ? ' dark' : ''}`}>
    <div className="notification-section">
      <div className="notification-title">Notifications</div>
      <div className="notification-item">You have a bug that needs... <span>Just now</span></div>
      <div className="notification-item">New user registered <span>59 minutes ago</span></div>
      <div className="notification-item">You have a bug that needs... <span>12 hours ago</span></div>
      <div className="notification-item">Andi Lane subscribed to you <span>Today, 11:59 AM</span></div>
    </div>
    <div className="notification-section">
      <div className="notification-title">Activities</div>
      <div className="notification-item">You have a bug that needs... <span>Just now</span></div>
      <div className="notification-item">Released a new version <span>59 minutes ago</span></div>
      <div className="notification-item">Submitted a bug <span>12 hours ago</span></div>
      <div className="notification-item">Modified A data in Page X <span>Today, 11:59 AM</span></div>
      <div className="notification-item">Deleted a page in Project X <span>Feb 2, 2023</span></div>
    </div>
    <div className="notification-section">
      <div className="notification-title">Contacts</div>
      <div className="notification-contact-list">
        <div className="notification-contact">Natali Craig</div>
        <div className="notification-contact">Drew Cano</div>
        <div className="notification-contact">Orlando Diggs</div>
        <div className="notification-contact">Andi Lane</div>
        <div className="notification-contact">Kate Morrison</div>
        <div className="notification-contact">Koray Okumus</div>
      </div>
    </div>
  </aside>
);

const Topbar = ({ pageTitle, onThemeToggle, isDarkMode }) => (
  <header className={`topbar${isDarkMode ? ' dark' : ''}`}> 
    <div className="topbar-breadcrumb">{pageTitle}</div>
    <div className="topbar-actions">
      <input className="topbar-search" placeholder="Search" />
      <button className="topbar-theme-toggle" onClick={onThemeToggle} aria-label="Toggle theme">
        {isDarkMode ? '🌞' : '🌙'}
      </button>
      <span className="topbar-bell">🔔</span>
      <span className="topbar-user">👤</span>
    </div>
  </header>
);

const Dashboard = ({ children }) => {
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();
  let active = 'default';
  let pageTitle = 'Dashboards / Default';
  let showNotificationPanel = true;
  if (location.pathname === '/orders') {
    active = 'ecommerce';
    pageTitle = 'Dashboards / eCommerce';
    showNotificationPanel = false;
  }
  return (
    <div className={`dashboard-root${isDarkMode ? ' dark' : ''}`}> 
    <Sidebar active={active} isDarkMode={isDarkMode} />
      <div className="dashboard-main">
        <Topbar pageTitle={pageTitle} onThemeToggle={toggleTheme} isDarkMode={isDarkMode} />
        <main className="dashboard-content">
          <div className="dashboard-inner">
            {children}
            {showNotificationPanel && <NotificationPanel isDarkMode={isDarkMode} />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;