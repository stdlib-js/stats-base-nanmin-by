// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@esm/index.mjs";function n(r,n,i,a,s){var o,d,l,f;if(r<=0)return NaN;if(1===r||0===i)return void 0===(l=a.call(s,n[0],0,0,n))?NaN:l;for(d=i<0?(1-r)*i:0,f=0;f<r&&((o=a.call(s,n[d],f,d,n))!=o||void 0===o);f++)d+=i;if(f===r)return NaN;for(f+=1;f<r;f++)d+=i,void 0===(l=a.call(s,n[d],f,d,n))||e(l)||(l<o||l===o&&t(l))&&(o=l);return o}r(n,"ndarray",(function(r,n,i,a,s,o){var d,l,f,m;if(r<=0)return NaN;if(1===r||0===i)return void 0===(f=s.call(o,n[0],0,0,n))?NaN:f;for(l=a,m=0;m<r&&((d=s.call(o,n[l],m,l,n))!=d||void 0===d);m++)l+=i;if(m===r)return NaN;for(m+=1;m<r;m++)l+=i,void 0===(f=s.call(o,n[l],m,l,n))||e(f)||(f<d||f===d&&t(f))&&(d=f);return d}));const{ndarray:i}=n;export{n as default,i as ndarray};
//# sourceMappingURL=index.mjs.map
