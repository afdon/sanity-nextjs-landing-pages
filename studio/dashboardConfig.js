export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ecef6a9792e966fa79a2ce0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3hecoqq9',
                  apiId: '2118e80e-66fa-4ff8-9844-cc62500ee9ca'
                },
                {
                  buildHookId: '5ecef6a9854bb62ef989ca10',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-o13pe4pu',
                  apiId: 'aa7e349d-6fc6-4c87-9ec0-54e66c2e31d5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/afdon/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-o13pe4pu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
