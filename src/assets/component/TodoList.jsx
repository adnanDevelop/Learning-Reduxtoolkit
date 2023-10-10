import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdVisibility } from "react-icons/md";
import { NavLink } from "react-router-dom";
// import { deleteAllUser } from "../../Store/Actions/Action";

const TodoList = () => {
  const data = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-10 mx-auto ">
          <h1 className="text-center">Todo-List</h1>
          <div className="d-flex justify-content-center mt-4">
            <NavLink to={"/addtodo "} className="btn btn-success">
              Add Todo
            </NavLink>
          </div>
          {/* TABLE START FOR STORING TODO DATA */}
          <div className="row my-4">
            {data.map((element, index) => {
              return (
                <div key={index} className="col-lg-4 col-sm-6">
                  <div className="box bg-dark text-white rounded-3 shadow p-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <h3 className="mb-1">
                        {element.name} {element.lastName}
                      </h3>
                      <h4>
                        <NavLink to={`/addtodo/${index}`}>
                          <MdVisibility />
                        </NavLink>{" "}
                      </h4>
                    </div>
                    <p className="mb-0">{element.email}</p>
                    <p className="mb-0">{element.number}</p>
                    <p className="mb-0">{element.address}</p>
                    <div className="buttons mt-3">
                      <button className="btn btn-sm btn-success me-3">
                        Edit
                      </button>
                      <button className="btn btn-sm btn-danger">Remove</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="delete-all-btn d-flex justify-content-center">
            <button className="btn btn-danger">Delete All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
