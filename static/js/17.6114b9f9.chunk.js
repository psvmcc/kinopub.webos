(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[17],{516:function(e,n,t){"use strict";t.d(n,"b",(function(){return g})),t.d(n,"a",(function(){return h}));var r=t(6),c=t(31),i=t(20),o=t(0),u=t(525),a=t.n(u),l=t(21),s=t(46),d=t(38),b=function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},c=n.onEnterViewport,i=n.onLeaveViewport,u=Object(o.useState)(),a=Object(s.a)(u,2),l=a[1],b=Object(o.useRef)(null),j=Object(o.useRef)(!1),f=Object(o.useRef)(!1),v=Object(o.useRef)(0),O=Object(o.useRef)(0),m=Object(o.useCallback)((function(){if(e.current&&b.current){var n=Object(d.findDOMNode)(e.current);n&&b.current.observe(n)}}),[e,b]),h=Object(o.useCallback)((function(){if(e.current&&b.current){var n=Object(d.findDOMNode)(e.current);n&&(b.current.unobserve(n),b.current.disconnect(),b.current=null)}}),[e,b]),g=Object(o.useCallback)((function(e){var n=e[0]||{},t=n.isIntersecting,o=n.intersectionRatio,u="undefined"!==typeof t?t:o>0;if(!f.current&&u)return f.current=!0,null===c||void 0===c||c(),v.current+=1,j.current=u,void l(u);f.current&&!u&&(f.current=!1,null===i||void 0===i||i(),r.disconnectOnLeave&&b.current&&b.current.disconnect(),O.current+=1,j.current=u,l(u))}),[b,r.disconnectOnLeave,c,i]),p=Object(o.useCallback)((function(){b.current||(b.current=new IntersectionObserver(g,t))}),[b,t,g]);return Object(o.useEffect)((function(){return p(),m(),function(){h()}}),[p,m,h]),{inViewport:j.current,enterCount:v.current,leaveCount:O.current}},j=t(723);var f,v=function(e){var n=Object(j.a)();return Object(o.useMemo)((function(){return"".concat(e,"-").concat(n)}),[e,n])},O=t(1),m=l.b.div(f||(f=Object(i.a)(["\n  height: 5rem;\n"]))),h=Object(o.createContext)({}),g=function(e){var n=e.children,t=e.onScrollToEnd,i=Object(c.a)(e,["children","onScrollToEnd"]),u=Object(o.useRef)(null),l=v("scrollable"),s=Object(o.useMemo)((function(){return{id:l}}),[l]);return b(u,{onEnterViewport:t}),Object(O.jsxs)(a.a,Object(r.a)(Object(r.a)({id:l,direction:"vertical",verticalScrollbar:"hidden",horizontalScrollbar:"hidden"},i),{},{children:[Object(O.jsx)(h.Provider,{value:s,children:n}),Object(O.jsx)(m,{ref:u})]}))}},517:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r,c=t(20),i=t(520),o=t.n(i),u=t(21),a=Object(u.b)(o.a)(r||(r=Object(c.a)([""])))},518:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t(6),c=t(0),i=t(526),o=t.n(i),u=t(516),a=t(1),l=function(e){var n=Object(c.useContext)(u.a).id;return Object(a.jsx)(o.a,Object(r.a)({once:!0,offset:100,scrollContainer:n&&"#".concat(n)},e))};var s=l},521:function(e,n,t){"use strict";t.d(n,"a",(function(){return w}));var r,c,i,o=t(78),u=t(0),a=t(102),l=t.n(a),s=t(516),d=t(20),b=t(513),j=t(524),f=t.n(j),v=t(21),O=t(518),m=t(5),h=t(1),g=Object(v.b)(O.a)(r||(r=Object(d.a)(["\n  display: inline-flex;\n  position: relative;\n  height: 20rem !important;\n  width: 20%;\n"]))),p=Object(v.b)(f.a)(c||(c=Object(d.a)(["\n  width: 100%;\n"]))),x=v.b.div(i||(i=Object(d.a)(["\n  position: absolute;\n  background: var(--main-color);\n  right: 0;\n  z-index: 1;\n  padding: 0 0.5em;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  margin-right: 0.25rem;\n"]))),k=function(e){var n=e.item,t=Object(b.e)(),r=Object(u.useCallback)((function(){(null===n||void 0===n?void 0:n.id)&&t.push(Object(m.b)(m.a.Item,{itemId:n.id}))}),[null===n||void 0===n?void 0:n.id,t]);return Object(h.jsxs)(g,{height:"20rem",children:[Object(h.jsx)(x,{children:null===n||void 0===n?void 0:n.new}),Object(h.jsx)(p,{source:null===n||void 0===n?void 0:n.posters.medium,caption:null===n||void 0===n?void 0:n.title,onClick:r})]})},w=function(e){var n=e.items,t=e.loading,r=e.onScrollToEnd,c=e.scrollable,i=void 0===c||c,u=Object(h.jsxs)(h.Fragment,{children:[l()(n,(function(e){return Object(h.jsx)(k,{item:e},e.id)})),t&&l()(Object(o.a)(new Array(15)),(function(e,n){return Object(h.jsx)(k,{},n)}))]});return i?Object(h.jsx)(s.b,{onScrollToEnd:r,children:u}):u}},552:function(e,n,t){"use strict";var r=t(0),c=t(603),i=t(142);n.a=function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];var u=Object(r.useMemo)((function(){return new i.c}),[]),a=Object(c.a)([e].concat(t),(function(n){var r=n.pageParam;return u[e].apply(u,t.concat([r]))}),{getNextPageParam:function(e){var n;return(null===e||void 0===e||null===(n=e.pagination)||void 0===n?void 0:n.current)+1||1}});return a}},561:function(e,n,t){"use strict";t.d(n,"a",(function(){return j}));var r=t(46),c=t(0),i=t(523),o=t.n(i),u=t(549),a=t.n(u),l=t(532),s=t.n(l),d=t(521),b=t(1),j=function(e){var n=e.queryResult,t=e.processItems,i=n.data,u=n.isLoading,l=n.isFetchingNextPage,j=n.fetchNextPage,f=Object(c.useState)(!1),v=Object(r.a)(f,2),O=v[0],m=v[1],h=Object(c.useMemo)((function(){return s()(o()(a()(null===i||void 0===i?void 0:i.pages,(function(e){return e.items}))),"id")}),[null===i||void 0===i?void 0:i.pages]),g=Object(c.useMemo)((function(){return t?t(h):h}),[h,t]),p=Object(c.useCallback)((function(){O&&(j(),m(!1))}),[O,j]);return Object(c.useEffect)((function(){m(!0)}),[h.length]),Object(b.jsx)(d.a,{items:g,loading:u||l,onScrollToEnd:p})}},724:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return a}));t(0);var r=t(513),c=t(517),i=t(561),o=t(552),u=t(1),a=function(){var e,n,t,a,l=Object(r.g)().bookmarkId,s=Object(o.a)("bookmarkItems",l);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(c.a,{children:null===s||void 0===s||null===(e=s.data)||void 0===e||null===(n=e.pages)||void 0===n||null===(t=n[0])||void 0===t||null===(a=t.folder)||void 0===a?void 0:a.title}),Object(u.jsx)(i.a,{queryResult:s})]})}}}]);
//# sourceMappingURL=17.6114b9f9.chunk.js.map