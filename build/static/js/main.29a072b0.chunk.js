(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),i=(a(93),a(48)),l=a(31),s=a(24),u=a(28),m=a(14),d=a(171),p=a(160),f=a(162),b=a(23),h=a.n(b),g=Object(p.a)(function(e){return{container:{display:"flex",flexWrap:"wrap",flexDirection:"column",width:"45%",margin:"10% auto"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},button:{width:"35%",margin:"10px auto"}}});function v(e){var t=Object(n.useState)({username:"",password:""}),a=Object(m.a)(t,2),c=a[0],o=a[1],l=g(),p=function(e){o(Object(u.a)({},c,Object(s.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{className:l.container,autoComplete:"off",onSubmit:function(t){return a=t,h.a.post("https://disneyparents.herokuapp.com/login","grant_type=password&username=".concat(c.username,"&password=").concat(c.password),{headers:{Authorization:"Basic ".concat(window.btoa("lambda-client:lambda-secret")),"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){localStorage.setItem("token",t.data.access_token),c.username="",c.password="",e.history.push("/home")}).catch(function(e){return console.dir(e)}),void a.preventDefault();var a}},r.a.createElement(d.a,{className:l.textField,id:"outlined-email-input",label:"username",name:"username",margin:"normal",variant:"outlined",onChange:function(e){return p(e)}}),r.a.createElement(d.a,{className:l.textField,id:"outlined-password-input",label:"Password",name:"password",type:"password",margin:"normal",variant:"outlined",onChange:function(e){return p(e)}}),r.a.createElement(f.a,{type:"submit",variant:"outlined",color:"primary",className:l.button},"Log In"),r.a.createElement(i.b,{to:"/signup"},r.a.createElement(f.a,{className:l.button,color:"primary",variant:"outlined"},"Sign Up"))))}var E=Object(p.a)(function(e){return{container:{display:"flex",flexWrap:"wrap",flexDirection:"column",width:"45%",margin:"10% auto"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},button:{width:"35%",margin:"10px auto"}}});function w(e){var t=Object(n.useState)({username:"",password:""}),a=Object(m.a)(t,2),c=a[0],o=a[1],i=E(),l=function(e){o(Object(u.a)({},c,Object(s.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{className:i.container,autoComplete:"off",onSubmit:function(t){return a=t,h.a.post("https://disneyparents.herokuapp.com/createnewuser",c).then(function(t){localStorage.setItem("token",window.btoa("lambda-client:lambda-secret")),e.history.push("/home"),c.username="",c.password=""}).catch(function(e){return console.dir(e)}),void a.preventDefault();var a}},r.a.createElement(d.a,{className:i.textField,id:"outlined-email-input",label:"username",name:"username",margin:"normal",variant:"outlined",onChange:function(e){return l(e)}}),r.a.createElement(d.a,{className:i.textField,id:"outlined-password-input",label:"Password",name:"password",type:"password",margin:"normal",variant:"outlined",onChange:function(e){return l(e)}}),r.a.createElement(f.a,{type:"submit",variant:"outlined",color:"primary",className:i.button},"Create Profile")))}var j=a(170),O=a(173),y=a(75),k=a(50),x=a(172);function S(e){var t=e.children,a=e.value,n=e.index,c=Object(y.a)(e,["children","value","index"]);return r.a.createElement(k.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"nav-tabpanel-".concat(n),"aria-labelledby":"nav-tab-".concat(n)},c),r.a.createElement(x.a,{p:3},t))}var N=a(163);function C(e){return r.a.createElement(N.a,Object.assign({component:"a",onClick:function(e){e.preventDefault()}},e))}var D=a(164),F=a(165),R=a(166),W=a(167),A=a(175),I=Object(p.a)({root:{flexGrow:1},card:{height:100,width:300,margin:"20px"}});function L(){var e=Object(n.useState)({attractions:!0,restaurants:!1}),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),i=Object(m.a)(o,2),l=(i[0],i[1],Object(n.useState)([])),d=Object(m.a)(l,2),p=d[0],b=d[1],g=I();Object(n.useEffect)(function(){h.a.get("https://disneyparents.herokuapp.com/attractions/attractions").then(function(e){b(e.data)})},[a]);var v=function(e){return function(t){c(Object(u.a)({},a,Object(s.a)({},e,t.target.checked)))}},E=p.map(function(e,t){return r.a.createElement(D.a,{className:g.card,key:e.attractionid},r.a.createElement(F.a,null,e.attraction),r.a.createElement(R.a,null,r.a.createElement(f.a,{size:"small"},"See More")))});return p.length?r.a.createElement(x.a,null,"Attractions: ",r.a.createElement(A.a,{checked:a.attractions,onChange:v("attractions"),value:"attractions"}),"Restraurants: ",r.a.createElement(A.a,{checked:a.restaurants,onChange:v("restaurants"),value:"restaurants"}),r.a.createElement(W.a,{container:!0,className:g.root,justify:"center",spacing:2},E)):r.a.createElement("h1",null,"Loading...")}var P=a(168),B=a(169),q=Object(p.a)({root:{flexGrow:1},card:{width:400,margin:"20px"}});function z(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],o=q();Object(n.useEffect)(function(){h.a.get("https://disneyparents.herokuapp.com/tickets/tickets").then(function(e){console.log(e.data),c(e.data)}).catch(function(e){console.dir(e)})},[]);var i=a.map(function(e){return r.a.createElement(D.a,{className:o.card,key:e.ticketid},r.a.createElement(P.a,{title:e.attractions.attraction,subheader:e.time,avatar:r.a.createElement(B.a,null,e.user.username.charAt(0).toUpperCase())}),r.a.createElement(F.a,null,r.a.createElement(k.a,{gutterBottom:!0},"Kids: ",e.kidCount)))});return r.a.createElement(x.a,null,r.a.createElement(W.a,{container:!0,className:o.root,justify:"center",spacing:2},i))}var H=a(177),M=a(176),T=Object(p.a)(function(e){return{container:{display:"flex",flexDirection:"column",width:"45%",margin:"10% auto"},button:{width:"35%",margin:"15px auto"}}});function G(){var e=T(),t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)([]),l=Object(m.a)(i,2),p=(l[0],l[1]),b=Object(n.useState)(!1),g=Object(m.a)(b,2),v=g[0],E=g[1],w=Object(n.useState)({location:"",kids:0,time:""}),j=Object(m.a)(w,2),O=j[0],y=j[1],k=function(e){return function(t){y(Object(u.a)({},O,Object(s.a)({},e,t.target.value)))}};return Object(n.useEffect)(function(){h.a.get("https://disneyparents.herokuapp.com/attractions/attractions").then(function(e){o(e.data),console.log(e.data)}),h.a.get("https://disneyparents.herokuapp.com/restaurants/restaurants").then(function(e){p(e.data)})},[]),r.a.createElement("form",{className:e.container,onSubmit:function(e){return function(e){e.preventDefault(),y({location:"",kids:0,time:""}),E(!0)}(e)}},r.a.createElement(d.a,{select:!0,label:"Select Location",value:O.location,helperText:"Where do you want to meet?",onChange:k("location"),SelectProps:{MenuProps:{className:"select-input"}}},c.map(function(e){return r.a.createElement(H.a,{key:e.attractionid,value:e.attraction},e.attraction)})),r.a.createElement(d.a,{select:!0,label:"Kids",value:O.kids,helperText:"How many kids do you have?",onChange:k("kids")},r.a.createElement(H.a,{value:1},"1"),r.a.createElement(H.a,{value:2},"2"),r.a.createElement(H.a,{value:3},"3"),r.a.createElement(H.a,{value:4},"4+")),r.a.createElement(f.a,{type:"submit",className:e.button,variant:"outlined"},"Create New Request"),r.a.createElement(M.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:v,autoHideDuration:2e3,onClose:function(){E(!1)}},r.a.createElement("span",null,"Request Created Successfully")))}function J(){var e=Object(n.useState)(0),t=Object(m.a)(e,2),a=t[0],c=t[1];function o(e){return{id:"nav-tab-".concat(e),"aria-controls":"nav-tabpanel-".concat(e)}}return r.a.createElement("div",null,r.a.createElement(j.a,{position:"static"},r.a.createElement(O.a,{variant:"fullWidth",value:a,onChange:function(e,t){c(t)}},r.a.createElement(C,Object.assign({label:"Home",href:"/home"},o(0))),r.a.createElement(C,Object.assign({label:"Open Requests",href:"/tickets"},o(1))),r.a.createElement(C,Object.assign({label:"Main Attractions",href:"/attractions"},o(2))))),r.a.createElement(S,{value:a,index:0},r.a.createElement(G,null)),r.a.createElement(S,{value:a,index:1},r.a.createElement(z,null)),r.a.createElement(S,{value:a,index:2},r.a.createElement(L,null)))}var K=function(){return r.a.createElement(i.a,null,r.a.createElement(l.b,{exact:!0,path:"/",render:function(){return localStorage.getItem("token")?r.a.createElement(l.a,{to:"/home"}):r.a.createElement(v,null)}}),r.a.createElement(l.b,{path:"/signup",component:w}),r.a.createElement(l.b,{path:"/home",component:J}))};a(121);var U=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(K,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},88:function(e,t,a){e.exports=a(122)},93:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.29a072b0.chunk.js.map