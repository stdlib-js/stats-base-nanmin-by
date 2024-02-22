"use strict";var c=function(n,a){return function(){return a||n((a={exports:{}}).exports,a),a.exports}};var q=c(function(E,l){
var d=require('@stdlib/math-base-assert-is-nan/dist'),B=require('@stdlib/math-base-assert-is-negative-zero/dist');function Z(n,a,f,t,o){var u,e,i,r;if(n<=0)return NaN;if(n===1||f===0)return i=t.call(o,a[0],0,0,a),i===void 0?NaN:i;for(f<0?e=(1-n)*f:e=0,r=0;r<n&&(u=t.call(o,a[e],r,e,a),!(u===u&&u!==void 0));r++)e+=f;if(r===n)return NaN;for(r+=1,r;r<n;r++)e+=f,i=t.call(o,a[e],r,e,a),!(i===void 0||d(i))&&(i<u||i===u&&B(i))&&(u=i);return u}l.exports=Z
});var m=c(function(F,s){
var O=require('@stdlib/math-base-assert-is-nan/dist'),R=require('@stdlib/math-base-assert-is-negative-zero/dist');function j(n,a,f,t,o,u){var e,i,r,v;if(n<=0)return NaN;if(n===1||f===0)return r=o.call(u,a[0],0,0,a),r===void 0?NaN:r;for(i=t,v=0;v<n&&(e=o.call(u,a[i],v,i,a),!(e===e&&e!==void 0));v++)i+=f;if(v===n)return NaN;for(v+=1,v;v<n;v++)i+=f,r=o.call(u,a[i],v,i,a),!(r===void 0||O(r))&&(r<e||r===e&&R(r))&&(e=r);return e}s.exports=j
});var p=c(function(G,N){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=q(),z=m();w(y,"ndarray",z);N.exports=y
});var C=p();module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
