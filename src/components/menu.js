import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from 'gatsby-source-datocms'

const Menu = ({ children }) => {
  const isCurrentMenuItem = (slug) => {
    return window.location.href.includes(slug) ? " current_page_item" : "";
  };

  return (
    <StaticQuery query={graphql`
    {
      allDatoCmsContent {
        nodes {
          treeChildren {
            id
          }
          treeParent {
            id
          }
          title
          id
          slug
          position
        }
      }
    }
  `}
      render={data => (
        <nav id="site-navigation" className="main-navigation" role="navigation">
          <div className="menu-meny-1-container">
            <ul id="menu-meny-1" className="menu">
              {data.allDatoCmsContent.nodes
                .sort((a, b) => a.position - b.position)
                .map((node) => {
                  if (node.treeParent === null) {
                    return (
                      <li key={node.position} id="menu-item-785" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-home page_item page-item-747 menu-item-785" + isCurrentMenuItem(node.slug)}>
                        <a href={"/content/" + node.slug} aria-current="page">
                          {node.title}
                          {node.treeChildren.length > 0 && <button className="showsub-toggle" aria-expanded="false"></button>}
                        </a>
                      </li>
                    );
                  }
                })
              }
            </ul>
          </div>
        </nav>
      )}
    />
  )
}

export default Menu