(function(e){function t(t){for(var r,a,s=t[0],i=t[1],c=t[2],l=0,p=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(p.length)p.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function s(e){return i.p+"js/"+({"etat-tente":"etat-tente"}[e]||e)+"."+{"etat-tente":"59762321"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"etat-tente":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({"etat-tente":"etat-tente"}[e]||e)+"."+{"etat-tente":"ea12f575"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var c=u[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],f.parentNode.removeChild(f),n(u)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var p=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/tentesjs/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"517c":function(e,t,n){"use strict";var r=n("75b0"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("14c6"),n("08c1"),n("4842"),n("d9fc");var r=n("2b0e"),a=n("a65d"),o=n.n(a),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade"}},[e.$store.state.loading?n("div",{staticClass:"d-flex flex-column align-items-center justify-content-center",attrs:{id:"loader"}},[n("a-spin",[n("a-icon",{staticStyle:{"font-size":"24px"},attrs:{slot:"indicator",type:"loading",spin:""},slot:"indicator"})],1)],1):e._e()]),n("div",{staticClass:"blurrer",class:{active:e.$store.state.loading}},[n("router-view")],1)],1)},s=[],i=(n("805a"),n("0c63")),c=(n("0c1d"),n("8592")),l={components:{aSpin:c["a"],aIcon:i["a"]}},p=l,f=(n("517c"),n("2877")),d=Object(f["a"])(p,u,s,!1,null,"6253d490",null),m=d.exports,h=n("8c4f"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container home d-flex justify-content-center align-items-center flex-column"},[r("img",{attrs:{src:n("ae33")}}),r("h1",{staticClass:"text-center"},[e._v("Tentes BS")]),r("p",{staticClass:"text-muted text-center pl-3 pr-3"},[e._v("\n        Remplissage des feuilles d'état de tentes en ligne rapidement et simplement\n    ")]),r("a-input",{attrs:{placeholder:"Nom d'utilisateur"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),r("a-input",{staticClass:"mt-2 mb-2",attrs:{placeholder:"Mot de passe",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("a-button",{attrs:{block:"",type:"primary"},on:{click:e.login}},[e._v("Commencer")])],1)},g=[],b=(n("96cf"),n("3b8d")),w=(n("e1f5"),n("5efb")),y=(n("a71a"),n("b558")),k={components:{aInput:y["a"],aButton:w["a"]},data:function(){return{username:null,password:null}},methods:{login:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,n,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this.username,n=this.password,this.$store.dispatch("logIn",{username:t,password:n}).then((function(e){e?r.$router.push("/etat"):r.$toasted.show("Mot de passe incorrect",{type:"error"})}));case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},x=k,j=(n("c5b7"),Object(f["a"])(x,v,g,!1,null,"70ba3b58",null)),O=j.exports;r["a"].use(h["a"]);var R=new h["a"]({mode:"history",base:"/tentesjs/",routes:[{path:"/",name:"home",component:O},{path:"/etat",name:"etat",component:function(){return n.e("etat-tente").then(n.bind(null,"abb9"))}}]}),_=(n("ac6a"),n("2f62")),S=n("d225"),C=n("b0b4"),E=n("bc3a"),P=n.n(E),T=function(){function e(){Object(S["a"])(this,e),this.secureInstance=P.a.create({baseURL:"".concat("https://netbs.sauvabelin.ch/","app_dev.php/api/v1/netBS/")})}return Object(C["a"])(e,[{key:"get",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.secureInstance.get(t,{headers:{"X-Authorization":"Bearer ".concat(n)}}));case 1:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"post",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.secureInstance.post(t,r,{headers:{"X-Authorization":"Bearer ".concat(n)}}));case 1:case"end":return e.stop()}}),e,this)})));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:"login",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.secureInstance.post("gettoken",{username:t,password:n}));case 1:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}(),$=new T;r["a"].use(_["a"]);var A=new _["a"].Store({state:{step:0,models:[],groupes:[],model:null,loading:!1,formValues:[],token:null},getters:{model:function(e){return null===e.model?null:e.models[e.model]}},mutations:{step:function(e,t){e.step=t},setFormValues:function(e,t){var n=e.step;if(e.formValues.length<n)for(var r=e.formValues.length;r<n;r+=1)e.formValues[r]=null;e.formValues[n]=t},clear:function(e){e.step=0,e.models.splice(0),e.groupes.splice(0),e.model=null,e.formValues.splice(0)},loading:function(e,t){e.loading=t},model:function(e,t){e.model=t},models:function(e,t){e.models.splice(0),t.forEach((function(t){return e.models.push(t)}))},groupes:function(e,t){e.groupes.splice(0),t.forEach((function(t){return e.groupes.push(t)}))},token:function(e,t){e.token=t}},actions:{run:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,o,u,s,i,c=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.state,a=t.commit,o=n.route,u=n.method,s=n.params,i=function(e){var t=e.response.status;return 401===t&&(c._vm.$toasted.show("Vous avez été déconnecté après une trop longue session"),a("token",null),R.push("/")),{data:[]}},"POST"!==u){e.next=5;break}return e.abrupt("return",$.post(o,r.token,s).catch(i));case 5:return e.abrupt("return",$.get(o,r.token).catch(i));case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),logIn:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,o,u,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=n.username,o=n.password,e.prev=2,e.next=5,$.login(a,o);case 5:return u=e.sent,s=u.data.token,r("token",s),e.abrupt("return",!0);case 11:return e.prev=11,e.t0=e["catch"](2),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));function t(t,n){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,n("clear"),n("token",null),R.push("/");case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),loadModels:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.dispatch,e.next=3,r("run",{route:"tente/feuille-etat/tente-model-form"});case 3:a=e.sent,a.data&&n("models",a.data);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),loadGroupes:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.dispatch,e.next=3,r("run",{route:"tente/feuille-etat/groupes"});case 3:a=e.sent,a.data&&n("groupes",a.data);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),sendFormData:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,r=t.dispatch,e.prev=1,e.next=4,r("run",{route:"tente/feuille-etat/submit",method:"POST",params:n.formValues});case 4:return e.abrupt("return",!0);case 7:return e.prev=7,e.t0=e["catch"](1),this._vm.$toasted.show("Une erreur est survenue, veuillez réessayer",{type:"error"}),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,this,[[1,7]])})));function t(t){return e.apply(this,arguments)}return t}()}});A.subscribeAction({before:function(){A.commit("loading",!0)},after:function(){A.commit("loading",!1)}});var I=A;n("c1c3");r["a"].use(o.a,{position:"bottom-center",duration:5e3}),r["a"].config.productionTip=!1,new r["a"]({router:R,store:I,render:function(e){return e(m)}}).$mount("#app")},"75b0":function(e,t,n){},ae33:function(e,t,n){e.exports=n.p+"img/logobs.fa8bb6d0.png"},b96d:function(e,t,n){},c1c3:function(e,t,n){},c5b7:function(e,t,n){"use strict";var r=n("b96d"),a=n.n(r);a.a}});
//# sourceMappingURL=app.e2baa8da.js.map