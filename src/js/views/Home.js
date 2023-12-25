import React from "react";
import "../../styles/home.css"
import ReactTyped from "react-typed";
import { Link } from "react-router-dom";


export const Home = () => {
    return (
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className="presentation mx-4 container">
                <div className="row justify-content-md-center">
                    <div className="col-md-auto text-center">
                        <h1>
                            <ReactTyped
                                strings={["Hello!", "Hola!", "こんにちは", "Bonjour", "你好", "привет"]}
                                typeSpeed={200}
                                backSpeed={200}
                                loop />

                        </h1>
                    </div>
                    <div className="col-md-auto text-center">
                        <h1>I'm Jose Morillo</h1>
                    </div>
                </div>
            </div>
            <div className="description text-center mx-4">
                <p>
                    A curious, passionate, and autodidact fullstack developer from Venezuela.<br />
                    With a keen eye for building web applications with modern technologies.
                </p>
                <Link className="button" to="/proyects">Proyects</Link>
            </div>
        </div>
    )
}