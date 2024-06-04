import { useState } from 'react';

function EmpMaintenaceRequest() {
  const [claim, setClaim] = useState({
    employeeName: '',
    department: '',
    claimType: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClaim(prevClaim => ({
      ...prevClaim,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit claim
    console.log('Claim submitted:', claim);
    // Reset form after submission
    setClaim({
      employeeName: '',
      department: '',
      claimType: '',
      description: ''
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Soumettre une réclamation
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="employeeName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nom de lemployé</label>
          <input type="text" id="employeeName" name="employeeName" value={claim.employeeName} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white" required />
        </div>
        <div className="mb-4">
          <label htmlFor="department" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Département</label>
          <input type="text" id="department" name="department" value={claim.department} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white" required />
        </div>
        <div className="mb-4">
          <label htmlFor="claimType" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Type de réclamation</label>
          <input type="text" id="claimType" name="claimType" value={claim.claimType} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white" required />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
          <textarea id="description" name="description" value={claim.description} onChange={handleChange} rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white" required></textarea>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-400">Soumettre</button>
        </div>
      </form>
    </div>
  );
}

export default EmpMaintenaceRequest;
