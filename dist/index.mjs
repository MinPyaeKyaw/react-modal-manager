import e,{createContext as n,useState as t,cloneElement as r,useContext as o}from"react";import{createPortal as a}from"react-dom";var i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)};function s(e,n,t){if(t||2===arguments.length)for(var r,o=0,a=n.length;o<a;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}"function"==typeof SuppressedError&&SuppressedError;var c,l={exports:{}},f={};var u,p={};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */"production"===process.env.NODE_ENV?l.exports=function(){if(c)return f;c=1;var n=e,t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,r){var s,c={},l=null,f=null;for(s in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(f=n.ref),n)o.call(n,s)&&!i.hasOwnProperty(s)&&(c[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===c[s]&&(c[s]=n[s]);return{$$typeof:t,type:e,key:l,ref:f,props:c,_owner:a.current}}return f.Fragment=r,f.jsx=s,f.jsxs=s,f}():l.exports=(u||(u=1,"production"!==process.env.NODE_ENV&&function(){var n=e,t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.for("react.offscreen"),v=Symbol.iterator,b="@@iterator",g=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function h(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];!function(e,n,t){var r=g.ReactDebugCurrentFrame.getStackAddendum();""!==r&&(n+="%s",t=t.concat([r]));var o=t.map((function(e){return String(e)}));o.unshift("Warning: "+n),Function.prototype.apply.call(console[e],console,o)}("error",e,t)}var k,O=!1,_=!1,x=!1,S=!1,w=!1;function j(e){return e.displayName||"Context"}function R(e){if(null==e)return null;if("number"==typeof e.tag&&h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case o:return"Fragment";case r:return"Portal";case i:return"Profiler";case a:return"StrictMode";case f:return"Suspense";case u:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case c:return j(e)+".Consumer";case s:return j(e._context)+".Provider";case l:return function(e,n,t){var r=e.displayName;if(r)return r;var o=n.displayName||n.name||"";return""!==o?t+"("+o+")":t}(e,e.render,"ForwardRef");case y:var n=e.displayName||null;return null!==n?n:R(e.type)||"Memo";case d:var t=e,p=t._payload,m=t._init;try{return R(m(p))}catch(e){return null}}return null}k=Symbol.for("react.module.reference");var C,E,T,F,P,I,D,$=Object.assign,N=0;function L(){}L.__reactDisabledLog=!0;var z,A=g.ReactCurrentDispatcher;function B(e,n,t){if(void 0===z)try{throw Error()}catch(e){var r=e.stack.trim().match(/\n( *(at )?)/);z=r&&r[1]||""}return"\n"+z+e}var Y,W=!1,X="function"==typeof WeakMap?WeakMap:Map;function U(e,n){if(!e||W)return"";var t,r=Y.get(e);if(void 0!==r)return r;W=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=A.current,A.current=null,function(){if(0===N){C=console.log,E=console.info,T=console.warn,F=console.error,P=console.group,I=console.groupCollapsed,D=console.groupEnd;var e={configurable:!0,enumerable:!0,value:L,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}N++}();try{if(n){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(e){t=e}Reflect.construct(e,[],i)}else{try{i.call()}catch(e){t=e}e.call(i.prototype)}}else{try{throw Error()}catch(e){t=e}e()}}catch(n){if(n&&t&&"string"==typeof n.stack){for(var s=n.stack.split("\n"),c=t.stack.split("\n"),l=s.length-1,f=c.length-1;l>=1&&f>=0&&s[l]!==c[f];)f--;for(;l>=1&&f>=0;l--,f--)if(s[l]!==c[f]){if(1!==l||1!==f)do{if(l--,--f<0||s[l]!==c[f]){var u="\n"+s[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),"function"==typeof e&&Y.set(e,u),u}}while(l>=1&&f>=0);break}}}finally{W=!1,A.current=o,function(){if(0==--N){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:$({},e,{value:C}),info:$({},e,{value:E}),warn:$({},e,{value:T}),error:$({},e,{value:F}),group:$({},e,{value:P}),groupCollapsed:$({},e,{value:I}),groupEnd:$({},e,{value:D})})}N<0&&h("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",y=p?B(p):"";return"function"==typeof e&&Y.set(e,y),y}function M(e,n,t){if(null==e)return"";if("function"==typeof e)return U(e,!(!(r=e.prototype)||!r.isReactComponent));var r;if("string"==typeof e)return B(e);switch(e){case f:return B("Suspense");case u:return B("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case l:return U(e.render,!1);case y:return M(e.type,n,t);case d:var o=e,a=o._payload,i=o._init;try{return M(i(a),n,t)}catch(e){}}return""}Y=new X;var V=Object.prototype.hasOwnProperty,J={},K=g.ReactDebugCurrentFrame;function q(e){if(e){var n=e._owner,t=M(e.type,e._source,n?n.type:null);K.setExtraStackFrame(t)}else K.setExtraStackFrame(null)}var H=Array.isArray;function G(e){return H(e)}function Q(e){return""+e}function Z(e){if(function(e){try{return Q(e),!1}catch(e){return!0}}(e))return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),Q(e)}var ee,ne,te,re=g.ReactCurrentOwner,oe={key:!0,ref:!0,__self:!0,__source:!0};te={};var ae=function(e,n,r,o,a,i,s){var c={$$typeof:t,type:e,key:n,ref:r,props:s,_owner:i,_store:{}};return Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c};function ie(e,n,t,r,o){var a,i={},s=null,c=null;for(a in void 0!==t&&(Z(t),s=""+t),function(e){if(V.call(e,"key")){var n=Object.getOwnPropertyDescriptor(e,"key").get;if(n&&n.isReactWarning)return!1}return void 0!==e.key}(n)&&(Z(n.key),s=""+n.key),function(e){if(V.call(e,"ref")){var n=Object.getOwnPropertyDescriptor(e,"ref").get;if(n&&n.isReactWarning)return!1}return void 0!==e.ref}(n)&&(c=n.ref,function(e,n){if("string"==typeof e.ref&&re.current&&n&&re.current.stateNode!==n){var t=R(re.current.type);te[t]||(h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',R(re.current.type),e.ref),te[t]=!0)}}(n,o)),n)V.call(n,a)&&!oe.hasOwnProperty(a)&&(i[a]=n[a]);if(e&&e.defaultProps){var l=e.defaultProps;for(a in l)void 0===i[a]&&(i[a]=l[a])}if(s||c){var f="function"==typeof e?e.displayName||e.name||"Unknown":e;s&&function(e,n){var t=function(){ee||(ee=!0,h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}(i,f),c&&function(e,n){var t=function(){ne||(ne=!0,h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}(i,f)}return ae(e,s,c,o,r,re.current,i)}var se,ce=g.ReactCurrentOwner,le=g.ReactDebugCurrentFrame;function fe(e){if(e){var n=e._owner,t=M(e.type,e._source,n?n.type:null);le.setExtraStackFrame(t)}else le.setExtraStackFrame(null)}function ue(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}function pe(){if(ce.current){var e=R(ce.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}se=!1;var ye={};function de(e,n){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var t=function(e){var n=pe();if(!n){var t="string"==typeof e?e:e.displayName||e.name;t&&(n="\n\nCheck the top-level render call using <"+t+">.")}return n}(n);if(!ye[t]){ye[t]=!0;var r="";e&&e._owner&&e._owner!==ce.current&&(r=" It was passed a child from "+R(e._owner.type)+"."),fe(e),h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,r),fe(null)}}}function me(e,n){if("object"==typeof e)if(G(e))for(var t=0;t<e.length;t++){var r=e[t];ue(r)&&de(r,n)}else if(ue(e))e._store&&(e._store.validated=!0);else if(e){var o=function(e){if(null===e||"object"!=typeof e)return null;var n=v&&e[v]||e[b];return"function"==typeof n?n:null}(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)ue(a.value)&&de(a.value,n)}}function ve(e){var n,t=e.type;if(null!=t&&"string"!=typeof t){if("function"==typeof t)n=t.propTypes;else{if("object"!=typeof t||t.$$typeof!==l&&t.$$typeof!==y)return;n=t.propTypes}if(n){var r=R(t);!function(e,n,t,r,o){var a=Function.call.bind(V);for(var i in e)if(a(e,i)){var s=void 0;try{if("function"!=typeof e[i]){var c=Error((r||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}s=e[i](n,i,r,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){s=e}!s||s instanceof Error||(q(o),h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",r||"React class",t,i,typeof s),q(null)),s instanceof Error&&!(s.message in J)&&(J[s.message]=!0,q(o),h("Failed %s type: %s",t,s.message),q(null))}}(n,e.props,"prop",r,e)}else void 0===t.PropTypes||se||(se=!0,h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",R(t)||"Unknown"));"function"!=typeof t.getDefaultProps||t.getDefaultProps.isReactClassApproved||h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}var be={};function ge(e,n,r,p,v,b){var g=function(e){return"string"==typeof e||"function"==typeof e||!!(e===o||e===i||w||e===a||e===f||e===u||S||e===m||O||_||x)||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===y||e.$$typeof===s||e.$$typeof===c||e.$$typeof===l||e.$$typeof===k||void 0!==e.getModuleId)}(e);if(!g){var j,C="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(C+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),C+=pe(),null===e?j="null":G(e)?j="array":void 0!==e&&e.$$typeof===t?(j="<"+(R(e.type)||"Unknown")+" />",C=" Did you accidentally export a JSX literal instead of a component?"):j=typeof e,h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",j,C)}var E=ie(e,n,r,v,b);if(null==E)return E;if(g){var T=n.children;if(void 0!==T)if(p)if(G(T)){for(var F=0;F<T.length;F++)me(T[F],e);Object.freeze&&Object.freeze(T)}else h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else me(T,e)}if(V.call(n,"key")){var P=R(e),I=Object.keys(n).filter((function(e){return"key"!==e})),D=I.length>0?"{key: someKey, "+I.join(": ..., ")+": ...}":"{key: someKey}";be[P+D]||(h('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',D,P,I.length>0?"{"+I.join(": ..., ")+": ...}":"{}",P),be[P+D]=!0)}return e===o?function(e){for(var n=Object.keys(e.props),t=0;t<n.length;t++){var r=n[t];if("children"!==r&&"key"!==r){fe(e),h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",r),fe(null);break}}null!==e.ref&&(fe(e),h("Invalid attribute `ref` supplied to `React.Fragment`."),fe(null))}(E):ve(E),E}var he=function(e,n,t){return ge(e,n,t,!1)},ke=function(e,n,t){return ge(e,n,t,!0)};p.Fragment=o,p.jsx=he,p.jsxs=ke}()),p);var y=l.exports;!function(e,n){void 0===n&&(n={});var t=n.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".backdrop {\n  animation: fadeIn 0.3s ease;\n}\n.backdrop-exit {\n  opacity: 0;\n  animation: fadeOut 0.3s ease;\n}\n\n.slide-from-bottom {\n  animation: slideInFromBottom 0.3s ease;\n}\n\n.slide-from-bottom-exit {\n  opacity: 0;\n  animation: slideOutFromBottom 0.3s ease;\n}\n\n.slide-from-top {\n  animation: slideInFromTop 0.3s ease;\n}\n\n.slide-from-top-exit {\n  opacity: 0;\n  animation: slideOutFromTop 0.3s ease;\n}\n\n.slide-from-left {\n  animation: slideInFromLeft 0.3s ease;\n}\n\n.slide-from-left-exit {\n  opacity: 0;\n  animation: slideOutFromLeft 0.3s ease;\n}\n\n.slide-from-right {\n  animation: slideInFromRight 0.3s ease;\n}\n\n.slide-from-right-exit {\n  opacity: 0;\n  animation: slideOutFromRight 0.3s ease;\n}\n\n.fade {\n  background-color: white;\n  animation: fadeIn 0.3s ease;\n}\n.fade-exit {\n  opacity: 0;\n  animation: fadeOut 0.3s ease;\n}\n\n.zoom {\n  background-color: white;\n  animation: zoomIn 0.3s ease;\n}\n.zoom-exit {\n  opacity: 0;\n  animation: zoomOut 0.3s ease;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes zoomIn {\n  from {\n    transform: scale(0.9);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@keyframes zoomOut {\n  from {\n    transform: scale(1);\n    opacity: 1;\n  }\n  to {\n    transform: scale(0.9);\n    opacity: 0;\n  }\n}\n\n@keyframes slideInFromTop {\n  from {\n    transform: translateY(-50%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n@keyframes slideOutFromTop {\n  from {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateY(-50%);\n    opacity: 0;\n  }\n}\n\n@keyframes slideInFromBottom {\n  from {\n    transform: translateY(50%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n@keyframes slideOutFromBottom {\n  from {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateY(50%);\n    opacity: 0;\n  }\n}\n\n@keyframes slideInFromLeft {\n  from {\n    transform: translateX(-10%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n@keyframes slideOutFromLeft {\n  from {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateX(-10%);\n    opacity: 0;\n  }\n}\n\n@keyframes slideInFromRight {\n  from {\n    transform: translateX(10%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n@keyframes slideOutFromRight {\n  from {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateX(10%);\n    opacity: 0;\n  }\n}\n");var d=n({modals:[],open:function(){},close:function(){},closeAll:function(){}}),m=function(e){var n=e.children,o=t([]),c=o[0],l=o[1],f=t(!1),u=f[0],p=f[1],m=function(e,n){var t=document.createElement("canvas").getContext("2d");if(t){t.fillStyle=e;var r=t.fillStyle;if(r=r.replace("#","")){var o=parseInt(r.substring(0,2),16),a=parseInt(r.substring(2,4),16),i=parseInt(r.substring(4,6),16);return"rgba(".concat(o,", ").concat(a,", ").concat(i,", ").concat(n,")")}}return"rgba(0, 0, 0, 0.3)"},v=function(e){p(!0),document.body.style.overflow="auto";var n=c.find((function(n){return n.id===e}));(null==n?void 0:n.props.animationType)?setTimeout((function(){l((function(n){return n.filter((function(n){return n.id!==e}))}))}),300):l((function(n){return n.filter((function(n){return n.id!==e}))}))};return y.jsxs(d.Provider,{value:{modals:c,open:function(e,n){p(!1),document.body.style.overflow="hidden";var t,r=function(e){var n=e.bg,t=void 0===n?"black":n,r=e.opacity;return{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:1e4,display:"flex",background:m(t,void 0===r?.3:r)}}({bg:n.backdropColor,opacity:n.backdropOpacity}),o=function(e){var n=e.position,t=void 0===n?"center":n,r=e.padding,o=void 0===r?"2%":r,a=e.fullscreen;return i(i({position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:1e4,display:"flex"},function(e){var n="center",t="center";switch(e){case"center-right":n="center",t="flex-end";break;case"center-left":n="center",t="flex-start";break;case"top-left":n="flex-start",t="flex-start";break;case"top-right":n="flex-start",t="flex-end";break;case"top-center":n="flex-start",t="center";break;case"bottom-left":n="flex-end",t="flex-start";break;case"bottom-right":n="flex-end",t="flex-end";break;case"bottom-center":n="flex-end",t="center";break;default:n="center",t="center"}return{justifyContent:t,alignItems:n}}(t)),a?{padding:0}:{padding:o})}({position:n.position,fullscreen:n.fullscreen,padding:n.backdropPadding}),a=function(e){var n=e.fullscreen;return{width:n?"100vw":"auto",height:n?"100vh":"auto",backgroundColor:"white"}}({fullscreen:n.fullscreen||!1}),c=(t=n.animationType)?{enter:t,exit:t+"-exit"}:{enter:"",exit:""};l((function(t){return s(s([],t,!0),[{id:e,props:n,backDropStyle:r,modalContentStyle:a,modalContainerStyle:o,animationClass:c,hideOnClickBackDrop:void 0===n.hideOnClickBackDrop||n.hideOnClickBackDrop}],!1)}))},close:v,closeAll:function(){p(!0),document.body.style.overflow="auto",l([])}},children:[n,a(y.jsx("div",{id:"modal-root",style:{position:"relative"},children:c.map((function(e){var n,t,o=r(e.props.content,{style:i({},e.modalContentStyle)});return y.jsxs("div",{children:[y.jsx("div",{className:e.props.animationType?u?"backdrop-exit":"backdrop":"",style:e.backDropStyle}),y.jsx("div",{style:e.modalContainerStyle,onClick:function(){e.hideOnClickBackDrop&&v(e.id)},children:y.jsx("div",{className:e.props.animationType&&u?null===(n=e.animationClass)||void 0===n?void 0:n.exit:null===(t=e.animationClass)||void 0===t?void 0:t.enter,style:i({},e.modalContentStyle),onClick:function(e){return e.stopPropagation()},children:o})})]},e.id)}))}),document.body)]})},v=function(){return o(d)};export{m as ModalProvider,v as useModal};
//# sourceMappingURL=index.mjs.map