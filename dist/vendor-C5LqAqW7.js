var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var n={exports:{}},r={},i=Symbol.for("react.element"),s=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,v={};function w(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}function b(){}function _(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=w.prototype;var E=_.prototype=new b;E.constructor=_,y(E,w.prototype),E.isPureReactComponent=!0;var k=Array.isArray,T=Object.prototype.hasOwnProperty,S={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r,s={},o=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(o=""+t.key),t)T.call(t,r)&&!I.hasOwnProperty(r)&&(s[r]=t[r]);var l=arguments.length-2;if(1===l)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===s[r]&&(s[r]=l[r]);return{$$typeof:i,type:e,key:o,ref:a,props:s,_owner:S.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var R=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,n,r,o){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case i:case s:l=!0}}if(l)return o=o(l=e),e=""===r?"."+A(l,0):r,k(o)?(n="",null!=e&&(n=e.replace(R,"$&/")+"/"),x(o,t,n,"",(function(e){return e}))):null!=o&&(N(o)&&(o=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(R,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=""===r?".":r+":",k(e))for(var u=0;u<e.length;u++){var c=r+A(a=e[u],u);l+=x(a,t,n,c,o)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(a=e.next()).done;)l+=x(a=a.value,t,n,c=r+A(a,u++),o);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function D(e,t,n){if(null==e)return e;var r=[],i=0;return x(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},L={transition:null},M={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:L,ReactCurrentOwner:S};function U(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:D,forEach:function(e,t,n){D(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return D(e,(function(){t++})),t},toArray:function(e){return D(e,(function(e){return e}))||[]},only:function(e){if(!N(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=w,r.Fragment=o,r.Profiler=l,r.PureComponent=_,r.StrictMode=a,r.Suspense=d,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,r.act=U,r.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=y({},e.props),s=e.key,o=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,a=S.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)T.call(t,u)&&!I.hasOwnProperty(u)&&(r[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:i,type:e.type,key:s,ref:o,props:r,_owner:a}},r.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=C,r.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:h,render:e}},r.isValidElement=N,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},r.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},r.unstable_act=U,r.useCallback=function(e,t){return O.current.useCallback(e,t)},r.useContext=function(e){return O.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return O.current.useDeferredValue(e)},r.useEffect=function(e,t){return O.current.useEffect(e,t)},r.useId=function(){return O.current.useId()},r.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},r.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},r.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},r.useMemo=function(e,t){return O.current.useMemo(e,t)},r.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},r.useRef=function(e){return O.current.useRef(e)},r.useState=function(e){return O.current.useState(e)},r.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},r.useTransition=function(){return O.current.useTransition()},r.version="18.3.1",n.exports=r;var F=n.exports;const V=t(F);var z={exports:{}},B={},j={exports:{}},$={};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function(e){function t(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,s=e[r];if(!(0<i(s,t)))break e;e[r]=t,e[n]=s,n=r}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,s=e.length,o=s>>>1;r<o;){var a=2*(r+1)-1,l=e[a],u=a+1,c=e[u];if(0>i(l,n))u<s&&0>i(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[a]=n,r=a);else{if(!(u<s&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,p=!1,m=!1,g="function"==typeof setTimeout?setTimeout:null,y="function"==typeof clearTimeout?clearTimeout:null,v="undefined"!=typeof setImmediate?setImmediate:null;function w(e){for(var i=n(u);null!==i;){if(null===i.callback)r(u);else{if(!(i.startTime<=e))break;r(u),i.sortIndex=i.expirationTime,t(l,i)}i=n(u)}}function b(e){if(m=!1,w(e),!p)if(null!==n(l))p=!0,D(_);else{var t=n(u);null!==t&&P(b,t.startTime-e)}}function _(t,i){p=!1,m&&(m=!1,y(S),S=-1),f=!0;var s=d;try{for(w(i),h=n(l);null!==h&&(!(h.expirationTime>i)||t&&!N());){var o=h.callback;if("function"==typeof o){h.callback=null,d=h.priorityLevel;var a=o(h.expirationTime<=i);i=e.unstable_now(),"function"==typeof a?h.callback=a:h===n(l)&&r(l),w(i)}else r(l);h=n(l)}if(null!==h)var c=!0;else{var g=n(u);null!==g&&P(b,g.startTime-i),c=!1}return c}finally{h=null,d=s,f=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var E,k=!1,T=null,S=-1,I=5,C=-1;function N(){return!(e.unstable_now()-C<I)}function R(){if(null!==T){var t=e.unstable_now();C=t;var n=!0;try{n=T(!0,t)}finally{n?E():(k=!1,T=null)}}else k=!1}if("function"==typeof v)E=function(){v(R)};else if("undefined"!=typeof MessageChannel){var A=new MessageChannel,x=A.port2;A.port1.onmessage=R,E=function(){x.postMessage(null)}}else E=function(){g(R,0)};function D(e){T=e,k||(k=!0,E())}function P(t,n){S=g((function(){t(e.unstable_now())}),n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){p||f||(p=!0,D(_))},e.unstable_forceFrameRate=function(e){0>e||125<e||(I=0<e?Math.floor(1e3/e):5)},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(e){switch(d){case 1:case 2:case 3:var t=3;break;default:t=d}var n=d;d=t;try{return e()}finally{d=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=d;d=e;try{return t()}finally{d=n}},e.unstable_scheduleCallback=function(r,i,s){var o=e.unstable_now();switch("object"==typeof s&&null!==s?s="number"==typeof(s=s.delay)&&0<s?o+s:o:s=o,r){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return r={id:c++,callback:i,priorityLevel:r,startTime:s,expirationTime:a=s+a,sortIndex:-1},s>o?(r.sortIndex=s,t(u,r),null===n(l)&&r===n(u)&&(m?(y(S),S=-1):m=!0,P(b,s-o))):(r.sortIndex=a,t(l,r),p||f||(p=!0,D(_))),r},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(e){var t=d;return function(){var n=d;d=t;try{return e.apply(this,arguments)}finally{d=n}}}}($),j.exports=$;var q=j.exports,H=F,W=q;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function K(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var G=new Set,Q={};function Y(e,t){X(e,t),X(e+"Capture",t)}function X(e,t){for(Q[e]=t,e=0;e<t.length;e++)G.add(t[e])}var J=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),Z=Object.prototype.hasOwnProperty,ee=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,te={},ne={};function re(e,t,n,r,i,s,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){ie[e]=new re(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];ie[t]=new re(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){ie[e]=new re(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){ie[e]=new re(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){ie[e]=new re(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){ie[e]=new re(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){ie[e]=new re(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){ie[e]=new re(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){ie[e]=new re(e,5,!1,e.toLowerCase(),null,!1,!1)}));var se=/[\-:]([a-z])/g;function oe(e){return e[1].toUpperCase()}function ae(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!Z.call(ne,e)||!Z.call(te,e)&&(ee.test(e)?ne[e]=!0:(te[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(se,oe);ie[t]=new re(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(se,oe);ie[t]=new re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(se,oe);ie[t]=new re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){ie[e]=new re(e,1,!1,e.toLowerCase(),null,!1,!1)})),ie.xlinkHref=new re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){ie[e]=new re(e,1,!1,e.toLowerCase(),null,!0,!0)}));var le=H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ue=Symbol.for("react.element"),ce=Symbol.for("react.portal"),he=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),fe=Symbol.for("react.profiler"),pe=Symbol.for("react.provider"),me=Symbol.for("react.context"),ge=Symbol.for("react.forward_ref"),ye=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),we=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),_e=Symbol.for("react.offscreen"),Ee=Symbol.iterator;function ke(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=Ee&&e[Ee]||e["@@iterator"])?e:null}var Te,Se=Object.assign;function Ie(e){if(void 0===Te)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Te=t&&t[1]||""}return"\n"+Te+e}var Ce=!1;function Ne(e,t){if(!e||Ce)return"";Ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"==typeof u.stack){for(var i=u.stack.split("\n"),s=r.stack.split("\n"),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(1!==o||1!==a)do{if(o--,0>--a||i[o]!==s[a]){var l="\n"+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=o&&0<=a);break}}}finally{Ce=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ie(e):""}function Re(e){switch(e.tag){case 5:return Ie(e.type);case 16:return Ie("Lazy");case 13:return Ie("Suspense");case 19:return Ie("SuspenseList");case 0:case 2:case 15:return e=Ne(e.type,!1);case 11:return e=Ne(e.type.render,!1);case 1:return e=Ne(e.type,!0);default:return""}}function Ae(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case he:return"Fragment";case ce:return"Portal";case fe:return"Profiler";case de:return"StrictMode";case ye:return"Suspense";case ve:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case me:return(e.displayName||"Context")+".Consumer";case pe:return(e._context.displayName||"Context")+".Provider";case ge:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case we:return null!==(t=e.displayName||null)?t:Ae(e.type)||"Memo";case be:t=e._payload,e=e._init;try{return Ae(e(t))}catch(n){}}return null}function xe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ae(t);case 8:return t===de?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function De(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function Pe(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Oe(e){e._valueTracker||(e._valueTracker=function(e){var t=Pe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,s.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Le(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Pe(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Me(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Ue(e,t){var n=t.checked;return Se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Fe(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=De(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Ve(e,t){null!=(t=t.checked)&&ae(e,"checked",t,!1)}function ze(e,t){Ve(e,t);var n=De(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?je(e,t.type,n):t.hasOwnProperty("defaultValue")&&je(e,t.type,De(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Be(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function je(e,t,n){"number"===t&&Me(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $e=Array.isArray;function qe(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+De(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function He(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(K(91));return Se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function We(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(K(92));if($e(n)){if(1<n.length)throw Error(K(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:De(n)}}function Ke(e,t){var n=De(t.value),r=De(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function Ge(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function Qe(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ye(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?Qe(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var Xe,Je,Ze=(Je=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((Xe=Xe||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xe.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return Je(e,t)}))}:Je);function et(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var tt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nt=["Webkit","ms","Moz","O"];function rt(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||tt.hasOwnProperty(e)&&tt[e]?(""+t).trim():t+"px"}function it(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=rt(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(tt).forEach((function(e){nt.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),tt[t]=tt[e]}))}));var st=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ot(e,t){if(t){if(st[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(K(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(K(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(K(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(K(62))}}function at(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lt=null;function ut(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ct=null,ht=null,dt=null;function ft(e){if(e=as(e)){if("function"!=typeof ct)throw Error(K(280));var t=e.stateNode;t&&(t=us(t),ct(e.stateNode,e.type,t))}}function pt(e){ht?dt?dt.push(e):dt=[e]:ht=e}function mt(){if(ht){var e=ht,t=dt;if(dt=ht=null,ft(e),t)for(e=0;e<t.length;e++)ft(t[e])}}function gt(e,t){return e(t)}function yt(){}var vt=!1;function wt(e,t,n){if(vt)return e(t,n);vt=!0;try{return gt(e,t,n)}finally{vt=!1,(null!==ht||null!==dt)&&(yt(),mt())}}function bt(e,t){var n=e.stateNode;if(null===n)return null;var r=us(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(K(231,t,typeof n));return n}var _t=!1;if(J)try{var Et={};Object.defineProperty(Et,"passive",{get:function(){_t=!0}}),window.addEventListener("test",Et,Et),window.removeEventListener("test",Et,Et)}catch(Je){_t=!1}function kt(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Tt=!1,St=null,It=!1,Ct=null,Nt={onError:function(e){Tt=!0,St=e}};function Rt(e,t,n,r,i,s,o,a,l){Tt=!1,St=null,kt.apply(Nt,arguments)}function At(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function xt(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Dt(e){if(At(e)!==e)throw Error(K(188))}function Pt(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=At(e)))throw Error(K(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var s=i.alternate;if(null===s){if(null!==(r=i.return)){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Dt(i),e;if(s===r)return Dt(i),t;s=s.sibling}throw Error(K(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(K(189))}}if(n.alternate!==r)throw Error(K(190))}if(3!==n.tag)throw Error(K(188));return n.stateNode.current===n?e:t}(e))?Ot(e):null}function Ot(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ot(e);if(null!==t)return t;e=e.sibling}return null}var Lt=W.unstable_scheduleCallback,Mt=W.unstable_cancelCallback,Ut=W.unstable_shouldYield,Ft=W.unstable_requestPaint,Vt=W.unstable_now,zt=W.unstable_getCurrentPriorityLevel,Bt=W.unstable_ImmediatePriority,jt=W.unstable_UserBlockingPriority,$t=W.unstable_NormalPriority,qt=W.unstable_LowPriority,Ht=W.unstable_IdlePriority,Wt=null,Kt=null;var Gt=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(Qt(e)/Yt|0)|0},Qt=Math.log,Yt=Math.LN2;var Xt=64,Jt=4194304;function Zt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function en(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=268435455&n;if(0!==o){var a=o&~i;0!==a?r=Zt(a):0!==(s&=o)&&(r=Zt(s))}else 0!==(o=n&~i)?r=Zt(o):0!==s&&(r=Zt(s));if(0===r)return 0;if(0!==t&&t!==r&&!(t&i)&&((i=r&-r)>=(s=t&-t)||16===i&&4194240&s))return t;if(4&r&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-Gt(t)),r|=e[n],t&=~i;return r}function tn(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function nn(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function rn(){var e=Xt;return!(4194240&(Xt<<=1))&&(Xt=64),e}function sn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function on(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-Gt(t)]=n}function an(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Gt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ln=0;function un(e){return 1<(e&=-e)?4<e?268435455&e?16:536870912:4:1}var cn,hn,dn,fn,pn,mn=!1,gn=[],yn=null,vn=null,wn=null,bn=new Map,_n=new Map,En=[],kn="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tn(e,t){switch(e){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(t.pointerId)}}function Sn(e,t,n,r,i,s){return null===e||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},null!==t&&(null!==(t=as(t))&&hn(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function In(e){var t=os(e.target);if(null!==t){var n=At(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=xt(n)))return e.blockedOn=t,void pn(e.priority,(function(){dn(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Cn(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=as(n))&&hn(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);lt=r,n.target.dispatchEvent(r),lt=null,t.shift()}return!0}function Nn(e,t,n){Cn(e)&&n.delete(t)}function Rn(){mn=!1,null!==yn&&Cn(yn)&&(yn=null),null!==vn&&Cn(vn)&&(vn=null),null!==wn&&Cn(wn)&&(wn=null),bn.forEach(Nn),_n.forEach(Nn)}function An(e,t){e.blockedOn===t&&(e.blockedOn=null,mn||(mn=!0,W.unstable_scheduleCallback(W.unstable_NormalPriority,Rn)))}function xn(e){function t(t){return An(t,e)}if(0<gn.length){An(gn[0],e);for(var n=1;n<gn.length;n++){var r=gn[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==yn&&An(yn,e),null!==vn&&An(vn,e),null!==wn&&An(wn,e),bn.forEach(t),_n.forEach(t),n=0;n<En.length;n++)(r=En[n]).blockedOn===e&&(r.blockedOn=null);for(;0<En.length&&null===(n=En[0]).blockedOn;)In(n),null===n.blockedOn&&En.shift()}var Dn=le.ReactCurrentBatchConfig,Pn=!0;function On(e,t,n,r){var i=ln,s=Dn.transition;Dn.transition=null;try{ln=1,Mn(e,t,n,r)}finally{ln=i,Dn.transition=s}}function Ln(e,t,n,r){var i=ln,s=Dn.transition;Dn.transition=null;try{ln=4,Mn(e,t,n,r)}finally{ln=i,Dn.transition=s}}function Mn(e,t,n,r){if(Pn){var i=Fn(e,t,n,r);if(null===i)Di(e,t,r,Un,n),Tn(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return yn=Sn(yn,e,t,n,r,i),!0;case"dragenter":return vn=Sn(vn,e,t,n,r,i),!0;case"mouseover":return wn=Sn(wn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return bn.set(s,Sn(bn.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,_n.set(s,Sn(_n.get(s)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Tn(e,r),4&t&&-1<kn.indexOf(e)){for(;null!==i;){var s=as(i);if(null!==s&&cn(s),null===(s=Fn(e,t,n,r))&&Di(e,t,r,Un,n),s===i)break;i=s}null!==i&&r.stopPropagation()}else Di(e,t,r,null,n)}}var Un=null;function Fn(e,t,n,r){if(Un=null,null!==(e=os(e=ut(r))))if(null===(t=At(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=xt(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Un=e,null}function Vn(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zt()){case Bt:return 1;case jt:return 4;case $t:case qt:return 16;case Ht:return 536870912;default:return 16}default:return 16}}var zn=null,Bn=null,jn=null;function $n(){if(jn)return jn;var e,t,n=Bn,r=n.length,i="value"in zn?zn.value:zn.textContent,s=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[s-t];t++);return jn=i.slice(e,1<t?1-t:void 0)}function qn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Hn(){return!0}function Wn(){return!1}function Kn(e){function t(t,n,r,i,s){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?Hn:Wn,this.isPropagationStopped=Wn,this}return Se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),t}var Gn,Qn,Yn,Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jn=Kn(Xn),Zn=Se({},Xn,{view:0,detail:0}),er=Kn(Zn),tr=Se({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yn&&(Yn&&"mousemove"===e.type?(Gn=e.screenX-Yn.screenX,Qn=e.screenY-Yn.screenY):Qn=Gn=0,Yn=e),Gn)},movementY:function(e){return"movementY"in e?e.movementY:Qn}}),nr=Kn(tr),rr=Kn(Se({},tr,{dataTransfer:0})),ir=Kn(Se({},Zn,{relatedTarget:0})),sr=Kn(Se({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0})),or=Se({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ar=Kn(or),lr=Kn(Se({},Xn,{data:0})),ur={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=hr[e])&&!!t[e]}function fr(){return dr}var pr=Se({},Zn,{key:function(e){if(e.key){var t=ur[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=qn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?cr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fr,charCode:function(e){return"keypress"===e.type?qn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?qn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),mr=Kn(pr),gr=Kn(Se({},tr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),yr=Kn(Se({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fr})),vr=Kn(Se({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0})),wr=Se({},tr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),br=Kn(wr),_r=[9,13,27,32],Er=J&&"CompositionEvent"in window,kr=null;J&&"documentMode"in document&&(kr=document.documentMode);var Tr=J&&"TextEvent"in window&&!kr,Sr=J&&(!Er||kr&&8<kr&&11>=kr),Ir=String.fromCharCode(32),Cr=!1;function Nr(e,t){switch(e){case"keyup":return-1!==_r.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rr(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Ar=!1;var xr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!xr[e.type]:"textarea"===t}function Pr(e,t,n,r){pt(r),0<(t=Oi(t,"onChange")).length&&(n=new Jn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Or=null,Lr=null;function Mr(e){Ii(e,0)}function Ur(e){if(Le(ls(e)))return e}function Fr(e,t){if("change"===e)return t}var Vr=!1;if(J){var zr;if(J){var Br="oninput"in document;if(!Br){var jr=document.createElement("div");jr.setAttribute("oninput","return;"),Br="function"==typeof jr.oninput}zr=Br}else zr=!1;Vr=zr&&(!document.documentMode||9<document.documentMode)}function $r(){Or&&(Or.detachEvent("onpropertychange",qr),Lr=Or=null)}function qr(e){if("value"===e.propertyName&&Ur(Lr)){var t=[];Pr(t,Lr,e,ut(e)),wt(Mr,t)}}function Hr(e,t,n){"focusin"===e?($r(),Lr=n,(Or=t).attachEvent("onpropertychange",qr)):"focusout"===e&&$r()}function Wr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Ur(Lr)}function Kr(e,t){if("click"===e)return Ur(t)}function Gr(e,t){if("input"===e||"change"===e)return Ur(t)}var Qr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function Yr(e,t){if(Qr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Z.call(t,i)||!Qr(e[i],t[i]))return!1}return!0}function Xr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jr(e,t){var n,r=Xr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Xr(r)}}function Zr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Zr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function ei(){for(var e=window,t=Me();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Me((e=t.contentWindow).document)}return t}function ti(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function ni(e){var t=ei(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zr(n.ownerDocument.documentElement,n)){if(null!==r&&ti(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=void 0===r.end?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Jr(n,s);var o=Jr(n,r);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ri=J&&"documentMode"in document&&11>=document.documentMode,ii=null,si=null,oi=null,ai=!1;function li(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;ai||null==ii||ii!==Me(r)||("selectionStart"in(r=ii)&&ti(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},oi&&Yr(oi,r)||(oi=r,0<(r=Oi(si,"onSelect")).length&&(t=new Jn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ii)))}function ui(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ci={animationend:ui("Animation","AnimationEnd"),animationiteration:ui("Animation","AnimationIteration"),animationstart:ui("Animation","AnimationStart"),transitionend:ui("Transition","TransitionEnd")},hi={},di={};function fi(e){if(hi[e])return hi[e];if(!ci[e])return e;var t,n=ci[e];for(t in n)if(n.hasOwnProperty(t)&&t in di)return hi[e]=n[t];return e}J&&(di=document.createElement("div").style,"AnimationEvent"in window||(delete ci.animationend.animation,delete ci.animationiteration.animation,delete ci.animationstart.animation),"TransitionEvent"in window||delete ci.transitionend.transition);var pi=fi("animationend"),mi=fi("animationiteration"),gi=fi("animationstart"),yi=fi("transitionend"),vi=new Map,wi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bi(e,t){vi.set(e,t),Y(t,[e])}for(var _i=0;_i<wi.length;_i++){var Ei=wi[_i];bi(Ei.toLowerCase(),"on"+(Ei[0].toUpperCase()+Ei.slice(1)))}bi(pi,"onAnimationEnd"),bi(mi,"onAnimationIteration"),bi(gi,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(yi,"onTransitionEnd"),X("onMouseEnter",["mouseout","mouseover"]),X("onMouseLeave",["mouseout","mouseover"]),X("onPointerEnter",["pointerout","pointerover"]),X("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ti=new Set("cancel close invalid load scroll toggle".split(" ").concat(ki));function Si(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,s,o,a,l){if(Rt.apply(this,arguments),Tt){if(!Tt)throw Error(K(198));var u=St;Tt=!1,St=null,It||(It=!0,Ct=u)}}(r,t,void 0,e),e.currentTarget=null}function Ii(e,t){t=!!(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Si(i,a,u),s=l}else for(o=0;o<r.length;o++){if(l=(a=r[o]).instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Si(i,a,u),s=l}}}if(It)throw e=Ct,It=!1,Ct=null,e}function Ci(e,t){var n=t[rs];void 0===n&&(n=t[rs]=new Set);var r=e+"__bubble";n.has(r)||(xi(t,e,2,!1),n.add(r))}function Ni(e,t,n){var r=0;t&&(r|=4),xi(n,e,r,t)}var Ri="_reactListening"+Math.random().toString(36).slice(2);function Ai(e){if(!e[Ri]){e[Ri]=!0,G.forEach((function(t){"selectionchange"!==t&&(Ti.has(t)||Ni(t,!1,e),Ni(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ri]||(t[Ri]=!0,Ni("selectionchange",!1,t))}}function xi(e,t,n,r){switch(Vn(t)){case 1:var i=On;break;case 4:i=Ln;break;default:i=Mn}n=i.bind(null,t,n,e),i=void 0,!_t||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Di(e,t,n,r,i){var s=r;if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var a=r.stateNode.containerInfo;if(a===i||8===a.nodeType&&a.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==a;){if(null===(o=os(a)))return;if(5===(l=o.tag)||6===l){r=s=o;continue e}a=a.parentNode}}r=r.return}wt((function(){var r=s,i=ut(n),o=[];e:{var a=vi.get(e);if(void 0!==a){var l=Jn,u=e;switch(e){case"keypress":if(0===qn(n))break e;case"keydown":case"keyup":l=mr;break;case"focusin":u="focus",l=ir;break;case"focusout":u="blur",l=ir;break;case"beforeblur":case"afterblur":l=ir;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=nr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=rr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=yr;break;case pi:case mi:case gi:l=sr;break;case yi:l=vr;break;case"scroll":l=er;break;case"wheel":l=br;break;case"copy":case"cut":case"paste":l=ar;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=gr}var c=!!(4&t),h=!c&&"scroll"===e,d=c?null!==a?a+"Capture":null:a;c=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==d&&(null!=(m=bt(p,d))&&c.push(Pi(p,m,f)))),h)break;p=p.return}0<c.length&&(a=new l(a,u,null,n,i),o.push({event:a,listeners:c}))}}if(!(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(a="mouseover"===e||"pointerover"===e)||n===lt||!(u=n.relatedTarget||n.fromElement)||!os(u)&&!u[ns])&&(l||a)&&(a=i.window===i?i:(a=i.ownerDocument)?a.defaultView||a.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?os(u):null)&&(u!==(h=At(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=nr,m="onMouseLeave",d="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=gr,m="onPointerLeave",d="onPointerEnter",p="pointer"),h=null==l?a:ls(l),f=null==u?a:ls(u),(a=new c(m,p+"leave",l,n,i)).target=h,a.relatedTarget=f,m=null,os(i)===r&&((c=new c(d,p+"enter",u,n,i)).target=f,c.relatedTarget=h,m=c),h=m,l&&u)e:{for(d=u,p=0,f=c=l;f;f=Li(f))p++;for(f=0,m=d;m;m=Li(m))f++;for(;0<p-f;)c=Li(c),p--;for(;0<f-p;)d=Li(d),f--;for(;p--;){if(c===d||null!==d&&c===d.alternate)break e;c=Li(c),d=Li(d)}c=null}else c=null;null!==l&&Mi(o,a,l,c,!1),null!==u&&null!==h&&Mi(o,h,u,c,!0)}if("select"===(l=(a=r?ls(r):window).nodeName&&a.nodeName.toLowerCase())||"input"===l&&"file"===a.type)var g=Fr;else if(Dr(a))if(Vr)g=Gr;else{g=Wr;var y=Hr}else(l=a.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===a.type||"radio"===a.type)&&(g=Kr);switch(g&&(g=g(e,r))?Pr(o,g,n,i):(y&&y(e,a,r),"focusout"===e&&(y=a._wrapperState)&&y.controlled&&"number"===a.type&&je(a,"number",a.value)),y=r?ls(r):window,e){case"focusin":(Dr(y)||"true"===y.contentEditable)&&(ii=y,si=r,oi=null);break;case"focusout":oi=si=ii=null;break;case"mousedown":ai=!0;break;case"contextmenu":case"mouseup":case"dragend":ai=!1,li(o,n,i);break;case"selectionchange":if(ri)break;case"keydown":case"keyup":li(o,n,i)}var v;if(Er)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Ar?Nr(e,n)&&(w="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(w="onCompositionStart");w&&(Sr&&"ko"!==n.locale&&(Ar||"onCompositionStart"!==w?"onCompositionEnd"===w&&Ar&&(v=$n()):(Bn="value"in(zn=i)?zn.value:zn.textContent,Ar=!0)),0<(y=Oi(r,w)).length&&(w=new lr(w,e,null,n,i),o.push({event:w,listeners:y}),v?w.data=v:null!==(v=Rr(n))&&(w.data=v))),(v=Tr?function(e,t){switch(e){case"compositionend":return Rr(t);case"keypress":return 32!==t.which?null:(Cr=!0,Ir);case"textInput":return(e=t.data)===Ir&&Cr?null:e;default:return null}}(e,n):function(e,t){if(Ar)return"compositionend"===e||!Er&&Nr(e,t)?(e=$n(),jn=Bn=zn=null,Ar=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sr&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Oi(r,"onBeforeInput")).length&&(i=new lr("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=v))}Ii(o,t)}))}function Pi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Oi(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,s=i.stateNode;5===i.tag&&null!==s&&(i=s,null!=(s=bt(e,n))&&r.unshift(Pi(e,s,i)),null!=(s=bt(e,t))&&r.push(Pi(e,s,i))),e=e.return}return r}function Li(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Mi(e,t,n,r,i){for(var s=t._reactName,o=[];null!==n&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(null!==l&&l===r)break;5===a.tag&&null!==u&&(a=u,i?null!=(l=bt(n,s))&&o.unshift(Pi(n,l,a)):i||null!=(l=bt(n,s))&&o.push(Pi(n,l,a))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Ui=/\r\n?/g,Fi=/\u0000|\uFFFD/g;function Vi(e){return("string"==typeof e?e:""+e).replace(Ui,"\n").replace(Fi,"")}function zi(e,t,n){if(t=Vi(t),Vi(e)!==t&&n)throw Error(K(425))}function Bi(){}var ji=null,$i=null;function qi(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Hi="function"==typeof setTimeout?setTimeout:void 0,Wi="function"==typeof clearTimeout?clearTimeout:void 0,Ki="function"==typeof Promise?Promise:void 0,Gi="function"==typeof queueMicrotask?queueMicrotask:void 0!==Ki?function(e){return Ki.resolve(null).then(e).catch(Qi)}:Hi;function Qi(e){setTimeout((function(){throw e}))}function Yi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void xn(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);xn(t)}function Xi(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function Ji(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var Zi=Math.random().toString(36).slice(2),es="__reactFiber$"+Zi,ts="__reactProps$"+Zi,ns="__reactContainer$"+Zi,rs="__reactEvents$"+Zi,is="__reactListeners$"+Zi,ss="__reactHandles$"+Zi;function os(e){var t=e[es];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ns]||n[es]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Ji(e);null!==e;){if(n=e[es])return n;e=Ji(e)}return t}n=(e=n).parentNode}return null}function as(e){return!(e=e[es]||e[ns])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function ls(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(K(33))}function us(e){return e[ts]||null}var cs=[],hs=-1;function ds(e){return{current:e}}function fs(e){0>hs||(e.current=cs[hs],cs[hs]=null,hs--)}function ps(e,t){hs++,cs[hs]=e.current,e.current=t}var ms={},gs=ds(ms),ys=ds(!1),vs=ms;function ws(e,t){var n=e.type.contextTypes;if(!n)return ms;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,s={};for(i in n)s[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function bs(e){return null!=(e=e.childContextTypes)}function _s(){fs(ys),fs(gs)}function Es(e,t,n){if(gs.current!==ms)throw Error(K(168));ps(gs,t),ps(ys,n)}function ks(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(K(108,xe(e)||"Unknown",i));return Se({},n,r)}function Ts(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ms,vs=gs.current,ps(gs,e),ps(ys,ys.current),!0}function Ss(e,t,n){var r=e.stateNode;if(!r)throw Error(K(169));n?(e=ks(e,t,vs),r.__reactInternalMemoizedMergedChildContext=e,fs(ys),fs(gs),ps(gs,e)):fs(ys),ps(ys,n)}var Is=null,Cs=!1,Ns=!1;function Rs(e){null===Is?Is=[e]:Is.push(e)}function As(){if(!Ns&&null!==Is){Ns=!0;var e=0,t=ln;try{var n=Is;for(ln=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Is=null,Cs=!1}catch(i){throw null!==Is&&(Is=Is.slice(e+1)),Lt(Bt,As),i}finally{ln=t,Ns=!1}}return null}var xs=[],Ds=0,Ps=null,Os=0,Ls=[],Ms=0,Us=null,Fs=1,Vs="";function zs(e,t){xs[Ds++]=Os,xs[Ds++]=Ps,Ps=e,Os=t}function Bs(e,t,n){Ls[Ms++]=Fs,Ls[Ms++]=Vs,Ls[Ms++]=Us,Us=e;var r=Fs;e=Vs;var i=32-Gt(r)-1;r&=~(1<<i),n+=1;var s=32-Gt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fs=1<<32-Gt(t)+i|n<<i|r,Vs=s+e}else Fs=1<<s|n<<i|r,Vs=e}function js(e){null!==e.return&&(zs(e,1),Bs(e,1,0))}function $s(e){for(;e===Ps;)Ps=xs[--Ds],xs[Ds]=null,Os=xs[--Ds],xs[Ds]=null;for(;e===Us;)Us=Ls[--Ms],Ls[Ms]=null,Vs=Ls[--Ms],Ls[Ms]=null,Fs=Ls[--Ms],Ls[Ms]=null}var qs=null,Hs=null,Ws=!1,Ks=null;function Gs(e,t){var n=vc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function Qs(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,qs=e,Hs=Xi(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,qs=e,Hs=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Us?{id:Fs,overflow:Vs}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=vc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,qs=e,Hs=null,!0);default:return!1}}function Ys(e){return!(!(1&e.mode)||128&e.flags)}function Xs(e){if(Ws){var t=Hs;if(t){var n=t;if(!Qs(e,t)){if(Ys(e))throw Error(K(418));t=Xi(n.nextSibling);var r=qs;t&&Qs(e,t)?Gs(r,n):(e.flags=-4097&e.flags|2,Ws=!1,qs=e)}}else{if(Ys(e))throw Error(K(418));e.flags=-4097&e.flags|2,Ws=!1,qs=e}}}function Js(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;qs=e}function Zs(e){if(e!==qs)return!1;if(!Ws)return Js(e),Ws=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!qi(e.type,e.memoizedProps)),t&&(t=Hs)){if(Ys(e))throw eo(),Error(K(418));for(;t;)Gs(e,t),t=Xi(t.nextSibling)}if(Js(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(K(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){Hs=Xi(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}Hs=null}}else Hs=qs?Xi(e.stateNode.nextSibling):null;return!0}function eo(){for(var e=Hs;e;)e=Xi(e.nextSibling)}function to(){Hs=qs=null,Ws=!1}function no(e){null===Ks?Ks=[e]:Ks.push(e)}var ro=le.ReactCurrentBatchConfig;function io(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(K(309));var r=n.stateNode}if(!r)throw Error(K(147,e));var i=r,s=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===s?t.ref:((t=function(e){var t=i.refs;null===e?delete t[s]:t[s]=e})._stringRef=s,t)}if("string"!=typeof e)throw Error(K(284));if(!n._owner)throw Error(K(290,e))}return e}function so(e,t){throw e=Object.prototype.toString.call(t),Error(K(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function oo(e){return(0,e._init)(e._payload)}function ao(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=bc(e,t)).index=0,e.sibling=null,e}function s(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function o(t){return e&&null===t.alternate&&(t.flags|=2),t}function a(e,t,n,r){return null===t||6!==t.tag?((t=Tc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){var s=n.type;return s===he?c(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===s||"object"==typeof s&&null!==s&&s.$$typeof===be&&oo(s)===t.type)?((r=i(t,n.props)).ref=io(e,t,n),r.return=e,r):((r=_c(n.type,n.key,n.props,null,e.mode,r)).ref=io(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Sc(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function c(e,t,n,r,s){return null===t||7!==t.tag?((t=Ec(n,e.mode,r,s)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Tc(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case ue:return(n=_c(t.type,t.key,t.props,null,e.mode,n)).ref=io(e,null,t),n.return=e,n;case ce:return(t=Sc(t,e.mode,n)).return=e,t;case be:return h(e,(0,t._init)(t._payload),n)}if($e(t)||ke(t))return(t=Ec(t,e.mode,n,null)).return=e,t;so(e,t)}return null}function d(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:a(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case ue:return n.key===i?l(e,t,n,r):null;case ce:return n.key===i?u(e,t,n,r):null;case be:return d(e,t,(i=n._init)(n._payload),r)}if($e(n)||ke(n))return null!==i?null:c(e,t,n,r,null);so(e,n)}return null}function f(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return a(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case ue:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case ce:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case be:return f(e,t,n,(0,r._init)(r._payload),i)}if($e(r)||ke(r))return c(t,e=e.get(n)||null,r,i,null);so(t,r)}return null}return function a(l,u,c,p){if("object"==typeof c&&null!==c&&c.type===he&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case ue:e:{for(var m=c.key,g=u;null!==g;){if(g.key===m){if((m=c.type)===he){if(7===g.tag){n(l,g.sibling),(u=i(g,c.props.children)).return=l,l=u;break e}}else if(g.elementType===m||"object"==typeof m&&null!==m&&m.$$typeof===be&&oo(m)===g.type){n(l,g.sibling),(u=i(g,c.props)).ref=io(l,g,c),u.return=l,l=u;break e}n(l,g);break}t(l,g),g=g.sibling}c.type===he?((u=Ec(c.props.children,l.mode,p,c.key)).return=l,l=u):((p=_c(c.type,c.key,c.props,null,l.mode,p)).ref=io(l,u,c),p.return=l,l=p)}return o(l);case ce:e:{for(g=c.key;null!==u;){if(u.key===g){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(l,u.sibling),(u=i(u,c.children||[])).return=l,l=u;break e}n(l,u);break}t(l,u),u=u.sibling}(u=Sc(c,l.mode,p)).return=l,l=u}return o(l);case be:return a(l,u,(g=c._init)(c._payload),p)}if($e(c))return function(i,o,a,l){for(var u=null,c=null,p=o,m=o=0,g=null;null!==p&&m<a.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var y=d(i,p,a[m],l);if(null===y){null===p&&(p=g);break}e&&p&&null===y.alternate&&t(i,p),o=s(y,o,m),null===c?u=y:c.sibling=y,c=y,p=g}if(m===a.length)return n(i,p),Ws&&zs(i,m),u;if(null===p){for(;m<a.length;m++)null!==(p=h(i,a[m],l))&&(o=s(p,o,m),null===c?u=p:c.sibling=p,c=p);return Ws&&zs(i,m),u}for(p=r(i,p);m<a.length;m++)null!==(g=f(p,i,m,a[m],l))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),o=s(g,o,m),null===c?u=g:c.sibling=g,c=g);return e&&p.forEach((function(e){return t(i,e)})),Ws&&zs(i,m),u}(l,u,c,p);if(ke(c))return function(i,o,a,l){var u=ke(a);if("function"!=typeof u)throw Error(K(150));if(null==(a=u.call(a)))throw Error(K(151));for(var c=u=null,p=o,m=o=0,g=null,y=a.next();null!==p&&!y.done;m++,y=a.next()){p.index>m?(g=p,p=null):g=p.sibling;var v=d(i,p,y.value,l);if(null===v){null===p&&(p=g);break}e&&p&&null===v.alternate&&t(i,p),o=s(v,o,m),null===c?u=v:c.sibling=v,c=v,p=g}if(y.done)return n(i,p),Ws&&zs(i,m),u;if(null===p){for(;!y.done;m++,y=a.next())null!==(y=h(i,y.value,l))&&(o=s(y,o,m),null===c?u=y:c.sibling=y,c=y);return Ws&&zs(i,m),u}for(p=r(i,p);!y.done;m++,y=a.next())null!==(y=f(p,i,m,y.value,l))&&(e&&null!==y.alternate&&p.delete(null===y.key?m:y.key),o=s(y,o,m),null===c?u=y:c.sibling=y,c=y);return e&&p.forEach((function(e){return t(i,e)})),Ws&&zs(i,m),u}(l,u,c,p);so(l,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==u&&6===u.tag?(n(l,u.sibling),(u=i(u,c)).return=l,l=u):(n(l,u),(u=Tc(c,l.mode,p)).return=l,l=u),o(l)):n(l,u)}}var lo=ao(!0),uo=ao(!1),co=ds(null),ho=null,fo=null,po=null;function mo(){po=fo=ho=null}function go(e){var t=co.current;fs(co),e._currentValue=t}function yo(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function vo(e,t){ho=e,po=fo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(!!(e.lanes&t)&&(ol=!0),e.firstContext=null)}function wo(e){var t=e._currentValue;if(po!==e)if(e={context:e,memoizedValue:t,next:null},null===fo){if(null===ho)throw Error(K(308));fo=e,ho.dependencies={lanes:0,firstContext:e}}else fo=fo.next=e;return t}var bo=null;function _o(e){null===bo?bo=[e]:bo.push(e)}function Eo(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,_o(t)):(n.next=i.next,i.next=n),t.interleaved=n,ko(e,r)}function ko(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var To=!1;function So(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Io(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Co(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function No(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,2&mu){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ko(e,n)}return null===(i=r.interleaved)?(t.next=t,_o(r)):(t.next=i.next,i.next=t),r.interleaved=t,ko(e,n)}function Ro(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,an(e,n)}}function Ao(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,s=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===s?i=s=o:s=s.next=o,n=n.next}while(null!==n);null===s?i=s=t:s=s.next=t}else i=s=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function xo(e,t,n,r){var i=e.updateQueue;To=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(null!==a){i.shared.pending=null;var l=a,u=l.next;l.next=null,null===o?s=u:o.next=u,o=l;var c=e.alternate;null!==c&&((a=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===a?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(null!==s){var h=i.baseState;for(o=0,c=u=l=null,a=s;;){var d=a.lane,f=a.eventTime;if((r&d)===d){null!==c&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=e,m=a;switch(d=t,f=n,m.tag){case 1:if("function"==typeof(p=m.payload)){h=p.call(f,h,d);break e}h=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(d="function"==typeof(p=m.payload)?p.call(f,h,d):p))break e;h=Se({},h,d);break e;case 2:To=!0}}null!==a.callback&&0!==a.lane&&(e.flags|=64,null===(d=i.effects)?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},null===c?(u=c=f,l=h):c=c.next=f,o|=d;if(null===(a=a.next)){if(null===(a=i.shared.pending))break;a=(d=a).next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}if(null===c&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{o|=i.lane,i=i.next}while(i!==t)}else null===s&&(i.shared.lanes=0);ku|=o,e.lanes=o,e.memoizedState=h}}function Do(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(K(191,i));i.call(r)}}}var Po={},Oo=ds(Po),Lo=ds(Po),Mo=ds(Po);function Uo(e){if(e===Po)throw Error(K(174));return e}function Fo(e,t){switch(ps(Mo,t),ps(Lo,e),ps(Oo,Po),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ye(null,"");break;default:t=Ye(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}fs(Oo),ps(Oo,t)}function Vo(){fs(Oo),fs(Lo),fs(Mo)}function zo(e){Uo(Mo.current);var t=Uo(Oo.current),n=Ye(t,e.type);t!==n&&(ps(Lo,e),ps(Oo,n))}function Bo(e){Lo.current===e&&(fs(Oo),fs(Lo))}var jo=ds(0);function $o(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qo=[];function Ho(){for(var e=0;e<qo.length;e++)qo[e]._workInProgressVersionPrimary=null;qo.length=0}var Wo=le.ReactCurrentDispatcher,Ko=le.ReactCurrentBatchConfig,Go=0,Qo=null,Yo=null,Xo=null,Jo=!1,Zo=!1,ea=0,ta=0;function na(){throw Error(K(321))}function ra(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qr(e[n],t[n]))return!1;return!0}function ia(e,t,n,r,i,s){if(Go=s,Qo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Wo.current=null===e||null===e.memoizedState?Ba:ja,e=n(r,i),Zo){s=0;do{if(Zo=!1,ea=0,25<=s)throw Error(K(301));s+=1,Xo=Yo=null,t.updateQueue=null,Wo.current=$a,e=n(r,i)}while(Zo)}if(Wo.current=za,t=null!==Yo&&null!==Yo.next,Go=0,Xo=Yo=Qo=null,Jo=!1,t)throw Error(K(300));return e}function sa(){var e=0!==ea;return ea=0,e}function oa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Xo?Qo.memoizedState=Xo=e:Xo=Xo.next=e,Xo}function aa(){if(null===Yo){var e=Qo.alternate;e=null!==e?e.memoizedState:null}else e=Yo.next;var t=null===Xo?Qo.memoizedState:Xo.next;if(null!==t)Xo=t,Yo=e;else{if(null===e)throw Error(K(310));e={memoizedState:(Yo=e).memoizedState,baseState:Yo.baseState,baseQueue:Yo.baseQueue,queue:Yo.queue,next:null},null===Xo?Qo.memoizedState=Xo=e:Xo=Xo.next=e}return Xo}function la(e,t){return"function"==typeof t?t(e):t}function ua(e){var t=aa(),n=t.queue;if(null===n)throw Error(K(311));n.lastRenderedReducer=e;var r=Yo,i=r.baseQueue,s=n.pending;if(null!==s){if(null!==i){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(null!==i){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Go&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(a=l=h,o=r):l=l.next=h,Qo.lanes|=c,ku|=c}u=u.next}while(null!==u&&u!==s);null===l?o=r:l.next=a,Qr(r,t.memoizedState)||(ol=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{s=i.lane,Qo.lanes|=s,ku|=s,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ca(e){var t=aa(),n=t.queue;if(null===n)throw Error(K(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(null!==i){n.pending=null;var o=i=i.next;do{s=e(s,o.action),o=o.next}while(o!==i);Qr(s,t.memoizedState)||(ol=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function ha(){}function da(e,t){var n=Qo,r=aa(),i=t(),s=!Qr(r.memoizedState,i);if(s&&(r.memoizedState=i,ol=!0),r=r.queue,Ta(ma.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||null!==Xo&&1&Xo.memoizedState.tag){if(n.flags|=2048,wa(9,pa.bind(null,n,r,i,t),void 0,null),null===gu)throw Error(K(349));30&Go||fa(n,t,i)}return i}function fa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Qo.updateQueue)?(t={lastEffect:null,stores:null},Qo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function pa(e,t,n,r){t.value=n,t.getSnapshot=r,ga(t)&&ya(e)}function ma(e,t,n){return n((function(){ga(t)&&ya(e)}))}function ga(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qr(e,n)}catch(r){return!0}}function ya(e){var t=ko(e,1);null!==t&&$u(t,e,1,-1)}function va(e){var t=oa();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},t.queue=e,e=e.dispatch=Ma.bind(null,Qo,e),[t.memoizedState,e]}function wa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=Qo.updateQueue)?(t={lastEffect:null,stores:null},Qo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ba(){return aa().memoizedState}function _a(e,t,n,r){var i=oa();Qo.flags|=e,i.memoizedState=wa(1|t,n,void 0,void 0===r?null:r)}function Ea(e,t,n,r){var i=aa();r=void 0===r?null:r;var s=void 0;if(null!==Yo){var o=Yo.memoizedState;if(s=o.destroy,null!==r&&ra(r,o.deps))return void(i.memoizedState=wa(t,n,s,r))}Qo.flags|=e,i.memoizedState=wa(1|t,n,s,r)}function ka(e,t){return _a(8390656,8,e,t)}function Ta(e,t){return Ea(2048,8,e,t)}function Sa(e,t){return Ea(4,2,e,t)}function Ia(e,t){return Ea(4,4,e,t)}function Ca(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Na(e,t,n){return n=null!=n?n.concat([e]):null,Ea(4,4,Ca.bind(null,t,e),n)}function Ra(){}function Aa(e,t){var n=aa();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ra(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xa(e,t){var n=aa();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ra(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Da(e,t,n){return 21&Go?(Qr(n,t)||(n=rn(),Qo.lanes|=n,ku|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ol=!0),e.memoizedState=n)}function Pa(e,t){var n=ln;ln=0!==n&&4>n?n:4,e(!0);var r=Ko.transition;Ko.transition={};try{e(!1),t()}finally{ln=n,Ko.transition=r}}function Oa(){return aa().memoizedState}function La(e,t,n){var r=ju(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ua(e))Fa(t,n);else if(null!==(n=Eo(e,t,n,r))){$u(n,e,r,Bu()),Va(n,t,r)}}function Ma(e,t,n){var r=ju(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ua(e))Fa(t,i);else{var s=e.alternate;if(0===e.lanes&&(null===s||0===s.lanes)&&null!==(s=t.lastRenderedReducer))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Qr(a,o)){var l=t.interleaved;return null===l?(i.next=i,_o(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(u){}null!==(n=Eo(e,t,i,r))&&($u(n,e,r,i=Bu()),Va(n,t,r))}}function Ua(e){var t=e.alternate;return e===Qo||null!==t&&t===Qo}function Fa(e,t){Zo=Jo=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Va(e,t,n){if(4194240&n){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,an(e,n)}}var za={readContext:wo,useCallback:na,useContext:na,useEffect:na,useImperativeHandle:na,useInsertionEffect:na,useLayoutEffect:na,useMemo:na,useReducer:na,useRef:na,useState:na,useDebugValue:na,useDeferredValue:na,useTransition:na,useMutableSource:na,useSyncExternalStore:na,useId:na,unstable_isNewReconciler:!1},Ba={readContext:wo,useCallback:function(e,t){return oa().memoizedState=[e,void 0===t?null:t],e},useContext:wo,useEffect:ka,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,_a(4194308,4,Ca.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _a(4194308,4,e,t)},useInsertionEffect:function(e,t){return _a(4,2,e,t)},useMemo:function(e,t){var n=oa();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=oa();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=La.bind(null,Qo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},oa().memoizedState=e},useState:va,useDebugValue:Ra,useDeferredValue:function(e){return oa().memoizedState=e},useTransition:function(){var e=va(!1),t=e[0];return e=Pa.bind(null,e[1]),oa().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Qo,i=oa();if(Ws){if(void 0===n)throw Error(K(407));n=n()}else{if(n=t(),null===gu)throw Error(K(349));30&Go||fa(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,ka(ma.bind(null,r,s,e),[e]),r.flags|=2048,wa(9,pa.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=oa(),t=gu.identifierPrefix;if(Ws){var n=Vs;t=":"+t+"R"+(n=(Fs&~(1<<32-Gt(Fs)-1)).toString(32)+n),0<(n=ea++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=ta++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ja={readContext:wo,useCallback:Aa,useContext:wo,useEffect:Ta,useImperativeHandle:Na,useInsertionEffect:Sa,useLayoutEffect:Ia,useMemo:xa,useReducer:ua,useRef:ba,useState:function(){return ua(la)},useDebugValue:Ra,useDeferredValue:function(e){return Da(aa(),Yo.memoizedState,e)},useTransition:function(){return[ua(la)[0],aa().memoizedState]},useMutableSource:ha,useSyncExternalStore:da,useId:Oa,unstable_isNewReconciler:!1},$a={readContext:wo,useCallback:Aa,useContext:wo,useEffect:Ta,useImperativeHandle:Na,useInsertionEffect:Sa,useLayoutEffect:Ia,useMemo:xa,useReducer:ca,useRef:ba,useState:function(){return ca(la)},useDebugValue:Ra,useDeferredValue:function(e){var t=aa();return null===Yo?t.memoizedState=e:Da(t,Yo.memoizedState,e)},useTransition:function(){return[ca(la)[0],aa().memoizedState]},useMutableSource:ha,useSyncExternalStore:da,useId:Oa,unstable_isNewReconciler:!1};function qa(e,t){if(e&&e.defaultProps){for(var n in t=Se({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function Ha(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:Se({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var Wa={isMounted:function(e){return!!(e=e._reactInternals)&&At(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Bu(),i=ju(e),s=Co(r,i);s.payload=t,null!=n&&(s.callback=n),null!==(t=No(e,s,i))&&($u(t,e,i,r),Ro(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Bu(),i=ju(e),s=Co(r,i);s.tag=1,s.payload=t,null!=n&&(s.callback=n),null!==(t=No(e,s,i))&&($u(t,e,i,r),Ro(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Bu(),r=ju(e),i=Co(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=No(e,i,r))&&($u(t,e,r,n),Ro(t,e,r))}};function Ka(e,t,n,r,i,s,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,s,o):!t.prototype||!t.prototype.isPureReactComponent||(!Yr(n,r)||!Yr(i,s))}function Ga(e,t,n){var r=!1,i=ms,s=t.contextType;return"object"==typeof s&&null!==s?s=wo(s):(i=bs(t)?vs:gs.current,s=(r=null!=(r=t.contextTypes))?ws(e,i):ms),t=new t(n,s),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=Wa,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Qa(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wa.enqueueReplaceState(t,t.state,null)}function Ya(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},So(e);var s=t.contextType;"object"==typeof s&&null!==s?i.context=wo(s):(s=bs(t)?vs:gs.current,i.context=ws(e,s)),i.state=e.memoizedState,"function"==typeof(s=t.getDerivedStateFromProps)&&(Ha(e,t,s,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&Wa.enqueueReplaceState(i,i.state,null),xo(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function Xa(e,t){try{var n="",r=t;do{n+=Re(r),r=r.return}while(r);var i=n}catch(s){i="\nError generating stack: "+s.message+"\n"+s.stack}return{value:e,source:t,stack:i,digest:null}}function Ja(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}var Za="function"==typeof WeakMap?WeakMap:Map;function el(e,t,n){(n=Co(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xu||(xu=!0,Du=r)},n}function tl(e,t,n){(n=Co(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){}}var s=e.stateNode;return null!==s&&"function"==typeof s.componentDidCatch&&(n.callback=function(){"function"!=typeof r&&(null===Pu?Pu=new Set([this]):Pu.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function nl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new Za;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=dc.bind(null,e,t,n),t.then(e,e))}function rl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function il(e,t,n,r,i){return 1&e.mode?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Co(-1,1)).tag=2,No(n,t,1))),n.lanes|=1),e)}var sl=le.ReactCurrentOwner,ol=!1;function al(e,t,n,r){t.child=null===e?uo(t,null,n,r):lo(t,e.child,n,r)}function ll(e,t,n,r,i){n=n.render;var s=t.ref;return vo(t,i),r=ia(e,t,n,r,s,i),n=sa(),null===e||ol?(Ws&&n&&js(t),t.flags|=1,al(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xl(e,t,i))}function ul(e,t,n,r,i){if(null===e){var s=n.type;return"function"!=typeof s||wc(s)||void 0!==s.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=_c(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,cl(e,t,s,r,i))}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if((n=null!==(n=n.compare)?n:Yr)(o,r)&&e.ref===t.ref)return xl(e,t,i)}return t.flags|=1,(e=bc(s,r)).ref=t.ref,e.return=t,t.child=e}function cl(e,t,n,r,i){if(null!==e){var s=e.memoizedProps;if(Yr(s,r)&&e.ref===t.ref){if(ol=!1,t.pendingProps=r=s,!(e.lanes&i))return t.lanes=e.lanes,xl(e,t,i);131072&e.flags&&(ol=!0)}}return fl(e,t,n,r,i)}function hl(e,t,n){var r=t.pendingProps,i=r.children,s=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(1&t.mode){if(!(1073741824&n))return e=null!==s?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ps(bu,wu),wu|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==s?s.baseLanes:n,ps(bu,wu),wu|=r}else t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ps(bu,wu),wu|=n;else null!==s?(r=s.baseLanes|n,t.memoizedState=null):r=n,ps(bu,wu),wu|=r;return al(e,t,i,n),t.child}function dl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function fl(e,t,n,r,i){var s=bs(n)?vs:gs.current;return s=ws(t,s),vo(t,i),n=ia(e,t,n,r,s,i),r=sa(),null===e||ol?(Ws&&r&&js(t),t.flags|=1,al(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xl(e,t,i))}function pl(e,t,n,r,i){if(bs(n)){var s=!0;Ts(t)}else s=!1;if(vo(t,i),null===t.stateNode)Al(e,t),Ga(t,n,r),Ya(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;"object"==typeof u&&null!==u?u=wo(u):u=ws(t,u=bs(n)?vs:gs.current);var c=n.getDerivedStateFromProps,h="function"==typeof c||"function"==typeof o.getSnapshotBeforeUpdate;h||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(a!==r||l!==u)&&Qa(t,o,r,u),To=!1;var d=t.memoizedState;o.state=d,xo(t,r,o,i),l=t.memoizedState,a!==r||d!==l||ys.current||To?("function"==typeof c&&(Ha(t,n,c,r),l=t.memoizedState),(a=To||Ka(t,n,a,r,d,l,u))?(h||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):("function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Io(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:qa(t.type,a),o.props=u,h=t.pendingProps,d=o.context,"object"==typeof(l=n.contextType)&&null!==l?l=wo(l):l=ws(t,l=bs(n)?vs:gs.current);var f=n.getDerivedStateFromProps;(c="function"==typeof f||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(a!==h||d!==l)&&Qa(t,o,r,l),To=!1,d=t.memoizedState,o.state=d,xo(t,r,o,i);var p=t.memoizedState;a!==h||d!==p||ys.current||To?("function"==typeof f&&(Ha(t,n,f,r),p=t.memoizedState),(u=To||Ka(t,n,u,r,d,p,l)||!1)?(c||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,l),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):("function"!=typeof o.componentDidUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return ml(e,t,n,r,s,i)}function ml(e,t,n,r,i,s){dl(e,t);var o=!!(128&t.flags);if(!r&&!o)return i&&Ss(t,n,!1),xl(e,t,s);r=t.stateNode,sl.current=t;var a=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=lo(t,e.child,null,s),t.child=lo(t,null,a,s)):al(e,t,a,s),t.memoizedState=r.state,i&&Ss(t,n,!0),t.child}function gl(e){var t=e.stateNode;t.pendingContext?Es(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Es(0,t.context,!1),Fo(e,t.containerInfo)}function yl(e,t,n,r,i){return to(),no(i),t.flags|=256,al(e,t,n,r),t.child}var vl,wl,bl,_l,El={dehydrated:null,treeContext:null,retryLane:0};function kl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tl(e,t,n){var r,i=t.pendingProps,s=jo.current,o=!1,a=!!(128&t.flags);if((r=a)||(r=(null===e||null!==e.memoizedState)&&!!(2&s)),r?(o=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(s|=1),ps(jo,1&s),null===e)return Xs(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(1&t.mode?"$!"===e.data?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=i.children,e=i.fallback,o?(i=t.mode,o=t.child,a={mode:"hidden",children:a},1&i||null===o?o=kc(a,i,0,null):(o.childLanes=0,o.pendingProps=a),e=Ec(e,i,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=kl(n),t.memoizedState=El,e):Sl(t,a));if(null!==(s=e.memoizedState)&&null!==(r=s.dehydrated))return function(e,t,n,r,i,s,o){if(n)return 256&t.flags?(t.flags&=-257,Il(e,t,o,r=Ja(Error(K(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=kc({mode:"visible",children:r.children},i,0,null),(s=Ec(s,i,o,null)).flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,1&t.mode&&lo(t,e.child,null,o),t.child.memoizedState=kl(o),t.memoizedState=El,s);if(!(1&t.mode))return Il(e,t,o,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var a=r.dgst;return r=a,Il(e,t,o,r=Ja(s=Error(K(419)),r,void 0))}if(a=!!(o&e.childLanes),ol||a){if(null!==(r=gu)){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=i&(r.suspendedLanes|o)?0:i)&&i!==s.retryLane&&(s.retryLane=i,ko(e,i),$u(r,e,i,-1))}return nc(),Il(e,t,o,r=Ja(Error(K(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=pc.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Hs=Xi(i.nextSibling),qs=t,Ws=!0,Ks=null,null!==e&&(Ls[Ms++]=Fs,Ls[Ms++]=Vs,Ls[Ms++]=Us,Fs=e.id,Vs=e.overflow,Us=t),t=Sl(t,r.children),t.flags|=4096,t)}(e,t,a,i,r,s,n);if(o){o=i.fallback,a=t.mode,r=(s=e.child).sibling;var l={mode:"hidden",children:i.children};return 1&a||t.child===s?(i=bc(s,l)).subtreeFlags=14680064&s.subtreeFlags:((i=t.child).childLanes=0,i.pendingProps=l,t.deletions=null),null!==r?o=bc(r,o):(o=Ec(o,a,n,null)).flags|=2,o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,a=null===(a=e.child.memoizedState)?kl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=El,i}return e=(o=e.child).sibling,i=bc(o,{mode:"visible",children:i.children}),!(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Sl(e,t){return(t=kc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Il(e,t,n,r){return null!==r&&no(r),lo(t,e.child,null,n),(e=Sl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Cl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),yo(e.return,t,n)}function Nl(e,t,n,r,i){var s=e.memoizedState;null===s?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Rl(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(al(e,t,r.children,n),2&(r=jo.current))r=1&r|2,t.flags|=128;else{if(null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Cl(e,n,t);else if(19===e.tag)Cl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ps(jo,r),1&t.mode)switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===$o(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Nl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===$o(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Nl(t,!0,n,null,s);break;case"together":Nl(t,!1,null,null,void 0);break;default:t.memoizedState=null}else t.memoizedState=null;return t.child}function Al(e,t){!(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),ku|=t.lanes,!(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(K(153));if(null!==t.child){for(n=bc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=bc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Dl(e,t){if(!Ws)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ol(e,t,n){var r=t.pendingProps;switch($s(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pl(t),null;case 1:case 17:return bs(t.type)&&_s(),Pl(t),null;case 3:return r=t.stateNode,Vo(),fs(ys),fs(gs),Ho(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(Zs(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,null!==Ks&&(Ku(Ks),Ks=null))),wl(e,t),Pl(t),null;case 5:Bo(t);var i=Uo(Mo.current);if(n=t.type,null!==e&&null!=t.stateNode)bl(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(K(166));return Pl(t),null}if(e=Uo(Oo.current),Zs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[es]=t,r[ts]=s,e=!!(1&t.mode),n){case"dialog":Ci("cancel",r),Ci("close",r);break;case"iframe":case"object":case"embed":Ci("load",r);break;case"video":case"audio":for(i=0;i<ki.length;i++)Ci(ki[i],r);break;case"source":Ci("error",r);break;case"img":case"image":case"link":Ci("error",r),Ci("load",r);break;case"details":Ci("toggle",r);break;case"input":Fe(r,s),Ci("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ci("invalid",r);break;case"textarea":We(r,s),Ci("invalid",r)}for(var o in ot(n,s),i=null,s)if(s.hasOwnProperty(o)){var a=s[o];"children"===o?"string"==typeof a?r.textContent!==a&&(!0!==s.suppressHydrationWarning&&zi(r.textContent,a,e),i=["children",a]):"number"==typeof a&&r.textContent!==""+a&&(!0!==s.suppressHydrationWarning&&zi(r.textContent,a,e),i=["children",""+a]):Q.hasOwnProperty(o)&&null!=a&&"onScroll"===o&&Ci("scroll",r)}switch(n){case"input":Oe(r),Be(r,s,!0);break;case"textarea":Oe(r),Ge(r);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(r.onclick=Bi)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{o=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=Qe(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=o.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),"select"===n&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[es]=t,e[ts]=r,vl(e,t,!1,!1),t.stateNode=e;e:{switch(o=at(n,r),n){case"dialog":Ci("cancel",e),Ci("close",e),i=r;break;case"iframe":case"object":case"embed":Ci("load",e),i=r;break;case"video":case"audio":for(i=0;i<ki.length;i++)Ci(ki[i],e);i=r;break;case"source":Ci("error",e),i=r;break;case"img":case"image":case"link":Ci("error",e),Ci("load",e),i=r;break;case"details":Ci("toggle",e),i=r;break;case"input":Fe(e,r),i=Ue(e,r),Ci("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),Ci("invalid",e);break;case"textarea":We(e,r),i=He(e,r),Ci("invalid",e)}for(s in ot(n,i),a=i)if(a.hasOwnProperty(s)){var l=a[s];"style"===s?it(e,l):"dangerouslySetInnerHTML"===s?null!=(l=l?l.__html:void 0)&&Ze(e,l):"children"===s?"string"==typeof l?("textarea"!==n||""!==l)&&et(e,l):"number"==typeof l&&et(e,""+l):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(Q.hasOwnProperty(s)?null!=l&&"onScroll"===s&&Ci("scroll",e):null!=l&&ae(e,s,l,o))}switch(n){case"input":Oe(e),Be(e,r,!1);break;case"textarea":Oe(e),Ge(e);break;case"option":null!=r.value&&e.setAttribute("value",""+De(r.value));break;case"select":e.multiple=!!r.multiple,null!=(s=r.value)?qe(e,!!r.multiple,s,!1):null!=r.defaultValue&&qe(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=Bi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Pl(t),null;case 6:if(e&&null!=t.stateNode)_l(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(K(166));if(n=Uo(Mo.current),Uo(Oo.current),Zs(t)){if(r=t.stateNode,n=t.memoizedProps,r[es]=t,(s=r.nodeValue!==n)&&null!==(e=qs))switch(e.tag){case 3:zi(r.nodeValue,n,!!(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&zi(r.nodeValue,n,!!(1&e.mode))}s&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[es]=t,t.stateNode=r}return Pl(t),null;case 13:if(fs(jo),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(Ws&&null!==Hs&&1&t.mode&&!(128&t.flags))eo(),to(),t.flags|=98560,s=!1;else if(s=Zs(t),null!==r&&null!==r.dehydrated){if(null===e){if(!s)throw Error(K(318));if(!(s=null!==(s=t.memoizedState)?s.dehydrated:null))throw Error(K(317));s[es]=t}else to(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Pl(t),s=!1}else null!==Ks&&(Ku(Ks),Ks=null),s=!0;if(!s)return 65536&t.flags?t:null}return 128&t.flags?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,1&t.mode&&(null===e||1&jo.current?0===_u&&(_u=3):nc())),null!==t.updateQueue&&(t.flags|=4),Pl(t),null);case 4:return Vo(),wl(e,t),null===e&&Ai(t.stateNode.containerInfo),Pl(t),null;case 10:return go(t.type._context),Pl(t),null;case 19:if(fs(jo),null===(s=t.memoizedState))return Pl(t),null;if(r=!!(128&t.flags),null===(o=s.rendering))if(r)Dl(s,!1);else{if(0!==_u||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(o=$o(e))){for(t.flags|=128,Dl(s,!1),null!==(r=o.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(s=n).flags&=14680066,null===(o=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ps(jo,1&jo.current|2),t.child}e=e.sibling}null!==s.tail&&Vt()>Ru&&(t.flags|=128,r=!0,Dl(s,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=$o(o))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Dl(s,!0),null===s.tail&&"hidden"===s.tailMode&&!o.alternate&&!Ws)return Pl(t),null}else 2*Vt()-s.renderingStartTime>Ru&&1073741824!==n&&(t.flags|=128,r=!0,Dl(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(null!==(n=s.last)?n.sibling=o:t.child=o,s.last=o)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Vt(),t.sibling=null,n=jo.current,ps(jo,r?1&n|2:1&n),t):(Pl(t),null);case 22:case 23:return Ju(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&1&t.mode?!!(1073741824&wu)&&(Pl(t),6&t.subtreeFlags&&(t.flags|=8192)):Pl(t),null;case 24:case 25:return null}throw Error(K(156,t.tag))}function Ll(e,t){switch($s(t),t.tag){case 1:return bs(t.type)&&_s(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Vo(),fs(ys),fs(gs),Ho(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Bo(t),null;case 13:if(fs(jo),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(K(340));to()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return fs(jo),null;case 4:return Vo(),null;case 10:return go(t.type._context),null;case 22:case 23:return Ju(),null;default:return null}}vl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},wl=function(){},bl=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Uo(Oo.current);var s,o=null;switch(n){case"input":i=Ue(e,i),r=Ue(e,r),o=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),o=[];break;case"textarea":i=He(e,i),r=He(e,r),o=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=Bi)}for(u in ot(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(Q.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(null!=l||null!=a))if("style"===u)if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,a=a?a.__html:void 0,null!=l&&a!==l&&(o=o||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(o=o||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(Q.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&Ci("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},_l=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ml=!1,Ul=!1,Fl="function"==typeof WeakSet?WeakSet:Set,Vl=null;function zl(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(r){hc(e,t,r)}else n.current=null}function Bl(e,t,n){try{n()}catch(r){hc(e,t,r)}}var jl=!1;function $l(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,void 0!==s&&Bl(t,n,s)}i=i.next}while(i!==r)}}function ql(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Hl(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function Wl(e){var t=e.alternate;null!==t&&(e.alternate=null,Wl(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[es],delete t[ts],delete t[rs],delete t[is],delete t[ss])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kl(e){return 5===e.tag||3===e.tag||4===e.tag}function Gl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Kl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function Ql(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Bi));else if(4!==r&&null!==(e=e.child))for(Ql(e,t,n),e=e.sibling;null!==e;)Ql(e,t,n),e=e.sibling}function Yl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(Yl(e,t,n),e=e.sibling;null!==e;)Yl(e,t,n),e=e.sibling}var Xl=null,Jl=!1;function Zl(e,t,n){for(n=n.child;null!==n;)eu(e,t,n),n=n.sibling}function eu(e,t,n){if(Kt&&"function"==typeof Kt.onCommitFiberUnmount)try{Kt.onCommitFiberUnmount(Wt,n)}catch(a){}switch(n.tag){case 5:Ul||zl(n,t);case 6:var r=Xl,i=Jl;Xl=null,Zl(e,t,n),Jl=i,null!==(Xl=r)&&(Jl?(e=Xl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):Xl.removeChild(n.stateNode));break;case 18:null!==Xl&&(Jl?(e=Xl,n=n.stateNode,8===e.nodeType?Yi(e.parentNode,n):1===e.nodeType&&Yi(e,n),xn(e)):Yi(Xl,n.stateNode));break;case 4:r=Xl,i=Jl,Xl=n.stateNode.containerInfo,Jl=!0,Zl(e,t,n),Xl=r,Jl=i;break;case 0:case 11:case 14:case 15:if(!Ul&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,void 0!==o&&(2&s||4&s)&&Bl(n,t,o),i=i.next}while(i!==r)}Zl(e,t,n);break;case 1:if(!Ul&&(zl(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){hc(n,t,a)}Zl(e,t,n);break;case 21:Zl(e,t,n);break;case 22:1&n.mode?(Ul=(r=Ul)||null!==n.memoizedState,Zl(e,t,n),Ul=r):Zl(e,t,n);break;default:Zl(e,t,n)}}function tu(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Fl),t.forEach((function(t){var r=mc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function nu(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;null!==a;){switch(a.tag){case 5:Xl=a.stateNode,Jl=!1;break e;case 3:case 4:Xl=a.stateNode.containerInfo,Jl=!0;break e}a=a.return}if(null===Xl)throw Error(K(160));eu(s,o,i),Xl=null,Jl=!1;var l=i.alternate;null!==l&&(l.return=null),i.return=null}catch(u){hc(i,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)ru(t,e),t=t.sibling}function ru(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nu(t,e),iu(e),4&r){try{$l(3,e,e.return),ql(3,e)}catch(m){hc(e,e.return,m)}try{$l(5,e,e.return)}catch(m){hc(e,e.return,m)}}break;case 1:nu(t,e),iu(e),512&r&&null!==n&&zl(n,n.return);break;case 5:if(nu(t,e),iu(e),512&r&&null!==n&&zl(n,n.return),32&e.flags){var i=e.stateNode;try{et(i,"")}catch(m){hc(e,e.return,m)}}if(4&r&&null!=(i=e.stateNode)){var s=e.memoizedProps,o=null!==n?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===a&&"radio"===s.type&&null!=s.name&&Ve(i,s),at(a,o);var u=at(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];"style"===c?it(i,h):"dangerouslySetInnerHTML"===c?Ze(i,h):"children"===c?et(i,h):ae(i,c,h,u)}switch(a){case"input":ze(i,s);break;case"textarea":Ke(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;null!=f?qe(i,!!s.multiple,f,!1):d!==!!s.multiple&&(null!=s.defaultValue?qe(i,!!s.multiple,s.defaultValue,!0):qe(i,!!s.multiple,s.multiple?[]:"",!1))}i[ts]=s}catch(m){hc(e,e.return,m)}}break;case 6:if(nu(t,e),iu(e),4&r){if(null===e.stateNode)throw Error(K(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(m){hc(e,e.return,m)}}break;case 3:if(nu(t,e),iu(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{xn(t.containerInfo)}catch(m){hc(e,e.return,m)}break;case 4:default:nu(t,e),iu(e);break;case 13:nu(t,e),iu(e),8192&(i=e.child).flags&&(s=null!==i.memoizedState,i.stateNode.isHidden=s,!s||null!==i.alternate&&null!==i.alternate.memoizedState||(Nu=Vt())),4&r&&tu(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(Ul=(u=Ul)||c,nu(t,e),Ul=u):nu(t,e),iu(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&1&e.mode)for(Vl=e,c=e.child;null!==c;){for(h=Vl=c;null!==Vl;){switch(f=(d=Vl).child,d.tag){case 0:case 11:case 14:case 15:$l(4,d,d.return);break;case 1:zl(d,d.return);var p=d.stateNode;if("function"==typeof p.componentWillUnmount){r=d,n=d.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(m){hc(r,n,m)}}break;case 5:zl(d,d.return);break;case 22:if(null!==d.memoizedState){lu(h);continue}}null!==f?(f.return=d,Vl=f):lu(h)}c=c.sibling}e:for(c=null,h=e;;){if(5===h.tag){if(null===c){c=h;try{i=h.stateNode,u?"function"==typeof(s=i.style).setProperty?s.setProperty("display","none","important"):s.display="none":(a=h.stateNode,o=null!=(l=h.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,a.style.display=rt("display",o))}catch(m){hc(e,e.return,m)}}}else if(6===h.tag){if(null===c)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(m){hc(e,e.return,m)}}else if((22!==h.tag&&23!==h.tag||null===h.memoizedState||h===e)&&null!==h.child){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;null===h.sibling;){if(null===h.return||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:nu(t,e),iu(e),4&r&&tu(e);case 21:}}function iu(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(Kl(n)){var r=n;break e}n=n.return}throw Error(K(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(et(i,""),r.flags&=-33),Yl(e,Gl(e),i);break;case 3:case 4:var s=r.stateNode.containerInfo;Ql(e,Gl(e),s);break;default:throw Error(K(161))}}catch(o){hc(e,e.return,o)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function su(e,t,n){Vl=e,ou(e)}function ou(e,t,n){for(var r=!!(1&e.mode);null!==Vl;){var i=Vl,s=i.child;if(22===i.tag&&r){var o=null!==i.memoizedState||Ml;if(!o){var a=i.alternate,l=null!==a&&null!==a.memoizedState||Ul;a=Ml;var u=Ul;if(Ml=o,(Ul=l)&&!u)for(Vl=i;null!==Vl;)l=(o=Vl).child,22===o.tag&&null!==o.memoizedState?uu(i):null!==l?(l.return=o,Vl=l):uu(i);for(;null!==s;)Vl=s,ou(s),s=s.sibling;Vl=i,Ml=a,Ul=u}au(e)}else 8772&i.subtreeFlags&&null!==s?(s.return=i,Vl=s):au(e)}}function au(e){for(;null!==Vl;){var t=Vl;if(8772&t.flags){var n=t.alternate;try{if(8772&t.flags)switch(t.tag){case 0:case 11:case 15:Ul||ql(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Ul)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:qa(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;null!==s&&Do(t,s,r);break;case 3:var o=t.updateQueue;if(null!==o){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Do(t,o,n)}break;case 5:var a=t.stateNode;if(null===n&&4&t.flags){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var h=c.dehydrated;null!==h&&xn(h)}}}break;default:throw Error(K(163))}Ul||512&t.flags&&Hl(t)}catch(d){hc(t,t.return,d)}}if(t===e){Vl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Vl=n;break}Vl=t.return}}function lu(e){for(;null!==Vl;){var t=Vl;if(t===e){Vl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Vl=n;break}Vl=t.return}}function uu(e){for(;null!==Vl;){var t=Vl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ql(4,t)}catch(l){hc(t,n,l)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){hc(t,i,l)}}var s=t.return;try{Hl(t)}catch(l){hc(t,s,l)}break;case 5:var o=t.return;try{Hl(t)}catch(l){hc(t,o,l)}}}catch(l){hc(t,t.return,l)}if(t===e){Vl=null;break}var a=t.sibling;if(null!==a){a.return=t.return,Vl=a;break}Vl=t.return}}var cu,hu=Math.ceil,du=le.ReactCurrentDispatcher,fu=le.ReactCurrentOwner,pu=le.ReactCurrentBatchConfig,mu=0,gu=null,yu=null,vu=0,wu=0,bu=ds(0),_u=0,Eu=null,ku=0,Tu=0,Su=0,Iu=null,Cu=null,Nu=0,Ru=1/0,Au=null,xu=!1,Du=null,Pu=null,Ou=!1,Lu=null,Mu=0,Uu=0,Fu=null,Vu=-1,zu=0;function Bu(){return 6&mu?Vt():-1!==Vu?Vu:Vu=Vt()}function ju(e){return 1&e.mode?2&mu&&0!==vu?vu&-vu:null!==ro.transition?(0===zu&&(zu=rn()),zu):0!==(e=ln)?e:e=void 0===(e=window.event)?16:Vn(e.type):1}function $u(e,t,n,r){if(50<Uu)throw Uu=0,Fu=null,Error(K(185));on(e,n,r),2&mu&&e===gu||(e===gu&&(!(2&mu)&&(Tu|=n),4===_u&&Gu(e,vu)),qu(e,r),1===n&&0===mu&&!(1&t.mode)&&(Ru=Vt()+500,Cs&&As()))}function qu(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Gt(s),a=1<<o,l=i[o];-1===l?a&n&&!(a&r)||(i[o]=tn(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}(e,t);var r=en(e,e===gu?vu:0);if(0===r)null!==n&&Mt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Mt(n),1===t)0===e.tag?function(e){Cs=!0,Rs(e)}(Qu.bind(null,e)):Rs(Qu.bind(null,e)),Gi((function(){!(6&mu)&&As()})),n=null;else{switch(un(r)){case 1:n=Bt;break;case 4:n=jt;break;case 16:default:n=$t;break;case 536870912:n=Ht}n=gc(n,Hu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hu(e,t){if(Vu=-1,zu=0,6&mu)throw Error(K(327));var n=e.callbackNode;if(uc()&&e.callbackNode!==n)return null;var r=en(e,e===gu?vu:0);if(0===r)return null;if(30&r||r&e.expiredLanes||t)t=rc(e,r);else{t=r;var i=mu;mu|=2;var s=tc();for(gu===e&&vu===t||(Au=null,Ru=Vt()+500,Zu(e,t));;)try{sc();break}catch(a){ec(e,a)}mo(),du.current=s,mu=i,null!==yu?t=0:(gu=null,vu=0,t=_u)}if(0!==t){if(2===t&&(0!==(i=nn(e))&&(r=i,t=Wu(e,i))),1===t)throw n=Eu,Zu(e,0),Gu(e,r),qu(e,Vt()),n;if(6===t)Gu(e,r);else{if(i=e.current.alternate,!(30&r||function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Qr(s(),i))return!1}catch(o){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)||(t=rc(e,r),2===t&&(s=nn(e),0!==s&&(r=s,t=Wu(e,s))),1!==t)))throw n=Eu,Zu(e,0),Gu(e,r),qu(e,Vt()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(K(345));case 2:case 5:lc(e,Cu,Au);break;case 3:if(Gu(e,r),(130023424&r)===r&&10<(t=Nu+500-Vt())){if(0!==en(e,0))break;if(((i=e.suspendedLanes)&r)!==r){Bu(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Hi(lc.bind(null,e,Cu,Au),t);break}lc(e,Cu,Au);break;case 4:if(Gu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Gt(r);s=1<<o,(o=t[o])>i&&(i=o),r&=~s}if(r=i,10<(r=(120>(r=Vt()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hu(r/1960))-r)){e.timeoutHandle=Hi(lc.bind(null,e,Cu,Au),r);break}lc(e,Cu,Au);break;default:throw Error(K(329))}}}return qu(e,Vt()),e.callbackNode===n?Hu.bind(null,e):null}function Wu(e,t){var n=Iu;return e.current.memoizedState.isDehydrated&&(Zu(e,t).flags|=256),2!==(e=rc(e,t))&&(t=Cu,Cu=n,null!==t&&Ku(t)),e}function Ku(e){null===Cu?Cu=e:Cu.push.apply(Cu,e)}function Gu(e,t){for(t&=~Su,t&=~Tu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Gt(t),r=1<<n;e[n]=-1,t&=~r}}function Qu(e){if(6&mu)throw Error(K(327));uc();var t=en(e,0);if(!(1&t))return qu(e,Vt()),null;var n=rc(e,t);if(0!==e.tag&&2===n){var r=nn(e);0!==r&&(t=r,n=Wu(e,r))}if(1===n)throw n=Eu,Zu(e,0),Gu(e,t),qu(e,Vt()),n;if(6===n)throw Error(K(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,lc(e,Cu,Au),qu(e,Vt()),null}function Yu(e,t){var n=mu;mu|=1;try{return e(t)}finally{0===(mu=n)&&(Ru=Vt()+500,Cs&&As())}}function Xu(e){null!==Lu&&0===Lu.tag&&!(6&mu)&&uc();var t=mu;mu|=1;var n=pu.transition,r=ln;try{if(pu.transition=null,ln=1,e)return e()}finally{ln=r,pu.transition=n,!(6&(mu=t))&&As()}}function Ju(){wu=bu.current,fs(bu)}function Zu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,Wi(n)),null!==yu)for(n=yu.return;null!==n;){var r=n;switch($s(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&_s();break;case 3:Vo(),fs(ys),fs(gs),Ho();break;case 5:Bo(r);break;case 4:Vo();break;case 13:case 19:fs(jo);break;case 10:go(r.type._context);break;case 22:case 23:Ju()}n=n.return}if(gu=e,yu=e=bc(e.current,null),vu=wu=t,_u=0,Eu=null,Su=Tu=ku=0,Cu=Iu=null,null!==bo){for(t=0;t<bo.length;t++)if(null!==(r=(n=bo[t]).interleaved)){n.interleaved=null;var i=r.next,s=n.pending;if(null!==s){var o=s.next;s.next=i,r.next=o}n.pending=r}bo=null}return e}function ec(e,t){for(;;){var n=yu;try{if(mo(),Wo.current=za,Jo){for(var r=Qo.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}Jo=!1}if(Go=0,Xo=Yo=Qo=null,Zo=!1,ea=0,fu.current=null,null===n||null===n.return){_u=1,Eu=t,yu=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=vu,a.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=a,h=c.tag;if(!(1&c.mode||0!==h&&11!==h&&15!==h)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=rl(o);if(null!==f){f.flags&=-257,il(f,o,a,0,t),1&f.mode&&nl(s,u,t),l=u;var p=(t=f).updateQueue;if(null===p){var m=new Set;m.add(l),t.updateQueue=m}else p.add(l);break e}if(!(1&t)){nl(s,u,t),nc();break e}l=Error(K(426))}else if(Ws&&1&a.mode){var g=rl(o);if(null!==g){!(65536&g.flags)&&(g.flags|=256),il(g,o,a,0,t),no(Xa(l,a));break e}}s=l=Xa(l,a),4!==_u&&(_u=2),null===Iu?Iu=[s]:Iu.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t,Ao(s,el(0,l,t));break e;case 1:a=l;var y=s.type,v=s.stateNode;if(!(128&s.flags||"function"!=typeof y.getDerivedStateFromError&&(null===v||"function"!=typeof v.componentDidCatch||null!==Pu&&Pu.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t,Ao(s,tl(s,a,t));break e}}s=s.return}while(null!==s)}ac(n)}catch(w){t=w,yu===n&&null!==n&&(yu=n=n.return);continue}break}}function tc(){var e=du.current;return du.current=za,null===e?za:e}function nc(){0!==_u&&3!==_u&&2!==_u||(_u=4),null===gu||!(268435455&ku)&&!(268435455&Tu)||Gu(gu,vu)}function rc(e,t){var n=mu;mu|=2;var r=tc();for(gu===e&&vu===t||(Au=null,Zu(e,t));;)try{ic();break}catch(i){ec(e,i)}if(mo(),mu=n,du.current=r,null!==yu)throw Error(K(261));return gu=null,vu=0,_u}function ic(){for(;null!==yu;)oc(yu)}function sc(){for(;null!==yu&&!Ut();)oc(yu)}function oc(e){var t=cu(e.alternate,e,wu);e.memoizedProps=e.pendingProps,null===t?ac(e):yu=t,fu.current=null}function ac(e){var t=e;do{var n=t.alternate;if(e=t.return,32768&t.flags){if(null!==(n=Ll(n,t)))return n.flags&=32767,void(yu=n);if(null===e)return _u=6,void(yu=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}else if(null!==(n=Ol(n,t,wu)))return void(yu=n);if(null!==(t=t.sibling))return void(yu=t);yu=t=e}while(null!==t);0===_u&&(_u=5)}function lc(e,t,n){var r=ln,i=pu.transition;try{pu.transition=null,ln=1,function(e,t,n,r){do{uc()}while(null!==Lu);if(6&mu)throw Error(K(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(K(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Gt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}(e,s),e===gu&&(yu=gu=null,vu=0),!(2064&n.subtreeFlags)&&!(2064&n.flags)||Ou||(Ou=!0,gc($t,(function(){return uc(),null}))),s=!!(15990&n.flags),!!(15990&n.subtreeFlags)||s){s=pu.transition,pu.transition=null;var o=ln;ln=1;var a=mu;mu|=4,fu.current=null,function(e,t){if(ji=Pn,ti(e=ei())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch(b){n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=e,d=null;t:for(;;){for(var f;h!==n||0!==i&&3!==h.nodeType||(a=o+i),h!==s||0!==r&&3!==h.nodeType||(l=o+r),3===h.nodeType&&(o+=h.nodeValue.length),null!==(f=h.firstChild);)d=h,h=f;for(;;){if(h===e)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),null!==(f=h.nextSibling))break;d=(h=d).parentNode}h=f}n=-1===a||-1===l?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($i={focusedElem:e,selectionRange:n},Pn=!1,Vl=t;null!==Vl;)if(e=(t=Vl).child,1028&t.subtreeFlags&&null!==e)e.return=t,Vl=e;else for(;null!==Vl;){t=Vl;try{var p=t.alternate;if(1024&t.flags)switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==p){var m=p.memoizedProps,g=p.memoizedState,y=t.stateNode,v=y.getSnapshotBeforeUpdate(t.elementType===t.type?m:qa(t.type,m),g);y.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(K(163))}}catch(b){hc(t,t.return,b)}if(null!==(e=t.sibling)){e.return=t.return,Vl=e;break}Vl=t.return}p=jl,jl=!1}(e,n),ru(n,e),ni($i),Pn=!!ji,$i=ji=null,e.current=n,su(n),Ft(),mu=a,ln=o,pu.transition=s}else e.current=n;if(Ou&&(Ou=!1,Lu=e,Mu=i),s=e.pendingLanes,0===s&&(Pu=null),function(e){if(Kt&&"function"==typeof Kt.onCommitFiberRoot)try{Kt.onCommitFiberRoot(Wt,e,void 0,!(128&~e.current.flags))}catch(t){}}(n.stateNode),qu(e,Vt()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xu)throw xu=!1,e=Du,Du=null,e;!!(1&Mu)&&0!==e.tag&&uc(),s=e.pendingLanes,1&s?e===Fu?Uu++:(Uu=0,Fu=e):Uu=0,As()}(e,t,n,r)}finally{pu.transition=i,ln=r}return null}function uc(){if(null!==Lu){var e=un(Mu),t=pu.transition,n=ln;try{if(pu.transition=null,ln=16>e?16:e,null===Lu)var r=!1;else{if(e=Lu,Lu=null,Mu=0,6&mu)throw Error(K(331));var i=mu;for(mu|=4,Vl=e.current;null!==Vl;){var s=Vl,o=s.child;if(16&Vl.flags){var a=s.deletions;if(null!==a){for(var l=0;l<a.length;l++){var u=a[l];for(Vl=u;null!==Vl;){var c=Vl;switch(c.tag){case 0:case 11:case 15:$l(8,c,s)}var h=c.child;if(null!==h)h.return=c,Vl=h;else for(;null!==Vl;){var d=(c=Vl).sibling,f=c.return;if(Wl(c),c===u){Vl=null;break}if(null!==d){d.return=f,Vl=d;break}Vl=f}}}var p=s.alternate;if(null!==p){var m=p.child;if(null!==m){p.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}Vl=s}}if(2064&s.subtreeFlags&&null!==o)o.return=s,Vl=o;else e:for(;null!==Vl;){if(2048&(s=Vl).flags)switch(s.tag){case 0:case 11:case 15:$l(9,s,s.return)}var y=s.sibling;if(null!==y){y.return=s.return,Vl=y;break e}Vl=s.return}}var v=e.current;for(Vl=v;null!==Vl;){var w=(o=Vl).child;if(2064&o.subtreeFlags&&null!==w)w.return=o,Vl=w;else e:for(o=v;null!==Vl;){if(2048&(a=Vl).flags)try{switch(a.tag){case 0:case 11:case 15:ql(9,a)}}catch(_){hc(a,a.return,_)}if(a===o){Vl=null;break e}var b=a.sibling;if(null!==b){b.return=a.return,Vl=b;break e}Vl=a.return}}if(mu=i,As(),Kt&&"function"==typeof Kt.onPostCommitFiberRoot)try{Kt.onPostCommitFiberRoot(Wt,e)}catch(_){}r=!0}return r}finally{ln=n,pu.transition=t}}return!1}function cc(e,t,n){e=No(e,t=el(0,t=Xa(n,t),1),1),t=Bu(),null!==e&&(on(e,1,t),qu(e,t))}function hc(e,t,n){if(3===e.tag)cc(e,e,n);else for(;null!==t;){if(3===t.tag){cc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Pu||!Pu.has(r))){t=No(t,e=tl(t,e=Xa(n,e),1),1),e=Bu(),null!==t&&(on(t,1,e),qu(t,e));break}}t=t.return}}function dc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=Bu(),e.pingedLanes|=e.suspendedLanes&n,gu===e&&(vu&n)===n&&(4===_u||3===_u&&(130023424&vu)===vu&&500>Vt()-Nu?Zu(e,0):Su|=n),qu(e,t)}function fc(e,t){0===t&&(1&e.mode?(t=Jt,!(130023424&(Jt<<=1))&&(Jt=4194304)):t=1);var n=Bu();null!==(e=ko(e,t))&&(on(e,t,n),qu(e,n))}function pc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),fc(e,n)}function mc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(K(314))}null!==r&&r.delete(t),fc(e,n)}function gc(e,t){return Lt(e,t)}function yc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vc(e,t,n,r){return new yc(e,t,n,r)}function wc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function bc(e,t){var n=e.alternate;return null===n?((n=vc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _c(e,t,n,r,i,s){var o=2;if(r=e,"function"==typeof e)wc(e)&&(o=1);else if("string"==typeof e)o=5;else e:switch(e){case he:return Ec(n.children,i,s,t);case de:o=8,i|=8;break;case fe:return(e=vc(12,n,t,2|i)).elementType=fe,e.lanes=s,e;case ye:return(e=vc(13,n,t,i)).elementType=ye,e.lanes=s,e;case ve:return(e=vc(19,n,t,i)).elementType=ve,e.lanes=s,e;case _e:return kc(n,i,s,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case pe:o=10;break e;case me:o=9;break e;case ge:o=11;break e;case we:o=14;break e;case be:o=16,r=null;break e}throw Error(K(130,null==e?e:typeof e,""))}return(t=vc(o,n,t,i)).elementType=e,t.type=r,t.lanes=s,t}function Ec(e,t,n,r){return(e=vc(7,e,r,t)).lanes=n,e}function kc(e,t,n,r){return(e=vc(22,e,r,t)).elementType=_e,e.lanes=n,e.stateNode={isHidden:!1},e}function Tc(e,t,n){return(e=vc(6,e,null,t)).lanes=n,e}function Sc(e,t,n){return(t=vc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ic(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sn(0),this.expirationTimes=sn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sn(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cc(e,t,n,r,i,s,o,a,l){return e=new Ic(e,t,n,a,l),1===t?(t=1,!0===s&&(t|=8)):t=0,s=vc(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},So(s),e}function Nc(e){if(!e)return ms;e:{if(At(e=e._reactInternals)!==e||1!==e.tag)throw Error(K(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(bs(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(K(171))}if(1===e.tag){var n=e.type;if(bs(n))return ks(e,n,t)}return t}function Rc(e,t,n,r,i,s,o,a,l){return(e=Cc(n,r,!0,e,0,s,0,a,l)).context=Nc(null),n=e.current,(s=Co(r=Bu(),i=ju(n))).callback=null!=t?t:null,No(n,s,i),e.current.lanes=i,on(e,i,r),qu(e,r),e}function Ac(e,t,n,r){var i=t.current,s=Bu(),o=ju(i);return n=Nc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Co(s,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=No(i,t,o))&&($u(e,i,o,s),Ro(e,i,o)),o}function xc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Dc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Pc(e,t){Dc(e,t),(e=e.alternate)&&Dc(e,t)}cu=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||ys.current)ol=!0;else{if(!(e.lanes&n||128&t.flags))return ol=!1,function(e,t,n){switch(t.tag){case 3:gl(t),to();break;case 5:zo(t);break;case 1:bs(t.type)&&Ts(t);break;case 4:Fo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ps(co,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(ps(jo,1&jo.current),t.flags|=128,null):n&t.child.childLanes?Tl(e,t,n):(ps(jo,1&jo.current),null!==(e=xl(e,t,n))?e.sibling:null);ps(jo,1&jo.current);break;case 19:if(r=!!(n&t.childLanes),128&e.flags){if(r)return Rl(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),ps(jo,jo.current),r)break;return null;case 22:case 23:return t.lanes=0,hl(e,t,n)}return xl(e,t,n)}(e,t,n);ol=!!(131072&e.flags)}else ol=!1,Ws&&1048576&t.flags&&Bs(t,Os,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Al(e,t),e=t.pendingProps;var i=ws(t,gs.current);vo(t,n),i=ia(null,t,r,e,i,n);var s=sa();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,bs(r)?(s=!0,Ts(t)):s=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,So(t),i.updater=Wa,t.stateNode=i,i._reactInternals=t,Ya(t,r,e,n),t=ml(null,t,r,!0,s,n)):(t.tag=0,Ws&&s&&js(t),al(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Al(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return wc(e)?1:0;if(null!=e){if((e=e.$$typeof)===ge)return 11;if(e===we)return 14}return 2}(r),e=qa(r,e),i){case 0:t=fl(null,t,r,e,n);break e;case 1:t=pl(null,t,r,e,n);break e;case 11:t=ll(null,t,r,e,n);break e;case 14:t=ul(null,t,r,qa(r.type,e),n);break e}throw Error(K(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,fl(e,t,r,i=t.elementType===r?i:qa(r,i),n);case 1:return r=t.type,i=t.pendingProps,pl(e,t,r,i=t.elementType===r?i:qa(r,i),n);case 3:e:{if(gl(t),null===e)throw Error(K(387));r=t.pendingProps,i=(s=t.memoizedState).element,Io(e,t),xo(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated){if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,256&t.flags){t=yl(e,t,r,n,i=Xa(Error(K(423)),t));break e}if(r!==i){t=yl(e,t,r,n,i=Xa(Error(K(424)),t));break e}for(Hs=Xi(t.stateNode.containerInfo.firstChild),qs=t,Ws=!0,Ks=null,n=uo(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(to(),r===i){t=xl(e,t,n);break e}al(e,t,r,n)}t=t.child}return t;case 5:return zo(t),null===e&&Xs(t),r=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,o=i.children,qi(r,i)?o=null:null!==s&&qi(r,s)&&(t.flags|=32),dl(e,t),al(e,t,o,n),t.child;case 6:return null===e&&Xs(t),null;case 13:return Tl(e,t,n);case 4:return Fo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=lo(t,null,r,n):al(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,ll(e,t,r,i=t.elementType===r?i:qa(r,i),n);case 7:return al(e,t,t.pendingProps,n),t.child;case 8:case 12:return al(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,ps(co,r._currentValue),r._currentValue=o,null!==s)if(Qr(s.value,o)){if(s.children===i.children&&!ys.current){t=xl(e,t,n);break e}}else for(null!==(s=t.child)&&(s.return=t);null!==s;){var a=s.dependencies;if(null!==a){o=s.child;for(var l=a.firstContext;null!==l;){if(l.context===r){if(1===s.tag){(l=Co(-1,n&-n)).tag=2;var u=s.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),yo(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(10===s.tag)o=s.type===t.type?null:s.child;else if(18===s.tag){if(null===(o=s.return))throw Error(K(341));o.lanes|=n,null!==(a=o.alternate)&&(a.lanes|=n),yo(o,n,t),o=s.sibling}else o=s.child;if(null!==o)o.return=s;else for(o=s;null!==o;){if(o===t){o=null;break}if(null!==(s=o.sibling)){s.return=o.return,o=s;break}o=o.return}s=o}al(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,vo(t,n),r=r(i=wo(i)),t.flags|=1,al(e,t,r,n),t.child;case 14:return i=qa(r=t.type,t.pendingProps),ul(e,t,r,i=qa(r.type,i),n);case 15:return cl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qa(r,i),Al(e,t),t.tag=1,bs(r)?(e=!0,Ts(t)):e=!1,vo(t,n),Ga(t,r,i),Ya(t,r,i,n),ml(null,t,r,!0,e,n);case 19:return Rl(e,t,n);case 22:return hl(e,t,n)}throw Error(K(156,t.tag))};var Oc="function"==typeof reportError?reportError:function(e){};function Lc(e){this._internalRoot=e}function Mc(e){this._internalRoot=e}function Uc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Fc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Vc(){}function zc(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if("function"==typeof i){var a=i;i=function(){var e=xc(o);a.call(e)}}Ac(t,o,e,i)}else o=function(e,t,n,r,i){if(i){if("function"==typeof r){var s=r;r=function(){var e=xc(o);s.call(e)}}var o=Rc(t,r,e,0,null,!1,0,"",Vc);return e._reactRootContainer=o,e[ns]=o.current,Ai(8===e.nodeType?e.parentNode:e),Xu(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var a=r;r=function(){var e=xc(l);a.call(e)}}var l=Cc(e,0,!1,null,0,!1,0,"",Vc);return e._reactRootContainer=l,e[ns]=l.current,Ai(8===e.nodeType?e.parentNode:e),Xu((function(){Ac(t,l,n,r)})),l}(n,t,e,i,r);return xc(o)}Mc.prototype.render=Lc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(K(409));Ac(e,t,null,null)},Mc.prototype.unmount=Lc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Xu((function(){Ac(null,e,null,null)})),t[ns]=null}},Mc.prototype.unstable_scheduleHydration=function(e){if(e){var t=fn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<En.length&&0!==t&&t<En[n].priority;n++);En.splice(n,0,e),0===n&&In(e)}},cn=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Zt(t.pendingLanes);0!==n&&(an(t,1|n),qu(t,Vt()),!(6&mu)&&(Ru=Vt()+500,As()))}break;case 13:Xu((function(){var t=ko(e,1);if(null!==t){var n=Bu();$u(t,e,1,n)}})),Pc(e,1)}},hn=function(e){if(13===e.tag){var t=ko(e,134217728);if(null!==t)$u(t,e,134217728,Bu());Pc(e,134217728)}},dn=function(e){if(13===e.tag){var t=ju(e),n=ko(e,t);if(null!==n)$u(n,e,t,Bu());Pc(e,t)}},fn=function(){return ln},pn=function(e,t){var n=ln;try{return ln=e,t()}finally{ln=n}},ct=function(e,t,n){switch(t){case"input":if(ze(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=us(r);if(!i)throw Error(K(90));Le(r),ze(r,i)}}}break;case"textarea":Ke(e,n);break;case"select":null!=(t=n.value)&&qe(e,!!n.multiple,t,!1)}},gt=Yu,yt=Xu;var Bc={usingClientEntryPoint:!1,Events:[as,ls,us,pt,mt,Yu]},jc={findFiberByHostInstance:os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$c={bundleType:jc.bundleType,version:jc.version,rendererPackageName:jc.rendererPackageName,rendererConfig:jc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Pt(e))?null:e.stateNode},findFiberByHostInstance:jc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qc.isDisabled&&qc.supportsFiber)try{Wt=qc.inject($c),Kt=qc}catch(Je){}}B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bc,B.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Uc(t))throw Error(K(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ce,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},B.createRoot=function(e,t){if(!Uc(e))throw Error(K(299));var n=!1,r="",i=Oc;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Cc(e,1,!1,null,0,n,0,r,i),e[ns]=t.current,Ai(8===e.nodeType?e.parentNode:e),new Lc(t)},B.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(K(188));throw e=Object.keys(e).join(","),Error(K(268,e))}return e=null===(e=Pt(t))?null:e.stateNode},B.flushSync=function(e){return Xu(e)},B.hydrate=function(e,t,n){if(!Fc(t))throw Error(K(200));return zc(null,e,t,!0,n)},B.hydrateRoot=function(e,t,n){if(!Uc(e))throw Error(K(405));var r=null!=n&&n.hydratedSources||null,i=!1,s="",o=Oc;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(s=n.identifierPrefix),void 0!==n.onRecoverableError&&(o=n.onRecoverableError)),t=Rc(t,null,e,1,null!=n?n:null,i,0,s,o),e[ns]=t.current,Ai(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Mc(t)},B.render=function(e,t,n){if(!Fc(t))throw Error(K(200));return zc(null,e,t,!1,n)},B.unmountComponentAtNode=function(e){if(!Fc(e))throw Error(K(40));return!!e._reactRootContainer&&(Xu((function(){zc(null,null,e,!1,(function(){e._reactRootContainer=null,e[ns]=null}))})),!0)},B.unstable_batchedUpdates=Yu,B.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fc(n))throw Error(K(200));if(null==e||void 0===e._reactInternals)throw Error(K(38));return zc(e,t,n,!1,r)},B.version="18.3.1-next-f1338f8080-20240426",function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){}}(),z.exports=B;var Hc=z.exports,Wc={};Object.defineProperty(Wc,"__esModule",{value:!0}),Wc.parse=function(e,t){const n=new Jc,r=e.length;if(r<2)return n;const i=(null==t?void 0:t.decode)||th;let s=0;do{const t=e.indexOf("=",s);if(-1===t)break;const o=e.indexOf(";",s),a=-1===o?r:o;if(t>a){s=e.lastIndexOf(";",t-1)+1;continue}const l=Zc(e,s,t),u=eh(e,t,l),c=e.slice(l,u);if(void 0===n[c]){let r=Zc(e,t+1,a),s=eh(e,a,r);const o=i(e.slice(r,s));n[c]=o}s=a+1}while(s<r);return n},Wc.serialize=function(e,t,n){const r=(null==n?void 0:n.encode)||encodeURIComponent;if(!Kc.test(e))throw new TypeError(`argument name is invalid: ${e}`);const i=r(t);if(!Gc.test(i))throw new TypeError(`argument val is invalid: ${t}`);let s=e+"="+i;if(!n)return s;if(void 0!==n.maxAge){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);s+="; Max-Age="+n.maxAge}if(n.domain){if(!Qc.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);s+="; Domain="+n.domain}if(n.path){if(!Yc.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);s+="; Path="+n.path}if(n.expires){if(!function(e){return"[object Date]"===Xc.call(e)}
/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);s+="; Expires="+n.expires.toUTCString()}n.httpOnly&&(s+="; HttpOnly");n.secure&&(s+="; Secure");n.partitioned&&(s+="; Partitioned");if(n.priority){switch("string"==typeof n.priority?n.priority.toLowerCase():void 0){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}}if(n.sameSite){switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"none":s+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}}return s};const Kc=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,Gc=/^[\u0021-\u003A\u003C-\u007E]*$/,Qc=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,Yc=/^[\u0020-\u003A\u003D-\u007E]*$/,Xc=Object.prototype.toString,Jc=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function Zc(e,t,n){do{const n=e.charCodeAt(t);if(32!==n&&9!==n)return t}while(++t<n);return n}function eh(e,t,n){for(;t>n;){const n=e.charCodeAt(--t);if(32!==n&&9!==n)return t+1}return n}function th(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}var nh="popstate";function rh(e={}){return function(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a="POP",l=null,u=c();null==u&&(u=0,o.replaceState({...o.state,idx:u},""));function c(){return(o.state||{idx:null}).idx}function h(){a="POP";let e=c(),t=null==e?null:e-u;u=e,l&&l({action:a,location:m.location,delta:t})}function d(e,t){a="PUSH";let n=ah(m.location,e,t);u=c()+1;let r=oh(n,u),h=m.createHref(n);try{o.pushState(r,"",h)}catch(d){if(d instanceof DOMException&&"DataCloneError"===d.name)throw d;i.location.assign(h)}s&&l&&l({action:a,location:m.location,delta:1})}function f(e,t){a="REPLACE";let n=ah(m.location,e,t);u=c();let r=oh(n,u),i=m.createHref(n);o.replaceState(r,"",i),s&&l&&l({action:a,location:m.location,delta:0})}function p(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"==typeof e?e:lh(e);return n=n.replace(/ $/,"%20"),ih(t,`No window.location.(origin|href) available to create URL for href: ${n}`),new URL(n,t)}let m={get action(){return a},get location(){return e(i,o)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(nh,h),l=e,()=>{i.removeEventListener(nh,h),l=null}},createHref:e=>t(i,e),createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:d,replace:f,go:e=>o.go(e)};return m}((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return ah("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:lh(t)}),0,e)}function ih(e,t){if(!1===e||null==e)throw new Error(t)}function sh(e,t){if(!e)try{throw new Error(t)}catch(n){}}function oh(e,t){return{usr:e.state,key:e.key,idx:t}}function ah(e,t,n=null,r){return{pathname:"string"==typeof e?e:e.pathname,search:"",hash:"",..."string"==typeof t?uh(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function lh({pathname:e="/",search:t="",hash:n=""}){return t&&"?"!==t&&(e+="?"===t.charAt(0)?t:"?"+t),n&&"#"!==n&&(e+="#"===n.charAt(0)?n:"#"+n),e}function uh(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ch(e,t,n="/"){return function(e,t,n,r){let i="string"==typeof t?uh(t):t,s=Th(i.pathname||"/",n);if(null==s)return null;let o=hh(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let a=null;for(let l=0;null==a&&l<o.length;++l){let e=kh(s);a=_h(o[l],e,r)}return a}(e,t,n,!1)}function hh(e,t=[],n=[],r=""){let i=(e,i,s)=>{let o={relativePath:void 0===s?e.path||"":s,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};o.relativePath.startsWith("/")&&(ih(o.relativePath.startsWith(r),`Absolute route path "${o.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),o.relativePath=o.relativePath.slice(r.length));let a=Nh([r,o.relativePath]),l=n.concat(o);e.children&&e.children.length>0&&(ih(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${a}".`),hh(e.children,t,l,a)),(null!=e.path||e.index)&&t.push({path:a,score:bh(a,e.index),routesMeta:l})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&(null==(n=e.path)?void 0:n.includes("?")))for(let r of dh(e.path))i(e,t,r);else i(e,t)})),t}function dh(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(0===r.length)return i?[s,""]:[s];let o=dh(r.join("/")),a=[];return a.push(...o.map((e=>""===e?s:[s,e].join("/")))),i&&a.push(...o),a.map((t=>e.startsWith("/")&&""===t?"/":t))}var fh=/^:[\w-]+$/,ph=3,mh=2,gh=1,yh=10,vh=-2,wh=e=>"*"===e;function bh(e,t){let n=e.split("/"),r=n.length;return n.some(wh)&&(r+=vh),t&&(r+=mh),n.filter((e=>!wh(e))).reduce(((e,t)=>e+(fh.test(t)?ph:""===t?gh:yh)),r)}function _h(e,t,n=!1){let{routesMeta:r}=e,i={},s="/",o=[];for(let a=0;a<r.length;++a){let e=r[a],l=a===r.length-1,u="/"===s?t:t.slice(s.length)||"/",c=Eh({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},u),h=e.route;if(!c&&l&&n&&!r[r.length-1].route.index&&(c=Eh({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:Nh([s,c.pathname]),pathnameBase:Rh(Nh([s,c.pathnameBase])),route:h}),"/"!==c.pathnameBase&&(s=Nh([s,c.pathnameBase]))}return o}function Eh(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t=!1,n=!0){sh("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let s=new RegExp(i,t?void 0:"i");return[s,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce(((e,{paramName:t,isOptional:n},r)=>{if("*"===t){let e=a[r]||"";o=s.slice(0,s.length-e.length).replace(/(.)\/+$/,"$1")}const i=a[r];return e[t]=n&&!i?void 0:(i||"").replace(/%2F/g,"/"),e}),{}),pathname:s,pathnameBase:o,pattern:e}}function kh(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return sh(!1,`The URL path "${e}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Th(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function Sh(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ih(e){let t=function(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}(e);return t.map(((e,n)=>n===t.length-1?e.pathname:e.pathnameBase))}function Ch(e,t,n,r=!1){let i;"string"==typeof e?i=uh(e):(i={...e},ih(!i.pathname||!i.pathname.includes("?"),Sh("?","pathname","search",i)),ih(!i.pathname||!i.pathname.includes("#"),Sh("#","pathname","hash",i)),ih(!i.search||!i.search.includes("#"),Sh("#","search","hash",i)));let s,o=""===e||""===i.pathname,a=o?"/":i.pathname;if(null==a)s=n;else{let e=t.length-1;if(!r&&a.startsWith("..")){let t=a.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}s=e>=0?t[e]:"/"}let l=function(e,t="/"){let{pathname:n,search:r="",hash:i=""}="string"==typeof e?uh(e):e,s=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:s,search:Ah(r),hash:xh(i)}}(i,s),u=a&&"/"!==a&&a.endsWith("/"),c=(o||"."===a)&&n.endsWith("/");return l.pathname.endsWith("/")||!u&&!c||(l.pathname+="/"),l}var Nh=e=>e.join("/").replace(/\/\/+/g,"/"),Rh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ah=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",xh=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";var Dh=["POST","PUT","PATCH","DELETE"];new Set(Dh);var Ph=["GET",...Dh];new Set(Ph);var Oh=F.createContext(null);Oh.displayName="DataRouter";var Lh=F.createContext(null);Lh.displayName="DataRouterState";var Mh=F.createContext({isTransitioning:!1});Mh.displayName="ViewTransition",F.createContext(new Map).displayName="Fetchers",F.createContext(null).displayName="Await";var Uh=F.createContext(null);Uh.displayName="Navigation";var Fh=F.createContext(null);Fh.displayName="Location";var Vh=F.createContext({outlet:null,matches:[],isDataRoute:!1});Vh.displayName="Route";var zh=F.createContext(null);function Bh(){return null!=F.useContext(Fh)}function jh(){return ih(Bh(),"useLocation() may be used only in the context of a <Router> component."),F.useContext(Fh).location}zh.displayName="RouteError";var $h="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function qh(e){F.useContext(Uh).static||F.useLayoutEffect(e)}function Hh(){let{isDataRoute:e}=F.useContext(Vh);return e?function(){let{router:e}=function(e){let t=F.useContext(Oh);return ih(t,ed(e)),t}("useNavigate"),t=td("useNavigate"),n=F.useRef(!1);return qh((()=>{n.current=!0})),F.useCallback((async(r,i={})=>{sh(n.current,$h),n.current&&("number"==typeof r?e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))}),[e,t])}():function(){ih(Bh(),"useNavigate() may be used only in the context of a <Router> component.");let e=F.useContext(Oh),{basename:t,navigator:n}=F.useContext(Uh),{matches:r}=F.useContext(Vh),{pathname:i}=jh(),s=JSON.stringify(Ih(r)),o=F.useRef(!1);return qh((()=>{o.current=!0})),F.useCallback(((r,a={})=>{if(sh(o.current,$h),!o.current)return;if("number"==typeof r)return void n.go(r);let l=Ch(r,JSON.parse(s),i,"path"===a.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:Nh([t,l.pathname])),(a.replace?n.replace:n.push)(l,a.state,a)}),[t,n,s,i,e])}()}var Wh=F.createContext(null);function Kh(){let{matches:e}=F.useContext(Vh),t=e[e.length-1];return t?t.params:{}}function Gh(e,{relative:t}={}){let{matches:n}=F.useContext(Vh),{pathname:r}=jh(),i=JSON.stringify(Ih(n));return F.useMemo((()=>Ch(e,JSON.parse(i),r,"path"===t)),[e,i,r,t])}function Qh(e,t,n,r){var i;ih(Bh(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=F.useContext(Uh),{matches:o}=F.useContext(Vh),a=o[o.length-1],l=a?a.params:{},u=a?a.pathname:"/",c=a?a.pathnameBase:"/",h=a&&a.route;{let e=h&&h.path||"";rd(u,!h||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let d,f=jh();if(t){let e="string"==typeof t?uh(t):t;ih("/"===c||(null==(i=e.pathname)?void 0:i.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=f;let p=d.pathname||"/",m=p;if("/"!==c){let e=c.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(e.length).join("/")}let g=ch(e,{pathname:m});sh(h||null!=g,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),sh(null==g||void 0!==g[g.length-1].route.element||void 0!==g[g.length-1].route.Component||void 0!==g[g.length-1].route.lazy,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=function(e,t=[],n=null){if(null==e){if(!n)return null;if(n.errors)e=n.matches;else{if(0!==t.length||n.initialized||!(n.matches.length>0))return null;e=n.matches}}let r=e,i=null==n?void 0:n.errors;if(null!=i){let e=r.findIndex((e=>e.route.id&&void 0!==(null==i?void 0:i[e.route.id])));ih(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),r=r.slice(0,Math.min(r.length,e+1))}let s=!1,o=-1;if(n)for(let a=0;a<r.length;a++){let e=r[a];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(o=a),e.route.id){let{loaderData:t,errors:i}=n,a=e.route.loader&&!t.hasOwnProperty(e.route.id)&&(!i||void 0===i[e.route.id]);if(e.route.lazy||a){s=!0,r=o>=0?r.slice(0,o+1):[r[0]];break}}}return r.reduceRight(((e,a,l)=>{let u,c=!1,h=null,d=null;n&&(u=i&&a.route.id?i[a.route.id]:void 0,h=a.route.errorElement||Xh,s&&(o<0&&0===l?(rd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),c=!0,d=null):o===l&&(c=!0,d=a.route.hydrateFallbackElement||null)));let f=t.concat(r.slice(0,l+1)),p=()=>{let t;return t=u?h:c?d:a.route.Component?F.createElement(a.route.Component,null):a.route.element?a.route.element:e,F.createElement(Zh,{match:a,routeContext:{outlet:e,matches:f,isDataRoute:null!=n},children:t})};return n&&(a.route.ErrorBoundary||a.route.errorElement||0===l)?F.createElement(Jh,{location:n.location,revalidation:n.revalidation,component:h,error:u,children:p(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):p()}),null)}(g&&g.map((e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:Nh([c,s.encodeLocation?s.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:Nh([c,s.encodeLocation?s.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),o,n,r);return t&&y?F.createElement(Fh.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...d},navigationType:"POP"}},y):y}function Yh(){let e=function(){var e;let t=F.useContext(zh),n=function(e){let t=F.useContext(Lh);return ih(t,ed(e)),t}("useRouteError"),r=td("useRouteError");if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[r]}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},o=null;return o=F.createElement(F.Fragment,null,F.createElement("p",null,"💿 Hey developer 👋"),F.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",F.createElement("code",{style:s},"ErrorBoundary")," or"," ",F.createElement("code",{style:s},"errorElement")," prop on your route.")),F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},t),n?F.createElement("pre",{style:i},n):null,o)}var Xh=F.createElement(Yh,null),Jh=class extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){}render(){return void 0!==this.state.error?F.createElement(Vh.Provider,{value:this.props.routeContext},F.createElement(zh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Zh({routeContext:e,match:t,children:n}){let r=F.useContext(Oh);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),F.createElement(Vh.Provider,{value:e},n)}function ed(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function td(e){let t=function(e){let t=F.useContext(Vh);return ih(t,ed(e)),t}(e),n=t.matches[t.matches.length-1];return ih(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}var nd={};function rd(e,t,n){t||nd[e]||(nd[e]=!0,sh(!1,n))}function id({to:e,replace:t,state:n,relative:r}){ih(Bh(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=F.useContext(Uh);sh(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:s}=F.useContext(Vh),{pathname:o}=jh(),a=Hh(),l=Ch(e,Ih(s),o,"path"===r),u=JSON.stringify(l);return F.useEffect((()=>{a(JSON.parse(u),{replace:t,state:n,relative:r})}),[a,u,r,t,n]),null}function sd(e){return function(e){let t=F.useContext(Vh).outlet;return t?F.createElement(Wh.Provider,{value:e},t):t}(e.context)}function od(e){ih(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ad({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:s=!1}){ih(!Bh(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),a=F.useMemo((()=>({basename:o,navigator:i,static:s,future:{}})),[o,i,s]);"string"==typeof n&&(n=uh(n));let{pathname:l="/",search:u="",hash:c="",state:h=null,key:d="default"}=n,f=F.useMemo((()=>{let e=Th(l,o);return null==e?null:{location:{pathname:e,search:u,hash:c,state:h,key:d},navigationType:r}}),[o,l,u,c,h,d,r]);return sh(null!=f,`<Router basename="${o}"> is not able to match the URL "${l}${u}${c}" because it does not start with the basename, so the <Router> won't render anything.`),null==f?null:F.createElement(Uh.Provider,{value:a},F.createElement(Fh.Provider,{children:t,value:f}))}function ld({children:e,location:t}){return Qh(ud(e),t)}function ud(e,t=[]){let n=[];return F.Children.forEach(e,((e,r)=>{if(!F.isValidElement(e))return;let i=[...t,r];if(e.type===F.Fragment)return void n.push.apply(n,ud(e.props.children,i));ih(e.type===od,`[${"string"==typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ih(!e.props.index||!e.props.children,"An index route cannot have child routes.");let s={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(s.children=ud(e.props.children,i)),n.push(s)})),n}F.memo((function({routes:e,future:t,state:n}){return Qh(e,void 0,n,t)}));var cd="get",hd="application/x-www-form-urlencoded";function dd(e){return null!=e&&"string"==typeof e.tagName}var fd=null;var pd=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function md(e){return null==e||pd.has(e)?e:(sh(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${hd}"`),null)}function gd(e,t){let n,r,i,s,o;if(dd(a=e)&&"form"===a.tagName.toLowerCase()){let o=e.getAttribute("action");r=o?Th(o,t):null,n=e.getAttribute("method")||cd,i=md(e.getAttribute("enctype"))||hd,s=new FormData(e)}else if(function(e){return dd(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return dd(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let o=e.form;if(null==o)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let a=e.getAttribute("formaction")||o.getAttribute("action");if(r=a?Th(a,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||cd,i=md(e.getAttribute("formenctype"))||md(o.getAttribute("enctype"))||hd,s=new FormData(o,e),!function(){if(null===fd)try{new FormData(document.createElement("form"),0),fd=!1}catch(e){fd=!0}return fd}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";s.append(`${e}x`,"0"),s.append(`${e}y`,"0")}else t&&s.append(t,r)}}else{if(dd(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=cd,r=null,i=hd,o=e}var a;return s&&"text/plain"===i&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}function yd(e,t){if(!1===e||null==e)throw new Error(t)}function vd(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"==typeof e.imageSrcSet&&"string"==typeof e.imageSizes:"string"==typeof e.rel&&"string"==typeof e.href)}async function wd(e,t,n){return function(e,t){let n=new Set;return new Set(t),e.reduce(((e,t)=>{let r=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(t));return n.has(r)||(n.add(r),e.push({key:r,link:t})),e}),[])}((await Promise.all(e.map((async e=>{let r=t.routes[e.route.id];if(r){let e=await async function(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}(r,n);return e.links?e.links():[]}return[]})))).flat(1).filter(vd).filter((e=>"stylesheet"===e.rel||"preload"===e.rel)).map((e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"})))}function bd(e,t,n,r,i,s){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,a=(e,t)=>{var r;return n[t].pathname!==e.pathname||(null==(r=n[t].route.path)?void 0:r.endsWith("*"))&&n[t].params["*"]!==e.params["*"]};return"assets"===s?t.filter(((e,t)=>o(e,t)||a(e,t))):"data"===s?t.filter(((t,s)=>{var l;let u=r.routes[t.route.id];if(!u||!u.hasLoader)return!1;if(o(t,s)||a(t,s))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:(null==(l=n[0])?void 0:l.params)||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"==typeof r)return r}return!0})):[]}function _d(e,t){return n=e.map((e=>{let n=t.routes[e.route.id];if(!n)return[];let r=[n.module];return n.imports&&(r=r.concat(n.imports)),r})).flat(1),[...new Set(n)];var n}var Ed=F.createContext(void 0);function kd(){let e=F.useContext(Ed);return yd(e,"You must render this element inside a <HydratedRouter> element"),e}function Td(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Sd({page:e,...t}){let{router:n}=function(){let e=F.useContext(Oh);return yd(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}(),r=F.useMemo((()=>ch(n.routes,e,n.basename)),[n.routes,e,n.basename]);return r?F.createElement(Id,{page:e,matches:r,...t}):null}function Id({page:e,matches:t,...n}){let r=jh(),{manifest:i,routeModules:s}=kd(),{loaderData:o,matches:a}=function(){let e=F.useContext(Lh);return yd(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}(),l=F.useMemo((()=>bd(e,t,a,i,r,"data")),[e,t,a,i,r]),u=F.useMemo((()=>bd(e,t,a,i,r,"assets")),[e,t,a,i,r]),c=F.useMemo((()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,a=!1;if(t.forEach((e=>{var t;let r=i.routes[e.route.id];r&&r.hasLoader&&(!l.some((t=>t.route.id===e.route.id))&&e.route.id in o&&(null==(t=s[e.route.id])?void 0:t.shouldRevalidate)||r.hasClientLoader?a=!0:n.add(e.route.id))})),0===n.size)return[];let u=function(e){let t="string"==typeof e?new URL(e,"undefined"==typeof window?"server://singlefetch/":window.location.origin):e;return"/"===t.pathname?t.pathname="_root.data":t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}(e);return a&&n.size>0&&u.searchParams.set("_routes",t.filter((e=>n.has(e.route.id))).map((e=>e.route.id)).join(",")),[u.pathname+u.search]}),[o,r,i,l,t,e,s]),h=F.useMemo((()=>_d(u,i)),[u,i]),d=function(e){let{manifest:t,routeModules:n}=kd(),[r,i]=F.useState([]);return F.useEffect((()=>{let r=!1;return wd(e,t,n).then((e=>{r||i(e)})),()=>{r=!0}}),[e,t,n]),r}(u);return F.createElement(F.Fragment,null,c.map((e=>F.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...n}))),h.map((e=>F.createElement("link",{key:e,rel:"modulepreload",href:e,...n}))),d.map((({key:e,link:t})=>F.createElement("link",{key:e,...t}))))}function Cd(...e){return t=>{e.forEach((e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)}))}}Ed.displayName="FrameworkContext";var Nd="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;try{Nd&&(window.__reactRouterVersion="7.1.1")}catch(BC){}function Rd({basename:e,children:t,window:n}){let r=F.useRef();null==r.current&&(r.current=rh({window:n,v5Compat:!0}));let i=r.current,[s,o]=F.useState({action:i.action,location:i.location}),a=F.useCallback((e=>{F.startTransition((()=>o(e)))}),[o]);return F.useLayoutEffect((()=>i.listen(a)),[i,a]),F.createElement(ad,{basename:e,children:t,location:s.location,navigationType:s.action,navigator:i})}var Ad=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xd=F.forwardRef((function({onClick:e,discover:t="render",prefetch:n="none",relative:r,reloadDocument:i,replace:s,state:o,target:a,to:l,preventScrollReset:u,viewTransition:c,...h},d){let f,{basename:p}=F.useContext(Uh),m="string"==typeof l&&Ad.test(l),g=!1;if("string"==typeof l&&m&&(f=l,Nd))try{let e=new URL(window.location.href),t=l.startsWith("//")?new URL(e.protocol+l):new URL(l),n=Th(t.pathname,p);t.origin===e.origin&&null!=n?l=n+t.search+t.hash:g=!0}catch(BC){sh(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let y=function(e,{relative:t}={}){ih(Bh(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=F.useContext(Uh),{hash:i,pathname:s,search:o}=Gh(e,{relative:t}),a=s;return"/"!==n&&(a="/"===s?n:Nh([n,s])),r.createHref({pathname:a,search:o,hash:i})}(l,{relative:r}),[v,w,b]=function(e,t){let n=F.useContext(Ed),[r,i]=F.useState(!1),[s,o]=F.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:u,onMouseLeave:c,onTouchStart:h}=t,d=F.useRef(null);F.useEffect((()=>{if("render"===e&&o(!0),"viewport"===e){let e=new IntersectionObserver((e=>{e.forEach((e=>{o(e.isIntersecting)}))}),{threshold:.5});return d.current&&e.observe(d.current),()=>{e.disconnect()}}}),[e]),F.useEffect((()=>{if(r){let e=setTimeout((()=>{o(!0)}),100);return()=>{clearTimeout(e)}}}),[r]);let f=()=>{i(!0)},p=()=>{i(!1),o(!1)};return n?"intent"!==e?[s,d,{}]:[s,d,{onFocus:Td(a,f),onBlur:Td(l,p),onMouseEnter:Td(u,f),onMouseLeave:Td(c,p),onTouchStart:Td(h,f)}]:[!1,d,{}]}(n,h),_=function(e,{target:t,replace:n,state:r,preventScrollReset:i,relative:s,viewTransition:o}={}){let a=Hh(),l=jh(),u=Gh(e,{relative:s});return F.useCallback((c=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(c,t)){c.preventDefault();let t=void 0!==n?n:lh(l)===lh(u);a(e,{replace:t,state:r,preventScrollReset:i,relative:s,viewTransition:o})}}),[l,a,u,n,r,t,e,i,s,o])}(l,{replace:s,state:o,target:a,preventScrollReset:u,relative:r,viewTransition:c});let E=F.createElement("a",{...h,...b,href:f||y,onClick:g||i?e:function(t){e&&e(t),t.defaultPrevented||_(t)},ref:Cd(d,w),target:a,"data-discover":m||"render"!==t?void 0:"true"});return v&&!m?F.createElement(F.Fragment,null,E,F.createElement(Sd,{page:y})):E}));function Dd(e){let t=F.useContext(Oh);return ih(t,function(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}(e)),t}xd.displayName="Link",F.forwardRef((function({"aria-current":e="page",caseSensitive:t=!1,className:n="",end:r=!1,style:i,to:s,viewTransition:o,children:a,...l},u){let c=Gh(s,{relative:l.relative}),h=jh(),d=F.useContext(Lh),{navigator:f,basename:p}=F.useContext(Uh),m=null!=d&&function(e,t={}){let n=F.useContext(Mh);ih(null!=n,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Dd("useViewTransitionState"),i=Gh(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=Th(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Th(n.nextLocation.pathname,r)||n.nextLocation.pathname;return null!=Eh(i.pathname,o)||null!=Eh(i.pathname,s)}(c)&&!0===o,g=f.encodeLocation?f.encodeLocation(c).pathname:c.pathname,y=h.pathname,v=d&&d.navigation&&d.navigation.location?d.navigation.location.pathname:null;t||(y=y.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&p&&(v=Th(v,p)||v);const w="/"!==g&&g.endsWith("/")?g.length-1:g.length;let b,_=y===g||!r&&y.startsWith(g)&&"/"===y.charAt(w),E=null!=v&&(v===g||!r&&v.startsWith(g)&&"/"===v.charAt(g.length)),k={isActive:_,isPending:E,isTransitioning:m},T=_?e:void 0;b="function"==typeof n?n(k):[n,_?"active":null,E?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let S="function"==typeof i?i(k):i;return F.createElement(xd,{...l,"aria-current":T,className:b,ref:u,style:S,to:s,viewTransition:o},"function"==typeof a?a(k):a)})).displayName="NavLink",F.forwardRef((({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:s,method:o=cd,action:a,onSubmit:l,relative:u,preventScrollReset:c,viewTransition:h,...d},f)=>{let p=function(){let{router:e}=Dd("useSubmit"),{basename:t}=F.useContext(Uh),n=td("useRouteId");return F.useCallback((async(r,i={})=>{let{action:s,method:o,encType:a,formData:l,body:u}=gd(r,t);if(!1===i.navigate){let t=i.fetcherKey||Od();await e.fetch(t,n,i.action||s,{preventScrollReset:i.preventScrollReset,formData:l,body:u,formMethod:i.method||o,formEncType:i.encType||a,flushSync:i.flushSync})}else await e.navigate(i.action||s,{preventScrollReset:i.preventScrollReset,formData:l,body:u,formMethod:i.method||o,formEncType:i.encType||a,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})}),[e,t,n])}(),m=function(e,{relative:t}={}){let{basename:n}=F.useContext(Uh),r=F.useContext(Vh);ih(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...Gh(e||".",{relative:t})},o=jh();if(null==e){s.search=o.search;let e=new URLSearchParams(s.search),t=e.getAll("index");if(t.some((e=>""===e))){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let n=e.toString();s.search=n?`?${n}`:""}}e&&"."!==e||!i.route.index||(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index");"/"!==n&&(s.pathname="/"===s.pathname?n:Nh([n,s.pathname]));return lh(s)}(a,{relative:u}),g="get"===o.toLowerCase()?"get":"post",y="string"==typeof a&&Ad.test(a);return F.createElement("form",{ref:f,method:g,action:m,onSubmit:r?l:e=>{if(l&&l(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,a=(null==r?void 0:r.getAttribute("formmethod"))||o;p(r||e.currentTarget,{fetcherKey:t,method:a,navigate:n,replace:i,state:s,relative:u,preventScrollReset:c,viewTransition:h})},...d,"data-discover":y||"render"!==e?void 0:"true"})})).displayName="Form";var Pd=0,Od=()=>`__${String(++Pd)}__`;new TextEncoder;var Ld={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Ud={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,l=a?e[i+2]:0,u=t>>2,c=(3&t)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),r.push(n[u],n[c],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Md(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const o=i<e.length?n[e.charAt(i)]:64;++i;const a=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==o||null==a)throw new Fd;const l=t<<2|s>>4;if(r.push(l),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Fd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vd=function(e){return function(e){const t=Md(e);return Ud.encodeByteArray(t,!0)}(e).replace(/\./g,"")},zd=function(e){try{return Ud.decodeString(e,!0)}catch(BC){}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bd=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,jd=()=>{try{return Bd()||(()=>{if("undefined"==typeof process)return;const e=Ld.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(BC){return}const t=e&&zd(e[1]);return t&&JSON.parse(t)})()}catch(BC){return}},$d=e=>{var t,n;return null===(n=null===(t=jd())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},qd=e=>{const t=$d(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Hd=()=>{var e;return null===(e=jd())||void 0===e?void 0:e.config},Wd=e=>{var t;return null===(t=jd())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Vd(JSON.stringify({alg:"none",type:"JWT"})),Vd(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Yd(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Xd(){return!function(){var e;const t=null===(e=jd())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(BC){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Jd(){try{return"object"==typeof indexedDB}catch(BC){return!1}}function Zd(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function ef(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,tf.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nf.prototype.create)}}class nf{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(rf,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new tf(r,o,n)}}const rf=/\{\$([^}]+)}/g;function sf(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(of(n)&&of(s)){if(!sf(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function of(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function lf(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function uf(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class cf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=hf),void 0===r.error&&(r.error=hf),void 0===r.complete&&(r.complete=hf);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(BC){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(BC){"undefined"!=typeof console&&console.error}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function hf(){}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(e){return e&&e._delegate?e._delegate:e}class pf{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Kd;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(BC){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(BC){if(r)return null;throw BC}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:mf})}catch(BC){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(BC){}}}}clearInstance(e=mf){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=mf){return this.instances.has(e)}getOptions(e=mf){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===mf?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}var r;return n||null}normalizeInstanceIdentifier(e=mf){return this.component?this.component.multipleInstances?e:mf:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class yf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new gf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vf,wf;(wf=vf||(vf={}))[wf.DEBUG=0]="DEBUG",wf[wf.VERBOSE=1]="VERBOSE",wf[wf.INFO=2]="INFO",wf[wf.WARN=3]="WARN",wf[wf.ERROR=4]="ERROR",wf[wf.SILENT=5]="SILENT";const bf={debug:vf.DEBUG,verbose:vf.VERBOSE,info:vf.INFO,warn:vf.WARN,error:vf.ERROR,silent:vf.SILENT},_f=vf.INFO,Ef={[vf.DEBUG]:"log",[vf.VERBOSE]:"log",[vf.INFO]:"info",[vf.WARN]:"warn",[vf.ERROR]:"error"},kf=(e,t,...n)=>{if(t<e.logLevel)return;(new Date).toISOString();if(!Ef[t])throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Tf{constructor(e){this.name=e,this._logLevel=_f,this._logHandler=kf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in vf))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?bf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,vf.DEBUG,...e),this._logHandler(this,vf.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,vf.VERBOSE,...e),this._logHandler(this,vf.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,vf.INFO,...e),this._logHandler(this,vf.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,vf.WARN,...e),this._logHandler(this,vf.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,vf.ERROR,...e),this._logHandler(this,vf.ERROR,...e)}}let Sf,If;const Cf=new WeakMap,Nf=new WeakMap,Rf=new WeakMap,Af=new WeakMap,xf=new WeakMap;let Df={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Nf.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Rf.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lf(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Pf(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(If||(If=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Mf(this),t),Lf(Cf.get(this))}:function(...t){return Lf(e.apply(Mf(this),t))}:function(t,...n){const r=e.call(Mf(this),t,...n);return Rf.set(r,t.sort?t.sort():[t]),Lf(r)}}function Of(e){return"function"==typeof e?Pf(e):(e instanceof IDBTransaction&&function(e){if(Nf.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));Nf.set(e,t)}(e),t=e,(Sf||(Sf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Df):e);var t}function Lf(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Lf(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Cf.set(t,e)})).catch((()=>{})),xf.set(t,e),t}(e);if(Af.has(e))return Af.get(e);const t=Of(e);return t!==e&&(Af.set(e,t),xf.set(t,e)),t}const Mf=e=>xf.get(e);function Uf(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Lf(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Lf(o.result),e.oldVersion,e.newVersion,Lf(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const Ff=["get","getKey","getAll","getAllKeys","count"],Vf=["put","add","delete","clear"],zf=new Map;function Bf(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(zf.get(t))return zf.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Vf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Ff.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return zf.set(t,s),s}Df=(e=>({...e,get:(t,n,r)=>Bf(t,n)||e.get(t,n,r),has:(t,n)=>!!Bf(t,n)||e.has(t,n)}))(Df);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const $f="@firebase/app",qf="0.10.18",Hf=new Tf("@firebase/app"),Wf="@firebase/app-compat",Kf="@firebase/analytics-compat",Gf="@firebase/analytics",Qf="@firebase/app-check-compat",Yf="@firebase/app-check",Xf="@firebase/auth",Jf="@firebase/auth-compat",Zf="@firebase/database",ep="@firebase/data-connect",tp="@firebase/database-compat",np="@firebase/functions",rp="@firebase/functions-compat",ip="@firebase/installations",sp="@firebase/installations-compat",op="@firebase/messaging",ap="@firebase/messaging-compat",lp="@firebase/performance",up="@firebase/performance-compat",cp="@firebase/remote-config",hp="@firebase/remote-config-compat",dp="@firebase/storage",fp="@firebase/storage-compat",pp="@firebase/firestore",mp="@firebase/vertexai",gp="@firebase/firestore-compat",yp="firebase",vp="[DEFAULT]",wp={[$f]:"fire-core",[Wf]:"fire-core-compat",[Gf]:"fire-analytics",[Kf]:"fire-analytics-compat",[Yf]:"fire-app-check",[Qf]:"fire-app-check-compat",[Xf]:"fire-auth",[Jf]:"fire-auth-compat",[Zf]:"fire-rtdb",[ep]:"fire-data-connect",[tp]:"fire-rtdb-compat",[np]:"fire-fn",[rp]:"fire-fn-compat",[ip]:"fire-iid",[sp]:"fire-iid-compat",[op]:"fire-fcm",[ap]:"fire-fcm-compat",[lp]:"fire-perf",[up]:"fire-perf-compat",[cp]:"fire-rc",[hp]:"fire-rc-compat",[dp]:"fire-gcs",[fp]:"fire-gcs-compat",[pp]:"fire-fst",[gp]:"fire-fst-compat",[mp]:"fire-vertex","fire-js":"fire-js",[yp]:"fire-js-all"},bp=new Map,_p=new Map,Ep=new Map;function kp(e,t){try{e.container.addComponent(t)}catch(BC){Hf.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,BC)}}function Tp(e){const t=e.name;if(Ep.has(t))return Hf.debug(`There were multiple attempts to register component ${t}.`),!1;Ep.set(t,e);for(const n of bp.values())kp(n,e);for(const n of _p.values())kp(n,e);return!0}function Sp(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Ip(e){return void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp=new nf("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Np{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new pf("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cp.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp="11.2.0";function Ap(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:vp,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw Cp.create("bad-app-name",{appName:String(i)});if(n||(n=Hd()),!n)throw Cp.create("no-options");const s=bp.get(i);if(s){if(sf(n,s.options)&&sf(r,s.config))return s;throw Cp.create("duplicate-app",{appName:i})}const o=new yf(i);for(const l of Ep.values())o.addComponent(l);const a=new Np(n,r,o);return bp.set(i,a),a}function xp(e=vp){const t=bp.get(e);if(!t&&e===vp&&Hd())return Ap();if(!t)throw Cp.create("no-app",{appName:e});return t}function Dp(e,t,n){var r;let i=null!==(r=wp[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Hf.warn(e.join(" "))}Tp(new pf(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="firebase-heartbeat-store";let Op=null;function Lp(){return Op||(Op=Uf("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Pp)}catch(BC){}}}).catch((e=>{throw Cp.create("idb-open",{originalErrorMessage:e.message})}))),Op}async function Mp(e,t){try{const n=(await Lp()).transaction(Pp,"readwrite"),r=n.objectStore(Pp);await r.put(t,Up(e)),await n.done}catch(BC){if(BC instanceof tf)Hf.warn(BC.message);else{const t=Cp.create("idb-set",{originalErrorMessage:null==BC?void 0:BC.message});Hf.warn(t.message)}}}function Up(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new zp(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Vp();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return;return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}catch(BC){Hf.warn(BC)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Vp(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Bp(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bp(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=Vd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(BC){return Hf.warn(BC),""}}}function Vp(){return(new Date).toISOString().substring(0,10)}class zp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Jd()&&Zd().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await Lp()).transaction(Pp),n=await t.objectStore(Pp).get(Up(e));return await t.done,n}catch(BC){if(BC instanceof tf)Hf.warn(BC.message);else{const t=Cp.create("idb-get",{originalErrorMessage:null==BC?void 0:BC.message});Hf.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Mp(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Mp(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Bp(e){return Vd(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jp;function $p(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function qp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}jp="",Tp(new pf("platform-logger",(e=>new jf(e)),"PRIVATE")),Tp(new pf("heartbeat",(e=>new Fp(e)),"PRIVATE")),Dp($f,qf,jp),Dp($f,qf,"esm2017"),Dp("fire-js",""),"function"==typeof SuppressedError&&SuppressedError;const Hp=qp,Wp=new nf("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Kp=new Tf("@firebase/auth");function Gp(e,...t){Kp.logLevel<=vf.ERROR&&Kp.error(`Auth (${Rp}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(e,...t){throw Zp(e,...t)}function Yp(e,...t){return Zp(e,...t)}function Xp(e,t,n){const r=Object.assign(Object.assign({},Hp()),{[t]:n});return new nf("auth","Firebase",r).create(t,{appName:e.name})}function Jp(e){return Xp(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zp(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Wp.create(e,...t)}function em(e,t,...n){if(!e)throw Zp(t,...n)}function tm(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Gp(t),new Error(t)}function nm(e,t){e||tm(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function im(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==im()&&"https:"!==im()&&!Yd()&&!("connection"in navigator)||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class om{constructor(e,t){this.shortDelay=e,this.longDelay=t,nm(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qd())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return sm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(e,t){nm(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void tm("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void tm("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void tm("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},cm=new om(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function dm(e,t,n,r,i={}){return fm(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=af(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:a},i);return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),lm.fetch()(mm(e,e.config.apiHost,n,o),l)}))}async function fm(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},um),t);try{const t=new ym(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw vm(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw vm(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw vm(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw vm(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Xp(e,a,o);Qp(e,a)}}catch(BC){if(BC instanceof tf)throw BC;Qp(e,"network-request-failed",{message:String(BC)})}}async function pm(e,t,n,r,i={}){const s=await dm(e,t,n,r,i);return"mfaPendingCredential"in s&&Qp(e,"multi-factor-auth-required",{_serverResponse:s}),s}function mm(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?am(e.config,i):`${e.config.apiScheme}://${i}`}function gm(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ym{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Yp(this.auth,"network-request-failed"))),cm.get())}))}}function vm(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Yp(e,t,r);return i.customData._tokenResponse=n,i}function wm(e){return void 0!==e&&void 0!==e.enterprise}class bm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return gm(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function _m(e,t){return dm(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(BC){}}function km(e){return 1e3*Number(e)}function Tm(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Gp("JWT malformed, contained fewer than 3 sections"),null;try{const e=zd(n);return e?JSON.parse(e):(Gp("Failed to decode base64 JWT payload"),null)}catch(BC){return Gp("Caught error parsing JWT payload as JSON",null==BC?void 0:BC.toString()),null}}function Sm(e){const t=Tm(e);return em(t,"internal-error"),em(void 0!==t.exp,"internal-error"),em(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Im(e,t,n=!1){if(n)return t;try{return await t}catch(BC){throw BC instanceof tf&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(BC)&&e.auth.currentUser===e&&await e.auth.signOut(),BC}}class Cm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(BC){return void("auth/network-request-failed"===(null==BC?void 0:BC.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Em(this.lastLoginAt),this.creationTime=Em(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rm(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Im(e,_m(n,{idToken:r}));em(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?Am(s.providerUserInfo):[],a=(l=e.providerData,u=o,[...l.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var l,u;const c=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!c&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Nm(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}function Am(e){return e.map((e=>{var{providerId:t}=e,n=$p(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xm{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){em(e.idToken,"internal-error"),em(void 0!==e.idToken,"internal-error"),em(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):Sm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){em(0!==e.length,"internal-error");const t=Sm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(em(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await async function(e,t){const n=await fm(e,{},(async()=>{const n=af({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=mm(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",lm.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new xm;return n&&(em("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(em("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(em("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xm,this.toJSON())}_performRefresh(){return tm("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(e,t){em("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Pm{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=$p(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Cm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Nm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Im(this,this.stsTokenManager.getToken(this.auth,e));return em(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=ff(e),r=await n.getIdToken(t),i=Tm(r);em(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Em(km(i.auth_time)),issuedAtTime:Em(km(i.iat)),expirationTime:Em(km(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=ff(e);await Rm(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(em(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Pm(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){em(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Rm(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ip(this.auth.app))return Promise.reject(Jp(this.auth));const e=await this.getIdToken();return await Im(this,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return dm(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:E}=t;em(v&&E,e,"internal-error");const k=xm.fromJSON(this.name,E);em("string"==typeof v,e,"internal-error"),Dm(c,e.name),Dm(h,e.name),em("boolean"==typeof w,e,"internal-error"),em("boolean"==typeof b,e,"internal-error"),Dm(d,e.name),Dm(f,e.name),Dm(p,e.name),Dm(m,e.name),Dm(g,e.name),Dm(y,e.name);const T=new Pm({uid:v,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:k,createdAt:g,lastLoginAt:y});return _&&Array.isArray(_)&&(T.providerData=_.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new xm;r.updateFromServerResponse(t);const i=new Pm({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Rm(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];em(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?Am(r.providerUserInfo):[],s=!(r.email&&r.passwordHash||(null==i?void 0:i.length)),o=new xm;o.updateFromIdToken(n);const a=new Pm({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:s}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Nm(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||(null==i?void 0:i.length))};return Object.assign(a,l),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=new Map;function Lm(e){nm(e instanceof Function,"Expected a class definition");let t=Om.get(e);return t?(nm(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Om.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Mm.type="NONE";const Um=Mm;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(e,t,n){return`firebase:${e}:${t}:${n}`}class Vm{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Fm(this.userKey,r.apiKey,i),this.fullPersistenceKey=Fm("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pm._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Vm(Lm(Um),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Lm(Um);const s=Fm(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=Pm._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(l){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(l){}}))),new Vm(i,e,n)):new Vm(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(qm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Bm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Wm(t))return"Blackberry";if(Km(t))return"Webos";if(jm(t))return"Safari";if((t.includes("chrome/")||$m(t))&&!t.includes("edge/"))return"Chrome";if(Hm(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Bm(e=Qd()){return/firefox\//i.test(e)}function jm(e=Qd()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function $m(e=Qd()){return/crios\//i.test(e)}function qm(e=Qd()){return/iemobile/i.test(e)}function Hm(e=Qd()){return/android/i.test(e)}function Wm(e=Qd()){return/blackberry/i.test(e)}function Km(e=Qd()){return/webos/i.test(e)}function Gm(e=Qd()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Qm(){return function(){const e=Qd();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function Ym(e=Qd()){return Gm(e)||Hm(e)||Km(e)||Wm(e)||/windows phone/i.test(e)||qm(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(e,t=[]){let n;switch(e){case"Browser":n=zm(Qd());break;case"Worker":n=`${zm(Qd())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rp}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(BC){r(BC)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(BC){t.reverse();for(const r of t)try{r()}catch(n){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==BC?void 0:BC.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ng(this),this.idTokenSubscription=new ng(this),this.beforeStateQueue=new Jm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Lm(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Vm.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(BC){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await _m(this,{idToken:e}),n=await Pm._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ip(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(BC){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(BC)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return em(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(BC){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Rm(e)}catch(BC){if("auth/network-request-failed"!==(null==BC?void 0:BC.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ip(this.app))return Promise.reject(Jp(this));const t=e?ff(e):null;return t&&em(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&em(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return Ip(this.app)?Promise.reject(Jp(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ip(this.app)?Promise.reject(Jp(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(Lm(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return dm(e,"GET","/v2/passwordPolicy",hm(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this),t=new Zm(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new nf("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return dm(e,"POST","/v2/accounts:revokeToken",hm(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Lm(e)||this._popupRedirectResolver;em(t,this,"argument-error"),this.redirectPersistenceManager=await Vm.create(this,[Lm(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(em(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return em(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Kp.logLevel<=vf.WARN&&Kp.warn(`Auth (${Rp}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function tg(e){return ff(e)}class ng{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new cf(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return em(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rg={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ig(e){return rg.loadJS(e)}class sg{constructor(){this.enterprise=new og}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class og{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const ag="NO_RECAPTCHA";class lg{constructor(e){this.type="recaptcha-enterprise",this.auth=tg(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{(async function(e,t){return dm(e,"GET","/v2/recaptchaConfig",hm(e,t))})(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new bm(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;wm(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(ag)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){return(new sg).execute("siteKey",{action:"verify"})}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&wm(window.grecaptcha))r(n,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=rg.recaptchaEnterpriseScript;0!==t.length&&(t+=n),ig(t).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function ug(e,t,n,r=!1,i=!1){const s=new lg(e);let o;if(i)o=ag;else try{o=await s.verify(n)}catch(l){o=await s.verify(n,!0)}const a=Object.assign({},t);if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in a){const e=a.phoneEnrollmentInfo.phoneNumber,t=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const e=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function cg(e,t,n,r,i){var s;if(null===(s=e._getRecaptchaConfig())||void 0===s?void 0:s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ug(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){const i=await ug(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(e,t,n){const r=tg(e);em(r._canInitEmulator,r,"emulator-config-failed"),em(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=dg(t),{host:s,port:o}=function(e){const t=dg(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:fg(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:fg(t)}}}(t),a=null===o?"":`:${o}`;r.config.emulator={url:`${i}//${s}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:o,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:!1})}),function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&console.info;"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function dg(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function fg(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class pg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return tm("not implemented")}_getIdTokenResponse(e){return tm("not implemented")}_linkToIdToken(e,t){return tm("not implemented")}_getReauthenticationResolver(e){return tm("not implemented")}}async function mg(e,t){return dm(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gg(e,t){return pm(e,"POST","/v1/accounts:signInWithPassword",hm(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yg extends pg{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new yg(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new yg(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return cg(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",gg);case"emailLink":return async function(e,t){return pm(e,"POST","/v1/accounts:signInWithEmailLink",hm(e,t))}(e,{email:this._email,oobCode:this._password});default:Qp(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return cg(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",mg);case"emailLink":return async function(e,t){return pm(e,"POST","/v1/accounts:signInWithEmailLink",hm(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Qp(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vg(e,t){return pm(e,"POST","/v1/accounts:signInWithIdp",hm(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg extends pg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new wg(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Qp("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=$p(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new wg(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return vg(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,vg(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vg(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=af(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e){var t,n,r,i,s,o;const a=lf(uf(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,c=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);em(l&&u&&c,"argument-error"),this.apiKey=l,this.operation=c,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=lf(uf(e)).link,n=t?lf(uf(t)).deep_link_id:null,r=lf(uf(e)).deep_link_id;return(r?lf(uf(r)).link:null)||r||n||t||e}(e);try{return new bg(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(){this.providerId=_g.PROVIDER_ID}static credential(e,t){return yg._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=bg.parseLink(t);return em(n,"argument-error"),yg._fromEmailAndCode(e,n.code,n.tenantId)}}_g.PROVIDER_ID="password",_g.EMAIL_PASSWORD_SIGN_IN_METHOD="password",_g.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg extends Eg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg extends kg{constructor(){super("facebook.com")}static credential(e){return wg._fromParams({providerId:Tg.PROVIDER_ID,signInMethod:Tg.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tg.credentialFromTaggedObject(e)}static credentialFromError(e){return Tg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Tg.credential(e.oauthAccessToken)}catch(t){return null}}}Tg.FACEBOOK_SIGN_IN_METHOD="facebook.com",Tg.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sg extends kg{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return wg._fromParams({providerId:Sg.PROVIDER_ID,signInMethod:Sg.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Sg.credentialFromTaggedObject(e)}static credentialFromError(e){return Sg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Sg.credential(t,n)}catch(r){return null}}}Sg.GOOGLE_SIGN_IN_METHOD="google.com",Sg.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ig extends kg{constructor(){super("github.com")}static credential(e){return wg._fromParams({providerId:Ig.PROVIDER_ID,signInMethod:Ig.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ig.credentialFromTaggedObject(e)}static credentialFromError(e){return Ig.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ig.credential(e.oauthAccessToken)}catch(t){return null}}}Ig.GITHUB_SIGN_IN_METHOD="github.com",Ig.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cg extends kg{constructor(){super("twitter.com")}static credential(e,t){return wg._fromParams({providerId:Cg.PROVIDER_ID,signInMethod:Cg.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Cg.credentialFromTaggedObject(e)}static credentialFromError(e){return Cg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Cg.credential(t,n)}catch(r){return null}}}Cg.TWITTER_SIGN_IN_METHOD="twitter.com",Cg.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ng{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Pm._fromIdTokenResponse(e,n,r),s=Rg(n);return new Ng({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Rg(n);return new Ng({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Rg(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag extends tf{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ag.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ag(e,t,n,r)}}function xg(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ag._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Dg(e,t,n=!1){if(Ip(e.app))return Promise.reject(Jp(e));const r="signIn",i=await xg(e,r,t),s=await Ng._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function Pg(e,t,n){return Ip(e.app)?Promise.reject(Jp(e)):async function(e,t){return Dg(tg(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ff(e),_g.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&async function(e){const t=tg(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}(e),t}))}function Og(e,t,n,r){return ff(e).onAuthStateChanged(t,n,r)}function Lg(e){return ff(e).signOut()}const Mg="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Mg,"1"),this.storage.removeItem(Mg),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg extends Ug{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ym(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Qm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fg.type="LOCAL";const Vg=Fg;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg extends Ug{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zg.type="SESSION";const Bg=zg;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jg{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new jg(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $g(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jg.receivers=[];class qg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=$g("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wg(){return void 0!==Hg().WorkerGlobalScope&&"function"==typeof Hg().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kg="firebaseLocalStorageDb",Gg="firebaseLocalStorage",Qg="fbase_key";class Yg{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Xg(e,t){return e.transaction([Gg],t?"readwrite":"readonly").objectStore(Gg)}function Jg(){const e=indexedDB.open(Kg,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Gg,{keyPath:Qg})}catch(BC){n(BC)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Gg)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Kg);return new Yg(e).toPromise()}(),t(await Jg()))}))}))}async function Zg(e,t,n){const r=Xg(e,!0).put({[Qg]:t,value:n});return new Yg(r).toPromise()}function ey(e,t){const n=Xg(e,!0).delete(t);return new Yg(n).toPromise()}class ty{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Jg()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(BC){if(t++>3)throw BC;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jg._getInstance(Wg()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new qg(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jg();return await Zg(e,Mg,"1"),await ey(e,Mg),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Zg(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Xg(e,!1).get(t),r=await new Yg(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>ey(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Xg(e,!1).getAll();return new Yg(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ty.type="LOCAL";const ny=ty;new om(3e4,6e4);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ry extends pg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vg(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vg(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vg(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function iy(e){return Dg(e.auth,new ry(e),e.bypassAuthState)}function sy(e){const{auth:t,user:n}=e;return em(n,t,"internal-error"),
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t,n=!1){const{auth:r}=e;if(Ip(r.app))return Promise.reject(Jp(r));const i="reauthenticate";try{const s=await Im(e,xg(r,i,t,e),n);em(s.idToken,r,"internal-error");const o=Tm(s.idToken);em(o,r,"internal-error");const{sub:a}=o;return em(e.uid===a,r,"user-mismatch"),Ng._forOperation(e,i,s)}catch(BC){throw"auth/user-not-found"===(null==BC?void 0:BC.code)&&Qp(r,"user-mismatch"),BC}}(n,new ry(e),e.bypassAuthState)}async function oy(e){const{auth:t,user:n}=e;return em(n,t,"internal-error"),async function(e,t,n=!1){const r=await Im(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ng._forOperation(e,"link",r)}(n,new ry(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(BC){this.reject(BC)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(BC){this.reject(BC)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iy;case"linkViaPopup":case"linkViaRedirect":return oy;case"reauthViaPopup":case"reauthViaRedirect":return sy;default:Qp(this.auth,"internal-error")}}resolve(e){nm(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nm(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=new om(2e3,1e4);class uy extends ay{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,uy.currentPopupAction&&uy.currentPopupAction.cancel(),uy.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return em(e,this.auth,"internal-error"),e}async onExecution(){nm(1===this.filter.length,"Popup operations only handle one event");const e=$g();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Yp(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Yp(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,uy.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Yp(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,ly.get())};e()}}uy.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cy="pendingRedirect",hy=new Map;class dy extends ay{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=hy.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return Fm(cy,e.config.apiKey,e.name)}(t),r=function(e){return Lm(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(BC){e=()=>Promise.reject(BC)}hy.set(this.auth._key(),e)}return this.bypassAuthState||hy.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function fy(e,t){hy.set(e._key(),t)}async function py(e,t,n=!1){if(Ip(e.app))return Promise.reject(Jp(e));const r=tg(e),i=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return t?Lm(t):(em(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),s=new dy(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yy(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!yy(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Yp(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(gy(e))}saveEventToCache(e){this.cachedEventUids.add(gy(e)),this.lastProcessedEventTime=Date.now()}}function gy(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function yy({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wy=/^https?/;async function by(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return dm(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(_y(r))return}catch(n){}Qp(e,"unauthorized-domain")}function _y(e){const t=rm(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!wy.test(n))return!1;if(vy.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=new om(3e4,6e4);function ky(){const e=Hg().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Ty(e){return new Promise(((t,n)=>{var r,i,s;function o(){ky(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ky(),n(Yp(e,"network-request-failed"))},timeout:Ey.get()})}if(null===(i=null===(r=Hg().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Hg().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Hg()[t]=()=>{gapi.load?o():n(Yp(e,"network-request-failed"))},ig(`${rg.gapiScript}?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Sy=null,e}))}let Sy=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Iy=new om(5e3,15e3),Cy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ny=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ry(e){const t=e.config;em(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?am(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:Rp},i=Ny.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${af(r).slice(1)}`}async function Ay(e){const t=await function(e){return Sy=Sy||Ty(e),Sy}(e),n=Hg().gapi;return em(n,e,"internal-error"),t.open({where:document.body,url:Ry(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Cy,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Yp(e,"network-request-failed"),s=Hg().setTimeout((()=>{r(i)}),Iy.get());function o(){Hg().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Dy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(BC){}}}function Py(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},xy),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Qd().toLowerCase();n&&(a=$m(u)?"_blank":n),Bm(u)&&(t=t||"http://localhost",l.scrollbars="yes");const c=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Qd()){var t;return Gm(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Dy(null);const h=window.open(t||"",a,c);em(h,e,"popup-blocked");try{h.focus()}catch(BC){}return new Dy(h)}const Oy="__/auth/handler",Ly="emulator/auth/handler",My=encodeURIComponent("fac");async function Uy(e,t,n,r,i,s){em(e.config.authDomain,e,"auth-domain-config-required"),em(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Rp,eventId:i};if(t instanceof Eg){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries({}))o[e]=t}if(t instanceof kg){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${My}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Oy}`;return am(e,Ly)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${af(a).slice(1)}${u}`}const Fy="webStorageSupport";const Vy=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bg,this._completeRedirectFn=py,this._overrideRedirectResult=fy}async _openPopup(e,t,n,r){var i;nm(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Py(e,await Uy(e,t,n,rm(),r),$g())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){Hg().location.href=e}(await Uy(e,t,n,rm(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(nm(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Ay(e),n=new my(e);return t.register("authEvent",(t=>{em(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Fy,{type:Fy},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[Fy];void 0!==i&&t(!!i),Qp(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=by(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ym()||jm()||Gm()}};var zy="@firebase/auth",By="1.8.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){em(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $y=Wd("authIdTokenMaxAge")||300;let qy=null;function Hy(e=xp()){const t=Sp(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Sp(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(sf(n.getOptions(),null!=t?t:{}))return e;Qp(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Vy,persistence:[ny,Vg,Bg]}),r=Wd("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(i=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>$y)return;const r=null==t?void 0:t.token;qy!==r&&(qy=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){ff(e).beforeAuthStateChanged(t,n)}(n,t,(()=>t(n.currentUser))),function(e,t,n,r){ff(e).onIdTokenChanged(t,n,r)}(n,(e=>t(e)))}}var i;const s=$d("auth");return s&&hg(n,`http://${s}`),n}var Wy;rg={loadJS:e=>new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Yp("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)})),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},Wy="Browser",Tp(new pf("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;em(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:Wy,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xm(Wy)},l=new eg(n,r,i,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Lm);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Tp(new pf("auth-internal",(e=>{const t=tg(e.getProvider("auth").getImmediate());return new jy(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Dp(zy,By,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Wy)),Dp(zy,By,"esm2017");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Dp("firebase","11.2.0","app");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ky="firebasestorage.googleapis.com",Gy="storageBucket";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qy extends tf{constructor(e,t,n=0){super(ev(e),`Firebase Storage: ${t} (${ev(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Qy.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ev(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var Yy,Xy,Jy,Zy;function ev(e){return"storage/"+e}function tv(){return new Qy(Yy.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function nv(e){return new Qy(Yy.INVALID_ARGUMENT,e)}function rv(){return new Qy(Yy.APP_DELETED,"The Firebase app was deleted.")}function iv(e,t){return new Qy(Yy.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function sv(e){throw new Qy(Yy.INTERNAL_ERROR,"Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Xy=Yy||(Yy={})).UNKNOWN="unknown",Xy.OBJECT_NOT_FOUND="object-not-found",Xy.BUCKET_NOT_FOUND="bucket-not-found",Xy.PROJECT_NOT_FOUND="project-not-found",Xy.QUOTA_EXCEEDED="quota-exceeded",Xy.UNAUTHENTICATED="unauthenticated",Xy.UNAUTHORIZED="unauthorized",Xy.UNAUTHORIZED_APP="unauthorized-app",Xy.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",Xy.INVALID_CHECKSUM="invalid-checksum",Xy.CANCELED="canceled",Xy.INVALID_EVENT_NAME="invalid-event-name",Xy.INVALID_URL="invalid-url",Xy.INVALID_DEFAULT_BUCKET="invalid-default-bucket",Xy.NO_DEFAULT_BUCKET="no-default-bucket",Xy.CANNOT_SLICE_BLOB="cannot-slice-blob",Xy.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",Xy.NO_DOWNLOAD_URL="no-download-url",Xy.INVALID_ARGUMENT="invalid-argument",Xy.INVALID_ARGUMENT_COUNT="invalid-argument-count",Xy.APP_DELETED="app-deleted",Xy.INVALID_ROOT_OPERATION="invalid-root-operation",Xy.INVALID_FORMAT="invalid-format",Xy.INTERNAL_ERROR="internal-error",Xy.UNSUPPORTED_ENVIRONMENT="unsupported-environment";class ov{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=ov.makeFromUrl(e,t)}catch(BC){return new ov(e,"")}if(""===n.path)return n;throw r=e,new Qy(Yy.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.");var r}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const i=new RegExp("^gs://"+r+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),a=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:new RegExp(`^https?://${t===Ky?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let l=0;l<a.length;l++){const t=a[l],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new ov(e,i),t.postModify(n);break}}if(null==n)throw function(e){return new Qy(Yy.INVALID_URL,"Invalid URL '"+e+"'.")}(e);return n}}class av{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(e){return"string"==typeof e||e instanceof String}function uv(e){return cv()&&e instanceof Blob}function cv(){return"undefined"!=typeof Blob}function hv(e,t,n,r){if(r<t)throw nv(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw nv(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function fv(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}(Zy=Jy||(Jy={}))[Zy.NO_ERROR=0]="NO_ERROR",Zy[Zy.NETWORK_ERROR=1]="NETWORK_ERROR",Zy[Zy.ABORT=2]="ABORT";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pv{constructor(e,t,n,r,i,s,o,a,l,u,c,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=c,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new mv(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===Jy.NO_ERROR,i=n.getStatus();if(!t||
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){const n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),i=-1!==t.indexOf(e);return n||r||i}(i,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===Jy.ABORT;return void e(!1,new mv(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new mv(s,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());!
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){return void 0!==e}(e)?n():n(e)}catch(BC){r(BC)}else if(null!==i){const e=tv();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){r(this.appDelete_?rv():new Qy(Yy.CANCELED,"User canceled the upload/download."))}else{r(new Qy(Yy.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again."))}};this.canceled_?t(0,new mv(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return 2===a}let u=!1;function c(...e){u||(u=!0,t.apply(null,e))}function h(t){i=setTimeout((()=>{i=null,e(f,l())}),t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(u)return void d();if(e)return d(),void c.call(null,e,...t);if(l()||o)return d(),void c.call(null,e,...t);let n;r<64&&(r*=2),1===a?(a=2,n=0):n=1e3*(r+Math.random()),h(n)}let p=!1;function m(e){p||(p=!0,d(),u||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,m(!0)}),n),m}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class mv{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function gv(...e){const t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(cv())return new Blob(e);throw new Qy(Yy.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yv(e){if("undefined"==typeof atob)throw t="base-64",new Qy(Yy.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`);var t;return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv="raw",wv="base64",bv="base64url",_v="data_url";class Ev{constructor(e,t){this.data=e,this.contentType=t||null}}function kv(e,t){switch(e){case vv:return new Ev(Tv(t));case wv:case bv:return new Ev(Sv(e,t));case _v:return new Ev(function(e){const t=new Iv(e);return t.base64?Sv(wv,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(BC){throw iv(_v,"Malformed data URL.")}return Tv(t)}(t.rest)}(t),new Iv(t).contentType)}throw tv()}function Tv(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function Sv(e,t){switch(e){case wv:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw iv(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case bv:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw iv(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=yv(t)}catch(BC){if(BC.message.includes("polyfill"))throw BC;throw iv(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Iv{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw iv(_v,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(e,t){if(!(e.length>=t.length))return!1;return e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}class Cv{constructor(e,t){let n=0,r="";uv(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(uv(this.data_)){const s=this.data_,o=(r=e,i=t,(n=s).webkitSlice?n.webkitSlice(r,i):n.mozSlice?n.mozSlice(r,i):n.slice?n.slice(r,i):null);return null===o?null:new Cv(o)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new Cv(n,!0)}var n,r,i}static getBlob(...e){if(cv()){const t=e.map((e=>e instanceof Cv?e.data_:e));return new Cv(gv.apply(null,t))}{const t=e.map((e=>lv(e)?kv(vv,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let i=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]})),new Cv(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(e){let t;try{t=JSON.parse(e)}catch(BC){return null}return function(e){return"object"==typeof e&&!Array.isArray(e)}(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(e,t){return t}class xv{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||Av}}let Dv=null;function Pv(){if(Dv)return Dv;const e=[];e.push(new xv("bucket")),e.push(new xv("generation")),e.push(new xv("metageneration")),e.push(new xv("name","fullPath",!0));const t=new xv("name");t.xform=function(e,t){return function(e){return!lv(e)||e.length<2?e:Rv(e)}(t)},e.push(t);const n=new xv("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new xv("timeCreated")),e.push(new xv("updated")),e.push(new xv("md5Hash",null,!0)),e.push(new xv("cacheControl",null,!0)),e.push(new xv("contentDisposition",null,!0)),e.push(new xv("contentEncoding",null,!0)),e.push(new xv("contentLanguage",null,!0)),e.push(new xv("contentType",null,!0)),e.push(new xv("metadata","customMetadata",!0)),Dv=e,Dv}function Ov(e,t,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const e=n[s];r[e.local]=e.xform(r,t[e.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,i=new ov(n,r);return t._makeStorageReference(i)}})}(r,e),r}function Lv(e,t,n){const r=Nv(t);if(null===r)return null;return Ov(e,r,n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mv="prefixes",Uv="items";function Fv(e,t,n){const r=Nv(n);if(null===r)return null;return function(e,t,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Mv])for(const i of n[Mv]){const n=i.replace(/\/$/,""),s=e._makeStorageReference(new ov(t,n));r.prefixes.push(s)}if(n[Uv])for(const i of n[Uv]){const n=e._makeStorageReference(new ov(t,i.name));r.items.push(n)}return r}(e,t,r)}class Vv{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(e){if(!e)throw tv()}function Bv(e,t){return function(n,r){const i=Lv(e,r,t);return zv(null!==i),i}}function jv(e,t){return function(n,r){const i=Lv(e,r,t);return zv(null!==i),function(e,t,n,r){const i=Nv(t);if(null===i)return null;if(!lv(i.downloadTokens))return null;const s=i.downloadTokens;if(0===s.length)return null;const o=encodeURIComponent;return s.split(",").map((t=>{const i=e.bucket,s=e.fullPath;return dv("/b/"+o(i)+"/o/"+o(s),n,r)+fv({alt:"media",token:t})}))[0]}(i,r,e.host,e._protocol)}}function $v(e){return function(t,n){let r;var i,s;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new Qy(Yy.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new Qy(Yy.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(s=e.bucket,r=new Qy(Yy.QUOTA_EXCEEDED,"Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,r=new Qy(Yy.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")):r=n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}}function qv(e){const t=$v(e);return function(n,r){let i=t(n,r);var s;return 404===n.getStatus()&&(s=e.path,i=new Qy(Yy.OBJECT_NOT_FOUND,"Object '"+s+"' does not exist.")),i.serverResponse=r.serverResponse,i}}function Hv(e,t,n,r,i){const s={};t.isRoot?s.prefix="":s.prefix=t.path+"/",n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=dv(t.bucketOnlyServerUrl(),e.host,e._protocol),a=e.maxOperationRetryTime,l=new Vv(o,"GET",function(e,t){return function(n,r){const i=Fv(e,t,r);return zv(null!==i),i}}(e,t.bucket),a);return l.urlParams=s,l.errorHandler=$v(t),l}function Wv(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+a;const l=function(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}(t,r,i),u=function(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}(l,n),c="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+a+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",h="\r\n--"+a+"--",d=Cv.getBlob(c,r,h);if(null===d)throw new Qy(Yy.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.");const f={name:l.fullPath},p=dv(s,e.host,e._protocol),m=e.maxUploadRetryTime,g=new Vv(p,"POST",Bv(e,n),m);return g.urlParams=f,g.headers=o,g.body=d.uploadData(),g.errorHandler=$v(t),g}class Kv{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Jy.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=Jy.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=Jy.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw sv("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw sv("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw sv("cannot .getStatus() before sending");try{return this.xhr_.status}catch(BC){return-1}}getResponse(){if(!this.sent_)throw sv("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw sv("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class Gv extends Kv{initXhr(){this.xhr_.responseType="text"}}function Qv(){return new Gv}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,t){this._service=e,this._location=t instanceof ov?t:ov.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Yv(e,t)}get root(){const e=new ov(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Rv(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new ov(this._location.bucket,e);return new Yv(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new Qy(Yy.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function Xv(e){const t={prefixes:[],items:[]};return Jv(e,t).then((()=>t))}async function Jv(e,t,n){const r={pageToken:n},i=await function(e,t){null!=t&&"number"==typeof t.maxResults&&hv("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=Hv(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,Qv)}(e,r);t.prefixes.push(...i.prefixes),t.items.push(...i.items),null!=i.nextPageToken&&await Jv(e,t,i.nextPageToken)}function Zv(e){e._throwIfRoot("getMetadata");const t=function(e,t,n){const r=dv(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,s=new Vv(r,"GET",Bv(e,n),i);return s.errorHandler=qv(t),s}(e.storage,e._location,Pv());return e.storage.makeRequestWithTokens(t,Qv)}function ew(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=dv(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,s=new Vv(r,"GET",jv(e,n),i);return s.errorHandler=qv(t),s}(e.storage,e._location,Pv());return e.storage.makeRequestWithTokens(t,Qv).then((e=>{if(null===e)throw new Qy(Yy.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e}))}function tw(e){e._throwIfRoot("deleteObject");const t=function(e,t){const n=dv(t.fullServerUrl(),e.host,e._protocol),r=e.maxOperationRetryTime,i=new Vv(n,"DELETE",(function(e,t){}),r);return i.successCodes=[200,204],i.errorHandler=qv(t),i}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,Qv)}function nw(e,t){if(e instanceof sw){const n=e;if(null==n._bucket)throw new Qy(Yy.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Gy+"' property when initializing the app?");const r=new Yv(n,n._bucket);return null!=t?nw(r,t):r}return void 0!==t?function(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new ov(e._location.bucket,n);return new Yv(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t):e}function rw(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof sw)return new Yv(e,t);throw nv("To use ref(service, url), the first argument must be a Storage instance.")}return nw(e,t)}function iw(e,t){const n=null==t?void 0:t[Gy];return null==n?null:ov.makeFromBucketSpec(n,e)}class sw{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Ky,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?ov.makeFromBucketSpec(r,this._host):iw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=ov.makeFromBucketSpec(this._url,e):this._bucket=iw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){hv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){hv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Yv(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new av(rv());{const s=function(e,t,n,r,i,s,o=!0){const a=fv(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(u,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(u,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(u,s),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(u,r),new pv(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const ow="@firebase/storage",aw="0.13.5",lw="storage";function uw(e,t,n){return function(e,t,n){e._throwIfRoot("uploadBytes");const r=Wv(e.storage,e._location,Pv(),new Cv(t,!0),n);return e.storage.makeRequestWithTokens(r,Qv).then((t=>({metadata:t,ref:e})))}(e=ff(e),t,n)}function cw(e){return Zv(e=ff(e))}function hw(e){return Xv(e=ff(e))}function dw(e){return ew(e=ff(e))}function fw(e){return tw(e=ff(e))}function pw(e,t){return rw(e=ff(e),t)}function mw(e=xp(),t){const n=Sp(e=ff(e),lw).getImmediate({identifier:t}),r=qd("storage");return r&&function(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"==typeof i?i:Gd(i,e.app.options.projectId))}(e,t,n,r)}(n,...r),n}function gw(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new sw(n,r,i,t,Rp)}Tp(new pf(lw,gw,"PUBLIC").setMultipleInstances(!0)),Dp(ow,aw,""),Dp(ow,aw,"esm2017");var yw,vw,ww="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=n+(o<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(t=n+((o=t+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(t^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function r(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}(t,(function(){this.blockSize=-1})),t.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,i=this.B,s=this.h,o=0;o<t;){if(0==s)for(;o<=r;)n(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<t;)if(i[s++]=e.charCodeAt(o++),s==this.blockSize){n(this,i),s=0;break}}else for(;o<t;)if(i[s++]=e[o++],s==this.blockSize){n(this,i),s=0;break}}this.h=s,this.o+=t},t.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var i={};function s(e){return-128<=e&&128>e?function(e,t){var n=i;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new r([0|e],0>e?-1:0)})):new r([0|e],0>e?-1:0)}function o(e){if(isNaN(e)||!isFinite(e))return a;if(0>e)return d(o(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=4294967296;return new r(t,0)}var a=s(0),l=s(1),u=s(16777216);function c(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function h(e){return-1==e.h}function d(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new r(n,~e.h).add(l)}function f(e,t){return e.add(d(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function m(e,t){this.g=e,this.h=t}function g(e,t){if(c(t))throw Error("division by zero");if(c(e))return new m(a,a);if(h(e))return t=g(d(e),t),new m(d(t.g),d(t.h));if(h(t))return t=g(e,d(t)),new m(d(t.g),t.h);if(30<e.g.length){if(h(e)||h(t))throw Error("slowDivide_ only works with positive integers.");for(var n=l,r=t;0>=r.l(e);)n=y(n),r=y(r);var i=v(n,1),s=v(r,1);for(r=v(r,2),n=v(n,2);!c(r);){var u=s.add(r);0>=u.l(e)&&(i=i.add(n),s=u),r=v(r,1),n=v(n,1)}return t=f(e,i.j(t)),new m(i,t)}for(i=a;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),u=(s=o(n)).j(t);h(u)||0<u.l(e);)u=(s=o(n-=r)).j(t);c(s)&&(s=l),i=i.add(s),e=f(e,u)}return new m(i,e)}function y(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new r(n,e.h)}function v(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],o=0;o<i;o++)s[o]=0<t?e.i(o+n)>>>t|e.i(o+n+1)<<32-t:e.i(o+n);return new r(s,e.h)}(e=r.prototype).m=function(){if(h(this))return-d(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(c(this))return"0";if(h(this))return"-"+d(this).toString(e);for(var t=o(Math.pow(e,6)),n=this,r="";;){var i=g(n,t).g,s=((0<(n=f(n,i.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(c(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return h(e=f(this,e))?-1:c(e)?0:1},e.abs=function(){return h(this)?d(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var o=i+(65535&this.i(s))+(65535&e.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=a>>>16,o&=65535,a&=65535,n[s]=a<<16|o}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(c(this)||c(e))return a;if(h(this))return h(e)?d(this).j(d(e)):d(d(this).j(e));if(h(e))return d(this.j(d(e)));if(0>this.l(u)&&0>e.l(u))return o(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var l=this.i(i)>>>16,f=65535&this.i(i),m=e.i(s)>>>16,g=65535&e.i(s);n[2*i+2*s]+=f*g,p(n,2*i+2*s),n[2*i+2*s+1]+=l*g,p(n,2*i+2*s+1),n[2*i+2*s+1]+=f*m,p(n,2*i+2*s+1),n[2*i+2*s+2]+=l*m,p(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new r(n,0)},e.A=function(e){return g(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new r(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new r(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.v,t.prototype.reset=t.prototype.s,t.prototype.update=t.prototype.u,vw=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return d(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=o(Math.pow(n,8)),i=a,s=0;s<t.length;s+=8){var l=Math.min(8,t.length-s),u=parseInt(t.substring(s,s+l),n);8>l?(l=o(Math.pow(n,l)),i=i.j(l).add(o(u))):i=(i=i.j(r)).add(o(u))}return i},yw=r}).apply(void 0!==ww?ww:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var bw,_w,Ew,kw,Tw,Sw,Iw,Cw,Nw="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Nw&&Nw];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,r){if(r)e:{var i=n;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in i))break e;i=i[o]}(r=r(s=i[e=e[e.length-1]]))!=s&&null!=r&&t(i,e,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",(function(e){return e||function(){return function(e,t){e instanceof String&&(e+="");var n=0,r=!1,i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}(this,(function(e,t){return t}))}}));
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var r=r||{},i=this||self;function s(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function o(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function a(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function u(e,t,n){return(u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:l).apply(null,arguments)}function c(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function h(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function d(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function f(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(s(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function p(e){return/^[\s\xa0]*$/.test(e)}function m(){var e=i.navigator;return e&&(e=e.userAgent)?e:""}function g(e){return g[" "](e),e}g[" "]=function(){};var y=!(-1==m().indexOf("Gecko")||-1!=m().toLowerCase().indexOf("webkit")&&-1==m().indexOf("Edge")||-1!=m().indexOf("Trident")||-1!=m().indexOf("MSIE")||-1!=m().indexOf("Edge"));function v(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function w(e){const t={};for(const n in e)t[n]=e[n];return t}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<b.length;t++)n=b[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function E(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function k(e){i.setTimeout((()=>{throw e}),0)}function T(){var e=R;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var S=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new I),(e=>e.reset()));class I{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let C,N=!1,R=new class{constructor(){this.h=this.g=null}add(e,t){const n=S.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},A=()=>{const e=i.Promise.resolve(void 0);C=()=>{e.then(x)}};var x=()=>{for(var e;e=T();){try{e.h.call(e.g)}catch(n){k(n)}var t=S;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}N=!1};function D(){this.s=this.s,this.C=this.C}function P(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}D.prototype.s=!1,D.prototype.ma=function(){this.s||(this.s=!0,this.N())},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},P.prototype.h=function(){this.defaultPrevented=!0};var O=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};i.addEventListener("test",e,t),i.removeEventListener("test",e,t)}catch(n){}return e}();function L(e,t){if(P.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(y){e:{try{g(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:M[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&L.aa.h.call(this)}}h(L,P);var M={2:"touch",3:"pen",4:"mouse"};L.prototype.h=function(){L.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),F=0;function V(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++F,this.da=this.fa=!1}function z(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function B(e){this.src=e,this.g={},this.h=0}function j(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(z(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function $(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}B.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=$(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new V(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var q="closure_lm_"+(1e6*Math.random()|0),H={};function W(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)W(e,t[s],n,r,i);return null}return n=Z(n),e&&e[U]?e.K(t,n,o(r)?!!r.capture:!!r,i):function(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var a=o(i)?!!i.capture:!!i,l=X(e);if(l||(e[q]=l=new B(e)),n=l.add(t,n,r,a,s),n.proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=Y;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)O||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Q(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}(e,t,n,!1,r,i)}function K(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)K(e,t[s],n,r,i);else r=o(r)?!!r.capture:!!r,n=Z(n),e&&e[U]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=$(s=e.g[t],n,r,i))&&(z(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=X(e))&&(t=e.g[t.toString()],e=-1,t&&(e=$(t,n,r,i)),(n=-1<e?t[e]:null)&&G(n))}function G(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[U])j(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Q(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=X(t))?(j(n,e),0==n.h&&(n.src=null,t[q]=null)):z(e)}}}function Q(e){return e in H?H[e]:H[e]="on"+e}function Y(e,t){if(e.da)e=!0;else{t=new L(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&G(e),e=n.call(r,t)}return e}function X(e){return(e=e[q])instanceof B?e:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(e){return"function"==typeof e?e:(e[J]||(e[J]=function(t){return e.handleEvent(t)}),e[J])}function ee(){D.call(this),this.i=new B(this),this.M=this,this.F=null}function te(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new P(t,e);else if(t instanceof P)t.target=t.target||e;else{var i=t;_(t=new P(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ne(o,r,!0,t)&&i}if(i=ne(o=t.g=e,r,!0,t)&&i,i=ne(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ne(o=t.g=n[s],r,!1,t)&&i}function ne(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.fa&&j(e.i,o),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}function re(e,t,n){if("function"==typeof e)n&&(e=u(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=u(e.handleEvent,e)}return 2147483647<Number(t)?-1:i.setTimeout(e,t||0)}function ie(e){e.g=re((()=>{e.g=null,e.i&&(e.i=!1,ie(e))}),e.l);const t=e.h;e.h=null,e.m.apply(null,t)}h(ee,D),ee.prototype[U]=!0,ee.prototype.removeEventListener=function(e,t,n,r){K(this,e,t,n,r)},ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)z(n[r]);delete t.g[e],t.h--}}this.F=null},ee.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ee.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class se extends D{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ie(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oe(e){D.call(this),this.h=e,this.g={}}h(oe,D);var ae=[];function le(e){v(e.g,(function(e,t){this.g.hasOwnProperty(t)&&G(e)}),e),e.g={}}oe.prototype.N=function(){oe.aa.N.call(this),le(this)},oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ue=i.JSON.stringify,ce=i.JSON.parse,he=class{stringify(e){return i.JSON.stringify(e,void 0)}parse(e){return i.JSON.parse(e,void 0)}};function de(){}function fe(e){return e.h||(e.h=e.i())}function pe(){}de.prototype.h=null;var me={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ge(){P.call(this,"d")}function ye(){P.call(this,"c")}h(ge,P),h(ye,P);var ve={},we=null;function be(){return we=we||new ee}function _e(e){P.call(this,ve.La,e)}function Ee(e){const t=be();te(t,new _e(t))}function ke(e,t){P.call(this,ve.STAT_EVENT,e),this.stat=t}function Te(e){const t=be();te(t,new ke(t,e))}function Se(e,t){P.call(this,ve.Ma,e),this.size=t}function Ie(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return i.setTimeout((function(){e()}),t)}function Ce(){this.g=!0}function Ne(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return ue(n)}catch(a){return t}}(e,n)+(r?" "+r:"")}))}ve.La="serverreachability",h(_e,P),ve.STAT_EVENT="statevent",h(ke,P),ve.Ma="timingevent",h(Se,P),Ce.prototype.xa=function(){this.g=!1},Ce.prototype.info=function(){};var Re,Ae={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xe={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function De(){}function Pe(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new oe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Oe}function Oe(){this.i=null,this.g="",this.h=!1}h(De,de),De.prototype.g=function(){return new XMLHttpRequest},De.prototype.i=function(){return{}},Re=new De;var Le={},Me={};function Ue(e,t,n){e.L=1,e.v=ct(st(t)),e.m=n,e.P=!0,Fe(e,null)}function Fe(e,t){e.F=Date.now(),Be(e),e.A=st(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),kt(n.i,"t",r),e.C=0,n=e.j.J,e.h=new Oe,e.g=hn(e.j,n?t:null,!e.m),0<e.O&&(e.M=new se(u(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ae[0]=i.toString()),i=ae);for(var s=0;s<i.length;s++){var o=W(n,i[s],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?w(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Ee(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&"type"==h[1]?o+(c+"=")+u+"&":o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.i,e.u,e.A,e.l,e.R,e.m)}function Ve(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function ze(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Me:(n=Number(t.substring(n,r)),isNaN(n)?Le:(r+=1)+n>t.length?Me:(t=t.slice(r,r+n),e.C=r+n,t))}function Be(e){e.S=Date.now()+e.I,je(e,e.I)}function je(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Ie(u(e.ba,e),t)}function $e(e){e.B&&(i.clearTimeout(e.B),e.B=null)}function qe(e){0==e.j.G||e.J||on(e.j,e)}function He(e){$e(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,le(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function We(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||Xe(n.h,e)))if(!e.K&&Xe(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(c){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;sn(n),Gt(n)}tn(n),Te(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Ie(u(n.Za,n),6e3));if(1>=Ye(n.h)&&n.ca){try{n.ca()}catch(c){}n.ca=void 0}}else ln(n,11)}else if((e.K||n.g==e)&&sn(n),!p(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const t=u[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const c=u[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Ze(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,ut(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms"));var o=e;if((r=n).qa=cn(r,r.J?r.ia:null,r.W),o.K){et(r.h,o);var a=o,l=r.L;l&&(a.I=l),a.B&&($e(a),Be(a)),r.g=o}else en(r);0<n.i.length&&Yt(n)}else"stop"!=u[0]&&"close"!=u[0]||ln(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ln(n,7):Kt(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}Ee()}catch(c){}}Pe.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==$t(e)?t.j():this.Y(e)},Pe.prototype.Y=function(e){try{if(e==this.g)e:{const d=$t(this.g);var t=this.g.Ba();this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||qt(this.g)))){this.J||4!=d||7==t||Ee(),$e(this);var n=this.g.Z();this.X=n;t:if(Ve(this)){var r=qt(this.g);e="";var s=r.length,o=4==$t(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){He(this),qe(this);var a="";break t}this.h.i=new i.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(o&&t==s-1)});r.length=0,this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){t:{if(this.g){var l,u=this.g;if((l=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(l)){var c=l;break t}}c=null}if(!(n=c)){this.o=!1,this.s=3,Te(12),He(this),qe(this);break e}Ne(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,We(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<a.length;){if(e=ze(this,a),e==Me){4==d&&(this.s=4,Te(14),n=!1),Ne(this.i,this.l,null,"[Incomplete Response]");break}if(e==Le){this.s=4,Te(15),Ne(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}Ne(this.i,this.l,e,null),We(this,e)}if(Ve(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=a.length||this.h.h||(this.s=1,Te(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),nn(h),h.M=!0,Te(11))}}else Ne(this.i,this.l,a,"[Invalid Chunked Response]"),He(this),qe(this)}else Ne(this.i,this.l,a,null),We(this,a);4==d&&He(this),this.o&&!this.J&&(4==d?on(this.j,this):(this.o=!1,Be(this)))}else(function(e){const t={};e=(e.g&&2<=$t(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(p(e[r]))continue;var n=E(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,Te(12)):(this.s=0,Te(13)),He(this),qe(this)}}}catch(d){}},Pe.prototype.cancel=function(){this.J=!0,He(this)},Pe.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.i,this.A),2!=this.L&&(Ee(),Te(17)),He(this),this.s=2,qe(this)):je(this,this.S-e)};var Ke=class{constructor(e,t){this.g=e,this.map=t}};function Ge(e){this.l=e||10,i.PerformanceNavigationTiming?e=0<(e=i.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qe(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ye(e){return e.h?1:e.g?e.g.size:0}function Xe(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Ze(e,t){e.g?e.g.add(t):e.h=t}function et(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function tt(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return d(e.i)}function nt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(s(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(s(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(s(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}Ge.prototype.cancel=function(){if(this.i=tt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var rt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function it(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof it){this.h=e.h,ot(this,e.j),this.o=e.o,this.g=e.g,at(this,e.s),this.l=e.l;var t=e.i,n=new wt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),lt(this,n),this.m=e.m}else e&&(t=String(e).match(rt))?(this.h=!1,ot(this,t[1]||"",!0),this.o=ht(t[2]||""),this.g=ht(t[3]||"",!0),at(this,t[4]),this.l=ht(t[5]||"",!0),lt(this,t[6]||"",!0),this.m=ht(t[7]||"")):(this.h=!1,this.i=new wt(null,this.h))}function st(e){return new it(e)}function ot(e,t,n){e.j=n?ht(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function at(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function lt(e,t,n){t instanceof wt?(e.i=t,function(e,t){t&&!e.j&&(bt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(_t(this,t),kt(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=dt(t,yt)),e.i=new wt(t,e.h))}function ut(e,t,n){e.i.set(t,n)}function ct(e){return ut(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ht(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function dt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ft),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ft(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}it.prototype.toString=function(){var e=[],t=this.j;t&&e.push(dt(t,pt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(dt(t,pt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(dt(n,"/"==n.charAt(0)?gt:mt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",dt(n,vt)),e.join("")};var pt=/[#\/\?@]/g,mt=/[#\?:]/g,gt=/[#\?]/g,yt=/[#\?@]/g,vt=/#/g;function wt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function bt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function _t(e,t){bt(e),t=Tt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Et(e,t){return bt(e),t=Tt(e,t),e.g.has(t)}function kt(e,t,n){_t(e,t),0<n.length&&(e.i=null,e.g.set(Tt(e,t),d(n)),e.h+=n.length)}function Tt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function St(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function It(){this.g=new he}function Ct(e,t,n){const r=n||"";try{nt(e,(function(e,n){let i=e;o(e)&&(i=ue(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(BC){throw t.push(r+"type="+encodeURIComponent("_badmap")),BC}}function Nt(e){this.l=e.Ub||null,this.j=e.eb||!1}function Rt(e,t){ee.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function At(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function xt(e){e.readyState=4,e.l=null,e.j=null,e.v=null,Dt(e)}function Dt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Pt(e){let t="";return v(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Ot(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Pt(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):ut(e,t,n))}function Lt(e){ee.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(e=wt.prototype).add=function(e,t){bt(this),this.i=null,e=Tt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){bt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},e.na=function(){bt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},e.V=function(e){bt(this);let t=[];if("string"==typeof e)Et(this,e)&&(t=t.concat(this.g.get(Tt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return bt(this),this.i=null,Et(this,e=Tt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")},h(Nt,de),Nt.prototype.g=function(){return new Rt(this.l,this.j)},Nt.prototype.i=function(e){return function(){return e}}({}),h(Rt,ee),(e=Rt.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,Dt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||i).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,xt(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Dt(this)),this.g&&(this.readyState=3,Dt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;At(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?xt(this):Dt(this),3==this.readyState&&At(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,xt(this))},e.Qa=function(e){this.g&&(this.response=e,xt(this))},e.ga=function(){this.g&&xt(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Rt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),h(Lt,ee);var Mt=/^https?$/i,Ut=["POST","PUT"];function Ft(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,Vt(e),Bt(e)}function Vt(e){e.A||(e.A=!0,te(e,"complete"),te(e,"error"))}function zt(e){if(e.h&&void 0!==r&&(!e.v[1]||4!=$t(e)||2!=e.Z()))if(e.u&&4==$t(e))re(e.Ea,0,e);else if(te(e,"readystatechange"),4==$t(e)){e.h=!1;try{const r=e.Z();e:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=0===r){var o=String(e.D).match(rt)[1]||null;!o&&i.self&&i.self.location&&(o=i.self.location.protocol.slice(0,-1)),s=!Mt.test(o?o.toLowerCase():"")}n=s}if(n)te(e,"complete"),te(e,"success");else{e.m=6;try{var a=2<$t(e)?e.g.statusText:""}catch(l){a=""}e.l=a+" ["+e.Z()+"]",Vt(e)}}finally{Bt(e)}}}function Bt(e,t){if(e.g){jt(e);const n=e.g,r=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||te(e,"ready");try{n.onreadystatechange=r}catch(BC){}}}function jt(e){e.I&&(i.clearTimeout(e.I),e.I=null)}function $t(e){return e.g?e.g.readyState:0}function qt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ht(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Wt(e){this.Aa=0,this.i=[],this.j=new Ce,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ht("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ht("baseRetryDelayMs",5e3,e),this.cb=Ht("retryDelaySeedMs",1e4,e),this.Wa=Ht("forwardChannelMaxRetries",2,e),this.wa=Ht("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new Ge(e&&e.concurrentRequestLimit),this.Da=new It,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Kt(e){if(Qt(e),3==e.G){var t=e.U++,n=st(e.I);if(ut(n,"SID",e.K),ut(n,"RID",t),ut(n,"TYPE","terminate"),Jt(e,n),(t=new Pe(e,e.j,t)).L=2,t.v=ct(st(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&i.Image&&((new Image).src=t.v,n=!0),n||(t.g=hn(t.j,null),t.g.ea(t.v)),t.F=Date.now(),Be(t)}un(e)}function Gt(e){e.g&&(nn(e),e.g.cancel(),e.g=null)}function Qt(e){Gt(e),e.u&&(i.clearTimeout(e.u),e.u=null),sn(e),e.h.cancel(),e.s&&("number"==typeof e.s&&i.clearTimeout(e.s),e.s=null)}function Yt(e){if(!Qe(e.h)&&!e.s){e.s=!0;var t=e.Ga;C||A(),N||(C(),N=!0),R.add(t,e),e.B=0}}function Xt(e,t){var n;n=t?t.l:e.U++;const r=st(e.I);ut(r,"SID",e.K),ut(r,"RID",n),ut(r,"AID",e.T),Jt(e,r),e.m&&e.o&&Ot(r,e.m,e.o),n=new Pe(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=Zt(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),Ze(e.h,n),Ue(n,r,t)}function Jt(e,t){e.H&&v(e.H,(function(e,n){ut(t,n,e)})),e.l&&nt({},(function(e,n){ut(t,n,e)}))}function Zt(e,t,n){n=Math.min(e.i.length,n);var r=e.l?u(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const l=i[a].map;if(n-=t,0>n)t=Math.max(0,i[a].g-100),o=!1;else try{Ct(l,e,"req"+n+"_")}catch(s){r&&r(l)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function en(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;C||A(),N||(C(),N=!0),R.add(t,e),e.v=0}}function tn(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=Ie(u(e.Fa,e),an(e,e.v)),e.v++,!0)}function nn(e){null!=e.A&&(i.clearTimeout(e.A),e.A=null)}function rn(e){e.g=new Pe(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=st(e.qa);ut(t,"RID","rpc"),ut(t,"SID",e.K),ut(t,"AID",e.T),ut(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&ut(t,"TO",e.ja),ut(t,"TYPE","xmlhttp"),Jt(e,t),e.m&&e.o&&Ot(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=ct(st(t)),n.m=null,n.P=!0,Fe(n,e)}function sn(e){null!=e.C&&(i.clearTimeout(e.C),e.C=null)}function on(e,t){var n=null;if(e.g==t){sn(e),nn(e),e.g=null;var r=2}else{if(!Xe(e.h,t))return;n=t.D,et(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i=e.B;te(r=be(),new Se(r,n)),Yt(e)}else en(e);else if(3==(i=t.s)||0==i&&0<t.X||!(1==r&&function(e,t){return!(Ye(e.h)>=e.h.j-(e.s?1:0)||(e.s?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa)||(e.s=Ie(u(e.Ga,e,t),an(e,e.B)),e.B++,0)))}(e,t)||2==r&&tn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:ln(e,5);break;case 4:ln(e,10);break;case 3:ln(e,6);break;default:ln(e,2)}}function an(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function ln(e,t){if(e.j.info("Error code "+t),2==t){var n=u(e.fb,e),r=e.Xa;const t=!r;r=new it(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||ot(r,"https"),ct(r),t?function(e,t){const n=new Ce;if(i.Image){const r=new Image;r.onload=c(St,n,"TestLoadImage: loaded",!0,t,r),r.onerror=c(St,n,"TestLoadImage: error",!1,t,r),r.onabort=c(St,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=c(St,n,"TestLoadImage: timeout",!1,t,r),i.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new Ce;const n=new AbortController,r=setTimeout((()=>{n.abort(),St(0,0,!1,t)}),1e4);fetch(e,{signal:n.signal}).then((e=>{clearTimeout(r),e.ok?St(0,0,!0,t):St(0,0,!1,t)})).catch((()=>{clearTimeout(r),St(0,0,!1,t)}))}(r.toString(),n)}else Te(2);e.G=0,e.l&&e.l.sa(t),un(e),Qt(e)}function un(e){if(e.G=0,e.ka=[],e.l){const t=tt(e.h);0==t.length&&0==e.i.length||(f(e.ka,t),f(e.ka,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.ra()}}function cn(e,t,n){var r=n instanceof it?st(n):new it(n);if(""!=r.g)t&&(r.g=t+"."+r.g),at(r,r.s);else{var s=i.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var o=new it(null);r&&ot(o,r),t&&(o.g=t),s&&at(o,s),n&&(o.l=n),r=o}return n=e.D,t=e.ya,n&&t&&ut(r,n,t),ut(r,"VER",e.la),Jt(e,r),r}function hn(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ca&&!e.pa?new Lt(new Nt({eb:n})):new Lt(e.pa)).Ha(e.J),t}function dn(){}function fn(){}function pn(e,t){ee.call(this),this.g=new Wt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!p(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!p(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new yn(this)}function mn(e){ge.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function gn(){ye.call(this),this.status=1}function yn(e){this.g=e}(e=Lt.prototype).Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Re.g(),this.v=this.o?fe(this.o):fe(Re),this.g.onreadystatechange=u(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(o){return void Ft(this,o)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=i.FormData&&e instanceof i.FormData,!(0<=Array.prototype.indexOf.call(Ut,t,void 0))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,a]of n)this.g.setRequestHeader(i,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jt(this),this.u=!0,this.g.send(e),this.u=!1}catch(o){Ft(this,o)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,te(this,"complete"),te(this,"abort"),Bt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bt(this,!0)),Lt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?zt(this):this.bb())},e.bb=function(){zt(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<$t(this)?this.g.status:-1}catch(Je){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(Je){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ce(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=Wt.prototype).la=8,e.G=1,e.connect=function(e,t,n,r){Te(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=cn(this,null,this.W),Yt(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Pe(this,this.j,e);let s=this.o;if(this.S&&(s?(s=w(s),_(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Zt(this,i,t),ut(n=st(this.I),"RID",e),ut(n,"CVER",22),this.D&&ut(n,"X-HTTP-Session-Id",this.D),Jt(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Pt(s)))+"&"+t:this.m&&Ot(n,this.m,s)),Ze(this.h,i),this.Ua&&ut(n,"TYPE","init"),this.P?(ut(n,"$req",t),ut(n,"SID","null"),i.T=!0,Ue(i,n,null)):Ue(i,n,t),this.G=2}}else 3==this.G&&(e?Xt(this,e):0==this.i.length||Qe(this.h)||Xt(this))},e.Fa=function(){if(this.u=null,rn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=Ie(u(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Te(10),Gt(this),rn(this))},e.Za=function(){null!=this.C&&(this.C=null,Gt(this),tn(this),Te(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),Te(2)):(this.j.info("Failed to ping google.com"),Te(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=dn.prototype).ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},fn.prototype.g=function(e,t){return new pn(e,t)},h(pn,ee),pn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pn.prototype.close=function(){Kt(this.g)},pn.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=ue(e),e=n);t.i.push(new Ke(t.Ya++,e)),3==t.G&&Yt(t)},pn.prototype.N=function(){this.g.l=null,delete this.j,Kt(this.g),delete this.g,pn.aa.N.call(this)},h(mn,ge),h(gn,ye),h(yn,dn),yn.prototype.ua=function(){te(this.g,"a")},yn.prototype.ta=function(e){te(this.g,new mn(e))},yn.prototype.sa=function(e){te(this.g,new gn)},yn.prototype.ra=function(){te(this.g,"b")},fn.prototype.createWebChannel=fn.prototype.g,pn.prototype.send=pn.prototype.o,pn.prototype.open=pn.prototype.m,pn.prototype.close=pn.prototype.close,Cw=function(){return new fn},Iw=function(){return be()},Sw=ve,Tw={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ae.NO_ERROR=0,Ae.TIMEOUT=8,Ae.HTTP_ERROR=6,kw=Ae,xe.COMPLETE="complete",Ew=xe,pe.EventType=me,me.OPEN="a",me.CLOSE="b",me.ERROR="c",me.MESSAGE="d",ee.prototype.listen=ee.prototype.K,_w=pe,Lt.prototype.listenOnce=Lt.prototype.L,Lt.prototype.getLastError=Lt.prototype.Ka,Lt.prototype.getLastErrorCode=Lt.prototype.Ba,Lt.prototype.getStatus=Lt.prototype.Z,Lt.prototype.getResponseJson=Lt.prototype.Oa,Lt.prototype.getResponseText=Lt.prototype.oa,Lt.prototype.send=Lt.prototype.ea,Lt.prototype.setWithCredentials=Lt.prototype.Ha,bw=Lt}).apply(void 0!==Nw?Nw:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const Rw="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Aw.UNAUTHENTICATED=new Aw(null),Aw.GOOGLE_CREDENTIALS=new Aw("google-credentials-uid"),Aw.FIRST_PARTY=new Aw("first-party-uid"),Aw.MOCK_USER=new Aw("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let xw="11.2.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=new Tf("@firebase/firestore");function Pw(){return Dw.logLevel}function Ow(e,...t){if(Dw.logLevel<=vf.DEBUG){const n=t.map(Uw);Dw.debug(`Firestore (${xw}): ${e}`,...n)}}function Lw(e,...t){if(Dw.logLevel<=vf.ERROR){const n=t.map(Uw);Dw.error(`Firestore (${xw}): ${e}`,...n)}}function Mw(e,...t){if(Dw.logLevel<=vf.WARN){const n=t.map(Uw);Dw.warn(`Firestore (${xw}): ${e}`,...n)}}function Uw(e){if("string"==typeof e)return e;try{
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
return t=e,JSON.stringify(t)}catch(n){return e}var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(e="Unexpected state"){const t=`FIRESTORE (${xw}) INTERNAL ASSERTION FAILED: `+e;throw Lw(t),new Error(t)}function Vw(e,t){e||Fw()}function zw(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class jw extends tf{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Hw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Aw.UNAUTHENTICATED)))}shutdown(){}}class Ww{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Kw{constructor(e){this.t=e,this.currentUser=Aw.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Vw(void 0===this.o);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new $w;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new $w,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Ow("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Ow("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new $w)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Ow("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Vw("string"==typeof t.accessToken),new qw(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Vw(null===e||"string"==typeof e),new Aw(e)}}class Gw{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Aw.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Qw{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new Gw(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Aw.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Yw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Vw(void 0===this.o);const n=e=>{null!=e.error&&Ow("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,Ow("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Ow("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):Ow("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Vw("string"==typeof e.token),this.R=e.token,new Yw(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=Jw(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function eb(e,t){return e<t?-1:e>t?1:0}function tb(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{static now(){return nb.fromMillis(Date.now())}static fromDate(e){return nb.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new nb(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new jw(Bw.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new jw(Bw.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new jw(Bw.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new jw(Bw.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?eb(this.nanoseconds,e.nanoseconds):eb(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{static fromTimestamp(e){return new rb(e)}static min(){return new rb(new nb(0,0))}static max(){return new rb(new nb(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,t,n){void 0===t?t=0:t>e.length&&Fw(),void 0===n?n=e.length-t:n>e.length-t&&Fw(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ib.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ib?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=ib.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return Math.sign(e.length-t.length)}static compareSegments(e,t){const n=ib.isNumericId(e),r=ib.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?ib.extractNumericId(e).compare(ib.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return yw.fromString(e.substring(4,e.length-2))}}class sb extends ib{construct(e,t,n){return new sb(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new jw(Bw.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new sb(t)}static emptyPath(){return new sb([])}}const ob=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ab extends ib{construct(e,t,n){return new ab(e,t,n)}static isValidIdentifier(e){return ob.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ab.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ab(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new jw(Bw.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new jw(Bw.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new jw(Bw.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new jw(Bw.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ab(t)}static emptyPath(){return new ab([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e){this.path=e}static fromPath(e){return new lb(sb.fromString(e))}static fromName(e){return new lb(sb.fromString(e).popFirst(5))}static empty(){return new lb(sb.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===sb.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return sb.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new lb(new sb(e.slice()))}}function ub(e){return new cb(e.readTime,e.key,-1)}class cb{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new cb(rb.min(),lb.empty(),-1)}static max(){return new cb(rb.max(),lb.empty(),-1)}}function hb(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=lb.comparator(e.documentKey,t.documentKey),0!==n?n:eb(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}class db{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fb(e){if(e.code!==Bw.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;Ow("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Fw(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new pb(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof pb?t:pb.resolve(t)}catch(t){return pb.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):pb.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):pb.reject(t)}static resolve(e){return new pb(((t,n)=>{t(e)}))}static reject(e){return new pb(((t,n)=>{n(e)}))}static waitFor(e){return new pb(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=pb.resolve(!1);for(const n of e)t=t.next((e=>e?pb.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new pb(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const l=a;t(e[l]).next((e=>{s[l]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new pb(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}function mb(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}function yb(e){return null==e}function vb(e){return 0===e&&1/e==-1/0}function wb(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function bb(e){return e+""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Eb(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function kb(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gb.oe=-1;class Tb{constructor(e,t){this.comparator=e,this.root=t||Ib.EMPTY}insert(e,t){return new Tb(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ib.BLACK,null,null))}remove(e){return new Tb(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ib.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sb(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sb(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sb(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sb(this.root,e,this.comparator,!0)}}class Sb{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ib{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ib.RED,this.left=null!=r?r:Ib.EMPTY,this.right=null!=i?i:Ib.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Ib(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ib.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ib.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ib.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ib.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Fw();if(this.right.isRed())throw Fw();const e=this.left.check();if(e!==this.right.check())throw Fw();return e+(this.isRed()?0:1)}}Ib.EMPTY=null,Ib.RED=!0,Ib.BLACK=!1,Ib.EMPTY=new class{constructor(){this.size=0}get key(){throw Fw()}get value(){throw Fw()}get color(){throw Fw()}get left(){throw Fw()}get right(){throw Fw()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ib(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cb{constructor(e){this.comparator=e,this.data=new Tb(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Nb(this.data.getIterator())}getIteratorFrom(e){return new Nb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Cb))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Cb(this.comparator);return t.data=e,t}}class Nb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.fields=e,e.sort(ab.comparator)}static empty(){return new Rb([])}unionWith(e){let t=new Cb(ab.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Rb(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return tb(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Ab("Invalid base64 string: "+t):t}}(e);return new xb(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new xb(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return eb(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xb.EMPTY_BYTE_STRING=new xb("");const Db=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pb(e){if(Vw(!!e),"string"==typeof e){let t=0;const n=Db.exec(e);if(Vw(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ob(e.seconds),nanos:Ob(e.nanos)}}function Ob(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Lb(e){return"string"==typeof e?xb.fromBase64String(e):xb.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ub(e){const t=e.mapValue.fields.__previous_value__;return Mb(t)?Ub(t):t}function Fb(e){const t=Pb(e.mapValue.fields.__local_write_time__.timestampValue);return new nb(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e,t,n,r,i,s,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class zb{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new zb("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof zb&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb={fields:{__type__:{stringValue:"__max__"}}};function jb(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Mb(e)?4:function(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)?9007199254740991:function(e){var t,n;return"__vector__"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}(e)?10:11:Fw()}function $b(e,t){if(e===t)return!0;const n=jb(e);if(n!==jb(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Fb(e).isEqual(Fb(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Pb(e.timestampValue),r=Pb(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,Lb(e.bytesValue).isEqual(Lb(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ob(e.geoPointValue.latitude)===Ob(t.geoPointValue.latitude)&&Ob(e.geoPointValue.longitude)===Ob(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ob(e.integerValue)===Ob(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ob(e.doubleValue),r=Ob(t.doubleValue);return n===r?vb(n)===vb(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return tb(e.arrayValue.values||[],t.arrayValue.values||[],$b);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(_b(n)!==_b(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!$b(n[i],r[i])))return!1;return!0}(e,t);default:return Fw()}var r}function qb(e,t){return void 0!==(e.values||[]).find((e=>$b(e,t)))}function Hb(e,t){if(e===t)return 0;const n=jb(e),r=jb(t);if(n!==r)return eb(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return eb(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ob(e.integerValue||e.doubleValue),r=Ob(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Wb(e.timestampValue,t.timestampValue);case 4:return Wb(Fb(e),Fb(t));case 5:return eb(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Lb(e),r=Lb(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=eb(n[i],r[i]);if(0!==e)return e}return eb(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=eb(Ob(e.latitude),Ob(t.latitude));return 0!==n?n:eb(Ob(e.longitude),Ob(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return Kb(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,s;const o=e.fields||{},a=t.fields||{},l=null===(n=o.value)||void 0===n?void 0:n.arrayValue,u=null===(r=a.value)||void 0===r?void 0:r.arrayValue,c=eb((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==c?c:Kb(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===Bb&&t===Bb)return 0;if(e===Bb)return 1;if(t===Bb)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=eb(r[o],s[o]);if(0!==e)return e;const t=Hb(n[r[o]],i[s[o]]);if(0!==t)return t}return eb(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Fw()}}function Wb(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return eb(e,t);const n=Pb(e),r=Pb(t),i=eb(n.seconds,r.seconds);return 0!==i?i:eb(n.nanos,r.nanos)}function Kb(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Hb(n[i],r[i]);if(e)return e}return eb(n.length,r.length)}function Gb(e){return Qb(e)}function Qb(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Pb(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Lb(e.bytesValue).toBase64():"referenceValue"in e?function(e){return lb.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Qb(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Qb(e.fields[i])}`;return n+"}"}(e.mapValue):Fw()}function Yb(e){switch(jb(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ub(e);return t?16+Yb(t):16;case 5:return 2*e.stringValue.length;case 6:return Lb(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return(e.arrayValue.values||[]).reduce(((e,t)=>e+Yb(t)),0);case 10:case 11:return function(e){let t=0;return Eb(e.fields,((e,n)=>{t+=e.length+Yb(n)})),t}(e.mapValue);default:throw Fw()}}function Xb(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Jb(e){return!!e&&"integerValue"in e}function Zb(e){return!!e&&"arrayValue"in e}function e_(e){return!!e&&"nullValue"in e}function t_(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function n_(e){return!!e&&"mapValue"in e}function r_(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Eb(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=r_(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=r_(e.arrayValue.values[n]);return t}return Object.assign({},e)}class i_{constructor(e){this.value=e}static empty(){return new i_({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!n_(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=r_(t)}setAll(e){let t=ab.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=r_(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());n_(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return $b(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];n_(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Eb(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new i_(r_(this.value))}}function s_(e){const t=[];return Eb(e.fields,((e,n)=>{const r=new ab([e]);if(n_(n)){const e=s_(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Rb(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class o_{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new o_(e,0,rb.min(),rb.min(),rb.min(),i_.empty(),0)}static newFoundDocument(e,t,n,r){return new o_(e,1,t,rb.min(),n,r,0)}static newNoDocument(e,t){return new o_(e,2,t,rb.min(),rb.min(),i_.empty(),0)}static newUnknownDocument(e,t){return new o_(e,3,t,rb.min(),rb.min(),i_.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(rb.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=i_.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=i_.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=rb.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof o_&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new o_(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,t){this.position=e,this.inclusive=t}}function l_(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?lb.comparator(lb.fromName(o.referenceValue),n.key):Hb(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function u_(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!$b(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,t="asc"){this.field=e,this.dir=t}}function h_(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{}class f_ extends d_{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new b_(e,t,n):"array-contains"===t?new T_(e,n):"in"===t?new S_(e,n):"not-in"===t?new I_(e,n):"array-contains-any"===t?new C_(e,n):new f_(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new __(e,n):new E_(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Hb(t,this.value)):null!==t&&jb(this.value)===jb(t)&&this.matchesComparison(Hb(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Fw()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class p_ extends d_{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new p_(e,t)}matches(e){return m_(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function m_(e){return"and"===e.op}function g_(e){return function(e){for(const t of e.filters)if(t instanceof p_)return!1;return!0}(e)&&m_(e)}function y_(e){if(e instanceof f_)return e.field.canonicalString()+e.op.toString()+Gb(e.value);if(g_(e))return e.filters.map((e=>y_(e))).join(",");{const t=e.filters.map((e=>y_(e))).join(",");return`${e.op}(${t})`}}function v_(e,t){return e instanceof f_?(n=e,(r=t)instanceof f_&&n.op===r.op&&n.field.isEqual(r.field)&&$b(n.value,r.value)):e instanceof p_?function(e,t){return t instanceof p_&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&v_(n,t.filters[r])),!0)}(e,t):void Fw();var n,r}function w_(e){return e instanceof f_?`${(t=e).field.canonicalString()} ${t.op} ${Gb(t.value)}`:e instanceof p_?function(e){return e.op.toString()+" {"+e.getFilters().map(w_).join(" ,")+"}"}(e):"Filter";var t}class b_ extends f_{constructor(e,t,n){super(e,t,n),this.key=lb.fromName(n.referenceValue)}matches(e){const t=lb.comparator(e.key,this.key);return this.matchesComparison(t)}}class __ extends f_{constructor(e,t){super(e,"in",t),this.keys=k_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class E_ extends f_{constructor(e,t){super(e,"not-in",t),this.keys=k_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function k_(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>lb.fromName(e.referenceValue)))}class T_ extends f_{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Zb(t)&&qb(t.arrayValue,this.value)}}class S_ extends f_{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&qb(this.value.arrayValue,t)}}class I_ extends f_{constructor(e,t){super(e,"not-in",t)}matches(e){if(qb(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!qb(this.value.arrayValue,t)}}class C_ extends f_{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Zb(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>qb(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ue=null}}function R_(e,t=null,n=[],r=[],i=null,s=null,o=null){return new N_(e,t,n,r,i,s,o)}function A_(e){const t=zw(e);if(null===t.ue){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>y_(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),yb(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Gb(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Gb(e))).join(",")),t.ue=e}return t.ue}function x_(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!h_(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!v_(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!u_(e.startAt,t.startAt)&&u_(e.endAt,t.endAt)}function D_(e){return lb.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function O_(e){return new P_(e)}function L_(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function M_(e){return null!==e.collectionGroup}function U_(e){const t=zw(e);if(null===t.ce){t.ce=[];const e=new Set;for(const r of t.explicitOrderBy)t.ce.push(r),e.add(r.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new Cb(ab.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t})(t).forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new c_(r,n))})),e.has(ab.keyField().canonicalString())||t.ce.push(new c_(ab.keyField(),n))}return t.ce}function F_(e){const t=zw(e);return t.le||(t.le=function(e,t){if("F"===e.limitType)return R_(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new c_(e.field,t)}));const n=e.endAt?new a_(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new a_(e.startAt.position,e.startAt.inclusive):null;return R_(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,U_(e))),t.le}function V_(e,t){const n=e.filters.concat([t]);return new P_(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function z_(e,t,n){return new P_(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function B_(e,t){return x_(F_(e),F_(t))&&e.limitType===t.limitType}function j_(e){return`${A_(F_(e))}|lt:${e.limitType}`}function $_(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>w_(e))).join(", ")}]`),yb(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Gb(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Gb(e))).join(",")),`Target(${t})`}(F_(e))}; limitType=${e.limitType})`}function q_(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):lb.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of U_(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=l_(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,U_(n),r)||n.endAt&&!function(e,t,n){const r=l_(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,U_(n),r)));var n,r}function H_(e){return(t,n)=>{let r=!1;for(const i of U_(e)){const e=W_(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function W_(e,t,n){const r=e.field.isKeyField()?lb.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Hb(r,i):Fw()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Fw()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Eb(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return kb(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=new Tb(lb.comparator);function Q_(){return G_}const Y_=new Tb(lb.comparator);function X_(...e){let t=Y_;for(const n of e)t=t.insert(n.key,n);return t}function J_(e){let t=Y_;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Z_(){return tE()}function eE(){return tE()}function tE(){return new K_((e=>e.toString()),((e,t)=>e.isEqual(t)))}const nE=new Tb(lb.comparator),rE=new Cb(lb.comparator);function iE(...e){let t=rE;for(const n of e)t=t.add(n);return t}const sE=new Cb(eb);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oE(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vb(t)?"-0":t}}function aE(e){return{integerValue:""+e}}function lE(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!vb(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)?aE(t):oE(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(){this._=void 0}}function cE(e,t,n){return e instanceof fE?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Mb(t)&&(t=Ub(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof pE?mE(e,t):e instanceof gE?yE(e,t):function(e,t){const n=dE(e,t),r=wE(n)+wE(e.Pe);return Jb(n)&&Jb(e.Pe)?aE(r):oE(e.serializer,r)}(e,t)}function hE(e,t,n){return e instanceof pE?mE(e,t):e instanceof gE?yE(e,t):n}function dE(e,t){return e instanceof vE?Jb(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}class fE extends uE{}class pE extends uE{constructor(e){super(),this.elements=e}}function mE(e,t){const n=bE(t);for(const r of e.elements)n.some((e=>$b(e,r)))||n.push(r);return{arrayValue:{values:n}}}class gE extends uE{constructor(e){super(),this.elements=e}}function yE(e,t){let n=bE(t);for(const r of e.elements)n=n.filter((e=>!$b(e,r)));return{arrayValue:{values:n}}}class vE extends uE{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function wE(e){return Ob(e.integerValue||e.doubleValue)}function bE(e){return Zb(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,t){this.field=e,this.transform=t}}class EE{constructor(e,t){this.version=e,this.transformResults=t}}class kE{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new kE}static exists(e){return new kE(void 0,e)}static updateTime(e){return new kE(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function TE(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class SE{}function IE(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new ME(e.key,kE.none()):new xE(e.key,e.data,kE.none());{const n=e.data,r=i_.empty();let i=new Cb(ab.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new DE(e.key,r,new Rb(i.toArray()),kE.none())}}function CE(e,t,n){var r;e instanceof xE?function(e,t,n){const r=e.value.clone(),i=OE(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof DE?function(e,t,n){if(!TE(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=OE(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(PE(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function NE(e,t,n,r){return e instanceof xE?function(e,t,n,r){if(!TE(e.precondition,t))return n;const i=e.value.clone(),s=LE(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof DE?function(e,t,n,r){if(!TE(e.precondition,t))return n;const i=LE(e.fieldTransforms,r,t),s=t.data;return s.setAll(PE(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):(i=t,s=n,TE(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function RE(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=dE(r.transform,e||null);null!=i&&(null===n&&(n=i_.empty()),n.set(r.field,i))}return n||null}function AE(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&tb(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof pE&&r instanceof pE||n instanceof gE&&r instanceof gE?tb(n.elements,r.elements,$b):n instanceof vE&&r instanceof vE?$b(n.Pe,r.Pe):n instanceof fE&&r instanceof fE);var n,r}(e,t))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}class xE extends SE{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class DE extends SE{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function PE(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function OE(e,t,n){const r=new Map;Vw(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,hE(o,a,n[i]))}return r}function LE(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,cE(e,s,t))}return r}class ME extends SE{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class UE extends SE{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&CE(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=NE(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=NE(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=eE();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=IE(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(rb.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),iE())}isEqual(e){return this.batchId===e.batchId&&tb(this.mutations,e.mutations,((e,t)=>AE(e,t)))&&tb(this.baseMutations,e.baseMutations,((e,t)=>AE(e,t)))}}class VE{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Vw(e.mutations.length===n.length);let r=function(){return nE}();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new VE(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jE,$E;function qE(e){if(void 0===e)return Lw("GRPC error has no .code"),Bw.UNKNOWN;switch(e){case jE.OK:return Bw.OK;case jE.CANCELLED:return Bw.CANCELLED;case jE.UNKNOWN:return Bw.UNKNOWN;case jE.DEADLINE_EXCEEDED:return Bw.DEADLINE_EXCEEDED;case jE.RESOURCE_EXHAUSTED:return Bw.RESOURCE_EXHAUSTED;case jE.INTERNAL:return Bw.INTERNAL;case jE.UNAVAILABLE:return Bw.UNAVAILABLE;case jE.UNAUTHENTICATED:return Bw.UNAUTHENTICATED;case jE.INVALID_ARGUMENT:return Bw.INVALID_ARGUMENT;case jE.NOT_FOUND:return Bw.NOT_FOUND;case jE.ALREADY_EXISTS:return Bw.ALREADY_EXISTS;case jE.PERMISSION_DENIED:return Bw.PERMISSION_DENIED;case jE.FAILED_PRECONDITION:return Bw.FAILED_PRECONDITION;case jE.ABORTED:return Bw.ABORTED;case jE.OUT_OF_RANGE:return Bw.OUT_OF_RANGE;case jE.UNIMPLEMENTED:return Bw.UNIMPLEMENTED;case jE.DATA_LOSS:return Bw.DATA_LOSS;default:return Fw()}}($E=jE||(jE={}))[$E.OK=0]="OK",$E[$E.CANCELLED=1]="CANCELLED",$E[$E.UNKNOWN=2]="UNKNOWN",$E[$E.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$E[$E.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$E[$E.NOT_FOUND=5]="NOT_FOUND",$E[$E.ALREADY_EXISTS=6]="ALREADY_EXISTS",$E[$E.PERMISSION_DENIED=7]="PERMISSION_DENIED",$E[$E.UNAUTHENTICATED=16]="UNAUTHENTICATED",$E[$E.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$E[$E.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$E[$E.ABORTED=10]="ABORTED",$E[$E.OUT_OF_RANGE=11]="OUT_OF_RANGE",$E[$E.UNIMPLEMENTED=12]="UNIMPLEMENTED",$E[$E.INTERNAL=13]="INTERNAL",$E[$E.UNAVAILABLE=14]="UNAVAILABLE",$E[$E.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const HE=new yw([4294967295,4294967295],0);function WE(e){const t=(new TextEncoder).encode(e),n=new vw;return n.update(t),new Uint8Array(n.digest())}function KE(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new yw([n,r],0),new yw([i,s],0)]}class GE{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new QE(`Invalid padding: ${t}`);if(n<0)throw new QE(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new QE(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new QE(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=yw.fromNumber(this.Te)}de(e,t,n){let r=e.add(t.multiply(yw.fromNumber(n)));return 1===r.compare(HE)&&(r=new yw([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ie).toNumber()}Ee(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;const t=WE(e),[n,r]=KE(t);for(let i=0;i<this.hashCount;i++){const e=this.de(n,r,i);if(!this.Ee(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new GE(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.Te)return;const t=WE(e),[n,r]=KE(t);for(let i=0;i<this.hashCount;i++){const e=this.de(n,r,i);this.Ae(e)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class QE extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,XE.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new YE(rb.min(),r,new Tb(eb),Q_(),iE())}}class XE{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new XE(n,t,iE(),iE(),iE())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r}}class ZE{constructor(e,t){this.targetId=e,this.me=t}}class ek{constructor(e,t,n=xb.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class tk{constructor(){this.fe=0,this.ge=ik(),this.pe=xb.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=iE(),t=iE(),n=iE();return this.ge.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Fw()}})),new XE(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=ik()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Vw(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class nk{constructor(e){this.Be=e,this.Le=new Map,this.ke=Q_(),this.qe=rk(),this.Qe=rk(),this.Ke=new Tb(eb)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,(t=>{const n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.je(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.De(e.resumeToken));break;default:Fw()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach(((e,n)=>{this.je(n)&&t(n)}))}Je(e){const t=e.targetId,n=e.me.count,r=this.Ye(t);if(r){const i=r.target;if(D_(i))if(0===n){const e=new lb(i.path);this.We(t,e,o_.newNoDocument(e,rb.min()))}else Vw(1===n);else{const r=this.Ze(t);if(r!==n){const n=this.Xe(e),i=n?this.et(n,e,r):1;if(0!==i){this.He(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,e)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,o;try{s=Lb(n).toUint8Array()}catch(a){if(a instanceof Ab)return Mw("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{o=new GE(s,r,i)}catch(a){return Mw(a instanceof QE?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return 0===o.Te?null:o}et(e,t,n){return t.me.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){const n=this.Be.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.Be.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.We(t,n,null),r++)})),r}it(e){const t=new Map;this.Le.forEach(((n,r)=>{const i=this.Ye(r);if(i){if(n.current&&D_(i.target)){const t=new lb(i.target.path);this.st(t).has(r)||this.ot(r,t)||this.We(r,t,o_.newNoDocument(t,e))}n.be&&(t.set(r,n.ve()),n.Ce())}}));let n=iE();this.Qe.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.ke.forEach(((t,n)=>n.setReadTime(e)));const r=new YE(e,t,this.Ke,this.ke,n);return this.ke=Q_(),this.qe=rk(),this.Qe=rk(),this.Ke=new Tb(eb),r}Ue(e,t){if(!this.je(e))return;const n=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,n){if(!this.je(e))return;const r=this.ze(e);this.ot(e,t)?r.Fe(t,1):r.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new tk,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new Cb(eb),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Cb(eb),this.qe=this.qe.insert(e,t)),t}je(e){const t=null!==this.Ye(e);return t||Ow("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new tk),this.Be.getRemoteKeysForTarget(e).forEach((t=>{this.We(e,t,null)}))}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function rk(){return new Tb(lb.comparator)}function ik(){return new Tb(lb.comparator)}const sk=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ok=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ak=(()=>({and:"AND",or:"OR"}))();class lk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function uk(e,t){return e.useProto3Json||yb(t)?t:{value:t}}function ck(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function hk(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function dk(e,t){return ck(e,t.toTimestamp())}function fk(e){return Vw(!!e),rb.fromTimestamp(function(e){const t=Pb(e);return new nb(t.seconds,t.nanos)}(e))}function pk(e,t){return mk(e,t).canonicalString()}function mk(e,t){const n=(r=e,new sb(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===t?n:n.child(t)}function gk(e){const t=sb.fromString(e);return Vw(Ok(t)),t}function yk(e,t){return pk(e.databaseId,t.path)}function vk(e,t){const n=gk(t);if(n.get(1)!==e.databaseId.projectId)throw new jw(Bw.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new jw(Bw.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new lb(_k(n))}function wk(e,t){return pk(e.databaseId,t)}function bk(e){return new sb(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function _k(e){return Vw(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Ek(e,t,n){return{name:yk(e,t),fields:n.value.mapValue.fields}}function kk(e,t){return{documents:[wk(e,t.path)]}}function Tk(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=wk(e,i);const s=function(e){if(0!==e.length)return Dk(p_.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(e){if(0!==e.length)return e.map((e=>{return{field:Ak((t=e).field),direction:Ck(t.dir)};var t}))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=uk(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt={before:(l=t.startAt).inclusive,values:l.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{ct:n,parent:i};var l}function Sk(e){let t=function(e){const t=gk(e);return 4===t.length?sb.emptyPath():_k(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Vw(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=Ik(e);return t instanceof p_&&g_(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new c_(xk((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,yb(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new a_(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new a_(n,t)}(n.endAt)),function(e,t,n,r,i,s,o,a){return new P_(e,t,n,r,i,s,o,a)}(t,i,o,s,a,"F",l,u)}function Ik(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=xk(e.unaryFilter.field);return f_.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=xk(e.unaryFilter.field);return f_.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=xk(e.unaryFilter.field);return f_.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=xk(e.unaryFilter.field);return f_.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Fw()}}(e):void 0!==e.fieldFilter?(t=e,f_.create(xk(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Fw()}}(t.fieldFilter.op),t.fieldFilter.value)):void 0!==e.compositeFilter?function(e){return p_.create(e.compositeFilter.filters.map((e=>Ik(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Fw()}}(e.compositeFilter.op))}(e):Fw();var t}function Ck(e){return sk[e]}function Nk(e){return ok[e]}function Rk(e){return ak[e]}function Ak(e){return{fieldPath:e.canonicalString()}}function xk(e){return ab.fromServerFormat(e.fieldPath)}function Dk(e){return e instanceof f_?function(e){if("=="===e.op){if(t_(e.value))return{unaryFilter:{field:Ak(e.field),op:"IS_NAN"}};if(e_(e.value))return{unaryFilter:{field:Ak(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(t_(e.value))return{unaryFilter:{field:Ak(e.field),op:"IS_NOT_NAN"}};if(e_(e.value))return{unaryFilter:{field:Ak(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ak(e.field),op:Nk(e.op),value:e.value}}}(e):e instanceof p_?function(e){const t=e.getFilters().map((e=>Dk(e)));return 1===t.length?t[0]:{compositeFilter:{op:Rk(e.op),filters:t}}}(e):Fw()}function Pk(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Ok(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e,t,n,r,i=rb.min(),s=rb.min(),o=xb.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Lk(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Lk(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Lk(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Lk(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e){this.ht=e}}function Uk(e){const t=Sk({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?z_(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(){this.ln=new Vk}addToCollectionParentIndex(e,t){return this.ln.add(t),pb.resolve()}getCollectionParents(e,t){return pb.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return pb.resolve()}deleteFieldIndex(e,t){return pb.resolve()}deleteAllFieldIndexes(e){return pb.resolve()}createTargetIndexes(e,t){return pb.resolve()}getDocumentsMatchingTarget(e,t){return pb.resolve(null)}getIndexType(e,t){return pb.resolve(0)}getFieldIndexes(e,t){return pb.resolve([])}getNextCollectionGroupToUpdate(e){return pb.resolve(null)}getMinOffset(e,t){return pb.resolve(cb.min())}getMinOffsetFromCollectionGroup(e,t){return pb.resolve(cb.min())}updateCollectionGroup(e,t,n){return pb.resolve()}updateIndexEntries(e,t){return pb.resolve()}}class Vk{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Cb(sb.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Cb(sb.comparator)).toArray()}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Bk{static withCacheSize(e){return new Bk(e,Bk.DEFAULT_COLLECTION_PERCENTILE,Bk.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bk.DEFAULT_COLLECTION_PERCENTILE=10,Bk.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Bk.DEFAULT=new Bk(41943040,Bk.DEFAULT_COLLECTION_PERCENTILE,Bk.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Bk.DISABLED=new Bk(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jk{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new jk(0)}static Qn(){return new jk(-1)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k([e,t],[n,r]){const i=eb(e,n);return 0===i?eb(t,r):i}class qk{constructor(e){this.Gn=e,this.buffer=new Cb($k),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();$k(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Hk{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Jn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return null!==this.Jn}Yn(e){Ow("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){mb(e)?Ow("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await fb(e)}await this.Yn(3e5)}))}}class Wk{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return pb.resolve(gb.oe);const n=new qk(t);return this.Zn.forEachTarget(e,(e=>n.Hn(e.sequenceNumber))).next((()=>this.Zn.er(e,(e=>n.Hn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Zn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Ow("LruGarbageCollector","Garbage collection skipped; disabled"),pb.resolve(zk)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(Ow("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zk):this.tr(e,t)))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let n,r,i,s,o,a,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(Ow("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,a=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(l=Date.now(),Pw()<=vf.DEBUG&&Ow("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-u}ms\n\tDetermined least recently used ${r} in `+(o-s)+`ms\n\tRemoved ${i} targets in `+(a-o)+`ms\n\tRemoved ${e} documents in `+(l-a)+`ms\nTotal Duration: ${l-u}ms`),pb.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kk{constructor(){this.changes=new K_((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,o_.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?pb.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&NE(n.mutation,e,Rb.empty(),nb.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,iE()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=iE()){const r=Z_();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=X_();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Z_();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,iE())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Q_();const s=tE(),o=tE();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof DE)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),NE(o.mutation,t,o.mutation.getFieldMask(),nb.now())):s.set(t.key,Rb.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Gk(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=tE();let r=new Tb(((e,t)=>e-t)),i=iE();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Rb.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||iE()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,l=r.value,u=eE();l.forEach((e=>{if(!i.has(e)){const r=IE(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return pb.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return i=t,lb.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):M_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r);var i}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):pb.resolve(Z_());let o=-1,a=i;return s.next((t=>pb.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?pb.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,iE()))).next((e=>({batchId:o,changes:J_(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new lb(t)).next((e=>{let t=X_();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=X_();return this.indexManager.getCollectionParents(e,i).next((o=>pb.forEach(o,(o=>{const a=(l=t,u=o.child(i),new P_(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt));var l,u;return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,o_.newInvalidDocument(r)))}));let n=X_();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&NE(s.mutation,r,Rb.empty(),nb.now()),q_(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return pb.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,{id:(n=t).id,version:n.version,createTime:fk(n.createTime)}),pb.resolve();var n}getNamedQuery(e,t){return pb.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,{name:(n=t).name,query:Uk(n.bundledQuery),readTime:fk(n.readTime)}),pb.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(){this.overlays=new Tb(lb.comparator),this.dr=new Map}getOverlay(e,t){return pb.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Z_();return pb.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.Tt(e,t,r)})),pb.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.dr.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.dr.delete(n)),pb.resolve()}getOverlaysForCollection(e,t,n){const r=Z_(),i=t.length+1,s=new lb(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return pb.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Tb(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Z_(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Z_(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=r)););return pb.resolve(o)}Tt(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.dr.get(r.largestBatchId).delete(n.key);this.dr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new zE(t,n));let i=this.dr.get(t);void 0===i&&(i=iE(),this.dr.set(t,i)),this.dr.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(){this.sessionToken=xb.EMPTY_BYTE_STRING}getSessionToken(e){return pb.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,pb.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(){this.Er=new Cb(eT.Ar),this.Rr=new Cb(eT.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const n=new eT(e,t);this.Er=this.Er.add(n),this.Rr=this.Rr.add(n)}mr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.gr(new eT(e,t))}pr(e,t){e.forEach((e=>this.removeReference(e,t)))}yr(e){const t=new lb(new sb([])),n=new eT(t,e),r=new eT(t,e+1),i=[];return this.Rr.forEachInRange([n,r],(e=>{this.gr(e),i.push(e.key)})),i}wr(){this.Er.forEach((e=>this.gr(e)))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new lb(new sb([])),n=new eT(t,e),r=new eT(t,e+1);let i=iE();return this.Rr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new eT(e,0),n=this.Er.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class eT{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return lb.comparator(e.key,t.key)||eb(e.br,t.br)}static Vr(e,t){return eb(e.br,t.br)||lb.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new Cb(eT.Ar)}checkEmpty(e){return pb.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new FE(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.vr=this.vr.add(new eT(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return pb.resolve(s)}lookupMutationBatch(e,t){return pb.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Fr(n),i=r<0?0:r;return pb.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return pb.resolve(0===this.mutationQueue.length?-1:this.Dr-1)}getAllMutationBatches(e){return pb.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new eT(t,0),r=new eT(t,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([n,r],(e=>{const t=this.Cr(e.br);i.push(t)})),pb.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Cb(eb);return t.forEach((e=>{const t=new eT(e,0),r=new eT(e,Number.POSITIVE_INFINITY);this.vr.forEachInRange([t,r],(e=>{n=n.add(e.br)}))})),pb.resolve(this.Mr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;lb.isDocumentKey(i)||(i=i.child(""));const s=new eT(new lb(i),0);let o=new Cb(eb);return this.vr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.br)),!0)}),s),pb.resolve(this.Mr(o))}Mr(e){const t=[];return e.forEach((e=>{const n=this.Cr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Vw(0===this.Or(t.batchId,"removed")),this.mutationQueue.shift();let n=this.vr;return pb.forEach(t.mutations,(r=>{const i=new eT(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.vr=n}))}Bn(e){}containsKey(e,t){const n=new eT(t,0),r=this.vr.firstAfterOrEqual(n);return pb.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,pb.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e){this.Nr=e,this.docs=new Tb(lb.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Nr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return pb.resolve(n?n.document.mutableCopy():o_.newInvalidDocument(t))}getEntries(e,t){let n=Q_();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():o_.newInvalidDocument(e))})),pb.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Q_();const s=t.path,o=new lb(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||hb(ub(o),n)<=0||(r.has(o.key)||q_(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return pb.resolve(i)}getAllFromCollectionGroup(e,t,n,r){Fw()}Br(e,t){return pb.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new rT(this)}getSize(e){return pb.resolve(this.size)}}class rT extends Kk{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.hr.addEntry(e,r)):this.hr.removeEntry(n)})),pb.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e){this.persistence=e,this.Lr=new K_((e=>A_(e)),x_),this.lastRemoteSnapshotVersion=rb.min(),this.highestTargetId=0,this.kr=0,this.qr=new Zk,this.targetCount=0,this.Qr=jk.qn()}forEachTarget(e,t){return this.Lr.forEach(((e,n)=>t(n))),pb.resolve()}getLastRemoteSnapshotVersion(e){return pb.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return pb.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),pb.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.kr&&(this.kr=t),pb.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new jk(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,pb.resolve()}updateTargetData(e,t){return this.Un(t),pb.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,pb.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Lr.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Lr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),pb.waitFor(i).next((()=>r))}getTargetCount(e){return pb.resolve(this.targetCount)}getTargetData(e,t){const n=this.Lr.get(t)||null;return pb.resolve(n)}addMatchingKeys(e,t,n){return this.qr.mr(t,n),pb.resolve()}removeMatchingKeys(e,t,n){this.qr.pr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),pb.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),pb.resolve()}getMatchingKeysForTargetId(e,t){const n=this.qr.Sr(t);return pb.resolve(n)}containsKey(e,t){return pb.resolve(this.qr.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,t){this.Kr={},this.overlays={},this.$r=new gb(0),this.Ur=!1,this.Ur=!0,this.Wr=new Jk,this.referenceDelegate=e(this),this.Gr=new iT(this),this.indexManager=new Fk,this.remoteDocumentCache=new nT((e=>this.referenceDelegate.zr(e))),this.serializer=new Mk(t),this.jr=new Yk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Xk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Kr[e.toKey()];return n||(n=new tT(t,this.referenceDelegate),this.Kr[e.toKey()]=n),n}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,n){Ow("MemoryPersistence","Starting transaction:",e);const r=new oT(this.$r.next());return this.referenceDelegate.Hr(),n(r).next((e=>this.referenceDelegate.Jr(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Yr(e,t){return pb.or(Object.values(this.Kr).map((n=>()=>n.containsKey(e,t))))}}class oT extends db{constructor(e){super(),this.currentSequenceNumber=e}}class aT{constructor(e){this.persistence=e,this.Zr=new Zk,this.Xr=null}static ei(e){return new aT(e)}get ti(){if(this.Xr)return this.Xr;throw Fw()}addReference(e,t,n){return this.Zr.addReference(n,t),this.ti.delete(n.toString()),pb.resolve()}removeReference(e,t,n){return this.Zr.removeReference(n,t),this.ti.add(n.toString()),pb.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),pb.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach((e=>this.ti.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.ti.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return pb.forEach(this.ti,(n=>{const r=lb.fromPath(n);return this.ni(e,r).next((e=>{e||t.removeEntry(r,rb.min())}))})).next((()=>(this.Xr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ni(e,t).next((e=>{e?this.ti.delete(t.toString()):this.ti.add(t.toString())}))}zr(e){return 0}ni(e,t){return pb.or([()=>pb.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class lT{constructor(e,t){this.persistence=e,this.ri=new K_((e=>function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=bb(t)),t=wb(e.get(n),t);return bb(t)}(e.path)),((e,t)=>e.isEqual(t))),this.garbageCollector=function(e,t){return new Wk(e,t)}(this,t)}static ei(e,t){return new lT(e,t)}Hr(){}Jr(e){return pb.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}nr(e){let t=0;return this.er(e,(e=>{t++})).next((()=>t))}er(e,t){return pb.forEach(this.ri,((n,r)=>this.ir(e,n,r).next((e=>e?pb.resolve():t(r)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.Br(e,(r=>this.ir(e,r,t).next((e=>{e||(n++,i.removeEntry(r,rb.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),pb.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.ri.set(n,e.currentSequenceNumber),pb.resolve()}removeReference(e,t,n){return this.ri.set(n,e.currentSequenceNumber),pb.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),pb.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Yb(e.data.value)),t}ir(e,t,n){return pb.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.ri.get(t);return pb.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Wi=n,this.Gi=r}static zi(e,t){let n=iE(),r=iE();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new uT(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=Xd()?8:function(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}(Qd())>0?6:4}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.Xi(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.es(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;const n=new cT;return this.ts(e,t,n).next((r=>{if(i.result=r,this.Hi)return this.ns(e,t,n,r.size)}))})).next((()=>i.result))}ns(e,t,n,r){return n.documentReadCount<this.Ji?(Pw()<=vf.DEBUG&&Ow("QueryEngine","SDK will not create cache indexes for query:",$_(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),pb.resolve()):(Pw()<=vf.DEBUG&&Ow("QueryEngine","Query:",$_(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Yi*r?(Pw()<=vf.DEBUG&&Ow("QueryEngine","The SDK decides to create cache indexes for query:",$_(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,F_(t))):pb.resolve())}Xi(e,t){if(L_(t))return pb.resolve(null);let n=F_(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=z_(t,null,"F"),n=F_(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=iE(...r);return this.Zi.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.rs(t,r);return this.ss(t,s,i,n.readTime)?this.Xi(e,z_(t,null,"F")):this.os(e,s,t,n)}))))})))))}es(e,t,n,r){return L_(t)||r.isEqual(rb.min())?pb.resolve(null):this.Zi.getDocuments(e,n).next((i=>{const s=this.rs(t,i);return this.ss(t,s,n,r)?pb.resolve(null):(Pw()<=vf.DEBUG&&Ow("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),$_(t)),this.os(e,s,t,function(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=rb.fromTimestamp(1e9===r?new nb(n+1,0):new nb(n,r));return new cb(i,lb.empty(),t)}(r,-1)).next((e=>e)))}))}rs(e,t){let n=new Cb(H_(e));return t.forEach(((t,r)=>{q_(e,r)&&(n=n.add(r))})),n}ss(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ts(e,t,n){return Pw()<=vf.DEBUG&&Ow("QueryEngine","Using full collection scan to execute query:",$_(t)),this.Zi.getDocumentsMatchingQuery(e,t,cb.min(),n)}os(e,t,n,r){return this.Zi.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,t,n,r){this.persistence=e,this._s=t,this.serializer=r,this.us=new Tb(eb),this.cs=new K_((e=>A_(e)),x_),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(n)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Qk(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.us)))}}async function fT(e,t){const n=zw(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.Ps(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=iE();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Ts:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function pT(e){const t=zw(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Gr.getLastRemoteSnapshotVersion(e)))}function mT(e,t){const n=zw(e),r=t.snapshotVersion;let i=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.hs.newChangeBuffer({trackRemovals:!0});i=n.us;const o=[];t.targetChanges.forEach(((s,a)=>{const l=i.get(a);if(!l)return;o.push(n.Gr.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Gr.addMatchingKeys(e,s.addedDocuments,a))));let u=l.withSequenceNumber(e.currentSequenceNumber);var c,h,d;null!==t.targetMismatches.get(a)?u=u.withResumeToken(xb.EMPTY_BYTE_STRING,rb.min()).withLastLimboFreeSnapshotVersion(rb.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),h=u,d=s,(0===(c=l).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Gr.updateTargetData(e,u))}));let a=Q_(),l=iE();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(function(e,t,n){let r=iE(),i=iE();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Q_();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(rb.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Ow("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Is:r,ds:i}}))}(e,s,t.documentUpdates).next((e=>{a=e.Is,l=e.ds}))),!r.isEqual(rb.min())){const t=n.Gr.getLastRemoteSnapshotVersion(e).next((t=>n.Gr.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return pb.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,l))).next((()=>a))})).then((e=>(n.us=i,e)))}function gT(e,t){const n=zw(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}async function yT(e,t,n){const r=zw(e),i=r.us.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(o){if(!mb(o))throw o;Ow("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.us=r.us.remove(t),r.cs.delete(i.target)}function vT(e,t,n){const r=zw(e);let i=rb.min(),s=iE();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=zw(e),i=r.cs.get(n);return void 0!==i?pb.resolve(r.us.get(i)):r.Gr.getTargetData(t,n)}(r,e,F_(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r._s.getDocumentsMatchingQuery(e,t,n?i:rb.min(),n?s:iE()))).next((e=>(function(e,t,n){let r=e.ls.get(t)||rb.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.ls.set(t,r)}(r,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,Es:s})))))}class wT{constructor(){this.activeTargetIds=sE}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bT{constructor(){this._o=new wT,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,n){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new wT,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{uo(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){Ow("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){Ow("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kT=null;function TT(){return null===kT?kT=268435456+Math.round(2147483648*Math.random()):kT++,"0x"+kT.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const ST={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT="WebChannelConnection";class NT extends class{get Co(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Fo=t+"://"+e.host,this.Mo=`projects/${n}/databases/${r}`,this.xo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Oo(e,t,n,r,i){const s=TT(),o=this.No(e,t.toUriEncodedString());Ow("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(a,r,i),this.Lo(e,o,a,n).then((t=>(Ow("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw Mw("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}ko(e,t,n,r,i,s){return this.Oo(e,t,n,r,i)}Bo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+xw,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}No(e,t){const n=ST[e];return`${this.Fo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,n,r){const i=TT();return new Promise(((s,o)=>{const a=new bw;a.setWithCredentials(!0),a.listenOnce(Ew.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case kw.NO_ERROR:const t=a.getResponseJson();Ow(CT,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case kw.TIMEOUT:Ow(CT,`RPC '${e}' ${i} timed out`),o(new jw(Bw.DEADLINE_EXCEEDED,"Request time out"));break;case kw.HTTP_ERROR:const n=a.getStatus();if(Ow(CT,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Bw).indexOf(t)>=0?t:Bw.UNKNOWN}(t.status);o(new jw(e,t.message))}else o(new jw(Bw.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new jw(Bw.UNAVAILABLE,"Connection failed."));break;default:Fw()}}finally{Ow(CT,`RPC '${e}' ${i} completed.`)}}));const l=JSON.stringify(r);Ow(CT,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",l,n,15)}))}qo(e,t,n){const r=TT(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Cw(),o=Iw(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Bo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");Ow(CT,`Creating RPC '${e}' stream ${r}: ${u}`,a);const c=s.createWebChannel(u,a);let h=!1,d=!1;const f=new IT({Eo:t=>{d?Ow(CT,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(Ow(CT,`Opening RPC '${e}' stream ${r} transport.`),c.open(),h=!0),Ow(CT,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},Ao:()=>c.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(c,_w.EventType.OPEN,(()=>{d||(Ow(CT,`RPC '${e}' stream ${r} transport opened.`),f.So())})),p(c,_w.EventType.CLOSE,(()=>{d||(d=!0,Ow(CT,`RPC '${e}' stream ${r} transport closed`),f.Do())})),p(c,_w.EventType.ERROR,(t=>{d||(d=!0,Mw(CT,`RPC '${e}' stream ${r} transport errored:`,t),f.Do(new jw(Bw.UNAVAILABLE,"The operation could not be completed")))})),p(c,_w.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];Vw(!!i);const s=i,o=(null==s?void 0:s.error)||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Ow(CT,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=jE[e];if(void 0!==t)return qE(t)}(t),i=o.message;void 0===n&&(n=Bw.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.Do(new jw(n,i)),c.close()}else Ow(CT,`RPC '${e}' stream ${r} received:`,i),f.vo(i)}})),p(o,Sw.STAT_EVENT,(t=>{t.stat===Tw.PROXY?Ow(CT,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Tw.NOPROXY&&Ow(CT,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.bo()}),0),f}}function RT(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(e){return new lk(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,t,n=1e3,r=1.5,i=6e4){this.li=e,this.timerId=t,this.Qo=n,this.Ko=r,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),n=Math.max(0,Date.now()-this.Go),r=Math.max(0,t-n);r>0&&Ow("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,r,(()=>(this.Go=Date.now(),e()))),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){null!==this.Wo&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){null!==this.Wo&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,t,n,r,i,s,o,a){this.li=e,this.Yo=n,this.Zo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new xT(e,t)}i_(){return 1===this.state||5===this.state||this.s_()}s_(){return 2===this.state||3===this.state}start(){this.n_=0,4!==this.state?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&null===this.e_&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,(()=>this.u_())))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,4!==e?this.r_.reset():t&&t.code===Bw.RESOURCE_EXHAUSTED?(Lw(t.toString()),Lw("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===Bw.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Xo===t&&this.I_(e,n)}),(t=>{e((()=>{const e=new jw(Bw.UNKNOWN,"Fetching auth token failed: "+t.message);return this.d_(e)}))}))}I_(e,t){const n=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro((()=>{n((()=>this.listener.Ro()))})),this.stream.mo((()=>{n((()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,(()=>(this.s_()&&(this.state=3),Promise.resolve()))),this.listener.mo())))})),this.stream.po((e=>{n((()=>this.d_(e)))})),this.stream.onMessage((e=>{n((()=>1==++this.n_?this.A_(e):this.onNext(e)))}))}o_(){this.state=5,this.r_.jo((async()=>{this.state=0,this.start()}))}d_(e){return Ow("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget((()=>this.Xo===e?t():(Ow("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class PT extends DT{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Fw(),s=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(Vw(void 0===t||"string"==typeof t),xb.fromBase64String(t||"")):(Vw(void 0===t||t instanceof Buffer||t instanceof Uint8Array),xb.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(e){const t=void 0===e.code?Bw.UNKNOWN:qE(e.code);return new jw(t,e.message||"")}(a);n=new ek(i,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=vk(e,r.document.name),s=fk(r.document.updateTime),o=r.document.createTime?fk(r.document.createTime):rb.min(),a=new i_({mapValue:{fields:r.document.fields}}),l=o_.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new JE(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=vk(e,r.document),s=r.readTime?fk(r.readTime):rb.min(),o=o_.newNoDocument(i,s),a=r.removedTargetIds||[];n=new JE([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=vk(e,r.document),s=r.removedTargetIds||[];n=new JE([],s,i,null)}else{if(!("filter"in t))return Fw();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new BE(r,i),o=e.targetId;n=new ZE(o,s)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return rb.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?rb.min():t.readTime?fk(t.readTime):rb.min()}(e);return this.listener.R_(t,n)}V_(e){const t={};t.database=bk(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=D_(r)?{documents:kk(e,r)}:{query:Tk(e,r).ct},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=hk(e,t.resumeToken);const r=uk(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(rb.min())>0){n.readTime=ck(e,t.snapshotVersion.toTimestamp());const r=uk(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Fw()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.c_(t)}m_(e){const t={};t.database=bk(this.serializer),t.removeTarget=e,this.c_(t)}}class OT extends DT{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Vw(!!e.streamToken),this.lastStreamToken=e.streamToken,Vw(!e.writeResults||0===e.writeResults.length),this.listener.p_()}onNext(e){Vw(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=function(e,t){return e&&e.length>0?(Vw(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?fk(e.updateTime):fk(t);return n.isEqual(rb.min())&&(n=fk(t)),new EE(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=fk(e.commitTime);return this.listener.y_(n,t)}w_(){const e={};e.database=bk(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof xE)n={update:Ek(e,t.key,t.value)};else if(t instanceof ME)n={delete:yk(e,t.key)};else if(t instanceof DE)n={update:Ek(e,t.key,t.data),updateMask:Pk(t.fieldMask)};else{if(!(t instanceof UE))return Fw();n={verify:yk(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof fE)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof pE)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof gE)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof vE)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw Fw()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:dk(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:Fw())),n;var r,i}(this.serializer,e)))};this.c_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.S_=!1}b_(){if(this.S_)throw new jw(Bw.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,n,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Oo(e,mk(t,n),r,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Bw.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new jw(Bw.UNKNOWN,e.toString())}))}ko(e,t,n,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.ko(e,mk(t,n),r,s,o,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Bw.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new jw(Bw.UNKNOWN,e.toString())}))}terminate(){this.S_=!0,this.connection.terminate()}}class MT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){0===this.D_&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve()))))}O_(e){"Online"===this.state?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,"Online"===e&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Lw(t),this.C_=!1):Ow("OnlineStateTracker",t)}N_(){null!==this.v_&&(this.v_.cancel(),this.v_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo((e=>{n.enqueueAndForget((async()=>{WT(this)&&(Ow("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=zw(e);t.k_.add(4),await VT(t),t.K_.set("Unknown"),t.k_.delete(4),await FT(t)}(this))}))})),this.K_=new MT(n,r)}}async function FT(e){if(WT(e))for(const t of e.q_)await t(!0)}async function VT(e){for(const t of e.q_)await t(!1)}function zT(e,t){const n=zw(e);n.L_.has(t.targetId)||(n.L_.set(t.targetId,t),HT(n)?qT(n):cS(n).s_()&&jT(n,t))}function BT(e,t){const n=zw(e),r=cS(n);n.L_.delete(t),r.s_()&&$T(n,t),0===n.L_.size&&(r.s_()?r.a_():WT(n)&&n.K_.set("Unknown"))}function jT(e,t){if(e.U_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(rb.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}cS(e).V_(t)}function $T(e,t){e.U_.xe(t),cS(e).m_(t)}function qT(e){e.U_=new nk({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.L_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),cS(e).start(),e.K_.F_()}function HT(e){return WT(e)&&!cS(e).i_()&&e.L_.size>0}function WT(e){return 0===zw(e).k_.size}function KT(e){e.U_=void 0}async function GT(e){e.K_.set("Online")}async function QT(e){e.L_.forEach(((t,n)=>{jT(e,t)}))}async function YT(e,t){KT(e),HT(e)?(e.K_.O_(t),qT(e)):e.K_.set("Unknown")}async function XT(e,t,n){if(e.K_.set("Online"),t instanceof ek&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.L_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.L_.delete(r),e.U_.removeTarget(r))}(e,t)}catch(r){Ow("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await JT(e,r)}else if(t instanceof JE?e.U_.$e(t):t instanceof ZE?e.U_.Je(t):e.U_.Ge(t),!n.isEqual(rb.min()))try{const t=await pT(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.U_.it(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.L_.get(r);i&&e.L_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.L_.get(t);if(!r)return;e.L_.set(t,r.withResumeToken(xb.EMPTY_BYTE_STRING,r.snapshotVersion)),$T(e,t);const i=new Lk(r.target,t,n,r.sequenceNumber);jT(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(i){Ow("RemoteStore","Failed to raise snapshot:",i),await JT(e,i)}}async function JT(e,t,n){if(!mb(t))throw t;e.k_.add(1),await VT(e),e.K_.set("Offline"),n||(n=()=>pT(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Ow("RemoteStore","Retrying IndexedDB access"),await n(),e.k_.delete(1),await FT(e)}))}function ZT(e,t){return t().catch((n=>JT(e,n,t)))}async function eS(e){const t=zw(e),n=hS(t);let r=t.B_.length>0?t.B_[t.B_.length-1].batchId:-1;for(;tS(t);)try{const e=await gT(t.localStore,r);if(null===e){0===t.B_.length&&n.a_();break}r=e.batchId,nS(t,e)}catch(i){await JT(t,i)}rS(t)&&iS(t)}function tS(e){return WT(e)&&e.B_.length<10}function nS(e,t){e.B_.push(t);const n=hS(e);n.s_()&&n.f_&&n.g_(t.mutations)}function rS(e){return WT(e)&&!hS(e).i_()&&e.B_.length>0}function iS(e){hS(e).start()}async function sS(e){hS(e).w_()}async function oS(e){const t=hS(e);for(const n of e.B_)t.g_(n.mutations)}async function aS(e,t,n){const r=e.B_.shift(),i=VE.from(r,t,n);await ZT(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await eS(e)}async function lS(e,t){t&&hS(e).f_&&await async function(e,t){if(function(e){switch(e){default:return Fw();case Bw.CANCELLED:case Bw.UNKNOWN:case Bw.DEADLINE_EXCEEDED:case Bw.RESOURCE_EXHAUSTED:case Bw.INTERNAL:case Bw.UNAVAILABLE:case Bw.UNAUTHENTICATED:return!1;case Bw.INVALID_ARGUMENT:case Bw.NOT_FOUND:case Bw.ALREADY_EXISTS:case Bw.PERMISSION_DENIED:case Bw.FAILED_PRECONDITION:case Bw.ABORTED:case Bw.OUT_OF_RANGE:case Bw.UNIMPLEMENTED:case Bw.DATA_LOSS:return!0}}(n=t.code)&&n!==Bw.ABORTED){const n=e.B_.shift();hS(e).__(),await ZT(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await eS(e)}var n}(e,t),rS(e)&&iS(e)}async function uS(e,t){const n=zw(e);n.asyncQueue.verifyOperationInProgress(),Ow("RemoteStore","RemoteStore received new credentials");const r=WT(n);n.k_.add(3),await VT(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.k_.delete(3),await FT(n)}function cS(e){return e.W_||(e.W_=function(e,t,n){const r=zw(e);return r.b_(),new PT(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Ro:GT.bind(null,e),mo:QT.bind(null,e),po:YT.bind(null,e),R_:XT.bind(null,e)}),e.q_.push((async t=>{t?(e.W_.__(),HT(e)?qT(e):e.K_.set("Unknown")):(await e.W_.stop(),KT(e))}))),e.W_}function hS(e){return e.G_||(e.G_=function(e,t,n){const r=zw(e);return r.b_(),new OT(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Ro:()=>Promise.resolve(),mo:sS.bind(null,e),po:lS.bind(null,e),p_:oS.bind(null,e),y_:aS.bind(null,e)}),e.q_.push((async t=>{t?(e.G_.__(),await eS(e)):(await e.G_.stop(),e.B_.length>0&&(Ow("RemoteStore",`Stopping write stream with ${e.B_.length} pending writes`),e.B_=[]))}))),e.G_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class dS{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new $w,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new dS(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new jw(Bw.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fS(e,t){if(Lw("AsyncQueue",`${t}: ${e}`),mb(e))return new jw(Bw.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{static emptySet(e){return new pS(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||lb.comparator(t.key,n.key):(e,t)=>lb.comparator(e.key,t.key),this.keyedMap=X_(),this.sortedSet=new Tb(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof pS))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new pS;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(){this.z_=new Tb(lb.comparator)}track(e){const t=e.doc.key,n=this.z_.get(t);n?0!==e.type&&3===n.type?this.z_=this.z_.insert(t,e):3===e.type&&1!==n.type?this.z_=this.z_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.z_=this.z_.remove(t):1===e.type&&2===n.type?this.z_=this.z_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Fw():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class gS{constructor(e,t,n,r,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new gS(e,t,pS.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&B_(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some((e=>e.Z_()))}}class vS{constructor(){this.queries=wS(),this.onlineState="Unknown",this.X_=new Set}terminate(){!function(e,t){const n=zw(e),r=n.queries;n.queries=wS(),r.forEach(((e,n)=>{for(const r of n.J_)r.onError(t)}))}(this,new jw(Bw.ABORTED,"Firestore shutting down"))}}function wS(){return new K_((e=>j_(e)),B_)}async function bS(e,t){const n=zw(e);let r=3;const i=t.query;let s=n.queries.get(i);s?!s.Y_()&&t.Z_()&&(r=2):(s=new yS,r=t.Z_()?0:1);try{switch(r){case 0:s.H_=await n.onListen(i,!0);break;case 1:s.H_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const e=fS(o,`Initialization of query '${$_(t.query)}' failed`);return void t.onError(e)}n.queries.set(i,s),s.J_.push(t),t.ea(n.onlineState),s.H_&&t.ta(s.H_)&&TS(n)}async function _S(e,t){const n=zw(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const e=s.J_.indexOf(t);e>=0&&(s.J_.splice(e,1),0===s.J_.length?i=t.Z_()?0:1:!s.Y_()&&t.Z_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ES(e,t){const n=zw(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.J_)e.ta(i)&&(r=!0);t.H_=i}}r&&TS(n)}function kS(e,t,n){const r=zw(e),i=r.queries.get(t);if(i)for(const s of i.J_)s.onError(n);r.queries.delete(t)}function TS(e){e.X_.forEach((e=>{e.next()}))}var SS,IS;(IS=SS||(SS={})).na="default",IS.Cache="cache";class CS{constructor(e,t,n){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=n||{}}ta(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new gS(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache)return!0;if(!this.Z_())return!0;const n="Offline"!==t;return(!this.options.ua||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}aa(e){e=gS.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==SS.Cache}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e){this.key=e}}class RS{constructor(e){this.key=e}}class AS{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=iE(),this.mutatedKeys=iE(),this.Va=H_(e),this.ma=new pS(this.Va)}get fa(){return this.Ea}ga(e,t){const n=t?t.pa:new mS,r=t?t.ma:this.ma;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),c=q_(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.ya(u,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.Va(c,a)>0||l&&this.Va(c,l)<0)&&(o=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(a||l)&&(o=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ma:s,pa:n,ss:o,mutatedKeys:i}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const s=e.pa.j_();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Fw()}};return n(e)-n(t)}(e.type,t.type)||this.Va(e.doc,t.doc))),this.wa(n),r=null!=r&&r;const o=t&&!r?this.Sa():[],a=0===this.Ra.size&&this.current&&!r?1:0,l=a!==this.Aa;return this.Aa=a,0!==s.length||l?{snapshot:new gS(this.query,e.ma,i,s,e.mutatedKeys,0===a,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),ba:o}:{ba:o}}ea(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ma:this.ma,pa:new mS,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach((e=>this.Ea=this.Ea.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Ea=this.Ea.delete(e))),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=iE(),this.ma.forEach((e=>{this.Da(e.key)&&(this.Ra=this.Ra.add(e.key))}));const t=[];return e.forEach((e=>{this.Ra.has(e)||t.push(new RS(e))})),this.Ra.forEach((n=>{e.has(n)||t.push(new NS(n))})),t}va(e){this.Ea=e.Es,this.Ra=iE();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return gS.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,0===this.Aa,this.hasCachedResults)}}class xS{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class DS{constructor(e){this.key=e,this.Fa=!1}}class PS{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ma={},this.xa=new K_((e=>j_(e)),B_),this.Oa=new Map,this.Na=new Set,this.Ba=new Tb(lb.comparator),this.La=new Map,this.ka=new Zk,this.qa={},this.Qa=new Map,this.Ka=jk.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return!0===this.$a}}async function OS(e,t,n=!0){const r=tI(e);let i;const s=r.xa.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await MS(r,t,n,!0),i}async function LS(e,t){const n=tI(e);await MS(n,t,!0,!1)}async function MS(e,t,n,r){const i=await function(e,t){const n=zw(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Gr.getTargetData(e,t).next((i=>i?(r=i,pb.resolve(r)):n.Gr.allocateTargetId(e).next((i=>(r=new Lk(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Gr.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.us.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.us=n.us.insert(e.targetId,e),n.cs.set(t,e.targetId)),e}))}(e.localStore,F_(t)),s=i.targetId,o=e.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await async function(e,t,n,r,i){e.Ua=(t,n,r)=>async function(e,t,n,r){let i=t.view.ga(n);i.ss&&(i=await vT(e.localStore,t.query,!1).then((({documents:e})=>t.view.ga(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return QS(e,t.targetId,a.ba),a.snapshot}(e,t,n,r);const s=await vT(e.localStore,t,!0),o=new AS(t,s.Es),a=o.ga(s.documents),l=XE.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,l);QS(e,n,u.ba);const c=new xS(t,n,o);return e.xa.set(t,c),e.Oa.has(n)?e.Oa.get(n).push(t):e.Oa.set(n,[t]),u.snapshot}(e,t,s,"current"===o,i.resumeToken)),e.isPrimaryClient&&n&&zT(e.remoteStore,i),a}async function US(e,t,n){const r=zw(e),i=r.xa.get(t),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter((e=>!B_(e,t)))),void r.xa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await yT(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&BT(r.remoteStore,i.targetId),KS(r,i.targetId)})).catch(fb)):(KS(r,i.targetId),await yT(r.localStore,i.targetId,!0))}async function FS(e,t){const n=zw(e),r=n.xa.get(t),i=n.Oa.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),BT(n.remoteStore,r.targetId))}async function VS(e,t,n){const r=function(e){const t=zw(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=$S.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=qS.bind(null,t),t}(e);try{const e=await function(e,t){const n=zw(e),r=nb.now(),i=t.reduce(((e,t)=>e.add(t.key)),iE());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Q_(),l=iE();return n.hs.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=RE(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new DE(e.key,t,s_(t.value.mapValue),kE.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:J_(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.qa[e.currentUser.toKey()];r||(r=new Tb(eb)),r=r.insert(t,n),e.qa[e.currentUser.toKey()]=r}(r,e.batchId,n),await JS(r,e.changes),await eS(r.remoteStore)}catch(i){const e=fS(i,"Failed to persist write");n.reject(e)}}async function zS(e,t){const n=zw(e);try{const e=await mT(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.La.get(t);r&&(Vw(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Fa=!0:e.modifiedDocuments.size>0?Vw(r.Fa):e.removedDocuments.size>0&&(Vw(r.Fa),r.Fa=!1))})),await JS(n,e,t)}catch(r){await fb(r)}}function BS(e,t,n){const r=zw(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.xa.forEach(((n,r)=>{const i=r.view.ea(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=zw(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.J_)i.ea(t)&&(r=!0)})),r&&TS(n)}(r.eventManager,t),e.length&&r.Ma.R_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function jS(e,t,n){const r=zw(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.La.get(t),s=i&&i.key;if(s){let e=new Tb(lb.comparator);e=e.insert(s,o_.newNoDocument(s,rb.min()));const n=iE().add(s),i=new YE(rb.min(),new Map,new Tb(eb),e,n);await zS(r,i),r.Ba=r.Ba.remove(s),r.La.delete(t),XS(r)}else await yT(r.localStore,t,!1).then((()=>KS(r,t,n))).catch(fb)}async function $S(e,t){const n=zw(e),r=t.batch.batchId;try{const e=await function(e,t){const n=zw(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=pb.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Vw(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=iE();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);WS(n,r,null),HS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await JS(n,e)}catch(i){await fb(i)}}async function qS(e,t,n){const r=zw(e);try{const e=await function(e,t){const n=zw(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Vw(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);WS(r,t,n),HS(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await JS(r,e)}catch(i){await fb(i)}}function HS(e,t){(e.Qa.get(t)||[]).forEach((e=>{e.resolve()})),e.Qa.delete(t)}function WS(e,t,n){const r=zw(e);let i=r.qa[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.qa[r.currentUser.toKey()]=i}}function KS(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Oa.get(t))e.xa.delete(r),n&&e.Ma.Wa(r,n);e.Oa.delete(t),e.isPrimaryClient&&e.ka.yr(t).forEach((t=>{e.ka.containsKey(t)||GS(e,t)}))}function GS(e,t){e.Na.delete(t.path.canonicalString());const n=e.Ba.get(t);null!==n&&(BT(e.remoteStore,n),e.Ba=e.Ba.remove(t),e.La.delete(n),XS(e))}function QS(e,t,n){for(const r of n)r instanceof NS?(e.ka.addReference(r.key,t),YS(e,r)):r instanceof RS?(Ow("SyncEngine","Document no longer in limbo: "+r.key),e.ka.removeReference(r.key,t),e.ka.containsKey(r.key)||GS(e,r.key)):Fw()}function YS(e,t){const n=t.key,r=n.path.canonicalString();e.Ba.get(n)||e.Na.has(r)||(Ow("SyncEngine","New document in limbo: "+n),e.Na.add(r),XS(e))}function XS(e){for(;e.Na.size>0&&e.Ba.size<e.maxConcurrentLimboResolutions;){const t=e.Na.values().next().value;e.Na.delete(t);const n=new lb(sb.fromString(t)),r=e.Ka.next();e.La.set(r,new DS(n)),e.Ba=e.Ba.insert(n,r),zT(e.remoteStore,new Lk(F_(O_(n.path)),r,"TargetPurposeLimboResolution",gb.oe))}}async function JS(e,t,n){const r=zw(e),i=[],s=[],o=[];r.xa.isEmpty()||(r.xa.forEach(((e,a)=>{o.push(r.Ua(a,t,n).then((e=>{var t;if((e||n)&&r.isPrimaryClient){const i=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===t?void 0:t.current;r.sharedClientState.updateQueryState(a.targetId,i?"current":"not-current")}if(e){i.push(e);const t=uT.zi(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Ma.R_(i),await async function(e,t){const n=zw(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>pb.forEach(t,(t=>pb.forEach(t.Wi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>pb.forEach(t.Gi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(r){if(!mb(r))throw r;Ow("LocalStore","Failed to update sequence numbers: "+r)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.us.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.us=n.us.insert(e,i)}}}(r.localStore,s))}async function ZS(e,t){const n=zw(e);if(!n.currentUser.isEqual(t)){Ow("SyncEngine","User change. New user:",t.toKey());const e=await fT(n.localStore,t);n.currentUser=t,i="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).Qa.forEach((e=>{e.forEach((e=>{e.reject(new jw(Bw.CANCELLED,i))}))})),r.Qa.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await JS(n,e.Ts)}var r,i}function eI(e,t){const n=zw(e),r=n.La.get(t);if(r&&r.Fa)return iE().add(r.key);{let e=iE();const r=n.Oa.get(t);if(!r)return e;for(const t of r){const r=n.xa.get(t);e=e.unionWith(r.view.fa)}return e}}function tI(e){const t=zw(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=zS.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=eI.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=jS.bind(null,t),t.Ma.R_=ES.bind(null,t.eventManager),t.Ma.Wa=kS.bind(null,t.eventManager),t}class nI{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=AT(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return function(e,t,n,r){return new dT(e,t,n,r)}(this.persistence,new hT,e.initialUser,this.serializer)}ja(e){return new sT(aT.ei,this.serializer)}za(e){return new bT}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nI.provider={build:()=>new nI};class rI extends nI{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Vw(this.persistence.referenceDelegate instanceof lT);const n=this.persistence.referenceDelegate.garbageCollector;return new Hk(n,e.asyncQueue,t)}ja(e){const t=void 0!==this.cacheSizeBytes?Bk.withCacheSize(this.cacheSizeBytes):Bk.DEFAULT;return new sT((e=>lT.ei(e,t)),this.serializer)}}class iI{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>BS(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZS.bind(null,this.syncEngine),await async function(e,t){const n=zw(e);t?(n.k_.delete(2),await FT(n)):t||(n.k_.add(2),await VT(n),n.K_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new vS}createDatastore(e){const t=AT(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new NT(r));var r;return function(e,t,n,r){return new LT(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>BS(this.syncEngine,e,0),s=ET.p()?new ET:new _T,new UT(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new PS(e,t,n,r,i,s);return o&&(a.$a=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=zw(e);Ow("RemoteStore","RemoteStore shutting down."),t.k_.add(5),await VT(t),t.Q_.shutdown(),t.K_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}iI.provider={build:()=>new iI};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Lw("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Aw.UNAUTHENTICATED,this.clientId=Zw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async e=>{Ow("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Ow("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $w;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=fS(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function aI(e,t){e.asyncQueue.verifyOperationInProgress(),Ow("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await fT(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function lI(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Ow("FirestoreClient","Using user provided OfflineComponentProvider");try{await aI(e,e._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!("FirebaseError"===(n=i).name?n.code===Bw.FAILED_PRECONDITION||n.code===Bw.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&n instanceof DOMException)||22===n.code||20===n.code||11===n.code))throw i;Mw("Error using user provided cache. Falling back to memory cache: "+i),await aI(e,new nI)}}else Ow("FirestoreClient","Using default OfflineComponentProvider"),await aI(e,new rI(void 0));var n;return e._offlineComponents}(e);Ow("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>uS(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>uS(t.remoteStore,n))),e._onlineComponents=t}async function uI(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Ow("FirestoreClient","Using user provided OnlineComponentProvider"),await lI(e,e._uninitializedComponentsProvider._online)):(Ow("FirestoreClient","Using default OnlineComponentProvider"),await lI(e,new iI))),e._onlineComponents}async function cI(e){const t=await uI(e),n=t.eventManager;return n.onListen=OS.bind(null,t.syncEngine),n.onUnlisten=US.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=LS.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=FS.bind(null,t.syncEngine),n}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hI(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const dI=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(e,t,n){if(!n)throw new jw(Bw.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function pI(e){if(!lb.isDocumentKey(e))throw new jw(Bw.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function mI(e){if(lb.isDocumentKey(e))throw new jw(Bw.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function gI(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Fw()}function yI(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new jw(Bw.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gI(e);throw new jw(Bw.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vI{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new jw(Bw.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new jw(Bw.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new jw(Bw.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hI(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new jw(Bw.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new jw(Bw.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new jw(Bw.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class wI{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vI({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new jw(Bw.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new jw(Bw.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vI(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Hw;switch(e.type){case"firstParty":return new Qw(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new jw(Bw.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=dI.get(e);t&&(Ow("ComponentProvider","Removing Datastore"),dI.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bI{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new bI(this.firestore,e,this._query)}}class _I{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new EI(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _I(this.firestore,e,this._key)}}class EI extends bI{constructor(e,t,n){super(e,t,O_(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _I(this.firestore,null,new lb(e))}withConverter(e){return new EI(this.firestore,e,this._path)}}function kI(e,t,...n){if(e=ff(e),fI("collection","path",t),e instanceof wI){const r=sb.fromString(t,...n);return mI(r),new EI(e,null,r)}{if(!(e instanceof _I||e instanceof EI))throw new jw(Bw.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(sb.fromString(t,...n));return mI(r),new EI(e.firestore,null,r)}}function TI(e,t,...n){if(e=ff(e),1===arguments.length&&(t=Zw.newId()),fI("doc","path",t),e instanceof wI){const r=sb.fromString(t,...n);return pI(r),new _I(e,null,new lb(r))}{if(!(e instanceof _I||e instanceof EI))throw new jw(Bw.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(sb.fromString(t,...n));return pI(r),new _I(e.firestore,e instanceof EI?e.converter:null,new lb(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new xT(this,"async_queue_retry"),this.fu=()=>{const e=RT();e&&Ow("AsyncQueue","Visibility state changed to "+e.visibilityState),this.r_.Jo()},this.gu=e;const t=RT();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=RT();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise((()=>{}));const t=new $w;return this.yu((()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Iu.push(e),this.wu())))}async wu(){if(0!==this.Iu.length){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(BC){if(!mb(BC))throw BC;Ow("AsyncQueue","Operation failed with retryable error: "+BC)}this.Iu.length>0&&this.r_.jo((()=>this.wu()))}}yu(e){const t=this.gu.then((()=>(this.Ru=!0,e().catch((e=>{this.Au=e,this.Ru=!1;throw Lw("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.Ru=!1,e))))));return this.gu=t,t}enqueueAfterDelay(e,t,n){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const r=dS.createAndSchedule(this,e,t,n,(e=>this.Su(e)));return this.Eu.push(r),r}pu(){this.Au&&Fw()}verifyOperationInProgress(){}async bu(){let e;do{e=this.gu,await e}while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then((()=>{this.Eu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Eu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.bu()}))}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class II extends wI{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new SI,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new SI(e),this._firestoreClient=void 0,await e}}}function CI(e,t){const n="string"==typeof e?e:"(default)",r=Sp("object"==typeof e?e:xp(),"firestore").getImmediate({identifier:n});if(!r._initialized){const e=qd("firestore");e&&function(e,t,n,r={}){var i;const s=(e=yI(e,wI))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&Mw("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Aw.MOCK_USER;else{t=Gd(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new jw(Bw.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Aw(s)}e._authCredentials=new Ww(new qw(t,n))}}(r,...e)}return r}function NI(e){if(e._terminated)throw new jw(Bw.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r;const i=e._freezeSettings(),s=(o=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",l=e._persistenceKey,u=i,new Vb(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,hI(u.experimentalLongPollingOptions),u.useFetchStreams));var o,a,l,u;e._componentsProvider||(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),e._firestoreClient=new oI(e._authCredentials,e._appCheckCredentials,e._queue,s,e._componentsProvider&&function(e){const t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),e._firestoreClient}class RI{constructor(e){this._byteString=e}static fromBase64String(e){try{return new RI(xb.fromBase64String(e))}catch(t){throw new jw(Bw.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new RI(xb.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new jw(Bw.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ab(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new jw(Bw.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new jw(Bw.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return eb(this._lat,e._lat)||eb(this._long,e._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this._values=(e||[]).map((e=>e))}toArray(){return this._values.map((e=>e))}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=/^__.*__$/;class LI{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new DE(e,this.data,this.fieldMask,t,this.fieldTransforms):new xE(e,this.data,t,this.fieldTransforms)}}class MI{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new DE(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function UI(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Fw()}}class FI{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new FI(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.xu({path:n,Nu:!1});return r.Bu(e),r}Lu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.xu({path:n,Nu:!1});return r.Fu(),r}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return tC(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(0===e.length)throw this.qu("Document fields must not be empty");if(UI(this.Mu)&&OI.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class VI{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||AT(e)}$u(e,t,n,r=!1){return new FI({Mu:e,methodName:t,Ku:n,path:ab.emptyPath(),Nu:!1,Qu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zI(e){const t=e._freezeSettings(),n=AT(e._databaseId);return new VI(e._databaseId,!!t.ignoreUndefinedProperties,n)}function BI(e,t,n,r,i,s={}){const o=e.$u(s.merge||s.mergeFields?2:0,t,n,i);XI("Data must be an object, but it was:",o,r);const a=QI(r,o);let l,u;if(s.merge)l=new Rb(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=JI(t,r,n);if(!o.contains(i))throw new jw(Bw.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);nC(e,i)||e.push(i)}l=new Rb(e),u=o.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,u=o.fieldTransforms;return new LI(new i_(a),l,u)}class jI extends xI{_toFieldTransform(e){if(2!==e.Mu)throw 1===e.Mu?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof jI}}class $I extends xI{_toFieldTransform(e){return new _E(e.path,new fE)}isEqual(e){return e instanceof $I}}class qI extends xI{constructor(e,t){super(e),this.Wu=t}_toFieldTransform(e){const t=new vE(e.serializer,lE(e.serializer,this.Wu));return new _E(e.path,t)}isEqual(e){return e instanceof qI&&this.Wu===e.Wu}}function HI(e,t,n,r){const i=e.$u(1,t,n);XI("Data must be an object, but it was:",i,r);const s=[],o=i_.empty();Eb(r,((e,r)=>{const a=eC(t,e,n);r=ff(r);const l=i.Lu(a);if(r instanceof jI)s.push(a);else{const e=GI(r,l);null!=e&&(s.push(a),o.set(a,e))}}));const a=new Rb(s);return new MI(o,a,i.fieldTransforms)}function WI(e,t,n,r,i,s){const o=e.$u(1,t,n),a=[JI(t,r,n)],l=[i];if(s.length%2!=0)throw new jw(Bw.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(JI(t,s[d])),l.push(s[d+1]);const u=[],c=i_.empty();for(let d=a.length-1;d>=0;--d)if(!nC(u,a[d])){const e=a[d];let t=l[d];t=ff(t);const n=o.Lu(e);if(t instanceof jI)u.push(e);else{const r=GI(t,n);null!=r&&(u.push(e),c.set(e,r))}}const h=new Rb(u);return new MI(c,h,o.fieldTransforms)}function KI(e,t,n,r=!1){return GI(n,e.$u(r?4:3,t))}function GI(e,t){if(YI(e=ff(e)))return XI("Unsupported field value:",t,e),QI(e,t);if(e instanceof xI)return function(e,t){if(!UI(t.Mu))throw t.qu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.qu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Nu&&4!==t.Mu)throw t.qu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=GI(i,t.ku(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=ff(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return lE(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=nb.fromDate(e);return{timestampValue:ck(t.serializer,n)}}if(e instanceof nb){const n=new nb(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ck(t.serializer,n)}}if(e instanceof DI)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof RI)return{bytesValue:hk(t.serializer,e._byteString)};if(e instanceof _I){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.qu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:pk(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof PI)return n=t,{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map((e=>{if("number"!=typeof e)throw n.qu("VectorValues must only contain numeric values.");return oE(n.serializer,e)}))}}}}};var n;throw t.qu(`Unsupported field value: ${gI(e)}`)}(e,t)}function QI(e,t){const n={};return kb(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Eb(e,((e,r)=>{const i=GI(r,t.Ou(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function YI(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof nb||e instanceof DI||e instanceof RI||e instanceof _I||e instanceof xI||e instanceof PI)}function XI(e,t,n){if(!YI(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=gI(n);throw"an object"===r?t.qu(e+" a custom object"):t.qu(e+" "+r)}var r}function JI(e,t,n){if((t=ff(t))instanceof AI)return t._internalPath;if("string"==typeof t)return eC(e,t);throw tC("Field path arguments must be of type string or ",e,!1,void 0,n)}const ZI=new RegExp("[~\\*/\\[\\]]");function eC(e,t,n){if(t.search(ZI)>=0)throw tC(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new AI(...t.split("."))._internalPath}catch(r){throw tC(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function tC(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new jw(Bw.INVALID_ARGUMENT,a+e+l)}function nC(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _I(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new iC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(sC("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class iC extends rC{data(){return super.data()}}function sC(e,t){return"string"==typeof t?eC(e,t):t instanceof AI?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{}class aC extends oC{}function lC(e,t,...n){let r=[];t instanceof oC&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof hC)).length,n=e.filter((e=>e instanceof uC)).length;if(t>1||t>0&&n>0)throw new jw(Bw.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class uC extends aC{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new uC(e,t,n)}_apply(e){const t=this._parse(e);return bC(e._query,t),new bI(e.firestore,e.converter,V_(e._query,t))}_parse(e){const t=zI(e.firestore);return function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new jw(Bw.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){wC(o,s);const t=[];for(const n of o)t.push(vC(r,e,n));a={arrayValue:{values:t}}}else a=vC(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||wC(o,s),a=KI(n,t,o,"in"===s||"not-in"===s);return f_.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function cC(e,t,n){const r=t,i=sC("where",e);return uC._create(i,r,n)}class hC extends oC{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new hC(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:p_.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)bC(n,i),n=V_(n,i)}(e._query,t),new bI(e.firestore,e.converter,V_(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class dC extends aC{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new dC(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new jw(Bw.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new jw(Bw.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new c_(t,n)}(e._query,this._field,this._direction);return new bI(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new P_(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function fC(e,t="asc"){const n=t,r=sC("orderBy",e);return dC._create(r,n)}class pC extends aC{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new pC(e,t,n)}_apply(e){return new bI(e.firestore,e.converter,z_(e._query,this._limit,this._limitType))}}function mC(e){return function(e,t){if(t<=0)throw new jw(Bw.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}("limit",e),pC._create("limit",e,"F")}class gC extends aC{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new gC(e,t,n)}_apply(e){const t=function(e,t,n,r){if(n[0]=ff(n[0]),n[0]instanceof rC)return function(e,t,n,r,i){if(!r)throw new jw(Bw.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of U_(e))if(o.field.isKeyField())s.push(Xb(t,r.key));else{const e=r.data.field(o.field);if(Mb(e))throw new jw(Bw.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new jw(Bw.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new a_(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=zI(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new jw(Bw.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let l=0;l<i.length;l++){const s=i[l];if(o[l].field.isKeyField()){if("string"!=typeof s)throw new jw(Bw.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!M_(e)&&-1!==s.indexOf("/"))throw new jw(Bw.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(sb.fromString(s));if(!lb.isDocumentKey(n))throw new jw(Bw.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new lb(n);a.push(Xb(t,i))}else{const e=KI(n,r,s);a.push(e)}}return new a_(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}(e,this.type,this._docOrFields,this._inclusive);return new bI(e.firestore,e.converter,(n=e._query,r=t,new P_(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,r,n.endAt)));var n,r}}function yC(...e){return gC._create("startAfter",e,!1)}function vC(e,t,n){if("string"==typeof(n=ff(n))){if(""===n)throw new jw(Bw.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!M_(t)&&-1!==n.indexOf("/"))throw new jw(Bw.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(sb.fromString(n));if(!lb.isDocumentKey(r))throw new jw(Bw.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xb(e,new lb(r))}if(n instanceof _I)return Xb(e,n._key);throw new jw(Bw.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gI(n)}.`)}function wC(e,t){if(!Array.isArray(e)||0===e.length)throw new jw(Bw.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function bC(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new jw(Bw.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new jw(Bw.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class _C{convertValue(e,t="none"){switch(jb(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ob(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Lb(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Fw()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Eb(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertVectorValue(e){var t,n,r;const i=null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((e=>Ob(e.doubleValue)));return new PI(i)}convertGeoPoint(e){return new DI(Ob(e.latitude),Ob(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ub(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Fb(e));default:return null}}convertTimestamp(e){const t=Pb(e);return new nb(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=sb.fromString(e);Vw(Ok(n));const r=new zb(n.get(1),n.get(3)),i=new lb(n.popFirst(5));return r.isEqual(t)||Lw(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class kC{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class TC extends rC{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new SC(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(sC("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class SC extends TC{data(e={}){return super.data(e)}}class IC{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new kC(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new SC(this._firestore,this._userDataWriter,n.key,n,new kC(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new jw(Bw.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new SC(e._firestore,e._userDataWriter,n.doc.key,n.doc,new kC(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new SC(e._firestore,e._userDataWriter,t.doc.key,t.doc,new kC(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:CC(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function CC(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Fw()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(e){e=yI(e,_I);const t=yI(e.firestore,II);return function(e,t,n={}){const r=new $w;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new sI({next:a=>{s.eu(),t.enqueueAndForget((()=>_S(e,o)));const l=a.docs.has(n);!l&&a.fromCache?i.reject(new jw(Bw.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&a.fromCache&&r&&"server"===r.source?i.reject(new jw(Bw.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:e=>i.reject(e)}),o=new CS(O_(n.path),s,{includeMetadataChanges:!0,ua:!0});return bS(e,o)}(await cI(e),e.asyncQueue,t,n,r))),r.promise}(NI(t),e._key).then((n=>function(e,t,n){const r=n.docs.get(t._key),i=new RC(e);return new TC(e,i,t._key,r,new kC(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,e,n)))}class RC extends _C{constructor(e){super(),this.firestore=e}convertBytes(e){return new RI(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _I(this.firestore,null,t)}}function AC(e){e=yI(e,bI);const t=yI(e.firestore,II),n=NI(t),r=new RC(t);return function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new jw(Bw.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),function(e,t,n={}){const r=new $w;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new sI({next:n=>{s.eu(),t.enqueueAndForget((()=>_S(e,o))),n.fromCache&&"server"===r.source?i.reject(new jw(Bw.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new CS(n,s,{includeMetadataChanges:!0,ua:!0});return bS(e,o)}(await cI(e),e.asyncQueue,t,n,r))),r.promise}(n,e._query).then((n=>new IC(t,r,e,n)))}function xC(e,t,n){e=yI(e,_I);const r=yI(e.firestore,II),i=EC(e.converter,t,n);return LC(r,[BI(zI(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,kE.none())])}function DC(e,t,n,...r){e=yI(e,_I);const i=yI(e.firestore,II),s=zI(i);let o;return o="string"==typeof(t=ff(t))||t instanceof AI?WI(s,"updateDoc",e._key,t,n,r):HI(s,"updateDoc",e._key,t),LC(i,[o.toMutation(e._key,kE.exists(!0))])}function PC(e){return LC(yI(e.firestore,II),[new ME(e._key,kE.none())])}function OC(e,t){const n=yI(e.firestore,II),r=TI(e),i=EC(e.converter,t);return LC(n,[BI(zI(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,kE.exists(!1))]).then((()=>r))}function LC(e,t){return function(e,t){const n=new $w;return e.asyncQueue.enqueueAndForget((async()=>VS(await function(e){return uI(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(NI(e),t)}class MC{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=zI(e)}set(e,t,n){this._verifyNotCommitted();const r=UC(e,this._firestore),i=EC(r.converter,t,n),s=BI(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,kE.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=UC(e,this._firestore);let s;return s="string"==typeof(t=ff(t))||t instanceof AI?WI(this._dataReader,"WriteBatch.update",i._key,t,n,r):HI(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,kE.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=UC(e,this._firestore);return this._mutations=this._mutations.concat(new ME(t._key,kE.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new jw(Bw.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function UC(e,t){if((e=ff(e)).firestore!==t)throw new jw(Bw.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}function FC(){return new $I("serverTimestamp")}function VC(e){return new qI("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zC(e){return NI(e=yI(e,II)),new MC(e,(t=>LC(e,t)))}!function(e,t=!0){xw=Rp,Tp(new pf("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new II(new Kw(e.getProvider("auth-internal")),new Xw(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new jw(Bw.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zb(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),Dp(Rw,"4.7.6",e),Dp(Rw,"4.7.6","esm2017")}();export{Hh as $,pw as A,uw as B,pf as C,dw as D,nf as E,tf as F,fw as G,FC as H,zC as I,VC as J,xC as K,Tf as L,mC as M,yC as N,Hc as O,jh as P,xd as Q,V as R,sd as S,nb as T,e as U,t as V,Kh as W,Og as X,Pg as Y,Lg as Z,Tp as _,Dp as a,hw as a0,cw as a1,id as a2,Rd as a3,ld as a4,od as a5,Sp as b,xp as c,sf as d,df as e,Jd as f,ff as g,ef as h,Yd as i,Ap as j,Hy as k,mw as l,CI as m,fC as n,Uf as o,kI as p,lC as q,F as r,AC as s,TI as t,NC as u,Zd as v,cC as w,OC as x,DC as y,PC as z};
//# sourceMappingURL=vendor-C5LqAqW7.js.map
