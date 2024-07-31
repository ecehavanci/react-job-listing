import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFound from './pages/NotFound';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJob from './pages/AddJob';
import EditJob from './pages/EditJob';


function App() {
  
  const addJobSubmit = async (newJob) => {
    await fetch('/api/jobs', {
      method: 'POST', 'headers': {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  }

  const deleteJob = async (id) => {
    await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  }

  const editJob = async (job) => {
    await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  }

  //jobLoader gets list of jobs json data
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-job' element={<AddJob addJobSubmit={addJobSubmit} />} />
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
      <Route path='/edit-job/:id' element={<EditJob editJob={editJob} />} loader={jobLoader} />
      <Route path='*' element={<NotFound />} />

    </Route>
  ));

  return <RouterProvider router={router} />
}

export default App