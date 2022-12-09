import Card from "./Card";
import React, {useEffect, useState, useRef } from "react";
import axios from "axios";
import './style.css';
import AddMakeupDialog from "./AddMakeupDialog";

const BASE_API_URL = `https://gnd17.000webhostapp.com`;
let url=BASE_API_URL+"/api/products/";

const Content=({data})=>{
    data = data.toLowerCase();
    const [makeupData,setData]=useState([]);
    const[url_set,setUrl]=useState(url);
    const[brand, setBrand]=useState(data);
    const [newMakeup, setNewMakeup] = useState([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const inputan = useRef(null);

    useEffect(() => {
        async function getUrl() {
          await axios
            .get(`${url+data}`, {
            })
            .then((res) => {
              const responseData = res.data.data;
              console.log("response: ",responseData);
              setData(responseData);
            })
            .catch((error) => {
              console.log(error);
              window.alert(error);
            });
        }
        getUrl();
      }, [url_set]);

    const getData=(makeupType)=>{
    if(makeupType=="Maybelline")
    {
        setBrand("maybelline");
        url=BASE_API_URL+"/api/products/"+brand;
    }
    if(makeupType=="Covergirl")
    {
        setBrand("covergirl");
        url=BASE_API_URL+"/api/products/"+brand;
    }
    if(makeupType=="NYX")
    {
        setBrand("nyx");
        url=BASE_API_URL+"/api/products/"+brand;
    }
    setUrl(url);
    }

      const searchMakeup = () => {
        let name = inputan.current.value;
        if(makeupData.length > 0 && makeupData.length != 1){
          axios
          .get(`${url}${brand}?name=${name}`)
          .then((res) => {
            setData(res.data.data);
          })
          .catch((error) => console.log(error));
        }
        else{
          axios
            .get(`${url}${brand}`)
            .then((res) => {
              setData(res.data.data);
            })
            .catch((error) => console.log(error));
            
        }
      };

      const handleDeleteMakeup = (id, idx) => {
        const options = {method: 'GET', url: `${url}${id}`};
        async function delMakeup() {
          await axios
            .request(options)
            .then((res) => {
              console.log(id);
              console.log(idx);
              let arr = makeupData;
              if (idx !== -1) {
                arr.splice(idx, 1);
              }
              setData([...arr]);
            })
            .catch((error) => {
              console.log(error);
              window.alert(error);
            });
        }
    
        delMakeup();
      };

    return(
        <>
            <form>
                <div className="search-btn">
                    <input
                      id="search"
                      type="text"
                      className="inputText"
                      placeholder="Search By Name"
                      ref={inputan}
                    />
        
                    <button type="button" className="search-btn button" onClick={searchMakeup}>Cari</button>
                </div>  
            </form>

            <div className="container">
                {
                    (makeupData.length==0)?<h1 className="notfound">Not Found</h1>: makeupData.map((res,pos)=>{
                        return(
                            <Card 
                            key={res.id}
                            info={res}
                            onClick={() => handleDeleteMakeup(res.id,pos)}
                            />
                        )
                    })
                }
            </div>

            {
                newMakeup.map((res) => (
                    <Card 
                    key={res.id}
                    info={res}
                    />
            )) }

            {isDialogOpen && (
            <AddMakeupDialog
            makeup={newMakeup}
            setMakeup={setNewMakeup}
            brand={brand}
            />)}

        </>
    )
}

export default Content;