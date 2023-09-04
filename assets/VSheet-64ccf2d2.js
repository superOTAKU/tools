import{as as F,g as U,r as A,P as ke,k as q,Q as j,K as et,a5 as tt,at as nt,s as we,p as S,c,b as p,ao as E,au as M,aj as xe,av as he,D as pe,m as v,H as st,v as V,n as T,q as R,t as B,e as at,d as $e,i as lt,a as it,w as Be,o as ot,X as rt,a0 as ut,f as ct,aw as dt,l as vt,M as ne,ax as ft,ay as mt,a8 as gt,af as ht,az as pt,aA as be,N as Ie,V as bt,aB as yt,a3 as Ee,ai as Ct,Y as _t,Z as St}from"./index-51c4f481.js";const Le=["top","bottom"],kt=["start","end","left","right"];function wt(e,t){let[s,n]=e.split(" ");return n||(n=F(Le,s)?"start":F(kt,s)?"top":"center"),{side:ye(s,t),align:ye(n,t)}}function ye(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function en(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function tn(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function nn(e){return{side:e.align,align:e.side}}function sn(e){return F(Le,e.side)?"y":"x"}function N(e){const t=U("useRender");t.render=e}function xt(e){const t=A(),s=A();if(ke){const n=new ResizeObserver(a=>{e==null||e(a,n),a.length&&(s.value=a[0].contentRect)});q(()=>{n.disconnect()}),j(t,(a,l)=>{l&&(n.unobserve(l),s.value=void 0),a&&n.observe(a)},{flush:"post"})}return{resizeRef:t,contentRect:et(s)}}const K=tt({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,t){let{slots:s}=t;const{defaults:n,reset:a,root:l,scoped:i}=nt(e);return we(n,{reset:a,root:l,scoped:i}),()=>{var o;return(o=s.default)==null?void 0:o.call(s)}}}),Ve=S({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Te(e){return{dimensionStyles:c(()=>({height:p(e.height),maxHeight:p(e.maxHeight),maxWidth:p(e.maxWidth),minHeight:p(e.minHeight),minWidth:p(e.minWidth),width:p(e.width)}))}}const P=S({tag:{type:String,default:"div"}},"tag"),ie=S({border:[Boolean,Number,String]},"border");function oe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{borderClasses:c(()=>{const n=M(e)?e.value:e.border,a=[];if(n===!0||n==="")a.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const l of String(n).split(" "))a.push(`border-${l}`);return a})}}const re=S({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function ue(e){return{elevationClasses:c(()=>{const s=M(e)?e.value:e.elevation,n=[];return s==null||n.push(`elevation-${s}`),n})}}const Q=S({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function J(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{roundedClasses:c(()=>{const n=M(e)?e.value:e.rounded,a=[];if(n===!0||n==="")a.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const l of String(n).split(" "))a.push(`rounded-${l}`);return a})}}function ce(e){return xe(()=>{const t=[],s={};return e.value.background&&(he(e.value.background)?s.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&(he(e.value.text)?(s.color=e.value.text,s.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:s}})}function X(e,t){const s=c(()=>({text:M(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:a}=ce(s);return{textColorClasses:n,textColorStyles:a}}function se(e,t){const s=c(()=>({background:M(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:a}=ce(s);return{backgroundColorClasses:n,backgroundColorStyles:a}}const $t=[null,"default","comfortable","compact"],Re=S({density:{type:String,default:"default",validator:e=>$t.includes(e)}},"density");function Ne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{densityClasses:c(()=>`${t}--density-${e.density}`)}}const Bt=["elevated","flat","tonal","outlined","text","plain"];function It(e,t){return v(st,null,[e&&v("span",{key:"overlay",class:`${t}__overlay`},null),v("span",{key:"underlay",class:`${t}__underlay`},null)])}const Pe=S({color:String,variant:{type:String,default:"elevated",validator:e=>Bt.includes(e)}},"variant");function Et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();const s=c(()=>{const{variant:l}=pe(e);return`${t}--variant-${l}`}),{colorClasses:n,colorStyles:a}=ce(c(()=>{const{variant:l,color:i}=pe(e);return{[["elevated","flat"].includes(l)?"background":"text"]:i}}));return{colorClasses:n,colorStyles:a,variantClasses:s}}const Lt=V({name:"VBtnGroup",props:{divided:Boolean,...ie(),...Re(),...re(),...Q(),...P(),...T(),...Pe()},setup(e,t){let{slots:s}=t;const{themeClasses:n}=R(e),{densityClasses:a}=Ne(e),{borderClasses:l}=oe(e),{elevationClasses:i}=ue(e),{roundedClasses:o}=J(e);we({VBtn:{height:"auto",color:B(e,"color"),density:B(e,"density"),flat:!0,variant:B(e,"variant")}}),N(()=>v(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,l.value,a.value,i.value,o.value]},s))}}),Vt=S({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Tt=S({value:null,disabled:Boolean,selectedClass:String},"group-item");function Rt(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=U("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const a=at();$e(Symbol.for(`${t.description}:id`),a);const l=lt(t,null);if(!l){if(!s)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const i=B(e,"value"),o=c(()=>l.disabled.value||e.disabled);l.register({id:a,value:i,disabled:o},n),q(()=>{l.unregister(a)});const r=c(()=>l.isSelected(a)),b=c(()=>r.value&&[l.selectedClass.value,e.selectedClass]);return j(r,m=>{n.emit("group:selected",{value:m})}),{id:a,isSelected:r,toggle:()=>l.select(a,!r.value),select:m=>l.select(a,m),selectedClass:b,value:i,disabled:o,group:l}}function Nt(e,t){let s=!1;const n=it([]),a=Be(e,"modelValue",[],u=>u==null?[]:ze(n,ut(u)),u=>{const d=zt(n,u);return e.multiple?d:d[0]}),l=U("useGroup");function i(u,d){const C=u,f=Symbol.for(`${t.description}:id`),_=ct(f,l==null?void 0:l.vnode).indexOf(d);_>-1?n.splice(_,0,C):n.push(C)}function o(u){if(s)return;r();const d=n.findIndex(C=>C.id===u);n.splice(d,1)}function r(){const u=n.find(d=>!d.disabled);u&&e.mandatory==="force"&&!a.value.length&&(a.value=[u.id])}ot(()=>{r()}),q(()=>{s=!0});function b(u,d){const C=n.find(f=>f.id===u);if(!(d&&C!=null&&C.disabled))if(e.multiple){const f=a.value.slice(),h=f.findIndex(g=>g===u),_=~h;if(d=d??!_,_&&e.mandatory&&f.length<=1||!_&&e.max!=null&&f.length+1>e.max)return;h<0&&d?f.push(u):h>=0&&!d&&f.splice(h,1),a.value=f}else{const f=a.value.includes(u);if(e.mandatory&&f)return;a.value=d??!f?[u]:[]}}function m(u){if(e.multiple&&dt('This method is not supported when using "multiple" prop'),a.value.length){const d=a.value[0],C=n.findIndex(_=>_.id===d);let f=(C+u)%n.length,h=n[f];for(;h.disabled&&f!==C;)f=(f+u)%n.length,h=n[f];if(h.disabled)return;a.value=[n[f].id]}else{const d=n.find(C=>!C.disabled);d&&(a.value=[d.id])}}const y={register:i,unregister:o,selected:a,select:b,disabled:B(e,"disabled"),prev:()=>m(n.length-1),next:()=>m(1),isSelected:u=>a.value.includes(u),selectedClass:c(()=>e.selectedClass),items:c(()=>n),getItemIndex:u=>Pt(n,u)};return $e(t,y),y}function Pt(e,t){const s=ze(e,[t]);return s.length?e.findIndex(n=>n.id===s[0]):-1}function ze(e,t){const s=[];for(let n=0;n<e.length;n++){const a=e[n];a.value!=null?t.find(l=>rt(l,a.value))!=null&&s.push(a.id):t.includes(n)&&s.push(a.id)}return s}function zt(e,t){const s=[];for(let n=0;n<e.length;n++){const a=e[n];t.includes(a.id)&&s.push(a.value!=null?a.value:n)}return s}const Ae=Symbol.for("vuetify:v-btn-toggle");vt()({name:"VBtnToggle",props:Vt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:s}=t;const{isSelected:n,next:a,prev:l,select:i,selected:o}=Nt(e,Ae);return N(()=>{var r;return v(Lt,{class:"v-btn-toggle"},{default:()=>[(r=s.default)==null?void 0:r.call(s,{isSelected:n,next:a,prev:l,select:i,selected:o})]})}),{next:a,prev:l,select:i}}});const At=["x-small","small","default","large","x-large"],de=S({size:{type:[String,Number],default:"default"}},"size");function ve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return xe(()=>{let s,n;return F(At,e.size)?s=`${t}--size-${e.size}`:e.size&&(n={width:p(e.size),height:p(e.size)}),{sizeClasses:s,sizeStyles:n}})}const Ot=S({color:String,start:Boolean,end:Boolean,icon:ne,...de(),...P({tag:"i"}),...T()},"v-icon"),Z=V({name:"VIcon",props:Ot(),setup(e,t){let{attrs:s,slots:n}=t,a;n.default&&(a=c(()=>{var m,y;const u=(m=n.default)==null?void 0:m.call(n);if(u)return(y=ft(u).filter(d=>d.children&&typeof d.children=="string")[0])==null?void 0:y.children}));const{themeClasses:l}=R(e),{iconData:i}=mt(a||e),{sizeClasses:o}=ve(e),{textColorClasses:r,textColorStyles:b}=X(B(e,"color"));return N(()=>v(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",l.value,o.value,r.value,{"v-icon--clickable":!!s.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[o.value?void 0:{fontSize:p(e.size),height:p(e.size),width:p(e.size)},b.value],role:s.onClick?"button":void 0,"aria-hidden":!s.onClick},null)),{}}});function Oe(e){const t=A(),s=A(!1);if(gt){const n=new IntersectionObserver(a=>{e==null||e(a,n),s.value=!!a.find(l=>l.isIntersecting)});q(()=>{n.disconnect()}),j(t,(a,l)=>{l&&(n.unobserve(l),s.value=!1),a&&n.observe(a)},{flush:"post"})}return{intersectionRef:t,isIntersecting:s}}const Dt=V({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...de(),...P({tag:"div"}),...T()},setup(e,t){let{slots:s}=t;const n=20,a=2*Math.PI*n,l=A(),{themeClasses:i}=R(e),{sizeClasses:o,sizeStyles:r}=ve(e),{textColorClasses:b,textColorStyles:m}=X(B(e,"color")),{textColorClasses:y,textColorStyles:u}=X(B(e,"bgColor")),{intersectionRef:d,isIntersecting:C}=Oe(),{resizeRef:f,contentRect:h}=xt(),_=c(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),g=c(()=>Number(e.width)),k=c(()=>r.value?Number(e.size):h.value?h.value.width:Math.max(g.value,32)),I=c(()=>n/(1-g.value/k.value)*2),$=c(()=>g.value/k.value*I.value),z=c(()=>p((100-_.value)/100*a));return ht(()=>{d.value=l.value,f.value=l.value}),N(()=>v(e.tag,{ref:l,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":C.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},i.value,o.value,b.value],style:[r.value,m.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:_.value},{default:()=>[v("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${I.value} ${I.value}`},[v("circle",{class:["v-progress-circular__underlay",y.value],style:u.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":$.value,"stroke-dasharray":a,"stroke-dashoffset":0},null),v("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":$.value,"stroke-dasharray":a,"stroke-dashoffset":z.value},null)]),s.default&&v("div",{class:"v-progress-circular__content"},[s.default({value:_.value})])]})),{}}});const ae=Symbol("rippleStop"),Mt=80;function Ce(e,t){e.style.transform=t,e.style.webkitTransform=t}function ee(e,t){e.style.opacity=`calc(${t} * var(--v-theme-overlay-multiplier))`}function le(e){return e.constructor.name==="TouchEvent"}function De(e){return e.constructor.name==="KeyboardEvent"}const Ht=function(e,t){var s;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,l=0;if(!De(e)){const u=t.getBoundingClientRect(),d=le(e)?e.touches[e.touches.length-1]:e;a=d.clientX-u.left,l=d.clientY-u.top}let i=0,o=.3;(s=t._ripple)!=null&&s.circle?(o=.15,i=t.clientWidth/2,i=n.center?i:i+Math.sqrt((a-i)**2+(l-i)**2)/4):i=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const r=`${(t.clientWidth-i*2)/2}px`,b=`${(t.clientHeight-i*2)/2}px`,m=n.center?r:`${a-i}px`,y=n.center?b:`${l-i}px`;return{radius:i,scale:o,x:m,y,centerX:r,centerY:b}},Y={show(e,t){var s;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(t!=null&&(s=t._ripple)!=null&&s.enabled))return;const a=document.createElement("span"),l=document.createElement("span");a.appendChild(l),a.className="v-ripple__container",n.class&&(a.className+=` ${n.class}`);const{radius:i,scale:o,x:r,y:b,centerX:m,centerY:y}=Ht(e,t,n),u=`${i*2}px`;l.className="v-ripple__animation",l.style.width=u,l.style.height=u,t.appendChild(a);const d=window.getComputedStyle(t);d&&d.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),l.classList.add("v-ripple__animation--enter"),l.classList.add("v-ripple__animation--visible"),Ce(l,`translate(${r}, ${b}) scale3d(${o},${o},${o})`),ee(l,0),l.dataset.activated=String(performance.now()),setTimeout(()=>{l.classList.remove("v-ripple__animation--enter"),l.classList.add("v-ripple__animation--in"),Ce(l,`translate(${m}, ${y}) scale3d(1,1,1)`),ee(l,.08)},0)},hide(e){var t;if(!(e!=null&&(t=e._ripple)!=null&&t.enabled))return;const s=e.getElementsByClassName("v-ripple__animation");if(s.length===0)return;const n=s[s.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const a=performance.now()-Number(n.dataset.activated),l=Math.max(250-a,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),ee(n,0),setTimeout(()=>{e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),n.parentNode&&e.removeChild(n.parentNode)},300)},l)}};function Me(e){return typeof e>"u"||!!e}function O(e){const t={},s=e.currentTarget;if(!(!(s!=null&&s._ripple)||s._ripple.touched||e[ae])){if(e[ae]=!0,le(e))s._ripple.touched=!0,s._ripple.isTouch=!0;else if(s._ripple.isTouch)return;if(t.center=s._ripple.centered||De(e),s._ripple.class&&(t.class=s._ripple.class),le(e)){if(s._ripple.showTimerCommit)return;s._ripple.showTimerCommit=()=>{Y.show(e,s,t)},s._ripple.showTimer=window.setTimeout(()=>{var n;s!=null&&(n=s._ripple)!=null&&n.showTimerCommit&&(s._ripple.showTimerCommit(),s._ripple.showTimerCommit=null)},Mt)}else Y.show(e,s,t)}}function _e(e){e[ae]=!0}function w(e){const t=e.currentTarget;if(!(!t||!t._ripple)){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{w(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),Y.hide(t)}}function He(e){const t=e.currentTarget;!t||!t._ripple||(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let D=!1;function Ge(e){!D&&(e.keyCode===be.enter||e.keyCode===be.space)&&(D=!0,O(e))}function We(e){D=!1,w(e)}function Fe(e){D&&(D=!1,w(e))}function Xe(e,t,s){const{value:n,modifiers:a}=t,l=Me(n);if(l||Y.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=l,e._ripple.centered=a.center,e._ripple.circle=a.circle,pt(n)&&n.class&&(e._ripple.class=n.class),l&&!s){if(a.stop){e.addEventListener("touchstart",_e,{passive:!0}),e.addEventListener("mousedown",_e);return}e.addEventListener("touchstart",O,{passive:!0}),e.addEventListener("touchend",w,{passive:!0}),e.addEventListener("touchmove",He,{passive:!0}),e.addEventListener("touchcancel",w),e.addEventListener("mousedown",O),e.addEventListener("mouseup",w),e.addEventListener("mouseleave",w),e.addEventListener("keydown",Ge),e.addEventListener("keyup",We),e.addEventListener("blur",Fe),e.addEventListener("dragstart",w,{passive:!0})}else!l&&s&&Ye(e)}function Ye(e){e.removeEventListener("mousedown",O),e.removeEventListener("touchstart",O),e.removeEventListener("touchend",w),e.removeEventListener("touchmove",He),e.removeEventListener("touchcancel",w),e.removeEventListener("mouseup",w),e.removeEventListener("mouseleave",w),e.removeEventListener("keydown",Ge),e.removeEventListener("keyup",We),e.removeEventListener("dragstart",w),e.removeEventListener("blur",Fe)}function Gt(e,t){Xe(e,t,!1)}function Wt(e){delete e._ripple,Ye(e)}function Ft(e,t){if(t.value===t.oldValue)return;const s=Me(t.oldValue);Xe(e,t,s)}const Xt={mounted:Gt,unmounted:Wt,updated:Ft};const Yt=V({name:"VProgressLinear",props:{active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...Q(),...P(),...T()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:s}=t;const n=Be(e,"modelValue"),{isRtl:a}=Ie(),{themeClasses:l}=R(e),{textColorClasses:i,textColorStyles:o}=X(e,"color"),{backgroundColorClasses:r,backgroundColorStyles:b}=se(c(()=>e.bgColor||e.color)),{backgroundColorClasses:m,backgroundColorStyles:y}=se(e,"color"),{roundedClasses:u}=J(e),{intersectionRef:d,isIntersecting:C}=Oe(),f=c(()=>parseInt(e.max,10)),h=c(()=>parseInt(e.height,10)),_=c(()=>parseFloat(e.bufferValue)/f.value*100),g=c(()=>parseFloat(n.value)/f.value*100),k=c(()=>a.value!==e.reverse),I=c(()=>e.indeterminate?"fade-transition":"slide-x-transition"),$=c(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function z(x){if(!d.value)return;const{left:H,right:G,width:L}=d.value.getBoundingClientRect(),W=k.value?L-x.clientX+(G-L):x.clientX-H;n.value=Math.round(W/L*f.value)}return N(()=>v(e.tag,{ref:d,class:["v-progress-linear",{"v-progress-linear--active":e.active&&C.value,"v-progress-linear--reverse":k.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},u.value,l.value],style:{height:e.active?p(h.value):0,"--v-progress-linear-height":p(h.value)},role:"progressbar","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:g.value,onClick:e.clickable&&z},{default:()=>[e.stream&&v("div",{key:"stream",class:["v-progress-linear__stream",i.value],style:{...o.value,[k.value?"left":"right"]:p(-h.value),borderTop:`${p(h.value/2)} dotted`,opacity:$.value,top:`calc(50% - ${p(h.value/4)})`,width:p(100-_.value,"%"),"--v-progress-linear-stream-to":p(h.value*(k.value?1:-1))}},null),v("div",{class:["v-progress-linear__background",r.value],style:[b.value,{opacity:$.value,width:p(e.stream?_.value:100,"%")}]},null),v(bt,{name:I.value},{default:()=>[e.indeterminate?v("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(x=>v("div",{key:x,class:["v-progress-linear__indeterminate",x,m.value],style:y.value},null))]):v("div",{class:["v-progress-linear__determinate",m.value],style:[y.value,{width:p(g.value,"%")}]},null)]}),s.default&&v("div",{class:"v-progress-linear__content"},[s.default({value:g.value,buffer:_.value})])]})),{}}}),Ut=S({loading:Boolean},"loader");function qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{loaderClasses:c(()=>({[`${t}--loading`]:e.loading}))}}function an(e,t){var s;let{slots:n}=t;return v("div",{class:`${e.name}__loader`},[((s=n.default)==null?void 0:s.call(n,{color:e.color,isActive:e.active}))||v(Yt,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Se={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Ue=S({location:String},"location");function qe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=Ie();return{locationStyles:c(()=>{if(!e.location)return{};const{side:l,align:i}=wt(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function o(b){return s?s(b):0}const r={};return l!=="center"&&(t?r[Se[l]]=`calc(100% - ${o(l)}px)`:r[l]=0),i!=="center"?t?r[Se[i]]=`calc(100% - ${o(i)}px)`:r[i]=0:(l==="center"?r.top=r.left="50%":r[{top:"left",bottom:"left",left:"top",right:"top"}[l]]="50%",r.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[l]),r})}}const jt=["static","relative","fixed","absolute","sticky"],je=S({position:{type:String,validator:e=>jt.includes(e)}},"position");function Qe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{positionClasses:c(()=>e.position?`${t}--${e.position}`:void 0)}}function ln(){var e,t;return(e=U("useRouter"))==null||(t=e.proxy)==null?void 0:t.$router}function Qt(e,t){const s=yt("RouterLink"),n=c(()=>!!(e.href||e.to)),a=c(()=>(n==null?void 0:n.value)||!!(t.onClick||t.onClickOnce));if(typeof s=="string")return{isLink:n,isClickable:a,href:B(e,"href")};const l=e.to?s.useLink(e):void 0;return{isLink:n,isClickable:a,route:l==null?void 0:l.route,navigate:l==null?void 0:l.navigate,isActive:l&&c(()=>{var i,o;return e.exact?(i=l.isExactActive)==null?void 0:i.value:(o=l.isActive)==null?void 0:o.value}),href:c(()=>e.to?l==null?void 0:l.route.value.href:e.href)}}const Jt=S({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let te=!1;function on(e,t){let s=!1,n,a;ke&&(Ee(()=>{window.addEventListener("popstate",l),n=e==null?void 0:e.beforeEach((i,o,r)=>{te?s?t(r):r():setTimeout(()=>s?t(r):r()),te=!0}),a=e==null?void 0:e.afterEach(()=>{te=!1})}),Ct(()=>{var i,o;window.removeEventListener("popstate",l),(i=n)==null||i(),(o=a)==null||o()}));function l(i){var o;(o=i.state)!=null&&o.replaced||(s=!0,setTimeout(()=>s=!1))}}function Kt(e,t){j(()=>{var s;return(s=e.isActive)==null?void 0:s.value},s=>{e.isLink.value&&s&&t&&Ee(()=>{t(!0)})},{immediate:!0})}const rn=V({name:"VBtn",directives:{Ripple:Xt},props:{active:{type:Boolean,default:void 0},symbol:{type:null,default:Ae},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:ne,appendIcon:ne,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...ie(),...Q(),...Re(),...Ve(),...re(),...Tt(),...Ut(),...Ue(),...je(),...Jt(),...de(),...P({tag:"button"}),...T(),...Pe({variant:"elevated"})},emits:{"group:selected":e=>!0},setup(e,t){let{attrs:s,slots:n}=t;const{themeClasses:a}=R(e),{borderClasses:l}=oe(e),{colorClasses:i,colorStyles:o,variantClasses:r}=Et(e),{densityClasses:b}=Ne(e),{dimensionStyles:m}=Te(e),{elevationClasses:y}=ue(e),{loaderClasses:u}=qt(e),{locationStyles:d}=qe(e),{positionClasses:C}=Qe(e),{roundedClasses:f}=J(e),{sizeClasses:h,sizeStyles:_}=ve(e),g=Rt(e,e.symbol,!1),k=Qt(e,s),I=c(()=>{var x;return e.active!==!1&&(e.active||((x=k.isActive)==null?void 0:x.value)||(g==null?void 0:g.isSelected.value))}),$=c(()=>(g==null?void 0:g.disabled.value)||e.disabled),z=c(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border));return Kt(k,g==null?void 0:g.select),N(()=>{var x,H,G,L;const W=k.isLink.value?"a":e.tag,fe=!g||g.isSelected.value,Je=!!(e.prependIcon||n.prepend),Ke=!!(e.appendIcon||n.append),me=!!(e.icon&&e.icon!==!0);return _t(v(W,{type:W==="a"?void 0:"button",class:["v-btn",g==null?void 0:g.selectedClass.value,{"v-btn--active":I.value,"v-btn--block":e.block,"v-btn--disabled":$.value,"v-btn--elevated":z.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},a.value,l.value,fe?i.value:void 0,b.value,y.value,u.value,C.value,f.value,h.value,r.value],style:[fe?o.value:void 0,m.value,d.value,_.value],disabled:$.value||void 0,href:k.href.value,onClick:Ze=>{var ge;$.value||((ge=k.navigate)==null||ge.call(k,Ze),g==null||g.toggle())}},{default:()=>[It(!0,"v-btn"),!e.icon&&Je&&v(K,{key:"prepend",defaults:{VIcon:{icon:e.prependIcon}}},{default:()=>[v("span",{class:"v-btn__prepend"},[((x=n.prepend)==null?void 0:x.call(n))??v(Z,null,null)])]}),v("span",{class:"v-btn__content","data-no-activator":""},[v(K,{key:"content",defaults:{VIcon:{icon:me?e.icon:void 0}}},{default:()=>[((H=n.default)==null?void 0:H.call(n))??(me&&v(Z,{key:"icon"},null))]})]),!e.icon&&Ke&&v(K,{key:"append",defaults:{VIcon:{icon:e.appendIcon}}},{default:()=>[v("span",{class:"v-btn__append"},[((G=n.append)==null?void 0:G.call(n))??v(Z,null,null)])]}),!!e.loading&&v("span",{key:"loader",class:"v-btn__loader"},[((L=n.loader)==null?void 0:L.call(n))??v(Dt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}),[[St("ripple"),!$.value&&e.ripple,null]])}),{}}});const un=V({name:"VSheet",props:{color:String,...ie(),...Ve(),...re(),...Ue(),...je(),...Q(),...P(),...T()},setup(e,t){let{slots:s}=t;const{themeClasses:n}=R(e),{backgroundColorClasses:a,backgroundColorStyles:l}=se(B(e,"color")),{borderClasses:i}=oe(e),{dimensionStyles:o}=Te(e),{elevationClasses:r}=ue(e),{locationStyles:b}=qe(e),{positionClasses:m}=Qe(e),{roundedClasses:y}=J(e);return()=>v(e.tag,{class:["v-sheet",n.value,a.value,i.value,r.value,m.value,y.value],style:[l.value,o.value,b.value]},s)}});export{Et as A,Te as B,qe as C,Qe as D,It as E,de as F,ve as G,Rt as H,Qt as I,Ut as J,wt as K,an as L,en as M,tn as N,nn as O,sn as P,ln as Q,Xt as R,on as S,K as V,N as a,ie as b,re as c,Q as d,se as e,oe as f,ue as g,J as h,rn as i,un as j,Vt as k,Nt as l,P as m,Z as n,Jt as o,Tt as p,X as q,Re as r,Ne as s,qt as t,xt as u,Dt as v,Ve as w,Ue as x,je as y,Pe as z};