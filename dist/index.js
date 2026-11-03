"use strict";var E=function(t,n){return function(){try{return n||t((n={exports:{}}).exports,n),n.exports}catch(m){throw n=0,m}}};var A=E(function($,P){"use strict";var p=require("@stdlib/assert-is-function"),O=require("@stdlib/assert-is-typed-array-like"),c=require("@stdlib/strided-base-dtype-resolve-enum"),T=require("@stdlib/strided-base-reinterpret-complex64"),C=require("@stdlib/strided-base-reinterpret-complex128"),L=require("@stdlib/strided-base-reinterpret-boolean"),V=require("@stdlib/string-format"),b=c("complex64"),f=c("complex128"),B=c("bool");function N(t,n){if(!p(t))throw new TypeError(V("invalid argument. First argument must be a function. Value: `%s`.",t));if(!p(n))throw new TypeError(V("invalid argument. Second argument must be a function. Value: `%s`.",n));return m;function m(l,e,u,s,r,i,v){var o,a;if(!O(u)||!O(i))return n(l,e,u,s,r,i,v),i;if(e=c(e),r=c(r),e===null||r===null)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");return e===b?o=T(u,0):e===f?o=C(u,0):e===B?o=L(u,0):o=u,r===b?a=T(i,0):r===f?a=C(i,0):r===B?a=L(i,0):a=i,t(l,e,o,s,r,a,v),i}}P.exports=N});var J=E(function(k,H){"use strict";var F=require("@stdlib/assert-is-function"),M=require("@stdlib/assert-is-typed-array-like"),I=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,q=require("@stdlib/strided-base-dtype-resolve-enum"),x=require("@stdlib/strided-base-reinterpret-complex64"),S=require("@stdlib/strided-base-reinterpret-complex128"),U=require("@stdlib/strided-base-reinterpret-boolean"),R=require("@stdlib/strided-base-offset-view"),j=require("@stdlib/strided-base-min-view-buffer-index"),h=require("@stdlib/string-format"),z=q("complex64"),D=q("complex128"),G=q("bool");function Q(t,n){if(!F(t))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",t));if(!F(n))throw new TypeError(h("invalid argument. Second argument must be a function. Value: `%s`.",n));return m;function m(l,e,u,s,r,i,v,o,a){var g,w;if(!M(u)||!M(v))return n(l,e,u,s,r,i,v,o,a),v;if(e=q(e),i=q(i),e===null||i===null)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");if(!I(r))throw new TypeError(h("invalid argument. Input array offset must be a nonnegative integer. Value: `%s`.",r));if(!I(a))throw new TypeError(h("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",a));return r=j(l,s,r),a=j(l,o,a),e===z?g=x(u,r):e===D?g=S(u,r):e===G?g=U(u,r):g=R(u,r),i===z?w=x(v,a):i===D?w=S(v,a):i===G?w=U(v,a):w=R(v,a),t(l,e,g,s,i,w,o),v}}H.exports=Q});var W=require("@stdlib/utils-define-nonenumerable-read-only-property"),K=A(),Z=J();W(K,"ndarray",Z);module.exports=K;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
