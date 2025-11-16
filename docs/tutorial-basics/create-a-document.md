---
sidebar_position: 2
---

# Create a Document

Documents are **groups of pages** connected through:

- a **sidebar**
- **previous/next navigation**
- **versioning**

## Create your first Doc

Create a markdown file at `docs/hello.md`:

```md
# Hello

This is my **first Docusaurus document**!
```

A new document is now available at `http://localhost:3000/docs/hello`.

## Configure the Sidebar

Docusaurus automatically **creates a sidebar** from the `docs` folder.

Add metadata to customize the sidebar label and position:

```md
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello
```

It is also possible to create your own sidebar.

## What Next?

- Add a [custom page](create-a-page) to your site.
- Configure the [theme](https://docusaurus.io/docs/styling-layout).
- Add [static assets](https://docusaurus.io/docs/static-assets).