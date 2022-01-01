/* eslint-env node */

import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'
// Reason for not using the official TS plugin:
// - https://github.com/rollup/plugins/issues/862
import typescript2 from 'rollup-plugin-typescript2'
// import typescript from "@rollup/plugin-typescript";

/**
 * Main bundling process
 * @type {import("rollup").RollupOptions}
 */
const bundleMain = {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      preserveModules: true,
      exports: 'named'
    },
    {
      dir: 'dist/esm',
      format: 'esm',
      preserveModules: true,
      exports: 'named'
    }
  ],
  external: ['react-dom', 'date-fns', 'react', 'react/jsx-runtime'],
  plugins: [
    // Copy source files
    del({ targets: ['dist'] }),
    // copy({ targets: [{ src: 'font', dest: 'dist' }] }),
    typescript2({ useTsconfigDeclarationDir: true })
    // Copy dest files for easier import
    // copy({
    //   targets: [{ src: "dist/cjs/bundle.css", dest: "dist" }],
    //   hook: "writeBundle"
    // })
  ]
}

export default [bundleMain]
