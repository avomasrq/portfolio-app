(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function ym(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ac={exports:{}},Ao={},lc={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function U_(){if(dp)return ft;dp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,R={};function S(U,te,Ue){this.props=U,this.context=te,this.refs=R,this.updater=Ue||y}S.prototype.isReactComponent={},S.prototype.setState=function(U,te){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,te,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=S.prototype;function I(U,te,Ue){this.props=U,this.context=te,this.refs=R,this.updater=Ue||y}var D=I.prototype=new g;D.constructor=I,w(D,S.prototype),D.isPureReactComponent=!0;var P=Array.isArray,X=Object.prototype.hasOwnProperty,B={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function j(U,te,Ue){var K,ue={},Me=null,ve=null;if(te!=null)for(K in te.ref!==void 0&&(ve=te.ref),te.key!==void 0&&(Me=""+te.key),te)X.call(te,K)&&!F.hasOwnProperty(K)&&(ue[K]=te[K]);var Te=arguments.length-2;if(Te===1)ue.children=Ue;else if(1<Te){for(var Ie=Array(Te),Ze=0;Ze<Te;Ze++)Ie[Ze]=arguments[Ze+2];ue.children=Ie}if(U&&U.defaultProps)for(K in Te=U.defaultProps,Te)ue[K]===void 0&&(ue[K]=Te[K]);return{$$typeof:s,type:U,key:Me,ref:ve,props:ue,_owner:B.current}}function C(U,te){return{$$typeof:s,type:U.type,key:te,ref:U.ref,props:U.props,_owner:U._owner}}function A(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function z(U){var te={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ue){return te[Ue]})}var oe=/\/+/g;function J(U,te){return typeof U=="object"&&U!==null&&U.key!=null?z(""+U.key):te.toString(36)}function fe(U,te,Ue,K,ue){var Me=typeof U;(Me==="undefined"||Me==="boolean")&&(U=null);var ve=!1;if(U===null)ve=!0;else switch(Me){case"string":case"number":ve=!0;break;case"object":switch(U.$$typeof){case s:case e:ve=!0}}if(ve)return ve=U,ue=ue(ve),U=K===""?"."+J(ve,0):K,P(ue)?(Ue="",U!=null&&(Ue=U.replace(oe,"$&/")+"/"),fe(ue,te,Ue,"",function(Ze){return Ze})):ue!=null&&(A(ue)&&(ue=C(ue,Ue+(!ue.key||ve&&ve.key===ue.key?"":(""+ue.key).replace(oe,"$&/")+"/")+U)),te.push(ue)),1;if(ve=0,K=K===""?".":K+":",P(U))for(var Te=0;Te<U.length;Te++){Me=U[Te];var Ie=K+J(Me,Te);ve+=fe(Me,te,Ue,Ie,ue)}else if(Ie=x(U),typeof Ie=="function")for(U=Ie.call(U),Te=0;!(Me=U.next()).done;)Me=Me.value,Ie=K+J(Me,Te++),ve+=fe(Me,te,Ue,Ie,ue);else if(Me==="object")throw te=String(U),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return ve}function he(U,te,Ue){if(U==null)return U;var K=[],ue=0;return fe(U,K,"","",function(Me){return te.call(Ue,Me,ue++)}),K}function se(U){if(U._status===-1){var te=U._result;te=te(),te.then(function(Ue){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ue)},function(Ue){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ue)}),U._status===-1&&(U._status=0,U._result=te)}if(U._status===1)return U._result.default;throw U._result}var le={current:null},k={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:k,ReactCurrentOwner:B};function re(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:he,forEach:function(U,te,Ue){he(U,function(){te.apply(this,arguments)},Ue)},count:function(U){var te=0;return he(U,function(){te++}),te},toArray:function(U){return he(U,function(te){return te})||[]},only:function(U){if(!A(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ft.Component=S,ft.Fragment=n,ft.Profiler=a,ft.PureComponent=I,ft.StrictMode=r,ft.Suspense=p,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,ft.act=re,ft.cloneElement=function(U,te,Ue){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var K=w({},U.props),ue=U.key,Me=U.ref,ve=U._owner;if(te!=null){if(te.ref!==void 0&&(Me=te.ref,ve=B.current),te.key!==void 0&&(ue=""+te.key),U.type&&U.type.defaultProps)var Te=U.type.defaultProps;for(Ie in te)X.call(te,Ie)&&!F.hasOwnProperty(Ie)&&(K[Ie]=te[Ie]===void 0&&Te!==void 0?Te[Ie]:te[Ie])}var Ie=arguments.length-2;if(Ie===1)K.children=Ue;else if(1<Ie){Te=Array(Ie);for(var Ze=0;Ze<Ie;Ze++)Te[Ze]=arguments[Ze+2];K.children=Te}return{$$typeof:s,type:U.type,key:ue,ref:Me,props:K,_owner:ve}},ft.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:u,_context:U},U.Consumer=U},ft.createElement=j,ft.createFactory=function(U){var te=j.bind(null,U);return te.type=U,te},ft.createRef=function(){return{current:null}},ft.forwardRef=function(U){return{$$typeof:d,render:U}},ft.isValidElement=A,ft.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:se}},ft.memo=function(U,te){return{$$typeof:m,type:U,compare:te===void 0?null:te}},ft.startTransition=function(U){var te=k.transition;k.transition={};try{U()}finally{k.transition=te}},ft.unstable_act=re,ft.useCallback=function(U,te){return le.current.useCallback(U,te)},ft.useContext=function(U){return le.current.useContext(U)},ft.useDebugValue=function(){},ft.useDeferredValue=function(U){return le.current.useDeferredValue(U)},ft.useEffect=function(U,te){return le.current.useEffect(U,te)},ft.useId=function(){return le.current.useId()},ft.useImperativeHandle=function(U,te,Ue){return le.current.useImperativeHandle(U,te,Ue)},ft.useInsertionEffect=function(U,te){return le.current.useInsertionEffect(U,te)},ft.useLayoutEffect=function(U,te){return le.current.useLayoutEffect(U,te)},ft.useMemo=function(U,te){return le.current.useMemo(U,te)},ft.useReducer=function(U,te,Ue){return le.current.useReducer(U,te,Ue)},ft.useRef=function(U){return le.current.useRef(U)},ft.useState=function(U){return le.current.useState(U)},ft.useSyncExternalStore=function(U,te,Ue){return le.current.useSyncExternalStore(U,te,Ue)},ft.useTransition=function(){return le.current.useTransition()},ft.version="18.3.1",ft}var hp;function Lf(){return hp||(hp=1,lc.exports=U_()),lc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function I_(){if(pp)return Ao;pp=1;var s=Lf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var _,v={},x=null,y=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(y=p.ref);for(_ in p)r.call(p,_)&&!u.hasOwnProperty(_)&&(v[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)v[_]===void 0&&(v[_]=p[_]);return{$$typeof:e,type:d,key:x,ref:y,props:v,_owner:a.current}}return Ao.Fragment=n,Ao.jsx=f,Ao.jsxs=f,Ao}var mp;function N_(){return mp||(mp=1,ac.exports=I_()),ac.exports}var nt=N_(),Oi=Lf();const Yr=ym(Oi);var ja={},uc={exports:{}},Cn={},cc={exports:{}},fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function F_(){return gp||(gp=1,function(s){function e(k,ae){var re=k.length;k.push(ae);e:for(;0<re;){var U=re-1>>>1,te=k[U];if(0<a(te,ae))k[U]=ae,k[re]=te,re=U;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var ae=k[0],re=k.pop();if(re!==ae){k[0]=re;e:for(var U=0,te=k.length,Ue=te>>>1;U<Ue;){var K=2*(U+1)-1,ue=k[K],Me=K+1,ve=k[Me];if(0>a(ue,re))Me<te&&0>a(ve,ue)?(k[U]=ve,k[Me]=re,U=Me):(k[U]=ue,k[K]=re,U=K);else if(Me<te&&0>a(ve,re))k[U]=ve,k[Me]=re,U=Me;else break e}}return ae}function a(k,ae){var re=k.sortIndex-ae.sortIndex;return re!==0?re:k.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],_=1,v=null,x=3,y=!1,w=!1,R=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(k){for(var ae=n(m);ae!==null;){if(ae.callback===null)r(m);else if(ae.startTime<=k)r(m),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=n(m)}}function P(k){if(R=!1,D(k),!w)if(n(p)!==null)w=!0,se(X);else{var ae=n(m);ae!==null&&le(P,ae.startTime-k)}}function X(k,ae){w=!1,R&&(R=!1,g(j),j=-1),y=!0;var re=x;try{for(D(ae),v=n(p);v!==null&&(!(v.expirationTime>ae)||k&&!z());){var U=v.callback;if(typeof U=="function"){v.callback=null,x=v.priorityLevel;var te=U(v.expirationTime<=ae);ae=s.unstable_now(),typeof te=="function"?v.callback=te:v===n(p)&&r(p),D(ae)}else r(p);v=n(p)}if(v!==null)var Ue=!0;else{var K=n(m);K!==null&&le(P,K.startTime-ae),Ue=!1}return Ue}finally{v=null,x=re,y=!1}}var B=!1,F=null,j=-1,C=5,A=-1;function z(){return!(s.unstable_now()-A<C)}function oe(){if(F!==null){var k=s.unstable_now();A=k;var ae=!0;try{ae=F(!0,k)}finally{ae?J():(B=!1,F=null)}}else B=!1}var J;if(typeof I=="function")J=function(){I(oe)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,he=fe.port2;fe.port1.onmessage=oe,J=function(){he.postMessage(null)}}else J=function(){S(oe,0)};function se(k){F=k,B||(B=!0,J())}function le(k,ae){j=S(function(){k(s.unstable_now())},ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(k){k.callback=null},s.unstable_continueExecution=function(){w||y||(w=!0,se(X))},s.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<k?Math.floor(1e3/k):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(k){switch(x){case 1:case 2:case 3:var ae=3;break;default:ae=x}var re=x;x=ae;try{return k()}finally{x=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(k,ae){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var re=x;x=k;try{return ae()}finally{x=re}},s.unstable_scheduleCallback=function(k,ae,re){var U=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?U+re:U):re=U,k){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=re+te,k={id:_++,callback:ae,priorityLevel:k,startTime:re,expirationTime:te,sortIndex:-1},re>U?(k.sortIndex=re,e(m,k),n(p)===null&&k===n(m)&&(R?(g(j),j=-1):R=!0,le(P,re-U))):(k.sortIndex=te,e(p,k),w||y||(w=!0,se(X))),k},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(k){var ae=x;return function(){var re=x;x=ae;try{return k.apply(this,arguments)}finally{x=re}}}}(fc)),fc}var _p;function O_(){return _p||(_p=1,cc.exports=F_()),cc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function B_(){if(vp)return Cn;vp=1;var s=Lf(),e=O_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function x(t){return p.call(v,t)?!0:p.call(_,t)?!1:m.test(t)?v[t]=!0:(_[t]=!0,!1)}function y(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,o,l){if(i===null||typeof i>"u"||y(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,o,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,I);S[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,I);S[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,I);S[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,o,l){var c=S.hasOwnProperty(i)?S[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,c,l)&&(o=null),l||c===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),B=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),z=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),k=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,U;function te(t){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var Ue=!1;function K(t,i){if(!t||Ue)return"";Ue=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Z){var l=Z}Reflect.construct(t,[],i)}else{try{i.call()}catch(Z){l=Z}t.call(i.prototype)}else{try{throw Error()}catch(Z){l=Z}t()}}catch(Z){if(Z&&l&&typeof Z.stack=="string"){for(var c=Z.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,L=h.length-1;1<=M&&0<=L&&c[M]!==h[L];)L--;for(;1<=M&&0<=L;M--,L--)if(c[M]!==h[L]){if(M!==1||L!==1)do if(M--,L--,0>L||c[M]!==h[L]){var N=`
`+c[M].replace(" at new "," at ");return t.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",t.displayName)),N}while(1<=M&&0<=L);break}}}finally{Ue=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?te(t):""}function ue(t){switch(t.tag){case 5:return te(t.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return t=K(t.type,!1),t;case 11:return t=K(t.type.render,!1),t;case 1:return t=K(t.type,!0),t;default:return""}}function Me(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case B:return"Portal";case C:return"Profiler";case j:return"StrictMode";case J:return"Suspense";case fe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case oe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return i=t.displayName||null,i!==null?i:Me(t.type)||"Memo";case se:i=t._payload,t=t._init;try{return Me(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ie(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t){var i=Ie(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function At(t){t._valueTracker||(t._valueTracker=Ze(t))}function pt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ie(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function Lt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function O(t,i){var o=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function mn(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Te(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function dt(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function ut(t,i){dt(t,i);var o=Te(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?wt(t,i.type,o):i.hasOwnProperty("defaultValue")&&wt(t,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function je(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function wt(t,i,o){(i!=="number"||Lt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var We=Array.isArray;function b(t,i,o,l){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Te(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function E(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(We(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Te(o)}}function pe(t,i){var o=Te(i.value),l=Te(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function ge(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ce(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ce(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var we,Ne=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,c)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=we.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function lt(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(ye).forEach(function(t){Be.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ye[i]=ye[t]})});function qe(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ye.hasOwnProperty(t)&&ye[t]?(""+i).trim():i+"px"}function Qe(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=qe(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,c):t[o]=c}}var ke=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(t,i){if(i){if(ke[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function it(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=null;function G(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ae=null,ie=null,de=null;function be(t){if(t=co(t)){if(typeof Ae!="function")throw Error(n(280));var i=t.stateNode;i&&(i=aa(i),Ae(t.stateNode,t.type,i))}}function Pe(t){ie?de?de.push(t):de=[t]:ie=t}function rt(){if(ie){var t=ie,i=de;if(de=ie=null,be(t),i)for(t=0;t<i.length;t++)be(i[t])}}function Ut(t,i){return t(i)}function qt(){}var vt=!1;function Mn(t,i,o){if(vt)return t(i,o);vt=!0;try{return Ut(t,i,o)}finally{vt=!1,(ie!==null||de!==null)&&(qt(),rt())}}function gn(t,i){var o=t.stateNode;if(o===null)return null;var l=aa(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Kr=!1;if(d)try{var zi={};Object.defineProperty(zi,"passive",{get:function(){Kr=!0}}),window.addEventListener("test",zi,zi),window.removeEventListener("test",zi,zi)}catch{Kr=!1}function _i(t,i,o,l,c,h,M,L,N){var Z=Array.prototype.slice.call(arguments,3);try{i.apply(o,Z)}catch(_e){this.onError(_e)}}var vi=!1,xr=null,Sr=!1,Hi=null,zo={onError:function(t){vi=!0,xr=t}};function Zr(t,i,o,l,c,h,M,L,N){vi=!1,xr=null,_i.apply(zo,arguments)}function Ho(t,i,o,l,c,h,M,L,N){if(Zr.apply(this,arguments),vi){if(vi){var Z=xr;vi=!1,xr=null}else throw Error(n(198));Sr||(Sr=!0,Hi=Z)}}function ai(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Vo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Go(t){if(ai(t)!==t)throw Error(n(188))}function bl(t){var i=t.alternate;if(!i){if(i=ai(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return Go(c),t;if(h===l)return Go(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=c,l=h;else{for(var M=!1,L=c.child;L;){if(L===o){M=!0,o=c,l=h;break}if(L===l){M=!0,l=c,o=h;break}L=L.sibling}if(!M){for(L=h.child;L;){if(L===o){M=!0,o=h,l=c;break}if(L===l){M=!0,l=h,o=c;break}L=L.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Wo(t){return t=bl(t),t!==null?Xo(t):null}function Xo(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Xo(t);if(i!==null)return i;t=t.sibling}return null}var T=e.unstable_scheduleCallback,W=e.unstable_cancelCallback,Q=e.unstable_shouldYield,ee=e.unstable_requestPaint,H=e.unstable_now,Se=e.unstable_getCurrentPriorityLevel,Re=e.unstable_ImmediatePriority,De=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,Je=e.unstable_LowPriority,et=e.unstable_IdlePriority,Xe=null,st=null;function St(t){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(Xe,t,void 0,(t.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:Ye,Ft=Math.log,_t=Math.LN2;function Ye(t){return t>>>=0,t===0?32:31-(Ft(t)/_t|0)|0}var zt=64,mt=4194304;function rn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qn(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var L=M&~c;L!==0?l=rn(L):(h&=M,h!==0&&(l=rn(h)))}else M=o&~c,M!==0?l=rn(M):h!==0&&(l=rn(h));if(l===0)return 0;if(i!==0&&i!==l&&!(i&c)&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if(l&4&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-yt(i),c=1<<o,l|=t[o],i&=~c;return l}function _n(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yr(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-yt(h),L=1<<M,N=c[M];N===-1?(!(L&o)||L&l)&&(c[M]=_n(L,i)):N<=i&&(t.expiredLanes|=L),h&=~L}}function Rt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vn(){var t=zt;return zt<<=1,!(zt&4194240)&&(zt=64),t}function an(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Vt(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-yt(i),t[i]=o}function ln(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-yt(o),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,o&=~h}}function Mr(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-yt(o),c=1<<l;c&i|t[l]&i&&(t[l]|=i),o&=~c}}var ht=0;function Wf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Xf,Ll,jf,Yf,qf,Dl=!1,jo=[],Vi=null,Gi=null,Wi=null,qs=new Map,$s=new Map,Xi=[],ng="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $f(t,i){switch(t){case"focusin":case"focusout":Vi=null;break;case"dragenter":case"dragleave":Gi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":qs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":$s.delete(i.pointerId)}}function Ks(t,i,o,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=co(i),i!==null&&Ll(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function ig(t,i,o,l,c){switch(i){case"focusin":return Vi=Ks(Vi,t,i,o,l,c),!0;case"dragenter":return Gi=Ks(Gi,t,i,o,l,c),!0;case"mouseover":return Wi=Ks(Wi,t,i,o,l,c),!0;case"pointerover":var h=c.pointerId;return qs.set(h,Ks(qs.get(h)||null,t,i,o,l,c)),!0;case"gotpointercapture":return h=c.pointerId,$s.set(h,Ks($s.get(h)||null,t,i,o,l,c)),!0}return!1}function Kf(t){var i=Er(t.target);if(i!==null){var o=ai(i);if(o!==null){if(i=o.tag,i===13){if(i=Vo(o),i!==null){t.blockedOn=i,qf(t.priority,function(){jf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Il(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Tt=l,o.target.dispatchEvent(l),Tt=null}else return i=co(o),i!==null&&Ll(i),t.blockedOn=o,!1;i.shift()}return!0}function Zf(t,i,o){Yo(t)&&o.delete(i)}function rg(){Dl=!1,Vi!==null&&Yo(Vi)&&(Vi=null),Gi!==null&&Yo(Gi)&&(Gi=null),Wi!==null&&Yo(Wi)&&(Wi=null),qs.forEach(Zf),$s.forEach(Zf)}function Zs(t,i){t.blockedOn===i&&(t.blockedOn=null,Dl||(Dl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,rg)))}function Qs(t){function i(c){return Zs(c,t)}if(0<jo.length){Zs(jo[0],t);for(var o=1;o<jo.length;o++){var l=jo[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Vi!==null&&Zs(Vi,t),Gi!==null&&Zs(Gi,t),Wi!==null&&Zs(Wi,t),qs.forEach(i),$s.forEach(i),o=0;o<Xi.length;o++)l=Xi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Xi.length&&(o=Xi[0],o.blockedOn===null);)Kf(o),o.blockedOn===null&&Xi.shift()}var Qr=P.ReactCurrentBatchConfig,qo=!0;function sg(t,i,o,l){var c=ht,h=Qr.transition;Qr.transition=null;try{ht=1,Ul(t,i,o,l)}finally{ht=c,Qr.transition=h}}function og(t,i,o,l){var c=ht,h=Qr.transition;Qr.transition=null;try{ht=4,Ul(t,i,o,l)}finally{ht=c,Qr.transition=h}}function Ul(t,i,o,l){if(qo){var c=Il(t,i,o,l);if(c===null)Zl(t,i,l,$o,o),$f(t,l);else if(ig(c,t,i,o,l))l.stopPropagation();else if($f(t,l),i&4&&-1<ng.indexOf(t)){for(;c!==null;){var h=co(c);if(h!==null&&Xf(h),h=Il(t,i,o,l),h===null&&Zl(t,i,l,$o,o),h===c)break;c=h}c!==null&&l.stopPropagation()}else Zl(t,i,l,null,o)}}var $o=null;function Il(t,i,o,l){if($o=null,t=G(l),t=Er(t),t!==null)if(i=ai(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Vo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return $o=t,null}function Qf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Se()){case Re:return 1;case De:return 4;case Fe:case Je:return 16;case et:return 536870912;default:return 16}default:return 16}}var ji=null,Nl=null,Ko=null;function Jf(){if(Ko)return Ko;var t,i=Nl,o=i.length,l,c="value"in ji?ji.value:ji.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===c[h-l];l++);return Ko=c.slice(t,1<l?1-l:void 0)}function Zo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Qo(){return!0}function ed(){return!1}function Dn(t){function i(o,l,c,h,M){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(o=t[L],this[L]=o?o(h):h[L]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Qo:ed,this.isPropagationStopped=ed,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),i}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=Dn(Jr),Js=re({},Jr,{view:0,detail:0}),ag=Dn(Js),Ol,Bl,eo,Jo=re({},Js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(Ol=t.screenX-eo.screenX,Bl=t.screenY-eo.screenY):Bl=Ol=0,eo=t),Ol)},movementY:function(t){return"movementY"in t?t.movementY:Bl}}),td=Dn(Jo),lg=re({},Jo,{dataTransfer:0}),ug=Dn(lg),cg=re({},Js,{relatedTarget:0}),kl=Dn(cg),fg=re({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),dg=Dn(fg),hg=re({},Jr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pg=Dn(hg),mg=re({},Jr,{data:0}),nd=Dn(mg),gg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_g={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=vg[t])?!!i[t]:!1}function zl(){return xg}var Sg=re({},Js,{key:function(t){if(t.key){var i=gg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_g[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zl,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yg=Dn(Sg),Mg=re({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),id=Dn(Mg),Eg=re({},Js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zl}),Tg=Dn(Eg),wg=re({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ag=Dn(wg),Rg=re({},Jo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Cg=Dn(Rg),Pg=[9,13,27,32],Hl=d&&"CompositionEvent"in window,to=null;d&&"documentMode"in document&&(to=document.documentMode);var bg=d&&"TextEvent"in window&&!to,rd=d&&(!Hl||to&&8<to&&11>=to),sd=" ",od=!1;function ad(t,i){switch(t){case"keyup":return Pg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ld(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function Lg(t,i){switch(t){case"compositionend":return ld(i);case"keypress":return i.which!==32?null:(od=!0,sd);case"textInput":return t=i.data,t===sd&&od?null:t;default:return null}}function Dg(t,i){if(es)return t==="compositionend"||!Hl&&ad(t,i)?(t=Jf(),Ko=Nl=ji=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return rd&&i.locale!=="ko"?null:i.data;default:return null}}var Ug={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ud(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Ug[t.type]:i==="textarea"}function cd(t,i,o,l){Pe(l),i=ra(i,"onChange"),0<i.length&&(o=new Fl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var no=null,io=null;function Ig(t){Cd(t,0)}function ea(t){var i=ss(t);if(pt(i))return t}function Ng(t,i){if(t==="change")return i}var fd=!1;if(d){var Vl;if(d){var Gl="oninput"in document;if(!Gl){var dd=document.createElement("div");dd.setAttribute("oninput","return;"),Gl=typeof dd.oninput=="function"}Vl=Gl}else Vl=!1;fd=Vl&&(!document.documentMode||9<document.documentMode)}function hd(){no&&(no.detachEvent("onpropertychange",pd),io=no=null)}function pd(t){if(t.propertyName==="value"&&ea(io)){var i=[];cd(i,io,t,G(t)),Mn(Ig,i)}}function Fg(t,i,o){t==="focusin"?(hd(),no=i,io=o,no.attachEvent("onpropertychange",pd)):t==="focusout"&&hd()}function Og(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ea(io)}function Bg(t,i){if(t==="click")return ea(i)}function kg(t,i){if(t==="input"||t==="change")return ea(i)}function zg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var $n=typeof Object.is=="function"?Object.is:zg;function ro(t,i){if($n(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!p.call(i,c)||!$n(t[c],i[c]))return!1}return!0}function md(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gd(t,i){var o=md(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=md(o)}}function _d(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?_d(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function vd(){for(var t=window,i=Lt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Lt(t.document)}return i}function Wl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Hg(t){var i=vd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&_d(o.ownerDocument.documentElement,o)){if(l!==null&&Wl(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=gd(o,h);var M=gd(o,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Vg=d&&"documentMode"in document&&11>=document.documentMode,ts=null,Xl=null,so=null,jl=!1;function xd(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;jl||ts==null||ts!==Lt(l)||(l=ts,"selectionStart"in l&&Wl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),so&&ro(so,l)||(so=l,l=ra(Xl,"onSelect"),0<l.length&&(i=new Fl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=ts)))}function ta(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ns={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionend:ta("Transition","TransitionEnd")},Yl={},Sd={};d&&(Sd=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function na(t){if(Yl[t])return Yl[t];if(!ns[t])return t;var i=ns[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Sd)return Yl[t]=i[o];return t}var yd=na("animationend"),Md=na("animationiteration"),Ed=na("animationstart"),Td=na("transitionend"),wd=new Map,Ad="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yi(t,i){wd.set(t,i),u(i,[t])}for(var ql=0;ql<Ad.length;ql++){var $l=Ad[ql],Gg=$l.toLowerCase(),Wg=$l[0].toUpperCase()+$l.slice(1);Yi(Gg,"on"+Wg)}Yi(yd,"onAnimationEnd"),Yi(Md,"onAnimationIteration"),Yi(Ed,"onAnimationStart"),Yi("dblclick","onDoubleClick"),Yi("focusin","onFocus"),Yi("focusout","onBlur"),Yi(Td,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xg=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function Rd(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Ho(l,i,void 0,t),t.currentTarget=null}function Cd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var L=l[M],N=L.instance,Z=L.currentTarget;if(L=L.listener,N!==h&&c.isPropagationStopped())break e;Rd(c,L,Z),h=N}else for(M=0;M<l.length;M++){if(L=l[M],N=L.instance,Z=L.currentTarget,L=L.listener,N!==h&&c.isPropagationStopped())break e;Rd(c,L,Z),h=N}}}if(Sr)throw t=Hi,Sr=!1,Hi=null,t}function It(t,i){var o=i[iu];o===void 0&&(o=i[iu]=new Set);var l=t+"__bubble";o.has(l)||(Pd(i,t,2,!1),o.add(l))}function Kl(t,i,o){var l=0;i&&(l|=4),Pd(o,t,l,i)}var ia="_reactListening"+Math.random().toString(36).slice(2);function ao(t){if(!t[ia]){t[ia]=!0,r.forEach(function(o){o!=="selectionchange"&&(Xg.has(o)||Kl(o,!1,t),Kl(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ia]||(i[ia]=!0,Kl("selectionchange",!1,i))}}function Pd(t,i,o,l){switch(Qf(i)){case 1:var c=sg;break;case 4:c=og;break;default:c=Ul}o=c.bind(null,i,o,t),c=void 0,!Kr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function Zl(t,i,o,l,c){var h=l;if(!(i&1)&&!(i&2)&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var L=l.stateNode.containerInfo;if(L===c||L.nodeType===8&&L.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var N=M.tag;if((N===3||N===4)&&(N=M.stateNode.containerInfo,N===c||N.nodeType===8&&N.parentNode===c))return;M=M.return}for(;L!==null;){if(M=Er(L),M===null)return;if(N=M.tag,N===5||N===6){l=h=M;continue e}L=L.parentNode}}l=l.return}Mn(function(){var Z=h,_e=G(o),xe=[];e:{var me=wd.get(t);if(me!==void 0){var Le=Fl,ze=t;switch(t){case"keypress":if(Zo(o)===0)break e;case"keydown":case"keyup":Le=yg;break;case"focusin":ze="focus",Le=kl;break;case"focusout":ze="blur",Le=kl;break;case"beforeblur":case"afterblur":Le=kl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=ug;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=Tg;break;case yd:case Md:case Ed:Le=dg;break;case Td:Le=Ag;break;case"scroll":Le=ag;break;case"wheel":Le=Cg;break;case"copy":case"cut":case"paste":Le=pg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=id}var He=(i&4)!==0,Gt=!He&&t==="scroll",Y=He?me!==null?me+"Capture":null:me;He=[];for(var V=Z,q;V!==null;){q=V;var Ee=q.stateNode;if(q.tag===5&&Ee!==null&&(q=Ee,Y!==null&&(Ee=gn(V,Y),Ee!=null&&He.push(lo(V,Ee,q)))),Gt)break;V=V.return}0<He.length&&(me=new Le(me,ze,null,o,_e),xe.push({event:me,listeners:He}))}}if(!(i&7)){e:{if(me=t==="mouseover"||t==="pointerover",Le=t==="mouseout"||t==="pointerout",me&&o!==Tt&&(ze=o.relatedTarget||o.fromElement)&&(Er(ze)||ze[xi]))break e;if((Le||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,Le?(ze=o.relatedTarget||o.toElement,Le=Z,ze=ze?Er(ze):null,ze!==null&&(Gt=ai(ze),ze!==Gt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Le=null,ze=Z),Le!==ze)){if(He=td,Ee="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(He=id,Ee="onPointerLeave",Y="onPointerEnter",V="pointer"),Gt=Le==null?me:ss(Le),q=ze==null?me:ss(ze),me=new He(Ee,V+"leave",Le,o,_e),me.target=Gt,me.relatedTarget=q,Ee=null,Er(_e)===Z&&(He=new He(Y,V+"enter",ze,o,_e),He.target=q,He.relatedTarget=Gt,Ee=He),Gt=Ee,Le&&ze)t:{for(He=Le,Y=ze,V=0,q=He;q;q=is(q))V++;for(q=0,Ee=Y;Ee;Ee=is(Ee))q++;for(;0<V-q;)He=is(He),V--;for(;0<q-V;)Y=is(Y),q--;for(;V--;){if(He===Y||Y!==null&&He===Y.alternate)break t;He=is(He),Y=is(Y)}He=null}else He=null;Le!==null&&bd(xe,me,Le,He,!1),ze!==null&&Gt!==null&&bd(xe,Gt,ze,He,!0)}}e:{if(me=Z?ss(Z):window,Le=me.nodeName&&me.nodeName.toLowerCase(),Le==="select"||Le==="input"&&me.type==="file")var Ge=Ng;else if(ud(me))if(fd)Ge=kg;else{Ge=Og;var $e=Fg}else(Le=me.nodeName)&&Le.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Ge=Bg);if(Ge&&(Ge=Ge(t,Z))){cd(xe,Ge,o,_e);break e}$e&&$e(t,me,Z),t==="focusout"&&($e=me._wrapperState)&&$e.controlled&&me.type==="number"&&wt(me,"number",me.value)}switch($e=Z?ss(Z):window,t){case"focusin":(ud($e)||$e.contentEditable==="true")&&(ts=$e,Xl=Z,so=null);break;case"focusout":so=Xl=ts=null;break;case"mousedown":jl=!0;break;case"contextmenu":case"mouseup":case"dragend":jl=!1,xd(xe,o,_e);break;case"selectionchange":if(Vg)break;case"keydown":case"keyup":xd(xe,o,_e)}var Ke;if(Hl)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else es?ad(t,o)&&(tt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(tt="onCompositionStart");tt&&(rd&&o.locale!=="ko"&&(es||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&es&&(Ke=Jf()):(ji=_e,Nl="value"in ji?ji.value:ji.textContent,es=!0)),$e=ra(Z,tt),0<$e.length&&(tt=new nd(tt,t,null,o,_e),xe.push({event:tt,listeners:$e}),Ke?tt.data=Ke:(Ke=ld(o),Ke!==null&&(tt.data=Ke)))),(Ke=bg?Lg(t,o):Dg(t,o))&&(Z=ra(Z,"onBeforeInput"),0<Z.length&&(_e=new nd("onBeforeInput","beforeinput",null,o,_e),xe.push({event:_e,listeners:Z}),_e.data=Ke))}Cd(xe,i)})}function lo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ra(t,i){for(var o=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=gn(t,o),h!=null&&l.unshift(lo(t,h,c)),h=gn(t,i),h!=null&&l.push(lo(t,h,c))),t=t.return}return l}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bd(t,i,o,l,c){for(var h=i._reactName,M=[];o!==null&&o!==l;){var L=o,N=L.alternate,Z=L.stateNode;if(N!==null&&N===l)break;L.tag===5&&Z!==null&&(L=Z,c?(N=gn(o,h),N!=null&&M.unshift(lo(o,N,L))):c||(N=gn(o,h),N!=null&&M.push(lo(o,N,L)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var jg=/\r\n?/g,Yg=/\u0000|\uFFFD/g;function Ld(t){return(typeof t=="string"?t:""+t).replace(jg,`
`).replace(Yg,"")}function sa(t,i,o){if(i=Ld(i),Ld(t)!==i&&o)throw Error(n(425))}function oa(){}var Ql=null,Jl=null;function eu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,qg=typeof clearTimeout=="function"?clearTimeout:void 0,Dd=typeof Promise=="function"?Promise:void 0,$g=typeof queueMicrotask=="function"?queueMicrotask:typeof Dd<"u"?function(t){return Dd.resolve(null).then(t).catch(Kg)}:tu;function Kg(t){setTimeout(function(){throw t})}function nu(t,i){var o=i,l=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){t.removeChild(c),Qs(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);Qs(i)}function qi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Ud(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var rs=Math.random().toString(36).slice(2),li="__reactFiber$"+rs,uo="__reactProps$"+rs,xi="__reactContainer$"+rs,iu="__reactEvents$"+rs,Zg="__reactListeners$"+rs,Qg="__reactHandles$"+rs;function Er(t){var i=t[li];if(i)return i;for(var o=t.parentNode;o;){if(i=o[xi]||o[li]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Ud(t);t!==null;){if(o=t[li])return o;t=Ud(t)}return i}t=o,o=t.parentNode}return null}function co(t){return t=t[li]||t[xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function aa(t){return t[uo]||null}var ru=[],os=-1;function $i(t){return{current:t}}function Nt(t){0>os||(t.current=ru[os],ru[os]=null,os--)}function Dt(t,i){os++,ru[os]=t.current,t.current=i}var Ki={},un=$i(Ki),En=$i(!1),Tr=Ki;function as(t,i){var o=t.type.contextTypes;if(!o)return Ki;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function Tn(t){return t=t.childContextTypes,t!=null}function la(){Nt(En),Nt(un)}function Id(t,i,o){if(un.current!==Ki)throw Error(n(168));Dt(un,i),Dt(En,o)}function Nd(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,ve(t)||"Unknown",c));return re({},o,l)}function ua(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ki,Tr=un.current,Dt(un,t),Dt(En,En.current),!0}function Fd(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Nd(t,i,Tr),l.__reactInternalMemoizedMergedChildContext=t,Nt(En),Nt(un),Dt(un,t)):Nt(En),Dt(En,o)}var Si=null,ca=!1,su=!1;function Od(t){Si===null?Si=[t]:Si.push(t)}function Jg(t){ca=!0,Od(t)}function Zi(){if(!su&&Si!==null){su=!0;var t=0,i=ht;try{var o=Si;for(ht=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Si=null,ca=!1}catch(c){throw Si!==null&&(Si=Si.slice(t+1)),T(Re,Zi),c}finally{ht=i,su=!1}}return null}var ls=[],us=0,fa=null,da=0,kn=[],zn=0,wr=null,yi=1,Mi="";function Ar(t,i){ls[us++]=da,ls[us++]=fa,fa=t,da=i}function Bd(t,i,o){kn[zn++]=yi,kn[zn++]=Mi,kn[zn++]=wr,wr=t;var l=yi;t=Mi;var c=32-yt(l)-1;l&=~(1<<c),o+=1;var h=32-yt(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,yi=1<<32-yt(i)+c|o<<c|l,Mi=h+t}else yi=1<<h|o<<c|l,Mi=t}function ou(t){t.return!==null&&(Ar(t,1),Bd(t,1,0))}function au(t){for(;t===fa;)fa=ls[--us],ls[us]=null,da=ls[--us],ls[us]=null;for(;t===wr;)wr=kn[--zn],kn[zn]=null,Mi=kn[--zn],kn[zn]=null,yi=kn[--zn],kn[zn]=null}var Un=null,In=null,Ot=!1,Kn=null;function kd(t,i){var o=Wn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function zd(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Un=t,In=qi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Un=t,In=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=wr!==null?{id:yi,overflow:Mi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Wn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Un=t,In=null,!0):!1;default:return!1}}function lu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uu(t){if(Ot){var i=In;if(i){var o=i;if(!zd(t,i)){if(lu(t))throw Error(n(418));i=qi(o.nextSibling);var l=Un;i&&zd(t,i)?kd(l,o):(t.flags=t.flags&-4097|2,Ot=!1,Un=t)}}else{if(lu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ot=!1,Un=t}}}function Hd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function ha(t){if(t!==Un)return!1;if(!Ot)return Hd(t),Ot=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!eu(t.type,t.memoizedProps)),i&&(i=In)){if(lu(t))throw Vd(),Error(n(418));for(;i;)kd(t,i),i=qi(i.nextSibling)}if(Hd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){In=qi(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}In=null}}else In=Un?qi(t.stateNode.nextSibling):null;return!0}function Vd(){for(var t=In;t;)t=qi(t.nextSibling)}function cs(){In=Un=null,Ot=!1}function cu(t){Kn===null?Kn=[t]:Kn.push(t)}var e_=P.ReactCurrentBatchConfig;function fo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var L=c.refs;M===null?delete L[h]:L[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function pa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Gd(t){var i=t._init;return i(t._payload)}function Wd(t){function i(Y,V){if(t){var q=Y.deletions;q===null?(Y.deletions=[V],Y.flags|=16):q.push(V)}}function o(Y,V){if(!t)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function l(Y,V){for(Y=new Map;V!==null;)V.key!==null?Y.set(V.key,V):Y.set(V.index,V),V=V.sibling;return Y}function c(Y,V){return Y=sr(Y,V),Y.index=0,Y.sibling=null,Y}function h(Y,V,q){return Y.index=q,t?(q=Y.alternate,q!==null?(q=q.index,q<V?(Y.flags|=2,V):q):(Y.flags|=2,V)):(Y.flags|=1048576,V)}function M(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function L(Y,V,q,Ee){return V===null||V.tag!==6?(V=tc(q,Y.mode,Ee),V.return=Y,V):(V=c(V,q),V.return=Y,V)}function N(Y,V,q,Ee){var Ge=q.type;return Ge===F?_e(Y,V,q.props.children,Ee,q.key):V!==null&&(V.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===se&&Gd(Ge)===V.type)?(Ee=c(V,q.props),Ee.ref=fo(Y,V,q),Ee.return=Y,Ee):(Ee=Ba(q.type,q.key,q.props,null,Y.mode,Ee),Ee.ref=fo(Y,V,q),Ee.return=Y,Ee)}function Z(Y,V,q,Ee){return V===null||V.tag!==4||V.stateNode.containerInfo!==q.containerInfo||V.stateNode.implementation!==q.implementation?(V=nc(q,Y.mode,Ee),V.return=Y,V):(V=c(V,q.children||[]),V.return=Y,V)}function _e(Y,V,q,Ee,Ge){return V===null||V.tag!==7?(V=Ir(q,Y.mode,Ee,Ge),V.return=Y,V):(V=c(V,q),V.return=Y,V)}function xe(Y,V,q){if(typeof V=="string"&&V!==""||typeof V=="number")return V=tc(""+V,Y.mode,q),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case X:return q=Ba(V.type,V.key,V.props,null,Y.mode,q),q.ref=fo(Y,null,V),q.return=Y,q;case B:return V=nc(V,Y.mode,q),V.return=Y,V;case se:var Ee=V._init;return xe(Y,Ee(V._payload),q)}if(We(V)||ae(V))return V=Ir(V,Y.mode,q,null),V.return=Y,V;pa(Y,V)}return null}function me(Y,V,q,Ee){var Ge=V!==null?V.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return Ge!==null?null:L(Y,V,""+q,Ee);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case X:return q.key===Ge?N(Y,V,q,Ee):null;case B:return q.key===Ge?Z(Y,V,q,Ee):null;case se:return Ge=q._init,me(Y,V,Ge(q._payload),Ee)}if(We(q)||ae(q))return Ge!==null?null:_e(Y,V,q,Ee,null);pa(Y,q)}return null}function Le(Y,V,q,Ee,Ge){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Y=Y.get(q)||null,L(V,Y,""+Ee,Ge);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case X:return Y=Y.get(Ee.key===null?q:Ee.key)||null,N(V,Y,Ee,Ge);case B:return Y=Y.get(Ee.key===null?q:Ee.key)||null,Z(V,Y,Ee,Ge);case se:var $e=Ee._init;return Le(Y,V,q,$e(Ee._payload),Ge)}if(We(Ee)||ae(Ee))return Y=Y.get(q)||null,_e(V,Y,Ee,Ge,null);pa(V,Ee)}return null}function ze(Y,V,q,Ee){for(var Ge=null,$e=null,Ke=V,tt=V=0,tn=null;Ke!==null&&tt<q.length;tt++){Ke.index>tt?(tn=Ke,Ke=null):tn=Ke.sibling;var Mt=me(Y,Ke,q[tt],Ee);if(Mt===null){Ke===null&&(Ke=tn);break}t&&Ke&&Mt.alternate===null&&i(Y,Ke),V=h(Mt,V,tt),$e===null?Ge=Mt:$e.sibling=Mt,$e=Mt,Ke=tn}if(tt===q.length)return o(Y,Ke),Ot&&Ar(Y,tt),Ge;if(Ke===null){for(;tt<q.length;tt++)Ke=xe(Y,q[tt],Ee),Ke!==null&&(V=h(Ke,V,tt),$e===null?Ge=Ke:$e.sibling=Ke,$e=Ke);return Ot&&Ar(Y,tt),Ge}for(Ke=l(Y,Ke);tt<q.length;tt++)tn=Le(Ke,Y,tt,q[tt],Ee),tn!==null&&(t&&tn.alternate!==null&&Ke.delete(tn.key===null?tt:tn.key),V=h(tn,V,tt),$e===null?Ge=tn:$e.sibling=tn,$e=tn);return t&&Ke.forEach(function(or){return i(Y,or)}),Ot&&Ar(Y,tt),Ge}function He(Y,V,q,Ee){var Ge=ae(q);if(typeof Ge!="function")throw Error(n(150));if(q=Ge.call(q),q==null)throw Error(n(151));for(var $e=Ge=null,Ke=V,tt=V=0,tn=null,Mt=q.next();Ke!==null&&!Mt.done;tt++,Mt=q.next()){Ke.index>tt?(tn=Ke,Ke=null):tn=Ke.sibling;var or=me(Y,Ke,Mt.value,Ee);if(or===null){Ke===null&&(Ke=tn);break}t&&Ke&&or.alternate===null&&i(Y,Ke),V=h(or,V,tt),$e===null?Ge=or:$e.sibling=or,$e=or,Ke=tn}if(Mt.done)return o(Y,Ke),Ot&&Ar(Y,tt),Ge;if(Ke===null){for(;!Mt.done;tt++,Mt=q.next())Mt=xe(Y,Mt.value,Ee),Mt!==null&&(V=h(Mt,V,tt),$e===null?Ge=Mt:$e.sibling=Mt,$e=Mt);return Ot&&Ar(Y,tt),Ge}for(Ke=l(Y,Ke);!Mt.done;tt++,Mt=q.next())Mt=Le(Ke,Y,tt,Mt.value,Ee),Mt!==null&&(t&&Mt.alternate!==null&&Ke.delete(Mt.key===null?tt:Mt.key),V=h(Mt,V,tt),$e===null?Ge=Mt:$e.sibling=Mt,$e=Mt);return t&&Ke.forEach(function(D_){return i(Y,D_)}),Ot&&Ar(Y,tt),Ge}function Gt(Y,V,q,Ee){if(typeof q=="object"&&q!==null&&q.type===F&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case X:e:{for(var Ge=q.key,$e=V;$e!==null;){if($e.key===Ge){if(Ge=q.type,Ge===F){if($e.tag===7){o(Y,$e.sibling),V=c($e,q.props.children),V.return=Y,Y=V;break e}}else if($e.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===se&&Gd(Ge)===$e.type){o(Y,$e.sibling),V=c($e,q.props),V.ref=fo(Y,$e,q),V.return=Y,Y=V;break e}o(Y,$e);break}else i(Y,$e);$e=$e.sibling}q.type===F?(V=Ir(q.props.children,Y.mode,Ee,q.key),V.return=Y,Y=V):(Ee=Ba(q.type,q.key,q.props,null,Y.mode,Ee),Ee.ref=fo(Y,V,q),Ee.return=Y,Y=Ee)}return M(Y);case B:e:{for($e=q.key;V!==null;){if(V.key===$e)if(V.tag===4&&V.stateNode.containerInfo===q.containerInfo&&V.stateNode.implementation===q.implementation){o(Y,V.sibling),V=c(V,q.children||[]),V.return=Y,Y=V;break e}else{o(Y,V);break}else i(Y,V);V=V.sibling}V=nc(q,Y.mode,Ee),V.return=Y,Y=V}return M(Y);case se:return $e=q._init,Gt(Y,V,$e(q._payload),Ee)}if(We(q))return ze(Y,V,q,Ee);if(ae(q))return He(Y,V,q,Ee);pa(Y,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,V!==null&&V.tag===6?(o(Y,V.sibling),V=c(V,q),V.return=Y,Y=V):(o(Y,V),V=tc(q,Y.mode,Ee),V.return=Y,Y=V),M(Y)):o(Y,V)}return Gt}var fs=Wd(!0),Xd=Wd(!1),ma=$i(null),ga=null,ds=null,fu=null;function du(){fu=ds=ga=null}function hu(t){var i=ma.current;Nt(ma),t._currentValue=i}function pu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function hs(t,i){ga=t,fu=ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(wn=!0),t.firstContext=null)}function Hn(t){var i=t._currentValue;if(fu!==t)if(t={context:t,memoizedValue:i,next:null},ds===null){if(ga===null)throw Error(n(308));ds=t,ga.dependencies={lanes:0,firstContext:t}}else ds=ds.next=t;return i}var Rr=null;function mu(t){Rr===null?Rr=[t]:Rr.push(t)}function jd(t,i,o,l){var c=i.interleaved;return c===null?(o.next=o,mu(i)):(o.next=c.next,c.next=o),i.interleaved=o,Ei(t,l)}function Ei(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Qi=!1;function gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Ji(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,xt&2){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ei(t,o)}return c=l.interleaved,c===null?(i.next=i,mu(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ei(t,o)}function _a(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Mr(t,o)}}function qd(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function va(t,i,o,l){var c=t.updateQueue;Qi=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,L=c.shared.pending;if(L!==null){c.shared.pending=null;var N=L,Z=N.next;N.next=null,M===null?h=Z:M.next=Z,M=N;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,L=_e.lastBaseUpdate,L!==M&&(L===null?_e.firstBaseUpdate=Z:L.next=Z,_e.lastBaseUpdate=N))}if(h!==null){var xe=c.baseState;M=0,_e=Z=N=null,L=h;do{var me=L.lane,Le=L.eventTime;if((l&me)===me){_e!==null&&(_e=_e.next={eventTime:Le,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var ze=t,He=L;switch(me=i,Le=o,He.tag){case 1:if(ze=He.payload,typeof ze=="function"){xe=ze.call(Le,xe,me);break e}xe=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=He.payload,me=typeof ze=="function"?ze.call(Le,xe,me):ze,me==null)break e;xe=re({},xe,me);break e;case 2:Qi=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,me=c.effects,me===null?c.effects=[L]:me.push(L))}else Le={eventTime:Le,lane:me,tag:L.tag,payload:L.payload,callback:L.callback,next:null},_e===null?(Z=_e=Le,N=xe):_e=_e.next=Le,M|=me;if(L=L.next,L===null){if(L=c.shared.pending,L===null)break;me=L,L=me.next,me.next=null,c.lastBaseUpdate=me,c.shared.pending=null}}while(!0);if(_e===null&&(N=xe),c.baseState=N,c.firstBaseUpdate=Z,c.lastBaseUpdate=_e,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);br|=M,t.lanes=M,t.memoizedState=xe}}function $d(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var ho={},ui=$i(ho),po=$i(ho),mo=$i(ho);function Cr(t){if(t===ho)throw Error(n(174));return t}function _u(t,i){switch(Dt(mo,i),Dt(po,t),Dt(ui,ho),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ve(i,t)}Nt(ui),Dt(ui,i)}function ps(){Nt(ui),Nt(po),Nt(mo)}function Kd(t){Cr(mo.current);var i=Cr(ui.current),o=Ve(i,t.type);i!==o&&(Dt(po,t),Dt(ui,o))}function vu(t){po.current===t&&(Nt(ui),Nt(po))}var Bt=$i(0);function xa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var xu=[];function Su(){for(var t=0;t<xu.length;t++)xu[t]._workInProgressVersionPrimary=null;xu.length=0}var Sa=P.ReactCurrentDispatcher,yu=P.ReactCurrentBatchConfig,Pr=0,kt=null,$t=null,Jt=null,ya=!1,go=!1,_o=0,t_=0;function cn(){throw Error(n(321))}function Mu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!$n(t[o],i[o]))return!1;return!0}function Eu(t,i,o,l,c,h){if(Pr=h,kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Sa.current=t===null||t.memoizedState===null?s_:o_,t=o(l,c),go){h=0;do{if(go=!1,_o=0,25<=h)throw Error(n(301));h+=1,Jt=$t=null,i.updateQueue=null,Sa.current=a_,t=o(l,c)}while(go)}if(Sa.current=Ta,i=$t!==null&&$t.next!==null,Pr=0,Jt=$t=kt=null,ya=!1,i)throw Error(n(300));return t}function Tu(){var t=_o!==0;return _o=0,t}function ci(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?kt.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function Vn(){if($t===null){var t=kt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var i=Jt===null?kt.memoizedState:Jt.next;if(i!==null)Jt=i,$t=t;else{if(t===null)throw Error(n(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Jt===null?kt.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}function vo(t,i){return typeof i=="function"?i(t):i}function wu(t){var i=Vn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=$t,c=l.baseQueue,h=o.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,l=l.baseState;var L=M=null,N=null,Z=h;do{var _e=Z.lane;if((Pr&_e)===_e)N!==null&&(N=N.next={lane:0,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),l=Z.hasEagerState?Z.eagerState:t(l,Z.action);else{var xe={lane:_e,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null};N===null?(L=N=xe,M=l):N=N.next=xe,kt.lanes|=_e,br|=_e}Z=Z.next}while(Z!==null&&Z!==h);N===null?M=l:N.next=L,$n(l,i.memoizedState)||(wn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=N,o.lastRenderedState=l}if(t=o.interleaved,t!==null){c=t;do h=c.lane,kt.lanes|=h,br|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Au(t){var i=Vn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);$n(h,i.memoizedState)||(wn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function Zd(){}function Qd(t,i){var o=kt,l=Vn(),c=i(),h=!$n(l.memoizedState,c);if(h&&(l.memoizedState=c,wn=!0),l=l.queue,Ru(th.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||Jt!==null&&Jt.memoizedState.tag&1){if(o.flags|=2048,xo(9,eh.bind(null,o,l,c,i),void 0,null),en===null)throw Error(n(349));Pr&30||Jd(o,i,c)}return c}function Jd(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function eh(t,i,o,l){i.value=o,i.getSnapshot=l,nh(i)&&ih(t)}function th(t,i,o){return o(function(){nh(i)&&ih(t)})}function nh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!$n(t,o)}catch{return!0}}function ih(t){var i=Ei(t,1);i!==null&&ei(i,t,1,-1)}function rh(t){var i=ci();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:t},i.queue=t,t=t.dispatch=r_.bind(null,kt,t),[i.memoizedState,t]}function xo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function sh(){return Vn().memoizedState}function Ma(t,i,o,l){var c=ci();kt.flags|=t,c.memoizedState=xo(1|i,o,void 0,l===void 0?null:l)}function Ea(t,i,o,l){var c=Vn();l=l===void 0?null:l;var h=void 0;if($t!==null){var M=$t.memoizedState;if(h=M.destroy,l!==null&&Mu(l,M.deps)){c.memoizedState=xo(i,o,h,l);return}}kt.flags|=t,c.memoizedState=xo(1|i,o,h,l)}function oh(t,i){return Ma(8390656,8,t,i)}function Ru(t,i){return Ea(2048,8,t,i)}function ah(t,i){return Ea(4,2,t,i)}function lh(t,i){return Ea(4,4,t,i)}function uh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function ch(t,i,o){return o=o!=null?o.concat([t]):null,Ea(4,4,uh.bind(null,i,t),o)}function Cu(){}function fh(t,i){var o=Vn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Mu(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function dh(t,i){var o=Vn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Mu(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function hh(t,i,o){return Pr&21?($n(o,i)||(o=vn(),kt.lanes|=o,br|=o,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,wn=!0),t.memoizedState=o)}function n_(t,i){var o=ht;ht=o!==0&&4>o?o:4,t(!0);var l=yu.transition;yu.transition={};try{t(!1),i()}finally{ht=o,yu.transition=l}}function ph(){return Vn().memoizedState}function i_(t,i,o){var l=ir(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},mh(t))gh(i,o);else if(o=jd(t,i,o,l),o!==null){var c=Sn();ei(o,t,l,c),_h(o,i,l)}}function r_(t,i,o){var l=ir(t),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(mh(t))gh(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,L=h(M,o);if(c.hasEagerState=!0,c.eagerState=L,$n(L,M)){var N=i.interleaved;N===null?(c.next=c,mu(i)):(c.next=N.next,N.next=c),i.interleaved=c;return}}catch{}finally{}o=jd(t,i,c,l),o!==null&&(c=Sn(),ei(o,t,l,c),_h(o,i,l))}}function mh(t){var i=t.alternate;return t===kt||i!==null&&i===kt}function gh(t,i){go=ya=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function _h(t,i,o){if(o&4194240){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Mr(t,o)}}var Ta={readContext:Hn,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},s_={readContext:Hn,useCallback:function(t,i){return ci().memoizedState=[t,i===void 0?null:i],t},useContext:Hn,useEffect:oh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ma(4194308,4,uh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ma(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ma(4,2,t,i)},useMemo:function(t,i){var o=ci();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=ci();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=i_.bind(null,kt,t),[l.memoizedState,t]},useRef:function(t){var i=ci();return t={current:t},i.memoizedState=t},useState:rh,useDebugValue:Cu,useDeferredValue:function(t){return ci().memoizedState=t},useTransition:function(){var t=rh(!1),i=t[0];return t=n_.bind(null,t[1]),ci().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=kt,c=ci();if(Ot){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),en===null)throw Error(n(349));Pr&30||Jd(l,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,oh(th.bind(null,l,h,t),[t]),l.flags|=2048,xo(9,eh.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=ci(),i=en.identifierPrefix;if(Ot){var o=Mi,l=yi;o=(l&~(1<<32-yt(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=_o++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=t_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},o_={readContext:Hn,useCallback:fh,useContext:Hn,useEffect:Ru,useImperativeHandle:ch,useInsertionEffect:ah,useLayoutEffect:lh,useMemo:dh,useReducer:wu,useRef:sh,useState:function(){return wu(vo)},useDebugValue:Cu,useDeferredValue:function(t){var i=Vn();return hh(i,$t.memoizedState,t)},useTransition:function(){var t=wu(vo)[0],i=Vn().memoizedState;return[t,i]},useMutableSource:Zd,useSyncExternalStore:Qd,useId:ph,unstable_isNewReconciler:!1},a_={readContext:Hn,useCallback:fh,useContext:Hn,useEffect:Ru,useImperativeHandle:ch,useInsertionEffect:ah,useLayoutEffect:lh,useMemo:dh,useReducer:Au,useRef:sh,useState:function(){return Au(vo)},useDebugValue:Cu,useDeferredValue:function(t){var i=Vn();return $t===null?i.memoizedState=t:hh(i,$t.memoizedState,t)},useTransition:function(){var t=Au(vo)[0],i=Vn().memoizedState;return[t,i]},useMutableSource:Zd,useSyncExternalStore:Qd,useId:ph,unstable_isNewReconciler:!1};function Zn(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Pu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:re({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var wa={isMounted:function(t){return(t=t._reactInternals)?ai(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=Sn(),c=ir(t),h=Ti(l,c);h.payload=i,o!=null&&(h.callback=o),i=Ji(t,h,c),i!==null&&(ei(i,t,c,l),_a(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=Sn(),c=ir(t),h=Ti(l,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Ji(t,h,c),i!==null&&(ei(i,t,c,l),_a(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Sn(),l=ir(t),c=Ti(o,l);c.tag=2,i!=null&&(c.callback=i),i=Ji(t,c,l),i!==null&&(ei(i,t,l,o),_a(i,t,l))}};function vh(t,i,o,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!ro(o,l)||!ro(c,h):!0}function xh(t,i,o){var l=!1,c=Ki,h=i.contextType;return typeof h=="object"&&h!==null?h=Hn(h):(c=Tn(i)?Tr:un.current,l=i.contextTypes,h=(l=l!=null)?as(t,c):Ki),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=wa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Sh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&wa.enqueueReplaceState(i,i.state,null)}function bu(t,i,o,l){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},gu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Hn(h):(h=Tn(i)?Tr:un.current,c.context=as(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Pu(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&wa.enqueueReplaceState(c,c.state,null),va(t,o,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,i){try{var o="",l=i;do o+=ue(l),l=l.return;while(l);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Lu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Du(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var l_=typeof WeakMap=="function"?WeakMap:Map;function yh(t,i,o){o=Ti(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Da||(Da=!0,Yu=l),Du(t,i)},o}function Mh(t,i,o){o=Ti(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){Du(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Du(t,i),typeof l!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Eh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new l_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),t=M_.bind(null,t,i,o),i.then(t,t))}function Th(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function wh(t,i,o,l,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ti(-1,1),i.tag=2,Ji(o,i,1))),o.lanes|=1),t)}var u_=P.ReactCurrentOwner,wn=!1;function xn(t,i,o,l){i.child=t===null?Xd(i,null,o,l):fs(i,t.child,o,l)}function Ah(t,i,o,l,c){o=o.render;var h=i.ref;return hs(i,c),l=Eu(t,i,o,l,h,c),o=Tu(),t!==null&&!wn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,wi(t,i,c)):(Ot&&o&&ou(i),i.flags|=1,xn(t,i,l,c),i.child)}function Rh(t,i,o,l,c){if(t===null){var h=o.type;return typeof h=="function"&&!ec(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Ch(t,i,h,l,c)):(t=Ba(o.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!(t.lanes&c)){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:ro,o(M,l)&&t.ref===i.ref)return wi(t,i,c)}return i.flags|=1,t=sr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Ch(t,i,o,l,c){if(t!==null){var h=t.memoizedProps;if(ro(h,l)&&t.ref===i.ref)if(wn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)t.flags&131072&&(wn=!0);else return i.lanes=t.lanes,wi(t,i,c)}return Uu(t,i,o,l,c)}function Ph(t,i,o){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(_s,Nn),Nn|=o;else{if(!(o&1073741824))return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Dt(_s,Nn),Nn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Dt(_s,Nn),Nn|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Dt(_s,Nn),Nn|=l;return xn(t,i,c,o),i.child}function bh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Uu(t,i,o,l,c){var h=Tn(o)?Tr:un.current;return h=as(i,h),hs(i,c),o=Eu(t,i,o,l,h,c),l=Tu(),t!==null&&!wn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,wi(t,i,c)):(Ot&&l&&ou(i),i.flags|=1,xn(t,i,o,c),i.child)}function Lh(t,i,o,l,c){if(Tn(o)){var h=!0;ua(i)}else h=!1;if(hs(i,c),i.stateNode===null)Ra(t,i),xh(i,o,l),bu(i,o,l,c),l=!0;else if(t===null){var M=i.stateNode,L=i.memoizedProps;M.props=L;var N=M.context,Z=o.contextType;typeof Z=="object"&&Z!==null?Z=Hn(Z):(Z=Tn(o)?Tr:un.current,Z=as(i,Z));var _e=o.getDerivedStateFromProps,xe=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";xe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==l||N!==Z)&&Sh(i,M,l,Z),Qi=!1;var me=i.memoizedState;M.state=me,va(i,l,M,c),N=i.memoizedState,L!==l||me!==N||En.current||Qi?(typeof _e=="function"&&(Pu(i,o,_e,l),N=i.memoizedState),(L=Qi||vh(i,o,L,l,me,N,Z))?(xe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=N),M.props=l,M.state=N,M.context=Z,l=L):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,Yd(t,i),L=i.memoizedProps,Z=i.type===i.elementType?L:Zn(i.type,L),M.props=Z,xe=i.pendingProps,me=M.context,N=o.contextType,typeof N=="object"&&N!==null?N=Hn(N):(N=Tn(o)?Tr:un.current,N=as(i,N));var Le=o.getDerivedStateFromProps;(_e=typeof Le=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==xe||me!==N)&&Sh(i,M,l,N),Qi=!1,me=i.memoizedState,M.state=me,va(i,l,M,c);var ze=i.memoizedState;L!==xe||me!==ze||En.current||Qi?(typeof Le=="function"&&(Pu(i,o,Le,l),ze=i.memoizedState),(Z=Qi||vh(i,o,Z,l,me,ze,N)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,ze,N),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,ze,N)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ze),M.props=l,M.state=ze,M.context=N,l=Z):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return Iu(t,i,o,l,h,c)}function Iu(t,i,o,l,c,h){bh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&Fd(i,o,!1),wi(t,i,h);l=i.stateNode,u_.current=i;var L=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=fs(i,t.child,null,h),i.child=fs(i,null,L,h)):xn(t,i,L,h),i.memoizedState=l.state,c&&Fd(i,o,!0),i.child}function Dh(t){var i=t.stateNode;i.pendingContext?Id(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Id(t,i.context,!1),_u(t,i.containerInfo)}function Uh(t,i,o,l,c){return cs(),cu(c),i.flags|=256,xn(t,i,o,l),i.child}var Nu={dehydrated:null,treeContext:null,retryLane:0};function Fu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ih(t,i,o){var l=i.pendingProps,c=Bt.current,h=!1,M=(i.flags&128)!==0,L;if((L=M)||(L=t!==null&&t.memoizedState===null?!1:(c&2)!==0),L?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Dt(Bt,c&1),t===null)return uu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},!(l&1)&&h!==null?(h.childLanes=0,h.pendingProps=M):h=ka(M,l,0,null),t=Ir(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Fu(o),i.memoizedState=Nu,t):Ou(i,M));if(c=t.memoizedState,c!==null&&(L=c.dehydrated,L!==null))return c_(t,i,M,l,L,c,o);if(h){h=l.fallback,M=i.mode,c=t.child,L=c.sibling;var N={mode:"hidden",children:l.children};return!(M&1)&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=N,i.deletions=null):(l=sr(c,N),l.subtreeFlags=c.subtreeFlags&14680064),L!==null?h=sr(L,h):(h=Ir(h,M,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Fu(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=Nu,l}return h=t.child,t=h.sibling,l=sr(h,{mode:"visible",children:l.children}),!(i.mode&1)&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Ou(t,i){return i=ka({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Aa(t,i,o,l){return l!==null&&cu(l),fs(i,t.child,null,o),t=Ou(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function c_(t,i,o,l,c,h,M){if(o)return i.flags&256?(i.flags&=-257,l=Lu(Error(n(422))),Aa(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=ka({mode:"visible",children:l.children},c,0,null),h=Ir(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,i.mode&1&&fs(i,t.child,null,M),i.child.memoizedState=Fu(M),i.memoizedState=Nu,h);if(!(i.mode&1))return Aa(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var L=l.dgst;return l=L,h=Error(n(419)),l=Lu(h,l,void 0),Aa(t,i,M,l)}if(L=(M&t.childLanes)!==0,wn||L){if(l=en,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(l.suspendedLanes|M)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Ei(t,c),ei(l,t,c,-1))}return Ju(),l=Lu(Error(n(421))),Aa(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=E_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,In=qi(c.nextSibling),Un=i,Ot=!0,Kn=null,t!==null&&(kn[zn++]=yi,kn[zn++]=Mi,kn[zn++]=wr,yi=t.id,Mi=t.overflow,wr=i),i=Ou(i,l.children),i.flags|=4096,i)}function Nh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),pu(t.return,i,o)}function Bu(t,i,o,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=c)}function Fh(t,i,o){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(xn(t,i,l.children,o),l=Bt.current,l&2)l=l&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Nh(t,o,i);else if(t.tag===19)Nh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Dt(Bt,l),!(i.mode&1))i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&xa(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),Bu(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&xa(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}Bu(i,!0,o,null,h);break;case"together":Bu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ra(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function wi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),br|=i.lanes,!(o&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=sr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=sr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function f_(t,i,o){switch(i.tag){case 3:Dh(i),cs();break;case 5:Kd(i);break;case 1:Tn(i.type)&&ua(i);break;case 4:_u(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Dt(ma,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Dt(Bt,Bt.current&1),i.flags|=128,null):o&i.child.childLanes?Ih(t,i,o):(Dt(Bt,Bt.current&1),t=wi(t,i,o),t!==null?t.sibling:null);Dt(Bt,Bt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,t.flags&128){if(l)return Fh(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Dt(Bt,Bt.current),l)break;return null;case 22:case 23:return i.lanes=0,Ph(t,i,o)}return wi(t,i,o)}var Oh,ku,Bh,kh;Oh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ku=function(){},Bh=function(t,i,o,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Cr(ui.current);var h=null;switch(o){case"input":c=O(t,c),l=O(t,l),h=[];break;case"select":c=re({},c,{value:void 0}),l=re({},l,{value:void 0}),h=[];break;case"textarea":c=E(t,c),l=E(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=oa)}ct(o,l);var M;o=null;for(Z in c)if(!l.hasOwnProperty(Z)&&c.hasOwnProperty(Z)&&c[Z]!=null)if(Z==="style"){var L=c[Z];for(M in L)L.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else Z!=="dangerouslySetInnerHTML"&&Z!=="children"&&Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&Z!=="autoFocus"&&(a.hasOwnProperty(Z)?h||(h=[]):(h=h||[]).push(Z,null));for(Z in l){var N=l[Z];if(L=c!=null?c[Z]:void 0,l.hasOwnProperty(Z)&&N!==L&&(N!=null||L!=null))if(Z==="style")if(L){for(M in L)!L.hasOwnProperty(M)||N&&N.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in N)N.hasOwnProperty(M)&&L[M]!==N[M]&&(o||(o={}),o[M]=N[M])}else o||(h||(h=[]),h.push(Z,o)),o=N;else Z==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,L=L?L.__html:void 0,N!=null&&L!==N&&(h=h||[]).push(Z,N)):Z==="children"?typeof N!="string"&&typeof N!="number"||(h=h||[]).push(Z,""+N):Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&(a.hasOwnProperty(Z)?(N!=null&&Z==="onScroll"&&It("scroll",t),h||L===N||(h=[])):(h=h||[]).push(Z,N))}o&&(h=h||[]).push("style",o);var Z=h;(i.updateQueue=Z)&&(i.flags|=4)}},kh=function(t,i,o,l){o!==l&&(i.flags|=4)};function So(t,i){if(!Ot)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function fn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function d_(t,i,o){var l=i.pendingProps;switch(au(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(i),null;case 1:return Tn(i.type)&&la(),fn(i),null;case 3:return l=i.stateNode,ps(),Nt(En),Nt(un),Su(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ha(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Kn!==null&&(Ku(Kn),Kn=null))),ku(t,i),fn(i),null;case 5:vu(i);var c=Cr(mo.current);if(o=i.type,t!==null&&i.stateNode!=null)Bh(t,i,o,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return fn(i),null}if(t=Cr(ui.current),ha(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[li]=i,l[uo]=h,t=(i.mode&1)!==0,o){case"dialog":It("cancel",l),It("close",l);break;case"iframe":case"object":case"embed":It("load",l);break;case"video":case"audio":for(c=0;c<oo.length;c++)It(oo[c],l);break;case"source":It("error",l);break;case"img":case"image":case"link":It("error",l),It("load",l);break;case"details":It("toggle",l);break;case"input":mn(l,h),It("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},It("invalid",l);break;case"textarea":$(l,h),It("invalid",l)}ct(o,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var L=h[M];M==="children"?typeof L=="string"?l.textContent!==L&&(h.suppressHydrationWarning!==!0&&sa(l.textContent,L,t),c=["children",L]):typeof L=="number"&&l.textContent!==""+L&&(h.suppressHydrationWarning!==!0&&sa(l.textContent,L,t),c=["children",""+L]):a.hasOwnProperty(M)&&L!=null&&M==="onScroll"&&It("scroll",l)}switch(o){case"input":At(l),je(l,h,!0);break;case"textarea":At(l),ge(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=oa)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ce(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[li]=i,t[uo]=l,Oh(t,i,!1,!1),i.stateNode=t;e:{switch(M=it(o,l),o){case"dialog":It("cancel",t),It("close",t),c=l;break;case"iframe":case"object":case"embed":It("load",t),c=l;break;case"video":case"audio":for(c=0;c<oo.length;c++)It(oo[c],t);c=l;break;case"source":It("error",t),c=l;break;case"img":case"image":case"link":It("error",t),It("load",t),c=l;break;case"details":It("toggle",t),c=l;break;case"input":mn(t,l),c=O(t,l),It("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=re({},l,{value:void 0}),It("invalid",t);break;case"textarea":$(t,l),c=E(t,l),It("invalid",t);break;default:c=l}ct(o,c),L=c;for(h in L)if(L.hasOwnProperty(h)){var N=L[h];h==="style"?Qe(t,N):h==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&Ne(t,N)):h==="children"?typeof N=="string"?(o!=="textarea"||N!=="")&&lt(t,N):typeof N=="number"&&lt(t,""+N):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?N!=null&&h==="onScroll"&&It("scroll",t):N!=null&&D(t,h,N,M))}switch(o){case"input":At(t),je(t,l,!1);break;case"textarea":At(t),ge(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Te(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?b(t,!!l.multiple,h,!1):l.defaultValue!=null&&b(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=oa)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return fn(i),null;case 6:if(t&&i.stateNode!=null)kh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Cr(mo.current),Cr(ui.current),ha(i)){if(l=i.stateNode,o=i.memoizedProps,l[li]=i,(h=l.nodeValue!==o)&&(t=Un,t!==null))switch(t.tag){case 3:sa(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sa(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[li]=i,i.stateNode=l}return fn(i),null;case 13:if(Nt(Bt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ot&&In!==null&&i.mode&1&&!(i.flags&128))Vd(),cs(),i.flags|=98560,h=!1;else if(h=ha(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[li]=i}else cs(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;fn(i),h=!1}else Kn!==null&&(Ku(Kn),Kn=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,i.mode&1&&(t===null||Bt.current&1?Kt===0&&(Kt=3):Ju())),i.updateQueue!==null&&(i.flags|=4),fn(i),null);case 4:return ps(),ku(t,i),t===null&&ao(i.stateNode.containerInfo),fn(i),null;case 10:return hu(i.type._context),fn(i),null;case 17:return Tn(i.type)&&la(),fn(i),null;case 19:if(Nt(Bt),h=i.memoizedState,h===null)return fn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)So(h,!1);else{if(Kt!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(M=xa(t),M!==null){for(i.flags|=128,So(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Dt(Bt,Bt.current&1|2),i.child}t=t.sibling}h.tail!==null&&H()>vs&&(i.flags|=128,l=!0,So(h,!1),i.lanes=4194304)}else{if(!l)if(t=xa(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),So(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ot)return fn(i),null}else 2*H()-h.renderingStartTime>vs&&o!==1073741824&&(i.flags|=128,l=!0,So(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=H(),i.sibling=null,o=Bt.current,Dt(Bt,l?o&1|2:o&1),i):(fn(i),null);case 22:case 23:return Qu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&i.mode&1?Nn&1073741824&&(fn(i),i.subtreeFlags&6&&(i.flags|=8192)):fn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function h_(t,i){switch(au(i),i.tag){case 1:return Tn(i.type)&&la(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ps(),Nt(En),Nt(un),Su(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return vu(i),null;case 13:if(Nt(Bt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));cs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Nt(Bt),null;case 4:return ps(),null;case 10:return hu(i.type._context),null;case 22:case 23:return Qu(),null;case 24:return null;default:return null}}var Ca=!1,dn=!1,p_=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function gs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Ht(t,i,l)}else o.current=null}function zu(t,i,o){try{o()}catch(l){Ht(t,i,l)}}var zh=!1;function m_(t,i){if(Ql=qo,t=vd(),Wl(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,L=-1,N=-1,Z=0,_e=0,xe=t,me=null;t:for(;;){for(var Le;xe!==o||c!==0&&xe.nodeType!==3||(L=M+c),xe!==h||l!==0&&xe.nodeType!==3||(N=M+l),xe.nodeType===3&&(M+=xe.nodeValue.length),(Le=xe.firstChild)!==null;)me=xe,xe=Le;for(;;){if(xe===t)break t;if(me===o&&++Z===c&&(L=M),me===h&&++_e===l&&(N=M),(Le=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=Le}o=L===-1||N===-1?null:{start:L,end:N}}else o=null}o=o||{start:0,end:0}}else o=null;for(Jl={focusedElem:t,selectionRange:o},qo=!1,Oe=i;Oe!==null;)if(i=Oe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Oe=t;else for(;Oe!==null;){i=Oe;try{var ze=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var He=ze.memoizedProps,Gt=ze.memoizedState,Y=i.stateNode,V=Y.getSnapshotBeforeUpdate(i.elementType===i.type?He:Zn(i.type,He),Gt);Y.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var q=i.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Ht(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Oe=t;break}Oe=i.return}return ze=zh,zh=!1,ze}function yo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&zu(i,o,h)}c=c.next}while(c!==l)}}function Pa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Hu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Hh(t){var i=t.alternate;i!==null&&(t.alternate=null,Hh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[li],delete i[uo],delete i[iu],delete i[Zg],delete i[Qg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vh(t){return t.tag===5||t.tag===3||t.tag===4}function Gh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=oa));else if(l!==4&&(t=t.child,t!==null))for(Vu(t,i,o),t=t.sibling;t!==null;)Vu(t,i,o),t=t.sibling}function Gu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Gu(t,i,o),t=t.sibling;t!==null;)Gu(t,i,o),t=t.sibling}var sn=null,Qn=!1;function er(t,i,o){for(o=o.child;o!==null;)Wh(t,i,o),o=o.sibling}function Wh(t,i,o){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(Xe,o)}catch{}switch(o.tag){case 5:dn||gs(o,i);case 6:var l=sn,c=Qn;sn=null,er(t,i,o),sn=l,Qn=c,sn!==null&&(Qn?(t=sn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):sn.removeChild(o.stateNode));break;case 18:sn!==null&&(Qn?(t=sn,o=o.stateNode,t.nodeType===8?nu(t.parentNode,o):t.nodeType===1&&nu(t,o),Qs(t)):nu(sn,o.stateNode));break;case 4:l=sn,c=Qn,sn=o.stateNode.containerInfo,Qn=!0,er(t,i,o),sn=l,Qn=c;break;case 0:case 11:case 14:case 15:if(!dn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&(h&2||h&4)&&zu(o,i,M),c=c.next}while(c!==l)}er(t,i,o);break;case 1:if(!dn&&(gs(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(L){Ht(o,i,L)}er(t,i,o);break;case 21:er(t,i,o);break;case 22:o.mode&1?(dn=(l=dn)||o.memoizedState!==null,er(t,i,o),dn=l):er(t,i,o);break;default:er(t,i,o)}}function Xh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new p_),i.forEach(function(l){var c=T_.bind(null,t,l);o.has(l)||(o.add(l),l.then(c,c))})}}function Jn(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var h=t,M=i,L=M;e:for(;L!==null;){switch(L.tag){case 5:sn=L.stateNode,Qn=!1;break e;case 3:sn=L.stateNode.containerInfo,Qn=!0;break e;case 4:sn=L.stateNode.containerInfo,Qn=!0;break e}L=L.return}if(sn===null)throw Error(n(160));Wh(h,M,c),sn=null,Qn=!1;var N=c.alternate;N!==null&&(N.return=null),c.return=null}catch(Z){Ht(c,i,Z)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)jh(i,t),i=i.sibling}function jh(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(i,t),fi(t),l&4){try{yo(3,t,t.return),Pa(3,t)}catch(He){Ht(t,t.return,He)}try{yo(5,t,t.return)}catch(He){Ht(t,t.return,He)}}break;case 1:Jn(i,t),fi(t),l&512&&o!==null&&gs(o,o.return);break;case 5:if(Jn(i,t),fi(t),l&512&&o!==null&&gs(o,o.return),t.flags&32){var c=t.stateNode;try{lt(c,"")}catch(He){Ht(t,t.return,He)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,L=t.type,N=t.updateQueue;if(t.updateQueue=null,N!==null)try{L==="input"&&h.type==="radio"&&h.name!=null&&dt(c,h),it(L,M);var Z=it(L,h);for(M=0;M<N.length;M+=2){var _e=N[M],xe=N[M+1];_e==="style"?Qe(c,xe):_e==="dangerouslySetInnerHTML"?Ne(c,xe):_e==="children"?lt(c,xe):D(c,_e,xe,Z)}switch(L){case"input":ut(c,h);break;case"textarea":pe(c,h);break;case"select":var me=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Le=h.value;Le!=null?b(c,!!h.multiple,Le,!1):me!==!!h.multiple&&(h.defaultValue!=null?b(c,!!h.multiple,h.defaultValue,!0):b(c,!!h.multiple,h.multiple?[]:"",!1))}c[uo]=h}catch(He){Ht(t,t.return,He)}}break;case 6:if(Jn(i,t),fi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(He){Ht(t,t.return,He)}}break;case 3:if(Jn(i,t),fi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Qs(i.containerInfo)}catch(He){Ht(t,t.return,He)}break;case 4:Jn(i,t),fi(t);break;case 13:Jn(i,t),fi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(ju=H())),l&4&&Xh(t);break;case 22:if(_e=o!==null&&o.memoizedState!==null,t.mode&1?(dn=(Z=dn)||_e,Jn(i,t),dn=Z):Jn(i,t),fi(t),l&8192){if(Z=t.memoizedState!==null,(t.stateNode.isHidden=Z)&&!_e&&t.mode&1)for(Oe=t,_e=t.child;_e!==null;){for(xe=Oe=_e;Oe!==null;){switch(me=Oe,Le=me.child,me.tag){case 0:case 11:case 14:case 15:yo(4,me,me.return);break;case 1:gs(me,me.return);var ze=me.stateNode;if(typeof ze.componentWillUnmount=="function"){l=me,o=me.return;try{i=l,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(He){Ht(l,o,He)}}break;case 5:gs(me,me.return);break;case 22:if(me.memoizedState!==null){$h(xe);continue}}Le!==null?(Le.return=me,Oe=Le):$h(xe)}_e=_e.sibling}e:for(_e=null,xe=t;;){if(xe.tag===5){if(_e===null){_e=xe;try{c=xe.stateNode,Z?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(L=xe.stateNode,N=xe.memoizedProps.style,M=N!=null&&N.hasOwnProperty("display")?N.display:null,L.style.display=qe("display",M))}catch(He){Ht(t,t.return,He)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=Z?"":xe.memoizedProps}catch(He){Ht(t,t.return,He)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:Jn(i,t),fi(t),l&4&&Xh(t);break;case 21:break;default:Jn(i,t),fi(t)}}function fi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Vh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(lt(c,""),l.flags&=-33);var h=Gh(t);Gu(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,L=Gh(t);Vu(t,L,M);break;default:throw Error(n(161))}}catch(N){Ht(t,t.return,N)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function g_(t,i,o){Oe=t,Yh(t)}function Yh(t,i,o){for(var l=(t.mode&1)!==0;Oe!==null;){var c=Oe,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Ca;if(!M){var L=c.alternate,N=L!==null&&L.memoizedState!==null||dn;L=Ca;var Z=dn;if(Ca=M,(dn=N)&&!Z)for(Oe=c;Oe!==null;)M=Oe,N=M.child,M.tag===22&&M.memoizedState!==null?Kh(c):N!==null?(N.return=M,Oe=N):Kh(c);for(;h!==null;)Oe=h,Yh(h),h=h.sibling;Oe=c,Ca=L,dn=Z}qh(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,Oe=h):qh(t)}}function qh(t){for(;Oe!==null;){var i=Oe;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:dn||Pa(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!dn)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:Zn(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&$d(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}$d(i,M,o)}break;case 5:var L=i.stateNode;if(o===null&&i.flags&4){o=L;var N=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&o.focus();break;case"img":N.src&&(o.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Z=i.alternate;if(Z!==null){var _e=Z.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&Qs(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}dn||i.flags&512&&Hu(i)}catch(me){Ht(i,i.return,me)}}if(i===t){Oe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function $h(t){for(;Oe!==null;){var i=Oe;if(i===t){Oe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function Kh(t){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Pa(4,i)}catch(N){Ht(i,o,N)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(N){Ht(i,c,N)}}var h=i.return;try{Hu(i)}catch(N){Ht(i,h,N)}break;case 5:var M=i.return;try{Hu(i)}catch(N){Ht(i,M,N)}}}catch(N){Ht(i,i.return,N)}if(i===t){Oe=null;break}var L=i.sibling;if(L!==null){L.return=i.return,Oe=L;break}Oe=i.return}}var __=Math.ceil,ba=P.ReactCurrentDispatcher,Wu=P.ReactCurrentOwner,Gn=P.ReactCurrentBatchConfig,xt=0,en=null,Xt=null,on=0,Nn=0,_s=$i(0),Kt=0,Mo=null,br=0,La=0,Xu=0,Eo=null,An=null,ju=0,vs=1/0,Ai=null,Da=!1,Yu=null,tr=null,Ua=!1,nr=null,Ia=0,To=0,qu=null,Na=-1,Fa=0;function Sn(){return xt&6?H():Na!==-1?Na:Na=H()}function ir(t){return t.mode&1?xt&2&&on!==0?on&-on:e_.transition!==null?(Fa===0&&(Fa=vn()),Fa):(t=ht,t!==0||(t=window.event,t=t===void 0?16:Qf(t.type)),t):1}function ei(t,i,o,l){if(50<To)throw To=0,qu=null,Error(n(185));Vt(t,o,l),(!(xt&2)||t!==en)&&(t===en&&(!(xt&2)&&(La|=o),Kt===4&&rr(t,on)),Rn(t,l),o===1&&xt===0&&!(i.mode&1)&&(vs=H()+500,ca&&Zi()))}function Rn(t,i){var o=t.callbackNode;yr(t,i);var l=qn(t,t===en?on:0);if(l===0)o!==null&&W(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&W(o),i===1)t.tag===0?Jg(Qh.bind(null,t)):Od(Qh.bind(null,t)),$g(function(){!(xt&6)&&Zi()}),o=null;else{switch(Wf(l)){case 1:o=Re;break;case 4:o=De;break;case 16:o=Fe;break;case 536870912:o=et;break;default:o=Fe}o=op(o,Zh.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Zh(t,i){if(Na=-1,Fa=0,xt&6)throw Error(n(327));var o=t.callbackNode;if(xs()&&t.callbackNode!==o)return null;var l=qn(t,t===en?on:0);if(l===0)return null;if(l&30||l&t.expiredLanes||i)i=Oa(t,l);else{i=l;var c=xt;xt|=2;var h=ep();(en!==t||on!==i)&&(Ai=null,vs=H()+500,Dr(t,i));do try{S_();break}catch(L){Jh(t,L)}while(!0);du(),ba.current=h,xt=c,Xt!==null?i=0:(en=null,on=0,i=Kt)}if(i!==0){if(i===2&&(c=Rt(t),c!==0&&(l=c,i=$u(t,c))),i===1)throw o=Mo,Dr(t,0),rr(t,l),Rn(t,H()),o;if(i===6)rr(t,l);else{if(c=t.current.alternate,!(l&30)&&!v_(c)&&(i=Oa(t,l),i===2&&(h=Rt(t),h!==0&&(l=h,i=$u(t,h))),i===1))throw o=Mo,Dr(t,0),rr(t,l),Rn(t,H()),o;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ur(t,An,Ai);break;case 3:if(rr(t,l),(l&130023424)===l&&(i=ju+500-H(),10<i)){if(qn(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){Sn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=tu(Ur.bind(null,t,An,Ai),i);break}Ur(t,An,Ai);break;case 4:if(rr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-yt(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=H()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*__(l/1960))-l,10<l){t.timeoutHandle=tu(Ur.bind(null,t,An,Ai),l);break}Ur(t,An,Ai);break;case 5:Ur(t,An,Ai);break;default:throw Error(n(329))}}}return Rn(t,H()),t.callbackNode===o?Zh.bind(null,t):null}function $u(t,i){var o=Eo;return t.current.memoizedState.isDehydrated&&(Dr(t,i).flags|=256),t=Oa(t,i),t!==2&&(i=An,An=o,i!==null&&Ku(i)),t}function Ku(t){An===null?An=t:An.push.apply(An,t)}function v_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],h=c.getSnapshot;c=c.value;try{if(!$n(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function rr(t,i){for(i&=~Xu,i&=~La,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-yt(i),l=1<<o;t[o]=-1,i&=~l}}function Qh(t){if(xt&6)throw Error(n(327));xs();var i=qn(t,0);if(!(i&1))return Rn(t,H()),null;var o=Oa(t,i);if(t.tag!==0&&o===2){var l=Rt(t);l!==0&&(i=l,o=$u(t,l))}if(o===1)throw o=Mo,Dr(t,0),rr(t,i),Rn(t,H()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ur(t,An,Ai),Rn(t,H()),null}function Zu(t,i){var o=xt;xt|=1;try{return t(i)}finally{xt=o,xt===0&&(vs=H()+500,ca&&Zi())}}function Lr(t){nr!==null&&nr.tag===0&&!(xt&6)&&xs();var i=xt;xt|=1;var o=Gn.transition,l=ht;try{if(Gn.transition=null,ht=1,t)return t()}finally{ht=l,Gn.transition=o,xt=i,!(xt&6)&&Zi()}}function Qu(){Nn=_s.current,Nt(_s)}function Dr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,qg(o)),Xt!==null)for(o=Xt.return;o!==null;){var l=o;switch(au(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&la();break;case 3:ps(),Nt(En),Nt(un),Su();break;case 5:vu(l);break;case 4:ps();break;case 13:Nt(Bt);break;case 19:Nt(Bt);break;case 10:hu(l.type._context);break;case 22:case 23:Qu()}o=o.return}if(en=t,Xt=t=sr(t.current,null),on=Nn=i,Kt=0,Mo=null,Xu=La=br=0,An=Eo=null,Rr!==null){for(i=0;i<Rr.length;i++)if(o=Rr[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,h=o.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}o.pending=l}Rr=null}return t}function Jh(t,i){do{var o=Xt;try{if(du(),Sa.current=Ta,ya){for(var l=kt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}ya=!1}if(Pr=0,Jt=$t=kt=null,go=!1,_o=0,Wu.current=null,o===null||o.return===null){Kt=1,Mo=i,Xt=null;break}e:{var h=t,M=o.return,L=o,N=i;if(i=on,L.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var Z=N,_e=L,xe=_e.tag;if(!(_e.mode&1)&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Le=Th(M);if(Le!==null){Le.flags&=-257,wh(Le,M,L,h,i),Le.mode&1&&Eh(h,Z,i),i=Le,N=Z;var ze=i.updateQueue;if(ze===null){var He=new Set;He.add(N),i.updateQueue=He}else ze.add(N);break e}else{if(!(i&1)){Eh(h,Z,i),Ju();break e}N=Error(n(426))}}else if(Ot&&L.mode&1){var Gt=Th(M);if(Gt!==null){!(Gt.flags&65536)&&(Gt.flags|=256),wh(Gt,M,L,h,i),cu(ms(N,L));break e}}h=N=ms(N,L),Kt!==4&&(Kt=2),Eo===null?Eo=[h]:Eo.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Y=yh(h,N,i);qd(h,Y);break e;case 1:L=N;var V=h.type,q=h.stateNode;if(!(h.flags&128)&&(typeof V.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&(tr===null||!tr.has(q)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=Mh(h,L,i);qd(h,Ee);break e}}h=h.return}while(h!==null)}np(o)}catch(Ge){i=Ge,Xt===o&&o!==null&&(Xt=o=o.return);continue}break}while(!0)}function ep(){var t=ba.current;return ba.current=Ta,t===null?Ta:t}function Ju(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),en===null||!(br&268435455)&&!(La&268435455)||rr(en,on)}function Oa(t,i){var o=xt;xt|=2;var l=ep();(en!==t||on!==i)&&(Ai=null,Dr(t,i));do try{x_();break}catch(c){Jh(t,c)}while(!0);if(du(),xt=o,ba.current=l,Xt!==null)throw Error(n(261));return en=null,on=0,Kt}function x_(){for(;Xt!==null;)tp(Xt)}function S_(){for(;Xt!==null&&!Q();)tp(Xt)}function tp(t){var i=sp(t.alternate,t,Nn);t.memoizedProps=t.pendingProps,i===null?np(t):Xt=i,Wu.current=null}function np(t){var i=t;do{var o=i.alternate;if(t=i.return,i.flags&32768){if(o=h_(o,i),o!==null){o.flags&=32767,Xt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Kt=6,Xt=null;return}}else if(o=d_(o,i,Nn),o!==null){Xt=o;return}if(i=i.sibling,i!==null){Xt=i;return}Xt=i=t}while(i!==null);Kt===0&&(Kt=5)}function Ur(t,i,o){var l=ht,c=Gn.transition;try{Gn.transition=null,ht=1,y_(t,i,o,l)}finally{Gn.transition=c,ht=l}return null}function y_(t,i,o,l){do xs();while(nr!==null);if(xt&6)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(ln(t,h),t===en&&(Xt=en=null,on=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Ua||(Ua=!0,op(Fe,function(){return xs(),null})),h=(o.flags&15990)!==0,o.subtreeFlags&15990||h){h=Gn.transition,Gn.transition=null;var M=ht;ht=1;var L=xt;xt|=4,Wu.current=null,m_(t,o),jh(o,t),Hg(Jl),qo=!!Ql,Jl=Ql=null,t.current=o,g_(o),ee(),xt=L,ht=M,Gn.transition=h}else t.current=o;if(Ua&&(Ua=!1,nr=t,Ia=c),h=t.pendingLanes,h===0&&(tr=null),St(o.stateNode),Rn(t,H()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(Da)throw Da=!1,t=Yu,Yu=null,t;return Ia&1&&t.tag!==0&&xs(),h=t.pendingLanes,h&1?t===qu?To++:(To=0,qu=t):To=0,Zi(),null}function xs(){if(nr!==null){var t=Wf(Ia),i=Gn.transition,o=ht;try{if(Gn.transition=null,ht=16>t?16:t,nr===null)var l=!1;else{if(t=nr,nr=null,Ia=0,xt&6)throw Error(n(331));var c=xt;for(xt|=4,Oe=t.current;Oe!==null;){var h=Oe,M=h.child;if(Oe.flags&16){var L=h.deletions;if(L!==null){for(var N=0;N<L.length;N++){var Z=L[N];for(Oe=Z;Oe!==null;){var _e=Oe;switch(_e.tag){case 0:case 11:case 15:yo(8,_e,h)}var xe=_e.child;if(xe!==null)xe.return=_e,Oe=xe;else for(;Oe!==null;){_e=Oe;var me=_e.sibling,Le=_e.return;if(Hh(_e),_e===Z){Oe=null;break}if(me!==null){me.return=Le,Oe=me;break}Oe=Le}}}var ze=h.alternate;if(ze!==null){var He=ze.child;if(He!==null){ze.child=null;do{var Gt=He.sibling;He.sibling=null,He=Gt}while(He!==null)}}Oe=h}}if(h.subtreeFlags&2064&&M!==null)M.return=h,Oe=M;else e:for(;Oe!==null;){if(h=Oe,h.flags&2048)switch(h.tag){case 0:case 11:case 15:yo(9,h,h.return)}var Y=h.sibling;if(Y!==null){Y.return=h.return,Oe=Y;break e}Oe=h.return}}var V=t.current;for(Oe=V;Oe!==null;){M=Oe;var q=M.child;if(M.subtreeFlags&2064&&q!==null)q.return=M,Oe=q;else e:for(M=V;Oe!==null;){if(L=Oe,L.flags&2048)try{switch(L.tag){case 0:case 11:case 15:Pa(9,L)}}catch(Ge){Ht(L,L.return,Ge)}if(L===M){Oe=null;break e}var Ee=L.sibling;if(Ee!==null){Ee.return=L.return,Oe=Ee;break e}Oe=L.return}}if(xt=c,Zi(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(Xe,t)}catch{}l=!0}return l}finally{ht=o,Gn.transition=i}}return!1}function ip(t,i,o){i=ms(o,i),i=yh(t,i,1),t=Ji(t,i,1),i=Sn(),t!==null&&(Vt(t,1,i),Rn(t,i))}function Ht(t,i,o){if(t.tag===3)ip(t,t,o);else for(;i!==null;){if(i.tag===3){ip(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(tr===null||!tr.has(l))){t=ms(o,t),t=Mh(i,t,1),i=Ji(i,t,1),t=Sn(),i!==null&&(Vt(i,1,t),Rn(i,t));break}}i=i.return}}function M_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=Sn(),t.pingedLanes|=t.suspendedLanes&o,en===t&&(on&o)===o&&(Kt===4||Kt===3&&(on&130023424)===on&&500>H()-ju?Dr(t,0):Xu|=o),Rn(t,i)}function rp(t,i){i===0&&(t.mode&1?(i=mt,mt<<=1,!(mt&130023424)&&(mt=4194304)):i=1);var o=Sn();t=Ei(t,i),t!==null&&(Vt(t,i,o),Rn(t,o))}function E_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),rp(t,o)}function T_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),rp(t,o)}var sp;sp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||En.current)wn=!0;else{if(!(t.lanes&o)&&!(i.flags&128))return wn=!1,f_(t,i,o);wn=!!(t.flags&131072)}else wn=!1,Ot&&i.flags&1048576&&Bd(i,da,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ra(t,i),t=i.pendingProps;var c=as(i,un.current);hs(i,o),c=Eu(null,i,l,t,c,o);var h=Tu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Tn(l)?(h=!0,ua(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,gu(i),c.updater=wa,i.stateNode=c,c._reactInternals=i,bu(i,l,t,o),i=Iu(null,i,l,!0,h,o)):(i.tag=0,Ot&&h&&ou(i),xn(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Ra(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=A_(l),t=Zn(l,t),c){case 0:i=Uu(null,i,l,t,o);break e;case 1:i=Lh(null,i,l,t,o);break e;case 11:i=Ah(null,i,l,t,o);break e;case 14:i=Rh(null,i,l,Zn(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Zn(l,c),Uu(t,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Zn(l,c),Lh(t,i,l,c,o);case 3:e:{if(Dh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,Yd(t,i),va(i,l,null,o);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=ms(Error(n(423)),i),i=Uh(t,i,l,o,c);break e}else if(l!==c){c=ms(Error(n(424)),i),i=Uh(t,i,l,o,c);break e}else for(In=qi(i.stateNode.containerInfo.firstChild),Un=i,Ot=!0,Kn=null,o=Xd(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(cs(),l===c){i=wi(t,i,o);break e}xn(t,i,l,o)}i=i.child}return i;case 5:return Kd(i),t===null&&uu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,eu(l,c)?M=null:h!==null&&eu(l,h)&&(i.flags|=32),bh(t,i),xn(t,i,M,o),i.child;case 6:return t===null&&uu(i),null;case 13:return Ih(t,i,o);case 4:return _u(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=fs(i,null,l,o):xn(t,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Zn(l,c),Ah(t,i,l,c,o);case 7:return xn(t,i,i.pendingProps,o),i.child;case 8:return xn(t,i,i.pendingProps.children,o),i.child;case 12:return xn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,Dt(ma,l._currentValue),l._currentValue=M,h!==null)if($n(h.value,M)){if(h.children===c.children&&!En.current){i=wi(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var L=h.dependencies;if(L!==null){M=h.child;for(var N=L.firstContext;N!==null;){if(N.context===l){if(h.tag===1){N=Ti(-1,o&-o),N.tag=2;var Z=h.updateQueue;if(Z!==null){Z=Z.shared;var _e=Z.pending;_e===null?N.next=N:(N.next=_e.next,_e.next=N),Z.pending=N}}h.lanes|=o,N=h.alternate,N!==null&&(N.lanes|=o),pu(h.return,o,i),L.lanes|=o;break}N=N.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,L=M.alternate,L!==null&&(L.lanes|=o),pu(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}xn(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,hs(i,o),c=Hn(c),l=l(c),i.flags|=1,xn(t,i,l,o),i.child;case 14:return l=i.type,c=Zn(l,i.pendingProps),c=Zn(l.type,c),Rh(t,i,l,c,o);case 15:return Ch(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Zn(l,c),Ra(t,i),i.tag=1,Tn(l)?(t=!0,ua(i)):t=!1,hs(i,o),xh(i,l,c),bu(i,l,c,o),Iu(null,i,l,!0,t,o);case 19:return Fh(t,i,o);case 22:return Ph(t,i,o)}throw Error(n(156,i.tag))};function op(t,i){return T(t,i)}function w_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,i,o,l){return new w_(t,i,o,l)}function ec(t){return t=t.prototype,!(!t||!t.isReactComponent)}function A_(t){if(typeof t=="function")return ec(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oe)return 11;if(t===he)return 14}return 2}function sr(t,i){var o=t.alternate;return o===null?(o=Wn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ba(t,i,o,l,c,h){var M=2;if(l=t,typeof t=="function")ec(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case F:return Ir(o.children,c,h,i);case j:M=8,c|=8;break;case C:return t=Wn(12,o,i,c|2),t.elementType=C,t.lanes=h,t;case J:return t=Wn(13,o,i,c),t.elementType=J,t.lanes=h,t;case fe:return t=Wn(19,o,i,c),t.elementType=fe,t.lanes=h,t;case le:return ka(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:M=10;break e;case z:M=9;break e;case oe:M=11;break e;case he:M=14;break e;case se:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Wn(M,o,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Ir(t,i,o,l){return t=Wn(7,t,l,i),t.lanes=o,t}function ka(t,i,o,l){return t=Wn(22,t,l,i),t.elementType=le,t.lanes=o,t.stateNode={isHidden:!1},t}function tc(t,i,o){return t=Wn(6,t,null,i),t.lanes=o,t}function nc(t,i,o){return i=Wn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function R_(t,i,o,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=an(0),this.expirationTimes=an(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=an(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function ic(t,i,o,l,c,h,M,L,N){return t=new R_(t,i,o,L,N),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Wn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},gu(h),t}function C_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function ap(t){if(!t)return Ki;t=t._reactInternals;e:{if(ai(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Tn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Tn(o))return Nd(t,o,i)}return i}function lp(t,i,o,l,c,h,M,L,N){return t=ic(o,l,!0,t,c,h,M,L,N),t.context=ap(null),o=t.current,l=Sn(),c=ir(o),h=Ti(l,c),h.callback=i??null,Ji(o,h,c),t.current.lanes=c,Vt(t,c,l),Rn(t,l),t}function za(t,i,o,l){var c=i.current,h=Sn(),M=ir(c);return o=ap(o),i.context===null?i.context=o:i.pendingContext=o,i=Ti(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=Ji(c,i,M),t!==null&&(ei(t,c,M,h),_a(t,c,M)),M}function Ha(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function up(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function rc(t,i){up(t,i),(t=t.alternate)&&up(t,i)}var cp=typeof reportError=="function"?reportError:function(t){console.error(t)};function sc(t){this._internalRoot=t}Va.prototype.render=sc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));za(t,i,null,null)},Va.prototype.unmount=sc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Lr(function(){za(null,t,null,null)}),i[xi]=null}};function Va(t){this._internalRoot=t}Va.prototype.unstable_scheduleHydration=function(t){if(t){var i=Yf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Xi.length&&i!==0&&i<Xi[o].priority;o++);Xi.splice(o,0,t),o===0&&Kf(t)}};function oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ga(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fp(){}function P_(t,i,o,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var Z=Ha(M);h.call(Z)}}var M=lp(i,l,t,0,null,!1,!1,"",fp);return t._reactRootContainer=M,t[xi]=M.current,ao(t.nodeType===8?t.parentNode:t),Lr(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var L=l;l=function(){var Z=Ha(N);L.call(Z)}}var N=ic(t,0,!1,null,null,!1,!1,"",fp);return t._reactRootContainer=N,t[xi]=N.current,ao(t.nodeType===8?t.parentNode:t),Lr(function(){za(i,N,o,l)}),N}function Wa(t,i,o,l,c){var h=o._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var L=c;c=function(){var N=Ha(M);L.call(N)}}za(i,M,t,c)}else M=P_(o,i,t,c,l);return Ha(M)}Xf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=rn(i.pendingLanes);o!==0&&(Mr(i,o|1),Rn(i,H()),!(xt&6)&&(vs=H()+500,Zi()))}break;case 13:Lr(function(){var l=Ei(t,1);if(l!==null){var c=Sn();ei(l,t,1,c)}}),rc(t,1)}},Ll=function(t){if(t.tag===13){var i=Ei(t,134217728);if(i!==null){var o=Sn();ei(i,t,134217728,o)}rc(t,134217728)}},jf=function(t){if(t.tag===13){var i=ir(t),o=Ei(t,i);if(o!==null){var l=Sn();ei(o,t,i,l)}rc(t,i)}},Yf=function(){return ht},qf=function(t,i){var o=ht;try{return ht=t,i()}finally{ht=o}},Ae=function(t,i,o){switch(i){case"input":if(ut(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var c=aa(l);if(!c)throw Error(n(90));pt(l),ut(l,c)}}}break;case"textarea":pe(t,o);break;case"select":i=o.value,i!=null&&b(t,!!o.multiple,i,!1)}},Ut=Zu,qt=Lr;var b_={usingClientEntryPoint:!1,Events:[co,ss,aa,Pe,rt,Zu]},wo={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},L_={bundleType:wo.bundleType,version:wo.version,rendererPackageName:wo.rendererPackageName,rendererConfig:wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Wo(t),t===null?null:t.stateNode},findFiberByHostInstance:wo.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xa.isDisabled&&Xa.supportsFiber)try{Xe=Xa.inject(L_),st=Xa}catch{}}return Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b_,Cn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oc(i))throw Error(n(200));return C_(t,i,null,o)},Cn.createRoot=function(t,i){if(!oc(t))throw Error(n(299));var o=!1,l="",c=cp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=ic(t,1,!1,null,null,o,!1,l,c),t[xi]=i.current,ao(t.nodeType===8?t.parentNode:t),new sc(i)},Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Wo(i),t=t===null?null:t.stateNode,t},Cn.flushSync=function(t){return Lr(t)},Cn.hydrate=function(t,i,o){if(!Ga(i))throw Error(n(200));return Wa(null,t,i,!0,o)},Cn.hydrateRoot=function(t,i,o){if(!oc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,c=!1,h="",M=cp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=lp(i,null,t,1,o??null,c,!1,h,M),t[xi]=i.current,ao(t),l)for(t=0;t<l.length;t++)o=l[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new Va(i)},Cn.render=function(t,i,o){if(!Ga(i))throw Error(n(200));return Wa(null,t,i,!1,o)},Cn.unmountComponentAtNode=function(t){if(!Ga(t))throw Error(n(40));return t._reactRootContainer?(Lr(function(){Wa(null,null,t,!1,function(){t._reactRootContainer=null,t[xi]=null})}),!0):!1},Cn.unstable_batchedUpdates=Zu,Cn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Ga(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Wa(t,i,o,!1,l)},Cn.version="18.3.1-next-f1338f8080-20240426",Cn}var xp;function k_(){if(xp)return uc.exports;xp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),uc.exports=B_(),uc.exports}var Sp;function z_(){if(Sp)return ja;Sp=1;var s=k_();return ja.createRoot=s.createRoot,ja.hydrateRoot=s.hydrateRoot,ja}var H_=z_();const V_=()=>nt.jsxs("header",{className:"header-container",children:[nt.jsx("h1",{className:"header-title",children:"Arystans' Portfolio"}),nt.jsx("p",{className:"header-subtitle",children:"FullStack Developer | Node Enthusiast"})]}),G_=({title:s,description:e,github:n})=>{const r=()=>{window.open(n,"_blank")};return nt.jsxs("div",{className:"project-card",onClick:r,children:[nt.jsx("h3",{className:"project-title",children:s}),nt.jsx("p",{className:"project-description",children:e})]})};var dc={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var yp;function W_(){return yp||(yp=1,function(s){(function(){var e={}.hasOwnProperty;function n(){for(var u="",f=0;f<arguments.length;f++){var d=arguments[f];d&&(u=a(u,r(d)))}return u}function r(u){if(typeof u=="string"||typeof u=="number")return u;if(typeof u!="object")return"";if(Array.isArray(u))return n.apply(null,u);if(u.toString!==Object.prototype.toString&&!u.toString.toString().includes("[native code]"))return u.toString();var f="";for(var d in u)e.call(u,d)&&u[d]&&(f=a(f,d));return f}function a(u,f){return f?u?u+" "+f:u+f:u}s.exports?(n.default=n,s.exports=n):window.classNames=n})()}(dc)),dc.exports}var X_=W_();const Mm=ym(X_),j_=["xxl","xl","lg","md","sm","xs"],Y_="xs",q_=Oi.createContext({prefixes:{},breakpoints:j_,minBreakpoint:Y_});function $_(s,e){const{prefixes:n}=Oi.useContext(q_);return s||n[e]||e}function K_(s,e){let n=0;return Oi.Children.map(s,r=>Oi.isValidElement(r)?e(r,n++):r)}const Mp=1e3;function Z_(s,e,n){const r=(s-e)/(n-e)*100;return Math.round(r*Mp)/Mp}function Ep({min:s,now:e,max:n,label:r,visuallyHidden:a,striped:u,animated:f,className:d,style:p,variant:m,bsPrefix:_,...v},x){return nt.jsx("div",{ref:x,...v,role:"progressbar",className:Mm(d,`${_}-bar`,{[`bg-${m}`]:m,[`${_}-bar-animated`]:f,[`${_}-bar-striped`]:f||u}),style:{width:`${Z_(e,s,n)}%`,...p},"aria-valuenow":e,"aria-valuemin":s,"aria-valuemax":n,children:a?nt.jsx("span",{className:"visually-hidden",children:r}):r})}const pl=Oi.forwardRef(({isChild:s=!1,...e},n)=>{const r={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...e};if(r.bsPrefix=$_(r.bsPrefix,"progress"),s)return Ep(r,n);const{min:a,now:u,max:f,label:d,visuallyHidden:p,striped:m,animated:_,bsPrefix:v,variant:x,className:y,children:w,...R}=r;return nt.jsx("div",{ref:n,...R,className:Mm(y,v),children:w?K_(w,S=>Oi.cloneElement(S,{isChild:!0})):Ep({min:a,now:u,max:f,label:d,visuallyHidden:p,striped:m,animated:_,bsPrefix:v,variant:x},n)})});pl.displayName="ProgressBar";const Q_=()=>nt.jsxs("div",{className:"stats-container",children:[nt.jsxs("div",{className:"stat",children:[nt.jsx("h4",{className:"stat-title",children:"JavaScript"}),nt.jsx(pl,{now:85,label:"85%",className:"stat-progress",variant:"info",style:{height:"15px",borderRadius:"20px"}})]}),nt.jsxs("div",{className:"stat",children:[nt.jsx("h4",{className:"stat-title",children:"React"}),nt.jsx(pl,{now:90,label:"90%",className:"stat-progress",variant:"success",style:{height:"15px",borderRadius:"20px"}})]}),nt.jsxs("div",{className:"stat",children:[nt.jsx("h4",{className:"stat-title",children:"CSS / SCSS"}),nt.jsx(pl,{now:75,label:"75%",className:"stat-progress",variant:"warning",style:{height:"15px",borderRadius:"20px"}})]})]});var Em={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Tp=Yr.createContext&&Yr.createContext(Em),J_=["attr","size","title"];function ev(s,e){if(s==null)return{};var n=tv(s,e),r,a;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);for(a=0;a<u.length;a++)r=u[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(s,r)&&(n[r]=s[r])}return n}function tv(s,e){if(s==null)return{};var n={};for(var r in s)if(Object.prototype.hasOwnProperty.call(s,r)){if(e.indexOf(r)>=0)continue;n[r]=s[r]}return n}function yl(){return yl=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=n[r])}return s},yl.apply(this,arguments)}function wp(s,e){var n=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(s,a).enumerable})),n.push.apply(n,r)}return n}function Ml(s){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?wp(Object(n),!0).forEach(function(r){nv(s,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(n)):wp(Object(n)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(n,r))})}return s}function nv(s,e,n){return e=iv(e),e in s?Object.defineProperty(s,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):s[e]=n,s}function iv(s){var e=rv(s,"string");return typeof e=="symbol"?e:e+""}function rv(s,e){if(typeof s!="object"||!s)return s;var n=s[Symbol.toPrimitive];if(n!==void 0){var r=n.call(s,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function Tm(s){return s&&s.map((e,n)=>Yr.createElement(e.tag,Ml({key:n},e.attr),Tm(e.child)))}function Df(s){return e=>Yr.createElement(sv,yl({attr:Ml({},s.attr)},e),Tm(s.child))}function sv(s){var e=n=>{var{attr:r,size:a,title:u}=s,f=ev(s,J_),d=a||n.size||"1em",p;return n.className&&(p=n.className),s.className&&(p=(p?p+" ":"")+s.className),Yr.createElement("svg",yl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,f,{className:p,style:Ml(Ml({color:s.color||n.color},n.style),s.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),u&&Yr.createElement("title",null,u),s.children)};return Tp!==void 0?Yr.createElement(Tp.Consumer,null,n=>e(n)):e(Em)}function ov(s){return Df({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(s)}function av(s){return Df({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(s)}function lv(s){return Df({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(s)}const uv=()=>nt.jsxs("div",{className:"social-links-container",children:[nt.jsx("a",{href:"https://www.linkedin.com/in/arystan-tanekov-089639338?trk=contact-info",target:"_blank",className:"social-button",children:nt.jsx(lv,{})}),nt.jsx("a",{href:"https://github.com/avomasrq",target:"_blank",className:"social-button",children:nt.jsx(ov,{})}),nt.jsx("a",{href:"https://www.instagram.com/avomasrq?igsh=dHQ4ZDJ6aHdhcXk3&utm_source=qr",target:"_blank",className:"social-button",children:nt.jsx(av,{})})]}),cv=()=>nt.jsxs("div",{className:"about-me-card",children:[nt.jsx("h2",{className:"about-me-title",children:"About Me"}),nt.jsx("p",{className:"about-me-description",children:"Hi, I'm a passionate frontend and backend developer with a love for building clean and modern web applications. Right now i study in Tamos education in 10 th grade. I'm in the AP class on a engineering package. I also love sports. I used to do boxing 2 years;however, due to lack of time i train at home. Finally, i really like studying new skills and languages."})]});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uf="171",fv=0,Ap=1,dv=2,wm=1,hv=2,Di=3,gr=0,bn=1,Ui=2,pr=0,Fs=1,Rp=2,Cp=3,Pp=4,pv=5,Gr=100,mv=101,gv=102,_v=103,vv=104,xv=200,Sv=201,yv=202,Mv=203,Gc=204,Wc=205,Ev=206,Tv=207,wv=208,Av=209,Rv=210,Cv=211,Pv=212,bv=213,Lv=214,Xc=0,jc=1,Yc=2,ks=3,qc=4,$c=5,Kc=6,Zc=7,Am=0,Dv=1,Uv=2,mr=0,Iv=1,Nv=2,Fv=3,Ov=4,Bv=5,kv=6,zv=7,Rm=300,zs=301,Hs=302,Qc=303,Jc=304,Al=306,ef=1e3,Xr=1001,tf=1002,oi=1003,Hv=1004,Ya=1005,hi=1006,hc=1007,jr=1008,Bi=1009,Cm=1010,Pm=1011,Io=1012,If=1013,qr=1014,Ii=1015,No=1016,Nf=1017,Ff=1018,Vs=1020,bm=35902,Lm=1021,Dm=1022,si=1023,Um=1024,Im=1025,Os=1026,Gs=1027,Nm=1028,Of=1029,Fm=1030,Bf=1031,kf=1033,ml=33776,gl=33777,_l=33778,vl=33779,nf=35840,rf=35841,sf=35842,of=35843,af=36196,lf=37492,uf=37496,cf=37808,ff=37809,df=37810,hf=37811,pf=37812,mf=37813,gf=37814,_f=37815,vf=37816,xf=37817,Sf=37818,yf=37819,Mf=37820,Ef=37821,xl=36492,Tf=36494,wf=36495,Om=36283,Af=36284,Rf=36285,Cf=36286,Vv=3200,Gv=3201,Wv=0,Xv=1,hr="",jn="srgb",Ws="srgb-linear",El="linear",Ct="srgb",Ss=7680,bp=519,jv=512,Yv=513,qv=514,Bm=515,$v=516,Kv=517,Zv=518,Qv=519,Lp=35044,Dp="300 es",Ni=2e3,Tl=2001;class js{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pc=Math.PI/180,Pf=180/Math.PI;function Fo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]).toLowerCase()}function gt(s,e,n){return Math.max(e,Math.min(n,s))}function Jv(s,e){return(s%e+e)%e}function mc(s,e,n){return(1-n)*s+n*e}function Ro(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class bt{constructor(e=0,n=0){bt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,a,u,f,d,p,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=u,_[5]=p,_[6]=r,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],_=r[4],v=r[7],x=r[2],y=r[5],w=r[8],R=a[0],S=a[3],g=a[6],I=a[1],D=a[4],P=a[7],X=a[2],B=a[5],F=a[8];return u[0]=f*R+d*I+p*X,u[3]=f*S+d*D+p*B,u[6]=f*g+d*P+p*F,u[1]=m*R+_*I+v*X,u[4]=m*S+_*D+v*B,u[7]=m*g+_*P+v*F,u[2]=x*R+y*I+w*X,u[5]=x*S+y*D+w*B,u[8]=x*g+y*P+w*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return n*f*_-n*d*m-r*u*_+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=_*f-d*m,x=d*p-_*u,y=m*u-f*p,w=n*v+r*x+a*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=v*R,e[1]=(a*m-_*r)*R,e[2]=(d*r-a*f)*R,e[3]=x*R,e[4]=(_*n-a*p)*R,e[5]=(a*u-d*n)*R,e[6]=y*R,e[7]=(r*p-m*n)*R,e[8]=(f*n-r*u)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(gc.makeScale(e,n)),this}rotate(e){return this.premultiply(gc.makeRotation(-e)),this}translate(e,n){return this.premultiply(gc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gc=new ot;function km(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function wl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function e0(){const s=wl("canvas");return s.style.display="block",s}const Up={};function Is(s){s in Up||(Up[s]=!0,console.warn(s))}function t0(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function n0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function i0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ip=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Np=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function r0(){const s={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(a,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Ct&&(a.r=Fi(a.r),a.g=Fi(a.g),a.b=Fi(a.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ct&&(a.r=Bs(a.r),a.g=Bs(a.g),a.b=Bs(a.b))),a},fromWorkingColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},toWorkingColorSpace:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===hr?El:this.spaces[a].transfer},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,f){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ws]:{primaries:e,whitePoint:r,transfer:El,toXYZ:Ip,fromXYZ:Np,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:e,whitePoint:r,transfer:Ct,toXYZ:Ip,fromXYZ:Np,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),s}const Et=r0();function Fi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ys;class s0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=wl("canvas")),ys.width=e.width,ys.height=e.height;const r=ys.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ys}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=wl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Fi(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Fi(n[r]/255)*255):n[r]=Fi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let o0=0;class zm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Fo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(_c(a[f].image)):u.push(_c(a[f]))}else u=_c(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function _c(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?s0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let a0=0;class Ln extends js{constructor(e=Ln.DEFAULT_IMAGE,n=Ln.DEFAULT_MAPPING,r=Xr,a=Xr,u=hi,f=jr,d=si,p=Bi,m=Ln.DEFAULT_ANISOTROPY,_=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Fo(),this.name="",this.source=new zm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ef:e.x=e.x-Math.floor(e.x);break;case Xr:e.x=e.x<0?0:1;break;case tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ef:e.y=e.y-Math.floor(e.y);break;case Xr:e.y=e.y<0?0:1;break;case tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Rm;Ln.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,n=0,r=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],_=p[4],v=p[8],x=p[1],y=p[5],w=p[9],R=p[2],S=p[6],g=p[10];if(Math.abs(_-x)<.01&&Math.abs(v-R)<.01&&Math.abs(w-S)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+R)<.1&&Math.abs(w+S)<.1&&Math.abs(m+y+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,P=(y+1)/2,X=(g+1)/2,B=(_+x)/4,F=(v+R)/4,j=(w+S)/4;return D>P&&D>X?D<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(D),a=B/r,u=F/r):P>X?P<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(P),r=B/a,u=j/a):X<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(X),r=F/u,a=j/u),this.set(r,a,u,n),this}let I=Math.sqrt((S-w)*(S-w)+(v-R)*(v-R)+(x-_)*(x-_));return Math.abs(I)<.001&&(I=1),this.x=(S-w)/I,this.y=(v-R)/I,this.z=(x-_)/I,this.w=Math.acos((m+y+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class l0 extends js{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Wt(0,0,e,n),this.scissorTest=!1,this.viewport=new Wt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Ln(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new zm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends l0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Hm extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=oi,this.minFilter=oi,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class u0 extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=oi,this.minFilter=oi,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];const x=u[f+0],y=u[f+1],w=u[f+2],R=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(d===1){e[n+0]=x,e[n+1]=y,e[n+2]=w,e[n+3]=R;return}if(v!==R||p!==x||m!==y||_!==w){let S=1-d;const g=p*x+m*y+_*w+v*R,I=g>=0?1:-1,D=1-g*g;if(D>Number.EPSILON){const X=Math.sqrt(D),B=Math.atan2(X,g*I);S=Math.sin(S*B)/X,d=Math.sin(d*B)/X}const P=d*I;if(p=p*S+x*P,m=m*S+y*P,_=_*S+w*P,v=v*S+R*P,S===1-d){const X=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=X,m*=X,_*=X,v*=X}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],_=r[a+3],v=u[f],x=u[f+1],y=u[f+2],w=u[f+3];return e[n]=d*w+_*v+p*y-m*x,e[n+1]=p*w+_*x+m*v-d*y,e[n+2]=m*w+_*y+d*x-p*v,e[n+3]=_*w-d*v-p*x-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(a/2),v=d(u/2),x=p(r/2),y=p(a/2),w=p(u/2);switch(f){case"XYZ":this._x=x*_*v+m*y*w,this._y=m*y*v-x*_*w,this._z=m*_*w+x*y*v,this._w=m*_*v-x*y*w;break;case"YXZ":this._x=x*_*v+m*y*w,this._y=m*y*v-x*_*w,this._z=m*_*w-x*y*v,this._w=m*_*v+x*y*w;break;case"ZXY":this._x=x*_*v-m*y*w,this._y=m*y*v+x*_*w,this._z=m*_*w+x*y*v,this._w=m*_*v-x*y*w;break;case"ZYX":this._x=x*_*v-m*y*w,this._y=m*y*v+x*_*w,this._z=m*_*w-x*y*v,this._w=m*_*v+x*y*w;break;case"YZX":this._x=x*_*v+m*y*w,this._y=m*y*v+x*_*w,this._z=m*_*w-x*y*v,this._w=m*_*v-x*y*w;break;case"XZY":this._x=x*_*v-m*y*w,this._y=m*y*v-x*_*w,this._z=m*_*w+x*y*v,this._w=m*_*v+x*y*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],_=n[6],v=n[10],x=r+d+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(_-p)*y,this._y=(u-m)*y,this._z=(f-a)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(_-p)/y,this._x=.25*y,this._y=(a+f)/y,this._z=(u+m)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(u-m)/y,this._x=(a+f)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(f-a)/y,this._x=(u+m)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+f*d+a*m-u*p,this._y=a*_+f*p+u*d-r*m,this._z=u*_+f*m+r*p-a*d,this._w=f*_-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-n;return this._w=y*f+n*this._w,this._x=y*r+n*this._x,this._y=y*a+n*this._y,this._z=y*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),v=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=f*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,n=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Fp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Fp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),_=2*(d*n-u*a),v=2*(u*r-f*n);return this.x=n+p*m+f*v-d*_,this.y=r+p*_+d*m-u*v,this.z=a+p*v+u*_-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return vc.copy(this).projectOnVector(e),this.sub(vc)}reflect(e){return this.sub(vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vc=new ne,Fp=new Oo;class Bo{constructor(e=new ne(1/0,1/0,1/0),n=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ti):ti.fromBufferAttribute(u,f),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),qa.copy(r.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),$a.subVectors(this.max,Co),Ms.subVectors(e.a,Co),Es.subVectors(e.b,Co),Ts.subVectors(e.c,Co),ar.subVectors(Es,Ms),lr.subVectors(Ts,Es),Nr.subVectors(Ms,Ts);let n=[0,-ar.z,ar.y,0,-lr.z,lr.y,0,-Nr.z,Nr.y,ar.z,0,-ar.x,lr.z,0,-lr.x,Nr.z,0,-Nr.x,-ar.y,ar.x,0,-lr.y,lr.x,0,-Nr.y,Nr.x,0];return!xc(n,Ms,Es,Ts,$a)||(n=[1,0,0,0,1,0,0,0,1],!xc(n,Ms,Es,Ts,$a))?!1:(Ka.crossVectors(ar,lr),n=[Ka.x,Ka.y,Ka.z],xc(n,Ms,Es,Ts,$a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],ti=new ne,qa=new Bo,Ms=new ne,Es=new ne,Ts=new ne,ar=new ne,lr=new ne,Nr=new ne,Co=new ne,$a=new ne,Ka=new ne,Fr=new ne;function xc(s,e,n,r,a){for(let u=0,f=s.length-3;u<=f;u+=3){Fr.fromArray(s,u);const d=a.x*Math.abs(Fr.x)+a.y*Math.abs(Fr.y)+a.z*Math.abs(Fr.z),p=e.dot(Fr),m=n.dot(Fr),_=r.dot(Fr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const c0=new Bo,Po=new ne,Sc=new ne;class zf{constructor(e=new ne,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):c0.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const n=Po.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Po,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(Sc)),this.expandByPoint(Po.copy(e.center).sub(Sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new ne,yc=new ne,Za=new ne,ur=new ne,Mc=new ne,Qa=new ne,Ec=new ne;class f0{constructor(e=new ne,n=new ne(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){yc.copy(e).add(n).multiplyScalar(.5),Za.copy(n).sub(e).normalize(),ur.copy(this.origin).sub(yc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(Za),d=ur.dot(this.direction),p=-ur.dot(Za),m=ur.lengthSq(),_=Math.abs(1-f*f);let v,x,y,w;if(_>0)if(v=f*p-d,x=f*d-p,w=u*_,v>=0)if(x>=-w)if(x<=w){const R=1/_;v*=R,x*=R,y=v*(v+f*x+2*d)+x*(f*v+x+2*p)+m}else x=u,v=Math.max(0,-(f*x+d)),y=-v*v+x*(x+2*p)+m;else x=-u,v=Math.max(0,-(f*x+d)),y=-v*v+x*(x+2*p)+m;else x<=-w?(v=Math.max(0,-(-f*u+d)),x=v>0?-u:Math.min(Math.max(-u,-p),u),y=-v*v+x*(x+2*p)+m):x<=w?(v=0,x=Math.min(Math.max(-u,-p),u),y=x*(x+2*p)+m):(v=Math.max(0,-(f*u+d)),x=v>0?u:Math.min(Math.max(-u,-p),u),y=-v*v+x*(x+2*p)+m);else x=f>0?-u:u,v=Math.max(0,-(f*x+d)),y=-v*v+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(yc).addScaledVector(Za,x),y}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const r=Ci.dot(this.direction),a=Ci.dot(Ci)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(u=(e.min.y-x.y)*_,f=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,f=(e.min.y-x.y)*_),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),v>=0?(d=(e.min.z-x.z)*v,p=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,p=(e.min.z-x.z)*v),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,r,a,u){Mc.subVectors(n,e),Qa.subVectors(r,e),Ec.crossVectors(Mc,Qa);let f=this.direction.dot(Ec),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ur.subVectors(this.origin,e);const p=d*this.direction.dot(Qa.crossVectors(ur,Qa));if(p<0)return null;const m=d*this.direction.dot(Mc.cross(ur));if(m<0||p+m>f)return null;const _=-d*ur.dot(Ec);return _<0?null:this.at(_/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,n,r,a,u,f,d,p,m,_,v,x,y,w,R,S){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,_,v,x,y,w,R,S)}set(e,n,r,a,u,f,d,p,m,_,v,x,y,w,R,S){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=y,g[7]=w,g[11]=R,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/ws.setFromMatrixColumn(e,0).length(),u=1/ws.setFromMatrixColumn(e,1).length(),f=1/ws.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=f*_,y=f*v,w=d*_,R=d*v;n[0]=p*_,n[4]=-p*v,n[8]=m,n[1]=y+w*m,n[5]=x-R*m,n[9]=-d*p,n[2]=R-x*m,n[6]=w+y*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*_,y=p*v,w=m*_,R=m*v;n[0]=x+R*d,n[4]=w*d-y,n[8]=f*m,n[1]=f*v,n[5]=f*_,n[9]=-d,n[2]=y*d-w,n[6]=R+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*_,y=p*v,w=m*_,R=m*v;n[0]=x-R*d,n[4]=-f*v,n[8]=w+y*d,n[1]=y+w*d,n[5]=f*_,n[9]=R-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*_,y=f*v,w=d*_,R=d*v;n[0]=p*_,n[4]=w*m-y,n[8]=x*m+R,n[1]=p*v,n[5]=R*m+x,n[9]=y*m-w,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,y=f*m,w=d*p,R=d*m;n[0]=p*_,n[4]=R-x*v,n[8]=w*v+y,n[1]=v,n[5]=f*_,n[9]=-d*_,n[2]=-m*_,n[6]=y*v+w,n[10]=x-R*v}else if(e.order==="XZY"){const x=f*p,y=f*m,w=d*p,R=d*m;n[0]=p*_,n[4]=-v,n[8]=m*_,n[1]=x*v+R,n[5]=f*_,n[9]=y*v-w,n[2]=w*v-y,n[6]=d*_,n[10]=R*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(d0,e,h0)}lookAt(e,n,r){const a=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),cr.crossVectors(r,Fn),cr.lengthSq()===0&&(Math.abs(r.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),cr.crossVectors(r,Fn)),cr.normalize(),Ja.crossVectors(Fn,cr),a[0]=cr.x,a[4]=Ja.x,a[8]=Fn.x,a[1]=cr.y,a[5]=Ja.y,a[9]=Fn.y,a[2]=cr.z,a[6]=Ja.z,a[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],_=r[1],v=r[5],x=r[9],y=r[13],w=r[2],R=r[6],S=r[10],g=r[14],I=r[3],D=r[7],P=r[11],X=r[15],B=a[0],F=a[4],j=a[8],C=a[12],A=a[1],z=a[5],oe=a[9],J=a[13],fe=a[2],he=a[6],se=a[10],le=a[14],k=a[3],ae=a[7],re=a[11],U=a[15];return u[0]=f*B+d*A+p*fe+m*k,u[4]=f*F+d*z+p*he+m*ae,u[8]=f*j+d*oe+p*se+m*re,u[12]=f*C+d*J+p*le+m*U,u[1]=_*B+v*A+x*fe+y*k,u[5]=_*F+v*z+x*he+y*ae,u[9]=_*j+v*oe+x*se+y*re,u[13]=_*C+v*J+x*le+y*U,u[2]=w*B+R*A+S*fe+g*k,u[6]=w*F+R*z+S*he+g*ae,u[10]=w*j+R*oe+S*se+g*re,u[14]=w*C+R*J+S*le+g*U,u[3]=I*B+D*A+P*fe+X*k,u[7]=I*F+D*z+P*he+X*ae,u[11]=I*j+D*oe+P*se+X*re,u[15]=I*C+D*J+P*le+X*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],_=e[2],v=e[6],x=e[10],y=e[14],w=e[3],R=e[7],S=e[11],g=e[15];return w*(+u*p*v-a*m*v-u*d*x+r*m*x+a*d*y-r*p*y)+R*(+n*p*y-n*m*x+u*f*x-a*f*y+a*m*_-u*p*_)+S*(+n*m*v-n*d*y-u*f*v+r*f*y+u*d*_-r*m*_)+g*(-a*d*_-n*p*v+n*d*x+a*f*v-r*f*x+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=e[9],x=e[10],y=e[11],w=e[12],R=e[13],S=e[14],g=e[15],I=v*S*m-R*x*m+R*p*y-d*S*y-v*p*g+d*x*g,D=w*x*m-_*S*m-w*p*y+f*S*y+_*p*g-f*x*g,P=_*R*m-w*v*m+w*d*y-f*R*y-_*d*g+f*v*g,X=w*v*p-_*R*p-w*d*x+f*R*x+_*d*S-f*v*S,B=n*I+r*D+a*P+u*X;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/B;return e[0]=I*F,e[1]=(R*x*u-v*S*u-R*a*y+r*S*y+v*a*g-r*x*g)*F,e[2]=(d*S*u-R*p*u+R*a*m-r*S*m-d*a*g+r*p*g)*F,e[3]=(v*p*u-d*x*u-v*a*m+r*x*m+d*a*y-r*p*y)*F,e[4]=D*F,e[5]=(_*S*u-w*x*u+w*a*y-n*S*y-_*a*g+n*x*g)*F,e[6]=(w*p*u-f*S*u-w*a*m+n*S*m+f*a*g-n*p*g)*F,e[7]=(f*x*u-_*p*u+_*a*m-n*x*m-f*a*y+n*p*y)*F,e[8]=P*F,e[9]=(w*v*u-_*R*u-w*r*y+n*R*y+_*r*g-n*v*g)*F,e[10]=(f*R*u-w*d*u+w*r*m-n*R*m-f*r*g+n*d*g)*F,e[11]=(_*d*u-f*v*u-_*r*m+n*v*m+f*r*y-n*d*y)*F,e[12]=X*F,e[13]=(_*R*a-w*v*a+w*r*x-n*R*x-_*r*S+n*v*S)*F,e[14]=(w*d*a-f*R*a-w*r*p+n*R*p+f*r*S-n*d*S)*F,e[15]=(f*v*a-_*d*a+_*r*p-n*v*p-f*r*x+n*d*x)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,_=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,_*d+r,_*p-a*f,0,m*p-a*d,_*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,_=f+f,v=d+d,x=u*m,y=u*_,w=u*v,R=f*_,S=f*v,g=d*v,I=p*m,D=p*_,P=p*v,X=r.x,B=r.y,F=r.z;return a[0]=(1-(R+g))*X,a[1]=(y+P)*X,a[2]=(w-D)*X,a[3]=0,a[4]=(y-P)*B,a[5]=(1-(x+g))*B,a[6]=(S+I)*B,a[7]=0,a[8]=(w+D)*F,a[9]=(S-I)*F,a[10]=(1-(x+R))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=ws.set(a[0],a[1],a[2]).length();const f=ws.set(a[4],a[5],a[6]).length(),d=ws.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ni.copy(this);const m=1/u,_=1/f,v=1/d;return ni.elements[0]*=m,ni.elements[1]*=m,ni.elements[2]*=m,ni.elements[4]*=_,ni.elements[5]*=_,ni.elements[6]*=_,ni.elements[8]*=v,ni.elements[9]*=v,ni.elements[10]*=v,n.setFromRotationMatrix(ni),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Ni){const p=this.elements,m=2*u/(n-e),_=2*u/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let y,w;if(d===Ni)y=-(f+u)/(f-u),w=-2*f*u/(f-u);else if(d===Tl)y=-f/(f-u),w=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Ni){const p=this.elements,m=1/(n-e),_=1/(r-a),v=1/(f-u),x=(n+e)*m,y=(r+a)*_;let w,R;if(d===Ni)w=(f+u)*v,R=-2*v;else if(d===Tl)w=u*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=R,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const ws=new ne,ni=new Yt,d0=new ne(0,0,0),h0=new ne(1,1,1),cr=new ne,Ja=new ne,Fn=new ne,Op=new Yt,Bp=new Oo;class ki{constructor(e=0,n=0,r=0,a=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],_=a[9],v=a[2],x=a[6],y=a[10];switch(n){case"XYZ":this._y=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(gt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-gt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Op.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Op,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bp.setFromEuler(this),this.setFromQuaternion(Bp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class Vm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let p0=0;const kp=new ne,As=new Oo,Pi=new Yt,el=new ne,bo=new ne,m0=new ne,g0=new Oo,zp=new ne(1,0,0),Hp=new ne(0,1,0),Vp=new ne(0,0,1),Gp={type:"added"},_0={type:"removed"},Rs={type:"childadded",child:null},Tc={type:"childremoved",child:null};class Bn extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new ne,n=new ki,r=new Oo,a=new ne(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Yt},normalMatrix:{value:new ot}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(zp,e)}rotateY(e){return this.rotateOnAxis(Hp,e)}rotateZ(e){return this.rotateOnAxis(Vp,e)}translateOnAxis(e,n){return kp.copy(e).applyQuaternion(this.quaternion),this.position.add(kp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(zp,e)}translateY(e){return this.translateOnAxis(Hp,e)}translateZ(e){return this.translateOnAxis(Vp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?el.copy(e):el.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(bo,el,this.up):Pi.lookAt(el,bo,this.up),this.quaternion.setFromRotationMatrix(Pi),a&&(Pi.extractRotation(a.matrixWorld),As.setFromRotationMatrix(Pi),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gp),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(_0),Tc.child=e,this.dispatchEvent(Tc),Tc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gp),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,m0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,g0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];u(e.shapes,v)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),_=f(e.images),v=f(e.shapes),x=f(e.skeletons),y=f(e.animations),w=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),w.length>0&&(r.nodes=w)}return r.object=a,r;function f(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Bn.DEFAULT_UP=new ne(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new ne,bi=new ne,wc=new ne,Li=new ne,Cs=new ne,Ps=new ne,Wp=new ne,Ac=new ne,Rc=new ne,Cc=new ne,Pc=new Wt,bc=new Wt,Lc=new Wt;class ri{constructor(e=new ne,n=new ne,r=new ne){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ii.subVectors(e,n),a.cross(ii);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ii.subVectors(a,n),bi.subVectors(r,n),wc.subVectors(e,n);const f=ii.dot(ii),d=ii.dot(bi),p=ii.dot(wc),m=bi.dot(bi),_=bi.dot(wc),v=f*m-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,y=(m*p-d*_)*x,w=(f*_-d*p)*x;return u.set(1-y-w,w,y)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Li)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Li.x),p.addScaledVector(f,Li.y),p.addScaledVector(d,Li.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return Pc.setScalar(0),bc.setScalar(0),Lc.setScalar(0),Pc.fromBufferAttribute(e,n),bc.fromBufferAttribute(e,r),Lc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Pc,u.x),f.addScaledVector(bc,u.y),f.addScaledVector(Lc,u.z),f}static isFrontFacing(e,n,r,a){return ii.subVectors(r,n),bi.subVectors(e,n),ii.cross(bi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),ii.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return ri.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;Cs.subVectors(a,r),Ps.subVectors(u,r),Ac.subVectors(e,r);const p=Cs.dot(Ac),m=Ps.dot(Ac);if(p<=0&&m<=0)return n.copy(r);Rc.subVectors(e,a);const _=Cs.dot(Rc),v=Ps.dot(Rc);if(_>=0&&v<=_)return n.copy(a);const x=p*v-_*m;if(x<=0&&p>=0&&_<=0)return f=p/(p-_),n.copy(r).addScaledVector(Cs,f);Cc.subVectors(e,u);const y=Cs.dot(Cc),w=Ps.dot(Cc);if(w>=0&&y<=w)return n.copy(u);const R=y*m-p*w;if(R<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(Ps,d);const S=_*w-y*v;if(S<=0&&v-_>=0&&y-w>=0)return Wp.subVectors(u,a),d=(v-_)/(v-_+(y-w)),n.copy(a).addScaledVector(Wp,d);const g=1/(S+R+x);return f=R*g,d=x*g,n.copy(r).addScaledVector(Cs,f).addScaledVector(Ps,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},tl={h:0,s:0,l:0};function Dc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Pt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Et.workingColorSpace){return this.r=e,this.g=n,this.b=r,Et.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Et.workingColorSpace){if(e=Jv(e,1),n=gt(n,0,1),r=gt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Dc(f,u,e+1/3),this.g=Dc(f,u,e),this.b=Dc(f,u,e-1/3)}return Et.toWorkingColorSpace(this,a),this}setStyle(e,n=jn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jn){const r=Gm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return Et.fromWorkingColorSpace(pn.copy(this),e),Math.round(gt(pn.r*255,0,255))*65536+Math.round(gt(pn.g*255,0,255))*256+Math.round(gt(pn.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.fromWorkingColorSpace(pn.copy(this),n);const r=pn.r,a=pn.g,u=pn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const _=(d+f)/2;if(d===f)p=0,m=0;else{const v=f-d;switch(m=_<=.5?v/(f+d):v/(2-f-d),f){case r:p=(a-u)/v+(a<u?6:0);break;case a:p=(u-r)/v+2;break;case u:p=(r-a)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=Et.workingColorSpace){return Et.fromWorkingColorSpace(pn.copy(this),n),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=jn){Et.fromWorkingColorSpace(pn.copy(this),e);const n=pn.r,r=pn.g,a=pn.b;return e!==jn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+n,fr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(fr),e.getHSL(tl);const r=mc(fr.h,tl.h,n),a=mc(fr.s,tl.s,n),u=mc(fr.l,tl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Pt;Pt.NAMES=Gm;let v0=0;class Rl extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=Fs,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Wc,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(r.blending=this.blending),this.side!==gr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Gc&&(r.blendSrc=this.blendSrc),this.blendDst!==Wc&&(r.blendDst=this.blendDst),this.blendEquation!==Gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hf extends Rl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Am,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new ne,nl=new bt;class mi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Lp,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)nl.fromBufferAttribute(this,n),nl.applyMatrix3(e),this.setXY(n,nl.x,nl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix3(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix4(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyNormalMatrix(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.transformDirection(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ro(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Pn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ro(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ro(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ro(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ro(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),a=Pn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),a=Pn(a,this.array),u=Pn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lp&&(e.usage=this.usage),e}}class Wm extends mi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Xm extends mi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class gi extends mi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let x0=0;const Xn=new Yt,Uc=new Bn,bs=new ne,On=new Bo,Lo=new Bo,nn=new ne;class vr extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(km(e)?Xm:Wm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ot().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,n,r){return Xn.makeTranslation(e,n,r),this.applyMatrix4(Xn),this}scale(e,n,r){return Xn.makeScale(e,n,r),this.applyMatrix4(Xn),this}lookAt(e){return Uc.lookAt(e),Uc.updateMatrix(),this.applyMatrix4(Uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new gi(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];On.setFromBufferAttribute(u),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Lo.setFromBufferAttribute(d),this.morphTargetsRelative?(nn.addVectors(On.min,Lo.min),On.expandByPoint(nn),nn.addVectors(On.max,Lo.max),On.expandByPoint(nn)):(On.expandByPoint(Lo.min),On.expandByPoint(Lo.max))}On.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)nn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(nn));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)nn.fromBufferAttribute(d,m),p&&(bs.fromBufferAttribute(e,m),nn.add(bs)),a=Math.max(a,r.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let j=0;j<r.count;j++)d[j]=new ne,p[j]=new ne;const m=new ne,_=new ne,v=new ne,x=new bt,y=new bt,w=new bt,R=new ne,S=new ne;function g(j,C,A){m.fromBufferAttribute(r,j),_.fromBufferAttribute(r,C),v.fromBufferAttribute(r,A),x.fromBufferAttribute(u,j),y.fromBufferAttribute(u,C),w.fromBufferAttribute(u,A),_.sub(m),v.sub(m),y.sub(x),w.sub(x);const z=1/(y.x*w.y-w.x*y.y);isFinite(z)&&(R.copy(_).multiplyScalar(w.y).addScaledVector(v,-y.y).multiplyScalar(z),S.copy(v).multiplyScalar(y.x).addScaledVector(_,-w.x).multiplyScalar(z),d[j].add(R),d[C].add(R),d[A].add(R),p[j].add(S),p[C].add(S),p[A].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let j=0,C=I.length;j<C;++j){const A=I[j],z=A.start,oe=A.count;for(let J=z,fe=z+oe;J<fe;J+=3)g(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const D=new ne,P=new ne,X=new ne,B=new ne;function F(j){X.fromBufferAttribute(a,j),B.copy(X);const C=d[j];D.copy(C),D.sub(X.multiplyScalar(X.dot(C))).normalize(),P.crossVectors(B,C);const z=P.dot(p[j])<0?-1:1;f.setXYZW(j,D.x,D.y,D.z,z)}for(let j=0,C=I.length;j<C;++j){const A=I[j],z=A.start,oe=A.count;for(let J=z,fe=z+oe;J<fe;J+=3)F(e.getX(J+0)),F(e.getX(J+1)),F(e.getX(J+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new mi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const a=new ne,u=new ne,f=new ne,d=new ne,p=new ne,m=new ne,_=new ne,v=new ne;if(e)for(let x=0,y=e.count;x<y;x+=3){const w=e.getX(x+0),R=e.getX(x+1),S=e.getX(x+2);a.fromBufferAttribute(n,w),u.fromBufferAttribute(n,R),f.fromBufferAttribute(n,S),_.subVectors(f,u),v.subVectors(a,u),_.cross(v),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,S),d.add(_),p.add(_),m.add(_),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,y=n.count;x<y;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),_.subVectors(f,u),v.subVectors(a,u),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)nn.fromBufferAttribute(e,n),nn.normalize(),e.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,v=d.normalized,x=new m.constructor(p.length*_);let y=0,w=0;for(let R=0,S=p.length;R<S;R++){d.isInterleavedBufferAttribute?y=p[R]*d.data.stride+d.offset:y=p[R]*_;for(let g=0;g<_;g++)x[w++]=m[y++]}return new mi(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new vr,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,v=m.length;_<v;_++){const x=m[_],y=e(x,r);p.push(y)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,x=m.length;v<x;v++){const y=m[v];_.push(y.toJSON(e.data))}_.length>0&&(a[p]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],v=u[m];for(let x=0,y=v.length;x<y;x++)_.push(v[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,_=f.length;m<_;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xp=new Yt,Or=new f0,il=new zf,jp=new ne,rl=new ne,sl=new ne,ol=new ne,Ic=new ne,al=new ne,Yp=new ne,ll=new ne;class pi extends Bn{constructor(e=new vr,n=new Hf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){al.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],v=u[p];_!==0&&(Ic.fromBufferAttribute(v,e),f?al.addScaledVector(Ic,_):al.addScaledVector(Ic.sub(n),_))}n.add(al)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),il.copy(r.boundingSphere),il.applyMatrix4(u),Or.copy(e.ray).recast(e.near),!(il.containsPoint(Or.origin)===!1&&(Or.intersectSphere(il,jp)===null||Or.origin.distanceToSquared(jp)>(e.far-e.near)**2))&&(Xp.copy(u).invert(),Or.copy(e.ray).applyMatrix4(Xp),!(r.boundingBox!==null&&Or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(f))for(let w=0,R=x.length;w<R;w++){const S=x[w],g=f[S.materialIndex],I=Math.max(S.start,y.start),D=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let P=I,X=D;P<X;P+=3){const B=d.getX(P),F=d.getX(P+1),j=d.getX(P+2);a=ul(this,g,e,r,m,_,v,B,F,j),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const w=Math.max(0,y.start),R=Math.min(d.count,y.start+y.count);for(let S=w,g=R;S<g;S+=3){const I=d.getX(S),D=d.getX(S+1),P=d.getX(S+2);a=ul(this,f,e,r,m,_,v,I,D,P),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let w=0,R=x.length;w<R;w++){const S=x[w],g=f[S.materialIndex],I=Math.max(S.start,y.start),D=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let P=I,X=D;P<X;P+=3){const B=P,F=P+1,j=P+2;a=ul(this,g,e,r,m,_,v,B,F,j),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const w=Math.max(0,y.start),R=Math.min(p.count,y.start+y.count);for(let S=w,g=R;S<g;S+=3){const I=S,D=S+1,P=S+2;a=ul(this,f,e,r,m,_,v,I,D,P),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}}}function S0(s,e,n,r,a,u,f,d){let p;if(e.side===bn?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===gr,d),p===null)return null;ll.copy(d),ll.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(ll);return m<n.near||m>n.far?null:{distance:m,point:ll.clone(),object:s}}function ul(s,e,n,r,a,u,f,d,p,m){s.getVertexPosition(d,rl),s.getVertexPosition(p,sl),s.getVertexPosition(m,ol);const _=S0(s,e,n,r,rl,sl,ol,Yp);if(_){const v=new ne;ri.getBarycoord(Yp,rl,sl,ol,v),a&&(_.uv=ri.getInterpolatedAttribute(a,d,p,m,v,new bt)),u&&(_.uv1=ri.getInterpolatedAttribute(u,d,p,m,v,new bt)),f&&(_.normal=ri.getInterpolatedAttribute(f,d,p,m,v,new ne),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new ne,materialIndex:0};ri.getNormal(rl,sl,ol,x.normal),_.face=x,_.barycoord=v}return _}class ko extends vr{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],_=[],v=[];let x=0,y=0;w("z","y","x",-1,-1,r,n,e,f,u,0),w("z","y","x",1,-1,r,n,-e,f,u,1),w("x","z","y",1,1,e,r,n,a,f,2),w("x","z","y",1,-1,e,r,-n,a,f,3),w("x","y","z",1,-1,e,n,r,a,u,4),w("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new gi(m,3)),this.setAttribute("normal",new gi(_,3)),this.setAttribute("uv",new gi(v,2));function w(R,S,g,I,D,P,X,B,F,j,C){const A=P/F,z=X/j,oe=P/2,J=X/2,fe=B/2,he=F+1,se=j+1;let le=0,k=0;const ae=new ne;for(let re=0;re<se;re++){const U=re*z-J;for(let te=0;te<he;te++){const Ue=te*A-oe;ae[R]=Ue*I,ae[S]=U*D,ae[g]=fe,m.push(ae.x,ae.y,ae.z),ae[R]=0,ae[S]=0,ae[g]=B>0?1:-1,_.push(ae.x,ae.y,ae.z),v.push(te/F),v.push(1-re/j),le+=1}}for(let re=0;re<j;re++)for(let U=0;U<F;U++){const te=x+U+he*re,Ue=x+U+he*(re+1),K=x+(U+1)+he*(re+1),ue=x+(U+1)+he*re;p.push(te,Ue,ue),p.push(Ue,K,ue),k+=6}d.addGroup(y,k,C),y+=k,x+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function yn(s){const e={};for(let n=0;n<s.length;n++){const r=Xs(s[n]);for(const a in r)e[a]=r[a]}return e}function y0(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function jm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const M0={clone:Xs,merge:yn};var E0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends Rl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E0,this.fragmentShader=T0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=y0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Ym extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Ni}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dr=new ne,qp=new bt,$p=new bt;class Yn extends Ym{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Pf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pf*2*Math.atan(Math.tan(pc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dr.x,dr.y).multiplyScalar(-e/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(dr.x,dr.y).multiplyScalar(-e/dr.z)}getViewSize(e,n){return this.getViewBounds(e,qp,$p),n.subVectors($p,qp)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(pc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ls=-90,Ds=1;class w0 extends Bn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Yn(Ls,Ds,e,n);a.layers=this.layers,this.add(a);const u=new Yn(Ls,Ds,e,n);u.layers=this.layers,this.add(u);const f=new Yn(Ls,Ds,e,n);f.layers=this.layers,this.add(f);const d=new Yn(Ls,Ds,e,n);d.layers=this.layers,this.add(d);const p=new Yn(Ls,Ds,e,n);p.layers=this.layers,this.add(p);const m=new Yn(Ls,Ds,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===Ni)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Tl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(v,x,y),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class qm extends Ln{constructor(e,n,r,a,u,f,d,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:zs,super(e,n,r,a,u,f,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class A0 extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new qm(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:hi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new ko(5,5,5),u=new _r({name:"CubemapFromEquirect",uniforms:Xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:bn,blending:pr});u.uniforms.tEquirect.value=n;const f=new pi(a,u),d=n.minFilter;return n.minFilter===jr&&(n.minFilter=hi),new w0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}class R0 extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Nc=new ne,C0=new ne,P0=new ot;class Hr{constructor(e=new ne(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Nc.subVectors(r,n).cross(C0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Nc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||P0.getNormalMatrix(e),a=this.coplanarPoint(Nc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new zf,cl=new ne;class $m{constructor(e=new Hr,n=new Hr,r=new Hr,a=new Hr,u=new Hr,f=new Hr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ni){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],_=a[5],v=a[6],x=a[7],y=a[8],w=a[9],R=a[10],S=a[11],g=a[12],I=a[13],D=a[14],P=a[15];if(r[0].setComponents(p-u,x-m,S-y,P-g).normalize(),r[1].setComponents(p+u,x+m,S+y,P+g).normalize(),r[2].setComponents(p+f,x+_,S+w,P+I).normalize(),r[3].setComponents(p-f,x-_,S-w,P-I).normalize(),r[4].setComponents(p-d,x-v,S-R,P-D).normalize(),n===Ni)r[5].setComponents(p+d,x+v,S+R,P+D).normalize();else if(n===Tl)r[5].setComponents(d,v,R,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(cl.x=a.normal.x>0?e.max.x:e.min.x,cl.y=a.normal.y>0?e.max.y:e.min.y,cl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Do extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Km extends Ln{constructor(e,n,r,a,u,f,d,p,m,_=Os){if(_!==Os&&_!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Os&&(r=qr),r===void 0&&_===Gs&&(r=Vs),super(null,a,u,f,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:oi,this.minFilter=p!==void 0?p:oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Cl extends vr{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,_=p+1,v=e/d,x=n/p,y=[],w=[],R=[],S=[];for(let g=0;g<_;g++){const I=g*x-f;for(let D=0;D<m;D++){const P=D*v-u;w.push(P,-I,0),R.push(0,0,1),S.push(D/d),S.push(1-g/p)}}for(let g=0;g<p;g++)for(let I=0;I<d;I++){const D=I+m*g,P=I+m*(g+1),X=I+1+m*(g+1),B=I+1+m*g;y.push(D,P,B),y.push(P,X,B)}this.setIndex(y),this.setAttribute("position",new gi(w,3)),this.setAttribute("normal",new gi(R,3)),this.setAttribute("uv",new gi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vf extends vr{constructor(e=1,n=32,r=16,a=0,u=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:u,thetaStart:f,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(f+d,Math.PI);let m=0;const _=[],v=new ne,x=new ne,y=[],w=[],R=[],S=[];for(let g=0;g<=r;g++){const I=[],D=g/r;let P=0;g===0&&f===0?P=.5/n:g===r&&p===Math.PI&&(P=-.5/n);for(let X=0;X<=n;X++){const B=X/n;v.x=-e*Math.cos(a+B*u)*Math.sin(f+D*d),v.y=e*Math.cos(f+D*d),v.z=e*Math.sin(a+B*u)*Math.sin(f+D*d),w.push(v.x,v.y,v.z),x.copy(v).normalize(),R.push(x.x,x.y,x.z),S.push(B+P,1-D),I.push(m++)}_.push(I)}for(let g=0;g<r;g++)for(let I=0;I<n;I++){const D=_[g][I+1],P=_[g][I],X=_[g+1][I],B=_[g+1][I+1];(g!==0||f>0)&&y.push(D,P,B),(g!==r-1||p<Math.PI)&&y.push(P,X,B)}this.setIndex(y),this.setAttribute("position",new gi(w,3)),this.setAttribute("normal",new gi(R,3)),this.setAttribute("uv",new gi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class b0 extends Rl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class L0 extends Rl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class D0 extends Ym{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class U0 extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function Kp(s,e,n,r){const a=I0(r);switch(n){case Lm:return s*e;case Um:return s*e;case Im:return s*e*2;case Nm:return s*e/a.components*a.byteLength;case Of:return s*e/a.components*a.byteLength;case Fm:return s*e*2/a.components*a.byteLength;case Bf:return s*e*2/a.components*a.byteLength;case Dm:return s*e*3/a.components*a.byteLength;case si:return s*e*4/a.components*a.byteLength;case kf:return s*e*4/a.components*a.byteLength;case ml:case gl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _l:case vl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rf:case of:return Math.max(s,16)*Math.max(e,8)/4;case nf:case sf:return Math.max(s,8)*Math.max(e,8)/2;case af:case lf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case uf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ff:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case df:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case hf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case pf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case mf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case gf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case _f:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case vf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case xf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case yf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Mf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ef:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case xl:case Tf:case wf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Om:case Af:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Rf:case Cf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function I0(s){switch(s){case Bi:case Cm:return{byteLength:1,components:1};case Io:case Pm:case No:return{byteLength:2,components:1};case Nf:case Ff:return{byteLength:2,components:4};case qr:case If:case Ii:return{byteLength:4,components:1};case bm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zm(){let s=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function N0(s){const e=new WeakMap;function n(d,p){const m=d.array,_=d.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,_),d.onUploadCallback();let y;if(m instanceof Float32Array)y=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=s.SHORT;else if(m instanceof Uint32Array)y=s.UNSIGNED_INT;else if(m instanceof Int32Array)y=s.INT;else if(m instanceof Int8Array)y=s.BYTE;else if(m instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const _=p.array,v=p.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,_);else{v.sort((y,w)=>y.start-w.start);let x=0;for(let y=1;y<v.length;y++){const w=v[x],R=v[y];R.start<=w.start+w.count+1?w.count=Math.max(w.count,R.start+R.count-w.start):(++x,v[x]=R)}v.length=x+1;for(let y=0,w=v.length;y<w;y++){const R=v[y];s.bufferSubData(m,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}var F0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,B0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,k0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,G0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,X0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,q0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,K0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ix=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ox=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ax=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ux=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dx="gl_FragColor = linearToOutputTexel( gl_FragColor );",hx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,px=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_x=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ex=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ax=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Px=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ux=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ix=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ox=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$x=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_S=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,SS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ES=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,LS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,US=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,IS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,VS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,GS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,WS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,XS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$S=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,KS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ey=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ty=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ny=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ry=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ay=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ly=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,py=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:F0,alphahash_pars_fragment:O0,alphamap_fragment:B0,alphamap_pars_fragment:k0,alphatest_fragment:z0,alphatest_pars_fragment:H0,aomap_fragment:V0,aomap_pars_fragment:G0,batching_pars_vertex:W0,batching_vertex:X0,begin_vertex:j0,beginnormal_vertex:Y0,bsdfs:q0,iridescence_fragment:$0,bumpmap_pars_fragment:K0,clipping_planes_fragment:Z0,clipping_planes_pars_fragment:Q0,clipping_planes_pars_vertex:J0,clipping_planes_vertex:ex,color_fragment:tx,color_pars_fragment:nx,color_pars_vertex:ix,color_vertex:rx,common:sx,cube_uv_reflection_fragment:ox,defaultnormal_vertex:ax,displacementmap_pars_vertex:lx,displacementmap_vertex:ux,emissivemap_fragment:cx,emissivemap_pars_fragment:fx,colorspace_fragment:dx,colorspace_pars_fragment:hx,envmap_fragment:px,envmap_common_pars_fragment:mx,envmap_pars_fragment:gx,envmap_pars_vertex:_x,envmap_physical_pars_fragment:Cx,envmap_vertex:vx,fog_vertex:xx,fog_pars_vertex:Sx,fog_fragment:yx,fog_pars_fragment:Mx,gradientmap_pars_fragment:Ex,lightmap_pars_fragment:Tx,lights_lambert_fragment:wx,lights_lambert_pars_fragment:Ax,lights_pars_begin:Rx,lights_toon_fragment:Px,lights_toon_pars_fragment:bx,lights_phong_fragment:Lx,lights_phong_pars_fragment:Dx,lights_physical_fragment:Ux,lights_physical_pars_fragment:Ix,lights_fragment_begin:Nx,lights_fragment_maps:Fx,lights_fragment_end:Ox,logdepthbuf_fragment:Bx,logdepthbuf_pars_fragment:kx,logdepthbuf_pars_vertex:zx,logdepthbuf_vertex:Hx,map_fragment:Vx,map_pars_fragment:Gx,map_particle_fragment:Wx,map_particle_pars_fragment:Xx,metalnessmap_fragment:jx,metalnessmap_pars_fragment:Yx,morphinstance_vertex:qx,morphcolor_vertex:$x,morphnormal_vertex:Kx,morphtarget_pars_vertex:Zx,morphtarget_vertex:Qx,normal_fragment_begin:Jx,normal_fragment_maps:eS,normal_pars_fragment:tS,normal_pars_vertex:nS,normal_vertex:iS,normalmap_pars_fragment:rS,clearcoat_normal_fragment_begin:sS,clearcoat_normal_fragment_maps:oS,clearcoat_pars_fragment:aS,iridescence_pars_fragment:lS,opaque_fragment:uS,packing:cS,premultiplied_alpha_fragment:fS,project_vertex:dS,dithering_fragment:hS,dithering_pars_fragment:pS,roughnessmap_fragment:mS,roughnessmap_pars_fragment:gS,shadowmap_pars_fragment:_S,shadowmap_pars_vertex:vS,shadowmap_vertex:xS,shadowmask_pars_fragment:SS,skinbase_vertex:yS,skinning_pars_vertex:MS,skinning_vertex:ES,skinnormal_vertex:TS,specularmap_fragment:wS,specularmap_pars_fragment:AS,tonemapping_fragment:RS,tonemapping_pars_fragment:CS,transmission_fragment:PS,transmission_pars_fragment:bS,uv_pars_fragment:LS,uv_pars_vertex:DS,uv_vertex:US,worldpos_vertex:IS,background_vert:NS,background_frag:FS,backgroundCube_vert:OS,backgroundCube_frag:BS,cube_vert:kS,cube_frag:zS,depth_vert:HS,depth_frag:VS,distanceRGBA_vert:GS,distanceRGBA_frag:WS,equirect_vert:XS,equirect_frag:jS,linedashed_vert:YS,linedashed_frag:qS,meshbasic_vert:$S,meshbasic_frag:KS,meshlambert_vert:ZS,meshlambert_frag:QS,meshmatcap_vert:JS,meshmatcap_frag:ey,meshnormal_vert:ty,meshnormal_frag:ny,meshphong_vert:iy,meshphong_frag:ry,meshphysical_vert:sy,meshphysical_frag:oy,meshtoon_vert:ay,meshtoon_frag:ly,points_vert:uy,points_frag:cy,shadow_vert:fy,shadow_frag:dy,sprite_vert:hy,sprite_frag:py},Ce={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},di={basic:{uniforms:yn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:yn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Pt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:yn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:yn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:yn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Pt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:yn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:yn([Ce.points,Ce.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:yn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:yn([Ce.common,Ce.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:yn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:yn([Ce.sprite,Ce.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:yn([Ce.common,Ce.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:yn([Ce.lights,Ce.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};di.physical={uniforms:yn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const fl={r:0,b:0,g:0},kr=new ki,my=new Yt;function gy(s,e,n,r,a,u,f){const d=new Pt(0);let p=u===!0?0:1,m,_,v=null,x=0,y=null;function w(D){let P=D.isScene===!0?D.background:null;return P&&P.isTexture&&(P=(D.backgroundBlurriness>0?n:e).get(P)),P}function R(D){let P=!1;const X=w(D);X===null?g(d,p):X&&X.isColor&&(g(X,1),P=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(D,P){const X=w(P);X&&(X.isCubeTexture||X.mapping===Al)?(_===void 0&&(_=new pi(new ko(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:Xs(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(B,F,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),kr.copy(P.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),_.material.uniforms.envMap.value=X,_.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(my.makeRotationFromEuler(kr)),_.material.toneMapped=Et.getTransfer(X.colorSpace)!==Ct,(v!==X||x!==X.version||y!==s.toneMapping)&&(_.material.needsUpdate=!0,v=X,x=X.version,y=s.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):X&&X.isTexture&&(m===void 0&&(m=new pi(new Cl(2,2),new _r({name:"BackgroundMaterial",uniforms:Xs(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=X,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Et.getTransfer(X.colorSpace)!==Ct,X.matrixAutoUpdate===!0&&X.updateMatrix(),m.material.uniforms.uvTransform.value.copy(X.matrix),(v!==X||x!==X.version||y!==s.toneMapping)&&(m.material.needsUpdate=!0,v=X,x=X.version,y=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function g(D,P){D.getRGB(fl,jm(s)),r.buffers.color.setClear(fl.r,fl.g,fl.b,P,f)}function I(){_!==void 0&&(_.geometry.dispose(),_.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(D,P=1){d.set(D),p=P,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,g(d,p)},render:R,addToRenderList:S,dispose:I}}function _y(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(A,z,oe,J,fe){let he=!1;const se=v(J,oe,z);u!==se&&(u=se,m(u.object)),he=y(A,J,oe,fe),he&&w(A,J,oe,fe),fe!==null&&e.update(fe,s.ELEMENT_ARRAY_BUFFER),(he||f)&&(f=!1,P(A,z,oe,J),fe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function p(){return s.createVertexArray()}function m(A){return s.bindVertexArray(A)}function _(A){return s.deleteVertexArray(A)}function v(A,z,oe){const J=oe.wireframe===!0;let fe=r[A.id];fe===void 0&&(fe={},r[A.id]=fe);let he=fe[z.id];he===void 0&&(he={},fe[z.id]=he);let se=he[J];return se===void 0&&(se=x(p()),he[J]=se),se}function x(A){const z=[],oe=[],J=[];for(let fe=0;fe<n;fe++)z[fe]=0,oe[fe]=0,J[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:oe,attributeDivisors:J,object:A,attributes:{},index:null}}function y(A,z,oe,J){const fe=u.attributes,he=z.attributes;let se=0;const le=oe.getAttributes();for(const k in le)if(le[k].location>=0){const re=fe[k];let U=he[k];if(U===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(U=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(U=A.instanceColor)),re===void 0||re.attribute!==U||U&&re.data!==U.data)return!0;se++}return u.attributesNum!==se||u.index!==J}function w(A,z,oe,J){const fe={},he=z.attributes;let se=0;const le=oe.getAttributes();for(const k in le)if(le[k].location>=0){let re=he[k];re===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(re=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(re=A.instanceColor));const U={};U.attribute=re,re&&re.data&&(U.data=re.data),fe[k]=U,se++}u.attributes=fe,u.attributesNum=se,u.index=J}function R(){const A=u.newAttributes;for(let z=0,oe=A.length;z<oe;z++)A[z]=0}function S(A){g(A,0)}function g(A,z){const oe=u.newAttributes,J=u.enabledAttributes,fe=u.attributeDivisors;oe[A]=1,J[A]===0&&(s.enableVertexAttribArray(A),J[A]=1),fe[A]!==z&&(s.vertexAttribDivisor(A,z),fe[A]=z)}function I(){const A=u.newAttributes,z=u.enabledAttributes;for(let oe=0,J=z.length;oe<J;oe++)z[oe]!==A[oe]&&(s.disableVertexAttribArray(oe),z[oe]=0)}function D(A,z,oe,J,fe,he,se){se===!0?s.vertexAttribIPointer(A,z,oe,fe,he):s.vertexAttribPointer(A,z,oe,J,fe,he)}function P(A,z,oe,J){R();const fe=J.attributes,he=oe.getAttributes(),se=z.defaultAttributeValues;for(const le in he){const k=he[le];if(k.location>=0){let ae=fe[le];if(ae===void 0&&(le==="instanceMatrix"&&A.instanceMatrix&&(ae=A.instanceMatrix),le==="instanceColor"&&A.instanceColor&&(ae=A.instanceColor)),ae!==void 0){const re=ae.normalized,U=ae.itemSize,te=e.get(ae);if(te===void 0)continue;const Ue=te.buffer,K=te.type,ue=te.bytesPerElement,Me=K===s.INT||K===s.UNSIGNED_INT||ae.gpuType===If;if(ae.isInterleavedBufferAttribute){const ve=ae.data,Te=ve.stride,Ie=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<k.locationSize;Ze++)g(k.location+Ze,ve.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<k.locationSize;Ze++)S(k.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let Ze=0;Ze<k.locationSize;Ze++)D(k.location+Ze,U/k.locationSize,K,re,Te*ue,(Ie+U/k.locationSize*Ze)*ue,Me)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<k.locationSize;ve++)g(k.location+ve,ae.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<k.locationSize;ve++)S(k.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let ve=0;ve<k.locationSize;ve++)D(k.location+ve,U/k.locationSize,K,re,U*ue,U/k.locationSize*ve*ue,Me)}}else if(se!==void 0){const re=se[le];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(k.location,re);break;case 3:s.vertexAttrib3fv(k.location,re);break;case 4:s.vertexAttrib4fv(k.location,re);break;default:s.vertexAttrib1fv(k.location,re)}}}}I()}function X(){j();for(const A in r){const z=r[A];for(const oe in z){const J=z[oe];for(const fe in J)_(J[fe].object),delete J[fe];delete z[oe]}delete r[A]}}function B(A){if(r[A.id]===void 0)return;const z=r[A.id];for(const oe in z){const J=z[oe];for(const fe in J)_(J[fe].object),delete J[fe];delete z[oe]}delete r[A.id]}function F(A){for(const z in r){const oe=r[z];if(oe[A.id]===void 0)continue;const J=oe[A.id];for(const fe in J)_(J[fe].object),delete J[fe];delete oe[A.id]}}function j(){C(),f=!0,u!==a&&(u=a,m(u.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:j,resetDefaultState:C,dispose:X,releaseStatesOfGeometry:B,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:S,disableUnusedAttributes:I}}function vy(s,e,n){let r;function a(m){r=m}function u(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function f(m,_,v){v!==0&&(s.drawArraysInstanced(r,m,_,v),n.update(_,r,v))}function d(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let y=0;for(let w=0;w<v;w++)y+=_[w];n.update(y,r,1)}function p(m,_,v,x){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let w=0;w<m.length;w++)f(m[w],_[w],x[w]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,v);let w=0;for(let R=0;R<v;R++)w+=_[R]*x[R];n.update(w,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function xy(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(F){return!(F!==si&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const j=F===No&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Bi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ii&&!j)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),X=w>0,B=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:w,maxTextureSize:R,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:I,maxVaryings:D,maxFragmentUniforms:P,vertexTextures:X,maxSamples:B}}function Sy(s){const e=this;let n=null,r=0,a=!1,u=!1;const f=new Hr,d=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||r!==0||a;return a=x,r=v.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){n=_(v,x,0)},this.setState=function(v,x,y){const w=v.clippingPlanes,R=v.clipIntersection,S=v.clipShadows,g=s.get(v);if(!a||w===null||w.length===0||u&&!S)u?_(null):m();else{const I=u?0:r,D=I*4;let P=g.clippingState||null;p.value=P,P=_(w,x,D,y);for(let X=0;X!==D;++X)P[X]=n[X];g.clippingState=P,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,y,w){const R=v!==null?v.length:0;let S=null;if(R!==0){if(S=p.value,w!==!0||S===null){const g=y+R*4,I=x.matrixWorldInverse;d.getNormalMatrix(I),(S===null||S.length<g)&&(S=new Float32Array(g));for(let D=0,P=y;D!==R;++D,P+=4)f.copy(v[D]).applyMatrix4(I,d),f.normal.toArray(S,P),S[P+3]=f.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,S}}function yy(s){let e=new WeakMap;function n(f,d){return d===Qc?f.mapping=zs:d===Jc&&(f.mapping=Hs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Qc||d===Jc)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new A0(p.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Ns=4,Zp=[.125,.215,.35,.446,.526,.582],Wr=20,Fc=new D0,Qp=new Pt;let Oc=null,Bc=0,kc=0,zc=!1;const Vr=(1+Math.sqrt(5))/2,Us=1/Vr,Jp=[new ne(-Vr,Us,0),new ne(Vr,Us,0),new ne(-Us,0,Vr),new ne(Us,0,Vr),new ne(0,Vr,-Us),new ne(0,Vr,Us),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)];class em{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Oc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=im(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oc,Bc,kc),this._renderer.xr.enabled=zc,e.scissorTest=!1,dl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===zs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:No,format:si,colorSpace:Ws,depthBuffer:!1},a=tm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tm(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=My(u)),this._blurMaterial=Ey(u,e,n)}return a}_compileMaterial(e){const n=new pi(this._lodPlanes[0],e);this._renderer.compile(n,Fc)}_sceneToCubeUV(e,n,r,a){const d=new Yn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(Qp),_.toneMapping=mr,_.autoClear=!1;const y=new Hf({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),w=new pi(new ko,y);let R=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,R=!0):(y.color.copy(Qp),R=!0);for(let g=0;g<6;g++){const I=g%3;I===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):I===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const D=this._cubeSize;dl(a,I*D,g>2?D:0,D,D),_.setRenderTarget(a),R&&_.render(w,d),_.render(e,d)}w.geometry.dispose(),w.material.dispose(),_.toneMapping=x,_.autoClear=v,e.background=S}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===zs||e.mapping===Hs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=im()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nm());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new pi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;dl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,Fc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Jp[(a-u-1)%Jp.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new pi(this._lodPlanes[a],m),x=m.uniforms,y=this._sizeLods[r]-1,w=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Wr-1),R=u/w,S=isFinite(u)?1+Math.floor(_*R):Wr;S>Wr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Wr}`);const g=[];let I=0;for(let F=0;F<Wr;++F){const j=F/R,C=Math.exp(-j*j/2);g.push(C),F===0?I+=C:F<S&&(I+=2*C)}for(let F=0;F<g.length;F++)g[F]=g[F]/I;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=g,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:D}=this;x.dTheta.value=w,x.mipInt.value=D-r;const P=this._sizeLods[a],X=3*P*(a>D-Ns?a-D+Ns:0),B=4*(this._cubeSize-P);dl(n,X,B,3*P,2*P),p.setRenderTarget(n),p.render(v,Fc)}}function My(s){const e=[],n=[],r=[];let a=s;const u=s-Ns+1+Zp.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>s-Ns?p=Zp[f-s+Ns-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,w=6,R=3,S=2,g=1,I=new Float32Array(R*w*y),D=new Float32Array(S*w*y),P=new Float32Array(g*w*y);for(let B=0;B<y;B++){const F=B%3*2/3-1,j=B>2?0:-1,C=[F,j,0,F+2/3,j,0,F+2/3,j+1,0,F,j,0,F+2/3,j+1,0,F,j+1,0];I.set(C,R*w*B),D.set(x,S*w*B);const A=[B,B,B,B,B,B];P.set(A,g*w*B)}const X=new vr;X.setAttribute("position",new mi(I,R)),X.setAttribute("uv",new mi(D,S)),X.setAttribute("faceIndex",new mi(P,g)),e.push(X),a>Ns&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function tm(s,e,n){const r=new $r(s,e,n);return r.texture.mapping=Al,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function dl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function Ey(s,e,n){const r=new Float32Array(Wr),a=new ne(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function nm(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function im(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Gf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ty(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Qc||p===Jc,_=p===zs||p===Hs;if(m||_){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new em(s)),v=m?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return m&&y&&y.height>0||_&&y&&a(y)?(n===null&&(n=new em(s)),v=m?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function a(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function wy(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Is("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function Ay(s,e,n,r){const a={},u=new WeakMap;function f(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);x.removeEventListener("dispose",f),delete a[x.id];const y=u.get(x);y&&(e.remove(y),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(v,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function p(v){const x=v.attributes;for(const y in x)e.update(x[y],s.ARRAY_BUFFER)}function m(v){const x=[],y=v.index,w=v.attributes.position;let R=0;if(y!==null){const I=y.array;R=y.version;for(let D=0,P=I.length;D<P;D+=3){const X=I[D+0],B=I[D+1],F=I[D+2];x.push(X,B,B,F,F,X)}}else if(w!==void 0){const I=w.array;R=w.version;for(let D=0,P=I.length/3-1;D<P;D+=3){const X=D+0,B=D+1,F=D+2;x.push(X,B,B,F,F,X)}}else return;const S=new(km(x)?Xm:Wm)(x,1);S.version=R;const g=u.get(v);g&&e.remove(g),u.set(v,S)}function _(v){const x=u.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&m(v)}else m(v);return u.get(v)}return{get:d,update:p,getWireframeAttribute:_}}function Ry(s,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function p(x,y){s.drawElements(r,y,u,x*f),n.update(y,r,1)}function m(x,y,w){w!==0&&(s.drawElementsInstanced(r,y,u,x*f,w),n.update(y,r,w))}function _(x,y,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,x,0,w);let S=0;for(let g=0;g<w;g++)S+=y[g];n.update(S,r,1)}function v(x,y,w,R){if(w===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<x.length;g++)m(x[g]/f,y[g],R[g]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,u,x,0,R,0,w);let g=0;for(let I=0;I<w;I++)g+=y[I]*R[I];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function Cy(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function Py(s,e,n){const r=new WeakMap,a=new Wt;function u(f,d,p){const m=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let A=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var y=A;x!==void 0&&x.texture.dispose();const w=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let P=0;w===!0&&(P=1),R===!0&&(P=2),S===!0&&(P=3);let X=d.attributes.position.count*P,B=1;X>e.maxTextureSize&&(B=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const F=new Float32Array(X*B*4*v),j=new Hm(F,X,B,v);j.type=Ii,j.needsUpdate=!0;const C=P*4;for(let z=0;z<v;z++){const oe=g[z],J=I[z],fe=D[z],he=X*B*4*z;for(let se=0;se<oe.count;se++){const le=se*C;w===!0&&(a.fromBufferAttribute(oe,se),F[he+le+0]=a.x,F[he+le+1]=a.y,F[he+le+2]=a.z,F[he+le+3]=0),R===!0&&(a.fromBufferAttribute(J,se),F[he+le+4]=a.x,F[he+le+5]=a.y,F[he+le+6]=a.z,F[he+le+7]=0),S===!0&&(a.fromBufferAttribute(fe,se),F[he+le+8]=a.x,F[he+le+9]=a.y,F[he+le+10]=a.z,F[he+le+11]=fe.itemSize===4?a.w:1)}}x={count:v,texture:j,size:new bt(X,B)},r.set(d,x),d.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let w=0;for(let S=0;S<m.length;S++)w+=m[S];const R=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",R),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function by(s,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,v=e.get(p,_);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}const Qm=new Ln,rm=new Km(1,1),Jm=new Hm,eg=new u0,tg=new qm,sm=[],om=[],am=new Float32Array(16),lm=new Float32Array(9),um=new Float32Array(4);function Ys(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=sm[a];if(u===void 0&&(u=new Float32Array(a),sm[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,s[f].toArray(u,d)}return u}function Zt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Qt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Pl(s,e){let n=om[e];n===void 0&&(n=new Int32Array(e),om[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function Ly(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function Dy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2fv(this.addr,e),Qt(n,e)}}function Uy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;s.uniform3fv(this.addr,e),Qt(n,e)}}function Iy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4fv(this.addr,e),Qt(n,e)}}function Ny(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;um.set(r),s.uniformMatrix2fv(this.addr,!1,um),Qt(n,r)}}function Fy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;lm.set(r),s.uniformMatrix3fv(this.addr,!1,lm),Qt(n,r)}}function Oy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;am.set(r),s.uniformMatrix4fv(this.addr,!1,am),Qt(n,r)}}function By(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function ky(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2iv(this.addr,e),Qt(n,e)}}function zy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3iv(this.addr,e),Qt(n,e)}}function Hy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4iv(this.addr,e),Qt(n,e)}}function Vy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function Gy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2uiv(this.addr,e),Qt(n,e)}}function Wy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3uiv(this.addr,e),Qt(n,e)}}function Xy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4uiv(this.addr,e),Qt(n,e)}}function jy(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(rm.compareFunction=Bm,u=rm):u=Qm,n.setTexture2D(e||u,a)}function Yy(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||eg,a)}function qy(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||tg,a)}function $y(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Jm,a)}function Ky(s){switch(s){case 5126:return Ly;case 35664:return Dy;case 35665:return Uy;case 35666:return Iy;case 35674:return Ny;case 35675:return Fy;case 35676:return Oy;case 5124:case 35670:return By;case 35667:case 35671:return ky;case 35668:case 35672:return zy;case 35669:case 35673:return Hy;case 5125:return Vy;case 36294:return Gy;case 36295:return Wy;case 36296:return Xy;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return Yy;case 35680:case 36300:case 36308:case 36293:return qy;case 36289:case 36303:case 36311:case 36292:return $y}}function Zy(s,e){s.uniform1fv(this.addr,e)}function Qy(s,e){const n=Ys(e,this.size,2);s.uniform2fv(this.addr,n)}function Jy(s,e){const n=Ys(e,this.size,3);s.uniform3fv(this.addr,n)}function eM(s,e){const n=Ys(e,this.size,4);s.uniform4fv(this.addr,n)}function tM(s,e){const n=Ys(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function nM(s,e){const n=Ys(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function iM(s,e){const n=Ys(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function rM(s,e){s.uniform1iv(this.addr,e)}function sM(s,e){s.uniform2iv(this.addr,e)}function oM(s,e){s.uniform3iv(this.addr,e)}function aM(s,e){s.uniform4iv(this.addr,e)}function lM(s,e){s.uniform1uiv(this.addr,e)}function uM(s,e){s.uniform2uiv(this.addr,e)}function cM(s,e){s.uniform3uiv(this.addr,e)}function fM(s,e){s.uniform4uiv(this.addr,e)}function dM(s,e,n){const r=this.cache,a=e.length,u=Pl(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||Qm,u[f])}function hM(s,e,n){const r=this.cache,a=e.length,u=Pl(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||eg,u[f])}function pM(s,e,n){const r=this.cache,a=e.length,u=Pl(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||tg,u[f])}function mM(s,e,n){const r=this.cache,a=e.length,u=Pl(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||Jm,u[f])}function gM(s){switch(s){case 5126:return Zy;case 35664:return Qy;case 35665:return Jy;case 35666:return eM;case 35674:return tM;case 35675:return nM;case 35676:return iM;case 5124:case 35670:return rM;case 35667:case 35671:return sM;case 35668:case 35672:return oM;case 35669:case 35673:return aM;case 5125:return lM;case 36294:return uM;case 36295:return cM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return hM;case 35680:case 36300:case 36308:case 36293:return pM;case 36289:case 36303:case 36311:case 36292:return mM}}class _M{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=Ky(n.type)}}class vM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=gM(n.type)}}class xM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const Hc=/(\w+)(\])?(\[|\.)?/g;function cm(s,e){s.seq.push(e),s.map[e.id]=e}function SM(s,e,n){const r=s.name,a=r.length;for(Hc.lastIndex=0;;){const u=Hc.exec(r),f=Hc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){cm(n,m===void 0?new _M(d,s,e):new vM(d,s,e));break}else{let v=n.map[d];v===void 0&&(v=new xM(d),cm(n,v)),n=v}}}class Sl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);SM(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function fm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const yM=37297;let MM=0;function EM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const dm=new ot;function TM(s){Et._getMatrix(dm,Et.workingColorSpace,s);const e=`mat3( ${dm.elements.map(n=>n.toFixed(4))} )`;switch(Et.getTransfer(s)){case El:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function hm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+EM(s.getShaderSource(e),f)}else return a}function wM(s,e){const n=TM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function AM(s,e){let n;switch(e){case Iv:n="Linear";break;case Nv:n="Reinhard";break;case Fv:n="Cineon";break;case Ov:n="ACESFilmic";break;case kv:n="AgX";break;case zv:n="Neutral";break;case Bv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const hl=new ne;function RM(){Et.getLuminanceCoefficients(hl);const s=hl.x.toFixed(4),e=hl.y.toFixed(4),n=hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function PM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function bM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:d}}return n}function Uo(s){return s!==""}function pm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LM=/^[ \t]*#include +<([\w\d./]+)>/gm;function bf(s){return s.replace(LM,UM)}const DM=new Map;function UM(s,e){let n=at[e];if(n===void 0){const r=DM.get(e);if(r!==void 0)n=at[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return bf(n)}const IM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gm(s){return s.replace(IM,NM)}function NM(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function _m(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function FM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===wm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===hv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function OM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zs:case Hs:e="ENVMAP_TYPE_CUBE";break;case Al:e="ENVMAP_TYPE_CUBE_UV";break}return e}function BM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function kM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Am:e="ENVMAP_BLENDING_MULTIPLY";break;case Dv:e="ENVMAP_BLENDING_MIX";break;case Uv:e="ENVMAP_BLENDING_ADD";break}return e}function zM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function HM(s,e,n,r){const a=s.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=FM(n),m=OM(n),_=BM(n),v=kM(n),x=zM(n),y=CM(n),w=PM(u),R=a.createProgram();let S,g,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Uo).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Uo).join(`
`),g.length>0&&(g+=`
`)):(S=[_m(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),g=[_m(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mr?"#define TONE_MAPPING":"",n.toneMapping!==mr?at.tonemapping_pars_fragment:"",n.toneMapping!==mr?AM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,wM("linearToOutputTexel",n.outputColorSpace),RM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Uo).join(`
`)),f=bf(f),f=pm(f,n),f=mm(f,n),d=bf(d),d=pm(d,n),d=mm(d,n),f=gm(f),d=gm(d),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",n.glslVersion===Dp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=I+S+f,P=I+g+d,X=fm(a,a.VERTEX_SHADER,D),B=fm(a,a.FRAGMENT_SHADER,P);a.attachShader(R,X),a.attachShader(R,B),n.index0AttributeName!==void 0?a.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function F(z){if(s.debug.checkShaderErrors){const oe=a.getProgramInfoLog(R).trim(),J=a.getShaderInfoLog(X).trim(),fe=a.getShaderInfoLog(B).trim();let he=!0,se=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,R,X,B);else{const le=hm(a,X,"vertex"),k=hm(a,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+oe+`
`+le+`
`+k)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(J===""||fe==="")&&(se=!1);se&&(z.diagnostics={runnable:he,programLog:oe,vertexShader:{log:J,prefix:S},fragmentShader:{log:fe,prefix:g}})}a.deleteShader(X),a.deleteShader(B),j=new Sl(a,R),C=bM(a,R)}let j;this.getUniforms=function(){return j===void 0&&F(this),j};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(R,yM)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=MM++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=X,this.fragmentShader=B,this}let VM=0;class GM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new WM(e),n.set(e,r)),r}}class WM{constructor(e){this.id=VM++,this.code=e,this.usedTimes=0}}function XM(s,e,n,r,a,u,f){const d=new Vm,p=new GM,m=new Set,_=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let y=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return m.add(C),C===0?"uv":`uv${C}`}function S(C,A,z,oe,J){const fe=oe.fog,he=J.geometry,se=C.isMeshStandardMaterial?oe.environment:null,le=(C.isMeshStandardMaterial?n:e).get(C.envMap||se),k=le&&le.mapping===Al?le.image.height:null,ae=w[C.type];C.precision!==null&&(y=a.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const re=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,U=re!==void 0?re.length:0;let te=0;he.morphAttributes.position!==void 0&&(te=1),he.morphAttributes.normal!==void 0&&(te=2),he.morphAttributes.color!==void 0&&(te=3);let Ue,K,ue,Me;if(ae){const vt=di[ae];Ue=vt.vertexShader,K=vt.fragmentShader}else Ue=C.vertexShader,K=C.fragmentShader,p.update(C),ue=p.getVertexShaderID(C),Me=p.getFragmentShaderID(C);const ve=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),Ie=J.isInstancedMesh===!0,Ze=J.isBatchedMesh===!0,At=!!C.map,pt=!!C.matcap,Lt=!!le,O=!!C.aoMap,mn=!!C.lightMap,dt=!!C.bumpMap,ut=!!C.normalMap,je=!!C.displacementMap,wt=!!C.emissiveMap,We=!!C.metalnessMap,b=!!C.roughnessMap,E=C.anisotropy>0,$=C.clearcoat>0,pe=C.dispersion>0,ge=C.iridescence>0,ce=C.sheen>0,Ve=C.transmission>0,we=E&&!!C.anisotropyMap,Ne=$&&!!C.clearcoatMap,lt=$&&!!C.clearcoatNormalMap,ye=$&&!!C.clearcoatRoughnessMap,Be=ge&&!!C.iridescenceMap,qe=ge&&!!C.iridescenceThicknessMap,Qe=ce&&!!C.sheenColorMap,ke=ce&&!!C.sheenRoughnessMap,ct=!!C.specularMap,it=!!C.specularColorMap,Tt=!!C.specularIntensityMap,G=Ve&&!!C.transmissionMap,Ae=Ve&&!!C.thicknessMap,ie=!!C.gradientMap,de=!!C.alphaMap,be=C.alphaTest>0,Pe=!!C.alphaHash,rt=!!C.extensions;let Ut=mr;C.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ut=s.toneMapping);const qt={shaderID:ae,shaderType:C.type,shaderName:C.name,vertexShader:Ue,fragmentShader:K,defines:C.defines,customVertexShaderID:ue,customFragmentShaderID:Me,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Ze,batchingColor:Ze&&J._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&J.instanceColor!==null,instancingMorph:Ie&&J.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ws,alphaToCoverage:!!C.alphaToCoverage,map:At,matcap:pt,envMap:Lt,envMapMode:Lt&&le.mapping,envMapCubeUVHeight:k,aoMap:O,lightMap:mn,bumpMap:dt,normalMap:ut,displacementMap:x&&je,emissiveMap:wt,normalMapObjectSpace:ut&&C.normalMapType===Xv,normalMapTangentSpace:ut&&C.normalMapType===Wv,metalnessMap:We,roughnessMap:b,anisotropy:E,anisotropyMap:we,clearcoat:$,clearcoatMap:Ne,clearcoatNormalMap:lt,clearcoatRoughnessMap:ye,dispersion:pe,iridescence:ge,iridescenceMap:Be,iridescenceThicknessMap:qe,sheen:ce,sheenColorMap:Qe,sheenRoughnessMap:ke,specularMap:ct,specularColorMap:it,specularIntensityMap:Tt,transmission:Ve,transmissionMap:G,thicknessMap:Ae,gradientMap:ie,opaque:C.transparent===!1&&C.blending===Fs&&C.alphaToCoverage===!1,alphaMap:de,alphaTest:be,alphaHash:Pe,combine:C.combine,mapUv:At&&R(C.map.channel),aoMapUv:O&&R(C.aoMap.channel),lightMapUv:mn&&R(C.lightMap.channel),bumpMapUv:dt&&R(C.bumpMap.channel),normalMapUv:ut&&R(C.normalMap.channel),displacementMapUv:je&&R(C.displacementMap.channel),emissiveMapUv:wt&&R(C.emissiveMap.channel),metalnessMapUv:We&&R(C.metalnessMap.channel),roughnessMapUv:b&&R(C.roughnessMap.channel),anisotropyMapUv:we&&R(C.anisotropyMap.channel),clearcoatMapUv:Ne&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:lt&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:ke&&R(C.sheenRoughnessMap.channel),specularMapUv:ct&&R(C.specularMap.channel),specularColorMapUv:it&&R(C.specularColorMap.channel),specularIntensityMapUv:Tt&&R(C.specularIntensityMap.channel),transmissionMapUv:G&&R(C.transmissionMap.channel),thicknessMapUv:Ae&&R(C.thicknessMap.channel),alphaMapUv:de&&R(C.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ut||E),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!he.attributes.uv&&(At||de),fog:!!fe,useFog:C.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Te,skinning:J.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:te,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:At&&C.map.isVideoTexture===!0&&Et.getTransfer(C.map.colorSpace)===Ct,decodeVideoTextureEmissive:wt&&C.emissiveMap.isVideoTexture===!0&&Et.getTransfer(C.emissiveMap.colorSpace)===Ct,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ui,flipSided:C.side===bn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:rt&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&C.extensions.multiDraw===!0||Ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return qt.vertexUv1s=m.has(1),qt.vertexUv2s=m.has(2),qt.vertexUv3s=m.has(3),m.clear(),qt}function g(C){const A=[];if(C.shaderID?A.push(C.shaderID):(A.push(C.customVertexShaderID),A.push(C.customFragmentShaderID)),C.defines!==void 0)for(const z in C.defines)A.push(z),A.push(C.defines[z]);return C.isRawShaderMaterial===!1&&(I(A,C),D(A,C),A.push(s.outputColorSpace)),A.push(C.customProgramCacheKey),A.join()}function I(C,A){C.push(A.precision),C.push(A.outputColorSpace),C.push(A.envMapMode),C.push(A.envMapCubeUVHeight),C.push(A.mapUv),C.push(A.alphaMapUv),C.push(A.lightMapUv),C.push(A.aoMapUv),C.push(A.bumpMapUv),C.push(A.normalMapUv),C.push(A.displacementMapUv),C.push(A.emissiveMapUv),C.push(A.metalnessMapUv),C.push(A.roughnessMapUv),C.push(A.anisotropyMapUv),C.push(A.clearcoatMapUv),C.push(A.clearcoatNormalMapUv),C.push(A.clearcoatRoughnessMapUv),C.push(A.iridescenceMapUv),C.push(A.iridescenceThicknessMapUv),C.push(A.sheenColorMapUv),C.push(A.sheenRoughnessMapUv),C.push(A.specularMapUv),C.push(A.specularColorMapUv),C.push(A.specularIntensityMapUv),C.push(A.transmissionMapUv),C.push(A.thicknessMapUv),C.push(A.combine),C.push(A.fogExp2),C.push(A.sizeAttenuation),C.push(A.morphTargetsCount),C.push(A.morphAttributeCount),C.push(A.numDirLights),C.push(A.numPointLights),C.push(A.numSpotLights),C.push(A.numSpotLightMaps),C.push(A.numHemiLights),C.push(A.numRectAreaLights),C.push(A.numDirLightShadows),C.push(A.numPointLightShadows),C.push(A.numSpotLightShadows),C.push(A.numSpotLightShadowsWithMaps),C.push(A.numLightProbes),C.push(A.shadowMapType),C.push(A.toneMapping),C.push(A.numClippingPlanes),C.push(A.numClipIntersection),C.push(A.depthPacking)}function D(C,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),C.push(d.mask)}function P(C){const A=w[C.type];let z;if(A){const oe=di[A];z=M0.clone(oe.uniforms)}else z=C.uniforms;return z}function X(C,A){let z;for(let oe=0,J=_.length;oe<J;oe++){const fe=_[oe];if(fe.cacheKey===A){z=fe,++z.usedTimes;break}}return z===void 0&&(z=new HM(s,A,C,u),_.push(z)),z}function B(C){if(--C.usedTimes===0){const A=_.indexOf(C);_[A]=_[_.length-1],_.pop(),C.destroy()}}function F(C){p.remove(C)}function j(){p.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:P,acquireProgram:X,releaseProgram:B,releaseShaderCache:F,programs:_,dispose:j}}function jM(){let s=new WeakMap;function e(f){return s.has(f)}function n(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function a(f,d,p){s.get(f)[d]=p}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function YM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function vm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function xm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(v,x,y,w,R,S){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:y,groupOrder:w,renderOrder:v.renderOrder,z:R,group:S},s[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=y,g.groupOrder=w,g.renderOrder=v.renderOrder,g.z=R,g.group=S),e++,g}function d(v,x,y,w,R,S){const g=f(v,x,y,w,R,S);y.transmission>0?r.push(g):y.transparent===!0?a.push(g):n.push(g)}function p(v,x,y,w,R,S){const g=f(v,x,y,w,R,S);y.transmission>0?r.unshift(g):y.transparent===!0?a.unshift(g):n.unshift(g)}function m(v,x){n.length>1&&n.sort(v||YM),r.length>1&&r.sort(x||vm),a.length>1&&a.sort(x||vm)}function _(){for(let v=e,x=s.length;v<x;v++){const y=s[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:_,sort:m}}function qM(){let s=new WeakMap;function e(r,a){const u=s.get(r);let f;return u===void 0?(f=new xm,s.set(r,[f])):a>=u.length?(f=new xm,u.push(f)):f=u[a],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function $M(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ne,color:new Pt};break;case"SpotLight":n={position:new ne,direction:new ne,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ne,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ne,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":n={color:new Pt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return s[e.id]=n,n}}}function KM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let ZM=0;function QM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function JM(s){const e=new $M,n=KM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ne);const a=new ne,u=new Yt,f=new Yt;function d(m){let _=0,v=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let y=0,w=0,R=0,S=0,g=0,I=0,D=0,P=0,X=0,B=0,F=0;m.sort(QM);for(let C=0,A=m.length;C<A;C++){const z=m[C],oe=z.color,J=z.intensity,fe=z.distance,he=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)_+=oe.r*J,v+=oe.g*J,x+=oe.b*J;else if(z.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(z.sh.coefficients[se],J);F++}else if(z.isDirectionalLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const le=z.shadow,k=n.get(z);k.shadowIntensity=le.intensity,k.shadowBias=le.bias,k.shadowNormalBias=le.normalBias,k.shadowRadius=le.radius,k.shadowMapSize=le.mapSize,r.directionalShadow[y]=k,r.directionalShadowMap[y]=he,r.directionalShadowMatrix[y]=z.shadow.matrix,I++}r.directional[y]=se,y++}else if(z.isSpotLight){const se=e.get(z);se.position.setFromMatrixPosition(z.matrixWorld),se.color.copy(oe).multiplyScalar(J),se.distance=fe,se.coneCos=Math.cos(z.angle),se.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),se.decay=z.decay,r.spot[R]=se;const le=z.shadow;if(z.map&&(r.spotLightMap[X]=z.map,X++,le.updateMatrices(z),z.castShadow&&B++),r.spotLightMatrix[R]=le.matrix,z.castShadow){const k=n.get(z);k.shadowIntensity=le.intensity,k.shadowBias=le.bias,k.shadowNormalBias=le.normalBias,k.shadowRadius=le.radius,k.shadowMapSize=le.mapSize,r.spotShadow[R]=k,r.spotShadowMap[R]=he,P++}R++}else if(z.isRectAreaLight){const se=e.get(z);se.color.copy(oe).multiplyScalar(J),se.halfWidth.set(z.width*.5,0,0),se.halfHeight.set(0,z.height*.5,0),r.rectArea[S]=se,S++}else if(z.isPointLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),se.distance=z.distance,se.decay=z.decay,z.castShadow){const le=z.shadow,k=n.get(z);k.shadowIntensity=le.intensity,k.shadowBias=le.bias,k.shadowNormalBias=le.normalBias,k.shadowRadius=le.radius,k.shadowMapSize=le.mapSize,k.shadowCameraNear=le.camera.near,k.shadowCameraFar=le.camera.far,r.pointShadow[w]=k,r.pointShadowMap[w]=he,r.pointShadowMatrix[w]=z.shadow.matrix,D++}r.point[w]=se,w++}else if(z.isHemisphereLight){const se=e.get(z);se.skyColor.copy(z.color).multiplyScalar(J),se.groundColor.copy(z.groundColor).multiplyScalar(J),r.hemi[g]=se,g++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const j=r.hash;(j.directionalLength!==y||j.pointLength!==w||j.spotLength!==R||j.rectAreaLength!==S||j.hemiLength!==g||j.numDirectionalShadows!==I||j.numPointShadows!==D||j.numSpotShadows!==P||j.numSpotMaps!==X||j.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=S,r.point.length=w,r.hemi.length=g,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=P+X-B,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=F,j.directionalLength=y,j.pointLength=w,j.spotLength=R,j.rectAreaLength=S,j.hemiLength=g,j.numDirectionalShadows=I,j.numPointShadows=D,j.numSpotShadows=P,j.numSpotMaps=X,j.numLightProbes=F,r.version=ZM++)}function p(m,_){let v=0,x=0,y=0,w=0,R=0;const S=_.matrixWorldInverse;for(let g=0,I=m.length;g<I;g++){const D=m[g];if(D.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(S),v++}else if(D.isSpotLight){const P=r.spot[y];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(S),y++}else if(D.isRectAreaLight){const P=r.rectArea[w];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),f.identity(),u.copy(D.matrixWorld),u.premultiply(S),f.extractRotation(u),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),P.halfWidth.applyMatrix4(f),P.halfHeight.applyMatrix4(f),w++}else if(D.isPointLight){const P=r.point[x];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),x++}else if(D.isHemisphereLight){const P=r.hemi[R];P.direction.setFromMatrixPosition(D.matrixWorld),P.direction.transformDirection(S),R++}}}return{setup:d,setupView:p,state:r}}function Sm(s){const e=new JM(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function f(_){r.push(_)}function d(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function eE(s){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new Sm(s),e.set(a,[d])):u>=f.length?(d=new Sm(s),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const tE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iE(s,e,n){let r=new $m;const a=new bt,u=new bt,f=new Wt,d=new b0({depthPacking:Gv}),p=new L0,m={},_=n.maxTextureSize,v={[gr]:bn,[bn]:gr,[Ui]:Ui},x=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:tE,fragmentShader:nE}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const w=new vr;w.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new pi(w,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wm;let g=this.type;this.render=function(B,F,j){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;const C=s.getRenderTarget(),A=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),oe=s.state;oe.setBlending(pr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const J=g!==Di&&this.type===Di,fe=g===Di&&this.type!==Di;for(let he=0,se=B.length;he<se;he++){const le=B[he],k=le.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const ae=k.getFrameExtents();if(a.multiply(ae),u.copy(k.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/ae.x),a.x=u.x*ae.x,k.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/ae.y),a.y=u.y*ae.y,k.mapSize.y=u.y)),k.map===null||J===!0||fe===!0){const U=this.type!==Di?{minFilter:oi,magFilter:oi}:{};k.map!==null&&k.map.dispose(),k.map=new $r(a.x,a.y,U),k.map.texture.name=le.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const re=k.getViewportCount();for(let U=0;U<re;U++){const te=k.getViewport(U);f.set(u.x*te.x,u.y*te.y,u.x*te.z,u.y*te.w),oe.viewport(f),k.updateMatrices(le,U),r=k.getFrustum(),P(F,j,k.camera,le,this.type)}k.isPointLightShadow!==!0&&this.type===Di&&I(k,j),k.needsUpdate=!1}g=this.type,S.needsUpdate=!1,s.setRenderTarget(C,A,z)};function I(B,F){const j=e.update(R);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new $r(a.x,a.y)),x.uniforms.shadow_pass.value=B.map.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(F,null,j,x,R,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(F,null,j,y,R,null)}function D(B,F,j,C){let A=null;const z=j.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(z!==void 0)A=z;else if(A=j.isPointLight===!0?p:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const oe=A.uuid,J=F.uuid;let fe=m[oe];fe===void 0&&(fe={},m[oe]=fe);let he=fe[J];he===void 0&&(he=A.clone(),fe[J]=he,F.addEventListener("dispose",X)),A=he}if(A.visible=F.visible,A.wireframe=F.wireframe,C===Di?A.side=F.shadowSide!==null?F.shadowSide:F.side:A.side=F.shadowSide!==null?F.shadowSide:v[F.side],A.alphaMap=F.alphaMap,A.alphaTest=F.alphaTest,A.map=F.map,A.clipShadows=F.clipShadows,A.clippingPlanes=F.clippingPlanes,A.clipIntersection=F.clipIntersection,A.displacementMap=F.displacementMap,A.displacementScale=F.displacementScale,A.displacementBias=F.displacementBias,A.wireframeLinewidth=F.wireframeLinewidth,A.linewidth=F.linewidth,j.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const oe=s.properties.get(A);oe.light=j}return A}function P(B,F,j,C,A){if(B.visible===!1)return;if(B.layers.test(F.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&A===Di)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,B.matrixWorld);const J=e.update(B),fe=B.material;if(Array.isArray(fe)){const he=J.groups;for(let se=0,le=he.length;se<le;se++){const k=he[se],ae=fe[k.materialIndex];if(ae&&ae.visible){const re=D(B,ae,C,A);B.onBeforeShadow(s,B,F,j,J,re,k),s.renderBufferDirect(j,null,J,re,B,k),B.onAfterShadow(s,B,F,j,J,re,k)}}}else if(fe.visible){const he=D(B,fe,C,A);B.onBeforeShadow(s,B,F,j,J,he,null),s.renderBufferDirect(j,null,J,he,B,null),B.onAfterShadow(s,B,F,j,J,he,null)}}const oe=B.children;for(let J=0,fe=oe.length;J<fe;J++)P(oe[J],F,j,C,A)}function X(B){B.target.removeEventListener("dispose",X);for(const j in m){const C=m[j],A=B.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}const rE={[Xc]:jc,[Yc]:Kc,[qc]:Zc,[ks]:$c,[jc]:Xc,[Kc]:Yc,[Zc]:qc,[$c]:ks};function sE(s,e){function n(){let G=!1;const Ae=new Wt;let ie=null;const de=new Wt(0,0,0,0);return{setMask:function(be){ie!==be&&!G&&(s.colorMask(be,be,be,be),ie=be)},setLocked:function(be){G=be},setClear:function(be,Pe,rt,Ut,qt){qt===!0&&(be*=Ut,Pe*=Ut,rt*=Ut),Ae.set(be,Pe,rt,Ut),de.equals(Ae)===!1&&(s.clearColor(be,Pe,rt,Ut),de.copy(Ae))},reset:function(){G=!1,ie=null,de.set(-1,0,0,0)}}}function r(){let G=!1,Ae=!1,ie=null,de=null,be=null;return{setReversed:function(Pe){if(Ae!==Pe){const rt=e.get("EXT_clip_control");Ae?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Ut=be;be=null,this.setClear(Ut)}Ae=Pe},getReversed:function(){return Ae},setTest:function(Pe){Pe?ve(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(Pe){ie!==Pe&&!G&&(s.depthMask(Pe),ie=Pe)},setFunc:function(Pe){if(Ae&&(Pe=rE[Pe]),de!==Pe){switch(Pe){case Xc:s.depthFunc(s.NEVER);break;case jc:s.depthFunc(s.ALWAYS);break;case Yc:s.depthFunc(s.LESS);break;case ks:s.depthFunc(s.LEQUAL);break;case qc:s.depthFunc(s.EQUAL);break;case $c:s.depthFunc(s.GEQUAL);break;case Kc:s.depthFunc(s.GREATER);break;case Zc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){be!==Pe&&(Ae&&(Pe=1-Pe),s.clearDepth(Pe),be=Pe)},reset:function(){G=!1,ie=null,de=null,be=null,Ae=!1}}}function a(){let G=!1,Ae=null,ie=null,de=null,be=null,Pe=null,rt=null,Ut=null,qt=null;return{setTest:function(vt){G||(vt?ve(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(vt){Ae!==vt&&!G&&(s.stencilMask(vt),Ae=vt)},setFunc:function(vt,Mn,gn){(ie!==vt||de!==Mn||be!==gn)&&(s.stencilFunc(vt,Mn,gn),ie=vt,de=Mn,be=gn)},setOp:function(vt,Mn,gn){(Pe!==vt||rt!==Mn||Ut!==gn)&&(s.stencilOp(vt,Mn,gn),Pe=vt,rt=Mn,Ut=gn)},setLocked:function(vt){G=vt},setClear:function(vt){qt!==vt&&(s.clearStencil(vt),qt=vt)},reset:function(){G=!1,Ae=null,ie=null,de=null,be=null,Pe=null,rt=null,Ut=null,qt=null}}}const u=new n,f=new r,d=new a,p=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,y=[],w=null,R=!1,S=null,g=null,I=null,D=null,P=null,X=null,B=null,F=new Pt(0,0,0),j=0,C=!1,A=null,z=null,oe=null,J=null,fe=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,le=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(k)[1]),se=le>=1):k.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),se=le>=2);let ae=null,re={};const U=s.getParameter(s.SCISSOR_BOX),te=s.getParameter(s.VIEWPORT),Ue=new Wt().fromArray(U),K=new Wt().fromArray(te);function ue(G,Ae,ie,de){const be=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(G,Pe),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<ie;rt++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(Ae+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return Pe}const Me={};Me[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ve(s.DEPTH_TEST),f.setFunc(ks),dt(!1),ut(Ap),ve(s.CULL_FACE),O(pr);function ve(G){_[G]!==!0&&(s.enable(G),_[G]=!0)}function Te(G){_[G]!==!1&&(s.disable(G),_[G]=!1)}function Ie(G,Ae){return v[G]!==Ae?(s.bindFramebuffer(G,Ae),v[G]=Ae,G===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ae),G===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ze(G,Ae){let ie=y,de=!1;if(G){ie=x.get(Ae),ie===void 0&&(ie=[],x.set(Ae,ie));const be=G.textures;if(ie.length!==be.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,rt=be.length;Pe<rt;Pe++)ie[Pe]=s.COLOR_ATTACHMENT0+Pe;ie.length=be.length,de=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,de=!0);de&&s.drawBuffers(ie)}function At(G){return w!==G?(s.useProgram(G),w=G,!0):!1}const pt={[Gr]:s.FUNC_ADD,[mv]:s.FUNC_SUBTRACT,[gv]:s.FUNC_REVERSE_SUBTRACT};pt[_v]=s.MIN,pt[vv]=s.MAX;const Lt={[xv]:s.ZERO,[Sv]:s.ONE,[yv]:s.SRC_COLOR,[Gc]:s.SRC_ALPHA,[Rv]:s.SRC_ALPHA_SATURATE,[wv]:s.DST_COLOR,[Ev]:s.DST_ALPHA,[Mv]:s.ONE_MINUS_SRC_COLOR,[Wc]:s.ONE_MINUS_SRC_ALPHA,[Av]:s.ONE_MINUS_DST_COLOR,[Tv]:s.ONE_MINUS_DST_ALPHA,[Cv]:s.CONSTANT_COLOR,[Pv]:s.ONE_MINUS_CONSTANT_COLOR,[bv]:s.CONSTANT_ALPHA,[Lv]:s.ONE_MINUS_CONSTANT_ALPHA};function O(G,Ae,ie,de,be,Pe,rt,Ut,qt,vt){if(G===pr){R===!0&&(Te(s.BLEND),R=!1);return}if(R===!1&&(ve(s.BLEND),R=!0),G!==pv){if(G!==S||vt!==C){if((g!==Gr||P!==Gr)&&(s.blendEquation(s.FUNC_ADD),g=Gr,P=Gr),vt)switch(G){case Fs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rp:s.blendFunc(s.ONE,s.ONE);break;case Cp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Pp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Cp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Pp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}I=null,D=null,X=null,B=null,F.set(0,0,0),j=0,S=G,C=vt}return}be=be||Ae,Pe=Pe||ie,rt=rt||de,(Ae!==g||be!==P)&&(s.blendEquationSeparate(pt[Ae],pt[be]),g=Ae,P=be),(ie!==I||de!==D||Pe!==X||rt!==B)&&(s.blendFuncSeparate(Lt[ie],Lt[de],Lt[Pe],Lt[rt]),I=ie,D=de,X=Pe,B=rt),(Ut.equals(F)===!1||qt!==j)&&(s.blendColor(Ut.r,Ut.g,Ut.b,qt),F.copy(Ut),j=qt),S=G,C=!1}function mn(G,Ae){G.side===Ui?Te(s.CULL_FACE):ve(s.CULL_FACE);let ie=G.side===bn;Ae&&(ie=!ie),dt(ie),G.blending===Fs&&G.transparent===!1?O(pr):O(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),f.setFunc(G.depthFunc),f.setTest(G.depthTest),f.setMask(G.depthWrite),u.setMask(G.colorWrite);const de=G.stencilWrite;d.setTest(de),de&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),wt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function dt(G){A!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),A=G)}function ut(G){G!==fv?(ve(s.CULL_FACE),G!==z&&(G===Ap?s.cullFace(s.BACK):G===dv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),z=G}function je(G){G!==oe&&(se&&s.lineWidth(G),oe=G)}function wt(G,Ae,ie){G?(ve(s.POLYGON_OFFSET_FILL),(J!==Ae||fe!==ie)&&(s.polygonOffset(Ae,ie),J=Ae,fe=ie)):Te(s.POLYGON_OFFSET_FILL)}function We(G){G?ve(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function b(G){G===void 0&&(G=s.TEXTURE0+he-1),ae!==G&&(s.activeTexture(G),ae=G)}function E(G,Ae,ie){ie===void 0&&(ae===null?ie=s.TEXTURE0+he-1:ie=ae);let de=re[ie];de===void 0&&(de={type:void 0,texture:void 0},re[ie]=de),(de.type!==G||de.texture!==Ae)&&(ae!==ie&&(s.activeTexture(ie),ae=ie),s.bindTexture(G,Ae||Me[G]),de.type=G,de.texture=Ae)}function $(){const G=re[ae];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Qe(G){Ue.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ue.copy(G))}function ke(G){K.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),K.copy(G))}function ct(G,Ae){let ie=m.get(Ae);ie===void 0&&(ie=new WeakMap,m.set(Ae,ie));let de=ie.get(G);de===void 0&&(de=s.getUniformBlockIndex(Ae,G.name),ie.set(G,de))}function it(G,Ae){const de=m.get(Ae).get(G);p.get(Ae)!==de&&(s.uniformBlockBinding(Ae,de,G.__bindingPointIndex),p.set(Ae,de))}function Tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ae=null,re={},v={},x=new WeakMap,y=[],w=null,R=!1,S=null,g=null,I=null,D=null,P=null,X=null,B=null,F=new Pt(0,0,0),j=0,C=!1,A=null,z=null,oe=null,J=null,fe=null,Ue.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:ve,disable:Te,bindFramebuffer:Ie,drawBuffers:Ze,useProgram:At,setBlending:O,setMaterial:mn,setFlipSided:dt,setCullFace:ut,setLineWidth:je,setPolygonOffset:wt,setScissorTest:We,activeTexture:b,bindTexture:E,unbindTexture:$,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:Be,texImage3D:qe,updateUBOMapping:ct,uniformBlockBinding:it,texStorage2D:lt,texStorage3D:ye,texSubImage2D:ce,texSubImage3D:Ve,compressedTexSubImage2D:we,compressedTexSubImage3D:Ne,scissor:Qe,viewport:ke,reset:Tt}}function oE(s,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new bt,_=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(b,E){return y?new OffscreenCanvas(b,E):wl("canvas")}function R(b,E,$){let pe=1;const ge=We(b);if((ge.width>$||ge.height>$)&&(pe=$/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ce=Math.floor(pe*ge.width),Ve=Math.floor(pe*ge.height);v===void 0&&(v=w(ce,Ve));const we=E?w(ce,Ve):v;return we.width=ce,we.height=Ve,we.getContext("2d").drawImage(b,0,0,ce,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ce+"x"+Ve+")."),we}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),b;return b}function S(b){return b.generateMipmaps}function g(b){s.generateMipmap(b)}function I(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(b,E,$,pe,ge=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ce=E;if(E===s.RED&&($===s.FLOAT&&(ce=s.R32F),$===s.HALF_FLOAT&&(ce=s.R16F),$===s.UNSIGNED_BYTE&&(ce=s.R8)),E===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(ce=s.R8UI),$===s.UNSIGNED_SHORT&&(ce=s.R16UI),$===s.UNSIGNED_INT&&(ce=s.R32UI),$===s.BYTE&&(ce=s.R8I),$===s.SHORT&&(ce=s.R16I),$===s.INT&&(ce=s.R32I)),E===s.RG&&($===s.FLOAT&&(ce=s.RG32F),$===s.HALF_FLOAT&&(ce=s.RG16F),$===s.UNSIGNED_BYTE&&(ce=s.RG8)),E===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(ce=s.RG8UI),$===s.UNSIGNED_SHORT&&(ce=s.RG16UI),$===s.UNSIGNED_INT&&(ce=s.RG32UI),$===s.BYTE&&(ce=s.RG8I),$===s.SHORT&&(ce=s.RG16I),$===s.INT&&(ce=s.RG32I)),E===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),$===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),$===s.UNSIGNED_INT&&(ce=s.RGB32UI),$===s.BYTE&&(ce=s.RGB8I),$===s.SHORT&&(ce=s.RGB16I),$===s.INT&&(ce=s.RGB32I)),E===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),$===s.UNSIGNED_INT&&(ce=s.RGBA32UI),$===s.BYTE&&(ce=s.RGBA8I),$===s.SHORT&&(ce=s.RGBA16I),$===s.INT&&(ce=s.RGBA32I)),E===s.RGB&&$===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),E===s.RGBA){const Ve=ge?El:Et.getTransfer(pe);$===s.FLOAT&&(ce=s.RGBA32F),$===s.HALF_FLOAT&&(ce=s.RGBA16F),$===s.UNSIGNED_BYTE&&(ce=Ve===Ct?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function P(b,E){let $;return b?E===null||E===qr||E===Vs?$=s.DEPTH24_STENCIL8:E===Ii?$=s.DEPTH32F_STENCIL8:E===Io&&($=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qr||E===Vs?$=s.DEPTH_COMPONENT24:E===Ii?$=s.DEPTH_COMPONENT32F:E===Io&&($=s.DEPTH_COMPONENT16),$}function X(b,E){return S(b)===!0||b.isFramebufferTexture&&b.minFilter!==oi&&b.minFilter!==hi?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function B(b){const E=b.target;E.removeEventListener("dispose",B),j(E),E.isVideoTexture&&_.delete(E)}function F(b){const E=b.target;E.removeEventListener("dispose",F),A(E)}function j(b){const E=r.get(b);if(E.__webglInit===void 0)return;const $=b.source,pe=x.get($);if(pe){const ge=pe[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&C(b),Object.keys(pe).length===0&&x.delete($)}r.remove(b)}function C(b){const E=r.get(b);s.deleteTexture(E.__webglTexture);const $=b.source,pe=x.get($);delete pe[E.__cacheKey],f.memory.textures--}function A(b){const E=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(E.__webglFramebuffer[pe]))for(let ge=0;ge<E.__webglFramebuffer[pe].length;ge++)s.deleteFramebuffer(E.__webglFramebuffer[pe][ge]);else s.deleteFramebuffer(E.__webglFramebuffer[pe]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[pe])}else{if(Array.isArray(E.__webglFramebuffer))for(let pe=0;pe<E.__webglFramebuffer.length;pe++)s.deleteFramebuffer(E.__webglFramebuffer[pe]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pe=0;pe<E.__webglColorRenderbuffer.length;pe++)E.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[pe]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=b.textures;for(let pe=0,ge=$.length;pe<ge;pe++){const ce=r.get($[pe]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),f.memory.textures--),r.remove($[pe])}r.remove(b)}let z=0;function oe(){z=0}function J(){const b=z;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),z+=1,b}function fe(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function he(b,E){const $=r.get(b);if(b.isVideoTexture&&je(b),b.isRenderTargetTexture===!1&&b.version>0&&$.__version!==b.version){const pe=b.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K($,b,E);return}}n.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+E)}function se(b,E){const $=r.get(b);if(b.version>0&&$.__version!==b.version){K($,b,E);return}n.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+E)}function le(b,E){const $=r.get(b);if(b.version>0&&$.__version!==b.version){K($,b,E);return}n.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+E)}function k(b,E){const $=r.get(b);if(b.version>0&&$.__version!==b.version){ue($,b,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+E)}const ae={[ef]:s.REPEAT,[Xr]:s.CLAMP_TO_EDGE,[tf]:s.MIRRORED_REPEAT},re={[oi]:s.NEAREST,[Hv]:s.NEAREST_MIPMAP_NEAREST,[Ya]:s.NEAREST_MIPMAP_LINEAR,[hi]:s.LINEAR,[hc]:s.LINEAR_MIPMAP_NEAREST,[jr]:s.LINEAR_MIPMAP_LINEAR},U={[jv]:s.NEVER,[Qv]:s.ALWAYS,[Yv]:s.LESS,[Bm]:s.LEQUAL,[qv]:s.EQUAL,[Zv]:s.GEQUAL,[$v]:s.GREATER,[Kv]:s.NOTEQUAL};function te(b,E){if(E.type===Ii&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===hi||E.magFilter===hc||E.magFilter===Ya||E.magFilter===jr||E.minFilter===hi||E.minFilter===hc||E.minFilter===Ya||E.minFilter===jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,ae[E.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,ae[E.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,ae[E.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,re[E.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,re[E.minFilter]),E.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===oi||E.minFilter!==Ya&&E.minFilter!==jr||E.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ue(b,E){let $=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",B));const pe=E.source;let ge=x.get(pe);ge===void 0&&(ge={},x.set(pe,ge));const ce=fe(E);if(ce!==b.__cacheKey){ge[ce]===void 0&&(ge[ce]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,$=!0),ge[ce].usedTimes++;const Ve=ge[b.__cacheKey];Ve!==void 0&&(ge[b.__cacheKey].usedTimes--,Ve.usedTimes===0&&C(E)),b.__cacheKey=ce,b.__webglTexture=ge[ce].texture}return $}function K(b,E,$){let pe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=s.TEXTURE_3D);const ge=Ue(b,E),ce=E.source;n.bindTexture(pe,b.__webglTexture,s.TEXTURE0+$);const Ve=r.get(ce);if(ce.version!==Ve.__version||ge===!0){n.activeTexture(s.TEXTURE0+$);const we=Et.getPrimaries(Et.workingColorSpace),Ne=E.colorSpace===hr?null:Et.getPrimaries(E.colorSpace),lt=E.colorSpace===hr||we===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let ye=R(E.image,!1,a.maxTextureSize);ye=wt(E,ye);const Be=u.convert(E.format,E.colorSpace),qe=u.convert(E.type);let Qe=D(E.internalFormat,Be,qe,E.colorSpace,E.isVideoTexture);te(pe,E);let ke;const ct=E.mipmaps,it=E.isVideoTexture!==!0,Tt=Ve.__version===void 0||ge===!0,G=ce.dataReady,Ae=X(E,ye);if(E.isDepthTexture)Qe=P(E.format===Gs,E.type),Tt&&(it?n.texStorage2D(s.TEXTURE_2D,1,Qe,ye.width,ye.height):n.texImage2D(s.TEXTURE_2D,0,Qe,ye.width,ye.height,0,Be,qe,null));else if(E.isDataTexture)if(ct.length>0){it&&Tt&&n.texStorage2D(s.TEXTURE_2D,Ae,Qe,ct[0].width,ct[0].height);for(let ie=0,de=ct.length;ie<de;ie++)ke=ct[ie],it?G&&n.texSubImage2D(s.TEXTURE_2D,ie,0,0,ke.width,ke.height,Be,qe,ke.data):n.texImage2D(s.TEXTURE_2D,ie,Qe,ke.width,ke.height,0,Be,qe,ke.data);E.generateMipmaps=!1}else it?(Tt&&n.texStorage2D(s.TEXTURE_2D,Ae,Qe,ye.width,ye.height),G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ye.width,ye.height,Be,qe,ye.data)):n.texImage2D(s.TEXTURE_2D,0,Qe,ye.width,ye.height,0,Be,qe,ye.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){it&&Tt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Qe,ct[0].width,ct[0].height,ye.depth);for(let ie=0,de=ct.length;ie<de;ie++)if(ke=ct[ie],E.format!==si)if(Be!==null)if(it){if(G)if(E.layerUpdates.size>0){const be=Kp(ke.width,ke.height,E.format,E.type);for(const Pe of E.layerUpdates){const rt=ke.data.subarray(Pe*be/ke.data.BYTES_PER_ELEMENT,(Pe+1)*be/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,Pe,ke.width,ke.height,1,Be,rt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ke.width,ke.height,ye.depth,Be,ke.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,Qe,ke.width,ke.height,ye.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?G&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ke.width,ke.height,ye.depth,Be,qe,ke.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ie,Qe,ke.width,ke.height,ye.depth,0,Be,qe,ke.data)}else{it&&Tt&&n.texStorage2D(s.TEXTURE_2D,Ae,Qe,ct[0].width,ct[0].height);for(let ie=0,de=ct.length;ie<de;ie++)ke=ct[ie],E.format!==si?Be!==null?it?G&&n.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,ke.width,ke.height,Be,ke.data):n.compressedTexImage2D(s.TEXTURE_2D,ie,Qe,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?G&&n.texSubImage2D(s.TEXTURE_2D,ie,0,0,ke.width,ke.height,Be,qe,ke.data):n.texImage2D(s.TEXTURE_2D,ie,Qe,ke.width,ke.height,0,Be,qe,ke.data)}else if(E.isDataArrayTexture)if(it){if(Tt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Qe,ye.width,ye.height,ye.depth),G)if(E.layerUpdates.size>0){const ie=Kp(ye.width,ye.height,E.format,E.type);for(const de of E.layerUpdates){const be=ye.data.subarray(de*ie/ye.data.BYTES_PER_ELEMENT,(de+1)*ie/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,ye.width,ye.height,1,Be,qe,be)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Be,qe,ye.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Qe,ye.width,ye.height,ye.depth,0,Be,qe,ye.data);else if(E.isData3DTexture)it?(Tt&&n.texStorage3D(s.TEXTURE_3D,Ae,Qe,ye.width,ye.height,ye.depth),G&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Be,qe,ye.data)):n.texImage3D(s.TEXTURE_3D,0,Qe,ye.width,ye.height,ye.depth,0,Be,qe,ye.data);else if(E.isFramebufferTexture){if(Tt)if(it)n.texStorage2D(s.TEXTURE_2D,Ae,Qe,ye.width,ye.height);else{let ie=ye.width,de=ye.height;for(let be=0;be<Ae;be++)n.texImage2D(s.TEXTURE_2D,be,Qe,ie,de,0,Be,qe,null),ie>>=1,de>>=1}}else if(ct.length>0){if(it&&Tt){const ie=We(ct[0]);n.texStorage2D(s.TEXTURE_2D,Ae,Qe,ie.width,ie.height)}for(let ie=0,de=ct.length;ie<de;ie++)ke=ct[ie],it?G&&n.texSubImage2D(s.TEXTURE_2D,ie,0,0,Be,qe,ke):n.texImage2D(s.TEXTURE_2D,ie,Qe,Be,qe,ke);E.generateMipmaps=!1}else if(it){if(Tt){const ie=We(ye);n.texStorage2D(s.TEXTURE_2D,Ae,Qe,ie.width,ie.height)}G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,qe,ye)}else n.texImage2D(s.TEXTURE_2D,0,Qe,Be,qe,ye);S(E)&&g(pe),Ve.__version=ce.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function ue(b,E,$){if(E.image.length!==6)return;const pe=Ue(b,E),ge=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+$);const ce=r.get(ge);if(ge.version!==ce.__version||pe===!0){n.activeTexture(s.TEXTURE0+$);const Ve=Et.getPrimaries(Et.workingColorSpace),we=E.colorSpace===hr?null:Et.getPrimaries(E.colorSpace),Ne=E.colorSpace===hr||Ve===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const lt=E.isCompressedTexture||E.image[0].isCompressedTexture,ye=E.image[0]&&E.image[0].isDataTexture,Be=[];for(let de=0;de<6;de++)!lt&&!ye?Be[de]=R(E.image[de],!0,a.maxCubemapSize):Be[de]=ye?E.image[de].image:E.image[de],Be[de]=wt(E,Be[de]);const qe=Be[0],Qe=u.convert(E.format,E.colorSpace),ke=u.convert(E.type),ct=D(E.internalFormat,Qe,ke,E.colorSpace),it=E.isVideoTexture!==!0,Tt=ce.__version===void 0||pe===!0,G=ge.dataReady;let Ae=X(E,qe);te(s.TEXTURE_CUBE_MAP,E);let ie;if(lt){it&&Tt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,ct,qe.width,qe.height);for(let de=0;de<6;de++){ie=Be[de].mipmaps;for(let be=0;be<ie.length;be++){const Pe=ie[be];E.format!==si?Qe!==null?it?G&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,0,0,Pe.width,Pe.height,Qe,Pe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,ct,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,0,0,Pe.width,Pe.height,Qe,ke,Pe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,ct,Pe.width,Pe.height,0,Qe,ke,Pe.data)}}}else{if(ie=E.mipmaps,it&&Tt){ie.length>0&&Ae++;const de=We(Be[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,ct,de.width,de.height)}for(let de=0;de<6;de++)if(ye){it?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Be[de].width,Be[de].height,Qe,ke,Be[de].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ct,Be[de].width,Be[de].height,0,Qe,ke,Be[de].data);for(let be=0;be<ie.length;be++){const rt=ie[be].image[de].image;it?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,0,0,rt.width,rt.height,Qe,ke,rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,ct,rt.width,rt.height,0,Qe,ke,rt.data)}}else{it?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Qe,ke,Be[de]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ct,Qe,ke,Be[de]);for(let be=0;be<ie.length;be++){const Pe=ie[be];it?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,0,0,Qe,ke,Pe.image[de]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,ct,Qe,ke,Pe.image[de])}}}S(E)&&g(s.TEXTURE_CUBE_MAP),ce.__version=ge.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Me(b,E,$,pe,ge,ce){const Ve=u.convert($.format,$.colorSpace),we=u.convert($.type),Ne=D($.internalFormat,Ve,we,$.colorSpace),lt=r.get(E),ye=r.get($);if(ye.__renderTarget=E,!lt.__hasExternalTextures){const Be=Math.max(1,E.width>>ce),qe=Math.max(1,E.height>>ce);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?n.texImage3D(ge,ce,Ne,Be,qe,E.depth,0,Ve,we,null):n.texImage2D(ge,ce,Ne,Be,qe,0,Ve,we,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),ut(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ge,ye.__webglTexture,0,dt(E)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ge,ye.__webglTexture,ce),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(b,E,$){if(s.bindRenderbuffer(s.RENDERBUFFER,b),E.depthBuffer){const pe=E.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ce=P(E.stencilBuffer,ge),Ve=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=dt(E);ut(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,ce,E.width,E.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,ce,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ce,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,b)}else{const pe=E.textures;for(let ge=0;ge<pe.length;ge++){const ce=pe[ge],Ve=u.convert(ce.format,ce.colorSpace),we=u.convert(ce.type),Ne=D(ce.internalFormat,Ve,we,ce.colorSpace),lt=dt(E);$&&ut(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,Ne,E.width,E.height):ut(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,Ne,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(E.depthTexture);pe.__renderTarget=E,(!pe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he(E.depthTexture,0);const ge=pe.__webglTexture,ce=dt(E);if(E.depthTexture.format===Os)ut(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0);else if(E.depthTexture.format===Gs)ut(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ie(b){const E=r.get(b),$=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const pe=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=pe}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Te(E.__webglFramebuffer,b)}else if($){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=s.createRenderbuffer(),ve(E.__webglDepthbuffer[pe],b,!1);else{const ge=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ce)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),ve(E.__webglDepthbuffer,b,!1);else{const pe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ge)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ze(b,E,$){const pe=r.get(b);E!==void 0&&Me(pe.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Ie(b)}function At(b){const E=b.texture,$=r.get(b),pe=r.get(E);b.addEventListener("dispose",F);const ge=b.textures,ce=b.isWebGLCubeRenderTarget===!0,Ve=ge.length>1;if(Ve||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=E.version,f.memory.textures++),ce){$.__webglFramebuffer=[];for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[we]=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)$.__webglFramebuffer[we][Ne]=s.createFramebuffer()}else $.__webglFramebuffer[we]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let we=0;we<E.mipmaps.length;we++)$.__webglFramebuffer[we]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let we=0,Ne=ge.length;we<Ne;we++){const lt=r.get(ge[we]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),f.memory.textures++)}if(b.samples>0&&ut(b)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let we=0;we<ge.length;we++){const Ne=ge[we];$.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[we]);const lt=u.convert(Ne.format,Ne.colorSpace),ye=u.convert(Ne.type),Be=D(Ne.internalFormat,lt,ye,Ne.colorSpace,b.isXRRenderTarget===!0),qe=dt(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,Be,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,$.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),ve($.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),te(s.TEXTURE_CUBE_MAP,E);for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)Me($.__webglFramebuffer[we][Ne],b,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ne);else Me($.__webglFramebuffer[we],b,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(E)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ve){for(let we=0,Ne=ge.length;we<Ne;we++){const lt=ge[we],ye=r.get(lt);n.bindTexture(s.TEXTURE_2D,ye.__webglTexture),te(s.TEXTURE_2D,lt),Me($.__webglFramebuffer,b,lt,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,0),S(lt)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let we=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(we=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(we,pe.__webglTexture),te(we,E),E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)Me($.__webglFramebuffer[Ne],b,E,s.COLOR_ATTACHMENT0,we,Ne);else Me($.__webglFramebuffer,b,E,s.COLOR_ATTACHMENT0,we,0);S(E)&&g(we),n.unbindTexture()}b.depthBuffer&&Ie(b)}function pt(b){const E=b.textures;for(let $=0,pe=E.length;$<pe;$++){const ge=E[$];if(S(ge)){const ce=I(b),Ve=r.get(ge).__webglTexture;n.bindTexture(ce,Ve),g(ce),n.unbindTexture()}}}const Lt=[],O=[];function mn(b){if(b.samples>0){if(ut(b)===!1){const E=b.textures,$=b.width,pe=b.height;let ge=s.COLOR_BUFFER_BIT;const ce=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(b),we=E.length>1;if(we)for(let Ne=0;Ne<E.length;Ne++)n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ne=0;Ne<E.length;Ne++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ne]);const lt=r.get(E[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,lt,0)}s.blitFramebuffer(0,0,$,pe,0,0,$,pe,ge,s.NEAREST),p===!0&&(Lt.length=0,O.length=0,Lt.push(s.COLOR_ATTACHMENT0+Ne),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Lt.push(ce),O.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Lt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let Ne=0;Ne<E.length;Ne++){n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ne]);const lt=r.get(E[Ne]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,lt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const E=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function dt(b){return Math.min(a.maxSamples,b.samples)}function ut(b){const E=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function je(b){const E=f.render.frame;_.get(b)!==E&&(_.set(b,E),b.update())}function wt(b,E){const $=b.colorSpace,pe=b.format,ge=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||$!==Ws&&$!==hr&&(Et.getTransfer($)===Ct?(pe!==si||ge!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function We(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=J,this.resetTextureUnits=oe,this.setTexture2D=he,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=k,this.rebindTextures=Ze,this.setupRenderTarget=At,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ut}function aE(s,e){function n(r,a=hr){let u;const f=Et.getTransfer(a);if(r===Bi)return s.UNSIGNED_BYTE;if(r===Nf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ff)return s.UNSIGNED_SHORT_5_5_5_1;if(r===bm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Cm)return s.BYTE;if(r===Pm)return s.SHORT;if(r===Io)return s.UNSIGNED_SHORT;if(r===If)return s.INT;if(r===qr)return s.UNSIGNED_INT;if(r===Ii)return s.FLOAT;if(r===No)return s.HALF_FLOAT;if(r===Lm)return s.ALPHA;if(r===Dm)return s.RGB;if(r===si)return s.RGBA;if(r===Um)return s.LUMINANCE;if(r===Im)return s.LUMINANCE_ALPHA;if(r===Os)return s.DEPTH_COMPONENT;if(r===Gs)return s.DEPTH_STENCIL;if(r===Nm)return s.RED;if(r===Of)return s.RED_INTEGER;if(r===Fm)return s.RG;if(r===Bf)return s.RG_INTEGER;if(r===kf)return s.RGBA_INTEGER;if(r===ml||r===gl||r===_l||r===vl)if(f===Ct)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===ml)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===gl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_l)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===ml)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===gl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_l)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nf||r===rf||r===sf||r===of)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===nf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===of)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===af||r===lf||r===uf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===af||r===lf)return f===Ct?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===uf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===cf||r===ff||r===df||r===hf||r===pf||r===mf||r===gf||r===_f||r===vf||r===xf||r===Sf||r===yf||r===Mf||r===Ef)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===cf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ff)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===df)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===hf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===pf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===mf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_f)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Mf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ef)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xl||r===Tf||r===wf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===xl)return f===Ct?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Tf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Om||r===Af||r===Rf||r===Cf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===xl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Af)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Rf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Cf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const lE={type:"move"};class Vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Do,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Do,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Do,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const R of e.hand.values()){const S=n.getJointPose(R,r),g=this._getHandJoint(m,R);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),y=.02,w=.005;m.inputState.pinching&&x>y+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=y-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(lE)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Do;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const uE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Ln,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new _r({vertexShader:uE,fragmentShader:cE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pi(new Cl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dE extends js{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,_=null,v=null,x=null,y=null,w=null;const R=new fE,S=n.getContextAttributes();let g=null,I=null;const D=[],P=[],X=new bt;let B=null;const F=new Yn;F.viewport=new Wt;const j=new Yn;j.viewport=new Wt;const C=[F,j],A=new U0;let z=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ue=D[K];return ue===void 0&&(ue=new Vc,D[K]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(K){let ue=D[K];return ue===void 0&&(ue=new Vc,D[K]=ue),ue.getGripSpace()},this.getHand=function(K){let ue=D[K];return ue===void 0&&(ue=new Vc,D[K]=ue),ue.getHandSpace()};function J(K){const ue=P.indexOf(K.inputSource);if(ue===-1)return;const Me=D[ue];Me!==void 0&&(Me.update(K.inputSource,K.frame,m||f),Me.dispatchEvent({type:K.type,data:K.inputSource}))}function fe(){a.removeEventListener("select",J),a.removeEventListener("selectstart",J),a.removeEventListener("selectend",J),a.removeEventListener("squeeze",J),a.removeEventListener("squeezestart",J),a.removeEventListener("squeezeend",J),a.removeEventListener("end",fe),a.removeEventListener("inputsourceschange",he);for(let K=0;K<D.length;K++){const ue=P[K];ue!==null&&(P[K]=null,D[K].disconnect(ue))}z=null,oe=null,R.reset(),e.setRenderTarget(g),y=null,x=null,v=null,a=null,I=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(X.width,X.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){u=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",J),a.addEventListener("selectstart",J),a.addEventListener("selectend",J),a.addEventListener("squeeze",J),a.addEventListener("squeezestart",J),a.addEventListener("squeezeend",J),a.addEventListener("end",fe),a.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await n.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(X),a.renderState.layers===void 0){const ue={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(a,n,ue),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),I=new $r(y.framebufferWidth,y.framebufferHeight,{format:si,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ue=null,Me=null,ve=null;S.depth&&(ve=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=S.stencil?Gs:Os,Me=S.stencil?Vs:qr);const Te={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:u};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(Te),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new $r(x.textureWidth,x.textureHeight,{format:si,type:Bi,depthTexture:new Km(x.textureWidth,x.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Ue.setContext(a),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function he(K){for(let ue=0;ue<K.removed.length;ue++){const Me=K.removed[ue],ve=P.indexOf(Me);ve>=0&&(P[ve]=null,D[ve].disconnect(Me))}for(let ue=0;ue<K.added.length;ue++){const Me=K.added[ue];let ve=P.indexOf(Me);if(ve===-1){for(let Ie=0;Ie<D.length;Ie++)if(Ie>=P.length){P.push(Me),ve=Ie;break}else if(P[Ie]===null){P[Ie]=Me,ve=Ie;break}if(ve===-1)break}const Te=D[ve];Te&&Te.connect(Me)}}const se=new ne,le=new ne;function k(K,ue,Me){se.setFromMatrixPosition(ue.matrixWorld),le.setFromMatrixPosition(Me.matrixWorld);const ve=se.distanceTo(le),Te=ue.projectionMatrix.elements,Ie=Me.projectionMatrix.elements,Ze=Te[14]/(Te[10]-1),At=Te[14]/(Te[10]+1),pt=(Te[9]+1)/Te[5],Lt=(Te[9]-1)/Te[5],O=(Te[8]-1)/Te[0],mn=(Ie[8]+1)/Ie[0],dt=Ze*O,ut=Ze*mn,je=ve/(-O+mn),wt=je*-O;if(ue.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(wt),K.translateZ(je),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Te[10]===-1)K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const We=Ze+je,b=At+je,E=dt-wt,$=ut+(ve-wt),pe=pt*At/b*We,ge=Lt*At/b*We;K.projectionMatrix.makePerspective(E,$,pe,ge,We,b),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,ue){ue===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ue.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;let ue=K.near,Me=K.far;R.texture!==null&&(R.depthNear>0&&(ue=R.depthNear),R.depthFar>0&&(Me=R.depthFar)),A.near=j.near=F.near=ue,A.far=j.far=F.far=Me,(z!==A.near||oe!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),z=A.near,oe=A.far),F.layers.mask=K.layers.mask|2,j.layers.mask=K.layers.mask|4,A.layers.mask=F.layers.mask|j.layers.mask;const ve=K.parent,Te=A.cameras;ae(A,ve);for(let Ie=0;Ie<Te.length;Ie++)ae(Te[Ie],ve);Te.length===2?k(A,F,j):A.projectionMatrix.copy(F.projectionMatrix),re(K,A,ve)};function re(K,ue,Me){Me===null?K.matrix.copy(ue.matrixWorld):(K.matrix.copy(Me.matrixWorld),K.matrix.invert(),K.matrix.multiply(ue.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Pf*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(K){p=K,x!==null&&(x.fixedFoveation=K),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=K)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(A)};let U=null;function te(K,ue){if(_=ue.getViewerPose(m||f),w=ue,_!==null){const Me=_.views;y!==null&&(e.setRenderTargetFramebuffer(I,y.framebuffer),e.setRenderTarget(I));let ve=!1;Me.length!==A.cameras.length&&(A.cameras.length=0,ve=!0);for(let Ie=0;Ie<Me.length;Ie++){const Ze=Me[Ie];let At=null;if(y!==null)At=y.getViewport(Ze);else{const Lt=v.getViewSubImage(x,Ze);At=Lt.viewport,Ie===0&&(e.setRenderTargetTextures(I,Lt.colorTexture,x.ignoreDepthValues?void 0:Lt.depthStencilTexture),e.setRenderTarget(I))}let pt=C[Ie];pt===void 0&&(pt=new Yn,pt.layers.enable(Ie),pt.viewport=new Wt,C[Ie]=pt),pt.matrix.fromArray(Ze.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Ze.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(At.x,At.y,At.width,At.height),Ie===0&&(A.matrix.copy(pt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ve===!0&&A.cameras.push(pt)}const Te=a.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ie=v.getDepthInformation(Me[0]);Ie&&Ie.isValid&&Ie.texture&&R.init(e,Ie,a.renderState)}}for(let Me=0;Me<D.length;Me++){const ve=P[Me],Te=D[Me];ve!==null&&Te!==void 0&&Te.update(ve,ue,m||f)}U&&U(K,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),w=null}const Ue=new Zm;Ue.setAnimationLoop(te),this.setAnimationLoop=function(K){U=K},this.dispose=function(){}}}const zr=new ki,hE=new Yt;function pE(s,e){function n(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,jm(s)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function a(S,g,I,D,P){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(S,g):g.isMeshToonMaterial?(u(S,g),v(S,g)):g.isMeshPhongMaterial?(u(S,g),_(S,g)):g.isMeshStandardMaterial?(u(S,g),x(S,g),g.isMeshPhysicalMaterial&&y(S,g,P)):g.isMeshMatcapMaterial?(u(S,g),w(S,g)):g.isMeshDepthMaterial?u(S,g):g.isMeshDistanceMaterial?(u(S,g),R(S,g)):g.isMeshNormalMaterial?u(S,g):g.isLineBasicMaterial?(f(S,g),g.isLineDashedMaterial&&d(S,g)):g.isPointsMaterial?p(S,g,I,D):g.isSpriteMaterial?m(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,n(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,n(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===bn&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,n(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===bn&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,n(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,n(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const I=e.get(g),D=I.envMap,P=I.envMapRotation;D&&(S.envMap.value=D,zr.copy(P),zr.x*=-1,zr.y*=-1,zr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),S.envMapRotation.value.setFromMatrix4(hE.makeRotationFromEuler(zr)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,S.aoMapTransform))}function f(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,n(g.map,S.mapTransform))}function d(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function p(S,g,I,D){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*I,S.scale.value=D*.5,g.map&&(S.map.value=g.map,n(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function m(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,n(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function _(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function v(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function x(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function y(S,g,I){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===bn&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,S.specularIntensityMapTransform))}function w(S,g){g.matcap&&(S.matcap.value=g.matcap)}function R(S,g){const I=e.get(g).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function mE(s,e,n,r){let a={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,D){const P=D.program;r.uniformBlockBinding(I,P)}function m(I,D){let P=a[I.id];P===void 0&&(w(I),P=_(I),a[I.id]=P,I.addEventListener("dispose",S));const X=D.program;r.updateUBOMapping(I,X);const B=e.render.frame;u[I.id]!==B&&(x(I),u[I.id]=B)}function _(I){const D=v();I.__bindingPointIndex=D;const P=s.createBuffer(),X=I.__size,B=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,X,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,P),P}function v(){for(let I=0;I<d;I++)if(f.indexOf(I)===-1)return f.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const D=a[I.id],P=I.uniforms,X=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let B=0,F=P.length;B<F;B++){const j=Array.isArray(P[B])?P[B]:[P[B]];for(let C=0,A=j.length;C<A;C++){const z=j[C];if(y(z,B,C,X)===!0){const oe=z.__offset,J=Array.isArray(z.value)?z.value:[z.value];let fe=0;for(let he=0;he<J.length;he++){const se=J[he],le=R(se);typeof se=="number"||typeof se=="boolean"?(z.__data[0]=se,s.bufferSubData(s.UNIFORM_BUFFER,oe+fe,z.__data)):se.isMatrix3?(z.__data[0]=se.elements[0],z.__data[1]=se.elements[1],z.__data[2]=se.elements[2],z.__data[3]=0,z.__data[4]=se.elements[3],z.__data[5]=se.elements[4],z.__data[6]=se.elements[5],z.__data[7]=0,z.__data[8]=se.elements[6],z.__data[9]=se.elements[7],z.__data[10]=se.elements[8],z.__data[11]=0):(se.toArray(z.__data,fe),fe+=le.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,oe,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(I,D,P,X){const B=I.value,F=D+"_"+P;if(X[F]===void 0)return typeof B=="number"||typeof B=="boolean"?X[F]=B:X[F]=B.clone(),!0;{const j=X[F];if(typeof B=="number"||typeof B=="boolean"){if(j!==B)return X[F]=B,!0}else if(j.equals(B)===!1)return j.copy(B),!0}return!1}function w(I){const D=I.uniforms;let P=0;const X=16;for(let F=0,j=D.length;F<j;F++){const C=Array.isArray(D[F])?D[F]:[D[F]];for(let A=0,z=C.length;A<z;A++){const oe=C[A],J=Array.isArray(oe.value)?oe.value:[oe.value];for(let fe=0,he=J.length;fe<he;fe++){const se=J[fe],le=R(se),k=P%X,ae=k%le.boundary,re=k+ae;P+=ae,re!==0&&X-re<le.storage&&(P+=X-re),oe.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=P,P+=le.storage}}}const B=P%X;return B>0&&(P+=X-B),I.__size=P,I.__cache={},this}function R(I){const D={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(D.boundary=4,D.storage=4):I.isVector2?(D.boundary=8,D.storage=8):I.isVector3||I.isColor?(D.boundary=16,D.storage=12):I.isVector4?(D.boundary=16,D.storage=16):I.isMatrix3?(D.boundary=48,D.storage=48):I.isMatrix4?(D.boundary=64,D.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),D}function S(I){const D=I.target;D.removeEventListener("dispose",S);const P=f.indexOf(D.__bindingPointIndex);f.splice(P,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete u[D.id]}function g(){for(const I in a)s.deleteBuffer(a[I]);f=[],a={},u={}}return{bind:p,update:m,dispose:g}}class gE{constructor(e={}){const{canvas:n=e0(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const w=new Uint32Array(4),R=new Int32Array(4);let S=null,g=null;const I=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this.toneMapping=mr,this.toneMappingExposure=1;const P=this;let X=!1,B=0,F=0,j=null,C=-1,A=null;const z=new Wt,oe=new Wt;let J=null;const fe=new Pt(0);let he=0,se=n.width,le=n.height,k=1,ae=null,re=null;const U=new Wt(0,0,se,le),te=new Wt(0,0,se,le);let Ue=!1;const K=new $m;let ue=!1,Me=!1;const ve=new Yt,Te=new Yt,Ie=new ne,Ze=new Wt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Lt(){return j===null?k:1}let O=r;function mn(T,W){return n.getContext(T,W)}try{const T={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Uf}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),O===null){const W="webgl2";if(O=mn(W,T),O===null)throw mn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let dt,ut,je,wt,We,b,E,$,pe,ge,ce,Ve,we,Ne,lt,ye,Be,qe,Qe,ke,ct,it,Tt,G;function Ae(){dt=new wy(O),dt.init(),it=new aE(O,dt),ut=new xy(O,dt,e,it),je=new sE(O,dt),ut.reverseDepthBuffer&&x&&je.buffers.depth.setReversed(!0),wt=new Cy(O),We=new jM,b=new oE(O,dt,je,We,ut,it,wt),E=new yy(P),$=new Ty(P),pe=new N0(O),Tt=new _y(O,pe),ge=new Ay(O,pe,wt,Tt),ce=new by(O,ge,pe,wt),Qe=new Py(O,ut,b),ye=new Sy(We),Ve=new XM(P,E,$,dt,ut,Tt,ye),we=new pE(P,We),Ne=new qM,lt=new eE(dt),qe=new gy(P,E,$,je,ce,y,p),Be=new iE(P,ce,ut),G=new mE(O,wt,ut,je),ke=new vy(O,dt,wt),ct=new Ry(O,dt,wt),wt.programs=Ve.programs,P.capabilities=ut,P.extensions=dt,P.properties=We,P.renderLists=Ne,P.shadowMap=Be,P.state=je,P.info=wt}Ae();const ie=new dE(P,O);this.xr=ie,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=dt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=dt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(T){T!==void 0&&(k=T,this.setSize(se,le,!1))},this.getSize=function(T){return T.set(se,le)},this.setSize=function(T,W,Q=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=T,le=W,n.width=Math.floor(T*k),n.height=Math.floor(W*k),Q===!0&&(n.style.width=T+"px",n.style.height=W+"px"),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(se*k,le*k).floor()},this.setDrawingBufferSize=function(T,W,Q){se=T,le=W,k=Q,n.width=Math.floor(T*Q),n.height=Math.floor(W*Q),this.setViewport(0,0,T,W)},this.getCurrentViewport=function(T){return T.copy(z)},this.getViewport=function(T){return T.copy(U)},this.setViewport=function(T,W,Q,ee){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,W,Q,ee),je.viewport(z.copy(U).multiplyScalar(k).round())},this.getScissor=function(T){return T.copy(te)},this.setScissor=function(T,W,Q,ee){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,W,Q,ee),je.scissor(oe.copy(te).multiplyScalar(k).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(T){je.setScissorTest(Ue=T)},this.setOpaqueSort=function(T){ae=T},this.setTransparentSort=function(T){re=T},this.getClearColor=function(T){return T.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(T=!0,W=!0,Q=!0){let ee=0;if(T){let H=!1;if(j!==null){const Se=j.texture.format;H=Se===kf||Se===Bf||Se===Of}if(H){const Se=j.texture.type,Re=Se===Bi||Se===qr||Se===Io||Se===Vs||Se===Nf||Se===Ff,De=qe.getClearColor(),Fe=qe.getClearAlpha(),Je=De.r,et=De.g,Xe=De.b;Re?(w[0]=Je,w[1]=et,w[2]=Xe,w[3]=Fe,O.clearBufferuiv(O.COLOR,0,w)):(R[0]=Je,R[1]=et,R[2]=Xe,R[3]=Fe,O.clearBufferiv(O.COLOR,0,R))}else ee|=O.COLOR_BUFFER_BIT}W&&(ee|=O.DEPTH_BUFFER_BIT),Q&&(ee|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),qe.dispose(),Ne.dispose(),lt.dispose(),We.dispose(),E.dispose(),$.dispose(),ce.dispose(),Tt.dispose(),G.dispose(),Ve.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Kr),ie.removeEventListener("sessionend",zi),_i.stop()};function de(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const T=wt.autoReset,W=Be.enabled,Q=Be.autoUpdate,ee=Be.needsUpdate,H=Be.type;Ae(),wt.autoReset=T,Be.enabled=W,Be.autoUpdate=Q,Be.needsUpdate=ee,Be.type=H}function Pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function rt(T){const W=T.target;W.removeEventListener("dispose",rt),Ut(W)}function Ut(T){qt(T),We.remove(T)}function qt(T){const W=We.get(T).programs;W!==void 0&&(W.forEach(function(Q){Ve.releaseProgram(Q)}),T.isShaderMaterial&&Ve.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,Q,ee,H,Se){W===null&&(W=At);const Re=H.isMesh&&H.matrixWorld.determinant()<0,De=Vo(T,W,Q,ee,H);je.setMaterial(ee,Re);let Fe=Q.index,Je=1;if(ee.wireframe===!0){if(Fe=ge.getWireframeAttribute(Q),Fe===void 0)return;Je=2}const et=Q.drawRange,Xe=Q.attributes.position;let st=et.start*Je,St=(et.start+et.count)*Je;Se!==null&&(st=Math.max(st,Se.start*Je),St=Math.min(St,(Se.start+Se.count)*Je)),Fe!==null?(st=Math.max(st,0),St=Math.min(St,Fe.count)):Xe!=null&&(st=Math.max(st,0),St=Math.min(St,Xe.count));const yt=St-st;if(yt<0||yt===1/0)return;Tt.setup(H,ee,De,Q,Fe);let Ft,_t=ke;if(Fe!==null&&(Ft=pe.get(Fe),_t=ct,_t.setIndex(Ft)),H.isMesh)ee.wireframe===!0?(je.setLineWidth(ee.wireframeLinewidth*Lt()),_t.setMode(O.LINES)):_t.setMode(O.TRIANGLES);else if(H.isLine){let Ye=ee.linewidth;Ye===void 0&&(Ye=1),je.setLineWidth(Ye*Lt()),H.isLineSegments?_t.setMode(O.LINES):H.isLineLoop?_t.setMode(O.LINE_LOOP):_t.setMode(O.LINE_STRIP)}else H.isPoints?_t.setMode(O.POINTS):H.isSprite&&_t.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)_t.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))_t.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ye=H._multiDrawStarts,zt=H._multiDrawCounts,mt=H._multiDrawCount,rn=Fe?pe.get(Fe).bytesPerElement:1,qn=We.get(ee).currentProgram.getUniforms();for(let _n=0;_n<mt;_n++)qn.setValue(O,"_gl_DrawID",_n),_t.render(Ye[_n]/rn,zt[_n])}else if(H.isInstancedMesh)_t.renderInstances(st,yt,H.count);else if(Q.isInstancedBufferGeometry){const Ye=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,zt=Math.min(Q.instanceCount,Ye);_t.renderInstances(st,yt,zt)}else _t.render(st,yt)};function vt(T,W,Q){T.transparent===!0&&T.side===Ui&&T.forceSinglePass===!1?(T.side=bn,T.needsUpdate=!0,Zr(T,W,Q),T.side=gr,T.needsUpdate=!0,Zr(T,W,Q),T.side=Ui):Zr(T,W,Q)}this.compile=function(T,W,Q=null){Q===null&&(Q=T),g=lt.get(Q),g.init(W),D.push(g),Q.traverseVisible(function(H){H.isLight&&H.layers.test(W.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),T!==Q&&T.traverseVisible(function(H){H.isLight&&H.layers.test(W.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),g.setupLights();const ee=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Se=H.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const De=Se[Re];vt(De,Q,H),ee.add(De)}else vt(Se,Q,H),ee.add(Se)}),D.pop(),g=null,ee},this.compileAsync=function(T,W,Q=null){const ee=this.compile(T,W,Q);return new Promise(H=>{function Se(){if(ee.forEach(function(Re){We.get(Re).currentProgram.isReady()&&ee.delete(Re)}),ee.size===0){H(T);return}setTimeout(Se,10)}dt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Mn=null;function gn(T){Mn&&Mn(T)}function Kr(){_i.stop()}function zi(){_i.start()}const _i=new Zm;_i.setAnimationLoop(gn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(T){Mn=T,ie.setAnimationLoop(T),T===null?_i.stop():_i.start()},ie.addEventListener("sessionstart",Kr),ie.addEventListener("sessionend",zi),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(W),W=ie.getCamera()),T.isScene===!0&&T.onBeforeRender(P,T,W,j),g=lt.get(T,D.length),g.init(W),D.push(g),Te.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),K.setFromProjectionMatrix(Te),Me=this.localClippingEnabled,ue=ye.init(this.clippingPlanes,Me),S=Ne.get(T,I.length),S.init(),I.push(S),ie.enabled===!0&&ie.isPresenting===!0){const Se=P.xr.getDepthSensingMesh();Se!==null&&vi(Se,W,-1/0,P.sortObjects)}vi(T,W,0,P.sortObjects),S.finish(),P.sortObjects===!0&&S.sort(ae,re),pt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,pt&&qe.addToRenderList(S,T),this.info.render.frame++,ue===!0&&ye.beginShadows();const Q=g.state.shadowsArray;Be.render(Q,T,W),ue===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=S.opaque,H=S.transmissive;if(g.setupLights(),W.isArrayCamera){const Se=W.cameras;if(H.length>0)for(let Re=0,De=Se.length;Re<De;Re++){const Fe=Se[Re];Sr(ee,H,T,Fe)}pt&&qe.render(T);for(let Re=0,De=Se.length;Re<De;Re++){const Fe=Se[Re];xr(S,T,Fe,Fe.viewport)}}else H.length>0&&Sr(ee,H,T,W),pt&&qe.render(T),xr(S,T,W);j!==null&&(b.updateMultisampleRenderTarget(j),b.updateRenderTargetMipmap(j)),T.isScene===!0&&T.onAfterRender(P,T,W),Tt.resetDefaultState(),C=-1,A=null,D.pop(),D.length>0?(g=D[D.length-1],ue===!0&&ye.setGlobalState(P.clippingPlanes,g.state.camera)):g=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function vi(T,W,Q,ee){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)Q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||K.intersectsSprite(T)){ee&&Ze.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Te);const Re=ce.update(T),De=T.material;De.visible&&S.push(T,Re,De,Q,Ze.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||K.intersectsObject(T))){const Re=ce.update(T),De=T.material;if(ee&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ze.copy(T.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ze.copy(Re.boundingSphere.center)),Ze.applyMatrix4(T.matrixWorld).applyMatrix4(Te)),Array.isArray(De)){const Fe=Re.groups;for(let Je=0,et=Fe.length;Je<et;Je++){const Xe=Fe[Je],st=De[Xe.materialIndex];st&&st.visible&&S.push(T,Re,st,Q,Ze.z,Xe)}}else De.visible&&S.push(T,Re,De,Q,Ze.z,null)}}const Se=T.children;for(let Re=0,De=Se.length;Re<De;Re++)vi(Se[Re],W,Q,ee)}function xr(T,W,Q,ee){const H=T.opaque,Se=T.transmissive,Re=T.transparent;g.setupLightsView(Q),ue===!0&&ye.setGlobalState(P.clippingPlanes,Q),ee&&je.viewport(z.copy(ee)),H.length>0&&Hi(H,W,Q),Se.length>0&&Hi(Se,W,Q),Re.length>0&&Hi(Re,W,Q),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Sr(T,W,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ee.id]===void 0&&(g.state.transmissionRenderTarget[ee.id]=new $r(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?No:Bi,minFilter:jr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Se=g.state.transmissionRenderTarget[ee.id],Re=ee.viewport||z;Se.setSize(Re.z,Re.w);const De=P.getRenderTarget();P.setRenderTarget(Se),P.getClearColor(fe),he=P.getClearAlpha(),he<1&&P.setClearColor(16777215,.5),P.clear(),pt&&qe.render(Q);const Fe=P.toneMapping;P.toneMapping=mr;const Je=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),g.setupLightsView(ee),ue===!0&&ye.setGlobalState(P.clippingPlanes,ee),Hi(T,Q,ee),b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se),dt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Xe=0,st=W.length;Xe<st;Xe++){const St=W[Xe],yt=St.object,Ft=St.geometry,_t=St.material,Ye=St.group;if(_t.side===Ui&&yt.layers.test(ee.layers)){const zt=_t.side;_t.side=bn,_t.needsUpdate=!0,zo(yt,Q,ee,Ft,_t,Ye),_t.side=zt,_t.needsUpdate=!0,et=!0}}et===!0&&(b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se))}P.setRenderTarget(De),P.setClearColor(fe,he),Je!==void 0&&(ee.viewport=Je),P.toneMapping=Fe}function Hi(T,W,Q){const ee=W.isScene===!0?W.overrideMaterial:null;for(let H=0,Se=T.length;H<Se;H++){const Re=T[H],De=Re.object,Fe=Re.geometry,Je=ee===null?Re.material:ee,et=Re.group;De.layers.test(Q.layers)&&zo(De,W,Q,Fe,Je,et)}}function zo(T,W,Q,ee,H,Se){T.onBeforeRender(P,W,Q,ee,H,Se),T.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(P,W,Q,ee,T,Se),H.transparent===!0&&H.side===Ui&&H.forceSinglePass===!1?(H.side=bn,H.needsUpdate=!0,P.renderBufferDirect(Q,W,ee,H,T,Se),H.side=gr,H.needsUpdate=!0,P.renderBufferDirect(Q,W,ee,H,T,Se),H.side=Ui):P.renderBufferDirect(Q,W,ee,H,T,Se),T.onAfterRender(P,W,Q,ee,H,Se)}function Zr(T,W,Q){W.isScene!==!0&&(W=At);const ee=We.get(T),H=g.state.lights,Se=g.state.shadowsArray,Re=H.state.version,De=Ve.getParameters(T,H.state,Se,W,Q),Fe=Ve.getProgramCacheKey(De);let Je=ee.programs;ee.environment=T.isMeshStandardMaterial?W.environment:null,ee.fog=W.fog,ee.envMap=(T.isMeshStandardMaterial?$:E).get(T.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&T.envMap===null?W.environmentRotation:T.envMapRotation,Je===void 0&&(T.addEventListener("dispose",rt),Je=new Map,ee.programs=Je);let et=Je.get(Fe);if(et!==void 0){if(ee.currentProgram===et&&ee.lightsStateVersion===Re)return ai(T,De),et}else De.uniforms=Ve.getUniforms(T),T.onBeforeCompile(De,P),et=Ve.acquireProgram(De,Fe),Je.set(Fe,et),ee.uniforms=De.uniforms;const Xe=ee.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Xe.clippingPlanes=ye.uniform),ai(T,De),ee.needsLights=bl(T),ee.lightsStateVersion=Re,ee.needsLights&&(Xe.ambientLightColor.value=H.state.ambient,Xe.lightProbe.value=H.state.probe,Xe.directionalLights.value=H.state.directional,Xe.directionalLightShadows.value=H.state.directionalShadow,Xe.spotLights.value=H.state.spot,Xe.spotLightShadows.value=H.state.spotShadow,Xe.rectAreaLights.value=H.state.rectArea,Xe.ltc_1.value=H.state.rectAreaLTC1,Xe.ltc_2.value=H.state.rectAreaLTC2,Xe.pointLights.value=H.state.point,Xe.pointLightShadows.value=H.state.pointShadow,Xe.hemisphereLights.value=H.state.hemi,Xe.directionalShadowMap.value=H.state.directionalShadowMap,Xe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Xe.spotShadowMap.value=H.state.spotShadowMap,Xe.spotLightMatrix.value=H.state.spotLightMatrix,Xe.spotLightMap.value=H.state.spotLightMap,Xe.pointShadowMap.value=H.state.pointShadowMap,Xe.pointShadowMatrix.value=H.state.pointShadowMatrix),ee.currentProgram=et,ee.uniformsList=null,et}function Ho(T){if(T.uniformsList===null){const W=T.currentProgram.getUniforms();T.uniformsList=Sl.seqWithValue(W.seq,T.uniforms)}return T.uniformsList}function ai(T,W){const Q=We.get(T);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.batchingColor=W.batchingColor,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function Vo(T,W,Q,ee,H){W.isScene!==!0&&(W=At),b.resetTextureUnits();const Se=W.fog,Re=ee.isMeshStandardMaterial?W.environment:null,De=j===null?P.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ws,Fe=(ee.isMeshStandardMaterial?$:E).get(ee.envMap||Re),Je=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,et=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Xe=!!Q.morphAttributes.position,st=!!Q.morphAttributes.normal,St=!!Q.morphAttributes.color;let yt=mr;ee.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(yt=P.toneMapping);const Ft=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,_t=Ft!==void 0?Ft.length:0,Ye=We.get(ee),zt=g.state.lights;if(ue===!0&&(Me===!0||T!==A)){const Vt=T===A&&ee.id===C;ye.setState(ee,T,Vt)}let mt=!1;ee.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==zt.state.version||Ye.outputColorSpace!==De||H.isBatchedMesh&&Ye.batching===!1||!H.isBatchedMesh&&Ye.batching===!0||H.isBatchedMesh&&Ye.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ye.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ye.instancing===!1||!H.isInstancedMesh&&Ye.instancing===!0||H.isSkinnedMesh&&Ye.skinning===!1||!H.isSkinnedMesh&&Ye.skinning===!0||H.isInstancedMesh&&Ye.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ye.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ye.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ye.instancingMorph===!1&&H.morphTexture!==null||Ye.envMap!==Fe||ee.fog===!0&&Ye.fog!==Se||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ye.numPlanes||Ye.numIntersection!==ye.numIntersection)||Ye.vertexAlphas!==Je||Ye.vertexTangents!==et||Ye.morphTargets!==Xe||Ye.morphNormals!==st||Ye.morphColors!==St||Ye.toneMapping!==yt||Ye.morphTargetsCount!==_t)&&(mt=!0):(mt=!0,Ye.__version=ee.version);let rn=Ye.currentProgram;mt===!0&&(rn=Zr(ee,W,H));let qn=!1,_n=!1,yr=!1;const Rt=rn.getUniforms(),vn=Ye.uniforms;if(je.useProgram(rn.program)&&(qn=!0,_n=!0,yr=!0),ee.id!==C&&(C=ee.id,_n=!0),qn||A!==T){je.buffers.depth.getReversed()?(ve.copy(T.projectionMatrix),n0(ve),i0(ve),Rt.setValue(O,"projectionMatrix",ve)):Rt.setValue(O,"projectionMatrix",T.projectionMatrix),Rt.setValue(O,"viewMatrix",T.matrixWorldInverse);const ln=Rt.map.cameraPosition;ln!==void 0&&ln.setValue(O,Ie.setFromMatrixPosition(T.matrixWorld)),ut.logarithmicDepthBuffer&&Rt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Rt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),A!==T&&(A=T,_n=!0,yr=!0)}if(H.isSkinnedMesh){Rt.setOptional(O,H,"bindMatrix"),Rt.setOptional(O,H,"bindMatrixInverse");const Vt=H.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),Rt.setValue(O,"boneTexture",Vt.boneTexture,b))}H.isBatchedMesh&&(Rt.setOptional(O,H,"batchingTexture"),Rt.setValue(O,"batchingTexture",H._matricesTexture,b),Rt.setOptional(O,H,"batchingIdTexture"),Rt.setValue(O,"batchingIdTexture",H._indirectTexture,b),Rt.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&Rt.setValue(O,"batchingColorTexture",H._colorsTexture,b));const an=Q.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&Qe.update(H,Q,rn),(_n||Ye.receiveShadow!==H.receiveShadow)&&(Ye.receiveShadow=H.receiveShadow,Rt.setValue(O,"receiveShadow",H.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(vn.envMap.value=Fe,vn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&W.environment!==null&&(vn.envMapIntensity.value=W.environmentIntensity),_n&&(Rt.setValue(O,"toneMappingExposure",P.toneMappingExposure),Ye.needsLights&&Go(vn,yr),Se&&ee.fog===!0&&we.refreshFogUniforms(vn,Se),we.refreshMaterialUniforms(vn,ee,k,le,g.state.transmissionRenderTarget[T.id]),Sl.upload(O,Ho(Ye),vn,b)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Sl.upload(O,Ho(Ye),vn,b),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Rt.setValue(O,"center",H.center),Rt.setValue(O,"modelViewMatrix",H.modelViewMatrix),Rt.setValue(O,"normalMatrix",H.normalMatrix),Rt.setValue(O,"modelMatrix",H.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Vt=ee.uniformsGroups;for(let ln=0,Mr=Vt.length;ln<Mr;ln++){const ht=Vt[ln];G.update(ht,rn),G.bind(ht,rn)}}return rn}function Go(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function bl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(T,W,Q){We.get(T.texture).__webglTexture=W,We.get(T.depthTexture).__webglTexture=Q;const ee=We.get(T);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=Q===void 0,ee.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,W){const Q=We.get(T);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(T,W=0,Q=0){j=T,B=W,F=Q;let ee=!0,H=null,Se=!1,Re=!1;if(T){const Fe=We.get(T);if(Fe.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(O.FRAMEBUFFER,null),ee=!1;else if(Fe.__webglFramebuffer===void 0)b.setupRenderTarget(T);else if(Fe.__hasExternalTextures)b.rebindTextures(T,We.get(T.texture).__webglTexture,We.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Xe=T.depthTexture;if(Fe.__boundDepthTexture!==Xe){if(Xe!==null&&We.has(Xe)&&(T.width!==Xe.image.width||T.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(T)}}const Je=T.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Re=!0);const et=We.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(et[W])?H=et[W][Q]:H=et[W],Se=!0):T.samples>0&&b.useMultisampledRTT(T)===!1?H=We.get(T).__webglMultisampledFramebuffer:Array.isArray(et)?H=et[Q]:H=et,z.copy(T.viewport),oe.copy(T.scissor),J=T.scissorTest}else z.copy(U).multiplyScalar(k).floor(),oe.copy(te).multiplyScalar(k).floor(),J=Ue;if(je.bindFramebuffer(O.FRAMEBUFFER,H)&&ee&&je.drawBuffers(T,H),je.viewport(z),je.scissor(oe),je.setScissorTest(J),Se){const Fe=We.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Fe.__webglTexture,Q)}else if(Re){const Fe=We.get(T.texture),Je=W||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fe.__webglTexture,Q||0,Je)}C=-1},this.readRenderTargetPixels=function(T,W,Q,ee,H,Se,Re){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=We.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){je.bindFramebuffer(O.FRAMEBUFFER,De);try{const Fe=T.texture,Je=Fe.format,et=Fe.type;if(!ut.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-ee&&Q>=0&&Q<=T.height-H&&O.readPixels(W,Q,ee,H,it.convert(Je),it.convert(et),Se)}finally{const Fe=j!==null?We.get(j).__webglFramebuffer:null;je.bindFramebuffer(O.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(T,W,Q,ee,H,Se,Re){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=We.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){const Fe=T.texture,Je=Fe.format,et=Fe.type;if(!ut.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=T.width-ee&&Q>=0&&Q<=T.height-H){je.bindFramebuffer(O.FRAMEBUFFER,De);const Xe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Xe),O.bufferData(O.PIXEL_PACK_BUFFER,Se.byteLength,O.STREAM_READ),O.readPixels(W,Q,ee,H,it.convert(Je),it.convert(et),0);const st=j!==null?We.get(j).__webglFramebuffer:null;je.bindFramebuffer(O.FRAMEBUFFER,st);const St=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await t0(O,St,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Xe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Se),O.deleteBuffer(Xe),O.deleteSync(St),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,W=null,Q=0){T.isTexture!==!0&&(Is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1]);const ee=Math.pow(2,-Q),H=Math.floor(T.image.width*ee),Se=Math.floor(T.image.height*ee),Re=W!==null?W.x:0,De=W!==null?W.y:0;b.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,Re,De,H,Se),je.unbindTexture()};const Wo=O.createFramebuffer(),Xo=O.createFramebuffer();this.copyTextureToTexture=function(T,W,Q=null,ee=null,H=0,Se=null){T.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,T=arguments[1],W=arguments[2],Se=arguments[3]||0,Q=null),Se===null&&(H!==0?(Is("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=H,H=0):Se=0);let Re,De,Fe,Je,et,Xe,st,St,yt;const Ft=T.isCompressedTexture?T.mipmaps[Se]:T.image;if(Q!==null)Re=Q.max.x-Q.min.x,De=Q.max.y-Q.min.y,Fe=Q.isBox3?Q.max.z-Q.min.z:1,Je=Q.min.x,et=Q.min.y,Xe=Q.isBox3?Q.min.z:0;else{const an=Math.pow(2,-H);Re=Math.floor(Ft.width*an),De=Math.floor(Ft.height*an),T.isDataArrayTexture?Fe=Ft.depth:T.isData3DTexture?Fe=Math.floor(Ft.depth*an):Fe=1,Je=0,et=0,Xe=0}ee!==null?(st=ee.x,St=ee.y,yt=ee.z):(st=0,St=0,yt=0);const _t=it.convert(W.format),Ye=it.convert(W.type);let zt;W.isData3DTexture?(b.setTexture3D(W,0),zt=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(b.setTexture2DArray(W,0),zt=O.TEXTURE_2D_ARRAY):(b.setTexture2D(W,0),zt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const mt=O.getParameter(O.UNPACK_ROW_LENGTH),rn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),qn=O.getParameter(O.UNPACK_SKIP_PIXELS),_n=O.getParameter(O.UNPACK_SKIP_ROWS),yr=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ft.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ft.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Je),O.pixelStorei(O.UNPACK_SKIP_ROWS,et),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Xe);const Rt=T.isDataArrayTexture||T.isData3DTexture,vn=W.isDataArrayTexture||W.isData3DTexture;if(T.isDepthTexture){const an=We.get(T),Vt=We.get(W),ln=We.get(an.__renderTarget),Mr=We.get(Vt.__renderTarget);je.bindFramebuffer(O.READ_FRAMEBUFFER,ln.__webglFramebuffer),je.bindFramebuffer(O.DRAW_FRAMEBUFFER,Mr.__webglFramebuffer);for(let ht=0;ht<Fe;ht++)Rt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,We.get(T).__webglTexture,H,Xe+ht),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,We.get(W).__webglTexture,Se,yt+ht)),O.blitFramebuffer(Je,et,Re,De,st,St,Re,De,O.DEPTH_BUFFER_BIT,O.NEAREST);je.bindFramebuffer(O.READ_FRAMEBUFFER,null),je.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||We.has(T)){const an=We.get(T),Vt=We.get(W);je.bindFramebuffer(O.READ_FRAMEBUFFER,Wo),je.bindFramebuffer(O.DRAW_FRAMEBUFFER,Xo);for(let ln=0;ln<Fe;ln++)Rt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,an.__webglTexture,H,Xe+ln):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,an.__webglTexture,H),vn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Vt.__webglTexture,Se,yt+ln):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Vt.__webglTexture,Se),H!==0?O.blitFramebuffer(Je,et,Re,De,st,St,Re,De,O.COLOR_BUFFER_BIT,O.NEAREST):vn?O.copyTexSubImage3D(zt,Se,st,St,yt+ln,Je,et,Re,De):O.copyTexSubImage2D(zt,Se,st,St,Je,et,Re,De);je.bindFramebuffer(O.READ_FRAMEBUFFER,null),je.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else vn?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(zt,Se,st,St,yt,Re,De,Fe,_t,Ye,Ft.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(zt,Se,st,St,yt,Re,De,Fe,_t,Ft.data):O.texSubImage3D(zt,Se,st,St,yt,Re,De,Fe,_t,Ye,Ft):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Se,st,St,Re,De,_t,Ye,Ft.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Se,st,St,Ft.width,Ft.height,_t,Ft.data):O.texSubImage2D(O.TEXTURE_2D,Se,st,St,Re,De,_t,Ye,Ft);O.pixelStorei(O.UNPACK_ROW_LENGTH,mt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,rn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,qn),O.pixelStorei(O.UNPACK_SKIP_ROWS,_n),O.pixelStorei(O.UNPACK_SKIP_IMAGES,yr),Se===0&&W.generateMipmaps&&O.generateMipmap(zt),je.unbindTexture()},this.copyTextureToTexture3D=function(T,W,Q=null,ee=null,H=0){return T.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,ee=arguments[1]||null,T=arguments[2],W=arguments[3],H=arguments[4]||0),Is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,W,Q,ee,H)},this.initRenderTarget=function(T){We.get(T).__webglFramebuffer===void 0&&b.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),je.unbindTexture()},this.resetState=function(){B=0,F=0,j=null,je.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Et._getDrawingBufferColorSpace(e),n.unpackColorSpace=Et._getUnpackColorSpace()}}const _E=()=>(Oi.useEffect(()=>{let s,e,n,r,a;return(()=>{s=new R0,e=new Yn(75,window.innerWidth/window.innerHeight,.1,1e3),n=new gE,n.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(n.domElement),r=new Do,s.add(r);const f=new Hf({color:47871,transparent:!0,opacity:.7});for(let p=0;p<500;p++){const m=new Vf(Math.random()*1,32,32),_=new pi(m,f);_.position.set(Math.random()*2e3-1e3,Math.random()*2e3-1e3,Math.random()*2e3-1e3),r.add(_)}e.position.z=500;const d=()=>{a=requestAnimationFrame(d),r&&(r.rotation.x+=.001,r.rotation.y+=.001),n.render(s,e)};d()})(),()=>{cancelAnimationFrame(a),n&&(n.dispose(),document.body.removeChild(n.domElement)),s=null,e=null,n=null,r=null}},[]),null),vE=()=>{const s=[{title:"Skills",description:"JavaScript, React, Node.js, Python, Java"},{title:"Projects",description:"15+ completed projects in web and app development"},{title:"Life",description:"I used to live in Spain for 4 years"},{title:"Fun Fact",description:"I like math and chess"}];return nt.jsx("div",{className:"info-boxes-container",children:s.map((e,n)=>nt.jsxs("div",{className:"info-box",children:[nt.jsx("h3",{children:e.title}),nt.jsx("p",{className:"info-box-description",children:e.description})]},n))})},xE=()=>{const s=[{title:"Media as Medium",description:"A project showcasing how to leverage Medium's API for publishing content.",github:"https://github.com/avomasrq/media-as-medium"},{title:"Twitter App",description:"A Twitter integration app that allows posting and retrieving tweets via API.",github:"https://github.com/avomasrq/twitter"}];return nt.jsxs("div",{className:"app",children:[nt.jsx(_E,{}),nt.jsxs("div",{className:"content",children:[nt.jsx(V_,{}),nt.jsx(cv,{}),nt.jsx(vE,{}),nt.jsx("div",{className:"projects-container",children:s.map((e,n)=>nt.jsx(G_,{title:e.title,description:e.description,github:e.github},n))}),nt.jsx(Q_,{}),nt.jsx(uv,{})]})]})};H_.createRoot(document.getElementById("root")).render(nt.jsx(Oi.StrictMode,{children:nt.jsx(xE,{})}));
