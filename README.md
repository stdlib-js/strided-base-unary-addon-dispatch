<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dispatch

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Dispatch to a native add-on applying a unary function to an input strided array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import dispatch from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-unary-addon-dispatch@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { ndarray } from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-unary-addon-dispatch@esm/index.mjs';
```

#### dispatch( addon, fallback )

Returns a function which dispatches to a native add-on applying a unary function to an input strided array.

```javascript
function addon( N, dtypeX, x, strideX, dtypeY, y, strideY ) {
    // Call into native add-on...
}

function fallback( N, dtypeX, x, strideX, dtypeY, y, strideY ) {
    // Fallback JavaScript implementation...
}

// Create a dispatch function:
var f = dispatch( addon, fallback );

// ...

// Invoke the dispatch function with strided array arguments:
f( 2, 'generic', [ 1, 2 ], 1, 'generic', [ 0, 0 ], 1 );
```

The returned function has the following signature:

```text
f( N, dtypeX, x, strideX, dtypeY, y, strideY )
```

where

-   **N**: number of indexed elements.
-   **dtypeX**: `x` data type.
-   **x**: input array.
-   **strideX**: `x` stride length.
-   **dtypeY**: `y` data type.
-   **y**: output array.
-   **strideY**: `y` stride length.

The `addon` function should have the following signature:

```text
f( N, dtypeX, x, strideX, dtypeY, y, strideY )
```

where

-   **N**: number of indexed elements.
-   **dtypeX**: `x` data type (enumeration constant).
-   **x**: input array.
-   **strideX**: `x` stride length.
-   **dtypeY**: `y` data type (enumeration constant).
-   **y**: output array.
-   **strideY**: `y` stride length.

The `fallback` function should have the following signature:

```text
f( N, dtypeX, x, strideX, dtypeY, y, strideY )
```

where

-   **N**: number of indexed elements.
-   **dtypeX**: `x` data type.
-   **x**: input array.
-   **strideX**: `x` stride length.
-   **dtypeY**: `y` data type.
-   **y**: output array.
-   **strideY**: `y` stride length.

#### dispatch.ndarray( addon, fallback )

Returns a function which dispatches to a native add-on applying a unary function to an input strided array using alternative indexing semantics.

<!-- eslint-disable max-len -->

```javascript
function addon( N, dtypeX, x, strideX, dtypeY, y, strideY ) {
    // Call into native add-on...
}

function fallback( N, dtypeX, x, strideX, offsetX, dtypeY, y, strideY, offsetY ) {
    // Fallback JavaScript implementation...
}

// Create a dispatch function:
var f = dispatch.ndarray( addon, fallback );

// ...

// Invoke the dispatch function with strided array arguments:
f( 2, 'generic', [ 1, 2 ], 1, 0, 'generic', [ 0, 0 ], 1, 0 );
```

The returned function has the following signature:

```text
f( N, dtypeX, x, strideX, offsetX, dtypeY, y, strideY, offsetY )
```

where

-   **N**: number of indexed elements.
-   **dtypeX**: `x` data type.
-   **x**: input array.
-   **strideX**: `x` stride length.
-   **offsetX**: starting `x` index.
-   **dtypeY**: `y` data type.
-   **y**: output array.
-   **strideY**: `y` stride length.
-   **offsetY**: starting `y` index.

The `addon` function should have the following signature:

```text
f( N, dtypeX, x, strideX, dtypeY, y, strideY )
```

where

-   **N**: number of indexed elements.
-   **dtypeX**: `x` data type (enumeration constant).
-   **x**: input array.
-   **strideX**: `x` stride length.
-   **dtypeY**: `y` data type (enumeration constant).
-   **y**: output array.
-   **strideY**: `y` stride length.

The `fallback` function should have the following signature:

```text
f( N, dtypeX, x, strideX, offsetX, dtypeY, y, strideY, offsetY )
```

where

-   **N**: number of indexed elements.
-   **dtypeX**: `x` data type.
-   **x**: input array.
-   **strideX**: `x` stride length.
-   **offsetX**: starting `x` index.
-   **dtypeY**: `y` data type.
-   **y**: output array.
-   **strideY**: `y` stride length.
-   **offsetY**: starting `y` index.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   To determine whether to dispatch to the `addon` function, the returned dispatch function checks whether the provided arrays are typed arrays. If the provided arrays are typed arrays, the dispatch function invokes the `addon` function; otherwise, the dispatch function invokes the `fallback` function.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint-disable max-len -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import dispatch from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-unary-addon-dispatch@esm/index.mjs';

function addon( N, dtypeX, x, strideX, dtypeY, y, strideY ) {
    console.log( x );
    // => <Float64Array>[ 3, 4 ]

    console.log( y );
    // => <Float64Array>[ 7, 8 ]
}

function fallback( N, dtypeX, x, strideX, offsetX, dtypeY, y, strideY, offsetY ) {
    console.log( x );
    // => [ 1, 2, 3, 4 ]

    console.log( y );
    // => [ 5, 6, 7, 8 ]
}

// Create a dispatch function:
var f = dispatch.ndarray( addon, fallback );

// Create strided arrays:
var x = new Float64Array( [ 1, 2, 3, 4 ] );
var y = new Float64Array( [ 5, 6, 7, 8 ] );

// Dispatch to the add-on function:
f( 2, 'float64', x, 1, 2, 'float64', y, 1, 2 );

// Define new strided arrays:
x = [ 1, 2, 3, 4 ];
y = [ 5, 6, 7, 8 ];

// Dispatch to the fallback function:
f( 2, 'generic', x, 1, 2, 'generic', y, 1, 2 );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/strided-base-unary-addon-dispatch.svg
[npm-url]: https://npmjs.org/package/@stdlib/strided-base-unary-addon-dispatch

[test-image]: https://github.com/stdlib-js/strided-base-unary-addon-dispatch/actions/workflows/test.yml/badge.svg?branch=v0.3.1
[test-url]: https://github.com/stdlib-js/strided-base-unary-addon-dispatch/actions/workflows/test.yml?query=branch:v0.3.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/strided-base-unary-addon-dispatch/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/strided-base-unary-addon-dispatch?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/strided-base-unary-addon-dispatch.svg
[dependencies-url]: https://david-dm.org/stdlib-js/strided-base-unary-addon-dispatch/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/strided-base-unary-addon-dispatch/tree/deno
[deno-readme]: https://github.com/stdlib-js/strided-base-unary-addon-dispatch/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/strided-base-unary-addon-dispatch/tree/umd
[umd-readme]: https://github.com/stdlib-js/strided-base-unary-addon-dispatch/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/strided-base-unary-addon-dispatch/tree/esm
[esm-readme]: https://github.com/stdlib-js/strided-base-unary-addon-dispatch/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/strided-base-unary-addon-dispatch/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/strided-base-unary-addon-dispatch/main/LICENSE

</section>

<!-- /.links -->
