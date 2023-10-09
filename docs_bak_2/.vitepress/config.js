import { customElements } from "../utils/data"

module.exports = {
  title: '前端笔记库',
  description: '胜天半子',
  head: [
    [
      'link', 
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css', crossorigin: '' }]
  ],
  base: '/static_blog/',
  themeConfig: {
    logo: '/favicon.ico',
    nav: [
      { text: 'LeetCode', link: '/articles/leetcode/index' },
      { text: '前端笔记', link: '/articles/frontend/index' },
      { text: '杂七杂八', link: '/articles/others/index' },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(require('markdown-it-katex'))
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
  }
}
