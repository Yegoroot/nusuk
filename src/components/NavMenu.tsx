import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import { HomeIcon } from "../assets/icons/HomeIcon";

export const NavMenu = () => {
  return <Box sx={{
    width: '100%', 
    p: 2,
    display: 'flex', 
    justifyContent: 'space-between'
  }}>
  <Box>
    <Typography to="home" component={Link} sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2
    }}>
      <HomeIcon />
      الرئسية
    </Typography>
  </Box>
  <Typography to="/" component={Link}>Permits</Typography>
  <Typography to="/" component={Link}>Service</Typography>
</Box>
}