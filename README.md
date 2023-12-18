# Langeloh's React Base Project

This React 18 base project uses SWC for compilation, and has Zustand, Jest and Sass as it's extra configurations, also featuring:

- Our imports have a default `@/*` path already configured, if you are using VSCode you can turn this setting by changing your preferences ` Ctrl + Shift + P -> Preferences: Open (User/Workspace) Settings` and setting the following code:

```json
  { 
    // [...]
    "javascript.preferences.importModuleSpecifier": "non-relative",
    "typescript.preferences.importModuleSpecifier": "non-relative",
    // [...]
  }
```

We also use Feature-based folder structure, there is a `src/features/sample` that displays this in full effect, here is an article for reference on how to use it:

https://dev.to/sathishskdev/part-2-folder-structure-building-a-solid-foundation-omh

# Generic Project Shanennigans
### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
