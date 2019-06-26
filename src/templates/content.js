import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <div id="primary" className="content-area">
      <main id="main" className="site-main" role="main">
        <article id="post-772" className="post-772 page type-page status-publish hentry">
          <div className="entry-wrapper">
            <header className="entry-header">
              <h1 className="entry-title">{data.datoCmsContent.title}</h1>		</header>{/* .entry-header */}
            <div className="entry-meta">
            </div>{/* .entry-meta */}
            {!!data.datoCmsContent.coverImage.url ?
              <p className="lead_in">
                <img width="171" height="109" sizes="(max-width: 171px) 100vw, 171px" src={data.datoCmsContent.coverImage.url} className="alignright" />
                {data.datoCmsContent.descriptionNode.childMarkdownRemark.rawMarkdownBody}
              </p>
              :
              <div className="entry-content" dangerouslySetInnerHTML={{
                __html: data.datoCmsContent.descriptionNode.childMarkdownRemark.html,
              }}>
              </div>
            }
            <footer className="entry-footer">
            </footer>{/* .entry-footer */}
          </div>
        </article>{/* #post-## */}
      </main>{/* #main */}
    </div>
  </Layout>
)

export const query = graphql`
  query ContentQuery($slug: String!) {
    datoCmsContent(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      excerpt
      gallery {
        fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
          src
        }
      }
      descriptionNode {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      coverImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`
