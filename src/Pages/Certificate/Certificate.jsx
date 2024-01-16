// CertificateVerification.jsx
import React, { useState } from 'react';

import './Certificate.scss';

const CertificateVerification = () => {
  const [certificateId, setCertificateId] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);

  const handleVerification = () => {
    // Implement your verification logic here
    // For demonstration purposes, just assume the certificate ID is valid
    setVerificationResult('Certificate is valid!');
  };

  return (
    <div className="verification-container">
      <header className="verification-header">
        <h1>Verify Your Certificate</h1>
        <p className="sub-heading">Enter your Certificate ID below</p>
      </header>

      <section className="verification-form">
        <label htmlFor="certificateId">Certificate ID:</label>
        <div className="input-group">
          <input
            type="text"
            id="certificateId"
            placeholder="Enter Certificate ID"
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
          />
          <button onClick={handleVerification}>Verify</button>
        </div>

        {verificationResult && (
          <div className="verification-result">
            <p>{verificationResult}</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default CertificateVerification;
