(this["webpackJsonpword-hunt-solver"]=this["webpackJsonpword-hunt-solver"]||[]).push([[0],{35:function(e,t,a){e.exports=a(66)},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(12),o=a.n(l),c=(a(40),a(5)),m=(a(41),a(9)),s=a(8);a(42);var u=function(e){var t,a=e.letters,r=[["","","",""],["","","",""],["","","",""],["","","",""]];return function(e){if(console.log("set grid called "+e),null==e)return r=[["","","",""],["","","",""],["","","",""],["","","",""]],void(t=4);t=Math.round(Math.sqrt(e.length));for(var a=0;a<t;a++)for(var n=0;n<t;n++)r[a][n]=e.charAt(a*t+n);console.log("set grid to values")}(a),n.a.createElement("div",null,r.map((function(e,a){return n.a.createElement(m.a,{key:a},e.map((function(e,r){return n.a.createElement(s.a,{className:"p-1",key:a*t+r},n.a.createElement("div",{className:"square"},n.a.createElement("h1",{className:"text-center letter"},e)))})))})))},i=a(34),d=(a(44),a(20)),h=a(13);var E=function(e){for(var t=e.currWord,a=e.size,l="",o=0;o<Math.pow(a,2);o++)l+=" ";var u=Object(i.a)(),E=u.register,f=u.handleSubmit,p=u.errors,g=Object(r.useState)(l),v=Object(c.a)(g,2),b=v[0],y=v[1],k=function(t){for(var r="",l=0;l<Math.pow(a,2);l++){var o=document.getElementsByName("letter")[l].value;if(o.toUpperCase()==o.toLowerCase())return n.a.createElement("h1",null,"You did not enter a character in one of the fields. Refresh the page");r+=o.toUpperCase()}y(r),e.onClick(r)},w=function(e){};return null==t?n.a.createElement(d.a,{id:"forms",className:"py-3 text-center",onSubmit:f(k)},n.a.createElement("table",{className:"table table-bordered",name:"values",ref:E({required:"Enter something!",minLength:{value:16,message:"Too short"},maxLength:{value:16,message:"Too long"}})},n.a.createElement("tbody",null,Array.from({length:a}).map((function(e,t){return n.a.createElement("tr",{key:t},Array.from({length:a}).map((function(e,r){return n.a.createElement("td",{key:t*a+r},n.a.createElement("input",{placeholder:b.charAt(t*a+r),maxLength:"1",name:"letter",ref:E({required:!0}),id:t*a+r,tabIndex:t*a+r,onKeyUp:w,type:"text",style:{height:"2.15em"}}))})))})))),p.letter&&n.a.createElement("p",null,"Some values are not filled"),n.a.createElement("p",null,"To reset all, refresh the page"),n.a.createElement(h.a,{type:"submit",tabIndex:Math.pow(a,2),variant:"dark",size:"lg"},"Set Grid!")):n.a.createElement("div",null,n.a.createElement(d.a,{id:"forms",className:"py-3 text-center",onSubmit:f(k)},n.a.createElement(m.a,null,n.a.createElement(s.a,{lg:"9"},n.a.createElement("table",{className:"table table-bordered",name:"values",ref:E({required:"Enter something!",minLength:{value:16,message:"Too short"},maxLength:{value:16,message:"Too long"}})},n.a.createElement("tbody",null,Array.from({length:a}).map((function(e,t){return n.a.createElement("tr",{key:t},Array.from({length:a}).map((function(e,r){return n.a.createElement("td",{key:t*a+r},n.a.createElement("input",{defaultValue:b.charAt(t*a+r),maxLength:"1",name:"letter",ref:E({required:!0}),id:t*a+r,tabIndex:t*a+r,onKeyUp:w,type:"text",style:{height:"2.15em"}}))})))}))))),n.a.createElement(s.a,{lg:"3"},p.letter&&n.a.createElement("p",null,"Some values are not filled"),n.a.createElement("p",null,"To reset all, refresh the page"),n.a.createElement(h.a,{type:"submit",tabIndex:Math.pow(a,2),variant:"dark",size:"lg"},"Set Grid!")))),n.a.createElement("form",{className:"text-center p-3",name:"next"},n.a.createElement("p",null,"current word: ")," ",n.a.createElement("h1",null," ",t," "),n.a.createElement("br",null),n.a.createElement(h.a,{variant:"dark",onClick:function(){e.nextClick()}},"Next Word!"),n.a.createElement("p",null,"Click once and then use SPACE or ENTER")))};var f=function(e){var t=e.directions,a=e.size;if(console.log(t.length),Array.isArray(t)&&0==t.length)return n.a.createElement("div",null);for(var r=[],l=Math.floor(t[0]/a),o=t[0]%a,c=1;c<t.length;c++){var m=Math.floor(t[c]/a),s=100*o+50,u=100*l+50,i=100*(t[c]%a)+50,d=100*m+50;r.push([s,u,i,d]),console.log(s,u,i,d),l=Math.floor(t[c]/a),o=t[c]%a}return n.a.createElement("div",null,n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 400 400",className:"mt-2"},n.a.createElement("circle",{cx:r[0][0],cy:r[0][1],r:"15",stroke:"black",strokeWidth:"3",fill:"red"}),n.a.createElement("defs",null,n.a.createElement("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"0",refY:"3.5",orient:"auto"},n.a.createElement("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#ffcc99",stroke:"black"}))),r.map((function(e,t){return n.a.createElement("line",{x1:e[0],y1:e[1],x2:e[2],y2:e[3],stroke:"#990000",strokeWidth:"2",markerEnd:"url(#arrowhead)",key:t})}))))};var p=function(e){var t=e.words;return Array.isArray(t)&&0==t.length?n.a.createElement("div",null):n.a.createElement("div",{className:"border border-dark rounded"},n.a.createElement("h3",null,"All Words"),n.a.createElement(m.a,null,t.map((function(e,t){return n.a.createElement(s.a,{key:e,xs:"6",sm:"4",md:"3",lg:"2"},e[0])}))))},g=a(31),v=a.n(g),b=a(33),y=a(32),k=a(19);var w=function(){var e=Object(r.useState)(null),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(r.useState)([]),i=Object(c.a)(o,2),d=i[0],g=i[1],w=Object(r.useState)(null),x=Object(c.a)(w,2),N=x[0],S=x[1],j=Object(r.useState)(0),O=Object(c.a)(j,2),A=O[0],C=O[1],W=Object(r.useState)(4),M=Object(c.a)(W,2),T=M[0],z=(M[1],Object(r.useState)([])),L=Object(c.a)(z,2),q=L[0],B=L[1],I="https://stevenyao.pythonanywhere.com/solve_this/";return Object(r.useEffect)((function(){null!=a&&v.a.post(I,{letters:a,size:T}).then((function(e){B(e.data.answer)}),(function(e){console.log(e)})),C(0)}),[I,a]),Object(r.useEffect)((function(){null!=a&&q!=[]&&(g(q[A][1]),S(q[A][0]),C(A+1))}),[q]),n.a.createElement("div",{className:"bg-light"},n.a.createElement(k.a,{bg:"dark",variant:"dark"},n.a.createElement(k.a.Brand,{href:"#home",className:"pl-3"},"Word Hunt Solver")),n.a.createElement(y.a,{className:"p-3 bg-white"},n.a.createElement(b.a,null,n.a.createElement("h1",null,"Never Lose WordHunt Again!"),n.a.createElement("p",null,"Simply enter the 16 letters of your word hunt board and watch as the solutions magically appear. Check out my YouTube for more quality content:"),n.a.createElement(h.a,{href:"https://www.youtube.com/channel/UCZDp6CvSxKBEKycW4dpHIJQ",variant:"dark",size:"lg"},"Go to YouTube")),n.a.createElement(m.a,null,n.a.createElement(s.a,{md:"6"},n.a.createElement("h1",{className:"text-center"},"Enter your letters"),n.a.createElement(E,{onClick:function(e){l(e)},nextClick:function(){null!=a&&(g(q[A][1]),S(q[A][0]),C(A+1))},currWord:N,size:T})),n.a.createElement(s.a,{md:"6"},n.a.createElement("div",{className:"parent px-1"},n.a.createElement(u,{letters:a}),n.a.createElement("div",{className:"child"},n.a.createElement(f,{directions:d,size:T}))))),n.a.createElement("div",{className:"mt-3"},n.a.createElement(p,{words:q}))),n.a.createElement("footer",{className:"bg-dark text-light text-center text-xs p-3 absolute bottom-0 w-full to-bottom"},"\xa9 Copyright Steven Yao 2020"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(65);o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.2d1d6656.chunk.js.map