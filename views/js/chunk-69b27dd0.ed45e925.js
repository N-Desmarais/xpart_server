(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69b27dd0"],{"4c16":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"Account"},on:{submit:function(t){t.preventDefault()}}},[i("sui-container",{attrs:{centered:""}},[i("sui-grid",{attrs:{middle:"",aligned:"",padded:!0,id:"Grid"}},[i("sui-grid-column",{staticStyle:{width:"500px"},attrs:{centered:!0}},[i("sui-segment",{staticStyle:{background:"#F8F8F9"}},[i("center",[i("div",{attrs:{id:"Title"}},[t._v("My Account"),i("br")]),i("sui-icon",{attrs:{color:"blue",size:"massive",name:"user circle"}})],1),i("sui-form",{staticStyle:{margin:"1em 0em .5em"}},[i("sui-form-field",[i("label",[t._v("Email")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.data.email,expression:"data.email"}],attrs:{disabled:""},domProps:{value:t.data.email},on:{input:function(e){e.target.composing||t.$set(t.data,"email",e.target.value)}}})]),i("sui-form-field",[i("label",[t._v("Initials")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.data.initials,expression:"data.initials"}],staticStyle:{width:"100px"},domProps:{value:t.data.initials},on:{change:t.CheckRequired,input:function(e){e.target.composing||t.$set(t.data,"initials",e.target.value)}}})]),i("sui-form-fields",{staticStyle:{margin:"0em .5em 0em"},attrs:{grouped:""}},[i("label",[t._v("My Projects")])]),i("center",[t.$auth.isAuthenticated?i("sui-button",{staticStyle:{margin:"0em .5em 0em"},attrs:{disabled:!this.submittable,color:"blue",content:"Save Changes"},on:{click:t.submit}}):t._e()],1)],1)],1)],1)],1)],1)],1)},n=[],s=(i("b0c0"),i("1f57")),r={name:"Account",data:function(){return{user_id:null,data:{email:null,initials:null},submittable:!1}},methods:{grabUserInfo:function(t){var e=this;s["a"].get(t).then((function(t){1==t.data.length&&(e.data.email=t.data["0"].email,e.data.initials=t.data["0"].name,e.user_id=t.data["0"].user_id,console.log(t.data["0"]))})).catch((function(t){console.error(t)}))},CheckRequired:function(){this.data.initials?this.submittable=!0:this.submittable=!1},submit:function(){var t=this;1==this.submittable&&s["a"].update(this.user_id,this.data).then((function(e){200==e.status&&(t.submittable=!1)})).catch((function(t){console.error(t)}))}},mounted:function(){try{this.grabUserInfo(this.$auth.user.email)}catch(t){console.error("Error response:"),console.error(t)}}},l=r,u=i("2877"),o=Object(u["a"])(l,a,n,!1,null,null,null);e["default"]=o.exports},b0c0:function(t,e,i){var a=i("83ab"),n=i("9bf2").f,s=Function.prototype,r=s.toString,l=/^\s*function ([^ (]*)/,u="name";a&&!(u in s)&&n(s,u,{configurable:!0,get:function(){try{return r.call(this).match(l)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-69b27dd0.ed45e925.js.map