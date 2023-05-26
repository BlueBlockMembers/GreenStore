import React, { useState } from "react";
import ToolAndSeedList from "../../components/StoreManagement/ToolAndSeedList/ToolAndSeedList";
import CountContainer from "../../components/StoreManagement/SeedCount/CountContainer";
import AdminLayout from "../../layouts/adminLayout";

const StoreManagementPage = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [item, setItem] = useState("");

  return (
    <AdminLayout class="wrapper">
      <div className="" style={{ marginTop: "100px" }}>
        <div style={{ marginLeft: "220px", marginRight: "250px" }}>
          <CountContainer
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            isModelOpen={isModelOpen}
            setIsModelOpen={setIsModelOpen}
            item={item}
            setItem={setItem}
          />
        </div>

        <ToolAndSeedList
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          setIsModelOpen={setIsModelOpen}
          setItem={setItem}
        />
      </div>
    </AdminLayout>
  );
};

export default StoreManagementPage;
