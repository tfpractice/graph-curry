!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("turmeric")):"function"==typeof define&&define.amd?define("graph-curry",["turmeric"],e):n["graph-curry"]=e(n.turmeric)}(this,function(n){"use strict";var e=function(){function n(n,e){var r=[],t=!0,o=!1,u=void 0;try{for(var i,c=n[Symbol.iterator]();!(t=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);t=!0);}catch(n){o=!0,u=n}finally{try{!t&&c.return&&c.return()}finally{if(o)throw u}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return n(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=n.collections.addBinMap,t=n.collections.mapDiff,o=n.collections.spread,u=n.collections.addMap,i=n.collections.get,c=n.collections.flatTuple,a=n.collections.removeMap,f=function(n,e){return u(n)(e)(new Map)},l=function(n,e){return u(n)(e)(new Map(i(n)(e)))},d=function(n,t){var o=e(t,3),c=o[0],a=o[1],f=o[2],l=void 0===f?0:f;return[[c,u(i(n)(c))(a)(l)],[a,u(i(n)(a))(c)(l)]].reduce(r,new Map(n))},s=function(n,t){var o=e(t,2),u=o[0],c=o[1];return[[u,a(i(n)(u))(c)],[c,a(i(n)(c))(u)]].reduce(r,new Map(n))},v=function(n,r){var u=e(r,2),a=u[0],f=u[1];return o(t(f)(i(n)(a))).map(c(a)).reduce(d,l(n,a))},g=function(n,e){return o(new Map(e)).reduce(v,n)},p=Object.freeze({resetNodeBin:f,addNodeBin:l,addEdgeBin:d,removeEdgeBin:s,importEdgeBin:v,mergeEdgesBin:g}),h=n.collections.triple,m=n.collections.tuple,w=n.collections.get,y=n.collections.spreadK,M=n.collections.hasK,b=n.collections.addBinMap,B=n.collections.removeBin,S=n.collections.uniteMap,A=function(n){return new Map(n)},E=A,j=function(){for(var n=arguments.length,e=Array(n),r=0;r<n;r++)e[r]=arguments[r];return e.reduce(l,E())},N=function(n){return y(E(n))},z=function(n){return function(e){return E(w(n)(e))}},K=function(n){return function(e){return N(z(n)(e))}},O=function(n){return function(e){return M(n)(e)}},x=function(n){return function(e){return function(r){return O(z(n)(e))(r)}}},T=function(n){return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.reduce(l,n)}},D=function(n){return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.reduce(B,E(n))}},k=function(n){return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.reduce(f,n)}},q=function(n){return function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){for(var t=arguments.length,o=Array(t),u=0;u<t;u++)o[u]=arguments[u];return o.map(h(r)(e)).reduce(d,n)}}},F=function(n){return function(e){return function(){for(var r=arguments.length,t=Array(r),o=0;o<r;o++)t[o]=arguments[o];return t.map(m(e)).reduce(s,n)}}},G=function(n){return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.reduce(g,n)}},I=function(n){return function(e){return function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return b(z(n)(e),[r,t])}}},R=function(n){return function(r){var t=e(r,2),o=t[0],u=t[1],i=void 0===u?0:u;return b(n,[o,i])}},V=S,C=Object.freeze({spawn:A,copy:E,fromElements:j,nodes:N,adj:z,neighbors:K,contains:O,isAdjacent:x,addNodes:T,removeNodes:D,resetNodes:k,addEdges:q,removeEdges:F,mergeEdges:G,addNeighbor:I,addEntry:R,mergeNeighbors:V}),H=n.collections.addBinSet,J=n.collections.lastK,L=n.collections.hasK,P=n.collections.mapDiff,Q=n.collections.diff,U=n.collections.addBinMap,W=n.collections.spread,X=n.collections.spreadK,Y=n.collections.spreadV,Z=n.collections.popFirst,$=n.collections.tuple,_=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{pred:n,length:e,weight:r}}}},nn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map;return function(e){return n.set(e,{pred:J(n),weight:0,length:1})}},en=function(n){return nn()(n)},rn=function(n){var e=n.weight,r=void 0===e?0:e;return r},tn=function(n){var e=n.length,r=void 0===e?1:e;return r},on=function(n){return n.get(J(n))},un=function(n){return rn(on(n))},cn=function(n){return tn(on(n))},an=function(n){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return un(n)+e}},fn=function(n){return cn(n)?cn(n)+1:1},ln=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map,r=arguments[1],t=e(r,2),o=t[0],u=t[1],i=void 0===u?0:u;return n.set(o,_(J(n))(fn(n))(an(n)(i)))},dn=function(n){return function(r){var t=function t(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:en(r),u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[J(o),0],i=e(u,2),c=i[0],a=i[1];return W(P(n.get(c))(o)).reduce(t,ln(o,[c,a]))};return t(en(r))}},sn=function(n){return function(e){var r=function e(r){return function(t){var o=Z(t),u=P(n.get(o))(r);return W(u).reduce(ln,r),X(u).reduce(H,t),t.size>0?e(r)(t):r}};return r(en(e))(new Set([e]))}},vn=function(n){return function(r){for(var t=sn(n)(r),o=new Set([r]),u=en(r);o.size>0;){var i=Z(o),c=n.get(i),a=u.get(i),f=a.length,l=a.weight,d=!0,s=!1,v=void 0;try{for(var g,p=c[Symbol.iterator]();!(d=(g=p.next()).done);d=!0){var h=e(g.value,2),m=h[0],w=h[1],y=t.get(m)||{length:1,weight:0},M=(y.length,y.weight),b={pred:i,length:f+1,weight:l+w},B=l+w<M?b:y;u.has(m)||(o.add(m),u.set(m,B))}}catch(n){s=!0,v=n}finally{try{!d&&p.return&&p.return()}finally{if(s)throw v}}}return u}},gn=function(n){var e=function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Set,t=arguments[1];return Q(X(n.get(t)))(r).reduce(e,r.add(t))},r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map,r=arguments[1];return Q(e(new Set,r))(n).map($(e(new Set,r))).reduce(U,n)};return X(n).reduce(r,new Map)},pn=function(n){return new Set(Y(gn(n)))},hn=function(n){return function(e){return function(r){return L(gn(n).get(r))(e)}}},mn=Object.freeze({dfs:dn,bfs:sn,dijkstra:vn,components:gn,componentSet:pn,pathBetween:hn}),wn=Object.freeze({Graph:C,Reducers:p,Traversals:mn});return wn});
//# sourceMappingURL=bundle.umd.js.map
