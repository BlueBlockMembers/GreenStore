import * as React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SuperMarketPrice from "../pages/supermarket/SuperMarketPrice";
import Header from "../components/common/header/Header";

function AppRoutes() {
    return (<BrowserRouter>

        <Header/>
        <Routes>
            <Route path="/" element={<SuperMarketPrice/>}/>
        </Routes>

    </BrowserRouter>);
};

export default AppRoutes;