import React from 'react';

function EmpProfile() {
  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem', backgroundColor: '#333', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://via.placeholder.com/150" alt="Alice Johnson" style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '1.5rem' }} />
          <div>
            <h2 style={{ margin: '0', fontSize: '1.5rem', color: '#eee' }}>Alice Johnson</h2>
            <p style={{ margin: '0.25rem 0', color: '#ccc' }}>Software Engineer - IT</p>
          </div>
        </div>
        <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Edit Info</button>
      </div>
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', color: '#eee' }}>Informations de contact</h3>
        <p style={{ margin: '0.25rem 0', color: '#ccc' }}>Email: alice.johnson@example.com</p>
        <p style={{ margin: '0.25rem 0', color: '#ccc' }}>Téléphone: 123-456-7890</p>
      </div>
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', color: '#eee' }}>Détails de l'emploi</h3>
        <p style={{ margin: '0.25rem 0', color: '#ccc' }}>Date de début: 2021-01-15</p>
        <p style={{ margin: '0.25rem 0', color: '#ccc' }}>Département: IT</p>
        <p style={{ margin: '0.25rem 0', color: '#ccc' }}>Rôle: Software Engineer</p>
      </div>
    </div>
  );
}

export default EmpProfile;
