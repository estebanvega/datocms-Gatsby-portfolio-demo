import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"

const NewsArchive = ({ data }) => {
  return (
    <Layout>
      <div id="primary" className="content-area">
        <main id="main" className="site-main" role="main">
          <article id="post-764" className="post-764 page type-page status-publish hentry">
            <div className="entry-wrapper">
              <header className="entry-header">
                <h1 className="entry-title">Nyhetsarkiv</h1>		</header>{/* .entry-header */}
              <div className="entry-meta">
              </div>{/* .entry-meta */}
              <div className="entry-content">
                <ul>
                  {data.allDatoCmsContent.nodes.map((node) => {
                    return (
                      <li><a href={"/" + node.slug}>{node.title}</a></li>
                    )
                  })}

                </ul>

              </div>{/* .entry-content */}
              <footer className="entry-footer">
              </footer>{/* .entry-footer */}
            </div>
          </article>{/* #post-## */}
        </main>{/* #main */}
      </div>


    </Layout>
  );
}

export default NewsArchive

export const query = graphql`
query NewsQuery {
    allDatoCmsContent(
        filter: {isnewsitem: {eq: true}}
      ) {
        nodes {
          id
          title
          slug
          description
      }
    }
}
`
