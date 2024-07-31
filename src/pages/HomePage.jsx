/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

function HomePage() {
    return (
        <>

            <Hero title="React Jobs" subtitle="A website for listing jobs." />
            <HomeCards />
            <JobListings isHome={true}/>
            <ViewAllJobs />

        </>
    );
}

export default HomePage