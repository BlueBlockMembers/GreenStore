import React from "react";
import ToolAndSeedList from "../../components/StoreManagement/ToolAndSeedList/ToolAndSeedList";
import CountContainer from "../../components/StoreManagement/SeedCount/CountContainer";
import AdminLayout from "../../layouts/adminLayout";

const StoreManagementPage = () => {
  return (
    <AdminLayout class="wrapper">
      <div className="" style={{ marginTop: "100px" }}>
        <div style={{ marginLeft: "220px", marginRight: "250px" }}>
          <CountContainer />
        </div>

        <ToolAndSeedList />
      </div>
    </AdminLayout>
  );
};

export default StoreManagementPage;
