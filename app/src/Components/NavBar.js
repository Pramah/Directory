import React from "react";
import Search from "./Search.js";
import "../Styles/NavBar.css";

function NavBar({ handleSearchChange }) {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="navbar-collapse row" id="navbarNav">
                <Search handleSearchChange={handleSearchChange} />
            </div>
        </nav>
    );
}
export default NavBar;
