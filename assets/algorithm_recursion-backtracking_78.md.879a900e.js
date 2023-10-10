import{_ as o,a as e,b as t}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.61fdc39d.js";import{_ as r,o as c,c as E,H as s,k as n,a as y,Q as i}from"./chunks/framework.926cbeec.js";import"./chunks/commonjsHelpers.725317a4.js";const k=JSON.parse('{"title":"LeetCode 78. 子集","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/recursion-backtracking/78.md","filePath":"algorithm/recursion-backtracking/78.md","lastUpdated":1696923443000}'),b={name:"algorithm/recursion-backtracking/78.md"},u=n("h1",{id:"leetcode-78-子集",tabindex:"-1"},[y("LeetCode 78. 子集 "),n("a",{class:"header-anchor",href:"#leetcode-78-子集","aria-label":'Permalink to "LeetCode 78. 子集"'},"​")],-1),d=i(`<h2 id="题目描述" tabindex="-1">题目描述 <a class="header-anchor" href="#题目描述" aria-label="Permalink to &quot;题目描述&quot;">​</a></h2><p>给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。</p><p>说明：解集不能包含重复的子集。</p><p>示例:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">输入: nums = [1,2,3]</span></span>
<span class="line"><span style="color:#e1e4e8;">输出:</span></span>
<span class="line"><span style="color:#e1e4e8;">[</span></span>
<span class="line"><span style="color:#e1e4e8;">  [3],</span></span>
<span class="line"><span style="color:#e1e4e8;">  [1],</span></span>
<span class="line"><span style="color:#e1e4e8;">  [2],</span></span>
<span class="line"><span style="color:#e1e4e8;">  [1,2,3],</span></span>
<span class="line"><span style="color:#e1e4e8;">  [1,3],</span></span>
<span class="line"><span style="color:#e1e4e8;">  [2,3],</span></span>
<span class="line"><span style="color:#e1e4e8;">  [1,2],</span></span>
<span class="line"><span style="color:#e1e4e8;">  []</span></span>
<span class="line"><span style="color:#e1e4e8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">输入: nums = [1,2,3]</span></span>
<span class="line"><span style="color:#24292e;">输出:</span></span>
<span class="line"><span style="color:#24292e;">[</span></span>
<span class="line"><span style="color:#24292e;">  [3],</span></span>
<span class="line"><span style="color:#24292e;">  [1],</span></span>
<span class="line"><span style="color:#24292e;">  [2],</span></span>
<span class="line"><span style="color:#24292e;">  [1,2,3],</span></span>
<span class="line"><span style="color:#24292e;">  [1,3],</span></span>
<span class="line"><span style="color:#24292e;">  [2,3],</span></span>
<span class="line"><span style="color:#24292e;">  [1,2],</span></span>
<span class="line"><span style="color:#24292e;">  []</span></span>
<span class="line"><span style="color:#24292e;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>来源：力扣（LeetCode）链接：<a href="https://leetcode-cn.com/problems/subsets" target="_blank" rel="noreferrer">https://leetcode-cn.com/problems/subsets</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><p>一道组合相关的题目，采用回溯来做即可，题目说明不包含重复元素，于是我们也无需排序然后判断相邻元素是否相等来去重了。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Ga9PL" id="tab-i53niMu" checked="checked"><label for="tab-i53niMu">javascript</label><input type="radio" name="group-Ga9PL" id="tab-V8NQeca"><label for="tab-V8NQeca">cpp</label><input type="radio" name="group-Ga9PL" id="tab-YV4huOb"><label for="tab-YV4huOb">java</label><input type="radio" name="group-Ga9PL" id="tab-icqcqBt"><label for="tab-icqcqBt">python</label></div><div class="blocks"><div class="language-javascript vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">subsets</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">nums</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> res </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">dfs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">t</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">start</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    res.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(t);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> start; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> nums.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      t.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(nums[i]);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">dfs</span><span style="color:#E1E4E8;">(t.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(), i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      t.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">dfs</span><span style="color:#E1E4E8;">([], </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> res;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">subsets</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">nums</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dfs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">t</span><span style="color:#24292E;">, </span><span style="color:#E36209;">start</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    res.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(t);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> start; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> nums.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      t.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(nums[i]);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">dfs</span><span style="color:#24292E;">(t.</span><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(), i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      t.</span><span style="color:#6F42C1;">pop</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">dfs</span><span style="color:#24292E;">([], </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> res;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-cpp vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Solution</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">public:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">vector</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">vector</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">&gt;&gt; </span><span style="color:#B392F0;">subsets</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">vector</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">&gt;</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">nums</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        vector</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">vector</span><span style="color:#F97583;">&lt;int&gt;&gt;</span><span style="color:#E1E4E8;"> res;</span></span>
<span class="line"><span style="color:#E1E4E8;">        function</span><span style="color:#F97583;">&lt;void</span><span style="color:#E1E4E8;">(vector</span><span style="color:#F97583;">&lt;int&gt;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> dfs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">CustomLink title</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;&amp;&quot;</span><span style="color:#E1E4E8;"> href</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;vector&lt;int&gt; t, int start&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            res.</span><span style="color:#B392F0;">push_back</span><span style="color:#E1E4E8;">(t);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> start; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> nums.</span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">(); i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                t.</span><span style="color:#B392F0;">push_back</span><span style="color:#E1E4E8;">(nums[i]);</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">dfs</span><span style="color:#E1E4E8;">(t, i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                t.</span><span style="color:#B392F0;">pop_back</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">dfs</span><span style="color:#E1E4E8;">({}, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> res;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Solution</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">public:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">vector</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">vector</span><span style="color:#24292E;">&lt;</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">&gt;&gt; </span><span style="color:#6F42C1;">subsets</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">vector</span><span style="color:#24292E;">&lt;</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">&gt;</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">nums</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        vector</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">vector</span><span style="color:#D73A49;">&lt;int&gt;&gt;</span><span style="color:#24292E;"> res;</span></span>
<span class="line"><span style="color:#24292E;">        function</span><span style="color:#D73A49;">&lt;void</span><span style="color:#24292E;">(vector</span><span style="color:#D73A49;">&lt;int&gt;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> dfs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">CustomLink title</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;&amp;&quot;</span><span style="color:#24292E;"> href</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;vector&lt;int&gt; t, int start&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            res.</span><span style="color:#6F42C1;">push_back</span><span style="color:#24292E;">(t);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> start; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> nums.</span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">(); i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                t.</span><span style="color:#6F42C1;">push_back</span><span style="color:#24292E;">(nums[i]);</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">dfs</span><span style="color:#24292E;">(t, i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                t.</span><span style="color:#6F42C1;">pop_back</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        };</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">dfs</span><span style="color:#24292E;">({}, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> res;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Solution</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> List&lt;List&lt;</span><span style="color:#F97583;">Integer</span><span style="color:#E1E4E8;">&gt;&gt; </span><span style="color:#B392F0;">subsets</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[] </span><span style="color:#FFAB70;">nums</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        List&lt;List&lt;</span><span style="color:#F97583;">Integer</span><span style="color:#E1E4E8;">&gt;&gt; res </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="color:#E1E4E8;">        List&lt;</span><span style="color:#F97583;">Integer</span><span style="color:#E1E4E8;">&gt; t </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">dfs</span><span style="color:#E1E4E8;">(res, t, nums, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> res;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">dfs</span><span style="color:#E1E4E8;">(List&lt;List&lt;</span><span style="color:#F97583;">Integer</span><span style="color:#E1E4E8;">&gt;&gt; </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">, List&lt;</span><span style="color:#F97583;">Integer</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#FFAB70;">t</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[] </span><span style="color:#FFAB70;">nums</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">start</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        res.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> ArrayList&lt;&gt;(t));</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> start; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> nums.length; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            t.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(nums[i]);</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">dfs</span><span style="color:#E1E4E8;">(res, t, nums, i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">            t.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(t.</span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Solution</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> List&lt;List&lt;</span><span style="color:#D73A49;">Integer</span><span style="color:#24292E;">&gt;&gt; </span><span style="color:#6F42C1;">subsets</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">nums</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        List&lt;List&lt;</span><span style="color:#D73A49;">Integer</span><span style="color:#24292E;">&gt;&gt; res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292E;">        List&lt;</span><span style="color:#D73A49;">Integer</span><span style="color:#24292E;">&gt; t </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">dfs</span><span style="color:#24292E;">(res, t, nums, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> res;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dfs</span><span style="color:#24292E;">(List&lt;List&lt;</span><span style="color:#D73A49;">Integer</span><span style="color:#24292E;">&gt;&gt; </span><span style="color:#E36209;">res</span><span style="color:#24292E;">, List&lt;</span><span style="color:#D73A49;">Integer</span><span style="color:#24292E;">&gt; </span><span style="color:#E36209;">t</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">nums</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">start</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        res.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> ArrayList&lt;&gt;(t));</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> start; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> nums.length; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            t.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(nums[i]);</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">dfs</span><span style="color:#24292E;">(res, t, nums, i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">            t.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(t.</span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Solution</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">subsets</span><span style="color:#E1E4E8;">(self, nums: List[</span><span style="color:#79B8FF;">int</span><span style="color:#E1E4E8;">]) -&gt; List[List[</span><span style="color:#79B8FF;">int</span><span style="color:#E1E4E8;">]]:</span></span>
<span class="line"><span style="color:#E1E4E8;">        res </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">dfs</span><span style="color:#E1E4E8;">(t, start):</span></span>
<span class="line"><span style="color:#E1E4E8;">            res.append(t[:])</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">range</span><span style="color:#E1E4E8;">(start, </span><span style="color:#79B8FF;">len</span><span style="color:#E1E4E8;">(nums)):</span></span>
<span class="line"><span style="color:#E1E4E8;">                t.append(nums[i])</span></span>
<span class="line"><span style="color:#E1E4E8;">                dfs(t, i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">                t.pop()</span></span>
<span class="line"><span style="color:#E1E4E8;">        dfs([], </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> res</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Solution</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">subsets</span><span style="color:#24292E;">(self, nums: List[</span><span style="color:#005CC5;">int</span><span style="color:#24292E;">]) -&gt; List[List[</span><span style="color:#005CC5;">int</span><span style="color:#24292E;">]]:</span></span>
<span class="line"><span style="color:#24292E;">        res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dfs</span><span style="color:#24292E;">(t, start):</span></span>
<span class="line"><span style="color:#24292E;">            res.append(t[:])</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">range</span><span style="color:#24292E;">(start, </span><span style="color:#005CC5;">len</span><span style="color:#24292E;">(nums)):</span></span>
<span class="line"><span style="color:#24292E;">                t.append(nums[i])</span></span>
<span class="line"><span style="color:#24292E;">                dfs(t, i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">                t.pop()</span></span>
<span class="line"><span style="color:#24292E;">        dfs([], </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> res</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></div></div><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">学如逆水行舟，不进则退</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">学如逆水行舟，不进则退</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,11);function F(m,g,h,v,A,C){const a=o,l=e,p=t;return c(),E("div",null,[u,s(a,{readTime:"1",words:"381"}),d,s(l),s(p)])}const _=r(b,[["render",F]]);export{k as __pageData,_ as default};
