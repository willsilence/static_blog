import{_ as D,a as v,b as k}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.61fdc39d.js";import{_ as B}from"./chunks/CustomLink.cd661532.js";import{_ as w}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.df63da58.js";import{_ as x}from"./chunks/VideoLink.vue_vue_type_script_setup_true_lang.4aa17f81.js";import{d as C,o as h,c as _,a as n,t as d,l as e,F as g,k as s,h as P,H as p,w as E,Q as F}from"./chunks/framework.926cbeec.js";import"./chunks/commonjsHelpers.725317a4.js";const I=s("br",null,null,-1),T=C({__name:"demo1",setup(c){let l=0;class t{getInstance(){return this}getCount(){return l}increment(){return++l}decrement(){return--l}}const a=new t,o=new t;return(r,i)=>(h(),_(g,null,[n(" 我们来比对一下结果："),I,n(" counter1.getInstance() === counter2.getInstance() 的结果是："+d(e(a).getInstance()===e(o).getInstance()),1)],64))}});let m,y=0;class j{constructor(){if(m)throw new Error("You can only create one instance!");m=this}getInstance(){return this}getCount(){return y}increment(){return++y}decrement(){return--y}}const u=Object.freeze(new j),b=Object.freeze(m),q=s("br",null,null,-1),S=s("br",null,null,-1),$=s("br",null,null,-1),R=s("br",null,null,-1),V=C({__name:"demo2",setup(c){const l=P(0);return(t,a)=>(h(),_(g,null,[n(" 点击如下按钮："),q,n(" 按钮 1 和按钮 2 点击事件使用的实例"+d(e(u).getInstance()===e(b).getInstance()?"相同":"不同")+" ",1),S,s("button",{onClick:a[0]||(a[0]=o=>l.value=e(u).increment())}," 按钮 1 点击增加 "),s("button",{onClick:a[1]||(a[1]=o=>l.value=e(u).decrement())}," 按钮 1 点击减少 "),s("button",{onClick:a[2]||(a[2]=o=>l.value=e(b).increment())}," 按钮 2 点击增加 "),s("button",{onClick:a[3]||(a[3]=o=>l.value=e(b).decrement())}," 按钮 2 点击减少 "),$,R,n(" count 结果："+d(l.value),1)],64))}}),z=s("h1",{id:"单例模式",tabindex:"-1"},[n("单例模式 "),s("a",{class:"header-anchor",href:"#单例模式","aria-label":'Permalink to "单例模式"'},"​")],-1),O=F("",12),N=s("h2",{id:"解决多次实例化以及可修改问题",tabindex:"-1"},[n("解决多次实例化以及可修改问题 "),s("a",{class:"header-anchor",href:"#解决多次实例化以及可修改问题","aria-label":'Permalink to "解决多次实例化以及可修改问题"'},"​")],-1),J=s("p",null,"对于多实例化问题，我们可以通过变量来保存一下实例，如果实例化过了，那么就会有报错提示，如下创建了一个 instance 变量。",-1),Y=s("code",null,"冻结",-1),H=F("",4),L=F("",12),G=s("p",null,"这些只能说是与单例模式相似，但从概念和定义来看，其实是对于单例模式进行了修改与优化。",-1),Q=s("p",null,"这些工具提供了仅读取状态，而上文所表述的单例模式状态其实是可变的。",-1),U=s("p",null,"在使用 Redux 时，我们不会直接去操作数据，而是在组件中通过 action 来 dispatch 一下，通知 reducer 帮我们更新数据。",-1),W=s("p",null,"可能一开始会觉得这样做是不是多此一举了，但其实这样可以避免我们直接操作数据，对于全局共享的值我们又可以进行改变，数据更新就交给 reducer 去做就好了，在组件使用角度，我们依旧还是在读取数据。",-1),K=s("blockquote",null,[s("p",null,"文章内容并不代表权威，如若有任何表述问题，欢迎大家提出以及共建文档。")],-1),M=s("h2",{id:"contributors",tabindex:"-1"},[n("Contributors "),s("a",{class:"header-anchor",href:"#contributors","aria-label":'Permalink to "Contributors"'},"​")],-1),es=JSON.parse('{"title":"单例模式","description":"","frontmatter":{"author":"Choi Yang","contributors":["HearLing"]},"headers":[],"relativePath":"patterns/singleton-pattern/index.md","filePath":"patterns/singleton-pattern/index.md","lastUpdated":1696923443000}'),X={name:"patterns/singleton-pattern/index.md"},os=Object.assign(X,{setup(c){return(l,t)=>{const a=D,o=x,r=w,i=B,f=v,A=k;return h(),_("div",null,[z,p(a,{readTime:"4",words:"1.3k"}),p(o,{bvId:"BV1FA411o7Vm"},{default:E(()=>[n("【编程】单例模式是啥，面试居然也会问？ | Singleton Pattern B 站视频传送门")]),_:1}),O,p(r,{pkg:"patterns/singleton-pattern",path:"demo1.vue"},{default:E(()=>[p(T)]),_:1}),N,J,s("p",null,[n("对于可修改问题，我们可以将实例化出来的对象用 "),p(i,{title:"Object.freeze()",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze"}),n(" 方法"),Y,n("一下。")]),H,p(r,{pkg:"patterns/singleton-pattern",path:"demo2.vue"},{default:E(()=>[p(V)]),_:1}),L,s("p",null,[n("在 React 中，想必大家也比较熟悉了，常用的 Redux 以及相关的拓展工具，还有 React 的一个 Hook，React Context，以及我平常也会用的 "),p(i,{title:"Recoil",href:"https://recoiljs.org/zh-hans/"}),n("。")]),G,Q,U,W,K,M,p(f),p(A)])}}});export{es as __pageData,os as default};