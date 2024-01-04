import React from "react";
import { Link } from "react-router-dom";
import "../../styles/header.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {


    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-transparent sticky-lg-top">
                <div className="container-fluid">
                    <button className="navbar-toggler border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav px-3">
                            <li className="nav-item">
                                <Link className="nav-link mx-2" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-2" to="/proyects">Proyects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-2" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-2" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}