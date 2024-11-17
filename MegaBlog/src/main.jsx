import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthLayout, Home, Login, Signup } from './components/index.js';
import AllPosts from './components/pages/AllPosts.jsx';
import EditPost from './components/pages/EditPost.jsx';
import Post from './components/pages/Post.jsx';

// Router configuration with future flag enabled
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/login',
          element: (
            <AuthLayout authentication={false}>
              <Login />
            </AuthLayout>
          ),
        },
        {
          path: '/signup',
          element: (
            <AuthLayout authentication={false}>
              <Signup />
            </AuthLayout>
          ),
        },
        {
          path: '/all-posts',
          element: (
            <AuthLayout authentication={''}>
              <AllPosts />
            </AuthLayout>
          ),
        },
        {
          path: '/edit-post/:slug',
          element: (
            <AuthLayout authentication={''}>
              <EditPost />
            </AuthLayout>
          ),
        },
        {
          path: '/post/:slug',
          element: <Post />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true, // Enable future flag
    },
  }
);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
