(function(e){function t(t){for(var a,r,c=t[0],i=t[1],u=t[2],m=0,p=[];m<c.length;m++)r=c[m],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==s[i]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},s={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vue-test/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"3a7d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Main")],1)},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("Form_comment"),n("div",{staticClass:"main__create-comment"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.body,expression:"body"}],staticClass:"main__textarea",attrs:{placeholder:"Оставьте свой комментарий..."},domProps:{value:e.body},on:{input:function(t){t.target.composing||(e.body=t.target.value)}}}),n("button",{staticClass:"main__button",on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Отправить")])]),n("div",{staticClass:"main__pagination"},e._l(e.totalPages,(function(t){return n("div",{key:t,staticClass:"main__page",class:{page_active:e.page===t},on:{click:function(n){return e.setPage(t)}}},[n("span",{staticClass:"main__page-span"},[e._v(e._s(t))])])})),0)],1)},c=[],i=n("5530"),u=n("2f62"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-comment"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.validMessages.length,expression:"!validMessages.length"}],staticClass:"form-comment__placeholder"},[e._v("Комментариев пока нет")]),e._l(e.validMessages,(function(t,s){return a("div",{key:t.id,staticClass:"form-comment__message"},[a("div",{staticClass:"form-comment__delete"},[a("img",{staticClass:"form-comment__create-icon",attrs:{src:n("d9bc"),alt:"close"},on:{click:function(t){return e.remove(s)}}})]),a("p",{staticClass:"text"},[e._v("Комментарий:")]),a("div",{staticClass:"form-comment__body"},[a("p",{staticClass:"form-comment__body-p"},[e._v(e._s(t.body))])])])}))],2)},m=[],p={name:"Form_comment",data:function(){return{title:"Form_comment",message:""}},computed:Object(u["c"])(["validMessages","messagesCount"]),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(u["b"])(["fetchMessages"])),Object(u["d"])(["deleteMessage"])),{},{remove:function(e){this.$store.commit("removeMessage",e),console.log(e)}})},d=p,f=(n("94c1"),n("2877")),g=Object(f["a"])(d,l,m,!1,null,"4dce14cc",null),v=g.exports,b={name:"Main",components:{Form_comment:v},data:function(){return{body:""}},computed:Object(u["c"])(["totalPages","page"]),methods:Object(i["a"])(Object(i["a"])({},Object(u["d"])(["createMessages","setPage"])),{},{submit:function(){this.createMessages({body:this.body}),this.body=""}})},_=b,h=(n("c266"),Object(f["a"])(_,r,c,!1,null,null,null)),y=h.exports,j={name:"App",components:{Main:y}},M=j,O=(n("034f"),Object(f["a"])(M,s,o,!1,null,null,null)),w=O.exports,P=n("bc3a"),x=n.n(P),C=n("2106"),k=n.n(C),S=n("2909"),T=n("1da1"),$=(n("96cf"),n("a434"),n("d3b7"),n("99af"),n("fb6a"),{state:{messages:[],page:1,perPage:3,totalPages:1},mutations:{updateMessages:function(e,t){e.messages=t},removeMessage:function(e,t){e.messages.splice(t,1),e.totalPages=Math.ceil(e.messages.length/e.perPage),window.scrollTo(0,0)},createMessages:function(e,t){e.messages.push(t),e.totalPages=Math.ceil(e.messages.length/e.perPage),e.page=e.totalPages,window.scrollTo(0,0),console.log(e.messages)},setPage:function(e,t){e.page=t,window.scrollTo(0,0)}},actions:{fetchMessages:function(e){var t=arguments;return Object(T["a"])(regeneratorRuntime.mark((function n(){var a,s,o,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.length>1&&void 0!==t[1]?t[1]:3,s=t.length>2&&void 0!==t[2]?t[2]:1,n.next=4,fetch("https://jsonplaceholder.typicode.com/comments?_limit=".concat(a,"&_start").concat(s));case 4:return o=n.sent,n.next=7,o.json();case 7:r=n.sent,e.commit("updateMessages",r);case 9:case"end":return n.stop()}}),n)})))()}},getters:{validMessages:function(e){var t=(e.page-1)*e.perPage,n=e.page*e.perPage,a=e.messages.slice(t,n);return Object(S["a"])(a)},allMessages:function(e){return e.messages},totalPages:function(e){return e.totalPages},page:function(e){return e.page},messagesCount:function(e,t){return t.validMessages.length}}});a["a"].use(u["a"]);var F=new u["a"].Store({modules:{comment:$}}),E=F;a["a"].use(k.a,x.a),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(w)},store:E}).$mount("#app")},"85ec":function(e,t,n){},"94c1":function(e,t,n){"use strict";n("e7d5")},c266:function(e,t,n){"use strict";n("3a7d")},d9bc:function(e,t,n){e.exports=n.p+"img/unnamed.2c5ef466.jpg"},e7d5:function(e,t,n){}});
//# sourceMappingURL=app.038b4bfd.js.map