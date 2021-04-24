import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function Contact() {
  return (
    <>
      <Header currentPage="Contact" />
      <div style={{ color: 'blue'}}>
        <h1>Contact us</h1>
        <p>send us a message</p>
        <p><Link to="/" style={{fontWeight: 'bold', fontSize: '0.8rem'}}>&lt; back to home</Link></p>
      </div>
    </>
  )
}
