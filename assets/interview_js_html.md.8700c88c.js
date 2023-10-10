import{_ as e,a as r,b as c}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.61fdc39d.js";import{_ as E}from"./chunks/CustomLink.cd661532.js";import{_ as y,o as i,c as u,H as s,k as a,a as d,Q as l}from"./chunks/framework.926cbeec.js";import"./chunks/commonjsHelpers.725317a4.js";const L=JSON.parse('{"title":"HTML 基础面试题","description":"","frontmatter":{"author":"HearLing"},"headers":[],"relativePath":"interview/js/html.md","filePath":"interview/js/html.md","lastUpdated":1696923443000}'),m={name:"interview/js/html.md"},h=a("h1",{id:"html-基础面试题",tabindex:"-1"},[d("HTML 基础面试题 "),a("a",{class:"header-anchor",href:"#html-基础面试题","aria-label":'Permalink to "HTML 基础面试题"'},"​")],-1),q=l(`<p>HTML 相关的知识其实主要靠积累，这里也只是列举出一些网上出现过的，常考的关于 HTML 的面试题。</p><p>答案依旧是<strong>仅供参考</strong>，话不多说开始吧。</p><h2 id="doctype-有什么作用" tabindex="-1">DOCTYPE 有什么作用？ <a class="header-anchor" href="#doctype-有什么作用" aria-label="Permalink to &quot;DOCTYPE 有什么作用？&quot;">​</a></h2><p>Doctype 是 HTML5 的文档声明，通过它可以告诉浏览器，使用哪一个 HTML 版本标准解析文档。如果没有 DOCTYPE，浏览器就不知道文档解析的标准是什么，会导致 HTML 文档以混杂模式呈现（不仅会降低解析效率，而且会在解析过程中产生一些难以预知的 bug）。</p><h2 id="什么是标准模式与混杂模式" tabindex="-1">什么是标准模式与混杂模式 <a class="header-anchor" href="#什么是标准模式与混杂模式" aria-label="Permalink to &quot;什么是标准模式与混杂模式&quot;">​</a></h2><ul><li>标准模式（Standards mode）：以浏览器支持的最高标准运行；</li><li>混杂模式（Quirks mode）：中页面是一种比较宽松的向后兼容的方式显示。</li></ul><h2 id="为什么-html5-只需要写-doctype-html" tabindex="-1">为什么 HTML5 只需要写 <code>&lt;!DOCTYPE HTML&gt;</code>？ <a class="header-anchor" href="#为什么-html5-只需要写-doctype-html" aria-label="Permalink to &quot;为什么 HTML5 只需要写 \`&lt;!DOCTYPE HTML&gt;\`？&quot;">​</a></h2><p>HTML5 不基于 SGML，所以不需要对 DTD 进行应用，但是需要 DOCTYPE 来规范浏览器行为。</p><blockquote><p>SGML:标准通用标记语言 DTD：文档类型定义 HTML4.01 基于 SGML 的 写法：<code>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;</code></p></blockquote><h2 id="html5-新特性" tabindex="-1">HTML5 新特性 <a class="header-anchor" href="#html5-新特性" aria-label="Permalink to &quot;HTML5 新特性&quot;">​</a></h2><p>新增加了语义标签、音视频、地理定位、储存、多任务等功能和元素：</p><ul><li>语义标签：<code>header</code>、<code>footer</code>等，可以使开发者更方便的构建页面。</li><li>video、audio -- 用于播放视频和音频的媒体。</li><li>Canvas、SVG -- 用于绘画的元素，canvas 绘制的图片会失真而 SVG 绘制的不会失真。</li><li>Drag 、Drop -- 用于拖放的 。</li><li>Geolocation -- 用于获取地理位置。</li><li>localStorage、sessionStorage -- 用于本地离线存储。</li><li>webSQL、IndexDB -- 前端数据库操作，由于安全性极低，目前 h5 已放弃。</li><li>web Worker -- 独立于其他脚本，不影响页面性能运行在后台的 javascript。</li><li>webSocket -- 单个 TCP 连接上进行全双工通讯的协议。</li><li>新的特殊内容元素 -- 如：article、footer、header、nav、section。</li><li>新的表单控件 -- 如：date、time、email、url、search。</li></ul><h2 id="对-html-语义化的理解" tabindex="-1">对 HTML 语义化的理解 <a class="header-anchor" href="#对-html-语义化的理解" aria-label="Permalink to &quot;对 HTML 语义化的理解&quot;">​</a></h2><p>Web 语义化，事实上就是使用恰当语义的 HTML 标签和 CSS class 等内容，让页面具有良好的语义和结构，从而方便人类和机器都能快速理解网页内容。</p><p>可以拆分为这四点：</p><ul><li>用正确的标签做正确的事情</li><li>页面内容结构化</li><li>无 CSS 时也能进行网页阅读</li><li>方便浏览器，搜索引擎解析，利于 SEO</li></ul><p>然后后面的面试题就是考察 html 标签的使用之类的了，由于 html 的标签实在是有点多哈，都有可能被问到，如果想百分百都能答出来还是要自己多看多练的~</p><h2 id="iframe-作用和优缺点" tabindex="-1">iframe 作用和优缺点 <a class="header-anchor" href="#iframe-作用和优缺点" aria-label="Permalink to &quot;iframe 作用和优缺点&quot;">​</a></h2><p>iframe 也称作嵌入式框架，嵌入式框架和框架网页类似，它可以把一个网页的框架和内容嵌入到现有的网页中。</p><p>优点：</p><ul><li>能原封不动的展现嵌入网站</li><li>如果有多处引用，只需要修改 iframe 的内容，就都能改到，代码可重用，方便快捷</li><li>遇到加载缓慢的第三方内容如图标和广告，这些问题可以由 iframe 来解决</li></ul><p>缺点：</p><ul><li>不利于 SEO，爬虫程序无法解读</li><li>iframes 阻塞页面加载，影响网页加载速度，iframe 加载完毕后才会触发 window.onload 事件，动态设置 src 可解决这个问题。</li><li>有时 iframe 由于页面挤占空间的原因出现滚动条，造成布局混乱。</li><li>iframe 与主页面是共享链接池的，若 iframe 加载时用光了链接池，则会造成主页面加载阻塞。</li><li>有些小型的移动设备如手机等无法完全显示框架，兼容性较差。</li></ul><h2 id="img-的-title-和-alt" tabindex="-1">img 的 title 和 alt <a class="header-anchor" href="#img-的-title-和-alt" aria-label="Permalink to &quot;img 的 title 和 alt&quot;">​</a></h2><ul><li><p>alt：全称 alternate，切换的意思，如果无法显示图像，浏览器将显示 alt 指定的内容</p></li><li><p>title：当鼠标移动到元素上时显示 title 的内容</p></li></ul><p>在 alt 和 title 同时设置的时候，alt 作为图片的替代文字出现，title 是图片的解释文字。</p><h2 id="label-的作用是什么-怎么用的" tabindex="-1">label 的作用是什么？怎么用的？ <a class="header-anchor" href="#label-的作用是什么-怎么用的" aria-label="Permalink to &quot;label 的作用是什么？怎么用的？&quot;">​</a></h2><p>label 元素不会向用户呈现任何特殊效果，但是，它为鼠标用户改进了可用性，当我们在 label 元素内点击文本时就会触发此控件。</p><p>最常用的就是单选框了：</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">form</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">label</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;male&quot;</span><span style="color:#E1E4E8;">&gt;男&lt;/</span><span style="color:#85E89D;">label</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;radio&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;sex&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;male&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">label</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;female&quot;</span><span style="color:#E1E4E8;">&gt;女&lt;/</span><span style="color:#85E89D;">label</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;radio&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;sex&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;female&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">form</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">form</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">label</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;male&quot;</span><span style="color:#24292E;">&gt;男&lt;/</span><span style="color:#22863A;">label</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;radio&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;sex&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;male&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">label</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;female&quot;</span><span style="color:#24292E;">&gt;女&lt;/</span><span style="color:#22863A;">label</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;radio&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;sex&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;female&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">form</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="如何实现在一张图片上的某个区域做到点击事件" tabindex="-1">如何实现在一张图片上的某个区域做到点击事件？ <a class="header-anchor" href="#如何实现在一张图片上的某个区域做到点击事件" aria-label="Permalink to &quot;如何实现在一张图片上的某个区域做到点击事件？&quot;">​</a></h2><p>图片热区技术，要用法 img 的 usemap 属性，map 标签和 area 标签：</p>`,32),F=l(`<div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;planets.gif&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;145&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">height</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;126&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">alt</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Planets&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">usemap</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#planetmap&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">map</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;planetmap&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">area</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">shape</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;rect&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">coords</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0,0,82,126&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">alt</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Sun&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;sun.htm&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">area</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">shape</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;circle&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">coords</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;90,58,3&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">alt</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Mercury&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;mercur.htm&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">area</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">shape</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;circle&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">coords</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;124,58,8&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">alt</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Venus&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;venus.htm&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">map</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;planets.gif&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;145&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">height</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;126&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">alt</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Planets&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">usemap</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#planetmap&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">map</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;planetmap&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">area</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">shape</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;rect&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">coords</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0,0,82,126&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">alt</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Sun&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;sun.htm&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">area</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">shape</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;circle&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">coords</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;90,58,3&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">alt</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Mercury&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;mercur.htm&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">area</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">shape</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;circle&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">coords</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;124,58,8&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">alt</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Venus&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;venus.htm&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">map</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="a-元素除了用于导航外-还有什么作用" tabindex="-1">a 元素除了用于导航外，还有什么作用？ <a class="header-anchor" href="#a-元素除了用于导航外-还有什么作用" aria-label="Permalink to &quot;a 元素除了用于导航外，还有什么作用？&quot;">​</a></h2><p>a 元素最常见的就是用来做锚点和下载文件。由于 ref 属性中的 url 可以是浏览器支持的任何协议，所以 a 标签还可以用来手机拨号、和发送短信。</p><h2 id="seo-中的-tdk-是什么" tabindex="-1">SEO 中的 TDK 是什么？ <a class="header-anchor" href="#seo-中的-tdk-是什么" aria-label="Permalink to &quot;SEO 中的 TDK 是什么？&quot;">​</a></h2><p>TDK 其实就是 title、description、keywords 这三个标签。title 表示标题标签，description 是描述标签，keywords 是关键词标签。</p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,6);function b(C,g,f,_,B,T){const n=e,o=E,p=r,t=c;return i(),u("div",null,[h,s(n,{readTime:"4",words:"1.3k"}),q,s(o,{title:"效果链接",href:"https://www.runoob.com/try/try.php?filename=tryhtml_areamap"}),F,s(p),s(t)])}const S=y(m,[["render",b]]);export{L as __pageData,S as default};
