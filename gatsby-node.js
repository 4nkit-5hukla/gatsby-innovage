const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWordpressPage {
        nodes {
          slug
        }
      }
    }
  `).then(result => {
    result.data.allWordpressPage.nodes.forEach(({ slug }) => {
      if (slug !== 'home') {
				createPage({
					path: `/${slug}/`,
					component: path.resolve(`./src/templates/pages/index.js`),
					context: {
						slug: slug,
					},
				})
      }
    })
  })
}
