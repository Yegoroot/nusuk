import { Box, Button, Card } from "@mui/material"
// @ts-ignore
import umraVideo from "./../assets/video/umrah_pattern_render.mp4";
import PermitTabs from "../components/PermitTabs";
import { useEffect, useRef, useState } from "react";
import { useContainerDimensions } from "../hooks/useContainerDimensions";
import { useSettings } from "../context/useSettings";

export const PermtsScreen = () => {

  const {settings} = useSettings()
  

  return <Box>

      <Box sx={{
        pt: 1.5,
        display: 'flex',
        justifyContent: 'flex-end'
        }}>


      <Button variant="contained">
        العمرة والروضة الشريفة
      </Button>
    </Box>

    <PermitTabs />
        <Box   sx={{margin: 'auto', position: 'relative', width: '100%', display: 'flex', justifyContent: 'center'}}>

        <Card sx={{background: '#594f41', maxWidth: '300px', mt: 4, width: "90%" }}>
    <video  width="100%" autoPlay muted loop>
          <source src={umraVideo} type="video/mp4" />
        </video>
        </Card>
        <img alt="s" style={{
          width: 100,
          top: settings.topQR,
          position: 'absolute',
          height: 100
        }} src="/images/qr.webp" />
        </Box>

  </Box>
}