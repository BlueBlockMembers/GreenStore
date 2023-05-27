import React from 'react';
import './sidebar.css'
import {Link} from "react-router-dom";

function Sidebar() {
    return (<div className="sidebar">
            <ul className="text-center">
                <li><Link to="/admin/">
                    <span className="icon"><i className="fa fa-tachometer"/></span>
                </Link></li>
                <li><Link to="/admin/supermarket_price">
                    <i className="fa-solid fa-cloud-sun-rain"/>
                </Link></li>

                <li><Link to="/admin/">
                    <span className="icon"><i className="fa-solid fa-chart-column"/></span>
                </Link></li>
                <li><Link to="/admin/">
                    <span className="icon"><i className="fa-solid fa-bag-shopping"/></span>
                </Link></li>
                <li><Link to="/admin/">
                    <span className="icon"><i className="fa-solid fa-recycle"/></span>
                </Link></li>
                <li><Link to="/admin/">
                    <span className="icon"><i className="fa-solid fa-user-group"/></span>
                </Link></li>
                <li><Link to="/admin/">
                    <span className="icon"><i className="fa-solid fa-circle-user"/></span>
                </Link></li>
            </ul>
        </div>);
}

export default Sidebar;