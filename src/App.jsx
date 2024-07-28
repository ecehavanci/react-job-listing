import React from 'react'
import { Router, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';

const App = () => {
  return (
    <>

      <NavBar />
      <Hero title="Test Title" subtitle="Test Subtitle" />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />

    </>
  );
}

export default App
