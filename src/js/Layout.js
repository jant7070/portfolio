import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./componets/Header";
import { Home } from "./views/Home";
import { Proyects } from "./views/Proyects";

export const Layout = () => {
    return (
        <div>
            <BrowserRouter basename="/">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/proyects" element={<Proyects />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}