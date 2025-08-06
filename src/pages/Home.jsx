import React from 'react'
import Header from '../header/Header'
import Post from '../post/Post'
import Footer from '../navbar/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      
      <Header/>
      <Post/>
      <Footer/>
       
    </div>
  )
}

export default Home
