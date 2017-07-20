var tns=function(){function t(){for(var t,e,n,i=arguments[0]||{},a=1,o=arguments.length;a<o;a++)if(null!==(t=arguments[a]))for(e in t)n=t[e],i!==n&&void 0!==n&&(i[e]=n);return i}function e(t){return["true","false","null"].indexOf(t)>=0?JSON.parse(t):t}function n(t,e){return localStorage.setItem(t,e),e}function i(){return void 0===window.tnsId?window.tnsId=1:window.tnsId++,"tns"+window.tnsId}function a(t){var e=document.createElement("style");return t&&e.setAttribute("media",t),document.querySelector("head").appendChild(e),e.sheet?e.sheet:e.styleSheet}function o(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):"addRule"in t&&t.addRule(e,n,i)}function r(t,e){return Math.atan2(t,e)*(180/Math.PI)}function s(t,e){return Math.abs(90-Math.abs(t))>=90-e?"horizontal":Math.abs(90-Math.abs(t))<=e&&"vertical"}function l(t,e){return t.hasAttribute(e)}function c(t,e){return t.getAttribute(e)}function u(t){return void 0!==t.item}function d(t,e){if(t=u(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function f(t,e){t=u(t)||t instanceof Array?t:[t],e=e instanceof Array?e:[e];for(var n=e.length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function h(t){var e=t.cloneNode(!0);t.parentNode.insertBefore(e,t),t.remove(),t=null}function p(t){l(t,"hidden")||d(t,{hidden:""})}function m(t){l(t,"hidden")&&f(t,"hidden")}function v(t){return"boolean"==typeof t.complete?t.complete:"number"==typeof t.naturalWidth?0!==t.naturalWidth:void 0}function y(t){for(var e=document.createElement("fakeelement"),n=(t.length,0);n<t.length;n++)if(prop=t[n],void 0!==e.style[prop])return prop;return!1}function g(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}function b(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&M;t.addEventListener(n,e[n],i)}}function x(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&M;t.removeEventListener(n,e[n],i)}}function E(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){this.topics[t]&&this.topics[t].forEach(function(t){t(e)})}}}function w(t,e,n,i,a,o,r){function s(){o-=l,u+=d,t.style[e]=n+u+c+i,o>0?setTimeout(s,l):r()}var l=Math.min(o,10),c=a.indexOf("%")>=0?"%":"px",a=a.replace(c,""),u=Number(t.style[e].replace(n,"").replace(i,"").replace(c,"")),d=(a-u)/o*l;setTimeout(s,l)}!function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}(),function(){"use strict";var t,e,n,i=window,a=document,o=Object,r="length",s="item contains add remove toggle toString toLocaleString".split(" "),l=s[2],c=s[3],u=s[4],d="prototype",f="defineProperty"in o||"__defineGetter__"in o[d]||null,h=function(t,e,n,i){o.defineProperty?o.defineProperty(t,e,{configurable:!1===f||!!i,get:n}):t.__defineGetter__(e,n)},p=function(t,e){var n=this,i=[],a={},d=0,f=0,p=function(){if(d>=f)for(;f<d;++f)!function(t){h(n,t,function(){return m(),i[t]},!1)}(f)},m=function(){var n,o,s=arguments,l=/\s+/;if(s[r])for(o=0;o<s[r];++o)if(l.test(s[o]))throw n=new SyntaxError('String "'+s[o]+'" contains an invalid character'),n.code=5,n.name="InvalidCharacterError",n;for(i=(""+t[e]).replace(/^\s+|\s+$/g,"").split(l),""===i[0]&&(i=[]),a={},o=0;o<i[r];++o)a[i[o]]=!0;d=i[r],p()};return m(),h(n,r,function(){return m(),d}),n[s[6]]=n[s[5]]=function(){return m(),i.join(" ")},n.item=function(t){return m(),i[t]},n.contains=function(t){return m(),!!a[t]},n[l]=function(){m.apply(n,o=arguments);for(var o,s,l=0,c=o[r];l<c;++l)s=o[l],a[s]||(i.push(s),a[s]=!0);d!==i[r]&&(d=i[r]>>>0,t[e]=i.join(" "),p())},n[c]=function(){m.apply(n,o=arguments);for(var o,s={},l=0,c=[];l<o[r];++l)s[o[l]]=!0,delete a[o[l]];for(l=0;l<i[r];++l)s[i[l]]||c.push(i[l]);i=c,d=c[r]>>>0,t[e]=i.join(" "),p()},n[u]=function(t,e){return m.apply(n,[t]),void 0!==e?e?(n[l](t),!0):(n[c](t),!1):a[t]?(n[c](t),!1):(n[l](t),!0)},function(t,e){if(e)for(var n=0;n<7;++n)e(t,s[n],{enumerable:!1})}(n,o.defineProperty),n},m=function(t,e,n){h(t[d],e,function(){var t,i=this,o="__defineGetter__defineProperty"+e;if(i[o])return t;if(i[o]=!0,!1===f){for(var s,l=m.mirror=m.mirror||a.createElement("div"),c=l.childNodes,u=c[r],d=0;d<u;++d)if(c[d]._R===i){s=c[d];break}s||(s=l.appendChild(a.createElement("div"))),t=p.call(s,i,n)}else t=new p(i,n);return h(i,e,function(){return t}),delete i[o],t},!0)};if(i.DOMTokenList)t=a.createElement("div").classList,d=i.DOMTokenList[d],t[l].apply(t,s),2>t[r]&&(e=d[l],n=d[c],d[l]=function(){for(var t=0,n=arguments;t<n[r];++t)e.call(this,n[t])},d[c]=function(){for(var t=0,e=arguments;t<e[r];++t)n.call(this,e[t])}),t[u]("List",!1)&&(d[u]=function(t,e){var n=this;return n[(e=void 0===e?!n.contains(t):e)?l:c](t),!!e});else{if(f)try{h({},"support")}catch(t){f=!1}p.polyfill=!0,i.DOMTokenList=p,m(i.Element,"classList","className"),m(i.HTMLLinkElement,"relList","rel"),m(i.HTMLAnchorElement,"relList","rel"),m(i.HTMLAreaElement,"relList","rel")}}();var C=!1;try{var T=Object.defineProperty({},"passive",{get:function(){C=!0}});window.addEventListener("test",null,T)}catch(t){}var M=!!C&&{passive:!0},D=navigator.userAgent,L=localStorage;L.tnsApp?L.tnsApp!==D&&(L.tnsApp=D,["tnsCalc","tnsSubpixel","tnsCSSMQ","tnsTf","tnsTsDu","tnsTsDe","tnsAnDu","tnsAnDe","tnsTsEn","tnsAnEn"].forEach(function(t){L.removeItem(t)})):L.tnsApp=D;var S=document,A={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},N=e(L.tnsCalc||n("tnsCalc",function(){var t=document,e=t.body,n=t.createElement("div"),i=!1;e.appendChild(n);try{for(var a,o=["calc(10px)","-moz-calc(10px)","-webkit-calc(10px)"],r=0;r<3;r++)if(a=o[r],n.style.width=a,10===n.offsetWidth){i=a.replace("(10px)","");break}}catch(t){}return e.removeChild(n),i}())),k=e(L.tnsSubpixel||n("tnsSubpixel",function(){var t,e=document,n=e.body,i=e.createElement("div"),a=e.createElement("div");i.style.cssText="width: 10px",a.style.cssText="float: left; width: 5.5px; height: 10px;",t=a.cloneNode(!0),i.appendChild(a),i.appendChild(t),n.appendChild(i);var o=a.offsetTop!==t.offsetTop;return n.removeChild(i),o}())),O=e(L.tnsCSSMQ||n("tnsCSSMQ",function(){var t=document,e=t.body,n=t.createElement("div");n.className="tns-mq-test",e.appendChild(n);var i=window.getComputedStyle?window.getComputedStyle(n).position:n.currentStyle.position;return e.removeChild(n),"absolute"===i}())),P=e(L.tnsTf||n("tnsTf",y(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]))),I=e(L.tnsTsDu||n("tnsTsDu",y(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]))),z=e(L.tnsTsDe||n("tnsTsDe",y(["transitionDelay","WebkitTransitionDelay","MozTransitionDelay","OTransitionDelay"]))),R=e(L.tnsAnDu||n("tnsAnDu",y(["animationDuration","WebkitAnimationDuration","MozAnimationDuration","OAnimationDuration"]))),H=e(L.tnsAnDe||n("tnsAnDe",y(["animationDelay","WebkitAnimationDelay","MozAnimationDelay","OAnimationDelay"]))),W=e(L.tnsTsEn||n("tnsTsEn",g(I,"Transition"))),B=e(L.tnsAnEn||n("tnsAnEn",g(R,"Animation")));return O||(k=!1),function(e){function n(t){clearTimeout(Nt),Nt=setTimeout(function(){At!==u()&&(l(),"outer"===_t&&ve.emit("outerResized",Ct(t)))},100)}function l(){At=u();var t=ce,e=jt;(Jt||Ut)&&(jt=nn()),Pt||(j(),xt(),Y()),Ut&&qt&&bt(),M(),Jt&&jt!==e&&(ve.emit("itemsChanged"),y(),an(),Ut||O||C(),K(0),_(),T(),wt(),F(),ce!==t&&(ve.emit("indexChanged",Ct()),q()),navigator.msMaxTouchPoints&&G())}function u(){return zt.clientWidth}function y(){if(Bt<=jt){Xt=!1;ce=Ot?ne:0,void 0!==ce&&ve.emit("indexChanged",Ct()),Ae&&p(Ae),De&&p(De),Ge&&p(Ge)}else Xt=e.arrowKeys,Se&&m(Ae),Te&&m(De),Re&&m(Ge)}function g(t){return(t.cssRules?t.cssRules:t.rules).length}function C(){Rt.style.width=100*ie/jt+"%"}function T(){if(te){var t=ce,e=ce+jt;for(qt&&(t-=1,e+=1);t<e;t++)[].forEach.call(Wt[t].querySelectorAll(".tns-lazy-img"),function(t){var e={};e[W]=function(t){t.stopPropagation()},b(t,e),t.classList.contains("loaded")||(t.src=c(t,"data-src"),t.classList.add("loaded"))})}}function M(){if(Vt){for(var t=[],e=ce;e<ce+jt;e++)[].forEach.call(Wt[e].querySelectorAll("img"),function(e){t.push(e)});0===t.length?L():D(t)}}function D(t){t.forEach(function(e,n){v(e)&&t.splice(n,1)}),0===t.length?L():setTimeout(function(){D(t)},16)}function L(){for(var t,e=[],n=ce;n<ce+jt;n++)e.push(Wt[n].offsetHeight);t=Math.max.apply(null,e),Rt.style.height!==t&&(I&&U(Yt),Rt.style.height=t+"px")}function j(){St=[0];for(var t,e=Wt[0].getBoundingClientRect().top,n=1;n<ie;n++)t=Wt[n].getBoundingClientRect().top,St.push(t-e)}function G(){It.style.msScrollSnapPointsX="snapInterval(0%, "+100/jt+"%)"}function _(){var t,e,n,i;ce!==ue&&(ce>ue?(t=ue,e=Math.min(ue+jt,ce),n=Math.max(ue+jt,ce),i=ce+jt):(t=Math.max(ce+jt,ue),e=ue+jt,n=ce,i=Math.min(ce+jt,ue))),Gt%1!=0&&(t=Math.round(t),e=Math.round(e),n=Math.round(n),i=Math.round(i));for(var a=t;a<e;a++)d(Wt[a],{"aria-hidden":"true",tabindex:"-1"});for(var o=n;o<i;o++)d(Wt[o],{"aria-hidden":"false"}),f(Wt[o],["tabindex"])}function F(){Se&&(Pe=Oe!==-1?Oe:!Qt&&qt?(ce-1)%Bt:ce%Bt,Oe=-1,Pe!==Ie&&(d(Le[Ie],{tabindex:"-1","aria-selected":"false"}),d(Le[Pe],{tabindex:"0","aria-selected":"true"}),Ie=Pe))}function q(){if(Te&&!Qt){var t=[],e=[];ce===fe?(t.push(we),e.push(Ce),ct(we,Ce)):Kt||ce!==he?e.push(we,Ce):(t.push(Ce),e.push(we),ct(Ce,we)),t.length>0&&t.forEach(function(t){t.disabled||(t.disabled=!0)}),e.length>0&&e.forEach(function(t){t.disabled&&(t.disabled=!1)})}}function U(t,e){t=t?t/1e3+"s":"",e=e||Rt,e.style[I]=t,Ot||(e.style[R]=t),Pt||(zt.style[I]=t)}function X(){var t;if(Pt)if(Ut)t=-Ut*ce+"px";else{var e=P?ie:jt;t=100*-ce/e+"%"}else t=-St[ce]+"px";return t}function Y(t){t||(t=X()),Rt.style[re]=se+t+le}function K(t,e){void 0===t&&(t=Yt),I&&U(t),on(t,e)}function Q(){pe=!0,oe&&an(),ce!==ue&&ve.emit("indexChanged",Ct()),ve.emit("transitionStart",Ct()),K()}function V(t){function e(t){return t.toLowerCase().replace(/-/g,"")}if(ve.emit("transitionEnd",Ct(t)),!Ot&&ee.length>0)for(var n=0;n<jt;n++){var i=ee[n];i.style.left="",I&&U(0,i),Lt&&z&&(i.style[z]=i.style[H]=""),i.classList.remove(Mt),i.classList.add(Dt)}if(!t||!Ot&&t.target.parentNode===Rt||t.target===Rt&&e(t.propertyName)===e(re)){if(!oe){var a=ce;an(),ce!==a&&(K(0),ve.emit("indexChanged",Ct()))}_(),(Se&&!Qt||Se&&Qt&&Ne.indexOf(ce%Bt)===-1)&&wt(),F(),q(),T(),M(),"inner"===_t&&ve.emit("innerLoaded",Ct()),pe=!1,ue=ce}}function J(t){if(!pe){var e,n=ce%Bt;switch(n<0&&(n+=Bt),t){case"next":e=1;break;case"prev":e=-1;break;case"first":e=-n;break;case"last":e=Bt-1-n;break;default:if("number"==typeof t){var i=t%Bt;i<0&&(i+=Bt),!Qt&&qt&&(i+=1),e=i-n}}ce+=e,oe&&an(),ce%Bt!=ue%Bt&&Q()}}function $(t){pe||(ce+=t*Gt,Q())}function Z(){$(-1)}function tt(){Kt&&ce===he?J(0):$(1)}function et(t){if(!pe){for(var e,n=t.target||t.srcElement;null===c(n,"data-nav");)n=n.parentNode;e=Oe=Number(c(n,"data-nav")),J(e)}}function nt(){ot(),d(Ge,{"data-action":"stop"}),Ge.innerHTML=qe+Be[1],_e=!0}function it(){at(),d(Ge,{"data-action":"start"}),Ge.innerHTML=qe.replace("Stop","Start")+Be[0],_e=!1}function at(){_e="paused",clearInterval(ze)}function ot(){_e!==!0&&(clearInterval(ze),ze=setInterval(function(){$(We)},He))}function rt(){_e?it():nt()}function st(){Xe!=S.hidden&&_e!==!1&&(S.hidden?at():ot()),Xe=S.hidden}function lt(t){switch(t=t||window.event,t.keyCode){case A.LEFT:Z();break;case A.RIGHT:tt()}}function ct(t,e){"object"==typeof t&&"object"==typeof e&&t===S.activeElement&&(t.blur(),e.focus())}function ut(t){t=t||window.event;var e=t.keyCode;S.activeElement;switch(e){case A.LEFT:case A.UP:case A.PAGEUP:we.disabled||Z();break;case A.RIGHT:case A.DOWN:case A.PAGEDOWN:Ce.disabled||tt();break;case A.HOME:J(0);break;case A.END:J(Bt-1)}}function dt(t){t=t||window.event;var e=t.keyCode,n=S.activeElement,i=Number(c(n,"data-nav")),a=Ne.length,o=Ne.indexOf(i);switch(e){case A.LEFT:case A.PAGEUP:o>0&&ct(n,Le[Ne[o-1]]);break;case A.UP:case A.HOME:o>0&&ct(n,Le[Ne[0]]);break;case A.RIGHT:case A.PAGEDOWN:o<a-1&&ct(n,Le[Ne[o+1]]);break;case A.DOWN:case A.END:o<a-1&&ct(n,Le[Ne[a-1]]);break;case A.ENTER:case A.SPACE:et(t)}}function ft(){K(0,Rt.scrollLeft()),ue=ce}function ht(t){return t.target||t.srcElement}function pt(t){return"a"===t.tagName.toLowerCase()}function mt(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function vt(t){t=t||window.event,pt(ht(t))&&"touchstart"!==t.type&&mt(t);var e="touchstart"===t.type?t.changedTouches[0]:t;Je=parseInt(e.clientX),$e=parseInt(e.clientY),Ye=Number(Rt.style[re].replace(se,"").replace(le,"").replace(/(px|%)/g,"")),"touchstart"===t.type?ve.emit("touchStart",Ct(t)):(ve.emit("dragStart",Ct(t)),tn=!0)}function yt(t){if(t=t||window.event,tn&&"mousemove"===t.type&&!en&&(en=!0),null!==Je){pt(ht(t))&&"touchmove"!==t.type&&mt(t);var n="touchmove"===t.type?t.changedTouches[0]:t;if(Ke=parseInt(n.clientX)-Je,Qe=parseInt(n.clientY)-$e,s(r(Qe,Ke),15)===e.axis){kt=!0,"touchmove"===t.type?ve.emit("touchMove",Ct(t)):ve.emit("dragMove",Ct(t));var i=Ye;if(Pt)if(Ut)i+=Ke,i+="px";else{var a=P?Ke*jt*100/(At*ie):100*Ke/At;i+=a,i+="%"}else i+=Qe,i+="px";P&&U(0),Rt.style[re]=se+i+le}}}function gt(t){if(t=t||window.event,tn&&(tn=!1),kt){kt=!1;var e=0===t.type.indexOf("touch")?t.changedTouches[0]:t;if(Ke=parseInt(e.clientX)-Je,Qe=parseInt(e.clientY)-$e,Je=$e=null,Pt){var n=-Ke*jt/At;n=Ke>0?Math.floor(n):Math.ceil(n),ce+=n}else{var i=-(Ye+Qe);if(i<=0)ce=fe;else if(i>=St[St.length-1])ce=he;else{var a=0;do{a++,ce=Qe<0?a+1:a}while(a<ie&&i>=St[a+1])}}0===t.type.indexOf("touch")?ve.emit("touchEnd",Ct(t)):ve.emit("dragEnd",Ct(t)),Q()}if(en){en=!1;var o=ht(t);pt(o)&&b(o,{click:function t(e){mt(e),x(o,{click:t})}})}}function bt(){zt.style.cssText+="margin: 0px "+(It.clientWidth%Ut+Ft)/2+"px"}function xt(){zt.style.height=St[ce+jt]-St[ce]+"px"}function Et(){Ne=[];for(var t=!Qt&&qt?ce-1:ce,e=t%Bt%jt;e<Bt;)!Qt&&e+jt>Bt&&(e=Bt-jt),Ne.push(e),e+=jt;(Qt&&Ne.length*jt<Bt||!Qt&&Ne[0]>0)&&Ne.unshift(0)}function wt(){Se&&!e.navContainer&&(Et(),Ne!==ke&&(ke.length>0&&ke.forEach(function(t){d(Le[t],{hidden:""})}),Ne.length>0&&Ne.forEach(function(t){f(Le[t],"hidden")}),ke=Ne))}function Ct(t){return{container:Rt,slideItems:Wt,navItems:Le,prevButton:we,nextButton:Ce,items:jt,slideBy:Gt,index:ce,indexCached:ue,navCurrent:Pe,navCurrentCached:Ie,slideCount:Bt,cloneCount:ne,slideCountNew:ie,event:t||{}}}if(e=t({container:S.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,nested:!1,onInit:!1},e||{}),"object"==typeof e.container&&null!==e.container){if("gallery"===e.mode){e.axis="horizontal",e.edgePadding=!1,e.loop=!0,e.autoHeight=!0,e.slideBy="page";var Tt="tns-fadeIn",Mt="tns-fadeOut",Dt="tns-normal",Lt=!1;R&&(Tt=e.animateIn,Mt=e.animateOut,Dt=e.animateNormal,Lt=e.animateDelay)}var St,At,Nt,kt,Ot="carousel"===e.mode,Pt="horizontal"===e.axis,It=S.createElement("div"),zt=S.createElement("div"),Rt=e.container,Ht=Rt.parentNode,Wt=Rt.children,Bt=Wt.length,jt=e.items,Gt="page"===e.slideBy?jt:e.slideBy,_t=e.nested,Ft=e.gutter,qt=e.edgePadding,Ut=!!e.fixedWidth&&e.fixedWidth+Number(e.gutter),Xt=e.arrowKeys,Yt=e.speed,Kt=e.rewind,Qt=!e.rewind&&e.loop,Vt=e.autoHeight,Jt=!Ut&&e.responsive,$t=!1,Zt=a(),te=e.lazyload,ee=[],ne=Qt?2*Bt:qt?1:0,ie=Ot?Bt+2*ne:Bt+ne,ae=!(!Ut||Qt||qt),oe=!Ot||!Qt,re=Pt?"left":"top",se="",le="",ce=Ot?ne:0,ue=ce,de=qt?1:0,fe=de,he=ie-jt-de,pe=!1,me=e.onInit,ve=new E,ye=Rt.id,ge=Rt.className,be=Wt[0].id,xe=Wt[0].className,Ee=Rt.id||i();if(Jt&&(Jt[0]||(Jt[0]=Math.min(e.items,Bt)),$t=Object.keys(Jt).sort(function(t,e){return t-e})),e.controls)var we,Ce,Te=e.controls,Me=e.controlsText,De=!!e.controlsContainer&&e.controlsContainer;if(e.nav)var Le,Se=e.nav,Ae=e.navContainer||!1,Ne=[],ke=Ne,Oe=-1,Pe=0,Ie=0;if(e.autoplay)var ze,Re=e.autoplay,He=e.autoplayTimeout,We="forward"===e.autoplayDirection?1:-1,Be=e.autoplayText,je=e.autoplayHoverPause,Ge=e.autoplayButton,_e=!1,Fe=!1,qe="<span hidden>Stop Animation</span>",Ue=e.autoplayResetOnVisibility,Xe=!1;if(e.touch)var Ye,Ke,Qe,Ve=e.touch,Je=null,$e=null;if(e.mouseDrag)var Ze=e.mouseDrag,tn=!1,en=!1;P&&(re=P,se="translate",se+=Pt?"X(":"Y(",le=")");var nn=function(){return Ut?function(){return Math.max(1,Math.min(Bt,Math.floor(At/Ut)))}:function(){var t;return $t.forEach(function(e){At>=e&&(t=Jt[e])}),Math.max(1,Math.min(Bt,t))}}();ve.on("itemsChanged",function(){he=ie-jt-de,"page"===e.slideBy&&(Gt=jt)}),function(){It.appendChild(zt),Ht.insertBefore(It,Rt),zt.appendChild(Rt);var t=Pt?"tns-outer tns-hdx":"tns-outer";if(It.className=t,t=Pt?"tns-inner":"tns-inner tns-hdy",zt.className=t,""===Rt.id&&(Rt.id=Ee),t=" tns-slider tns-"+e.mode,t+=k?" tns-subpixel":" tns-no-subpixel",t+=N?" tns-calc":" tns-no-calc",Ot&&(t+=" tns-"+e.axis),Ot&&Vt&&(t+=" tns-hdy"),Rt.className+=t,qt)if(Ut)bt();else{var i=qt+Ft,a=qt;zt.style.cssText+=Pt?"margin: 0 "+a+"px 0 "+i+"px":"padding: "+i+"px 0 "+a+"px 0"}At=u();for(var r=0;r<Bt;r++){var s=Wt[r];s.id=Ee+"-item"+r,s.classList.add("tns-item"),!Ot&&Dt&&s.classList.add(Dt),d(s,{"aria-hidden":"true",tabindex:"-1"})}if(Qt||qt){for(var c=S.createDocumentFragment(),h=S.createDocumentFragment(),p=ne;p--;){var m=p%Bt,v=Wt[m].cloneNode(!0);if(f(v,"id"),h.insertBefore(v,h.firstChild),Ot){var x=Wt[Bt-1-m].cloneNode(!0);f(x,"id"),c.appendChild(x)}}Rt.insertBefore(c,Rt.firstChild),Rt.appendChild(h),Wt=Rt.children}(Jt||Ut)&&(jt=nn(),ve.emit("itemsChanged"));for(var E=ce;E<ce+jt;E++){var s=Wt[E];d(s,{"aria-hidden":"false"}),f(s,["tabindex"]),Ot||(s.style.left=100*(E-ce)/jt+"%",s.classList.remove(Dt),s.classList.add(Tt))}if(Pt){var w=(stringSlideFontSize=stringSlideGutter="","width:"),D=Math.min(e.items,Bt);if(Ot){var L=stringContainerFontSize="";if(L+="width:",Ut?(L+=Ut*ie+"px",w+=Ut+"px"):(O?L+=N?N+"("+100*ie+"% / "+D+")":100*ie/D+"%":C(),w+=N?N+"(100% / "+ie+")":100/ie+"%"),L+=";",k){var A=window.getComputedStyle(Wt[0]).fontSize;A.indexOf("em")!==-1&&(A=16*Number(A.replace(/r?em/,""))+"px"),stringContainerFontSize=" font-size: 0;",stringSlideFontSize=" font-size: "+A+";"}o(Zt,"#"+Ee,L+stringContainerFontSize,g(Zt))}else w+=N?N+"(100% / "+D+")":100/D+"%";if(w+=";",Ft&&(qt||Ut||(zt.style.marginRight=-Ft+"px"),stringSlideGutter="padding-right: "+Ft+"px;"),o(Zt,"#"+Ee+" .tns-item",w+stringSlideGutter+stringSlideFontSize,g(Zt)),Ot&&!k)for(var P=0;P<Wt.length;P++){var I=N?N+"("+100*P+"% / "+ie+")":100*P/ie+"%";O?Zt.insertRule("#"+Ee+" .tns-item:nth-child("+(P+1)+") { margin-left: "+I+"; }",Zt.cssRules.length):Wt[P].style.marginLeft=I}if(Jt&&O)for(var z=$t.length,E=0;E<z;E++){var R,H=$t[E],B=Jt[H];R=N?N+"(100% * "+ie+" / "+B+")":100*ie/B+"%",R="#"+Ee+"{width: "+R+"}",Zt.insertRule("@media (min-width: "+H/16+"em) {"+R+"}",Zt.cssRules.length)}}else Ft&&(qt||(zt.style.marginBottom=-Ft+"px"),o(Zt,"#"+Ee+" .tns-item","margin-bottom: "+Ft+"px;",0)),j(),xt();if(Ot&&Y(),navigator.msMaxTouchPoints&&(It.classList.add("ms-touch"),b(It,{scroll:ft}),G()),Se){if(e.navContainer)d(Ae,{"aria-label":"Carousel Pagination"}),Le=Ae.children,[].forEach.call(Le,function(t,e){d(t,{"data-nav":e,tabindex:"-1","aria-selected":"false","aria-controls":Ee+"-item"+e})});else{for(var _="",E=0;E<Bt;E++)_+='<button data-nav="'+E+'" tabindex="-1" aria-selected="false" aria-controls="'+Ee+"-item"+E+'" hidden type="button"></button>';_='<div class="tns-nav" aria-label="Carousel Pagination">'+_+"</div>",It.insertAdjacentHTML("afterbegin",_),[].forEach.call(It.children,function(t){t.classList.contains("tns-nav")&&(Ae=t)}),Le=Ae.children,wt()}d(Le[0],{tabindex:"0","aria-selected":"true"})}if(Re&&(Ge?d(Ge,{"data-action":"stop"}):(Ae||(It.insertAdjacentHTML("afterbegin",'<div class="tns-nav" aria-label="Carousel Pagination"></div>'),Ae=It.querySelector(".tns-nav")),Ae.insertAdjacentHTML("beforeend",'<button data-action="stop" type="button">'+qe+Be[0]+"</button>"),Ge=Ae.querySelector("[data-action]")),nt()),Te&&(e.controlsContainer?(we=De.children[0],Ce=De.children[1],d(De,{"aria-label":"Carousel Navigation",tabindex:"0"}),d(we,{"data-controls":"prev"}),d(Ce,{"data-controls":"next"}),d(De.children,{"aria-controls":Ee,tabindex:"-1"})):(It.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+Ee+'" type="button">'+Me[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+Ee+'" type="button">'+Me[1]+"</button></div>"),[].forEach.call(It.children,function(t){t.classList.contains("tns-controls")&&(De=t)}),we=De.children[0],Ce=De.children[1]),Qt||(we.disabled=!0)),Ot){if(W){var F={};F[W]=V,b(Rt,F)}Ve&&b(Rt,{touchstart:vt,touchmove:yt,touchend:gt,touchcancel:gt}),Ze&&b(Rt,{mousedown:vt,mousemove:yt,mouseup:gt,mouseleave:gt})}if(Se)for(var q=0;q<Bt;q++)b(Le[q],{click:et,keydown:dt});Te&&(b(De,{keydown:ut}),b(we,{click:Z}),b(Ce,{click:tt})),Re&&(b(Ge,{click:rt}),je&&(b(Rt,{mouseover:function(){_e&&(it(),Fe=!0)}}),b(Rt,{mouseout:function(){!_e&&Fe&&(nt(),Fe=!1)}})),Ue&&b(document,{visibilitychange:st})),Xt&&b(document,{keydown:lt}),"inner"===_t?ve.on("outerResized",function(){l(),ve.emit("innerLoaded",Ct())}):(b(window,{resize:n}),"outer"===_t&&ve.on("innerLoaded",M)),y(),T(),M(),"function"==typeof me&&me(Ct()),"inner"===_t&&ve.emit("innerLoaded",Ct())}();var an=function(){return Qt?function(){var t=fe,e=he;if(Ot&&(t+=Gt,e-=Gt),Ut&&At%(Ut+Ft)!=0&&(e-=1),ce>e)for(;ce>=t+Bt;)ce-=Bt;else if(ce<t)for(;ce<=e-Bt;)ce+=Bt}:function(){ce=Math.max(fe,Math.min(he,ce))}}(),on=function(){return Ot?function(t,e){if(e||(e=X()),ae&&ce===he){var n=P?100*-((ie-jt)/ie):100*-(ie/jt-1);e=Math.max(Number(e.replace("%","")),n)+"%"}I||!t?(Y(e),0===Yt&&V()):w(Rt,re,se,le,e,Yt,V),Pt||xt()}:function(){ee=[];var t={};t[W]=t[B]=V,x(Wt[ue],t),b(Wt[ce],t),function(){for(var t=ue,e=ue+jt;t<e;t++){var n=Wt[t];if(I&&U(Yt,n),Lt&&z){var i=Lt*(t-ue)/1e3;n.style[z]=i+"s",n.style[H]=i+"s"}n.classList.remove(Tt),n.classList.add(Mt),ee.push(n)}}(),function(){for(var t=ce,e=ce+jt;t<e;t++){var n=Wt[t];if(n.style.left=100*(t-ce)/jt+"%",I&&U(Yt,n),Lt&&z){var i=Lt*(t-ce)/1e3;n.style[z]=i+"s",n.style[H]=i+"s"}n.classList.remove(Dt),n.classList.add(Tt)}}(),W&&0!==Yt||setTimeout(V,Yt)}}();return{getInfo:Ct,events:ve,goTo:J,destroy:function(){if(Zt.disabled=!0,Ht.insertBefore(Rt,It),It.remove(),It=zt=null,Rt.id=ye||"",Rt.className=ge||"",f(Rt,["style"]),Qt)for(var t=ne;t--;)Wt[0].remove(),Wt[Wt.length-1].remove();for(var i=Bt;i--;)Wt[i].id=be||"",Wt[i].className=xe||"";f(Wt,["style","aria-hidden","tabindex"]),Ee=Bt=null,Te&&(e.controlsContainer?(f(De,["aria-label","tabindex"]),f(De.children,["aria-controls","tabindex"]),h(De)):De=we=Ce=null),Se&&(e.navContainer?(f(Ae,["aria-label"]),f(Le,["aria-selected","aria-controls","tabindex"]),h(Ae)):Ae=null,Le=null),Re&&(e.navContainer?h(Ge):Ae=null,x(document,{visibilitychange:st})),h(Rt),Xt&&x(document,{keydown:lt}),x(window,{resize:n})}}}}}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
