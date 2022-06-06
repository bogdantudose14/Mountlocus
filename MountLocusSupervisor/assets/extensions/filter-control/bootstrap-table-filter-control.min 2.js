/**
  * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
  *
  * @version v1.16.0
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):e((t=t||self).jQuery)}(this,(function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,e){return t(e={exports:{}},e.exports),e.exports}var r=function(t){return t&&t.Math==Math&&t},o=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||Function("return this")(),i=function(t){try{return!!t()}catch(t){return!0}},a=!i((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),l={}.propertyIsEnumerable,c=Object.getOwnPropertyDescriptor,u={f:c&&!l.call({1:2},1)?function(t){var e=c(this,t);return!!e&&e.enumerable}:l},s=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},f={}.toString,p=function(t){return f.call(t).slice(8,-1)},d="".split,h=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==p(t)?d.call(t,""):Object(t)}:Object,g=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},v=function(t){return h(g(t))},y=function(t){return"object"==typeof t?null!==t:"function"==typeof t},b=function(t,e){if(!y(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!y(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!y(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!y(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},C={}.hasOwnProperty,m=function(t,e){return C.call(t,e)},S=o.document,O=y(S)&&y(S.createElement),x=function(t){return O?S.createElement(t):{}},T=!a&&!i((function(){return 7!=Object.defineProperty(x("div"),"a",{get:function(){return 7}}).a})),w=Object.getOwnPropertyDescriptor,E={f:a?w:function(t,e){if(t=v(t),e=b(e,!0),T)try{return w(t,e)}catch(t){}if(m(t,e))return s(!u.f.call(t,e),t[e])}},j=function(t){if(!y(t))throw TypeError(String(t)+" is not an object");return t},k=Object.defineProperty,P={f:a?k:function(t,e,n){if(j(t),e=b(e,!0),j(n),T)try{return k(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},I=a?function(t,e,n){return P.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t},D=function(t,e){try{I(o,t,e)}catch(n){o[t]=e}return e},L=o["__core-js_shared__"]||D("__core-js_shared__",{}),A=Function.toString;"function"!=typeof L.inspectSource&&(L.inspectSource=function(t){return A.call(t)});var R,F,_,M=L.inspectSource,N=o.WeakMap,V="function"==typeof N&&/native code/.test(M(N)),$=n((function(t){(t.exports=function(t,e){return L[t]||(L[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.0",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),B=0,H=Math.random(),G=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++B+H).toString(36)},U=$("keys"),K=function(t){return U[t]||(U[t]=G(t))},W={},q=o.WeakMap;if(V){var z=new q,Y=z.get,X=z.has,J=z.set;R=function(t,e){return J.call(z,t,e),e},F=function(t){return Y.call(z,t)||{}},_=function(t){return X.call(z,t)}}else{var Q=K("state");W[Q]=!0,R=function(t,e){return I(t,Q,e),e},F=function(t){return m(t,Q)?t[Q]:{}},_=function(t){return m(t,Q)}}var Z,tt,et={set:R,get:F,has:_,enforce:function(t){return _(t)?F(t):R(t,{})},getterFor:function(t){return function(e){var n;if(!y(e)||(n=F(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},nt=n((function(t){var e=et.get,n=et.enforce,r=String(String).split("String");(t.exports=function(t,e,i,a){var l=!!a&&!!a.unsafe,c=!!a&&!!a.enumerable,u=!!a&&!!a.noTargetGet;"function"==typeof i&&("string"!=typeof e||m(i,"name")||I(i,"name",e),n(i).source=r.join("string"==typeof e?e:"")),t!==o?(l?!u&&t[e]&&(c=!0):delete t[e],c?t[e]=i:I(t,e,i)):c?t[e]=i:D(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||M(this)}))})),rt=o,ot=function(t){return"function"==typeof t?t:void 0},it=function(t,e){return arguments.length<2?ot(rt[t])||ot(o[t]):rt[t]&&rt[t][e]||o[t]&&o[t][e]},at=Math.ceil,lt=Math.floor,ct=function(t){return isNaN(t=+t)?0:(t>0?lt:at)(t)},ut=Math.min,st=function(t){return t>0?ut(ct(t),9007199254740991):0},ft=Math.max,pt=Math.min,dt=function(t){return function(e,n,r){var o,i=v(e),a=st(i.length),l=function(t,e){var n=ct(t);return n<0?ft(n+e,0):pt(n,e)}(r,a);if(t&&n!=n){for(;a>l;)if((o=i[l++])!=o)return!0}else for(;a>l;l++)if((t||l in i)&&i[l]===n)return t||l||0;return!t&&-1}},ht={includes:dt(!0),indexOf:dt(!1)},gt=ht.indexOf,vt=function(t,e){var n,r=v(t),o=0,i=[];for(n in r)!m(W,n)&&m(r,n)&&i.push(n);for(;e.length>o;)m(r,n=e[o++])&&(~gt(i,n)||i.push(n));return i},yt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],bt=yt.concat("length","prototype"),Ct={f:Object.getOwnPropertyNames||function(t){return vt(t,bt)}},mt={f:Object.getOwnPropertySymbols},St=it("Reflect","ownKeys")||function(t){var e=Ct.f(j(t)),n=mt.f;return n?e.concat(n(t)):e},Ot=function(t,e){for(var n=St(e),r=P.f,o=E.f,i=0;i<n.length;i++){var a=n[i];m(t,a)||r(t,a,o(e,a))}},xt=/#|\.prototype\./,Tt=function(t,e){var n=Et[wt(t)];return n==kt||n!=jt&&("function"==typeof e?i(e):!!e)},wt=Tt.normalize=function(t){return String(t).replace(xt,".").toLowerCase()},Et=Tt.data={},jt=Tt.NATIVE="N",kt=Tt.POLYFILL="P",Pt=Tt,It=E.f,Dt=function(t,e){var n,r,i,a,l,c=t.target,u=t.global,s=t.stat;if(n=u?o:s?o[c]||D(c,{}):(o[c]||{}).prototype)for(r in e){if(a=e[r],i=t.noTargetGet?(l=It(n,r))&&l.value:n[r],!Pt(u?r:c+(s?".":"#")+r,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;Ot(a,i)}(t.sham||i&&i.sham)&&I(a,"sham",!0),nt(n,r,a,t)}},Lt=Array.isArray||function(t){return"Array"==p(t)},At=function(t){return Object(g(t))},Rt=function(t,e,n){var r=b(e);r in t?P.f(t,r,s(0,n)):t[r]=n},Ft=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())})),_t=Ft&&!Symbol.sham&&"symbol"==typeof Symbol(),Mt=$("wks"),Nt=o.Symbol,Vt=_t?Nt:G,$t=function(t){return m(Mt,t)||(Ft&&m(Nt,t)?Mt[t]=Nt[t]:Mt[t]=Vt("Symbol."+t)),Mt[t]},Bt=$t("species"),Ht=function(t,e){var n;return Lt(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!Lt(n.prototype)?y(n)&&null===(n=n[Bt])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},Gt=it("navigator","userAgent")||"",Ut=o.process,Kt=Ut&&Ut.versions,Wt=Kt&&Kt.v8;Wt?tt=(Z=Wt.split("."))[0]+Z[1]:Gt&&(!(Z=Gt.match(/Edge\/(\d+)/))||Z[1]>=74)&&(Z=Gt.match(/Chrome\/(\d+)/))&&(tt=Z[1]);var qt=tt&&+tt,zt=$t("species"),Yt=function(t){return qt>=51||!i((function(){var e=[];return(e.constructor={})[zt]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},Xt=$t("isConcatSpreadable"),Jt=qt>=51||!i((function(){var t=[];return t[Xt]=!1,t.concat()[0]!==t})),Qt=Yt("concat"),Zt=function(t){if(!y(t))return!1;var e=t[Xt];return void 0!==e?!!e:Lt(t)};Dt({target:"Array",proto:!0,forced:!Jt||!Qt},{concat:function(t){var e,n,r,o,i,a=At(this),l=Ht(a,0),c=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?a:arguments[e],Zt(i)){if(c+(o=st(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,c++)n in i&&Rt(l,c,i[n])}else{if(c>=9007199254740991)throw TypeError("Maximum allowed index exceeded");Rt(l,c++,i)}return l.length=c,l}});var te=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},ee=[].push,ne=function(t){var e=1==t,n=2==t,r=3==t,o=4==t,i=6==t,a=5==t||i;return function(l,c,u,s){for(var f,p,d=At(l),g=h(d),v=function(t,e,n){if(te(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}(c,u,3),y=st(g.length),b=0,C=s||Ht,m=e?C(l,y):n?C(l,0):void 0;y>b;b++)if((a||b in g)&&(p=v(f=g[b],b,d),t))if(e)m[b]=p;else if(p)switch(t){case 3:return!0;case 5:return f;case 6:return b;case 2:ee.call(m,f)}else if(o)return!1;return i?-1:r||o?o:m}},re={forEach:ne(0),map:ne(1),filter:ne(2),some:ne(3),every:ne(4),find:ne(5),findIndex:ne(6)},oe=re.filter,ie=Yt("filter"),ae=ie&&!i((function(){[].filter.call({length:-1,0:1},(function(t){throw t}))}));Dt({target:"Array",proto:!0,forced:!ie||!ae},{filter:function(t){return oe(this,t,arguments.length>1?arguments[1]:void 0)}});var le,ce=Object.keys||function(t){return vt(t,yt)},ue=a?Object.defineProperties:function(t,e){j(t);for(var n,r=ce(e),o=r.length,i=0;o>i;)P.f(t,n=r[i++],e[n]);return t},se=it("document","documentElement"),fe=K("IE_PROTO"),pe=function(){},de=function(t){return"<script>"+t+"<\/script>"},he=function(){try{le=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;he=le?function(t){t.write(de("")),t.close();var e=t.parentWindow.Object;return t=null,e}(le):((e=x("iframe")).style.display="none",se.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(de("document.F=Object")),t.close(),t.F);for(var n=yt.length;n--;)delete he.prototype[yt[n]];return he()};W[fe]=!0;var ge=Object.create||function(t,e){var n;return null!==t?(pe.prototype=j(t),n=new pe,pe.prototype=null,n[fe]=t):n=he(),void 0===e?n:ue(n,e)},ve=$t("unscopables"),ye=Array.prototype;null==ye[ve]&&P.f(ye,ve,{configurable:!0,value:ge(null)});var be=function(t){ye[ve][t]=!0},Ce=re.find,me=!0;"find"in[]&&Array(1).find((function(){me=!1})),Dt({target:"Array",proto:!0,forced:me},{find:function(t){return Ce(this,t,arguments.length>1?arguments[1]:void 0)}}),be("find");var Se=ht.includes;Dt({target:"Array",proto:!0},{includes:function(t){return Se(this,t,arguments.length>1?arguments[1]:void 0)}}),be("includes");var Oe=function(t,e){var n=[][t];return!n||!i((function(){n.call(null,e||function(){throw 1},1)}))},xe=ht.indexOf,Te=[].indexOf,we=!!Te&&1/[1].indexOf(1,-0)<0,Ee=Oe("indexOf");Dt({target:"Array",proto:!0,forced:we||Ee},{indexOf:function(t){return we?Te.apply(this,arguments)||0:xe(this,t,arguments.length>1?arguments[1]:void 0)}});var je=[].join,ke=h!=Object,Pe=Oe("join",",");Dt({target:"Array",proto:!0,forced:ke||Pe},{join:function(t){return je.call(v(this),void 0===t?",":t)}});var Ie=[],De=Ie.sort,Le=i((function(){Ie.sort(void 0)})),Ae=i((function(){Ie.sort(null)})),Re=Oe("sort");Dt({target:"Array",proto:!0,forced:Le||!Ae||Re},{sort:function(t){return void 0===t?De.call(At(this)):De.call(At(this),te(t))}}),Dt({target:"Object",stat:!0,forced:i((function(){ce(1)}))},{keys:function(t){return ce(At(t))}});var Fe={};Fe[$t("toStringTag")]="z";var _e="[object z]"===String(Fe),Me=$t("toStringTag"),Ne="Arguments"==p(function(){return arguments}()),Ve=_e?p:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),Me))?n:Ne?p(e):"Object"==(r=p(e))&&"function"==typeof e.callee?"Arguments":r},$e=_e?{}.toString:function(){return"[object "+Ve(this)+"]"};_e||nt(Object.prototype,"toString",$e,{unsafe:!0});var Be="\t\n\v\f\r                　\u2028\u2029\ufeff",He="["+Be+"]",Ge=RegExp("^"+He+He+"*"),Ue=RegExp(He+He+"*$"),Ke=function(t){return function(e){var n=String(g(e));return 1&t&&(n=n.replace(Ge,"")),2&t&&(n=n.replace(Ue,"")),n}},We={start:Ke(1),end:Ke(2),trim:Ke(3)},qe=We.trim,ze=o.parseInt,Ye=/^[+-]?0[Xx]/,Xe=8!==ze(Be+"08")||22!==ze(Be+"0x16")?function(t,e){var n=qe(String(t));return ze(n,e>>>0||(Ye.test(n)?16:10))}:ze;Dt({global:!0,forced:parseInt!=Xe},{parseInt:Xe});var Je=function(){var t=j(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};function Qe(t,e){return RegExp(t,e)}var Ze,tn,en={UNSUPPORTED_Y:i((function(){var t=Qe("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),BROKEN_CARET:i((function(){var t=Qe("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},nn=RegExp.prototype.exec,rn=String.prototype.replace,on=nn,an=(Ze=/a/,tn=/b*/g,nn.call(Ze,"a"),nn.call(tn,"a"),0!==Ze.lastIndex||0!==tn.lastIndex),ln=en.UNSUPPORTED_Y||en.BROKEN_CARET,cn=void 0!==/()??/.exec("")[1];(an||cn||ln)&&(on=function(t){var e,n,r,o,i=this,a=ln&&i.sticky,l=Je.call(i),c=i.source,u=0,s=t;return a&&(-1===(l=l.replace("y","")).indexOf("g")&&(l+="g"),s=String(t).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==t[i.lastIndex-1])&&(c="(?: "+c+")",s=" "+s,u++),n=new RegExp("^(?:"+c+")",l)),cn&&(n=new RegExp("^"+c+"$(?!\\s)",l)),an&&(e=i.lastIndex),r=nn.call(a?n:i,s),a?r?(r.input=r.input.slice(u),r[0]=r[0].slice(u),r.index=i.lastIndex,i.lastIndex+=r[0].length):i.lastIndex=0:an&&r&&(i.lastIndex=i.global?r.index+r[0].length:e),cn&&r&&r.length>1&&rn.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r});var un=on;Dt({target:"RegExp",proto:!0,forced:/./.exec!==un},{exec:un});var sn=RegExp.prototype,fn=sn.toString,pn=i((function(){return"/a/b"!=fn.call({source:"a",flags:"b"})})),dn="toString"!=fn.name;(pn||dn)&&nt(RegExp.prototype,"toString",(function(){var t=j(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in sn)?Je.call(t):n)}),{unsafe:!0});var hn=$t("match"),gn=function(t){var e;return y(t)&&(void 0!==(e=t[hn])?!!e:"RegExp"==p(t))},vn=function(t){if(gn(t))throw TypeError("The method doesn't accept regular expressions");return t},yn=$t("match");Dt({target:"String",proto:!0,forced:!function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[yn]=!1,"/./"[t](e)}catch(t){}}return!1}("includes")},{includes:function(t){return!!~String(g(this)).indexOf(vn(t),arguments.length>1?arguments[1]:void 0)}});var bn=$t("species"),Cn=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),mn="$0"==="a".replace(/./,"$0"),Sn=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),On=function(t,e,n,r){var o=$t(t),a=!i((function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})),l=a&&!i((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[bn]=function(){return n},n.flags="",n[o]=/./[o]),n.exec=function(){return e=!0,null},n[o](""),!e}));if(!a||!l||"replace"===t&&(!Cn||!mn)||"split"===t&&!Sn){var c=/./[o],u=n(o,""[t],(function(t,e,n,r,o){return e.exec===un?a&&!o?{done:!0,value:c.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:mn}),s=u[0],f=u[1];nt(String.prototype,t,s),nt(RegExp.prototype,o,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)})}r&&I(RegExp.prototype[o],"sham",!0)},xn=function(t){return function(e,n){var r,o,i=String(g(e)),a=ct(n),l=i.length;return a<0||a>=l?t?"":void 0:(r=i.charCodeAt(a))<55296||r>56319||a+1===l||(o=i.charCodeAt(a+1))<56320||o>57343?t?i.charAt(a):r:t?i.slice(a,a+2):o-56320+(r-55296<<10)+65536}},Tn={codeAt:xn(!1),charAt:xn(!0)}.charAt,wn=function(t,e,n){return e+(n?Tn(t,e).length:1)},En=function(t,e){var n=t.exec;if("function"==typeof n){var r=n.call(t,e);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==p(t))throw TypeError("RegExp#exec called on incompatible receiver");return un.call(t,e)};On("match",1,(function(t,e,n){return[function(e){var n=g(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var o=j(t),i=String(this);if(!o.global)return En(o,i);var a=o.unicode;o.lastIndex=0;for(var l,c=[],u=0;null!==(l=En(o,i));){var s=String(l[0]);c[u]=s,""===s&&(o.lastIndex=wn(i,st(o.lastIndex),a)),u++}return 0===u?null:c}]}));var jn=Math.max,kn=Math.min,Pn=Math.floor,In=/\$([$&'`]|\d\d?|<[^>]*>)/g,Dn=/\$([$&'`]|\d\d?)/g;On("replace",2,(function(t,e,n,r){return[function(n,r){var o=g(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,r):e.call(String(o),n,r)},function(t,i){if(r.REPLACE_KEEPS_$0||"string"==typeof i&&-1===i.indexOf("$0")){var a=n(e,t,this,i);if(a.done)return a.value}var l=j(t),c=String(this),u="function"==typeof i;u||(i=String(i));var s=l.global;if(s){var f=l.unicode;l.lastIndex=0}for(var p=[];;){var d=En(l,c);if(null===d)break;if(p.push(d),!s)break;""===String(d[0])&&(l.lastIndex=wn(c,st(l.lastIndex),f))}for(var h,g="",v=0,y=0;y<p.length;y++){d=p[y];for(var b=String(d[0]),C=jn(kn(ct(d.index),c.length),0),m=[],S=1;S<d.length;S++)m.push(void 0===(h=d[S])?h:String(h));var O=d.groups;if(u){var x=[b].concat(m,C,c);void 0!==O&&x.push(O);var T=String(i.apply(void 0,x))}else T=o(b,c,C,m,O,i);C>=v&&(g+=c.slice(v,C)+T,v=C+b.length)}return g+c.slice(v)}];function o(t,n,r,o,i,a){var l=r+t.length,c=o.length,u=Dn;return void 0!==i&&(i=At(i),u=In),e.call(a,u,(function(e,a){var u;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(l);case"<":u=i[a.slice(1,-1)];break;default:var s=+a;if(0===s)return e;if(s>c){var f=Pn(s/10);return 0===f?e:f<=c?void 0===o[f-1]?a.charAt(1):o[f-1]+a.charAt(1):e}u=o[s-1]}return void 0===u?"":u}))}}));var Ln=$t("species"),An=[].push,Rn=Math.min,Fn=!i((function(){return!RegExp(4294967295,"y")}));On("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(g(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!gn(t))return e.call(r,t,o);for(var i,a,l,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),s=0,f=new RegExp(t.source,u+"g");(i=un.call(f,r))&&!((a=f.lastIndex)>s&&(c.push(r.slice(s,i.index)),i.length>1&&i.index<r.length&&An.apply(c,i.slice(1)),l=i[0].length,s=a,c.length>=o));)f.lastIndex===i.index&&f.lastIndex++;return s===r.length?!l&&f.test("")||c.push(""):c.push(r.slice(s)),c.length>o?c.slice(0,o):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=g(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,n):r.call(String(o),e,n)},function(t,o){var i=n(r,t,this,o,r!==e);if(i.done)return i.value;var a=j(t),l=String(this),c=function(t,e){var n,r=j(t).constructor;return void 0===r||null==(n=j(r)[Ln])?e:te(n)}(a,RegExp),u=a.unicode,s=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(Fn?"y":"g"),f=new c(Fn?a:"^(?:"+a.source+")",s),p=void 0===o?4294967295:o>>>0;if(0===p)return[];if(0===l.length)return null===En(f,l)?[l]:[];for(var d=0,h=0,g=[];h<l.length;){f.lastIndex=Fn?h:0;var v,y=En(f,Fn?l:l.slice(h));if(null===y||(v=Rn(st(f.lastIndex+(Fn?0:h)),l.length))===d)h=wn(l,h,u);else{if(g.push(l.slice(d,h)),g.length===p)return g;for(var b=1;b<=y.length-1;b++)if(g.push(y[b]),g.length===p)return g;h=d=v}}return g.push(l.slice(d)),g}]}),!Fn);var _n,Mn=We.trim;Dt({target:"String",proto:!0,forced:(_n="trim",i((function(){return!!Be[_n]()||"​᠎"!="​᠎"[_n]()||Be[_n].name!==_n})))},{trim:function(){return Mn(this)}});var Nn=re.forEach,Vn=Oe("forEach")?function(t){return Nn(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach;for(var $n in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var Bn=o[$n],Hn=Bn&&Bn.prototype;if(Hn&&Hn.forEach!==Vn)try{I(Hn,"forEach",Vn)}catch(t){Hn.forEach=Vn}}function Gn(t){return(Gn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Un(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Kn(t){return(Kn=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Wn(t,e){return(Wn=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function qn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function zn(t,e,n){return(zn="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Kn(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}var Yn=t.fn.bootstrapTable.utils,Xn={getOptionsFromSelectControl:function(t){return t.get(t.length-1).options},getControlContainer:function(){return Xn.bootstrapTableInstance.options.filterControlContainer?t("".concat(Xn.bootstrapTableInstance.options.filterControlContainer)):Xn.getCurrentHeader(Xn.bootstrapTableInstance)},getSearchControls:function(t){var e=Xn.getControlContainer(),n=Xn.getCurrentSearchControls(t);return e.find(n)},hideUnusedSelectOptions:function(t,e){for(var n=Xn.getOptionsFromSelectControl(t),r=0;r<n.length;r++)""!==n[r].value&&(e.hasOwnProperty(n[r].value)?t.find(Yn.sprintf("option[value='%s']",n[r].value)).show():t.find(Yn.sprintf("option[value='%s']",n[r].value)).hide())},addOptionToSelectControl:function(e,n,r,o){var i=t.trim(n),a=t(e.get(e.length-1));if(!Xn.existOptionInSelectControl(e,i)){var l=t('<option value="'.concat(i,'">').concat(r,"</option>"));i===o&&l.attr("selected",!0),a.append(l)}},sortSelectControl:function(e,n){var r=t(e.get(e.length-1)),o=r.find("option:gt(0)");o.sort((function(t,e){return Yn.sort(t.textContent,e.textContent,"desc"===n?-1:1)})),r.find("option:gt(0)").remove(),r.append(o)},existOptionInSelectControl:function(t,e){for(var n=Xn.getOptionsFromSelectControl(t),r=0;r<n.length;r++)if(n[r].value===e.toString())return!0;return!1},fixHeaderCSS:function(t){t.$tableHeader.css("height","77px")},getCurrentHeader:function(t){var e=t.$header,n=t.options,r=t.$tableHeader,o=e;return n.height&&(o=r),o},getCurrentSearchControls:function(t){var e="select, input";return t.options.height&&(e="table select, table input"),e},getCursorPosition:function(e){if(Yn.isIEBrowser()){if(t(e).is("input[type=text]")){var n=0;if("selectionStart"in e)n=e.selectionStart;else if("selection"in document){e.focus();var r=document.selection.createRange(),o=document.selection.createRange().text.length;r.moveStart("character",-e.value.length),n=r.text.length-o}return n}return-1}return-1},setCursorPosition:function(e){t(e).val(e.value)},copyValues:function(e){var n=Xn.getSearchControls(e);e.options.valuesFilterControl=[],n.each((function(){e.options.valuesFilterControl.push({field:t(this).closest("[data-field]").data("field"),value:t(this).val(),position:Xn.getCursorPosition(t(this).get(0)),hasFocus:t(this).is(":focus")})}))},setValues:function(e){var n=null,r=[],o=Xn.getSearchControls(e);if(e.options.valuesFilterControl.length>0){var i=null;o.each((function(o,a){var l,c;n=t(this).closest("[data-field]").data("field"),(r=e.options.valuesFilterControl.filter((function(t){return t.field===n}))).length>0&&(t(this).val(r[0].value),r[0].hasFocus&&""!==r[0].value&&(l=t(this).get(0),c=r[0].position,i=function(){l.focus(),Xn.setCursorPosition(l,c)}))})),null!==i&&i()}},collectBootstrapCookies:function(){var e=[],n=document.cookie.match(/(?:bs.table.)(\w*)/g),r=localStorage;if(n&&t.each(n,(function(n,r){var o=r;/./.test(o)&&(o=o.split(".").pop()),-1===t.inArray(o,e)&&e.push(o)})),r)for(var o=0;o<r.length;o++){var i=r.key(o);/./.test(i)&&(i=i.split(".").pop()),e.includes(i)||e.push(i)}return e},escapeID:function(t){return String(t).replace(/([:.\[\],])/g,"\\$1")},isColumnSearchableViaSelect:function(t){var e=t.filterControl,n=t.searchable;return e&&"select"===e.toLowerCase()&&n},isFilterDataNotGiven:function(t){var e=t.filterData;return void 0===e||"column"===e.toLowerCase()},hasSelectControlElement:function(t){return t&&t.length>0},initFilterSelectControls:function(e){var n=e.data,r=e.options.pagination?"server"===e.options.sidePagination?e.pageTo:e.options.totalRows:e.pageTo;t.each(e.header.fields,(function(t,o){var i=e.columns[e.fieldsColumnsIndex[o]],a=Xn.getControlContainer().find(".bootstrap-table-filter-control-".concat(Xn.escapeID(i.field)));if(Xn.isColumnSearchableViaSelect(i)&&Xn.isFilterDataNotGiven(i)&&Xn.hasSelectControlElement(a)){0===a.get(a.length-1).options.length&&Xn.addOptionToSelectControl(a,"",i.filterControlPlaceholder,i.filterDefault);for(var l={},c=0;c<r;c++){var u=n[c][o],s=e.options.editable&&i.editable?i._formatter:e.header.formatters[t],f=Yn.calculateObjectValue(e.header,s,[u,n[c],c],u);i.filterDataCollector&&(f=Yn.calculateObjectValue(e.header,i.filterDataCollector,[u,n[c],f],f)),l[f]=u,"object"!==Gn(f)||null===f?Xn.addOptionToSelectControl(a,f,f,i.filterDefault):f.forEach((function(t){Xn.addOptionToSelectControl(a,t,t,i.filterDefault)}))}Xn.sortSelectControl(a,i.filterOrderBy),e.options.hideUnusedSelectOptions&&Xn.hideUnusedSelectOptions(a,l)}})),e.trigger("created-controls")},getFilterDataMethod:function(t,e){for(var n=Object.keys(t),r=0;r<n.length;r++)if(n[r]===e)return t[e];return null},createControls:function(e,n){var r,o=!1;t.each(e.columns,(function(i,a){if(r=[],a.visible){if(a.filterControl||e.options.filterControlContainer)if(e.options.filterControlContainer){var l=t(".bootstrap-table-filter-control-".concat(a.field)),c=a.filterControlPlaceholder?a.filterControlPlaceholder:"";l.attr("placeholder",c),l.val(a.filterDefault),l.attr("data-field",a.field),o=!0}else{var u=a.filterControl.toLowerCase();r.push('<div class="filter-control">'),o=!0,a.searchable&&e.options.filterTemplate[u]&&r.push(e.options.filterTemplate[u](e,a.field,a.filterControlPlaceholder?a.filterControlPlaceholder:"",a.filterDefault))}else r.push('<div class="no-filter-control"></div>');if(a.filterControl||""===a.filterDefault||void 0===a.filterDefault||(t.isEmptyObject(e.filterColumnsPartial)&&(e.filterColumnsPartial={}),e.filterColumnsPartial[a.field]=a.filterDefault),t.each(n.children().children(),(function(e,n){var o=t(n);if(o.data("field")===a.field)return o.find(".fht-cell").append(r.join("")),!1})),void 0!==a.filterData&&"column"!==a.filterData.toLowerCase()){var s,f,p=Xn.getFilterDataMethod(Jn,a.filterData.substring(0,a.filterData.indexOf(":")));if(null===p)throw new SyntaxError('Error. You should use any of these allowed filter data methods: var, obj, json, url, func. Use like this: var: {key: "value"}');s=a.filterData.substring(a.filterData.indexOf(":")+1,a.filterData.length),f=Xn.getControlContainer().find(".bootstrap-table-filter-control-".concat(Xn.escapeID(a.field))),Xn.addOptionToSelectControl(f,"",a.filterControlPlaceholder,a.filterDefault),p(s,f,e.options.filterOrderBy,a.filterDefault)}}})),o?(Xn.getControlContainer().off("keyup","input").on("keyup","input",(function(n,r){var o=n.currentTarget,i=n.keyCode;if(i=r?r.keyCode:i,!(e.options.searchOnEnterKey&&13!==i||t.inArray(i,[37,38,39,40])>-1)){var a=t(o);a.is(":checkbox")||a.is(":radio")||(clearTimeout(o.timeoutId||0),o.timeoutId=setTimeout((function(){e.onColumnSearch({currentTarget:o,keyCode:i})}),e.options.searchTimeOut))}})),Xn.getControlContainer().off("change","select").on("change","select",(function(n){var r=n.currentTarget,o=n.keyCode;if(!(e.options.searchOnEnterKey&&13!==o||t.inArray(o,[37,38,39,40])>-1)){var i=t(r),a=i.val();t.trim(a)?(i.find("option[selected]").removeAttr("selected"),i.find('option[value="'+a+'"]').attr("selected",!0)):i.find("option[selected]").removeAttr("selected"),clearTimeout(r.timeoutId||0),r.timeoutId=setTimeout((function(){e.onColumnSearch({currentTarget:r,keyCode:o})}),e.options.searchTimeOut)}})),n.off("mouseup","input").on("mouseup","input",(function(n){var r=n.currentTarget,o=n.keyCode,i=t(r);""!==i.val()&&setTimeout((function(){""===i.val()&&(clearTimeout(r.timeoutId||0),r.timeoutId=setTimeout((function(){e.onColumnSearch({currentTarget:r,keyCode:o})}),e.options.searchTimeOut))}),1)})),Xn.getControlContainer().find(".date-filter-control").length>0&&t.each(e.columns,(function(t,n){var r=n.filterControl,o=n.field,i=n.filterDatepickerOptions;void 0!==r&&"datepicker"===r.toLowerCase()&&Xn.getControlContainer().find(".date-filter-control.bootstrap-table-filter-control-".concat(o)).datepicker(i).on("changeDate",(function(t){var n=t.currentTarget,r=t.keyCode;clearTimeout(n.timeoutId||0),n.timeoutId=setTimeout((function(){e.onColumnSearch({currentTarget:n,keyCode:r})}),e.options.searchTimeOut)}))})),"server"!==e.options.sidePagination&&e.triggerSearch()):Xn.getControlContainer().find(".filterControl").hide()},getDirectionOfSelectOptions:function(t){switch(void 0===t?"left":t.toLowerCase()){case"left":return"ltr";case"right":return"rtl";case"auto":return"auto";default:return"ltr"}}},Jn={func:function(t,e,n,r){var o=window[t].apply();for(var i in o)Xn.addOptionToSelectControl(e,i,o[i],r);Xn.sortSelectControl(e,n)},obj:function(t,e,n,r){var o=t.split("."),i=o.shift(),a=window[i];for(var l in o.length>0&&o.forEach((function(t){a=a[t]})),a)Xn.addOptionToSelectControl(e,l,a[l],r);Xn.sortSelectControl(e,n)},var:function(t,e,n,r){var o=window[t];for(var i in o)Xn.addOptionToSelectControl(e,i,o[i],r);Xn.sortSelectControl(e,n)},url:function(e,n,r,o){t.ajax({url:e,dataType:"json",success:function(t){for(var e in t)Xn.addOptionToSelectControl(n,e,t[e],o);Xn.sortSelectControl(n,r)}})},json:function(t,e,n,r){var o=JSON.parse(t);for(var i in o)Xn.addOptionToSelectControl(e,i,o[i],r);Xn.sortSelectControl(e,n)}};t.extend(t.fn.bootstrapTable.defaults,{filterControl:!1,onColumnSearch:function(t,e){return!1},onCreatedControls:function(){return!0},alignmentSelectControlOptions:void 0,filterTemplate:{input:function(t,e,n,r){return Yn.sprintf('<input type="text" class="form-control bootstrap-table-filter-control-%s search-input" style="width: 100%;" placeholder="%s" value="%s">',e,void 0===n?"":n,void 0===r?"":r)},select:function(t,e){var n=t.options;return Yn.sprintf('<select class="form-control bootstrap-table-filter-control-%s" style="width: 100%;" dir="%s"></select>',e,Xn.getDirectionOfSelectOptions(n.alignmentSelectControlOptions))},datepicker:function(t,e,n){return Yn.sprintf('<input type="text" class="form-control date-filter-control bootstrap-table-filter-control-%s" style="width: 100%;" value="%s">',e,void 0===n?"":n)}},disableControlWhenSearch:!1,searchOnEnterKey:!1,valuesFilterControl:[]}),t.extend(t.fn.bootstrapTable.columnDefaults,{filterControl:void 0,filterDataCollector:void 0,filterData:void 0,filterDatepickerOptions:void 0,filterStrictSearch:!1,filterStartsWithSearch:!1,filterControlPlaceholder:"",filterDefault:"",filterOrderBy:"asc"}),t.extend(t.fn.bootstrapTable.Constructor.EVENTS,{"column-search.bs.table":"onColumnSearch","created-controls.bs.table":"onCreatedControls"}),t.extend(t.fn.bootstrapTable.defaults.icons,{clear:{bootstrap3:"glyphicon-trash icon-clear"}[t.fn.bootstrapTable.theme]||"fa-trash"}),t.extend(t.fn.bootstrapTable.defaults,t.fn.bootstrapTable.locales),t.extend(t.fn.bootstrapTable.defaults,{formatClearSearch:function(){return"Clear filters"}}),t.fn.bootstrapTable.methods.push("triggerSearch"),t.fn.bootstrapTable.methods.push("clearFilterControl"),t.BootstrapTable=function(e){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),qn(this,Kn(n).apply(this,arguments))}var r,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Wn(t,e)}(n,e),r=n,(o=[{key:"init",value:function(){var t=this;if(Xn.bootstrapTableInstance=this,this.options.filterControl){var e=this;this.options.valuesFilterControl=[],this.$el.on("reset-view.bs.table",(function(){e.options.height&&(Xn.getControlContainer().find("select").length>0||Xn.getControlContainer().find("input").length>0||Xn.createControls(e,Xn.getControlContainer()))})).on("post-header.bs.table",(function(){Xn.setValues(e)})).on("post-body.bs.table",(function(){e.options.height&&!e.options.filterControlContainer&&Xn.fixHeaderCSS(e),t.$tableLoading.css("top",t.$header.outerHeight()+1)})).on("column-switch.bs.table",(function(){Xn.setValues(e)})).on("load-success.bs.table",(function(){e.enableControls(!0)})).on("load-error.bs.table",(function(){e.enableControls(!0)}))}zn(Kn(n.prototype),"init",this).call(this)}},{key:"initHeader",value:function(){zn(Kn(n.prototype),"initHeader",this).call(this),this.options.filterControl&&Xn.createControls(this,Xn.getControlContainer())}},{key:"initBody",value:function(){zn(Kn(n.prototype),"initBody",this).call(this),Xn.initFilterSelectControls(this)}},{key:"initSearch",value:function(){var e=this,r=t.isEmptyObject(e.filterColumnsPartial)?null:e.filterColumnsPartial;(null===r||Object.keys(r).length<=1)&&zn(Kn(n.prototype),"initSearch",this).call(this),"server"!==this.options.sidePagination&&null!==r&&(e.data=r?e.options.data.filter((function(n,o){var i=[],a=Object.keys(n),l=Object.keys(r);return a.concat(l.filter((function(t){return!a.includes(t)}))).forEach((function(a){var l,c=e.columns[e.fieldsColumnsIndex[a]],u=(r[a]||"").toLowerCase(),s=Yn.getItemField(n,a,!1);if(""===u)l=!0;else if(c&&c.searchFormatter&&(s=t.fn.bootstrapTable.utils.calculateObjectValue(e.header,e.header.formatters[t.inArray(a,e.header.fields)],[s,n,o],s)),-1!==t.inArray(a,e.header.fields))if(null==s)l=!1;else if("string"==typeof s||"number"==typeof s||"boolean"==typeof s){l=c.filterStrictSearch?s.toString().toLowerCase()===u.toString().toLowerCase():c.filterStartsWithSearch?0==="".concat(s).toLowerCase().indexOf(u):"".concat(s).toLowerCase().includes(u);var f=/(?:(<=|=>|=<|>=|>|<)(?:\s+)?(\d+)?|(\d+)?(\s+)?(<=|=>|=<|>=|>|<))/gm.exec(u);if(f){var p=f[1]||"".concat(f[5],"l"),d=f[2]||f[3],h=parseInt(s,10),g=parseInt(d,10);switch(p){case">":case"<l":l=h>g;break;case"<":case">l":l=h<g;break;case"<=":case"=<":case">=l":case"=>l":l=h<=g;break;case">=":case"=>":case"<=l":case"=<l":l=h>=g}}if(c.filterCustomSearch){var v=Yn.calculateObjectValue(e,c.filterCustomSearch,[u,s,a,e.options.data],!0);null!==v&&(l=v)}}i.push(l)})),!i.includes(!1)})):e.data)}},{key:"initColumnSearch",value:function(t){if(Xn.copyValues(this),t)for(var e in this.filterColumnsPartial=t,this.updatePagination(),t)this.trigger("column-search",e,t[e])}},{key:"onColumnSearch",value:function(e){var n=e.currentTarget,r=e.keyCode;if(!(t.inArray(r,[37,38,39,40])>-1)){Xn.copyValues(this);var o=t.trim(t(n).val()),i=t(n).closest("[data-field]").data("field");t.isEmptyObject(this.filterColumnsPartial)&&(this.filterColumnsPartial={}),o?this.filterColumnsPartial[i]=o:delete this.filterColumnsPartial[i],this.options.pageNumber=1,this.enableControls(!1),this.onSearch({currentTarget:n},!1),this.trigger("column-search",i,o)}}},{key:"initToolbar",value:function(){this.showSearchClearButton=this.options.filterControl&&this.options.showSearchClearButton,zn(Kn(n.prototype),"initToolbar",this).call(this)}},{key:"resetSearch",value:function(t){this.options.filterControl&&this.options.showSearchClearButton&&this.clearFilterControl(),zn(Kn(n.prototype),"resetSearch",this).call(this,t)}},{key:"clearFilterControl",value:function(){if(this.options.filterControl){var e=this,n=Xn.collectBootstrapCookies(),r=Xn.getCurrentHeader(e),o=r.closest("table"),i=r.find(Xn.getCurrentSearchControls(e)),a=e.$toolbar.find(".search input"),l=!1,c=0;if(t.each(e.options.valuesFilterControl,(function(t,e){l=!!l||""!==e.value,e.value=""})),t.each(e.options.filterControls,(function(t,e){e.text=""})),Xn.setValues(e),clearTimeout(c),c=setTimeout((function(){n&&n.length>0&&t.each(n,(function(t,n){void 0!==e.deleteCookie&&e.deleteCookie(n)}))}),e.options.searchTimeOut),!l)return;if(!(i.length>0))return;if(this.filterColumnsPartial={},t(i[0]).trigger("INPUT"===i[0].tagName?"keyup":"change",{keyCode:13}),a.length>0&&e.resetSearch(),e.options.sortName!==o.data("sortName")||e.options.sortOrder!==o.data("sortOrder")){var u=r.find(Yn.sprintf('[data-field="%s"]',t(i[0]).closest("table").data("sortName")));u.length>0&&(e.onSort({type:"keypress",currentTarget:u}),t(u).find(".sortable").trigger("click"))}}}},{key:"triggerSearch",value:function(){Xn.getSearchControls(this).each((function(){var e=t(this);e.is("select")?e.change():e.keyup()}))}},{key:"enableControls",value:function(t){if(this.options.disableControlWhenSearch&&"server"===this.options.sidePagination){var e=Xn.getSearchControls(this);t?e.removeProp("disabled"):e.prop("disabled","disabled")}}}])&&Un(r.prototype,o),i&&Un(r,i),n}(t.BootstrapTable)}));
