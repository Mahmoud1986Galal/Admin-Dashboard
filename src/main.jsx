import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import Contacts from './Pages/Contacts/Contacts';
import Team from './Pages/Team/Team';
import Invoices from './Pages/Invoices/Invoices';
import Form from './Pages/Form/Form';
import Calendar from './Pages/Calendar/Calendar';
import Faq from './Pages/Faq/Faq';
import Bar from './Pages/Bar/Bar';
import Pie from './Pages/Pie/Pie';
import Geography from './Pages/Geography/Geography';
import LineDesign from './Pages/Line/LineDesign';
import NotFound from './NotFound';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
    <Route index element={<Dashboard/>} />
    <Route path='team' element={<Team/>} />
    <Route path='contacts' element={<Contacts/>} />
    <Route path='invoices' element={<Invoices/>} />
    <Route path='form' element={<Form/>} />
    <Route path='calendar' element={<Calendar/>} />
    <Route path='faq' element={<Faq/>} />
    <Route path='bar' element={<Bar/>} />
    <Route path='pie' element={<Pie/>} />
    <Route path='line' element={<LineDesign />} />
    <Route path='geography' element={<Geography/>} />
    <Route path='*' element={<NotFound/>} />
    
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

