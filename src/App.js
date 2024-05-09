
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import "./App.css";
import PeopleList from './Components/PeopleList.js';
import FormPage from './Components/FormPage';
import WelcomePage from './Components/WelcomePage';
import ProfilePage from './Components/ProfilePage';
import Match from './Components/Match.js';
import ProfilePic from './Components/ProfilePic';
import ParentComponent from './Components/ParentComponent.js';
import PeopleItem from './Components/PeopleItem.js';
function App() {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);
  const [likedPeople, setLikedPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/people');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPeople(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);

        setLoading(false);

        setLoading(false); // Ensure loading is set to false even in case of error

      }
    };

    fetchData(); // Call fetchData immediately when component mounts
  }, []); // Empty dependency array to ensure this effect runs only once

  const handleLikedPerson = (person) => {
    setLikedPeople([...likedPeople, person]);
  };
  const handleRemovePerson = (personToRemove) => {
    setLikedPeople(likedPeople.filter(person => person !== personToRemove));
  };
  return (
    <Router>
      <div className="App">

    <Match selectedPeople={likedPeople} onRemove={handleRemovePerson}/>

        {/* Render load-container if loading is true */}

        {loading ? (
          <div className='load-container'>LOVETUBE</div>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profilepic" element={<ProfilePic />} />
            <Route path="/parentcomponent" element={<ParentComponent />} />


            <Route path="/peoplelist" element={<PeopleList people={people} onSelect={handleLikedPerson} />} />

            <Route path="/peopleitem" element={<PeopleItem />} />
            {/* Pass people data to PeopleList component */}
            <Route path="/peoplelist" element={<PeopleList people={people} />} />

          </Routes>
        )}
      </div>
    </Router>
  );
}


export default App;