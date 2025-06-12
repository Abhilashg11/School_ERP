import React from 'react'
import './DetailContainer.css'
import TextBox from '@/components/SystemComponents/TextBox/Textbox'
import PageContainer from '@/components/Containers/PageContainer/PageContainer'
import { Grid } from '@mui/system'

const DetailContainer = (props) => {
  const data = [
    { pagecontainer: 4, size: { xs: 12, md: 6 } },
    { pagecontainer: 4, size: { xs: 12, md: 6 } },
    { pagecontainer: 4, size: { xs: 12, md: 6 } },
    { pagecontainer: 4, size: { xs: 12, md: 6 } },
    { pagecontainer: 4, size: { xs: 12, md: 6 } },
  ];

  const count = data[0].pagecontainer

  return (
    <div className={`main-container ${props?.customClass || ''}`}>
      <Grid container spacing={2}>
        {Array.from({length:count}).map((item, i) => {
          const size = data[i]?.size || { xs: 12, md: 12 }; 
        return(
          <Grid size={size} key={i}>
            <PageContainer />
          </Grid>
        )})}
      </Grid>
    </div>
  );
}

export default DetailContainer
