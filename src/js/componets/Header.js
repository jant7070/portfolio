import React from "react";
import { Link } from "react-router-dom";


export const Header = () => {


    return (
        <div>
            <Link to="/proyects">Proyects</Link>
            <Link to="/">Home</Link>
        </div>
    )
}