import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {lazy,Suspense} from 'react'
import Loader from './components/Loader';
import ErrorPage from './pages/ErrorPage';
import DashboardLayout from './layouts/DashboardLayout';


function App() {
  

const DashboardPage = lazy(() => import("./pages/dashboard/DashboardPage"));
const EmployeesPage = lazy(() => import("./pages/dashboard/EmployeesPage"));
const CompaniesPage = lazy(() => import("./pages/dashboard/CompaniesPage"));
const NotificationsPage = lazy(() => import("./pages/dashboard/NotificationsPage"));

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement:<ErrorPage />,
    element: (
      <Suspense fallback={<Loader />} >
        <DashboardLayout >
          <DashboardPage />
        </DashboardLayout>
      </Suspense>
    ),
  },
  {
    path: "/companies",
    errorElement:<ErrorPage />,
    element: (
      <Suspense fallback={<Loader />}>
        <DashboardLayout>
          <CompaniesPage />
        </DashboardLayout>
      </Suspense>
    ),
  },
  {
    path: "/employees",
    errorElement:<ErrorPage />,
    element: (
      <Suspense fallback={<Loader />}>
        <DashboardLayout>
          <EmployeesPage />
        </DashboardLayout>
      </Suspense>
    ),
  },
  {
    path: "/notifications",
    errorElement:<ErrorPage />,
    element: (
      <Suspense fallback={<Loader />}>
        <DashboardLayout>
          <NotificationsPage />
        </DashboardLayout>
      </Suspense>
    ),
  },
]);

  return (
    <>
       <RouterProvider router={router} fallbackElement={<Loader />} />
    </>
  )
}

export default App
