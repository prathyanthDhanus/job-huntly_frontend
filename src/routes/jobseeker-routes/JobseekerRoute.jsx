import { createBrowserRouter } from "react-router-dom";
import JobSeekerLayout from "../../layouts/JobSeekerLayout";
import { lazy, Suspense } from "react";
import PrivateRoute from "./privateRoute";
import UnauthorizedPage from "../../pages/commonPages/Unauthorized";
import PageNotFound from "../../pages/commonPages/PageNotFound";

// Lazy load the pages
const CommonLoader = lazy(() => import("../../components/loader/CommonLoader"));
const LandingPage = lazy(() => import("../../pages/jobseeker/LandingPage"));
const JobseekerCreateProfile = lazy(() =>
  import("../../pages/jobseeker/JobseekerCreateProfile")
);
const About = lazy(() => import("../../pages/jobseeker/About"));

export const jobSeekerRouter = createBrowserRouter([
  {
    element: <JobSeekerLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<CommonLoader />}>
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<CommonLoader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/unauthorized",
        element: <UnauthorizedPage />,
      },
      {
        path: "*", // Wildcard for unmatched routes
        element: <PageNotFound />,
      },
      {
        path: "/create/profile",
        element: (
          <Suspense fallback={<CommonLoader />}>
            <PrivateRoute>
              <JobseekerCreateProfile />
            </PrivateRoute>
          </Suspense>
        ),
      },
     
     
    ],
  },
]);
