import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const IndexPage = ({ data }) => {



  return (
    <Layout>
      <div id="primary" className="content-area">
        <main id="main" className="site-main" role="main">
          <article id="post-747" className="post-747 page type-page status-publish has-post-thumbnail hentry">
            <div className="entry-wrapper">
              <div className="featured-image">
                <img width={data.home.homeImage.width} height={data.home.homeImage.height} src={data.home.homeImage.url} />	</div>{/* .post-thumbnail */}
              <header className="entry-header">
              </header>{/* .entry-header */}
              <div className="entry-meta">
              </div>{/* .entry-meta */}
              <div className="entry-content"
                dangerouslySetInnerHTML={{
                  __html: data.home.introTextNode.childMarkdownRemark.html,
                }} />
              <footer className="entry-footer">
              </footer>{/* .entry-footer */}
            </div>
          </article>{/* #post-## */}
        </main>{/* #main */}
      </div>
    </Layout>
  );
}

export default IndexPage

export const query = graphql`
query IndexQuery {
  home: datoCmsHome {
    introTextNode {
      childMarkdownRemark {
        html
      }
    },
    homeImage {
      url,
      width,
      height
    }
  }
}
`
