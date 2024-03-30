import './App.css'
// Importing Layout components
import Header from '../Components/LayoutComponents/Header/Header'
import Content from '../Components/LayoutComponents/Content/Content'
import Footer from '../Components/LayoutComponents/Footer/Footer'

// Importing router children
import LandingPage from '../Components/LandingPage/LandingPage'
import Timeline from '../Components/Timeline/Timeline'
import LineageTreeVisualization from '../Components/FamilyTree/FamilyTree'
import CreateEvent from '../Components/Timeline/Create/CreateEvent'

import Invite from '../Components/Timeline/Invite/Invite'
import Register from '../Components/Member/Register'
import RegisterParent from '../Components/Member/RegParent'
import RegisterChild from '../Components/Member/RegChild'
import RegisterSpouse from '../Components/Member/RegSpouse'
import UpdateMember from '../Components/Member/UpdateMember'
import Login1 from '../Components/Login/Login1'
import { UserProvider } from '../Components/Login/UserContext/UserContext'
import Signup1 from '../Components/Login/Signup1'
import Users from '../Components/Users/User'
import Profile from '../Components/Profiles/Profile'
import Calendar from '../EventsCalendar/Calendar'

// Importing data
import { familyData } from '../data'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import ProtectedRoute from '../Components/ProtectedRoute'
import AuthProvider from '../Components/AuthProvider'
// import { useState } from 'react'



function App() {

  // const [isSignedIn, setIsSignedIn] = useState()

  const Layout = () => {
    return (
      <div className="main">
        <div className="menu"><Header /></div>
        <div className="content-container"><Outlet /></div>
        <div className="footer"><Footer /></div>
      </div >
    )

  }

  const LoginSignupLayout = ({ children }) => {
    return (
      <div className="main">
        <div className="content-container">{children}</div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <LandingPage />
        }
        ,
        {
          path: '/addSpouse',
          element:
            <ProtectedRoute ><RegisterSpouse /></ProtectedRoute>
        },
        {
          path: '/addEvent',
          element:
            <CreateEvent />
        },
        {
          path: '/summary',
          element: <ProtectedRoute ><Users /></ProtectedRoute>
        },
        {
          path: '/events',
          element: <ProtectedRoute><Timeline /></ProtectedRoute>
        }
        ,
        ,
        {
          path: '/invite',
          element: <ProtectedRoute><Invite /></ProtectedRoute>
        }
        ,
        {
          path: '/addMember',
          element: <ProtectedRoute><Register /></ProtectedRoute>
        }
        ,
        {
          path: '/addChild',
          element: <ProtectedRoute><RegisterChild /></ProtectedRoute>
        },
        {
          path: '/addParent',
          element: <ProtectedRoute><RegisterParent /></ProtectedRoute>
        }
        ,
        {
          path: '/family_tree',
          element: <ProtectedRoute><LineageTreeVisualization /></ProtectedRoute>
        }
        ,
        {
          path: '/update/:id',
          element: <ProtectedRoute><UpdateMember /></ProtectedRoute>
        },
        {
          path: '/home/',
          element: <ProtectedRoute><Content /></ProtectedRoute>
        },
        {
          path: '/profile',
          element: <ProtectedRoute><Profile {...familyData} /></ProtectedRoute>
        }
        ,
        {
          path: '/calendar',
          element: <ProtectedRoute><Calendar /></ProtectedRoute>
        },

      ]
    },
    {
      path: '/login',
      element: <LoginSignupLayout><Login1 /></LoginSignupLayout>
    },
    {
      path: '/signup',
      element: <LoginSignupLayout><Signup1 /></LoginSignupLayout>
    }
  ])

  return <AuthProvider isSignedIn={true}>
    <UserProvider><RouterProvider router={router} /></UserProvider>
  </AuthProvider>

}

export default App
