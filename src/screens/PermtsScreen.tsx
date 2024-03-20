import { Box, Button, Card } from "@mui/material"
// @ts-ignore
import umraVideo from "./../assets/video/umrah_pattern_render.mp4";
import PermitTabs from "../components/PermitTabs";

export const PermtsScreen = () => {

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
        <Box sx={{margin: 'auto', width: '100%', display: 'flex', justifyContent: 'center'}}>

        <Card sx={{background: '#594f41', mt: 4, width: "90%" }}>
    <video width="100%" autoPlay muted loop>
          <source src={umraVideo} type="video/mp4" />
        </video>
        </Card>
        </Box>

  </Box>
}