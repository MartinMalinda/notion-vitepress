# Getting Started

This section will help you build a basic VitePress documentation site usign this theme.

- **Step. 1:** Create a new project using this template.

  ```bash
  $ git clone git@github.com:valmisson/docs-theme.git my-docs
  ```

  or click the **[Use this template](https://github.com/valmisson/docs-theme/generate)** button.

- **Step. 2:** Move into directory.

  ```bash
  $ cd my-docs
  ```

- **Step. 3:** Install dependencies.

  ```bash
  $ yarn install or npm install
  ```


- **Step. 4:** Serve the documentation site in the local server.

  ```bash
  $ yarn docs:dev
  ```

  VitePress will start a hot-reloading development server at http://localhost:3000.

By now, you should have a basic but functional VitePress documentation site.

If you already have a project ready, you can enable a custom theme by copy the folder `.vitepress/theme/` to the folder `.vitepress/` of your project.

Read more about using a [custom theme](https://vitepress.vuejs.org/guide/theming.html).

When your documentation site starts to take shape, be sure to read the [deployment guide](https://vitepress.vuejs.org/guide/deploy.html).
