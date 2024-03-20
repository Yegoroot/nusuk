import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './screens/ErrorPage';
import { PermtsScreen } from './screens/PermtsScreen';
import { MainLayout } from './layouts/MainLayout';
import HomeScreen from './screens/Main';
import GlobalStylesBase from './theme/GlobalStyle';
import { SettingsProvider } from './context/useSettings';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PermtsScreen />,
      },
      {
        path: "/home",
        element: <HomeScreen />,
      },
    ],
  },
]);


root.render(
  <React.StrictMode>
    <SettingsProvider>
      <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <GlobalStylesBase />
      <RouterProvider router={router} />
      </ThemeProvider>
    </SettingsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
