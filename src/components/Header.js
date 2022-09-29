import React from 'react'
import blogData from '../data/blog'

const Header = () => {
    // console.log(blogData.name)
  return (
    <header>
        <h1>{blogData.name}</h1>
    </header>
  )
}

export default Header