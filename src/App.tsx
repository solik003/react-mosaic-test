// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import Dashboard from './components/Dashboard';

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <h1 className="text-center text-2xl font-bold p-4">Company Dashboard</h1>
//       <Dashboard /> 
//     </div>
//   );
// };

// export default App;


// new
// import React, { useState, useEffect } from 'react';
// import MosaicContainer from './components/MosaicContainer';

// // Sample country data (or you can fetch it from an API)
// const fetchCountryData = async () => {
//   const response = await fetch('/data/companies-lookup.json'); 
//   return response.json();
// };

// const App: React.FC = () => {
//   const [countries, setCountries] = useState<any[]>([]);
//   const [selectedCountry, setSelectedCountry] = useState<any | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   // Fetch countries data on initial load
//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         setLoading(true);
//         const data = await fetchCountryData();
//         setCountries(data);
//         setSelectedCountry(data[0]); // Set the first country as the default
//       } catch (error) {
//         console.error('Error fetching country data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadData();
//   }, []);

//   // Handle country selection from the dropdown
//   const handleCountryChange = (countryId: string) => {
//     const selected = countries.find((country) => country.alpha3Code === countryId);
//     setSelectedCountry(selected || null);
//   };

//   return (
//     <div style={{ height: '100vh' }}>
//       {loading ? (
//         <p>Loading country data...</p>
//       ) : (
//         <MosaicContainer
//           countries={countries}
//           selectedCountry={selectedCountry}
//           onSelectCountry={handleCountryChange}
//         />
//       )}
//     </div>
//   );
// };

// export default App;



import React from 'react';
import MosaicContainer from './components/MosaicContainer'; 

const App: React.FC = () => {
  return (
    <div style={{ height: '100vh', backgroundColor: '#f4f7fa' }}>
      <MosaicContainer />
    </div>
  );
};

export default App;


