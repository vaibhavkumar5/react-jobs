{
  /* import React from 'react'

const App = () => {

  const loggedIn= false;
  const name = 'john';
  const list =['brad', 'jogn', 'martin', 'luther', 'king']
  let colour= 'red';
  if(loggedIn){
    colour='blue';
  }
  
  return (
    <>
      <div classNameName='text-5xl'>
       {loggedIn ? <h1>Hello {name}</h1>  : <h1> Hello guest </h1>}
      </div>
      <div>
        <p style={{color: colour, }}> other members also present here are</p>
        <ul>
          {list.map((names, index)=>(
            <li key={index}>{names}</li>
          ))}
        </ul>
      </div>

      
    </>
  )
}

export default App
<>
      <Navbar />
      <Hero
        title="Become a React Dev"
        subtitle="Find the React job that fits your skills and needs"
      />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
*/
}

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import HomePage from "./Pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./Pages/JobsPage";
import NotFoundPage from "./Pages/NotFoundPage";
import JobPage, { jobLoader } from "./Pages/JobPage";
import AddJobPage from "./Pages/AddJobPage";
import EditJobPage from "./Pages/EditJobPage";

const App = () => {
  // Add new job
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  //delete job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  // update job
  const updateJob = async(job)=>{
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(job),
    });

  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob}/>}
          loader={jobLoader}
        />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />

        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
