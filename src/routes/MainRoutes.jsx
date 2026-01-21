import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Institutes from "../pages/Institutes";
import Departments from "../pages/Departments";
import Events from "../pages/Events";
import AddInstitute from '../pages/Addinstitute';
import AddEvent from '../pages/AddEvent';


// render- Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));

// render - color
const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));


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
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'institutes',
      element: <Institutes />,

    },
    {
      path: 'add-institute',
      element: <AddInstitute />
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
      path: 'add-event',
      element: <AddEvent />
    },
    {
      path: 'login',
      element: <Login />
    },

  ]
};

export default MainRoutes;
