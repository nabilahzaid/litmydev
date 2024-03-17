import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./Routes";
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Directories from "../pages/directories/directories";
import Resources from "../pages/resources/resources";

const BrowserRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.default} element={<Home />} />
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.about} element={<About />} />
        <Route path={ROUTES.directories} element={<Directories />} />
        <Route path={ROUTES.resources} element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BrowserRouters;
