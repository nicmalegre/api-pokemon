(this["webpackJsonpapi-pokemon"]=this["webpackJsonpapi-pokemon"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(0),c=n.n(r),i=n(10),s=n.n(i),l=n(17),o=n.n(l),j=n(37),u=n(33),b=n(141),d=n(144),p=Object(b.a)({root:{maxWidth:320,minWidth:240,display:"inline-block",margin:15,padding:15},media:{height:140}}),h=function(e){var t=p();return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(d.a,{className:t.root,children:[Object(a.jsxs)("div",{style:{textAlign:"center"},children:[Object(a.jsx)("img",{height:"120px",src:e.pokemon.data.sprites.front_default,alt:""}),Object(a.jsx)("img",{height:"120px",src:e.pokemon.data.sprites.back_default,alt:""})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Name:"})," ",e.pokemon.data.name]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Height:"})," ",e.pokemon.data.height]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Weight:"})," ",e.pokemon.data.weight]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Base Experience:"})," ",e.pokemon.data.base_experience]}),Object(a.jsx)("p",{children:Object(a.jsx)("b",{children:"Abilities: "})}),Object(a.jsx)("ul",{children:e.pokemon.data.abilities.map((function(e,t){return Object(a.jsx)("li",{children:e.ability.name},t)}))})]})})},x=n(63),O=n(146),m=n(147),f=n(148),g=n(149),v=n(160),k=n.p+"static/media/nicolasalegre.78e64e01.jpg",y=Object(b.a)((function(e){return Object(x.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},avatar:{display:"flex","& > *":{margin:e.spacing(1)}}},e.breakpoints.down("sm"),{avatar:{display:"none"}})})),w=function(){var e=y();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:e.root,children:Object(a.jsx)(O.a,{position:"static",style:{backgroundColor:"#3f51b5"},children:Object(a.jsx)(m.a,{justify:"center",children:Object(a.jsxs)(f.a,{style:{padding:0},children:[Object(a.jsx)("h1",{style:{fontSize:"40px"},children:"Pokemon Finder"}),Object(a.jsx)(g.a,{variant:"h6",className:e.title}),Object(a.jsxs)("div",{children:[Object(a.jsx)("a",{children:Object(a.jsx)("b",{children:"Author:"})}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{id:"a-name",children:"Nicol\xe1s Alegre"}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{id:"a-href",href:"https://github.com/nicmalegre/api-pokemon",children:"Link to GitHub"})]}),Object(a.jsx)("div",{className:e.avatar,children:Object(a.jsx)(v.a,{id:"avatar",style:{height:"70px",width:"70px"},alt:"Nicolas Alegre",src:k})})]})})})})})},S=n(43),N=n.n(S),z=n(151),C=n(157),A=n(155),I=n(158),q=n(150),B=n(154),E=n(156),F=n(159),L=Object(b.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));var P=function(){var e=L(),t=Object(r.useState)([]),n=Object(u.a)(t,2),c=n[0],i=n[1],s=Object(r.useState)(null),l=Object(u.a)(s,2),b=l[0],d=l[1],p=Object(r.useState)(0),x=Object(u.a)(p,2),O=x[0],f=x[1],g=Object(r.useState)(!1),v=Object(u.a)(g,2),k=v[0],y=v[1],S=Object(r.useState)(50),P=Object(u.a)(S,2),W=P[0],G=P[1],_=function(e){return N.a.get(e)};Object(r.useEffect)((function(){(function(){var e=Object(j.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.prev=1,e.next=4,N.a.get("https://pokeapi.co/api/v2/pokemon",{params:{limit:W,offset:0}});case 4:return t=e.sent,n=t.data,f(n.count),e.next=9,Promise.all(n.results.map(function(){var e=Object(j.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t.url);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 9:a=e.sent,i(a.map((function(e){return e}))),y(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var H=function(e){return e.name.toLowerCase().indexOf(b.toLowerCase())>-1},J=function(){var e=Object(j.a)(o.a.mark((function e(t){var n,a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.prev=1,e.next=4,N.a.get("https://pokeapi.co/api/v2/pokemon",{params:{limit:""===b||null===b?t:O,offset:0}});case 4:return n=e.sent,a=n.data,(r=""===b||null===b?a.results:a.results.filter(H)).length>W&&(r=r.slice(0,W),console.log(r)),e.next=10,Promise.all(r.map(function(){var e=Object(j.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t.url);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 10:c=e.sent,i(c.map((function(e){return e}))),y(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(w,{}),Object(a.jsxs)(m.a,{style:{marginTop:10},children:[Object(a.jsx)(I.a,{className:e.backdrop,open:k,children:Object(a.jsx)(q.a,{color:"inherit"})}),Object(a.jsxs)(z.a,{container:!0,justify:"center",children:[Object(a.jsxs)(z.a,{item:!0,xs:12,style:{marginBottom:40},children:[Object(a.jsx)("p",{style:{fontSize:"24px",fontWeight:"lighter"},children:"El que quiere Pokemon, que los busque."}),Object(a.jsxs)(z.a,{container:!0,justify:"center",children:[Object(a.jsx)(C.a,{id:"outlined-basic",variant:"outlined",size:"small",style:{width:"70%",marginRight:20},label:"Ingrese el nombre a buscar",onChange:function(e){d(e.target.value)}}),Object(a.jsx)(A.a,{variant:"contained",color:"primary",onClick:J,style:{width:"20%"},children:"Search"})]}),Object(a.jsxs)(B.a,{variant:"outlined",className:e.formControl,size:"small",style:{marginLeft:50,marginTop:10},children:[Object(a.jsx)("label",{children:"Size:"}),Object(a.jsxs)(E.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:W,onChange:function(e){G(e.target.value),J(e.target.value)},size:"small",children:[Object(a.jsx)(F.a,{value:50,children:"50"}),Object(a.jsx)(F.a,{value:100,children:"100"}),Object(a.jsx)(F.a,{value:150,children:"150"}),Object(a.jsx)(F.a,{value:200,children:"200"}),Object(a.jsx)(F.a,{value:500,children:"500"}),Object(a.jsx)(F.a,{value:750,children:"750"}),Object(a.jsx)(F.a,{value:750,children:"750"}),Object(a.jsx)(F.a,{value:1e3,children:"1000"}),Object(a.jsx)(F.a,{value:O,children:"All"})]})]})]}),c.map((function(e,t){return Object(a.jsx)(h,{pokemon:e},t)}))]})]})]})};n(100);s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.e7dd8faa.chunk.js.map