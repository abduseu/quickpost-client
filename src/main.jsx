import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Root";
import ErrorPage from "./pages/ErrorPage";
import AuthProvider from "./providers/AuthProvider";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import Membership from "./pages/Membership";
import Notification from "./pages/Notification";
import MyProfile from "./pages/UserDashboard/MyProfile";
import AddPost from "./pages/UserDashboard/AddPost";
import MyPosts from "./pages/UserDashboard/MyPosts";
import Private from "./components/Private";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
      },
      {
        path: '/membership',
        element: <Membership></Membership>,
      },
      {
        path: '/notification',
        element: <Notification></Notification>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/user',
        element: <Private><MyProfile></MyProfile></Private>,
      },
      {
        path: '/profile',
        element: <Private><MyProfile></MyProfile></Private>,
      },
      {
        path: '/add',
        element: <Private><AddPost></AddPost></Private>,
      },
      {
        path: '/posts',
        element: <Private><MyPosts></MyPosts></Private>,
      },
    ]
  },
])


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);