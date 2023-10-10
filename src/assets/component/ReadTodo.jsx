import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {useDispatch , useSelector } from "react-redux";
import { getUniqueData , clearData } from "../../Store/Slices/TodoSlice";

const ReadTodo = () => {
  const data = useSelector(state => state.todo.uniqueData);
  const {name , lastName , number , email , address} = data;
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUniqueData(+params.id));
    return () => {
      dispatch(clearData())
    }
  } , []);
  
  


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="box bg-dark text-white rounded-3 shadow p-3">
            <h3 className="mb-1">{`${name} ${lastName}`}</h3>
            <p className="mb-2">{number}</p>
            <p className="mb-2">{email}</p>
            <p className="mb-2">{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadTodo;
