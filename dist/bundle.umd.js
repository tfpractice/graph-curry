!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("turmeric")):"function"==typeof define&&define.amd?define("graph-curry",["exports","turmeric"],r):r(n["graph-curry"]=n["graph-curry"]||{},n.turmeric)}(this,function(n,r){"use strict";var e=function(){function n(n,r){var e=[],t=!0,o=!1,u=void 0;try{for(var i,c=n[Symbol.iterator]();!(t=(i=c.next()).done)&&(e.push(i.value),!r||e.length!==r);t=!0);}catch(n){o=!0,u=n}finally{try{!t&&c.return&&c.return()}finally{if(o)throw u}}return e}return function(r,e){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return n(r,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),t=r.collections.addBinMap,o=r.collections.mapDiff,u=r.collections.spread,i=r.collections.addMap,c=r.collections.get,a=r.collections.flatTuple,f=r.collections.removeMap,l=function(n,r){return i(n)(r)(new Map)},d=function(n,r){return i(n)(r)(new Map(c(n)(r)))},s=function(n,r){var o=e(r,3),u=o[0],a=o[1],f=o[2],l=void 0===f?0:f;return[[u,i(c(n)(u))(a)(l)],[a,i(c(n)(a))(u)(l)]].reduce(t,new Map(n))},v=function(n,r){var o=e(r,2),u=o[0],i=o[1];return[[u,f(c(n)(u))(i)],[i,f(c(n)(i))(u)]].reduce(t,new Map(n))},h=function(n,r){var t=e(r,2),i=t[0],f=t[1];return u(o(f)(c(n)(i))).map(a(i)).reduce(s,d(n,i))},p=function(n,r){return u(new Map(r)).reduce(h,n)},g=Object.freeze({resetNodeBin:l,addNodeBin:d,addEdgeBin:s,removeEdgeBin:v,importEdgeBin:h,mergeEdgesBin:p}),y=function(){function n(n,r){var e=[],t=!0,o=!1,u=void 0;try{for(var i,c=n[Symbol.iterator]();!(t=(i=c.next()).done)&&(e.push(i.value),!r||e.length!==r);t=!0);}catch(n){o=!0,u=n}finally{try{!t&&c.return&&c.return()}finally{if(o)throw u}}return e}return function(r,e){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return n(r,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),w=r.collections.triple,m=r.collections.tuple,b=r.collections.get,M=r.collections.spreadK,S=r.collections.hasK,A=r.collections.addBinMap,j=r.collections.removeBin,B=r.collections.uniteMap,E=function(n){return new Map(n)},O=E,x=function(){for(var n=arguments.length,r=Array(n),e=0;e<n;e++)r[e]=arguments[e];return r.reduce(d,O())},N=function(n){return M(O(n))},z=function(n){return function(r){return O(b(n)(r))}},T=function(n){return function(r){return N(z(n)(r))}},K=function(n){return function(r){return S(n)(r)}},I=function(n){return function(r){return function(e){return K(z(n)(r))(e)}}},D=function(n){return function(){for(var r=arguments.length,e=Array(r),t=0;t<r;t++)e[t]=arguments[t];return e.reduce(d,n)}},G=function(n){return function(){for(var r=arguments.length,e=Array(r),t=0;t<r;t++)e[t]=arguments[t];return e.reduce(j,O(n))}},R=function(n){return function(){for(var r=arguments.length,e=Array(r),t=0;t<r;t++)e[t]=arguments[t];return e.reduce(l,n)}},_=function(n){return function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){for(var t=arguments.length,o=Array(t),u=0;u<t;u++)o[u]=arguments[u];return o.map(w(e)(r)).reduce(s,n)}}},k=function(n){return function(r){return function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.map(m(r)).reduce(v,n)}}},q=function(n){return function(){for(var r=arguments.length,e=Array(r),t=0;t<r;t++)e[t]=arguments[t];return e.reduce(p,n)}},F=function(n){return function(r){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return A(z(n)(r),[e,t])}}},P=function(n){return function(r){var e=y(r,2),t=e[0],o=e[1],u=void 0===o?0:o;return A(n,[t,u])}},V=B,C=Object.freeze({spawn:E,copy:O,fromElements:x,nodes:N,adj:z,neighbors:T,contains:K,isAdjacent:I,addNodes:D,removeNodes:G,resetNodes:R,addEdges:_,removeEdges:k,mergeEdges:q,addNeighbor:F,addEntry:P,mergeNeighbors:V}),H=function(){function n(n,r){var e=[],t=!0,o=!1,u=void 0;try{for(var i,c=n[Symbol.iterator]();!(t=(i=c.next()).done)&&(e.push(i.value),!r||e.length!==r);t=!0);}catch(n){o=!0,u=n}finally{try{!t&&c.return&&c.return()}finally{if(o)throw u}}return e}return function(r,e){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return n(r,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),J=r.collections.addBinSet,L=r.collections.lastK,Q=r.collections.hasK,U=r.collections.mapDiff,W=r.collections.diff,X=r.collections.addBinMap,Y=r.collections.spread,Z=r.collections.spreadK,$=r.collections.spreadV,nn=r.collections.popFirst,rn=r.collections.tuple,en=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{pred:n,length:r,weight:e}}}},tn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map;return function(r){return n.set(r,{pred:L(n),weight:0,length:1})}},on=function(n){return tn()(n)},un=function(n){var r=n.weight,e=void 0===r?0:r;return e},cn=function(n){var r=n.length,e=void 0===r?1:r;return e},an=function(n){return n.get(L(n))},fn=function(n){return un(an(n))},ln=function(n){return cn(an(n))},dn=function(n){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return fn(n)+r}},sn=function(n){return ln(n)?ln(n)+1:1},vn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map,r=arguments[1],e=H(r,2),t=e[0],o=e[1],u=void 0===o?0:o;return n.set(t,en(L(n))(sn(n))(dn(n)(u)))},hn=function(n){return function(r){var e=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:on(r),o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[L(t),0],u=H(o,2),i=u[0],c=u[1];return Y(U(n.get(i))(t)).reduce(e,vn(t,[i,c]))};return e(on(r))}},pn=function(n){return function(r){var e=function r(e){return function(t){var o=nn(t),u=U(n.get(o))(e);return Y(u).reduce(vn,e),Z(u).reduce(J,t),t.size>0?r(e)(t):e}};return e(on(r))(new Set([r]))}},gn=function(n){return function(r){for(var e=pn(n)(r),t=new Set([r]),o=on(r);t.size>0;){var u=nn(t),i=n.get(u),c=o.get(u),a=c.length,f=c.weight,l=!0,d=!1,s=void 0;try{for(var v,h=i[Symbol.iterator]();!(l=(v=h.next()).done);l=!0){var p=H(v.value,2),g=p[0],y=p[1],w=e.get(g)||{length:1,weight:0},m=(w.length,w.weight),b={pred:u,length:a+1,weight:f+y},M=f+y<m?b:w;o.has(g)||(t.add(g),o.set(g,M))}}catch(n){d=!0,s=n}finally{try{!l&&h.return&&h.return()}finally{if(d)throw s}}}return o}},yn=function(n){var r=function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Set,t=arguments[1];return W(Z(n.get(t)))(e).reduce(r,e.add(t))},e=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map,e=arguments[1];return W(r(new Set,e))(n).map(rn(r(new Set,e))).reduce(X,n)};return Z(n).reduce(e,new Map)},wn=function(n){return new Set($(yn(n)))},mn=function(n){return function(r){return function(e){return Q(yn(n).get(e))(r)}}},bn=Object.freeze({dfs:hn,bfs:pn,dijkstra:gn,components:yn,componentSet:wn,pathBetween:mn}),Mn=Object.freeze({Graph:C,Reducers:g,Traversals:bn});n.default=Mn,n.Graph=C,n.Reducers=g,n.Traversals=bn,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=bundle.umd.js.map
