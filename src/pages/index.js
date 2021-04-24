import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function Home() {
  return (
    <>
      <Header currentPage="Home" />
      <div style={{ color: 'purple'}}>
        <h1>Hello world index page</h1>
        <p><Link to="/about">ABOUT US</Link></p>
        <p><Link to="/contact">CONTACT</Link></p>
        <p>this is a photo</p>
        <img src="https://source.unsplash.com/random/400x400" />
      </div>
    </>
  )
}
