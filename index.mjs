// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-dtype-resolve-enum@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-offset-view@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-min-view-buffer-index@esm/index.mjs";var l=s("complex64"),a=s("complex128");function f(e,d){if(!r(e))throw new TypeError(o("0gj3p",e));if(!r(d))throw new TypeError(o("0gj2S",d));return function(r,m,p,f,j,u,h){var g,v;if(!t(p)||!t(u))return d(r,m,p,f,j,u,h),u;if(m=s(m),j=s(j),null===m||null===j)throw new TypeError(o("0gj1S"));g=m===l?n(p,0):m===a?i(p,0):p;v=j===l?n(u,0):j===a?i(u,0):u;return e(r,m,g,f,j,v,h),u}}var j=s("complex64"),u=s("complex128");function h(e,l){if(!r(e))throw new TypeError(o("0gj3p",e));if(!r(l))throw new TypeError(o("0gj2S",l));return function(r,a,f,h,g,v,c,b,w){var x,y;if(!t(f)||!t(c))return l(r,a,f,h,g,v,c,b,w),c;if(a=s(a),v=s(v),null===a||null===v)throw new TypeError(o("0gj1S"));if(!d(g))throw new TypeError(o("invalid argument. Input array offset must be a nonnegative integer. Value: `%s`.",g));if(!d(w))throw new TypeError(o("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",w));g=p(r,h,g),w=p(r,b,w),x=a===j?n(f,g):a===u?i(f,g):m(f,g);y=v===j?n(c,w):v===u?i(c,w):m(c,w);return e(r,a,x,h,v,y,b),c}}e(f,"ndarray",h);export{f as default,h as ndarray};
//# sourceMappingURL=index.mjs.map
