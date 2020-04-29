import React from "react"
import Link from "gatsby-link"
import Layout from '../layouts'

export default () => <div style={{color: 'blue'}}>
  <h1>Page 2</h1>
  <Link to="/">Go Home</Link>
  <br />
  <Link to="/dir1/page-3">Page 3</Link>
  <br />
  <Link to="/counter/">Counter</Link>
  
</div>
