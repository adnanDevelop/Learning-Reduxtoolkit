import React from "react";
import { fakeUserData } from "../Api/Api";
import { useDispatch , useSelector } from "react-redux";
import { addUser , removeUser , deleteAllUser } from "../../Store/Slices/UserSlice";

const UserDetail = () => {
  const data = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const addNewUser = (value) => {
    dispatch(addUser(value));
  };

  const removeExistUser = (id) => {
    dispatch(removeUser(id));
  }

  const deleteUsers = () => {
    dispatch(deleteAllUser())
  }



  return (
    <div className="container mt-5">
      <div className="row mt-5 p-4 rounded-4 bg-dark text-white">
        <div className="w-50 mx-auto ">
          <div className="d-flex align-items-center justify-content-between w-100">
            <p className="mb-0">All users</p>
            <button className="btn btn-primary" onClick={() => addNewUser(fakeUserData())} >Add Users</button>
          </div>
          <ul className="mt-4 list-unstyled">
            {data.map((element , id) => {
              return (
                <li key={id} className=" mb-3 d-flex align-items-center justify-content-between">{element} <button className="btn btn-sm btn-success" onClick={() => removeExistUser(id)}>Remove</button> </li>

              )
            })}
          </ul>
        </div>
        <div>
          <div className="mt-5 w-50 mx-auto d-flex align-items-center justify-content-center">
            <button className="btn btn-danger" onClick={deleteUsers}>Delete All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
