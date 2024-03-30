// import './App.css';
// import { Outlet, RouterProvider, createBrowserRouter, useRoutes, useNavigate } from 'react-router-dom';

// // Importing Layout components
// import Header from '../Components/LayoutComponents/Header/Header';
// import Content from '../Components/LayoutComponents/Content/Content';
// import Footer from '../Components/LayoutComponents/Footer/Footer';

// // Importing router children
// import LandingPage from '../Components/LandingPage/LandingPage';
// import Home from '../Components/Home/Home';
// import Timeline from '../Components/Timeline/Timeline';
// import FamilyTree from '../Components/FamilyTree/FamilyTree';
// import Register from '../Components/Registration/Register';
// import Register1 from '../Components/Member/Register';
// import Analytics from '../Components/Analytics/Analytics';

// import Login from '../Components/Login/Login';
// import Signup from '../Components/Login/Signup';
// import ForgotPassword from '../Components/Login/ForgotPassword';

// // Importing data
// import { familyData } from '../data';
// import React from 'react';

// function App() {
//     const DefaultLayout = ({ children }) => {
//         return (
//             <div className="main">
//                 <div className="menu"><Header /></div>
//                 <div className="content-container">{children}</div>
//                 <div className="footer"><Footer /></div>
//             </div>
//         );
//     };

//     const LoginSignupLayout = ({ children }) => {
//         return (
//             <div className="main">
//                 <div className="content-container">{children}</div>
//             </div>
//         );
//     };

//     const AuthCheck = () => {
//         const navigate = useNavigate();
//         // Check if the user is logged in, if not redirect to login
//         const isLoggedIn = /* logic to check if user is logged in */;
//         if (!isLoggedIn) {
//             navigate('/login');
//         }
//         return null;
//     };

//     const routes = [
//         {
//             path: '/',
//             element: <DefaultLayout children={undefined} />,
//             children: [
//                 // { path: '/', element: <LandingPage /> },
//                 { path: 'home', element: <Home {...familyData} /> },
//                 { path: '/register', element: <Register /> },
//                 { path: '/memories', element: <Timeline /> },
//                 { path: '/tree', element: <FamilyTree /> },
//                 { path: '/analytics', element: <Analytics /> },
//                 { path: '/addMember', element: <Register1 /> },
//                 { path: '/about', element: <Content /> }
//             ]
//         },
//         {
//             path: '/login',
//             element: <LoginSignupLayout><Login /></LoginSignupLayout>
//         },
//         {
//             path: '/signup',
//             element: <LoginSignupLayout><Signup /></LoginSignupLayout>
//         },
//         {
//             path: '/resetpassword',
//             element: <LoginSignupLayout><ForgotPassword /></LoginSignupLayout>
//         }
//     ];

//     return (
//         <RouterProvider router={useRoutes(routes)}>
//             <AuthCheck />
//             <Outlet />
//         </RouterProvider>
//     );
// }

// export default App;
