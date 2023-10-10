import{_ as o,a as e,b as t}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.61fdc39d.js";import{_ as c,o as r,c as E,H as s,k as a,a as y,Q as i}from"./chunks/framework.926cbeec.js";import"./chunks/commonjsHelpers.725317a4.js";const d="/static_blog/algorithm/partition-labels.png",B=JSON.parse('{"title":"LeetCode 763. 划分字母区间","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/double-pointer/763.划分字母区间.md","filePath":"algorithm/double-pointer/763.划分字母区间.md","lastUpdated":1696923443000}'),b={name:"algorithm/double-pointer/763.划分字母区间.md"},u=a("h1",{id:"leetcode-763-划分字母区间",tabindex:"-1"},[y("LeetCode 763. 划分字母区间 "),a("a",{class:"header-anchor",href:"#leetcode-763-划分字母区间","aria-label":'Permalink to "LeetCode 763. 划分字母区间"'},"​")],-1),m=i(`<h2 id="题目描述" tabindex="-1">题目描述 <a class="header-anchor" href="#题目描述" aria-label="Permalink to &quot;题目描述&quot;">​</a></h2><p>字符串 <code>S</code> 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一个字母只会出现在其中的一个片段。返回一个表示每个字符串片段的长度的列表。</p><p>示例 1：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">输入：</span><span style="color:#79B8FF;">S</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;ababcbacadefegdehijhklij&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">输出：[</span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">解释：</span></span>
<span class="line"><span style="color:#E1E4E8;">划分结果为 </span><span style="color:#9ECBFF;">&quot;ababcbaca&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;defegde&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;hijhklij&quot;</span><span style="color:#E1E4E8;">。</span></span>
<span class="line"><span style="color:#E1E4E8;">每个字母最多出现在一个片段中。</span></span>
<span class="line"><span style="color:#E1E4E8;">像 </span><span style="color:#9ECBFF;">&quot;ababcbacadefegde&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;hijhklij&quot;</span><span style="color:#E1E4E8;"> 的划分是错误的，因为划分的片段数较少。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">输入：</span><span style="color:#005CC5;">S</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;ababcbacadefegdehijhklij&quot;</span></span>
<span class="line"><span style="color:#24292E;">输出：[</span><span style="color:#005CC5;">9</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">7</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">8</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">解释：</span></span>
<span class="line"><span style="color:#24292E;">划分结果为 </span><span style="color:#032F62;">&quot;ababcbaca&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;defegde&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;hijhklij&quot;</span><span style="color:#24292E;">。</span></span>
<span class="line"><span style="color:#24292E;">每个字母最多出现在一个片段中。</span></span>
<span class="line"><span style="color:#24292E;">像 </span><span style="color:#032F62;">&quot;ababcbacadefegde&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;hijhklij&quot;</span><span style="color:#24292E;"> 的划分是错误的，因为划分的片段数较少。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>提示：</p><ul><li><code>S</code> 的长度在 <code>[1, 500]</code> 之间。</li><li><code>S</code> 只包含小写字母 <code>&#39;a&#39;</code> 到 <code>&#39;z&#39;</code> 。</li></ul><p>来源：力扣（LeetCode） 链接：<a href="https://leetcode-cn.com/problems/partition-labels" target="_blank" rel="noreferrer">https://leetcode-cn.com/problems/partition-labels</a> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。</p><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><p>此题是一个挺有意思的题，既有<strong>贪心</strong>的味道，又有<strong>双指针</strong>的味道，下面说一下解题思路：</p><p>首先维护一个 <code>map</code>，它用来统计字当前字母的位置，而我们通过遍历就可以记录得到每个字母的最远位置。</p><p>然后，再次遍历字符串时，我们既可以得到当前字母的最远位置，根据贪心思想，为了让同一个字母只会出现在其中的一个片段，那么对于这个字母一定要是最远位置，我们就可以得到一个<strong>范围区间</strong>，即 <code>maxLen </code>。</p><p>得到了 <code>maxLen </code>后，我们还需要让 <code>i</code> 指针，即<strong>尾指针</strong>走到这个地方才算我们可以切分的片段。</p><p>（想想，如果不走到 <code>maxLen </code>的话，这个范围区间内的字母可能会有更远的位置，那么就无法满足让同一个字母只会出现在其中的一个片段这个条件了）</p><p><img src="`+d+`" alt=""></p><p>参考 <a href="https://leetcode-cn.com/problems/partition-labels/solution/shou-hua-tu-jie-hua-fen-zi-mu-qu-jian-ji-lu-zui-yu/">笨猪爆破组</a> 大佬图解。</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{string}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">S</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@return</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{number[]}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">partitionLabels</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> map </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}; </span><span style="color:#6A737D;">// 用来统计当前字母最远位置</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">S</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    map[</span><span style="color:#79B8FF;">S</span><span style="color:#E1E4E8;">[i]] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i; </span><span style="color:#6A737D;">// 存储当前字母当前位置</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> start </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 头指针</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> res </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> maxLen </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">S</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> curMaxLen </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> map[</span><span style="color:#79B8FF;">S</span><span style="color:#E1E4E8;">[i]];</span></span>
<span class="line"><span style="color:#E1E4E8;">    maxLen </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(maxLen, curMaxLen); </span><span style="color:#6A737D;">// 计算出当前区间范围是否还可以继续扩大区间</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> maxLen) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> tmp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> start </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      start </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      res.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(tmp); </span><span style="color:#6A737D;">// 划分片段</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> res;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{string}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">S</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{number[]}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">partitionLabels</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">S</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> map </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}; </span><span style="color:#6A737D;">// 用来统计当前字母最远位置</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">S</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    map[</span><span style="color:#005CC5;">S</span><span style="color:#24292E;">[i]] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> i; </span><span style="color:#6A737D;">// 存储当前字母当前位置</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> start </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 头指针</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> maxLen </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">S</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> curMaxLen </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> map[</span><span style="color:#005CC5;">S</span><span style="color:#24292E;">[i]];</span></span>
<span class="line"><span style="color:#24292E;">    maxLen </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">max</span><span style="color:#24292E;">(maxLen, curMaxLen); </span><span style="color:#6A737D;">// 计算出当前区间范围是否还可以继续扩大区间</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> maxLen) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> tmp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> start </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      start </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      res.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(tmp); </span><span style="color:#6A737D;">// 划分片段</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> res;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">学如逆水行舟，不进则退</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">学如逆水行舟，不进则退</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,18);function F(h,A,D,C,g,_){const n=o,l=e,p=t;return r(),E("div",null,[u,s(n,{readTime:"2",words:"626"}),m,s(l),s(p)])}const k=c(b,[["render",F]]);export{B as __pageData,k as default};
