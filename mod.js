// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,r=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,u=e.__defineSetter__,f=e.__lookupGetter__,c=e.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,n,r){var l,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(t,n)||c.call(t,n)?(l=t.__proto__,t.__proto__=e,delete t[n],t[n]=r.value,t.__proto__=l):t[n]=r.value),p="get"in r,y="set"in r,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,n,r.get),y&&u&&u.call(t,n,r.set),t};var l=n;function a(t,n,r){l(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}var p=/./;function y(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function m(t,n){return null!=t&&g.call(t,n)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var h=b()?function(t){var n,r,e;if(null==t)return v.call(t);r=t[d],n=m(t,d);try{t[d]=void 0}catch(n){return v.call(t)}return e=v.call(t),n?t[d]=r:delete t[d],e}:function(t){return v.call(t)},w=Boolean.prototype.toString;var j=b();function E(t){return"object"==typeof t&&(t instanceof Boolean||(j?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function _(t){return y(t)||E(t)}function O(){return new Function("return this;")()}a(_,"isPrimitive",y),a(_,"isObject",E);var S="object"==typeof self?self:null,T="object"==typeof window?window:null,A="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},x="object"==typeof A?A:null;var P=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(S)return S;if(T)return T;if(x)return x;throw new Error("unexpected error. Unable to resolve global object.")}(),F=P.document&&P.document.childNodes,I=Int8Array;function N(){return/^\s*function\s*([^(]*)/i}var B=/^\s*function\s*([^(]*)/i;a(N,"REGEXP",B);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};function L(t){return null!==t&&"object"==typeof t}function k(t){var n,r,e,o;if(("Object"===(r=h(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(n=B.exec(e.toString()))return n[1]}return L(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(L,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var r,e;if(!V(n))return!1;if(0===(r=n.length))return!1;for(e=0;e<r;e++)if(!1===t(n[e]))return!1;return!0}}(L));var Y="function"==typeof p||"object"==typeof I||"function"==typeof F?function(t){return k(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?k(t).toLowerCase():n};function M(t){return"function"===Y(t)}function R(t){return"number"==typeof t}var C=Number,G=C.prototype.toString;var X=b();function H(t){return"object"==typeof t&&(t instanceof C||(X?function(t){try{return G.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function U(t){return R(t)||H(t)}a(U,"isPrimitive",R),a(U,"isObject",H);var W=Number.POSITIVE_INFINITY,D=C.NEGATIVE_INFINITY,q=Math.floor;function z(t){return q(t)===t}function J(t){return t<W&&t>D&&z(t)}function K(t){return R(t)&&J(t)}function Q(t){return H(t)&&J(t.valueOf())}function Z(t){return K(t)||Q(t)}function $(t){return K(t)&&t>=0}function tt(t){return Q(t)&&t.valueOf()>=0}function nt(t){return $(t)||tt(t)}a(Z,"isPrimitive",K),a(Z,"isObject",Q),a(nt,"isPrimitive",$),a(nt,"isObject",tt);function rt(t){return null!==t&&"object"==typeof t&&$(t.length)&&t.length<=9007199254740991&&"number"==typeof t.BYTES_PER_ELEMENT&&"number"==typeof t.byteOffset&&"number"==typeof t.byteLength}function et(t){return Object.keys(Object(t))}var ot=void 0!==Object.keys;function it(t){return"[object Arguments]"===h(t)}var ut=function(){return it(arguments)}();function ft(t){return"string"==typeof t}var ct=String.prototype.valueOf;var lt=b();function at(t){return"object"==typeof t&&(t instanceof String||(lt?function(t){try{return ct.call(t),!0}catch(t){return!1}}(t):"[object String]"===h(t)))}function pt(t){return ft(t)||at(t)}function yt(t){return t!=t}function st(t){return R(t)&&yt(t)}function bt(t){return H(t)&&yt(t.valueOf())}function vt(t){return st(t)||bt(t)}a(pt,"isPrimitive",ft),a(pt,"isObject",at),a(vt,"isPrimitive",st),a(vt,"isObject",bt);var gt=Object.prototype.propertyIsEnumerable;var mt=!gt.call("beep","0");function dt(t,n){var r;return null!=t&&(!(r=gt.call(t,n))&&mt&&pt(t)?!st(n=+n)&&K(n)&&n>=0&&n<t.length:r)}var ht=ut?it:function(t){return null!==t&&"object"==typeof t&&!V(t)&&"number"==typeof t.length&&z(t.length)&&t.length>=0&&t.length<=4294967295&&m(t,"callee")&&!dt(t,"callee")},wt=Array.prototype.slice;var jt=dt((function(){}),"prototype"),Et=!dt({toString:null},"toString");function _t(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&z(t.length)&&t.length>=0&&t.length<=9007199254740991}function Ot(t,n,r){var e,o;if(!_t(t)&&!ft(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(e=t.length))return-1;if(3===arguments.length){if(!K(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=e)return-1;o=r}else(o=e+r)<0&&(o=0)}else o=0;if(vt(n)){for(;o<e;o++)if(vt(t[o]))return o}else for(;o<e;o++)if(t[o]===n)return o;return-1}function St(t){return t.constructor&&t.constructor.prototype===t}var Tt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],At="undefined"==typeof window?void 0:window;var xt=function(){var t;if("undefined"===Y(At))return!1;for(t in At)try{-1===Ot(Tt,t)&&m(At,t)&&null!==At[t]&&"object"===Y(At[t])&&St(At[t])}catch(t){return!0}return!1}(),Pt="undefined"!=typeof window;var Ft=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var It=ot?function(){return 2!==(et(arguments)||"").length}(1,2)?function(t){return ht(t)?et(wt.call(t)):et(t)}:et:function(t){var n,r,e,o,i,u,f;if(o=[],ht(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!m(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(e="function"==typeof t)&&!L(t))return o;r=jt&&e}for(i in t)r&&"prototype"===i||!m(t,i)||o.push(String(i));if(Et)for(n=function(t){if(!1===Pt&&!xt)return St(t);try{return St(t)}catch(t){return!1}}(t),f=0;f<Ft.length;f++)u=Ft[f],n&&"constructor"===u||!m(t,u)||o.push(String(u));return o};var Nt,Bt=Object.getPrototypeOf;Nt=M(Object.getPrototypeOf)?Bt:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===h(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Vt=Nt;var Lt=Object.prototype;function kt(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!V(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),Vt(t))}(t),!n||!m(t,"constructor")&&m(n,"constructor")&&M(n.constructor)&&"[object Function]"===h(n.constructor)&&m(n,"isPrototypeOf")&&M(n.isPrototypeOf)&&(n===Lt||function(t){var n;for(n in t)if(!m(t,n))return!1;return!0}(t)))}var Yt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Mt(){return Yt.slice()}var Rt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Ct(){return Rt.slice()}function Gt(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Xt(t,n,r){l(t,n,{configurable:!1,enumerable:!0,writable:!1,value:r})}a(Ct,"enum",Gt),function(t,n){var r,e,o;for(r=It(n),o=0;o<r.length;o++)Xt(t,e=r[o],n[e])}(Ct,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Ht={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Ut(){return{bool:Ht.bool,int8:Ht.int8,uint8:Ht.uint8,uint8c:Ht.uint8c,int16:Ht.int16,uint16:Ht.uint16,int32:Ht.int32,uint32:Ht.uint32,int64:Ht.int64,uint64:Ht.uint64,float32:Ht.float32,float64:Ht.float64,complex64:Ht.complex64,complex128:Ht.complex128,binary:Ht.binary,generic:Ht.generic,notype:Ht.notype,userdefined_type:Ht.userdefined_type}}a(Mt,"enum",Ut),function(t,n){var r,e,o;for(r=It(n),o=0;o<r.length;o++)Xt(t,e=r[o],n[e])}(Mt,Ut());var Wt=function(t,n){var r,e,o,i,u,f,c,l=!0;if(!L(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!kt(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(m(n,"duplicates")&&!y(l=n.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+l+"`.")}if(e=(r=It(t)).length,u={},l)for(c=0;c<e;c++)m(u,i=t[o=r[c]])?(f=u[i],V(f)?u[i].push(o):u[i]=[f,o]):u[i]=o;else for(c=0;c<e;c++)u[t[o=r[c]]]=o;return u}(Ut(),{duplicates:!1});var Dt=Ut();function qt(t){var n=typeof t;return"number"===n?function(t){var n=Wt[t];return"string"==typeof n?n:null}(t)?t:null:"string"===n?function(t){var n=Dt[t];return"number"==typeof n?n:null}(t):null}var zt="function"==typeof Float32Array;var Jt="function"==typeof Float32Array?Float32Array:null;var Kt,Qt="function"==typeof Float32Array?Float32Array:void 0;Kt=function(){var t,n,r;if("function"!=typeof Jt)return!1;try{n=new Jt([1,3.14,-3.14,5e40]),r=n,t=(zt&&r instanceof Float32Array||"[object Float32Array]"===h(r))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===W}catch(n){t=!1}return t}()?Qt:function(){throw new Error("not implemented")};var Zt=Kt;function $t(t,n){return new Zt(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*n,2*(t.length-n))}var tn="function"==typeof Float64Array;var nn="function"==typeof Float64Array?Float64Array:null;var rn,en="function"==typeof Float64Array?Float64Array:void 0;rn=function(){var t,n,r;if("function"!=typeof nn)return!1;try{n=new nn([1,3.14,-3.14,NaN]),r=n,t=(tn&&r instanceof Float64Array||"[object Float64Array]"===h(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?en:function(){throw new Error("not implemented")};var on=rn;function un(t,n){return new on(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*n,2*(t.length-n))}function fn(){var t,n=arguments,r=n[0],e="https://stdlib.io/e/"+r+"?";for(t=1;t<n.length;t++)e+="&arg[]="+encodeURIComponent(n[t]);return e}var cn=qt("complex64"),ln=qt("complex128");function an(t,n){if(!M(t))throw new TypeError(fn("0gj3p",t));if(!M(n))throw new TypeError(fn("0gj2S",n));return function(r,e,o,i,u,f,c){var l,a;if(!rt(o)||!rt(f))return n(r,e,o,i,u,f,c),f;if(e=qt(e),u=qt(u),null===e||null===u)throw new TypeError(fn("0gj1S"));l=e===cn?$t(o,0):e===ln?un(o,0):o;a=u===cn?$t(f,0):u===ln?un(f,0):f;return t(r,e,l,i,u,a,c),f}}function pn(t,n){return new t.constructor(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*n,t.length-n)}function yn(t,n,r){return t>0&&n<0&&(r+=(t-1)*n),r}var sn=qt("complex64"),bn=qt("complex128");a(an,"ndarray",(function(t,n){if(!M(t))throw new TypeError(fn("0gj3p",t));if(!M(n))throw new TypeError(fn("0gj2S",n));return function(r,e,o,i,u,f,c,l,a){var p,y;if(!rt(o)||!rt(c))return n(r,e,o,i,u,f,c,l,a),c;if(e=qt(e),f=qt(f),null===e||null===f)throw new TypeError(fn("0gj1S"));if(!$(u))throw new TypeError(fn("invalid argument. Input array offset must be a nonnegative integer. Value: `%s`.",u));if(!$(a))throw new TypeError(fn("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`."));u=yn(r,i,u),a=yn(r,l,a),p=e===sn?$t(o,u):e===bn?un(o,u):pn(o,u);y=f===sn?$t(c,a):f===bn?un(c,a):pn(c,a);return t(r,e,p,i,f,y,l),c}}));export{an as default};
//# sourceMappingURL=mod.js.map
