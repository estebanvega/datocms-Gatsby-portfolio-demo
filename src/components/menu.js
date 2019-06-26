import React from 'react'
import { StaticQuery, graphql } from "gatsby"

const Menu = ({ children }) => {
  const isCurrentMenuItem = (slug) => {
    return typeof window !== 'undefined' && window.location.href.includes(slug) ? " current_page_item" : "";
  };

  const handleMenuClick = (event) => {
    event.preventDefault();

    const element = event.target;
    element.classList.toggle("sub-on");

    const closestParentMenuItem = element.closest(".menu-item");
    const closestSubMenuItem = closestParentMenuItem.querySelector(".sub-menu");
    closestSubMenuItem.classList.toggle("sub-on");
  };

  return (
    <StaticQuery query={graphql`
    {
      allDatoCmsContent(filter: {isnewsitem: {eq: false}}) {
        nodes {
          treeChildren {
            id
            position
            slug
            title
            treeChildren {
              id
              position
              slug
              title
            }
          }
          treeParent {
            id
          }
          id
          position
          slug
          title
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
                        <a href={"/" + node.slug} aria-current="page">
                          {node.title}
                          {node.treeChildren.length > 0 && <button onClick={handleMenuClick} className="showsub-toggle" aria-expanded="false"></button>}
                        </a>
                        {node.treeChildren.length > 0 ?
                          <React.Fragment>
                            <ul className="sub-menu">
                              {node.treeChildren.map((nodeChild) =>
                                (
                                  <li key={"child-" + nodeChild.position} id="menu-item-789" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-789">
                                    <a href={"/" + nodeChild.slug}>
                                      {nodeChild.title}
                                      {nodeChild.treeChildren.length > 0 && <button onClick={handleMenuClick} className="showsub-toggle" aria-expanded="false"></button>}
                                    </a>
                                    {nodeChild.treeChildren.length > 0 ?
                                      <React.Fragment>
                                        <ul className="sub-menu">
                                          {nodeChild.treeChildren.map((nodeChildChild) =>
                                            (
                                              <li key={"child-child-" + nodeChildChild.position} id="menu-item-789" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-789">
                                                <a href={"/" + nodeChildChild.slug}>{nodeChildChild.title}</a>
                                              </li>)
                                          )}
                                        </ul>
                                      </React.Fragment>
                                      : null}
                                  </li>)
                              )}

                            </ul>
                          </React.Fragment>
                          : null}
                      </li>
                    );
                  }
                })
              }
              <li className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-home page_item page-item-747 menu-item-785" + isCurrentMenuItem("newsarchive")}>
                <a href="/newsarchive/">Nyhetsarkiv</a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    />
  )
}

export default Menu