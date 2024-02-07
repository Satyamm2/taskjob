import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import ProductList from '../pages/productlist';
import Record from '../pages/records';

function PublicRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/product-list' element={<ProductList />} />
                <Route path='/record' element={<Record />} />
            </Routes>
        </>
    );
};

export default PublicRoutes;