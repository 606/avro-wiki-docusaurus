---
sidebar_position: 5
---

# Deploy your site

Docusaurus is a **static-site-generator** so it can be deployed on any static hosting service.

## Build your site

Build your site **for production**:

```shell
npm run build
```

The `build` command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deploy to GitHub Pages

Docusaurus provides a easy way to publish to **GitHub Pages**:

### Automatic deployment (recommended)

1. Set the `organizationName` and `projectName` in `docusaurus.config.js`:

   ```js title="docusaurus.config.js"
   module.exports = {
     // ...
     organizationName: '606', // Usually your GitHub org/user name.
     projectName: 'avro-wiki-docusaurus', // Usually your repo name.
     // ...
   };
   ```

2. Install the `gh-pages` package as a dev dependency:

   ```shell
   npm install --save-dev gh-pages
   ```

3. Add a deploy script to `package.json`:

   ```json title="package.json"
   {
     "scripts": {
       "deploy": "docusaurus deploy"
     }
   }
   ```

4. Deploy your site:

   ```shell
   GIT_USER=<Your GitHub username> npm run deploy
   ```

   The deploy command creates a `gh-pages` branch in your repository and pushes the built static files to it.

### Manual deployment

1. Build your site:

   ```shell
   npm run build
   ```

2. Copy the `build` directory contents to your static hosting service.

## Other deployment options

You can find other deployment options in the [Docusaurus deployment docs](https://docusaurus.io/docs/deployment).