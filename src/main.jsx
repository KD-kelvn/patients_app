import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PatientsPage from './modules/patients/patients.jsx'
import PatientShow from './modules/patient/patient.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const router = createBrowserRouter([
  {
    path: '/',
    element: <PatientsPage />,
  },
  {
    path: '/patients',
    element: <PatientsPage />,
  },
  {
    path: '/patients/:id',
    element: <PatientShow />,
  }

]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  </React.StrictMode>,
)
