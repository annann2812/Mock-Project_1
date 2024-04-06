import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link, useLocation } from 'react-router-dom';
import { Box, Hidden, Typography } from '@mui/material';

const navLinks = [
  {
    name: "Electronics",
    icon: ArrowForwardIcon,
    link: "/home/electronics",
  },
  {
    name: "Televisions",
    icon: ArrowForwardIcon,
    link: "/home/televisions"
  },
  {
    name: "Smartphones",
    icon: ArrowForwardIcon,
    link: "/home/smartphones"
  },
  {
    name: "Cameras",
    icon: ArrowForwardIcon,
    link: "/home/cameras"
  },
  {
    name: "JBL Speakers",
    icon: ArrowForwardIcon,
    link: "/home/JBLSpeakers"
  },
]

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <Box sx={{
      display: "flex",
      backgroundColor: "#ccc",
      padding: 2,
      borderRadius: 2, 
      flexDirection: {
        lg: "column"
      },
      alignItems: "center",
      justifyContent: "space-between",
      width: {
        lg: 300,
      }
    }}>
      <Box sx={{
        display: "flex",
        gap: 5,
        flexDirection: {
          lg: "column"
        },
        alignItems: "center",
        width: "100%"
      }}>
          <Hidden smDown>
            <Typography>SHOP BY CATEGORY</Typography>
            <Box sx={{
              py: {
                lg: "16px",
              },
              display: "flex",
              flexDirection: {
                lg: "column"
              }
            }}>
            {navLinks.map((item) => (
              <Link key={item.name}  to= {item.link} style={{textDecoration: "none"}}>
                <Box sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: "white",
                  textDecoration: "none"
                }}>
                    <Typography>
                      <ArrowForwardIcon sx={{
                        width: "18px",
                        filter: `${
                          pathname === item.link
                          ? "invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(87%)"
                          : "invert(84%)"  
                        }`
                      }} />
                      {item.name}
                    </Typography>
                </Box>
              </Link>

            ))}

            </Box>
          </Hidden>
        

      </Box>
    </Box>
  )
}

export default Sidebar