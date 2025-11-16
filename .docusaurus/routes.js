import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/avro-wiki-docusaurus/docs',
    component: ComponentCreator('/avro-wiki-docusaurus/docs', '823'),
    routes: [
      {
        path: '/avro-wiki-docusaurus/docs',
        component: ComponentCreator('/avro-wiki-docusaurus/docs', '6fc'),
        routes: [
          {
            path: '/avro-wiki-docusaurus/docs',
            component: ComponentCreator('/avro-wiki-docusaurus/docs', '94d'),
            routes: [
              {
                path: '/avro-wiki-docusaurus/docs/intro',
                component: ComponentCreator('/avro-wiki-docusaurus/docs/intro', '3b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/avro-wiki-docusaurus/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/avro-wiki-docusaurus/docs/tutorial-basics/congratulations', '904'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/avro-wiki-docusaurus/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/avro-wiki-docusaurus/docs/tutorial-basics/create-a-document', '636'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/avro-wiki-docusaurus/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/avro-wiki-docusaurus/docs/tutorial-basics/create-a-page', '217'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/avro-wiki-docusaurus/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/avro-wiki-docusaurus/docs/tutorial-basics/deploy-your-site', '815'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/avro-wiki-docusaurus/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/avro-wiki-docusaurus/docs/tutorial-basics/markdown-features', 'bab'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/avro-wiki-docusaurus/',
    component: ComponentCreator('/avro-wiki-docusaurus/', '96a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
