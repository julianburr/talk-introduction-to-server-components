import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ListPage } from "./pages/ListPage";
import { DetailsPage } from "./pages/DetailsPage";

import "@workspace/shared/styles/global.css";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/:movieId/:slug" element={<DetailsPage />} />
        <Route path="/" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
