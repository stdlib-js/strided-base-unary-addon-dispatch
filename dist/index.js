"use strict";var E=function(t,u){return function(){return u||t((u={exports:{}}).exports,u),u.exports}};var A=E(function($,P){"use strict";var p=require("@stdlib/assert-is-function"),O=require("@stdlib/assert-is-typed-array-like"),w=require("@stdlib/strided-base-dtype-resolve-enum"),T=require("@stdlib/strided-base-reinterpret-complex64"),C=require("@stdlib/strided-base-reinterpret-complex128"),L=require("@stdlib/strided-base-reinterpret-boolean"),V=require("@stdlib/string-format"),b=w("complex64"),f=w("complex128"),B=w("bool");function N(t,u){if(!p(t))throw new TypeError(V("invalid argument. First argument must be a function. Value: `%s`.",t));if(!p(u))throw new TypeError(V("invalid argument. Second argument must be a function. Value: `%s`.",u));return h;function h(l,e,n,s,r,i,v){var o,a;if(!O(n)||!O(i))return u(l,e,n,s,r,i,v),i;if(e=w(e),r=w(r),e===null||r===null)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");return e===b?o=T(n,0):e===f?o=C(n,0):e===B?o=L(n,0):o=n,r===b?a=T(i,0):r===f?a=C(i,0):r===B?a=L(i,0):a=i,t(l,e,o,s,r,a,v),i}}P.exports=N});var J=E(function(k,H){"use strict";var F=require("@stdlib/assert-is-function"),M=require("@stdlib/assert-is-typed-array-like"),I=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,c=require("@stdlib/strided-base-dtype-resolve-enum"),x=require("@stdlib/strided-base-reinterpret-complex64"),S=require("@stdlib/strided-base-reinterpret-complex128"),U=require("@stdlib/strided-base-reinterpret-boolean"),R=require("@stdlib/strided-base-offset-view"),j=require("@stdlib/strided-base-min-view-buffer-index"),q=require("@stdlib/string-format"),z=c("complex64"),D=c("complex128"),G=c("bool");function Q(t,u){if(!F(t))throw new TypeError(q("invalid argument. First argument must be a function. Value: `%s`.",t));if(!F(u))throw new TypeError(q("invalid argument. Second argument must be a function. Value: `%s`.",u));return h;function h(l,e,n,s,r,i,v,o,a){var m,g;if(!M(n)||!M(v))return u(l,e,n,s,r,i,v,o,a),v;if(e=c(e),i=c(i),e===null||i===null)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");if(!I(r))throw new TypeError(q("invalid argument. Input array offset must be a nonnegative integer. Value: `%s`.",r));if(!I(a))throw new TypeError(q("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",a));return r=j(l,s,r),a=j(l,o,a),e===z?m=x(n,r):e===D?m=S(n,r):e===G?m=U(n,r):m=R(n,r),i===z?g=x(v,a):i===D?g=S(v,a):i===G?g=U(v,a):g=R(v,a),t(l,e,m,s,i,g,o),v}}H.exports=Q});var W=require("@stdlib/utils-define-nonenumerable-read-only-property"),K=A(),Z=J();W(K,"ndarray",Z);module.exports=K;
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
