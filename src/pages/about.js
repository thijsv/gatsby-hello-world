import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function About() {
  return (
    <>
      <Header currentPage="About" />
      <div style={{ color: 'blue'}}>
        <h1>About us</h1>
        <p>this is a random little photo</p>
        <img src="https://source.unsplash.com/random/100x100" />
        <p><Link to="/" style={{fontWeight: 'bold', fontSize: '0.8rem'}}>&lt; back to home</Link></p>
      </div>
    </>
  )
}
