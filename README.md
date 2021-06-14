<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# nanminBy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Calculate the minimum value of a strided array via a callback function, ignoring `NaN` values.

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-nanmin-by
```

</section>

<section class="usage">

## Usage

```javascript
var nanminBy = require( '@stdlib/stats-base-nanmin-by' );
```

#### nanminBy( N, x, stride, clbk\[, thisArg] )

Calculates the minimum value of strided array `x` via a callback function, ignoring `NaN` values.

```javascript
function accessor( v ) {
    return v * 2.0;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0, NaN ];

var v = nanminBy( x.length, x, 1, accessor );
// returns -10.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Array`][mdn-array], [`typed array`][mdn-typed-array], or an array-like object (excluding strings and functions). 
-   **stride**: index increment.
-   **clbk**: callback function.
-   **thisArg**: execution context (_optional_).

The invoked callback is provided four arguments:

-   **value**: array element.
-   **aidx**: array index.
-   **sidx**: strided index (`offset + aidx*stride`).
-   **array**: input array/collection.

To set the callback execution context, provide a `thisArg`.

```javascript
function accessor( v ) {
    this.count += 1;
    return v * 2.0;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0, NaN ];

var context = {
    'count': 0
};

var v = nanminBy( x.length, x, 1, accessor, context );
// returns -10.0

var cnt = context.count;
// returns 10
```

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to access every other element

```javascript
var floor = require( '@stdlib/math-base-special-floor' );

function accessor( v ) {
    return v * 2.0;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0, NaN, NaN ];
var N = floor( x.length / 2 );

var v = nanminBy( N, x, 2, accessor );
// returns -4.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var floor = require( '@stdlib/math-base-special-floor' );

function accessor( v ) {
    return v * 2.0;
}

// Initial array...
var x0 = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var N = floor( x0.length/2 );

// Access every other element...
var v = nanminBy( N, x1, 2, accessor );
// returns -12.0
```

#### nanminBy.ndarray( N, x, stride, offset, clbk\[, thisArg] )

Calculates the minimum value of strided array `x` via a callback function, ignoring `NaN` values and using alternative indexing semantics.

```javascript
function accessor( v ) {
    return v * 2.0;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0, NaN ];

var v = nanminBy.ndarray( x.length, x, 1, 0, accessor );
// returns -10.0
```

The function has the following additional parameters:

-   **offset**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of `x`

```javascript
function accessor( v ) {
    return v * 2.0;
}

var x = [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ];

var v = nanminBy.ndarray( 3, x, 1, x.length-3, accessor );
// returns -12.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   A provided callback function should return a numeric value.
-   If a provided callback function returns `NaN`, the value is ignored.
-   If a provided callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is ignored.
-   When possible, prefer using [`dnanmin`][@stdlib/stats/base/dnanmin], [`snanmin`][@stdlib/stats/base/snanmin], and/or [`nanmin`][@stdlib/stats/base/nanmin], as, depending on the environment, these interfaces are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var round = require( '@stdlib/math-base-special-round' );
var randu = require( '@stdlib/random-base-randu' );
var Float64Array = require( '@stdlib/array-float64' );
var gfillBy = require( '@stdlib/blas-ext-base-gfill-by' );
var nanminBy = require( '@stdlib/stats-base-nanmin-by' );

function fill() {
    if ( randu() < 0.2 ) {
        return NaN;
    }
    return round( ( randu()*100.0 ) - 50.0 );
}

function accessor( v ) {
    return v * 2.0;
}

var x = new Float64Array( 10 );

gfillBy( x.length, x, 1, fill );
console.log( x );

var v = nanminBy( x.length, x, 1, accessor );
console.log( v );
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-nanmin-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-nanmin-by

[test-image]: https://github.com/stdlib-js/stats-base-nanmin-by/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-nanmin-by/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-nanmin-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-nanmin-by?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-nanmin-by
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-nanmin-by/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-nanmin-by/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/stats/base/dnanmin]: https://github.com/stdlib-js/stats-base-dnanmin

[@stdlib/stats/base/nanmin]: https://github.com/stdlib-js/stats-base-nanmin

[@stdlib/stats/base/snanmin]: https://github.com/stdlib-js/stats-base-snanmin

</section>

<!-- /.links -->
