import React, {useState} from 'react';
import './style.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";


const CoverGirl=()=>{
    const [data, setData] = useState("Covergirl");
    
    return(
        <>
            <Header/>
            <Content data={data} />
            <Footer/>
        </>
    )
}

export default CoverGirl;