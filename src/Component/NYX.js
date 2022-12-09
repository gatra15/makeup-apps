import React, {useState} from 'react';
import './style.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";


const NYX=()=>{
    const [data, setData] = useState("nyx");
    
    return(
        <>
            <Header/>
            <Content data={data} />
            <Footer/>
        </>
    )
}

export default NYX