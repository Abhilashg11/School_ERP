import { TextField } from "@mui/material";
import React from "react";
import "./TextBox.css";

const TextBox = (props) => {
  // const data = [
  //   {
  //     required: true,
  //     labeLName: "First name",
  //     placeholder: "text here",
  //   },
  //   { required: false, labeLName: "First name", placeholder: "down here" },
  //   { required: false, labeLName: "First name", placeholder: "down here" },
  //   { required: false, labeLName: "First name", placeholder: "down here" },
  // ];
  return (
    <div
      // className="Grid-container"
      // style={{ display: "grid", gridTemplateColumns: "auto auto" }}
    >
        <div
          // key={index}
          style={{ display: "flex", flexDirection: "column", padding: "6px", }}
        >
          <label className='label'>{props.label}</label>
          <div>
            <TextField
            fullWidth
              placeholder={props.placeholder}
              required={props.required}
           InputProps={{
       style: {
         height: "36px", // Adjust as needed
       },
     }}
            />
          </div>
        </div>
    </div>
  );
};

export default TextBox;
