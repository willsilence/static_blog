import{_ as r,a as s,b as p}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.61fdc39d.js";import{_ as u}from"./chunks/CustomLink.cd661532.js";import{_ as n,o as m,c as h,H as a,k as e,a as o,Q as d}from"./chunks/framework.926cbeec.js";import"./chunks/commonjsHelpers.725317a4.js";const z=JSON.parse('{"title":"🐮 化身面试官出 30+Vue 面试题 - 2021 年版","description":"","frontmatter":{"author":"HearLing"},"headers":[],"relativePath":"interview/vue/index.md","filePath":"interview/vue/index.md","lastUpdated":1696923443000}'),b={name:"interview/vue/index.md"},_=e("h1",{id:"🐮-化身面试官出-30-vue-面试题-2021-年版",tabindex:"-1"},[o("🐮 化身面试官出 30+Vue 面试题 - 2021 年版 "),e("a",{class:"header-anchor",href:"#🐮-化身面试官出-30-vue-面试题-2021-年版","aria-label":'Permalink to "🐮 化身面试官出 30+Vue 面试题 - 2021 年版"'},"​")],-1),v=e("blockquote",null,[e("p",null,"之前一直没有总结 Vue 相关的知识，看了挺多别人总结的，其实也能快速知道一些，但是遇到真正的面试，发现自己的知识都还只是碎片化的，觉得不行，得总结一下了。")],-1),f=e("p",null,"不知道大伙是不是已经在准备春招面试了呢，准备得咋样了呢，面试的 Vue 复习得怎么样了呢？",-1),y=e("p",null,"如果你感觉在 vue 这方面还比较薄弱的话，不如来做一做这套模拟面试吧，看看大伙能不能打个满分，祝你顺利，🌸 答案仅供参考 🌸",-1),g=e("code",null," 552",-1),k=d('<p>------ 进入正题化身为面试官 ------</p><p>📞📞 电话拨通中，咳咳喂，听得到吗，听得到是吧 😊，那面试开始了，你先做个自我介绍吧 。。。 在你自我介绍的时候呢，我就看看你做过的项目，技术栈什么的。</p><p>第一个问题，先摸个底：</p><h2 id="了解过-react-或者-angular-吗-他们有什么区别" tabindex="-1">了解过 react 或者 angular 吗，他们有什么区别？ <a class="header-anchor" href="#了解过-react-或者-angular-吗-他们有什么区别" aria-label="Permalink to &quot;了解过 react 或者 angular 吗，他们有什么区别？&quot;">​</a></h2><details><summary><b>答案</b></summary><p><code> Vue</code> 借鉴了<code> angular</code> 的模板和数据绑定技术，又借鉴了<code> react</code> 的组件化和虚拟<code> DOM</code> 技术。</p></details><p>😶 对<code> Vue</code> 比较熟一些是吧~（这里只说<code> Vue</code> 假设你就只熟练<code> Vue</code> ）</p><h2 id="那首先谈谈你对-vue-的理解吧" tabindex="-1">那首先谈谈你对 Vue 的理解吧？ <a class="header-anchor" href="#那首先谈谈你对-vue-的理解吧" aria-label="Permalink to &quot;那首先谈谈你对 Vue 的理解吧？&quot;">​</a></h2>',7),V=e("summary",null,[e("b",null,"答案")],-1),x=e("strong",null,"官网介绍：",-1),q=d("<p><strong>关键点：</strong> 渐进式<code> JavaScript</code> 框架、核心库加插件、动态创建用户界面（异步获取后台数据，数据展示在界面）</p><p><strong>特点：</strong> <code> MVVM</code> 模式；代码简洁体积小，运行效率高，适合移动 PC 端开发；本身只关注<code> UI</code> （和<code> react</code> 相似），可以轻松引入 <code> Vue</code> 插件或其他的第三方库进行开发。</p>",2),P=d('<p>🌸 思考一下自己所说的那些点，自己都非常清楚明白吗？</p><p>下面呢我就根据你对<code> vue</code> 的理解，接着谈谈：</p><h2 id="你刚刚说到了-mvvm-能详细说说吗" tabindex="-1">你刚刚说到了 MVVM，能详细说说吗？ <a class="header-anchor" href="#你刚刚说到了-mvvm-能详细说说吗" aria-label="Permalink to &quot;你刚刚说到了 MVVM，能详细说说吗？&quot;">​</a></h2><details><summary><b>答案</b></summary><p><p>全称：<code> Model-View-ViewModel</code> ，<code> Model</code> 表示数据模型层。<code> view</code> 表示视图层，<code> ViewModel</code> 是<code> View</code> 和<code> Model</code> 层的桥梁，数据绑定到<code> viewModel</code> 层并自动渲染到页面中，视图变化通知<code> viewModel</code> 层更新数据。</p></p></details><p>😶 摸底差不多，问基础了，响应式数据得知道吧，问一问</p><h2 id="vue-是如何实现响应式数据的呢-响应式数据原理-❗" tabindex="-1">vue 是如何实现响应式数据的呢？（响应式数据原理）❗ <a class="header-anchor" href="#vue-是如何实现响应式数据的呢-响应式数据原理-❗" aria-label="Permalink to &quot;vue 是如何实现响应式数据的呢？（响应式数据原理）❗&quot;">​</a></h2><details><summary><b>答案</b></summary><p>Vue2：<code> Object.defineProperty</code> 重新定义<code> data</code> 中所有的属性，<code> Object.defineProperty</code> 可以使数据的获取与设置增加一个拦截的功能，拦截属性的获取，进行依赖收集。拦截属性的更新操作，进行通知。</p><p>具体的过程：首先 Vue 使用 <code>initData</code> 初始化用户传入的参数，然后使用 <code> new Observer</code> 对数据进行观测，如果数据是一个对象类型就会调用<code> this.walk（value）</code> 对对象进行处理，内部使用 <code> defineeReactive</code> 循环对象属性定义响应式变化，核心就是使用<code> Object.defineProperty</code> 重新定义数据。</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5a5a919f243644a3a0fbeaa884d2f9cd~tplv-k3u1fbpfcp-watermark.image" alt=""></p></details><p>🌸 刚刚如果你说了对象的检测，然后又没说清楚数组的处理的话，我就会问下面这个问题</p><h2 id="那-vue-中是如何检测数组变化的呢" tabindex="-1">那 vue 中是如何检测数组变化的呢？ <a class="header-anchor" href="#那-vue-中是如何检测数组变化的呢" aria-label="Permalink to &quot;那 vue 中是如何检测数组变化的呢？&quot;">​</a></h2><details><summary><b>答案</b></summary><p><p>数组就是使用<code> object.defineProperty</code> 重新定义数组的每一项，那能引起数组变化的方法我们都是知道的，<code> pop</code> 、<code> push</code> 、<code> shift</code> 、<code> unshift</code> 、<code> splice</code> 、<code> sort</code> 、<code> reverse</code> 这七种，只要这些方法执行改了数组内容，我就更新内容就好了，是不是很好理解。</p><ol><li><p>是用来函数劫持的方式，重写了数组方法，具体呢就是更改了数组的原型，更改成自己的，用户调数组的一些方法的时候，走的就是自己的方法，然后通知视图去更新。</p></li><li><p>数组里每一项可能是对象，那么我就是会对数组的每一项进行观测，（且只有数组里的对象才能进行观测，观测过的也不会进行观测）</p></li></ol><p>vue3：改用<code> proxy</code> ，可直接监听对象数组的变化。</p></p></details><h2 id="那你说说-vue-的事件绑定原理吧" tabindex="-1">那你说说 Vue 的事件绑定原理吧 <a class="header-anchor" href="#那你说说-vue-的事件绑定原理吧" aria-label="Permalink to &quot;那你说说 Vue 的事件绑定原理吧&quot;">​</a></h2><details><summary><b>答案</b></summary><p><ul><li><p>原生<code> DOM</code> 的绑定：Vue 在创建真实 DOM 时会调用<code> createElm</code> ，默认会调用<code> invokeCreateHooks</code> 。会遍历当前平台下相对的属性处理代码，其中就有<code> updateDOMListeners</code> 方法，内部会传入<code> add（）</code> 方法</p></li><li><p>组件绑定事件，原生事件，自定义事件；组件绑定之间是通过 Vue 中自定义的<code> $on</code> 方法实现的。 （可以理解为：组件的<code> nativeOnOn</code> 等价于 普通元素 on 组件的 on 会单独处理）</p></li></ul></p></details><h2 id="v-model-中的实现原理及如何自定义-v-model-❗" tabindex="-1">v-model 中的实现原理及如何自定义 v-model ❗ <a class="header-anchor" href="#v-model-中的实现原理及如何自定义-v-model-❗" aria-label="Permalink to &quot;v-model 中的实现原理及如何自定义 v-model ❗&quot;">​</a></h2><details><summary><b>答案</b></summary><p><p><code> v-model</code> 可以看成是<code> value+input</code> 方法的语法糖（组件）。原生的<code> v-model</code> ，会根据标签的不同生成不同的事件与属性。解析一个指令来。</p><p>自定义：自己写<code> model</code> 属性，里面放上<code> prop</code> 和<code> event</code></p></p></details><p>👍 还行哟~知道响应式数据和数据绑定问完了，接着问问渲染呗：</p><h2 id="为什么-vue-采用异步渲染呢" tabindex="-1">为什么 Vue 采用异步渲染呢？ <a class="header-anchor" href="#为什么-vue-采用异步渲染呢" aria-label="Permalink to &quot;为什么 Vue 采用异步渲染呢？&quot;">​</a></h2><details><summary><b>答案</b></summary><p><p><code> Vue</code> 是组件级更新，如果不采用异步更新，那么每次更新数据都会对当前组件进行重新渲染，所以为了性能，<code> Vue</code> 会在本轮数据更新后，在异步更新视图。核心思想<code> nextTick</code> 。</p><p><code> dep.notify（）</code> 通知 watcher 进行更新，<code> subs[i].update</code> 依次调用 watcher 的<code> update</code> ，<code> queueWatcher</code> 将 watcher 去重放入队列， nextTick（<code> flushSchedulerQueue</code> ）在下一 tick 中刷新 watcher 队列（异步）。</p></p></details><p>🌸 接着追问，要是你 nextTick 都能讲得很清楚的话那基本你是明白了。</p><h2 id="了解-nexttick-吗" tabindex="-1">了解 nextTick 吗？ <a class="header-anchor" href="#了解-nexttick-吗" aria-label="Permalink to &quot;了解 nextTick 吗？&quot;">​</a></h2><details><summary><b>答案</b></summary><p><p>异步方法，异步渲染最后一步，与 JS 事件循环联系紧密。主要使用了宏任务微任务（<code>setTimeout</code>、<code>promise</code>那些），定义了一个异步方法，多次调用<code>nextTick</code>会将方法存入队列，通过异步方法清空当前队列。</p></p></details><p>可以的可以的，先问你个生命周期，我再想想怎么难住你 😄</p><h2 id="说说-vue-的生命周期吧-❗" tabindex="-1">说说 Vue 的生命周期吧 ❗ <a class="header-anchor" href="#说说-vue-的生命周期吧-❗" aria-label="Permalink to &quot;说说 Vue 的生命周期吧 ❗&quot;">​</a></h2><details><summary><b>答案</b></summary><p><p><strong>什么时候被调用？</strong></p><ul><li>beforeCreate ：实例初始化之后，数据观测之前调用</li><li>created：实例创建万之后调用。实例完成：数据观测、属性和方法的运算、<code> watch/event</code> 事件回调。无<code> $el</code> .</li><li>beforeMount：在挂载之前调用，相关<code> render</code> 函数首次被调用</li><li>mounted：了被新创建的<code>vm.$el</code>替换，并挂载到实例上去之后调用改钩子。</li><li>beforeUpdate：数据更新前调用，发生在虚拟 DOM 重新渲染和打补丁，在这之后会调用改钩子。</li><li>updated：由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用改钩子。</li><li>beforeDestroy：实例销毁前调用，实例仍然可用。</li><li>destroyed：实例销毁之后调用，调用后，Vue 实例指示的所有东西都会解绑，所有事件监听器和所有子实例都会被移除</li></ul><p><strong>每个生命周期内部可以做什么？</strong></p><ul><li>created：实例已经创建完成，因为他是最早触发的，所以可以进行一些数据、资源的请求。</li><li>mounted：实例已经挂载完成，可以进行一些 DOM 操作。</li><li>beforeUpdate：可以在这个钩子中进一步的更改状态，不会触发重渲染。</li><li>updated：可以执行依赖于 DOM 的操作，但是要避免更改状态，可能会导致更新无线循环。</li><li>destroyed：可以执行一些优化操作，清空计时器，解除绑定事件。</li></ul><p><strong>ajax 放在哪个生命周期？</strong>：一般放在<code> mounted</code> 中，保证逻辑统一性，因为生命周期是同步执行的，<code> ajax</code> 是异步执行的。单数服务端渲染<code> ssr</code> 同一放在<code> created</code> 中，因为服务端渲染不支持<code> mounted</code> 方法。 <strong>什么时候使用 beforeDestroy？</strong>：当前页面使用<code> $on</code> ，需要解绑事件。清楚定时器。解除事件绑定，<code> scroll mousemove</code> 。</p></p></details><h2 id="父子组件生命周期调用顺序-简单" tabindex="-1">父子组件生命周期调用顺序（简单） <a class="header-anchor" href="#父子组件生命周期调用顺序-简单" aria-label="Permalink to &quot;父子组件生命周期调用顺序（简单）&quot;">​</a></h2><details><summary><b>答案</b></summary><p><p>渲染顺序：先父后子，完成顺序：先子后父</p><p>更新顺序：父更新导致子更新，子更新完成后父</p><p>销毁顺序：先父后子，完成顺序：先子后父</p></p></details><h2 id="vue-组件通信-❗" tabindex="-1">Vue 组件通信 ❗ <a class="header-anchor" href="#vue-组件通信-❗" aria-label="Permalink to &quot;Vue 组件通信 ❗&quot;">​</a></h2><details><summary><b>答案</b></summary><p><ul><li><p>父子间通信:父亲提供数据通过属性<code> props</code>传给儿子；儿子通过<code> $on</code> 绑父亲的事件，再通过<code> $emit</code> 触发自己的事件（发布订阅）</p></li><li><p>利用父子关系<code> $parent</code> 、<code> $children</code> ， 获取父子组件实例的方法。</p></li><li><p>父组件提供数据，子组件注入。<code> provide</code> 、<code> inject</code> ，插件用得多。</p></li><li><p><code> ref</code> 获取组件实例，调用组件的属性、方法</p></li><li><p>跨组件通信<code> Event Bus</code> （Vue.prototype.$bus = new Vue）其实基于$on 与$emit</p></li><li><p><code> vuex</code> 状态管理实现通信</p></li></ul></p></details><h2 id="vuex-工作原理" tabindex="-1">Vuex 工作原理 <a class="header-anchor" href="#vuex-工作原理" aria-label="Permalink to &quot;Vuex 工作原理&quot;">​</a></h2>',28),T=e("summary",null,[e("b",null,"答案")],-1),M=d('<ul><li><p>Vuex 是一个专为 Vue.js 应用程序开发的<strong>状态管理模式</strong>。</p></li><li><p>状态自管理应用包含以下几个部分：</p><ul><li><p>state，驱动应用的数据源；</p></li><li><p>view，以声明方式将 state 映射到视图；</p></li><li><p>actions，响应在 view 上的用户输入导致的状态变化。下图单向数据流示意图：</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aecf55d9a396473c95dff6eca9ecfb7b~tplv-k3u1fbpfcp-watermark.image" alt=""></p></li></ul></li><li><p>vuex，多组件共享状态，因-单向数据流简洁性很容易被破坏： - 多个视图依赖于同一状态。 - 来自不同视图的行为需要变更同一状态。 <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b17eb2230b3f46729cbfbe7144873065~tplv-k3u1fbpfcp-watermark.image" alt=""></p></li></ul>',1),w=d('<p>问虚拟<code> DOM</code> 吧，看你能不能讲清楚从真实<code> DOM</code> 到虚拟<code> DOM</code> ，再和我说说<code> diff</code></p><h2 id="如何从真实-dom-到虚拟-dom" tabindex="-1">如何从真实 DOM 到虚拟 DOM <a class="header-anchor" href="#如何从真实-dom-到虚拟-dom" aria-label="Permalink to &quot;如何从真实 DOM 到虚拟 DOM&quot;">​</a></h2><details><summary><b>答案</b></summary><p><p>涉及到 Vue 中的模板编译原理，主要过程：</p><ol><li><p>将模板转换成<code> ast</code> 树，<code> ast</code> 用对象来描述真实的 JS 语法（将真实 DOM 转换成虚拟 DOM）</p></li><li><p>优化树</p></li><li><p>将<code> ast</code> 树生成代码</p></li></ol></p></details><h2 id="用-vnode-来描述一个-dom-结构" tabindex="-1">用 VNode 来描述一个 DOM 结构 <a class="header-anchor" href="#用-vnode-来描述一个-dom-结构" aria-label="Permalink to &quot;用 VNode 来描述一个 DOM 结构&quot;">​</a></h2><details><summary><b>答案</b></summary><p><p>虚拟节点就是用一个对象来描述一个真实的 DOM 元素。首先将<code> template</code> （真实 DOM）先转成<code> ast</code> ，<code> ast</code> 树通过<code> codegen</code> 生成<code> render</code> 函数，<code> render</code> 函数里的<code> _c</code> 方法将它转为虚拟 dom</p></p></details><h2 id="diff-算法" tabindex="-1">diff 算法 <a class="header-anchor" href="#diff-算法" aria-label="Permalink to &quot;diff 算法&quot;">​</a></h2><details><summary><b>答案</b></summary><p><p><strong>时间复杂度：</strong> 个树的完全<code> diff</code> 算法是一个时间复杂度为<code> O(n*3）</code> ，vue 进行优化转化成<code> O(n)</code> 。</p><p><strong>理解：</strong></p><ul><li><p>最小量更新，<code> key</code> 很重要。这个可以是这个节点的唯一标识，告诉<code> diff</code> 算法，在更改前后它们是同一个 DOM 节点</p><ul><li>扩展<code> v-for</code> 为什么要有<code> key</code> ，没有<code> key</code> 会暴力复用，举例子的话随便说一个比如移动节点或者增加节点（修改 DOM），加<code> key</code> 只会移动减少操作 DOM。</li></ul></li><li><p>只有是同一个虚拟节点才会进行精细化比较，否则就是暴力删除旧的，插入新的。</p></li><li><p>只进行同层比较，不会进行跨层比较。</p></li></ul><p><strong>diff 算法的优化策略</strong>：四种命中查找，四个指针</p><ol><li><p>旧前与新前（先比开头，后插入和删除节点的这种情况）</p></li><li><p>旧后与新后（比结尾，前插入或删除的情况）</p></li><li><p>旧前与新后（头与尾比，此种发生了，涉及移动节点，那么新前指向的节点，移动到旧后之后）</p></li><li><p>旧后与新前（尾与头比，此种发生了，涉及移动节点，那么新前指向的节点，移动到旧前之前）</p></li></ol></p></details><p>--- 问完上面这些如果都能很清楚的话，基本 O 了 ---</p><p>以下的这些简单的概念，你肯定也是没有问题的啦 😉</p><h2 id="computed-watch-和-method" tabindex="-1">Computed watch 和 method <a class="header-anchor" href="#computed-watch-和-method" aria-label="Permalink to &quot;Computed watch 和 method&quot;">​</a></h2><details><summary><b>答案</b></summary><p><p><strong>computed</strong>：默认<code>computed</code>也是一个<code>watcher</code>具备缓存，只有当依赖的数据变化时才会计算, 当数据没有变化时, 它会读取缓存数据。如果一个数据依赖于其他数据，使用<code> computed</code></p><p><strong>watch</strong>：每次都需要执行函数。 <code> watch</code> 更适用于数据变化时的异步操作。如果需要在某个数据变化时做一些事情，使用 watch。</p><p><strong>method</strong>：只要把方法用到模板上了,每次一变化就会重新渲染视图，性能开销大</p></p></details><h2 id="v-if-和-v-show-区别" tabindex="-1">v-if 和 v-show 区别 <a class="header-anchor" href="#v-if-和-v-show-区别" aria-label="Permalink to &quot;v-if 和 v-show 区别&quot;">​</a></h2><details><summary><b>答案</b></summary><p><ul><li><p><code> v-if</code> 如果条件不成立不会渲染当前指令所在节点的 DOM 元素</p></li><li><p><code> v-show</code> 只是切换当前 DOM 的显示与隐藏</p></li></ul></p></details><h2 id="v-for-和-v-if-为什么不能连用" tabindex="-1">v-for 和 v-if 为什么不能连用 <a class="header-anchor" href="#v-for-和-v-if-为什么不能连用" aria-label="Permalink to &quot;v-for 和 v-if 为什么不能连用&quot;">​</a></h2><details><summary><b>答案</b></summary><p><p><code> v-for</code> 会比 <code> v-if</code> 的优先级更高，连用的话会把<code> v-if</code> 的每个元素都添加一下，造成性能问题。</p></p></details><h2 id="v-html-会导致哪些问题-简单" tabindex="-1">v-html 会导致哪些问题（简单） <a class="header-anchor" href="#v-html-会导致哪些问题-简单" aria-label="Permalink to &quot;v-html 会导致哪些问题（简单）&quot;">​</a></h2><details><summary><b>答案</b></summary><p><ul><li><p><code> XSS</code> 攻击</p></li><li><p><code> v-html</code> 会替换标签内部的元素</p></li></ul></p></details><h2 id="描述组件渲染和更新过程" tabindex="-1">描述组件渲染和更新过程 <a class="header-anchor" href="#描述组件渲染和更新过程" aria-label="Permalink to &quot;描述组件渲染和更新过程&quot;">​</a></h2><details><summary><b>答案</b></summary><p><p>渲染组件时，会通过<code> vue.extend()</code> 方法构建子组件的构造函数，并进行实例化。最终手动调用<code> $mount()</code> 进行挂载。更新组件时会进行<code> patchVnode</code> 流程，核心就是<code> diff</code> 算法。</p></p></details><h2 id="组件中的-data-为什么是函数" tabindex="-1">组件中的 data 为什么是函数 <a class="header-anchor" href="#组件中的-data-为什么是函数" aria-label="Permalink to &quot;组件中的 data 为什么是函数&quot;">​</a></h2><details><summary><b>答案</b></summary><p><p>避免组件中的数据互相影响。同一个组件被复用多次会创建多个实例，如果<code> data</code> 是一个对象的话，这些实例用的是同一个构造函数。为了保证组件的数据独立，要求每个组件都必须通过<code> data</code> 函数返回一个对象作为组件的状态。</p></p></details><h2 id="为什么要使用异步组件" tabindex="-1">为什么要使用异步组件？ <a class="header-anchor" href="#为什么要使用异步组件" aria-label="Permalink to &quot;为什么要使用异步组件？&quot;">​</a></h2>',22),D=e("summary",null,[e("b",null,"答案")],-1),O=e("li",null,"节省打包出的结果，异步组件分开打包，采用 jsonp 的方式进行加载，有效解决文件过大的问题。",-1),S=e("code",null," import（）",-1),C=d('<h2 id="action-与-mutation-的区别" tabindex="-1">action 与 mutation 的区别 <a class="header-anchor" href="#action-与-mutation-的区别" aria-label="Permalink to &quot;action 与 mutation 的区别&quot;">​</a></h2><details><summary><b>答案</b></summary><p><ul><li><code> mutation</code> 是同步更新，<code> $watch</code> 严格模式下会报错</li><li><code> action</code> 是异步操作，可以获取数据后调用<code> mutation</code> 提交最终数据</li></ul></p></details><h2 id="插槽与作用域插槽的区别" tabindex="-1">插槽与作用域插槽的区别 <a class="header-anchor" href="#插槽与作用域插槽的区别" aria-label="Permalink to &quot;插槽与作用域插槽的区别&quot;">​</a></h2><details><summary><b>答案</b></summary><p><strong>插槽</strong></p><ul><li><p>创建组件虚拟节点时，会将组件儿子的虚拟节点保存起来。当初始化组件时，通过插槽属性将儿子进行分类<code> {a:[vnode],b[vnode]}</code></p></li><li><p>渲染组件时会拿对应的<code> slot</code> 属性的节点进行替换操作。（插槽的作用域为父组件）</p></li></ul><p><strong>作用域插槽</strong></p><ul><li><p>作用域插槽在解析的时候不会作为组件的孩子节点。会解析成函数，当子组件渲染时，会调用此函数进行渲染。</p></li><li><p>普通插槽渲染的作用域是父组件，作用域插槽的渲染作用域是当前子组件。</p></li></ul></details><h2 id="vue-中相同逻辑如何抽离" tabindex="-1">vue 中相同逻辑如何抽离 <a class="header-anchor" href="#vue-中相同逻辑如何抽离" aria-label="Permalink to &quot;vue 中相同逻辑如何抽离&quot;">​</a></h2><details><summary><b>答案</b></summary><p><p>其实就是考察<code> vue.mixin</code> 用法，给组件每个生命周期，函数都混入一些公共逻辑。</p></p></details><h2 id="谈谈对-keep-alive-的了解" tabindex="-1">谈谈对 keep-alive 的了解 <a class="header-anchor" href="#谈谈对-keep-alive-的了解" aria-label="Permalink to &quot;谈谈对 keep-alive 的了解&quot;">​</a></h2><details><summary><b>答案</b></summary><p><p><code> keep-alive</code> 可以实现组件的缓存，当组件切换时不会对当前组件进行卸载。常用的 2 个属性<code> include/exclude</code> ，2 个生命周期<code> activated</code> ，<code> deactivated</code></p></p></details><h2 id="vue-性能优化" tabindex="-1">Vue 性能优化 <a class="header-anchor" href="#vue-性能优化" aria-label="Permalink to &quot;Vue 性能优化&quot;">​</a></h2><details><summary><b>答案</b></summary><p><p><strong>编码优化</strong>：</p><ul><li>事件代理</li><li><code> keep-alive</code></li><li>拆分组件</li><li><code> key</code> 保证唯一性</li><li>路由懒加载、异步组件</li><li>防抖节流</li></ul><p><strong>Vue 加载性能优化</strong></p><ul><li>第三方模块按需导入（<code> babel-plugin-component</code> ）</li><li>图片懒加载</li></ul><p><strong>用户体验</strong></p><ul><li><code> app-skeleton</code> 骨架屏</li><li><code> shellap</code> p 壳</li><li><code> pwa</code></li></ul><p><strong>SEO 优化</strong></p><ul><li>预渲染</li></ul></p></details><h2 id="最后的话" tabindex="-1">最后的话 <a class="header-anchor" href="#最后的话" aria-label="Permalink to &quot;最后的话&quot;">​</a></h2><p>🚀🚀 觉得不错的朋友可以 ⭐️ 关注我，后续会持续更新~</p><p>⭐️⭐️ 最后祝各位正在准备秋招补招和春招的小伙伴面试顺利~，收割 offer，我们一起加油吧 🤝！还有就是 新年快乐 ❤️ ❤️ ~</p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>',14);function A(j,$,E,B,I,N){const c=r,t=u,l=s,i=p;return m(),h("div",null,[_,a(c,{readTime:"14",words:"4.2k"}),v,f,y,e("p",null,[o("欢迎访问"),a(t,{title:"GitHub 仓库",href:"https://github.com/Chocolate1999/Front-end-learning-to-organize-notes/issues"}),o("，目前已经有"),g,o(" 道大厂真题了，涵盖各类前端的真题")]),k,e("details",null,[V,e("p",null,[e("p",null,[x,o(),a(t,{title:"https://cn.vuejs.org/index.html",href:"https://cn.vuejs.org/index.html"})]),q])]),P,e("details",null,[T,e("p",null,[e("p",null,[o("官网："),a(t,{title:"https://vuex.vuejs.org/zh/",href:"https://vuex.vuejs.org/zh/"})]),M])]),w,e("details",null,[D,e("p",null,[e("ol",null,[O,e("li",null,[o("核心就是包组件定义变成一个函数，依赖"),S,o(" 语法，可以实现文件的分割加载。 详细的看官方文档："),a(t,{title:"https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6",href:"https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6"})])])])]),C,a(l),a(i)])}const L=n(b,[["render",A]]);export{z as __pageData,L as default};
