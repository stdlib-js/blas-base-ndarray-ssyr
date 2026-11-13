"use strict";var l=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var d=l(function(D,q){
var o=require('@stdlib/ndarray-base-numel-dimension/dist'),c=require('@stdlib/ndarray-base-strides/dist'),f=require('@stdlib/ndarray-base-stride/dist'),v=require('@stdlib/ndarray-base-offset/dist'),s=require('@stdlib/ndarray-base-data-buffer/dist'),n=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),g=require('@stdlib/blas-base-ssyr/dist').ndarray;function p(e){var r,i,u,t,a;return t=e[0],a=e[1],i=n(e[2]),r=n(e[3]),u=c(a,!1),g(i,o(a,0),r,s(t),f(t,0),v(t),s(a),u[0],u[1],v(a)),a}q.exports=p
});var m=d();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
