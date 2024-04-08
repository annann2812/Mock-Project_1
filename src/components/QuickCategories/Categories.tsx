import { Box, Typography } from '@mui/material'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Product } from "../../../public/type"


const Categories = () => {
    const [content, setContent ] = useState<Product[]>([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then (res => {setContent(res.data.slice(0,4))})
        .catch (err => console.log("fetching error", err))
    }, []);
  return (
    <Box>
        <Typography>SHOP BY CATEGORIES</Typography>
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            margin: "auto",
        }}>
            {content.map((item, index) => (
                <Box
                key={index}
                height={200}
                width={200}
                my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{
                  borderRight: index !== content.length - 1 ? '2px solid grey' : 'none',
                  ...(index === content.length - 1 && { border: 'none' })
                }}>
                    <div>
                            <Typography variant="h6">{item.title}</Typography>
                            <Typography variant="body1">{item.description}</Typography>
                    </div>

                </Box>
            ))}
        </Box>
    </Box>
  )
}

export default Categories