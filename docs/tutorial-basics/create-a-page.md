---
sidebar_position: 3
---

# Create a Page

Docusaurus creates pages from **React components** or **Markdown files**.

## Create a Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```md
# My Markdown page

This is a Markdown page.
```

A new page is now available at `http://localhost:3000/my-markdown-page`.

## Create a React Page

Create a file at `src/pages/my-react-page.js`:

```jsx
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at `http://localhost:3000/my-react-page`.

## What Next?

- [Create a document](create-a-document)
- [Configure the theme](https://docusaurus.io/docs/styling-layout)