import { useEffect, useState } from 'react'
import { Blog } from '../../../public/type'
import axios from 'axios';
import Layout from '../../Layout/Layout';
import React from 'react';

const BlogPage = () => {
  const [ blogs, setBlogs ] = useState<Blog[]>([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(respone => setBlogs(respone.data))
    .catch(err => console.log("fetching error", err))
    console.log(setBlogs)
  }, [])

  return (
    <div>
      {/* {blogs.map((item, index) => (
        <Box key={index}>
          <Typography variant='h6'>{item.title}</Typography>
          <Typography variant='body2'>{item.body}</Typography>
        </Box>
      ))} */}

      <section className="text-gray-600 body-font">
        <div className="container px-2 mx-auto flex flex-wrap">
          {blogs.map((item, index) => (
            <div className="flex flex-wrap -m-4">
              <div key={index} className="p-4 md:w-full">
                <div className="border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#76885B] text-[#76885B] flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{item.title}</h2>
                    <p className="leading-relaxed text-base">{item.body}</p>
                    <a className="mt-3 text-[#76885B] inline-flex items-center">Read More
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default BlogPage;