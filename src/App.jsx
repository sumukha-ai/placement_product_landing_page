import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Navigate } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import { getCollegeBySlug } from './config';
import './index.css';
import './globalStyles.css';
import './vars.css';

// College redirect component
const CollegeRedirect = () => {
  const { collegeSlug } = useParams();
  const college = getCollegeBySlug(collegeSlug);

  useEffect(() => {
    if (college && college.redirect_url) {
      // Redirect to the college's specific URL
      window.location.href = college.redirect_url;
    }
  }, [college]);

  if (!college) {
    // If college not found, redirect to home
    return <Navigate to="/" replace />;
  }

  // Show loading while redirecting
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #3498db',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <p>Redirecting to {college.name}...</p>
      <style>{`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Contact Page */}
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* College redirect route - /:collegeSlug will redirect to the college's URL */}
        <Route path="/:collegeSlug" element={<CollegeRedirect />} />
        
        {/* Catch all - redirect to landing page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
