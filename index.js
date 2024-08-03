// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).dispatch=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function n(t){return"number"==typeof t}function e(t){var r,n="";for(r=0;r<t;r++)n+="0";return n}function i(t,r,n){var i=!1,o=r-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=n?t+e(o):e(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(t){var r,e,u;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(e=t.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===t.specifier||10!==r)&&(u=4294967295+u+1),u<0?(e=(-u).toString(r),t.precision&&(e=i(e,t.precision,t.padRight)),e="-"+e):(e=u.toString(r),u||t.precision?t.precision&&(e=i(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===r&&(t.alternate&&(e="0x"+e),e=t.specifier===a.call(t.specifier)?a.call(e):o.call(e)),8===r&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,s=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,b=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,v=/(\..*[^0])0*e/;function m(t){var r,e,i=parseFloat(t.arg);if(!isFinite(i)){if(!n(t.arg))throw new Error("invalid floating-point number. Value: "+e);i=t.arg}switch(t.specifier){case"e":case"E":e=i.toExponential(t.precision);break;case"f":case"F":e=i.toFixed(t.precision);break;case"g":case"G":c(i)<1e-4?((r=t.precision)>0&&(r-=1),e=i.toExponential(r)):e=i.toPrecision(t.precision),t.alternate||(e=p.call(e,v,"$1e"),e=p.call(e,h,"e"),e=p.call(e,d,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=p.call(e,s,"e+0$1"),e=p.call(e,y,"e-0$1"),t.alternate&&(e=p.call(e,g,"$1."),e=p.call(e,b,"$1.e")),i>=0&&t.sign&&(e=t.sign+e),e=t.specifier===l.call(t.specifier)?l.call(e):f.call(e)}function w(t){var r,n="";for(r=0;r<t;r++)n+=" ";return n}var E=String.fromCharCode,j=Array.isArray;function _(t){return t!=t}function x(t){var r={};return r.specifier=t.specifier,r.precision=void 0===t.precision?1:t.precision,r.width=t.width,r.flags=t.flags||"",r.mapping=t.mapping,r}function O(t){var r,n,e,o,a,c,f,l,p,s,y,g,b;if(!j(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(c="",f=1,l=0;l<t.length;l++)if(e=t[l],"string"==typeof e)c+=e;else{if(r=void 0!==e.precision,!(e=x(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+e+"`.");for(e.mapping&&(f=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(o=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[f],10),f+=1,_(e.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(r&&"*"===e.precision){if(e.precision=parseInt(arguments[f],10),f+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,r=!1)}switch(e.arg=arguments[f],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=r?e.precision:-1,e.arg=String(e.arg);break;case"c":if(!_(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(a)?String(e.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(s=e.arg,y=e.width,g=e.padRight,b=void 0,(b=y-s.length)<0?s:s=g?s+w(b):w(b)+s)),c+=e.arg||"",f+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(t){var r={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(r.precision="1"),r}function A(t){var r,n,e,i;for(n=[],i=0,e=T.exec(t);e;)(r=t.slice(i,T.lastIndex-e[0].length)).length&&n.push(r),n.push(S(e)),i=T.lastIndex,e=T.exec(t);return(r=t.slice(i)).length&&n.push(r),n}function F(t){var r,n;if("string"!=typeof t)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=[A(t)],n=1;n<arguments.length;n++)r.push(arguments[n]);return O.apply(null,r)}var P,k=Object.prototype,N=k.toString,I=k.__defineGetter__,V=k.__defineSetter__,L=k.__lookupGetter__,B=k.__lookupSetter__;P=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,n){var e,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof n||null===n||"[object Array]"===N.call(n))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(L.call(t,r)||B.call(t,r)?(e=t.__proto__,t.__proto__=k,delete t[r],t[r]=n.value,t.__proto__=e):t[r]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&I&&I.call(t,r,n.get),a&&V&&V.call(t,r,n.set),t};var R=P;function U(t,r,n){R(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var C=/./;function $(t){return"boolean"==typeof t}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Y(){return M&&"symbol"==typeof Symbol.toStringTag}var G=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;function X(t,r){return null!=t&&W.call(t,r)}var Z="function"==typeof Symbol?Symbol:void 0,H="function"==typeof Z?Z.toStringTag:"";var z=Y()?function(t){var r,n,e;if(null==t)return G.call(t);n=t[H],r=X(t,H);try{t[H]=void 0}catch(r){return G.call(t)}return e=G.call(t),r?t[H]=n:delete t[H],e}:function(t){return G.call(t)},D=Boolean,q=Boolean.prototype.toString;var J=Y();function K(t){return"object"==typeof t&&(t instanceof D||(J?function(t){try{return q.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===z(t)))}function Q(t){return $(t)||K(t)}U(Q,"isPrimitive",$),U(Q,"isObject",K);var tt="object"==typeof self?self:null,rt="object"==typeof window?window:null,nt="object"==typeof global?global:null,et="object"==typeof globalThis?globalThis:null;var it=function(t){if(arguments.length){if(!$(t))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(et)return et;if(tt)return tt;if(rt)return rt;if(nt)return nt;throw new Error("unexpected error. Unable to resolve global object.")}(),ot=it.document&&it.document.childNodes,at=Int8Array;function ut(){return/^\s*function\s*([^(]*)/i}var ct=/^\s*function\s*([^(]*)/i;U(ut,"REGEXP",ct);var ft=Array.isArray?Array.isArray:function(t){return"[object Array]"===z(t)};function lt(t){return null!==t&&"object"==typeof t}function pt(t){var r,n,e,i;if(("Object"===(n=z(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=ct.exec(e.toString()))return r[1]}return lt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}U(lt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var n,e;if(!ft(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(lt));var st="function"==typeof C||"object"==typeof at||"function"==typeof ot?function(t){return pt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?pt(t).toLowerCase():r};function yt(t){return"function"===st(t)}function gt(t){return"number"==typeof t}var bt=Number,dt=bt.prototype.toString;var ht=Y();function vt(t){return"object"==typeof t&&(t instanceof bt||(ht?function(t){try{return dt.call(t),!0}catch(t){return!1}}(t):"[object Number]"===z(t)))}function mt(t){return gt(t)||vt(t)}U(mt,"isPrimitive",gt),U(mt,"isObject",vt);var wt=Number.POSITIVE_INFINITY,Et=bt.NEGATIVE_INFINITY,jt=Math.floor;function _t(t){return jt(t)===t}function xt(t){return t<wt&&t>Et&&_t(t)}function Ot(t){return gt(t)&&xt(t)}function Tt(t){return vt(t)&&xt(t.valueOf())}function St(t){return Ot(t)||Tt(t)}function At(t){return Ot(t)&&t>=0}function Ft(t){return Tt(t)&&t.valueOf()>=0}function Pt(t){return At(t)||Ft(t)}U(St,"isPrimitive",Ot),U(St,"isObject",Tt),U(Pt,"isPrimitive",At),U(Pt,"isObject",Ft);var kt=9007199254740991;function Nt(t){return null!==t&&"object"==typeof t&&At(t.length)&&t.length<=kt&&"number"==typeof t.BYTES_PER_ELEMENT&&"number"==typeof t.byteOffset&&"number"==typeof t.byteLength}function It(t){return Object.keys(Object(t))}var Vt,Lt=void 0!==Object.keys;function Bt(t){return"[object Arguments]"===z(t)}Vt=function(){return Bt(arguments)}();var Rt=Vt;function Ut(t){return"string"==typeof t}var Ct=String.prototype.valueOf;var $t=Y();function Mt(t){return"object"==typeof t&&(t instanceof String||($t?function(t){try{return Ct.call(t),!0}catch(t){return!1}}(t):"[object String]"===z(t)))}function Yt(t){return Ut(t)||Mt(t)}function Gt(t){return t!=t}function Wt(t){return gt(t)&&Gt(t)}function Xt(t){return vt(t)&&Gt(t.valueOf())}function Zt(t){return Wt(t)||Xt(t)}U(Yt,"isPrimitive",Ut),U(Yt,"isObject",Mt),U(Zt,"isPrimitive",Wt),U(Zt,"isObject",Xt);var Ht=Object.prototype.propertyIsEnumerable;var zt=!Ht.call("beep","0");function Dt(t,r){var n;return null!=t&&(!(n=Ht.call(t,r))&&zt&&Yt(t)?!Wt(r=+r)&&Ot(r)&&r>=0&&r<t.length:n)}var qt=Rt?Bt:function(t){return null!==t&&"object"==typeof t&&!ft(t)&&"number"==typeof t.length&&_t(t.length)&&t.length>=0&&t.length<=4294967295&&X(t,"callee")&&!Dt(t,"callee")},Jt=Array.prototype.slice;var Kt=Dt((function(){}),"prototype"),Qt=!Dt({toString:null},"toString");function tr(t,r,n){var e,i,o;if(!(o=t,"object"==typeof o&&null!==o&&"number"==typeof o.length&&_t(o.length)&&o.length>=0&&o.length<=kt||Ut(t)))throw new TypeError(F("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(e=t.length))return-1;if(3===arguments.length){if(!Ot(n))throw new TypeError(F("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=e)return-1;i=n}else(i=e+n)<0&&(i=0)}else i=0;if(Zt(r)){for(;i<e;i++)if(Zt(t[i]))return i}else for(;i<e;i++)if(t[i]===r)return i;return-1}function rr(t){return t.constructor&&t.constructor.prototype===t}var nr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],er="undefined"==typeof window?void 0:window;var ir=function(){var t;if("undefined"===st(er))return!1;for(t in er)try{-1===tr(nr,t)&&X(er,t)&&null!==er[t]&&"object"===st(er[t])&&rr(er[t])}catch(t){return!0}return!1}(),or="undefined"!=typeof window;var ar,ur=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ar=Lt?function(){return 2!==(It(arguments)||"").length}(1,2)?function(t){return qt(t)?It(Jt.call(t)):It(t)}:It:function(t){var r,n,e,i,o,a,u;if(i=[],qt(t)){for(u=0;u<t.length;u++)i.push(u.toString());return i}if("string"==typeof t){if(t.length>0&&!X(t,"0"))for(u=0;u<t.length;u++)i.push(u.toString())}else{if(!1==(e="function"==typeof t)&&!lt(t))return i;n=Kt&&e}for(o in t)n&&"prototype"===o||!X(t,o)||i.push(String(o));if(Qt)for(r=function(t){if(!1===or&&!ir)return rr(t);try{return rr(t)}catch(t){return!1}}(t),u=0;u<ur.length;u++)a=ur[u],r&&"constructor"===a||!X(t,a)||i.push(String(a));return i};var cr=ar;var fr,lr=Object,pr=Object.getPrototypeOf;fr=yt(Object.getPrototypeOf)?pr:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===z(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var sr=fr;var yr=Object.prototype;function gr(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!ft(t)}(t)&&(r=function(t){return null==t?null:(t=lr(t),sr(t))}(t),!r||!X(t,"constructor")&&X(r,"constructor")&&yt(r.constructor)&&"[object Function]"===z(r.constructor)&&X(r,"isPrototypeOf")&&yt(r.isPrototypeOf)&&(r===yr||function(t){var r;for(r in t)if(!X(t,r))return!1;return!0}(t)))}var br=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function dr(){return br.slice()}var hr={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function vr(){var t;return 0===arguments.length?hr.all.slice():(t=hr[arguments[0]])?t.slice():[]}function mr(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function wr(t,r,n){R(t,r,{configurable:!1,enumerable:!0,writable:!1,value:n})}U(vr,"enum",mr),function(t,r){var n,e,i;for(n=cr(r),i=0;i<n.length;i++)wr(t,e=n[i],r[e])}(vr,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Er={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function jr(){return{bool:Er.bool,int8:Er.int8,uint8:Er.uint8,uint8c:Er.uint8c,int16:Er.int16,uint16:Er.uint16,int32:Er.int32,uint32:Er.uint32,int64:Er.int64,uint64:Er.uint64,float32:Er.float32,float64:Er.float64,complex64:Er.complex64,complex128:Er.complex128,binary:Er.binary,generic:Er.generic,notype:Er.notype,userdefined_type:Er.userdefined_type}}U(dr,"enum",jr),function(t,r){var n,e,i;for(n=cr(r),i=0;i<n.length;i++)wr(t,e=n[i],r[e])}(dr,jr());var _r=function(t,r){var n,e,i,o,a,u,c,f=!0;if(!lt(t))throw new TypeError(F("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!gr(r))throw new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",r));if(X(r,"duplicates")&&!$(f=r.duplicates))throw new TypeError(F("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(e=(n=cr(t)).length,a={},f)for(c=0;c<e;c++)X(a,o=t[i=n[c]])?(u=a[o],ft(u)?a[o].push(i):a[o]=[u,i]):a[o]=i;else for(c=0;c<e;c++)a[t[i=n[c]]]=i;return a}(jr(),{duplicates:!1});var xr=jr();function Or(t){var r=typeof t;return"number"===r?function(t){var r=_r[t];return"string"==typeof r?r:null}(t)?t:null:"string"===r?function(t){var r=xr[t];return"number"==typeof r?r:null}(t):null}var Tr="function"==typeof Float32Array;var Sr="function"==typeof Float32Array?Float32Array:null;var Ar,Fr="function"==typeof Float32Array?Float32Array:void 0;Ar=function(){var t,r,n;if("function"!=typeof Sr)return!1;try{r=new Sr([1,3.14,-3.14,5e40]),n=r,t=(Tr&&n instanceof Float32Array||"[object Float32Array]"===z(n))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===wt}catch(r){t=!1}return t}()?Fr:function(){throw new Error("not implemented")};var Pr=Ar;function kr(t,r){return new Pr(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*r,2*(t.length-r))}var Nr="function"==typeof Float64Array;var Ir="function"==typeof Float64Array?Float64Array:null;var Vr,Lr="function"==typeof Float64Array?Float64Array:void 0;Vr=function(){var t,r,n;if("function"!=typeof Ir)return!1;try{r=new Ir([1,3.14,-3.14,NaN]),n=r,t=(Nr&&n instanceof Float64Array||"[object Float64Array]"===z(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?Lr:function(){throw new Error("not implemented")};var Br=Vr;function Rr(t,r){return new Br(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*r,2*(t.length-r))}var Ur="function"==typeof Uint8Array;var Cr="function"==typeof Uint8Array?Uint8Array:null;var $r,Mr="function"==typeof Uint8Array?Uint8Array:void 0;$r=function(){var t,r,n;if("function"!=typeof Cr)return!1;try{r=new Cr(r=[1,3.14,-3.14,256,257]),n=r,t=(Ur&&n instanceof Uint8Array||"[object Uint8Array]"===z(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?Mr:function(){throw new Error("not implemented")};var Yr=$r;function Gr(t,r){return new Yr(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*r,t.length-r)}function Wr(){var t,r=arguments,n="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}var Xr=Or("complex64"),Zr=Or("complex128"),Hr=Or("bool");function zr(t,r){if(!yt(t))throw new TypeError(Wr("1Nf3c",t));if(!yt(r))throw new TypeError(Wr("1Nf2H",r));return function(n,e,i,o,a,u,c){var f,l;if(!Nt(i)||!Nt(u))return r(n,e,i,o,a,u,c),u;if(e=Or(e),a=Or(a),null===e||null===a)throw new TypeError(Wr("1Nf1L"));f=e===Xr?kr(i,0):e===Zr?Rr(i,0):e===Hr?Gr(i,0):i;l=a===Xr?kr(u,0):a===Zr?Rr(u,0):a===Hr?Gr(u,0):u;return t(n,e,f,o,a,l,c),u}}function Dr(t,r){return new t.constructor(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*r,t.length-r)}function qr(t,r,n){return t>0&&r<0&&(n+=(t-1)*r),n}var Jr=Or("complex64"),Kr=Or("complex128"),Qr=Or("bool");return U(zr,"ndarray",(function(t,r){if(!yt(t))throw new TypeError(Wr("1Nf3c",t));if(!yt(r))throw new TypeError(Wr("1Nf2H",r));return function(n,e,i,o,a,u,c,f,l){var p,s;if(!Nt(i)||!Nt(c))return r(n,e,i,o,a,u,c,f,l),c;if(e=Or(e),u=Or(u),null===e||null===u)throw new TypeError(Wr("1Nf1L"));if(!At(a))throw new TypeError(Wr("1NfAG",a));if(!At(l))throw new TypeError(Wr("1NfAE",l));a=qr(n,o,a),l=qr(n,f,l),p=e===Jr?kr(i,a):e===Kr?Rr(i,a):e===Qr?Gr(i,a):Dr(i,a);s=u===Jr?kr(c,l):u===Kr?Rr(c,l):u===Qr?Gr(c,l):Dr(c,l);return t(n,e,p,o,u,s,f),c}})),zr}));
//# sourceMappingURL=index.js.map