import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Calculator from './Pages/Calculator.jsx';
import Calendar from './Pages/Calendar';
import Contacts from './Pages/Contacts';
import Currency from './Pages/Currency';
import Gallery from './Pages/Gallery';
import Swiper from './Pages/Swiper';
import ToDoList from './Pages/ToDoList';
import Weather from './Pages/Weather';


const router = createBrowserRouter([
  {
    path: "/calculator",
    element: <Calculator />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
  {
    path: "/currency",
    element: <Currency />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/swiper",
    element: <Swiper />,
  },
  {
    path: "/todolist",
    element: <ToDoList />,
  },
  {
    path: "/weather",
    element: <Weather />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
