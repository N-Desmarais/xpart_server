(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33c7a57e"],{"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("a630"),n("fb6a"),n("b0c0"),n("d3b7"),n("25f0"),n("3ca3");function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},1585:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"SignUp"},on:{submit:function(t){t.preventDefault()}}},[n("sui-container",{attrs:{centered:""}},[n("sui-grid",{attrs:{middle:"",aligned:"",padded:!0,id:"Grid"}},[n("sui-grid-column",{staticStyle:{width:"500px"},attrs:{centered:!0}},[n("sui-segment",{staticStyle:{background:"#F8F8F9"}},[n("center",[n("div",{staticStyle:{margin:"0em 0em 1em"},attrs:{id:"Title"}},[t._v("New Project: "),n("br")])]),n("sui-form",[n("center",[n("sui-form-field",{staticStyle:{margin:"0em 0em 2em",width:"300px"}},[n("label",[t._v("Project Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.data.name,expression:"data.name"}],domProps:{value:t.data.name},on:{change:t.CheckRequired,input:function(e){e.target.composing||t.$set(t.data,"name",e.target.value)}}})]),n("sui-form-field",{staticStyle:{margin:"0em 0em 2em",width:"300px"}},[n("label",[t._v("Project Code")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.data.code,expression:"data.code"}],attrs:{maxlength:"4",id:"CAPS"},domProps:{value:t.data.code},on:{change:t.CheckRequired,input:function(e){e.target.composing||t.$set(t.data,"code",e.target.value)}}})]),n("sui-form-field",{staticStyle:{margin:"0em 0em 2em",width:"200px"}},[n("label",[t._v("Project Owner")]),n("sui-dropdown",{attrs:{selection:"",options:t.users},on:{input:t.CheckRequired},model:{value:t.data.owner,callback:function(e){t.$set(t.data,"owner",e)},expression:"data.owner"}})],1),n("sui-button",{staticStyle:{margin:"0em .5em 0em"},attrs:{disabled:!t.submittable,color:"green",content:"Create"},on:{click:t.createProj}}),n("router-link",{attrs:{to:"/documents"}},[n("sui-button",{staticStyle:{margin:"0em .5em 0em"},attrs:{color:"red",content:"Cancel"}})],1)],1)],1)],1)],1)],1)],1)],1)},a=[],o=(n("b0c0"),n("b85c")),i=n("1f57"),c=n("df33"),u={name:"ProjectCreate",data:function(){return{submittable:!1,users:[],data:{name:null,code:null,owner:null}}},methods:{createProj:function(){var t=this;c["a"].create(this.data).then((function(e){200==e.status&&t.$router.push({name:"Documents"})})).catch((function(t){console.error(t)}))},retrieveUsers:function(){var t=this;i["a"].getAll().then((function(e){var n,r=Object(o["a"])(e.data);try{for(r.s();!(n=r.n()).done;){var a=n.value;t.users.push({text:"".concat(a.name),value:a.user_id})}}catch(i){r.e(i)}finally{r.f()}})).catch((function(t){console.error(t)}))},CheckRequired:function(){this.data.name&&this.data.code&&this.data.owner?this.submittable=!0:this.submittable=!1}},mounted:function(){try{this.retrieveUsers()}catch(t){console.error("Error response:"),console.error(t)}}},s=u,l=(n("a9b2"),n("2877")),d=Object(l["a"])(s,r,a,!1,null,"4c97c191",null);e["default"]=d.exports},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),a=n("825a"),o=n("d039"),i=n("ad6d"),c="toString",u=RegExp.prototype,s=u[c],l=o((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),d=s.name!=c;(l||d)&&r(RegExp.prototype,c,(function(){var t=a(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in u)?i.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,a=n("69f3"),o=n("7dd0"),i="String Iterator",c=a.set,u=a.getterFor(i);o(String,"String",(function(t){c(this,{type:i,string:String(t),index:0})}),(function(){var t,e=u(this),n=e.string,a=e.index;return a>=n.length?{value:void 0,done:!0}:(t=r(n,a),e.index+=t.length,{value:t,done:!1})}))},"43ff":function(t,e,n){},"4df4":function(t,e,n){"use strict";var r=n("0366"),a=n("7b0b"),o=n("9bdd"),i=n("e95a"),c=n("50c4"),u=n("8418"),s=n("35a1");t.exports=function(t){var e,n,l,d,f,v,m=a(t),p="function"==typeof this?this:Array,b=arguments.length,h=b>1?arguments[1]:void 0,g=void 0!==h,y=s(m),S=0;if(g&&(h=r(h,b>2?arguments[2]:void 0,2)),void 0==y||p==Array&&i(y))for(e=c(m.length),n=new p(e);e>S;S++)v=g?h(m[S],S):m[S],u(n,S,v);else for(d=y.call(m),f=d.next,n=new p;!(l=f.call(d)).done;S++)v=g?o(d,h,[l.value,S],!0):l.value,u(n,S,v);return n.length=S,n}},6547:function(t,e,n){var r=n("a691"),a=n("1d80"),o=function(t){return function(e,n){var o,i,c=String(a(e)),u=r(n),s=c.length;return u<0||u>=s?t?"":void 0:(o=c.charCodeAt(u),o<55296||o>56319||u+1===s||(i=c.charCodeAt(u+1))<56320||i>57343?t?c.charAt(u):o:t?c.slice(u,u+2):i-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"9bdd":function(t,e,n){var r=n("825a"),a=n("2a62");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(i){throw a(t),i}}},a630:function(t,e,n){var r=n("23e7"),a=n("4df4"),o=n("1c7e"),i=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:i},{from:a})},a9b2:function(t,e,n){"use strict";n("43ff")},b0c0:function(t,e,n){var r=n("83ab"),a=n("9bf2").f,o=Function.prototype,i=o.toString,c=/^\s*function ([^ (]*)/,u="name";r&&!(u in o)&&a(o,u,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},b85c:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");var r=n("06c5");function a(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=Object(r["a"])(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){u=!0,i=t},f:function(){try{c||null==n["return"]||n["return"]()}finally{if(u)throw i}}}}},d28b:function(t,e,n){var r=n("746f");r("iterator")},ddb0:function(t,e,n){var r=n("da84"),a=n("fdbc"),o=n("e260"),i=n("9112"),c=n("b622"),u=c("iterator"),s=c("toStringTag"),l=o.values;for(var d in a){var f=r[d],v=f&&f.prototype;if(v){if(v[u]!==l)try{i(v,u,l)}catch(p){v[u]=l}if(v[s]||i(v,s,d),a[d])for(var m in o)if(v[m]!==o[m])try{i(v,m,o[m])}catch(p){v[m]=o[m]}}}},df33:function(t,e,n){"use strict";var r=n("d4ec"),a=n("bee2"),o=n("bb36"),i=function(){function t(){Object(r["a"])(this,t)}return Object(a["a"])(t,[{key:"getAll",value:function(){return o["a"].get("/projects")}},{key:"get",value:function(t){return o["a"].get("/projects/".concat(t))}},{key:"create",value:function(t){return o["a"].post("/projects",t)}},{key:"update",value:function(t,e){return o["a"].put("/projects/".concat(t),e)}},{key:"delete",value:function(t){return o["a"].delete("/projects/".concat(t))}},{key:"deleteAll",value:function(){return o["a"].delete("/projects")}}]),t}();e["a"]=new i},e01a:function(t,e,n){"use strict";var r=n("23e7"),a=n("83ab"),o=n("da84"),i=n("5135"),c=n("861d"),u=n("9bf2").f,s=n("e893"),l=o.Symbol;if(a&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(d[e]=!0),e};s(f,l);var v=f.prototype=l.prototype;v.constructor=f;var m=v.toString,p="Symbol(test)"==String(l("test")),b=/^Symbol\((.*)\)[^)]+$/;u(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=m.call(t);if(i(d,t))return"";var n=p?e.slice(7,-1):e.replace(b,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:f})}},fb6a:function(t,e,n){"use strict";var r=n("23e7"),a=n("861d"),o=n("e8b5"),i=n("23cb"),c=n("50c4"),u=n("fc6a"),s=n("8418"),l=n("b622"),d=n("1dde"),f=n("ae40"),v=d("slice"),m=f("slice",{ACCESSORS:!0,0:0,1:2}),p=l("species"),b=[].slice,h=Math.max;r({target:"Array",proto:!0,forced:!v||!m},{slice:function(t,e){var n,r,l,d=u(this),f=c(d.length),v=i(t,f),m=i(void 0===e?f:e,f);if(o(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?a(n)&&(n=n[p],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return b.call(d,v,m);for(r=new(void 0===n?Array:n)(h(m-v,0)),l=0;v<m;v++,l++)v in d&&s(r,l,d[v]);return r.length=l,r}})}}]);
//# sourceMappingURL=chunk-33c7a57e.e031426b.js.map