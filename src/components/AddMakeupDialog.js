import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField
  } from "@mui/material";
  import axios from "axios";
  import React, { useState } from "react";
  
  const BASE_API_URL = `https://gnd17.000webhostapp.com`;
  const headers = {
    "Content-Type": "application/json",
  };
  
  function AddMakeupDialog({ open, onClose, brand, makeup, setMakeup }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

  
    const handleSubmit = () => {
      const form = new FormData();
      form.append("name", name);
      form.append("brand", brand);
      form.append("price", price);

      const options = {
        method: 'POST',
        url: `${BASE_API_URL}/api/products/`,
        headers: {'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001'},
        data: '[form]'
      };

      axios.request(options).then(function (res) {
        console.log(res.data);
      }).catch(function (error) {
        console.error(error);
      });
    };
  
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Add Makeup</DialogTitle>
        <DialogContent
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            padding: "8px 20px"
          }}
        >
          <TextField
            name="name"
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            name="price"
            label="Price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    );
  }
  
  export default AddMakeupDialog;
  