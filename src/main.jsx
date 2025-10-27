import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './routes/RootLayout';
import Places, { fetchPlace } from './routes/Places';
import AddNewMeetup, { postNewPlace } from './routes/AddNewMeetup';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Places />,
        loader: fetchPlace,
      },
      {
        path: 'add-new',
        element: <AddNewMeetup />,
        action: postNewPlace,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
