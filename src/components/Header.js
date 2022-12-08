import React from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <>
            <div className="header">
                <nav>
                    <ul>
                        <li>
                        <Link to="/">About</Link>
                            <Link to="/maybelline">Maybelline</Link>
                            <Link to="/covergirl">CoverGirl</Link>
                            <Link to="/nyx">NYX</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header;
