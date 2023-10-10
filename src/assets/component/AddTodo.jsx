import React, { useState } from "react";

const AddTodo = () => {
  const [getInputValue, storeInputValue] = useState({ name: "", lastName : '' , email: "" , number : '' });
  const inputData = (event) => {
    const { name, value } = event.target;
    storeInputValue({
      ...getInputValue,
      [name]: value,
    });
  };
  return (
    <>
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
              <button className="btn btn-success btn-sm ms-3">Save Todo</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
