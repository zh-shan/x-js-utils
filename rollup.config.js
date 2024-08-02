import { nodeResolve } from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import dts from 'rollup-plugin-dts'

function build ({ input = 'src/index.ts', output, es5 = false, minified = false, plugins = [] }) {
  return {
    input,
    output,
    plugins: [
      // 解析依赖
      nodeResolve(),
      // 识别commonjs模式第三方依赖
      commonjs({
        extensions: ['.js', '.ts']
      }),
      typescript(),
      es5 && babel({
        babelHelpers: 'bundled'
      }),
      minified && terser(),
      ...plugins
    ]
  }
}

export default [{
  treeshake: false,
  ...build({
    minified: true,
    input: 'src/index-all.ts',
    output: {
      file: 'lib/x-js-utils.esm.js',
      format: 'esm',
      sourcemap: false
    }
  })
}, {
  treeshake: false,
  ...build({
    es5: true,
    minified: true,
    input: 'src/index-default.ts',
    output: {
      file: 'lib/x-js-utils.umd.js',
      name: 'JsUtils',
      format: 'umd',
      exports: 'default',
      noConflict: true
    }
  })
}, {
  ...build({
    output: {
      file: 'lib/index.d.ts',
      format: 'es'
    },
    plugins: [
      dts()
    ]
  })
}]
