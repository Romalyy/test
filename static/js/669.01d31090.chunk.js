"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[669],{2669:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var i=t(1087),a=t(9434),l=t(7689),r=t(5856),s=t(50),c=t(5802),o=t(3329),u=function(){var e=(0,a.I0)(),n=(0,l.s0)();return(0,o.jsx)(s.Z,{title:"Login",handleClick:function(t,i){var a=(0,r.v0)();(0,r.e5)(a,t,i).then((function(t){var i=t.user;console.log(i),e((0,c.av)({email:i.email,id:i.uid,token:i.accessToken})),n("/test")})).catch((function(){return alert("Invalid user!")}))}})},d="login-page_title__GlCyW",m="login-page_redirect__nshbl",v=function(){return(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{className:d,children:"Login"}),(0,o.jsx)(u,{}),(0,o.jsxs)("div",{className:m,children:["Or ",(0,o.jsx)(i.rU,{to:"/register",children:"Register"})]})]})}},50:function(e,n,t){t.d(n,{Z:function(){return _}});var i=t(9439),a=t(2791),l=t(9434),r=t(7689),s=t(456),c=t(5802),o=t(3736),u=t(7195),d="form_form__4hGEz",m="form_google__erFq3",v="form_wrapper__wVbc4",f="form_input__GHlln",g="form_button__ygezs",h=t(3329),_=function(e){var n=e.title,t=e.handleClick,_=(0,a.useState)(""),p=(0,i.Z)(_,2),j=p[0],x=p[1],b=(0,a.useState)(""),k=(0,i.Z)(b,2),N=k[0],w=k[1],C=(0,l.I0)(),I=(0,r.s0)(),Z=window.google;function y(e){var n=(0,s.Z)(e.credential);C((0,c.av)(n)),I("/test"),document.getElementById("signInDiv").hidden=!0}return(0,a.useEffect)((function(){Z.accounts.id.initialize({client_id:"817426699905-v79bfsq4m29em3vpplfej2cb3f1n6o8r.apps.googleusercontent.com",callback:y}),Z.accounts.id.renderButton(document.getElementById("signInDiv"),{theme:"outline",size:"large"})})),(0,h.jsx)("div",{className:"container",children:(0,h.jsxs)("div",{className:d,children:[(0,h.jsx)("div",{className:m,id:"signInDiv"}),(0,h.jsx)("div",{className:v,children:(0,h.jsx)(u.Z,{className:f,id:"outlined-basic",label:"Login",variant:"outlined",placeholder:"admin",type:"email",value:j,onChange:function(e){return x(e.target.value)}})}),(0,h.jsx)("div",{className:v,children:(0,h.jsx)(u.Z,{className:f,id:"outlined-basic",label:"Pass",variant:"outlined",type:"password",value:N,onChange:function(e){return w(e.target.value)},placeholder:"12345"})}),(0,h.jsx)(o.Z,{className:g,variant:"contained",onClick:function(){return t(j,N)},children:n})]})})}}}]);
//# sourceMappingURL=669.01d31090.chunk.js.map