import React from "react";
import { fakeUserData } from "../Api/Api";
import { useDispatch } from "react-redux";
import { addUser } from "../../Store/Slices/UserSlice";

const UserDetail = () => {
  const dispatch = useDispatch();

  const addNewUser = (value) => {
    dispatch(addUser(value));
  };

  return (
    <div className="container mt-5">
      <div className="row mt-5 p-4 rounded-4 bg-dark text-white">
        <div className="w-50 mx-auto ">
          <div className="d-flex align-items-center justify-content-between w-100">
            <p className="mb-0">All users</p>
            <button className="btn btn-primary" onClick={() => addNewUser(fakeUserData(fakeUserData()))} >Add Users</button>
          </div>
          <ul className="mt-4 list-unstyled">
            <li>Adnan </li>
            <li>Adnan </li>
          </ul>
        </div>
        <div>
          <div className="mt-5 w-50 mx-auto d-flex align-items-center justify-content-center">
            <button className="btn btn-danger  ">Delete All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
