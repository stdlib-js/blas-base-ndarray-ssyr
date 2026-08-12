/** @license Apache-2.0 */

'use strict';

/**
* BLAS level 2 routine to perform the symmetric rank 1 operation `A = alpha*x*x^T + A`.
*
* @module @stdlib/blas-base-ndarray-ssyr
*
* @example
* var Float32Matrix = require( '@stdlib/ndarray-matrix-float32' );
* var Float32Vector = require( '@stdlib/ndarray-vector-float32' );
* var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
* var resolveEnum = require( '@stdlib/blas-base-matrix-triangle-resolve-enum' );
* var ssyr = require( '@stdlib/blas-base-ndarray-ssyr' );
*
* var x = new Float32Vector( [ 1.0, 2.0, 3.0 ] );
* var A = new Float32Matrix( [ [ 1.0, 2.0, 3.0 ], [ 2.0, 1.0, 2.0 ], [ 3.0, 2.0, 1.0 ] ] );
*
* var uplo = scalar2ndarray( resolveEnum( 'upper' ), {
*     'dtype': 'int32'
* });
* var alpha = scalar2ndarray( 1.0, {
*     'dtype': 'float32'
* });
*
* var y = ssyr( [ x, A, uplo, alpha ] );
* // returns <ndarray>[ [ 2.0, 4.0, 6.0 ], [ 2.0, 5.0, 8.0 ], [ 3.0, 2.0, 10.0 ] ]
*
* var bool = ( y === A );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
