import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import validateToolsAndSeeds from "../../../validations/toolsAndSeeds.validation";
import Swal from "sweetalert2";
import { addSeed, getSeed } from "../../../store/actions/SeedActions";
import { addTool, getTool } from "../../../store/actions/ToolActions";
import image1 from "../../../assets/image.png";

const AddSeedAndTools = ({ item, isEdit, setIsModelOpen }) => {
  const toolState = useSelector((state) => state.Tools);
  const seedState = useSelector((state) => state.Seeds);
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");

  const addToolsAndSeeds = async () => {
    const payload = {
      id: id,
      name: itemName,
      price: price,
      description: description,
      image: image,
    };

    const { errors, isInvalid } = validateToolsAndSeeds(payload);

    if (isInvalid) {
      Swal.fire({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        icon: "error",
        title: "Please enter your details",
      });
    } else {
      await dispatch(item === "Seed" ? addSeed(payload) : addTool(payload))
        .then((res) => {
          if (item === "Seed" ? !seedState.error : !toolState.error) {
            Swal.fire({
              title: "Success!",
              text: `${res.payload.message}`,
              icon: "success",
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: `${item === "Seed" ? seedState.error : toolState.error}`,
              icon: "error",
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
            });
          }
        })
        .catch((err) => {
          Swal.fire({
            title: "Error!",
            text: `${err}`,
            icon: "error",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
          });
        });
    }

    dispatch(item === "Seed" ? getSeed() : getTool());
  };

  const convertToBase64 = (e) => {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error", error);
    };
  };

  return (
    <div
      className="item rounded border mr-2 shadow-lg mt-2 w-75  "
      style={{ marginRight: "150px", backgroundColor: "white" }}
    >
      <div className="d-flex justify-content-end">
        <button
          type="button"
          class="close"
          aria-label="Close"
          style={{ backgroundColor: "black" }}
          onClick={() => setIsModelOpen(false)}
        >
          <span aria-hidden="true" style={{ color: "white" }}>
            &times;
          </span>
        </button>
      </div>
      <div style={{ marginRight: "50px", marginTop: "15px" }}>
        <div className="d-flex justify-content-end ">
          <div>
            <img
              src={image ? image : image1}
              style={{ objectFit: "cover", width: "150px", height: "150px" }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-end mt-2 mx-4">
          <input
            accept="image/*"
            type="file"
            className="d-none"
            onChange={convertToBase64}
            id="file"
          />
          <label
            htmlFor="file"
            style={{
              cursor: "pointer",
              borderRadius: "15px",
              background:
                "linear-gradient(to right, #057B18 100%, #00FF29 84.49% , #4CE364 89%)",
              boxSizing: "border-box",
              width: "100px",
              height: "40px",
              display: "flex",
              textAlign: "center",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Upload
          </label>
        </div>
      </div>
      <div className="col-lg-12 mt-4 mx-4">
        <div className="item">
          <h5 className="modal-title fw-bold">Add {item}</h5>
          <div className="row">
            <div className="offset-6 col-lg-6 col-md-12 col-sm-12">
              <div className="row"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <form id={`Add${item}Form`}>
            <div className="row">
              <div className="mx-4 mt-4" style={{ width: "500px" }}>
                <input
                  id="name"
                  type="text"
                  className="form-control  d-inline"
                  placeholder={`${item} name`}
                  name="name"
                  value={itemName}
                  onChange={(e) => {
                    setItemName(e.target.value);
                  }}
                />
                <small
                  htmlFor="name"
                  className="d-block text-danger form-text invalid-feedback"
                ></small>
              </div>

              <div
                className="row mt-4 mx-4 "
                style={{ height: "150px", width: "800px" }}
              >
                <input
                  id="description"
                  type="description"
                  className="form-control  d-inline"
                  placeholder="Description"
                  name="description"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <small
                htmlFor="description"
                className="d-block text-danger form-text invalid-feedback"
              ></small>
            </div>

            <div className="row mt-4">
              <div className="col-6 d-flex mx-4">
                <span
                  style={{ background: "#24353E" }}
                  className="input-group-text d-inline text-white"
                  id="basic-addon1"
                >
                  RS:
                </span>
                <input
                  id="price"
                  type="text"
                  className="form-control  d-inline"
                  value={price}
                  placeholder={`${item} Price`}
                  name="price"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <small
                htmlFor="price"
                className="d-block text-danger form-text invalid-feedback"
              ></small>
            </div>
            <div className="row mt-4">
              <div
                className="d-flex justify-content-end mb-4"
                style={{ marginLeft: "-100px" }}
              >
                <button
                  type="button"
                  className="btn btnAdd"
                  onClick={() => {
                    addToolsAndSeeds();
                  }}
                >
                  {!isEdit ? "Submit" : "Update"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSeedAndTools;
