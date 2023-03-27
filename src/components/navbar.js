import React, {useState} from "react"
import { Link } from "react-router-dom"

function Navbar() {
    return (
      <>
        <nav className="Navbar">

            <div className="navbar-container">
                <Link to = "/" className="navbar-logo">
                    Bz Bikes <i className="fab fa-typo3"></i>
                </Link>
            </div>

        </nav>                   
      </>
    )
}

export default Navbar