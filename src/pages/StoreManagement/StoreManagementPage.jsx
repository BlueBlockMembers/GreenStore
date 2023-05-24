import React from "react";
import ListComponent from "../../components/StoreManagement/ToolAndSeedList/ListComponent";
import CountContainer from "../../components/StoreManagement/SeedCount/CountContainer";
import AdminLayout from "../../layouts/adminLayout";

const StoreManagementPage = () => {
  return (
    <AdminLayout class="wrapper">
      <div className="" style={{ marginTop: "100px" }}>
        <div style={{ marginLeft: "220px", marginRight: "250px" }}>
          <CountContainer />
        </div>

        <div className="row " style={{ marginLeft: "150px" }}>
          <div className="col 1 ">
            <ListComponent title={"Tool List"} />
          </div>
          <div className="col 1">
            <ListComponent title={"Seed List"} />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default StoreManagementPage;