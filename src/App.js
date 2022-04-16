import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Dashboard from './components/Dashboard';
import '@material-tailwind/react/tailwind.css';
import UserProfileDetails from './components/UserProfileDetails';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MainContent />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route
          exact
          path="/userProfileDetails"
          element={<UserProfileDetails />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
