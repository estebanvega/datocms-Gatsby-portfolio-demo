import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const IndexPage = ({ data }) => {

  if (typeof document !== 'undefined') {
    document.getElementsByTagName("body")[0].classList.add("onesidebar", "page", "page-id-747", "page-template-default");
  }

  return (
    <Layout>
      <div id="primary" className="content-area">
        <main id="main" className="site-main" role="main">
          <article id="post-747" className="post-747 page type-page status-publish has-post-thumbnail hentry">
            <div className="entry-wrapper">
              <div className="featured-image">
                <img width={900} height={564} src="https://i0.wp.com/www.euroben.se/wp-content/uploads/2016/12/shutterstock_320953616.jpg?fit=900%2C564&ssl=1" className="attachment-sapor-featured-image size-sapor-featured-image wp-post-image" alt srcSet="https://i0.wp.com/www.euroben.se/wp-content/uploads/2016/12/shutterstock_320953616.jpg?w=4892&ssl=1 4892w, https://i0.wp.com/www.euroben.se/wp-content/uploads/2016/12/shutterstock_320953616.jpg?resize=300%2C188&ssl=1 300w, https://i0.wp.com/www.euroben.se/wp-content/uploads/2016/12/shutterstock_320953616.jpg?resize=768%2C481&ssl=1 768w, https://i0.wp.com/www.euroben.se/wp-content/uploads/2016/12/shutterstock_320953616.jpg?resize=1024%2C642&ssl=1 1024w, https://i0.wp.com/www.euroben.se/wp-content/uploads/2016/12/shutterstock_320953616.jpg?resize=900%2C564&ssl=1 900w, https://i0.wp.com/www.euroben.se/wp-content/uploads/2016/12/shutterstock_320953616.jpg?resize=260%2C163&ssl=1 260w, https://i0.wp.com/www.euroben.se/wp-content/uploads/2016/12/shutterstock_320953616.jpg?w=1460&ssl=1 1460w, https://i0.wp.com/www.euroben.se/wp-content/uploads/2016/12/shutterstock_320953616.jpg?w=2190&ssl=1 2190w" sizes="(max-width: 900px) 100vw, 900px" data-attachment-id={868} data-permalink="https://www.euroben.se/shutterstock_320953616/" data-orig-file="https://i0.wp.com/www.euroben.se/wp-content/uploads/2016/12/shutterstock_320953616.jpg?fit=4892%2C3067&ssl=1" data-orig-size="4892,3067" data-comments-opened={0} data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;Shutterstock \/ Leonid Andronov&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;320953616&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="shutterstock_320953616" data-image-description data-medium-file="https://i0.wp.com/www.euroben.se/wp-content/uploads/2016/12/shutterstock_320953616.jpg?fit=300%2C188&ssl=1" data-large-file="https://i0.wp.com/www.euroben.se/wp-content/uploads/2016/12/shutterstock_320953616.jpg?fit=730%2C458&ssl=1" />	</div>{/* .post-thumbnail */}
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
    }
  }
}
`
