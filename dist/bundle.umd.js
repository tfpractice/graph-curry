!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("turmeric")):"function"==typeof define&&define.amd?define("functional_graphs",["turmeric"],e):n.functional_graphs=e(n.turmeric)}(this,function(n){"use strict";var e=function(){function n(n,e){var r=[],t=!0,o=!1,i=void 0;try{for(var u,c=n[Symbol.iterator]();!(t=(u=c.next()).done)&&(r.push(u.value),!e||r.length!==e);t=!0);}catch(n){o=!0,i=n}finally{try{!t&&c.return&&c.return()}finally{if(o)throw i}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return n(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=n.collections.spread,t=n.collections.addMap,o=n.collections.get,i=n.collections.spreadK,u=n.collections.flatTuple,c=n.collections.mapDiff,a=n.collections.removeMap,f=function(n){return function(e){return function(r){return new Map(n).set(e,r)}}},l=function(n){return function(e){return new Map(o(n)(e))}},d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map;return function(e){return i(l(n)(e))}},s=function(n,e){return t(n)(e)(l(n)(e))},v=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map,r=arguments[1],o=e(r,3),i=o[0],u=o[1],c=o[2],a=void 0===c?0:c;return n.set(i,t(l(n)(i))(u)(a)).set(u,t(l(n)(u))(i)(a))},g=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map,r=arguments[1],t=e(r,3),o=t[0],i=t[1];t[2];return n.set(o,a(n.get(o))(i)).set(i,a(n.get(o))(o))},h=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map,e=arguments[1];return n.set(e,new Map)},p=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[,new Map],o=e(t,2),i=o[0],a=o[1];return r(c(a)(n.get(i))).map(u(i)).reduce(v,s(n,i))},w=Object.freeze({set:f,nabeMap:l,nabes:d,addSrc:s,addEdgeBin:v,rmEdgeBin:g,clearNeighborsBin:h,importEdgeBin:p}),y=function(){function n(n,e){var r=[],t=!0,o=!1,i=void 0;try{for(var u,c=n[Symbol.iterator]();!(t=(u=c.next()).done)&&(r.push(u.value),!e||r.length!==e);t=!0);}catch(n){o=!0,i=n}finally{try{!t&&c.return&&c.return()}finally{if(o)throw i}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return n(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),m=n.collections.spread,b=n.collections.triple,M=n.collections.spreadK,S=n.collections.hasK,A=n.collections.addBinMap,j=n.collections.removeBin,E=n.collections.uniteMap,B=function(n){return new Map(n)},O=B,x=function(){for(var n=arguments.length,e=Array(n),r=0;r<n;r++)e[r]=arguments[r];return e.reduce(s,B())},z=function(n){return M(new Map(n))},K=function(n){return function(e){return new Map(n.get(e))}},N=function(n){return function(e){return z(K(n)(e))}},T=function(n){return function(e){return S(n)(e)}},I=function(n){return function(e){return function(r){return T(K(n)(e))(r)}}},D=function(n){return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.reduce(s,n)}},_=function(n){return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.reduce(j,n)}},k=function(n){return function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){for(var t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];return o.map(b(r)(e)).reduce(v,n)}}},q=function(n){return function(e){return function(){for(var r=arguments.length,t=Array(r),o=0;o<r;o++)t[o]=arguments[o];return t.map(b(0)(e)).reduce(g,n)}}},F=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map;return new Map(m(e).reduce(p,n))}},G=function(n){return function(e){return function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return A(K(n)(e),[r,t])}}},R=function(n){return function(e){var r=y(e,2),t=r[0],o=r[1],i=void 0===o?0:o;return A(n,[t,i])}},V=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map;return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.reduce(h,n)}},C=E,H=Object.freeze({spawn:B,copy:O,fromElements:x,nodes:z,adj:K,neighbors:N,contains:T,isAdjacent:I,addNodes:D,removeNodes:_,addEdges:k,removeEdges:q,mergeEdges:F,addNeighbor:G,addEntry:R,clearNeighbors:V,mergeNeighbors:C}),J=function(){function n(n,e){var r=[],t=!0,o=!1,i=void 0;try{for(var u,c=n[Symbol.iterator]();!(t=(u=c.next()).done)&&(r.push(u.value),!e||r.length!==e);t=!0);}catch(n){o=!0,i=n}finally{try{!t&&c.return&&c.return()}finally{if(o)throw i}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return n(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),L=n.collections.addSet,P=n.collections.lastK,Q=n.collections.hasK,U=n.collections.mapDiff,W=n.collections.diff,X=n.collections.addBinMap,Y=n.collections.spread,Z=n.collections.spreadK,$=n.collections.spreadV,nn=n.collections.popFirst,en=n.collections.tuple,rn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{pred:n,length:e,weight:r}}}},tn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map;return function(e){return n.set(e,{pred:P(n),weight:0,length:1})}},on=function(n){return tn()(n)},un=function(n){var e=n.weight,r=void 0===e?0:e;return r},cn=function(n){var e=n.length,r=void 0===e?1:e;return r},an=function(n){return n.get(P(n))},fn=function(n){return un(an(n))},ln=function(n){return cn(an(n))},dn=function(n){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return fn(n)+e}},sn=function(n){return ln(n)?ln(n)+1:1},vn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map,e=arguments[1],r=J(e,2),t=r[0],o=r[1],i=void 0===o?0:o;return n.set(t,rn(P(n))(sn(n))(dn(n)(i)))},gn=function(n){return function(e){var r=function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:on(e),o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[P(t),0],i=J(o,2),u=i[0],c=i[1];return Y(U(n.get(u))(t)).reduce(r,vn(t,[u,c]))};return r(on(e))}},hn=function(n){return function(e){var r=function e(r){return function(t){var o=nn(t),i=U(n.get(o))(r);return Y(i).reduce(vn,r),Z(i).reduce(L,t),t.size>0?e(r)(t):r}};return r(on(e))(new Set([e]))}},pn=function(n){return function(e){for(var r=hn(n)(e),t=new Set([e]),o=on(e);t.size>0;){var i=nn(t),u=n.get(i),c=o.get(i),a=c.length,f=c.weight,l=!0,d=!1,s=void 0;try{for(var v,g=u[Symbol.iterator]();!(l=(v=g.next()).done);l=!0){var h=J(v.value,2),p=h[0],w=h[1],y=r.get(p)||{length:1,weight:0},m=(y.length,y.weight),b={pred:i,length:a+1,weight:f+w},M=f+w<m?b:y;o.has(p)||(t.add(p),o.set(p,M))}}catch(n){d=!0,s=n}finally{try{!l&&g.return&&g.return()}finally{if(d)throw s}}}return o}},wn=function(n){var e=function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Set,t=arguments[1];return W(Z(n.get(t)))(r).reduce(e,r.add(t))},r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map,r=arguments[1];return W(e(new Set,r))(n).map(en(e(new Set,r))).reduce(X,n)};return Z(n).reduce(r,new Map)},yn=function(n){return new Set($(wn(n)))},mn=function(n){return function(e){return function(r){return Q(wn(n).get(r))(e)}}},bn=Object.freeze({dfs:gn,bfs:hn,dijkstra:pn,components:wn,componentSet:yn,pathBetween:mn}),Mn=Object.freeze({Graph:H,Reducers:w,Traversals:bn});return Mn});
//# sourceMappingURL=bundle.umd.js.map
