(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[15],{1058:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));n(1);var r=n(27),c=n(912),i=n(903),o=n(2),u=function(){var e,t,n,u,a=Object(r.i)().bookmarkId,l=Object(i.a)("bookmarkItems",[a]);return Object(o.jsx)(c.a,{title:null===l||void 0===l||null===(e=l.data)||void 0===e||null===(t=e.pages)||void 0===t||null===(n=t[0])||void 0===n||null===(u=n.folder)||void 0===u?void 0:u.title,queryResult:l})}},890:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(14),c=n(49),i=n(1),o=n(42),u=n.n(o),a=n(64),l=n(72),s=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},c=t.onEnterViewport,o=t.onLeaveViewport,u=Object(i.useState)(),s=Object(a.a)(u,2),d=s[1],b=Object(i.useRef)(null),v=Object(i.useRef)(!1),j=Object(i.useRef)(!1),f=Object(i.useRef)(0),O=Object(i.useRef)(0),m=Object(i.useCallback)((function(){if(e.current&&b.current){var t=Object(l.findDOMNode)(e.current);t&&b.current.observe(t)}}),[e,b]),p=Object(i.useCallback)((function(){if(e.current&&b.current){var t=Object(l.findDOMNode)(e.current);t&&(b.current.unobserve(t),b.current.disconnect(),b.current=null)}}),[e,b]),h=Object(i.useCallback)((function(e){var t=e[0]||{},n=t.isIntersecting,i=t.intersectionRatio,u="undefined"!==typeof n?n:i>0;if(!j.current&&u)return j.current=!0,null===c||void 0===c||c(),f.current+=1,v.current=u,void d(u);j.current&&!u&&(j.current=!1,null===o||void 0===o||o(),r.disconnectOnLeave&&b.current&&b.current.disconnect(),O.current+=1,v.current=u,d(u))}),[b,r.disconnectOnLeave,c,o]),x=Object(i.useCallback)((function(){b.current||(b.current=new IntersectionObserver(h,n))}),[b,n,h]);return Object(i.useEffect)((function(){return x(),m(),function(){p()}}),[x,m,p]),{inViewport:v.current,enterCount:f.current,leaveCount:O.current}},d=n(2),b=["children","className","onScrollToEnd"],v=function(e){var t=e.children,n=e.className,o=e.onScrollToEnd,a=Object(c.a)(e,b),l=Object(i.useRef)(null);return s(l,{onEnterViewport:o}),Object(d.jsxs)("div",Object(r.a)(Object(r.a)({className:u()("overflow-y-auto h-full",n)},a),{},{children:[t,Object(d.jsx)("div",{className:"h-40",ref:l})]}))}},891:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(14),c=n(49),i=n(42),o=n.n(i),u=n(238),a=n(2),l=["className","wrapperClassName","source","caption","children"],s=function(e){var t=e.className,n=e.wrapperClassName,i=e.source,s=e.caption,d=e.children,b=Object(c.a)(e,l);return Object(a.jsx)(u.a,Object(r.a)(Object(r.a)({},b),{},{className:o()("rounded-xl w-1/5",n),children:Object(a.jsxs)("div",{className:o()("h-40 m-1 flex flex-col relative overflow-hidden cursor-pointer",t),children:[Object(a.jsx)("img",{loading:"lazy",className:"w-full h-full object-cover rounded-xl border-2 border-gray-300 bg-gray-300",src:i,alt:s}),Object(a.jsx)("div",{className:"px-2",children:Object(a.jsx)("p",{className:"text-primary text-sm text-center overflow-hidden whitespace-nowrap",children:s})}),d]})}))}},894:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n(94),c=n(1),i=n(42),o=n.n(i),u=n(175),a=n.n(u),l=n(890),s=n(240),d=n(27),b=n(891),v=n(7),j=n(2),f=function(e){var t=e.item,n=e.className,r=Object(d.g)(),i=Object(c.useMemo)((function(){var e;return null===t||void 0===t||null===(e=t.title)||void 0===e?void 0:e.split("/")[0]}),[null===t||void 0===t?void 0:t.title]),u=Object(c.useCallback)((function(){(null===t||void 0===t?void 0:t.id)&&r.push(Object(v.b)(v.a.Item,{itemId:t.id}))}),[null===t||void 0===t?void 0:t.id,r]);return Object(j.jsx)(b.a,{onClick:u,source:null===t||void 0===t?void 0:t.posters.medium,caption:i,className:o()("h-72",n),children:(null===t||void 0===t?void 0:t.new)&&Object(j.jsx)("div",{className:"absolute bg-red-600 border-gray-300 border-t-2 border-r-2 text-primary px-2 py-1 rounded-bl rounded-tr-xl top-0 right-0",children:null===t||void 0===t?void 0:t.new})})},O=function(e){var t=e.title,n=e.items,c=e.loading,i=e.onScrollToEnd,u=e.scrollable,d=void 0===u||u,b=e.className,v=Object(j.jsxs)("div",{children:[t&&Object(j.jsx)(s.a,{className:"m-1 mb-3",children:t}),Object(j.jsxs)("div",{className:o()("flex flex-wrap",b),children:[a()(n,(function(e){return Object(j.jsx)(f,{item:e},e.id)})),c&&a()(Object(r.a)(new Array(15)),(function(e,t){return Object(j.jsx)(f,{},t)}))]})]});return d?Object(j.jsx)(l.a,{onScrollToEnd:i,children:v}):v}},902:function(e,t,n){"use strict";var r=n(64),c=n(1),i=n(898),o=n.n(i),u=n(913),a=n.n(u),l=n(907),s=n.n(l);t.a=function(e,t){var n=e.data,i=e.isLoading,u=e.isFetchingNextPage,l=e.fetchNextPage,d=Object(c.useState)(!1),b=Object(r.a)(d,2),v=b[0],j=b[1],f=Object(c.useMemo)((function(){return s()(o()(a()(null===n||void 0===n?void 0:n.pages,(function(e){return e.items}))),"id")}),[null===n||void 0===n?void 0:n.pages]),O=Object(c.useMemo)((function(){return t?t(f):f}),[f,t]),m=Object(c.useCallback)((function(){v&&(l(),j(!1))}),[v,l]);return Object(c.useEffect)((function(){j(!0)}),[f.length]),[O,i||u,m]}},903:function(e,t,n){"use strict";var r=n(14),c=n(94),i=n(1),o=n(1070),u=n(239);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,a=Object(i.useMemo)((function(){return new u.c}),[]),l=Object(o.a)([e].concat(Object(c.a)(t)),(function(n){var r=n.pageParam;return a[e].apply(a,Object(c.a)(t).concat([r]))}),Object(r.a)({getNextPageParam:function(e){var t;return(null===e||void 0===e||null===(t=e.pagination)||void 0===t?void 0:t.current)+1||1}},n));return l}},912:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(64),c=n(894),i=n(902),o=n(2),u=function(e){var t=e.title,n=e.queryResult,u=e.processItems,a=Object(i.a)(n,u),l=Object(r.a)(a,3),s=l[0],d=l[1],b=l[2];return Object(o.jsx)(c.a,{title:t,items:s,loading:d,onScrollToEnd:b})}}}]);
//# sourceMappingURL=15.672d551f.chunk.js.map