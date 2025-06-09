"use strict";var s=function(i,a){return function(){return a||i((a={exports:{}}).exports,a),a.exports}};var m=s(function(J,d){
var y=require('@stdlib/math-base-assert-is-nan/dist'),j=require('@stdlib/math-base-assert-is-negative-zero/dist');function O(i,a,o,t,c,q){var n,u,v,e,r,f;if(n=a.data,u=a.accessors[0],i===1||o===0)return r=c.call(q,u(n,t),0,t,a),r===void 0||y(r)?NaN:r;for(e=t,f=0;f<i&&(v=c.call(q,u(n,e),f,e,n),!(v===v&&v!==void 0));f++)e+=o;if(f===i)return NaN;for(f+=1,f;f<i;f++)e+=o,r=c.call(q,u(n,e),f,e,n),!(r===void 0||y(r))&&(r<v||r===v&&j(r))&&(v=r);return v}d.exports=O
});var l=s(function(K,p){
var P=require('@stdlib/math-base-assert-is-nan/dist'),R=require('@stdlib/math-base-assert-is-negative-zero/dist'),w=require('@stdlib/array-base-arraylike2object/dist'),z=m();function C(i,a,o,t,c,q){var n,u,v,e,r;if(i<=0)return NaN;if(v=w(a),v.accessorProtocol)return z(i,v,o,t,c,q);if(i===1||o===0)return e=c.call(q,a[t],0,t,a),e===void 0?NaN:e;for(u=t,r=0;r<i&&(n=c.call(q,a[u],r,u,a),!(n===n&&n!==void 0));r++)u+=o;if(r===i)return NaN;for(r+=1,r;r<i;r++)u+=o,e=c.call(q,a[u],r,u,a),!(e===void 0||P(e))&&(e<n||e===n&&R(e))&&(n=e);return n}p.exports=C
});var N=s(function(L,B){
var D=require('@stdlib/strided-base-stride2offset/dist'),E=l();function F(i,a,o,t,c){return E(i,a,o,D(i,o),t,c)}B.exports=F
});var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Z=N(),H=l();G(Z,"ndarray",H);module.exports=Z;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
