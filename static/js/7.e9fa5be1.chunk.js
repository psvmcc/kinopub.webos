(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[7],{1048:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return W}));var c=n(26),i=n.n(c),r=n(43),l=n(75),o=n(1),a=n(881),s=n(171),u=n.n(s),d=n(234),b=n(892),j=n(891),v=n(887),f=n(907),O=n(884),m=n(952),h=n(888),x=n(8),p=n(2),N=function(e){var t=e.item,n=e.season,c=Object(a.e)(),i=Object(o.useCallback)((function(e){return function(){(null===e||void 0===e?void 0:e.id)&&c.push(Object(x.b)(x.a.Video,{videoId:e.id}),{item:t,video:e,season:n})}}),[t,n,c]);return Object(p.jsx)("div",{className:"flex flex-col",children:Object(p.jsx)(m.a,{title:"\u0421\u0435\u0437\u043e\u043d ".concat(n.number),children:Object(p.jsx)("div",{className:"flex flex-wrap",children:u()(n.episodes,(function(e){return Object(p.jsx)(h.a,{source:e.thumbnail,caption:"\u042d\u043f\u0438\u0437\u043e\u0434 ".concat(e.number),onClick:i(e),children:e.watched===d.b.Watched&&Object(p.jsx)("div",{className:"absolute flex justify-center items-center rounded-xl bg-black bg-opacity-60 top-0 bottom-0 left-0 right-0",children:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043e"})},e.id)}))})})})},k=n(885),w=function(e){var t=e.item,n=e.seasons;return(null===n||void 0===n?void 0:n.length)?Object(p.jsxs)("div",{className:"p-8",children:[Object(p.jsx)(k.a,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u0435\u0437\u043e\u043d\u043e\u0432"}),u()(n,(function(e){return Object(p.jsx)(N,{item:t,season:e},e.id)}))]}):null},g=n(951),C=n(889),y=n(175),I=function(e){var t=e.itemId,n=Object(C.a)("bookmarks").data,c=Object(C.a)("itemBookmarks",[t]),l=c.data,a=c.dataUpdatedAt,s=c.refetch,d=Object(y.a)("bookmarkToggleItem").bookmarkToggleItemAsync,b=Object(o.useMemo)((function(){return(null===l||void 0===l?void 0:l.folders.map((function(e){return e.id})))||[]}),[null===l||void 0===l?void 0:l.folders]),j=Object(o.useCallback)((function(e){return Object(r.a)(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d([t,e.id]);case 2:s();case 3:case"end":return n.stop()}}),n)})))}),[t,d,s]);return Object(p.jsx)("div",{className:"flex flex-wrap",children:u()(null===n||void 0===n?void 0:n.items,(function(e){return Object(p.jsx)("div",{className:"w-1/5 p-1",children:Object(p.jsx)(g.a,{defaultChecked:b.includes(e.id),onChange:j(e),children:e.title})},e.updated)}))},a)},M=n(241);var T=function(e){Object(o.useEffect)((function(){var t=function(t){Object(M.b)(t)&&e()};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[e])},E=n(1045),R=n.n(E),S=n(251);var A=function(){var e=Object(C.a)("streamingTypes").data,t=Object(C.a)("deviceInfo").data,n=Object(S.a)("streaming_type"),c=Object(l.a)(n,2)[1],i=Object(o.useMemo)((function(){return R()(null===t||void 0===t?void 0:t.device.settings.streamingType.value,(function(e){return e.selected===d.a.True}))}),[null===t||void 0===t?void 0:t.device]),r=Object(o.useMemo)((function(){return R()(null===e||void 0===e?void 0:e.items,(function(e){return(null===e||void 0===e?void 0:e.id)===(null===i||void 0===i?void 0:i.id)}))}),[null===e||void 0===e?void 0:e.items,i]);Object(o.useEffect)((function(){(null===r||void 0===r?void 0:r.code)&&c(null===r||void 0===r?void 0:r.code)}),[c,null===r||void 0===r?void 0:r.code])},L=n(949),V=function(e){var t=e.itemId,n=Object(C.a)("itemSmiliar",[t]).data;return n&&n.items.length>0?Object(p.jsx)("div",{className:"p-8",children:Object(p.jsx)(j.a,{title:"\u041f\u043e\u0445\u043e\u0436\u0438\u0435",items:n.items,scrollable:!1})}):null},W=function(){var e,t,n,c,s,j,m=Object(a.e)(),h=Object(a.g)().itemId,N=Object(o.useState)(!1),g=Object(l.a)(N,2),M=g[0],E=g[1],R=Object(C.a)("itemMedia",[h],{staleTime:0}),S=R.data,W=R.refetch,_=Object(y.a)("watchingToggleWatchlist").watchingToggleWatchlistAsync,F=Object(o.useMemo)((function(){var e,t;return(null===S||void 0===S||null===(e=S.item.videos)||void 0===e?void 0:e.find((function(e){return e.watching.status!==d.b.Watched})))||(null===S||void 0===S||null===(t=S.item.videos)||void 0===t?void 0:t[0])}),[null===S||void 0===S?void 0:S.item]),z=Object(o.useMemo)((function(){var e,t;return(null===S||void 0===S||null===(e=S.item.seasons)||void 0===e?void 0:e.find((function(e){return e.watching.status!==d.b.Watched})))||(null===S||void 0===S||null===(t=S.item.seasons)||void 0===t?void 0:t[0])}),[null===S||void 0===S?void 0:S.item]),D=Object(o.useMemo)((function(){return(null===z||void 0===z?void 0:z.episodes.find((function(e){return e.watching.status!==d.b.Watched})))||(null===z||void 0===z?void 0:z.episodes[0])}),[z]),J=Object(o.useMemo)((function(){return null===S||void 0===S?void 0:S.item.trailer}),[null===S||void 0===S?void 0:S.item]),q=F||D,B=Object(o.useMemo)((function(){return Object(L.a)(null===S||void 0===S?void 0:S.item,q,z)}),[null===S||void 0===S?void 0:S.item,z,q]),P=Object(o.useCallback)((function(){(null===q||void 0===q?void 0:q.id)&&m.push(Object(x.b)(x.a.Video,{videoId:q.id}),{item:null===S||void 0===S?void 0:S.item,video:q,season:z})}),[m,null===S||void 0===S?void 0:S.item,z,q]),U=Object(o.useCallback)((function(){(null===J||void 0===J?void 0:J.id)&&m.push(Object(x.b)(x.a.Trailer,{trailerId:J.id}),{item:null===S||void 0===S?void 0:S.item,trailer:J})}),[m,null===S||void 0===S?void 0:S.item,J]),G=Object(o.useCallback)((function(){E(!0)}),[]),H=Object(o.useCallback)((function(){E(!1)}),[]),K=Object(o.useCallback)(Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_([h]);case 2:W();case 3:case"end":return e.stop()}}),e)}))),[h,_,W]);return A(),T(P),Object(p.jsxs)(O.b,{children:[Object(p.jsxs)("div",{className:"relative w-screen h-screen",children:[Object(p.jsx)("img",{className:"absolute w-screen h-screen object-cover -z-1",src:(null===S||void 0===S||null===(e=S.item)||void 0===e?void 0:e.posters.wide)||(null===S||void 0===S||null===(t=S.item)||void 0===t?void 0:t.posters.big),alt:B}),Object(p.jsx)(k.a,{className:"p-4 absolute top-0",children:B}),Object(p.jsxs)("div",{className:"absolute flex bottom-8 left-4 right-4",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(b.a,{icon:"play_circle_outline",onClick:P,className:"mr-2",children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c"}),Object(p.jsx)(b.a,{icon:"bookmark",onClick:G,className:"mr-2",children:"\u0412 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"}),Object(p.jsx)(f.a,{visible:M,onClose:H,children:Object(p.jsx)(I,{itemId:h},"".concat(h,"-").concat(M))})]}),Object(p.jsxs)("div",{children:[J&&Object(p.jsx)(b.a,{icon:"videocam",onClick:U,children:"\u0422\u0440\u0435\u0439\u043b\u0435\u0440"}),"boolean"===typeof(null===S||void 0===S||null===(n=S.item)||void 0===n?void 0:n.subscribed)&&Object(p.jsx)(b.a,{icon:(null===S||void 0===S||null===(c=S.item)||void 0===c?void 0:c.subscribed)?"visibility_off":"visibility",onClick:K,children:(null===S||void 0===S?void 0:S.item.subscribed)?"\u041d\u0435 \u0431\u0443\u0434\u0443 \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c":"\u0411\u0443\u0434\u0443 \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c"})]})]})]}),Object(p.jsx)(w,{item:null===S||void 0===S?void 0:S.item,seasons:null===S||void 0===S||null===(s=S.item)||void 0===s?void 0:s.seasons}),Object(p.jsxs)("div",{className:"flex flex-col p-8 whitespace-pre-wrap",children:[Object(p.jsx)(k.a,{children:null===S||void 0===S?void 0:S.item.plot}),!!(null===S||void 0===S||null===(j=S.item.tracklist)||void 0===j?void 0:j.length)&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(k.a,{className:"my-4",children:"\u0422\u0440\u0435\u043a\u043b\u0438\u0441\u0442"}),Object(p.jsx)("div",{className:"flex flex-wrap flex-col h-96",children:u()(null===S||void 0===S?void 0:S.item.tracklist,(function(e,t){return Object(p.jsxs)(k.a,{children:[t+1,". ",e.title]},t)}))})]})]}),Object(p.jsx)(v.a,{height:"50rem",children:Object(p.jsx)(V,{itemId:h})})]})}},884:function(e,t,n){"use strict";n.d(t,"b",(function(){return O})),n.d(t,"a",(function(){return f}));var c=n(15),i=n(54),r=n(1),l=n(48),o=n.n(l),a=n(75),s=n(67),u=function(e,t,n){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},i=t.onEnterViewport,l=t.onLeaveViewport,o=Object(r.useState)(),u=Object(a.a)(o,2),d=u[1],b=Object(r.useRef)(null),j=Object(r.useRef)(!1),v=Object(r.useRef)(!1),f=Object(r.useRef)(0),O=Object(r.useRef)(0),m=Object(r.useCallback)((function(){if(e.current&&b.current){var t=Object(s.findDOMNode)(e.current);t&&b.current.observe(t)}}),[e,b]),h=Object(r.useCallback)((function(){if(e.current&&b.current){var t=Object(s.findDOMNode)(e.current);t&&(b.current.unobserve(t),b.current.disconnect(),b.current=null)}}),[e,b]),x=Object(r.useCallback)((function(e){var t=e[0]||{},n=t.isIntersecting,r=t.intersectionRatio,o="undefined"!==typeof n?n:r>0;if(!v.current&&o)return v.current=!0,null===i||void 0===i||i(),f.current+=1,j.current=o,void d(o);v.current&&!o&&(v.current=!1,null===l||void 0===l||l(),c.disconnectOnLeave&&b.current&&b.current.disconnect(),O.current+=1,j.current=o,d(o))}),[b,c.disconnectOnLeave,i,l]),p=Object(r.useCallback)((function(){b.current||(b.current=new IntersectionObserver(x,n))}),[b,n,x]);return Object(r.useEffect)((function(){return p(),m(),function(){h()}}),[p,m,h]),{inViewport:j.current,enterCount:f.current,leaveCount:O.current}},d=n(909);var b=function(e){var t=Object(d.a)();return Object(r.useMemo)((function(){return"".concat(e,"-").concat(t)}),[e,t])},j=n(2),v=["children","className","onScrollToEnd"],f=Object(r.createContext)({}),O=function(e){var t=e.children,n=e.className,l=e.onScrollToEnd,a=Object(i.a)(e,v),s=Object(r.useRef)(null),d=b("scrollable"),O=Object(r.useMemo)((function(){return{id:d}}),[d]);return u(s,{onEnterViewport:l}),Object(j.jsx)("div",Object(c.a)(Object(c.a)({id:d,className:"overflow-hidden h-screen"},a),{},{children:Object(j.jsx)(f.Provider,{value:O,children:Object(j.jsxs)("div",{className:o()("overflow-y-auto h-full",n),children:[t,Object(j.jsx)("div",{className:"h-40",ref:s})]})})}))}},885:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(15),i=n(54),r=n(48),l=n.n(r),o=n(2),a=["className"],s=function(e){var t=e.className,n=Object(i.a)(e,a);return Object(o.jsx)("p",Object(c.a)(Object(c.a)({},n),{},{className:l()("text-primary",t)}))}},887:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(15),i=n(1),r=n(884),l=n(2),o=function(e){Object(i.useContext)(r.a).id;return Object(l.jsx)("div",Object(c.a)({},e))};var a=o},888:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c=n(15),i=n(54),r=n(48),l=n.n(r),o=n(887),a=n(233),s=n(2),u=["className","wrapperClassName","source","caption","children"],d=function(e){var t=e.className,n=e.wrapperClassName,r=e.source,d=e.caption,b=e.children,j=Object(i.a)(e,u);return Object(s.jsx)(a.a,Object(c.a)(Object(c.a)({},j),{},{className:l()("rounded-xl w-1/6",n),children:Object(s.jsxs)(o.a,{className:l()("h-40 m-1 flex flex-col relative overflow-hidden cursor-pointer",t),children:[Object(s.jsx)("img",{loading:"lazy",className:"w-full h-full object-cover rounded-xl bg-gray-300",src:r,alt:d}),Object(s.jsx)("div",{className:"px-2",children:Object(s.jsx)("p",{className:"text-primary text-sm text-center overflow-hidden whitespace-nowrap",children:d})}),b]})}))}},889:function(e,t,n){"use strict";var c=n(90),i=n(1),r=n(899),l=n(234);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,o=Object(i.useMemo)((function(){return new l.c}),[]),a=Object(r.a)([e].concat(Object(c.a)(t)),(function(){return o[e].apply(o,Object(c.a)(t))}),n);return a}},891:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var c=n(90),i=n(1),r=n(48),l=n.n(r),o=n(171),a=n.n(o),s=n(884),u=n(885),d=n(881),b=n(888),j=n(8),v=n(2),f=function(e){var t=e.item,n=e.className,c=Object(d.e)(),r=Object(i.useMemo)((function(){var e;return null===t||void 0===t||null===(e=t.title)||void 0===e?void 0:e.split("/")[0]}),[null===t||void 0===t?void 0:t.title]),o=Object(i.useCallback)((function(){(null===t||void 0===t?void 0:t.id)&&c.push(Object(j.b)(j.a.Item,{itemId:t.id}))}),[null===t||void 0===t?void 0:t.id,c]);return Object(v.jsx)(b.a,{onClick:o,source:null===t||void 0===t?void 0:t.posters.medium,caption:r,className:l()("h-72",n),children:(null===t||void 0===t?void 0:t.new)&&Object(v.jsx)("div",{className:"absolute bg-red-600 text-primary px-2 py-1 rounded-bl rounded-tr-xl right-0",children:null===t||void 0===t?void 0:t.new})})},O=function(e){var t=e.title,n=e.items,i=e.loading,r=e.onScrollToEnd,o=e.scrollable,d=void 0===o||o,b=e.className,j=Object(v.jsxs)("div",{children:[t&&Object(v.jsx)(u.a,{className:"m-1 mb-3",children:t}),Object(v.jsxs)("div",{className:l()("flex flex-wrap",b),children:[a()(n,(function(e){return Object(v.jsx)(f,{item:e},e.id)})),i&&a()(Object(c.a)(new Array(18)),(function(e,t){return Object(v.jsx)(f,{},t)}))]})]});return d?Object(v.jsx)(s.b,{onScrollToEnd:r,children:j}):j}},892:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(15),i=n(54),r=n(1),l=n(48),o=n.n(l),a=n(236),s=n(233),u=n(2),d=["icon","iconOnly","children","autoFocus","className"],b=function(e){var t=e.icon,n=e.iconOnly,l=e.children,b=e.autoFocus,j=e.className,v=Object(i.a)(e,d),f=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e;return b&&(e=requestAnimationFrame((function(){var e,t;null===(e=f.current)||void 0===e||null===(t=e.node)||void 0===t||t.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[f,b]),Object(u.jsx)(s.a,Object(c.a)(Object(c.a)({},v),{},{ref:f,className:o()("text-primary whitespace-nowrap cursor-pointer rounded px-2 py-1",{"pr-3":!!t},j),role:"button",children:Object(u.jsxs)("div",{className:"flex items-center",children:[t&&Object(u.jsx)(a.a,{name:t}),!n&&l]})}))}},907:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var c=n(15),i=n(54),r=n(1),l=n(912),o=n(48),a=n.n(o),s=n(237),u=n(2),d=["visible","onClose","className"],b=function e(t){var n=t.visible,l=t.onClose,o=t.className,b=Object(i.a)(t,d),j=Object(r.useCallback)((function(){l(!1)}),[l]),v=Object(r.useCallback)((function(){if(n)return j(),!1}),[n,j]);return Object(s.a)(v),e.handleClickOutside=j,n?Object(u.jsx)("div",Object(c.a)(Object(c.a)({},b),{},{className:a()("fixed z-999 bottom-0 left-0 right-0 p-4 bg-primary ring",o)})):null},j={handleClickOutside:function(){return b.handleClickOutside}},v=Object(l.a)(b,j)},923:function(e,t,n){"use strict";var c=n(75),i=n(1);t.a=function(e){var t=Object(i.useState)(e),n=Object(c.a)(t,2),r=n[0],l=n[1];return Object(i.useEffect)((function(){l(e)}),[e]),[r,l]}},949:function(e,t,n){"use strict";function c(e,t,n){return n?"".concat(null===e||void 0===e?void 0:e.title," (s").concat(n.number,"e").concat((null===t||void 0===t?void 0:t.number)||1,")"):null===e||void 0===e?void 0:e.title}n.d(t,"a",(function(){return c}))},951:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c=n(15),i=n(54),r=n(1),l=n(48),o=n.n(l),a=n(233),s=n(2),u=["defaultChecked","checked","onChange","className","children"],d=function(e){var t=e.defaultChecked,n=e.checked,l=e.onChange,d=e.className,b=e.children,j=Object(i.a)(e,u),v=Object(r.useCallback)((function(e){null===l||void 0===l||l(e.target.checked,e)}),[l]);return Object(s.jsx)(a.a,{component:"label",className:o()("text-primary p-2",d),children:Object(s.jsxs)("div",{className:"inline-flex items-center cursor-pointer",children:[Object(s.jsx)("input",Object(c.a)(Object(c.a)({},j),{},{type:"checkbox",className:"inline-block w-4 h-4",defaultChecked:t,checked:n,onChange:v})),Object(s.jsx)("span",{className:"inline-block ml-2 whitespace-nowrap",children:b})]})})}},952:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(75),i=n(1),r=n(48),l=n.n(r),o=n(236),a=n(233),s=n(885),u=n(923),d=n(2),b=function(e){var t=e.open,n=e.onToggle,r=e.title,b=e.subtitle,j=e.className,v=e.children,f=Object(u.a)(t),O=Object(c.a)(f,2),m=O[0],h=O[1],x=Object(i.useCallback)((function(){h((function(e){var t=!e;return null===n||void 0===n||n(t),t}))}),[h,n]);return Object(d.jsxs)("div",{className:"flex flex-col w-full",children:[Object(d.jsx)(a.a,{onClick:x,className:l()("p-1 cursor-pointer",j),children:Object(d.jsxs)("div",{className:"flex flex-col",children:[Object(d.jsxs)("div",{className:"flex items-center",children:[Object(d.jsx)(s.a,{children:r}),Object(d.jsx)(o.a,{name:m?"expand_less":"expand_more"})]}),!m&&b&&Object(d.jsx)(s.a,{className:"mt-2",children:b})]})}),m&&v]})}}}]);
//# sourceMappingURL=7.e9fa5be1.chunk.js.map