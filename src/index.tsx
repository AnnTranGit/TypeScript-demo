import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Detail from './pages/Detail';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Cart from './pages/Cart';
import HomeTemplate from './template/HomeTemplate';

export const history:any = createBrowserHistory()
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <HistoryRouter history={history}>
    
  <Routes>
  <Route path='' element={<HomeTemplate/>}>
    <Route index element={<Home/>}></Route>
    <Route path='login' element={<Login/>}></Route>
    <Route path='register' element={<Register/>}></Route>
    <Route path='detail'>
    <Route path=':id' element={<Detail/>}></Route>
    </Route>
    <Route path='search' element={<Search/>}></Route>
    <Route path='profile' element={<Profile/>}></Route>
    <Route path='cart' element={<Cart/>}></Route>
    </Route>
  </Routes>

  </HistoryRouter>
);
