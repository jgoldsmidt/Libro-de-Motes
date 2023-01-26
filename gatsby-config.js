const basePath = '/Libro-de-Motes'

module.exports = {
    pathPrefix: basePath,
    siteMetadata: {
        title: `Libro de Motes de Damas y Caualleros`,
        description: `Edición digital del Libro de Motes de Damas y Caualleros escrito por Luys de Milan`,
        author: `Julieta Goldsmidt`
    },
    plugins: [
        `gatsby-plugin-material-ui`,
        `gatsby-theme-ceteicean`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `src/content/tei`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `src/content/pages`,
                name: `html`,
            },
        },
    ],
}