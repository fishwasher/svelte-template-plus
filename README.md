*Looking for a shareable component template? Go here --> [sveltejs/component-template](https://github.com/sveltejs/component-template)*

---

# svelte app

This is a fork of [Svelte](https://svelte.dev) project template that lives at https://github.com/sveltejs/template.


Visit [Svelte template repository](https://github.com/sveltejs/template) for more details.

While the original one is an excellent starting point for new Svelte projects, is provides minimal barebone setup for Svelte SPA. However, most of SPA projects take advantage of productivity tools, like JS and CSS client libraries prerocessing.

This template makes use of [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess) module, providing [preprocess API](https://svelte.dev/docs#svelte_preprocess), along with [rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss), adding support for [Less](http://lesscss.org/) CSS preprocessor. Support for other CSS preprocessors can be easily added, see how in [plugin documentation](https://www.npmjs.com/package/rollup-plugin-postcss).

See [svelte-preprocess](https://www.npmjs.com/package/svelte-preprocess) documentation to support other languages and Babel transpiling for legacy browsers.

A simple HTML template preprocessing provides generated version parameter for client libraries.

This fork also uses [Yarn Package Manager](https://yarnpkg.com/) rather than [npm](https://www.npmjs.com/).


## Get started

Install the dependencies...

```bash
cd svelte-app
yarn install
```

...then start [Rollup](https://rollupjs.org):

```bash
yarn dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
yarn build
```

You can run the newly built app with `yarn start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

