import{_ as c,a as r,b as i}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.bc46e4f5.js";import{_ as E}from"./chunks/CustomLink.cd661532.js";import{_ as y,o as m,c as d,H as a,k as s,a as n,Q as p}from"./chunks/framework.926cbeec.js";import"./chunks/commonjsHelpers.725317a4.js";const K=JSON.parse('{"title":"给你的 Next.js 项目优雅地添加 sitemap","description":"","frontmatter":{"author":"Choi Yang","date":"2023-04-06T00:00:00.000Z"},"headers":[],"relativePath":"nextjs/sitemap/index.md","filePath":"nextjs/sitemap/index.md","lastUpdated":1696923443000}'),u={name:"nextjs/sitemap/index.md"},b=s("h1",{id:"给你的-next-js-项目优雅地添加-sitemap",tabindex:"-1"},[n("给你的 Next.js 项目优雅地添加 sitemap "),s("a",{class:"header-anchor",href:"#给你的-next-js-项目优雅地添加-sitemap","aria-label":'Permalink to "给你的 Next.js 项目优雅地添加 sitemap"'},"​")],-1),h=s("h2",{id:"好用的库-next-sitemap",tabindex:"-1"},[n("好用的库 next-sitemap "),s("a",{class:"header-anchor",href:"#好用的库-next-sitemap","aria-label":'Permalink to "好用的库 next-sitemap"'},"​")],-1),F=s("p",null,[n("关于 next.js 生成 sitemap 有一个比较好用的库，名字叫做 "),s("code",null,"next-sitemap"),n("，他的描述信息如下：")],-1),g=s("blockquote",null,[s("p",null,"Sitemap generator for next.js. Generate sitemap(s) and robots.txt for all static/pre-rendered/dynamic/server-side pages.")],-1),C=s("p",null,"这可以让我们在项目中生成 sitemap 文件，让搜索引擎更好地爬取我们的网站，从而提高网站的 SEO。",-1),x=s("h2",{id:"开箱使用",tabindex:"-1"},[n("开箱使用 "),s("a",{class:"header-anchor",href:"#开箱使用","aria-label":'Permalink to "开箱使用"'},"​")],-1),f=p("",12),A=s("blockquote",null,[s("p",null,"📣 From next-sitemap v2.x onwards, sitemap.xml will be Index Sitemap. It will contain urls of all other generated sitemap endpoints.")],-1),D=s("blockquote",null,[s("p",null,"Index sitemap generation can be turned off by setting generateIndexSitemap: false in next-sitemap config file. (This is useful for small/hobby sites which does not require an index sitemap) (Example: no-index-sitemaps)")],-1),_=s("h2",{id:"如何拓展同域名下不同项目的-sitemap",tabindex:"-1"},[n("如何拓展同域名下不同项目的 sitemap "),s("a",{class:"header-anchor",href:"#如何拓展同域名下不同项目的-sitemap","aria-label":'Permalink to "如何拓展同域名下不同项目的 sitemap"'},"​")],-1),B=s("code",null,"sitemap",-1),v=s("code",null,"next-sitemap",-1),k=p("",3),w=s("code",null,"sitemap.xml",-1),T=s("blockquote",null,[s("p",null,[s("a",{href:"https://coding.net/help/docs/sitemap.xml",target:"_blank",rel:"noreferrer"},"https://coding.net/help/docs/sitemap.xml")])],-1),S=s("p",null,"我们接下来就是读取这些内容，然后让我们在 build 阶段合并到我们的主站里去。",-1),j=s("h2",{id:"读取子项目的-sitemap-xml-文件",tabindex:"-1"},[n("读取子项目的 sitemap.xml 文件 "),s("a",{class:"header-anchor",href:"#读取子项目的-sitemap-xml-文件","aria-label":'Permalink to "读取子项目的 sitemap.xml 文件"'},"​")],-1),I=s("code",null,"next-sitemap.config.js",-1),P=s("code",null,"node",-1),q=s("code",null,"esm",-1),N=s("code",null,"node-fetch",-1),O=s("code",null,"CommonJS",-1),R=p("",10),U=s("blockquote",null,[s("p",null,"学如逆水行舟，不进则退。")],-1),V=s("h2",{id:"contributors",tabindex:"-1"},[n("Contributors "),s("a",{class:"header-anchor",href:"#contributors","aria-label":'Permalink to "Contributors"'},"​")],-1);function $(M,J,W,G,H,L){const e=c,l=E,o=r,t=i;return m(),d("div",null,[b,a(e,{readTime:"6",words:"1.5k"}),h,F,g,C,s("p",null,[n("基础的安装教程大家可以参考 "),a(l,{title:"next-sitemap",href:"https://www.npmjs.com/package/next-sitemap"}),n(" 的官方文档，这里就不再赘述了。")]),x,s("p",null,[n("不过我看了一些开源项目，比如之前我一直在用的 next.js 启动模版，"),a(l,{title:"🔋 Next.js + Tailwind CSS + TypeScript starter and boilerplate packed with useful development features",href:"https://github.com/theodorusclarence/ts-nextjs-tailwind-starter"})]),f,s("p",null,[n("具体可查看原文档 "),a(l,{title:"Index sitemaps (Optional)",href:"https://github.com/iamvishnusankar/next-sitemap#index-sitemaps-optional"})]),A,D,_,s("p",null,[n("这个需求不知道是否你也会有，我来给大家举个例子，比如 "),a(l,{title:"coding.net",href:"https://coding.net/"}),n(" 官网，也是使用 Next.js 开发的，但官网内也有挺多子页面，比如洞见博客，以及帮助文档之类的，这些其实并不都是由 Next.js 创建的，但是呢作为官网首页，根路径下的 "),B,n(" 内容也需要将子项目中索引包含进去，提交一个地址来收录即可。")]),s("p",null,[v,n(" 也考虑到了这点，具体可以查看 "),a(l,{title:"Additional paths function",href:"https://github.com/iamvishnusankar/next-sitemap#additional-paths-function"}),n(" 这里，")]),k,s("p",null,[n("比如 coding 的"),a(l,{title:"帮助文档",href:"https://coding.net/help/docs/start/register-invite.html"}),n("，还是有 500 篇左右的文章，手动肯定是很麻烦的，那么对于这个文档类网站，我们根据文档框架也生成了 "),w,n(" 文件，地址如下：")]),T,S,j,s("p",null,[n("我们这里使用的库名叫做 "),a(l,{title:"node-fetch",href:"https://www.npmjs.com/package/node-fetch"}),n("，然而对于 "),I,n(" 文件是跑在 "),P,n(" 这端的，并且不能使用 "),q,n(" 规范，"),N,n(" 为我们也提供了 "),O,n(" 规范的，")]),R,s("ul",null,[s("li",null,[a(l,{title:"node-fetch",href:"https://www.npmjs.com/package/node-fetch"})]),s("li",null,[a(l,{title:"next-sitemap",href:"https://www.npmjs.com/package/next-sitemap"})])]),U,V,a(o),a(t)])}const X=y(u,[["render",$]]);export{K as __pageData,X as default};