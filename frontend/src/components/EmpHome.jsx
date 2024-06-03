import React from 'react';

function EmpHome() {
  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '2rem', backgroundColor: '#333', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', color: '#eee' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', color: '#4CAF50' }}>ANP SmartDevices</h1>
      <h2 style={{ fontSize: '1.75rem', textAlign: 'center', margin: '1rem 0' }}>Welcome, Anass Makhlouk</h2>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem' }}>
          Get Started
        </button>
      </div>
      <p style={{ fontSize: '1rem', lineHeight: '1.5', textAlign: 'justify' }}>
        Welcome to the ANP SmartDevices platform. This platform is designed to help you manage and maintain all of your devices efficiently. Whether you're tracking device usage, scheduling maintenance, or submitting claims for broken equipment, our platform provides all the tools you need to keep your workspace running smoothly.
      </p>
      <p style={{ fontSize: '1rem', lineHeight: '1.5', textAlign: 'justify' }}>
        Our goal is to streamline the process of device management, reducing downtime and ensuring that all employees have the equipment they need to perform their jobs effectively. Explore the features of the platform to get the most out of our services.
      </p>
      <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem' }}>Features:</h3>
      <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem', fontSize: '1rem', lineHeight: '1.5' }}>
        <li>Track and manage your devices</li>
        <li>Schedule and monitor maintenance requests</li>
        <li>Submit claims for broken or malfunctioning devices</li>
        <li>Receive notifications about device status updates</li>
        <li>Access detailed reports and analytics</li>
      </ul>
    </div>
  );
}

export default EmpHome;
