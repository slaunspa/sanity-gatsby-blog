export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ee5fb81f938de1cc9281148',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fbrsv3x4',
                  apiId: '5147102d-d21f-467f-abad-653caa87375b'
                },
                {
                  buildHookId: '5ee5fb817e0d3ba3399f1e4a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gbiaqhnt',
                  apiId: '011a0a1a-31a9-4bd1-abed-8b57f30b3954'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/slaunspa/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gbiaqhnt.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
