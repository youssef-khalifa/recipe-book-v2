var e,t,r,n,i,o,a,s,c,u,l,f,p,h,d,v,m,g,y,b=globalThis;function _(e){return e&&e.__esModule?e.default:e}var w={},k={},E=function(e){return e&&e.Math===Math&&e};k=E("object"==typeof globalThis&&globalThis)||E("object"==typeof window&&window)||E("object"==typeof self&&self)||E("object"==typeof b&&b)||E("object"==typeof k&&k)||function(){return this}()||Function("return this")();var S={},j={};S=!(j=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var O={},F={};F=!j(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var $=Function.prototype.call;O=F?$.bind($):function(){return $.apply($,arguments)};var L={}.propertyIsEnumerable,M=Object.getOwnPropertyDescriptor;o=M&&!L.call({1:2},1)?function(e){var t=M(this,e);return!!t&&t.enumerable}:L;var P={};P=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var x={},T={},I={},q=Function.prototype,N=q.call,A=F&&q.bind.bind(N,N),H={},C=(I=F?A:function(e){return function(){return N.apply(e,arguments)}})({}.toString),R=I("".slice);H=function(e){return R(C(e),8,-1)};var z=Object,D=I("".split);T=j(function(){return!z("z").propertyIsEnumerable(0)})?function(e){return"String"===H(e)?D(e,""):z(e)}:z;var G={},B={};B=function(e){return null==e};var U=TypeError;G=function(e){if(B(e))throw new U("Can't call method on "+e);return e},x=function(e){return T(G(e))};var W={},Y={},J={},Q={},V="object"==typeof document&&document.all;Q=void 0===V&&void 0!==V?function(e){return"function"==typeof e||e===V}:function(e){return"function"==typeof e},J=function(e){return"object"==typeof e?null!==e:Q(e)};var K={},X={};X=function(e,t){var r;return arguments.length<2?(r=k[e],Q(r)?r:void 0):k[e]&&k[e][t]};var Z={};Z=I({}.isPrototypeOf);var ee={},et={},er={},en={};en="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ei=k.process,eo=k.Deno,ea=ei&&ei.versions||eo&&eo.version,es=ea&&ea.v8;es&&(s=(a=es.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&en&&(!(a=en.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=en.match(/Chrome\/(\d+)/))&&(s=+a[1]),er=s;var ec=k.String;ee=(et=!!Object.getOwnPropertySymbols&&!j(function(){var e=Symbol("symbol detection");return!ec(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&er&&er<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eu=Object;K=ee?function(e){return"symbol"==typeof e}:function(e){var t=X("Symbol");return Q(t)&&Z(t.prototype,eu(e))};var el={},ef={},ep={},eh=String;ep=function(e){try{return eh(e)}catch(e){return"Object"}};var ed=TypeError;ef=function(e){if(Q(e))return e;throw new ed(ep(e)+" is not a function")},el=function(e,t){var r=e[t];return B(r)?void 0:ef(r)};var ev={},em=TypeError;ev=function(e,t){var r,n;if("string"===t&&Q(r=e.toString)&&!J(n=O(r,e))||Q(r=e.valueOf)&&!J(n=O(r,e))||"string"!==t&&Q(r=e.toString)&&!J(n=O(r,e)))return n;throw new em("Can't convert object to primitive value")};var eg={},ey={};ey=!1;var eb={},e_={},ew=Object.defineProperty;e_=function(e,t){try{ew(k,e,{value:t,configurable:!0,writable:!0})}catch(r){k[e]=t}return t};var ek="__core-js_shared__";eb=k[ek]||e_(ek,{}),(eg=function(e,t){return eb[e]||(eb[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.35.1",mode:ey?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.35.1/LICENSE",source:"https://github.com/zloirock/core-js"});var eE={},eS={},ej=Object;eS=function(e){return ej(G(e))};var eO=I({}.hasOwnProperty);eE=Object.hasOwn||function(e,t){return eO(eS(e),t)};var eF={},e$=0,eL=Math.random(),eM=I(1..toString);eF=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eM(++e$+eL,36)};var eP=k.Symbol,ex=eg("wks"),eT=ee?eP.for||eP:eP&&eP.withoutSetter||eF,eI=TypeError,eq=(eE(ex,e="toPrimitive")||(ex[e]=et&&eE(eP,e)?eP[e]:eT("Symbol."+e)),ex[e]);Y=function(e,t){if(!J(e)||K(e))return e;var r,n=el(e,eq);if(n){if(void 0===t&&(t="default"),r=O(n,e,t),!J(r)||K(r))return r;throw new eI("Can't convert object to primitive value")}return void 0===t&&(t="number"),ev(e,t)},W=function(e){var t=Y(e,"string");return K(t)?t:t+""};var eN={},eA={},eH=k.document,eC=J(eH)&&J(eH.createElement);eA=function(e){return eC?eH.createElement(e):{}},eN=!S&&!j(function(){return 7!==Object.defineProperty(eA("div"),"a",{get:function(){return 7}}).a});var eR=Object.getOwnPropertyDescriptor;i=S?eR:function(e,t){if(e=x(e),t=W(t),eN)try{return eR(e,t)}catch(e){}if(eE(e,t))return P(!O(o,e,t),e[t])};var ez={},eD={};eD=S&&j(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eG={},eB=String,eU=TypeError;eG=function(e){if(J(e))return e;throw new eU(eB(e)+" is not an object")};var eW=TypeError,eY=Object.defineProperty,eJ=Object.getOwnPropertyDescriptor,eQ="enumerable",eV="configurable",eK="writable";c=S?eD?function(e,t,r){if(eG(e),t=W(t),eG(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eK in r&&!r[eK]){var n=eJ(e,t);n&&n[eK]&&(e[t]=r.value,r={configurable:eV in r?r[eV]:n[eV],enumerable:eQ in r?r[eQ]:n[eQ],writable:!1})}return eY(e,t,r)}:eY:function(e,t,r){if(eG(e),t=W(t),eG(r),eN)try{return eY(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eW("Accessors not supported");return"value"in r&&(e[t]=r.value),e},ez=S?function(e,t,r){return c(e,t,P(1,r))}:function(e,t,r){return e[t]=r,e};var eX={},eZ={},e0=Function.prototype,e1=S&&Object.getOwnPropertyDescriptor,e2=eE(e0,"name")&&(!S||S&&e1(e0,"name").configurable),e4={},e3=I(Function.toString);Q(eb.inspectSource)||(eb.inspectSource=function(e){return e3(e)}),e4=eb.inspectSource;var e7={},e9={},e8=k.WeakMap;e9=Q(e8)&&/native code/.test(String(e8));var e5={},e6=eg("keys");e5=function(e){return e6[e]||(e6[e]=eF(e))};var te={};te={};var tt="Object already initialized",tr=k.TypeError,tn=k.WeakMap;if(e9||eb.state){var ti=eb.state||(eb.state=new tn);ti.get=ti.get,ti.has=ti.has,ti.set=ti.set,u=function(e,t){if(ti.has(e))throw new tr(tt);return t.facade=e,ti.set(e,t),t},l=function(e){return ti.get(e)||{}},f=function(e){return ti.has(e)}}else{var to=e5("state");te[to]=!0,u=function(e,t){if(eE(e,to))throw new tr(tt);return t.facade=e,ez(e,to,t),t},l=function(e){return eE(e,to)?e[to]:{}},f=function(e){return eE(e,to)}}var ta=(e7={set:u,get:l,has:f,enforce:function(e){return f(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!J(t)||(r=l(t)).type!==e)throw new tr("Incompatible receiver, "+e+" required");return r}}}).enforce,ts=e7.get,tc=String,tu=Object.defineProperty,tl=I("".slice),tf=I("".replace),tp=I([].join),th=S&&!j(function(){return 8!==tu(function(){},"length",{value:8}).length}),tv=String(String).split("String"),tm=eZ=function(e,t,r){"Symbol("===tl(tc(t),0,7)&&(t="["+tf(tc(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eE(e,"name")||e2&&e.name!==t)&&(S?tu(e,"name",{value:t,configurable:!0}):e.name=t),th&&r&&eE(r,"arity")&&e.length!==r.arity&&tu(e,"length",{value:r.arity});try{r&&eE(r,"constructor")&&r.constructor?S&&tu(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ta(e);return eE(n,"source")||(n.source=tp(tv,"string"==typeof t?t:"")),e};Function.prototype.toString=tm(function(){return Q(this)&&ts(this).source||e4(this)},"toString"),eX=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(Q(r)&&eZ(r,o,n),n.global)i?e[t]=r:e_(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tg={},ty={},tb={},t_={},tw={},tk={},tE=Math.ceil,tS=Math.floor;tk=Math.trunc||function(e){var t=+e;return(t>0?tS:tE)(t)},tw=function(e){var t=+e;return t!=t||0===t?0:tk(t)};var tj=Math.max,tO=Math.min;t_=function(e,t){var r=tw(e);return r<0?tj(r+t,0):tO(r,t)};var tF={},t$={},tL=Math.min;t$=function(e){var t=tw(e);return t>0?tL(t,9007199254740991):0},tF=function(e){return t$(e.length)};var tM=function(e){return function(t,r,n){var i,o=x(t),a=tF(o),s=t_(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tP={includes:tM(!0),indexOf:tM(!1)}.indexOf,tx=I([].push);tb=function(e,t){var r,n=x(e),i=0,o=[];for(r in n)!eE(te,r)&&eE(n,r)&&tx(o,r);for(;t.length>i;)eE(n,r=t[i++])&&(~tP(o,r)||tx(o,r));return o};var tT=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return tb(e,tT)},h=Object.getOwnPropertySymbols;var tI=I([].concat);ty=X("Reflect","ownKeys")||function(e){var t=p(eG(e));return h?tI(t,h(e)):t},tg=function(e,t,r){for(var n=ty(t),o=0;o<n.length;o++){var a=n[o];eE(e,a)||r&&eE(r,a)||c(e,a,i(t,a))}};var tq={},tN=/#|\.prototype\./,tA=function(e,t){var r=tC[tH(e)];return r===tz||r!==tR&&(Q(t)?j(t):!!t)},tH=tA.normalize=function(e){return String(e).replace(tN,".").toLowerCase()},tC=tA.data={},tR=tA.NATIVE="N",tz=tA.POLYFILL="P";tq=tA,w=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?k:l?k[c]||e_(c,{}):k[c]&&k[c].prototype)for(n in t){if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tq(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tg(a,o)}(e.sham||o&&o.sham)&&ez(a,"sham",!0),eX(r,n,a,e)}};var tD={},tG={},tB=Function.prototype,tU=tB.apply,tW=tB.call;tG="object"==typeof Reflect&&Reflect.apply||(F?tW.bind(tU):function(){return tW.apply(tU,arguments)});var tY={},tJ={},tQ=(tJ=function(e){if("Function"===H(e))return I(e)})(tJ.bind);tY=function(e,t){return ef(e),void 0===t?e:F?tQ(e,t):function(){return e.apply(t,arguments)}};var tV={};tV=X("document","documentElement");var tK={};tK=I([].slice);var tX={},tZ=TypeError;tX=function(e,t){if(e<t)throw new tZ("Not enough arguments");return e};var t0={};t0=/(?:ipad|iphone|ipod).*applewebkit/i.test(en);var t1={};t1="process"===H(k.process);var t2=k.setImmediate,t4=k.clearImmediate,t3=k.process,t7=k.Dispatch,t9=k.Function,t8=k.MessageChannel,t5=k.String,t6=0,re={},rt="onreadystatechange";j(function(){d=k.location});var rr=function(e){if(eE(re,e)){var t=re[e];delete re[e],t()}},rn=function(e){return function(){rr(e)}},ri=function(e){rr(e.data)},ro=function(e){k.postMessage(t5(e),d.protocol+"//"+d.host)};t2&&t4||(t2=function(e){tX(arguments.length,1);var t=Q(e)?e:t9(e),r=tK(arguments,1);return re[++t6]=function(){tG(t,void 0,r)},v(t6),t6},t4=function(e){delete re[e]},t1?v=function(e){t3.nextTick(rn(e))}:t7&&t7.now?v=function(e){t7.now(rn(e))}:t8&&!t0?(g=(m=new t8).port2,m.port1.onmessage=ri,v=tY(g.postMessage,g)):k.addEventListener&&Q(k.postMessage)&&!k.importScripts&&d&&"file:"!==d.protocol&&!j(ro)?(v=ro,k.addEventListener("message",ri,!1)):v=rt in eA("script")?function(e){tV.appendChild(eA("script"))[rt]=function(){tV.removeChild(this),rr(e)}}:function(e){setTimeout(rn(e),0)});var ra=(tD={set:t2,clear:t4}).clear;w({global:!0,bind:!0,enumerable:!0,forced:k.clearImmediate!==ra},{clearImmediate:ra});var rs=tD.set,rc={},ru={};ru="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rl=k.Function,rf=/MSIE .\./.test(en)||ru&&((t=k.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rc=function(e,t){var r=t?2:1;return rf?function(n,i){var o=tX(arguments.length,1)>r,a=Q(n)?n:rl(n),s=o?tK(arguments,r):[],c=o?function(){tG(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rp=k.setImmediate?rc(rs,!1):rs;w({global:!0,bind:!0,enumerable:!0,forced:k.setImmediate!==rp},{setImmediate:rp});var rh=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof m?r:m).prototype);return i(c,"_invoke",{value:(a=new F(o||[]),s=p,function(r,i){if(s===h)throw Error("Generator is already running");if(s===d){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v;var a=f(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(c){if(c===v)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=d,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=h;var u=f(e,n,a);if("normal"===u.type){if(s=a.done?d:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=d,a.method="throw",a.arg=u.arg)}})}),c}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",h="executing",d="completed",v={};function m(){}function g(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_($([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=m.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=f(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function $(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return g.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:g,configurable:!0}),g.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=$,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:$(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=rh}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rh:Function("r","regeneratorRuntime = r")(rh)}const rd="https://forkify-api.herokuapp.com/api/v2/recipes",rv=async function(e){try{let t=await Promise.race([fetch(e),new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),r=await t.json();if(!t.ok)throw Error(`${r.message} (${t.status})`);return r}catch(e){throw e}},rm={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rg=async function(e){try{let{recipe:t}=(await rv(`${rd}/${e}`)).data;rm.recipe={id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients},rm.bookmarks.some(t=>t.id===e)?rm.recipe.bookmark=!0:rm.recipe.bookmarked=!1}catch(e){throw e}},ry=async function(e){try{rm.search.query=e;let t=await rv(`${rd}?search=${e}`);rm.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url})),rm.search.page=1}catch(e){throw e}},rb=function(e=rm.search.page){rm.search.page=e;let t=(e-1)*rm.search.resultsPerPage,r=e*rm.search.resultsPerPage;return rm.search.results.slice(t,r)},r_=function(e=rm.recipe.servings){rm.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rm.recipe.servings}),rm.recipe.servings=e},rw=function(){localStorage.setItem("bookmarks",JSON.stringify(rm.bookmarks))},rk=function(e){rm.bookmarks.push(e),e.id===rm.recipe.id&&(rm.recipe.bookmarked=!0),rw()},rE=function(e){let t=rm.bookmarks.findIndex(t=>t.id===e);rm.bookmarks.splice(t,1),e===rm.recipe.id&&(rm.recipe.bookmarked=!1),rw()};!function(){let e=localStorage.getItem("bookmarks");e&&(rm.bookmarks=JSON.parse(e))}();var rS={};rS=new URL("icons.c14567a0.svg",import.meta.url).toString();class rj{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner=function(){let e=`
      <div class="spinner">
        <svg>
           <use href="${_(rS)}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)};renderError(e=this._errorMessage){let t=`
        <div class="error">
            <div>
              <svg>
                <use href="${_(rS)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${e}</p>
        </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},y=Fraction;class rO extends rj{_parentElement=document.querySelector(".recipe");_message="";_errorMessage="we couldn't find this recipe please try another one !";addHndelerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHndelerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
        <figure class="recipe__fig">
          <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${_(rS)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${_(rS)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${_(rS)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings"data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${_(rS)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="${_(rS)}#icon-user"></use>
            </svg>
            </div>
            <button class="btn--round btn--bookmark">
              <svg class="">
                <use href="${_(rS)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
              </svg>
            </button>
          </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${this._data.ingredients.map(e=>this._generateMarkupIngredient(e)).join("")}
            

            
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${_(rS)}_icon-arrow-right"></use>
            </svg>
          </a>
        </div>`}_generateMarkupIngredient(e){return`
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${_(rS)}_icon-check"></use>
          </svg>
          <div class="recipe__quantity">${e.quantity?new y(e.quantity).toString():""}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${e.unit}</span>
            ${e.description}
          </div>
        </li>
      `}}var rF=new rO;class r${_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}_clearInput(){this._parentElement.querySelector(".search__field").value=""}}var rL=new r$,rM=new class extends rj{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
      <li class="preview">
        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${this._data.key?"":"hidden"}">
              <svg>
              <use href="${_(rS)}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `}};class rP extends rj{_parentElement=document.querySelector(".results");_message="";_errorMessage="no recipes found for your search please try again ";_generateMarkup(){return this._data.map(e=>rM.render(e,!1)).join("")}}var rx=new rP;class rT extends rj{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
                <use href="${_(rS)}#icon-arrow-right"></use>
            </svg>
        </button>
      `:e===t&&t>1?`
            <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${_(rS)}#icon-arrow-left"></use>
                </svg>
                <span>Page ${e-1}</span>
            </button>
        `:e<t?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${_(rS)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
        </button>
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
                <use href="${_(rS)}#icon-arrow-right"></use>
            </svg>
        </button>
    `:""}}var rI=new rT;class rq extends rj{_parentElement=document.querySelector(".bookmarks__list");_message="";_errorMessage="no bookmarks yet find nice recipe and bookmark it ";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rM.render(e,!1)).join("")}}var rN=new rq;const rA=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rF.renderSpinner(),rx.update(rb()),rN.update(rm.bookmarks),await rg(e),rF.render(rm.recipe)}catch(e){rF.renderError()}},rH=async function(){try{rx.renderSpinner();let e=rL.getQuery();if(!e)return;await ry(e),rx.render(rb()),rI.render(rm.search)}catch(e){console.error(e)}};rN.addHandlerRender(function(){rN.render(rm.bookmarks)}),rF.addHndelerRender(rA),rF.addHndelerUpdateServings(function(e){r_(e),rF.update(rm.recipe)}),rL.addHandlerSearch(rH),rI.addHandlerClick(function(e){rx.render(rb(e)),rI.render(rm.search)}),rF.addHandlerAddBookmark(function(){rm.recipe.bookmarked?rE(rm.recipe.id):rk(rm.recipe),rF.update(rm.recipe),rN.render(rm.bookmarks)});
//# sourceMappingURL=index.fec60547.js.map
