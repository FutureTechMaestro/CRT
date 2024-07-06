import React from 'react';
import Registration from './hello.js';
import Login from './Login.js';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Header from './Header.js';
export default function Sample(){
    return(
        <>
        
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/registration' element={<Registration />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Registration />}/>
        

        </Routes>
        </BrowserRouter>
        </>
    );
}