import * as React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SuperMarketPricePage from "../pages/supermarket/SuperMarketPricePage.jsx";
import Header from "../components/common/header/Header";

function AppRoutes() {
    return (<BrowserRouter>

        <Header/>
        <Routes>
            <Route path="/" element={<SuperMarketPricePage/>}/>
        </Routes>

    </BrowserRouter>);
};

export default AppRoutes;