(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[15],{521:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r,i=n(20),o=n(525),u=n.n(o),s=n(21),c=Object(s.b)(u.a)(r||(r=Object(i.a)([""])))},523:function(t,e,n){"use strict";var r=n(54),i=n(0),o=n(550),u=n(142);e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,s=Object(i.useMemo)((function(){return new u.c}),[]),c=Object(o.a)([t].concat(Object(r.a)(e)),(function(){return s[t].apply(s,Object(r.a)(e))}),n);return c}},524:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(0),i=n.n(r),o=n(10);function u(){var t=!1;return{clearReset:function(){t=!1},reset:function(){t=!0},isReset:function(){return t}}}var s=i.a.createContext(u()),c=n(151);function a(t,e){var n=i.a.useRef(!1),r=i.a.useState(0)[1],u=Object(c.b)(),a=i.a.useContext(s),l=u.defaultQueryObserverOptions(t);l.optimisticResults=!0,l.onError&&(l.onError=o.a.batchCalls(l.onError)),l.onSuccess&&(l.onSuccess=o.a.batchCalls(l.onSuccess)),l.onSettled&&(l.onSettled=o.a.batchCalls(l.onSettled)),l.suspense&&"number"!==typeof l.staleTime&&(l.staleTime=1e3),(l.suspense||l.useErrorBoundary)&&(a.isReset()||(l.retryOnMount=!1));var d=i.a.useState((function(){return new e(u,l)}))[0],h=d.getOptimisticResult(l);if(i.a.useEffect((function(){n.current=!0,a.clearReset();var t=d.subscribe(o.a.batchCalls((function(){n.current&&r((function(t){return t+1}))})));return d.updateResult(),function(){n.current=!1,t()}}),[a,d]),i.a.useEffect((function(){d.setOptions(l,{listeners:!1})}),[l,d]),l.suspense&&h.isLoading)throw d.fetchOptimistic(l).then((function(t){var e=t.data;null==l.onSuccess||l.onSuccess(e),null==l.onSettled||l.onSettled(e,null)})).catch((function(t){a.clearReset(),null==l.onError||l.onError(t),null==l.onSettled||l.onSettled(void 0,t)}));if((l.suspense||l.useErrorBoundary)&&h.isError&&!h.isFetching)throw h.error;return"tracked"===l.notifyOnChangeProps&&(h=d.trackResult(h)),h}},550:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(555),i=n(2),o=n(524);function u(t,e,n){var u=Object(i.l)(t,e,n);return Object(o.a)(u,r.a)}},553:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(6),i=n(32),o=n(0),u=n(563),s=n.n(u),c=n(146),a=n(1),l=["visible","onVisibilityChange"],d=function(t){var e=t.visible,n=t.onVisibilityChange,u=Object(i.a)(t,l),d=Object(o.useCallback)((function(){n(!0)}),[n]),h=Object(o.useCallback)((function(){n(!1)}),[n]),f=Object(o.useCallback)((function(){if(e)return n(!1),!1}),[e,n]);return Object(c.a)(f),Object(a.jsx)(s.a,Object(r.a)(Object(r.a)({},u),{},{open:e,onShow:d,onClose:h}))}},555:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(4),i=n(14),o=n(2),u=n(10),s=n(61),c=n(35),a=n(82),l=n(36),d=function(t){function e(e,n){var r;return(r=t.call(this)||this).client=e,r.options=n,r.trackedProps=[],r.previousSelectError=null,r.bindMethods(),r.setOptions(n),r}Object(i.a)(e,t);var n=e.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),h(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnReconnect||!1!==e.refetchOnReconnect&&v(t,e));var t,e},n.shouldFetchOnWindowFocus=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnWindowFocus||!1!==e.refetchOnWindowFocus&&v(t,e));var t,e},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(t,e){var n=this.options,r=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=n.queryKey),this.updateQuery();var i=this.hasListeners();i&&f(this.currentQuery,r,this.options,n)&&this.executeFetch(),this.updateResult(e),!i||this.currentQuery===r&&this.options.enabled===n.enabled&&this.options.staleTime===n.staleTime||this.updateStaleTimeout(),!i||this.currentQuery===r&&this.options.enabled===n.enabled&&this.options.refetchInterval===n.refetchInterval||this.updateRefetchInterval()},n.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),n=this.client.getQueryCache().build(this.client,e);return this.createResult(n,e)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(t){var e=this,n={};return Object.keys(t).forEach((function(r){Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:function(){var n=r;return e.trackedProps.includes(n)||e.trackedProps.push(n),t[n]}})})),n},n.getNextResult=function(t){var e=this;return new Promise((function(n,r){var i=e.subscribe((function(e){e.isFetching||(i(),e.isError&&(null==t?void 0:t.throwOnError)?r(e.error):n(e))}))}))},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(t){return this.fetch(t)},n.fetchOptimistic=function(t){var e=this,n=this.client.defaultQueryObserverOptions(t),r=this.client.getQueryCache().build(this.client,n);return r.fetch().then((function(){return e.createResult(r,n)}))},n.fetch=function(t){var e=this;return this.executeFetch(t).then((function(){return e.updateResult(),e.currentResult}))},n.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return(null==t?void 0:t.throwOnError)||(e=e.catch(o.i)),e},n.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!o.e&&!this.currentResult.isStale&&Object(o.f)(this.options.staleTime)){var e=Object(o.r)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){t.currentResult.isStale||t.updateResult()}),e)}},n.updateRefetchInterval=function(){var t=this;this.clearRefetchInterval(),!o.e&&!1!==this.options.enabled&&Object(o.f)(this.options.refetchInterval)&&(this.refetchIntervalId=setInterval((function(){(t.options.refetchIntervalInBackground||s.a.isFocused())&&t.executeFetch()}),this.options.refetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval()},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},n.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},n.createResult=function(t,e){var n,r=this.currentQuery,i=this.options,u=this.currentResult,s=this.currentResultState,c=this.currentResultOptions,l=t!==r,d=l?t.state:this.currentQueryInitialState,b=l?this.currentResult:this.previousQueryResult,p=t.state,O=p.dataUpdatedAt,j=p.error,m=p.errorUpdatedAt,y=p.isFetching,T=p.status,k=!1,g=!1;if(e.optimisticResults){var R=this.hasListeners(),S=!R&&h(t,e),w=R&&f(t,r,e,i);(S||w)&&(y=!0,O||(T="loading"))}if(e.keepPreviousData&&!p.dataUpdateCount&&(null==b?void 0:b.isSuccess)&&"error"!==T)n=b.data,O=b.dataUpdatedAt,T=b.status,k=!0;else if(e.select&&"undefined"!==typeof p.data)if(u&&p.data===(null==s?void 0:s.data)&&e.select===(null==c?void 0:c.select)&&!this.previousSelectError)n=u.data;else try{n=e.select(p.data),!1!==e.structuralSharing&&(n=Object(o.n)(null==u?void 0:u.data,n)),this.previousSelectError=null}catch(E){Object(a.a)().error(E),j=E,this.previousSelectError=E,m=Date.now(),T="error"}else n=p.data;if("undefined"!==typeof e.placeholderData&&"undefined"===typeof n&&"loading"===T){var x;if((null==u?void 0:u.isPlaceholderData)&&e.placeholderData===(null==c?void 0:c.placeholderData))x=u.data;else if(x="function"===typeof e.placeholderData?e.placeholderData():e.placeholderData,e.select&&"undefined"!==typeof x)try{x=e.select(x),!1!==e.structuralSharing&&(x=Object(o.n)(null==u?void 0:u.data,x)),this.previousSelectError=null}catch(E){Object(a.a)().error(E),j=E,this.previousSelectError=E,m=Date.now(),T="error"}"undefined"!==typeof x&&(T="success",n=x,g=!0)}return{status:T,isLoading:"loading"===T,isSuccess:"success"===T,isError:"error"===T,isIdle:"idle"===T,data:n,dataUpdatedAt:O,error:j,errorUpdatedAt:m,failureCount:p.fetchFailureCount,isFetched:p.dataUpdateCount>0||p.errorUpdateCount>0,isFetchedAfterMount:p.dataUpdateCount>d.dataUpdateCount||p.errorUpdateCount>d.errorUpdateCount,isFetching:y,isLoadingError:"error"===T&&0===p.dataUpdatedAt,isPlaceholderData:g,isPreviousData:k,isRefetchError:"error"===T&&0!==p.dataUpdatedAt,isStale:v(t,e),refetch:this.refetch,remove:this.remove}},n.shouldNotifyListeners=function(t,e){if(!e)return!0;if(t===e)return!1;var n=this.options,r=n.notifyOnChangeProps,i=n.notifyOnChangePropsExclusions;if(!r&&!i)return!0;if("tracked"===r&&!this.trackedProps.length)return!0;var o="tracked"===r?this.trackedProps:r;return Object.keys(t).some((function(n){var r=n,u=t[r]!==e[r],s=null==o?void 0:o.some((function(t){return t===n})),c=null==i?void 0:i.some((function(t){return t===n}));return u&&!c&&(!o||s)}))},n.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Object(o.p)(this.currentResult,e)){var n={cache:!0};!1!==(null==t?void 0:t.listeners)&&this.shouldNotifyListeners(this.currentResult,e)&&(n.listeners=!0),this.notify(Object(r.a)({},n,t))}},n.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==e||e.removeObserver(this),t.addObserver(this))}},n.onQueryUpdate=function(t){var e={};"success"===t.type?e.onSuccess=!0:"error"!==t.type||Object(l.c)(t.error)||(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},n.notify=function(t){var e=this;u.a.batch((function(){t.onSuccess?(null==e.options.onSuccess||e.options.onSuccess(e.currentResult.data),null==e.options.onSettled||e.options.onSettled(e.currentResult.data,null)):t.onError&&(null==e.options.onError||e.options.onError(e.currentResult.error),null==e.options.onSettled||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)})),t.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})}))},e}(c.a);function h(t,e){return function(t,e){return!1!==e.enabled&&!t.state.dataUpdatedAt&&!("error"===t.state.status&&!1===e.retryOnMount)}(t,e)||function(t,e){return!1!==e.enabled&&t.state.dataUpdatedAt>0&&("always"===e.refetchOnMount||!1!==e.refetchOnMount&&v(t,e))}(t,e)}function f(t,e,n,r){return!1!==n.enabled&&(t!==e||!1===r.enabled)&&v(t,n)}function v(t,e){return t.isStaleByTime(e.staleTime)}},564:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return h}));var r=n(527),i=n.n(r),o=n(102),u=n.n(o),s=n(585),c=n.n(s),a=function(t){return t<10?"0".concat(t):t};function l(t){return u()(t,(function(t,e){var n,r,o,u,s,l,d;return{lang:t.lang,name:i()(["".concat(a(e+1),"."),(null===(n=t.type)||void 0===n?void 0:n.title)&&(null===(r=t.author)||void 0===r?void 0:r.title)?"".concat(null===(o=t.type)||void 0===o?void 0:o.title,"."):null===(u=t.type)||void 0===u?void 0:u.title,null===(s=t.author)||void 0===s?void 0:s.title,(null===(l=t.type)||void 0===l?void 0:l.title)||(null===(d=t.author)||void 0===d?void 0:d.title)?"(".concat(c()(t.lang),")"):c()(t.lang),"aac"!==t.codec&&c()(t.codec)]).join(" ")}}))}function d(t,e){return u()(t,(function(t){return{src:"string"===typeof t.url?t.url:t.url[e]||t.url.http,name:t.quality}}))}function h(t){return u()(t,(function(t,e){return{src:t.url,lang:t.lang,name:"".concat(c()(t.lang)," #").concat(a(e+1))}}))}},565:function(t,e,n){"use strict";n.d(e,"a",(function(){return rt}));var r=n(6),i=n(13),o=n.n(i),u=n(23),s=n(47),c=n(32),a=n(20),l=n(0),d=n(576),h=n.n(d),f=n(21),v=n(43),b=n(44),p=n(589),O=n(113),j=n(86),m=n(85),y=n(559),T=n.n(y),k=n(581),g=n.n(k),R=n(582),S=n.n(R),w=n(531),x=n.n(w),E=function(){function t(e){Object(v.a)(this,t),this.resource=void 0,this.objectURL=void 0,this.resource=e}return Object(b.a)(t,[{key:"blobToBuffer",value:function(){var t=this;return new Promise((function(e,n){var r=new FileReader;r.addEventListener("loadend",(function(t){var n,r=null===(n=t.target)||void 0===n?void 0:n.result;e(new Uint8Array(r))})),r.addEventListener("error",(function(){return n("Error while reading the Blob object")})),r.readAsArrayBuffer(t.resource)}))}},{key:"getURL",value:function(){var e=this;return new Promise((function(n,r){return e.resource instanceof Blob?FileReader?TextDecoder?t.blobToString(e.resource,(function(r){var i="WEBVTT FILE\r\n\r\n".concat(t.toVTT(r)),o=new Blob([i],{type:"text/vtt"});return e.objectURL=URL.createObjectURL(o),n(e.objectURL)}),(function(){e.blobToBuffer().then((function(r){var i=new TextDecoder("utf-8").decode(r),o="WEBVTT FILE\r\n\r\n".concat(t.toVTT(i)),u=new Blob([o],{type:"text/vtt"});return e.objectURL=URL.createObjectURL(u),n(e.objectURL)}))})):r("No TextDecoder constructor found"):r("No FileReader constructor found"):r("Expecting resource to be a Blob but something else found.")}))}},{key:"release",value:function(){URL.createObjectURL(this.objectURL)}}],[{key:"blobToString",value:function(t,e,n){var r=new FileReader;r.addEventListener("loadend",(function(t){var n,r=null===(n=t.target)||void 0===n?void 0:n.result;e(r)})),r.addEventListener("error",(function(){return n()})),r.readAsText(t)}},{key:"toVTT",value:function(t){return t.replace(/\{\\([ibu])\}/g,"</$1>").replace(/\{\\([ibu])1\}/g,"<$1>").replace(/\{([ibu])\}/g,"<$1>").replace(/\{\/([ibu])\}/g,"</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g,"$1.$2").concat("\r\n\r\n")}},{key:"toTypedArray",value:function(t){var e=[];return t.split("").forEach((function(t){e.push(parseInt("".concat(t.charCodeAt(0)),16))})),Uint8Array.from(e)}}]),t}();function C(){return(C=Object(u.a)(o.a.mark((function t(e){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return t.next=4,t.sent.blob();case 4:return n=t.sent,r=new E(n),t.abrupt("return",r.getURL());case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var U,I,Q,L,A,F,P,D=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(v.a)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).hls=void 0,t.media=void 0,t.state=void 0,t.props=void 0,t}return Object(b.a)(n,[{key:"load",value:function(t){var e,n=this.props.startTime;(null===(e=this.state)||void 0===e?void 0:e.src)&&this.state.src!==t&&(n=this.media.currentTime),this.destroy();var r=this.media;this.setState({src:t});var i=function(){n&&(r.currentTime=n),r.play()};if(t.includes(".m3u8")&&g.a.isSupported()){var o=this.hls=new g.a;return o.attachMedia(r),void o.on(g.a.Events.MEDIA_ATTACHED,(function(){o.loadSource(t),o.on(g.a.Events.MANIFEST_PARSED,i)}))}r.src=t,r.addEventListener("loadedmetadata",i)}},{key:"audioTracks",get:function(){var t;return this.hls?S()(this.hls.audioTracks.map((function(t){return t.name}))):null===(t=this.props.audioTracks)||void 0===t?void 0:t.map((function(t){return t.name}))}},{key:"audioTrack",get:function(){var t,e,n,r=this;if(this.hls)return null===(n=this.hls.audioTracks.find((function(t){var e;return t.id===(null===(e=r.hls)||void 0===e?void 0:e.audioTrack)})))||void 0===n?void 0:n.name;var i=Array.from(this.media.audioTracks||[]).findIndex((function(t){return t.enabled}));return null===(t=this.props.audioTracks)||void 0===t||null===(e=t[i])||void 0===e?void 0:e.name},set:function(t){if(this.hls){var e=this.hls.audioTracks.find((function(e){return e.name===t}));e&&(this.hls.audioTrack=e.id)}else{var n,r=Array.from(this.media.audioTracks||[]),i=null===(n=this.props.audioTracks)||void 0===n?void 0:n.findIndex((function(e){return e.name===t}));(!i||i>r.length-1)&&(i=0),r.forEach((function(t,e){t.enabled=e===i}))}}},{key:"sourceTracks",get:function(){return x()(this.props.sourceTracks,"src").map((function(t){return t.name}))}},{key:"sourceTrack",get:function(){var t,e=this;return null===(t=this.props.sourceTracks.find((function(t){return t.src===e.state.src})))||void 0===t?void 0:t.name},set:function(t){var e=this.props.sourceTracks.find((function(e){return e.name===t}));e&&this.load(e.src)}},{key:"subtitleTracks",get:function(){var t;return this.hls?this.hls.subtitleTracks.map((function(t){return t.name})):null===(t=this.props.subtitleTracks)||void 0===t?void 0:t.map((function(t){return t.name}))}},{key:"subtitleTrack",get:function(){var t,e,n=this;return this.hls?null===(e=this.hls.subtitleTracks.find((function(t){var e;return t.id===(null===(e=n.hls)||void 0===e?void 0:e.subtitleTrack)})))||void 0===e?void 0:e.name:null===(t=Array.from(this.media.textTracks||[]).find((function(t){return"showing"===t.mode})))||void 0===t?void 0:t.label},set:function(t){if(this.hls){var e,n;this.hls.subtitleTrack=null!==(e=null===(n=this.hls.subtitleTracks.find((function(e){return e.name===t})))||void 0===n?void 0:n.id)&&void 0!==e?e:-1}else{var r=Array.from(this.media.textTracks||[]);r.forEach((function(t){t.mode="disabled"}));var i=r.find((function(e){return e.label===t}));if(i)i.mode="showing";else{var o,u=null===(o=this.props.subtitleTracks)||void 0===o?void 0:o.find((function(e){return e.name===t}));if(u){var s=document.createElement("track");s.kind="captions",s.id=u.name,s.srclang=u.lang,s.label=u.name;var c=function(t){s.src=t,s.track.mode="showing"};u.src.endsWith(".srt")?function(t){return C.apply(this,arguments)}(u.src).then(c):c(u.src),this.media.appendChild(s)}}}}},{key:"destroy",value:function(){this.hls?this.hls.destroy():this.media.src=""}},{key:"componentDidMount",value:function(){var t;this.load(this.props.sourceTracks[0].src),null===(t=Object(p.a)(Object(O.a)(n.prototype),"componentDidMount",this))||void 0===t||t.call(this)}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){var t;this.destroy(),null===(t=Object(p.a)(Object(O.a)(n.prototype),"componentWillUnmount",this))||void 0===t||t.call(this)}}]),n}(T.a),M=n(521),B=n(146),N=n(556),V=n.n(N),W=n(102),$=n.n(W),q=n(553),J=n(155),K=n(1),_="NONE",z=f.b.div(U||(U=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),H=f.b.div(I||(I=Object(a.a)(["\n  padding: 0 1rem;\n  display: flex;\n  flex-direction: column;\n"]))),G=Object(f.b)(M.a)(Q||(Q=Object(a.a)(["\n  width: 5rem;\n"]))),X=f.b.div(L||(L=Object(a.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),Y=f.b.div(A||(A=Object(a.a)(["\n  width: ",";\n  padding-right: 1rem;\n  box-sizing: border-box;\n"])),(function(t){return t.width})),Z=function(t){var e=t.player,n=Object(l.useState)(!1),r=Object(s.a)(n,2),i=r[0],o=r[1],u=Object(l.useState)([]),c=Object(s.a)(u,2),a=c[0],d=c[1],h=Object(l.useState)(null),f=Object(s.a)(h,2),v=f[0],b=f[1],p=Object(l.useState)([]),O=Object(s.a)(p,2),j=O[0],m=O[1],y=Object(l.useState)(null),T=Object(s.a)(y,2),k=T[0],g=T[1],R=Object(l.useState)([]),S=Object(s.a)(R,2),w=S[0],x=S[1],E=Object(l.useState)(null),C=Object(s.a)(E,2),U=C[0],I=C[1],Q=Object(l.useCallback)((function(t,n){e.current&&(e.current.getVideoNode()[t]=n)}),[e]),L=Object(l.useCallback)((function(t){return function(){b(t),Q("audioTrack",t)}}),[Q]),A=Object(l.useCallback)((function(t){return function(){g(t),Q("sourceTrack",t)}}),[Q]),F=Object(l.useCallback)((function(t){return function(){I(t),Q("subtitleTrack",t)}}),[Q]),P=Object(l.useCallback)((function(t){o(t),e.current&&!t&&e.current.play()}),[e]);return Object(l.useEffect)((function(){var t=function(t){if(Object(J.a)(t)){if(e.current){var n=e.current.getVideoNode(),r=n.audioTracks,i=n.audioTrack,u=n.sourceTracks,s=n.sourceTrack,c=n.subtitleTracks,a=n.subtitleTrack;((null===r||void 0===r?void 0:r.length)>1||(null===u||void 0===u?void 0:u.length)>1||(null===c||void 0===c?void 0:c.length)>0)&&(d(r),b(i),m(u),g(s),x(c),I(a),e.current.pause(),o(!0))}}else Object(J.b)(t)&&o(!1)};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[i,e]),Object(K.jsx)(q.a,{visible:i,onVisibilityChange:P,children:Object(K.jsxs)(z,{children:[(null===a||void 0===a?void 0:a.length)>1&&Object(K.jsxs)(H,{children:[Object(K.jsx)(G,{children:"\u0417\u0432\u0443\u043a"}),Object(K.jsx)(X,{children:$()(a,(function(t){return Object(K.jsx)(Y,{width:"50%",children:Object(K.jsx)(V.a,{selected:t===v,onToggle:L(t),children:t})},t)}))})]}),(null===j||void 0===j?void 0:j.length)>1&&Object(K.jsxs)(H,{children:[Object(K.jsx)(G,{children:"\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(K.jsx)(X,{children:$()(j,(function(t){return Object(K.jsx)(Y,{width:"15%",children:Object(K.jsx)(V.a,{selected:t===k,onToggle:A(t),children:t})},t)}))})]}),(null===w||void 0===w?void 0:w.length)>0&&Object(K.jsxs)(H,{children:[Object(K.jsx)(G,{children:"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b"}),Object(K.jsxs)(X,{children:[Object(K.jsx)(Y,{width:"15%",children:Object(K.jsx)(V.a,{selected:!U||U===_,onToggle:F(_),children:"\u041d\u0435\u0442"})}),$()(w,(function(t){return Object(K.jsx)(Y,{width:"15%",children:Object(K.jsx)(V.a,{selected:t===U,onToggle:F(t),children:t})},t)}))]})]})]})})},tt=["title","description","poster","audios","sources","subtitles","startTime","timeSyncInterval","onPlay","onPause","onEnded","onTimeSync"],et=f.b.div(F||(F=Object(a.a)(["\n  video {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n"]))),nt=Object(f.b)(M.a)(P||(P=Object(a.a)(["\n  position: absolute;\n  padding: 0 1rem;\n  z-index: 1;\n  visibility: ",";\n"])),(function(t){return t.visible?"visible":"hidden"})),rt=function(t){var e=t.title,n=t.description,i=t.poster,a=t.audios,d=t.sources,f=t.subtitles,v=t.startTime,b=t.timeSyncInterval,p=void 0===b?30:b,O=t.onPlay,j=t.onPause,m=t.onEnded,y=t.onTimeSync,T=Object(c.a)(t,tt),k=Object(l.useRef)(),g=Object(l.useState)(!0),R=Object(s.a)(g,2),S=R[0],w=R[1],x=Object(l.useCallback)((function(){w(!1),null===O||void 0===O||O()}),[O]),E=Object(l.useCallback)((function(t){w(!0),null===j||void 0===j||j(t.currentTime)}),[j]),C=Object(l.useCallback)((function(t){null===m||void 0===m||m(t.target.currentTime)}),[m]),U=Object(l.useCallback)(Object(u.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!k.current||!y){t.next=5;break}return e=k.current.getVideoNode(),n=e.currentTime,t.next=5,y(n);case 5:case"end":return t.stop()}}),t)}))),[y,k]);return Object(l.useEffect)((function(){var t;return S&&(t=setTimeout((function(){w(!1)}),5e3)),function(){t&&clearTimeout(t)}}),[S]),Object(l.useEffect)((function(){var t;return y&&(t=setInterval(U,1e3*p)),function(){t&&clearInterval(t)}}),[p,y,U]),Object(B.a)(U),Object(K.jsxs)(et,{children:[Object(K.jsx)(nt,{visible:S,children:e}),Object(K.jsx)(Z,{player:k}),Object(K.jsx)(h.a,Object(r.a)(Object(r.a)({},T),{},{ref:k,title:n,poster:i,jumpBy:10,onPlay:x,onPause:E,onEnded:C,startTime:v,audioTracks:a,sourceTracks:d,subtitleTracks:f,videoComponent:D}))]})}},587:function(t,e,n){"use strict";function r(t,e,n){return n?"".concat(null===t||void 0===t?void 0:t.title," (s").concat(n.number,"e").concat((null===e||void 0===e?void 0:e.number)||1,")"):null===t||void 0===t?void 0:t.title}n.d(e,"a",(function(){return r}))},741:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var r=n(6),i=n(13),o=n.n(i),u=n(23),s=n(47),c=n(0),a=n(517),l=n(142),d=n(565),h=n(523),f=n(112),v=n(163),b=n(587),p=n(564),O=n(1),j=function(t,e,n){var r=function(t,e,n){return Object(c.useMemo)((function(){var r,i,o=null===(r=t.videos||(null===e||void 0===e?void 0:e.episodes))||void 0===r?void 0:r.find((function(t){return t.number===n.number+1}));if(o)return o;var u=null===(i=t.seasons)||void 0===i?void 0:i.find((function(t){return t.number===e.number+1}));return u?u.episodes[0]:void 0}),[t,e,n])}(t,e,n);return[function(t,e,n){return Object(c.useMemo)((function(){var r,i,o=null===(r=t.videos||(null===e||void 0===e?void 0:e.episodes))||void 0===r?void 0:r.find((function(t){return t.number===n.number-1}));if(o)return o;var u=null===(i=t.seasons)||void 0===i?void 0:i.find((function(t){return t.number===e.number-1}));return u?u.episodes[u.episodes.length-1]:void 0}),[t,e,n])}(t,e,n),r]},m=function(){var t=Object(a.e)(),e=Object(a.f)(),n=Object(f.a)("watchingMarkTime").watchingMarkTimeAsync,i=Object(v.a)("streaming_type"),m=Object(s.a)(i,1)[0],y=e.state,T=y.item,k=y.video,g=y.season,R=Object(c.useState)(k),S=Object(s.a)(R,2),w=S[0],x=S[1],E=j(T,g,w),C=Object(s.a)(E,2),U=C[0],I=C[1],Q=Object(h.a)("itemMediaLinks",[w.id]),L=Object(c.useCallback)(function(){var t=Object(u.a)(o.a.mark((function t(e,r){var i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.number,t.next=3,n([T.id,r,i,null===g||void 0===g?void 0:g.number]);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),[n,T,g]),A=Object(c.useMemo)((function(){return(null===Q||void 0===Q?void 0:Q.data)?{title:Object(b.a)(T,w,g),description:w.title,poster:T.posters.wide||T.posters.big,audios:Object(p.a)(w.audios),sources:Object(p.b)(Q.data.files,m),subtitles:Object(p.c)(Q.data.subtitles),startTime:w.watching.status===l.b.Watching?w.watching.time:0}:null}),[T,g,w,null===Q||void 0===Q?void 0:Q.data,m]),F=Object(c.useCallback)((function(t){L(w,t)}),[L,w]),P=Object(c.useCallback)((function(e){L(w,e),I?x(I):t.goBack()}),[L,t,w,I]),D=Object(c.useCallback)((function(t){var e=t.currentTime;L(w,e),U&&x(U)}),[L,w,U]),M=Object(c.useCallback)((function(t){var e=t.currentTime;L(w,e),I&&x(I)}),[L,w,I]),B=Object(c.useCallback)(function(){var t=Object(u.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(w,e);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[L,w]);return Object(O.jsx)(O.Fragment,{children:A&&Object(O.jsx)(d.a,Object(r.a)(Object(r.a)({},A),{},{onPause:F,onEnded:P,onJumpBackward:D,onJumpForward:M,onTimeSync:B}),w.id)})}}}]);
//# sourceMappingURL=15.25edd97f.chunk.js.map