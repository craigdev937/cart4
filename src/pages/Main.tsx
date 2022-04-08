import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Cart } from "../components/Cart";
import { Navbar } from "./Navbar";

export const Main = (): JSX.Element => (
    <BrowserRouter>
        <React.Fragment>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </React.Fragment>
    </BrowserRouter>
);


