!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define("graph-curry",["exports"],r):r(n["graph-curry"]=n["graph-curry"]||{})}(this,function(n){"use strict";var r=function(n){return!!n[Symbol.iterator]},t=function(n){return r(n)?n:[n]},e=function(n){return!!n.delete},u=function(n){return!!n.has},o=function(n){return e(n)?n:new Set(t(n))},i=function(n){return u(n)?n:new Set(t(n))},c=function(){function n(n,r){var t=[],e=!0,u=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);e=!0);}catch(n){u=!0,o=n}finally{try{!e&&c.return&&c.return()}finally{if(u)throw o}}return t}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return n(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(n){if(Array.isArray(n)){for(var r=0,t=Array(n.length);r<n.length;r++)t[r]=n[r];return t}return Array.from(n)},a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat(f(t(n)))},d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return a(t(n).keys())},v=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return a(t(n).values())},g=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return a(t(n).entries())},h=g,l=function(n){return function(r){return[r,n]}},s=function(n){return function(r){return function(t){return[r,t,n]}}},p=function(n){return function(r){return[].concat(f(t(n)),f(t(r)))}},y=function(n,r){return p(n)(r)},m=function(n){return function(r){return[n].concat(f(t(r)))}},w=function(n){return function(r){return[].concat(f(t(n)),[r])}},S=function(n){return function(r){return i(n).has(r)}},A=function(n){return function(r){return S(d(n))(r)}},b=function(n){return function(r){return!A(n)(r)}},E=function(n){return function(r){var t=c(r,2),e=t[0];t[1];return A(n)(e)}},N=function(n){return function(r){var t=c(r,2),e=t[0],u=t[1];return!E(n)([e,u])}},j=function(n){return new Set(a(n))},x=function(n){return new Map(h(n))},B=function(n,r){return new Set(w(n)(r))},M=function(n,r){return new Map(w(n)(r))},P=function(n,r){return o(n).delete(r)?n:n},k=function(n){return function(r){return a(n).filter(b(r))}},z=function(n){return function(r){return a(n).filter(N(r)).reduce(M,new Map)}},O=function(n){return function(r){return a(z(r)(n)).reduce(M,n)}},L=function(n){return function(r){return function(t){return x(n).set(r,t)}}},W=function(n){return function(){for(var r=arguments.length,t=Array(r),e=0;e<r;e++)t[e]=arguments[e];return t.reduce(B,n)}},I=function(n){return function(){for(var r=arguments.length,t=Array(r),e=0;e<r;e++)t[e]=arguments[e];return t.reduce(P,x(n))}},T=function(n){return function(r){return P(n,r)&&r}},_=function(n){return T(n)(a(n).shift())},C=function(n){return function(r){return x(n).get(r)}},G=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return a(n).shift()},V=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return a(n).pop()},q=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return V(d(n))},D=function(){function n(n,r){var t=[],e=!0,u=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);e=!0);}catch(n){u=!0,o=n}finally{try{!e&&c.return&&c.return()}finally{if(u)throw o}}return t}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return n(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),F=function(n,r){return L(n)(r)(x())},H=function(n,r){return L(n)(r)(C(n)(r))},J=function(n){return function(r){return d(C(n)(r)).map(w(r))}},K=function(n,r){var t=D(r,3),e=t[0],u=t[1],o=t[2],i=void 0===o?0:o;return[[e,L(C(n)(e))(u)(i)],[u,L(C(n)(u))(e)(i)]].reduce(M,x(n))},Q=function(n,r){var t=D(r,2),e=t[0],u=t[1];return[[e,I(C(n)(e))(u)],[u,I(C(n)(u))(e)]].reduce(M,x(n))},R=function(n,r){return J(n)(r).reduce(Q,x(n))},U=function(n,r){return I(R(n,r))(r)},X=function(n,r){var t=D(r,2),e=t[0],u=t[1];return a(z(u)(C(n)(e))).map(m(e)).reduce(K,H(n,e))},Y=function(n,r){return a(x(r)).reduce(X,n)},Z=O,$=function(n){return x(n)},nn=$,rn=function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];return r.reduce(H,nn())},tn=function(n){return d(nn(n))},en=function(n){return function(r){return x(C(n)(r))}},un=function(n){return function(r){return tn(en(n)(r))}},on=function(n){return function(r){return A(n)(r)}},cn=function(n){return function(r){return function(t){return on(en(n)(r))(t)}}},fn=function(n){return function(){for(var r=arguments.length,t=Array(r),e=0;e<r;e++)t[e]=arguments[e];return t.reduce(H,n)}},an=function(n){return function(){for(var r=arguments.length,t=Array(r),e=0;e<r;e++)t[e]=arguments[e];return t.reduce(F,n)}},dn=function(n){return function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){for(var e=arguments.length,u=Array(e),o=0;o<e;o++)u[o]=arguments[o];return u.map(s(t)(r)).reduce(K,n)}}},vn=function(n){return function(r){return function(){for(var t=arguments.length,e=Array(t),u=0;u<t;u++)e[u]=arguments[u];return e.map(l(r)).reduce(Q,n)}}},gn=function(n){return function(){for(var r=arguments.length,t=Array(r),e=0;e<r;e++)t[e]=arguments[e];return t.reduce(R,nn(n))}},hn=function(n){return function(){for(var r=arguments.length,t=Array(r),e=0;e<r;e++)t[e]=arguments[e];return t.reduce(P,gn(n).apply(void 0,t))}},ln=function(n){return function(){for(var r=arguments.length,t=Array(r),e=0;e<r;e++)t[e]=arguments[e];return t.reduce(Y,n)}},sn=function(n){return function(r){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return M(en(n)(r),[t,e])}}},pn=function(n){return function(r){var t=D(r,2),e=t[0],u=t[1],o=void 0===u?0:u;return M(n,[e,o])}},yn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return{pred:n,length:r,weight:t}},mn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{pred:n,length:r,weight:t}}}},wn=function(n){return function(r){return L(n)(r)(yn(q(n),1,0))}},Sn=function(n){return wn()(n)},An=function(n){var r=n.weight,t=void 0===r?0:r;return t},bn=function(n){var r=n.length,t=void 0===r?1:r;return t},En=function(n){return n.get(q(n))},Nn=function(n){return An(En(n))},jn=function(n){return bn(En(n))},xn=function(n){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Nn(n)+r}},Bn=function(n){return jn(n)?jn(n)+1:1},Mn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map,r=arguments[1],t=D(r,2),e=t[0],u=t[1],o=void 0===u?0:u;return n.set(e,mn(q(n))(Bn(n))(xn(n)(o)))},Pn=function(n){var r=function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Set,e=arguments[1];return k(d(n.get(e)))(t).reduce(r,W(t)(e))},t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map,t=arguments[1];return k(r(new Set,t))(n).map(l(r(new Set,t))).reduce(M,n)};return d(n).reduce(t,new Map)},kn=function(n){return new Set(v(Pn(n)))},zn=function(n){return function(r){var t=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Sn(r),u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[q(e),0],o=D(u,2),i=o[0],c=o[1];return a(z(n.get(i))(e)).reduce(t,Mn(e,[i,c]))};return t(Sn(r))}},On=function(n){return function(r){var t=function r(t){return function(e){var u=_(e),o=z(n.get(u))(t);return a(o).reduce(Mn,t),d(o).reduce(B,e),e.size>0?r(t)(e):t}};return t(Sn(r))(j([r]))}},Ln=function(n){return function(r){for(var t=On(n)(r),e=j([r]),u=Sn(r);e.size>0;){var o=_(e),i=n.get(o),c=u.get(o),f=c.length,a=c.weight,d=!0,v=!1,g=void 0;try{for(var h,l=i[Symbol.iterator]();!(d=(h=l.next()).done);d=!0){var s=D(h.value,2),p=s[0],y=s[1],m=t.get(p)||{length:1,weight:0},w=(m.length,m.weight),S={pred:o,length:f+1,weight:a+y},A=a+y<w?S:m;u.has(p)||(e.add(p),u.set(p,A))}}catch(n){v=!0,g=n}finally{try{!d&&l.return&&l.return()}finally{if(v)throw g}}}return u}},Wn=function(n){return function(r){return function(t){return A(C(Pn(n))(r))(t)}}},In=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:" ",r=arguments[1],t=(arguments[2],arguments[3]);return r===V(t)?n.concat(r," "):n.concat(r," , ")},Tn=function(n){return a(n).reduce(In,"")},_n=function(n){return d(n).reduce(In,"")},Cn=function(n){return v(n).reduce(In,"")},Gn=function(n){return h(n).reduce(In,"")},Vn=function(n){return" { "+d(n).join(" => ")+" }"},qn=function(n){var r=D(n,2),t=r[0],e=r[1];return"{ Edge "+t+" >> [ "+_n(e)+" ] } "},Dn=function(n){var r=D(n,2),t=r[0],e=r[1];return"{ component "+t+" >> [ "+_n(e)+" ] } "},Fn=function(n){return h(n).reduce(function(n,r,t){var e=D(r,2),u=e[0],o=e[1];return n+qn([u,o])},"Showing Edges\n")},Hn=function(n){var r=n.edges;return Fn(r)},Jn=function n(t){return r(t)?a(t).reduce(y,[]).map(n):t},Kn=function(n){return function(r){return j([n,r])}},Qn=function(n){return function(r){return function(t){return j(p(un(n)(r))(un(n)(t)))}}},Rn=function(n){return function(r){return function(t){return x(p(en(n)(r))(en(n)(t)))}}},Un=function(n){return function(r){return function(t){return[r,t].reduce(P,Rn(n)(r)(t))}}},Xn=function(n){return function(r){return function(t){return L()(Kn(r)(t))(Un(n)(r)(t))}}},Yn=function(n){return function(r){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G(un(n)(r));return t?ln(hn(n)(r,t))(Xn(n)(r)(t)):n}}},Zn=function(n,r){var t=D(r,2),e=t[0],u=t[1];return Yn(n)(e)(u)},$n=function(n){return function(r){return J(n)(r).reduce(Zn,nn(n))}},nr=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:G(tn(n));return Yn(nn(n))(r)()},rr=function(n){return tn(n).reduce(nr,n)},tr=function n(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return r.size>t?n(nr(r),t):nn(r)},er=Object.freeze({autoSpread:Jn,superNode:Kn,combineNeighbors:Qn,combineAdj:Rn,superAdj:Un,superEdge:Xn,contract:Yn,contractBin:Zn,contractSrc:$n,contractNext:nr,contractAuto:rr,contractMin:tr});n.default=rn,n.Contract=er,n.resetNodeBin=F,n.addNodeBin=H,n.neighborPairs=J,n.addEdgeBin=K,n.removeEdgeBin=Q,n.disconnectNodeBin=R,n.removeNodeBin=U,n.importEdgeBin=X,n.mergeEdgesBin=Y,n.mergeNeighbors=Z,n.spawn=$,n.copy=nn,n.fromElements=rn,n.nodes=tn,n.adj=en,n.neighbors=un,n.contains=on,n.isAdjacent=cn,n.addNodes=fn,n.resetNodes=an,n.addEdges=dn,n.removeEdges=vn,n.disconnectNodes=gn,n.removeNodes=hn,n.mergeEdges=ln,n.addNeighbor=sn,n.addEntry=pn,n.dfs=zn,n.bfs=On,n.dijkstra=Ln,n.pathBetween=Wn,n.redStr=In,n.collString=Tn,n.kString=_n,n.vString=Cn,n.kvString=Gn,n.pathString=Vn,n.edgeString=qn,n.componentString=Dn,n.graphString=Fn,n.showGraph=Hn,n.components=Pn,n.componentSet=kn,n.pathEntry=yn,n.appendPath=wn,n.initPath=Sn,n.getWeight=An,n.getLength=bn,n.lastVal=En,n.lastWeight=Nn,n.lastLength=jn,n.nextWeight=xn,n.nextLength=Bn,n.nextPath=Mn,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=bundle.umd.js.map
