import { Box } from '@mui/material';
import React, { ReactNode } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children} : LayoutProps) => {
  return (
    <Box sx={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: {
            // xs: "column",
            lg: "row"
        },
        color: "#000",
        padding: 3,
        overflowY: "hidden",
        gap: 3,
        height: "100vh"
    }}>
        <Sidebar/>
        <Box sx={{overflowY:"scroll", width:"100%"}}>{children}</Box>
        
    </Box>
  )
}

export default Layout