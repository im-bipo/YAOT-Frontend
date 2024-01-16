// CertificatePage.jsx
import React from 'react';
import './CertificatePage.scss';
import { useParams  } from 'react-router';

const CertificatePage = () => {
  const {certificateId} = useParams()
  // console.log(params.certificateId);
  return (
    <div className="certificate-container">
      <div className="certificate">
        <div className="certificate-header">
          <h1>Certificate of Achievement</h1>
        </div>

        <div className="certificate-content">
          <p className="content-text">This is to certify that</p>
          <h2 className="recipient-name">John Doe</h2>
          <p className="content-text">has successfully participated in the event</p>
          <h3 className="event-name">Web Development Workshop</h3>
          <p className="content-text">held on January 15, 2024</p>
          <p className="content-text certificate-id">Certificate ID: {certificateId} </p>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
