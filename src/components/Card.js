import React from "react";
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Card=({info, onClick})=>{
    return(
        <>
            <div className="makeup">
                <IconButton onClick={onClick}>
                    <Delete />
                </IconButton>
                <img src={info.image} className="image"></img>
                <div className="makeup-details">
                    <div className="box">
                        <h4 className="title">{info.name}</h4>
                        <p className="price">${info.price}</p>
                    </div>
                    <div className="overview">
                        <h1>overview</h1>
                        {info.description}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;