import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { jobSeekerRouter } from "./routes/jobseeker-routes/jobseekerRoute";

function App() {
 
  const [isAdmin,isSetAdmin] = useState(false);
  const [isEmployer,isSetEmployer] = useState(false);

  return (
    <>
    <Toaster position="top-right" reverseOrder={false}/>
    <RouterProvider router={jobSeekerRouter}/>
    </>
  )
}

export default App
