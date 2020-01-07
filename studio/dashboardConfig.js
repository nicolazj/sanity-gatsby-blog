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
                  buildHookId: '5e13dd04bc0cf6fb577bea12',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-nt2b1y61',
                  apiId: 'd0b29c9d-ca2d-491b-9b30-f05bb0652c23'
                },
                {
                  buildHookId: '5e13dd04bc0cf65b9b7bea02',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8qaubkr7',
                  apiId: '673ae7fe-af36-4b7f-b01f-9b319db8fe72'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicolazj/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8qaubkr7.netlify.com', category: 'apps' }
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
