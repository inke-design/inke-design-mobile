import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/inke-design-mobile',
  publicPath: '/inke-design-mobile/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  title: 'inke-design-mobile',
  favicon: 'https://img.ikstatic.cn/MTU5MDYzMjU5NjY5MSMxMzMjcG5n.png',
  logo: 'https://img.ikstatic.cn/MTU5MDYzMjU5NjY5MSMxMzMjcG5n.png',
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config
  themeConfig: {
    hd: {
      // 根据不同的设备屏幕宽度断点切换高清方案
      // rules: [
      //   { maxWidth: 375, mode: 'vw', options: [100, 750] },
      //   { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
      // ],
      rules: [], // 禁用高清方案
      // rules: [{ mode: 'vw', options: [100, 750] }],
      // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
    },
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: true,
      },
      'antd-mobile',
    ],
  ],
});
