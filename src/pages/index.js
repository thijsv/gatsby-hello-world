import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function Home() {
  return (
    <>
      <Header currentPage="Home" />
      <div style={{ color: 'purple'}}>
        <h1>Hello world in dex page</h1>
        <p><Link to="/contact">link to contact</Link></p>
        <p>this is a photo</p>
        <img src="https://source.unsplash.com/random/400x400" />
      </div>
    </>
  )
}
