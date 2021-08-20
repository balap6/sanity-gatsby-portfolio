export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '611fa176df8dc859bc10cf24',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-x7yshkjz',
                  apiId: '636a0323-d5fc-4e35-b1ef-1f75dc2f1415'
                },
                {
                  buildHookId: '611fa176f0e0fa5372da6438',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6uhfcati',
                  apiId: '9950924e-4c6d-4e45-aed3-4ab0c26008d4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/balap6/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6uhfcati.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
