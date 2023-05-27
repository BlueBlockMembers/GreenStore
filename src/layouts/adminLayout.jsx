import React from 'react';
import Header from "../components/common/header/Header.jsx";
import Sidebar from "../components/common/sidebar/Sidebar.jsx";

const AdminLayout = (props) => {
    return (
        <div>
            <div className={props.class}>
                <Header/>
                <Sidebar/>
                {props.children}
            </div>
        </div>
    );
};

export default AdminLayout;