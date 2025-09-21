import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Dashboard from './components/Dashboard';
import HomePage from './pages/HomePage';
import OrdersPage from './pages/OrdersPage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Dashboard>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/orders" element={<OrdersPage />} />
            </Routes>
          </Dashboard>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;