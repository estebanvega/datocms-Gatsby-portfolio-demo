const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsContent {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsContent.edges.map(({ node: content }) => {
        createPage({
          path: `${content.slug}`,
          component: path.resolve(`./src/templates/content.js`),
          context: {
            slug: content.slug,
          },
        })
      })
      resolve()
    })
  })
}
