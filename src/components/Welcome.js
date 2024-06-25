import React from 'react';
import { useState, useEffect } from 'react';
import { RingLoader } from 'react-spinners';

export default function Welcome({ showLoader }) {
  const [showScreenLoader, setShowScreenLoader] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflowY = 'hidden';
    if (!showLoader) {
      const timer = setTimeout(() => {
        setShowScreenLoader(false);
        document.body.style.overflowY = 'auto';
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showLoader]);
  return (
    <div className={`welcome-container ${!showLoader ? 'fade-eff' : ''}`} style={{ display: showScreenLoader ? '' : 'none' }}>
      <div className="welcome-wrapper">
        <RingLoader color="#ffffff" loading={showScreenLoader} size={300} />
        <h1 style={{ color: 'white', fontWeight: 900 }}>Welcome!!!</h1>
      </div>
    </div>
  );
}
