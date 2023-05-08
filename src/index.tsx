import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { Home, Event, Contact, Payment, DetailEvent, Ticket } from './Views';
import store from './store';
import { Provider } from 'react-redux';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout><Home /></MainLayout>
  },
  {
    path: '/sukien',
    element: <MainLayout><Event /></MainLayout>
  },
  {
    path: '/lienhe',
    element: <MainLayout><Contact /></MainLayout>
  },
  {
    path: '/thanhtoan',
    element: <MainLayout><Payment /></MainLayout>
  },
  {
    path: '/chitiet',
    element: <MainLayout><DetailEvent /></MainLayout>
  },
  {
    path: '/thanhtoanthanhcong',
    element: <MainLayout><Ticket/></MainLayout>
  }
])



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
