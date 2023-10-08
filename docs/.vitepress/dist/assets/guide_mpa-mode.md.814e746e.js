import{_ as n,C as l,o,c as t,k as e,a as s,H as p,S as c}from"./chunks/framework.d847fa52.js";const b=JSON.parse('{"title":"MPA Mode","description":"","frontmatter":{},"headers":[],"relativePath":"guide/mpa-mode.md","filePath":"guide/mpa-mode.md","lastUpdated":1696747437000}'),i={name:"guide/mpa-mode.md"},r={id:"mpa-mode",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#mpa-mode","aria-label":'Permalink to "MPA Mode <Badge type="warning" text="experimental" />"'},"​",-1),y=c(`<p>MPA (Multi-Page Application) mode can be enabled via the command line via <code>vitepress build --mpa</code>, or via config through the <code>mpa: true</code> option.</p><p>In MPA mode, all pages are rendered without any JavaScript included by default. As a result, the production site will likely have a better initial visit performance score from audit tools.</p><p>However, due to the absence of SPA navigation, cross-page links will lead to full page reloads. Post-load navigations in MPA mode will not feel as instant as in SPA mode.</p><p>Also note that no-JS-by-default means you are essentially using Vue purely as a server-side templating language. No event handlers will be attached in the browser, so there will be no interactivity. To load client-side JavaScript, you will need to use the special <code>&lt;script client&gt;</code> tag:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">client</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;h1&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;client side JavaScript!&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"># Hello</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">client</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;h1&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;click&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;client side JavaScript!&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"># Hello</span></span></code></pre></div><p><code>&lt;script client&gt;</code> is a VitePress-only feature, not a Vue feature. It works in both <code>.md</code> and <code>.vue</code> files, but only in MPA mode. Client scripts in all theme components will be bundled together, while client script for a specific page will be split for that page only.</p><p>Note that <code>&lt;script client&gt;</code> is <strong>not evaluated as Vue component code</strong>: it&#39;s processed as a plain JavaScript module. For this reason, MPA mode should only be used if your site requires absolutely minimal client-side interactivity.</p>`,7);function E(m,u,g,h,v,_){const a=l("Badge");return o(),t("div",null,[e("h1",r,[s("MPA Mode "),p(a,{type:"warning",text:"experimental"}),s(),d]),y])}const A=n(i,[["render",E]]);export{b as __pageData,A as default};