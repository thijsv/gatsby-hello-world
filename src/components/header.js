import React from "react"
export default function Header(props) {
  return <h1 style={{backgroundColor: 'pink'}}>This is a header of page: {props.currentPage} .</h1>
}