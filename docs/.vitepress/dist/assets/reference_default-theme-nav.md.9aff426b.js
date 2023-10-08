import{_ as s,o as n,c as a,S as l}from"./chunks/framework.d847fa52.js";const u=JSON.parse('{"title":"Nav","description":"","frontmatter":{},"headers":[],"relativePath":"reference/default-theme-nav.md","filePath":"reference/default-theme-nav.md","lastUpdated":1696747437000}'),p={name:"reference/default-theme-nav.md"},e=l(`<h1 id="nav" tabindex="-1">Nav <a class="header-anchor" href="#nav" aria-label="Permalink to &quot;Nav&quot;">​</a></h1><p>The Nav is the navigation bar displayed on top of the page. It contains the site title, global menu links, etc.</p><h2 id="site-title-and-logo" tabindex="-1">Site Title and Logo <a class="header-anchor" href="#site-title-and-logo" aria-label="Permalink to &quot;Site Title and Logo&quot;">​</a></h2><p>By default, nav shows the title of the site referencing <a href="./site-config#title"><code>config.title</code></a> value. If you would like to change what&#39;s displayed on nav, you may define custom text in <code>themeConfig.siteTitle</code> option.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    siteTitle: </span><span style="color:#9ECBFF;">&#39;My Custom Title&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    siteTitle: </span><span style="color:#032F62;">&#39;My Custom Title&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>If you have a logo for your site, you can display it by passing in the path to the image. You should place the logo within <code>public</code> directly, and define the absolute path to it.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    logo: </span><span style="color:#9ECBFF;">&#39;/my-logo.svg&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    logo: </span><span style="color:#032F62;">&#39;/my-logo.svg&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>When adding a logo, it gets displayed along with the site title. If your logo is all you need and if you would like to hide the site title text, set <code>false</code> to the <code>siteTitle</code> option.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    logo: </span><span style="color:#9ECBFF;">&#39;/my-logo.svg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    siteTitle: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    logo: </span><span style="color:#032F62;">&#39;/my-logo.svg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    siteTitle: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>You can also pass an object as logo if you want to add <code>alt</code> attribute or customize it based on dark/light mode. Refer <a href="./default-theme-config#logo"><code>themeConfig.logo</code></a> for details.</p><h2 id="navigation-links" tabindex="-1">Navigation Links <a class="header-anchor" href="#navigation-links" aria-label="Permalink to &quot;Navigation Links&quot;">​</a></h2><p>You may define <code>themeConfig.nav</code> option to add links to your nav.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    nav: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { text: </span><span style="color:#9ECBFF;">&#39;Guide&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/guide&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { text: </span><span style="color:#9ECBFF;">&#39;Config&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/config&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { text: </span><span style="color:#9ECBFF;">&#39;Changelog&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;https://github.com/...&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    nav: [</span></span>
<span class="line"><span style="color:#24292E;">      { text: </span><span style="color:#032F62;">&#39;Guide&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/guide&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      { text: </span><span style="color:#032F62;">&#39;Config&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/config&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      { text: </span><span style="color:#032F62;">&#39;Changelog&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;https://github.com/...&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>The <code>text</code> is the actual text displayed in nav, and the <code>link</code> is the link that will be navigated to when the text is clicked. For the link, set path to the actual file without <code>.md</code> prefix, and always start with <code>/</code>.</p><p>Nav links can also be dropdown menus. To do this, set <code>items</code> key on link option.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    nav: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { text: </span><span style="color:#9ECBFF;">&#39;Guide&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/guide&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;Dropdown Menu&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;Item A&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/item-1&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;Item B&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/item-2&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;Item C&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/item-3&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    nav: [</span></span>
<span class="line"><span style="color:#24292E;">      { text: </span><span style="color:#032F62;">&#39;Guide&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/guide&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;Dropdown Menu&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        items: [</span></span>
<span class="line"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;Item A&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/item-1&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;Item B&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/item-2&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;Item C&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/item-3&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Note that dropdown menu title (<code>Dropdown Menu</code> in the above example) can not have <code>link</code> property since it becomes a button to open dropdown dialog.</p><p>You may further add &quot;sections&quot; to the dropdown menu items as well by passing in more nested items.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    nav: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { text: </span><span style="color:#9ECBFF;">&#39;Guide&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/guide&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;Dropdown Menu&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// Title for the section.</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;Section A Title&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">              { text: </span><span style="color:#9ECBFF;">&#39;Section A Item A&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">              { text: </span><span style="color:#9ECBFF;">&#39;Section B Item B&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;Dropdown Menu&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// You may also omit the title.</span></span>
<span class="line"><span style="color:#E1E4E8;">            items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">              { text: </span><span style="color:#9ECBFF;">&#39;Section A Item A&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">              { text: </span><span style="color:#9ECBFF;">&#39;Section B Item B&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    nav: [</span></span>
<span class="line"><span style="color:#24292E;">      { text: </span><span style="color:#032F62;">&#39;Guide&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/guide&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;Dropdown Menu&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        items: [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// Title for the section.</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;Section A Title&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            items: [</span></span>
<span class="line"><span style="color:#24292E;">              { text: </span><span style="color:#032F62;">&#39;Section A Item A&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">              { text: </span><span style="color:#032F62;">&#39;Section B Item B&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;Dropdown Menu&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        items: [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// You may also omit the title.</span></span>
<span class="line"><span style="color:#24292E;">            items: [</span></span>
<span class="line"><span style="color:#24292E;">              { text: </span><span style="color:#032F62;">&#39;Section A Item A&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">              { text: </span><span style="color:#032F62;">&#39;Section B Item B&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="customize-link-s-active-state" tabindex="-1">Customize link&#39;s &quot;active&quot; state <a class="header-anchor" href="#customize-link-s-active-state" aria-label="Permalink to &quot;Customize link&#39;s &quot;active&quot; state&quot;">​</a></h3><p>Nav menu items will be highlighted when the current page is under the matching path. if you would like to customize the path to be matched, define <code>activeMatch</code> property and regex as a string value.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    nav: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// This link gets active state when the user is</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// on \`/config/\` path.</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;Guide&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        link: </span><span style="color:#9ECBFF;">&#39;/guide&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        activeMatch: </span><span style="color:#9ECBFF;">&#39;/config/&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    nav: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// This link gets active state when the user is</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// on \`/config/\` path.</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;Guide&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        link: </span><span style="color:#032F62;">&#39;/guide&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        activeMatch: </span><span style="color:#032F62;">&#39;/config/&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><code>activeMatch</code> is expected to be a regex string, but you must define it as a string. We can&#39;t use actual RegExp object here because it isn&#39;t serializable during the build time.</p></div><h3 id="customize-link-s-target-and-rel-attributes" tabindex="-1">Customize link&#39;s &quot;target&quot; and &quot;rel&quot; attributes <a class="header-anchor" href="#customize-link-s-target-and-rel-attributes" aria-label="Permalink to &quot;Customize link&#39;s &quot;target&quot; and &quot;rel&quot; attributes&quot;">​</a></h3><p>By default, VitePress automatically determines <code>target</code> and <code>rel</code> attributes based on whether the link is an external link. But if you want, you can customize them too.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    nav: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;Merchandise&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        link: </span><span style="color:#9ECBFF;">&#39;https://www.thegithubshop.com/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        target: </span><span style="color:#9ECBFF;">&#39;_self&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        rel: </span><span style="color:#9ECBFF;">&#39;sponsored&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    nav: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;Merchandise&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        link: </span><span style="color:#032F62;">&#39;https://www.thegithubshop.com/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        target: </span><span style="color:#032F62;">&#39;_self&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        rel: </span><span style="color:#032F62;">&#39;sponsored&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="social-links" tabindex="-1">Social Links <a class="header-anchor" href="#social-links" aria-label="Permalink to &quot;Social Links&quot;">​</a></h2><p>Refer <a href="./default-theme-config#sociallinks"><code>socialLinks</code></a>.</p>`,28),o=[e];function t(c,i,E,r,y,d){return n(),a("div",null,o)}const g=s(p,[["render",t]]);export{u as __pageData,g as default};
