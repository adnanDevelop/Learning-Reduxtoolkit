import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import { getUniqueData, clearData } from "../../Store/Slices/TodoSlice";

const EditTodo = () => {
  const data = useSelector((state) => state.todo.uniqueData);
  const { name, lastName, number, email, address } = data;

  const [getInputValue, storeInputValue] = useState({
    id: nanoid(),
    name: name,
    lastName: lastName,
    email: email,
    number: number,
    address: address,
  });
  const dispatch = useDispatch();
  const inputData = (event) => {
    const { name, value } = event.target;
    storeInputValue({
      ...getInputValue,
      [name]: value,
    });
  };

  const params = useParams();
  useEffect(() => {
    dispatch(getUniqueData(+params.id));
    return () => {
      dispatch(clearData());
    };
  }, []);

  const submitForm = () => {
    dispatch(addData(getInputValue));
    navigate(-1);
  };

  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-lg-6 mx-auto">
          <div className="modal-content p-4 shadow bg-black text-white">
            <div className="modal-body">
              <form>
                {/* FIRST NAME */}
                <div className="form-group mb-3">
                  <label htmlFor="FirstName">FirstName:</label>
                  <input
                    type="text"
                    className="form-control rounded-0 "
                    id="FirstName"
                    name="name"
                    value={getInputValue.name}
                    onChange={inputData}
                    placeholder="Write FirstName..."
                  />
                </div>
                {/* LAST NAME */}
                <div className="form-group mb-3">
                  <label htmlFor="lastName">LastName:</label>
                  <input
                    type="text"
                    className="form-control rounded-0 "
                    id="lastName"
                    name="lastName"
                    value={getInputValue.lastName}
                    onChange={inputData}
                    placeholder="Write content..."
                  />
                </div>
                {/* E-MAIL NAME */}
                <div className="form-group mb-3">
                  <label htmlFor="email">E-mail:</label>
                  <input
                    type="text"
                    className="form-control rounded-0 "
                    id="email"
                    name="email"
                    value={getInputValue.email}
                    onChange={inputData}
                    placeholder="Write content..."
                  />
                </div>
                {/* ADDRESS */}
                <div className="form-group mb-3">
                  <label htmlFor="address">Adress:</label>
                  <input
                    type="text"
                    className="form-control rounded-0 "
                    id="addres"
                    name="address"
                    value={getInputValue.address}
                    onChange={inputData}
                    placeholder="Write content..."
                  />
                </div>
                {/* NUMBER */}
                <div className="form-group mb-4">
                  <label htmlFor="number">Number:</label>
                  <input
                    type="number"
                    className="form-control rounded-0 "
                    id="number"
                    name="number"
                    value={getInputValue.number}
                    onChange={inputData}
                    placeholder="Write content..."
                  />
                </div>
              </form>
            </div>
            <button
              className="btn btn-success btn-sm ms-3"
              onClick={submitForm}
            >
              Save Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
