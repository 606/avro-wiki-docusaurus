import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/avro-wiki-docusaurus/docs',
    component: ComponentCreator('/avro-wiki-docusaurus/docs', '7d0'),
    routes: [
      {
        path: '/avro-wiki-docusaurus/docs',
        component: ComponentCreator('/avro-wiki-docusaurus/docs', '625'),
        routes: [
          {
            path: '/avro-wiki-docusaurus/docs',
            component: ComponentCreator('/avro-wiki-docusaurus/docs', '685'),
            routes: [
              {
                path: '/avro-wiki-docusaurus/docs/intro',
                component: ComponentCreator('/avro-wiki-docusaurus/docs/intro', 'b16'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/avro-wiki-docusaurus/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/avro-wiki-docusaurus/docs/tutorial-basics/congratulations', '36a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/avro-wiki-docusaurus/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/avro-wiki-docusaurus/docs/tutorial-basics/create-a-document', '8d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/avro-wiki-docusaurus/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/avro-wiki-docusaurus/docs/tutorial-basics/create-a-page', 'c84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/avro-wiki-docusaurus/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/avro-wiki-docusaurus/docs/tutorial-basics/deploy-your-site', '9b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/avro-wiki-docusaurus/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/avro-wiki-docusaurus/docs/tutorial-basics/markdown-features', 'f56'),
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
    component: ComponentCreator('/avro-wiki-docusaurus/', 'bea'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
