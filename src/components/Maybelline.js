import React, {useEffect, useState} from "react";
import './style.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";


const Maybelline=()=>{
    const [data, setData] = useState("Maybelline");
    
    return(
        <>
            <Header/>
            <Content data={data} />
            <Footer/>
        </>
    )
}

export default Maybelline;