import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./assets/component/Navbar";
import TodoList from "./assets/component/TodoList";
import UserDetail from "./assets/component/UserDetail";
import AddTodo from "./assets/component/AddTodo";
import EditTodo from "./assets/component/EditTodo";
import ReadTodo from "./assets/component/ReadTodo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/tutorial" element={<UserDetail />} />
          <Route path="/addtodo" element={<AddTodo />} />
          <Route path="/addtodo/:id" element={<ReadTodo />} />
          <Route path="/addtodo/:id" element={<EditTodo />} />
        </Routes>
      </BrowserRouter>
      {/* <UserDetail/> */}
    </>
  );
}

export default App;
