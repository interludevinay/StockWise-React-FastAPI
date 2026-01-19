import React from 'react';
import './TaglineSection.css';

const TaglineSection = () => {
  return (
    <div className="tagline-card">
      <div className="tagline-content">
        <h3>📈 Track. Manage. Grow.</h3>
        <p>Manage products, track stock, and stay in control with a fast and reliable inventory system.</p>
        <div className="company-badge">
          <span className="powered-by">Powered by</span>
          <span className="company-name">StockWise</span>
        </div>
      </div>
    </div>
  );
};

export default TaglineSection;
