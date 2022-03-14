import { Route, Routes } from "react-router-dom";
import App from "../App";
import React from "react";
import Inbox from "./inbox";

export default function Modules() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Inbox />} />
      </Route>
    </Routes>
  );
}
