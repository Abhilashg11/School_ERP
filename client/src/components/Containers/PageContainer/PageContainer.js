import TextBox from "@/components/SystemComponents/TextBox/Textbox";
import React from "react";
import "./PageContainer.css";
import { Grid } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";

const PageContainer = (props) => {
  const componentsMap = {
    TextBox: TextBox,
  };
  const displaycontents = [
    {
      type: "TextBox",
      TextBoxprops: { label: "First Name", name: "firstName" },
      grid: { xs: 6, md: 10 },
    },
    {
      type: "TextBox",
      TextBoxprops: { label: "Last Name", name: "lastName" },
      grid: { xs: 6, md: 2 },
    },
    {
      type: "TextBox",
      TextBoxprops: { label: "Email", name: "email", placeholder: "texthere" },
      grid: { xs: 6, md: 6 },
    },
    {
      type: "TextBox",
      TextBoxprops: { label: "Phone", name: "phone", placeholder: "texthere" },
      grid: { xs: 6, md: 6 },
    },
  ];
  return (
    <div className={`main-Pagecontainer ${props?.customClass || ""}`}>
      <div className="Header-text">Page containers</div>
      <Grid container spacing={2}>
        {displaycontents.map((field, index) => {
          const Component = componentsMap[field.type];
          const size = field.grid || {};
          console.log("df", size);

          return (
            <Grid size={size} key={index}>
              <Component {...field.TextBoxprops} />
            </Grid>
          );
        })}
        {/* <LocalizationProvider>
        <DemoItem>
          <DesktopDatePicker  />
        </DemoItem>
        </LocalizationProvider> */}
      </Grid>
    </div>
  );
};

export default PageContainer;
