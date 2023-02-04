import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  
import * as Page from "../pages";
import Header from "../components/header";

export default function Routing() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Page.Home />} />
          <Route path="/table-data" element={<Page.TableData />} />
          <Route path="/bid-price" element={<Page.BidPrice />} />
        </Routes>
      </BrowserRouter>
  );
}
