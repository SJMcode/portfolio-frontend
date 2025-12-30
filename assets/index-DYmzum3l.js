(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Sh={exports:{}},zo={};var t_;function by(){if(t_)return zo;t_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:u}}return zo.Fragment=e,zo.jsx=i,zo.jsxs=i,zo}var n_;function Ty(){return n_||(n_=1,Sh.exports=by()),Sh.exports}var Le=Ty(),yh={exports:{}},st={};var i_;function Ay(){if(i_)return st;i_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,y={};function v(N,ne,_e){this.props=N,this.context=ne,this.refs=y,this.updater=_e||b}v.prototype.isReactComponent={},v.prototype.setState=function(N,ne){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ne,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function w(){}w.prototype=v.prototype;function U(N,ne,_e){this.props=N,this.context=ne,this.refs=y,this.updater=_e||b}var O=U.prototype=new w;O.constructor=U,T(O,v.prototype),O.isPureReactComponent=!0;var B=Array.isArray;function F(){}var P={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function C(N,ne,_e){var Ae=_e.ref;return{$$typeof:s,type:N,key:ne,ref:Ae!==void 0?Ae:null,props:_e}}function D(N,ne){return C(N.type,ne,N.props)}function k(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function re(N){var ne={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(_e){return ne[_e]})}var ae=/\/+/g;function pe(N,ne){return typeof N=="object"&&N!==null&&N.key!=null?re(""+N.key):ne.toString(36)}function ce(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(F,F):(N.status="pending",N.then(function(ne){N.status==="pending"&&(N.status="fulfilled",N.value=ne)},function(ne){N.status==="pending"&&(N.status="rejected",N.reason=ne)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function z(N,ne,_e,Ae,He){var ee=typeof N;(ee==="undefined"||ee==="boolean")&&(N=null);var ue=!1;if(N===null)ue=!0;else switch(ee){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(N.$$typeof){case s:case e:ue=!0;break;case _:return ue=N._init,z(ue(N._payload),ne,_e,Ae,He)}}if(ue)return He=He(N),ue=Ae===""?"."+pe(N,0):Ae,B(He)?(_e="",ue!=null&&(_e=ue.replace(ae,"$&/")+"/"),z(He,ne,_e,"",function(Ge){return Ge})):He!=null&&(k(He)&&(He=D(He,_e+(He.key==null||N&&N.key===He.key?"":(""+He.key).replace(ae,"$&/")+"/")+ue)),ne.push(He)),1;ue=0;var De=Ae===""?".":Ae+":";if(B(N))for(var Xe=0;Xe<N.length;Xe++)Ae=N[Xe],ee=De+pe(Ae,Xe),ue+=z(Ae,ne,_e,ee,He);else if(Xe=M(N),typeof Xe=="function")for(N=Xe.call(N),Xe=0;!(Ae=N.next()).done;)Ae=Ae.value,ee=De+pe(Ae,Xe++),ue+=z(Ae,ne,_e,ee,He);else if(ee==="object"){if(typeof N.then=="function")return z(ce(N),ne,_e,Ae,He);throw ne=String(N),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return ue}function H(N,ne,_e){if(N==null)return N;var Ae=[],He=0;return z(N,Ae,"","",function(ee){return ne.call(_e,ee,He++)}),Ae}function ie(N){if(N._status===-1){var ne=N._result;ne=ne(),ne.then(function(_e){(N._status===0||N._status===-1)&&(N._status=1,N._result=_e)},function(_e){(N._status===0||N._status===-1)&&(N._status=2,N._result=_e)}),N._status===-1&&(N._status=0,N._result=ne)}if(N._status===1)return N._result.default;throw N._result}var Me=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Se={map:H,forEach:function(N,ne,_e){H(N,function(){ne.apply(this,arguments)},_e)},count:function(N){var ne=0;return H(N,function(){ne++}),ne},toArray:function(N){return H(N,function(ne){return ne})||[]},only:function(N){if(!k(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return st.Activity=g,st.Children=Se,st.Component=v,st.Fragment=i,st.Profiler=l,st.PureComponent=U,st.StrictMode=r,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,st.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},st.cache=function(N){return function(){return N.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(N,ne,_e){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Ae=T({},N.props),He=N.key;if(ne!=null)for(ee in ne.key!==void 0&&(He=""+ne.key),ne)!j.call(ne,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&ne.ref===void 0||(Ae[ee]=ne[ee]);var ee=arguments.length-2;if(ee===1)Ae.children=_e;else if(1<ee){for(var ue=Array(ee),De=0;De<ee;De++)ue[De]=arguments[De+2];Ae.children=ue}return C(N.type,He,Ae)},st.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},st.createElement=function(N,ne,_e){var Ae,He={},ee=null;if(ne!=null)for(Ae in ne.key!==void 0&&(ee=""+ne.key),ne)j.call(ne,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(He[Ae]=ne[Ae]);var ue=arguments.length-2;if(ue===1)He.children=_e;else if(1<ue){for(var De=Array(ue),Xe=0;Xe<ue;Xe++)De[Xe]=arguments[Xe+2];He.children=De}if(N&&N.defaultProps)for(Ae in ue=N.defaultProps,ue)He[Ae]===void 0&&(He[Ae]=ue[Ae]);return C(N,ee,He)},st.createRef=function(){return{current:null}},st.forwardRef=function(N){return{$$typeof:d,render:N}},st.isValidElement=k,st.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:ie}},st.memo=function(N,ne){return{$$typeof:p,type:N,compare:ne===void 0?null:ne}},st.startTransition=function(N){var ne=P.T,_e={};P.T=_e;try{var Ae=N(),He=P.S;He!==null&&He(_e,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(F,Me)}catch(ee){Me(ee)}finally{ne!==null&&_e.types!==null&&(ne.types=_e.types),P.T=ne}},st.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},st.use=function(N){return P.H.use(N)},st.useActionState=function(N,ne,_e){return P.H.useActionState(N,ne,_e)},st.useCallback=function(N,ne){return P.H.useCallback(N,ne)},st.useContext=function(N){return P.H.useContext(N)},st.useDebugValue=function(){},st.useDeferredValue=function(N,ne){return P.H.useDeferredValue(N,ne)},st.useEffect=function(N,ne){return P.H.useEffect(N,ne)},st.useEffectEvent=function(N){return P.H.useEffectEvent(N)},st.useId=function(){return P.H.useId()},st.useImperativeHandle=function(N,ne,_e){return P.H.useImperativeHandle(N,ne,_e)},st.useInsertionEffect=function(N,ne){return P.H.useInsertionEffect(N,ne)},st.useLayoutEffect=function(N,ne){return P.H.useLayoutEffect(N,ne)},st.useMemo=function(N,ne){return P.H.useMemo(N,ne)},st.useOptimistic=function(N,ne){return P.H.useOptimistic(N,ne)},st.useReducer=function(N,ne,_e){return P.H.useReducer(N,ne,_e)},st.useRef=function(N){return P.H.useRef(N)},st.useState=function(N){return P.H.useState(N)},st.useSyncExternalStore=function(N,ne,_e){return P.H.useSyncExternalStore(N,ne,_e)},st.useTransition=function(){return P.H.useTransition()},st.version="19.2.3",st}var a_;function ap(){return a_||(a_=1,yh.exports=Ay()),yh.exports}var fe=ap(),Mh={exports:{}},Io={},Eh={exports:{}},bh={};var r_;function Ry(){return r_||(r_=1,(function(s){function e(z,H){var ie=z.length;z.push(H);e:for(;0<ie;){var Me=ie-1>>>1,Se=z[Me];if(0<l(Se,H))z[Me]=H,z[ie]=Se,ie=Me;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var H=z[0],ie=z.pop();if(ie!==H){z[0]=ie;e:for(var Me=0,Se=z.length,N=Se>>>1;Me<N;){var ne=2*(Me+1)-1,_e=z[ne],Ae=ne+1,He=z[Ae];if(0>l(_e,ie))Ae<Se&&0>l(He,_e)?(z[Me]=He,z[Ae]=ie,Me=Ae):(z[Me]=_e,z[ne]=ie,Me=ne);else if(Ae<Se&&0>l(He,ie))z[Me]=He,z[Ae]=ie,Me=Ae;else break e}}return H}function l(z,H){var ie=z.sortIndex-H.sortIndex;return ie!==0?ie:z.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var m=[],p=[],_=1,g=null,S=3,M=!1,b=!1,T=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function O(z){for(var H=i(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=z)r(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function B(z){if(T=!1,O(z),!b)if(i(m)!==null)b=!0,F||(F=!0,re());else{var H=i(p);H!==null&&ce(B,H.startTime-z)}}var F=!1,P=-1,j=5,C=-1;function D(){return y?!0:!(s.unstable_now()-C<j)}function k(){if(y=!1,F){var z=s.unstable_now();C=z;var H=!0;try{e:{b=!1,T&&(T=!1,w(P),P=-1),M=!0;var ie=S;try{t:{for(O(z),g=i(m);g!==null&&!(g.expirationTime>z&&D());){var Me=g.callback;if(typeof Me=="function"){g.callback=null,S=g.priorityLevel;var Se=Me(g.expirationTime<=z);if(z=s.unstable_now(),typeof Se=="function"){g.callback=Se,O(z),H=!0;break t}g===i(m)&&r(m),O(z)}else r(m);g=i(m)}if(g!==null)H=!0;else{var N=i(p);N!==null&&ce(B,N.startTime-z),H=!1}}break e}finally{g=null,S=ie,M=!1}H=void 0}}finally{H?re():F=!1}}}var re;if(typeof U=="function")re=function(){U(k)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,pe=ae.port2;ae.port1.onmessage=k,re=function(){pe.postMessage(null)}}else re=function(){v(k,0)};function ce(z,H){P=v(function(){z(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_next=function(z){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var ie=S;S=H;try{return z()}finally{S=ie}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ie=S;S=z;try{return H()}finally{S=ie}},s.unstable_scheduleCallback=function(z,H,ie){var Me=s.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?Me+ie:Me):ie=Me,z){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=ie+Se,z={id:_++,callback:H,priorityLevel:z,startTime:ie,expirationTime:Se,sortIndex:-1},ie>Me?(z.sortIndex=ie,e(p,z),i(m)===null&&z===i(p)&&(T?(w(P),P=-1):T=!0,ce(B,ie-Me))):(z.sortIndex=Se,e(m,z),b||M||(b=!0,F||(F=!0,re()))),z},s.unstable_shouldYield=D,s.unstable_wrapCallback=function(z){var H=S;return function(){var ie=S;S=H;try{return z.apply(this,arguments)}finally{S=ie}}}})(bh)),bh}var s_;function Cy(){return s_||(s_=1,Eh.exports=Ry()),Eh.exports}var Th={exports:{}},Un={};var o_;function wy(){if(o_)return Un;o_=1;var s=ap();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Un.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,_)},Un.flushSync=function(m){var p=f.T,_=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=_,r.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:M}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Un.requestFormReset=function(m){r.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Un.useFormStatus=function(){return f.H.useHostTransitionStatus()},Un.version="19.2.3",Un}var l_;function Dy(){if(l_)return Th.exports;l_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Th.exports=wy(),Th.exports}var u_;function Uy(){if(u_)return Io;u_=1;var s=Cy(),e=ap(),i=Dy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var h=c.alternate;if(h===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===a)return m(c),t;if(h===o)return m(c),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=h;else{for(var x=!1,A=c.child;A;){if(A===a){x=!0,a=c,o=h;break}if(A===o){x=!0,o=c,a=h;break}A=A.sibling}if(!x){for(A=h.child;A;){if(A===a){x=!0,a=h,o=c;break}if(A===o){x=!0,o=h,a=c;break}A=A.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),U=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function re(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ae?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case B:return"Suspense";case F:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case U:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case j:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var ce=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},Me=[],Se=-1;function N(t){return{current:t}}function ne(t){0>Se||(t.current=Me[Se],Me[Se]=null,Se--)}function _e(t,n){Se++,Me[Se]=t.current,t.current=n}var Ae=N(null),He=N(null),ee=N(null),ue=N(null);function De(t,n){switch(_e(ee,n),_e(He,t),_e(Ae,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?b0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=b0(n),t=T0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ne(Ae),_e(Ae,t)}function Xe(){ne(Ae),ne(He),ne(ee)}function Ge(t){t.memoizedState!==null&&_e(ue,t);var n=Ae.current,a=T0(n,t.type);n!==a&&(_e(He,t),_e(Ae,a))}function dt(t){He.current===t&&(ne(Ae),ne(He)),ue.current===t&&(ne(ue),Oo._currentValue=ie)}var Jt,_t;function pt(t){if(Jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",_t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+t+_t}var Ct=!1;function ot(t,n){if(!t||Ct)return"";Ct=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(oe){var $=oe}Reflect.construct(t,[],ge)}else{try{ge.call()}catch(oe){$=oe}t.call(ge.prototype)}}else{try{throw Error()}catch(oe){$=oe}(ge=t())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(oe){if(oe&&$&&typeof oe.stack=="string")return[oe.stack,$.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),x=h[0],A=h[1];if(x&&A){var I=x.split(`
`),Q=A.split(`
`);for(c=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(o===I.length||c===Q.length)for(o=I.length-1,c=Q.length-1;1<=o&&0<=c&&I[o]!==Q[c];)c--;for(;1<=o&&0<=c;o--,c--)if(I[o]!==Q[c]){if(o!==1||c!==1)do if(o--,c--,0>c||I[o]!==Q[c]){var he=`
`+I[o].replace(" at new "," at ");return t.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",t.displayName)),he}while(1<=o&&0<=c);break}}}finally{Ct=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?pt(a):""}function $t(t,n){switch(t.tag){case 26:case 27:case 5:return pt(t.type);case 16:return pt("Lazy");case 13:return t.child!==n&&n!==null?pt("Suspense Fallback"):pt("Suspense");case 19:return pt("SuspenseList");case 0:case 15:return ot(t.type,!1);case 11:return ot(t.type.render,!1);case 1:return ot(t.type,!0);case 31:return pt("Activity");default:return""}}function G(t){try{var n="",a=null;do n+=$t(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var jt=Object.prototype.hasOwnProperty,Mt=s.unstable_scheduleCallback,Lt=s.unstable_cancelCallback,je=s.unstable_shouldYield,L=s.unstable_requestPaint,E=s.unstable_now,W=s.unstable_getCurrentPriorityLevel,de=s.unstable_ImmediatePriority,xe=s.unstable_UserBlockingPriority,le=s.unstable_NormalPriority,Ke=s.unstable_LowPriority,Ce=s.unstable_IdlePriority,We=s.log,nt=s.unstable_setDisableYieldValue,Ee=null,be=null;function ze(t){if(typeof We=="function"&&nt(t),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(Ee,t)}catch{}}var Fe=Math.clz32?Math.clz32:X,we=Math.log,ut=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(we(t)/ut|0)|0}var Ne=256,Te=262144,Be=4194304;function ye(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,h=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?c=ye(o):(x&=A,x!==0?c=ye(x):a||(a=A&~t,a!==0&&(c=ye(a))))):(A=o&~h,A!==0?c=ye(A):x!==0?c=ye(x):a||(a=o&~t,a!==0&&(c=ye(a)))),c===0?0:n!==0&&n!==c&&(n&h)===0&&(h=c&-c,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:c}function Re(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function it(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(){var t=Be;return Be<<=1,(Be&62914560)===0&&(Be=4194304),t}function Et(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Dn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Si(t,n,a,o,c,h){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,I=t.expirationTimes,Q=t.hiddenUpdates;for(a=x&~a;0<a;){var he=31-Fe(a),ge=1<<he;A[he]=0,I[he]=-1;var $=Q[he];if($!==null)for(Q[he]=null,he=0;he<$.length;he++){var oe=$[he];oe!==null&&(oe.lane&=-536870913)}a&=~ge}o!==0&&hl(t,o,0),h!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=h&~(x&~n))}function hl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Fe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Ws(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Fe(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function zr(t,n){var a=n&-n;return a=(a&42)!==0?1:qs(a),(a&(t.suspendedLanes|n))!==0?0:a}function qs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ir(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ys(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:j0(t.type))}function Li(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var ai=Math.random().toString(36).slice(2),on="__reactFiber$"+ai,xn="__reactProps$"+ai,yi="__reactContainer$"+ai,Hr="__reactEvents$"+ai,Gr="__reactListeners$"+ai,dl="__reactHandles$"+ai,js="__reactResources$"+ai,sr="__reactMarker$"+ai;function Zs(t){delete t[on],delete t[xn],delete t[Hr],delete t[Gr],delete t[dl]}function Ta(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[yi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=L0(t);t!==null;){if(a=t[on])return a;t=L0(t)}return n}t=a,a=t.parentNode}return null}function Aa(t){if(t=t[on]||t[yi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function or(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ra(t){var n=t[js];return n||(n=t[js]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(t){t[sr]=!0}var q=new Set,se={};function J(t,n){Z(t,n),Z(t+"Capture",n)}function Z(t,n){for(se[t]=n,t=0;t<n.length;t++)q.add(n[t])}var Ue=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ie={},Oe={};function Ve(t){return jt.call(Oe,t)?!0:jt.call(Ie,t)?!1:Ue.test(t)?Oe[t]=!0:(Ie[t]=!0,!1)}function qe(t,n,a){if(Ve(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function $e(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ye(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,h.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Wt(t){if(!t._valueTracker){var n=wt(t)?"checked":"value";t._valueTracker=Zt(t,n,""+t[n])}}function Nt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=wt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Qe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Dt=/[\n"\\]/g;function at(t){return t.replace(Dt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Sn(t,n,a,o,c,h,x,A){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+et(n)):t.value!==""+et(n)&&(t.value=""+et(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?yn(t,x,et(n)):a!=null?yn(t,x,et(a)):o!=null&&t.removeAttribute("value"),c==null&&h!=null&&(t.defaultChecked=!!h),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+et(A):t.removeAttribute("name")}function qi(t,n,a,o,c,h,x,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Wt(t);return}a=a!=null?""+et(a):"",n=n!=null?""+et(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Wt(t)}function yn(t,n,a){n==="number"&&Qe(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ri(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+et(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Ft(t,n,a){if(n!=null&&(n=""+et(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+et(a):""}function Mn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ce(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=et(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Wt(t)}function dn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var En=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||En.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Vr(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&bn(t,c,o)}else for(var h in n)n.hasOwnProperty(h)&&bn(t,h,n[h])}function Mi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pl(t){return yx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Yi(){}var gc=null;function _c(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kr=null,Xr=null;function Ep(t){var n=Aa(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Sn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+at(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[xn]||null;if(!c)throw Error(r(90));Sn(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Nt(o)}break e;case"textarea":Ft(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ri(t,!!a.multiple,n,!1)}}}var vc=!1;function bp(t,n,a){if(vc)return t(n,a);vc=!0;try{var o=t(n);return o}finally{if(vc=!1,(kr!==null||Xr!==null)&&(tu(),kr&&(n=kr,t=Xr,Xr=kr=null,Ep(n),t)))for(n=0;n<t.length;n++)Ep(t[n])}}function Ks(t,n){var a=t.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xc=!1;if(ji)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){xc=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{xc=!1}var Ca=null,Sc=null,ml=null;function Tp(){if(ml)return ml;var t,n=Sc,a=n.length,o,c="value"in Ca?Ca.value:Ca.textContent,h=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(o=1;o<=x&&n[a-o]===c[h-o];o++);return ml=c.slice(t,1<o?1-o:void 0)}function gl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function _l(){return!0}function Ap(){return!1}function In(t){function n(a,o,c,h,x){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?_l:Ap,this.isPropagationStopped=Ap,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),n}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=In(lr),Js=g({},lr,{view:0,detail:0}),Mx=In(Js),yc,Mc,$s,xl=g({},Js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(yc=t.screenX-$s.screenX,Mc=t.screenY-$s.screenY):Mc=yc=0,$s=t),yc)},movementY:function(t){return"movementY"in t?t.movementY:Mc}}),Rp=In(xl),Ex=g({},xl,{dataTransfer:0}),bx=In(Ex),Tx=g({},Js,{relatedTarget:0}),Ec=In(Tx),Ax=g({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),Rx=In(Ax),Cx=g({},lr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wx=In(Cx),Dx=g({},lr,{data:0}),Cp=In(Dx),Ux={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ox(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Nx[t])?!!n[t]:!1}function bc(){return Ox}var Px=g({},Js,{key:function(t){if(t.key){var n=Ux[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Lx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bc,charCode:function(t){return t.type==="keypress"?gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fx=In(Px),Bx=g({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wp=In(Bx),zx=g({},Js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bc}),Ix=In(zx),Hx=g({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gx=In(Hx),Vx=g({},xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kx=In(Vx),Xx=g({},lr,{newState:0,oldState:0}),Wx=In(Xx),qx=[9,13,27,32],Tc=ji&&"CompositionEvent"in window,eo=null;ji&&"documentMode"in document&&(eo=document.documentMode);var Yx=ji&&"TextEvent"in window&&!eo,Dp=ji&&(!Tc||eo&&8<eo&&11>=eo),Up=" ",Lp=!1;function Np(t,n){switch(t){case"keyup":return qx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function jx(t,n){switch(t){case"compositionend":return Op(n);case"keypress":return n.which!==32?null:(Lp=!0,Up);case"textInput":return t=n.data,t===Up&&Lp?null:t;default:return null}}function Zx(t,n){if(Wr)return t==="compositionend"||!Tc&&Np(t,n)?(t=Tp(),ml=Sc=Ca=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Dp&&n.locale!=="ko"?null:n.data;default:return null}}var Kx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Kx[t.type]:n==="textarea"}function Fp(t,n,a,o){kr?Xr?Xr.push(o):Xr=[o]:kr=o,n=lu(n,"onChange"),0<n.length&&(a=new vl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var to=null,no=null;function Qx(t){v0(t,0)}function Sl(t){var n=or(t);if(Nt(n))return t}function Bp(t,n){if(t==="change")return n}var zp=!1;if(ji){var Ac;if(ji){var Rc="oninput"in document;if(!Rc){var Ip=document.createElement("div");Ip.setAttribute("oninput","return;"),Rc=typeof Ip.oninput=="function"}Ac=Rc}else Ac=!1;zp=Ac&&(!document.documentMode||9<document.documentMode)}function Hp(){to&&(to.detachEvent("onpropertychange",Gp),no=to=null)}function Gp(t){if(t.propertyName==="value"&&Sl(no)){var n=[];Fp(n,no,t,_c(t)),bp(Qx,n)}}function Jx(t,n,a){t==="focusin"?(Hp(),to=n,no=a,to.attachEvent("onpropertychange",Gp)):t==="focusout"&&Hp()}function $x(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(no)}function eS(t,n){if(t==="click")return Sl(n)}function tS(t,n){if(t==="input"||t==="change")return Sl(n)}function nS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var jn=typeof Object.is=="function"?Object.is:nS;function io(t,n){if(jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!jt.call(n,c)||!jn(t[c],n[c]))return!1}return!0}function Vp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kp(t,n){var a=Vp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Vp(a)}}function Xp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Xp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Wp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qe(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qe(t.document)}return n}function Cc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var iS=ji&&"documentMode"in document&&11>=document.documentMode,qr=null,wc=null,ao=null,Dc=!1;function qp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Dc||qr==null||qr!==Qe(o)||(o=qr,"selectionStart"in o&&Cc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ao&&io(ao,o)||(ao=o,o=lu(wc,"onSelect"),0<o.length&&(n=new vl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=qr)))}function ur(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Yr={animationend:ur("Animation","AnimationEnd"),animationiteration:ur("Animation","AnimationIteration"),animationstart:ur("Animation","AnimationStart"),transitionrun:ur("Transition","TransitionRun"),transitionstart:ur("Transition","TransitionStart"),transitioncancel:ur("Transition","TransitionCancel"),transitionend:ur("Transition","TransitionEnd")},Uc={},Yp={};ji&&(Yp=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function cr(t){if(Uc[t])return Uc[t];if(!Yr[t])return t;var n=Yr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Yp)return Uc[t]=n[a];return t}var jp=cr("animationend"),Zp=cr("animationiteration"),Kp=cr("animationstart"),aS=cr("transitionrun"),rS=cr("transitionstart"),sS=cr("transitioncancel"),Qp=cr("transitionend"),Jp=new Map,Lc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lc.push("scrollEnd");function Ei(t,n){Jp.set(t,n),J(n,[t])}var yl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},si=[],jr=0,Nc=0;function Ml(){for(var t=jr,n=Nc=jr=0;n<t;){var a=si[n];si[n++]=null;var o=si[n];si[n++]=null;var c=si[n];si[n++]=null;var h=si[n];if(si[n++]=null,o!==null&&c!==null){var x=o.pending;x===null?c.next=c:(c.next=x.next,x.next=c),o.pending=c}h!==0&&$p(a,c,h)}}function El(t,n,a,o){si[jr++]=t,si[jr++]=n,si[jr++]=a,si[jr++]=o,Nc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Oc(t,n,a,o){return El(t,n,a,o),bl(t)}function fr(t,n){return El(t,null,null,n),bl(t)}function $p(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,h=t.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(c=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,c&&n!==null&&(c=31-Fe(a),t=h.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),h):null}function bl(t){if(50<Ro)throw Ro=0,Xf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Zr={};function oS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,n,a,o){return new oS(t,n,a,o)}function Pc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zi(t,n){var a=t.alternate;return a===null?(a=Zn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function em(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Tl(t,n,a,o,c,h){var x=0;if(o=t,typeof t=="function")Pc(t)&&(x=1);else if(typeof t=="string")x=hy(t,a,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=Zn(31,a,n,c),t.elementType=C,t.lanes=h,t;case T:return hr(a.children,c,h,n);case y:x=8,c|=24;break;case v:return t=Zn(12,a,n,c|2),t.elementType=v,t.lanes=h,t;case B:return t=Zn(13,a,n,c),t.elementType=B,t.lanes=h,t;case F:return t=Zn(19,a,n,c),t.elementType=F,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:x=10;break e;case w:x=9;break e;case O:x=11;break e;case P:x=14;break e;case j:x=16,o=null;break e}x=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Zn(x,a,n,c),n.elementType=t,n.type=o,n.lanes=h,n}function hr(t,n,a,o){return t=Zn(7,t,o,n),t.lanes=a,t}function Fc(t,n,a){return t=Zn(6,t,null,n),t.lanes=a,t}function tm(t){var n=Zn(18,null,null,0);return n.stateNode=t,n}function Bc(t,n,a){return n=Zn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var nm=new WeakMap;function oi(t,n){if(typeof t=="object"&&t!==null){var a=nm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:G(n)},nm.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var Kr=[],Qr=0,Al=null,ro=0,li=[],ui=0,wa=null,Ni=1,Oi="";function Ki(t,n){Kr[Qr++]=ro,Kr[Qr++]=Al,Al=t,ro=n}function im(t,n,a){li[ui++]=Ni,li[ui++]=Oi,li[ui++]=wa,wa=t;var o=Ni;t=Oi;var c=32-Fe(o)-1;o&=~(1<<c),a+=1;var h=32-Fe(n)+c;if(30<h){var x=c-c%5;h=(o&(1<<x)-1).toString(32),o>>=x,c-=x,Ni=1<<32-Fe(n)+c|a<<c|o,Oi=h+t}else Ni=1<<h|a<<c|o,Oi=t}function zc(t){t.return!==null&&(Ki(t,1),im(t,1,0))}function Ic(t){for(;t===Al;)Al=Kr[--Qr],Kr[Qr]=null,ro=Kr[--Qr],Kr[Qr]=null;for(;t===wa;)wa=li[--ui],li[ui]=null,Oi=li[--ui],li[ui]=null,Ni=li[--ui],li[ui]=null}function am(t,n){li[ui++]=Ni,li[ui++]=Oi,li[ui++]=wa,Ni=n.id,Oi=n.overflow,wa=t}var Tn=null,qt=null,St=!1,Da=null,ci=!1,Hc=Error(r(519));function Ua(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw so(oi(n,t)),Hc}function rm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[on]=t,n[xn]=o,a){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(a=0;a<wo.length;a++)gt(wo[a],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),qi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),Mn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||M0(n.textContent,a)?(o.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),o.onScroll!=null&&gt("scroll",n),o.onScrollEnd!=null&&gt("scrollend",n),o.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||Ua(t,!0)}function sm(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:Tn=Tn.return}}function Jr(t){if(t!==Tn)return!1;if(!St)return sm(t),St=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||rh(t.type,t.memoizedProps)),a=!a),a&&qt&&Ua(t),sm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qt=U0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qt=U0(t)}else n===27?(n=qt,Wa(t.type)?(t=ch,ch=null,qt=t):qt=n):qt=Tn?hi(t.stateNode.nextSibling):null;return!0}function dr(){qt=Tn=null,St=!1}function Gc(){var t=Da;return t!==null&&(kn===null?kn=t:kn.push.apply(kn,t),Da=null),t}function so(t){Da===null?Da=[t]:Da.push(t)}var Vc=N(null),pr=null,Qi=null;function La(t,n,a){_e(Vc,n._currentValue),n._currentValue=a}function Ji(t){t._currentValue=Vc.current,ne(Vc)}function kc(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Xc(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var h=c.dependencies;if(h!==null){var x=c.child;h=h.firstContext;e:for(;h!==null;){var A=h;h=c;for(var I=0;I<n.length;I++)if(A.context===n[I]){h.lanes|=a,A=h.alternate,A!==null&&(A.lanes|=a),kc(h.return,a,t),o||(x=null);break e}h=A.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,h=x.alternate,h!==null&&(h.lanes|=a),kc(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function $r(t,n,a,o){t=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var A=c.type;jn(c.pendingProps.value,x.value)||(t!==null?t.push(A):t=[A])}}else if(c===ue.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Oo):t=[Oo])}c=c.return}t!==null&&Xc(n,t,a,o),n.flags|=262144}function Rl(t){for(t=t.firstContext;t!==null;){if(!jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function mr(t){pr=t,Qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return om(pr,t)}function Cl(t,n){return pr===null&&mr(t),om(t,n)}function om(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Qi===null){if(t===null)throw Error(r(308));Qi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Qi=Qi.next=n;return a}var lS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},uS=s.unstable_scheduleCallback,cS=s.unstable_NormalPriority,ln={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wc(){return{controller:new lS,data:new Map,refCount:0}}function oo(t){t.refCount--,t.refCount===0&&uS(cS,function(){t.controller.abort()})}var lo=null,qc=0,es=0,ts=null;function fS(t,n){if(lo===null){var a=lo=[];qc=0,es=Kf(),ts={status:"pending",value:void 0,then:function(o){a.push(o)}}}return qc++,n.then(lm,lm),n}function lm(){if(--qc===0&&lo!==null){ts!==null&&(ts.status="fulfilled");var t=lo;lo=null,es=0,ts=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function hS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var um=z.S;z.S=function(t,n){qg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&fS(t,n),um!==null&&um(t,n)};var gr=N(null);function Yc(){var t=gr.current;return t!==null?t:Xt.pooledCache}function wl(t,n){n===null?_e(gr,gr.current):_e(gr,n.pool)}function cm(){var t=Yc();return t===null?null:{parent:ln._currentValue,pool:t}}var ns=Error(r(460)),jc=Error(r(474)),Dl=Error(r(542)),Ul={then:function(){}};function fm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function hm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,pm(t),t;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,pm(t),t}throw vr=n,ns}}function _r(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(vr=a,ns):a}}var vr=null;function dm(){if(vr===null)throw Error(r(459));var t=vr;return vr=null,t}function pm(t){if(t===ns||t===Dl)throw Error(r(483))}var is=null,uo=0;function Ll(t){var n=uo;return uo+=1,is===null&&(is=[]),hm(is,t,n)}function co(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Nl(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function mm(t){function n(Y,V){if(t){var K=Y.deletions;K===null?(Y.deletions=[V],Y.flags|=16):K.push(V)}}function a(Y,V){if(!t)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function o(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function c(Y,V){return Y=Zi(Y,V),Y.index=0,Y.sibling=null,Y}function h(Y,V,K){return Y.index=K,t?(K=Y.alternate,K!==null?(K=K.index,K<V?(Y.flags|=67108866,V):K):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function x(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,V,K,me){return V===null||V.tag!==6?(V=Fc(K,Y.mode,me),V.return=Y,V):(V=c(V,K),V.return=Y,V)}function I(Y,V,K,me){var Je=K.type;return Je===T?he(Y,V,K.props.children,me,K.key):V!==null&&(V.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===j&&_r(Je)===V.type)?(V=c(V,K.props),co(V,K),V.return=Y,V):(V=Tl(K.type,K.key,K.props,null,Y.mode,me),co(V,K),V.return=Y,V)}function Q(Y,V,K,me){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=Bc(K,Y.mode,me),V.return=Y,V):(V=c(V,K.children||[]),V.return=Y,V)}function he(Y,V,K,me,Je){return V===null||V.tag!==7?(V=hr(K,Y.mode,me,Je),V.return=Y,V):(V=c(V,K),V.return=Y,V)}function ge(Y,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Fc(""+V,Y.mode,K),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return K=Tl(V.type,V.key,V.props,null,Y.mode,K),co(K,V),K.return=Y,K;case b:return V=Bc(V,Y.mode,K),V.return=Y,V;case j:return V=_r(V),ge(Y,V,K)}if(ce(V)||re(V))return V=hr(V,Y.mode,K,null),V.return=Y,V;if(typeof V.then=="function")return ge(Y,Ll(V),K);if(V.$$typeof===U)return ge(Y,Cl(Y,V),K);Nl(Y,V)}return null}function $(Y,V,K,me){var Je=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Je!==null?null:A(Y,V,""+K,me);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case M:return K.key===Je?I(Y,V,K,me):null;case b:return K.key===Je?Q(Y,V,K,me):null;case j:return K=_r(K),$(Y,V,K,me)}if(ce(K)||re(K))return Je!==null?null:he(Y,V,K,me,null);if(typeof K.then=="function")return $(Y,V,Ll(K),me);if(K.$$typeof===U)return $(Y,V,Cl(Y,K),me);Nl(Y,K)}return null}function oe(Y,V,K,me,Je){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return Y=Y.get(K)||null,A(V,Y,""+me,Je);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case M:return Y=Y.get(me.key===null?K:me.key)||null,I(V,Y,me,Je);case b:return Y=Y.get(me.key===null?K:me.key)||null,Q(V,Y,me,Je);case j:return me=_r(me),oe(Y,V,K,me,Je)}if(ce(me)||re(me))return Y=Y.get(K)||null,he(V,Y,me,Je,null);if(typeof me.then=="function")return oe(Y,V,K,Ll(me),Je);if(me.$$typeof===U)return oe(Y,V,K,Cl(V,me),Je);Nl(V,me)}return null}function ke(Y,V,K,me){for(var Je=null,Tt=null,Ze=V,ct=V=0,xt=null;Ze!==null&&ct<K.length;ct++){Ze.index>ct?(xt=Ze,Ze=null):xt=Ze.sibling;var At=$(Y,Ze,K[ct],me);if(At===null){Ze===null&&(Ze=xt);break}t&&Ze&&At.alternate===null&&n(Y,Ze),V=h(At,V,ct),Tt===null?Je=At:Tt.sibling=At,Tt=At,Ze=xt}if(ct===K.length)return a(Y,Ze),St&&Ki(Y,ct),Je;if(Ze===null){for(;ct<K.length;ct++)Ze=ge(Y,K[ct],me),Ze!==null&&(V=h(Ze,V,ct),Tt===null?Je=Ze:Tt.sibling=Ze,Tt=Ze);return St&&Ki(Y,ct),Je}for(Ze=o(Ze);ct<K.length;ct++)xt=oe(Ze,Y,ct,K[ct],me),xt!==null&&(t&&xt.alternate!==null&&Ze.delete(xt.key===null?ct:xt.key),V=h(xt,V,ct),Tt===null?Je=xt:Tt.sibling=xt,Tt=xt);return t&&Ze.forEach(function(Ka){return n(Y,Ka)}),St&&Ki(Y,ct),Je}function tt(Y,V,K,me){if(K==null)throw Error(r(151));for(var Je=null,Tt=null,Ze=V,ct=V=0,xt=null,At=K.next();Ze!==null&&!At.done;ct++,At=K.next()){Ze.index>ct?(xt=Ze,Ze=null):xt=Ze.sibling;var Ka=$(Y,Ze,At.value,me);if(Ka===null){Ze===null&&(Ze=xt);break}t&&Ze&&Ka.alternate===null&&n(Y,Ze),V=h(Ka,V,ct),Tt===null?Je=Ka:Tt.sibling=Ka,Tt=Ka,Ze=xt}if(At.done)return a(Y,Ze),St&&Ki(Y,ct),Je;if(Ze===null){for(;!At.done;ct++,At=K.next())At=ge(Y,At.value,me),At!==null&&(V=h(At,V,ct),Tt===null?Je=At:Tt.sibling=At,Tt=At);return St&&Ki(Y,ct),Je}for(Ze=o(Ze);!At.done;ct++,At=K.next())At=oe(Ze,Y,ct,At.value,me),At!==null&&(t&&At.alternate!==null&&Ze.delete(At.key===null?ct:At.key),V=h(At,V,ct),Tt===null?Je=At:Tt.sibling=At,Tt=At);return t&&Ze.forEach(function(Ey){return n(Y,Ey)}),St&&Ki(Y,ct),Je}function Vt(Y,V,K,me){if(typeof K=="object"&&K!==null&&K.type===T&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case M:e:{for(var Je=K.key;V!==null;){if(V.key===Je){if(Je=K.type,Je===T){if(V.tag===7){a(Y,V.sibling),me=c(V,K.props.children),me.return=Y,Y=me;break e}}else if(V.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===j&&_r(Je)===V.type){a(Y,V.sibling),me=c(V,K.props),co(me,K),me.return=Y,Y=me;break e}a(Y,V);break}else n(Y,V);V=V.sibling}K.type===T?(me=hr(K.props.children,Y.mode,me,K.key),me.return=Y,Y=me):(me=Tl(K.type,K.key,K.props,null,Y.mode,me),co(me,K),me.return=Y,Y=me)}return x(Y);case b:e:{for(Je=K.key;V!==null;){if(V.key===Je)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(Y,V.sibling),me=c(V,K.children||[]),me.return=Y,Y=me;break e}else{a(Y,V);break}else n(Y,V);V=V.sibling}me=Bc(K,Y.mode,me),me.return=Y,Y=me}return x(Y);case j:return K=_r(K),Vt(Y,V,K,me)}if(ce(K))return ke(Y,V,K,me);if(re(K)){if(Je=re(K),typeof Je!="function")throw Error(r(150));return K=Je.call(K),tt(Y,V,K,me)}if(typeof K.then=="function")return Vt(Y,V,Ll(K),me);if(K.$$typeof===U)return Vt(Y,V,Cl(Y,K),me);Nl(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(Y,V.sibling),me=c(V,K),me.return=Y,Y=me):(a(Y,V),me=Fc(K,Y.mode,me),me.return=Y,Y=me),x(Y)):a(Y,V)}return function(Y,V,K,me){try{uo=0;var Je=Vt(Y,V,K,me);return is=null,Je}catch(Ze){if(Ze===ns||Ze===Dl)throw Ze;var Tt=Zn(29,Ze,null,Y.mode);return Tt.lanes=me,Tt.return=Y,Tt}}}var xr=mm(!0),gm=mm(!1),Na=!1;function Zc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Oa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ut&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=bl(t),$p(t,null,a),n}return El(t,o,n,a),bl(t)}function fo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ws(t,a)}}function Qc(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?c=h=x:h=h.next=x,a=a.next}while(a!==null);h===null?c=h=n:h=h.next=n}else c=h=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Jc=!1;function ho(){if(Jc){var t=ts;if(t!==null)throw t}}function po(t,n,a,o){Jc=!1;var c=t.updateQueue;Na=!1;var h=c.firstBaseUpdate,x=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var I=A,Q=I.next;I.next=null,x===null?h=Q:x.next=Q,x=I;var he=t.alternate;he!==null&&(he=he.updateQueue,A=he.lastBaseUpdate,A!==x&&(A===null?he.firstBaseUpdate=Q:A.next=Q,he.lastBaseUpdate=I))}if(h!==null){var ge=c.baseState;x=0,he=Q=I=null,A=h;do{var $=A.lane&-536870913,oe=$!==A.lane;if(oe?(vt&$)===$:(o&$)===$){$!==0&&$===es&&(Jc=!0),he!==null&&(he=he.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var ke=t,tt=A;$=n;var Vt=a;switch(tt.tag){case 1:if(ke=tt.payload,typeof ke=="function"){ge=ke.call(Vt,ge,$);break e}ge=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=tt.payload,$=typeof ke=="function"?ke.call(Vt,ge,$):ke,$==null)break e;ge=g({},ge,$);break e;case 2:Na=!0}}$=A.callback,$!==null&&(t.flags|=64,oe&&(t.flags|=8192),oe=c.callbacks,oe===null?c.callbacks=[$]:oe.push($))}else oe={lane:$,tag:A.tag,payload:A.payload,callback:A.callback,next:null},he===null?(Q=he=oe,I=ge):he=he.next=oe,x|=$;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;oe=A,A=oe.next,oe.next=null,c.lastBaseUpdate=oe,c.shared.pending=null}}while(!0);he===null&&(I=ge),c.baseState=I,c.firstBaseUpdate=Q,c.lastBaseUpdate=he,h===null&&(c.shared.lanes=0),Ha|=x,t.lanes=x,t.memoizedState=ge}}function _m(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function vm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)_m(a[t],n)}var as=N(null),Ol=N(0);function xm(t,n){t=oa,_e(Ol,t),_e(as,n),oa=t|n.baseLanes}function $c(){_e(Ol,oa),_e(as,as.current)}function ef(){oa=Ol.current,ne(as),ne(Ol)}var Kn=N(null),fi=null;function Fa(t){var n=t.alternate;_e(an,an.current&1),_e(Kn,t),fi===null&&(n===null||as.current!==null||n.memoizedState!==null)&&(fi=t)}function tf(t){_e(an,an.current),_e(Kn,t),fi===null&&(fi=t)}function Sm(t){t.tag===22?(_e(an,an.current),_e(Kn,t),fi===null&&(fi=t)):Ba()}function Ba(){_e(an,an.current),_e(Kn,Kn.current)}function Qn(t){ne(Kn),fi===t&&(fi=null),ne(an)}var an=N(0);function Pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||lh(a)||uh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,lt=null,Ht=null,un=null,Fl=!1,rs=!1,Sr=!1,Bl=0,mo=0,ss=null,dS=0;function en(){throw Error(r(321))}function nf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!jn(t[a],n[a]))return!1;return!0}function af(t,n,a,o,c,h){return $i=h,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?ig:xf,Sr=!1,h=a(o,c),Sr=!1,rs&&(h=Mm(n,a,o,c)),ym(t),h}function ym(t){z.H=vo;var n=Ht!==null&&Ht.next!==null;if($i=0,un=Ht=lt=null,Fl=!1,mo=0,ss=null,n)throw Error(r(300));t===null||cn||(t=t.dependencies,t!==null&&Rl(t)&&(cn=!0))}function Mm(t,n,a,o){lt=t;var c=0;do{if(rs&&(ss=null),mo=0,rs=!1,25<=c)throw Error(r(301));if(c+=1,un=Ht=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}z.H=ag,h=n(a,o)}while(rs);return h}function pS(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?go(n):n,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(lt.flags|=1024),n}function rf(){var t=Bl!==0;return Bl=0,t}function sf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function of(t){if(Fl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Fl=!1}$i=0,un=Ht=lt=null,rs=!1,mo=Bl=0,ss=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?lt.memoizedState=un=t:un=un.next=t,un}function rn(){if(Ht===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var n=un===null?lt.memoizedState:un.next;if(n!==null)un=n,Ht=t;else{if(t===null)throw lt.alternate===null?Error(r(467)):Error(r(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},un===null?lt.memoizedState=un=t:un=un.next=t}return un}function zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function go(t){var n=mo;return mo+=1,ss===null&&(ss=[]),t=hm(ss,t,n),n=lt,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?ig:xf),t}function Il(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return go(t);if(t.$$typeof===U)return An(t)}throw Error(r(438,String(t)))}function lf(t){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=lt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=zl(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=D;return n.index++,a}function ea(t,n){return typeof n=="function"?n(t):n}function Hl(t){var n=rn();return uf(n,Ht,t)}function uf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,h=o.pending;if(h!==null){if(c!==null){var x=c.next;c.next=h.next,h.next=x}n.baseQueue=c=h,o.pending=null}if(h=t.baseState,c===null)t.memoizedState=h;else{n=c.next;var A=x=null,I=null,Q=n,he=!1;do{var ge=Q.lane&-536870913;if(ge!==Q.lane?(vt&ge)===ge:($i&ge)===ge){var $=Q.revertLane;if($===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),ge===es&&(he=!0);else if(($i&$)===$){Q=Q.next,$===es&&(he=!0);continue}else ge={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(A=I=ge,x=h):I=I.next=ge,lt.lanes|=$,Ha|=$;ge=Q.action,Sr&&a(h,ge),h=Q.hasEagerState?Q.eagerState:a(h,ge)}else $={lane:ge,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(A=I=$,x=h):I=I.next=$,lt.lanes|=ge,Ha|=ge;Q=Q.next}while(Q!==null&&Q!==n);if(I===null?x=h:I.next=A,!jn(h,t.memoizedState)&&(cn=!0,he&&(a=ts,a!==null)))throw a;t.memoizedState=h,t.baseState=x,t.baseQueue=I,o.lastRenderedState=h}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function cf(t){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,h=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do h=t(h,x.action),x=x.next;while(x!==c);jn(h,n.memoizedState)||(cn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Em(t,n,a){var o=lt,c=rn(),h=St;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!jn((Ht||c).memoizedState,a);if(x&&(c.memoizedState=a,cn=!0),c=c.queue,df(Am.bind(null,o,c,t),[t]),c.getSnapshot!==n||x||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,os(9,{destroy:void 0},Tm.bind(null,o,c,a,n),null),Xt===null)throw Error(r(349));h||($i&127)!==0||bm(o,n,a)}return a}function bm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=zl(),lt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Tm(t,n,a,o){n.value=a,n.getSnapshot=o,Rm(n)&&Cm(t)}function Am(t,n,a){return a(function(){Rm(n)&&Cm(t)})}function Rm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!jn(t,a)}catch{return!0}}function Cm(t){var n=fr(t,2);n!==null&&Xn(n,t,2)}function ff(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),Sr){ze(!0);try{a()}finally{ze(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},n}function wm(t,n,a,o){return t.baseState=a,uf(t,Ht,typeof o=="function"?o:ea)}function mS(t,n,a,o,c){if(kl(t))throw Error(r(485));if(t=n.action,t!==null){var h={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};z.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Dm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Dm(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var h=z.T,x={};z.T=x;try{var A=a(c,o),I=z.S;I!==null&&I(x,A),Um(t,n,A)}catch(Q){hf(t,n,Q)}finally{h!==null&&x.types!==null&&(h.types=x.types),z.T=h}}else try{h=a(c,o),Um(t,n,h)}catch(Q){hf(t,n,Q)}}function Um(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Lm(t,n,o)},function(o){return hf(t,n,o)}):Lm(t,n,a)}function Lm(t,n,a){n.status="fulfilled",n.value=a,Nm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Dm(t,a)))}function hf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Nm(n),n=n.next;while(n!==o)}t.action=null}function Nm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Om(t,n){return n}function Pm(t,n){if(St){var a=Xt.formState;if(a!==null){e:{var o=lt;if(St){if(qt){t:{for(var c=qt,h=ci;c.nodeType!==8;){if(!h){c=null;break t}if(c=hi(c.nextSibling),c===null){c=null;break t}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){qt=hi(c.nextSibling),o=c.data==="F!";break e}}Ua(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Om,lastRenderedState:n},a.queue=o,a=eg.bind(null,lt,o),o.dispatch=a,o=ff(!1),h=vf.bind(null,lt,!1,o.queue),o=Pn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=mS.bind(null,lt,c,h,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function Fm(t){var n=rn();return Bm(n,Ht,t)}function Bm(t,n,a){if(n=uf(t,n,Om)[0],t=Hl(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=go(n)}catch(x){throw x===ns?Dl:x}else o=n;n=rn();var c=n.queue,h=c.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,os(9,{destroy:void 0},gS.bind(null,c,a),null)),[o,h,t]}function gS(t,n){t.action=n}function zm(t){var n=rn(),a=Ht;if(a!==null)return Bm(n,a,t);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function os(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=lt.updateQueue,n===null&&(n=zl(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Im(){return rn().memoizedState}function Gl(t,n,a,o){var c=Pn();lt.flags|=t,c.memoizedState=os(1|n,{destroy:void 0},a,o===void 0?null:o)}function Vl(t,n,a,o){var c=rn();o=o===void 0?null:o;var h=c.memoizedState.inst;Ht!==null&&o!==null&&nf(o,Ht.memoizedState.deps)?c.memoizedState=os(n,h,a,o):(lt.flags|=t,c.memoizedState=os(1|n,h,a,o))}function Hm(t,n){Gl(8390656,8,t,n)}function df(t,n){Vl(2048,8,t,n)}function _S(t){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=zl(),lt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Gm(t){var n=rn().memoizedState;return _S({ref:n,nextImpl:t}),function(){if((Ut&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Vm(t,n){return Vl(4,2,t,n)}function km(t,n){return Vl(4,4,t,n)}function Xm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Wm(t,n,a){a=a!=null?a.concat([t]):null,Vl(4,4,Xm.bind(null,n,t),a)}function pf(){}function qm(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&nf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Ym(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&nf(n,o[1]))return o[0];if(o=t(),Sr){ze(!0);try{t()}finally{ze(!1)}}return a.memoizedState=[o,n],o}function mf(t,n,a){return a===void 0||($i&1073741824)!==0&&(vt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=jg(),lt.lanes|=t,Ha|=t,a)}function jm(t,n,a,o){return jn(a,n)?a:as.current!==null?(t=mf(t,a,o),jn(t,n)||(cn=!0),t):($i&42)===0||($i&1073741824)!==0&&(vt&261930)===0?(cn=!0,t.memoizedState=a):(t=jg(),lt.lanes|=t,Ha|=t,n)}function Zm(t,n,a,o,c){var h=H.p;H.p=h!==0&&8>h?h:8;var x=z.T,A={};z.T=A,vf(t,!1,n,a);try{var I=c(),Q=z.S;if(Q!==null&&Q(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var he=hS(I,o);_o(t,n,he,ei(t))}else _o(t,n,o,ei(t))}catch(ge){_o(t,n,{then:function(){},status:"rejected",reason:ge},ei())}finally{H.p=h,x!==null&&A.types!==null&&(x.types=A.types),z.T=x}}function vS(){}function gf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=Km(t).queue;Zm(t,c,n,ie,a===null?vS:function(){return Qm(t),a(o)})}function Km(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:ie},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Qm(t){var n=Km(t);n.next===null&&(n=t.alternate.memoizedState),_o(t,n.next.queue,{},ei())}function _f(){return An(Oo)}function Jm(){return rn().memoizedState}function $m(){return rn().memoizedState}function xS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();t=Oa(a);var o=Pa(n,t,a);o!==null&&(Xn(o,n,a),fo(o,n,a)),n={cache:Wc()},t.payload=n;return}n=n.return}}function SS(t,n,a){var o=ei();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},kl(t)?tg(n,a):(a=Oc(t,n,a,o),a!==null&&(Xn(a,t,o),ng(a,n,o)))}function eg(t,n,a){var o=ei();_o(t,n,a,o)}function _o(t,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(kl(t))tg(n,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var x=n.lastRenderedState,A=h(x,a);if(c.hasEagerState=!0,c.eagerState=A,jn(A,x))return El(t,n,c,0),Xt===null&&Ml(),!1}catch{}if(a=Oc(t,n,c,o),a!==null)return Xn(a,t,o),ng(a,n,o),!0}return!1}function vf(t,n,a,o){if(o={lane:2,revertLane:Kf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},kl(t)){if(n)throw Error(r(479))}else n=Oc(t,a,o,2),n!==null&&Xn(n,t,2)}function kl(t){var n=t.alternate;return t===lt||n!==null&&n===lt}function tg(t,n){rs=Fl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function ng(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ws(t,a)}}var vo={readContext:An,use:Il,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};vo.useEffectEvent=en;var ig={readContext:An,use:Il,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:Hm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Gl(4194308,4,Xm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Gl(4194308,4,t,n)},useInsertionEffect:function(t,n){Gl(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var o=t();if(Sr){ze(!0);try{t()}finally{ze(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Pn();if(a!==void 0){var c=a(n);if(Sr){ze(!0);try{a(n)}finally{ze(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=SS.bind(null,lt,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=ff(t);var n=t.queue,a=eg.bind(null,lt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:pf,useDeferredValue:function(t,n){var a=Pn();return mf(a,t,n)},useTransition:function(){var t=ff(!1);return t=Zm.bind(null,lt,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=lt,c=Pn();if(St){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xt===null)throw Error(r(349));(vt&127)!==0||bm(o,n,a)}c.memoizedState=a;var h={value:a,getSnapshot:n};return c.queue=h,Hm(Am.bind(null,o,h,t),[t]),o.flags|=2048,os(9,{destroy:void 0},Tm.bind(null,o,h,a,n),null),a},useId:function(){var t=Pn(),n=Xt.identifierPrefix;if(St){var a=Oi,o=Ni;a=(o&~(1<<32-Fe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Bl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=dS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:_f,useFormState:Pm,useActionState:Pm,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=vf.bind(null,lt,!0,a),a.dispatch=n,[t,n]},useMemoCache:lf,useCacheRefresh:function(){return Pn().memoizedState=xS.bind(null,lt)},useEffectEvent:function(t){var n=Pn(),a={impl:t};return n.memoizedState=a,function(){if((Ut&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},xf={readContext:An,use:Il,useCallback:qm,useContext:An,useEffect:df,useImperativeHandle:Wm,useInsertionEffect:Vm,useLayoutEffect:km,useMemo:Ym,useReducer:Hl,useRef:Im,useState:function(){return Hl(ea)},useDebugValue:pf,useDeferredValue:function(t,n){var a=rn();return jm(a,Ht.memoizedState,t,n)},useTransition:function(){var t=Hl(ea)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:go(t),n]},useSyncExternalStore:Em,useId:Jm,useHostTransitionStatus:_f,useFormState:Fm,useActionState:Fm,useOptimistic:function(t,n){var a=rn();return wm(a,Ht,t,n)},useMemoCache:lf,useCacheRefresh:$m};xf.useEffectEvent=Gm;var ag={readContext:An,use:Il,useCallback:qm,useContext:An,useEffect:df,useImperativeHandle:Wm,useInsertionEffect:Vm,useLayoutEffect:km,useMemo:Ym,useReducer:cf,useRef:Im,useState:function(){return cf(ea)},useDebugValue:pf,useDeferredValue:function(t,n){var a=rn();return Ht===null?mf(a,t,n):jm(a,Ht.memoizedState,t,n)},useTransition:function(){var t=cf(ea)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:go(t),n]},useSyncExternalStore:Em,useId:Jm,useHostTransitionStatus:_f,useFormState:zm,useActionState:zm,useOptimistic:function(t,n){var a=rn();return Ht!==null?wm(a,Ht,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:lf,useCacheRefresh:$m};ag.useEffectEvent=Gm;function Sf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var yf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ei(),c=Oa(o);c.payload=n,a!=null&&(c.callback=a),n=Pa(t,c,o),n!==null&&(Xn(n,t,o),fo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ei(),c=Oa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Pa(t,c,o),n!==null&&(Xn(n,t,o),fo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ei(),o=Oa(a);o.tag=2,n!=null&&(o.callback=n),n=Pa(t,o,a),n!==null&&(Xn(n,t,a),fo(n,t,a))}};function rg(t,n,a,o,c,h,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,x):n.prototype&&n.prototype.isPureReactComponent?!io(a,o)||!io(c,h):!0}function sg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&yf.enqueueReplaceState(n,n.state,null)}function yr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function og(t){yl(t)}function lg(t){console.error(t)}function ug(t){yl(t)}function Xl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function cg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Mf(t,n,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){Xl(t,n)},a}function fg(t){return t=Oa(t),t.tag=3,t}function hg(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var h=o.value;t.payload=function(){return c(h)},t.callback=function(){cg(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){cg(n,a,o),typeof c!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function yS(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&$r(n,a,c,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?nu():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Ul?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Yf(t,o,c)),!1;case 22:return a.flags|=65536,o===Ul?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Yf(t,o,c)),!1}throw Error(r(435,a.tag))}return Yf(t,o,c),nu(),!1}if(St)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Hc&&(t=Error(r(422),{cause:o}),so(oi(t,a)))):(o!==Hc&&(n=Error(r(423),{cause:o}),so(oi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=oi(o,a),c=Mf(t.stateNode,o,c),Qc(t,c),tn!==4&&(tn=2)),!1;var h=Error(r(520),{cause:o});if(h=oi(h,a),Ao===null?Ao=[h]:Ao.push(h),tn!==4&&(tn=2),n===null)return!0;o=oi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Mf(a.stateNode,o,t),Qc(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ga===null||!Ga.has(h))))return a.flags|=65536,c&=-c,a.lanes|=c,c=fg(c),hg(c,t,a,o),Qc(a,c),!1}a=a.return}while(a!==null);return!1}var Ef=Error(r(461)),cn=!1;function Rn(t,n,a,o){n.child=t===null?gm(n,null,a,o):xr(n,t.child,a,o)}function dg(t,n,a,o,c){a=a.render;var h=n.ref;if("ref"in o){var x={};for(var A in o)A!=="ref"&&(x[A]=o[A])}else x=o;return mr(n),o=af(t,n,a,x,h,c),A=rf(),t!==null&&!cn?(sf(t,n,c),ta(t,n,c)):(St&&A&&zc(n),n.flags|=1,Rn(t,n,o,c),n.child)}function pg(t,n,a,o,c){if(t===null){var h=a.type;return typeof h=="function"&&!Pc(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,mg(t,n,h,o,c)):(t=Tl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Uf(t,c)){var x=h.memoizedProps;if(a=a.compare,a=a!==null?a:io,a(x,o)&&t.ref===n.ref)return ta(t,n,c)}return n.flags|=1,t=Zi(h,o),t.ref=n.ref,t.return=n,n.child=t}function mg(t,n,a,o,c){if(t!==null){var h=t.memoizedProps;if(io(h,o)&&t.ref===n.ref)if(cn=!1,n.pendingProps=o=h,Uf(t,c))(t.flags&131072)!==0&&(cn=!0);else return n.lanes=t.lanes,ta(t,n,c)}return bf(t,n,a,o,c)}function gg(t,n,a,o){var c=o.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,t!==null){for(o=n.child=t.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~h}else o=0,n.child=null;return _g(t,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&wl(n,h!==null?h.cachePool:null),h!==null?xm(n,h):$c(),Sm(n);else return o=n.lanes=536870912,_g(t,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(wl(n,h.cachePool),xm(n,h),Ba(),n.memoizedState=null):(t!==null&&wl(n,null),$c(),Ba());return Rn(t,n,c,a),n.child}function xo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function _g(t,n,a,o,c){var h=Yc();return h=h===null?null:{parent:ln._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},t!==null&&wl(n,null),$c(),Sm(n),t!==null&&$r(t,n,o,!0),n.childLanes=c,null}function Wl(t,n){return n=Yl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function vg(t,n,a){return xr(n,t.child,null,a),t=Wl(n,n.pendingProps),t.flags|=2,Qn(n),n.memoizedState=null,t}function MS(t,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(St){if(o.mode==="hidden")return t=Wl(n,o),n.lanes=536870912,xo(null,t);if(tf(n),(t=qt)?(t=D0(t,ci),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=tm(t),a.return=n,n.child=a,Tn=n,qt=null)):t=null,t===null)throw Ua(n);return n.lanes=536870912,null}return Wl(n,o)}var h=t.memoizedState;if(h!==null){var x=h.dehydrated;if(tf(n),c)if(n.flags&256)n.flags&=-257,n=vg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(cn||$r(t,n,a,!1),c=(a&t.childLanes)!==0,cn||c){if(o=Xt,o!==null&&(x=zr(o,a),x!==0&&x!==h.retryLane))throw h.retryLane=x,fr(t,x),Xn(o,t,x),Ef;nu(),n=vg(t,n,a)}else t=h.treeContext,qt=hi(x.nextSibling),Tn=n,St=!0,Da=null,ci=!1,t!==null&&am(n,t),n=Wl(n,o),n.flags|=4096;return n}return t=Zi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ql(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function bf(t,n,a,o,c){return mr(n),a=af(t,n,a,o,void 0,c),o=rf(),t!==null&&!cn?(sf(t,n,c),ta(t,n,c)):(St&&o&&zc(n),n.flags|=1,Rn(t,n,a,c),n.child)}function xg(t,n,a,o,c,h){return mr(n),n.updateQueue=null,a=Mm(n,o,a,c),ym(t),o=rf(),t!==null&&!cn?(sf(t,n,h),ta(t,n,h)):(St&&o&&zc(n),n.flags|=1,Rn(t,n,a,h),n.child)}function Sg(t,n,a,o,c){if(mr(n),n.stateNode===null){var h=Zr,x=a.contextType;typeof x=="object"&&x!==null&&(h=An(x)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=yf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Zc(n),x=a.contextType,h.context=typeof x=="object"&&x!==null?An(x):Zr,h.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Sf(n,a,x,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&yf.enqueueReplaceState(h,h.state,null),po(n,o,h,c),ho(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var A=n.memoizedProps,I=yr(a,A);h.props=I;var Q=h.context,he=a.contextType;x=Zr,typeof he=="object"&&he!==null&&(x=An(he));var ge=a.getDerivedStateFromProps;he=typeof ge=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,he||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||Q!==x)&&sg(n,h,o,x),Na=!1;var $=n.memoizedState;h.state=$,po(n,o,h,c),ho(),Q=n.memoizedState,A||$!==Q||Na?(typeof ge=="function"&&(Sf(n,a,ge,o),Q=n.memoizedState),(I=Na||rg(n,a,I,o,$,Q,x))?(he||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=Q),h.props=o,h.state=Q,h.context=x,o=I):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Kc(t,n),x=n.memoizedProps,he=yr(a,x),h.props=he,ge=n.pendingProps,$=h.context,Q=a.contextType,I=Zr,typeof Q=="object"&&Q!==null&&(I=An(Q)),A=a.getDerivedStateFromProps,(Q=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==ge||$!==I)&&sg(n,h,o,I),Na=!1,$=n.memoizedState,h.state=$,po(n,o,h,c),ho();var oe=n.memoizedState;x!==ge||$!==oe||Na||t!==null&&t.dependencies!==null&&Rl(t.dependencies)?(typeof A=="function"&&(Sf(n,a,A,o),oe=n.memoizedState),(he=Na||rg(n,a,he,o,$,oe,I)||t!==null&&t.dependencies!==null&&Rl(t.dependencies))?(Q||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,oe,I),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,oe,I)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=oe),h.props=o,h.state=oe,h.context=I,o=he):(typeof h.componentDidUpdate!="function"||x===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,ql(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=xr(n,t.child,null,c),n.child=xr(n,null,a,c)):Rn(t,n,a,c),n.memoizedState=h.state,t=n.child):t=ta(t,n,c),t}function yg(t,n,a,o){return dr(),n.flags|=256,Rn(t,n,a,o),n.child}var Tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Af(t){return{baseLanes:t,cachePool:cm()}}function Rf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=$n),t}function Mg(t,n,a){var o=n.pendingProps,c=!1,h=(n.flags&128)!==0,x;if((x=h)||(x=t!==null&&t.memoizedState===null?!1:(an.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(St){if(c?Fa(n):Ba(),(t=qt)?(t=D0(t,ci),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=tm(t),a.return=n,n.child=a,Tn=n,qt=null)):t=null,t===null)throw Ua(n);return uh(t)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,c?(Ba(),c=n.mode,A=Yl({mode:"hidden",children:A},c),o=hr(o,c,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Af(a),o.childLanes=Rf(t,x,a),n.memoizedState=Tf,xo(null,o)):(Fa(n),Cf(n,A))}var I=t.memoizedState;if(I!==null&&(A=I.dehydrated,A!==null)){if(h)n.flags&256?(Fa(n),n.flags&=-257,n=wf(t,n,a)):n.memoizedState!==null?(Ba(),n.child=t.child,n.flags|=128,n=null):(Ba(),A=o.fallback,c=n.mode,o=Yl({mode:"visible",children:o.children},c),A=hr(A,c,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,xr(n,t.child,null,a),o=n.child,o.memoizedState=Af(a),o.childLanes=Rf(t,x,a),n.memoizedState=Tf,n=xo(null,o));else if(Fa(n),uh(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var Q=x.dgst;x=Q,o=Error(r(419)),o.stack="",o.digest=x,so({value:o,source:null,stack:null}),n=wf(t,n,a)}else if(cn||$r(t,n,a,!1),x=(a&t.childLanes)!==0,cn||x){if(x=Xt,x!==null&&(o=zr(x,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,fr(t,o),Xn(x,t,o),Ef;lh(A)||nu(),n=wf(t,n,a)}else lh(A)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,qt=hi(A.nextSibling),Tn=n,St=!0,Da=null,ci=!1,t!==null&&am(n,t),n=Cf(n,o.children),n.flags|=4096);return n}return c?(Ba(),A=o.fallback,c=n.mode,I=t.child,Q=I.sibling,o=Zi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,Q!==null?A=Zi(Q,A):(A=hr(A,c,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,xo(null,o),o=n.child,A=t.child.memoizedState,A===null?A=Af(a):(c=A.cachePool,c!==null?(I=ln._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=cm(),A={baseLanes:A.baseLanes|a,cachePool:c}),o.memoizedState=A,o.childLanes=Rf(t,x,a),n.memoizedState=Tf,xo(t.child,o)):(Fa(n),a=t.child,t=a.sibling,a=Zi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Cf(t,n){return n=Yl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Yl(t,n){return t=Zn(22,t,null,n),t.lanes=0,t}function wf(t,n,a){return xr(n,t.child,null,a),t=Cf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Eg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),kc(t.return,n,a)}function Df(t,n,a,o,c,h){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:h}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=c,x.treeForkCount=h)}function bg(t,n,a){var o=n.pendingProps,c=o.revealOrder,h=o.tail;o=o.children;var x=an.current,A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,_e(an,x),Rn(t,n,o,a),o=St?ro:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Eg(t,a,n);else if(t.tag===19)Eg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Pl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Df(n,!1,c,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Pl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Df(n,!0,a,null,h,o);break;case"together":Df(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ta(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ha|=n.lanes,(a&n.childLanes)===0)if(t!==null){if($r(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Zi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Zi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Uf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Rl(t)))}function ES(t,n,a){switch(n.tag){case 3:De(n,n.stateNode.containerInfo),La(n,ln,t.memoizedState.cache),dr();break;case 27:case 5:Ge(n);break;case 4:De(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,tf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Mg(t,n,a):(Fa(n),t=ta(t,n,a),t!==null?t.sibling:null);Fa(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||($r(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return bg(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),_e(an,an.current),o)break;return null;case 22:return n.lanes=0,gg(t,n,a,n.pendingProps);case 24:La(n,ln,t.memoizedState.cache)}return ta(t,n,a)}function Tg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!Uf(t,a)&&(n.flags&128)===0)return cn=!1,ES(t,n,a);cn=(t.flags&131072)!==0}else cn=!1,St&&(n.flags&1048576)!==0&&im(n,ro,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=_r(n.elementType),n.type=t,typeof t=="function")Pc(t)?(o=yr(t,o),n.tag=1,n=Sg(null,n,t,o,a)):(n.tag=0,n=bf(null,n,t,o,a));else{if(t!=null){var c=t.$$typeof;if(c===O){n.tag=11,n=dg(null,n,t,o,a);break e}else if(c===P){n.tag=14,n=pg(null,n,t,o,a);break e}}throw n=pe(t)||t,Error(r(306,n,""))}}return n;case 0:return bf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=yr(o,n.pendingProps),Sg(t,n,o,c,a);case 3:e:{if(De(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;c=h.element,Kc(t,n),po(n,o,null,a);var x=n.memoizedState;if(o=x.cache,La(n,ln,o),o!==h.cache&&Xc(n,[ln],a,!0),ho(),o=x.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=yg(t,n,o,a);break e}else if(o!==c){c=oi(Error(r(424)),n),so(c),n=yg(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,qt=hi(t.firstChild),Tn=n,St=!0,Da=null,ci=!0,a=gm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(dr(),o===c){n=ta(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return ql(t,n),t===null?(a=F0(n.type,null,n.pendingProps,null))?n.memoizedState=a:St||(a=n.type,t=n.pendingProps,o=uu(ee.current).createElement(a),o[on]=n,o[xn]=t,Cn(o,a,t),R(o),n.stateNode=o):n.memoizedState=F0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ge(n),t===null&&St&&(o=n.stateNode=N0(n.type,n.pendingProps,ee.current),Tn=n,ci=!0,c=qt,Wa(n.type)?(ch=c,qt=hi(o.firstChild)):qt=c),Rn(t,n,n.pendingProps.children,a),ql(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&St&&((c=o=qt)&&(o=$S(o,n.type,n.pendingProps,ci),o!==null?(n.stateNode=o,Tn=n,qt=hi(o.firstChild),ci=!1,c=!0):c=!1),c||Ua(n)),Ge(n),c=n.type,h=n.pendingProps,x=t!==null?t.memoizedProps:null,o=h.children,rh(c,h)?o=null:x!==null&&rh(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=af(t,n,pS,null,null,a),Oo._currentValue=c),ql(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&St&&((t=a=qt)&&(a=ey(a,n.pendingProps,ci),a!==null?(n.stateNode=a,Tn=n,qt=null,t=!0):t=!1),t||Ua(n)),null;case 13:return Mg(t,n,a);case 4:return De(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=xr(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return dg(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,La(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,mr(n),c=An(c),o=o(c),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return pg(t,n,n.type,n.pendingProps,a);case 15:return mg(t,n,n.type,n.pendingProps,a);case 19:return bg(t,n,a);case 31:return MS(t,n,a);case 22:return gg(t,n,a,n.pendingProps);case 24:return mr(n),o=An(ln),t===null?(c=Yc(),c===null&&(c=Xt,h=Wc(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=a),c=h),n.memoizedState={parent:o,cache:c},Zc(n),La(n,ln,c)):((t.lanes&a)!==0&&(Kc(t,n),po(n,null,null,a),ho()),c=t.memoizedState,h=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),La(n,ln,o)):(o=h.cache,La(n,ln,o),o!==c.cache&&Xc(n,[ln],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function na(t){t.flags|=4}function Lf(t,n,a,o,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Jg())t.flags|=8192;else throw vr=Ul,jc}else t.flags&=-16777217}function Ag(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!G0(n))if(Jg())t.flags|=8192;else throw vr=Ul,jc}function jl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Pt():536870912,t.lanes|=n,fs|=n)}function So(t,n){if(!St)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Yt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function bS(t,n,a){var o=n.pendingProps;switch(Ic(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(n),null;case 1:return Yt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ji(ln),Xe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Jr(n)?na(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Gc())),Yt(n),null;case 26:var c=n.type,h=n.memoizedState;return t===null?(na(n),h!==null?(Yt(n),Ag(n,h)):(Yt(n),Lf(n,c,null,o,a))):h?h!==t.memoizedState?(na(n),Yt(n),Ag(n,h)):(Yt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&na(n),Yt(n),Lf(n,c,t,o,a)),null;case 27:if(dt(n),a=ee.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&na(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}t=Ae.current,Jr(n)?rm(n):(t=N0(c,o,a),n.stateNode=t,na(n))}return Yt(n),null;case 5:if(dt(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&na(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}if(h=Ae.current,Jr(n))rm(n);else{var x=uu(ee.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?x.createElement(c,{is:o.is}):x.createElement(c)}}h[on]=n,h[xn]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=h;e:switch(Cn(h,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&na(n)}}return Yt(n),Lf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&na(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ee.current,Jr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Tn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||M0(t.nodeValue,a)),t||Ua(n,!0)}else t=uu(t).createTextNode(o),t[on]=n,n.stateNode=t}return Yt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Jr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[on]=n}else dr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),t=!1}else a=Gc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Yt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Jr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[on]=n}else dr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),c=!1}else c=Gc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==c&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),jl(n,n.updateQueue),Yt(n),null);case 4:return Xe(),t===null&&eh(n.stateNode.containerInfo),Yt(n),null;case 10:return Ji(n.type),Yt(n),null;case 19:if(ne(an),o=n.memoizedState,o===null)return Yt(n),null;if(c=(n.flags&128)!==0,h=o.rendering,h===null)if(c)So(o,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Pl(t),h!==null){for(n.flags|=128,So(o,!1),t=h.updateQueue,n.updateQueue=t,jl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)em(a,t),a=a.sibling;return _e(an,an.current&1|2),St&&Ki(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&E()>$l&&(n.flags|=128,c=!0,So(o,!1),n.lanes=4194304)}else{if(!c)if(t=Pl(h),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,jl(n,t),So(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!St)return Yt(n),null}else 2*E()-o.renderingStartTime>$l&&a!==536870912&&(n.flags|=128,c=!0,So(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(t=o.last,t!==null?t.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=E(),t.sibling=null,a=an.current,_e(an,c?a&1|2:a&1),St&&Ki(n,o.treeForkCount),t):(Yt(n),null);case 22:case 23:return Qn(n),ef(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Yt(n),n.subtreeFlags&6&&(n.flags|=8192)):Yt(n),a=n.updateQueue,a!==null&&jl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ne(gr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ji(ln),Yt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function TS(t,n){switch(Ic(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ji(ln),Xe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return dt(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(r(340));dr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Qn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));dr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ne(an),null;case 4:return Xe(),null;case 10:return Ji(n.type),null;case 22:case 23:return Qn(n),ef(),t!==null&&ne(gr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ji(ln),null;case 25:return null;default:return null}}function Rg(t,n){switch(Ic(n),n.tag){case 3:Ji(ln),Xe();break;case 26:case 27:case 5:dt(n);break;case 4:Xe();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:ne(an);break;case 10:Ji(n.type);break;case 22:case 23:Qn(n),ef(),t!==null&&ne(gr);break;case 24:Ji(ln)}}function yo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var h=a.create,x=a.inst;o=h(),x.destroy=o}a=a.next}while(a!==c)}}catch(A){zt(n,n.return,A)}}function za(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var h=c.next;o=h;do{if((o.tag&t)===t){var x=o.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,c=n;var I=a,Q=A;try{Q()}catch(he){zt(c,I,he)}}}o=o.next}while(o!==h)}}catch(he){zt(n,n.return,he)}}function Cg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{vm(n,a)}catch(o){zt(t,t.return,o)}}}function wg(t,n,a){a.props=yr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){zt(t,n,o)}}function Mo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){zt(t,n,c)}}function Pi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){zt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){zt(t,n,c)}else a.current=null}function Dg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){zt(t,t.return,c)}}function Nf(t,n,a){try{var o=t.stateNode;YS(o,t.type,a,n),o[xn]=n}catch(c){zt(t,t.return,c)}}function Ug(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function Of(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ug(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi));else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Pf(t,n,a),t=t.sibling;t!==null;)Pf(t,n,a),t=t.sibling}function Zl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Zl(t,n,a),t=t.sibling;t!==null;)Zl(t,n,a),t=t.sibling}function Lg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Cn(n,o,a),n[on]=t,n[xn]=a}catch(h){zt(t,t.return,h)}}var ia=!1,fn=!1,Ff=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,_n=null;function AS(t,n){if(t=t.containerInfo,ih=gu,t=Wp(t),Cc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var x=0,A=-1,I=-1,Q=0,he=0,ge=t,$=null;t:for(;;){for(var oe;ge!==a||c!==0&&ge.nodeType!==3||(A=x+c),ge!==h||o!==0&&ge.nodeType!==3||(I=x+o),ge.nodeType===3&&(x+=ge.nodeValue.length),(oe=ge.firstChild)!==null;)$=ge,ge=oe;for(;;){if(ge===t)break t;if($===a&&++Q===c&&(A=x),$===h&&++he===o&&(I=x),(oe=ge.nextSibling)!==null)break;ge=$,$=ge.parentNode}ge=oe}a=A===-1||I===-1?null:{start:A,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(ah={focusedElem:t,selectionRange:a},gu=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,c=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var ke=yr(a.type,c);t=o.getSnapshotBeforeUpdate(ke,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){zt(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)oh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":oh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function Og(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ra(t,a),o&4&&yo(5,a);break;case 1:if(ra(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){zt(a,a.return,x)}else{var c=yr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){zt(a,a.return,x)}}o&64&&Cg(a),o&512&&Mo(a,a.return);break;case 3:if(ra(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{vm(t,n)}catch(x){zt(a,a.return,x)}}break;case 27:n===null&&o&4&&Lg(a);case 26:case 5:ra(t,a),n===null&&o&4&&Dg(a),o&512&&Mo(a,a.return);break;case 12:ra(t,a);break;case 31:ra(t,a),o&4&&Bg(t,a);break;case 13:ra(t,a),o&4&&zg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=PS.bind(null,a),ty(t,a))));break;case 22:if(o=a.memoizedState!==null||ia,!o){n=n!==null&&n.memoizedState!==null||fn,c=ia;var h=fn;ia=o,(fn=n)&&!h?sa(t,a,(a.subtreeFlags&8772)!==0):ra(t,a),ia=c,fn=h}break;case 30:break;default:ra(t,a)}}function Pg(t){var n=t.alternate;n!==null&&(t.alternate=null,Pg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Zs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Kt=null,Hn=!1;function aa(t,n,a){for(a=a.child;a!==null;)Fg(t,n,a),a=a.sibling}function Fg(t,n,a){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(Ee,a)}catch{}switch(a.tag){case 26:fn||Pi(a,n),aa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Pi(a,n);var o=Kt,c=Hn;Wa(a.type)&&(Kt=a.stateNode,Hn=!1),aa(t,n,a),Uo(a.stateNode),Kt=o,Hn=c;break;case 5:fn||Pi(a,n);case 6:if(o=Kt,c=Hn,Kt=null,aa(t,n,a),Kt=o,Hn=c,Kt!==null)if(Hn)try{(Kt.nodeType===9?Kt.body:Kt.nodeName==="HTML"?Kt.ownerDocument.body:Kt).removeChild(a.stateNode)}catch(h){zt(a,n,h)}else try{Kt.removeChild(a.stateNode)}catch(h){zt(a,n,h)}break;case 18:Kt!==null&&(Hn?(t=Kt,C0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),xs(t)):C0(Kt,a.stateNode));break;case 4:o=Kt,c=Hn,Kt=a.stateNode.containerInfo,Hn=!0,aa(t,n,a),Kt=o,Hn=c;break;case 0:case 11:case 14:case 15:za(2,a,n),fn||za(4,a,n),aa(t,n,a);break;case 1:fn||(Pi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&wg(a,n,o)),aa(t,n,a);break;case 21:aa(t,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,aa(t,n,a),fn=o;break;default:aa(t,n,a)}}function Bg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{xs(t)}catch(a){zt(n,n.return,a)}}}function zg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{xs(t)}catch(a){zt(n,n.return,a)}}function RS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Ng),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Ng),n;default:throw Error(r(435,t.tag))}}function Kl(t,n){var a=RS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=FS.bind(null,t,o);o.then(c,c)}})}function Gn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],h=t,x=n,A=x;e:for(;A!==null;){switch(A.tag){case 27:if(Wa(A.type)){Kt=A.stateNode,Hn=!1;break e}break;case 5:Kt=A.stateNode,Hn=!1;break e;case 3:case 4:Kt=A.stateNode.containerInfo,Hn=!0;break e}A=A.return}if(Kt===null)throw Error(r(160));Fg(h,x,c),Kt=null,Hn=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ig(n,t),n=n.sibling}var bi=null;function Ig(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Gn(n,t),Vn(t),o&4&&(za(3,t,t.return),yo(3,t),za(5,t,t.return));break;case 1:Gn(n,t),Vn(t),o&512&&(fn||a===null||Pi(a,a.return)),o&64&&ia&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=bi;if(Gn(n,t),Vn(t),o&512&&(fn||a===null||Pi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":h=c.getElementsByTagName("title")[0],(!h||h[sr]||h[on]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(o),c.head.insertBefore(h,c.querySelector("head > title"))),Cn(h,o,a),h[on]=t,R(h),o=h;break e;case"link":var x=I0("link","href",c).get(o+(a.href||""));if(x){for(var A=0;A<x.length;A++)if(h=x[A],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(A,1);break t}}h=c.createElement(o),Cn(h,o,a),c.head.appendChild(h);break;case"meta":if(x=I0("meta","content",c).get(o+(a.content||""))){for(A=0;A<x.length;A++)if(h=x[A],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(A,1);break t}}h=c.createElement(o),Cn(h,o,a),c.head.appendChild(h);break;default:throw Error(r(468,o))}h[on]=t,R(h),o=h}t.stateNode=o}else H0(c,t.type,t.stateNode);else t.stateNode=z0(c,o,t.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?H0(c,t.type,t.stateNode):z0(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Nf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,t),Vn(t),o&512&&(fn||a===null||Pi(a,a.return)),a!==null&&o&4&&Nf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,t),Vn(t),o&512&&(fn||a===null||Pi(a,a.return)),t.flags&32){c=t.stateNode;try{dn(c,"")}catch(ke){zt(t,t.return,ke)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,Nf(t,c,a!==null?a.memoizedProps:c)),o&1024&&(Ff=!0);break;case 6:if(Gn(n,t),Vn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ke){zt(t,t.return,ke)}}break;case 3:if(hu=null,c=bi,bi=cu(n.containerInfo),Gn(n,t),bi=c,Vn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{xs(n.containerInfo)}catch(ke){zt(t,t.return,ke)}Ff&&(Ff=!1,Hg(t));break;case 4:o=bi,bi=cu(t.stateNode.containerInfo),Gn(n,t),Vn(t),bi=o;break;case 12:Gn(n,t),Vn(t);break;case 31:Gn(n,t),Vn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 13:Gn(n,t),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Jl=E()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 22:c=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,Q=ia,he=fn;if(ia=Q||c,fn=he||I,Gn(n,t),fn=he,ia=Q,Vn(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||ia||fn||Mr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(h=I.stateNode,c)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=I.stateNode;var ge=I.memoizedProps.style,$=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;A.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(ke){zt(I,I.return,ke)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(ke){zt(I,I.return,ke)}}}else if(n.tag===18){if(a===null){I=n;try{var oe=I.stateNode;c?w0(oe,!0):w0(I.stateNode,!1)}catch(ke){zt(I,I.return,ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Kl(t,a))));break;case 19:Gn(n,t),Vn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 30:break;case 21:break;default:Gn(n,t),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Ug(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,h=Of(t);Zl(t,h,c);break;case 5:var x=a.stateNode;a.flags&32&&(dn(x,""),a.flags&=-33);var A=Of(t);Zl(t,A,x);break;case 3:case 4:var I=a.stateNode.containerInfo,Q=Of(t);Pf(t,Q,I);break;default:throw Error(r(161))}}catch(he){zt(t,t.return,he)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Hg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Hg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ra(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Og(t,n.alternate,n),n=n.sibling}function Mr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:za(4,n,n.return),Mr(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&wg(n,n.return,a),Mr(n);break;case 27:Uo(n.stateNode);case 26:case 5:Pi(n,n.return),Mr(n);break;case 22:n.memoizedState===null&&Mr(n);break;case 30:Mr(n);break;default:Mr(n)}t=t.sibling}}function sa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,h=n,x=h.flags;switch(h.tag){case 0:case 11:case 15:sa(c,h,a),yo(4,h);break;case 1:if(sa(c,h,a),o=h,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){zt(o,o.return,Q)}if(o=h,c=o.updateQueue,c!==null){var A=o.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)_m(I[c],A)}catch(Q){zt(o,o.return,Q)}}a&&x&64&&Cg(h),Mo(h,h.return);break;case 27:Lg(h);case 26:case 5:sa(c,h,a),a&&o===null&&x&4&&Dg(h),Mo(h,h.return);break;case 12:sa(c,h,a);break;case 31:sa(c,h,a),a&&x&4&&Bg(c,h);break;case 13:sa(c,h,a),a&&x&4&&zg(c,h);break;case 22:h.memoizedState===null&&sa(c,h,a),Mo(h,h.return);break;case 30:break;default:sa(c,h,a)}n=n.sibling}}function Bf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&oo(a))}function zf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&oo(t))}function Ti(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Gg(t,n,a,o),n=n.sibling}function Gg(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(t,n,a,o),c&2048&&yo(9,n);break;case 1:Ti(t,n,a,o);break;case 3:Ti(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&oo(t)));break;case 12:if(c&2048){Ti(t,n,a,o),t=n.stateNode;try{var h=n.memoizedProps,x=h.id,A=h.onPostCommit;typeof A=="function"&&A(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){zt(n,n.return,I)}}else Ti(t,n,a,o);break;case 31:Ti(t,n,a,o);break;case 13:Ti(t,n,a,o);break;case 23:break;case 22:h=n.stateNode,x=n.alternate,n.memoizedState!==null?h._visibility&2?Ti(t,n,a,o):Eo(t,n):h._visibility&2?Ti(t,n,a,o):(h._visibility|=2,ls(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Bf(x,n);break;case 24:Ti(t,n,a,o),c&2048&&zf(n.alternate,n);break;default:Ti(t,n,a,o)}}function ls(t,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,x=n,A=a,I=o,Q=x.flags;switch(x.tag){case 0:case 11:case 15:ls(h,x,A,I,c),yo(8,x);break;case 23:break;case 22:var he=x.stateNode;x.memoizedState!==null?he._visibility&2?ls(h,x,A,I,c):Eo(h,x):(he._visibility|=2,ls(h,x,A,I,c)),c&&Q&2048&&Bf(x.alternate,x);break;case 24:ls(h,x,A,I,c),c&&Q&2048&&zf(x.alternate,x);break;default:ls(h,x,A,I,c)}n=n.sibling}}function Eo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:Eo(a,o),c&2048&&Bf(o.alternate,o);break;case 24:Eo(a,o),c&2048&&zf(o.alternate,o);break;default:Eo(a,o)}n=n.sibling}}var bo=8192;function us(t,n,a){if(t.subtreeFlags&bo)for(t=t.child;t!==null;)Vg(t,n,a),t=t.sibling}function Vg(t,n,a){switch(t.tag){case 26:us(t,n,a),t.flags&bo&&t.memoizedState!==null&&dy(a,bi,t.memoizedState,t.memoizedProps);break;case 5:us(t,n,a);break;case 3:case 4:var o=bi;bi=cu(t.stateNode.containerInfo),us(t,n,a),bi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=bo,bo=16777216,us(t,n,a),bo=o):us(t,n,a));break;default:us(t,n,a)}}function kg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function To(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,Wg(o,t)}kg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Xg(t),t=t.sibling}function Xg(t){switch(t.tag){case 0:case 11:case 15:To(t),t.flags&2048&&za(9,t,t.return);break;case 3:To(t);break;case 12:To(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ql(t)):To(t);break;default:To(t)}}function Ql(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,Wg(o,t)}kg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:za(8,n,n.return),Ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ql(n));break;default:Ql(n)}t=t.sibling}}function Wg(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:oo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,_n=o;else e:for(a=t;_n!==null;){o=_n;var c=o.sibling,h=o.return;if(Pg(o),o===a){_n=null;break e}if(c!==null){c.return=h,_n=c;break e}_n=h}}}var CS={getCacheForType:function(t){var n=An(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(ln).controller.signal}},wS=typeof WeakMap=="function"?WeakMap:Map,Ut=0,Xt=null,mt=null,vt=0,Bt=0,Jn=null,Ia=!1,cs=!1,If=!1,oa=0,tn=0,Ha=0,Er=0,Hf=0,$n=0,fs=0,Ao=null,kn=null,Gf=!1,Jl=0,qg=0,$l=1/0,eu=null,Ga=null,pn=0,Va=null,hs=null,la=0,Vf=0,kf=null,Yg=null,Ro=0,Xf=null;function ei(){return(Ut&2)!==0&&vt!==0?vt&-vt:z.T!==null?Kf():Ys()}function jg(){if($n===0)if((vt&536870912)===0||St){var t=Te;Te<<=1,(Te&3932160)===0&&(Te=262144),$n=t}else $n=536870912;return t=Kn.current,t!==null&&(t.flags|=32),$n}function Xn(t,n,a){(t===Xt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(ds(t,0),ka(t,vt,$n,!1)),Dn(t,a),((Ut&2)===0||t!==Xt)&&(t===Xt&&((Ut&2)===0&&(Er|=a),tn===4&&ka(t,vt,$n,!1)),Fi(t))}function Zg(t,n,a){if((Ut&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Re(t,n),c=o?LS(t,n):qf(t,n,!0),h=o;do{if(c===0){cs&&!o&&ka(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!DS(a)){c=qf(t,n,!1),h=!1;continue}if(c===2){if(h=n,t.errorRecoveryDisabledLanes&h)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var A=t;c=Ao;var I=A.current.memoizedState.isDehydrated;if(I&&(ds(A,x).flags|=256),x=qf(A,x,!1),x!==2){if(If&&!I){A.errorRecoveryDisabledLanes|=h,Er|=h,c=4;break e}h=kn,kn=c,h!==null&&(kn===null?kn=h:kn.push.apply(kn,h))}c=x}if(h=!1,c!==2)continue}}if(c===1){ds(t,0),ka(t,n,0,!0);break}e:{switch(o=t,h=c,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ka(o,n,$n,!Ia);break e;case 2:kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Jl+300-E(),10<c)){if(ka(o,n,$n,!Ia),ve(o,0,!0)!==0)break e;la=n,o.timeoutHandle=A0(Kg.bind(null,o,a,kn,eu,Gf,n,$n,Er,fs,Ia,h,"Throttled",-0,0),c);break e}Kg(o,a,kn,eu,Gf,n,$n,Er,fs,Ia,h,null,-0,0)}}break}while(!0);Fi(t)}function Kg(t,n,a,o,c,h,x,A,I,Q,he,ge,$,oe){if(t.timeoutHandle=-1,ge=n.subtreeFlags,ge&8192||(ge&16785408)===16785408){ge={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},Vg(n,h,ge);var ke=(h&62914560)===h?Jl-E():(h&4194048)===h?qg-E():0;if(ke=py(ge,ke),ke!==null){la=h,t.cancelPendingCommit=ke(a0.bind(null,t,n,h,a,o,c,x,A,I,he,ge,null,$,oe)),ka(t,h,x,!Q);return}}a0(t,n,h,a,o,c,x,A,I)}function DS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],h=c.getSnapshot;c=c.value;try{if(!jn(h(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(t,n,a,o){n&=~Hf,n&=~Er,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var h=31-Fe(c),x=1<<h;o[h]=-1,c&=~x}a!==0&&hl(t,a,n)}function tu(){return(Ut&6)===0?(Co(0),!1):!0}function Wf(){if(mt!==null){if(Bt===0)var t=mt.return;else t=mt,Qi=pr=null,of(t),is=null,uo=0,t=mt;for(;t!==null;)Rg(t.alternate,t),t=t.return;mt=null}}function ds(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,KS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),la=0,Wf(),Xt=t,mt=a=Zi(t.current,null),vt=n,Bt=0,Jn=null,Ia=!1,cs=Re(t,n),If=!1,fs=$n=Hf=Er=Ha=tn=0,kn=Ao=null,Gf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Fe(o),h=1<<c;n|=t[c],o&=~h}return oa=n,Ml(),a}function Qg(t,n){lt=null,z.H=vo,n===ns||n===Dl?(n=dm(),Bt=3):n===jc?(n=dm(),Bt=4):Bt=n===Ef?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,mt===null&&(tn=1,Xl(t,oi(n,t.current)))}function Jg(){var t=Kn.current;return t===null?!0:(vt&4194048)===vt?fi===null:(vt&62914560)===vt||(vt&536870912)!==0?t===fi:!1}function $g(){var t=z.H;return z.H=vo,t===null?vo:t}function e0(){var t=z.A;return z.A=CS,t}function nu(){tn=4,Ia||(vt&4194048)!==vt&&Kn.current!==null||(cs=!0),(Ha&134217727)===0&&(Er&134217727)===0||Xt===null||ka(Xt,vt,$n,!1)}function qf(t,n,a){var o=Ut;Ut|=2;var c=$g(),h=e0();(Xt!==t||vt!==n)&&(eu=null,ds(t,n)),n=!1;var x=tn;e:do try{if(Bt!==0&&mt!==null){var A=mt,I=Jn;switch(Bt){case 8:Wf(),x=6;break e;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var Q=Bt;if(Bt=0,Jn=null,ps(t,A,I,Q),a&&cs){x=0;break e}break;default:Q=Bt,Bt=0,Jn=null,ps(t,A,I,Q)}}US(),x=tn;break}catch(he){Qg(t,he)}while(!0);return n&&t.shellSuspendCounter++,Qi=pr=null,Ut=o,z.H=c,z.A=h,mt===null&&(Xt=null,vt=0,Ml()),x}function US(){for(;mt!==null;)t0(mt)}function LS(t,n){var a=Ut;Ut|=2;var o=$g(),c=e0();Xt!==t||vt!==n?(eu=null,$l=E()+500,ds(t,n)):cs=Re(t,n);e:do try{if(Bt!==0&&mt!==null){n=mt;var h=Jn;t:switch(Bt){case 1:Bt=0,Jn=null,ps(t,n,h,1);break;case 2:case 9:if(fm(h)){Bt=0,Jn=null,n0(n);break}n=function(){Bt!==2&&Bt!==9||Xt!==t||(Bt=7),Fi(t)},h.then(n,n);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:fm(h)?(Bt=0,Jn=null,n0(n)):(Bt=0,Jn=null,ps(t,n,h,7));break;case 5:var x=null;switch(mt.tag){case 26:x=mt.memoizedState;case 5:case 27:var A=mt;if(x?G0(x):A.stateNode.complete){Bt=0,Jn=null;var I=A.sibling;if(I!==null)mt=I;else{var Q=A.return;Q!==null?(mt=Q,iu(Q)):mt=null}break t}}Bt=0,Jn=null,ps(t,n,h,5);break;case 6:Bt=0,Jn=null,ps(t,n,h,6);break;case 8:Wf(),tn=6;break e;default:throw Error(r(462))}}NS();break}catch(he){Qg(t,he)}while(!0);return Qi=pr=null,z.H=o,z.A=c,Ut=a,mt!==null?0:(Xt=null,vt=0,Ml(),tn)}function NS(){for(;mt!==null&&!je();)t0(mt)}function t0(t){var n=Tg(t.alternate,t,oa);t.memoizedProps=t.pendingProps,n===null?iu(t):mt=n}function n0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=xg(a,n,n.pendingProps,n.type,void 0,vt);break;case 11:n=xg(a,n,n.pendingProps,n.type.render,n.ref,vt);break;case 5:of(n);default:Rg(a,n),n=mt=em(n,oa),n=Tg(a,n,oa)}t.memoizedProps=t.pendingProps,n===null?iu(t):mt=n}function ps(t,n,a,o){Qi=pr=null,of(n),is=null,uo=0;var c=n.return;try{if(yS(t,c,n,a,vt)){tn=1,Xl(t,oi(a,t.current)),mt=null;return}}catch(h){if(c!==null)throw mt=c,h;tn=1,Xl(t,oi(a,t.current)),mt=null;return}n.flags&32768?(St||o===1?t=!0:cs||(vt&536870912)!==0?t=!1:(Ia=t=!0,(o===2||o===9||o===3||o===6)&&(o=Kn.current,o!==null&&o.tag===13&&(o.flags|=16384))),i0(n,t)):iu(n)}function iu(t){var n=t;do{if((n.flags&32768)!==0){i0(n,Ia);return}t=n.return;var a=bS(n.alternate,n,oa);if(a!==null){mt=a;return}if(n=n.sibling,n!==null){mt=n;return}mt=n=t}while(n!==null);tn===0&&(tn=5)}function i0(t,n){do{var a=TS(t.alternate,t);if(a!==null){a.flags&=32767,mt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){mt=t;return}mt=t=a}while(t!==null);tn=6,mt=null}function a0(t,n,a,o,c,h,x,A,I){t.cancelPendingCommit=null;do au();while(pn!==0);if((Ut&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=Nc,Si(t,a,h,x,A,I),t===Xt&&(mt=Xt=null,vt=0),hs=n,Va=t,la=a,Vf=h,kf=c,Yg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,BS(le,function(){return u0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,c=H.p,H.p=2,x=Ut,Ut|=4;try{AS(t,n,a)}finally{Ut=x,H.p=c,z.T=o}}pn=1,r0(),s0(),o0()}}function r0(){if(pn===1){pn=0;var t=Va,n=hs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=H.p;H.p=2;var c=Ut;Ut|=4;try{Ig(n,t);var h=ah,x=Wp(t.containerInfo),A=h.focusedElem,I=h.selectionRange;if(x!==A&&A&&A.ownerDocument&&Xp(A.ownerDocument.documentElement,A)){if(I!==null&&Cc(A)){var Q=I.start,he=I.end;if(he===void 0&&(he=Q),"selectionStart"in A)A.selectionStart=Q,A.selectionEnd=Math.min(he,A.value.length);else{var ge=A.ownerDocument||document,$=ge&&ge.defaultView||window;if($.getSelection){var oe=$.getSelection(),ke=A.textContent.length,tt=Math.min(I.start,ke),Vt=I.end===void 0?tt:Math.min(I.end,ke);!oe.extend&&tt>Vt&&(x=Vt,Vt=tt,tt=x);var Y=kp(A,tt),V=kp(A,Vt);if(Y&&V&&(oe.rangeCount!==1||oe.anchorNode!==Y.node||oe.anchorOffset!==Y.offset||oe.focusNode!==V.node||oe.focusOffset!==V.offset)){var K=ge.createRange();K.setStart(Y.node,Y.offset),oe.removeAllRanges(),tt>Vt?(oe.addRange(K),oe.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),oe.addRange(K))}}}}for(ge=[],oe=A;oe=oe.parentNode;)oe.nodeType===1&&ge.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ge.length;A++){var me=ge[A];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}gu=!!ih,ah=ih=null}finally{Ut=c,H.p=o,z.T=a}}t.current=n,pn=2}}function s0(){if(pn===2){pn=0;var t=Va,n=hs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=H.p;H.p=2;var c=Ut;Ut|=4;try{Og(t,n.alternate,n)}finally{Ut=c,H.p=o,z.T=a}}pn=3}}function o0(){if(pn===4||pn===3){pn=0,L();var t=Va,n=hs,a=la,o=Yg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,hs=Va=null,l0(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ga=null),Ir(a),n=n.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(Ee,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,c=H.p,H.p=2,z.T=null;try{for(var h=t.onRecoverableError,x=0;x<o.length;x++){var A=o[x];h(A.value,{componentStack:A.stack})}}finally{z.T=n,H.p=c}}(la&3)!==0&&au(),Fi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Xf?Ro++:(Ro=0,Xf=t):Ro=0,Co(0)}}function l0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,oo(n)))}function au(){return r0(),s0(),o0(),u0()}function u0(){if(pn!==5)return!1;var t=Va,n=Vf;Vf=0;var a=Ir(la),o=z.T,c=H.p;try{H.p=32>a?32:a,z.T=null,a=kf,kf=null;var h=Va,x=la;if(pn=0,hs=Va=null,la=0,(Ut&6)!==0)throw Error(r(331));var A=Ut;if(Ut|=4,Xg(h.current),Gg(h,h.current,x,a),Ut=A,Co(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(Ee,h)}catch{}return!0}finally{H.p=c,z.T=o,l0(t,n)}}function c0(t,n,a){n=oi(a,n),n=Mf(t.stateNode,n,2),t=Pa(t,n,2),t!==null&&(Dn(t,2),Fi(t))}function zt(t,n,a){if(t.tag===3)c0(t,t,a);else for(;n!==null;){if(n.tag===3){c0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ga===null||!Ga.has(o))){t=oi(a,t),a=fg(2),o=Pa(n,a,2),o!==null&&(hg(a,o,n,t),Dn(o,2),Fi(o));break}}n=n.return}}function Yf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new wS;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(If=!0,c.add(a),t=OS.bind(null,t,n,a),n.then(t,t))}function OS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xt===t&&(vt&a)===a&&(tn===4||tn===3&&(vt&62914560)===vt&&300>E()-Jl?(Ut&2)===0&&ds(t,0):Hf|=a,fs===vt&&(fs=0)),Fi(t)}function f0(t,n){n===0&&(n=Pt()),t=fr(t,n),t!==null&&(Dn(t,n),Fi(t))}function PS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),f0(t,a)}function FS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),f0(t,a)}function BS(t,n){return Mt(t,n)}var ru=null,ms=null,jf=!1,su=!1,Zf=!1,Xa=0;function Fi(t){t!==ms&&t.next===null&&(ms===null?ru=ms=t:ms=ms.next=t),su=!0,jf||(jf=!0,IS())}function Co(t,n){if(!Zf&&su){Zf=!0;do for(var a=!1,o=ru;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var h=0;else{var x=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-Fe(42|t)+1)-1,h&=c&~(x&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,m0(o,h))}else h=vt,h=ve(o,o===Xt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Re(o,h)||(a=!0,m0(o,h));o=o.next}while(a);Zf=!1}}function zS(){h0()}function h0(){su=jf=!1;var t=0;Xa!==0&&ZS()&&(t=Xa);for(var n=E(),a=null,o=ru;o!==null;){var c=o.next,h=d0(o,n);h===0?(o.next=null,a===null?ru=c:a.next=c,c===null&&(ms=a)):(a=o,(t!==0||(h&3)!==0)&&(su=!0)),o=c}pn!==0&&pn!==5||Co(t),Xa!==0&&(Xa=0)}function d0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var x=31-Fe(h),A=1<<x,I=c[x];I===-1?((A&a)===0||(A&o)!==0)&&(c[x]=it(A,n)):I<=n&&(t.expiredLanes|=A),h&=~A}if(n=Xt,a=vt,a=ve(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Lt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Re(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Lt(o),Ir(a)){case 2:case 8:a=xe;break;case 32:a=le;break;case 268435456:a=Ce;break;default:a=le}return o=p0.bind(null,t),a=Mt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Lt(o),t.callbackPriority=2,t.callbackNode=null,2}function p0(t,n){if(pn!==0&&pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(au()&&t.callbackNode!==a)return null;var o=vt;return o=ve(t,t===Xt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Zg(t,o,n),d0(t,E()),t.callbackNode!=null&&t.callbackNode===a?p0.bind(null,t):null)}function m0(t,n){if(au())return null;Zg(t,n,!0)}function IS(){QS(function(){(Ut&6)!==0?Mt(de,zS):h0()})}function Kf(){if(Xa===0){var t=es;t===0&&(t=Ne,Ne<<=1,(Ne&261888)===0&&(Ne=256)),Xa=t}return Xa}function g0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:pl(""+t)}function _0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function HS(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var h=g0((c[xn]||null).action),x=o.submitter;x&&(n=(n=x[xn]||null)?g0(n.formAction):x.getAttribute("formAction"),n!==null&&(h=n,x=null));var A=new vl("action","action",null,o,c);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var I=x?_0(c,x):new FormData(c);gf(a,{pending:!0,data:I,method:c.method,action:h},null,I)}}else typeof h=="function"&&(A.preventDefault(),I=x?_0(c,x):new FormData(c),gf(a,{pending:!0,data:I,method:c.method,action:h},h,I))},currentTarget:c}]})}}for(var Qf=0;Qf<Lc.length;Qf++){var Jf=Lc[Qf],GS=Jf.toLowerCase(),VS=Jf[0].toUpperCase()+Jf.slice(1);Ei(GS,"on"+VS)}Ei(jp,"onAnimationEnd"),Ei(Zp,"onAnimationIteration"),Ei(Kp,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(aS,"onTransitionRun"),Ei(rS,"onTransitionStart"),Ei(sS,"onTransitionCancel"),Ei(Qp,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),J("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),J("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),J("onBeforeInput",["compositionend","keypress","textInput","paste"]),J("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function v0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var x=o.length-1;0<=x;x--){var A=o[x],I=A.instance,Q=A.currentTarget;if(A=A.listener,I!==h&&c.isPropagationStopped())break e;h=A,c.currentTarget=Q;try{h(c)}catch(he){yl(he)}c.currentTarget=null,h=I}else for(x=0;x<o.length;x++){if(A=o[x],I=A.instance,Q=A.currentTarget,A=A.listener,I!==h&&c.isPropagationStopped())break e;h=A,c.currentTarget=Q;try{h(c)}catch(he){yl(he)}c.currentTarget=null,h=I}}}}function gt(t,n){var a=n[Hr];a===void 0&&(a=n[Hr]=new Set);var o=t+"__bubble";a.has(o)||(x0(n,t,2,!1),a.add(o))}function $f(t,n,a){var o=0;n&&(o|=4),x0(a,t,o,n)}var ou="_reactListening"+Math.random().toString(36).slice(2);function eh(t){if(!t[ou]){t[ou]=!0,q.forEach(function(a){a!=="selectionchange"&&(kS.has(a)||$f(a,!1,t),$f(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ou]||(n[ou]=!0,$f("selectionchange",!1,n))}}function x0(t,n,a,o){switch(j0(n)){case 2:var c=_y;break;case 8:c=vy;break;default:c=mh}a=c.bind(null,n,a,t),c=void 0,!xc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function th(t,n,a,o,c){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var A=o.stateNode.containerInfo;if(A===c)break;if(x===4)for(x=o.return;x!==null;){var I=x.tag;if((I===3||I===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;A!==null;){if(x=Ta(A),x===null)return;if(I=x.tag,I===5||I===6||I===26||I===27){o=h=x;continue e}A=A.parentNode}}o=o.return}bp(function(){var Q=h,he=_c(a),ge=[];e:{var $=Jp.get(t);if($!==void 0){var oe=vl,ke=t;switch(t){case"keypress":if(gl(a)===0)break e;case"keydown":case"keyup":oe=Fx;break;case"focusin":ke="focus",oe=Ec;break;case"focusout":ke="blur",oe=Ec;break;case"beforeblur":case"afterblur":oe=Ec;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=bx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=Ix;break;case jp:case Zp:case Kp:oe=Rx;break;case Qp:oe=Gx;break;case"scroll":case"scrollend":oe=Mx;break;case"wheel":oe=kx;break;case"copy":case"cut":case"paste":oe=wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=wp;break;case"toggle":case"beforetoggle":oe=Wx}var tt=(n&4)!==0,Vt=!tt&&(t==="scroll"||t==="scrollend"),Y=tt?$!==null?$+"Capture":null:$;tt=[];for(var V=Q,K;V!==null;){var me=V;if(K=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||K===null||Y===null||(me=Ks(V,Y),me!=null&&tt.push(Do(V,me,K))),Vt)break;V=V.return}0<tt.length&&($=new oe($,ke,null,a,he),ge.push({event:$,listeners:tt}))}}if((n&7)===0){e:{if($=t==="mouseover"||t==="pointerover",oe=t==="mouseout"||t==="pointerout",$&&a!==gc&&(ke=a.relatedTarget||a.fromElement)&&(Ta(ke)||ke[yi]))break e;if((oe||$)&&($=he.window===he?he:($=he.ownerDocument)?$.defaultView||$.parentWindow:window,oe?(ke=a.relatedTarget||a.toElement,oe=Q,ke=ke?Ta(ke):null,ke!==null&&(Vt=u(ke),tt=ke.tag,ke!==Vt||tt!==5&&tt!==27&&tt!==6)&&(ke=null)):(oe=null,ke=Q),oe!==ke)){if(tt=Rp,me="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(tt=wp,me="onPointerLeave",Y="onPointerEnter",V="pointer"),Vt=oe==null?$:or(oe),K=ke==null?$:or(ke),$=new tt(me,V+"leave",oe,a,he),$.target=Vt,$.relatedTarget=K,me=null,Ta(he)===Q&&(tt=new tt(Y,V+"enter",ke,a,he),tt.target=K,tt.relatedTarget=Vt,me=tt),Vt=me,oe&&ke)t:{for(tt=XS,Y=oe,V=ke,K=0,me=Y;me;me=tt(me))K++;me=0;for(var Je=V;Je;Je=tt(Je))me++;for(;0<K-me;)Y=tt(Y),K--;for(;0<me-K;)V=tt(V),me--;for(;K--;){if(Y===V||V!==null&&Y===V.alternate){tt=Y;break t}Y=tt(Y),V=tt(V)}tt=null}else tt=null;oe!==null&&S0(ge,$,oe,tt,!1),ke!==null&&Vt!==null&&S0(ge,Vt,ke,tt,!0)}}e:{if($=Q?or(Q):window,oe=$.nodeName&&$.nodeName.toLowerCase(),oe==="select"||oe==="input"&&$.type==="file")var Tt=Bp;else if(Pp($))if(zp)Tt=tS;else{Tt=$x;var Ze=Jx}else oe=$.nodeName,!oe||oe.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?Q&&Mi(Q.elementType)&&(Tt=Bp):Tt=eS;if(Tt&&(Tt=Tt(t,Q))){Fp(ge,Tt,a,he);break e}Ze&&Ze(t,$,Q),t==="focusout"&&Q&&$.type==="number"&&Q.memoizedProps.value!=null&&yn($,"number",$.value)}switch(Ze=Q?or(Q):window,t){case"focusin":(Pp(Ze)||Ze.contentEditable==="true")&&(qr=Ze,wc=Q,ao=null);break;case"focusout":ao=wc=qr=null;break;case"mousedown":Dc=!0;break;case"contextmenu":case"mouseup":case"dragend":Dc=!1,qp(ge,a,he);break;case"selectionchange":if(iS)break;case"keydown":case"keyup":qp(ge,a,he)}var ct;if(Tc)e:{switch(t){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else Wr?Np(t,a)&&(xt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xt="onCompositionStart");xt&&(Dp&&a.locale!=="ko"&&(Wr||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Wr&&(ct=Tp()):(Ca=he,Sc="value"in Ca?Ca.value:Ca.textContent,Wr=!0)),Ze=lu(Q,xt),0<Ze.length&&(xt=new Cp(xt,t,null,a,he),ge.push({event:xt,listeners:Ze}),ct?xt.data=ct:(ct=Op(a),ct!==null&&(xt.data=ct)))),(ct=Yx?jx(t,a):Zx(t,a))&&(xt=lu(Q,"onBeforeInput"),0<xt.length&&(Ze=new Cp("onBeforeInput","beforeinput",null,a,he),ge.push({event:Ze,listeners:xt}),Ze.data=ct)),HS(ge,t,Q,a,he)}v0(ge,n)})}function Do(t,n,a){return{instance:t,listener:n,currentTarget:a}}function lu(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=Ks(t,a),c!=null&&o.unshift(Do(t,c,h)),c=Ks(t,n),c!=null&&o.push(Do(t,c,h))),t.tag===3)return o;t=t.return}return[]}function XS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function S0(t,n,a,o,c){for(var h=n._reactName,x=[];a!==null&&a!==o;){var A=a,I=A.alternate,Q=A.stateNode;if(A=A.tag,I!==null&&I===o)break;A!==5&&A!==26&&A!==27||Q===null||(I=Q,c?(Q=Ks(a,h),Q!=null&&x.unshift(Do(a,Q,I))):c||(Q=Ks(a,h),Q!=null&&x.push(Do(a,Q,I)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var WS=/\r\n?/g,qS=/\u0000|\uFFFD/g;function y0(t){return(typeof t=="string"?t:""+t).replace(WS,`
`).replace(qS,"")}function M0(t,n){return n=y0(n),y0(t)===n}function Gt(t,n,a,o,c,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||dn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&dn(t,""+o);break;case"className":$e(t,"class",o);break;case"tabIndex":$e(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":$e(t,a,o);break;case"style":Vr(t,o,h);break;case"data":if(n!=="object"){$e(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=pl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Gt(t,n,"name",c.name,c,null),Gt(t,n,"formEncType",c.formEncType,c,null),Gt(t,n,"formMethod",c.formMethod,c,null),Gt(t,n,"formTarget",c.formTarget,c,null)):(Gt(t,n,"encType",c.encType,c,null),Gt(t,n,"method",c.method,c,null),Gt(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=pl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Yi);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=pl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":gt("beforetoggle",t),gt("toggle",t),qe(t,"popover",o);break;case"xlinkActuate":Ye(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ye(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ye(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ye(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ye(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ye(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":qe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Sx.get(a)||a,qe(t,a,o))}}function nh(t,n,a,o,c,h){switch(a){case"style":Vr(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?dn(t,o):(typeof o=="number"||typeof o=="bigint")&&dn(t,""+o);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!se.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),h=t[xn]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,c),typeof o=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):qe(t,a,o)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var o=!1,c=!1,h;for(h in a)if(a.hasOwnProperty(h)){var x=a[h];if(x!=null)switch(h){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(t,n,h,x,a,null)}}c&&Gt(t,n,"srcSet",a.srcSet,a,null),o&&Gt(t,n,"src",a.src,a,null);return;case"input":gt("invalid",t);var A=h=x=c=null,I=null,Q=null;for(o in a)if(a.hasOwnProperty(o)){var he=a[o];if(he!=null)switch(o){case"name":c=he;break;case"type":x=he;break;case"checked":I=he;break;case"defaultChecked":Q=he;break;case"value":h=he;break;case"defaultValue":A=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:Gt(t,n,o,he,a,null)}}qi(t,h,A,I,Q,x,c,!1);return;case"select":gt("invalid",t),o=x=h=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":h=A;break;case"defaultValue":x=A;break;case"multiple":o=A;default:Gt(t,n,c,A,a,null)}n=h,a=x,t.multiple=!!o,n!=null?ri(t,!!o,n,!1):a!=null&&ri(t,!!o,a,!0);return;case"textarea":gt("invalid",t),h=c=o=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":o=A;break;case"defaultValue":c=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Gt(t,n,x,A,a,null)}Mn(t,o,c,h);return;case"option":for(I in a)a.hasOwnProperty(I)&&(o=a[I],o!=null)&&(I==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Gt(t,n,I,o,a,null));return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(o=0;o<wo.length;o++)gt(wo[o],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(o=a[Q],o!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(t,n,Q,o,a,null)}return;default:if(Mi(n)){for(he in a)a.hasOwnProperty(he)&&(o=a[he],o!==void 0&&nh(t,n,he,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Gt(t,n,A,o,a,null))}function YS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,x=null,A=null,I=null,Q=null,he=null;for(oe in a){var ge=a[oe];if(a.hasOwnProperty(oe)&&ge!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":I=ge;default:o.hasOwnProperty(oe)||Gt(t,n,oe,null,o,ge)}}for(var $ in o){var oe=o[$];if(ge=a[$],o.hasOwnProperty($)&&(oe!=null||ge!=null))switch($){case"type":h=oe;break;case"name":c=oe;break;case"checked":Q=oe;break;case"defaultChecked":he=oe;break;case"value":x=oe;break;case"defaultValue":A=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:oe!==ge&&Gt(t,n,$,oe,o,ge)}}Sn(t,x,A,I,Q,he,h,c);return;case"select":oe=x=A=$=null;for(h in a)if(I=a[h],a.hasOwnProperty(h)&&I!=null)switch(h){case"value":break;case"multiple":oe=I;default:o.hasOwnProperty(h)||Gt(t,n,h,null,o,I)}for(c in o)if(h=o[c],I=a[c],o.hasOwnProperty(c)&&(h!=null||I!=null))switch(c){case"value":$=h;break;case"defaultValue":A=h;break;case"multiple":x=h;default:h!==I&&Gt(t,n,c,h,o,I)}n=A,a=x,o=oe,$!=null?ri(t,!!a,$,!1):!!o!=!!a&&(n!=null?ri(t,!!a,n,!0):ri(t,!!a,a?[]:"",!1));return;case"textarea":oe=$=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Gt(t,n,A,null,o,c)}for(x in o)if(c=o[x],h=a[x],o.hasOwnProperty(x)&&(c!=null||h!=null))switch(x){case"value":$=c;break;case"defaultValue":oe=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==h&&Gt(t,n,x,c,o,h)}Ft(t,$,oe);return;case"option":for(var ke in a)$=a[ke],a.hasOwnProperty(ke)&&$!=null&&!o.hasOwnProperty(ke)&&(ke==="selected"?t.selected=!1:Gt(t,n,ke,null,o,$));for(I in o)$=o[I],oe=a[I],o.hasOwnProperty(I)&&$!==oe&&($!=null||oe!=null)&&(I==="selected"?t.selected=$&&typeof $!="function"&&typeof $!="symbol":Gt(t,n,I,$,o,oe));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)$=a[tt],a.hasOwnProperty(tt)&&$!=null&&!o.hasOwnProperty(tt)&&Gt(t,n,tt,null,o,$);for(Q in o)if($=o[Q],oe=a[Q],o.hasOwnProperty(Q)&&$!==oe&&($!=null||oe!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,n));break;default:Gt(t,n,Q,$,o,oe)}return;default:if(Mi(n)){for(var Vt in a)$=a[Vt],a.hasOwnProperty(Vt)&&$!==void 0&&!o.hasOwnProperty(Vt)&&nh(t,n,Vt,void 0,o,$);for(he in o)$=o[he],oe=a[he],!o.hasOwnProperty(he)||$===oe||$===void 0&&oe===void 0||nh(t,n,he,$,o,oe);return}}for(var Y in a)$=a[Y],a.hasOwnProperty(Y)&&$!=null&&!o.hasOwnProperty(Y)&&Gt(t,n,Y,null,o,$);for(ge in o)$=o[ge],oe=a[ge],!o.hasOwnProperty(ge)||$===oe||$==null&&oe==null||Gt(t,n,ge,$,o,oe)}function E0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],h=c.transferSize,x=c.initiatorType,A=c.duration;if(h&&A&&E0(x)){for(x=0,A=c.responseEnd,o+=1;o<a.length;o++){var I=a[o],Q=I.startTime;if(Q>A)break;var he=I.transferSize,ge=I.initiatorType;he&&E0(ge)&&(I=I.responseEnd,x+=he*(I<A?1:(A-Q)/(I-Q)))}if(--o,n+=8*(h+x)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ih=null,ah=null;function uu(t){return t.nodeType===9?t:t.ownerDocument}function b0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function T0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function rh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var sh=null;function ZS(){var t=window.event;return t&&t.type==="popstate"?t===sh?!1:(sh=t,!0):(sh=null,!1)}var A0=typeof setTimeout=="function"?setTimeout:void 0,KS=typeof clearTimeout=="function"?clearTimeout:void 0,R0=typeof Promise=="function"?Promise:void 0,QS=typeof queueMicrotask=="function"?queueMicrotask:typeof R0<"u"?function(t){return R0.resolve(null).then(t).catch(JS)}:A0;function JS(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function C0(t,n){var a=n,o=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(c),xs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Uo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Uo(a);for(var h=a.firstChild;h;){var x=h.nextSibling,A=h.nodeName;h[sr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=x}}else a==="body"&&Uo(t.ownerDocument.body);a=c}while(a);xs(n)}function w0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function oh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":oh(a),Zs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function $S(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[sr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=hi(t.nextSibling),t===null)break}return null}function ey(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=hi(t.nextSibling),t===null))return null;return t}function D0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=hi(t.nextSibling),t===null))return null;return t}function lh(t){return t.data==="$?"||t.data==="$~"}function uh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ty(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function hi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ch=null;function U0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return hi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function L0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function N0(t,n,a){switch(n=uu(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Uo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Zs(t)}var di=new Map,O0=new Set;function cu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ua=H.d;H.d={f:ny,r:iy,D:ay,C:ry,L:sy,m:oy,X:uy,S:ly,M:cy};function ny(){var t=ua.f(),n=tu();return t||n}function iy(t){var n=Aa(t);n!==null&&n.tag===5&&n.type==="form"?Qm(n):ua.r(t)}var gs=typeof document>"u"?null:document;function P0(t,n,a){var o=gs;if(o&&typeof n=="string"&&n){var c=at(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),O0.has(c)||(O0.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Cn(n,"link",t),R(n),o.head.appendChild(n)))}}function ay(t){ua.D(t),P0("dns-prefetch",t,null)}function ry(t,n){ua.C(t,n),P0("preconnect",t,n)}function sy(t,n,a){ua.L(t,n,a);var o=gs;if(o&&t&&n){var c='link[rel="preload"][as="'+at(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+at(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+at(a.imageSizes)+'"]')):c+='[href="'+at(t)+'"]';var h=c;switch(n){case"style":h=_s(t);break;case"script":h=vs(t)}di.has(h)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),di.set(h,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(Lo(h))||n==="script"&&o.querySelector(No(h))||(n=o.createElement("link"),Cn(n,"link",t),R(n),o.head.appendChild(n)))}}function oy(t,n){ua.m(t,n);var a=gs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+at(o)+'"][href="'+at(t)+'"]',h=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=vs(t)}if(!di.has(h)&&(t=g({rel:"modulepreload",href:t},n),di.set(h,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(No(h)))return}o=a.createElement("link"),Cn(o,"link",t),R(o),a.head.appendChild(o)}}}function ly(t,n,a){ua.S(t,n,a);var o=gs;if(o&&t){var c=Ra(o).hoistableStyles,h=_s(t);n=n||"default";var x=c.get(h);if(!x){var A={loading:0,preload:null};if(x=o.querySelector(Lo(h)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=di.get(h))&&fh(t,a);var I=x=o.createElement("link");R(I),Cn(I,"link",t),I._p=new Promise(function(Q,he){I.onload=Q,I.onerror=he}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,fu(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:A},c.set(h,x)}}}function uy(t,n){ua.X(t,n);var a=gs;if(a&&t){var o=Ra(a).hoistableScripts,c=vs(t),h=o.get(c);h||(h=a.querySelector(No(c)),h||(t=g({src:t,async:!0},n),(n=di.get(c))&&hh(t,n),h=a.createElement("script"),R(h),Cn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function cy(t,n){ua.M(t,n);var a=gs;if(a&&t){var o=Ra(a).hoistableScripts,c=vs(t),h=o.get(c);h||(h=a.querySelector(No(c)),h||(t=g({src:t,async:!0,type:"module"},n),(n=di.get(c))&&hh(t,n),h=a.createElement("script"),R(h),Cn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function F0(t,n,a,o){var c=(c=ee.current)?cu(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_s(a.href),a=Ra(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=_s(a.href);var h=Ra(c).hoistableStyles,x=h.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,x),(h=c.querySelector(Lo(t)))&&!h._p&&(x.instance=h,x.state.loading=5),di.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(t,a),h||fy(c,t,a,x.state))),n&&o===null)throw Error(r(528,""));return x}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vs(a),a=Ra(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function _s(t){return'href="'+at(t)+'"'}function Lo(t){return'link[rel="stylesheet"]['+t+"]"}function B0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function fy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),R(n),t.head.appendChild(n))}function vs(t){return'[src="'+at(t)+'"]'}function No(t){return"script[async]"+t}function z0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+at(a.href)+'"]');if(o)return n.instance=o,R(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),R(o),Cn(o,"style",c),fu(o,a.precedence,t),n.instance=o;case"stylesheet":c=_s(a.href);var h=t.querySelector(Lo(c));if(h)return n.state.loading|=4,n.instance=h,R(h),h;o=B0(a),(c=di.get(c))&&fh(o,c),h=(t.ownerDocument||t).createElement("link"),R(h);var x=h;return x._p=new Promise(function(A,I){x.onload=A,x.onerror=I}),Cn(h,"link",o),n.state.loading|=4,fu(h,a.precedence,t),n.instance=h;case"script":return h=vs(a.src),(c=t.querySelector(No(h)))?(n.instance=c,R(c),c):(o=a,(c=di.get(h))&&(o=g({},a),hh(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),R(c),Cn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,fu(o,a.precedence,t));return n.instance}function fu(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,h=c,x=0;x<o.length;x++){var A=o[x];if(A.dataset.precedence===n)h=A;else if(h!==c)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function fh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function hh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var hu=null;function I0(t,n,a){if(hu===null){var o=new Map,c=hu=new Map;c.set(a,o)}else c=hu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var h=a[c];if(!(h[sr]||h[on]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(n)||"";x=t+x;var A=o.get(x);A?A.push(h):o.set(x,[h])}}return o}function H0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function hy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function G0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function dy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=_s(o.href),h=n.querySelector(Lo(c));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=du.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=h,R(h);return}h=n.ownerDocument||n,o=B0(o),(c=di.get(c))&&fh(o,c),h=h.createElement("link"),R(h);var x=h;x._p=new Promise(function(A,I){x.onload=A,x.onerror=I}),Cn(h,"link",o),a.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=du.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var dh=0;function py(t,n){return t.stylesheets&&t.count===0&&mu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&mu(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&dh===0&&(dh=62500*jS());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&mu(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>dh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function du(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)mu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var pu=null;function mu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,pu=new Map,n.forEach(my,t),pu=null,du.call(t))}function my(t,n){if(!(n.state.loading&4)){var a=pu.get(t);if(a)var o=a.get(null);else{a=new Map,pu.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var x=c[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}c=n.instance,x=c.getAttribute("data-precedence"),h=a.get(x)||o,h===o&&a.set(null,c),a.set(x,c),this.count++,o=du.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),h?h.parentNode.insertBefore(c,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Oo={$$typeof:U,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function gy(t,n,a,o,c,h,x,A,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function V0(t,n,a,o,c,h,x,A,I,Q,he,ge){return t=new gy(t,n,a,x,I,Q,he,ge,A),n=1,h===!0&&(n|=24),h=Zn(3,null,null,n),t.current=h,h.stateNode=t,n=Wc(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Zc(h),t}function k0(t){return t?(t=Zr,t):Zr}function X0(t,n,a,o,c,h){c=k0(c),o.context===null?o.context=c:o.pendingContext=c,o=Oa(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Pa(t,o,n),a!==null&&(Xn(a,t,n),fo(a,t,n))}function W0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ph(t,n){W0(t,n),(t=t.alternate)&&W0(t,n)}function q0(t){if(t.tag===13||t.tag===31){var n=fr(t,67108864);n!==null&&Xn(n,t,67108864),ph(t,67108864)}}function Y0(t){if(t.tag===13||t.tag===31){var n=ei();n=qs(n);var a=fr(t,n);a!==null&&Xn(a,t,n),ph(t,n)}}var gu=!0;function _y(t,n,a,o){var c=z.T;z.T=null;var h=H.p;try{H.p=2,mh(t,n,a,o)}finally{H.p=h,z.T=c}}function vy(t,n,a,o){var c=z.T;z.T=null;var h=H.p;try{H.p=8,mh(t,n,a,o)}finally{H.p=h,z.T=c}}function mh(t,n,a,o){if(gu){var c=gh(o);if(c===null)th(t,n,o,_u,a),Z0(t,o);else if(Sy(c,t,n,a,o))o.stopPropagation();else if(Z0(t,o),n&4&&-1<xy.indexOf(t)){for(;c!==null;){var h=Aa(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=ye(h.pendingLanes);if(x!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var I=1<<31-Fe(x);A.entanglements[1]|=I,x&=~I}Fi(h),(Ut&6)===0&&($l=E()+500,Co(0))}}break;case 31:case 13:A=fr(h,2),A!==null&&Xn(A,h,2),tu(),ph(h,2)}if(h=gh(o),h===null&&th(t,n,o,_u,a),h===c)break;c=h}c!==null&&o.stopPropagation()}else th(t,n,o,null,a)}}function gh(t){return t=_c(t),_h(t)}var _u=null;function _h(t){if(_u=null,t=Ta(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return _u=t,null}function j0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case de:return 2;case xe:return 8;case le:case Ke:return 32;case Ce:return 268435456;default:return 32}default:return 32}}var vh=!1,qa=null,Ya=null,ja=null,Po=new Map,Fo=new Map,Za=[],xy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Z0(t,n){switch(t){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":Po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(n.pointerId)}}function Bo(t,n,a,o,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[c]},n!==null&&(n=Aa(n),n!==null&&q0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Sy(t,n,a,o,c){switch(n){case"focusin":return qa=Bo(qa,t,n,a,o,c),!0;case"dragenter":return Ya=Bo(Ya,t,n,a,o,c),!0;case"mouseover":return ja=Bo(ja,t,n,a,o,c),!0;case"pointerover":var h=c.pointerId;return Po.set(h,Bo(Po.get(h)||null,t,n,a,o,c)),!0;case"gotpointercapture":return h=c.pointerId,Fo.set(h,Bo(Fo.get(h)||null,t,n,a,o,c)),!0}return!1}function K0(t){var n=Ta(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Li(t.priority,function(){Y0(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Li(t.priority,function(){Y0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=gh(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);gc=o,a.target.dispatchEvent(o),gc=null}else return n=Aa(a),n!==null&&q0(n),t.blockedOn=a,!1;n.shift()}return!0}function Q0(t,n,a){vu(t)&&a.delete(n)}function yy(){vh=!1,qa!==null&&vu(qa)&&(qa=null),Ya!==null&&vu(Ya)&&(Ya=null),ja!==null&&vu(ja)&&(ja=null),Po.forEach(Q0),Fo.forEach(Q0)}function xu(t,n){t.blockedOn===n&&(t.blockedOn=null,vh||(vh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,yy)))}var Su=null;function J0(t){Su!==t&&(Su=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Su===t&&(Su=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(_h(o||a)===null)continue;break}var h=Aa(a);h!==null&&(t.splice(n,3),n-=3,gf(h,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function xs(t){function n(I){return xu(I,t)}qa!==null&&xu(qa,t),Ya!==null&&xu(Ya,t),ja!==null&&xu(ja,t),Po.forEach(n),Fo.forEach(n);for(var a=0;a<Za.length;a++){var o=Za[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)K0(a),a.blockedOn===null&&Za.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],h=a[o+1],x=c[xn]||null;if(typeof h=="function")x||J0(a);else if(x){var A=null;if(h&&h.hasAttribute("formAction")){if(c=h,x=h[xn]||null)A=x.formAction;else if(_h(c)!==null)continue}else A=x.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),J0(a)}}}function $0(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function xh(t){this._internalRoot=t}yu.prototype.render=xh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ei();X0(a,o,t,n,null,null)},yu.prototype.unmount=xh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;X0(t.current,2,null,t,null,null),tu(),n[yi]=null}};function yu(t){this._internalRoot=t}yu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ys();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,t),a===0&&K0(t)}};var e_=e.version;if(e_!=="19.2.3")throw Error(r(527,e_,"19.2.3"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var My={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{Ee=Mu.inject(My),be=Mu}catch{}}return Io.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=og,h=lg,x=ug;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=V0(t,1,!1,null,null,a,o,null,c,h,x,$0),t[yi]=n.current,eh(t),new xh(n)},Io.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",h=og,x=lg,A=ug,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=V0(t,1,!0,n,a??null,o,c,I,h,x,A,$0),n.context=k0(null),a=n.current,o=ei(),o=qs(o),c=Oa(o),c.callback=null,Pa(a,c,o),a=o,n.current.lanes=a,Dn(n,a),Fi(n),t[yi]=n.current,eh(t),new yu(n)},Io.version="19.2.3",Io}var c_;function Ly(){if(c_)return Mh.exports;c_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Mh.exports=Uy(),Mh.exports}var Ny=Ly();var f_="popstate";function Oy(s={}){function e(l,u){let{pathname:f="/",search:d="",hash:m=""}=Fr(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),od("",{pathname:f,search:d,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function i(l,u){let f=l.document.querySelector("base"),d="";if(f&&f.getAttribute("href")){let m=l.location.href,p=m.indexOf("#");d=p===-1?m:m.slice(0,p)}return d+"#"+(typeof u=="string"?u:$o(u))}function r(l,u){vi(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return Fy(e,i,r,s)}function Qt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function vi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Py(){return Math.random().toString(36).substring(2,10)}function h_(s,e){return{usr:s.state,key:s.key,idx:e}}function od(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Fr(e):e,state:i,key:e&&e.key||r||Py()}}function $o({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Fr(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function Fy(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,f=l.history,d="POP",m=null,p=_();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function _(){return(f.state||{idx:null}).idx}function g(){d="POP";let y=_(),v=y==null?null:y-p;p=y,m&&m({action:d,location:T.location,delta:v})}function S(y,v){d="PUSH";let w=od(T.location,y,v);i&&i(w,y),p=_()+1;let U=h_(w,p),O=T.createHref(w);try{f.pushState(U,"",O)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;l.location.assign(O)}u&&m&&m({action:d,location:T.location,delta:1})}function M(y,v){d="REPLACE";let w=od(T.location,y,v);i&&i(w,y),p=_();let U=h_(w,p),O=T.createHref(w);f.replaceState(U,"",O),u&&m&&m({action:d,location:T.location,delta:0})}function b(y){return By(y)}let T={get action(){return d},get location(){return s(l,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(f_,g),m=y,()=>{l.removeEventListener(f_,g),m=null}},createHref(y){return e(l,y)},createURL:b,encodeLocation(y){let v=b(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:S,replace:M,go(y){return f.go(y)}};return T}function By(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Qt(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:$o(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function gv(s,e,i="/"){return zy(s,e,i,!1)}function zy(s,e,i,r){let l=typeof e=="string"?Fr(e):e,u=Sa(l.pathname||"/",i);if(u==null)return null;let f=_v(s);Iy(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let p=Ky(u);d=jy(f[m],p,r)}return d}function _v(s,e=[],i=[],r="",l=!1){let u=(f,d,m=l,p)=>{let _={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(r)&&m)return;Qt(_.relativePath.startsWith(r),`Absolute route path "${_.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(r.length)}let g=_a([r,_.relativePath]),S=i.concat(_);f.children&&f.children.length>0&&(Qt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),_v(f.children,e,S,g,m)),!(f.path==null&&!f.index)&&e.push({path:g,score:qy(g,f.index),routesMeta:S})};return s.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))u(f,d);else for(let m of vv(f.path))u(f,d,!0,m)}),e}function vv(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let f=vv(r.join("/")),d=[];return d.push(...f.map(m=>m===""?u:[u,m].join("/"))),l&&d.push(...f),d.map(m=>s.startsWith("/")&&m===""?"/":m)}function Iy(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:Yy(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var Hy=/^:[\w-]+$/,Gy=3,Vy=2,ky=1,Xy=10,Wy=-2,d_=s=>s==="*";function qy(s,e){let i=s.split("/"),r=i.length;return i.some(d_)&&(r+=Wy),e&&(r+=Vy),i.filter(l=>!d_(l)).reduce((l,u)=>l+(Hy.test(u)?Gy:u===""?ky:Xy),r)}function Yy(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function jy(s,e,i=!1){let{routesMeta:r}=s,l={},u="/",f=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,_=u==="/"?e:e.slice(u.length)||"/",g=ic({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},_),S=m.route;if(!g&&p&&i&&!r[r.length-1].route.index&&(g=ic({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:_a([u,g.pathname]),pathnameBase:eM(_a([u,g.pathnameBase])),route:S}),g.pathnameBase!=="/"&&(u=_a([u,g.pathnameBase]))}return f}function ic(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=Zy(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((p,{paramName:_,isOptional:g},S)=>{if(_==="*"){let b=d[S]||"";f=u.slice(0,u.length-b.length).replace(/(.)\/+$/,"$1")}const M=d[S];return g&&!M?p[_]=void 0:p[_]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:f,pattern:s}}function Zy(s,e=!1,i=!0){vi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function Ky(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return vi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function Sa(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var xv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qy=s=>xv.test(s);function Jy(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Fr(s):s,u;if(i)if(Qy(i))u=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),vi(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?u=p_(i.substring(1),"/"):u=p_(i,e)}else u=e;return{pathname:u,search:tM(r),hash:nM(l)}}function p_(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Ah(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function $y(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Sv(s){let e=$y(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function yv(s,e,i,r=!1){let l;typeof s=="string"?l=Fr(s):(l={...s},Qt(!l.pathname||!l.pathname.includes("?"),Ah("?","pathname","search",l)),Qt(!l.pathname||!l.pathname.includes("#"),Ah("#","pathname","hash",l)),Qt(!l.search||!l.search.includes("#"),Ah("#","search","hash",l)));let u=s===""||l.pathname==="",f=u?"/":l.pathname,d;if(f==null)d=i;else{let g=e.length-1;if(!r&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),g-=1;l.pathname=S.join("/")}d=g>=0?e[g]:"/"}let m=Jy(l,d),p=f&&f!=="/"&&f.endsWith("/"),_=(u||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||_)&&(m.pathname+="/"),m}var _a=s=>s.join("/").replace(/\/\/+/g,"/"),eM=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),tM=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,nM=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,iM=class{constructor(s,e,i,r=!1){this.status=s,this.statusText=e||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function aM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function rM(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Mv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ev(s,e){let i=s;if(typeof i!="string"||!xv.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(Mv)try{let u=new URL(window.location.href),f=i.startsWith("//")?new URL(u.protocol+i):new URL(i),d=Sa(f.pathname,e);f.origin===u.origin&&d!=null?i=d+f.search+f.hash:l=!0}catch{vi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var bv=["POST","PUT","PATCH","DELETE"];new Set(bv);var sM=["GET",...bv];new Set(sM);var Gs=fe.createContext(null);Gs.displayName="DataRouter";var uc=fe.createContext(null);uc.displayName="DataRouterState";var oM=fe.createContext(!1),Tv=fe.createContext({isTransitioning:!1});Tv.displayName="ViewTransition";var lM=fe.createContext(new Map);lM.displayName="Fetchers";var uM=fe.createContext(null);uM.displayName="Await";var xi=fe.createContext(null);xi.displayName="Navigation";var al=fe.createContext(null);al.displayName="Location";var ba=fe.createContext({outlet:null,matches:[],isDataRoute:!1});ba.displayName="Route";var rp=fe.createContext(null);rp.displayName="RouteError";var Av="REACT_ROUTER_ERROR",cM="REDIRECT",fM="ROUTE_ERROR_RESPONSE";function hM(s){if(s.startsWith(`${Av}:${cM}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function dM(s){if(s.startsWith(`${Av}:${fM}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new iM(e.status,e.statusText,e.data)}catch{}}function pM(s,{relative:e}={}){Qt(rl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=fe.useContext(xi),{hash:l,pathname:u,search:f}=sl(s,{relative:e}),d=u;return i!=="/"&&(d=u==="/"?i:_a([i,u])),r.createHref({pathname:d,search:f,hash:l})}function rl(){return fe.useContext(al)!=null}function Br(){return Qt(rl(),"useLocation() may be used only in the context of a <Router> component."),fe.useContext(al).location}var Rv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Cv(s){fe.useContext(xi).static||fe.useLayoutEffect(s)}function mM(){let{isDataRoute:s}=fe.useContext(ba);return s?CM():gM()}function gM(){Qt(rl(),"useNavigate() may be used only in the context of a <Router> component.");let s=fe.useContext(Gs),{basename:e,navigator:i}=fe.useContext(xi),{matches:r}=fe.useContext(ba),{pathname:l}=Br(),u=JSON.stringify(Sv(r)),f=fe.useRef(!1);return Cv(()=>{f.current=!0}),fe.useCallback((m,p={})=>{if(vi(f.current,Rv),!f.current)return;if(typeof m=="number"){i.go(m);return}let _=yv(m,JSON.parse(u),l,p.relative==="path");s==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:_a([e,_.pathname])),(p.replace?i.replace:i.push)(_,p.state,p)},[e,i,u,l,s])}fe.createContext(null);function sl(s,{relative:e}={}){let{matches:i}=fe.useContext(ba),{pathname:r}=Br(),l=JSON.stringify(Sv(i));return fe.useMemo(()=>yv(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function _M(s,e){return wv(s,e)}function wv(s,e,i,r,l){Qt(rl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=fe.useContext(xi),{matches:f}=fe.useContext(ba),d=f[f.length-1],m=d?d.params:{},p=d?d.pathname:"/",_=d?d.pathnameBase:"/",g=d&&d.route;{let w=g&&g.path||"";Uv(p,!g||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let S=Br(),M;if(e){let w=typeof e=="string"?Fr(e):e;Qt(_==="/"||w.pathname?.startsWith(_),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${w.pathname}" was given in the \`location\` prop.`),M=w}else M=S;let b=M.pathname||"/",T=b;if(_!=="/"){let w=_.replace(/^\//,"").split("/");T="/"+b.replace(/^\//,"").split("/").slice(w.length).join("/")}let y=gv(s,{pathname:T});vi(g||y!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),vi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=MM(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},m,w.params),pathname:_a([_,u.encodeLocation?u.encodeLocation(w.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?_:_a([_,u.encodeLocation?u.encodeLocation(w.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathnameBase])})),f,i,r,l);return e&&v?fe.createElement(al.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},v):v}function vM(){let s=RM(),e=aM(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=fe.createElement(fe.Fragment,null,fe.createElement("p",null,"💿 Hey developer 👋"),fe.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",fe.createElement("code",{style:u},"ErrorBoundary")," or"," ",fe.createElement("code",{style:u},"errorElement")," prop on your route.")),fe.createElement(fe.Fragment,null,fe.createElement("h2",null,"Unexpected Application Error!"),fe.createElement("h3",{style:{fontStyle:"italic"}},e),i?fe.createElement("pre",{style:l},i):null,f)}var xM=fe.createElement(vM,null),Dv=class extends fe.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=dM(s.digest);i&&(s=i)}let e=s!==void 0?fe.createElement(ba.Provider,{value:this.props.routeContext},fe.createElement(rp.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?fe.createElement(SM,{error:s},e):e}};Dv.contextType=oM;var Rh=new WeakMap;function SM({children:s,error:e}){let{basename:i}=fe.useContext(xi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=hM(e.digest);if(r){let l=Rh.get(e);if(l)throw l;let u=Ev(r.location,i);if(Mv&&!Rh.get(e))if(u.isExternal||r.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:r.replace}));throw Rh.set(e,f),f}return fe.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return s}function yM({routeContext:s,match:e,children:i}){let r=fe.useContext(Gs);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),fe.createElement(ba.Provider,{value:s},i)}function MM(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let u=s,f=i?.errors;if(f!=null){let _=u.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Qt(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,_+1))}let d=!1,m=-1;if(i)for(let _=0;_<u.length;_++){let g=u[_];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=_),g.route.id){let{loaderData:S,errors:M}=i,b=g.route.loader&&!S.hasOwnProperty(g.route.id)&&(!M||M[g.route.id]===void 0);if(g.route.lazy||b){d=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}let p=i&&r?(_,g)=>{r(_,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:rM(i.matches),errorInfo:g})}:void 0;return u.reduceRight((_,g,S)=>{let M,b=!1,T=null,y=null;i&&(M=f&&g.route.id?f[g.route.id]:void 0,T=g.route.errorElement||xM,d&&(m<0&&S===0?(Uv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,y=null):m===S&&(b=!0,y=g.route.hydrateFallbackElement||null)));let v=e.concat(u.slice(0,S+1)),w=()=>{let U;return M?U=T:b?U=y:g.route.Component?U=fe.createElement(g.route.Component,null):g.route.element?U=g.route.element:U=_,fe.createElement(yM,{match:g,routeContext:{outlet:_,matches:v,isDataRoute:i!=null},children:U})};return i&&(g.route.ErrorBoundary||g.route.errorElement||S===0)?fe.createElement(Dv,{location:i.location,revalidation:i.revalidation,component:T,error:M,children:w(),routeContext:{outlet:null,matches:v,isDataRoute:!0},onError:p}):w()},null)}function sp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function EM(s){let e=fe.useContext(Gs);return Qt(e,sp(s)),e}function bM(s){let e=fe.useContext(uc);return Qt(e,sp(s)),e}function TM(s){let e=fe.useContext(ba);return Qt(e,sp(s)),e}function op(s){let e=TM(s),i=e.matches[e.matches.length-1];return Qt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function AM(){return op("useRouteId")}function RM(){let s=fe.useContext(rp),e=bM("useRouteError"),i=op("useRouteError");return s!==void 0?s:e.errors?.[i]}function CM(){let{router:s}=EM("useNavigate"),e=op("useNavigate"),i=fe.useRef(!1);return Cv(()=>{i.current=!0}),fe.useCallback(async(l,u={})=>{vi(i.current,Rv),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...u}))},[s,e])}var m_={};function Uv(s,e,i){!e&&!m_[s]&&(m_[s]=!0,vi(!1,i))}fe.memo(wM);function wM({routes:s,future:e,state:i,onError:r}){return wv(s,void 0,i,r,e)}function Zo(s){Qt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function DM({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:u=!1,unstable_useTransitions:f}){Qt(!rl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=s.replace(/^\/*/,"/"),m=fe.useMemo(()=>({basename:d,navigator:l,static:u,unstable_useTransitions:f,future:{}}),[d,l,u,f]);typeof i=="string"&&(i=Fr(i));let{pathname:p="/",search:_="",hash:g="",state:S=null,key:M="default"}=i,b=fe.useMemo(()=>{let T=Sa(p,d);return T==null?null:{location:{pathname:T,search:_,hash:g,state:S,key:M},navigationType:r}},[d,p,_,g,S,M,r]);return vi(b!=null,`<Router basename="${d}"> is not able to match the URL "${p}${_}${g}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:fe.createElement(xi.Provider,{value:m},fe.createElement(al.Provider,{children:e,value:b}))}function UM({children:s,location:e}){return _M(ld(s),e)}function ld(s,e=[]){let i=[];return fe.Children.forEach(s,(r,l)=>{if(!fe.isValidElement(r))return;let u=[...e,l];if(r.type===fe.Fragment){i.push.apply(i,ld(r.props.children,u));return}Qt(r.type===Zo,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=ld(r.props.children,u)),i.push(f)}),i}var Zu="get",Ku="application/x-www-form-urlencoded";function cc(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function LM(s){return cc(s)&&s.tagName.toLowerCase()==="button"}function NM(s){return cc(s)&&s.tagName.toLowerCase()==="form"}function OM(s){return cc(s)&&s.tagName.toLowerCase()==="input"}function PM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function FM(s,e){return s.button===0&&(!e||e==="_self")&&!PM(s)}var Eu=null;function BM(){if(Eu===null)try{new FormData(document.createElement("form"),0),Eu=!1}catch{Eu=!0}return Eu}var zM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ch(s){return s!=null&&!zM.has(s)?(vi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ku}"`),null):s}function IM(s,e){let i,r,l,u,f;if(NM(s)){let d=s.getAttribute("action");r=d?Sa(d,e):null,i=s.getAttribute("method")||Zu,l=Ch(s.getAttribute("enctype"))||Ku,u=new FormData(s)}else if(LM(s)||OM(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||d.getAttribute("action");if(r=m?Sa(m,e):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Zu,l=Ch(s.getAttribute("formenctype"))||Ch(d.getAttribute("enctype"))||Ku,u=new FormData(d,s),!BM()){let{name:p,type:_,value:g}=s;if(_==="image"){let S=p?`${p}.`:"";u.append(`${S}x`,"0"),u.append(`${S}y`,"0")}else p&&u.append(p,g)}}else{if(cc(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Zu,r=null,l=Ku,f=s}return u&&l==="text/plain"&&(f=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function lp(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function HM(s,e,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&Sa(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function GM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function VM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function kM(s,e,i){let r=await Promise.all(s.map(async l=>{let u=e.routes[l.route.id];if(u){let f=await GM(u,i);return f.links?f.links():[]}return[]}));return YM(r.flat(1).filter(VM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function g_(s,e,i,r,l,u){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return u==="assets"?e.filter((m,p)=>f(m,p)||d(m,p)):u==="data"?e.filter((m,p)=>{let _=r.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(f(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function XM(s,e,{includeHydrateFallback:i}={}){return WM(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function WM(s){return[...new Set(s)]}function qM(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function YM(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let u=JSON.stringify(qM(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}function Lv(){let s=fe.useContext(Gs);return lp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function jM(){let s=fe.useContext(uc);return lp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var up=fe.createContext(void 0);up.displayName="FrameworkContext";function Nv(){let s=fe.useContext(up);return lp(s,"You must render this element inside a <HydratedRouter> element"),s}function ZM(s,e){let i=fe.useContext(up),[r,l]=fe.useState(!1),[u,f]=fe.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:_,onTouchStart:g}=e,S=fe.useRef(null);fe.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let T=v=>{v.forEach(w=>{f(w.isIntersecting)})},y=new IntersectionObserver(T,{threshold:.5});return S.current&&y.observe(S.current),()=>{y.disconnect()}}},[s]),fe.useEffect(()=>{if(r){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[r]);let M=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?s!=="intent"?[u,S,{}]:[u,S,{onFocus:Ho(d,M),onBlur:Ho(m,b),onMouseEnter:Ho(p,M),onMouseLeave:Ho(_,b),onTouchStart:Ho(g,M)}]:[!1,S,{}]}function Ho(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function KM({page:s,...e}){let{router:i}=Lv(),r=fe.useMemo(()=>gv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?fe.createElement(JM,{page:s,matches:r,...e}):null}function QM(s){let{manifest:e,routeModules:i}=Nv(),[r,l]=fe.useState([]);return fe.useEffect(()=>{let u=!1;return kM(s,e,i).then(f=>{u||l(f)}),()=>{u=!0}},[s,e,i]),r}function JM({page:s,matches:e,...i}){let r=Br(),{manifest:l,routeModules:u}=Nv(),{basename:f}=Lv(),{loaderData:d,matches:m}=jM(),p=fe.useMemo(()=>g_(s,e,m,l,r,"data"),[s,e,m,l,r]),_=fe.useMemo(()=>g_(s,e,m,l,r,"assets"),[s,e,m,l,r]),g=fe.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let b=new Set,T=!1;if(e.forEach(v=>{let w=l.routes[v.route.id];!w||!w.hasLoader||(!p.some(U=>U.route.id===v.route.id)&&v.route.id in d&&u[v.route.id]?.shouldRevalidate||w.hasClientLoader?T=!0:b.add(v.route.id))}),b.size===0)return[];let y=HM(s,f,"data");return T&&b.size>0&&y.searchParams.set("_routes",e.filter(v=>b.has(v.route.id)).map(v=>v.route.id).join(",")),[y.pathname+y.search]},[f,d,r,l,p,e,s,u]),S=fe.useMemo(()=>XM(_,l),[_,l]),M=QM(_);return fe.createElement(fe.Fragment,null,g.map(b=>fe.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...i})),S.map(b=>fe.createElement("link",{key:b,rel:"modulepreload",href:b,...i})),M.map(({key:b,link:T})=>fe.createElement("link",{key:b,nonce:i.nonce,...T})))}function $M(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var eE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{eE&&(window.__reactRouterVersion="7.11.0")}catch{}function tE({basename:s,children:e,unstable_useTransitions:i,window:r}){let l=fe.useRef();l.current==null&&(l.current=Oy({window:r,v5Compat:!0}));let u=l.current,[f,d]=fe.useState({action:u.action,location:u.location}),m=fe.useCallback(p=>{i===!1?d(p):fe.startTransition(()=>d(p))},[i]);return fe.useLayoutEffect(()=>u.listen(m),[u,m]),fe.createElement(DM,{basename:s,children:e,location:f.location,navigationType:f.action,navigator:u,unstable_useTransitions:i})}var Ov=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pv=fe.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:f,state:d,target:m,to:p,preventScrollReset:_,viewTransition:g,unstable_defaultShouldRevalidate:S,...M},b){let{basename:T,unstable_useTransitions:y}=fe.useContext(xi),v=typeof p=="string"&&Ov.test(p),w=Ev(p,T);p=w.to;let U=pM(p,{relative:l}),[O,B,F]=ZM(r,M),P=aE(p,{replace:f,state:d,target:m,preventScrollReset:_,relative:l,viewTransition:g,unstable_defaultShouldRevalidate:S,unstable_useTransitions:y});function j(D){e&&e(D),D.defaultPrevented||P(D)}let C=fe.createElement("a",{...M,...F,href:w.absoluteURL||U,onClick:w.isExternal||u?e:j,ref:$M(b,B),target:m,"data-discover":!v&&i==="render"?"true":void 0});return O&&!v?fe.createElement(fe.Fragment,null,C,fe.createElement(KM,{page:U})):C});Pv.displayName="Link";var Ko=fe.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:f,viewTransition:d,children:m,...p},_){let g=sl(f,{relative:p.relative}),S=Br(),M=fe.useContext(uc),{navigator:b,basename:T}=fe.useContext(xi),y=M!=null&&uE(g)&&d===!0,v=b.encodeLocation?b.encodeLocation(g).pathname:g.pathname,w=S.pathname,U=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(w=w.toLowerCase(),U=U?U.toLowerCase():null,v=v.toLowerCase()),U&&T&&(U=Sa(U,T)||U);const O=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let B=w===v||!l&&w.startsWith(v)&&w.charAt(O)==="/",F=U!=null&&(U===v||!l&&U.startsWith(v)&&U.charAt(v.length)==="/"),P={isActive:B,isPending:F,isTransitioning:y},j=B?e:void 0,C;typeof r=="function"?C=r(P):C=[r,B?"active":null,F?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let D=typeof u=="function"?u(P):u;return fe.createElement(Pv,{...p,"aria-current":j,className:C,ref:_,style:D,to:f,viewTransition:d},typeof m=="function"?m(P):m)});Ko.displayName="NavLink";var nE=fe.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:u,method:f=Zu,action:d,onSubmit:m,relative:p,preventScrollReset:_,viewTransition:g,unstable_defaultShouldRevalidate:S,...M},b)=>{let{unstable_useTransitions:T}=fe.useContext(xi),y=oE(),v=lE(d,{relative:p}),w=f.toLowerCase()==="get"?"get":"post",U=typeof d=="string"&&Ov.test(d),O=B=>{if(m&&m(B),B.defaultPrevented)return;B.preventDefault();let F=B.nativeEvent.submitter,P=F?.getAttribute("formmethod")||f,j=()=>y(F||B.currentTarget,{fetcherKey:e,method:P,navigate:i,replace:l,state:u,relative:p,preventScrollReset:_,viewTransition:g,unstable_defaultShouldRevalidate:S});T&&i!==!1?fe.startTransition(()=>j()):j()};return fe.createElement("form",{ref:b,method:w,action:v,onSubmit:r?m:O,...M,"data-discover":!U&&s==="render"?"true":void 0})});nE.displayName="Form";function iE(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fv(s){let e=fe.useContext(Gs);return Qt(e,iE(s)),e}function aE(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:f,unstable_defaultShouldRevalidate:d,unstable_useTransitions:m}={}){let p=mM(),_=Br(),g=sl(s,{relative:u});return fe.useCallback(S=>{if(FM(S,e)){S.preventDefault();let M=i!==void 0?i:$o(_)===$o(g),b=()=>p(s,{replace:M,state:r,preventScrollReset:l,relative:u,viewTransition:f,unstable_defaultShouldRevalidate:d});m?fe.startTransition(()=>b()):b()}},[_,p,g,i,r,e,s,l,u,f,d,m])}var rE=0,sE=()=>`__${String(++rE)}__`;function oE(){let{router:s}=Fv("useSubmit"),{basename:e}=fe.useContext(xi),i=AM(),r=s.fetch,l=s.navigate;return fe.useCallback(async(u,f={})=>{let{action:d,method:m,encType:p,formData:_,body:g}=IM(u,e);if(f.navigate===!1){let S=f.fetcherKey||sE();await r(S,i,f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:g,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:g,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,e,i])}function lE(s,{relative:e}={}){let{basename:i}=fe.useContext(xi),r=fe.useContext(ba);Qt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...sl(s||".",{relative:e})},f=Br();if(s==null){u.search=f.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(_=>_==="")){d.delete("index"),m.filter(g=>g).forEach(g=>d.append("index",g));let _=d.toString();u.search=_?`?${_}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:_a([i,u.pathname])),$o(u)}function uE(s,{relative:e}={}){let i=fe.useContext(Tv);Qt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Fv("useViewTransitionState"),l=sl(s,{relative:e});if(!i.isTransitioning)return!1;let u=Sa(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=Sa(i.nextLocation.pathname,r)||i.nextLocation.pathname;return ic(l.pathname,f)!=null||ic(l.pathname,u)!=null}function cE(){return Le.jsx("nav",{className:"navbar",children:Le.jsxs("div",{className:"nav-left",children:[Le.jsx(Ko,{to:"/",className:"nav-logo",children:Le.jsx("img",{src:"/sj-logo.svg",alt:"SJ",className:"logo-img"})}),Le.jsx(Ko,{to:"/experience",className:"nav-item",children:"Experience"}),Le.jsx(Ko,{to:"/skills",className:"nav-item",children:"Skills"}),Le.jsx(Ko,{to:"/projects",className:"nav-item",children:"Projects"})]})})}const fc="https://portfolio-backend-production-e259.up.railway.app";async function fE(){return(await fetch(`${fc}/api/profile`)).json()}async function hE(){return(await fetch(`${fc}/api/experience`)).json()}async function dE(){return(await fetch(`${fc}/api/skills`)).json()}async function pE(){return(await fetch(`${fc}/api/projects`)).json()}const cp="182",mE=0,__=1,gE=2,Qu=1,_E=2,Qo=3,rr=0,qn=1,ma=2,va=0,Os=1,v_=2,x_=3,S_=4,vE=5,Ur=100,xE=101,SE=102,yE=103,ME=104,EE=200,bE=201,TE=202,AE=203,ud=204,cd=205,RE=206,CE=207,wE=208,DE=209,UE=210,LE=211,NE=212,OE=213,PE=214,fd=0,hd=1,dd=2,Fs=3,pd=4,md=5,gd=6,_d=7,Bv=0,FE=1,BE=2,Gi=0,zv=1,Iv=2,Hv=3,Gv=4,Vv=5,kv=6,Xv=7,Wv=300,Pr=301,Bs=302,vd=303,xd=304,hc=306,Sd=1e3,ga=1001,yd=1002,wn=1003,zE=1004,bu=1005,On=1006,wh=1007,Nr=1008,_i=1009,qv=1010,Yv=1011,el=1012,fp=1013,ki=1014,Ii=1015,ya=1016,hp=1017,dp=1018,tl=1020,jv=35902,Zv=35899,Kv=1021,Qv=1022,Di=1023,Ma=1026,Or=1027,Jv=1028,pp=1029,zs=1030,mp=1031,gp=1033,Ju=33776,$u=33777,ec=33778,tc=33779,Md=35840,Ed=35841,bd=35842,Td=35843,Ad=36196,Rd=37492,Cd=37496,wd=37488,Dd=37489,Ud=37490,Ld=37491,Nd=37808,Od=37809,Pd=37810,Fd=37811,Bd=37812,zd=37813,Id=37814,Hd=37815,Gd=37816,Vd=37817,kd=37818,Xd=37819,Wd=37820,qd=37821,Yd=36492,jd=36494,Zd=36495,Kd=36283,Qd=36284,Jd=36285,$d=36286,IE=3200,HE=0,GE=1,ir="",mi="srgb",Is="srgb-linear",ac="linear",It="srgb",Ss=7680,y_=519,VE=512,kE=513,XE=514,_p=515,WE=516,qE=517,vp=518,YE=519,M_=35044,E_="300 es",Hi=2e3,rc=2001;function $v(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function sc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function jE(){const s=sc("canvas");return s.style.display="block",s}const b_={};function T_(...s){const e="THREE."+s.shift();console.log(e,...s)}function rt(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Rt(...s){const e="THREE."+s.shift();console.error(e,...s)}function nl(...s){const e=s.join(" ");e in b_||(b_[e]=!0,rt(...s))}function ZE(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class Vs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dh=Math.PI/180,ep=180/Math.PI;function ol(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function yt(s,e,i){return Math.max(e,Math.min(i,s))}function KE(s,e){return(s%e+e)%e}function Uh(s,e,i){return(1-i)*s+i*e}function Go(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Wn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class kt{constructor(e=0,i=0){kt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*l+e.x,this.y=u*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ll{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,f,d){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3],S=u[f+0],M=u[f+1],b=u[f+2],T=u[f+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g;return}if(d>=1){e[i+0]=S,e[i+1]=M,e[i+2]=b,e[i+3]=T;return}if(g!==T||m!==S||p!==M||_!==b){let y=m*S+p*M+_*b+g*T;y<0&&(S=-S,M=-M,b=-b,T=-T,y=-y);let v=1-d;if(y<.9995){const w=Math.acos(y),U=Math.sin(w);v=Math.sin(v*w)/U,d=Math.sin(d*w)/U,m=m*v+S*d,p=p*v+M*d,_=_*v+b*d,g=g*v+T*d}else{m=m*v+S*d,p=p*v+M*d,_=_*v+b*d,g=g*v+T*d;const w=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=w,p*=w,_*=w,g*=w}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,u,f){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=u[f],S=u[f+1],M=u[f+2],b=u[f+3];return e[i]=d*b+_*g+m*M-p*S,e[i+1]=m*b+_*S+p*g-d*M,e[i+2]=p*b+_*M+d*S-m*g,e[i+3]=_*b-d*g-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,f=e._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),g=d(u/2),S=m(r/2),M=m(l/2),b=m(u/2);switch(f){case"XYZ":this._x=S*_*g+p*M*b,this._y=p*M*g-S*_*b,this._z=p*_*b+S*M*g,this._w=p*_*g-S*M*b;break;case"YXZ":this._x=S*_*g+p*M*b,this._y=p*M*g-S*_*b,this._z=p*_*b-S*M*g,this._w=p*_*g+S*M*b;break;case"ZXY":this._x=S*_*g-p*M*b,this._y=p*M*g+S*_*b,this._z=p*_*b+S*M*g,this._w=p*_*g-S*M*b;break;case"ZYX":this._x=S*_*g-p*M*b,this._y=p*M*g+S*_*b,this._z=p*_*b-S*M*g,this._w=p*_*g+S*M*b;break;case"YZX":this._x=S*_*g+p*M*b,this._y=p*M*g+S*_*b,this._z=p*_*b-S*M*g,this._w=p*_*g-S*M*b;break;case"XZY":this._x=S*_*g-p*M*b,this._y=p*M*g-S*_*b,this._z=p*_*b+S*M*g,this._w=p*_*g+S*M*b;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],f=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],S=r+d+g;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(f-l)*M}else if(r>d&&r>g){const M=2*Math.sqrt(1+r-d-g);this._w=(_-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(u+p)/M}else if(d>g){const M=2*Math.sqrt(1+d-r-g);this._w=(u-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+g-r-d);this._w=(f-l)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,f=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+f*d+l*p-u*m,this._y=l*_+f*m+u*d-r*p,this._z=u*_+f*p+r*m-l*d,this._w=f*_-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,u=e._z,f=e._w,d=this.dot(e);d<0&&(r=-r,l=-l,u=-u,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,i=0,r=0){te.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(A_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(A_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,f=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,f=e.y,d=e.z,m=e.w,p=2*(f*l-d*r),_=2*(d*i-u*l),g=2*(u*r-f*i);return this.x=i+m*p+f*g-d*_,this.y=r+m*_+d*p-u*g,this.z=l+m*g+u*_-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*f-r*m,this.z=r*d-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Lh.copy(this).projectOnVector(e),this.sub(Lh)}reflect(e){return this.sub(Lh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lh=new te,A_=new ll;class ft{constructor(e,i,r,l,u,f,d,m,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,f,d,m,p)}set(e,i,r,l,u,f,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,f=r[0],d=r[3],m=r[6],p=r[1],_=r[4],g=r[7],S=r[2],M=r[5],b=r[8],T=l[0],y=l[3],v=l[6],w=l[1],U=l[4],O=l[7],B=l[2],F=l[5],P=l[8];return u[0]=f*T+d*w+m*B,u[3]=f*y+d*U+m*F,u[6]=f*v+d*O+m*P,u[1]=p*T+_*w+g*B,u[4]=p*y+_*U+g*F,u[7]=p*v+_*O+g*P,u[2]=S*T+M*w+b*B,u[5]=S*y+M*U+b*F,u[8]=S*v+M*O+b*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*f*_-i*d*p-r*u*_+r*d*m+l*u*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=_*f-d*p,S=d*m-_*u,M=p*u-f*m,b=i*g+r*S+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=g*T,e[1]=(l*p-_*r)*T,e[2]=(d*r-l*f)*T,e[3]=S*T,e[4]=(_*i-l*m)*T,e[5]=(l*u-d*i)*T,e[6]=M*T,e[7]=(r*m-p*i)*T,e[8]=(f*i-r*u)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,f,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*f+p*d)+f+e,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Nh.makeScale(e,i)),this}rotate(e){return this.premultiply(Nh.makeRotation(-e)),this}translate(e,i){return this.premultiply(Nh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nh=new ft,R_=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),C_=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QE(){const s={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===It&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===It&&(l.r=Ps(l.r),l.g=Ps(l.g),l.b=Ps(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ir?ac:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return nl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return nl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Is]:{primaries:e,whitePoint:r,transfer:ac,toXYZ:R_,fromXYZ:C_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:r,transfer:It,toXYZ:R_,fromXYZ:C_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),s}const bt=QE();function xa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ys;class JE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ys===void 0&&(ys=sc("canvas")),ys.width=e.width,ys.height=e.height;const l=ys.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ys}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=sc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=xa(u[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(xa(i[r]/255)*255):i[r]=xa(i[r]);return{data:i,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $E=0;class xp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=ol(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?u.push(Oh(l[f].image)):u.push(Oh(l[f]))}else u=Oh(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Oh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?JE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let eb=0;const Ph=new te;class Bn extends Vs{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,r=ga,l=ga,u=On,f=Nr,d=Di,m=_i,p=Bn.DEFAULT_ANISOTROPY,_=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=ol(),this.name="",this.source=new xp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ph).x}get height(){return this.source.getSize(Ph).y}get depth(){return this.source.getSize(Ph).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){rt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sd:e.x=e.x-Math.floor(e.x);break;case ga:e.x=e.x<0?0:1;break;case yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sd:e.y=e.y-Math.floor(e.y);break;case ga:e.y=e.y<0?0:1;break;case yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Wv;Bn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,i=0,r=0,l=1){sn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],_=m[4],g=m[8],S=m[1],M=m[5],b=m[9],T=m[2],y=m[6],v=m[10];if(Math.abs(_-S)<.01&&Math.abs(g-T)<.01&&Math.abs(b-y)<.01){if(Math.abs(_+S)<.1&&Math.abs(g+T)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,O=(M+1)/2,B=(v+1)/2,F=(_+S)/4,P=(g+T)/4,j=(b+y)/4;return U>O&&U>B?U<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(U),l=F/r,u=P/r):O>B?O<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(O),r=F/l,u=j/l):B<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(B),r=P/u,l=j/u),this.set(r,l,u,i),this}let w=Math.sqrt((y-b)*(y-b)+(g-T)*(g-T)+(S-_)*(S-_));return Math.abs(w)<.001&&(w=1),this.x=(y-b)/w,this.y=(g-T)/w,this.z=(S-_)/w,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this.w=yt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this.w=yt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tb extends Vs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Bn(l);this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new xp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends tb{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class ex extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nb extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ul{constructor(e=new te(1/0,1/0,1/0),i=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ai.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ai.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ai.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Ai):Ai.fromBufferAttribute(u,f),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Tu.copy(r.boundingBox)),Tu.applyMatrix4(e.matrixWorld),this.union(Tu)}const l=e.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),Au.subVectors(this.max,Vo),Ms.subVectors(e.a,Vo),Es.subVectors(e.b,Vo),bs.subVectors(e.c,Vo),Qa.subVectors(Es,Ms),Ja.subVectors(bs,Es),br.subVectors(Ms,bs);let i=[0,-Qa.z,Qa.y,0,-Ja.z,Ja.y,0,-br.z,br.y,Qa.z,0,-Qa.x,Ja.z,0,-Ja.x,br.z,0,-br.x,-Qa.y,Qa.x,0,-Ja.y,Ja.x,0,-br.y,br.x,0];return!Fh(i,Ms,Es,bs,Au)||(i=[1,0,0,0,1,0,0,0,1],!Fh(i,Ms,Es,bs,Au))?!1:(Ru.crossVectors(Qa,Ja),i=[Ru.x,Ru.y,Ru.z],Fh(i,Ms,Es,bs,Au))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ca),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ca=[new te,new te,new te,new te,new te,new te,new te,new te],Ai=new te,Tu=new ul,Ms=new te,Es=new te,bs=new te,Qa=new te,Ja=new te,br=new te,Vo=new te,Au=new te,Ru=new te,Tr=new te;function Fh(s,e,i,r,l){for(let u=0,f=s.length-3;u<=f;u+=3){Tr.fromArray(s,u);const d=l.x*Math.abs(Tr.x)+l.y*Math.abs(Tr.y)+l.z*Math.abs(Tr.z),m=e.dot(Tr),p=i.dot(Tr),_=r.dot(Tr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const ib=new ul,ko=new te,Bh=new te;class cl{constructor(e=new te,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):ib.setFromPoints(e).getCenter(r);let l=0;for(let u=0,f=e.length;u<f;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const i=ko.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(ko,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(Bh)),this.expandByPoint(ko.copy(e.center).sub(Bh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fa=new te,zh=new te,Cu=new te,$a=new te,Ih=new te,wu=new te,Hh=new te;class Sp{constructor(e=new te,i=new te(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=fa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(fa.copy(this.origin).addScaledVector(this.direction,i),fa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){zh.copy(e).add(i).multiplyScalar(.5),Cu.copy(i).sub(e).normalize(),$a.copy(this.origin).sub(zh);const u=e.distanceTo(i)*.5,f=-this.direction.dot(Cu),d=$a.dot(this.direction),m=-$a.dot(Cu),p=$a.lengthSq(),_=Math.abs(1-f*f);let g,S,M,b;if(_>0)if(g=f*m-d,S=f*d-m,b=u*_,g>=0)if(S>=-b)if(S<=b){const T=1/_;g*=T,S*=T,M=g*(g+f*S+2*d)+S*(f*g+S+2*m)+p}else S=u,g=Math.max(0,-(f*S+d)),M=-g*g+S*(S+2*m)+p;else S=-u,g=Math.max(0,-(f*S+d)),M=-g*g+S*(S+2*m)+p;else S<=-b?(g=Math.max(0,-(-f*u+d)),S=g>0?-u:Math.min(Math.max(-u,-m),u),M=-g*g+S*(S+2*m)+p):S<=b?(g=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(g=Math.max(0,-(f*u+d)),S=g>0?u:Math.min(Math.max(-u,-m),u),M=-g*g+S*(S+2*m)+p);else S=f>0?-u:u,g=Math.max(0,-(f*S+d)),M=-g*g+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(zh).addScaledVector(Cu,S),M}intersectSphere(e,i){fa.subVectors(e.center,this.origin);const r=fa.dot(this.direction),l=fa.dot(fa)-r*r,u=e.radius*e.radius;if(l>u)return null;const f=Math.sqrt(u-l),d=r-f,m=r+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,f,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),_>=0?(u=(e.min.y-S.y)*_,f=(e.max.y-S.y)*_):(u=(e.max.y-S.y)*_,f=(e.min.y-S.y)*_),r>f||u>l||((u>r||isNaN(r))&&(r=u),(f<l||isNaN(l))&&(l=f),g>=0?(d=(e.min.z-S.z)*g,m=(e.max.z-S.z)*g):(d=(e.max.z-S.z)*g,m=(e.min.z-S.z)*g),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,fa)!==null}intersectTriangle(e,i,r,l,u){Ih.subVectors(i,e),wu.subVectors(r,e),Hh.crossVectors(Ih,wu);let f=this.direction.dot(Hh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;$a.subVectors(this.origin,e);const m=d*this.direction.dot(wu.crossVectors($a,wu));if(m<0)return null;const p=d*this.direction.dot(Ih.cross($a));if(p<0||m+p>f)return null;const _=-d*$a.dot(Hh);return _<0?null:this.at(_/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(e,i,r,l,u,f,d,m,p,_,g,S,M,b,T,y){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,f,d,m,p,_,g,S,M,b,T,y)}set(e,i,r,l,u,f,d,m,p,_,g,S,M,b,T,y){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=f,v[9]=d,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=S,v[3]=M,v[7]=b,v[11]=T,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Ts.setFromMatrixColumn(e,0).length(),u=1/Ts.setFromMatrixColumn(e,1).length(),f=1/Ts.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const S=f*_,M=f*g,b=d*_,T=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=M+b*p,i[5]=S-T*p,i[9]=-d*m,i[2]=T-S*p,i[6]=b+M*p,i[10]=f*m}else if(e.order==="YXZ"){const S=m*_,M=m*g,b=p*_,T=p*g;i[0]=S+T*d,i[4]=b*d-M,i[8]=f*p,i[1]=f*g,i[5]=f*_,i[9]=-d,i[2]=M*d-b,i[6]=T+S*d,i[10]=f*m}else if(e.order==="ZXY"){const S=m*_,M=m*g,b=p*_,T=p*g;i[0]=S-T*d,i[4]=-f*g,i[8]=b+M*d,i[1]=M+b*d,i[5]=f*_,i[9]=T-S*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(e.order==="ZYX"){const S=f*_,M=f*g,b=d*_,T=d*g;i[0]=m*_,i[4]=b*p-M,i[8]=S*p+T,i[1]=m*g,i[5]=T*p+S,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(e.order==="YZX"){const S=f*m,M=f*p,b=d*m,T=d*p;i[0]=m*_,i[4]=T-S*g,i[8]=b*g+M,i[1]=g,i[5]=f*_,i[9]=-d*_,i[2]=-p*_,i[6]=M*g+b,i[10]=S-T*g}else if(e.order==="XZY"){const S=f*m,M=f*p,b=d*m,T=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=S*g+T,i[5]=f*_,i[9]=M*g-b,i[2]=b*g-M,i[6]=d*_,i[10]=T*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ab,e,rb)}lookAt(e,i,r){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),er.crossVectors(r,ti),er.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),er.crossVectors(r,ti)),er.normalize(),Du.crossVectors(ti,er),l[0]=er.x,l[4]=Du.x,l[8]=ti.x,l[1]=er.y,l[5]=Du.y,l[9]=ti.y,l[2]=er.z,l[6]=Du.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,f=r[0],d=r[4],m=r[8],p=r[12],_=r[1],g=r[5],S=r[9],M=r[13],b=r[2],T=r[6],y=r[10],v=r[14],w=r[3],U=r[7],O=r[11],B=r[15],F=l[0],P=l[4],j=l[8],C=l[12],D=l[1],k=l[5],re=l[9],ae=l[13],pe=l[2],ce=l[6],z=l[10],H=l[14],ie=l[3],Me=l[7],Se=l[11],N=l[15];return u[0]=f*F+d*D+m*pe+p*ie,u[4]=f*P+d*k+m*ce+p*Me,u[8]=f*j+d*re+m*z+p*Se,u[12]=f*C+d*ae+m*H+p*N,u[1]=_*F+g*D+S*pe+M*ie,u[5]=_*P+g*k+S*ce+M*Me,u[9]=_*j+g*re+S*z+M*Se,u[13]=_*C+g*ae+S*H+M*N,u[2]=b*F+T*D+y*pe+v*ie,u[6]=b*P+T*k+y*ce+v*Me,u[10]=b*j+T*re+y*z+v*Se,u[14]=b*C+T*ae+y*H+v*N,u[3]=w*F+U*D+O*pe+B*ie,u[7]=w*P+U*k+O*ce+B*Me,u[11]=w*j+U*re+O*z+B*Se,u[15]=w*C+U*ae+O*H+B*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],f=e[1],d=e[5],m=e[9],p=e[13],_=e[2],g=e[6],S=e[10],M=e[14],b=e[3],T=e[7],y=e[11],v=e[15],w=m*M-p*S,U=d*M-p*g,O=d*S-m*g,B=f*M-p*_,F=f*S-m*_,P=f*g-d*_;return i*(T*w-y*U+v*O)-r*(b*w-y*B+v*F)+l*(b*U-T*B+v*P)-u*(b*O-T*F+y*P)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=e[9],S=e[10],M=e[11],b=e[12],T=e[13],y=e[14],v=e[15],w=g*y*p-T*S*p+T*m*M-d*y*M-g*m*v+d*S*v,U=b*S*p-_*y*p-b*m*M+f*y*M+_*m*v-f*S*v,O=_*T*p-b*g*p+b*d*M-f*T*M-_*d*v+f*g*v,B=b*g*m-_*T*m-b*d*S+f*T*S+_*d*y-f*g*y,F=i*w+r*U+l*O+u*B;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/F;return e[0]=w*P,e[1]=(T*S*u-g*y*u-T*l*M+r*y*M+g*l*v-r*S*v)*P,e[2]=(d*y*u-T*m*u+T*l*p-r*y*p-d*l*v+r*m*v)*P,e[3]=(g*m*u-d*S*u-g*l*p+r*S*p+d*l*M-r*m*M)*P,e[4]=U*P,e[5]=(_*y*u-b*S*u+b*l*M-i*y*M-_*l*v+i*S*v)*P,e[6]=(b*m*u-f*y*u-b*l*p+i*y*p+f*l*v-i*m*v)*P,e[7]=(f*S*u-_*m*u+_*l*p-i*S*p-f*l*M+i*m*M)*P,e[8]=O*P,e[9]=(b*g*u-_*T*u-b*r*M+i*T*M+_*r*v-i*g*v)*P,e[10]=(f*T*u-b*d*u+b*r*p-i*T*p-f*r*v+i*d*v)*P,e[11]=(_*d*u-f*g*u-_*r*p+i*g*p+f*r*M-i*d*M)*P,e[12]=B*P,e[13]=(_*T*l-b*g*l+b*r*S-i*T*S-_*r*y+i*g*y)*P,e[14]=(b*d*l-f*T*l-b*r*m+i*T*m+f*r*y-i*d*y)*P,e[15]=(f*g*l-_*d*l+_*r*m-i*g*m-f*r*S+i*d*S)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,f=e.x,d=e.y,m=e.z,p=u*f,_=u*d;return this.set(p*f+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*f,0,p*m-l*d,_*m+l*f,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,f){return this.set(1,r,u,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,f=i._y,d=i._z,m=i._w,p=u+u,_=f+f,g=d+d,S=u*p,M=u*_,b=u*g,T=f*_,y=f*g,v=d*g,w=m*p,U=m*_,O=m*g,B=r.x,F=r.y,P=r.z;return l[0]=(1-(T+v))*B,l[1]=(M+O)*B,l[2]=(b-U)*B,l[3]=0,l[4]=(M-O)*F,l[5]=(1-(S+v))*F,l[6]=(y+w)*F,l[7]=0,l[8]=(b+U)*P,l[9]=(y-w)*P,l[10]=(1-(S+T))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let u=Ts.set(l[0],l[1],l[2]).length();const f=Ts.set(l[4],l[5],l[6]).length(),d=Ts.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),Ri.copy(this);const p=1/u,_=1/f,g=1/d;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=_,Ri.elements[5]*=_,Ri.elements[6]*=_,Ri.elements[8]*=g,Ri.elements[9]*=g,Ri.elements[10]*=g,i.setFromRotationMatrix(Ri),r.x=u,r.y=f,r.z=d,this}makePerspective(e,i,r,l,u,f,d=Hi,m=!1){const p=this.elements,_=2*u/(i-e),g=2*u/(r-l),S=(i+e)/(i-e),M=(r+l)/(r-l);let b,T;if(m)b=u/(f-u),T=f*u/(f-u);else if(d===Hi)b=-(f+u)/(f-u),T=-2*f*u/(f-u);else if(d===rc)b=-f/(f-u),T=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,f,d=Hi,m=!1){const p=this.elements,_=2/(i-e),g=2/(r-l),S=-(i+e)/(i-e),M=-(r+l)/(r-l);let b,T;if(m)b=1/(f-u),T=f/(f-u);else if(d===Hi)b=-2/(f-u),T=-(f+u)/(f-u);else if(d===rc)b=-1/(f-u),T=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Ts=new te,Ri=new nn,ab=new te(0,0,0),rb=new te(1,1,1),er=new te,Du=new te,ti=new te,w_=new nn,D_=new ll;class Ea{constructor(e=0,i=0,r=0,l=Ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],f=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(yt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return w_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(w_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return D_.setFromEuler(this),this.setFromQuaternion(D_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ea.DEFAULT_ORDER="XYZ";class tx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sb=0;const U_=new te,As=new ll,ha=new nn,Uu=new te,Xo=new te,ob=new te,lb=new ll,L_=new te(1,0,0),N_=new te(0,1,0),O_=new te(0,0,1),P_={type:"added"},ub={type:"removed"},Rs={type:"childadded",child:null},Gh={type:"childremoved",child:null};class zn extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new te,i=new Ea,r=new ll,l=new te(1,1,1);function u(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new ft}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return As.setFromAxisAngle(e,i),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,i){return As.setFromAxisAngle(e,i),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(L_,e)}rotateY(e){return this.rotateOnAxis(N_,e)}rotateZ(e){return this.rotateOnAxis(O_,e)}translateOnAxis(e,i){return U_.copy(e).applyQuaternion(this.quaternion),this.position.add(U_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(L_,e)}translateY(e){return this.translateOnAxis(N_,e)}translateZ(e){return this.translateOnAxis(O_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Uu.copy(e):Uu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(Xo,Uu,this.up):ha.lookAt(Uu,Xo,this.up),this.quaternion.setFromRotationMatrix(ha),l&&(ha.extractRotation(l.matrixWorld),As.setFromRotationMatrix(ha),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(P_),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ub),Gh.child=e,this.dispatchEvent(Gh),Gh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ha.multiply(e.parent.matrixWorld)),e.applyMatrix4(ha),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(P_),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,ob),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,lb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];u(e.shapes,g)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=f(e.geometries),m=f(e.materials),p=f(e.textures),_=f(e.images),g=f(e.shapes),S=f(e.skeletons),M=f(e.animations),b=f(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function f(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}zn.DEFAULT_UP=new te(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new te,da=new te,Vh=new te,pa=new te,Cs=new te,ws=new te,F_=new te,kh=new te,Xh=new te,Wh=new te,qh=new sn,Yh=new sn,jh=new sn;class wi{constructor(e=new te,i=new te,r=new te){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ci.subVectors(e,i),l.cross(Ci);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Ci.subVectors(l,i),da.subVectors(r,i),Vh.subVectors(e,i);const f=Ci.dot(Ci),d=Ci.dot(da),m=Ci.dot(Vh),p=da.dot(da),_=da.dot(Vh),g=f*p-d*d;if(g===0)return u.set(0,0,0),null;const S=1/g,M=(p*m-d*_)*S,b=(f*_-d*m)*S;return u.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(e,i,r,l,u,f,d,m){return this.getBarycoord(e,i,r,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,pa.x),m.addScaledVector(f,pa.y),m.addScaledVector(d,pa.z),m)}static getInterpolatedAttribute(e,i,r,l,u,f){return qh.setScalar(0),Yh.setScalar(0),jh.setScalar(0),qh.fromBufferAttribute(e,i),Yh.fromBufferAttribute(e,r),jh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(qh,u.x),f.addScaledVector(Yh,u.y),f.addScaledVector(jh,u.z),f}static isFrontFacing(e,i,r,l){return Ci.subVectors(r,i),da.subVectors(e,i),Ci.cross(da).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ci.cross(da).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return wi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return wi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let f,d;Cs.subVectors(l,r),ws.subVectors(u,r),kh.subVectors(e,r);const m=Cs.dot(kh),p=ws.dot(kh);if(m<=0&&p<=0)return i.copy(r);Xh.subVectors(e,l);const _=Cs.dot(Xh),g=ws.dot(Xh);if(_>=0&&g<=_)return i.copy(l);const S=m*g-_*p;if(S<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(r).addScaledVector(Cs,f);Wh.subVectors(e,u);const M=Cs.dot(Wh),b=ws.dot(Wh);if(b>=0&&M<=b)return i.copy(u);const T=M*p-m*b;if(T<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(ws,d);const y=_*b-M*g;if(y<=0&&g-_>=0&&M-b>=0)return F_.subVectors(u,l),d=(g-_)/(g-_+(M-b)),i.copy(l).addScaledVector(F_,d);const v=1/(y+T+S);return f=T*v,d=S*v,i.copy(r).addScaledVector(Cs,f).addScaledVector(ws,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},Lu={h:0,s:0,l:0};function Zh(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Ot{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=bt.workingColorSpace){return this.r=e,this.g=i,this.b=r,bt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=bt.workingColorSpace){if(e=KE(e,1),i=yt(i,0,1),r=yt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,f=2*r-u;this.r=Zh(f,u,e+1/3),this.g=Zh(f,u,e),this.b=Zh(f,u,e-1/3)}return bt.colorSpaceToWorking(this,l),this}setStyle(e,i=mi){function r(u){u!==void 0&&parseFloat(u)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:rt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=mi){const r=nx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return bt.workingToColorSpace(Nn.copy(this),e),Math.round(yt(Nn.r*255,0,255))*65536+Math.round(yt(Nn.g*255,0,255))*256+Math.round(yt(Nn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=bt.workingColorSpace){bt.workingToColorSpace(Nn.copy(this),i);const r=Nn.r,l=Nn.g,u=Nn.b,f=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const _=(d+f)/2;if(d===f)m=0,p=0;else{const g=f-d;switch(p=_<=.5?g/(f+d):g/(2-f-d),f){case r:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-r)/g+2;break;case u:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=bt.workingColorSpace){return bt.workingToColorSpace(Nn.copy(this),i),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=mi){bt.workingToColorSpace(Nn.copy(this),e);const i=Nn.r,r=Nn.g,l=Nn.b;return e!==mi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+i,tr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(tr),e.getHSL(Lu);const r=Uh(tr.h,Lu.h,i),l=Uh(tr.s,Lu.s,i),u=Uh(tr.l,Lu.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Ot;Ot.NAMES=nx;let cb=0;class ks extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=ol(),this.name="",this.type="Material",this.blending=Os,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ud,this.blendDst=cd,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=y_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){rt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(r.blending=this.blending),this.side!==rr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ud&&(r.blendSrc=this.blendSrc),this.blendDst!==cd&&(r.blendDst=this.blendDst),this.blendEquation!==Ur&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==y_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const f=[];for(const d in u){const m=u[d];delete m.metadata,f.push(m)}return f}if(i){const u=l(e.textures),f=l(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yp extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ea,this.combine=Bv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new te,Nu=new kt;let fb=0;class Ui{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=M_,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Nu.fromBufferAttribute(this,i),Nu.applyMatrix3(e),this.setXY(i,Nu.x,Nu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Go(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Wn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Go(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Go(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Go(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Go(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array),l=Wn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array),l=Wn(l,this.array),u=Wn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==M_&&(e.usage=this.usage),e}}class ix extends Ui{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class ax extends Ui{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class ii extends Ui{constructor(e,i,r){super(new Float32Array(e),i,r)}}let hb=0;const pi=new nn,Kh=new zn,Ds=new te,ni=new ul,Wo=new ul,vn=new te;class Yn extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($v(e)?ax:ix)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ft().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,i,r){return pi.makeTranslation(e,i,r),this.applyMatrix4(pi),this}scale(e,i,r){return pi.makeScale(e,i,r),this.applyMatrix4(pi),this}lookAt(e){return Kh.lookAt(e),Kh.updateMatrix(),this.applyMatrix4(Kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ii(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ul);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ni.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),i)for(let u=0,f=i.length;u<f;u++){const d=i[u];Wo.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(ni.min,Wo.min),ni.expandByPoint(vn),vn.addVectors(ni.max,Wo.max),ni.expandByPoint(vn)):(ni.expandByPoint(Wo.min),ni.expandByPoint(Wo.max))}ni.getCenter(r);let l=0;for(let u=0,f=e.count;u<f;u++)vn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let u=0,f=i.length;u<f;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)vn.fromBufferAttribute(d,p),m&&(Ds.fromBufferAttribute(e,p),vn.add(Ds)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<r.count;j++)d[j]=new te,m[j]=new te;const p=new te,_=new te,g=new te,S=new kt,M=new kt,b=new kt,T=new te,y=new te;function v(j,C,D){p.fromBufferAttribute(r,j),_.fromBufferAttribute(r,C),g.fromBufferAttribute(r,D),S.fromBufferAttribute(u,j),M.fromBufferAttribute(u,C),b.fromBufferAttribute(u,D),_.sub(p),g.sub(p),M.sub(S),b.sub(S);const k=1/(M.x*b.y-b.x*M.y);isFinite(k)&&(T.copy(_).multiplyScalar(b.y).addScaledVector(g,-M.y).multiplyScalar(k),y.copy(g).multiplyScalar(M.x).addScaledVector(_,-b.x).multiplyScalar(k),d[j].add(T),d[C].add(T),d[D].add(T),m[j].add(y),m[C].add(y),m[D].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let j=0,C=w.length;j<C;++j){const D=w[j],k=D.start,re=D.count;for(let ae=k,pe=k+re;ae<pe;ae+=3)v(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const U=new te,O=new te,B=new te,F=new te;function P(j){B.fromBufferAttribute(l,j),F.copy(B);const C=d[j];U.copy(C),U.sub(B.multiplyScalar(B.dot(C))).normalize(),O.crossVectors(F,C);const k=O.dot(m[j])<0?-1:1;f.setXYZW(j,U.x,U.y,U.z,k)}for(let j=0,C=w.length;j<C;++j){const D=w[j],k=D.start,re=D.count;for(let ae=k,pe=k+re;ae<pe;ae+=3)P(e.getX(ae+0)),P(e.getX(ae+1)),P(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new te,u=new te,f=new te,d=new te,m=new te,p=new te,_=new te,g=new te;if(e)for(let S=0,M=e.count;S<M;S+=3){const b=e.getX(S+0),T=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,y),_.subVectors(f,u),g.subVectors(l,u),_.cross(g),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,y),d.add(_),m.add(_),p.add(_),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),f.fromBufferAttribute(i,S+2),_.subVectors(f,u),g.subVectors(l,u),_.cross(g),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,g=d.normalized,S=new p.constructor(m.length*_);let M=0,b=0;for(let T=0,y=m.length;T<y;T++){d.isInterleavedBufferAttribute?M=m[T]*d.data.stride+d.offset:M=m[T]*_;for(let v=0;v<_;v++)S[b++]=p[M++]}return new Ui(S,_,g)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Yn,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,g=p.length;_<g;_++){const S=p[_],M=e(S,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,S=p.length;g<S;g++){const M=p[g];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=e.morphAttributes;for(const p in u){const _=[],g=u[p];for(let S=0,M=g.length;S<M;S++)_.push(g[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,_=f.length;p<_;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const B_=new nn,Ar=new Sp,Ou=new cl,z_=new te,Pu=new te,Fu=new te,Bu=new te,Qh=new te,zu=new te,I_=new te,Iu=new te;class Xi extends zn{constructor(e=new Yn,i=new yp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){zu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],g=u[m];_!==0&&(Qh.fromBufferAttribute(g,e),f?zu.addScaledVector(Qh,_):zu.addScaledVector(Qh.sub(i),_))}i.add(zu)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ou.copy(r.boundingSphere),Ou.applyMatrix4(u),Ar.copy(e.ray).recast(e.near),!(Ou.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Ou,z_)===null||Ar.origin.distanceToSquared(z_)>(e.far-e.near)**2))&&(B_.copy(u).invert(),Ar.copy(e.ray).applyMatrix4(B_),!(r.boundingBox!==null&&Ar.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Ar)))}_computeIntersections(e,i,r){let l;const u=this.geometry,f=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(f))for(let b=0,T=S.length;b<T;b++){const y=S[b],v=f[y.materialIndex],w=Math.max(y.start,M.start),U=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let O=w,B=U;O<B;O+=3){const F=d.getX(O),P=d.getX(O+1),j=d.getX(O+2);l=Hu(this,v,e,r,p,_,g,F,P,j),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let y=b,v=T;y<v;y+=3){const w=d.getX(y),U=d.getX(y+1),O=d.getX(y+2);l=Hu(this,f,e,r,p,_,g,w,U,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,T=S.length;b<T;b++){const y=S[b],v=f[y.materialIndex],w=Math.max(y.start,M.start),U=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let O=w,B=U;O<B;O+=3){const F=O,P=O+1,j=O+2;l=Hu(this,v,e,r,p,_,g,F,P,j),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),T=Math.min(m.count,M.start+M.count);for(let y=b,v=T;y<v;y+=3){const w=y,U=y+1,O=y+2;l=Hu(this,f,e,r,p,_,g,w,U,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function db(s,e,i,r,l,u,f,d){let m;if(e.side===qn?m=r.intersectTriangle(f,u,l,!0,d):m=r.intersectTriangle(l,u,f,e.side===rr,d),m===null)return null;Iu.copy(d),Iu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Iu);return p<i.near||p>i.far?null:{distance:p,point:Iu.clone(),object:s}}function Hu(s,e,i,r,l,u,f,d,m,p){s.getVertexPosition(d,Pu),s.getVertexPosition(m,Fu),s.getVertexPosition(p,Bu);const _=db(s,e,i,r,Pu,Fu,Bu,I_);if(_){const g=new te;wi.getBarycoord(I_,Pu,Fu,Bu,g),l&&(_.uv=wi.getInterpolatedAttribute(l,d,m,p,g,new kt)),u&&(_.uv1=wi.getInterpolatedAttribute(u,d,m,p,g,new kt)),f&&(_.normal=wi.getInterpolatedAttribute(f,d,m,p,g,new te),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new te,materialIndex:0};wi.getNormal(Pu,Fu,Bu,S.normal),_.face=S,_.barycoord=g}return _}class fl extends Yn{constructor(e=1,i=1,r=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:f};const d=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const m=[],p=[],_=[],g=[];let S=0,M=0;b("z","y","x",-1,-1,r,i,e,f,u,0),b("z","y","x",1,-1,r,i,-e,f,u,1),b("x","z","y",1,1,e,r,i,l,f,2),b("x","z","y",1,-1,e,r,-i,l,f,3),b("x","y","z",1,-1,e,i,r,l,u,4),b("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new ii(p,3)),this.setAttribute("normal",new ii(_,3)),this.setAttribute("uv",new ii(g,2));function b(T,y,v,w,U,O,B,F,P,j,C){const D=O/P,k=B/j,re=O/2,ae=B/2,pe=F/2,ce=P+1,z=j+1;let H=0,ie=0;const Me=new te;for(let Se=0;Se<z;Se++){const N=Se*k-ae;for(let ne=0;ne<ce;ne++){const _e=ne*D-re;Me[T]=_e*w,Me[y]=N*U,Me[v]=pe,p.push(Me.x,Me.y,Me.z),Me[T]=0,Me[y]=0,Me[v]=F>0?1:-1,_.push(Me.x,Me.y,Me.z),g.push(ne/P),g.push(1-Se/j),H+=1}}for(let Se=0;Se<j;Se++)for(let N=0;N<P;N++){const ne=S+N+ce*Se,_e=S+N+ce*(Se+1),Ae=S+(N+1)+ce*(Se+1),He=S+(N+1)+ce*Se;m.push(ne,_e,He),m.push(_e,Ae,He),ie+=6}d.addGroup(M,ie,C),M+=ie,S+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Fn(s){const e={};for(let i=0;i<s.length;i++){const r=Hs(s[i]);for(const l in r)e[l]=r[l]}return e}function pb(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function rx(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const mb={clone:Hs,merge:Fn};var gb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_b=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gb,this.fragmentShader=_b,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=pb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class sx extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new te,H_=new kt,G_=new kt;class gi extends sx{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ep*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ep*2*Math.atan(Math.tan(Dh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,i){return this.getViewBounds(e,H_,G_),i.subVectors(G_,H_)}setViewOffset(e,i,r,l,u,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Dh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;u+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Us=-90,Ls=1;class vb extends zn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new gi(Us,Ls,e,i);l.layers=this.layers,this.add(l);const u=new gi(Us,Ls,e,i);u.layers=this.layers,this.add(u);const f=new gi(Us,Ls,e,i);f.layers=this.layers,this.add(f);const d=new gi(Us,Ls,e,i);d.layers=this.layers,this.add(d);const m=new gi(Us,Ls,e,i);m.layers=this.layers,this.add(m);const p=new gi(Us,Ls,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,f,d,m]=i;for(const p of i)this.remove(p);if(e===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===rc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,m,p,_]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(g,S,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class ox extends Bn{constructor(e=[],i=Pr,r,l,u,f,d,m,p,_){super(e,i,r,l,u,f,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lx extends Vi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new ox(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new fl(5,5,5),u=new Wi({name:"CubemapFromEquirect",uniforms:Hs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:va});u.uniforms.tEquirect.value=i;const f=new Xi(l,u),d=i.minFilter;return i.minFilter===Nr&&(i.minFilter=On),new vb(1,10,this).update(e,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(u)}}class Gu extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xb={type:"move"};class Jh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const T of e.hand.values()){const y=i.getJointPose(T,r),v=this._getHandJoint(p,T);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=_.position.distanceTo(g.position),M=.02,b=.005;p.inputState.pinching&&S>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(xb)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Gu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Sb extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ea,this.environmentIntensity=1,this.environmentRotation=new Ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class yb extends Bn{constructor(e=null,i=1,r=1,l,u,f,d,m,p=wn,_=wn,g,S){super(null,f,d,m,p,_,l,u,g,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $h=new te,Mb=new te,Eb=new ft;class Dr{constructor(e=new te(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=$h.subVectors(r,i).cross(Mb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta($h),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Eb.getNormalMatrix(e),l=this.coplanarPoint($h).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new cl,bb=new kt(.5,.5),Vu=new te;class ux{constructor(e=new Dr,i=new Dr,r=new Dr,l=new Dr,u=new Dr,f=new Dr){this.planes=[e,i,r,l,u,f]}set(e,i,r,l,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Hi,r=!1){const l=this.planes,u=e.elements,f=u[0],d=u[1],m=u[2],p=u[3],_=u[4],g=u[5],S=u[6],M=u[7],b=u[8],T=u[9],y=u[10],v=u[11],w=u[12],U=u[13],O=u[14],B=u[15];if(l[0].setComponents(p-f,M-_,v-b,B-w).normalize(),l[1].setComponents(p+f,M+_,v+b,B+w).normalize(),l[2].setComponents(p+d,M+g,v+T,B+U).normalize(),l[3].setComponents(p-d,M-g,v-T,B-U).normalize(),r)l[4].setComponents(m,S,y,O).normalize(),l[5].setComponents(p-m,M-S,v-y,B-O).normalize();else if(l[4].setComponents(p-m,M-S,v-y,B-O).normalize(),i===Hi)l[5].setComponents(p+m,M+S,v+y,B+O).normalize();else if(i===rc)l[5].setComponents(m,S,y,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){Rr.center.set(0,0,0);const i=bb.distanceTo(e.center);return Rr.radius=.7071067811865476+i,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Vu.x=l.normal.x>0?e.max.x:e.min.x,Vu.y=l.normal.y>0?e.max.y:e.min.y,Vu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Vu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cx extends ks{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oc=new te,lc=new te,V_=new nn,qo=new Sp,ku=new cl,ed=new te,k_=new te;class Tb extends zn{constructor(e=new Yn,i=new cx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)oc.fromBufferAttribute(i,l-1),lc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=oc.distanceTo(lc);e.setAttribute("lineDistance",new ii(r,1))}else rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ku.copy(r.boundingSphere),ku.applyMatrix4(l),ku.radius+=u,e.ray.intersectsSphere(ku)===!1)return;V_.copy(l).invert(),qo.copy(e.ray).applyMatrix4(V_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=r.index,S=r.attributes.position;if(_!==null){const M=Math.max(0,f.start),b=Math.min(_.count,f.start+f.count);for(let T=M,y=b-1;T<y;T+=p){const v=_.getX(T),w=_.getX(T+1),U=Xu(this,e,qo,m,v,w,T);U&&i.push(U)}if(this.isLineLoop){const T=_.getX(b-1),y=_.getX(M),v=Xu(this,e,qo,m,T,y,b-1);v&&i.push(v)}}else{const M=Math.max(0,f.start),b=Math.min(S.count,f.start+f.count);for(let T=M,y=b-1;T<y;T+=p){const v=Xu(this,e,qo,m,T,T+1,T);v&&i.push(v)}if(this.isLineLoop){const T=Xu(this,e,qo,m,b-1,M,b-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Xu(s,e,i,r,l,u,f){const d=s.geometry.attributes.position;if(oc.fromBufferAttribute(d,l),lc.fromBufferAttribute(d,u),i.distanceSqToSegment(oc,lc,ed,k_)>r)return;ed.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(ed);if(!(p<e.near||p>e.far))return{distance:p,point:k_.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}class fx extends ks{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const X_=new nn,tp=new Sp,Wu=new cl,qu=new te;class Ab extends zn{constructor(e=new Yn,i=new fx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Wu.copy(r.boundingSphere),Wu.applyMatrix4(l),Wu.radius+=u,e.ray.intersectsSphere(Wu)===!1)return;X_.copy(l).invert(),tp.copy(e.ray).applyMatrix4(X_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,g=r.attributes.position;if(p!==null){const S=Math.max(0,f.start),M=Math.min(p.count,f.start+f.count);for(let b=S,T=M;b<T;b++){const y=p.getX(b);qu.fromBufferAttribute(g,y),W_(qu,y,m,l,e,i,this)}}else{const S=Math.max(0,f.start),M=Math.min(g.count,f.start+f.count);for(let b=S,T=M;b<T;b++)qu.fromBufferAttribute(g,b),W_(qu,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function W_(s,e,i,r,l,u,f){const d=tp.distanceSqToPoint(s);if(d<i){const m=new te;tp.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class il extends Bn{constructor(e,i,r=ki,l,u,f,d=wn,m=wn,p,_=Ma,g=1){if(_!==Ma&&_!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:g};super(S,l,u,f,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Rb extends il{constructor(e,i=ki,r=Pr,l,u,f=wn,d=wn,m,p=Ma){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,i,r,l,u,f,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class hx extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class dc extends Yn{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,f=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,g=e/d,S=i/m,M=[],b=[],T=[],y=[];for(let v=0;v<_;v++){const w=v*S-f;for(let U=0;U<p;U++){const O=U*g-u;b.push(O,-w,0),T.push(0,0,1),y.push(U/d),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let w=0;w<d;w++){const U=w+p*v,O=w+p*(v+1),B=w+1+p*(v+1),F=w+1+p*v;M.push(U,O,F),M.push(O,B,F)}this.setIndex(M),this.setAttribute("position",new ii(b,3)),this.setAttribute("normal",new ii(T,3)),this.setAttribute("uv",new ii(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Mp extends Yn{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(f+d,Math.PI);let p=0;const _=[],g=new te,S=new te,M=[],b=[],T=[],y=[];for(let v=0;v<=r;v++){const w=[],U=v/r;let O=0;v===0&&f===0?O=.5/i:v===r&&m===Math.PI&&(O=-.5/i);for(let B=0;B<=i;B++){const F=B/i;g.x=-e*Math.cos(l+F*u)*Math.sin(f+U*d),g.y=e*Math.cos(f+U*d),g.z=e*Math.sin(l+F*u)*Math.sin(f+U*d),b.push(g.x,g.y,g.z),S.copy(g).normalize(),T.push(S.x,S.y,S.z),y.push(F+O,1-U),w.push(p++)}_.push(w)}for(let v=0;v<r;v++)for(let w=0;w<i;w++){const U=_[v][w+1],O=_[v][w],B=_[v+1][w],F=_[v+1][w+1];(v!==0||f>0)&&M.push(U,O,F),(v!==r-1||m<Math.PI)&&M.push(O,B,F)}this.setIndex(M),this.setAttribute("position",new ii(b,3)),this.setAttribute("normal",new ii(T,3)),this.setAttribute("uv",new ii(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cb extends Wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wb extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Db extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class dx extends sx{constructor(e=-1,i=1,r=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Ub extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function q_(s,e,i,r){const l=Lb(r);switch(i){case Kv:return s*e;case Jv:return s*e/l.components*l.byteLength;case pp:return s*e/l.components*l.byteLength;case zs:return s*e*2/l.components*l.byteLength;case mp:return s*e*2/l.components*l.byteLength;case Qv:return s*e*3/l.components*l.byteLength;case Di:return s*e*4/l.components*l.byteLength;case gp:return s*e*4/l.components*l.byteLength;case Ju:case $u:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ec:case tc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ed:case Td:return Math.max(s,16)*Math.max(e,8)/4;case Md:case bd:return Math.max(s,8)*Math.max(e,8)/2;case Ad:case Rd:case wd:case Dd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cd:case Ud:case Ld:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case zd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Id:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Gd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case kd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Xd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Wd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case qd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Yd:case jd:case Zd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Kd:case Qd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Jd:case $d:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Lb(s){switch(s){case _i:case qv:return{byteLength:1,components:1};case el:case Yv:case ya:return{byteLength:2,components:1};case hp:case dp:return{byteLength:2,components:4};case ki:case fp:case Ii:return{byteLength:4,components:1};case jv:case Zv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cp}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cp);function px(){let s=null,e=!1,i=null,r=null;function l(u,f){i(u,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function Nb(s){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,S=s.createBuffer();s.bindBuffer(m,S),s.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const _=m.array,g=m.updateRanges;if(s.bindBuffer(p,d),g.length===0)s.bufferSubData(p,0,_);else{g.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<g.length;M++){const b=g[S],T=g[M];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++S,g[S]=T)}g.length=S+1;for(let M=0,b=g.length;M<b;M++){const T=g[M];s.bufferSubData(p,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(s.deleteBuffer(m.buffer),e.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:f}}var Ob=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ib=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$b=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,iT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,aT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cT="gl_FragColor = linearToOutputTexel( gl_FragColor );",fT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_T=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ST=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,MT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ET=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,AT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,RT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,LT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,NT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,OT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,PT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,HT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,KT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,JT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,gA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_A=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,EA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,RA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,LA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,HA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,GA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,kA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,JA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$A=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,e1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,t1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,a1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,l1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,f1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:Ob,alphahash_pars_fragment:Pb,alphamap_fragment:Fb,alphamap_pars_fragment:Bb,alphatest_fragment:zb,alphatest_pars_fragment:Ib,aomap_fragment:Hb,aomap_pars_fragment:Gb,batching_pars_vertex:Vb,batching_vertex:kb,begin_vertex:Xb,beginnormal_vertex:Wb,bsdfs:qb,iridescence_fragment:Yb,bumpmap_pars_fragment:jb,clipping_planes_fragment:Zb,clipping_planes_pars_fragment:Kb,clipping_planes_pars_vertex:Qb,clipping_planes_vertex:Jb,color_fragment:$b,color_pars_fragment:eT,color_pars_vertex:tT,color_vertex:nT,common:iT,cube_uv_reflection_fragment:aT,defaultnormal_vertex:rT,displacementmap_pars_vertex:sT,displacementmap_vertex:oT,emissivemap_fragment:lT,emissivemap_pars_fragment:uT,colorspace_fragment:cT,colorspace_pars_fragment:fT,envmap_fragment:hT,envmap_common_pars_fragment:dT,envmap_pars_fragment:pT,envmap_pars_vertex:mT,envmap_physical_pars_fragment:AT,envmap_vertex:gT,fog_vertex:_T,fog_pars_vertex:vT,fog_fragment:xT,fog_pars_fragment:ST,gradientmap_pars_fragment:yT,lightmap_pars_fragment:MT,lights_lambert_fragment:ET,lights_lambert_pars_fragment:bT,lights_pars_begin:TT,lights_toon_fragment:RT,lights_toon_pars_fragment:CT,lights_phong_fragment:wT,lights_phong_pars_fragment:DT,lights_physical_fragment:UT,lights_physical_pars_fragment:LT,lights_fragment_begin:NT,lights_fragment_maps:OT,lights_fragment_end:PT,logdepthbuf_fragment:FT,logdepthbuf_pars_fragment:BT,logdepthbuf_pars_vertex:zT,logdepthbuf_vertex:IT,map_fragment:HT,map_pars_fragment:GT,map_particle_fragment:VT,map_particle_pars_fragment:kT,metalnessmap_fragment:XT,metalnessmap_pars_fragment:WT,morphinstance_vertex:qT,morphcolor_vertex:YT,morphnormal_vertex:jT,morphtarget_pars_vertex:ZT,morphtarget_vertex:KT,normal_fragment_begin:QT,normal_fragment_maps:JT,normal_pars_fragment:$T,normal_pars_vertex:eA,normal_vertex:tA,normalmap_pars_fragment:nA,clearcoat_normal_fragment_begin:iA,clearcoat_normal_fragment_maps:aA,clearcoat_pars_fragment:rA,iridescence_pars_fragment:sA,opaque_fragment:oA,packing:lA,premultiplied_alpha_fragment:uA,project_vertex:cA,dithering_fragment:fA,dithering_pars_fragment:hA,roughnessmap_fragment:dA,roughnessmap_pars_fragment:pA,shadowmap_pars_fragment:mA,shadowmap_pars_vertex:gA,shadowmap_vertex:_A,shadowmask_pars_fragment:vA,skinbase_vertex:xA,skinning_pars_vertex:SA,skinning_vertex:yA,skinnormal_vertex:MA,specularmap_fragment:EA,specularmap_pars_fragment:bA,tonemapping_fragment:TA,tonemapping_pars_fragment:AA,transmission_fragment:RA,transmission_pars_fragment:CA,uv_pars_fragment:wA,uv_pars_vertex:DA,uv_vertex:UA,worldpos_vertex:LA,background_vert:NA,background_frag:OA,backgroundCube_vert:PA,backgroundCube_frag:FA,cube_vert:BA,cube_frag:zA,depth_vert:IA,depth_frag:HA,distance_vert:GA,distance_frag:VA,equirect_vert:kA,equirect_frag:XA,linedashed_vert:WA,linedashed_frag:qA,meshbasic_vert:YA,meshbasic_frag:jA,meshlambert_vert:ZA,meshlambert_frag:KA,meshmatcap_vert:QA,meshmatcap_frag:JA,meshnormal_vert:$A,meshnormal_frag:e1,meshphong_vert:t1,meshphong_frag:n1,meshphysical_vert:i1,meshphysical_frag:a1,meshtoon_vert:r1,meshtoon_frag:s1,points_vert:o1,points_frag:l1,shadow_vert:u1,shadow_frag:c1,sprite_vert:f1,sprite_frag:h1},Pe={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},zi={basic:{uniforms:Fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ot(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Fn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Fn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ot(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Fn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Fn([Pe.points,Pe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Fn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Fn([Pe.common,Pe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Fn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Fn([Pe.sprite,Pe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Fn([Pe.common,Pe.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Fn([Pe.lights,Pe.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};zi.physical={uniforms:Fn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Yu={r:0,b:0,g:0},Cr=new Ea,d1=new nn;function p1(s,e,i,r,l,u,f){const d=new Ot(0);let m=u===!0?0:1,p,_,g=null,S=0,M=null;function b(U){let O=U.isScene===!0?U.background:null;return O&&O.isTexture&&(O=(U.backgroundBlurriness>0?i:e).get(O)),O}function T(U){let O=!1;const B=b(U);B===null?v(d,m):B&&B.isColor&&(v(B,1),O=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,f):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||O)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(U,O){const B=b(O);B&&(B.isCubeTexture||B.mapping===hc)?(_===void 0&&(_=new Xi(new fl(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Hs(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(F,P,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Cr.copy(O.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),_.material.uniforms.envMap.value=B,_.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(d1.makeRotationFromEuler(Cr)),_.material.toneMapped=bt.getTransfer(B.colorSpace)!==It,(g!==B||S!==B.version||M!==s.toneMapping)&&(_.material.needsUpdate=!0,g=B,S=B.version,M=s.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new Xi(new dc(2,2),new Wi({name:"BackgroundMaterial",uniforms:Hs(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=bt.getTransfer(B.colorSpace)!==It,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(g!==B||S!==B.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,g=B,S=B.version,M=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,O){U.getRGB(Yu,rx(s)),r.buffers.color.setClear(Yu.r,Yu.g,Yu.b,O,f)}function w(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,O=1){d.set(U),m=O,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(d,m)},render:T,addToRenderList:y,dispose:w}}function m1(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,f=!1;function d(D,k,re,ae,pe){let ce=!1;const z=g(ae,re,k);u!==z&&(u=z,p(u.object)),ce=M(D,ae,re,pe),ce&&b(D,ae,re,pe),pe!==null&&e.update(pe,s.ELEMENT_ARRAY_BUFFER),(ce||f)&&(f=!1,O(D,k,re,ae),pe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function m(){return s.createVertexArray()}function p(D){return s.bindVertexArray(D)}function _(D){return s.deleteVertexArray(D)}function g(D,k,re){const ae=re.wireframe===!0;let pe=r[D.id];pe===void 0&&(pe={},r[D.id]=pe);let ce=pe[k.id];ce===void 0&&(ce={},pe[k.id]=ce);let z=ce[ae];return z===void 0&&(z=S(m()),ce[ae]=z),z}function S(D){const k=[],re=[],ae=[];for(let pe=0;pe<i;pe++)k[pe]=0,re[pe]=0,ae[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:re,attributeDivisors:ae,object:D,attributes:{},index:null}}function M(D,k,re,ae){const pe=u.attributes,ce=k.attributes;let z=0;const H=re.getAttributes();for(const ie in H)if(H[ie].location>=0){const Se=pe[ie];let N=ce[ie];if(N===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(N=D.instanceColor)),Se===void 0||Se.attribute!==N||N&&Se.data!==N.data)return!0;z++}return u.attributesNum!==z||u.index!==ae}function b(D,k,re,ae){const pe={},ce=k.attributes;let z=0;const H=re.getAttributes();for(const ie in H)if(H[ie].location>=0){let Se=ce[ie];Se===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor));const N={};N.attribute=Se,Se&&Se.data&&(N.data=Se.data),pe[ie]=N,z++}u.attributes=pe,u.attributesNum=z,u.index=ae}function T(){const D=u.newAttributes;for(let k=0,re=D.length;k<re;k++)D[k]=0}function y(D){v(D,0)}function v(D,k){const re=u.newAttributes,ae=u.enabledAttributes,pe=u.attributeDivisors;re[D]=1,ae[D]===0&&(s.enableVertexAttribArray(D),ae[D]=1),pe[D]!==k&&(s.vertexAttribDivisor(D,k),pe[D]=k)}function w(){const D=u.newAttributes,k=u.enabledAttributes;for(let re=0,ae=k.length;re<ae;re++)k[re]!==D[re]&&(s.disableVertexAttribArray(re),k[re]=0)}function U(D,k,re,ae,pe,ce,z){z===!0?s.vertexAttribIPointer(D,k,re,pe,ce):s.vertexAttribPointer(D,k,re,ae,pe,ce)}function O(D,k,re,ae){T();const pe=ae.attributes,ce=re.getAttributes(),z=k.defaultAttributeValues;for(const H in ce){const ie=ce[H];if(ie.location>=0){let Me=pe[H];if(Me===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(Me=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(Me=D.instanceColor)),Me!==void 0){const Se=Me.normalized,N=Me.itemSize,ne=e.get(Me);if(ne===void 0)continue;const _e=ne.buffer,Ae=ne.type,He=ne.bytesPerElement,ee=Ae===s.INT||Ae===s.UNSIGNED_INT||Me.gpuType===fp;if(Me.isInterleavedBufferAttribute){const ue=Me.data,De=ue.stride,Xe=Me.offset;if(ue.isInstancedInterleavedBuffer){for(let Ge=0;Ge<ie.locationSize;Ge++)v(ie.location+Ge,ue.meshPerAttribute);D.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ge=0;Ge<ie.locationSize;Ge++)y(ie.location+Ge);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let Ge=0;Ge<ie.locationSize;Ge++)U(ie.location+Ge,N/ie.locationSize,Ae,Se,De*He,(Xe+N/ie.locationSize*Ge)*He,ee)}else{if(Me.isInstancedBufferAttribute){for(let ue=0;ue<ie.locationSize;ue++)v(ie.location+ue,Me.meshPerAttribute);D.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ue=0;ue<ie.locationSize;ue++)y(ie.location+ue);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let ue=0;ue<ie.locationSize;ue++)U(ie.location+ue,N/ie.locationSize,Ae,Se,N*He,N/ie.locationSize*ue*He,ee)}}else if(z!==void 0){const Se=z[H];if(Se!==void 0)switch(Se.length){case 2:s.vertexAttrib2fv(ie.location,Se);break;case 3:s.vertexAttrib3fv(ie.location,Se);break;case 4:s.vertexAttrib4fv(ie.location,Se);break;default:s.vertexAttrib1fv(ie.location,Se)}}}}w()}function B(){j();for(const D in r){const k=r[D];for(const re in k){const ae=k[re];for(const pe in ae)_(ae[pe].object),delete ae[pe];delete k[re]}delete r[D]}}function F(D){if(r[D.id]===void 0)return;const k=r[D.id];for(const re in k){const ae=k[re];for(const pe in ae)_(ae[pe].object),delete ae[pe];delete k[re]}delete r[D.id]}function P(D){for(const k in r){const re=r[k];if(re[D.id]===void 0)continue;const ae=re[D.id];for(const pe in ae)_(ae[pe].object),delete ae[pe];delete re[D.id]}}function j(){C(),f=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:C,dispose:B,releaseStatesOfGeometry:F,releaseStatesOfProgram:P,initAttributes:T,enableAttribute:y,disableUnusedAttributes:w}}function g1(s,e,i){let r;function l(p){r=p}function u(p,_){s.drawArrays(r,p,_),i.update(_,r,1)}function f(p,_,g){g!==0&&(s.drawArraysInstanced(r,p,_,g),i.update(_,r,g))}function d(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let M=0;for(let b=0;b<g;b++)M+=_[b];i.update(M,r,1)}function m(p,_,g,S){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)f(p[b],_[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,_,0,S,0,g);let b=0;for(let T=0;T<g;T++)b+=_[T]*S[T];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function _1(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(P){return!(P!==Di&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const j=P===ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==_i&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ii&&!j)}function m(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(rt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),O=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=s.getParameter(s.MAX_SAMPLES),F=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:w,maxVaryings:U,maxFragmentUniforms:O,maxSamples:B,samples:F}}function v1(s){const e=this;let i=null,r=0,l=!1,u=!1;const f=new Dr,d=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const M=g.length!==0||S||r!==0||l;return l=S,r=g.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,S){i=_(g,S,0)},this.setState=function(g,S,M){const b=g.clippingPlanes,T=g.clipIntersection,y=g.clipShadows,v=s.get(g);if(!l||b===null||b.length===0||u&&!y)u?_(null):p();else{const w=u?0:r,U=w*4;let O=v.clippingState||null;m.value=O,O=_(b,S,U,M);for(let B=0;B!==U;++B)O[B]=i[B];v.clippingState=O,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,S,M,b){const T=g!==null?g.length:0;let y=null;if(T!==0){if(y=m.value,b!==!0||y===null){const v=M+T*4,w=S.matrixWorldInverse;d.getNormalMatrix(w),(y===null||y.length<v)&&(y=new Float32Array(v));for(let U=0,O=M;U!==T;++U,O+=4)f.copy(g[U]).applyMatrix4(w,d),f.normal.toArray(y,O),y[O+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function x1(s){let e=new WeakMap;function i(f,d){return d===vd?f.mapping=Pr:d===xd&&(f.mapping=Bs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===vd||d===xd)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new lx(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const ar=4,Y_=[.125,.215,.35,.446,.526,.582],Lr=20,S1=256,Yo=new dx,j_=new Ot;let td=null,nd=0,id=0,ad=!1;const y1=new te;class Z_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:f=256,position:d=y1}=u;td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=J_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(td,nd,id),this._renderer.xr.enabled=ad,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Pr||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:On,minFilter:On,generateMipmaps:!1,type:ya,format:Di,colorSpace:Is,depthBuffer:!1},l=K_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=K_(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=M1(u)),this._blurMaterial=b1(u,e,i),this._ggxMaterial=E1(u,e,i)}return l}_compileMaterial(e){const i=new Xi(new Yn,e);this._renderer.compile(i,Yo)}_sceneToCubeUV(e,i,r,l,u){const m=new gi(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,M=g.toneMapping;g.getClearColor(j_),g.toneMapping=Gi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xi(new fl,new yp({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let v=!1;const w=e.background;w?w.isColor&&(y.color.copy(w),e.background=null,v=!0):(y.color.copy(j_),v=!0);for(let U=0;U<6;U++){const O=U%3;O===0?(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[U],u.y,u.z)):O===1?(m.up.set(0,0,p[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[U],u.z)):(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[U]));const B=this._cubeSize;Ns(l,O*B,U>2?B:0,B,B),g.setRenderTarget(l),v&&g.render(T,m),g.render(e,m)}g.toneMapping=M,g.autoClear=S,e.background=w}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Pr||e.mapping===Bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=J_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q_());const u=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=u;const d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Ns(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Yo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[r];d.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),S=0+p*1.25,M=g*S,{_lodMax:b}=this,T=this._sizeLods[r],y=3*T*(r>b-ar?r-b+ar:0),v=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=b-i,Ns(u,y,v,3*T,2*T),l.setRenderTarget(u),l.render(d,Yo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=b-r,Ns(e,y,v,3*T,2*T),l.setRenderTarget(e),l.render(d,Yo)}_blur(e,i,r,l,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",u),this._halfBlur(f,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Lr-1),T=u/b,y=isFinite(u)?1+Math.floor(_*T):Lr;y>Lr&&rt(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Lr}`);const v=[];let w=0;for(let P=0;P<Lr;++P){const j=P/T,C=Math.exp(-j*j/2);v.push(C),P===0?w+=C:P<y&&(w+=2*C)}for(let P=0;P<v.length;P++)v[P]=v[P]/w;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=v,S.latitudinal.value=f==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:U}=this;S.dTheta.value=b,S.mipInt.value=U-r;const O=this._sizeLods[l],B=3*O*(l>U-ar?l-U+ar:0),F=4*(this._cubeSize-O);Ns(i,B,F,3*O,2*O),m.setRenderTarget(i),m.render(g,Yo)}}function M1(s){const e=[],i=[],r=[];let l=s;const u=s-ar+1+Y_.length;for(let f=0;f<u;f++){const d=Math.pow(2,l);e.push(d);let m=1/d;f>s-ar?m=Y_[f-s+ar-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,g=1+p,S=[_,_,g,_,g,g,_,_,g,g,_,g],M=6,b=6,T=3,y=2,v=1,w=new Float32Array(T*b*M),U=new Float32Array(y*b*M),O=new Float32Array(v*b*M);for(let F=0;F<M;F++){const P=F%3*2/3-1,j=F>2?0:-1,C=[P,j,0,P+2/3,j,0,P+2/3,j+1,0,P,j,0,P+2/3,j+1,0,P,j+1,0];w.set(C,T*b*F),U.set(S,y*b*F);const D=[F,F,F,F,F,F];O.set(D,v*b*F)}const B=new Yn;B.setAttribute("position",new Ui(w,T)),B.setAttribute("uv",new Ui(U,y)),B.setAttribute("faceIndex",new Ui(O,v)),r.push(new Xi(B,null)),l>ar&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function K_(s,e,i){const r=new Vi(s,e,i);return r.texture.mapping=hc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ns(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function E1(s,e,i){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:S1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function b1(s,e,i){const r=new Float32Array(Lr),l=new te(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function Q_(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function J_(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function pc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function T1(s){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===vd||m===xd,_=m===Pr||m===Bs;if(p||_){let g=e.get(d);const S=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new Z_(s)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new Z_(s)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function A1(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&nl("WebGLRenderer: "+r+" extension not supported."),l}}}function R1(s,e,i,r){const l={},u=new WeakMap;function f(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);S.removeEventListener("dispose",f),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(g,S){return l[S.id]===!0||(S.addEventListener("dispose",f),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const M in S)e.update(S[M],s.ARRAY_BUFFER)}function p(g){const S=[],M=g.index,b=g.attributes.position;let T=0;if(M!==null){const w=M.array;T=M.version;for(let U=0,O=w.length;U<O;U+=3){const B=w[U+0],F=w[U+1],P=w[U+2];S.push(B,F,F,P,P,B)}}else if(b!==void 0){const w=b.array;T=b.version;for(let U=0,O=w.length/3-1;U<O;U+=3){const B=U+0,F=U+1,P=U+2;S.push(B,F,F,P,P,B)}}else return;const y=new($v(S)?ax:ix)(S,1);y.version=T;const v=u.get(g);v&&e.remove(v),u.set(g,y)}function _(g){const S=u.get(g);if(S){const M=g.index;M!==null&&S.version<M.version&&p(g)}else p(g);return u.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function C1(s,e,i){let r;function l(S){r=S}let u,f;function d(S){u=S.type,f=S.bytesPerElement}function m(S,M){s.drawElements(r,M,u,S*f),i.update(M,r,1)}function p(S,M,b){b!==0&&(s.drawElementsInstanced(r,M,u,S*f,b),i.update(M,r,b))}function _(S,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,S,0,b);let y=0;for(let v=0;v<b;v++)y+=M[v];i.update(y,r,1)}function g(S,M,b,T){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<S.length;v++)p(S[v]/f,M[v],T[v]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,S,0,T,0,b);let v=0;for(let w=0;w<b;w++)v+=M[w]*T[w];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function w1(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:Rt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function D1(s,e,i){const r=new WeakMap,l=new sn;function u(f,d,m){const p=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let S=r.get(d);if(S===void 0||S.count!==g){let D=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",D)};var M=D;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let O=0;b===!0&&(O=1),T===!0&&(O=2),y===!0&&(O=3);let B=d.attributes.position.count*O,F=1;B>e.maxTextureSize&&(F=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const P=new Float32Array(B*F*4*g),j=new ex(P,B,F,g);j.type=Ii,j.needsUpdate=!0;const C=O*4;for(let k=0;k<g;k++){const re=v[k],ae=w[k],pe=U[k],ce=B*F*4*k;for(let z=0;z<re.count;z++){const H=z*C;b===!0&&(l.fromBufferAttribute(re,z),P[ce+H+0]=l.x,P[ce+H+1]=l.y,P[ce+H+2]=l.z,P[ce+H+3]=0),T===!0&&(l.fromBufferAttribute(ae,z),P[ce+H+4]=l.x,P[ce+H+5]=l.y,P[ce+H+6]=l.z,P[ce+H+7]=0),y===!0&&(l.fromBufferAttribute(pe,z),P[ce+H+8]=l.x,P[ce+H+9]=l.y,P[ce+H+10]=l.z,P[ce+H+11]=pe.itemSize===4?l.w:1)}}S={count:g,texture:j,size:new kt(B,F)},r.set(d,S),d.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const T=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",T),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:u}}function U1(s,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,g=e.get(m,_);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:f}}const L1={[zv]:"LINEAR_TONE_MAPPING",[Iv]:"REINHARD_TONE_MAPPING",[Hv]:"CINEON_TONE_MAPPING",[Gv]:"ACES_FILMIC_TONE_MAPPING",[kv]:"AGX_TONE_MAPPING",[Xv]:"NEUTRAL_TONE_MAPPING",[Vv]:"CUSTOM_TONE_MAPPING"};function N1(s,e,i,r,l){const u=new Vi(e,i,{type:s,depthBuffer:r,stencilBuffer:l}),f=new Vi(e,i,{type:ya,depthBuffer:!1,stencilBuffer:!1}),d=new Yn;d.setAttribute("position",new ii([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ii([0,2,0,0,2,0],2));const m=new Cb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Xi(d,m),_=new dx(-1,1,1,-1,0,1);let g=null,S=null,M=!1,b,T=null,y=[],v=!1;this.setSize=function(w,U){u.setSize(w,U),f.setSize(w,U);for(let O=0;O<y.length;O++){const B=y[O];B.setSize&&B.setSize(w,U)}},this.setEffects=function(w){y=w,v=y.length>0&&y[0].isRenderPass===!0;const U=u.width,O=u.height;for(let B=0;B<y.length;B++){const F=y[B];F.setSize&&F.setSize(U,O)}},this.begin=function(w,U){if(M||w.toneMapping===Gi&&y.length===0)return!1;if(T=U,U!==null){const O=U.width,B=U.height;(u.width!==O||u.height!==B)&&this.setSize(O,B)}return v===!1&&w.setRenderTarget(u),b=w.toneMapping,w.toneMapping=Gi,!0},this.hasRenderPass=function(){return v},this.end=function(w,U){w.toneMapping=b,M=!0;let O=u,B=f;for(let F=0;F<y.length;F++){const P=y[F];if(P.enabled!==!1&&(P.render(w,B,O,U),P.needsSwap!==!1)){const j=O;O=B,B=j}}if(g!==w.outputColorSpace||S!==w.toneMapping){g=w.outputColorSpace,S=w.toneMapping,m.defines={},bt.getTransfer(g)===It&&(m.defines.SRGB_TRANSFER="");const F=L1[S];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,w.setRenderTarget(T),w.render(p,_),T=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.dispose(),f.dispose(),d.dispose(),m.dispose()}}const mx=new Bn,np=new il(1,1),gx=new ex,_x=new nb,vx=new ox,$_=[],ev=[],tv=new Float32Array(16),nv=new Float32Array(9),iv=new Float32Array(4);function Xs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=$_[l];if(u===void 0&&(u=new Float32Array(l),$_[l]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=i,s[f].toArray(u,d)}return u}function mn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function gn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function mc(s,e){let i=ev[e];i===void 0&&(i=new Int32Array(e),ev[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function O1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function P1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2fv(this.addr,e),gn(i,e)}}function F1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;s.uniform3fv(this.addr,e),gn(i,e)}}function B1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4fv(this.addr,e),gn(i,e)}}function z1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;iv.set(r),s.uniformMatrix2fv(this.addr,!1,iv),gn(i,r)}}function I1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;nv.set(r),s.uniformMatrix3fv(this.addr,!1,nv),gn(i,r)}}function H1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;tv.set(r),s.uniformMatrix4fv(this.addr,!1,tv),gn(i,r)}}function G1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function V1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2iv(this.addr,e),gn(i,e)}}function k1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;s.uniform3iv(this.addr,e),gn(i,e)}}function X1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4iv(this.addr,e),gn(i,e)}}function W1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function q1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;s.uniform2uiv(this.addr,e),gn(i,e)}}function Y1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;s.uniform3uiv(this.addr,e),gn(i,e)}}function j1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;s.uniform4uiv(this.addr,e),gn(i,e)}}function Z1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(np.compareFunction=i.isReversedDepthBuffer()?vp:_p,u=np):u=mx,i.setTexture2D(e||u,l)}function K1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||_x,l)}function Q1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||vx,l)}function J1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||gx,l)}function $1(s){switch(s){case 5126:return O1;case 35664:return P1;case 35665:return F1;case 35666:return B1;case 35674:return z1;case 35675:return I1;case 35676:return H1;case 5124:case 35670:return G1;case 35667:case 35671:return V1;case 35668:case 35672:return k1;case 35669:case 35673:return X1;case 5125:return W1;case 36294:return q1;case 36295:return Y1;case 36296:return j1;case 35678:case 36198:case 36298:case 36306:case 35682:return Z1;case 35679:case 36299:case 36307:return K1;case 35680:case 36300:case 36308:case 36293:return Q1;case 36289:case 36303:case 36311:case 36292:return J1}}function eR(s,e){s.uniform1fv(this.addr,e)}function tR(s,e){const i=Xs(e,this.size,2);s.uniform2fv(this.addr,i)}function nR(s,e){const i=Xs(e,this.size,3);s.uniform3fv(this.addr,i)}function iR(s,e){const i=Xs(e,this.size,4);s.uniform4fv(this.addr,i)}function aR(s,e){const i=Xs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function rR(s,e){const i=Xs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function sR(s,e){const i=Xs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function oR(s,e){s.uniform1iv(this.addr,e)}function lR(s,e){s.uniform2iv(this.addr,e)}function uR(s,e){s.uniform3iv(this.addr,e)}function cR(s,e){s.uniform4iv(this.addr,e)}function fR(s,e){s.uniform1uiv(this.addr,e)}function hR(s,e){s.uniform2uiv(this.addr,e)}function dR(s,e){s.uniform3uiv(this.addr,e)}function pR(s,e){s.uniform4uiv(this.addr,e)}function mR(s,e,i){const r=this.cache,l=e.length,u=mc(i,l);mn(r,u)||(s.uniform1iv(this.addr,u),gn(r,u));let f;this.type===s.SAMPLER_2D_SHADOW?f=np:f=mx;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||f,u[d])}function gR(s,e,i){const r=this.cache,l=e.length,u=mc(i,l);mn(r,u)||(s.uniform1iv(this.addr,u),gn(r,u));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||_x,u[f])}function _R(s,e,i){const r=this.cache,l=e.length,u=mc(i,l);mn(r,u)||(s.uniform1iv(this.addr,u),gn(r,u));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||vx,u[f])}function vR(s,e,i){const r=this.cache,l=e.length,u=mc(i,l);mn(r,u)||(s.uniform1iv(this.addr,u),gn(r,u));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||gx,u[f])}function xR(s){switch(s){case 5126:return eR;case 35664:return tR;case 35665:return nR;case 35666:return iR;case 35674:return aR;case 35675:return rR;case 35676:return sR;case 5124:case 35670:return oR;case 35667:case 35671:return lR;case 35668:case 35672:return uR;case 35669:case 35673:return cR;case 5125:return fR;case 36294:return hR;case 36295:return dR;case 36296:return pR;case 35678:case 36198:case 36298:case 36306:case 35682:return mR;case 35679:case 36299:case 36307:return gR;case 35680:case 36300:case 36308:case 36293:return _R;case 36289:case 36303:case 36311:case 36292:return vR}}class SR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=$1(i.type)}}class yR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=xR(i.type)}}class MR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const rd=/(\w+)(\])?(\[|\.)?/g;function av(s,e){s.seq.push(e),s.map[e.id]=e}function ER(s,e,i){const r=s.name,l=r.length;for(rd.lastIndex=0;;){const u=rd.exec(r),f=rd.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){av(i,p===void 0?new SR(d,s,e):new yR(d,s,e));break}else{let g=i.map[d];g===void 0&&(g=new MR(d),av(i,g)),i=g}}}class nc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const d=e.getActiveUniform(i,f),m=e.getUniformLocation(i,d.name);ER(d,m,this)}const l=[],u=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):u.push(f);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,f=i.length;u!==f;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function rv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const bR=37297;let TR=0;function AR(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let f=l;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const sv=new ft;function RR(s){bt._getMatrix(sv,bt.workingColorSpace,s);const e=`mat3( ${sv.elements.map(i=>i.toFixed(4))} )`;switch(bt.getTransfer(s)){case ac:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ov(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),u=(s.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+AR(s.getShaderSource(e),d)}else return u}function CR(s,e){const i=RR(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const wR={[zv]:"Linear",[Iv]:"Reinhard",[Hv]:"Cineon",[Gv]:"ACESFilmic",[kv]:"AgX",[Xv]:"Neutral",[Vv]:"Custom"};function DR(s,e){const i=wR[e];return i===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const ju=new te;function UR(){bt.getLuminanceCoefficients(ju);const s=ju.x.toFixed(4),e=ju.y.toFixed(4),i=ju.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function NR(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function OR(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:d}}return i}function Jo(s){return s!==""}function lv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PR=/^[ \t]*#include +<([\w\d./]+)>/gm;function ip(s){return s.replace(PR,BR)}const FR=new Map;function BR(s,e){let i=ht[e];if(i===void 0){const r=FR.get(e);if(r!==void 0)i=ht[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ip(i)}const zR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cv(s){return s.replace(zR,IR)}function IR(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function fv(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const HR={[Qu]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function GR(s){return HR[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const VR={[Pr]:"ENVMAP_TYPE_CUBE",[Bs]:"ENVMAP_TYPE_CUBE",[hc]:"ENVMAP_TYPE_CUBE_UV"};function kR(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":VR[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const XR={[Bs]:"ENVMAP_MODE_REFRACTION"};function WR(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":XR[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const qR={[Bv]:"ENVMAP_BLENDING_MULTIPLY",[FE]:"ENVMAP_BLENDING_MIX",[BE]:"ENVMAP_BLENDING_ADD"};function YR(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":qR[s.combine]||"ENVMAP_BLENDING_NONE"}function jR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function ZR(s,e,i,r){const l=s.getContext(),u=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=GR(i),p=kR(i),_=WR(i),g=YR(i),S=jR(i),M=LR(i),b=NR(u),T=l.createProgram();let y,v,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Jo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Jo).join(`
`),v.length>0&&(v+=`
`)):(y=[fv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),v=[fv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Gi?"#define TONE_MAPPING":"",i.toneMapping!==Gi?ht.tonemapping_pars_fragment:"",i.toneMapping!==Gi?DR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,CR("linearToOutputTexel",i.outputColorSpace),UR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Jo).join(`
`)),f=ip(f),f=lv(f,i),f=uv(f,i),d=ip(d),d=lv(d,i),d=uv(d,i),f=cv(f),d=cv(d),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===E_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===E_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=w+y+f,O=w+v+d,B=rv(l,l.VERTEX_SHADER,U),F=rv(l,l.FRAGMENT_SHADER,O);l.attachShader(T,B),l.attachShader(T,F),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function P(k){if(s.debug.checkShaderErrors){const re=l.getProgramInfoLog(T)||"",ae=l.getShaderInfoLog(B)||"",pe=l.getShaderInfoLog(F)||"",ce=re.trim(),z=ae.trim(),H=pe.trim();let ie=!0,Me=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(ie=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,B,F);else{const Se=ov(l,B,"vertex"),N=ov(l,F,"fragment");Rt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ce+`
`+Se+`
`+N)}else ce!==""?rt("WebGLProgram: Program Info Log:",ce):(z===""||H==="")&&(Me=!1);Me&&(k.diagnostics={runnable:ie,programLog:ce,vertexShader:{log:z,prefix:y},fragmentShader:{log:H,prefix:v}})}l.deleteShader(B),l.deleteShader(F),j=new nc(l,T),C=OR(l,T)}let j;this.getUniforms=function(){return j===void 0&&P(this),j};let C;this.getAttributes=function(){return C===void 0&&P(this),C};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(T,bR)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=TR++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=B,this.fragmentShader=F,this}let KR=0;class QR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new JR(e),i.set(e,r)),r}}class JR{constructor(e){this.id=KR++,this.code=e,this.usedTimes=0}}function $R(s,e,i,r,l,u,f){const d=new tx,m=new QR,p=new Set,_=[],g=new Map,S=l.logarithmicDepthBuffer;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,D,k,re,ae){const pe=re.fog,ce=ae.geometry,z=C.isMeshStandardMaterial?re.environment:null,H=(C.isMeshStandardMaterial?i:e).get(C.envMap||z),ie=H&&H.mapping===hc?H.image.height:null,Me=b[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&rt("WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const Se=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,N=Se!==void 0?Se.length:0;let ne=0;ce.morphAttributes.position!==void 0&&(ne=1),ce.morphAttributes.normal!==void 0&&(ne=2),ce.morphAttributes.color!==void 0&&(ne=3);let _e,Ae,He,ee;if(Me){const Et=zi[Me];_e=Et.vertexShader,Ae=Et.fragmentShader}else _e=C.vertexShader,Ae=C.fragmentShader,m.update(C),He=m.getVertexShaderID(C),ee=m.getFragmentShaderID(C);const ue=s.getRenderTarget(),De=s.state.buffers.depth.getReversed(),Xe=ae.isInstancedMesh===!0,Ge=ae.isBatchedMesh===!0,dt=!!C.map,Jt=!!C.matcap,_t=!!H,pt=!!C.aoMap,Ct=!!C.lightMap,ot=!!C.bumpMap,$t=!!C.normalMap,G=!!C.displacementMap,jt=!!C.emissiveMap,Mt=!!C.metalnessMap,Lt=!!C.roughnessMap,je=C.anisotropy>0,L=C.clearcoat>0,E=C.dispersion>0,W=C.iridescence>0,de=C.sheen>0,xe=C.transmission>0,le=je&&!!C.anisotropyMap,Ke=L&&!!C.clearcoatMap,Ce=L&&!!C.clearcoatNormalMap,We=L&&!!C.clearcoatRoughnessMap,nt=W&&!!C.iridescenceMap,Ee=W&&!!C.iridescenceThicknessMap,be=de&&!!C.sheenColorMap,ze=de&&!!C.sheenRoughnessMap,Fe=!!C.specularMap,we=!!C.specularColorMap,ut=!!C.specularIntensityMap,X=xe&&!!C.transmissionMap,Ne=xe&&!!C.thicknessMap,Te=!!C.gradientMap,Be=!!C.alphaMap,ye=C.alphaTest>0,ve=!!C.alphaHash,Re=!!C.extensions;let it=Gi;C.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(it=s.toneMapping);const Pt={shaderID:Me,shaderType:C.type,shaderName:C.name,vertexShader:_e,fragmentShader:Ae,defines:C.defines,customVertexShaderID:He,customFragmentShaderID:ee,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:Ge,batchingColor:Ge&&ae._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&ae.instanceColor!==null,instancingMorph:Xe&&ae.morphTexture!==null,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Is,alphaToCoverage:!!C.alphaToCoverage,map:dt,matcap:Jt,envMap:_t,envMapMode:_t&&H.mapping,envMapCubeUVHeight:ie,aoMap:pt,lightMap:Ct,bumpMap:ot,normalMap:$t,displacementMap:G,emissiveMap:jt,normalMapObjectSpace:$t&&C.normalMapType===GE,normalMapTangentSpace:$t&&C.normalMapType===HE,metalnessMap:Mt,roughnessMap:Lt,anisotropy:je,anisotropyMap:le,clearcoat:L,clearcoatMap:Ke,clearcoatNormalMap:Ce,clearcoatRoughnessMap:We,dispersion:E,iridescence:W,iridescenceMap:nt,iridescenceThicknessMap:Ee,sheen:de,sheenColorMap:be,sheenRoughnessMap:ze,specularMap:Fe,specularColorMap:we,specularIntensityMap:ut,transmission:xe,transmissionMap:X,thicknessMap:Ne,gradientMap:Te,opaque:C.transparent===!1&&C.blending===Os&&C.alphaToCoverage===!1,alphaMap:Be,alphaTest:ye,alphaHash:ve,combine:C.combine,mapUv:dt&&T(C.map.channel),aoMapUv:pt&&T(C.aoMap.channel),lightMapUv:Ct&&T(C.lightMap.channel),bumpMapUv:ot&&T(C.bumpMap.channel),normalMapUv:$t&&T(C.normalMap.channel),displacementMapUv:G&&T(C.displacementMap.channel),emissiveMapUv:jt&&T(C.emissiveMap.channel),metalnessMapUv:Mt&&T(C.metalnessMap.channel),roughnessMapUv:Lt&&T(C.roughnessMap.channel),anisotropyMapUv:le&&T(C.anisotropyMap.channel),clearcoatMapUv:Ke&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:be&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:ze&&T(C.sheenRoughnessMap.channel),specularMapUv:Fe&&T(C.specularMap.channel),specularColorMapUv:we&&T(C.specularColorMap.channel),specularIntensityMapUv:ut&&T(C.specularIntensityMap.channel),transmissionMapUv:X&&T(C.transmissionMap.channel),thicknessMapUv:Ne&&T(C.thicknessMap.channel),alphaMapUv:Be&&T(C.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&($t||je),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!ce.attributes.uv&&(dt||Be),fog:!!pe,useFog:C.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:De,skinning:ae.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ne,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:dt&&C.map.isVideoTexture===!0&&bt.getTransfer(C.map.colorSpace)===It,decodeVideoTextureEmissive:jt&&C.emissiveMap.isVideoTexture===!0&&bt.getTransfer(C.emissiveMap.colorSpace)===It,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ma,flipSided:C.side===qn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Re&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&C.extensions.multiDraw===!0||Ge)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function v(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)D.push(k),D.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(w(D,C),U(D,C),D.push(s.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function w(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function U(C,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),C.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),C.push(d.mask)}function O(C){const D=b[C.type];let k;if(D){const re=zi[D];k=mb.clone(re.uniforms)}else k=C.uniforms;return k}function B(C,D){let k=g.get(D);return k!==void 0?++k.usedTimes:(k=new ZR(s,D,C,u),_.push(k),g.set(D,k)),k}function F(C){if(--C.usedTimes===0){const D=_.indexOf(C);_[D]=_[_.length-1],_.pop(),g.delete(C.cacheKey),C.destroy()}}function P(C){m.remove(C)}function j(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:O,acquireProgram:B,releaseProgram:F,releaseShaderCache:P,programs:_,dispose:j}}function eC(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function l(f,d,m){s.get(f)[d]=m}function u(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function tC(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function hv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function dv(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function f(g,S,M,b,T,y){let v=s[e];return v===void 0?(v={id:g.id,object:g,geometry:S,material:M,groupOrder:b,renderOrder:g.renderOrder,z:T,group:y},s[e]=v):(v.id=g.id,v.object=g,v.geometry=S,v.material=M,v.groupOrder=b,v.renderOrder=g.renderOrder,v.z=T,v.group=y),e++,v}function d(g,S,M,b,T,y){const v=f(g,S,M,b,T,y);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(g,S,M,b,T,y){const v=f(g,S,M,b,T,y);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,S){i.length>1&&i.sort(g||tC),r.length>1&&r.sort(S||hv),l.length>1&&l.sort(S||hv)}function _(){for(let g=e,S=s.length;g<S;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:_,sort:p}}function nC(){let s=new WeakMap;function e(r,l){const u=s.get(r);let f;return u===void 0?(f=new dv,s.set(r,[f])):l>=u.length?(f=new dv,u.push(f)):f=u[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function iC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new te,color:new Ot};break;case"SpotLight":i={position:new te,direction:new te,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new te,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":i={direction:new te,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":i={color:new Ot,position:new te,halfWidth:new te,halfHeight:new te};break}return s[e.id]=i,i}}}function aC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let rC=0;function sC(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function oC(s){const e=new iC,i=aC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new te);const l=new te,u=new nn,f=new nn;function d(p){let _=0,g=0,S=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,b=0,T=0,y=0,v=0,w=0,U=0,O=0,B=0,F=0,P=0;p.sort(sC);for(let C=0,D=p.length;C<D;C++){const k=p[C],re=k.color,ae=k.intensity,pe=k.distance;let ce=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===zs?ce=k.shadow.map.texture:ce=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)_+=re.r*ae,g+=re.g*ae,S+=re.b*ae;else if(k.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(k.sh.coefficients[z],ae);P++}else if(k.isDirectionalLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,ie=i.get(k);ie.shadowIntensity=H.intensity,ie.shadowBias=H.bias,ie.shadowNormalBias=H.normalBias,ie.shadowRadius=H.radius,ie.shadowMapSize=H.mapSize,r.directionalShadow[M]=ie,r.directionalShadowMap[M]=ce,r.directionalShadowMatrix[M]=k.shadow.matrix,w++}r.directional[M]=z,M++}else if(k.isSpotLight){const z=e.get(k);z.position.setFromMatrixPosition(k.matrixWorld),z.color.copy(re).multiplyScalar(ae),z.distance=pe,z.coneCos=Math.cos(k.angle),z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),z.decay=k.decay,r.spot[T]=z;const H=k.shadow;if(k.map&&(r.spotLightMap[B]=k.map,B++,H.updateMatrices(k),k.castShadow&&F++),r.spotLightMatrix[T]=H.matrix,k.castShadow){const ie=i.get(k);ie.shadowIntensity=H.intensity,ie.shadowBias=H.bias,ie.shadowNormalBias=H.normalBias,ie.shadowRadius=H.radius,ie.shadowMapSize=H.mapSize,r.spotShadow[T]=ie,r.spotShadowMap[T]=ce,O++}T++}else if(k.isRectAreaLight){const z=e.get(k);z.color.copy(re).multiplyScalar(ae),z.halfWidth.set(k.width*.5,0,0),z.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=z,y++}else if(k.isPointLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),z.distance=k.distance,z.decay=k.decay,k.castShadow){const H=k.shadow,ie=i.get(k);ie.shadowIntensity=H.intensity,ie.shadowBias=H.bias,ie.shadowNormalBias=H.normalBias,ie.shadowRadius=H.radius,ie.shadowMapSize=H.mapSize,ie.shadowCameraNear=H.camera.near,ie.shadowCameraFar=H.camera.far,r.pointShadow[b]=ie,r.pointShadowMap[b]=ce,r.pointShadowMatrix[b]=k.shadow.matrix,U++}r.point[b]=z,b++}else if(k.isHemisphereLight){const z=e.get(k);z.skyColor.copy(k.color).multiplyScalar(ae),z.groundColor.copy(k.groundColor).multiplyScalar(ae),r.hemi[v]=z,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=S;const j=r.hash;(j.directionalLength!==M||j.pointLength!==b||j.spotLength!==T||j.rectAreaLength!==y||j.hemiLength!==v||j.numDirectionalShadows!==w||j.numPointShadows!==U||j.numSpotShadows!==O||j.numSpotMaps!==B||j.numLightProbes!==P)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=y,r.point.length=b,r.hemi.length=v,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=O+B-F,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=P,j.directionalLength=M,j.pointLength=b,j.spotLength=T,j.rectAreaLength=y,j.hemiLength=v,j.numDirectionalShadows=w,j.numPointShadows=U,j.numSpotShadows=O,j.numSpotMaps=B,j.numLightProbes=P,r.version=rC++)}function m(p,_){let g=0,S=0,M=0,b=0,T=0;const y=_.matrixWorldInverse;for(let v=0,w=p.length;v<w;v++){const U=p[v];if(U.isDirectionalLight){const O=r.directional[g];O.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),g++}else if(U.isSpotLight){const O=r.spot[M];O.position.setFromMatrixPosition(U.matrixWorld),O.position.applyMatrix4(y),O.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const O=r.rectArea[b];O.position.setFromMatrixPosition(U.matrixWorld),O.position.applyMatrix4(y),f.identity(),u.copy(U.matrixWorld),u.premultiply(y),f.extractRotation(u),O.halfWidth.set(U.width*.5,0,0),O.halfHeight.set(0,U.height*.5,0),O.halfWidth.applyMatrix4(f),O.halfHeight.applyMatrix4(f),b++}else if(U.isPointLight){const O=r.point[S];O.position.setFromMatrixPosition(U.matrixWorld),O.position.applyMatrix4(y),S++}else if(U.isHemisphereLight){const O=r.hemi[T];O.direction.setFromMatrixPosition(U.matrixWorld),O.direction.transformDirection(y),T++}}}return{setup:d,setupView:m,state:r}}function pv(s){const e=new oC(s),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function f(_){r.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:f}}function lC(s){let e=new WeakMap;function i(l,u=0){const f=e.get(l);let d;return f===void 0?(d=new pv(s),e.set(l,[d])):u>=f.length?(d=new pv(s),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const uC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,fC=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],hC=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],mv=new nn,jo=new te,sd=new te;function dC(s,e,i){let r=new ux;const l=new kt,u=new kt,f=new sn,d=new wb,m=new Db,p={},_=i.maxTextureSize,g={[rr]:qn,[qn]:rr,[ma]:ma},S=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:uC,fragmentShader:cC}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new Yn;b.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Xi(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qu;let v=this.type;this.render=function(F,P,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;F.type===_E&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=Qu);const C=s.getRenderTarget(),D=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),re=s.state;re.setBlending(va),re.buffers.depth.getReversed()===!0?re.buffers.color.setClear(0,0,0,0):re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const ae=v!==this.type;ae&&P.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(ce=>ce.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,ce=F.length;pe<ce;pe++){const z=F[pe],H=z.shadow;if(H===void 0){rt("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const ie=H.getFrameExtents();if(l.multiply(ie),u.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/ie.x),l.x=u.x*ie.x,H.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/ie.y),l.y=u.y*ie.y,H.mapSize.y=u.y)),H.map===null||ae===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Qo){if(z.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Vi(l.x,l.y,{format:zs,type:ya,minFilter:On,magFilter:On,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new il(l.x,l.y,Ii),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=Ma,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=wn,H.map.depthTexture.magFilter=wn}else{z.isPointLight?(H.map=new lx(l.x),H.map.depthTexture=new Rb(l.x,ki)):(H.map=new Vi(l.x,l.y),H.map.depthTexture=new il(l.x,l.y,ki)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=Ma;const Se=s.state.buffers.depth.getReversed();this.type===Qu?(H.map.depthTexture.compareFunction=Se?vp:_p,H.map.depthTexture.minFilter=On,H.map.depthTexture.magFilter=On):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=wn,H.map.depthTexture.magFilter=wn)}H.camera.updateProjectionMatrix()}const Me=H.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<Me;Se++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,Se),s.clear();else{Se===0&&(s.setRenderTarget(H.map),s.clear());const N=H.getViewport(Se);f.set(u.x*N.x,u.y*N.y,u.x*N.z,u.y*N.w),re.viewport(f)}if(z.isPointLight){const N=H.camera,ne=H.matrix,_e=z.distance||N.far;_e!==N.far&&(N.far=_e,N.updateProjectionMatrix()),jo.setFromMatrixPosition(z.matrixWorld),N.position.copy(jo),sd.copy(N.position),sd.add(fC[Se]),N.up.copy(hC[Se]),N.lookAt(sd),N.updateMatrixWorld(),ne.makeTranslation(-jo.x,-jo.y,-jo.z),mv.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),H._frustum.setFromProjectionMatrix(mv,N.coordinateSystem,N.reversedDepth)}else H.updateMatrices(z);r=H.getFrustum(),O(P,j,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===Qo&&w(H,j),H.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(C,D,k)};function w(F,P){const j=e.update(T);S.defines.VSM_SAMPLES!==F.blurSamples&&(S.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Vi(l.x,l.y,{format:zs,type:ya})),S.uniforms.shadow_pass.value=F.map.depthTexture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(P,null,j,S,T,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(P,null,j,M,T,null)}function U(F,P,j,C){let D=null;const k=j.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(k!==void 0)D=k;else if(D=j.isPointLight===!0?m:d,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const re=D.uuid,ae=P.uuid;let pe=p[re];pe===void 0&&(pe={},p[re]=pe);let ce=pe[ae];ce===void 0&&(ce=D.clone(),pe[ae]=ce,P.addEventListener("dispose",B)),D=ce}if(D.visible=P.visible,D.wireframe=P.wireframe,C===Qo?D.side=P.shadowSide!==null?P.shadowSide:P.side:D.side=P.shadowSide!==null?P.shadowSide:g[P.side],D.alphaMap=P.alphaMap,D.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,D.map=P.map,D.clipShadows=P.clipShadows,D.clippingPlanes=P.clippingPlanes,D.clipIntersection=P.clipIntersection,D.displacementMap=P.displacementMap,D.displacementScale=P.displacementScale,D.displacementBias=P.displacementBias,D.wireframeLinewidth=P.wireframeLinewidth,D.linewidth=P.linewidth,j.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const re=s.properties.get(D);re.light=j}return D}function O(F,P,j,C,D){if(F.visible===!1)return;if(F.layers.test(P.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&D===Qo)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,F.matrixWorld);const ae=e.update(F),pe=F.material;if(Array.isArray(pe)){const ce=ae.groups;for(let z=0,H=ce.length;z<H;z++){const ie=ce[z],Me=pe[ie.materialIndex];if(Me&&Me.visible){const Se=U(F,Me,C,D);F.onBeforeShadow(s,F,P,j,ae,Se,ie),s.renderBufferDirect(j,null,ae,Se,F,ie),F.onAfterShadow(s,F,P,j,ae,Se,ie)}}}else if(pe.visible){const ce=U(F,pe,C,D);F.onBeforeShadow(s,F,P,j,ae,ce,null),s.renderBufferDirect(j,null,ae,ce,F,null),F.onAfterShadow(s,F,P,j,ae,ce,null)}}const re=F.children;for(let ae=0,pe=re.length;ae<pe;ae++)O(re[ae],P,j,C,D)}function B(F){F.target.removeEventListener("dispose",B);for(const j in p){const C=p[j],D=F.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const pC={[fd]:hd,[dd]:gd,[pd]:_d,[Fs]:md,[hd]:fd,[gd]:dd,[_d]:pd,[md]:Fs};function mC(s,e){function i(){let X=!1;const Ne=new sn;let Te=null;const Be=new sn(0,0,0,0);return{setMask:function(ye){Te!==ye&&!X&&(s.colorMask(ye,ye,ye,ye),Te=ye)},setLocked:function(ye){X=ye},setClear:function(ye,ve,Re,it,Pt){Pt===!0&&(ye*=it,ve*=it,Re*=it),Ne.set(ye,ve,Re,it),Be.equals(Ne)===!1&&(s.clearColor(ye,ve,Re,it),Be.copy(Ne))},reset:function(){X=!1,Te=null,Be.set(-1,0,0,0)}}}function r(){let X=!1,Ne=!1,Te=null,Be=null,ye=null;return{setReversed:function(ve){if(Ne!==ve){const Re=e.get("EXT_clip_control");ve?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),Ne=ve;const it=ye;ye=null,this.setClear(it)}},getReversed:function(){return Ne},setTest:function(ve){ve?ue(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(ve){Te!==ve&&!X&&(s.depthMask(ve),Te=ve)},setFunc:function(ve){if(Ne&&(ve=pC[ve]),Be!==ve){switch(ve){case fd:s.depthFunc(s.NEVER);break;case hd:s.depthFunc(s.ALWAYS);break;case dd:s.depthFunc(s.LESS);break;case Fs:s.depthFunc(s.LEQUAL);break;case pd:s.depthFunc(s.EQUAL);break;case md:s.depthFunc(s.GEQUAL);break;case gd:s.depthFunc(s.GREATER);break;case _d:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Be=ve}},setLocked:function(ve){X=ve},setClear:function(ve){ye!==ve&&(Ne&&(ve=1-ve),s.clearDepth(ve),ye=ve)},reset:function(){X=!1,Te=null,Be=null,ye=null,Ne=!1}}}function l(){let X=!1,Ne=null,Te=null,Be=null,ye=null,ve=null,Re=null,it=null,Pt=null;return{setTest:function(Et){X||(Et?ue(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(Et){Ne!==Et&&!X&&(s.stencilMask(Et),Ne=Et)},setFunc:function(Et,Dn,Si){(Te!==Et||Be!==Dn||ye!==Si)&&(s.stencilFunc(Et,Dn,Si),Te=Et,Be=Dn,ye=Si)},setOp:function(Et,Dn,Si){(ve!==Et||Re!==Dn||it!==Si)&&(s.stencilOp(Et,Dn,Si),ve=Et,Re=Dn,it=Si)},setLocked:function(Et){X=Et},setClear:function(Et){Pt!==Et&&(s.clearStencil(Et),Pt=Et)},reset:function(){X=!1,Ne=null,Te=null,Be=null,ye=null,ve=null,Re=null,it=null,Pt=null}}}const u=new i,f=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},S=new WeakMap,M=[],b=null,T=!1,y=null,v=null,w=null,U=null,O=null,B=null,F=null,P=new Ot(0,0,0),j=0,C=!1,D=null,k=null,re=null,ae=null,pe=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,H=0;const ie=s.getParameter(s.VERSION);ie.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ie)[1]),z=H>=1):ie.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),z=H>=2);let Me=null,Se={};const N=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),_e=new sn().fromArray(N),Ae=new sn().fromArray(ne);function He(X,Ne,Te,Be){const ye=new Uint8Array(4),ve=s.createTexture();s.bindTexture(X,ve),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Re=0;Re<Te;Re++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,Be,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(Ne+Re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return ve}const ee={};ee[s.TEXTURE_2D]=He(s.TEXTURE_2D,s.TEXTURE_2D,1),ee[s.TEXTURE_CUBE_MAP]=He(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[s.TEXTURE_2D_ARRAY]=He(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ee[s.TEXTURE_3D]=He(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ue(s.DEPTH_TEST),f.setFunc(Fs),ot(!1),$t(__),ue(s.CULL_FACE),pt(va);function ue(X){_[X]!==!0&&(s.enable(X),_[X]=!0)}function De(X){_[X]!==!1&&(s.disable(X),_[X]=!1)}function Xe(X,Ne){return g[X]!==Ne?(s.bindFramebuffer(X,Ne),g[X]=Ne,X===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ne),X===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ge(X,Ne){let Te=M,Be=!1;if(X){Te=S.get(Ne),Te===void 0&&(Te=[],S.set(Ne,Te));const ye=X.textures;if(Te.length!==ye.length||Te[0]!==s.COLOR_ATTACHMENT0){for(let ve=0,Re=ye.length;ve<Re;ve++)Te[ve]=s.COLOR_ATTACHMENT0+ve;Te.length=ye.length,Be=!0}}else Te[0]!==s.BACK&&(Te[0]=s.BACK,Be=!0);Be&&s.drawBuffers(Te)}function dt(X){return b!==X?(s.useProgram(X),b=X,!0):!1}const Jt={[Ur]:s.FUNC_ADD,[xE]:s.FUNC_SUBTRACT,[SE]:s.FUNC_REVERSE_SUBTRACT};Jt[yE]=s.MIN,Jt[ME]=s.MAX;const _t={[EE]:s.ZERO,[bE]:s.ONE,[TE]:s.SRC_COLOR,[ud]:s.SRC_ALPHA,[UE]:s.SRC_ALPHA_SATURATE,[wE]:s.DST_COLOR,[RE]:s.DST_ALPHA,[AE]:s.ONE_MINUS_SRC_COLOR,[cd]:s.ONE_MINUS_SRC_ALPHA,[DE]:s.ONE_MINUS_DST_COLOR,[CE]:s.ONE_MINUS_DST_ALPHA,[LE]:s.CONSTANT_COLOR,[NE]:s.ONE_MINUS_CONSTANT_COLOR,[OE]:s.CONSTANT_ALPHA,[PE]:s.ONE_MINUS_CONSTANT_ALPHA};function pt(X,Ne,Te,Be,ye,ve,Re,it,Pt,Et){if(X===va){T===!0&&(De(s.BLEND),T=!1);return}if(T===!1&&(ue(s.BLEND),T=!0),X!==vE){if(X!==y||Et!==C){if((v!==Ur||O!==Ur)&&(s.blendEquation(s.FUNC_ADD),v=Ur,O=Ur),Et)switch(X){case Os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case v_:s.blendFunc(s.ONE,s.ONE);break;case x_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case S_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Rt("WebGLState: Invalid blending: ",X);break}else switch(X){case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case v_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case x_:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case S_:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",X);break}w=null,U=null,B=null,F=null,P.set(0,0,0),j=0,y=X,C=Et}return}ye=ye||Ne,ve=ve||Te,Re=Re||Be,(Ne!==v||ye!==O)&&(s.blendEquationSeparate(Jt[Ne],Jt[ye]),v=Ne,O=ye),(Te!==w||Be!==U||ve!==B||Re!==F)&&(s.blendFuncSeparate(_t[Te],_t[Be],_t[ve],_t[Re]),w=Te,U=Be,B=ve,F=Re),(it.equals(P)===!1||Pt!==j)&&(s.blendColor(it.r,it.g,it.b,Pt),P.copy(it),j=Pt),y=X,C=!1}function Ct(X,Ne){X.side===ma?De(s.CULL_FACE):ue(s.CULL_FACE);let Te=X.side===qn;Ne&&(Te=!Te),ot(Te),X.blending===Os&&X.transparent===!1?pt(va):pt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),u.setMask(X.colorWrite);const Be=X.stencilWrite;d.setTest(Be),Be&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),jt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function ot(X){D!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),D=X)}function $t(X){X!==mE?(ue(s.CULL_FACE),X!==k&&(X===__?s.cullFace(s.BACK):X===gE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),k=X}function G(X){X!==re&&(z&&s.lineWidth(X),re=X)}function jt(X,Ne,Te){X?(ue(s.POLYGON_OFFSET_FILL),(ae!==Ne||pe!==Te)&&(s.polygonOffset(Ne,Te),ae=Ne,pe=Te)):De(s.POLYGON_OFFSET_FILL)}function Mt(X){X?ue(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function Lt(X){X===void 0&&(X=s.TEXTURE0+ce-1),Me!==X&&(s.activeTexture(X),Me=X)}function je(X,Ne,Te){Te===void 0&&(Me===null?Te=s.TEXTURE0+ce-1:Te=Me);let Be=Se[Te];Be===void 0&&(Be={type:void 0,texture:void 0},Se[Te]=Be),(Be.type!==X||Be.texture!==Ne)&&(Me!==Te&&(s.activeTexture(Te),Me=Te),s.bindTexture(X,Ne||ee[X]),Be.type=X,Be.texture=Ne)}function L(){const X=Se[Me];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function W(){try{s.compressedTexImage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function de(){try{s.texSubImage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function xe(){try{s.texSubImage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function Ke(){try{s.compressedTexSubImage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function Ce(){try{s.texStorage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function We(){try{s.texStorage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function nt(){try{s.texImage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function Ee(){try{s.texImage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function be(X){_e.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),_e.copy(X))}function ze(X){Ae.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Ae.copy(X))}function Fe(X,Ne){let Te=p.get(Ne);Te===void 0&&(Te=new WeakMap,p.set(Ne,Te));let Be=Te.get(X);Be===void 0&&(Be=s.getUniformBlockIndex(Ne,X.name),Te.set(X,Be))}function we(X,Ne){const Be=p.get(Ne).get(X);m.get(Ne)!==Be&&(s.uniformBlockBinding(Ne,Be,X.__bindingPointIndex),m.set(Ne,Be))}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},Me=null,Se={},g={},S=new WeakMap,M=[],b=null,T=!1,y=null,v=null,w=null,U=null,O=null,B=null,F=null,P=new Ot(0,0,0),j=0,C=!1,D=null,k=null,re=null,ae=null,pe=null,_e.set(0,0,s.canvas.width,s.canvas.height),Ae.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:ue,disable:De,bindFramebuffer:Xe,drawBuffers:Ge,useProgram:dt,setBlending:pt,setMaterial:Ct,setFlipSided:ot,setCullFace:$t,setLineWidth:G,setPolygonOffset:jt,setScissorTest:Mt,activeTexture:Lt,bindTexture:je,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:nt,texImage3D:Ee,updateUBOMapping:Fe,uniformBlockBinding:we,texStorage2D:Ce,texStorage3D:We,texSubImage2D:de,texSubImage3D:xe,compressedTexSubImage2D:le,compressedTexSubImage3D:Ke,scissor:be,viewport:ze,reset:ut}}function gC(s,e,i,r,l,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new kt,_=new WeakMap;let g;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return M?new OffscreenCanvas(L,E):sc("canvas")}function T(L,E,W){let de=1;const xe=je(L);if((xe.width>W||xe.height>W)&&(de=W/Math.max(xe.width,xe.height)),de<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const le=Math.floor(de*xe.width),Ke=Math.floor(de*xe.height);g===void 0&&(g=b(le,Ke));const Ce=E?b(le,Ke):g;return Ce.width=le,Ce.height=Ke,Ce.getContext("2d").drawImage(L,0,0,le,Ke),rt("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+le+"x"+Ke+")."),Ce}else return"data"in L&&rt("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),L;return L}function y(L){return L.generateMipmaps}function v(L){s.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(L,E,W,de,xe=!1){if(L!==null){if(s[L]!==void 0)return s[L];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let le=E;if(E===s.RED&&(W===s.FLOAT&&(le=s.R32F),W===s.HALF_FLOAT&&(le=s.R16F),W===s.UNSIGNED_BYTE&&(le=s.R8)),E===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(le=s.R8UI),W===s.UNSIGNED_SHORT&&(le=s.R16UI),W===s.UNSIGNED_INT&&(le=s.R32UI),W===s.BYTE&&(le=s.R8I),W===s.SHORT&&(le=s.R16I),W===s.INT&&(le=s.R32I)),E===s.RG&&(W===s.FLOAT&&(le=s.RG32F),W===s.HALF_FLOAT&&(le=s.RG16F),W===s.UNSIGNED_BYTE&&(le=s.RG8)),E===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(le=s.RG8UI),W===s.UNSIGNED_SHORT&&(le=s.RG16UI),W===s.UNSIGNED_INT&&(le=s.RG32UI),W===s.BYTE&&(le=s.RG8I),W===s.SHORT&&(le=s.RG16I),W===s.INT&&(le=s.RG32I)),E===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(le=s.RGB8UI),W===s.UNSIGNED_SHORT&&(le=s.RGB16UI),W===s.UNSIGNED_INT&&(le=s.RGB32UI),W===s.BYTE&&(le=s.RGB8I),W===s.SHORT&&(le=s.RGB16I),W===s.INT&&(le=s.RGB32I)),E===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(le=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(le=s.RGBA16UI),W===s.UNSIGNED_INT&&(le=s.RGBA32UI),W===s.BYTE&&(le=s.RGBA8I),W===s.SHORT&&(le=s.RGBA16I),W===s.INT&&(le=s.RGBA32I)),E===s.RGB&&(W===s.UNSIGNED_INT_5_9_9_9_REV&&(le=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(le=s.R11F_G11F_B10F)),E===s.RGBA){const Ke=xe?ac:bt.getTransfer(de);W===s.FLOAT&&(le=s.RGBA32F),W===s.HALF_FLOAT&&(le=s.RGBA16F),W===s.UNSIGNED_BYTE&&(le=Ke===It?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(le=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(le=s.RGB5_A1)}return(le===s.R16F||le===s.R32F||le===s.RG16F||le===s.RG32F||le===s.RGBA16F||le===s.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function O(L,E){let W;return L?E===null||E===ki||E===tl?W=s.DEPTH24_STENCIL8:E===Ii?W=s.DEPTH32F_STENCIL8:E===el&&(W=s.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ki||E===tl?W=s.DEPTH_COMPONENT24:E===Ii?W=s.DEPTH_COMPONENT32F:E===el&&(W=s.DEPTH_COMPONENT16),W}function B(L,E){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==wn&&L.minFilter!==On?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function F(L){const E=L.target;E.removeEventListener("dispose",F),j(E),E.isVideoTexture&&_.delete(E)}function P(L){const E=L.target;E.removeEventListener("dispose",P),D(E)}function j(L){const E=r.get(L);if(E.__webglInit===void 0)return;const W=L.source,de=S.get(W);if(de){const xe=de[E.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&C(L),Object.keys(de).length===0&&S.delete(W)}r.remove(L)}function C(L){const E=r.get(L);s.deleteTexture(E.__webglTexture);const W=L.source,de=S.get(W);delete de[E.__cacheKey],f.memory.textures--}function D(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(E.__webglFramebuffer[de]))for(let xe=0;xe<E.__webglFramebuffer[de].length;xe++)s.deleteFramebuffer(E.__webglFramebuffer[de][xe]);else s.deleteFramebuffer(E.__webglFramebuffer[de]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[de])}else{if(Array.isArray(E.__webglFramebuffer))for(let de=0;de<E.__webglFramebuffer.length;de++)s.deleteFramebuffer(E.__webglFramebuffer[de]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let de=0;de<E.__webglColorRenderbuffer.length;de++)E.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[de]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=L.textures;for(let de=0,xe=W.length;de<xe;de++){const le=r.get(W[de]);le.__webglTexture&&(s.deleteTexture(le.__webglTexture),f.memory.textures--),r.remove(W[de])}r.remove(L)}let k=0;function re(){k=0}function ae(){const L=k;return L>=l.maxTextures&&rt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),k+=1,L}function pe(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ce(L,E){const W=r.get(L);if(L.isVideoTexture&&Mt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){const de=L.image;if(de===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(W,L,E);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+E)}function z(L,E){const W=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){ee(W,L,E);return}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+E)}function H(L,E){const W=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){ee(W,L,E);return}i.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+E)}function ie(L,E){const W=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&W.__version!==L.version){ue(W,L,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+E)}const Me={[Sd]:s.REPEAT,[ga]:s.CLAMP_TO_EDGE,[yd]:s.MIRRORED_REPEAT},Se={[wn]:s.NEAREST,[zE]:s.NEAREST_MIPMAP_NEAREST,[bu]:s.NEAREST_MIPMAP_LINEAR,[On]:s.LINEAR,[wh]:s.LINEAR_MIPMAP_NEAREST,[Nr]:s.LINEAR_MIPMAP_LINEAR},N={[VE]:s.NEVER,[YE]:s.ALWAYS,[kE]:s.LESS,[_p]:s.LEQUAL,[XE]:s.EQUAL,[vp]:s.GEQUAL,[WE]:s.GREATER,[qE]:s.NOTEQUAL};function ne(L,E){if(E.type===Ii&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===On||E.magFilter===wh||E.magFilter===bu||E.magFilter===Nr||E.minFilter===On||E.minFilter===wh||E.minFilter===bu||E.minFilter===Nr)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Me[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Me[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Me[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Se[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Se[E.minFilter]),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wn||E.minFilter!==bu&&E.minFilter!==Nr||E.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function _e(L,E){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",F));const de=E.source;let xe=S.get(de);xe===void 0&&(xe={},S.set(de,xe));const le=pe(E);if(le!==L.__cacheKey){xe[le]===void 0&&(xe[le]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,W=!0),xe[le].usedTimes++;const Ke=xe[L.__cacheKey];Ke!==void 0&&(xe[L.__cacheKey].usedTimes--,Ke.usedTimes===0&&C(E)),L.__cacheKey=le,L.__webglTexture=xe[le].texture}return W}function Ae(L,E,W){return Math.floor(Math.floor(L/W)/E)}function He(L,E,W,de){const le=L.updateRanges;if(le.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,W,de,E.data);else{le.sort((Ee,be)=>Ee.start-be.start);let Ke=0;for(let Ee=1;Ee<le.length;Ee++){const be=le[Ke],ze=le[Ee],Fe=be.start+be.count,we=Ae(ze.start,E.width,4),ut=Ae(be.start,E.width,4);ze.start<=Fe+1&&we===ut&&Ae(ze.start+ze.count-1,E.width,4)===we?be.count=Math.max(be.count,ze.start+ze.count-be.start):(++Ke,le[Ke]=ze)}le.length=Ke+1;const Ce=s.getParameter(s.UNPACK_ROW_LENGTH),We=s.getParameter(s.UNPACK_SKIP_PIXELS),nt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Ee=0,be=le.length;Ee<be;Ee++){const ze=le[Ee],Fe=Math.floor(ze.start/4),we=Math.ceil(ze.count/4),ut=Fe%E.width,X=Math.floor(Fe/E.width),Ne=we,Te=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ut),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,ut,X,Ne,Te,W,de,E.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ce),s.pixelStorei(s.UNPACK_SKIP_PIXELS,We),s.pixelStorei(s.UNPACK_SKIP_ROWS,nt)}}function ee(L,E,W){let de=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(de=s.TEXTURE_3D);const xe=_e(L,E),le=E.source;i.bindTexture(de,L.__webglTexture,s.TEXTURE0+W);const Ke=r.get(le);if(le.version!==Ke.__version||xe===!0){i.activeTexture(s.TEXTURE0+W);const Ce=bt.getPrimaries(bt.workingColorSpace),We=E.colorSpace===ir?null:bt.getPrimaries(E.colorSpace),nt=E.colorSpace===ir||Ce===We?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Ee=T(E.image,!1,l.maxTextureSize);Ee=Lt(E,Ee);const be=u.convert(E.format,E.colorSpace),ze=u.convert(E.type);let Fe=U(E.internalFormat,be,ze,E.colorSpace,E.isVideoTexture);ne(de,E);let we;const ut=E.mipmaps,X=E.isVideoTexture!==!0,Ne=Ke.__version===void 0||xe===!0,Te=le.dataReady,Be=B(E,Ee);if(E.isDepthTexture)Fe=O(E.format===Or,E.type),Ne&&(X?i.texStorage2D(s.TEXTURE_2D,1,Fe,Ee.width,Ee.height):i.texImage2D(s.TEXTURE_2D,0,Fe,Ee.width,Ee.height,0,be,ze,null));else if(E.isDataTexture)if(ut.length>0){X&&Ne&&i.texStorage2D(s.TEXTURE_2D,Be,Fe,ut[0].width,ut[0].height);for(let ye=0,ve=ut.length;ye<ve;ye++)we=ut[ye],X?Te&&i.texSubImage2D(s.TEXTURE_2D,ye,0,0,we.width,we.height,be,ze,we.data):i.texImage2D(s.TEXTURE_2D,ye,Fe,we.width,we.height,0,be,ze,we.data);E.generateMipmaps=!1}else X?(Ne&&i.texStorage2D(s.TEXTURE_2D,Be,Fe,Ee.width,Ee.height),Te&&He(E,Ee,be,ze)):i.texImage2D(s.TEXTURE_2D,0,Fe,Ee.width,Ee.height,0,be,ze,Ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Ne&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Be,Fe,ut[0].width,ut[0].height,Ee.depth);for(let ye=0,ve=ut.length;ye<ve;ye++)if(we=ut[ye],E.format!==Di)if(be!==null)if(X){if(Te)if(E.layerUpdates.size>0){const Re=q_(we.width,we.height,E.format,E.type);for(const it of E.layerUpdates){const Pt=we.data.subarray(it*Re/we.data.BYTES_PER_ELEMENT,(it+1)*Re/we.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,it,we.width,we.height,1,be,Pt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,we.width,we.height,Ee.depth,be,we.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ye,Fe,we.width,we.height,Ee.depth,0,we.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Te&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,we.width,we.height,Ee.depth,be,ze,we.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ye,Fe,we.width,we.height,Ee.depth,0,be,ze,we.data)}else{X&&Ne&&i.texStorage2D(s.TEXTURE_2D,Be,Fe,ut[0].width,ut[0].height);for(let ye=0,ve=ut.length;ye<ve;ye++)we=ut[ye],E.format!==Di?be!==null?X?Te&&i.compressedTexSubImage2D(s.TEXTURE_2D,ye,0,0,we.width,we.height,be,we.data):i.compressedTexImage2D(s.TEXTURE_2D,ye,Fe,we.width,we.height,0,we.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Te&&i.texSubImage2D(s.TEXTURE_2D,ye,0,0,we.width,we.height,be,ze,we.data):i.texImage2D(s.TEXTURE_2D,ye,Fe,we.width,we.height,0,be,ze,we.data)}else if(E.isDataArrayTexture)if(X){if(Ne&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Be,Fe,Ee.width,Ee.height,Ee.depth),Te)if(E.layerUpdates.size>0){const ye=q_(Ee.width,Ee.height,E.format,E.type);for(const ve of E.layerUpdates){const Re=Ee.data.subarray(ve*ye/Ee.data.BYTES_PER_ELEMENT,(ve+1)*ye/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ve,Ee.width,Ee.height,1,be,ze,Re)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,be,ze,Ee.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,Ee.width,Ee.height,Ee.depth,0,be,ze,Ee.data);else if(E.isData3DTexture)X?(Ne&&i.texStorage3D(s.TEXTURE_3D,Be,Fe,Ee.width,Ee.height,Ee.depth),Te&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,be,ze,Ee.data)):i.texImage3D(s.TEXTURE_3D,0,Fe,Ee.width,Ee.height,Ee.depth,0,be,ze,Ee.data);else if(E.isFramebufferTexture){if(Ne)if(X)i.texStorage2D(s.TEXTURE_2D,Be,Fe,Ee.width,Ee.height);else{let ye=Ee.width,ve=Ee.height;for(let Re=0;Re<Be;Re++)i.texImage2D(s.TEXTURE_2D,Re,Fe,ye,ve,0,be,ze,null),ye>>=1,ve>>=1}}else if(ut.length>0){if(X&&Ne){const ye=je(ut[0]);i.texStorage2D(s.TEXTURE_2D,Be,Fe,ye.width,ye.height)}for(let ye=0,ve=ut.length;ye<ve;ye++)we=ut[ye],X?Te&&i.texSubImage2D(s.TEXTURE_2D,ye,0,0,be,ze,we):i.texImage2D(s.TEXTURE_2D,ye,Fe,be,ze,we);E.generateMipmaps=!1}else if(X){if(Ne){const ye=je(Ee);i.texStorage2D(s.TEXTURE_2D,Be,Fe,ye.width,ye.height)}Te&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,be,ze,Ee)}else i.texImage2D(s.TEXTURE_2D,0,Fe,be,ze,Ee);y(E)&&v(de),Ke.__version=le.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ue(L,E,W){if(E.image.length!==6)return;const de=_e(L,E),xe=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+W);const le=r.get(xe);if(xe.version!==le.__version||de===!0){i.activeTexture(s.TEXTURE0+W);const Ke=bt.getPrimaries(bt.workingColorSpace),Ce=E.colorSpace===ir?null:bt.getPrimaries(E.colorSpace),We=E.colorSpace===ir||Ke===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const nt=E.isCompressedTexture||E.image[0].isCompressedTexture,Ee=E.image[0]&&E.image[0].isDataTexture,be=[];for(let ve=0;ve<6;ve++)!nt&&!Ee?be[ve]=T(E.image[ve],!0,l.maxCubemapSize):be[ve]=Ee?E.image[ve].image:E.image[ve],be[ve]=Lt(E,be[ve]);const ze=be[0],Fe=u.convert(E.format,E.colorSpace),we=u.convert(E.type),ut=U(E.internalFormat,Fe,we,E.colorSpace),X=E.isVideoTexture!==!0,Ne=le.__version===void 0||de===!0,Te=xe.dataReady;let Be=B(E,ze);ne(s.TEXTURE_CUBE_MAP,E);let ye;if(nt){X&&Ne&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Be,ut,ze.width,ze.height);for(let ve=0;ve<6;ve++){ye=be[ve].mipmaps;for(let Re=0;Re<ye.length;Re++){const it=ye[Re];E.format!==Di?Fe!==null?X?Te&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,0,0,it.width,it.height,Fe,it.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,ut,it.width,it.height,0,it.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,0,0,it.width,it.height,Fe,we,it.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,ut,it.width,it.height,0,Fe,we,it.data)}}}else{if(ye=E.mipmaps,X&&Ne){ye.length>0&&Be++;const ve=je(be[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Be,ut,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ee){X?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,be[ve].width,be[ve].height,Fe,we,be[ve].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ut,be[ve].width,be[ve].height,0,Fe,we,be[ve].data);for(let Re=0;Re<ye.length;Re++){const Pt=ye[Re].image[ve].image;X?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,0,0,Pt.width,Pt.height,Fe,we,Pt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,ut,Pt.width,Pt.height,0,Fe,we,Pt.data)}}else{X?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Fe,we,be[ve]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ut,Fe,we,be[ve]);for(let Re=0;Re<ye.length;Re++){const it=ye[Re];X?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,0,0,Fe,we,it.image[ve]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,ut,Fe,we,it.image[ve])}}}y(E)&&v(s.TEXTURE_CUBE_MAP),le.__version=xe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function De(L,E,W,de,xe,le){const Ke=u.convert(W.format,W.colorSpace),Ce=u.convert(W.type),We=U(W.internalFormat,Ke,Ce,W.colorSpace),nt=r.get(E),Ee=r.get(W);if(Ee.__renderTarget=E,!nt.__hasExternalTextures){const be=Math.max(1,E.width>>le),ze=Math.max(1,E.height>>le);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?i.texImage3D(xe,le,We,be,ze,E.depth,0,Ke,Ce,null):i.texImage2D(xe,le,We,be,ze,0,Ke,Ce,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),jt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,xe,Ee.__webglTexture,0,G(E)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,xe,Ee.__webglTexture,le),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(L,E,W){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer){const de=E.depthTexture,xe=de&&de.isDepthTexture?de.type:null,le=O(E.stencilBuffer,xe),Ke=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;jt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,G(E),le,E.width,E.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,G(E),le,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,le,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ke,s.RENDERBUFFER,L)}else{const de=E.textures;for(let xe=0;xe<de.length;xe++){const le=de[xe],Ke=u.convert(le.format,le.colorSpace),Ce=u.convert(le.type),We=U(le.internalFormat,Ke,Ce,le.colorSpace);jt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,G(E),We,E.width,E.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,G(E),We,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,We,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ge(L,E,W){const de=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=r.get(E.depthTexture);if(xe.__renderTarget=E,(!xe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),de){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),xe.__webglTexture===void 0){xe.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,xe.__webglTexture),ne(s.TEXTURE_CUBE_MAP,E.depthTexture);const nt=u.convert(E.depthTexture.format),Ee=u.convert(E.depthTexture.type);let be;E.depthTexture.format===Ma?be=s.DEPTH_COMPONENT24:E.depthTexture.format===Or&&(be=s.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,be,E.width,E.height,0,nt,Ee,null)}}else ce(E.depthTexture,0);const le=xe.__webglTexture,Ke=G(E),Ce=de?s.TEXTURE_CUBE_MAP_POSITIVE_X+W:s.TEXTURE_2D,We=E.depthTexture.format===Or?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ma)jt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,We,Ce,le,0,Ke):s.framebufferTexture2D(s.FRAMEBUFFER,We,Ce,le,0);else if(E.depthTexture.format===Or)jt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,We,Ce,le,0,Ke):s.framebufferTexture2D(s.FRAMEBUFFER,We,Ce,le,0);else throw new Error("Unknown depthTexture format")}function dt(L){const E=r.get(L),W=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const de=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),de){const xe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,de.removeEventListener("dispose",xe)};de.addEventListener("dispose",xe),E.__depthDisposeCallback=xe}E.__boundDepthTexture=de}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let de=0;de<6;de++)Ge(E.__webglFramebuffer[de],L,de);else{const de=L.texture.mipmaps;de&&de.length>0?Ge(E.__webglFramebuffer[0],L,0):Ge(E.__webglFramebuffer,L,0)}else if(W){E.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[de]),E.__webglDepthbuffer[de]===void 0)E.__webglDepthbuffer[de]=s.createRenderbuffer(),Xe(E.__webglDepthbuffer[de],L,!1);else{const xe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,le)}}else{const de=L.texture.mipmaps;if(de&&de.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Xe(E.__webglDepthbuffer,L,!1);else{const xe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,le)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Jt(L,E,W){const de=r.get(L);E!==void 0&&De(de.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&dt(L)}function _t(L){const E=L.texture,W=r.get(L),de=r.get(E);L.addEventListener("dispose",P);const xe=L.textures,le=L.isWebGLCubeRenderTarget===!0,Ke=xe.length>1;if(Ke||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=E.version,f.memory.textures++),le){W.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[Ce]=[];for(let We=0;We<E.mipmaps.length;We++)W.__webglFramebuffer[Ce][We]=s.createFramebuffer()}else W.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ce=0;Ce<E.mipmaps.length;Ce++)W.__webglFramebuffer[Ce]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(Ke)for(let Ce=0,We=xe.length;Ce<We;Ce++){const nt=r.get(xe[Ce]);nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture(),f.memory.textures++)}if(L.samples>0&&jt(L)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ce=0;Ce<xe.length;Ce++){const We=xe[Ce];W.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[Ce]);const nt=u.convert(We.format,We.colorSpace),Ee=u.convert(We.type),be=U(We.internalFormat,nt,Ee,We.colorSpace,L.isXRRenderTarget===!0),ze=G(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,be,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,W.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),Xe(W.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(le){i.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),ne(s.TEXTURE_CUBE_MAP,E);for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let We=0;We<E.mipmaps.length;We++)De(W.__webglFramebuffer[Ce][We],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,We);else De(W.__webglFramebuffer[Ce],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(E)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ke){for(let Ce=0,We=xe.length;Ce<We;Ce++){const nt=xe[Ce],Ee=r.get(nt);let be=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(be=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(be,Ee.__webglTexture),ne(be,nt),De(W.__webglFramebuffer,L,nt,s.COLOR_ATTACHMENT0+Ce,be,0),y(nt)&&v(be)}i.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ce,de.__webglTexture),ne(Ce,E),E.mipmaps&&E.mipmaps.length>0)for(let We=0;We<E.mipmaps.length;We++)De(W.__webglFramebuffer[We],L,E,s.COLOR_ATTACHMENT0,Ce,We);else De(W.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,Ce,0);y(E)&&v(Ce),i.unbindTexture()}L.depthBuffer&&dt(L)}function pt(L){const E=L.textures;for(let W=0,de=E.length;W<de;W++){const xe=E[W];if(y(xe)){const le=w(L),Ke=r.get(xe).__webglTexture;i.bindTexture(le,Ke),v(le),i.unbindTexture()}}}const Ct=[],ot=[];function $t(L){if(L.samples>0){if(jt(L)===!1){const E=L.textures,W=L.width,de=L.height;let xe=s.COLOR_BUFFER_BIT;const le=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ke=r.get(L),Ce=E.length>1;if(Ce)for(let nt=0;nt<E.length;nt++)i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const We=L.texture.mipmaps;We&&We.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let nt=0;nt<E.length;nt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[nt]);const Ee=r.get(E[nt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ee,0)}s.blitFramebuffer(0,0,W,de,0,0,W,de,xe,s.NEAREST),m===!0&&(Ct.length=0,ot.length=0,Ct.push(s.COLOR_ATTACHMENT0+nt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ct.push(le),ot.push(le),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ot)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ct))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let nt=0;nt<E.length;nt++){i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[nt]);const Ee=r.get(E[nt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,Ee,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function G(L){return Math.min(l.maxSamples,L.samples)}function jt(L){const E=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Mt(L){const E=f.render.frame;_.get(L)!==E&&(_.set(L,E),L.update())}function Lt(L,E){const W=L.colorSpace,de=L.format,xe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==Is&&W!==ir&&(bt.getTransfer(W)===It?(de!==Di||xe!==_i)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",W)),E}function je(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=ae,this.resetTextureUnits=re,this.setTexture2D=ce,this.setTexture2DArray=z,this.setTexture3D=H,this.setTextureCube=ie,this.rebindTextures=Jt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function _C(s,e){function i(r,l=ir){let u;const f=bt.getTransfer(l);if(r===_i)return s.UNSIGNED_BYTE;if(r===hp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===dp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===jv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Zv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===qv)return s.BYTE;if(r===Yv)return s.SHORT;if(r===el)return s.UNSIGNED_SHORT;if(r===fp)return s.INT;if(r===ki)return s.UNSIGNED_INT;if(r===Ii)return s.FLOAT;if(r===ya)return s.HALF_FLOAT;if(r===Kv)return s.ALPHA;if(r===Qv)return s.RGB;if(r===Di)return s.RGBA;if(r===Ma)return s.DEPTH_COMPONENT;if(r===Or)return s.DEPTH_STENCIL;if(r===Jv)return s.RED;if(r===pp)return s.RED_INTEGER;if(r===zs)return s.RG;if(r===mp)return s.RG_INTEGER;if(r===gp)return s.RGBA_INTEGER;if(r===Ju||r===$u||r===ec||r===tc)if(f===It)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Ju)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$u)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===tc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Ju)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$u)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ec)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===tc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Md||r===Ed||r===bd||r===Td)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Md)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ed)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Td)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ad||r===Rd||r===Cd||r===wd||r===Dd||r===Ud||r===Ld)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Ad||r===Rd)return f===It?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Cd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===wd)return u.COMPRESSED_R11_EAC;if(r===Dd)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Ud)return u.COMPRESSED_RG11_EAC;if(r===Ld)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Nd||r===Od||r===Pd||r===Fd||r===Bd||r===zd||r===Id||r===Hd||r===Gd||r===Vd||r===kd||r===Xd||r===Wd||r===qd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Nd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Od)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Bd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Id)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Wd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===qd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Yd||r===jd||r===Zd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Yd)return f===It?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Kd||r===Qd||r===Jd||r===$d)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Kd)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Qd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$d)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===tl?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const vC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class SC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new hx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Wi({vertexShader:vC,fragmentShader:xC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Xi(new dc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yC extends Vs{constructor(e,i){super();const r=this;let l=null,u=1,f=null,d="local-floor",m=1,p=null,_=null,g=null,S=null,M=null,b=null;const T=typeof XRWebGLBinding<"u",y=new SC,v={},w=i.getContextAttributes();let U=null,O=null;const B=[],F=[],P=new kt;let j=null;const C=new gi;C.viewport=new sn;const D=new gi;D.viewport=new sn;const k=[C,D],re=new Ub;let ae=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ue=B[ee];return ue===void 0&&(ue=new Jh,B[ee]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ee){let ue=B[ee];return ue===void 0&&(ue=new Jh,B[ee]=ue),ue.getGripSpace()},this.getHand=function(ee){let ue=B[ee];return ue===void 0&&(ue=new Jh,B[ee]=ue),ue.getHandSpace()};function ce(ee){const ue=F.indexOf(ee.inputSource);if(ue===-1)return;const De=B[ue];De!==void 0&&(De.update(ee.inputSource,ee.frame,p||f),De.dispatchEvent({type:ee.type,data:ee.inputSource}))}function z(){l.removeEventListener("select",ce),l.removeEventListener("selectstart",ce),l.removeEventListener("selectend",ce),l.removeEventListener("squeeze",ce),l.removeEventListener("squeezestart",ce),l.removeEventListener("squeezeend",ce),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",H);for(let ee=0;ee<B.length;ee++){const ue=F[ee];ue!==null&&(F[ee]=null,B[ee].disconnect(ue))}ae=null,pe=null,y.reset();for(const ee in v)delete v[ee];e.setRenderTarget(U),M=null,S=null,g=null,l=null,O=null,He.stop(),r.isPresenting=!1,e.setPixelRatio(j),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){u=ee,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){d=ee,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",ce),l.addEventListener("selectstart",ce),l.addEventListener("selectend",ce),l.addEventListener("squeeze",ce),l.addEventListener("squeezestart",ce),l.addEventListener("squeezeend",ce),l.addEventListener("end",z),l.addEventListener("inputsourceschange",H),w.xrCompatible!==!0&&await i.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(P),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,Xe=null,Ge=null;w.depth&&(Ge=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,De=w.stencil?Or:Ma,Xe=w.stencil?tl:ki);const dt={colorFormat:i.RGBA8,depthFormat:Ge,scaleFactor:u};g=this.getBinding(),S=g.createProjectionLayer(dt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),O=new Vi(S.textureWidth,S.textureHeight,{format:Di,type:_i,depthTexture:new il(S.textureWidth,S.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const De={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,De),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new Vi(M.framebufferWidth,M.framebufferHeight,{format:Di,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),He.setContext(l),He.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(ee){for(let ue=0;ue<ee.removed.length;ue++){const De=ee.removed[ue],Xe=F.indexOf(De);Xe>=0&&(F[Xe]=null,B[Xe].disconnect(De))}for(let ue=0;ue<ee.added.length;ue++){const De=ee.added[ue];let Xe=F.indexOf(De);if(Xe===-1){for(let dt=0;dt<B.length;dt++)if(dt>=F.length){F.push(De),Xe=dt;break}else if(F[dt]===null){F[dt]=De,Xe=dt;break}if(Xe===-1)break}const Ge=B[Xe];Ge&&Ge.connect(De)}}const ie=new te,Me=new te;function Se(ee,ue,De){ie.setFromMatrixPosition(ue.matrixWorld),Me.setFromMatrixPosition(De.matrixWorld);const Xe=ie.distanceTo(Me),Ge=ue.projectionMatrix.elements,dt=De.projectionMatrix.elements,Jt=Ge[14]/(Ge[10]-1),_t=Ge[14]/(Ge[10]+1),pt=(Ge[9]+1)/Ge[5],Ct=(Ge[9]-1)/Ge[5],ot=(Ge[8]-1)/Ge[0],$t=(dt[8]+1)/dt[0],G=Jt*ot,jt=Jt*$t,Mt=Xe/(-ot+$t),Lt=Mt*-ot;if(ue.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Lt),ee.translateZ(Mt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ge[10]===-1)ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const je=Jt+Mt,L=_t+Mt,E=G-Lt,W=jt+(Xe-Lt),de=pt*_t/L*je,xe=Ct*_t/L*je;ee.projectionMatrix.makePerspective(E,W,de,xe,je,L),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function N(ee,ue){ue===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ue.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let ue=ee.near,De=ee.far;y.texture!==null&&(y.depthNear>0&&(ue=y.depthNear),y.depthFar>0&&(De=y.depthFar)),re.near=D.near=C.near=ue,re.far=D.far=C.far=De,(ae!==re.near||pe!==re.far)&&(l.updateRenderState({depthNear:re.near,depthFar:re.far}),ae=re.near,pe=re.far),re.layers.mask=ee.layers.mask|6,C.layers.mask=re.layers.mask&3,D.layers.mask=re.layers.mask&5;const Xe=ee.parent,Ge=re.cameras;N(re,Xe);for(let dt=0;dt<Ge.length;dt++)N(Ge[dt],Xe);Ge.length===2?Se(re,C,D):re.projectionMatrix.copy(C.projectionMatrix),ne(ee,re,Xe)};function ne(ee,ue,De){De===null?ee.matrix.copy(ue.matrixWorld):(ee.matrix.copy(De.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ue.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=ep*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return re},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(ee){m=ee,S!==null&&(S.fixedFoveation=ee),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(re)},this.getCameraTexture=function(ee){return v[ee]};let _e=null;function Ae(ee,ue){if(_=ue.getViewerPose(p||f),b=ue,_!==null){const De=_.views;M!==null&&(e.setRenderTargetFramebuffer(O,M.framebuffer),e.setRenderTarget(O));let Xe=!1;De.length!==re.cameras.length&&(re.cameras.length=0,Xe=!0);for(let _t=0;_t<De.length;_t++){const pt=De[_t];let Ct=null;if(M!==null)Ct=M.getViewport(pt);else{const $t=g.getViewSubImage(S,pt);Ct=$t.viewport,_t===0&&(e.setRenderTargetTextures(O,$t.colorTexture,$t.depthStencilTexture),e.setRenderTarget(O))}let ot=k[_t];ot===void 0&&(ot=new gi,ot.layers.enable(_t),ot.viewport=new sn,k[_t]=ot),ot.matrix.fromArray(pt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(pt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),_t===0&&(re.matrix.copy(ot.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale)),Xe===!0&&re.cameras.push(ot)}const Ge=l.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=r.getBinding();const _t=g.getDepthInformation(De[0]);_t&&_t.isValid&&_t.texture&&y.init(_t,l.renderState)}if(Ge&&Ge.includes("camera-access")&&T){e.state.unbindTexture(),g=r.getBinding();for(let _t=0;_t<De.length;_t++){const pt=De[_t].camera;if(pt){let Ct=v[pt];Ct||(Ct=new hx,v[pt]=Ct);const ot=g.getCameraImage(pt);Ct.sourceTexture=ot}}}}for(let De=0;De<B.length;De++){const Xe=F[De],Ge=B[De];Xe!==null&&Ge!==void 0&&Ge.update(Xe,ue,p||f)}_e&&_e(ee,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),b=null}const He=new px;He.setAnimationLoop(Ae),this.setAnimationLoop=function(ee){_e=ee},this.dispose=function(){}}}const wr=new Ea,MC=new nn;function EC(s,e){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,rx(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,w,U,O){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),g(y,v)):v.isMeshPhongMaterial?(u(y,v),_(y,v)):v.isMeshStandardMaterial?(u(y,v),S(y,v),v.isMeshPhysicalMaterial&&M(y,v,O)):v.isMeshMatcapMaterial?(u(y,v),b(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),T(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(f(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?m(y,v,w,U):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===qn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===qn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const w=e.get(v),U=w.envMap,O=w.envMapRotation;U&&(y.envMap.value=U,wr.copy(O),wr.x*=-1,wr.y*=-1,wr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),y.envMapRotation.value.setFromMatrix4(MC.makeRotationFromEuler(wr)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,w,U){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*w,y.scale.value=U*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function S(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,w){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===qn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,v){v.matcap&&(y.matcap.value=v.matcap)}function T(y,v){const w=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function bC(s,e,i,r){let l={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,U){const O=U.program;r.uniformBlockBinding(w,O)}function p(w,U){let O=l[w.id];O===void 0&&(b(w),O=_(w),l[w.id]=O,w.addEventListener("dispose",y));const B=U.program;r.updateUBOMapping(w,B);const F=e.render.frame;u[w.id]!==F&&(S(w),u[w.id]=F)}function _(w){const U=g();w.__bindingPointIndex=U;const O=s.createBuffer(),B=w.__size,F=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,B,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,O),O}function g(){for(let w=0;w<d;w++)if(f.indexOf(w)===-1)return f.push(w),w;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(w){const U=l[w.id],O=w.uniforms,B=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let F=0,P=O.length;F<P;F++){const j=Array.isArray(O[F])?O[F]:[O[F]];for(let C=0,D=j.length;C<D;C++){const k=j[C];if(M(k,F,C,B)===!0){const re=k.__offset,ae=Array.isArray(k.value)?k.value:[k.value];let pe=0;for(let ce=0;ce<ae.length;ce++){const z=ae[ce],H=T(z);typeof z=="number"||typeof z=="boolean"?(k.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,re+pe,k.__data)):z.isMatrix3?(k.__data[0]=z.elements[0],k.__data[1]=z.elements[1],k.__data[2]=z.elements[2],k.__data[3]=0,k.__data[4]=z.elements[3],k.__data[5]=z.elements[4],k.__data[6]=z.elements[5],k.__data[7]=0,k.__data[8]=z.elements[6],k.__data[9]=z.elements[7],k.__data[10]=z.elements[8],k.__data[11]=0):(z.toArray(k.__data,pe),pe+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,re,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(w,U,O,B){const F=w.value,P=U+"_"+O;if(B[P]===void 0)return typeof F=="number"||typeof F=="boolean"?B[P]=F:B[P]=F.clone(),!0;{const j=B[P];if(typeof F=="number"||typeof F=="boolean"){if(j!==F)return B[P]=F,!0}else if(j.equals(F)===!1)return j.copy(F),!0}return!1}function b(w){const U=w.uniforms;let O=0;const B=16;for(let P=0,j=U.length;P<j;P++){const C=Array.isArray(U[P])?U[P]:[U[P]];for(let D=0,k=C.length;D<k;D++){const re=C[D],ae=Array.isArray(re.value)?re.value:[re.value];for(let pe=0,ce=ae.length;pe<ce;pe++){const z=ae[pe],H=T(z),ie=O%B,Me=ie%H.boundary,Se=ie+Me;O+=Me,Se!==0&&B-Se<H.storage&&(O+=B-Se),re.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=O,O+=H.storage}}}const F=O%B;return F>0&&(O+=B-F),w.__size=O,w.__cache={},this}function T(w){const U={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(U.boundary=4,U.storage=4):w.isVector2?(U.boundary=8,U.storage=8):w.isVector3||w.isColor?(U.boundary=16,U.storage=12):w.isVector4?(U.boundary=16,U.storage=16):w.isMatrix3?(U.boundary=48,U.storage=48):w.isMatrix4?(U.boundary=64,U.storage=64):w.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):rt("WebGLRenderer: Unsupported uniform value type.",w),U}function y(w){const U=w.target;U.removeEventListener("dispose",y);const O=f.indexOf(U.__bindingPointIndex);f.splice(O,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function v(){for(const w in l)s.deleteBuffer(l[w]);f=[],l={},u={}}return{bind:m,update:p,dispose:v}}const TC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function AC(){return Bi===null&&(Bi=new yb(TC,16,16,zs,ya),Bi.name="DFG_LUT",Bi.minFilter=On,Bi.magFilter=On,Bi.wrapS=ga,Bi.wrapT=ga,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class RC{constructor(e={}){const{canvas:i=jE(),context:r=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1,outputBufferType:M=_i}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=f;const T=M,y=new Set([gp,mp,pp]),v=new Set([_i,ki,el,tl,hp,dp]),w=new Uint32Array(4),U=new Int32Array(4);let O=null,B=null;const F=[],P=[];let j=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1;this._outputColorSpace=mi;let k=0,re=0,ae=null,pe=-1,ce=null;const z=new sn,H=new sn;let ie=null;const Me=new Ot(0);let Se=0,N=i.width,ne=i.height,_e=1,Ae=null,He=null;const ee=new sn(0,0,N,ne),ue=new sn(0,0,N,ne);let De=!1;const Xe=new ux;let Ge=!1,dt=!1;const Jt=new nn,_t=new te,pt=new sn,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function $t(){return ae===null?_e:1}let G=r;function jt(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${cp}`),i.addEventListener("webglcontextlost",it,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",Et,!1),G===null){const q="webgl2";if(G=jt(q,R),G===null)throw jt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Rt("WebGLRenderer: "+R.message),R}let Mt,Lt,je,L,E,W,de,xe,le,Ke,Ce,We,nt,Ee,be,ze,Fe,we,ut,X,Ne,Te,Be,ye;function ve(){Mt=new A1(G),Mt.init(),Te=new _C(G,Mt),Lt=new _1(G,Mt,e,Te),je=new mC(G,Mt),Lt.reversedDepthBuffer&&S&&je.buffers.depth.setReversed(!0),L=new w1(G),E=new eC,W=new gC(G,Mt,je,E,Lt,Te,L),de=new x1(C),xe=new T1(C),le=new Nb(G),Be=new m1(G,le),Ke=new R1(G,le,L,Be),Ce=new U1(G,Ke,le,L),ut=new D1(G,Lt,W),ze=new v1(E),We=new $R(C,de,xe,Mt,Lt,Be,ze),nt=new EC(C,E),Ee=new nC,be=new lC(Mt),we=new p1(C,de,xe,je,Ce,b,m),Fe=new dC(C,Ce,Lt),ye=new bC(G,L,Lt,je),X=new g1(G,Mt,L),Ne=new C1(G,Mt,L),L.programs=We.programs,C.capabilities=Lt,C.extensions=Mt,C.properties=E,C.renderLists=Ee,C.shadowMap=Fe,C.state=je,C.info=L}ve(),T!==_i&&(j=new N1(T,i.width,i.height,l,u));const Re=new yC(C,G);this.xr=Re,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=Mt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Mt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(R){R!==void 0&&(_e=R,this.setSize(N,ne,!1))},this.getSize=function(R){return R.set(N,ne)},this.setSize=function(R,q,se=!0){if(Re.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,ne=q,i.width=Math.floor(R*_e),i.height=Math.floor(q*_e),se===!0&&(i.style.width=R+"px",i.style.height=q+"px"),j!==null&&j.setSize(i.width,i.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(N*_e,ne*_e).floor()},this.setDrawingBufferSize=function(R,q,se){N=R,ne=q,_e=se,i.width=Math.floor(R*se),i.height=Math.floor(q*se),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(T===_i){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(z)},this.getViewport=function(R){return R.copy(ee)},this.setViewport=function(R,q,se,J){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,q,se,J),je.viewport(z.copy(ee).multiplyScalar(_e).round())},this.getScissor=function(R){return R.copy(ue)},this.setScissor=function(R,q,se,J){R.isVector4?ue.set(R.x,R.y,R.z,R.w):ue.set(R,q,se,J),je.scissor(H.copy(ue).multiplyScalar(_e).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(R){je.setScissorTest(De=R)},this.setOpaqueSort=function(R){Ae=R},this.setTransparentSort=function(R){He=R},this.getClearColor=function(R){return R.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,se=!0){let J=0;if(R){let Z=!1;if(ae!==null){const Ue=ae.texture.format;Z=y.has(Ue)}if(Z){const Ue=ae.texture.type,Ie=v.has(Ue),Oe=we.getClearColor(),Ve=we.getClearAlpha(),qe=Oe.r,$e=Oe.g,Ye=Oe.b;Ie?(w[0]=qe,w[1]=$e,w[2]=Ye,w[3]=Ve,G.clearBufferuiv(G.COLOR,0,w)):(U[0]=qe,U[1]=$e,U[2]=Ye,U[3]=Ve,G.clearBufferiv(G.COLOR,0,U))}else J|=G.COLOR_BUFFER_BIT}q&&(J|=G.DEPTH_BUFFER_BIT),se&&(J|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",it,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",Et,!1),we.dispose(),Ee.dispose(),be.dispose(),E.dispose(),de.dispose(),xe.dispose(),Ce.dispose(),Be.dispose(),ye.dispose(),We.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Ir),Re.removeEventListener("sessionend",Ys),Li.stop()};function it(R){R.preventDefault(),T_("WebGLRenderer: Context Lost."),D=!0}function Pt(){T_("WebGLRenderer: Context Restored."),D=!1;const R=L.autoReset,q=Fe.enabled,se=Fe.autoUpdate,J=Fe.needsUpdate,Z=Fe.type;ve(),L.autoReset=R,Fe.enabled=q,Fe.autoUpdate=se,Fe.needsUpdate=J,Fe.type=Z}function Et(R){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Dn(R){const q=R.target;q.removeEventListener("dispose",Dn),Si(q)}function Si(R){hl(R),E.remove(R)}function hl(R){const q=E.get(R).programs;q!==void 0&&(q.forEach(function(se){We.releaseProgram(se)}),R.isShaderMaterial&&We.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,se,J,Z,Ue){q===null&&(q=Ct);const Ie=Z.isMesh&&Z.matrixWorld.determinant()<0,Oe=sr(R,q,se,J,Z);je.setMaterial(J,Ie);let Ve=se.index,qe=1;if(J.wireframe===!0){if(Ve=Ke.getWireframeAttribute(se),Ve===void 0)return;qe=2}const $e=se.drawRange,Ye=se.attributes.position;let et=$e.start*qe,wt=($e.start+$e.count)*qe;Ue!==null&&(et=Math.max(et,Ue.start*qe),wt=Math.min(wt,(Ue.start+Ue.count)*qe)),Ve!==null?(et=Math.max(et,0),wt=Math.min(wt,Ve.count)):Ye!=null&&(et=Math.max(et,0),wt=Math.min(wt,Ye.count));const Zt=wt-et;if(Zt<0||Zt===1/0)return;Be.setup(Z,J,Oe,se,Ve);let Wt,Nt=X;if(Ve!==null&&(Wt=le.get(Ve),Nt=Ne,Nt.setIndex(Wt)),Z.isMesh)J.wireframe===!0?(je.setLineWidth(J.wireframeLinewidth*$t()),Nt.setMode(G.LINES)):Nt.setMode(G.TRIANGLES);else if(Z.isLine){let Qe=J.linewidth;Qe===void 0&&(Qe=1),je.setLineWidth(Qe*$t()),Z.isLineSegments?Nt.setMode(G.LINES):Z.isLineLoop?Nt.setMode(G.LINE_LOOP):Nt.setMode(G.LINE_STRIP)}else Z.isPoints?Nt.setMode(G.POINTS):Z.isSprite&&Nt.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)nl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))Nt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Qe=Z._multiDrawStarts,Dt=Z._multiDrawCounts,at=Z._multiDrawCount,Sn=Ve?le.get(Ve).bytesPerElement:1,qi=E.get(J).currentProgram.getUniforms();for(let yn=0;yn<at;yn++)qi.setValue(G,"_gl_DrawID",yn),Nt.render(Qe[yn]/Sn,Dt[yn])}else if(Z.isInstancedMesh)Nt.renderInstances(et,Zt,Z.count);else if(se.isInstancedBufferGeometry){const Qe=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Dt=Math.min(se.instanceCount,Qe);Nt.renderInstances(et,Zt,Dt)}else Nt.render(et,Zt)};function Ws(R,q,se){R.transparent===!0&&R.side===ma&&R.forceSinglePass===!1?(R.side=qn,R.needsUpdate=!0,Gr(R,q,se),R.side=rr,R.needsUpdate=!0,Gr(R,q,se),R.side=ma):Gr(R,q,se)}this.compile=function(R,q,se=null){se===null&&(se=R),B=be.get(se),B.init(q),P.push(B),se.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(B.pushLight(Z),Z.castShadow&&B.pushShadow(Z))}),R!==se&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(B.pushLight(Z),Z.castShadow&&B.pushShadow(Z))}),B.setupLights();const J=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ue=Z.material;if(Ue)if(Array.isArray(Ue))for(let Ie=0;Ie<Ue.length;Ie++){const Oe=Ue[Ie];Ws(Oe,se,Z),J.add(Oe)}else Ws(Ue,se,Z),J.add(Ue)}),B=P.pop(),J},this.compileAsync=function(R,q,se=null){const J=this.compile(R,q,se);return new Promise(Z=>{function Ue(){if(J.forEach(function(Ie){E.get(Ie).currentProgram.isReady()&&J.delete(Ie)}),J.size===0){Z(R);return}setTimeout(Ue,10)}Mt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let zr=null;function qs(R){zr&&zr(R)}function Ir(){Li.stop()}function Ys(){Li.start()}const Li=new px;Li.setAnimationLoop(qs),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(R){zr=R,Re.setAnimationLoop(R),R===null?Li.stop():Li.start()},Re.addEventListener("sessionstart",Ir),Re.addEventListener("sessionend",Ys),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const se=Re.enabled===!0&&Re.isPresenting===!0,J=j!==null&&(ae===null||se)&&j.begin(C,ae);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(q),q=Re.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,q,ae),B=be.get(R,P.length),B.init(q),P.push(B),Jt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Xe.setFromProjectionMatrix(Jt,Hi,q.reversedDepth),dt=this.localClippingEnabled,Ge=ze.init(this.clippingPlanes,dt),O=Ee.get(R,F.length),O.init(),F.push(O),Re.enabled===!0&&Re.isPresenting===!0){const Ie=C.xr.getDepthSensingMesh();Ie!==null&&ai(Ie,q,-1/0,C.sortObjects)}ai(R,q,0,C.sortObjects),O.finish(),C.sortObjects===!0&&O.sort(Ae,He),ot=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,ot&&we.addToRenderList(O,R),this.info.render.frame++,Ge===!0&&ze.beginShadows();const Z=B.state.shadowsArray;if(Fe.render(Z,R,q),Ge===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&j.hasRenderPass())===!1){const Ie=O.opaque,Oe=O.transmissive;if(B.setupLights(),q.isArrayCamera){const Ve=q.cameras;if(Oe.length>0)for(let qe=0,$e=Ve.length;qe<$e;qe++){const Ye=Ve[qe];xn(Ie,Oe,R,Ye)}ot&&we.render(R);for(let qe=0,$e=Ve.length;qe<$e;qe++){const Ye=Ve[qe];on(O,R,Ye,Ye.viewport)}}else Oe.length>0&&xn(Ie,Oe,R,q),ot&&we.render(R),on(O,R,q)}ae!==null&&re===0&&(W.updateMultisampleRenderTarget(ae),W.updateRenderTargetMipmap(ae)),J&&j.end(C),R.isScene===!0&&R.onAfterRender(C,R,q),Be.resetDefaultState(),pe=-1,ce=null,P.pop(),P.length>0?(B=P[P.length-1],Ge===!0&&ze.setGlobalState(C.clippingPlanes,B.state.camera)):B=null,F.pop(),F.length>0?O=F[F.length-1]:O=null};function ai(R,q,se,J){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)B.pushLight(R),R.castShadow&&B.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Xe.intersectsSprite(R)){J&&pt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Jt);const Ie=Ce.update(R),Oe=R.material;Oe.visible&&O.push(R,Ie,Oe,se,pt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Xe.intersectsObject(R))){const Ie=Ce.update(R),Oe=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pt.copy(R.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),pt.copy(Ie.boundingSphere.center)),pt.applyMatrix4(R.matrixWorld).applyMatrix4(Jt)),Array.isArray(Oe)){const Ve=Ie.groups;for(let qe=0,$e=Ve.length;qe<$e;qe++){const Ye=Ve[qe],et=Oe[Ye.materialIndex];et&&et.visible&&O.push(R,Ie,et,se,pt.z,Ye)}}else Oe.visible&&O.push(R,Ie,Oe,se,pt.z,null)}}const Ue=R.children;for(let Ie=0,Oe=Ue.length;Ie<Oe;Ie++)ai(Ue[Ie],q,se,J)}function on(R,q,se,J){const{opaque:Z,transmissive:Ue,transparent:Ie}=R;B.setupLightsView(se),Ge===!0&&ze.setGlobalState(C.clippingPlanes,se),J&&je.viewport(z.copy(J)),Z.length>0&&yi(Z,q,se),Ue.length>0&&yi(Ue,q,se),Ie.length>0&&yi(Ie,q,se),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function xn(R,q,se,J){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[J.id]===void 0){const et=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[J.id]=new Vi(1,1,{generateMipmaps:!0,type:et?ya:_i,minFilter:Nr,samples:Lt.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const Ue=B.state.transmissionRenderTarget[J.id],Ie=J.viewport||z;Ue.setSize(Ie.z*C.transmissionResolutionScale,Ie.w*C.transmissionResolutionScale);const Oe=C.getRenderTarget(),Ve=C.getActiveCubeFace(),qe=C.getActiveMipmapLevel();C.setRenderTarget(Ue),C.getClearColor(Me),Se=C.getClearAlpha(),Se<1&&C.setClearColor(16777215,.5),C.clear(),ot&&we.render(se);const $e=C.toneMapping;C.toneMapping=Gi;const Ye=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),B.setupLightsView(J),Ge===!0&&ze.setGlobalState(C.clippingPlanes,J),yi(R,se,J),W.updateMultisampleRenderTarget(Ue),W.updateRenderTargetMipmap(Ue),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let wt=0,Zt=q.length;wt<Zt;wt++){const Wt=q[wt],{object:Nt,geometry:Qe,material:Dt,group:at}=Wt;if(Dt.side===ma&&Nt.layers.test(J.layers)){const Sn=Dt.side;Dt.side=qn,Dt.needsUpdate=!0,Hr(Nt,se,J,Qe,Dt,at),Dt.side=Sn,Dt.needsUpdate=!0,et=!0}}et===!0&&(W.updateMultisampleRenderTarget(Ue),W.updateRenderTargetMipmap(Ue))}C.setRenderTarget(Oe,Ve,qe),C.setClearColor(Me,Se),Ye!==void 0&&(J.viewport=Ye),C.toneMapping=$e}function yi(R,q,se){const J=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Ue=R.length;Z<Ue;Z++){const Ie=R[Z],{object:Oe,geometry:Ve,group:qe}=Ie;let $e=Ie.material;$e.allowOverride===!0&&J!==null&&($e=J),Oe.layers.test(se.layers)&&Hr(Oe,q,se,Ve,$e,qe)}}function Hr(R,q,se,J,Z,Ue){R.onBeforeRender(C,q,se,J,Z,Ue),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(C,q,se,J,R,Ue),Z.transparent===!0&&Z.side===ma&&Z.forceSinglePass===!1?(Z.side=qn,Z.needsUpdate=!0,C.renderBufferDirect(se,q,J,Z,R,Ue),Z.side=rr,Z.needsUpdate=!0,C.renderBufferDirect(se,q,J,Z,R,Ue),Z.side=ma):C.renderBufferDirect(se,q,J,Z,R,Ue),R.onAfterRender(C,q,se,J,Z,Ue)}function Gr(R,q,se){q.isScene!==!0&&(q=Ct);const J=E.get(R),Z=B.state.lights,Ue=B.state.shadowsArray,Ie=Z.state.version,Oe=We.getParameters(R,Z.state,Ue,q,se),Ve=We.getProgramCacheKey(Oe);let qe=J.programs;J.environment=R.isMeshStandardMaterial?q.environment:null,J.fog=q.fog,J.envMap=(R.isMeshStandardMaterial?xe:de).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,qe===void 0&&(R.addEventListener("dispose",Dn),qe=new Map,J.programs=qe);let $e=qe.get(Ve);if($e!==void 0){if(J.currentProgram===$e&&J.lightsStateVersion===Ie)return js(R,Oe),$e}else Oe.uniforms=We.getUniforms(R),R.onBeforeCompile(Oe,C),$e=We.acquireProgram(Oe,Ve),qe.set(Ve,$e),J.uniforms=Oe.uniforms;const Ye=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=ze.uniform),js(R,Oe),J.needsLights=Ta(R),J.lightsStateVersion=Ie,J.needsLights&&(Ye.ambientLightColor.value=Z.state.ambient,Ye.lightProbe.value=Z.state.probe,Ye.directionalLights.value=Z.state.directional,Ye.directionalLightShadows.value=Z.state.directionalShadow,Ye.spotLights.value=Z.state.spot,Ye.spotLightShadows.value=Z.state.spotShadow,Ye.rectAreaLights.value=Z.state.rectArea,Ye.ltc_1.value=Z.state.rectAreaLTC1,Ye.ltc_2.value=Z.state.rectAreaLTC2,Ye.pointLights.value=Z.state.point,Ye.pointLightShadows.value=Z.state.pointShadow,Ye.hemisphereLights.value=Z.state.hemi,Ye.directionalShadowMap.value=Z.state.directionalShadowMap,Ye.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ye.spotShadowMap.value=Z.state.spotShadowMap,Ye.spotLightMatrix.value=Z.state.spotLightMatrix,Ye.spotLightMap.value=Z.state.spotLightMap,Ye.pointShadowMap.value=Z.state.pointShadowMap,Ye.pointShadowMatrix.value=Z.state.pointShadowMatrix),J.currentProgram=$e,J.uniformsList=null,$e}function dl(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=nc.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function js(R,q){const se=E.get(R);se.outputColorSpace=q.outputColorSpace,se.batching=q.batching,se.batchingColor=q.batchingColor,se.instancing=q.instancing,se.instancingColor=q.instancingColor,se.instancingMorph=q.instancingMorph,se.skinning=q.skinning,se.morphTargets=q.morphTargets,se.morphNormals=q.morphNormals,se.morphColors=q.morphColors,se.morphTargetsCount=q.morphTargetsCount,se.numClippingPlanes=q.numClippingPlanes,se.numIntersection=q.numClipIntersection,se.vertexAlphas=q.vertexAlphas,se.vertexTangents=q.vertexTangents,se.toneMapping=q.toneMapping}function sr(R,q,se,J,Z){q.isScene!==!0&&(q=Ct),W.resetTextureUnits();const Ue=q.fog,Ie=J.isMeshStandardMaterial?q.environment:null,Oe=ae===null?C.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Is,Ve=(J.isMeshStandardMaterial?xe:de).get(J.envMap||Ie),qe=J.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,$e=!!se.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ye=!!se.morphAttributes.position,et=!!se.morphAttributes.normal,wt=!!se.morphAttributes.color;let Zt=Gi;J.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Zt=C.toneMapping);const Wt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Nt=Wt!==void 0?Wt.length:0,Qe=E.get(J),Dt=B.state.lights;if(Ge===!0&&(dt===!0||R!==ce)){const En=R===ce&&J.id===pe;ze.setState(J,R,En)}let at=!1;J.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Dt.state.version||Qe.outputColorSpace!==Oe||Z.isBatchedMesh&&Qe.batching===!1||!Z.isBatchedMesh&&Qe.batching===!0||Z.isBatchedMesh&&Qe.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Qe.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Qe.instancing===!1||!Z.isInstancedMesh&&Qe.instancing===!0||Z.isSkinnedMesh&&Qe.skinning===!1||!Z.isSkinnedMesh&&Qe.skinning===!0||Z.isInstancedMesh&&Qe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Qe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Qe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Qe.instancingMorph===!1&&Z.morphTexture!==null||Qe.envMap!==Ve||J.fog===!0&&Qe.fog!==Ue||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ze.numPlanes||Qe.numIntersection!==ze.numIntersection)||Qe.vertexAlphas!==qe||Qe.vertexTangents!==$e||Qe.morphTargets!==Ye||Qe.morphNormals!==et||Qe.morphColors!==wt||Qe.toneMapping!==Zt||Qe.morphTargetsCount!==Nt)&&(at=!0):(at=!0,Qe.__version=J.version);let Sn=Qe.currentProgram;at===!0&&(Sn=Gr(J,q,Z));let qi=!1,yn=!1,ri=!1;const Ft=Sn.getUniforms(),Mn=Qe.uniforms;if(je.useProgram(Sn.program)&&(qi=!0,yn=!0,ri=!0),J.id!==pe&&(pe=J.id,yn=!0),qi||ce!==R){je.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ft.setValue(G,"projectionMatrix",R.projectionMatrix),Ft.setValue(G,"viewMatrix",R.matrixWorldInverse);const bn=Ft.map.cameraPosition;bn!==void 0&&bn.setValue(G,_t.setFromMatrixPosition(R.matrixWorld)),Lt.logarithmicDepthBuffer&&Ft.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ft.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),ce!==R&&(ce=R,yn=!0,ri=!0)}if(Qe.needsLights&&(Dt.state.directionalShadowMap.length>0&&Ft.setValue(G,"directionalShadowMap",Dt.state.directionalShadowMap,W),Dt.state.spotShadowMap.length>0&&Ft.setValue(G,"spotShadowMap",Dt.state.spotShadowMap,W),Dt.state.pointShadowMap.length>0&&Ft.setValue(G,"pointShadowMap",Dt.state.pointShadowMap,W)),Z.isSkinnedMesh){Ft.setOptional(G,Z,"bindMatrix"),Ft.setOptional(G,Z,"bindMatrixInverse");const En=Z.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Ft.setValue(G,"boneTexture",En.boneTexture,W))}Z.isBatchedMesh&&(Ft.setOptional(G,Z,"batchingTexture"),Ft.setValue(G,"batchingTexture",Z._matricesTexture,W),Ft.setOptional(G,Z,"batchingIdTexture"),Ft.setValue(G,"batchingIdTexture",Z._indirectTexture,W),Ft.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ft.setValue(G,"batchingColorTexture",Z._colorsTexture,W));const dn=se.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&ut.update(Z,se,Sn),(yn||Qe.receiveShadow!==Z.receiveShadow)&&(Qe.receiveShadow=Z.receiveShadow,Ft.setValue(G,"receiveShadow",Z.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Mn.envMap.value=Ve,Mn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&q.environment!==null&&(Mn.envMapIntensity.value=q.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=AC()),yn&&(Ft.setValue(G,"toneMappingExposure",C.toneMappingExposure),Qe.needsLights&&Zs(Mn,ri),Ue&&J.fog===!0&&nt.refreshFogUniforms(Mn,Ue),nt.refreshMaterialUniforms(Mn,J,_e,ne,B.state.transmissionRenderTarget[R.id]),nc.upload(G,dl(Qe),Mn,W)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(nc.upload(G,dl(Qe),Mn,W),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ft.setValue(G,"center",Z.center),Ft.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Ft.setValue(G,"normalMatrix",Z.normalMatrix),Ft.setValue(G,"modelMatrix",Z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const En=J.uniformsGroups;for(let bn=0,Vr=En.length;bn<Vr;bn++){const Mi=En[bn];ye.update(Mi,Sn),ye.bind(Mi,Sn)}}return Sn}function Zs(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Ta(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(R,q,se){const J=E.get(R);J.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=q,E.get(R.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:se,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const se=E.get(R);se.__webglFramebuffer=q,se.__useDefaultFramebuffer=q===void 0};const Aa=G.createFramebuffer();this.setRenderTarget=function(R,q=0,se=0){ae=R,k=q,re=se;let J=null,Z=!1,Ue=!1;if(R){const Oe=E.get(R);if(Oe.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(G.FRAMEBUFFER,Oe.__webglFramebuffer),z.copy(R.viewport),H.copy(R.scissor),ie=R.scissorTest,je.viewport(z),je.scissor(H),je.setScissorTest(ie),pe=-1;return}else if(Oe.__webglFramebuffer===void 0)W.setupRenderTarget(R);else if(Oe.__hasExternalTextures)W.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $e=R.depthTexture;if(Oe.__boundDepthTexture!==$e){if($e!==null&&E.has($e)&&(R.width!==$e.image.width||R.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(R)}}const Ve=R.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ue=!0);const qe=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qe[q])?J=qe[q][se]:J=qe[q],Z=!0):R.samples>0&&W.useMultisampledRTT(R)===!1?J=E.get(R).__webglMultisampledFramebuffer:Array.isArray(qe)?J=qe[se]:J=qe,z.copy(R.viewport),H.copy(R.scissor),ie=R.scissorTest}else z.copy(ee).multiplyScalar(_e).floor(),H.copy(ue).multiplyScalar(_e).floor(),ie=De;if(se!==0&&(J=Aa),je.bindFramebuffer(G.FRAMEBUFFER,J)&&je.drawBuffers(R,J),je.viewport(z),je.scissor(H),je.setScissorTest(ie),Z){const Oe=E.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Oe.__webglTexture,se)}else if(Ue){const Oe=q;for(let Ve=0;Ve<R.textures.length;Ve++){const qe=E.get(R.textures[Ve]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ve,qe.__webglTexture,se,Oe)}}else if(R!==null&&se!==0){const Oe=E.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Oe.__webglTexture,se)}pe=-1},this.readRenderTargetPixels=function(R,q,se,J,Z,Ue,Ie,Oe=0){if(!(R&&R.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ve=Ve[Ie]),Ve){je.bindFramebuffer(G.FRAMEBUFFER,Ve);try{const qe=R.textures[Oe],$e=qe.format,Ye=qe.type;if(!Lt.textureFormatReadable($e)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(Ye)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-J&&se>=0&&se<=R.height-Z&&(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Oe),G.readPixels(q,se,J,Z,Te.convert($e),Te.convert(Ye),Ue))}finally{const qe=ae!==null?E.get(ae).__webglFramebuffer:null;je.bindFramebuffer(G.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(R,q,se,J,Z,Ue,Ie,Oe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ve=Ve[Ie]),Ve)if(q>=0&&q<=R.width-J&&se>=0&&se<=R.height-Z){je.bindFramebuffer(G.FRAMEBUFFER,Ve);const qe=R.textures[Oe],$e=qe.format,Ye=qe.type;if(!Lt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,et),G.bufferData(G.PIXEL_PACK_BUFFER,Ue.byteLength,G.STREAM_READ),R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Oe),G.readPixels(q,se,J,Z,Te.convert($e),Te.convert(Ye),0);const wt=ae!==null?E.get(ae).__webglFramebuffer:null;je.bindFramebuffer(G.FRAMEBUFFER,wt);const Zt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await ZE(G,Zt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,et),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ue),G.deleteBuffer(et),G.deleteSync(Zt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,se=0){const J=Math.pow(2,-se),Z=Math.floor(R.image.width*J),Ue=Math.floor(R.image.height*J),Ie=q!==null?q.x:0,Oe=q!==null?q.y:0;W.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,se,0,0,Ie,Oe,Z,Ue),je.unbindTexture()};const or=G.createFramebuffer(),Ra=G.createFramebuffer();this.copyTextureToTexture=function(R,q,se=null,J=null,Z=0,Ue=null){Ue===null&&(Z!==0?(nl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ue=Z,Z=0):Ue=0);let Ie,Oe,Ve,qe,$e,Ye,et,wt,Zt;const Wt=R.isCompressedTexture?R.mipmaps[Ue]:R.image;if(se!==null)Ie=se.max.x-se.min.x,Oe=se.max.y-se.min.y,Ve=se.isBox3?se.max.z-se.min.z:1,qe=se.min.x,$e=se.min.y,Ye=se.isBox3?se.min.z:0;else{const dn=Math.pow(2,-Z);Ie=Math.floor(Wt.width*dn),Oe=Math.floor(Wt.height*dn),R.isDataArrayTexture?Ve=Wt.depth:R.isData3DTexture?Ve=Math.floor(Wt.depth*dn):Ve=1,qe=0,$e=0,Ye=0}J!==null?(et=J.x,wt=J.y,Zt=J.z):(et=0,wt=0,Zt=0);const Nt=Te.convert(q.format),Qe=Te.convert(q.type);let Dt;q.isData3DTexture?(W.setTexture3D(q,0),Dt=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),Dt=G.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),Dt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const at=G.getParameter(G.UNPACK_ROW_LENGTH),Sn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),qi=G.getParameter(G.UNPACK_SKIP_PIXELS),yn=G.getParameter(G.UNPACK_SKIP_ROWS),ri=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Wt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Wt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,qe),G.pixelStorei(G.UNPACK_SKIP_ROWS,$e),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ye);const Ft=R.isDataArrayTexture||R.isData3DTexture,Mn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const dn=E.get(R),En=E.get(q),bn=E.get(dn.__renderTarget),Vr=E.get(En.__renderTarget);je.bindFramebuffer(G.READ_FRAMEBUFFER,bn.__webglFramebuffer),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,Vr.__webglFramebuffer);for(let Mi=0;Mi<Ve;Mi++)Ft&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(R).__webglTexture,Z,Ye+Mi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(q).__webglTexture,Ue,Zt+Mi)),G.blitFramebuffer(qe,$e,Ie,Oe,et,wt,Ie,Oe,G.DEPTH_BUFFER_BIT,G.NEAREST);je.bindFramebuffer(G.READ_FRAMEBUFFER,null),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||E.has(R)){const dn=E.get(R),En=E.get(q);je.bindFramebuffer(G.READ_FRAMEBUFFER,or),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ra);for(let bn=0;bn<Ve;bn++)Ft?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,dn.__webglTexture,Z,Ye+bn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,dn.__webglTexture,Z),Mn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,En.__webglTexture,Ue,Zt+bn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,En.__webglTexture,Ue),Z!==0?G.blitFramebuffer(qe,$e,Ie,Oe,et,wt,Ie,Oe,G.COLOR_BUFFER_BIT,G.NEAREST):Mn?G.copyTexSubImage3D(Dt,Ue,et,wt,Zt+bn,qe,$e,Ie,Oe):G.copyTexSubImage2D(Dt,Ue,et,wt,qe,$e,Ie,Oe);je.bindFramebuffer(G.READ_FRAMEBUFFER,null),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Mn?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Dt,Ue,et,wt,Zt,Ie,Oe,Ve,Nt,Qe,Wt.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(Dt,Ue,et,wt,Zt,Ie,Oe,Ve,Nt,Wt.data):G.texSubImage3D(Dt,Ue,et,wt,Zt,Ie,Oe,Ve,Nt,Qe,Wt):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ue,et,wt,Ie,Oe,Nt,Qe,Wt.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ue,et,wt,Wt.width,Wt.height,Nt,Wt.data):G.texSubImage2D(G.TEXTURE_2D,Ue,et,wt,Ie,Oe,Nt,Qe,Wt);G.pixelStorei(G.UNPACK_ROW_LENGTH,at),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Sn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,qi),G.pixelStorei(G.UNPACK_SKIP_ROWS,yn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ri),Ue===0&&q.generateMipmaps&&G.generateMipmap(Dt),je.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&W.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?W.setTextureCube(R,0):R.isData3DTexture?W.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?W.setTexture2DArray(R,0):W.setTexture2D(R,0),je.unbindTexture()},this.resetState=function(){k=0,re=0,ae=null,je.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),i.unpackColorSpace=bt._getUnpackColorSpace()}}function CC(){const s=fe.useRef(null),e=fe.useRef(null);return fe.useEffect(()=>{if(!s.current)return;const i=s.current.clientWidth,r=s.current.clientHeight,l=new Sb;l.background=null;const u=new gi(75,i/r,.1,1e3);u.position.z=5;const f=new RC({antialias:!0,alpha:!0});f.setClearColor(0,0),f.setSize(i,r),s.current.appendChild(f.domElement);const d=50,m=[],p=new Mp(.05,8,8),_=new yp({color:2588022});for(let F=0;F<d;F++){const P=new Xi(p,_),j=(Math.random()-.5)*8,C=(Math.random()-.5)*6,D=(Math.random()-.5)*6;P.position.set(j,C,D),l.add(P),m.push(P)}const g=[],S=new cx({color:2588022,transparent:!0,opacity:.4}),M=2;for(let F=0;F<m.length;F++)for(let P=F+1;P<m.length;P++)if(m[F].position.distanceTo(m[P].position)<M){const C=[m[F].position,m[P].position],D=new Yn().setFromPoints(C),k=new Tb(D,S);l.add(k),g.push({line:k,nodeA:m[F],nodeB:m[P]})}const b=new Yn,T=500,y=new Float32Array(T*3);for(let F=0;F<T*3;F++)y[F]=(Math.random()-.5)*15;b.setAttribute("position",new Ui(y,3));const v=new fx({color:16777215,size:.015,transparent:!0,opacity:.4}),w=new Ab(b,v);l.add(w);let U=0;const O=()=>{e.current=requestAnimationFrame(O),U+=.01,m.forEach((F,P)=>{F.position.y+=Math.sin(U+P*.5)*.002,F.position.x+=Math.cos(U+P*.3)*.001;const j=1+Math.sin(U*2+P)*.2;F.scale.set(j,j,j)}),g.forEach(F=>{const P=[F.nodeA.position,F.nodeB.position];F.line.geometry.setFromPoints(P)}),w.rotation.y+=5e-4,w.rotation.x+=2e-4,f.render(l,u)};O();const B=()=>{if(!s.current)return;const F=s.current.clientWidth,P=s.current.clientHeight;u.aspect=F/P,u.updateProjectionMatrix(),f.setSize(F,P)};return window.addEventListener("resize",B),()=>{window.removeEventListener("resize",B),cancelAnimationFrame(e.current),p.dispose(),_.dispose(),S.dispose(),b.dispose(),v.dispose(),g.forEach(F=>F.line.geometry.dispose()),s.current&&f.domElement&&s.current.removeChild(f.domElement),f.dispose()}},[]),Le.jsx("div",{ref:s,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,pointerEvents:"none"}})}function xx(){return Le.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(to bottom, #C7B8EA 0%, #73A6AD 50%, #277D76 100%)",fontFamily:'"Inter", system-ui, sans-serif',position:"relative"},children:[Le.jsx(CC,{}),Le.jsxs("div",{style:{position:"relative",zIndex:10,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"2rem",color:"#111"},children:[Le.jsx("h1",{style:{fontSize:"4rem",fontWeight:700,marginBottom:"1rem",textAlign:"center"},children:"Safir Jameel"}),Le.jsx("p",{style:{fontSize:"1.5rem",marginBottom:"2rem",opacity:.9},children:"Full Stack Developer"}),Le.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",justifyContent:"center"},children:[Le.jsx("button",{style:{background:"rgba(39, 125, 118, 0.9)",color:"white",border:"none",padding:"1rem 2rem",borderRadius:"8px",fontSize:"1rem",cursor:"pointer",fontWeight:600,transition:"all 0.3s",pointerEvents:"auto"},children:"View Projects"}),Le.jsx("button",{style:{background:"rgba(255, 255, 255, 0.9)",color:"#277D76",border:"2px solid #277D76",padding:"1rem 2rem",borderRadius:"8px",fontSize:"1rem",cursor:"pointer",fontWeight:600,transition:"all 0.3s",pointerEvents:"auto"},children:"Contact Me"})]}),Le.jsxs("div",{style:{marginTop:"4rem",maxWidth:"800px",background:"rgba(255, 255, 255, 0.85)",padding:"2rem",borderRadius:"12px",backdropFilter:"blur(10px)",pointerEvents:"auto"},children:[Le.jsx("h2",{style:{fontSize:"2rem",marginBottom:"1rem",color:"#277D76"},children:"About Me"}),Le.jsx("p",{style:{lineHeight:1.6,color:"#333"},children:"I'm a Full-Stack .Net Developer skilled in c#, ASP.NET, React and Azure services. Currenly working as full stack developer at Brototype (remote)."})]}),Le.jsx("div",{style:{marginTop:"2rem",display:"flex",gap:"1rem",flexWrap:"wrap",justifyContent:"center",pointerEvents:"auto"},children:["React","Three.js","Node.js","TypeScript","AI/ML"].map(s=>Le.jsx("span",{style:{background:"rgba(39, 125, 118, 0.2)",color:"#277D76",padding:"0.5rem 1rem",borderRadius:"20px",fontSize:"0.9rem",fontWeight:600,border:"1px solid rgba(39, 125, 118, 0.3)"},children:s},s))})]})]})}function wC(){const[s,e]=fe.useState(null);return fe.useEffect(()=>{fE().then(e)},[]),s?Le.jsx("div",{className:"container py-5",children:Le.jsxs("div",{className:"row align-items-center",children:[Le.jsx(xx,{}),Le.jsxs("div",{className:"col-md-6",children:[Le.jsx("h1",{className:"fw-bold",style:{color:"#277D76"},children:s.name}),Le.jsx("h4",{className:"text-muted mb-3",children:s.title}),Le.jsxs("p",{className:"mb-1",children:[Le.jsx("strong",{children:"Email:"})," ",s.email]}),s.location&&Le.jsxs("p",{className:"mb-1",children:[Le.jsx("strong",{children:"Location:"})," ",s.location]}),s.phone&&Le.jsxs("p",{className:"mb-1",children:[Le.jsx("strong",{children:"Phone:"})," ",s.phone]})]}),Le.jsx("div",{className:"col-md-6 text-center",children:Le.jsx("img",{src:"https://raw.githubusercontent.com/SJMcode/portfolio-assets/5b2e12a0f9fa26892ca686b56f11e0e90c0078d0/profile_nordic_hackahon.jpg",alt:"Safir profile",className:"img-fluid rounded shadow",style:{maxWidth:"280px",borderRadius:"12px"}})})]})}):Le.jsx("div",{className:"container py-5",children:"Loading..."})}function DC(){const[s,e]=fe.useState(null);return fe.useEffect(()=>{hE().then(e)},[]),s?Le.jsxs("div",{className:"portfolio",children:[Le.jsx("h2",{className:"section-title",children:"Experience"}),s.map((i,r)=>Le.jsxs("div",{className:"item",children:[Le.jsx("h3",{children:i.role}),Le.jsx("p",{children:i.company}),Le.jsx("p",{children:i.period}),i.responsibilities&&Le.jsx("ul",{children:i.responsibilities.map((l,u)=>Le.jsx("li",{children:l},u+l))})]},r))]}):Le.jsx("div",{className:"portfolio",children:"Loading..."})}function UC(){const[s,e]=fe.useState(null);return fe.useEffect(()=>{dE().then(e)},[]),s?Le.jsxs("div",{className:"portfolio",children:[Le.jsx("h2",{className:"section-title",children:"Skills"}),Le.jsxs("ul",{className:"skills",children:[" ",s.map((i,r)=>Le.jsx("li",{children:i.name},`${r}-${i.name}`))," "]})]}):Le.jsx("div",{className:"portfolio",children:"Loading..."})}function LC(){const[s,e]=fe.useState(null);return fe.useEffect(()=>{pE().then(e)},[]),s?Le.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(to bottom, #C7B8EA 0%, #73A6AD 50%, #277D76 100%)",position:"relative",paddingTop:"80px"},children:[Le.jsx(xx,{}),Le.jsxs("div",{style:{position:"relative",zIndex:10,padding:"4rem 2rem",maxWidth:"1200px",margin:"0 auto"},children:[Le.jsx("h2",{style:{fontSize:"3rem",textAlign:"center",color:"#fff",marginBottom:"1rem",fontWeight:700,textShadow:"2px 2px 4px rgba(0,0,0,0.1)"},children:"My Projects"}),Le.jsx("p",{style:{textAlign:"center",color:"#fff",fontSize:"1.2rem",marginBottom:"3rem",opacity:.9},children:"Here are some of my recent works"}),Le.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"2rem"},children:s.map((i,r)=>Le.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(10px)",borderRadius:"12px",padding:"2rem",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.1)",transition:"transform 0.3s, box-shadow 0.3s",cursor:"pointer",pointerEvents:"auto"},onMouseEnter:l=>{l.currentTarget.style.transform="translateY(-8px)",l.currentTarget.style.boxShadow="0 12px 48px rgba(0, 0, 0, 0.15)"},onMouseLeave:l=>{l.currentTarget.style.transform="translateY(0)",l.currentTarget.style.boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"},children:[Le.jsx("h3",{style:{fontSize:"1.5rem",color:"#277D76",marginBottom:"1rem",fontWeight:600},children:i.title}),Le.jsx("p",{style:{color:"#333",lineHeight:1.6,marginBottom:"1rem"},children:i.description}),i.techStack&&Le.jsxs("div",{style:{marginBottom:"1rem"},children:[Le.jsx("strong",{style:{color:"#277D76"},children:"Tech Stack:"}),Le.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"0.5rem"},children:i.techStack.split(",").map((l,u)=>Le.jsx("span",{style:{background:"rgba(39, 125, 118, 0.1)",color:"#277D76",padding:"0.25rem 0.75rem",borderRadius:"12px",fontSize:"0.85rem",fontWeight:500,border:"1px solid rgba(39, 125, 118, 0.2)"},children:l.trim()},u))})]}),i.gitHubUrl&&Le.jsx("a",{href:i.gitHubUrl,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",background:"#277D76",color:"white",padding:"0.75rem 1.5rem",borderRadius:"8px",textDecoration:"none",fontWeight:600,fontSize:"0.9rem",transition:"background 0.3s",marginTop:"0.5rem"},onMouseEnter:l=>l.target.style.background="#1f5f5a",onMouseLeave:l=>l.target.style.background="#277D76",children:"View Project →"})]},`${i.title}-${r}`))})]})]}):Le.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(to bottom, #C7B8EA 0%, #73A6AD 50%, #277D76 100%)",color:"#277D76",fontSize:"1.5rem",fontWeight:600},children:"Loading..."})}function NC(){return Le.jsxs(tE,{children:[Le.jsx(cE,{}),Le.jsxs(UM,{children:[Le.jsx(Zo,{path:"/",element:Le.jsx(wC,{})}),Le.jsx(Zo,{path:"/experience",element:Le.jsx(DC,{})}),Le.jsx(Zo,{path:"/skills",element:Le.jsx(UC,{})}),Le.jsx(Zo,{path:"/projects",element:Le.jsx(LC,{})})]})]})}Ny.createRoot(document.getElementById("root")).render(Le.jsx(fe.StrictMode,{children:Le.jsx(NC,{})}));
