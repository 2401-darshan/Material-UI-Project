import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Institutes from "../pages/Institutes";
import Departments from "../pages/Departments";
import Events from "../pages/Events";


// render- Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <DashboardLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'institutes',
      element: <Institutes />,

    },
    {
      path: 'departments',
      element: <Departments />
    },
    {
      path: 'events',
      element: <Events />
    },
    {
      path: 'login',
      element: <Login />
    },

  ]
};

export default MainRoutes;
