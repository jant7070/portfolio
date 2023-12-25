import React from "react";
import { Link } from "react-router-dom";
import "../../styles/header.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {


    return (
        <div>
            <nav className="navbar navbar-expand-lg nav-bar sticky-top">
                <div className="container-fluid">
                    <Link className="link-tag" to="/">{`< Jose Morillo />`}</Link>
                    <button className="navbar-toggler bg-transparent border border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span><FontAwesomeIcon icon={faBars} /></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-3">
                                <Link className="link-tag" to="/about">About</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="link-tag" to="/proyects">Proyects</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="link-tag" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}