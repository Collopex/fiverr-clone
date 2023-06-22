import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import {
  Home,
  Gig,
  Gigs,
  MyGigs,
  Add,
  Message,
  Messages,
  Orders,
  Login,
  Register,
} from './pages/index';
import { Navbar, Footer } from './components';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <ScrollToTop />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/gig/:id',
          element: <Gig />,
        },
        {
          path: '/gigs',
          element: <Gigs />,
        },
        {
          path: '/mygigs',
          element: <MyGigs />,
        },
        {
          path: '/orders',
          element: <Orders />,
        },
        {
          path: '/add',
          element: <Add />,
        },
        {
          path: '/message/:id',
          element: <Message />,
        },
        {
          path: '/messages',
          element: <Messages />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
