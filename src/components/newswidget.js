import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const NewsWidget = ({ data }) => {
    return (
        <StaticQuery query={graphql`
        query NewsWidgetQuery {
            allDatoCmsContent(
            sort: {
                fields: title
                order: DESC
            }
            limit: 4
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
        `}
            render={data => (
                <aside id="recent-posts-2" className="widget widget_recent_entries">
                    <h2 className="widget-title">Senaste nytt</h2>
                    <ul>
                        {data.allDatoCmsContent.nodes.map((node) => {
                            return (
                                <li key={node.id}><a href={"/" + node.slug}>{node.title}</a></li>
                            )
                        })}

                    </ul>
                </aside>

            )}></StaticQuery>)
}

export default NewsWidget