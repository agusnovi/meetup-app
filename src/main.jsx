import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './routes/RootLayout';
import Places, { fetchPlace } from './routes/Places';
import AddNewMeetup, { postNewPlace } from './routes/AddNewMeetup';
import Favorite from "./routes/Favorite";

import { FavoriteContextProvider } from './context/favorite-context';

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
      {
        path: '/favorite',
        element: <Favorite />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoriteContextProvider>
      <RouterProvider router={router} />
    </FavoriteContextProvider>
  </StrictMode>
);
