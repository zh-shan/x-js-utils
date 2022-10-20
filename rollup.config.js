import { nodeResolve } from '@rollup/plugin-node-resolve'
// import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: {
    file: 'lib/index.js',
    name: 'JSUtils',
    format: 'umd'
  },
  plugins: [
    nodeResolve(),
    commonjs({
      extensions: ['.js', '.ts']
    }),
    typescript()
    // babel({
    //   exclude: 'node_modules/**'
    // })
  ]
}
