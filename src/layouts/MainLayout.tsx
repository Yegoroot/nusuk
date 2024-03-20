import { Box } from "@mui/material"
import { Outlet } from "react-router-dom";
import { NavMenu } from "../components/NavMenu";

export const MainLayout = () => {
  return <>
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>

      <Box>
        <Outlet />
      </Box>
      <Box>
        <NavMenu />
      </Box>
    </Box>
  </>
}