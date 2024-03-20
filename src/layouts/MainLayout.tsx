import { Box } from "@mui/material"
import { Outlet } from "react-router-dom";
import { NavMenu } from "../components/NavMenu";

export const MainLayout = () => {
  return <>
    <Box sx={{ height: '100vh', p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
   background: 'linear-gradient(72deg, rgba(40,40,40,1) 26%, rgba(27,29,33,1) 100%)',
  }}>


        <Outlet />

      <Box>
        <NavMenu />
      </Box>
    </Box>
  </>
}