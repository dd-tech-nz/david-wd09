import React from "react"
import Link from "gatsby-link"
import Counter from './counter'

export default ({data}) => <div style={{color: 'tomato'}}>
  <h1>{data.site.siteMetadata.title}</h1>
  <p>{data.site.siteMetadata.author}.</p>
  <Link to="/page-2/">Page 2</Link>
  <br />
  <Link to="/dir1/page-3/">Page 3</Link>
  <br />
  <Counter color="blue"/>
</div>

export const query = graphql`
query FirstQuery {
  site {
    siteMetadata {
      title
      author
    }
  }
}
`
