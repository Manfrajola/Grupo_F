import{bs as P,Q as b,ac as w,bt as z,bL as Y,bM as ze,bN as J,bO as Ae,k as T,bP as Z,bQ as ke,bR as qe,a9 as $,bS as De,bT as se,al as F,bU as ce,aY as k,as as we,ao as Q,bV as Ie,bz as G,bW as Ne,bX as U,aw as Ke,T as je,bY as de,bZ as Ue,b_ as Ge,b$ as Xe,c0 as ee,c1 as Ye,b6 as Je,c2 as Ze,c3 as et,af as tt,bu as nt,br as lt,a4 as ot,aG as at,ay as it,U as ut,b1 as q,a2 as x,c4 as fe,bJ as R,c5 as rt,X as st,a1 as Te}from"./index.3ecae71b.js";import{g as ct,b as dt,c as ft,Q as vt,a as mt}from"./QLayout.07792269.js";var ht=P({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:t}){const o=b(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>w("div",{class:o.value},z(t.default))}}),ve=P({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const o=b(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>w("div",{class:o.value},z(t.default))}}),me=P({name:"QItem",props:{...Y,...ze,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:o}){const{proxy:{$q:a}}=$(),n=J(e,a),{hasRouterLink:f,hasLink:l,linkProps:r,linkClass:s,linkTag:c,navigateToRouterLink:d}=Ae(),g=T(null),h=T(null),u=b(()=>e.clickable===!0||l.value===!0||e.tag==="label"),m=b(()=>e.disable!==!0&&u.value===!0),C=b(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(n.value===!0?" q-item--dark":"")+(l.value===!0&&e.active===null?s.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),S=b(()=>{if(e.insetLevel===void 0)return null;const y=a.lang.rtl===!0?"Right":"Left";return{["padding"+y]:16+e.insetLevel*56+"px"}});function _(y){m.value===!0&&(h.value!==null&&(y.qKeyEvent!==!0&&document.activeElement===g.value?h.value.focus():document.activeElement===h.value&&g.value.focus()),f.value===!0&&d(y),o("click",y))}function i(y){if(m.value===!0&&Z(y,13)===!0){ke(y),y.qKeyEvent=!0;const V=new MouseEvent("click",y);V.qKeyEvent=!0,g.value.dispatchEvent(V)}o("keyup",y)}function p(){const y=qe(t.default,[]);return m.value===!0&&y.unshift(w("div",{class:"q-focus-helper",tabindex:-1,ref:h})),y}return()=>{const y={ref:g,class:C.value,style:S.value,onClick:_,onKeyup:i};return m.value===!0?(y.tabindex=e.tabindex||"0",Object.assign(y,r.value)):u.value===!0&&(y["aria-disabled"]="true"),w(c.value,y,p())}}}),gt=P({name:"QList",props:{...Y,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:t}){const o=$(),a=J(e,o.proxy.$q),n=b(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(a.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>w("div",{class:n.value},z(t.default))}});function bt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),De.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const yt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function pt({showing:e,avoidEmit:t,configureAnchorEl:o}){const{props:a,proxy:n,emit:f}=$(),l=T(null);let r;function s(u){return l.value===null?!1:u===void 0||u.touches===void 0||u.touches.length<=1}const c={};o===void 0&&(Object.assign(c,{hide(u){n.hide(u)},toggle(u){n.toggle(u),u.qAnchorHandled=!0},toggleKey(u){Z(u,13)===!0&&c.toggle(u)},contextClick(u){n.hide(u),se(u),F(()=>{n.show(u),u.qAnchorHandled=!0})},prevent:se,mobileTouch(u){if(c.mobileCleanup(u),s(u)!==!0)return;n.hide(u),l.value.classList.add("non-selectable");const m=u.target;ce(c,"anchor",[[m,"touchmove","mobileCleanup","passive"],[m,"touchend","mobileCleanup","passive"],[m,"touchcancel","mobileCleanup","passive"],[l.value,"contextmenu","prevent","notPassive"]]),r=setTimeout(()=>{n.show(u),u.qAnchorHandled=!0},300)},mobileCleanup(u){l.value.classList.remove("non-selectable"),clearTimeout(r),e.value===!0&&u!==void 0&&bt()}}),o=function(u=a.contextMenu){if(a.noParentEvent===!0||l.value===null)return;let m;u===!0?n.$q.platform.is.mobile===!0?m=[[l.value,"touchstart","mobileTouch","passive"]]:m=[[l.value,"mousedown","hide","passive"],[l.value,"contextmenu","contextClick","notPassive"]]:m=[[l.value,"click","toggle","passive"],[l.value,"keyup","toggleKey","passive"]],ce(c,"anchor",m)});function d(){Ie(c,"anchor")}function g(u){for(l.value=u;l.value.classList.contains("q-anchor--skip");)l.value=l.value.parentNode;o()}function h(){if(a.target===!1||a.target===""||n.$el.parentNode===null)l.value=null;else if(a.target===!0)g(n.$el.parentNode);else{let u=a.target;if(typeof a.target=="string")try{u=document.querySelector(a.target)}catch{u=void 0}u!=null?(l.value=u.$el||u,o()):(l.value=null,console.error(`Anchor: target "${a.target}" not found`))}}return k(()=>a.contextMenu,u=>{l.value!==null&&(d(),o(u))}),k(()=>a.target,()=>{l.value!==null&&d(),h()}),k(()=>a.noParentEvent,u=>{l.value!==null&&(u===!0?d():o())}),we(()=>{h(),t!==!0&&a.modelValue===!0&&l.value===null&&f("update:modelValue",!1)}),Q(()=>{clearTimeout(r),d()}),{anchorEl:l,canShow:s,anchorEvents:c}}function xt(e,t){const o=T(null);let a;function n(r,s){const c=`${s!==void 0?"add":"remove"}EventListener`,d=s!==void 0?s:a;r!==window&&r[c]("scroll",d,G.passive),window[c]("scroll",d,G.passive),a=s}function f(){o.value!==null&&(n(o.value),o.value=null)}const l=k(()=>e.noParentEvent,()=>{o.value!==null&&(f(),t())});return Q(l),{localScrollTarget:o,unconfigureScrollTarget:f,changeScrollEvent:n}}const kt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},qt=["before-show","show","before-hide","hide"];function wt({showing:e,canShow:t,hideOnRouteChange:o,handleShow:a,handleHide:n,processOnMount:f}){const l=$(),{props:r,emit:s,proxy:c}=l;let d;function g(i){e.value===!0?m(i):h(i)}function h(i){if(r.disable===!0||i!==void 0&&i.qAnchorHandled===!0||t!==void 0&&t(i)!==!0)return;const p=r["onUpdate:modelValue"]!==void 0;p===!0&&(s("update:modelValue",!0),d=i,F(()=>{d===i&&(d=void 0)})),(r.modelValue===null||p===!1)&&u(i)}function u(i){e.value!==!0&&(e.value=!0,s("before-show",i),a!==void 0?a(i):s("show",i))}function m(i){if(r.disable===!0)return;const p=r["onUpdate:modelValue"]!==void 0;p===!0&&(s("update:modelValue",!1),d=i,F(()=>{d===i&&(d=void 0)})),(r.modelValue===null||p===!1)&&C(i)}function C(i){e.value!==!1&&(e.value=!1,s("before-hide",i),n!==void 0?n(i):s("hide",i))}function S(i){r.disable===!0&&i===!0?r["onUpdate:modelValue"]!==void 0&&s("update:modelValue",!1):i===!0!==e.value&&(i===!0?u:C)(d)}k(()=>r.modelValue,S),o!==void 0&&Ne(l)===!0&&k(()=>c.$route.fullPath,()=>{o.value===!0&&e.value===!0&&m()}),f===!0&&we(()=>{S(r.modelValue)});const _={show:h,hide:m,toggle:g};return Object.assign(c,_),_}const O=[];function Tt(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return U(e)}else if(e.__qPortalInnerRef!==void 0){const o=U(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(t),o):e}e=U(e)}while(e!=null)}function _t(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function St(e,t,o,a){const n=T(!1),f=T(!1);let l=null;const r={},s=a===!0&&_t(e);function c(g){if(g===!0){de(r),f.value=!0;return}f.value=!1,n.value===!1&&(s===!1&&l===null&&(l=Ue()),n.value=!0,O.push(e.proxy),Ge(r))}function d(g){if(f.value=!1,g!==!0)return;de(r),n.value=!1;const h=O.indexOf(e.proxy);h!==-1&&O.splice(h,1),l!==null&&(Xe(l),l=null)}return Ke(()=>{d(!0)}),e.proxy.__qPortalInnerRef=t,{showPortal:c,hidePortal:d,portalIsActive:n,portalIsAccessible:f,renderPortal:()=>s===!0?o():n.value===!0?[w(je,{to:l},o())]:void 0}}const Ct={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Lt(e,t){const o=T(t.value);return k(t,a=>{F(()=>{o.value=a})}),{transition:b(()=>"q-transition--"+(o.value===!0?e.transitionHide:e.transitionShow)),transitionStyle:b(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Bt(){let e;return Q(()=>{e=void 0}),{registerTick(t){e=t,F(()=>{e===t&&(e(),e=void 0)})},removeTick(){e=void 0}}}function Et(){let e;return Q(()=>{clearTimeout(e)}),{registerTimeout(t,o){clearTimeout(e),e=setTimeout(t,o)},removeTimeout(){clearTimeout(e)}}}const L=[];let M;function Pt(e){M=e.keyCode===27}function Ht(){M===!0&&(M=!1)}function Mt(e){M===!0&&(M=!1,Z(e,27)===!0&&L[L.length-1](e))}function _e(e){window[e]("keydown",Pt),window[e]("blur",Ht),window[e]("keyup",Mt),M=!1}function $t(e){ee.is.desktop===!0&&(L.push(e),L.length===1&&_e("addEventListener"))}function he(e){const t=L.indexOf(e);t>-1&&(L.splice(t,1),L.length===0&&_e("removeEventListener"))}const B=[];function Se(e){B[B.length-1](e)}function Qt(e){ee.is.desktop===!0&&(B.push(e),B.length===1&&document.body.addEventListener("focusin",Se))}function Vt(e){const t=B.indexOf(e);t>-1&&(B.splice(t,1),B.length===0&&document.body.removeEventListener("focusin",Se))}let Ce;const{notPassiveCapture:A}=G,E=[];function D(e){clearTimeout(Ce);const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let o=O.length-1;for(;o>=0;){const a=O[o].$;if(a.type.name!=="QDialog")break;if(a.props.seamless!==!0)return;o--}for(let a=E.length-1;a>=0;a--){const n=E[a];if((n.anchorEl.value===null||n.anchorEl.value.contains(t)===!1)&&(t===document.body||n.innerRef.value!==null&&n.innerRef.value.contains(t)===!1))e.qClickOutside=!0,n.onClickOutside(e);else return}}function Wt(e){E.push(e),E.length===1&&(document.addEventListener("mousedown",D,A),document.addEventListener("touchstart",D,A))}function ge(e){const t=E.findIndex(o=>o===e);t>-1&&(E.splice(t,1),E.length===0&&(clearTimeout(Ce),document.removeEventListener("mousedown",D,A),document.removeEventListener("touchstart",D,A)))}let be,ye;function pe(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Rt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const X={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{X[`${e}#ltr`]=e,X[`${e}#rtl`]=e});function xe(e,t){const o=e.split(" ");return{vertical:o[0],horizontal:X[`${o[1]}#${t===!0?"rtl":"ltr"}`]}}function Ot(e,t){let{top:o,left:a,right:n,bottom:f,width:l,height:r}=e.getBoundingClientRect();return t!==void 0&&(o-=t[1],a-=t[0],f+=t[1],n+=t[0],l+=t[0],r+=t[1]),{top:o,left:a,right:n,bottom:f,width:l,height:r,middle:a+(n-a)/2,center:o+(f-o)/2}}function Ft(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function zt(e){if(ee.is.ios===!0&&window.visualViewport!==void 0){const r=document.body.style,{offsetLeft:s,offsetTop:c}=window.visualViewport;s!==be&&(r.setProperty("--q-pe-left",s+"px"),be=s),c!==ye&&(r.setProperty("--q-pe-top",c+"px"),ye=c)}let t;const{scrollLeft:o,scrollTop:a}=e.el;if(e.absoluteOffset===void 0)t=Ot(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:r,left:s}=e.anchorEl.getBoundingClientRect(),c=r+e.absoluteOffset.top,d=s+e.absoluteOffset.left;t={top:c,left:d,width:1,height:1,right:d+1,center:c,middle:d,bottom:c+1}}let n={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(n.minWidth=t.width+"px",e.cover===!0&&(n.minHeight=t.height+"px")),Object.assign(e.el.style,n);const f=Ft(e.el),l={top:t[e.anchorOrigin.vertical]-f[e.selfOrigin.vertical],left:t[e.anchorOrigin.horizontal]-f[e.selfOrigin.horizontal]};At(l,t,f,e.anchorOrigin,e.selfOrigin),n={top:l.top+"px",left:l.left+"px"},l.maxHeight!==void 0&&(n.maxHeight=l.maxHeight+"px",t.height>l.maxHeight&&(n.minHeight=n.maxHeight)),l.maxWidth!==void 0&&(n.maxWidth=l.maxWidth+"px",t.width>l.maxWidth&&(n.minWidth=n.maxWidth)),Object.assign(e.el.style,n),e.el.scrollTop!==a&&(e.el.scrollTop=a),e.el.scrollLeft!==o&&(e.el.scrollLeft=o)}function At(e,t,o,a,n){const f=o.bottom,l=o.right,r=ct(),s=window.innerHeight-r,c=document.body.clientWidth;if(e.top<0||e.top+f>s)if(n.vertical==="center")e.top=t[a.vertical]>s/2?Math.max(0,s-f):0,e.maxHeight=Math.min(f,s);else if(t[a.vertical]>s/2){const d=Math.min(s,a.vertical==="center"?t.center:a.vertical===n.vertical?t.bottom:t.top);e.maxHeight=Math.min(f,d),e.top=Math.max(0,d-f)}else e.top=Math.max(0,a.vertical==="center"?t.center:a.vertical===n.vertical?t.top:t.bottom),e.maxHeight=Math.min(f,s-e.top);if(e.left<0||e.left+l>c)if(e.maxWidth=Math.min(l,c),n.horizontal==="middle")e.left=t[a.horizontal]>c/2?Math.max(0,c-l):0;else if(t[a.horizontal]>c/2){const d=Math.min(c,a.horizontal==="middle"?t.middle:a.horizontal===n.horizontal?t.right:t.left);e.maxWidth=Math.min(l,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,a.horizontal==="middle"?t.middle:a.horizontal===n.horizontal?t.left:t.right),e.maxWidth=Math.min(l,c-e.left)}var Dt=P({name:"QMenu",inheritAttrs:!1,props:{...yt,...kt,...Y,...Ct,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:pe},self:{type:String,validator:pe},offset:{type:Array,validator:Rt},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...qt,"click","escape-key"],setup(e,{slots:t,emit:o,attrs:a}){let n=null,f,l,r;const s=$(),{proxy:c}=s,{$q:d}=c,g=T(null),h=T(!1),u=b(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),m=J(e,d),{registerTick:C,removeTick:S}=Bt(),{registerTimeout:_,removeTimeout:i}=Et(),{transition:p,transitionStyle:y}=Lt(e,h),{localScrollTarget:V,changeScrollEvent:Le,unconfigureScrollTarget:Be}=xt(e,ue),{anchorEl:H,canShow:Ee}=pt({showing:h}),{hide:te}=wt({showing:h,canShow:Ee,handleShow:Qe,handleHide:Ve,hideOnRouteChange:u,processOnMount:!0}),{showPortal:ne,hidePortal:le,renderPortal:Pe}=St(s,g,Re),I={anchorEl:H,innerRef:g,onClickOutside(v){if(e.persistent!==!0&&h.value===!0)return te(v),(v.type==="touchstart"||v.target.classList.contains("q-dialog__backdrop"))&&ke(v),!0}},oe=b(()=>xe(e.anchor||(e.cover===!0?"center middle":"bottom start"),d.lang.rtl)),He=b(()=>e.cover===!0?oe.value:xe(e.self||"top start",d.lang.rtl)),Me=b(()=>(e.square===!0?" q-menu--square":"")+(m.value===!0?" q-menu--dark q-dark":"")),$e=b(()=>e.autoClose===!0?{onClick:We}:{}),ae=b(()=>h.value===!0&&e.persistent!==!0);k(ae,v=>{v===!0?($t(K),Wt(I)):(he(K),ge(I))});function N(){Ze(()=>{let v=g.value;v&&v.contains(document.activeElement)!==!0&&(v=v.querySelector("[autofocus], [data-autofocus]")||v,v.focus({preventScroll:!0}))})}function Qe(v){if(S(),i(),n=e.noRefocus===!1?document.activeElement:null,Qt(re),ne(),ue(),f=void 0,v!==void 0&&(e.touchPosition||e.contextMenu)){const j=Ye(v);if(j.left!==void 0){const{top:Oe,left:Fe}=H.value.getBoundingClientRect();f={left:j.left-Fe,top:j.top-Oe}}}l===void 0&&(l=k(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,W)),e.noFocus!==!0&&document.activeElement.blur(),C(()=>{W(),e.noFocus!==!0&&N()}),_(()=>{d.platform.is.ios===!0&&(r=e.autoClose,g.value.click()),W(),ne(!0),o("show",v)},e.transitionDuration)}function Ve(v){S(),i(),le(),ie(!0),n!==null&&(v===void 0||v.qClickOutside!==!0)&&(n.focus(),n=null),_(()=>{le(!0),o("hide",v)},e.transitionDuration)}function ie(v){f=void 0,l!==void 0&&(l(),l=void 0),(v===!0||h.value===!0)&&(Vt(re),Be(),ge(I),he(K)),v!==!0&&(n=null)}function ue(){(H.value!==null||e.scrollTarget!==void 0)&&(V.value=dt(H.value,e.scrollTarget),Le(V.value,W))}function We(v){r!==!0?(Tt(c,v),o("click",v)):r=!1}function re(v){ae.value===!0&&e.noFocus!==!0&&et(g.value,v.target)!==!0&&N()}function K(v){o("escape-key"),te(v)}function W(){const v=g.value;v===null||H.value===null||zt({el:v,offset:e.offset,anchorEl:H.value,anchorOrigin:oe.value,selfOrigin:He.value,absoluteOffset:f,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Re(){return w(Je,{name:p.value,appear:!0},()=>h.value===!0?w("div",{role:"menu",...a,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+Me.value,a.class],style:[a.style,y.value],...$e.value},z(t.default)):null)}return Q(ie),Object.assign(c,{focus:N,updatePosition:W}),Pe}}),It=P({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:t}){const o=b(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>w("div",{class:o.value},z(t.default))}}),Nt=P({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:t,emit:o}){const{proxy:{$q:a}}=$(),n=tt(nt,()=>{console.error("QHeader needs to be child of QLayout")}),f=T(parseInt(e.heightHint,10)),l=T(!0),r=b(()=>e.reveal===!0||n.view.value.indexOf("H")>-1||a.platform.is.ios&&n.isContainer.value===!0),s=b(()=>{if(e.modelValue!==!0)return 0;if(r.value===!0)return l.value===!0?f.value:0;const i=f.value-n.scroll.value.position;return i>0?i:0}),c=b(()=>e.modelValue!==!0||r.value===!0&&l.value!==!0),d=b(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),g=b(()=>"q-header q-layout__section--marginal "+(r.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),h=b(()=>{const i=n.rows.value.top,p={};return i[0]==="l"&&n.left.space===!0&&(p[a.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),i[2]==="r"&&n.right.space===!0&&(p[a.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),p});function u(i,p){n.update("header",i,p)}function m(i,p){i.value!==p&&(i.value=p)}function C({height:i}){m(f,i),u("size",i)}function S(i){d.value===!0&&m(l,!0),o("focusin",i)}k(()=>e.modelValue,i=>{u("space",i),m(l,!0),n.animate()}),k(s,i=>{u("offset",i)}),k(()=>e.reveal,i=>{i===!1&&m(l,e.modelValue)}),k(l,i=>{n.animate(),o("reveal",i)}),k(n.scroll,i=>{e.reveal===!0&&m(l,i.direction==="up"||i.position<=e.revealOffset||i.position-i.inflectionPoint<100)});const _={};return n.instances.header=_,e.modelValue===!0&&u("size",f.value),u("space",e.modelValue),u("offset",s.value),Q(()=>{n.instances.header===_&&(n.instances.header=void 0,u("size",0),u("offset",0),u("space",!1))}),()=>{const i=qe(t.default,[]);return e.elevated===!0&&i.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(w(ft,{debounce:0,onResize:C})),w("header",{class:g.value,style:h.value,onFocusin:S},i)}}});const Kt=ot({name:"MainLayout",setup(){return{}}}),jt=Te("Stoq UI"),Ut={class:"q-pa-md"},Gt=Te("Settings");function Xt(e,t,o,a,n,f){const l=at("router-view");return it(),ut(vt,{view:"lHh Lpr lFf"},{default:q(()=>[x(Nt,{elevated:""},{default:q(()=>[x(It,null,{default:q(()=>[x(ht,{shrink:""},{default:q(()=>[jt]),_:1}),x(fe,{dark:"",vertical:"",inset:""}),x(R,{stretch:"",flat:"",icon:"home",label:"Home",to:{name:"Index"}}),x(R,{stretch:"",flat:"",icon:"category",label:"Produtos",to:{name:"ListProducts"}}),x(R,{stretch:"",flat:"",icon:"info",label:"Sobre",to:{name:"ListProducts"}}),x(rt),st("div",Ut,[x(R,{color:"primary",icon:"settings",label:"Settings"},{default:q(()=>[x(Dt,{"auto-close":""},{default:q(()=>[x(gt,{style:{"min-width":"100px"}},{default:q(()=>[x(me,{clickable:""},{default:q(()=>[x(ve,null,{default:q(()=>[Gt]),_:1})]),_:1}),x(fe),x(me,{clickable:""},{default:q(()=>[x(ve,null,{default:q(()=>[x(R,{onClick:t[0]||(t[0]=r=>e.$router.push({name:"Login"})),color:"negative",icon:"logout",stretch:"",flat:"",label:"Sair"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1}),x(mt,null,{default:q(()=>[x(l)]),_:1})]),_:1})}var Zt=lt(Kt,[["render",Xt]]);export{Zt as default};