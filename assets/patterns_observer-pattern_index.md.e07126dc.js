import{_ as o,a as e,b as r}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.61fdc39d.js";import{_ as t,o as c,c as E,H as s,k as n,a as i,Q as y}from"./chunks/framework.926cbeec.js";import"./chunks/commonjsHelpers.725317a4.js";const k=JSON.parse('{"title":"观察者模式","description":"","frontmatter":{"author":"Choi Yang","date":"2023-02-20T00:00:00.000Z"},"headers":[],"relativePath":"patterns/observer-pattern/index.md","filePath":"patterns/observer-pattern/index.md","lastUpdated":1696923443000}'),b={name:"patterns/observer-pattern/index.md"},d=n("h1",{id:"观察者模式",tabindex:"-1"},[i("观察者模式 "),n("a",{class:"header-anchor",href:"#观察者模式","aria-label":'Permalink to "观察者模式"'},"​")],-1),u=y(`<p>使用观察者模式，我们可以观察某些对象，这些对象可叫做可观察的对象。当事件触发之后，可观察的对象会通知它所有的观察者。</p><p>可观察的对象通常包含 3 个重要部分：</p><ul><li><p><code>observers</code> 观察者：每当发生特定事件时都会通知的观察者集合</p></li><li><p><code>subscribe()</code> 订阅：将观察者添加到观察者集合</p></li><li><p><code>Unsubscribe()</code> 取消订阅：从观察者集合中删除观察者</p></li><li><p><code>notify()</code> 通知：每当发生特定事件时通知所有观察者</p></li></ul><p>下面，我们来创建一个可观察的对象，我们使用 ES6 class 语法，如下例子：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Observable</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.observers </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">subscribe</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">func</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.observers.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(func)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">unsubscribe</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">func</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.observers </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.observers.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">subscriber</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> subscriber </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> func)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">notify</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.observers.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">observer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">observer</span><span style="color:#E1E4E8;">(data))</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Observable</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.observers </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">subscribe</span><span style="color:#24292E;">(</span><span style="color:#E36209;">func</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.observers.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(func)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">unsubscribe</span><span style="color:#24292E;">(</span><span style="color:#E36209;">func</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.observers </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.observers.</span><span style="color:#6F42C1;">filter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">subscriber</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> subscriber </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> func)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">notify</span><span style="color:#24292E;">(</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.observers.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">observer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">observer</span><span style="color:#24292E;">(data))</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>现在，我们可以使用 <code>subscribe</code> 方法将观察者添加到观察者列表当中，而使用 <code>unsubscribe</code> 方法可以删除指定的观察者，并且可以通过 <code>notify</code> 方法通知所有的订阅。</p><h2 id="思路整理" tabindex="-1">思路整理 <a class="header-anchor" href="#思路整理" aria-label="Permalink to &quot;思路整理&quot;">​</a></h2><p>我们不妨写一个简单的应用程序，如下我们仅仅包含两个组件，一个 <code>Button</code> 和一个 <code>Switch</code>。</p><div class="language-jsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">App</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">className</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;App&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">Button</span><span style="color:#E1E4E8;">&gt;Click me!&lt;/</span><span style="color:#79B8FF;">Button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">FormControlLabel</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">control</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{&lt;</span><span style="color:#79B8FF;">Switch</span><span style="color:#E1E4E8;"> /&gt;} /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">App</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">className</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;App&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#005CC5;">Button</span><span style="color:#24292E;">&gt;Click me!&lt;/</span><span style="color:#005CC5;">Button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#005CC5;">FormControlLabel</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">control</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{&lt;</span><span style="color:#005CC5;">Switch</span><span style="color:#24292E;"> /&gt;} /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  )</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>这个应用程序的功能如下：</p><p>我们希望跟踪用户与应用程序的交互，无论用户何时单击按钮或拨动开关，我们都希望用时间戳记录此事件。</p><p>除了记录它之外，我们还想创建一个 <code>toast</code> 通知，在事件发生时显示。</p><p>简单来说，就是通过打印日志和弹窗通知两种形式来记录用户的操作行为，比如用户点了一下按钮，我就打印一下日志并且通知提醒一下我做了点击操作。</p><p>那么通过观察者模式，我们就可以这样拆解，将可观察对象订阅打印日志和通知事件，每当用户点击按钮或者拨动开关的时候，都会调用可观察对象 <code>notify</code> 方法，通过 <code>notify</code> 方法我们可以将数据传递给所有的订阅者，在这里就是打印日志和通知这两个订阅者。</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2><p>来看实现的例子吧：</p><iframe src="https://stackblitz.com/edit/observer-pattern-demo?devToolsHeight=33&amp;embed=1&amp;file=src/App.js"></iframe><blockquote><p>TODO：为什么这里会有两次弹窗通知？不影响演示效果（欢迎讨论交流，可提 PR）</p></blockquote><p>我们可以在许多方面使用观察者模式，比如在使用异步，基于事件的数据时，它可能非常有用。也许您希望某些组件在某些数据下载完成后，或者每当用户向消息板发送新消息时，所有其他成员都应收到通知。</p><h2 id="例子学习" tabindex="-1">例子学习 <a class="header-anchor" href="#例子学习" aria-label="Permalink to &quot;例子学习&quot;">​</a></h2><p>使用观察者模式的一个流行库是 <code>RxJS</code>，RxJS 中有大量的内置特性和示例使用了观察者模式。</p><blockquote><p>ReactiveX combines the Observer pattern with the Iterator pattern and functional programming with collections to fill the need for an ideal way of managing sequences of events. - RxJS</p></blockquote><p>ReactiveX 将观察者模式与迭代器模式和函数式编程结合在一起，以满足对管理事件序列的理想方式的需求。- RXJS</p><p>使用 RxJS，我们可以创建可观察对象并订阅某些事件!</p><p>让我们看一下他们的文档中介绍的一个示例，该示例记录用户是否在文档中拖拉。</p><iframe src="https://stackblitz.com/edit/observer-pattern-rxjs-demo?ctl=1&amp;devToolsHeight=33&amp;embed=1&amp;file=src/App.js"></iframe><h2 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h2><p>使用观察者模式是实现关注点分离和单一职责原则的好方法。</p><p>观察者对象与可观察对象不是紧密耦合的，并且可以在任何时候解耦。可观察对象就只用负责监视事件，而观察者只是处理接收到的数据。</p><h2 id="不足" tabindex="-1">不足 <a class="header-anchor" href="#不足" aria-label="Permalink to &quot;不足&quot;">​</a></h2><p>如果观察者变得过于复杂，在通知所有订阅者时可能会导致性能问题。</p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,32);function h(m,F,f,v,C,g){const a=o,p=e,l=r;return c(),E("div",null,[d,s(a,{readTime:"3",words:"1k"}),u,s(p),s(l)])}const x=t(b,[["render",h]]);export{k as __pageData,x as default};
