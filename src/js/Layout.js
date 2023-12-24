import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./componets/Header";
import { Home } from "./views/Home";
import { Proyects } from "./views/Proyects";
import { Contact } from "./views/Contact";
import { About } from "./views/About";

export const Layout = () => {
    return (
        <div>
            <BrowserRouter basename="/">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/proyects" element={<Proyects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}