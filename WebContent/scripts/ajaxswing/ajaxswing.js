/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document){throw new Error("jQuery requires a window with a document")
}return b(a)
}:b(a)
}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)
},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()
};
n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)
},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)
},pushStack:function(a){var b=n.merge(this.constructor(),a);
return b.prevObject=this,b.context=this.context,b
},each:function(a){return n.each(this,a)
},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)
}))
},slice:function(){return this.pushStack(e.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(a){var b=this.length,c=+a+(0>a?b:0);
return this.pushStack(c>=0&&b>c?[this[c]]:[])
},end:function(){return this.prevObject||this.constructor()
},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;
for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);
i>h;
h++){if(null!=(e=arguments[h])){for(d in e){a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c))
}}}return g
},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)
},noop:function(){},isFunction:function(a){return"function"===n.type(a)
},isArray:Array.isArray||function(a){return"array"===n.type(a)
},isWindow:function(a){return null!=a&&a==a.window
},isNumeric:function(a){var b=a&&a.toString();
return !n.isArray(a)&&b-parseFloat(b)+1>=0
},isEmptyObject:function(a){var b;
for(b in a){return !1
}return !0
},isPlainObject:function(a){var b;
if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a)){return !1
}try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf")){return !1
}}catch(c){return !1
}if(!l.ownFirst){for(b in a){return k.call(a,b)
}}for(b in a){}return void 0===b||k.call(a,b)
},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a
},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)
})(b)
},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)
},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()
},each:function(a,b){var c,d=0;
if(s(a)){for(c=a.length;
c>d;
d++){if(b.call(a[d],d,a[d])===!1){break
}}}else{for(d in a){if(b.call(a[d],d,a[d])===!1){break
}}}return a
},trim:function(a){return null==a?"":(a+"").replace(o,"")
},makeArray:function(a,b){var c=b||[];
return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c
},inArray:function(a,b,c){var d;
if(b){if(h){return h.call(b,a,c)
}for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;
d>c;
c++){if(c in b&&b[c]===a){return c
}}}return -1
},merge:function(a,b){var c=+b.length,d=0,e=a.length;
while(c>d){a[e++]=b[d++]
}if(c!==c){while(void 0!==b[d]){a[e++]=b[d++]
}}return a.length=e,a
},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;
g>f;
f++){d=!b(a[f],f),d!==h&&e.push(a[f])
}return e
},map:function(a,b,c){var d,e,g=0,h=[];
if(s(a)){for(d=a.length;
d>g;
g++){e=b(a[g],g,c),null!=e&&h.push(e)
}}else{for(g in a){e=b(a[g],g,c),null!=e&&h.push(e)
}}return f.apply([],h)
},guid:1,proxy:function(a,b){var c,d,f;
return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))
},d.guid=a.guid=a.guid||n.guid++,d):void 0
},now:function(){return +new Date
},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()
});
function s(a){var b=!!a&&"length" in a&&a.length,c=n.type(a);
return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a
}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0
},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;
d>c;
c++){if(a[c]===b){return c
}}return -1
},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;
return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)
},da=function(){m()
};
try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType
}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))
}:function(a,b){var c=a.length,d=0;
while(a[c++]=b[d++]){}a.length=c-1
}}
}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;
if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x){return d
}if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a))){if(f=o[1]){if(9===x){if(!(j=b.getElementById(f))){return d
}if(j.id===f){return d.push(j),d
}}else{if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f){return d.push(j),d
}}}else{if(o[2]){return H.apply(d,b.getElementsByTagName(a)),d
}if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName){return H.apply(d,b.getElementsByClassName(f)),d
}}}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x){w=b,s=a
}else{if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";
while(h--){r[h]=l+" "+qa(r[h])
}s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b
}}if(s){try{return H.apply(d,w.querySelectorAll(s)),d
}catch(y){}finally{k===u&&b.removeAttribute("id")
}}}}return i(a.replace(Q,"$1"),b,d,e)
}function ga(){var a=[];
function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e
}return b
}function ha(a){return a[u]=!0,a
}function ia(a){var b=n.createElement("div");
try{return !!a(b)
}catch(c){return !1
}finally{b.parentNode&&b.parentNode.removeChild(b),b=null
}}function ja(a,b){var c=a.split("|"),e=c.length;
while(e--){d.attrHandle[c[e]]=b
}}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);
if(d){return d
}if(c){while(c=c.nextSibling){if(c===b){return -1
}}}return a?1:-1
}function la(a){return function(b){var c=b.nodeName.toLowerCase();
return"input"===c&&b.type===a
}
}function ma(a){return function(b){var c=b.nodeName.toLowerCase();
return("input"===c||"button"===c)&&b.type===a
}
}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;
while(g--){c[e=f[g]]&&(c[e]=!(d[e]=c[e]))
}})
})
}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a
}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;
return b?"HTML"!==b.nodeName:!1
},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;
return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")
}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length
}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length
}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);
return c?[c]:[]
}},d.filter.ID=function(a){var b=a.replace(ba,ca);
return function(a){return a.getAttribute("id")===b
}
}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);
return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");
return c&&c.value===b
}
}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0
}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);
if("*"===a){while(c=f[e++]){1===c.nodeType&&d.push(c)
}return d
}return f
},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0
},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")
}),ia(function(a){var b=n.createElement("input");
b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")
})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)
}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;
return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))
}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return !0
}}}return !1
},B=b?function(a,b){if(a===b){return l=!0,0
}var d=!a.compareDocumentPosition-!b.compareDocumentPosition;
return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)
}:function(a,b){if(a===b){return l=!0,0
}var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];
if(!e||!f){return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0
}if(e===f){return ka(a,b)
}c=a;
while(c=c.parentNode){g.unshift(c)
}c=b;
while(c=c.parentNode){h.unshift(c)
}while(g[d]===h[d]){d++
}return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0
},n):n
},fa.matches=function(a,b){return fa(a,null,null,b)
},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b))){try{var d=s.call(a,b);
if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType){return d
}}catch(e){}}return fa(b,n,null,[a]).length>0
},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)
},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);
var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;
return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null
},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)
},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;
if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++]){b===a[f]&&(e=d.push(f))
}while(e--){a.splice(d[e],1)
}}return k=null,a
},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;
if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent){return a.textContent
}for(a=a.firstChild;
a;
a=a.nextSibling){c+=e(a)
}}else{if(3===f||4===f){return a.nodeValue
}}}else{while(b=a[d++]){c+=e(b)
}}return c
},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)
},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a
},PSEUDO:function(a){var b,c=!a[6]&&a[2];
return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))
}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();
return"*"===a?function(){return !0
}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b
}
},CLASS:function(a){var b=y[a+" "];
return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")
})
},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);
return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0
}
},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;
return 1===d&&0===e?function(a){return !!a.parentNode
}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;
if(q){if(f){while(p){m=b;
while(m=m[p]){if(h?m.nodeName.toLowerCase()===r:1===m.nodeType){return !1
}}o=p="only"===a&&!o&&"nextSibling"
}return !0
}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];
while(m=++n&&m&&m[p]||(t=n=0)||o.pop()){if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];
break
}}}else{if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1){while(m=++n&&m&&m[p]||(t=n=0)||o.pop()){if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b)){break
}}}}return t-=e,t===d||t%d===0&&t/d>=0
}}
},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);
return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;
while(g--){d=J(a,f[g]),a[d]=!(c[d]=f[g])
}}):function(a){return e(a,0,c)
}):e
}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));
return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;
while(h--){(f=g[h])&&(a[h]=!(b[h]=f))
}}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()
}
}),has:ha(function(a){return function(b){return fa(a,b).length>0
}
}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1
}
}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;
do{if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang")){return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-")
}}while((b=b.parentNode)&&1===b.nodeType);
return !1
}
}),target:function(b){var c=a.location&&a.location.hash;
return c&&c.slice(1)===b.id
},root:function(a){return a===o
},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)
},enabled:function(a){return a.disabled===!1
},disabled:function(a){return a.disabled===!0
},checked:function(a){var b=a.nodeName.toLowerCase();
return"input"===b&&!!a.checked||"option"===b&&!!a.selected
},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0
},empty:function(a){for(a=a.firstChild;
a;
a=a.nextSibling){if(a.nodeType<6){return !1
}}return !0
},parent:function(a){return !d.pseudos.empty(a)
},header:function(a){return Y.test(a.nodeName)
},input:function(a){return X.test(a.nodeName)
},button:function(a){var b=a.nodeName.toLowerCase();
return"input"===b&&"button"===a.type||"button"===b
},text:function(a){var b;
return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())
},first:na(function(){return[0]
}),last:na(function(a,b){return[b-1]
}),eq:na(function(a,b,c){return[0>c?c+b:c]
}),even:na(function(a,b){for(var c=0;
b>c;
c+=2){a.push(c)
}return a
}),odd:na(function(a,b){for(var c=1;
b>c;
c+=2){a.push(c)
}return a
}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;
--d>=0;
){a.push(d)
}return a
}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;
++d<b;
){a.push(d)
}return a
})}},d.pseudos.nth=d.pseudos.eq;
for(b in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){d.pseudos[b]=la(b)
}for(b in {submit:!0,reset:!0}){d.pseudos[b]=ma(b)
}function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];
if(k){return b?0:k.slice(0)
}h=a,i=[],j=d.preFilter;
while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));
for(g in d.filter){!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length))
}if(!c){break
}}return b?h.length:h?fa.error(a):z(a,i).slice(0)
};
function qa(a){for(var b=0,c=a.length,d="";
c>b;
b++){d+=a[b].value
}return d
}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;
return b.first?function(b,c,f){while(b=b[d]){if(1===b.nodeType||e){return a(b,c,f)
}}}:function(b,c,g){var h,i,j,k=[w,f];
if(g){while(b=b[d]){if((1===b.nodeType||e)&&a(b,c,g)){return !0
}}}else{while(b=b[d]){if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f){return k[2]=h[2]
}if(i[d]=k,k[2]=a(b,c,g)){return !0
}}}}}
}function sa(a){return a.length>1?function(b,c,d){var e=a.length;
while(e--){if(!a[e](b,c,d)){return !1
}}return !0
}:a[0]
}function ta(a,b,c){for(var d=0,e=b.length;
e>d;
d++){fa(a,b[d],c)
}return c
}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;
i>h;
h++){(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)))
}return g
}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;
if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;
while(k--){(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))
}}if(f){if(e||a){if(e){j=[],k=r.length;
while(k--){(l=r[k])&&j.push(q[k]=l)
}e(null,r=[],j,i)
}k=r.length;
while(k--){(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))
}}}else{r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)
}})
}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b
},h,!0),l=ra(function(a){return J(b,a)>-1
},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));
return b=null,e
}];
f>i;
i++){if(c=d.relative[a[i].type]){m=[ra(sa(m),c)]
}else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;
f>e;
e++){if(d.relative[a[e].type]){break
}}return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))
}m.push(c)
}}return sa(m)
}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||0.1,z=x.length;
for(k&&(j=g===n||g||k);
s!==z&&null!=(l=x[s]);
s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);
while(q=a[o++]){if(q(l,g||n,h)){i.push(l);
break
}}k&&(w=y)
}c&&((l=!q&&l)&&r--,f&&t.push(l))
}if(r+=s,c&&s!==r){o=0;
while(q=b[o++]){q(t,u,g,h)
}if(f){if(r>0){while(s--){t[s]||u[s]||(u[s]=F.call(i))
}}u=ua(u)
}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)
}return k&&(w=y,j=v),t
};
return c?ha(f):f
}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];
if(!f){b||(b=g(a)),c=b.length;
while(c--){f=wa(b[c]),f[u]?d.push(f):e.push(f)
}f=A(a,xa(e,d)),f.selector=a
}return f
},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);
if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b){return e
}n&&(b=b.parentNode),a=a.slice(j.shift().value.length)
}i=W.needsContext.test(a)?0:j.length;
while(i--){if(k=j[i],d.relative[l=k.type]){break
}if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a){return H.apply(e,f),e
}break
}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e
},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))
}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")
})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)
}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")
})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue
}),ia(function(a){return null==a.getAttribute("disabled")
})||ja(K,function(a,b,c){var d;
return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null
}),fa
}(a);
n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;
var u=function(a,b,c){var d=[],e=void 0!==c;
while((a=a[b])&&9!==a.nodeType){if(1===a.nodeType){if(e&&n(a).is(c)){break
}d.push(a)
}}return d
},v=function(a,b){for(var c=[];
a;
a=a.nextSibling){1===a.nodeType&&a!==b&&c.push(a)
}return c
},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;
function z(a,b,c){if(n.isFunction(b)){return n.grep(a,function(a,d){return !!b.call(a,d,a)!==c
})
}if(b.nodeType){return n.grep(a,function(a){return a===b!==c
})
}if("string"==typeof b){if(y.test(b)){return n.filter(b,a,c)
}b=n.filter(b,a)
}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c
})
}n.filter=function(a,b,c){var d=b[0];
return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType
}))
},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;
if("string"!=typeof a){return this.pushStack(n(a).filter(function(){for(b=0;
e>b;
b++){if(n.contains(d[b],this)){return !0
}}}))
}for(b=0;
e>b;
b++){n.find(a,d[b],c)
}return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c
},filter:function(a){return this.pushStack(z(this,a||[],!1))
},not:function(a){return this.pushStack(z(this,a||[],!0))
},is:function(a){return !!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length
}});
var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;
if(!a){return this
}if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b){return !b||b.jquery?(b||c).find(a):this.constructor(b).find(a)
}if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b)){for(e in b){n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e])
}}return this
}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2]){return A.find(a)
}this.length=1,this[0]=f
}return this.context=d,this.selector=a,this
}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))
};
C.prototype=n.fn,A=n(d);
var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};
n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;
return this.filter(function(){for(b=0;
d>b;
b++){if(n.contains(this,c[b])){return !0
}}})
},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;
e>d;
d++){for(c=this[d];
c&&c!==b;
c=c.parentNode){if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);
break
}}}return this.pushStack(f.length>1?n.uniqueSort(f):f)
},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))
},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))
}});
function F(a,b){do{a=a[b]
}while(a&&1!==a.nodeType);
return a
}n.each({parent:function(a){var b=a.parentNode;
return b&&11!==b.nodeType?b:null
},parents:function(a){return u(a,"parentNode")
},parentsUntil:function(a,b,c){return u(a,"parentNode",c)
},next:function(a){return F(a,"nextSibling")
},prev:function(a){return F(a,"previousSibling")
},nextAll:function(a){return u(a,"nextSibling")
},prevAll:function(a){return u(a,"previousSibling")
},nextUntil:function(a,b,c){return u(a,"nextSibling",c)
},prevUntil:function(a,b,c){return u(a,"previousSibling",c)
},siblings:function(a){return v((a.parentNode||{}).firstChild,a)
},children:function(a){return v(a.firstChild)
},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)
}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);
return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)
}
});
var G=/\S+/g;
function H(a){var b={};
return n.each(a.match(G)||[],function(a,c){b[c]=!0
}),b
}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);
var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;
g.length;
h=-1){c=g.shift();
while(++h<f.length){f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)
}}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")
},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)
})
}(arguments),c&&!b&&i()),this
},remove:function(){return n.each(arguments,function(a,b){var c;
while((c=n.inArray(b,f,c))>-1){f.splice(c,1),h>=c&&h--
}}),this
},has:function(a){return a?n.inArray(a,f)>-1:f.length>0
},empty:function(){return f&&(f=[]),this
},disable:function(){return e=g=[],f=c="",this
},disabled:function(){return !f
},lock:function(){return e=!0,c||j.disable(),this
},locked:function(){return !!e
},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this
},fire:function(){return j.fireWith(this,arguments),this
},fired:function(){return !!d
}};
return j
},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c
},always:function(){return e.done(arguments).fail(arguments),this
},then:function(){var a=arguments;
return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];
e[f[1]](function(){var a=g&&g.apply(this,arguments);
a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)
})
}),a=null
}).promise()
},promise:function(a){return null!=a?n.extend(a,d):d
}},e={};
return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];
d[f[1]]=g.add,h&&g.add(function(){c=h
},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this
},e[f[0]+"With"]=g.fireWith
}),d.promise(e),a&&a.call(e,e),e
},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)
}
},i,j,k;
if(d>1){for(i=new Array(d),j=new Array(d),k=new Array(d);
d>b;
b++){c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f
}}return f||g.resolveWith(k,c),g.promise()
}});
var I;
n.fn.ready=function(a){return n.ready.promise().done(a),this
},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)
},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))
}});
function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))
}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())
}n.ready.promise=function(b){if(!I){if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll){a.setTimeout(n.ready)
}else{if(d.addEventListener){d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K)
}else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);
var c=!1;
try{c=null==a.frameElement&&d.documentElement
}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")
}catch(b){return a.setTimeout(f,50)
}J(),n.ready()
}}()
}}}return I.promise(b)
},n.ready.promise();
var L;
for(L in n(l)){break
}l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;
c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))
}),function(){var a=d.createElement("div");
l.deleteExpando=!0;
try{delete a.test
}catch(b){l.deleteExpando=!1
}a=null
}();
var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;
return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b
},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;
function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();
if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c
}catch(e){}n.data(a,b,c)
}else{c=void 0
}}return c
}function Q(a){var b;
for(b in a){if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b){return !1
}}return !0
}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b){return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;
if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;
while(e--){delete d[b[e]]
}if(c?!Q(d):!n.isEmptyObject(d)){return
}}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)
}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)
},data:function(a,b,c){return R(a,b,c)
},removeData:function(a,b){return S(a,b)
},_data:function(a,b,c){return R(a,b,c,!0)
},_removeData:function(a,b){return S(a,b,!0)
}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;
if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;
while(c--){g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])))
}n._data(f,"parsedAttrs",!0)
}return e
}return"object"==typeof a?this.each(function(){n.data(this,a)
}):arguments.length>1?this.each(function(){n.data(this,a,b)
}):f?P(f,a,n.data(f,a)):void 0
},removeData:function(a){return this.each(function(){n.removeData(this,a)
})
}}),n.extend({queue:function(a,b,c){var d;
return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0
},dequeue:function(a,b){b=b||"fx";
var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)
};
"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()
},_queueHooks:function(a,b){var c=b+"queueHooks";
return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)
})})
}}),n.fn.extend({queue:function(a,b){var c=2;
return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);
n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)
})
},dequeue:function(a){return this.each(function(){n.dequeue(this,a)
})
},clearQueue:function(a){return this.queue(a||"fx",[])
},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])
};
"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";
while(g--){c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h))
}return h(),e.promise(b)
}}),function(){var a;
l.shrinkWrapBlocks=function(){if(null!=a){return a
}a=!1;
var b,c,e;
return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0
}
}();
var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)
};
function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()
}:function(){return n.css(a,b,"")
},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));
if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;
do{f=f||".5",k/=f,n.style(a,b,k+j)
}while(f!==(f=h()/i)&&1!==f&&--g)
}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e
}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;
if("object"===n.type(c)){e=!0;
for(h in c){Y(a,b,h,c[h],!0,f,g)
}}else{if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)
})),b)){for(;
i>h;
h++){b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)))
}}}return e?a:j?b.call(a):i?b(a[0],c):f
},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();
if(c.createElement){while(b.length){c.createElement(b.pop())
}}return c
}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");
a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)
}();
var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};
da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;
function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;
if(!f){for(f=[],c=a.childNodes||a;
null!=(d=c[e]);
e++){!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b))
}}return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f
}function fa(a,b){for(var c,d=0;
null!=(c=a[d]);
d++){n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))
}}var ga=/<|&#?\w+;/,ha=/<tbody/i;
function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)
}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;
o>r;
r++){if(g=a[r],g||0===g){if("object"===n.type(g)){n.merge(q,g.nodeType?[g]:g)
}else{if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];
while(f--){i=i.lastChild
}if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;
while(f--){n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)
}}n.merge(q,i.childNodes),i.textContent="";
while(i.firstChild){i.removeChild(i.firstChild)
}i=p.lastChild
}else{q.push(b.createTextNode(g))
}}}}i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;
while(g=q[r++]){if(d&&n.inArray(g,d)>-1){e&&e.push(g)
}else{if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;
while(g=i[f++]){_.test(g.type||"")&&c.push(g)
}}}}return i=null,p
}!function(){var b,c,e=d.createElement("div");
for(b in {submit:!0,change:!0,focusin:!0}){c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1)
}e=null
}();
var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;
function pa(){return !0
}function qa(){return !1
}function ra(){try{return d.activeElement
}catch(a){}}function sa(a,b,c,d,e,f){var g,h;
if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);
for(h in b){sa(a,h,c,d,b[h],f)
}return a
}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1){e=qa
}else{if(!e){return a
}}return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)
},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)
})
}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);
if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)
},k.elem=a),b=(b||"").match(G)||[""],h=b.length;
while(h--){f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0)
}a=null
}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);
if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;
while(j--){if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;
while(f--){g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g))
}i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])
}else{for(o in k){n.event.remove(a,o+b[j],c,d,!0)
}}}n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))
}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];
if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);
i;
i=i.parentNode){p.push(i),m=i
}m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)
}o=0;
while((i=p[o++])&&!b.isPropagationStopped()){b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault())
}if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;
try{e[q]()
}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)
}return b.result
}},dispatch:function(a){a=n.event.fix(a);
var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};
if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;
while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;
while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped()){a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))
}}return k.postDispatch&&k.postDispatch.call(this,a),a.result
}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;
if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1)){for(;
i!=this;
i=i.parentNode||this){if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;
h>c;
c++){f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f)
}d.length&&g.push({elem:i,handlers:d})
}}}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g
},fix:function(a){if(a[n.expando]){return a
}var b,c,e,f=a.type,g=a,h=this.fixHooks[f];
h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;
while(b--){c=e[b],a[c]=g[c]
}return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a
},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;
return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a
}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus){try{return this.focus(),!1
}catch(a){}}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0
},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0
},_default:function(a){return n.nodeName(a.target,"a")
}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)
}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});
n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()
}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)
}:function(a,b,c){var d="on"+b;
a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))
},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void (this[n.expando]=!0)):new n.Event(a,b)
},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;
this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)
},stopPropagation:function(){var a=this.originalEvent;
this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)
},stopImmediatePropagation:function(){var a=this.originalEvent;
this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()
}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;
return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c
}}
}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;
c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0
}),n._data(c,"submit",!0))
})
},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))
},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")
}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)
}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)
})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;
ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)
}),n._data(b,"change",!0))
})
},handle:function(a){var b=a.target;
return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0
},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)
}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))
};
n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);
e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)
},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;
e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))
}}
}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)
},one:function(a,b,c,d){return sa(this,a,b,c,d,1)
},off:function(a,b,c){var d,e;
if(a&&a.preventDefault&&a.handleObj){return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this
}if("object"==typeof a){for(e in a){this.off(e,b,a[e])
}return this
}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)
})
},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)
})
},triggerHandler:function(a,b){var c=this[0];
return c?n.event.trigger(a,b,c,!0):void 0
}});
var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));
function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a
}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a
}function Ea(a){var b=ya.exec(a.type);
return b?a.type=b[1]:a.removeAttribute("type"),a
}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;
if(h){delete g.handle,g.events={};
for(c in h){for(d=0,e=h[c].length;
e>d;
d++){n.event.add(b,c,h[c][d])
}}}g.data&&(g.data=n.extend({},g.data))
}}function Ga(a,b){var c,d,e;
if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);
for(d in e.events){n.removeEvent(b,d,e.handle)
}b.removeAttribute(n.expando)
}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)
}}function Ha(a,b,c,d){b=f.apply([],b);
var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);
if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q)){return a.each(function(e){var f=a.eq(e);
r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)
})
}if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;
o>m;
m++){g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m)
}if(h){for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;
h>m;
m++){g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")))
}}k=e=null
}return a
}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;
null!=(d=e[f]);
f++){c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d))
}return a
}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")
},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);
if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a))){for(d=ea(f),h=ea(a),g=0;
null!=(e=h[g]);
++g){d[g]&&Ga(e,d[g])
}}if(b){if(c){for(h=h||ea(a),d=d||ea(f),g=0;
null!=(e=h[g]);
g++){Fa(e,d[g])
}}else{Fa(a,f)
}}return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f
},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;
null!=(d=a[h]);
h++){if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events){for(e in g.events){m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle)
}}j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))
}}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)
},remove:function(a){return Ia(this,a)
},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))
},null,a,arguments.length)
},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);
b.appendChild(a)
}})
},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);
b.insertBefore(a,b.firstChild)
}})
},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)
})
},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)
})
},empty:function(){for(var a,b=0;
null!=(a=this[b]);
b++){1===a.nodeType&&n.cleanData(ea(a,!1));
while(a.firstChild){a.removeChild(a.firstChild)
}a.options&&n.nodeName(a,"select")&&(a.options.length=0)
}return this
},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)
})
},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;
if(void 0===a){return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0
}if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);
try{for(;
d>c;
c++){b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a)
}b=0
}catch(e){}}b&&this.empty().append(a)
},null,a,arguments.length)
},replaceWith:function(){var a=[];
return Ha(this,arguments,function(b){var c=this.parentNode;
n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))
},a)
}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;
h>=d;
d++){c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get())
}return this.pushStack(e)
}
});
var Ja,Ka={HTML:"block",BODY:"block"};
function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");
return c.detach(),d
}function Ma(a){var b=d,c=Ka[a];
return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c
}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};
for(f in b){g[f]=a.style[f],a.style[f]=b[f]
}e=c.apply(a,d||[]);
for(f in b){a.style[f]=g[f]
}return e
},Qa=d.documentElement;
!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");
if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f
},boxSizingReliable:function(){return null==b&&k(),e
},pixelMarginRight:function(){return null==b&&k(),c
},pixelPosition:function(){return null==b&&k(),b
},reliableMarginRight:function(){return null==b&&k(),g
},reliableMarginLeft:function(){return null==b&&k(),h
}});
function k(){var k,l,m=d.documentElement;
m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)
}}}();
var Ra,Sa,Ta=/^(top|right|bottom|left)$/;
a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;
return c&&c.opener||(c=a),c.getComputedStyle(b)
},Sa=function(a,b,c){var d,e,f,g,h=a.style;
return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""
}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle
},Sa=function(a,b,c){var d,e,f,g,h=a.style;
return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"
});
function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)
}}
}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;
function bb(a){if(a in ab){return a
}var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;
while(c--){if(a=_a[c]+b,a in ab){return a
}}}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;
h>g;
g++){d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))))
}for(g=0;
h>g;
g++){d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"))
}return a
}function db(a,b,c){var d=Ya.exec(b);
return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b
}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;
4>f;
f+=2){"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)))
}return g
}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);
if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e)){return e
}d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0
}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"
}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");
return""===c?"1":c
}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;
if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c){return g&&"get" in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]
}if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set" in g&&void 0===(c=g.set(a,c,d))))){try{i[b]=c
}catch(j){}}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);
return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get" in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f
}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)
}):fb(a,b,d):void 0
},set:function(a,c,d){var e=d&&Ra(a);
return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)
}}
}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?0.01*parseFloat(RegExp.$1)+"":b?"1":""
},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";
c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)
}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0
}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{marginLeft:0},function(){return a.getBoundingClientRect().left
}):0))+"px":void 0
}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];
4>d;
d++){e[a+V[d]+b]=f[d]||f[d-2]||f[0]
}return e
}},Na.test(a)||(n.cssHooks[a+b].set=db)
}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;
if(n.isArray(b)){for(d=Ra(a),e=b.length;
e>g;
g++){f[b[g]]=n.css(a,b[g],!1,d)
}return f
}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)
},show:function(){return cb(this,!0)
},hide:function(){return cb(this)
},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()
})
}});
function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)
}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")
},cur:function(){var a=gb.propHooks[this.prop];
return a&&a.get?a.get(this):gb.propHooks._default.get(this)
},run:function(a){var b,c=gb.propHooks[this.prop];
return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this
}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;
return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)
},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)
}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)
}},n.easing={linear:function(a){return a
},swing:function(a){return 0.5-Math.cos(a*Math.PI)/2
},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};
var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;
function lb(){return a.setTimeout(function(){hb=void 0
}),hb=n.now()
}function mb(a,b){var c,d={height:a},e=0;
for(b=b?1:0;
4>e;
e+=2-b){c=V[e],d["margin"+c]=d["padding"+c]=a
}return b&&(d.opacity=d.width=a),d
}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;
g>f;
f++){if(d=e[f].call(c,b,a)){return d
}}}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");
c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()
}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()
})
})),1===a.nodeType&&("height" in b||"width" in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]
}));
for(d in b){if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d]){continue
}q=!0
}o[d]=r&&r[d]||n.style(a,d)
}else{j=void 0
}}if(n.isEmptyObject(o)){"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j)
}else{r?"hidden" in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()
}),m.done(function(){var b;
n._removeData(a,"fxshow");
for(b in o){n.style(a,b,o[b])
}});
for(d in o){g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))
}}}function pb(a,b){var c,d,e,f,g;
for(c in a){if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand" in g){f=g.expand(f),delete a[d];
for(c in f){c in a||(a[c]=f[c],b[c]=e)
}}else{b[d]=e
}}}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem
}),i=function(){if(e){return !1
}for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;
i>g;
g++){j.tweens[g].run(f)
}return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)
},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);
return j.tweens.push(d),d
},stop:function(b){var c=0,d=b?j.tweens.length:0;
if(e){return this
}for(e=!0;
d>c;
c++){j.tweens[c].run(1)
}return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this
}}),k=j.props;
for(pb(k,j.opts.specialEasing);
g>f;
f++){if(d=qb.prefilters[f].call(j,a,k,j.opts)){return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d
}}return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)
}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);
return X(c.elem,a,U.exec(b),c),c
}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);
for(var c,d=0,e=a.length;
e>d;
d++){c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)
}},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)
}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};
return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)
},d
},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)
},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);
(e||n._data(this,"finish"))&&b.stop(!0)
};
return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)
},stop:function(a,b,c){var d=function(a){var b=a.stop;
delete a.stop,b(c)
};
return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);
if(e){g[e]&&g[e].stop&&d(g[e])
}else{for(e in g){g[e]&&g[e].stop&&kb.test(e)&&d(g[e])
}}for(e=f.length;
e--;
){f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1))
}!b&&c||n.dequeue(this,a)
})
},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;
for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;
b--;
){f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1))
}for(b=0;
g>b;
b++){d[b]&&d[b].finish&&d[b].finish.call(this)
}delete c.finish
})
}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];
n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)
}
}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)
}
}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;
for(hb=n.now();
c<b.length;
c++){a=b[c],a()||b[c]!==a||b.splice(c--,1)
}b.length||n.fx.stop(),hb=void 0
},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()
},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))
},n.fx.stop=function(){a.clearInterval(ib),ib=null
},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);
d.stop=function(){a.clearTimeout(e)
}
})
},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));
c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value
}();
var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;
n.fn.extend({val:function(a){var b,c,d,e=this[0];
if(arguments.length){return d=n.isFunction(a),this.each(function(c){var e;
1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""
})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set" in b&&void 0!==b.set(this,e,"value")||(this.value=e))
})
}if(e){return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get" in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)
}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");
return null!=b?b:n.trim(n.text(a)).replace(sb," ")
}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;
h>i;
i++){if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f){return b
}g.push(b)
}}return g
},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;
while(g--){if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1){try{d.selected=c=!0
}catch(h){d.scrollHeight
}}else{d.selected=!1
}}return c||(a.selectedIndex=-1),e
}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0
}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value
})
});
var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;
n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)
},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)
})
}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;
if(3!==f&&8!==f&&2!==f){return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set" in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get" in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))
}},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;
return a.setAttribute("type",b),c&&(a.value=c),b
}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);
if(f&&1===a.nodeType){while(c=f[e++]){d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)
}}}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c
}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;
yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;
return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e
}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null
}
}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void (a.defaultValue=b):tb&&tb.set(a,b,c)
}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);
return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0
}},vb.id=vb.name=vb.coords=function(a,b,c){var d;
return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null
},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);
return c&&c.specified?c.value:void 0
},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)
}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0
}}
})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0
},set:function(a,b){return a.style.cssText=b+""
}});
var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;
n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)
},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]
}catch(b){}})
}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;
if(3!==f&&8!==f&&2!==f){return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set" in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get" in e&&null!==(d=e.get(a,b))?d:a[b]
}},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");
return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1
}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)
}}
}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;
return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null
},set:function(a){var b=a.parentNode;
b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)
}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this
}),l.enctype||(n.propFix.enctype="encoding");
var Bb=/[\t\r\n\f]/g;
function Cb(a){return n.attr(a,"class")||""
}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;
if(n.isFunction(a)){return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))
})
}if("string"==typeof a&&a){b=a.match(G)||[];
while(c=this[i++]){if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;
while(f=b[g++]){d.indexOf(" "+f+" ")<0&&(d+=f+" ")
}h=n.trim(d),e!==h&&n.attr(c,"class",h)
}}}return this
},removeClass:function(a){var b,c,d,e,f,g,h,i=0;
if(n.isFunction(a)){return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))
})
}if(!arguments.length){return this.attr("class","")
}if("string"==typeof a&&a){b=a.match(G)||[];
while(c=this[i++]){if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;
while(f=b[g++]){while(d.indexOf(" "+f+" ")>-1){d=d.replace(" "+f+" "," ")
}}h=n.trim(d),e!==h&&n.attr(c,"class",h)
}}}return this
},toggleClass:function(a,b){var c=typeof a;
return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)
}):this.each(function(){var b,d,e,f;
if("string"===c){d=0,e=n(this),f=a.match(G)||[];
while(b=f[d++]){e.hasClass(b)?e.removeClass(b):e.addClass(b)
}}else{void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))
}})
},hasClass:function(a){var b,c,d=0;
b=" "+a+" ";
while(c=this[d++]){if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1){return !0
}}return !1
}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)
}
}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)
}});
var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
n.parseJSON=function(b){if(a.JSON&&a.JSON.parse){return a.JSON.parse(b+"")
}var c,d=null,e=n.trim(b+"");
return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")
}))?Function("return "+e)():n.error("Invalid JSON: "+b)
},n.parseXML=function(b){var c,d;
if(!b||"string"!=typeof b){return null
}try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))
}catch(e){c=void 0
}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c
};
var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];
function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");
var d,e=0,f=b.toLowerCase().match(G)||[];
if(n.isFunction(c)){while(d=f[e++]){"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)
}}}
}function Ub(a,b,c,d){var e={},f=a===Pb;
function g(h){var i;
return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);
return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)
}),i
}return g(b.dataTypes[0])||!e["*"]&&g("*")
}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};
for(d in b){void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d])
}return c&&n.extend(!0,a,c),a
}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;
while("*"===i[0]){i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"))
}if(e){for(g in h){if(h[g]&&h[g].test(e)){i.unshift(g);
break
}}}if(i[0] in c){f=i[0]
}else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;
break
}d||(d=g)
}f=f||d
}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0
}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();
if(k[1]){for(g in a.converters){j[g.toLowerCase()]=a.converters[g]
}}f=k.shift();
while(f){if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift()){if("*"===f){f=i
}else{if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g){for(e in j){if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));
break
}}}if(g!==!0){if(g&&a["throws"]){b=g(b)
}else{try{b=g(b)
}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}
}}}}}}}return{state:"success",data:b}
}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)
},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};
var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;
if(2===u){if(!k){k={};
while(b=Jb.exec(g)){k[b[1].toLowerCase()]=b[2]
}}b=k[a.toLowerCase()]
}return null==b?null:b
},getAllResponseHeaders:function(){return 2===u?g:null
},setRequestHeader:function(a,b){var c=a.toLowerCase();
return u||(a=t[c]=t[c]||a,s[a]=b),this
},overrideMimeType:function(a){return u||(l.mimeType=a),this
},statusCode:function(a){var b;
if(a){if(2>u){for(b in a){r[b]=[r[b],a[b]]
}}else{w.always(a[w.status])
}}return this
},abort:function(a){var b=a||v;
return j&&j.abort(b),y(0,b),this
}};
if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u){return w
}i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);
for(e in l.headers){w.setRequestHeader(e,l.headers[e])
}if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u)){return w.abort()
}v="abort";
for(e in {success:1,error:1,complete:1}){w[e](l[e])
}if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u){return w
}l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")
},l.timeout));
try{u=1,j.send(s,y)
}catch(x){if(!(2>u)){throw x
}y(-1,x)
}}else{y(-1,"No Transport")
}function y(b,c,d,e){var k,s,t,v,x,y=c;
2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))
}return w
},getJSON:function(a,b,c){return n.get(a,b,c,"json")
},getScript:function(a,b){return n.get(a,void 0,b,"script")
}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))
}
}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})
},n.fn.extend({wrapAll:function(a){if(n.isFunction(a)){return this.each(function(b){n(this).wrapAll(a.call(this,b))
})
}if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;
while(a.firstChild&&1===a.firstChild.nodeType){a=a.firstChild
}return a
}).append(this)
}return this
},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))
}):this.each(function(){var b=n(this),c=b.contents();
c.length?c.wrapAll(a):b.append(a)
})
},wrap:function(a){var b=n.isFunction(a);
return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)
})
},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)
}).end()
}});
function Yb(a){return a.style&&a.style.display||n.css(a,"display")
}function Zb(a){if(!n.contains(a.ownerDocument||d,a)){return !0
}while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type){return !0
}a=a.parentNode
}return !1
}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)
},n.expr.filters.visible=function(a){return !n.expr.filters.hidden(a)
};
var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;
function dc(a,b,c,d){var e;
if(n.isArray(b)){n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)
})
}else{if(c||"object"!==n.type(b)){d(a,b)
}else{for(e in b){dc(a+"["+e+"]",b[e],c,d)
}}}}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)
};
if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a)){n.each(a,function(){e(this.name,this.value)
})
}else{for(c in a){dc(c,a[c],b,e)
}}return d.join("&").replace($b,"+")
},n.fn.extend({serialize:function(){return n.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");
return a?n.makeArray(a):this
}).filter(function(){var a=this.type;
return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))
}).map(function(a,b){var c=n(this).val();
return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}
}):{name:b.name,value:c.replace(ac,"\r\n")}
}).get()
}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()
}:hc;
var ec=0,fc={},gc=n.ajaxSettings.xhr();
a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc){fc[a](void 0,!0)
}}),l.cors=!!gc&&"withCredentials" in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;
return{send:function(d,e){var f,g=b.xhr(),h=++ec;
if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields){for(f in b.xhrFields){g[f]=b.xhrFields[f]
}}b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");
for(f in d){void 0!==d[f]&&g.setRequestHeader(f,d[f]+"")
}g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;
if(c&&(d||4===g.readyState)){if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d){4!==g.readyState&&g.abort()
}else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);
try{i=g.statusText
}catch(k){i=""
}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404
}}j&&e(f,i,j,g.getAllResponseHeaders())
},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()
},abort:function(){c&&c(void 0,!0)
}}
}});
function hc(){try{return new a.XMLHttpRequest
}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")
}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a
}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)
}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;
return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))
},c.insertBefore(b,c.firstChild)
},abort:function(){b&&b.onload(void 0,!0)
}}
}});
var jc=[],kc=/(=)\?(?=&|$)|\?\?/;
n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;
return this[a]=!0,a
}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");
return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]
},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments
},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0
}),"script"):void 0
}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a){return null
}"boolean"==typeof b&&(c=b,b=!1),b=b||d;
var e=x.exec(a),f=!c&&[];
return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))
};
var lc=n.fn.load;
n.fn.load=function(a,b,c){if("string"!=typeof a&&lc){return lc.apply(this,arguments)
}var d,e,f,g=this,h=a.indexOf(" ");
return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)
}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])
})
}),this
},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)
}
}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem
}).length
};
function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1
}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};
"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using" in b?b.using.call(a,m):l.css(m)
}},n.fn.extend({offset:function(a){if(arguments.length){return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)
})
}var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;
if(f){return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d
}},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];
return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;
while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position")){a=a.offsetParent
}return a||Qa
})
}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);
n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);
return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void (f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)
},a,d,arguments.length,null)
}
}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0
})
}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");
return Y(this,function(b,c,d){var e;
return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)
},b,f?d:void 0,f,null)
}
})
}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)
},unbind:function(a,b){return this.off(a,null,b)
},delegate:function(a,b,c,d){return this.on(b,a,c,d)
},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)
}}),n.fn.size=function(){return this.length
},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n
});
var nc=a.jQuery,oc=a.$;
return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n
},b||(a.jQuery=a.$=n),n
});
/*! jQuery UI - v1.10.3 - 2013-05-03
* Includes: jquery.ui.core.jss
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){function i(t,i){var a,n,r,o=t.nodeName.toLowerCase();
return"area"===o?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)
}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")
}).length
}var a=0,n=/^ui-id-\d+$/;
e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;
setTimeout(function(){e(t).focus(),s&&s.call(t)
},i)
}):t.apply(this,arguments)
}
}(e.fn.focus),scrollParent:function(){var t;
return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))
}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))
}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t
},zIndex:function(i){if(i!==t){return this.css("zIndex",i)
}if(this.length){for(var s,a,n=e(this[0]);
n.length&&n[0]!==document;
){if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(a=parseInt(n.css("zIndex"),10),!isNaN(a)&&0!==a)){return a
}n=n.parent()
}}return 0
},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)
})
},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")
})
}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return !!e.data(i,t)
}
}):function(t,i,s){return !!e.data(t,s[3])
},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))
},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);
return(a||s>=0)&&i(t,!a)
}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function a(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)
}),i
}var n="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};
e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")
})
},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")
})
}
}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))
}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)
}
}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart" in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()
})
},enableSelection:function(){return this.unbind(".ui-disableSelection")
}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var a,n=e.ui[t].prototype;
for(a in s){n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])
}},call:function(e,t,i){var s,a=e.plugins[t];
if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType){for(s=0;
a.length>s;
s++){e.options[a[s][0]]&&a[s][1].apply(e.element,i)
}}}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow")){return !1
}var s=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;
return t[s]>0?!0:(t[s]=1,a=t[s]>0,t[s]=0,a)
}})
})(jQuery);
/*! jQuery UI - v1.10.3 - 2013-05-03
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;
e.cleanData=function(t){for(var i,s=0;
null!=(i=t[s]);
s++){try{e(i).triggerHandler("remove")
}catch(a){}}n(t)
},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];
i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return !!e.data(t,a)
},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)
},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)
},t=function(e){return s.prototype[i].apply(this,e)
};
return function(){var i,s=this._super,a=this._superApply;
return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i
}
}(),t):(l[i]=n,t)
}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;
e.widget(s.namespace+"."+s.widgetName,o,i._proto)
}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)
},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;
h>o;
o++){for(n in r[o]){a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a)
}}return i
},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;
e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;
return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);
return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+r+"'")
}):this.each(function(){var t=e.data(this,a);
t?t.option(r||{})._init():e.data(this,a,new n(r,this))
}),l
}
},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()
}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()
},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")
},_destroy:e.noop,widget:function(){return this.element
},option:function(i,s){var n,a,r,o=i;
if(0===arguments.length){return e.widget.extend({},this.options)
}if("string"==typeof i){if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;
n.length-1>r;
r++){a[n[r]]=a[n[r]]||{},a=a[n[r]]
}if(i=n.pop(),s===t){return a[i]===t?null:a[i]
}a[i]=s
}else{if(s===t){return this.options[i]===t?null:this.options[i]
}o[i]=s
}}return this._setOptions(o),this
},_setOptions:function(e){var t;
for(t in e){this._setOption(t,e[t])
}return this
},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this
},enable:function(){return this._setOption("disabled",!1)
},disable:function(){return this._setOption("disabled",!0)
},_on:function(i,s,n){var a,r=this;
"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t
}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);
var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];
c?a.delegate(c,u,h):s.bind(u,h)
})
},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)
},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)
}var s=this;
return setTimeout(i,t||0)
},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")
},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")
},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(t,i,s){var n,a,r=this.options[t];
if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent){for(n in a){n in i||(i[n]=a[n])
}}return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())
}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});
var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;
n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()
})
}
})
})(jQuery);
/*! jQuery UI - v1.10.3 - 2013-05-03
* http://jqueryui.com
* Includes: jquery.ui.mouse.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e){var t=!1;
e(document).mouseup(function(){t=!1
}),e.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;
this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)
}).bind("click."+this.widgetName,function(i){return !0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined
}),this.started=!1
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;
var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;
return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0
},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)
},this._mouseUpDelegate=function(e){return s._mouseUp(e)
},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0
}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)
},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1
},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return !0
}})
})(jQuery);
/*! jQuery UI - v1.10.3 - 2013-05-03
* http://jqueryui.com
* Includes: jquery.ui.position.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]
}function s(e,i){return parseInt(t.css(e,i),10)||0
}function n(e){var i=e[0];
return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}
}t.ui=t.ui||{};
var a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;
t.position={scrollbarWidth:function(){if(a!==e){return a
}var i,s,n=t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];
return t("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s
},getScrollInfo:function(e){var i=e.isWindow?"":e.element.css("overflow-x"),s=e.isWindow?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;
return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}
},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]);
return{element:i,isWindow:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}
}},t.fn.position=function(e){if(!e||!e.of){return f.apply(this,arguments)
}e=t.extend({},e);
var a,p,m,g,v,b,_=t(e.of),y=t.position.getWithinInfo(e.within),w=t.position.getScrollInfo(y),x=(e.collision||"flip").split(" "),k={};
return b=n(_),_[0].preventDefault&&(e.at="left top"),p=b.width,m=b.height,g=b.offset,v=t.extend({},g),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");
1===s.length&&(s=l.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),k[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]
}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=m:"center"===e.at[1]&&(v.top+=m/2),a=i(k.at,p,m),v.left+=a[0],v.top+=a[1],this.each(function(){var n,l,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),b=s(this,"marginTop"),D=u+f+s(this,"marginRight")+w.width,T=d+b+s(this,"marginBottom")+w.height,C=t.extend({},v),M=i(k.my,c.outerWidth(),c.outerHeight());
"right"===e.my[0]?C.left-=u:"center"===e.my[0]&&(C.left-=u/2),"bottom"===e.my[1]?C.top-=d:"center"===e.my[1]&&(C.top-=d/2),C.left+=M[0],C.top+=M[1],t.support.offsetFractions||(C.left=h(C.left),C.top=h(C.top)),n={marginLeft:f,marginTop:b},t.each(["left","top"],function(i,s){t.ui.position[x[i]]&&t.ui.position[x[i]][s](C,{targetWidth:p,targetHeight:m,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:D,collisionHeight:T,offset:[a[0]+M[0],a[1]+M[1]],my:e.my,at:e.at,within:y,elem:c})
}),e.using&&(l=function(t){var i=g.left-C.left,s=i+p-u,n=g.top-C.top,a=n+m-d,h={target:{element:_,left:g.left,top:g.top,width:p,height:m},element:{element:c,left:C.left,top:C.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};
u>p&&p>r(i+s)&&(h.horizontal="center"),d>m&&m>r(n+a)&&(h.vertical="middle"),h.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",e.using.call(this,t,h)
}),c.offset(t.extend(C,{using:l}))
})
},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-a-n;
e.collisionWidth>a?h>0&&0>=l?(i=t.left+h+e.collisionWidth-a-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+a-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=o(t.left-r,t.left)
},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-a-n;
e.collisionHeight>a?h>0&&0>=l?(i=t.top+h+e.collisionHeight-a-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+a-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=o(t.top-r,t.top)
}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-o-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];
0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>r(s))&&(t.left+=d+p+f))
},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-o-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];
0>c?(s=t.top+p+f+m+e.collisionHeight-o-a,t.top+p+f+m>c&&(0>s||r(c)>s)&&(t.top+=p+f+m)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+m-h,t.top+p+f+m>u&&(i>0||u>r(i))&&(t.top+=p+f+m))
}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)
},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)
}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");
e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});
for(a in s){e.style[a]=s[a]
}e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)
}()
})(jQuery);
/*! jQuery UI - v1.10.3 - 2013-05-03
* http://jqueryui.com
* Includes: jquery.ui.draggable.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()
},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()
},_mouseCapture:function(t){var i=this.options;
return this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(e(this).offset()).appendTo("body")
}),!0):!1)
},_mouseStart:function(t){var i=this.options;
return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)
},_mouseDrag:function(t,i){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();
if(this._trigger("drag",t,s)===!1){return this._mouseUp({}),!1
}this.position=s.position
}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1
},_mouseStop:function(t){var i=this,s=!1;
return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"original"!==this.options.helper||e.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()
}):this._trigger("stop",t)!==!1&&this._clear(),!1):!1
},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)
}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)
},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this
},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0
},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;
return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s
},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left" in t&&(this.offset.click.left=t.left+this.margins.left),"right" in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top" in t&&(this.offset.click.top=t.top+this.margins.top),"bottom" in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)
},_getParentOffset:function(){var t=this.offsetParent.offset();
return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.element.position();
return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}return{top:0,left:0}
},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var t,i,s,n=this.options;
return n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===n.containment?(this.containment=[0,0,e(document).width()-this.helperProportions.width-this.margins.left,(e(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):n.containment.constructor===Array?(this.containment=n.containment,undefined):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t="hidden"!==i.css("overflow"),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i),undefined):(this.containment=null,undefined)
},_convertPositionTo:function(t,i){i||(i=this.position);
var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;
return this.offset.scroll||(this.offset.scroll={top:n.scrollTop(),left:n.scrollLeft()}),{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*s}
},_generatePosition:function(t){var i,s,n,a,o=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=t.pageX,l=t.pageY;
return this.offset.scroll||(this.offset.scroll={top:r.scrollTop(),left:r.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1
},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s]),"drag"===t&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,i,s)
},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i){var s=e(this).data("ui-draggable"),n=s.options,a=e.extend({},i,{item:s.element});
s.sortables=[],e(n.connectToSortable).each(function(){var i=e.data(this,"ui-sortable");
i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",t,a))
})
},stop:function(t,i){var s=e(this).data("ui-draggable"),n=e.extend({},i,{item:s.element});
e.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,n))
})
},drag:function(t,i){var s=e(this).data("ui-draggable"),n=this;
e.each(s.sortables,function(){var a=!1,o=this;
this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(a=!0,e.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(o.instance.element[0],this.instance.element[0])&&(a=!1),a
})),a?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]
},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",t),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",t),s.dropped=!1)
})
}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),i=e(this).data("ui-draggable").options;
t.css("cursor")&&(i._cursor=t.css("cursor")),t.css("cursor",i.cursor)
},stop:function(){var t=e(this).data("ui-draggable").options;
t._cursor&&e("body").css("cursor",t._cursor)
}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;
s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)
},stop:function(t,i){var s=e(this).data("ui-draggable").options;
s._opacity&&e(i.helper).css("opacity",s._opacity)
}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");
t.scrollParent[0]!==document&&"HTML"!==t.scrollParent[0].tagName&&(t.overflowOffset=t.scrollParent.offset())
},drag:function(t){var i=e(this).data("ui-draggable"),s=i.options,n=!1;
i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-t.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop+s.scrollSpeed:t.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-t.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft+s.scrollSpeed:t.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(t.pageY-e(document).scrollTop()<s.scrollSensitivity?n=e(document).scrollTop(e(document).scrollTop()-s.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<s.scrollSensitivity&&(n=e(document).scrollTop(e(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(t.pageX-e(document).scrollLeft()<s.scrollSensitivity?n=e(document).scrollLeft(e(document).scrollLeft()-s.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<s.scrollSensitivity&&(n=e(document).scrollLeft(e(document).scrollLeft()+s.scrollSpeed)))),n!==!1&&e.ui.ddmanager&&!s.dropBehaviour&&e.ui.ddmanager.prepareOffsets(i,t)
}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),i=t.options;
t.snapElements=[],e(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=e(this),s=i.offset();
this!==t.element[0]&&t.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})
})
},drag:function(t,i){var s,n,a,o,r,h,l,u,c,d,p=e(this).data("ui-draggable"),f=p.options,m=f.snapTolerance,g=i.offset.left,v=g+p.helperProportions.width,b=i.offset.top,y=b+p.helperProportions.height;
for(c=p.snapElements.length-1;
c>=0;
c--){r=p.snapElements[c].left,h=r+p.snapElements[c].width,l=p.snapElements[c].top,u=l+p.snapElements[c].height,r-m>v||g>h+m||l-m>y||b>u+m||!e.contains(p.snapElements[c].item.ownerDocument,p.snapElements[c].item)?(p.snapElements[c].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(s=m>=Math.abs(l-y),n=m>=Math.abs(u-b),a=m>=Math.abs(r-v),o=m>=Math.abs(h-g),s&&(i.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h}).left-p.margins.left)),d=s||n||a||o,"outer"!==f.snapMode&&(s=m>=Math.abs(l-b),n=m>=Math.abs(u-y),a=m>=Math.abs(r-g),o=m>=Math.abs(h-v),s&&(i.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u-p.helperProportions.height,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[c].snapping&&(s||n||a||o||d)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=s||n||a||o||d)
}}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,i=this.data("ui-draggable").options,s=e.makeArray(e(i.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)
});
s.length&&(t=parseInt(e(s[0]).css("zIndex"),10)||0,e(s).each(function(i){e(this).css("zIndex",t+i)
}),this.css("zIndex",t+s.length))
}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;
s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)
},stop:function(t,i){var s=e(this).data("ui-draggable").options;
s._zIndex&&e(i.helper).css("zIndex",s._zIndex)
}})
})(jQuery);
/*! jQuery UI - v1.10.3 - 2013-05-03
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e){function t(e){return parseInt(e,10)||0
}function i(e){return !isNaN(parseInt(e,10))
}e.widget("ui.resizable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,i,s,n,a,o=this,r=this.options;
if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String){for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;
t.length>i;
i++){s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n)
}}this._renderAxis=function(t){var i,s,n,a;
t=t||this.element;
for(i in this.handles){this.handles[i].constructor===String&&(this.handles[i]=e(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),e(this.handles[i]).length
}},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")
}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())
}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())
})),this._mouseInit()
},_destroy:function(){this._mouseDestroy();
var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
};
return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this
},_mouseCapture:function(t){var i,s,n=!1;
for(i in this.handles){s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0)
}return !this.options.disabled&&n
},_mouseStart:function(i){var s,n,a,o=this.options,r=this.element.position(),h=this.element;
return this.resizing=!0,/absolute/.test(h.css("position"))?h.css({position:"absolute",top:h.css("top"),left:h.css("left")}):h.is(".ui-draggable")&&h.css({position:"absolute",top:r.top,left:r.left}),this._renderProxy(),s=t(this.helper.css("left")),n=t(this.helper.css("top")),o.containment&&(s+=e(o.containment).scrollLeft()||0,n+=e(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:s,top:n},this.size=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalSize=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalPosition={left:s,top:n},this.sizeDiff={width:h.outerWidth()-h.width(),height:h.outerHeight()-h.height()},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,a=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===a?this.axis+"-resize":a),h.addClass("ui-resizable-resizing"),this._propagate("start",i),!0
},_mouseDrag:function(t){var i,s=this.helper,n={},a=this.originalMousePosition,o=this.axis,r=this.position.top,h=this.position.left,l=this.size.width,u=this.size.height,c=t.pageX-a.left||0,d=t.pageY-a.top||0,p=this._change[o];
return p?(i=p.apply(this,[t,c,d]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),this.position.top!==r&&(n.top=this.position.top+"px"),this.position.left!==h&&(n.left=this.position.left+"px"),this.size.width!==l&&(n.width=this.size.width+"px"),this.size.height!==u&&(n.height=this.size.height+"px"),s.css(n),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(n)||this._trigger("resize",t,this.ui()),!1):!1
},_mouseStop:function(t){this.resizing=!1;
var i,s,n,a,o,r,h,l=this.options,u=this;
return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&e.ui.hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1
},_updateVirtualBoundaries:function(e){var t,s,n,a,o,r=this.options;
o={minWidth:i(r.minWidth)?r.minWidth:0,maxWidth:i(r.maxWidth)?r.maxWidth:1/0,minHeight:i(r.minHeight)?r.minHeight:0,maxHeight:i(r.maxHeight)?r.maxHeight:1/0},(this._aspectRatio||e)&&(t=o.minHeight*this.aspectRatio,n=o.minWidth/this.aspectRatio,s=o.maxHeight*this.aspectRatio,a=o.maxWidth/this.aspectRatio,t>o.minWidth&&(o.minWidth=t),n>o.minHeight&&(o.minHeight=n),o.maxWidth>s&&(o.maxWidth=s),o.maxHeight>a&&(o.maxHeight=a)),this._vBoundaries=o
},_updateCache:function(e){this.offset=this.helper.offset(),i(e.left)&&(this.position.left=e.left),i(e.top)&&(this.position.top=e.top),i(e.height)&&(this.size.height=e.height),i(e.width)&&(this.size.width=e.width)
},_updateRatio:function(e){var t=this.position,s=this.size,n=this.axis;
return i(e.height)?e.width=e.height*this.aspectRatio:i(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===n&&(e.left=t.left+(s.width-e.width),e.top=null),"nw"===n&&(e.top=t.top+(s.height-e.height),e.left=t.left+(s.width-e.width)),e
},_respectSize:function(e){var t=this._vBoundaries,s=this.axis,n=i(e.width)&&t.maxWidth&&t.maxWidth<e.width,a=i(e.height)&&t.maxHeight&&t.maxHeight<e.height,o=i(e.width)&&t.minWidth&&t.minWidth>e.width,r=i(e.height)&&t.minHeight&&t.minHeight>e.height,h=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,u=/sw|nw|w/.test(s),c=/nw|ne|n/.test(s);
return o&&(e.width=t.minWidth),r&&(e.height=t.minHeight),n&&(e.width=t.maxWidth),a&&(e.height=t.maxHeight),o&&u&&(e.left=h-t.minWidth),n&&u&&(e.left=h-t.maxWidth),r&&c&&(e.top=l-t.minHeight),a&&c&&(e.top=l-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e
},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var e,t,i,s,n,a=this.helper||this.element;
for(e=0;
this._proportionallyResizeElements.length>e;
e++){if(n=this._proportionallyResizeElements[e],!this.borderDif){for(this.borderDif=[],i=[n.css("borderTopWidth"),n.css("borderRightWidth"),n.css("borderBottomWidth"),n.css("borderLeftWidth")],s=[n.css("paddingTop"),n.css("paddingRight"),n.css("paddingBottom"),n.css("paddingLeft")],t=0;
i.length>t;
t++){this.borderDif[t]=(parseInt(i[t],10)||0)+(parseInt(s[t],10)||0)
}}n.css({height:a.height()-this.borderDif[0]-this.borderDif[2]||0,width:a.width()-this.borderDif[1]-this.borderDif[3]||0})
}}},_renderProxy:function(){var t=this.element,i=this.options;
this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element
},_change:{e:function(e,t){return{width:this.originalSize.width+t}
},w:function(e,t){var i=this.originalSize,s=this.originalPosition;
return{left:s.left+t,width:i.width-t}
},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;
return{top:n.top+i,height:s.height-i}
},s:function(e,t,i){return{height:this.originalSize.height+i}
},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))
},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))
},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))
},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))
}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).data("ui-resizable"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&e.ui.hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;
i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};
n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)
}})
}}),e.ui.plugin.add("resizable","containment",{start:function(){var i,s,n,a,o,r,h,l=e(this).data("ui-resizable"),u=l.options,c=l.element,d=u.containment,p=d instanceof e?d.get(0):/parent/.test(d)?c.parent().get(0):d;
p&&(l.containerElement=e(p),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(i=e(p),s=[],e(["Top","Right","Left","Bottom"]).each(function(e,n){s[e]=t(i.css("padding"+n))
}),l.containerOffset=i.offset(),l.containerPosition=i.position(),l.containerSize={height:i.innerHeight()-s[3],width:i.innerWidth()-s[1]},n=l.containerOffset,a=l.containerSize.height,o=l.containerSize.width,r=e.ui.hasScroll(p,"left")?p.scrollWidth:o,h=e.ui.hasScroll(p)?p.scrollHeight:a,l.parentData={element:p,left:n.left,top:n.top,width:r,height:h}))
},resize:function(t){var i,s,n,a,o=e(this).data("ui-resizable"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,c={top:0,left:0},d=o.containerElement;
d[0]!==document&&/static/.test(d.css("position"))&&(c=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-c.left),u&&(o.size.height=o.size.width/o.aspectRatio),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio),o.position.top=o._helper?h.top:0),o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top,i=Math.abs((o._helper?o.offset.left-c.left:o.offset.left-c.left)+o.sizeDiff.width),s=Math.abs((o._helper?o.offset.top-c.top:o.offset.top-h.top)+o.sizeDiff.height),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a&&(i-=o.parentData.left),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio))
},stop:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;
t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})
}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=function(t){e(t).each(function(){var t=e(this);
t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})
})
};
"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):e.each(i.alsoResize,function(e){s(e)
})
},resize:function(t,i){var s=e(this).data("ui-resizable"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0},h=function(t,s){e(t).each(function(){var t=e(this),n=e(this).data("ui-resizable-alsoresize"),a={},o=s&&s.length?s:t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];
e.each(o,function(e,t){var i=(n[t]||0)+(r[t]||0);
i&&i>=0&&(a[t]=i||null)
}),t.css(a)
})
};
"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):e.each(n.alsoResize,function(e,t){h(e,t)
})
},stop:function(){e(this).removeData("resizable-alsoresize")
}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size;
t.ghost=t.originalElement.clone(),t.ghost.css({opacity:0.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)
},resize:function(){var t=e(this).data("ui-resizable");
t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})
},stop:function(){var t=e(this).data("ui-resizable");
t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))
}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size,n=t.originalSize,a=t.originalPosition,o=t.axis,r="number"==typeof i.grid?[i.grid,i.grid]:i.grid,h=r[0]||1,l=r[1]||1,u=Math.round((s.width-n.width)/h)*h,c=Math.round((s.height-n.height)/l)*l,d=n.width+u,p=n.height+c,f=i.maxWidth&&d>i.maxWidth,m=i.maxHeight&&p>i.maxHeight,g=i.minWidth&&i.minWidth>d,v=i.minHeight&&i.minHeight>p;
i.grid=r,g&&(d+=h),v&&(p+=l),f&&(d-=h),m&&(p-=l),/^(se|s|e)$/.test(o)?(t.size.width=d,t.size.height=p):/^(ne)$/.test(o)?(t.size.width=d,t.size.height=p,t.position.top=a.top-c):/^(sw)$/.test(o)?(t.size.width=d,t.size.height=p,t.position.left=a.left-u):(t.size.width=d,t.size.height=p,t.position.top=a.top-c,t.position.left=a.left-u)
}})
})(jQuery);
var AJS_WHEEL_SCROLL_DELTA=50;
var ajaxSwingUpdateSeconds=0;
var ajaxSwingUpdateInterval=null;
var ajaxSwingSessionExpirationInterval=null;
var ajaxSwingKeepSessionAlive=false;
var ajaxSwingSubmitAction=null;
var ajaxSwingPingActive=false;
var ajaxSwingFocusBackElement=null;
var ajaxSwingSubmitFocusBackElement=null;
var AjaxSwing_oldFocusedComponentId=null;
var AjaxSwing_focusedComponentId=null;
var AjaxSwingDoNotHidePopups=false;
var ajaxSwingQueueEvent=false;
var AjaxSwingActiveFastSubmits=0;
var ajaxSwingPopupTypeTimeout=null;
var ajaxSwingClickTimeout=null;
var AjaxSwingV4ClickTimeDiff=0;
var AjaxSwingV4LastClickTime=0;
var AjaxSwingV4LastClickX=0;
var AjaxSwingV4LastClickY=0;
var AjaxSwingLastClickEvent_String=null;
var AjaxSwingLastClickEvent_Data=null;
var AjaxSwingV4CurrentClickTime=0;
var AjaxSwingV4ActiveWindowId="none";
var AjaxSwingV4ActiveFocusedId="none";
var AjaxSwingV4ForceActiveFocus=false;
var AjaxSwingV4JProgressUpdater;
var AjaxSwingV4TextChangeTimer=0;
var v4Focused="global";
var storedActions=[];
var postActions=[];
var currentMouseWheelDeltaPerComponent={};
var mouseWheelPerComponentInProcess={};
var legacy=false;
var legacy8=false;
var enterInTextFieldPressed=null;
var tinyMCENeedInit=true;
var validationElements=[];
function validateElement(event,ui){validationElements.push(ui)
}var delayValidationElements=[];
var proceedDelayValidate=false;
function proceedDelayValidation(){proceedDelayValidate=true
}function delayValidateElement(event,ui){delayValidationElements.push(ui)
}function getMSIEVersion(){var ua=window.navigator.userAgent;
var msie=ua.indexOf("MSIE ");
if(msie>0){return parseInt(ua.substring(msie+5,ua.indexOf(".",msie)))
}return false
}$(document).ready(function(){legacy=getMSIEVersion()===7;
legacy8=getMSIEVersion()===8;
$(document).keydown(onDocumentKeyDown);
onerror=handleJavascriptError;
initV4();
checkWindowSize()
});
function v4Submit(action,extraData,successRequestCallback){if(!legacy){$("body").addClass("loading")
}var data={};
if(extraData){data=extraData
}data.actionString=action;
addStoredInput();
data.storedActions=storedActions.slice();
storedActions.length=0;
data.postActions=postActions.slice();
postActions.length=0;
doFastSubmit("v4",data,successRequestCallback)
}function onUploadCancelClicked(){var cancelButton=document.getElementById("upload_cancel");
return v4Submit("/upload/"+$(cancelButton).attr("ajsParentWindow")+"/cancel")
}function onUploadClicked(){var fileInput=document.getElementById("upload_file");
if(!$(fileInput).val()){alert(getI18NMessage("javascript.please_select_file"));
return false
}$("#AjaxSwingForm").append('<input type="hidden" name="actionString" value="/upload/'+$(fileInput).parent().parent().attr("id")+'/ok" />');
$("#AjaxSwingForm").submit()
}function endsWith(str,suffix){return str.indexOf(suffix,str.length-suffix.length)!==-1
}function addStoredInput(){var focusedElId=v4Focused;
var input=document.getElementById(focusedElId+"Input");
if(input==null&&enterInTextFieldPressed){focusedElId=endsWith(enterInTextFieldPressed,"Input")?enterInTextFieldPressed.slice(0,-5):enterInTextFieldPressed;
input=document.getElementById(focusedElId+"Input")
}if(input){var val=$(input).val();
var submittedVal=$(input).attr("submittedValue");
if(val!=submittedVal){storedActions.push("/type/"+focusedElId+"/"+val);
$(input).attr("submittedValue",val)
}}}function onInputSetValue(id,value){var input=document.getElementById(id+"Input");
if(input){var submittedValue=$(input).attr("submittedValue");
if(submittedValue!=value){if($(input).attr("type")=="password"){if($(input).val().length>0&&value&&value.length>0){return
}}if($(input).is(":focus")&&enterInTextFieldPressed!=(id+"Input")){return
}if(enterInTextFieldPressed==(id+"Input")){enterInTextFieldPressed=null
}$(input).attr("submittedValue",value);
$(input).val(value)
}}}function onInputTimeout(id){var $txt=$("#"+id);
var val=$txt.val();
var submittedVal=$txt.attr("submittedValue");
if(val!=submittedVal){AjaxSwingV4ForceActiveFocus=true;
v4Submit("/noupdate/"+$txt.attr("name")+"/")
}}function onInputChange(){var disableLiveSubmit=$(this).attr("disableLiveSubmit");
if(disableLiveSubmit&&disableLiveSubmit=="true"){return
}var val=$(this).val();
var submittedVal=$(this).attr("submittedValue");
if((submittedVal.length==0)&&(val.length>0)){AjaxSwingV4ForceActiveFocus=true;
v4Submit("/noupdate/"+$(this).attr("name")+"/")
}else{if((submittedVal.length>0)&&(val.length==0)){AjaxSwingV4ForceActiveFocus=true;
v4Submit("/noupdate/"+$(this).attr("name")+"/")
}else{if(submittedVal!=val){clearTimeout(AjaxSwingV4TextChangeTimer);
AjaxSwingV4TextChangeTimer=setTimeout("onInputTimeout('"+$(this).attr("id")+"')",750)
}}}}function onInputFocus(event,target){addStoredInput();
v4Focused=$(target).attr("name");
if($(target).attr("noupdate")=="true"){}else{$(target).unbind("keyup input paste",onInputChange);
$(target).bind("keyup input paste",onInputChange)
}return true
}function onInputMouseClick(event,target){event.stopClickSubmit=true;
onInputFocus(event,target);
return true
}function onFormKeyDown(event){var target=event.target||event.srcElement;
if(target.nodeName=="TEXTAREA"){return true
}return event.keyCode!=13
}function onDocumentKeyDown(event){var modifiers="n";
if(event.altKey){modifiers+="a"
}if(event.ctrlKey){modifiers+="c"
}if(event.shiftKey){modifiers+="s"
}if(!(v4Focused=="global")){if(!document.getElementById(v4Focused)||event.altKey){v4Focused="global"
}}var actionString="/keydown/"+v4Focused+"/"+modifiers+"_"+event.keyCode;
if(event.originalEvent&&event.originalEvent.type=="keydown"){switch(event.originalEvent.location){case 0:actionString+="_1";
break;
case 1:actionString+="_2";
break;
case 2:actionString+="_3";
break;
case 3:actionString+="_4";
break;
default:actionString+="_0";
break
}}else{actionString+="_0"
}if(event.key&&event.key.length==1){actionString+="_";
actionString+=encodeURIComponent(event.key)
}var target=event.target||event.srcElement;
if(event.keyCode==9){$("input:focus").blur();
$("textarea:focus").blur();
v4Submit(actionString);
v4Focused="global";
AjaxSwingV4ForceActiveFocus=true;
return cancelBubbleEvent(event)
}if(event.keyCode==27){$("input:focus").blur();
$("textarea:focus").blur();
v4Submit(actionString);
v4Focused="global";
return cancelBubbleEvent(event)
}if(target){if(((target.nodeName=="INPUT")&&(event.keyCode!=13))||(target.nodeName=="TEXTAREA")){enterInTextFieldPressed=null;
if((event.keyCode!=17)&&(event.keyCode!=18)){if(event.ctrlKey){if((event.keyCode==65)||(event.keyCode==67)||(event.keyCode==86)||(event.keyCode==88)||(event.keyCode==116)){return true
}else{if(event.altKey){return true
}else{v4Submit(actionString)
}}}if(event.altKey){v4Submit(actionString)
}}if(event.ctrlKey){return cancelBubbleEvent(event)
}v4Focused=$(target).attr("name");
return true
}else{if((target.nodeName=="INPUT")&&(event.keyCode==13)){enterInTextFieldPressed=target.id;
v4Focused="global"
}}}if(event.ctrlKey&&event.keyCode==67){var txt="";
if(window.getSelection){txt=window.getSelection()
}else{if(document.getSelection){txt=document.getSelection()
}else{if(document.selection){txt=document.selection.createRange()
}}}if(txt){var node=txt.focusNode;
if(node){if(node.nodeName==="#text"){node=node.parentNode
}node=node.parentNode
}else{node=txt.parentElement()
}if(node.className.indexOf("JTextComponent")!=-1||getConfigurationParameter("agent.allowTextCopying")==="true"){return true
}}}if((event.keyCode!=16)&&(event.keyCode!=17)&&(event.keyCode!=18)){v4Submit(actionString)
}if(target&&(event.keyCode==8)&&((target.nodeName!="INPUT")&&(target.nodeName!="TEXTAREA"))||target.readOnly){return false
}if(event.ctrlKey){if(event.keyCode==116){return true
}return cancelBubbleEvent(event)
}if(event.altKey){return cancelBubbleEvent(event)
}}function submitMouseWheelEvent(compName,event){if(!event.wheelDelta){event=event.originalEvent
}return submitWheelEvent(compName,event)
}function submitWheelEvent(compName,event){return submitMouseEvent(compName,event,"/mousewheel/")
}function submitMouseEvent(compName,event,action,successRequestCallback){if(!event){event=window.event
}if(event.stopClickSubmit){return true
}AjaxSwingV4ForceActiveFocus=false;
event.cancelBubble=true;
event.cancelBubbleOverride=true;
var x,y;
var comp=document.getElementById(compName);
var posx=0;
var posy=0;
if(event.pageX||event.pageY){posx=event.pageX;
posy=event.pageY
}else{if(event.clientX||event.clientY){posx=event.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;
posy=event.clientY+document.body.scrollTop+document.documentElement.scrollTop
}}posx=Math.round(posx);
posy=Math.round(posy);
var target;
if(event.target){target=event.target
}else{target=event.srcElement
}addStoredInput();
if((target.nodeName!="INPUT")&&(target.nodeName!="TEXTAREA")){v4Focused="global"
}else{var input=document.getElementById(v4Focused+"Input");
if(input){postActions.push("/caret/"+v4Focused+"/"+getInputCaretPos(input))
}}var data={};
while(target!=comp){var ajsScrollLeftStartPos=target.getAttribute("ajsScrollLeftStartPos");
var ajsScrollTopStartPos=target.getAttribute("ajsScrollTopStartPos");
var isScrollChanged=(ajsScrollLeftStartPos!=null&&(ajsScrollLeftStartPos!=target.scrollLeft))||(ajsScrollTopStartPos!=null&&(ajsScrollTopStartPos!=target.scrollTop));
var isParentNotATextArea=(target.parentNode)&&(target.parentNode.id)&&(target.parentNode.id.indexOf("JTextArea")==-1);
if((isScrollChanged||(target.scrollTop>0))&&isParentNotATextArea){storedActions.push("/scroll/"+target.parentNode.id+"/"+target.scrollLeft+"_"+target.scrollTop)
}if((target.id)&&$(target).hasClass("window")){data.windowId=target.id
}target=target.parentNode
}var modifiers="n";
if(event.altKey){modifiers+="a"
}if(event.ctrlKey){modifiers+="c"
}if(event.shiftKey){modifiers+="s"
}var $comp=$(comp);
var pos=$comp.position();
var heavyPanelAttrValue=$comp.attr("heavy-panel");
if(heavyPanelAttrValue===""||heavyPanelAttrValue==="true"){pos.left=$comp.attr("left");
pos.top=$comp.attr("top")
}y=posy-Math.floor(pos.top);
x=posx-Math.floor(pos.left);
y=y+comp.parentNode.scrollTop;
x=x+comp.parentNode.scrollLeft;
if((x===AjaxSwingV4LastClickX)&&(y===AjaxSwingV4LastClickY)){var time=430;
if(legacy){time=1350
}if((action=="/click/")&&(AjaxSwingV4ClickTimeDiff<time)){return
}}var wheelDelta=event.wheelDelta?(event.wheelDelta):(event.deltaY?-1*event.deltaY:null);
var sign=function(x){return x?x<0?-1:1:0
};
if(wheelDelta!=null){wheelDelta=sign(wheelDelta)*AJS_WHEEL_SCROLL_DELTA
}var actionString=action+compName+"/"+x+"_"+y+"#"+modifiers+(wheelDelta?"~"+wheelDelta:"");
AjaxSwingV4LastClickX=x;
AjaxSwingV4LastClickY=y;
if(legacy){if(action=="/click/"){ajaxSwingClickTimeout=setTimeout(function(){v4Submit(actionString,data,successRequestCallback)
},200)
}else{if(ajaxSwingClickTimeout){clearTimeout(ajaxSwingClickTimeout)
}v4Submit(actionString,data,successRequestCallback)
}}else{if(action=="/mousewheel/"){processMouseWheelSubmit(action,compName,data,wheelDelta,x,y,modifiers)
}else{v4Submit(actionString,data,successRequestCallback)
}}if(event.target){target=event.target
}else{target=event.srcElement
}if(target.nodeName=="TEXTAREA"){return true
}return false
}function processMouseWheelSubmit(action,compName,data,delta,x,y,modifiers){if(mouseWheelPerComponentInProcess[compName]!=null){var eventData=currentMouseWheelDeltaPerComponent[compName];
if(eventData==null){eventData=createWheelData();
currentMouseWheelDeltaPerComponent[compName]=eventData
}else{var tempDelta=eventData.delta;
eventData=createWheelData();
eventData.delta+=tempDelta;
currentMouseWheelDeltaPerComponent[compName]=eventData
}}else{var eventData=createWheelData();
mouseWheelPerComponentInProcess[compName]=true;
sendEvent(eventData)
}function createWheelData(){return{action:action,compName:compName,x:x,y:y,modifiers:modifiers,action:action,data:data,delta:delta}
}function sendEvent(eventData){actionString=eventData.action+eventData.compName+"/"+eventData.x+"_"+eventData.y+"#"+eventData.modifiers+(eventData.delta?"~"+eventData.delta:"");
v4Submit(actionString,eventData.data,function(){processMouseWheelResponse(eventData.compName)
})
}function processMouseWheelResponse(compName){var currentData=currentMouseWheelDeltaPerComponent[compName];
if(currentData==null){delete mouseWheelPerComponentInProcess[compName];
return
}if(currentData.delta==0){delete mouseWheelPerComponentInProcess[compName];
delete currentMouseWheelDeltaPerComponent[compName]
}else{delete currentMouseWheelDeltaPerComponent[compName];
mouseWheelPerComponentInProcess[compName]=true;
sendEvent(currentData)
}}}function submitMouseMenu(compName,event){submitMouseEvent(compName,event,"/context/");
return false
}function processIFrameOnLoadEvent(event){return v4Submit("/iframe/"+event.target.getAttribute("ajsParentWindow")+"/loaded")
}function processMouseClickRoot(event){var target=event.target||event.srcElement;
if(target&&target.type=="file"){return true
}if(target&&(target.tagName=="A")&&($(target).attr("target")=="_blank")){return true
}$(event.target).attr("target")=="_blank";
submitMouseClickRoot(this.id,event,"");
return false
}function submitMouseClickRoot(compName,event,action){var AjaxSwingV4CurrentClickTime;
if(event.timeStamp){AjaxSwingV4CurrentClickTime=event.timeStamp
}else{AjaxSwingV4CurrentClickTime=new Date().getTime()
}AjaxSwingV4ClickTimeDiff=Math.abs(AjaxSwingV4CurrentClickTime-AjaxSwingV4LastClickTime);
AjaxSwingV4LastClickTime=AjaxSwingV4CurrentClickTime;
submitMouseEvent(compName,event,"/click"+action+"/");
var target=event.target||event.srcElement;
if((target.nodeName=="INPUT")||(target.nodeName=="TEXTAREA")){return true
}return false
}function doFastSubmit(action,extraData,extraOnComplete){var data=extraData||{};
var onComplete=extraOnComplete||onFastAjaxComplete;
data.__Action=action;
data.__FastSubmit=true;
data.__csrfToken=AjaxSwingForm.__csrfToken.value;
var options={url:getSubmitURL(),type:"POST",data:data,global:false,success:processResponse,complete:onComplete,contentType:"application/x-www-form-urlencoded; charset=utf-8"};
if(onComplete==onFastAjaxComplete){}AjaxSwingActiveFastSubmits=AjaxSwingActiveFastSubmits+1;
$.ajax(options)
}function ajaxSwingOnSubmit(){}function clearSelection(){try{if(document.selection&&document.selection.empty){document.selection.empty()
}else{if(window.getSelection){var sel=window.getSelection();
sel.removeAllRanges()
}}}catch(ex){}}function onFastAjaxComplete(xhr,statusText){AjaxSwingActiveFastSubmits=AjaxSwingActiveFastSubmits-1
}function onPingAjaxComplete(xhr,statusText){onAjaxComplete(xhr,statusText);
ajaxSwingPingActive=false
}function onSubmitAjaxComplete(xhr,statusText){onAjaxComplete(xhr,statusText);
ajaxSwingSubmitAction=null;
ajaxSwingPingActive=false
}function onAjaxComplete(xhr,statusText){if(statusText!="success"){setUpdateInterval(0);
if(ajaxSwingSubmitAction==null){v4Submit("/update/global/")
}else{if(typeof ajaxswingDisableAjax=="undefined"||ajaxswingDisableAjax==false){ajaxSwingPingActive=true;
var errorMessage=null;
if(getConfigurationParameter("agent.productionMode")=="true"){errorMessage=getI18NMessage("javascript.server_communication_error_only_text")
}else{errorMessage=getI18NMessage("javascript.server_communication_error",[xhr.status,xhr.statusText,statusText])
}errorMessage+=getI18NMessage("javascript.would_refresh_page");
if(confirm(errorMessage)){ajaxSwingPingActive=false;
window.location=window.location
}ajaxSwingPingActive=false
}}}}function postSubmitAjaxSwingWindows(){}function setAjaxSwingActiveWindow(comp){}function processResponse(data,statusText){if(!legacy){$("body").removeClass("loading")
}if(typeof ajaxswingDisableAjax!="undefined"&&ajaxswingDisableAjax==true){return
}if(statusText=="success"){if(data.length>1&&data.substring(0,1)=="{"){if(typeof ajaxswingDisableAjax=="undefined"||ajaxswingDisableAjax==false){data=eval("data = ("+data+")");
processJsonResponse(data)
}}else{refreshPage();
return
}}customOnAjaxComplete(data);
ajaxSwingSubmitAction=null;
initV4()
}function removeElement(element){$(element).remove()
}function isBodyHasScrollbars(){if((document.body.scrollWidth==$(document.body).width())||(document.body.scrollHeight==$(document.body).height())){return false
}else{return true
}}function checkWindowSize(){if(($(".ajaxswingv4").length>1)&&isBodyHasScrollbars()){return
}if((!window.ajaxSwingLastClientWidth)||(window.ajaxSwingLastClientWidth==0)){if(document.getElementById("NoWindowsVisible")){return
}submitResize()
}else{if(Math.abs(window.ajaxSwingLastClientWidth-getClientWidth())>3||Math.abs(window.ajaxSwingLastClientHeight-getClientHeight())>3){submitResize()
}}}function postSubmitSetFocus(){}function processJsonResponse(data){setUpdateInterval(data.updateInterval);
if(data.update==true){var request={};
request.keepSessionAlive=ajaxSwingKeepSessionAlive;
v4Submit("/update/global/");
return
}var v4FocusedValue=null;
var v4InputFocusedValue=null;
if(!(v4Focused=="global")){if(document.getElementById(v4Focused)){v4FocusedValue=$("#"+v4Focused).val();
var $focusedInput=$("#"+v4Focused+"Input");
$focusedInput.attr("v4PreExisting","true");
v4InputFocusedValue=$focusedInput.val();
v4FocusedLastCaretPosition=getInputCaretPos($focusedInput)
}}if(data.urlForOpenInNewTab!=null&&data.urlForOpenInNewTab!=""){open(data.urlForOpenInNewTab)
}var state,parent,element;
if(data.downloadFileURLs!=null){if(data.errorMessage==null){data.downloadFileURLs.forEach(function(entry){open(entry+"&csrfToken="+document.AjaxSwingForm.__csrfToken.value)
})
}}for(var i=0;
i<data.actionableComponentStates.length;
i++){state=data.actionableComponentStates[i];
parent=null;
element=null;
if(state.action==1||state.action==3){if($("[id='"+state.componentId+"'").length>1){if(state.parentId!=null&&state.parentId!=""){var $elements=$("#"+state.parentId).find("#"+state.componentId);
if($elements.length==1){element=$elements.get(0)
}}}if(element==null){element=document.getElementById(state.componentId)
}if((!element||element==null)){if(state.action==1){if(!getConfigurationParameter("agent.productionMode")=="true"){showErrorMessage("Error during delete, unable to find element with id "+state.componentId)
}else{refreshPage();
return
}}}else{removeElement(element)
}}if(state.action==2||state.action==3){if(state.action==2||parent==null){parent=document.getElementById(state.parentId)
}if(!parent||parent==null){if(!getConfigurationParameter("agent.productionMode")=="true"){showErrorMessage("Error during insert, unable to find parent element with id "+state.parentId+", html = "+state.html)
}else{refreshPage();
return
}}else{$.isReady=false;
$.readyList=[];
$(parent).append(state.html);
$.ready()
}}}if(data.errorMessage!=null){if(data.redirectURL!=null){showErrorMessageUI(data.errorMessage,ajaxSwingErrorStatus,data.errorMessageDetails,data.errorMessageTitle,data);
ajaxSwingErrorStatus=ajaxSwingErrorStatus+1
}else{showErrorMessageUI(data.errorMessage,0,data.errorMessageDetails,data.errorMessageTitle,data)
}}if(data.redirectURL!=null){if(data.errorMessage==null){window.location=data.redirectURL
}}else{checkWindowSize()
}if(data.activeWindowId&&((AjaxSwingV4ActiveWindowId!=data.activeWindowId)||(!$("#"+data.activeWindowId).is(":last-child")))){if($("#"+data.activeWindowId).find("iframe").length<=0&&$("#"+data.activeWindowId).find("frame").length<=0){$("#"+data.activeWindowId).appendTo($("#"+data.activeWindowId).parent())
}AjaxSwingV4ActiveWindowId=data.activeWindowId;
$(".window[windowtitle]").last().each(function(index){try{document.title=$(this).attr("windowtitle")
}catch(ex){}})
}if(data.script!=null&&data.script!=""){$.globalEval(data.script)
}if(data.focusedComponentId&&((AjaxSwingV4ActiveFocusedId!=data.focusedComponentId)||AjaxSwingV4ForceActiveFocus)){var caretLocated=false;
if(v4FocusedValue){$("#"+v4Focused).val(v4FocusedValue)
}if(v4InputFocusedValue&&$("#"+v4Focused+"Input").attr("v4PreExisting")!="true"&&(v4Focused+"Input")!=enterInTextFieldPressed){$("#"+v4Focused+"Input").val(v4InputFocusedValue);
if(!isNaN(v4FocusedLastCaretPosition)){inputCaretToPos($("#"+v4Focused+"Input"),v4FocusedLastCaretPosition);
caretLocated=true
}}var el=document.getElementById(data.focusedComponentId+"Input");
if(!$("#"+data.focusedComponentId+"Input").is(":focus")){$("input#"+data.focusedComponentId+"Input").focus();
$("textarea#"+data.focusedComponentId+"Input").focus();
if(el&&$(el).attr("type")!="password"&&!caretLocated){inputCaretToEnd(el)
}}AjaxSwingV4ActiveFocusedId=data.focusedComponentId
}if(proceedDelayValidate&&delayValidationElements.length>0){validationElements=validationElements.concat(delayValidationElements);
proceedDelayValidate=false;
delayValidationElements.length=0
}for(var i=0;
i<validationElements.length;
i++){try{var ui=validationElements[i];
var current=ui.helper;
if($("#AjaxSwingScreen").find(current).length>0){if(ui.originalPosition){var restoreLeft=false;
var restoreTop=false;
if(current.hasClass("ui-resizable")){var direction=current.resizable("option","handles");
if(direction){restoreLeft=direction.search("e")||direction.search("w");
restoreTop=direction.search("n")||direction.search("s")
}else{restoreLeft=true;
restoreTop=true
}}if(current.hasClass("ui-draggable")){var axis=current.draggable("option","axis");
if(axis){if(axis==="x"){restoreLeft=true
}if(axis==="y"){restoreTop=true
}}else{restoreLeft=true;
restoreTop=true
}}if(restoreLeft){current.css("left",ui.originalPosition.left+"px")
}if(restoreTop){current.css("top",ui.originalPosition.top+"px")
}}if(ui.originalSize){current.css("width",ui.originalSize.width+"px");
current.css("height",ui.originalSize.height+"px")
}}}catch(error){}}validationElements.length=0;
var viewportRE=/(#JViewport_\d*)/g;
if(viewportRE.test(data.script)){var viewports=data.script.match(viewportRE);
viewports.forEach(function(index){var viewport=$(index);
viewport.attr("ajsScrollLeftStartPos",viewport.scrollLeft());
viewport.attr("ajsScrollTopStartPos",viewport.scrollTop())
})
}if(window.tinymce&&(tinyMCENeedInit||data.actionableComponentStates.length>0)){tinymce.remove();
tinymce.init({selector:".text-html textarea",menubar:false,toolbar:false,statusbar:false,autofocus:true,setup:function(ed){ed.on("blur",function(e){onRichInputTextChanged(ed.id)
})
}});
tinyMCENeedInit=false
}}function onRichInputTextChanged(id){if(window.tinymce&&tinymce.get(id)){var content=tinymce.get(id).getContent({format:"raw"});
var input=document.getElementById(id);
if(input){var val=$(input).attr("value");
if(val!=content){tinymce.get(id).save();
v4Focused=$(input).attr("name");
onInputTimeout(id)
}}}}function pingSession(keepSessionAlive){if(ajaxSwingSubmitAction!=null){if(ajaxSwingUpdateSeconds>5000){setTimeout("pingSession("+keepSessionAlive+")",2000)
}return
}if(ajaxSwingPingActive==true){return
}ajaxSwingPingActive=true;
var data={};
data.keepSessionAlive=keepSessionAlive;
doFastSubmit("ping",data,onPingAjaxComplete)
}function notifyBeforeSessionExpiration(message){if(ajaxSwingSessionExpirationInterval!=null){clearInterval(ajaxSwingSessionExpirationInterval);
ajaxSwingSessionExpirationInterval=null
}if(confirm(message)){pingSession(true);
resetSessionExpirationInterval()
}}function setUpdateInterval(updateSeconds){if(updateSeconds!=ajaxSwingUpdateSeconds||updateSeconds==0){if(ajaxSwingUpdateInterval!=null){clearInterval(ajaxSwingUpdateInterval);
ajaxSwingUpdateInterval=null
}ajaxSwingUpdateSeconds=updateSeconds;
if(updateSeconds!=0){ajaxSwingUpdateInterval=setInterval("pingSession("+ajaxSwingKeepSessionAlive+")",updateSeconds*1000)
}}}function scheduleSubmitResize(){submitResize()
}function submitResize(){window.ajaxSwingLastClientWidth=getClientWidth();
window.ajaxSwingLastClientHeight=getClientHeight();
v4Submit("/resize/global/"+getClientWidth()+"_"+getClientHeight())
}function initializeAndSubmit(){var value="";
value+=getClientWidth();
value+=","+getClientHeight();
var rightNow=new Date();
var date1=new Date(rightNow.getFullYear(),0,1,0,0,0,0);
var date2=new Date(rightNow.getFullYear(),6,1,0,0,0,0);
value+=","+(-rightNow.getTimezoneOffset());
value+=","+(-date1.getTimezoneOffset());
value+=","+(-date2.getTimezoneOffset());
var ajaxswingInput=document.getElementById("AjaxSwingInitData");
ajaxswingInput.setAttribute("value",value);
document.AjaxSwingForm.submit()
}function refreshPage(){window.location=window.location
}function cancelBubbleEvent(e){if(!e){e=window.event
}if(e){var target;
if(e.target){target=e.target
}else{target=e.srcElement
}if(target&&($(target).prop("tagName")=="INPUT")&&($(target).attr("type")=="file")){e.stopClickSubmit=true;
return true
}e.cancelBubble=true;
if(e.preventDefault){e.preventDefault()
}if(e.stopPropagation){e.stopPropagation()
}}return false
}function showErrorMessage(message,title){showErrorMessageUI(message,0,null,title,null)
}function handleJavascriptError(msg,url,line){showErrorMessageUI(getI18NMessage("javascript.internal_error.text",[msg,line]),0,null,null,null);
return true
}function showErrorMessageUI(message,statusCount,details,title,data){if(getConfigurationParameter("agent.productionMode")=="true"&&console){console.log(message+" \n"+details)
}else{alert(message+" \n"+details)
}return
}function getConfigurationParameter(paramKey){var result=configurationBundle[paramKey];
if(!result){result=paramKey
}return result
}function getI18NMessage(messageKey,args){var result=messageBundle[messageKey];
if(!result){return messageKey
}if(args){for(x in args){result=result.replace("{"+x+"}",args[x])
}}return result
}function v4(query){return $(query).not(".v4init").addClass("v4init")
}function submitFirstFromQueue(){var queue=mouseEnterCallback.mouseEnterEventsQueue;
if(queue.length==0){return
}var event=queue.shift();
submitMouseEvent(event.componentName,event,"/mouseEnter/",submitFirstFromQueue)
}function mouseEnterCallback(event){var queue=mouseEnterCallback.mouseEnterEventsQueue=mouseEnterCallback.mouseEnterEventsQueue||[];
var componentName=event.componentName=this.id;
var length=queue.length;
if(mouseEnterCallback.previousComponentName!=componentName){if(length==0||queue[length-1].componentName!=componentName){queue.push(event);
submitFirstFromQueue()
}mouseEnterCallback.previousComponentName=componentName
}}function initV4(){if(!(getConfigurationParameter("agent.allowTextSelection")==="true")){document.onselectstart=function(){return $("#"+v4Focused+"Input:focus").length>0
}
}if(!legacy){v4(".DefaultTableCellHeaderRenderer, .TableHeaderRenderer, .TableSortHeaderRenderer, .SortHeaderRenderer, .VSGrid_GridColumnHeaderRenderer, .ABGrid_BasisMultiSelectHeader_MultiSelectHeaderRenderer").each(function(index){var $el=$(this).children(".vl").first();
if($(this).hasClass("TableSortHeaderRenderer")){$el=$(this).children(".vl").last().prevAll(".vl").first()
}var position=$(this).position();
var elposition=$el.position();
if(elposition){position.left=position.left+elposition.left;
position.top=position.top+elposition.top;
$outer=$('<div style="position:absolute;width:6px;margin-left:-3px;left:'+position.left+"px;top:"+position.top+'px;cursor:e-resize;"></div>');
$outer.css("height",$el.css("height")).draggable({cursor:"default",axis:"x",zIndex:2,stop:validateElement});
$el.css("margin-left","3px").css("left","0px").css("top","0px");
$outer.append($el);
$(this).parent().append($outer)
}else{$outer=$('<div style="position:absolute;width:6px;margin-left:-3px;left:'+position.left+"px;top:"+position.top+'px;cursor:e-resize;"></div>');
$outer.css("height",$(this).height()+"px").draggable({cursor:"default",axis:"x",zIndex:2,stop:validateElement});
$el.css("margin-left","3px").css("left","0px").css("top","0px");
$outer.append($el);
$(this).parent().append($outer)
}});
v4(".JSliderEnabledHorizontal .htmlImage").css("cursor","move").draggable({cursor:"default",containment:"parent",axis:"x",stop:validateElement});
v4(".JSliderEnabledVertical .htmlImage").css("cursor","move").draggable({cursor:"default",axis:"y",stop:validateElement});
v4(".JScrollBarEnabledHorizontal .thumb").css("cursor","default").draggable({cursor:"default",containment:"parent",axis:"x",stop:validateElement,drag:scrollBarDrag,start:startScrollBarDrag});
v4(".JScrollBarEnabledVertical .thumb").css("cursor","default").draggable({cursor:"default",containment:"parent",axis:"y",stop:validateElement,drag:scrollBarDrag,start:startScrollBarDrag});
v4(".JDividerEnabledHorizontal").css("cursor","n-resize").draggable({cursor:"default",axis:"y",zIndex:2,stop:validateElement});
v4(".JDividerEnabledVertical").css("cursor","e-resize").draggable({cursor:"default",axis:"x",zIndex:2,stop:validateElement});
if(!AjaxSwingV4JProgressUpdater){if($(".JProgressBar").size()>0){AjaxSwingV4JProgressUpdater=setInterval("pingJProgressBar()",4500)
}$("[data-mouse-enter]").unbind("mouseenter",mouseEnterCallback);
$("[data-mouse-enter]").mouseenter(mouseEnterCallback)
}}v4("div.window").each(function(index){var startFunction=function(event,ui){$(".Popup_HeavyWeightWindow").hide();
$(".BasicComboPopup").hide()
};
$(this).children(".titlePane").parent().draggable({cursor:"move",handle:".titlePane",start:startFunction,stop:validateElement});
$(this).children(".JRootPane").children(".JLayeredPane").children(".titlePane").parent().parent().parent().draggable({cursor:"move",handle:".titlePane",start:startFunction,stop:validateElement})
}).each(function(index){if($(this).hasClass("modal")){var top="-"+$(this).offset().top;
var left="-"+$(this).offset().left;
var width=$("#AjaxSwingScreen").width();
var height=$("#AjaxSwingScreen").height();
var style="background-image:url('"+getDocsURL()+"/images/com/creamtec/ajaxswing/laf/icons/blockui.png');";
$(this).before('<div style="position:absolute;left:'+left+"px;top:"+top+"px;width:"+width+"px;height:"+height+"px;"+style+'"></div>')
}}).each(function(index){if(!legacy){var top=$(this).attr("top");
var left=$(this).attr("left");
var width=$(this).attr("width");
var height=$(this).attr("height");
if(((parseInt(width)+5)<getClientWidth())&&((parseInt(height)+5)<getClientHeight())){var style="margin-top:4px;margin-left:4px;background-image:url('"+getDocsURL()+"/images/com/creamtec/ajaxswing/laf/icons/shadow.png');";
$(this).prepend('<div style="position:absolute;left:'+left+"px;top:"+top+"px;width:"+width+"px;height:"+height+"px;"+style+'"></div>')
}}});
v4("#rootContainer iframe").bind("load",function(e){processIFrameOnLoadEvent(e);
customOnIFrameLoaded(e)
});
v4("#rootContainer > .ajaxswingv4").bind("mousedown",function(e){var target=e.target||e.srcElement;
if((target.nodeName=="INPUT")||(target.nodeName=="TEXTAREA")||(target.parentElement&&(target.parentElement.className.indexOf("JTextComponent")!=-1))){return true
}if(e.which==1){var comp=this;
this.dragStart=e;
this.dragStartX=$(this).position().left;
this.dragStartY=$(this).position().top;
this.offsetX=$(this).offset().left;
this.offsetY=$(this).offset().top;
var dragStartAbs={x:e.pageX,y:e.pageY};
var f_mouseup=(function(e){$(document).unbind("mouseup",f_mouseup);
var sX=(comp.dragStart.pageX-comp.offsetX);
var sY=(comp.dragStart.pageY-comp.offsetY);
var tX=sX+e.pageX-comp.dragStart.pageX;
var tY=sY+e.pageY-comp.dragStart.pageY;
var startTarget=comp.dragStart.target||comp.dragStart.srcElement;
if(startTarget!=undefined&&startTarget!=null){var $startTarget=$(startTarget);
var relativeMousePos={x:dragStartAbs.x-$startTarget.offset().left,y:dragStartAbs.y-$startTarget.offset().top};
var elSize={width:$startTarget.width(),height:$startTarget.height()};
var elClientSize={width:$startTarget.prop("clientWidth"),height:$startTarget.prop("clientHeight")};
if(((elClientSize.width<elSize.width)&&(relativeMousePos.x>elClientSize.width))||((elClientSize.height<elSize.height)&&(relativeMousePos.y>elClientSize.height))){return true
}if((Math.abs(sX-tX)>10)||(Math.abs(sY-tY)>10)||($startTarget.hasClass("ui-draggable"))||($startTarget.parent().hasClass("ui-draggable"))){var oldClick=$(comp).attr("onclick");
$(comp).attr("onclick","return false");
v4Submit("/dragXY/"+comp.id+"/"+sX+"_"+sY+"_"+tX+"_"+tY);
window.setTimeout(function(){if(oldClick===undefined){$(comp).removeAttr("onclick")
}else{$(comp).attr("onclick",oldClick)
}},100)
}}comp.dragStart=0;
return false
});
$(document).bind("mouseup",f_mouseup)
}}).click(processMouseClickRoot).dblclick(function(event){if(!submitMouseClickRoot(this.id,event,"2")&&legacy8){clearSelection()
}return false
});
$("[heavy-panel]").click(processMouseClickRoot);
$("#upload_ok").off("click").click(function(event){return onUploadClicked()
});
$("#upload_cancel").off("click").click(function(event){return onUploadCancelClicked()
})
}function startScrollBarDrag(event,ui){var viewportId=ui.helper.attr("scrollViewportId");
if(viewportId){$("#"+viewportId).children().css("position","absolute").css("top","0").css("left","0")
}}function scrollBarDrag(event,ui){var viewportId=ui.helper.attr("scrollViewportId");
if(viewportId){var currentViewportContent=$("#"+viewportId).children();
var axis=ui.helper.draggable("option","axis");
if(axis==="y"){var pos=Math.floor((ui.originalPosition.top-ui.position.top)*(ui.helper.attr("scrollWidthPerPxY")));
currentViewportContent.css("top",pos+"px")
}else{if(axis==="x"){var pos=Math.floor((ui.originalPosition.left-ui.position.left)*(ui.helper.attr("scrollWidthPerPxX")));
currentViewportContent.css("left",pos+"px")
}}}}function pingJProgressBar(){if($(".JProgressBar").size()>0){v4Submit("/update/global/")
}else{clearInterval(AjaxSwingV4JProgressUpdater)
}}function disableDragging(e){if(e.preventDefault){e.preventDefault()
}}function onAjaxSwingScroll(pane,submitId){if(pane.ajaxSwingAjaxScrollTimeout){clearTimeout(pane.ajaxSwingAjaxScrollTimeout)
}pane.ajaxSwingAjaxScrollTimeout=setTimeout(function(){onAjaxSwingSubmitScroll(pane,submitId)
},370)
}function onAjaxSwingSubmitScroll(pane,submitId){if(pane){if(!pane.oldScrollLeft){if(pane.oldScrollLeft!=0){pane.oldScrollLeft=pane.scrollLeft;
pane.oldScrollTop=pane.scrollTop
}}if((pane.scrollLeft!=pane.oldScrollLeft)||(pane.scrollTop!=pane.oldScrollTop)){v4Submit("/scroll/"+submitId+"/"+pane.scrollLeft+"_"+pane.scrollTop)
}pane.oldScrollLeft=pane.scrollLeft;
pane.oldScrollTop=pane.scrollTop
}}function inputCaretToEnd(txt){if(txt.createTextRange){var FieldRange=txt.createTextRange();
FieldRange.moveStart("character",txt.value.length);
FieldRange.collapse();
FieldRange.select()
}else{$(txt).focus();
if(txt.setSelectionRange){var len=$(txt).val().length*2;
txt.setSelectionRange(len,len)
}else{$(txt).val($(txt).val())
}}}function inputCaretToPos(el,caretPos){if(!el){return
}if(el.length&&el.length>0){el=el[0]
}if("selectionStart" in el){el.selectionStart=caretPos;
el.selectionEnd=caretPos
}else{if(document.selection){el.focus();
setSelection(el,caretPos,caretPos)
}}}function getInputCaretPos(el){if(!el){return
}if(el.length&&el.length>0){el=el[0]
}if("selectionStart" in el){return el.selectionStart
}else{if(document.selection){el.focus();
var fieldRange=document.selection.createRange();
var selLen=document.selection.createRange().text.length;
fieldRange.moveStart("character",-el.value.length);
return fieldRange.text.length-selLen
}}}function offsetToRangeCharacterMove(el,offset){return offset-(el.value.slice(0,offset).split("\r\n").length-1)
}function setSelection(el,startOffset,endOffset){var range=el.createTextRange();
var startCharMove=offsetToRangeCharacterMove(el,startOffset);
range.collapse(true);
if(startOffset==endOffset){range.move("character",startCharMove)
}else{range.moveEnd("character",offsetToRangeCharacterMove(el,endOffset));
range.moveStart("character",startCharMove)
}range.select()
}function validateFieldNumeric(id){$("#"+id).keydown(function(event){return(event.ctrlKey||event.altKey||(47<event.keyCode&&event.keyCode<58&&event.shiftKey==false)||(95<event.keyCode&&event.keyCode<106)||(event.keyCode==8)||(event.keyCode==9)||(event.keyCode>34&&event.keyCode<40)||(event.keyCode==46))
})
}function validateFieldMac(id){$("#"+id).attr("maxlength","17").keydown(function(event){var l=$(this).val().length;
if(event.keyCode>=48&&event.keyCode<=70){if((l==2)||(l==(4+1))||(l==(6+2))||(l==(8+3))||(l==(10+4))){$(this).val($(this).val()+"-");
inputCaretToEnd(this)
}}return(event.ctrlKey||event.altKey||(47<event.keyCode&&event.keyCode<58&&event.shiftKey==false)||(95<event.keyCode&&event.keyCode<106)||(event.keyCode==8)||(event.keyCode==9)||(event.keyCode>34&&event.keyCode<40)||(event.keyCode>=65&&event.keyCode<=70)||(event.keyCode==46)||(event.keyCode==109)||(event.keyCode==189))
})
}function clearSelection(){if(document.selection&&document.selection.empty){document.selection.empty()
}else{if(window.getSelection){var sel=window.getSelection();
sel.removeAllRanges()
}}}function scrollLeft(element,value){$(element).scrollLeft(value)
}function scrollTop(element,value){$(element).scrollTop(value)
}function scrollTableHeaderLeft(headerViewPortElement,value){var firstElementsPosX;
$(headerViewPortElement).children().first().children().each(function(index){if($(this).css("left").search("px")!=-1){var originalPosX=$(this).position().left;
if(firstElementsPosX===undefined){firstElementsPosX=Math.abs(originalPosX)
}var newPosX=Math.abs(originalPosX+firstElementsPosX)-value;
$(this).css({left:newPosX+"px"})
}})
}function scrollTableHeaderTop(headerViewPortElement,value){$(headerViewPortElement).scrollTop(value)
};