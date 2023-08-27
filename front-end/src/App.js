import './App.css';
import React, { useState } from 'react';
import Login from './componensts/login/login';
import Reg from './componensts/register/reg';
import Homepage from './componensts/homepage/homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [user, setLoginUser] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />} />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Reg />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
