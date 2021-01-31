import React from 'react'
import { Link, graphql } from 'gatsby'

// import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import Img from 'gatsby-image'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    let isImg = (img) => {
      if(img) {
        return <Img fluid={img.childImageSharp.fluid} />
      }
      return null;
    }



    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        {posts.map(({ node }) => {
          console.dir(node.frontmatter.img);
          const title = node.frontmatter.title || node.fields.slug

          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>
                <b>{node.frontmatter.tripsMain}</b> {node.frontmatter.tripsLocal}
              </small>
              <p>{node.frontmatter.abstract}</p>
              {isImg(node.frontmatter.img)}
            </div>
          )
        })}
      </Layout>
    )
  }
}

// <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title,
            tripsMain,
            tripsLocal,
            place,
            abstract,
            img {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
