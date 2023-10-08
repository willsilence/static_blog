import{_ as s,o as a,c as e,S as n}from"./chunks/framework.d847fa52.js";const v=JSON.parse('{"title":"Prev Next Links","description":"","frontmatter":{},"headers":[],"relativePath":"reference/default-theme-prev-next-links.md","filePath":"reference/default-theme-prev-next-links.md","lastUpdated":1696747437000}'),l={name:"reference/default-theme-prev-next-links.md"},p=n(`<h1 id="prev-next-links" tabindex="-1">Prev Next Links <a class="header-anchor" href="#prev-next-links" aria-label="Permalink to &quot;Prev Next Links&quot;">​</a></h1><p>You can customize the text and link for the previous and next pages (shown at doc footer). This is helpful if you want a different text there than what you have on your sidebar. Additionally, you may find it useful to disable the footer or link to a page that is not included in your sidebar.</p><h2 id="prev" tabindex="-1">prev <a class="header-anchor" href="#prev" aria-label="Permalink to &quot;prev&quot;">​</a></h2><ul><li><p>Type: <code>string | false | { text?: string; link?: string }</code></p></li><li><p>Details:</p><p>Specifies the text/link to show on the link to the previous page. If you don&#39;t set this in frontmatter, the text/link will be inferred from the sidebar config.</p></li><li><p>Examples:</p><ul><li><p>To customize only the text:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">prev</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Get Started | Markdown&#39;</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">prev</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Get Started | Markdown&#39;</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span></code></pre></div></li><li><p>To customize both text and link:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">prev</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">text</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Markdown&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">link</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;/guide/markdown&#39;</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">prev</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">text</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Markdown&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">link</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;/guide/markdown&#39;</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span></code></pre></div></li><li><p>To hide previous page:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">prev</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">prev</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span></code></pre></div></li></ul></li></ul><h2 id="next" tabindex="-1">next <a class="header-anchor" href="#next" aria-label="Permalink to &quot;next&quot;">​</a></h2><p>Same as <code>prev</code> but for the next page.</p>`,6),t=[p];function o(r,i,c,d,h,y){return a(),e("div",null,t)}const k=s(l,[["render",o]]);export{v as __pageData,k as default};
