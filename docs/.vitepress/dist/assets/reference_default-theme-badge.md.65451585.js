import{_ as o,C as e,o as t,c,k as a,a as s,H as l,w as r,S as p}from"./chunks/framework.d847fa52.js";const P=JSON.parse('{"title":"Badge","description":"","frontmatter":{},"headers":[],"relativePath":"reference/default-theme-badge.md","filePath":"reference/default-theme-badge.md","lastUpdated":1696747437000}'),E={name:"reference/default-theme-badge.md"},y=p(`<h1 id="badge" tabindex="-1">Badge <a class="header-anchor" href="#badge" aria-label="Permalink to &quot;Badge&quot;">​</a></h1><p>The badge lets you add status to your headers. For example, it could be useful to specify the section&#39;s type, or supported version.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>You may use the <code>Badge</code> component which is globally available.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">### Title &lt;</span><span style="color:#FDAEB7;font-style:italic;">Badge</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;info&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">text</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;default&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">### Title &lt;</span><span style="color:#FDAEB7;font-style:italic;">Badge</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tip&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">text</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;^1.9.0&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">### Title &lt;</span><span style="color:#FDAEB7;font-style:italic;">Badge</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;warning&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">text</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;beta&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">### Title &lt;</span><span style="color:#FDAEB7;font-style:italic;">Badge</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;danger&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">text</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;caution&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">### Title &lt;</span><span style="color:#B31D28;font-style:italic;">Badge</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;info&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">text</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;default&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">### Title &lt;</span><span style="color:#B31D28;font-style:italic;">Badge</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tip&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">text</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;^1.9.0&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">### Title &lt;</span><span style="color:#B31D28;font-style:italic;">Badge</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;warning&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">text</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;beta&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">### Title &lt;</span><span style="color:#B31D28;font-style:italic;">Badge</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;danger&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">text</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;caution&quot;</span><span style="color:#24292E;"> /&gt;</span></span></code></pre></div><p>Code above renders like:</p>`,6),i={id:"title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#title","aria-label":'Permalink to "Title <Badge type="info" text="default" />"'},"​",-1),g={id:"title-1",tabindex:"-1"},F=a("a",{class:"header-anchor",href:"#title-1","aria-label":'Permalink to "Title <Badge type="tip" text="^1.9.0" />"'},"​",-1),h={id:"title-2",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#title-2","aria-label":'Permalink to "Title <Badge type="warning" text="beta" />"'},"​",-1),B={id:"title-3",tabindex:"-1"},b=a("a",{class:"header-anchor",href:"#title-3","aria-label":'Permalink to "Title <Badge type="danger" text="caution" />"'},"​",-1),v=p('<h2 id="custom-children" tabindex="-1">Custom Children <a class="header-anchor" href="#custom-children" aria-label="Permalink to &quot;Custom Children&quot;">​</a></h2><p><code>&lt;Badge&gt;</code> accept <code>children</code>, which will be displayed in the badge.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">### Title &lt;</span><span style="color:#FDAEB7;font-style:italic;">Badge</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;info&quot;</span><span style="color:#E1E4E8;">&gt;custom element&lt;/</span><span style="color:#FDAEB7;font-style:italic;">Badge</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">### Title &lt;</span><span style="color:#B31D28;font-style:italic;">Badge</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;info&quot;</span><span style="color:#24292E;">&gt;custom element&lt;/</span><span style="color:#B31D28;font-style:italic;">Badge</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>',3),f={id:"title-custom-element",tabindex:"-1"},C=a("a",{class:"header-anchor",href:"#title-custom-element","aria-label":'Permalink to "Title <Badge type="info">custom element</Badge>"'},"​",-1),_=p(`<h2 id="customize-type-color" tabindex="-1">Customize Type Color <a class="header-anchor" href="#customize-type-color" aria-label="Permalink to &quot;Customize Type Color&quot;">​</a></h2><p>You can customize the style of badges by overriding css variables. The following are the default values:</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">:root</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-info-border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">transparent</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-info-text</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-text-2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-info-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-default-soft</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-tip-border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">transparent</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-tip-text</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-brand-1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-tip-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-brand-soft</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-warning-border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">transparent</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-warning-text</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-warning-1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-warning-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-warning-soft</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-danger-border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">transparent</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-danger-text</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-danger-1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-danger-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-danger-soft</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">:root</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-info-border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">transparent</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-info-text</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-text-2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-info-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-default-soft</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-tip-border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">transparent</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-tip-text</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-brand-1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-tip-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-brand-soft</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-warning-border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">transparent</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-warning-text</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-warning-1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-warning-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-warning-soft</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-danger-border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">transparent</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-danger-text</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-danger-1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-danger-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-danger-soft</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="badge-1" tabindex="-1"><code>&lt;Badge&gt;</code> <a class="header-anchor" href="#badge-1" aria-label="Permalink to &quot;\`&lt;Badge&gt;\`&quot;">​</a></h2><p><code>&lt;Badge&gt;</code> component accepts following props:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Props</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// When \`&lt;slot&gt;\` is passed, this value gets ignored.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">text</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Defaults to \`tip\`.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">type</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;info&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;tip&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;warning&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;danger&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Props</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// When \`&lt;slot&gt;\` is passed, this value gets ignored.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">text</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Defaults to \`tip\`.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">type</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;info&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;tip&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;warning&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;danger&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,6);function m(A,q,x,T,k,D){const n=e("Badge");return t(),c("div",null,[y,a("h3",i,[s("Title "),l(n,{type:"info",text:"default"}),s(),d]),a("h3",g,[s("Title "),l(n,{type:"tip",text:"^1.9.0"}),s(),F]),a("h3",h,[s("Title "),l(n,{type:"warning",text:"beta"}),s(),u]),a("h3",B,[s("Title "),l(n,{type:"danger",text:"caution"}),s(),b]),v,a("h3",f,[s("Title "),l(n,{type:"info"},{default:r(()=>[s("custom element")]),_:1}),s(),C]),_])}const S=o(E,[["render",m]]);export{P as __pageData,S as default};
