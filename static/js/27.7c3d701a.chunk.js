(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[27],{522:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var c,i=t(20),r=t(526),a=t.n(r),o=t(21),l=Object(o.b)(a.a)(c||(c=Object(i.a)([""])))},524:function(e,n,t){"use strict";var c=t(54),i=t(0),r=t(552),a=t(142);n.a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2?arguments[2]:void 0,o=Object(i.useMemo)((function(){return new a.c}),[]),l=Object(r.a)([e].concat(Object(c.a)(n)),(function(){return o[e].apply(o,Object(c.a)(n))}),t);return l}},530:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var c,i,r,a=t(6),o=t(31),l=t(20),s=t(0),u=t(232),d=t.n(u),b=t(21),j=t(107),v=t(1),O=["icon","iconOnly","children","autoFocus"],f=b.b.div(c||(c=Object(l.a)(["\n  display: inline-flex;\n\n  > div {\n    width: 100%;\n  }\n"]))),x=Object(b.b)(d.a)(i||(i=Object(l.a)(["\n  color: inherit;\n  text-decoration: none;\n"]))),h=b.b.div(r||(r=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  color: inherit;\n  text-decoration: none;\n\n  "," {\n    margin-right: ",";\n  }\n"])),j.a,(function(e){return!e.iconOnly&&"0.5rem"})),p=function(e){var n=e.icon,t=e.iconOnly,c=e.children,i=e.autoFocus,r=Object(o.a)(e,O),l=Object(s.useRef)(null);return Object(s.useEffect)((function(){var e;return i&&(e=requestAnimationFrame((function(){var e,n;null===(e=l.current)||void 0===e||null===(n=e.querySelector('[role="button"]'))||void 0===n||n.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[l,i]),Object(v.jsx)(f,{ref:l,children:Object(v.jsx)(x,Object(a.a)(Object(a.a)({},r),{},{children:Object(v.jsxs)(h,{iconOnly:t,children:[n&&Object(v.jsx)(j.a,{name:n}),!t&&c]})}))})}},739:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return N}));var c,i,r,a,o,l,s=t(13),u=t.n(s),d=t(52),b=t(23),j=t(6),v=t(47),O=t(20),f=t(0),x=t(558),h=t.n(x),p=t(716),g=t.n(p),y=t(528),m=t.n(y),k=t(610),w=t.n(k),S=t(102),C=t.n(S),F=t(21),T=t(142),M=t(530),A=t(522),q=t(524),D=t(113),J=t(219),z=t(1),E=F.b.div(c||(c=Object(O.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),I=F.b.div(i||(i=Object(O.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding-bottom: 2rem;\n"]))),R=F.b.div(r||(r=Object(O.a)(["\n  flex-basis: 50%;\n  box-sizing: border-box;\n  padding-right: 1rem;\n"]))),B=F.b.div(a||(a=Object(O.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),G=F.b.div(o||(o=Object(O.a)(["\n  display: flex;\n  align-items: center;\n\n  "," {\n    padding-right: 2rem;\n  }\n"])),A.a),H=F.b.div(l||(l=Object(O.a)(["\n  display: flex;\n  flex-basis: 50%;\n  padding-left: 1rem;\n  align-items: flex-end;\n"]))),K=function(e){var n=e.setting,t=e.onToggle;return Object(z.jsx)(h.a,{defaultSelected:n.value===T.a.True,onToggle:t,children:n.label})},L=function(e){var n=e.setting,t=e.onSelect;return Object(z.jsx)(g.a,{defaultSelected:w()(n.value,(function(e){return e.selected===T.a.True})),title:n.label,select:"radio",onSelect:t,closeOnSelect:!0,children:C()(n.value,(function(e){return"".concat(e.label," ").concat(e.description?"(".concat(e.description,")"):"")}))})},N=function(){var e,n,t=Object(q.a)("user").data,c=Object(q.a)("deviceInfo").data,i=Object(D.a)("saveDeviceSettings").saveDeviceSettingsAsync,r=Object(D.a)("deactivate").deactivate,a=Object(f.useState)({}),o=Object(v.a)(a,2),l=o[0],s=o[1],O=Object(J.a)(),x=O.software,h=O.hardware,p=Object(f.useMemo)((function(){var e;return m()(C()(null===c||void 0===c||null===(e=c.device)||void 0===e?void 0:e.settings,(function(e,n){return Object(j.a)(Object(j.a)({},e),{},{key:n})})),(function(e){return"undefined"===typeof e.type}))}),[null===c||void 0===c||null===(e=c.device)||void 0===e?void 0:e.settings]),g=Object(f.useMemo)((function(){var e;return m()(C()(null===c||void 0===c||null===(e=c.device)||void 0===e?void 0:e.settings,(function(e,n){return Object(j.a)(Object(j.a)({},e),{},{key:n})})),(function(e){return"list"===e.type}))}),[null===c||void 0===c||null===(n=c.device)||void 0===n?void 0:n.settings]),y=Object(f.useCallback)((function(e){return function(){var n=Object(b.a)(u.a.mark((function n(t){var c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c=t.selected,s(Object(j.a)(Object(j.a)({},l),{},Object(d.a)({},e.key,c)));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}),[l]),k=Object(f.useCallback)((function(e){return function(n){var t=n.selected;s(Object(j.a)(Object(j.a)({},l),{},Object(d.a)({},e.key,e.value[t].id)))}}),[l]),w=Object(f.useCallback)(Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i([null===c||void 0===c?void 0:c.device.id,l]);case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)}))),[l,null===c||void 0===c?void 0:c.device,i]),S=Object(f.useCallback)((function(){r([])}),[r]);return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(A.a,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430"}),Object(z.jsxs)(E,{children:[(null===c||void 0===c?void 0:c.device)&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)("div",{children:[Object(z.jsx)(I,{children:C()(p,(function(e){return Object(z.jsx)(R,{children:Object(z.jsx)(K,{setting:e,onToggle:y(e)})},e.key)}))},"bool-".concat(null===c||void 0===c?void 0:c.device.updated)),Object(z.jsx)(I,{children:C()(g,(function(e){return Object(z.jsx)(R,{children:Object(z.jsx)(L,{setting:e,onSelect:k(e)})},e.key)}))},"list-".concat(null===c||void 0===c?void 0:c.device.updated))]}),Object(z.jsx)("div",{children:Object(z.jsx)(M.a,{icon:"done",onClick:w,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]}),Object(z.jsxs)(B,{children:[Object(z.jsxs)("div",{children:[Object(z.jsx)(A.a,{children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"}),Object(z.jsxs)(G,{children:[(null===t||void 0===t?void 0:t.user)&&Object(z.jsxs)(A.a,{children:[t.user.profile.name||t.user.username," (",Math.floor(t.user.subscription.days)," \u0434\u043d.)"]}),Object(z.jsx)(M.a,{icon:"logout",onClick:S,children:"\u0412\u044b\u0445\u043e\u0434"})]})]}),Object(z.jsx)(H,{children:Object(z.jsxs)(A.a,{children:[Object(z.jsx)("div",{children:h}),Object(z.jsx)("div",{children:x})]})})]})]})]})}}}]);
//# sourceMappingURL=27.7c3d701a.chunk.js.map