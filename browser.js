// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(t){return"number"==typeof t}function r(t){var e,n="";for(e=0;e<t;e++)n+="0";return n}function i(t,e,n){var i=!1,o=e-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=n?t+r(o):r(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(t){var e,r,a;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,a=parseInt(r,10),!isFinite(a)){if(!n(r))throw new Error("invalid integer. Value: "+r);a=0}return a<0&&("u"===t.specifier||10!==e)&&(a=4294967295+a+1),a<0?(r=(-a).toString(e),t.precision&&(r=i(r,t.precision,t.padRight)),r="-"+r):(r=a.toString(e),a||t.precision?t.precision&&(r=i(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=t.specifier===u.call(t.specifier)?u.call(r):o.call(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,s=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,b=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,v=/(\..*[^0])0*e/;function m(t){var e,r,i=parseFloat(t.arg);if(!isFinite(i)){if(!n(t.arg))throw new Error("invalid floating-point number. Value: "+r);i=t.arg}switch(t.specifier){case"e":case"E":r=i.toExponential(t.precision);break;case"f":case"F":r=i.toFixed(t.precision);break;case"g":case"G":c(i)<1e-4?((e=t.precision)>0&&(e-=1),r=i.toExponential(e)):r=i.toPrecision(t.precision),t.alternate||(r=p.call(r,v,"$1e"),r=p.call(r,h,"e"),r=p.call(r,d,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=p.call(r,s,"e+0$1"),r=p.call(r,y,"e-0$1"),t.alternate&&(r=p.call(r,g,"$1."),r=p.call(r,b,"$1.e")),i>=0&&t.sign&&(r=t.sign+r),r=t.specifier===l.call(t.specifier)?l.call(r):f.call(r)}function w(t){var e,n="";for(e=0;e<t;e++)n+=" ";return n}var E=String.fromCharCode,j=Array.isArray;function _(t){return t!=t}function x(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function O(t){var e,n,r,o,u,c,f,l,p,s,y,g,b;if(!j(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(c="",f=1,l=0;l<t.length;l++)if("string"==typeof(r=t[l]))c+=r;else{if(e=void 0!==r.precision,!(r=x(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+r+"`.");for(r.mapping&&(f=r.mapping),n=r.flags,p=0;p<n.length;p++)switch(o=n.charAt(p)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=n.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===r.width){if(r.width=parseInt(arguments[f],10),f+=1,_(r.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(e&&"*"===r.precision){if(r.precision=parseInt(arguments[f],10),f+=1,_(r.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,e=!1)}switch(r.arg=arguments[f],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(r.padZeros=!1),r.arg=a(r);break;case"s":r.maxWidth=e?r.precision:-1,r.arg=String(r.arg);break;case"c":if(!_(r.arg)){if((u=parseInt(r.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=_(u)?String(r.arg):E(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(r.precision=6),r.arg=m(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=i(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=(s=r.arg,y=r.width,g=r.padRight,b=void 0,(b=y-s.length)<0?s:s=g?s+w(b):w(b)+s)),c+=r.arg||"",f+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function A(t){var e,n,r,i;for(n=[],i=0,r=T.exec(t);r;)(e=t.slice(i,T.lastIndex-r[0].length)).length&&n.push(e),n.push(S(r)),i=T.lastIndex,r=T.exec(t);return(e=t.slice(i)).length&&n.push(e),n}function F(t){var e,n;if("string"!=typeof t)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=[A(t)],n=1;n<arguments.length;n++)e.push(arguments[n]);return O.apply(null,e)}var P,k=Object.prototype,N=k.toString,I=k.__defineGetter__,V=k.__defineSetter__,L=k.__lookupGetter__,B=k.__lookupSetter__;P=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,n){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof n||null===n||"[object Array]"===N.call(n))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(L.call(t,e)||B.call(t,e)?(r=t.__proto__,t.__proto__=k,delete t[e],t[e]=n.value,t.__proto__=r):t[e]=n.value),o="get"in n,u="set"in n,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&I&&I.call(t,e,n.get),u&&V&&V.call(t,e,n.set),t};var R=P;function U(t,e,n){R(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var C=/./;function $(t){return"boolean"==typeof t}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Y(){return M&&"symbol"==typeof Symbol.toStringTag}var G=Object.prototype.toString,W=Object.prototype.hasOwnProperty;function X(t,e){return null!=t&&W.call(t,e)}var Z="function"==typeof Symbol?Symbol:void 0,H="function"==typeof Z?Z.toStringTag:"",z=Y()?function(t){var e,n,r;if(null==t)return G.call(t);n=t[H],e=X(t,H);try{t[H]=void 0}catch(e){return G.call(t)}return r=G.call(t),e?t[H]=n:delete t[H],r}:function(t){return G.call(t)},D=Boolean,q=Boolean.prototype.toString,J=Y();function K(t){return"object"==typeof t&&(t instanceof D||(J?function(t){try{return q.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===z(t)))}function Q(t){return $(t)||K(t)}U(Q,"isPrimitive",$),U(Q,"isObject",K);var tt="object"==typeof self?self:null,et="object"==typeof window?window:null,nt="object"==typeof globalThis?globalThis:null,rt=function(t){if(arguments.length){if(!$(t))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(nt)return nt;if(tt)return tt;if(et)return et;throw new Error("unexpected error. Unable to resolve global object.")}(),it=rt.document&&rt.document.childNodes,ot=Int8Array;function ut(){return/^\s*function\s*([^(]*)/i}var at=/^\s*function\s*([^(]*)/i;U(ut,"REGEXP",at);var ct=Array.isArray?Array.isArray:function(t){return"[object Array]"===z(t)};function ft(t){return null!==t&&"object"==typeof t}function lt(t){var e,n,r,i;if(("Object"===(n=z(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(e=at.exec(r.toString()))return e[1]}return ft(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}U(ft,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var n,r;if(!ct(e))return!1;if(0===(n=e.length))return!1;for(r=0;r<n;r++)if(!1===t(e[r]))return!1;return!0}}(ft));var pt="function"==typeof C||"object"==typeof ot||"function"==typeof it?function(t){return lt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"==(e=typeof t)?lt(t).toLowerCase():e};function st(t){return"function"===pt(t)}function yt(t){return"number"==typeof t}var gt=Number,bt=gt.prototype.toString,dt=Y();function ht(t){return"object"==typeof t&&(t instanceof gt||(dt?function(t){try{return bt.call(t),!0}catch(t){return!1}}(t):"[object Number]"===z(t)))}function vt(t){return yt(t)||ht(t)}U(vt,"isPrimitive",yt),U(vt,"isObject",ht);var mt=Number.POSITIVE_INFINITY,wt=gt.NEGATIVE_INFINITY,Et=Math.floor;function jt(t){return Et(t)===t}function _t(t){return t<mt&&t>wt&&jt(t)}function xt(t){return yt(t)&&_t(t)}function Ot(t){return ht(t)&&_t(t.valueOf())}function Tt(t){return xt(t)||Ot(t)}function St(t){return xt(t)&&t>=0}function At(t){return Ot(t)&&t.valueOf()>=0}function Ft(t){return St(t)||At(t)}U(Tt,"isPrimitive",xt),U(Tt,"isObject",Ot),U(Ft,"isPrimitive",St),U(Ft,"isObject",At);var Pt=9007199254740991;function kt(t){return null!==t&&"object"==typeof t&&St(t.length)&&t.length<=Pt&&"number"==typeof t.BYTES_PER_ELEMENT&&"number"==typeof t.byteOffset&&"number"==typeof t.byteLength}function Nt(t){return Object.keys(Object(t))}var It,Vt=void 0!==Object.keys;function Lt(t){return"[object Arguments]"===z(t)}It=function(){return Lt(arguments)}();var Bt=It;function Rt(t){return"string"==typeof t}var Ut=String.prototype.valueOf,Ct=Y();function $t(t){return"object"==typeof t&&(t instanceof String||(Ct?function(t){try{return Ut.call(t),!0}catch(t){return!1}}(t):"[object String]"===z(t)))}function Mt(t){return Rt(t)||$t(t)}function Yt(t){return t!=t}function Gt(t){return yt(t)&&Yt(t)}function Wt(t){return ht(t)&&Yt(t.valueOf())}function Xt(t){return Gt(t)||Wt(t)}U(Mt,"isPrimitive",Rt),U(Mt,"isObject",$t),U(Xt,"isPrimitive",Gt),U(Xt,"isObject",Wt);var Zt=Object.prototype.propertyIsEnumerable,Ht=!Zt.call("beep","0");function zt(t,e){var n;return null!=t&&(!(n=Zt.call(t,e))&&Ht&&Mt(t)?!Gt(e=+e)&&xt(e)&&e>=0&&e<t.length:n)}var Dt=Bt?Lt:function(t){return null!==t&&"object"==typeof t&&!ct(t)&&"number"==typeof t.length&&jt(t.length)&&t.length>=0&&t.length<=4294967295&&X(t,"callee")&&!zt(t,"callee")},qt=Array.prototype.slice,Jt=zt((function(){}),"prototype"),Kt=!zt({toString:null},"toString");function Qt(t,e,n){var r,i,o;if(!("object"==typeof(o=t)&&null!==o&&"number"==typeof o.length&&jt(o.length)&&o.length>=0&&o.length<=Pt||Rt(t)))throw new TypeError(F("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(r=t.length))return-1;if(3===arguments.length){if(!xt(n))throw new TypeError(F("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=r)return-1;i=n}else(i=r+n)<0&&(i=0)}else i=0;if(Xt(e)){for(;i<r;i++)if(Xt(t[i]))return i}else for(;i<r;i++)if(t[i]===e)return i;return-1}function te(t){return t.constructor&&t.constructor.prototype===t}var ee,ne=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],re="undefined"==typeof window?void 0:window,ie=function(){var t;if("undefined"===pt(re))return!1;for(t in re)try{-1===Qt(ne,t)&&X(re,t)&&null!==re[t]&&"object"===pt(re[t])&&te(re[t])}catch(t){return!0}return!1}(),oe="undefined"!=typeof window,ue=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ee=Vt?function(){return 2!==(Nt(arguments)||"").length}(1,2)?function(t){return Dt(t)?Nt(qt.call(t)):Nt(t)}:Nt:function(t){var e,n,r,i,o,u,a;if(i=[],Dt(t)){for(a=0;a<t.length;a++)i.push(a.toString());return i}if("string"==typeof t){if(t.length>0&&!X(t,"0"))for(a=0;a<t.length;a++)i.push(a.toString())}else{if(0==(r="function"==typeof t)&&!ft(t))return i;n=Jt&&r}for(o in t)n&&"prototype"===o||!X(t,o)||i.push(String(o));if(Kt)for(e=function(t){if(!1===oe&&!ie)return te(t);try{return te(t)}catch(t){return!1}}(t),a=0;a<ue.length;a++)u=ue[a],e&&"constructor"===u||!X(t,u)||i.push(String(u));return i};var ae,ce=ee,fe=Object,le=Object.getPrototypeOf;ae=st(Object.getPrototypeOf)?le:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===z(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var pe=ae,se=Object.prototype;function ye(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!ct(t)}(t)&&(e=function(t){return null==t?null:(t=fe(t),pe(t))}(t),!e||!X(t,"constructor")&&X(e,"constructor")&&st(e.constructor)&&"[object Function]"===z(e.constructor)&&X(e,"isPrototypeOf")&&st(e.isPrototypeOf)&&(e===se||function(t){var e;for(e in t)if(!X(t,e))return!1;return!0}(t)))}var ge=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function be(){return ge.slice()}var de={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function he(){var t;return 0===arguments.length?de.all.slice():(t=de[arguments[0]])?t.slice():[]}function ve(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function me(t,e,n){R(t,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}U(he,"enum",ve),function(t,e){var n,r,i;for(n=ce(e),i=0;i<n.length;i++)me(t,r=n[i],e[r])}(he,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var we={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Ee(){return{bool:we.bool,int8:we.int8,uint8:we.uint8,uint8c:we.uint8c,int16:we.int16,uint16:we.uint16,int32:we.int32,uint32:we.uint32,int64:we.int64,uint64:we.uint64,float32:we.float32,float64:we.float64,complex64:we.complex64,complex128:we.complex128,binary:we.binary,generic:we.generic,notype:we.notype,userdefined_type:we.userdefined_type}}U(be,"enum",Ee),function(t,e){var n,r,i;for(n=ce(e),i=0;i<n.length;i++)me(t,r=n[i],e[r])}(be,Ee());var je=function(t,e){var n,r,i,o,u,a,c,f=!0;if(!ft(t))throw new TypeError(F("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!ye(e))throw new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",e));if(X(e,"duplicates")&&!$(f=e.duplicates))throw new TypeError(F("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(r=(n=ce(t)).length,u={},f)for(c=0;c<r;c++)X(u,o=t[i=n[c]])?(a=u[o],ct(a)?u[o].push(i):u[o]=[a,i]):u[o]=i;else for(c=0;c<r;c++)u[t[i=n[c]]]=i;return u}(Ee(),{duplicates:!1}),_e=Ee();function xe(t){var e=typeof t;return"number"===e?function(t){var e=je[t];return"string"==typeof e?e:null}(t)?t:null:"string"===e?function(t){var e=_e[t];return"number"==typeof e?e:null}(t):null}var Oe,Te="function"==typeof Float32Array,Se="function"==typeof Float32Array?Float32Array:null,Ae="function"==typeof Float32Array?Float32Array:void 0;Oe=function(){var t,e,n;if("function"!=typeof Se)return!1;try{e=new Se([1,3.14,-3.14,5e40]),n=e,t=(Te&&n instanceof Float32Array||"[object Float32Array]"===z(n))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===mt}catch(e){t=!1}return t}()?Ae:function(){throw new Error("not implemented")};var Fe=Oe;function Pe(t,e){return new Fe(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*e,2*(t.length-e))}var ke,Ne="function"==typeof Float64Array,Ie="function"==typeof Float64Array?Float64Array:null,Ve="function"==typeof Float64Array?Float64Array:void 0;ke=function(){var t,e,n;if("function"!=typeof Ie)return!1;try{e=new Ie([1,3.14,-3.14,NaN]),n=e,t=(Ne&&n instanceof Float64Array||"[object Float64Array]"===z(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?Ve:function(){throw new Error("not implemented")};var Le=ke;function Be(t,e){return new Le(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*e,2*(t.length-e))}var Re,Ue="function"==typeof Uint8Array,Ce="function"==typeof Uint8Array?Uint8Array:null,$e="function"==typeof Uint8Array?Uint8Array:void 0;Re=function(){var t,e,n;if("function"!=typeof Ce)return!1;try{e=new Ce(e=[1,3.14,-3.14,256,257]),n=e,t=(Ue&&n instanceof Uint8Array||"[object Uint8Array]"===z(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?$e:function(){throw new Error("not implemented")};var Me=Re;function Ye(t,e){return new Me(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*e,t.length-e)}function Ge(){var t,e=arguments,n="https://stdlib.io/e/"+e[0]+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}var We=xe("complex64"),Xe=xe("complex128"),Ze=xe("bool");function He(t,e){if(!st(t))throw new TypeError(Ge("1Nf3c",t));if(!st(e))throw new TypeError(Ge("1Nf2H",e));return function(n,r,i,o,u,a,c){var f,l;if(!kt(i)||!kt(a))return e(n,r,i,o,u,a,c),a;if(r=xe(r),u=xe(u),null===r||null===u)throw new TypeError(Ge("1Nf1L"));return f=r===We?Pe(i,0):r===Xe?Be(i,0):r===Ze?Ye(i,0):i,l=u===We?Pe(a,0):u===Xe?Be(a,0):u===Ze?Ye(a,0):a,t(n,r,f,o,u,l,c),a}}function ze(t,e){return new t.constructor(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*e,t.length-e)}function De(t,e,n){return t>0&&e<0&&(n+=(t-1)*e),n}var qe=xe("complex64"),Je=xe("complex128"),Ke=xe("bool");return U(He,"ndarray",(function(t,e){if(!st(t))throw new TypeError(Ge("1Nf3c",t));if(!st(e))throw new TypeError(Ge("1Nf2H",e));return function(n,r,i,o,u,a,c,f,l){var p,s;if(!kt(i)||!kt(c))return e(n,r,i,o,u,a,c,f,l),c;if(r=xe(r),a=xe(a),null===r||null===a)throw new TypeError(Ge("1Nf1L"));if(!St(u))throw new TypeError(Ge("1NfAG",u));if(!St(l))throw new TypeError(Ge("1NfAE",l));return u=De(n,o,u),l=De(n,f,l),p=r===qe?Pe(i,u):r===Je?Be(i,u):r===Ke?Ye(i,u):ze(i,u),s=a===qe?Pe(c,l):a===Je?Be(c,l):a===Ke?Ye(c,l):ze(c,l),t(n,r,p,o,a,s,f),c}})),He},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).dispatch=e();
//# sourceMappingURL=browser.js.map
