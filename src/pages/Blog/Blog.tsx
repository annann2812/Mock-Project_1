import { useEffect, useState } from 'react'
import { Blog } from '../../../public/type'
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import Layout from '../../Layout/Layout';

const BlogPage = () => {
  const [ blogs, setBlogs ] = useState<Blog[]>([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(respone => setBlogs(respone.data))
    .catch(err => console.log("fetching error", err))
  }, [])

  return (
    <Layout>
      {blogs.map((item, index) => (
        <Box key={index}>
          <Typography variant='h6'>{item.title}</Typography>
          <Typography variant='body2'>{item.body}</Typography>
        </Box>
      ))}
    </Layout>
  )
}

export default BlogPage;