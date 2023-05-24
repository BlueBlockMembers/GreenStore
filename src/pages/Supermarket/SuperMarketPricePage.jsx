import React from 'react';
import '../../styles/SupermarketPrice.css'
import AdminLayout from "../../layouts/adminLayout.jsx";
import SupermarketPriceForm from "../../components/SupermarketPrice/SupermarketPriceForm/SupermarketPriceForm";
import SupermarketPriceTable from "../../components/SupermarketPrice/SupermarketPriceTable/SupermarketPriceTable";
import CheapestItemList from "../../components/SupermarketPrice/CheapestItemList/CheapestItemList";
import PageHeader from "../../components/common/pageHeader/PageHeader.jsx";

function SuperMarketPricePage() {
    return (<AdminLayout class="wrapper">
        <div className="main_container">
            {/*page header*/}
            <PageHeader title="Super market price Management"/>
            {/*collapse table*/}
            <CheapestItemList/>
            {/*form*/}
            <SupermarketPriceForm/>
            {/*table*/}
            <SupermarketPriceTable/>
        </div>
    </AdminLayout>);
}

export default SuperMarketPricePage;