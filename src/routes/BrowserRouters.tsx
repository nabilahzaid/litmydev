import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./Routes";
import App from "../App";
import Feature from "../pages/feature";
import Sample from "../pages/sample";

const BrowserRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.default} element={<Sample />} />
        <Route path={ROUTES.home} element={<Feature />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BrowserRouters;
