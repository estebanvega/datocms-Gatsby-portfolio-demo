import React from 'react'
import Slider from 'react-slick'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
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
        <div className="entry-content" dangerouslySetInnerHTML={{
            __html: data.datoCmsContent.descriptionNode.childMarkdownRemark.html,
          }}>
        </div>{/* .entry-content */}
        <footer className="entry-footer">
        </footer>{/* .entry-footer */}
      </div>
    </article>{/* #post-## */}
  </main>{/* #main */}
</div>

    {/* <article className="sheet">
      <HelmetDatoCms seo={data.datoCmsContent.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{data.datoCmsContent.title}</h1>
        <p className="sheet__lead">{data.datoCmsContent.excerpt}</p>
        <div className="sheet__slider">
          <Slider infinite={true} slidesToShow={2} arrows>
            {data.datoCmsContent.gallery.map(({ fluid }) => (
              <img alt={data.datoCmsContent.title} key={fluid.src} src={fluid.src} />
            ))}
          </Slider>
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsContent.descriptionNode.childMarkdownRemark.html,
          }}
        />
        <div className="sheet__gallery">
          <Img fluid={data.datoCmsContent.coverImage.fluid} />
        </div>
      </div>
    </article> */}
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
