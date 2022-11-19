// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).dispatch=n()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,r=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,u=e.__defineSetter__,f=e.__lookupGetter__,c=e.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,n,r){var l,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(t,n)||c.call(t,n)?(l=t.__proto__,t.__proto__=e,delete t[n],t[n]=r.value,t.__proto__=l):t[n]=r.value),p="get"in r,y="set"in r,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,n,r.get),y&&u&&u.call(t,n,r.set),t};var l=n;function a(t,n,r){l(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}var p=/./;function y(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function m(t,n){return null!=t&&g.call(t,n)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var h=b()?function(t){var n,r,e;if(null==t)return v.call(t);r=t[d],n=m(t,d);try{t[d]=void 0}catch(n){return v.call(t)}return e=v.call(t),n?t[d]=r:delete t[d],e}:function(t){return v.call(t)},w=Boolean.prototype.toString;var j=b();function E(t){return"object"==typeof t&&(t instanceof Boolean||(j?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function _(t){return y(t)||E(t)}function O(){return new Function("return this;")()}a(_,"isPrimitive",y),a(_,"isObject",E);var S="object"==typeof self?self:null,T="object"==typeof window?window:null,x="object"==typeof global?global:null;var A=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(S)return S;if(T)return T;if(x)return x;throw new Error("unexpected error. Unable to resolve global object.")}(),P=A.document&&A.document.childNodes,F=Int8Array;function I(){return/^\s*function\s*([^(]*)/i}var N=/^\s*function\s*([^(]*)/i;a(I,"REGEXP",N);var B=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};function V(t){return null!==t&&"object"==typeof t}function L(t){var n,r,e,o;if(("Object"===(r=h(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(n=N.exec(e.toString()))return n[1]}return V(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(V,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var r,e;if(!B(n))return!1;if(0===(r=n.length))return!1;for(e=0;e<r;e++)if(!1===t(n[e]))return!1;return!0}}(V));var k="function"==typeof p||"object"==typeof F||"function"==typeof P?function(t){return L(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?L(t).toLowerCase():n};function Y(t){return"function"===k(t)}function M(t){return"number"==typeof t}var R=Number,C=R.prototype.toString;var G=b();function X(t){return"object"==typeof t&&(t instanceof R||(G?function(t){try{return C.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function H(t){return M(t)||X(t)}a(H,"isPrimitive",M),a(H,"isObject",X);var U=Number.POSITIVE_INFINITY,W=R.NEGATIVE_INFINITY,D=Math.floor;function q(t){return D(t)===t}function z(t){return t<U&&t>W&&q(t)}function J(t){return M(t)&&z(t)}function K(t){return X(t)&&z(t.valueOf())}function Q(t){return J(t)||K(t)}function Z(t){return J(t)&&t>=0}function $(t){return K(t)&&t.valueOf()>=0}function tt(t){return Z(t)||$(t)}a(Q,"isPrimitive",J),a(Q,"isObject",K),a(tt,"isPrimitive",Z),a(tt,"isObject",$);var nt=9007199254740991;function rt(t){return null!==t&&"object"==typeof t&&Z(t.length)&&t.length<=nt&&"number"==typeof t.BYTES_PER_ELEMENT&&"number"==typeof t.byteOffset&&"number"==typeof t.byteLength}function et(t){return Object.keys(Object(t))}var ot,it=void 0!==Object.keys;function ut(t){return"[object Arguments]"===h(t)}ot=function(){return ut(arguments)}();var ft=ot;function ct(t){return"string"==typeof t}var lt=String.prototype.valueOf;var at=b();function pt(t){return"object"==typeof t&&(t instanceof String||(at?function(t){try{return lt.call(t),!0}catch(t){return!1}}(t):"[object String]"===h(t)))}function yt(t){return ct(t)||pt(t)}function st(t){return t!=t}function bt(t){return M(t)&&st(t)}function vt(t){return X(t)&&st(t.valueOf())}function gt(t){return bt(t)||vt(t)}a(yt,"isPrimitive",ct),a(yt,"isObject",pt),a(gt,"isPrimitive",bt),a(gt,"isObject",vt);var mt=Object.prototype.propertyIsEnumerable;var dt=!mt.call("beep","0");function ht(t,n){var r;return null!=t&&(!(r=mt.call(t,n))&&dt&&yt(t)?!bt(n=+n)&&J(n)&&n>=0&&n<t.length:r)}var wt=ft?ut:function(t){return null!==t&&"object"==typeof t&&!B(t)&&"number"==typeof t.length&&q(t.length)&&t.length>=0&&t.length<=4294967295&&m(t,"callee")&&!ht(t,"callee")},jt=Array.prototype.slice;var Et=ht((function(){}),"prototype"),_t=!ht({toString:null},"toString");function Ot(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&q(t.length)&&t.length>=0&&t.length<=nt}function St(t,n,r){var e,o;if(!Ot(t)&&!ct(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(e=t.length))return-1;if(3===arguments.length){if(!J(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=e)return-1;o=r}else(o=e+r)<0&&(o=0)}else o=0;if(gt(n)){for(;o<e;o++)if(gt(t[o]))return o}else for(;o<e;o++)if(t[o]===n)return o;return-1}function Tt(t){return t.constructor&&t.constructor.prototype===t}var xt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],At="undefined"==typeof window?void 0:window;var Pt=function(){var t;if("undefined"===k(At))return!1;for(t in At)try{-1===St(xt,t)&&m(At,t)&&null!==At[t]&&"object"===k(At[t])&&Tt(At[t])}catch(t){return!0}return!1}(),Ft="undefined"!=typeof window;var It,Nt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];It=it?function(){return 2!==(et(arguments)||"").length}(1,2)?function(t){return wt(t)?et(jt.call(t)):et(t)}:et:function(t){var n,r,e,o,i,u,f;if(o=[],wt(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!m(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(e="function"==typeof t)&&!V(t))return o;r=Et&&e}for(i in t)r&&"prototype"===i||!m(t,i)||o.push(String(i));if(_t)for(n=function(t){if(!1===Ft&&!Pt)return Tt(t);try{return Tt(t)}catch(t){return!1}}(t),f=0;f<Nt.length;f++)u=Nt[f],n&&"constructor"===u||!m(t,u)||o.push(String(u));return o};var Bt=It;var Vt,Lt=Object.getPrototypeOf;Vt=Y(Object.getPrototypeOf)?Lt:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===h(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var kt=Vt;var Yt=Object.prototype;function Mt(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!B(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),kt(t))}(t),!n||!m(t,"constructor")&&m(n,"constructor")&&Y(n.constructor)&&"[object Function]"===h(n.constructor)&&m(n,"isPrototypeOf")&&Y(n.isPrototypeOf)&&(n===Yt||function(t){var n;for(n in t)if(!m(t,n))return!1;return!0}(t)))}var Rt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Ct(){return Rt.slice()}var Gt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Xt(){return Gt.slice()}function Ht(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Ut(t,n,r){l(t,n,{configurable:!1,enumerable:!0,writable:!1,value:r})}a(Xt,"enum",Ht),function(t,n){var r,e,o;for(r=Bt(n),o=0;o<r.length;o++)Ut(t,e=r[o],n[e])}(Xt,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Wt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Dt(){return{bool:Wt.bool,int8:Wt.int8,uint8:Wt.uint8,uint8c:Wt.uint8c,int16:Wt.int16,uint16:Wt.uint16,int32:Wt.int32,uint32:Wt.uint32,int64:Wt.int64,uint64:Wt.uint64,float32:Wt.float32,float64:Wt.float64,complex64:Wt.complex64,complex128:Wt.complex128,binary:Wt.binary,generic:Wt.generic,notype:Wt.notype,userdefined_type:Wt.userdefined_type}}a(Ct,"enum",Dt),function(t,n){var r,e,o;for(r=Bt(n),o=0;o<r.length;o++)Ut(t,e=r[o],n[e])}(Ct,Dt());var qt=function(t,n){var r,e,o,i,u,f,c,l=!0;if(!V(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!Mt(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(m(n,"duplicates")&&!y(l=n.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+l+"`.")}if(e=(r=Bt(t)).length,u={},l)for(c=0;c<e;c++)m(u,i=t[o=r[c]])?(f=u[i],B(f)?u[i].push(o):u[i]=[f,o]):u[i]=o;else for(c=0;c<e;c++)u[t[o=r[c]]]=o;return u}(Dt(),{duplicates:!1});var zt=Dt();function Jt(t){var n=typeof t;return"number"===n?function(t){var n=qt[t];return"string"==typeof n?n:null}(t)?t:null:"string"===n?function(t){var n=zt[t];return"number"==typeof n?n:null}(t):null}var Kt="function"==typeof Float32Array;var Qt="function"==typeof Float32Array?Float32Array:null;var Zt,$t="function"==typeof Float32Array?Float32Array:void 0;Zt=function(){var t,n,r;if("function"!=typeof Qt)return!1;try{n=new Qt([1,3.14,-3.14,5e40]),r=n,t=(Kt&&r instanceof Float32Array||"[object Float32Array]"===h(r))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===U}catch(n){t=!1}return t}()?$t:function(){throw new Error("not implemented")};var tn=Zt;function nn(t,n){return new tn(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*n,2*(t.length-n))}var rn="function"==typeof Float64Array;var en="function"==typeof Float64Array?Float64Array:null;var on,un="function"==typeof Float64Array?Float64Array:void 0;on=function(){var t,n,r;if("function"!=typeof en)return!1;try{n=new en([1,3.14,-3.14,NaN]),r=n,t=(rn&&r instanceof Float64Array||"[object Float64Array]"===h(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?un:function(){throw new Error("not implemented")};var fn=on;function cn(t,n){return new fn(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*n,2*(t.length-n))}function ln(){var t,n=arguments,r=n[0],e="https://stdlib.io/e/"+r+"?";for(t=1;t<n.length;t++)e+="&arg[]="+encodeURIComponent(n[t]);return e}var an=Jt("complex64"),pn=Jt("complex128");function yn(t,n){if(!Y(t))throw new TypeError(ln("0gj3p",t));if(!Y(n))throw new TypeError(ln("0gj2S",n));return function(r,e,o,i,u,f,c){var l,a;if(!rt(o)||!rt(f))return n(r,e,o,i,u,f,c),f;if(e=Jt(e),u=Jt(u),null===e||null===u)throw new TypeError(ln("0gj1S"));l=e===an?nn(o,0):e===pn?cn(o,0):o;a=u===an?nn(f,0):u===pn?cn(f,0):f;return t(r,e,l,i,u,a,c),f}}function sn(t,n){return new t.constructor(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*n,t.length-n)}function bn(t,n,r){return t>0&&n<0&&(r+=(t-1)*n),r}var vn=Jt("complex64"),gn=Jt("complex128");return a(yn,"ndarray",(function(t,n){if(!Y(t))throw new TypeError(ln("0gj3p",t));if(!Y(n))throw new TypeError(ln("0gj2S",n));return function(r,e,o,i,u,f,c,l,a){var p,y;if(!rt(o)||!rt(c))return n(r,e,o,i,u,f,c,l,a),c;if(e=Jt(e),f=Jt(f),null===e||null===f)throw new TypeError(ln("0gj1S"));if(!Z(u))throw new TypeError(ln("invalid argument. Input array offset must be a nonnegative integer. Value: `%s`.",u));if(!Z(a))throw new TypeError(ln("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`."));u=bn(r,i,u),a=bn(r,l,a),p=e===vn?nn(o,u):e===gn?cn(o,u):sn(o,u);y=f===vn?nn(c,a):f===gn?cn(c,a):sn(c,a);return t(r,e,p,i,f,y,l),c}})),yn}));
//# sourceMappingURL=index.js.map
