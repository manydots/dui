import { css } from 'docz-plugin-css';
export default {
  title: 'doso-ui',
  description: 'doso-ui, 轻量级 React UI 框架',
  codeSandbox: false,
  typescript: true,
  indexHtml: 'docs/index.html',
  htmlContext: {
    favicon: '//image.onfuns.com/favicon.ico'
  },
  plugins: [
    css({
      preprocessor: 'less'
    })
  ]
}
