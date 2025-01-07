import React, { useState, useEffect } from 'react';

const FadeIn: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ 
      opacity: visible ? 1 : 0, 
      transition: 'opacity 1s ease-in-out' 
    }}>
      {children}
    </div>
  );
};

export default FadeIn;
