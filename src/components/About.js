import React, {useEffect, useState} from "react";
import './style.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";


const About=()=>{
    
    return(
        <>
            <Header/>
            <div className="about">
                <h1>About Website Make Up Store</h1>
                <p>Wesite ini berisi katalog produk dari beberapa brand Make Up ternama yaitu Maybelline, CoverGirl, dan NYX. <br /> Pengguna dapat mengakses website ini dan mendapatkan informasi produk, harga, dan juga penjelasan dari produk tersebut. </p>
                <img src="https://makeup-api.herokuapp.com/assets/brushes-6d2ab84631ecd47ced4fa07c47eb37521eb61c5a525965dafaf308f21338aa44.png"></img>
            </div>

            

            <Footer/>
        </>
    )
}

export default About;