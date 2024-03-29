import React from "react";
import { Link } from "react-router-dom";

const BrandName = () => {
    return (
        <Link to="/">
            <h1 className="app-name">
                <span>POD-CASTER</span>
            </h1>
        </Link>
    );
};

export default BrandName;