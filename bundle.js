// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).nanminBy=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,l=n.__lookupGetter__,u=n.__lookupSetter__;var f=t,c=function(e,r,t){var f,c,d,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(l.call(e,r)||u.call(e,r)?(f=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=f):e[r]=t.value),d="get"in t,_="set"in t,c&&(d||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return d&&a&&a.call(e,r,t.get),_&&i&&i.call(e,r,t.set),e},d=r()?f:c;var _=function(e,r,t){d(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(e){return e!=e},v=Number.NEGATIVE_INFINITY;var b=function(e){return 0===e&&1/e===v},y=p,s=b;var N=p,m=b;var j=function(e,r,t,n,o){var a,i,l,u;if(e<=0)return NaN;if(1===e||0===t)return void 0===(l=n.call(o,r[0],0,0,r))?NaN:l;for(i=t<0?(1-e)*t:0,u=0;u<e&&((a=n.call(o,r[i],u,i,r))!=a||void 0===a);u++)i+=t;if(u===e)return NaN;for(u+=1;u<e;u++)i+=t,void 0===(l=n.call(o,r[i],u,i,r))||y(l)||(l<a||l===a&&s(l))&&(a=l);return a};return _(j,"ndarray",(function(e,r,t,n,o,a){var i,l,u,f;if(e<=0)return NaN;if(1===e||0===t)return void 0===(u=o.call(a,r[0],0,0,r))?NaN:u;for(l=n,f=0;f<e&&((i=o.call(a,r[l],f,l,r))!=i||void 0===i);f++)l+=t;if(f===e)return NaN;for(f+=1;f<e;f++)l+=t,void 0===(u=o.call(a,r[l],f,l,r))||N(u)||(u<i||u===i&&m(u))&&(i=u);return i})),j}));
//# sourceMappingURL=bundle.js.map
