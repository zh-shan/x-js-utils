import { nodeResolve } from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import dts from 'rollup-plugin-dts'

function build ({ output, es5 = false, minified = false, plugins = [] }) {
  return {
    input: 'src/index.ts',
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
  ...build({
    es5: true,
    minified: true,
    output: {
      file: 'lib/index.js',
      name: 'JSUtils',
      format: 'umd',
      exports: 'default'
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
