(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51d6c212"],{"06c5":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("a630"),n("fb6a"),n("b0c0"),n("d3b7"),n("25f0"),n("3ca3");function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},"25f0":function(e,t,n){"use strict";var r=n("6eeb"),o=n("825a"),a=n("d039"),i=n("ad6d"),c="toString",u=RegExp.prototype,s=u[c],l=a((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),f=s.name!=c;(l||f)&&r(RegExp.prototype,c,(function(){var e=o(this),t=String(e.source),n=e.flags,r=String(void 0===n&&e instanceof RegExp&&!("flags"in u)?i.call(e):n);return"/"+t+"/"+r}),{unsafe:!0})},3835:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return c}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");function o(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done);r=!0)if(n.push(i.value),t&&n.length===t)break}catch(u){o=!0,a=u}finally{try{r||null==c["return"]||c["return"]()}finally{if(o)throw a}}return n}}var a=n("06c5");function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){return r(e)||o(e,t)||Object(a["a"])(e,t)||i()}},"3ca3":function(e,t,n){"use strict";var r=n("6547").charAt,o=n("69f3"),a=n("7dd0"),i="String Iterator",c=o.set,u=o.getterFor(i);a(String,"String",(function(e){c(this,{type:i,string:String(e),index:0})}),(function(){var e,t=u(this),n=t.string,o=t.index;return o>=n.length?{value:void 0,done:!0}:(e=r(n,o),t.index+=e.length,{value:e,done:!1})}))},"4df4":function(e,t,n){"use strict";var r=n("0366"),o=n("7b0b"),a=n("9bdd"),i=n("e95a"),c=n("50c4"),u=n("8418"),s=n("35a1");e.exports=function(e){var t,n,l,f,d,h,v=o(e),p="function"==typeof this?this:Array,b=arguments.length,g=b>1?arguments[1]:void 0,m=void 0!==g,y=s(v),k=0;if(m&&(g=r(g,b>2?arguments[2]:void 0,2)),void 0==y||p==Array&&i(y))for(t=c(v.length),n=new p(t);t>k;k++)h=m?g(v[k],k):v[k],u(n,k,h);else for(f=y.call(v),d=f.next,n=new p;!(l=d.call(f)).done;k++)h=m?a(f,g,[l.value,k],!0):l.value,u(n,k,h);return n.length=k,n}},"4fad":function(e,t,n){var r=n("23e7"),o=n("6f53").entries;r({target:"Object",stat:!0},{entries:function(e){return o(e)}})},6547:function(e,t,n){var r=n("a691"),o=n("1d80"),a=function(e){return function(t,n){var a,i,c=String(o(t)),u=r(n),s=c.length;return u<0||u>=s?e?"":void 0:(a=c.charCodeAt(u),a<55296||a>56319||u+1===s||(i=c.charCodeAt(u+1))<56320||i>57343?e?c.charAt(u):a:e?c.slice(u,u+2):i-56320+(a-55296<<10)+65536)}};e.exports={codeAt:a(!1),charAt:a(!0)}},"6f53":function(e,t,n){var r=n("83ab"),o=n("df75"),a=n("fc6a"),i=n("d1e7").f,c=function(e){return function(t){var n,c=a(t),u=o(c),s=u.length,l=0,f=[];while(s>l)n=u[l++],r&&!i.call(c,n)||f.push(e?[n,c[n]]:c[n]);return f}};e.exports={entries:c(!0),values:c(!1)}},9652:function(e,t,n){"use strict";var r=n("d4ec"),o=n("bee2"),a=n("bb36"),i=function(){function e(){Object(r["a"])(this,e)}return Object(o["a"])(e,[{key:"getMaxPart",value:function(){return a["a"].get("/documents/maxpartnum")}},{key:"getAll",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!=e?a["a"].get("/documents"+e):a["a"].get("/documents")}},{key:"get",value:function(e){return a["a"].get("/documents/".concat(e))}},{key:"getClasses",value:function(){return a["a"].get("/documents/classes")}},{key:"create",value:function(e){return a["a"].post("/documents",e)}},{key:"update",value:function(e,t){return a["a"].put("/documents/".concat(e),t)}},{key:"delete",value:function(e){return a["a"].delete("/documents/".concat(e))}},{key:"deleteAll",value:function(){return a["a"].delete("/documents")}},{key:"findByProject",value:function(e){return a["a"].get("/documents?project=".concat(e))}}]),e}();t["a"]=new i},"99af":function(e,t,n){"use strict";var r=n("23e7"),o=n("d039"),a=n("e8b5"),i=n("861d"),c=n("7b0b"),u=n("50c4"),s=n("8418"),l=n("65f0"),f=n("1dde"),d=n("b622"),h=n("2d00"),v=d("isConcatSpreadable"),p=9007199254740991,b="Maximum allowed index exceeded",g=h>=51||!o((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),m=f("concat"),y=function(e){if(!i(e))return!1;var t=e[v];return void 0!==t?!!t:a(e)},k=!g||!m;r({target:"Array",proto:!0,forced:k},{concat:function(e){var t,n,r,o,a,i=c(this),f=l(i,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(a=-1===t?i:arguments[t],y(a)){if(o=u(a.length),d+o>p)throw TypeError(b);for(n=0;n<o;n++,d++)n in a&&s(f,d,a[n])}else{if(d>=p)throw TypeError(b);s(f,d++,a)}return f.length=d,f}})},"9bdd":function(e,t,n){var r=n("825a"),o=n("2a62");e.exports=function(e,t,n,a){try{return a?t(r(n)[0],n[1]):t(n)}catch(i){throw o(e),i}}},a3f9:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"data table",on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search()}}},[n("h1",[n("center",[e._v("Master Document List")])],1),n("sui-table",{attrs:{selectable:"",celled:""},on:{selectionChanged:function(t){e.selectedRows=t}}},[n("sui-table-header",[n("sui-table-row",[n("sui-table-header-cell",{attrs:{colspan:"14"}},[n("sui-menu",{staticStyle:{width:"max-content"}},[n("router-link",{attrs:{to:"/document_create"}},[n("sui-menu-item",{tag:"a",attrs:{icon:""}},[n("sui-icon",{attrs:{name:"plus"}})],1)],1),n("sui-menu-item",{tag:"a",attrs:{icon:""},on:{click:function(t){return e.editDoc(e.selectedRow)}}},[n("sui-icon",{attrs:{name:"pencil"}})],1),n("sui-menu-item",{tag:"a",attrs:{icon:""},on:{click:function(t){return e.deleteDoc(e.selectedRow)}}},[n("sui-icon",{attrs:{name:"trash"}})],1),n("sui-menu-item",{tag:"a",attrs:{icon:""},on:{click:function(t){return e.search()}}},[n("sui-icon",{attrs:{name:"search"}})],1)],1)],1)],1),n("sui-table-row",e._l(e.headers,(function(t,r){return n("sui-table-header-cell",{key:r},[e._v(" "+e._s(t)+" ")])})),1)],1),n("sui-table-header",[n("sui-table-row",e._l(e.filterInfo,(function(t,r){return n("sui-table-header-cell",{key:r},[n("sui-input",{attrs:{placeholder:"Search...",size:"mini"},model:{value:e.filterInfo[r],callback:function(t){e.$set(e.filterInfo,r,t)},expression:"filterInfo[index]"}})],1)})),1)],1),n("sui-table-body",e._l(e.docsInfo[e.selectedPage],(function(t,r){return n("sui-table-row",{key:r,attrs:{selected:e.isSelected(r)},on:{click:function(t){e.selectedRow=r,e.$forceUpdate()},dblclick:function(t){return e.editDoc(r)}}},e._l(t,(function(t,r){return n("sui-table-cell",{key:r},[e._v(" "+e._s(t)+" ")])})),1)})),1),n("sui-table-footer",[n("sui-table-row",[n("sui-table-header-cell",{attrs:{colspan:"14"}},[n("sui-menu",{attrs:{pagination:""}},[n("sui-menu-item",{tag:"a",attrs:{icon:""},on:{click:e.pageLeft}},[n("sui-icon",{attrs:{name:"left chevron"}})],1),e._l(e.docsInfo,(function(t,r){return n("sui-menu-item",{key:r,tag:"a",attrs:{active:e.isActive(r)},on:{click:function(t){e.selectedPage=r}}},[e._v(e._s(r+1))])})),n("sui-menu-item",{tag:"a",attrs:{icon:""},on:{click:e.pageRight}},[n("sui-icon",{attrs:{name:"right chevron"}})],1)],2)],1)],1)],1)],1)],1)},o=[],a=(n("a4d3"),n("e01a"),n("99af"),n("a434"),n("b0c0"),n("4fad"),n("3835")),i=n("b85c"),c=n("9652"),u={name:"Table",data:function(){return{headers:["Project","Class","Part #","Revision","Description","Requester","Creation Date","Ready Date","Checker","Check Date","Approver","Approve Date","Release Date","Revision Reason"],filterInfo:{project:null,class:null,part_num:null,revision:null,description:null,requestor:null,checker:null,checked:null,approver:null,create:null,ready:null,approved:null,released:null,reason:null},docs:[],docsInfo:[],nextPart:0,selectedRow:null,selectedPage:0,pageItems:10}},methods:{methodThatForcesUpdate:function(e){this.Vals[e]=29,this.$forceUpdate()},retrieveDocuments:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.docs=[],c["a"].getAll(t).then((function(t){e.docs=t.data,e.docs.sort((function(e,t){return e.part_num==t.part_num?e.revision>t.revision:e.part_num>t.part_num?1:-1})),e.getDocInfo(t.data)})).catch((function(e){console.error(e)}))},getDocInfo:function(e){this.docsInfo=[];var t,n=[],r=0,o=Object(i["a"])(e);try{for(o.s();!(t=o.n()).done;){var a=t.value;console.log(a);var c={Project:a.Project.code+" - "+a.Project.name,Class:a.Document_Class.code,PartNum:a.part_num,Revision:a.revision,Description:a.description,Requestor:null,CreationDate:a.creation_date,ReadyDate:a.ready_date,Checker:null,CheckDate:a.checked_date,Approver:null,ApproveDate:a.approved_date,releaseDate:a.released_date,RevReason:a.revision_reason};a.Checker&&(c["Checker"]=a.Checker.name),a.Approver&&(c["Approver"]=a.Approver.name),a.Requestor&&(c["Requestor"]=a.Requestor.name),r<this.pageItems?(n.push(c),r++):(this.docsInfo.push(n),n=[],n.push(c),r=0)}}catch(u){o.e(u)}finally{o.f()}this.docsInfo.push(n)},isSelected:function(e){return this.selectedRow==e},editDoc:function(e){null!=e&&this.$router.push({name:"DocumentEdit",params:{DocID:this.docs[e].doc_id,PartNum:this.docs[e].part_num}})},deleteDoc:function(e){var t=this;null!=e&&c["a"].delete(this.docs[e].doc_id).then((function(n){200==n.status&&(t.docs.splice(e,1),t.docsInfo.splice(e,1))})).catch((function(e){console.error(e)}))},pageLeft:function(){this.selectedPage>0&&this.selectedPage--},pageRight:function(){this.selectedPage<this.docsInfo.length-1&&this.selectedPage++},isActive:function(e){return e==this.selectedPage},search:function(){for(var e="?",t=0,n=Object.entries(this.filterInfo);t<n.length;t++){var r=Object(a["a"])(n[t],2),o=r[0],i=r[1];null!=i&&(e+="".concat(o,"=").concat(i,"&")),this.filterInfo[o]=null}this.retrieveDocuments(e)}},mounted:function(){try{this.retrieveDocuments()}catch(e){console.error("Error response:"),console.error(e)}}},s=u,l=(n("e043"),n("2877")),f=Object(l["a"])(s,r,o,!1,null,null,null);t["default"]=f.exports},a434:function(e,t,n){"use strict";var r=n("23e7"),o=n("23cb"),a=n("a691"),i=n("50c4"),c=n("7b0b"),u=n("65f0"),s=n("8418"),l=n("1dde"),f=n("ae40"),d=l("splice"),h=f("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,p=Math.min,b=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d||!h},{splice:function(e,t){var n,r,l,f,d,h,m=c(this),y=i(m.length),k=o(e,y),w=arguments.length;if(0===w?n=r=0:1===w?(n=0,r=y-k):(n=w-2,r=p(v(a(t),0),y-k)),y+n-r>b)throw TypeError(g);for(l=u(m,r),f=0;f<r;f++)d=k+f,d in m&&s(l,f,m[d]);if(l.length=r,n<r){for(f=k;f<y-r;f++)d=f+r,h=f+n,d in m?m[h]=m[d]:delete m[h];for(f=y;f>y-r+n;f--)delete m[f-1]}else if(n>r)for(f=y-r;f>k;f--)d=f+r-1,h=f+n-1,d in m?m[h]=m[d]:delete m[h];for(f=0;f<n;f++)m[f+k]=arguments[f+2];return m.length=y-r+n,l}})},a630:function(e,t,n){var r=n("23e7"),o=n("4df4"),a=n("1c7e"),i=!a((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:i},{from:o})},b0c0:function(e,t,n){var r=n("83ab"),o=n("9bf2").f,a=Function.prototype,i=a.toString,c=/^\s*function ([^ (]*)/,u="name";r&&!(u in a)&&o(a,u,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(e){return""}}})},b85c:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");var r=n("06c5");function o(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(r["a"])(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==n["return"]||n["return"]()}finally{if(u)throw i}}}}},c5d9:function(e,t,n){},d28b:function(e,t,n){var r=n("746f");r("iterator")},ddb0:function(e,t,n){var r=n("da84"),o=n("fdbc"),a=n("e260"),i=n("9112"),c=n("b622"),u=c("iterator"),s=c("toStringTag"),l=a.values;for(var f in o){var d=r[f],h=d&&d.prototype;if(h){if(h[u]!==l)try{i(h,u,l)}catch(p){h[u]=l}if(h[s]||i(h,s,f),o[f])for(var v in a)if(h[v]!==a[v])try{i(h,v,a[v])}catch(p){h[v]=a[v]}}}},e01a:function(e,t,n){"use strict";var r=n("23e7"),o=n("83ab"),a=n("da84"),i=n("5135"),c=n("861d"),u=n("9bf2").f,s=n("e893"),l=a.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},d=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof d?new l(e):void 0===e?l():l(e);return""===e&&(f[t]=!0),t};s(d,l);var h=d.prototype=l.prototype;h.constructor=d;var v=h.toString,p="Symbol(test)"==String(l("test")),b=/^Symbol\((.*)\)[^)]+$/;u(h,"description",{configurable:!0,get:function(){var e=c(this)?this.valueOf():this,t=v.call(e);if(i(f,e))return"";var n=p?t.slice(7,-1):t.replace(b,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},e043:function(e,t,n){"use strict";n("c5d9")},fb6a:function(e,t,n){"use strict";var r=n("23e7"),o=n("861d"),a=n("e8b5"),i=n("23cb"),c=n("50c4"),u=n("fc6a"),s=n("8418"),l=n("b622"),f=n("1dde"),d=n("ae40"),h=f("slice"),v=d("slice",{ACCESSORS:!0,0:0,1:2}),p=l("species"),b=[].slice,g=Math.max;r({target:"Array",proto:!0,forced:!h||!v},{slice:function(e,t){var n,r,l,f=u(this),d=c(f.length),h=i(e,d),v=i(void 0===t?d:t,d);if(a(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?o(n)&&(n=n[p],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return b.call(f,h,v);for(r=new(void 0===n?Array:n)(g(v-h,0)),l=0;h<v;h++,l++)h in f&&s(r,l,f[h]);return r.length=l,r}})}}]);
//# sourceMappingURL=chunk-51d6c212.1b643915.js.map