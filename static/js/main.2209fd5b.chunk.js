(this["webpackJsonpword-hunt-solver"]=this["webpackJsonpword-hunt-solver"]||[]).push([[0],{36:function(e,t,a){e.exports=a(66)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(12),c=a.n(l),o=(a(41),a(5)),m=(a(42),a(9)),s=a(8);a(43);var i=function(e){var t,a=e.letters,r=[["","","",""],["","","",""],["","","",""],["","","",""]];return function(e){if(console.log("set grid called "+e),null==e)return r=[["","","",""],["","","",""],["","","",""],["","","",""]],void(t=4);t=Math.round(Math.sqrt(e.length));for(var a=0;a<t;a++)for(var n=0;n<t;n++)r[a][n]=e.charAt(a*t+n);console.log("set grid to values")}(a),n.a.createElement("div",null,r.map((function(e,a){return n.a.createElement(m.a,{key:a},e.map((function(e,r){return n.a.createElement(s.a,{className:"p-1",key:a*t+r},n.a.createElement("div",{className:"square"},n.a.createElement("h1",{className:"text-center letter"},e)))})))})))},u=a(35),d=a(19),f=a.n(d),E=a(22),h=a(13);var p=function(e){var t=e.currWord,a=e.size,r=Object(u.a)(),l=r.register,c=r.handleSubmit,o=r.errors,i=function(t){for(var r="",l=0;l<Math.pow(a,2);l++){var c=document.getElementsByName("letter")[l].value;if(c.toUpperCase()==c.toLowerCase())return n.a.createElement("h1",null,"You did not enter a character in one of the fields. Refresh the page");r+=c.toUpperCase()}e.onClick(r)},d=function(e){var t=f()(e.target).attr("tabindex")||0;t=Number(t);var a=document.getElementsByName("letter")[t].value;console.log(a),e.keyCode>=65&&e.keyCode<=90&&""!==a&&(t+=1);var r=f()("[tabindex="+t+"]");r[0]&&r.focus()};return null==t?n.a.createElement(E.a,{id:"forms",className:"py-3 text-center",onSubmit:c(i)},n.a.createElement("table",{className:"table table-bordered"},n.a.createElement("tbody",null,Array.from({length:a}).map((function(t,r){return n.a.createElement("tr",{key:r},Array.from({length:a}).map((function(t,c){return n.a.createElement("td",{key:r*a+c},n.a.createElement("input",{placeholder:e.letters.charAt(r*a+c),maxLength:"1",name:"letter",ref:l({required:!0}),id:r*a+c,tabIndex:r*a+c,onKeyUp:d,type:"text",style:{height:"2.15em"}}))})))})))),o.letter&&n.a.createElement("p",null,"Some values are not filled"),n.a.createElement("p",null,"To reset all, refresh the page"),n.a.createElement(h.a,{type:"submit",tabIndex:Math.pow(a,2),variant:"dark",size:"lg"},"Set Grid!")):n.a.createElement("div",null,n.a.createElement(E.a,{id:"forms",className:"py-1 text-center",onSubmit:c(i)},n.a.createElement(m.a,null,n.a.createElement(s.a,{lg:"9"},n.a.createElement("table",{className:"table table-bordered"},n.a.createElement("tbody",null,Array.from({length:a}).map((function(t,r){return n.a.createElement("tr",{key:r},Array.from({length:a}).map((function(t,c){return n.a.createElement("td",{key:r*a+c},n.a.createElement("input",{defaultValue:e.letters.charAt(r*a+c),maxLength:"1",name:"letter",ref:l({required:!0}),id:r*a+c,tabIndex:r*a+c,onKeyUp:d,type:"text",style:{height:"2.15em"}}))})))}))))),n.a.createElement(s.a,{lg:"3"},o.letter&&n.a.createElement("p",null,"Some values are not filled"),n.a.createElement("p",null,"To reset all, refresh the page"),n.a.createElement(h.a,{type:"submit",tabIndex:Math.pow(a,2),variant:"dark",size:"lg"},"Set Grid!")))),n.a.createElement("form",{className:"text-center",name:"next"},n.a.createElement("p",null,"current word: ")," ",n.a.createElement("h1",null," ",t," "),n.a.createElement("br",null),n.a.createElement(h.a,{variant:"dark",onClick:function(){e.nextClick()}},"Next Word!"),n.a.createElement("p",null,"Click once and then use SPACE or ENTER")))};var v=function(e){var t=e.directions,a=e.size;if(Array.isArray(t)&&0==t.length)return n.a.createElement("div",null);for(var r=[],l=Math.floor(t[0]/a),c=t[0]%a,o=1;o<t.length;o++){var m=Math.floor(t[o]/a),s=100*c+50,i=100*l+50,u=100*(t[o]%a)+50,d=100*m+50;r.push([s,i,u,d]),console.log(s,i,u,d),l=Math.floor(t[o]/a),c=t[o]%a}return n.a.createElement("div",null,n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 400 400",className:"mt-2"},n.a.createElement("circle",{cx:r[0][0],cy:r[0][1],r:"15",stroke:"black",strokeWidth:"3",fill:"red"}),n.a.createElement("defs",null,n.a.createElement("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"0",refY:"3.5",orient:"auto"},n.a.createElement("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#ffcc99",stroke:"black"}))),r.map((function(e,t){return n.a.createElement("line",{x1:e[0],y1:e[1],x2:e[2],y2:e[3],stroke:"#990000",strokeWidth:"2",markerEnd:"url(#arrowhead)",key:t})}))))};var b=function(e){var t=e.words;return Array.isArray(t)&&0==t.length?n.a.createElement("div",null):n.a.createElement("div",{className:"border border-dark rounded"},n.a.createElement("h3",null,"All Words"),n.a.createElement(m.a,null,t.map((function(e,t){return n.a.createElement(s.a,{key:e,xs:"6",sm:"4",md:"3",lg:"2"},e[0])}))))},g=a(20),y=a.n(g),k=a(34),w=a(33),x=a(21);var N=function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(r.useState)(""),u=Object(o.a)(c,2),d=u[0],f=u[1],E=Object(r.useState)([]),g=Object(o.a)(E,2),N=g[0],S=g[1],C=Object(r.useState)(null),O=Object(o.a)(C,2),j=O[0],A=O[1],W=Object(r.useState)(0),M=Object(o.a)(W,2),z=M[0],B=M[1],I=Object(r.useState)(4),q=Object(o.a)(I,2),T=q[0],U=(q[1],Object(r.useState)([])),Y=Object(o.a)(U,2),H=Y[0],K=Y[1],L="https://stevenyaooo.pythonanywhere.com";return Object(r.useEffect)((function(){""!=d&&H!=[]&&(S(H[z][1]),A(H[z][0]),B(z+1))}),[H]),n.a.createElement("div",{className:"bg-light"},n.a.createElement(x.a,{bg:"dark",variant:"dark"},n.a.createElement(x.a.Brand,{href:"#home",className:"pl-3"},"Word Hunt Solver")),n.a.createElement(w.a,{className:"p-3 bg-white"},n.a.createElement(k.a,null,n.a.createElement("h1",null,"Never Lose WordHunt Again!"),n.a.createElement("p",null,"Simply enter the 16 letters of your word hunt board and watch as the solutions magically appear. Check out my YouTube for more quality content:"),n.a.createElement(h.a,{href:"https://www.youtube.com/channel/UCZDp6CvSxKBEKycW4dpHIJQ",variant:"dark",size:"lg"},"Go to YouTube")),n.a.createElement(m.a,null,n.a.createElement(s.a,{md:"6"},n.a.createElement("h1",{className:"text-center"},"Enter your letters"),n.a.createElement(p,{onClick:function(e){!function(e){""!=e&&(f(e),y.a.post("".concat(L,"/solve"),{letters:e,size:T}).then((function(e){K(e.data.answer)}),(function(e){console.log(e)})),B(0))}(e)},nextClick:function(){""!=d&&(S(H[z][1]),A(H[z][0]),B(z+1))},currWord:j,size:T,letters:d}),!d&&n.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),a){var t=new FormData;t.append("file",a),y.a.post("".concat(L,"/solveimg"),t).then((function(e){f(e.data.letters),K(e.data.answer)}),(function(e){console.log(e)})),B(0)}}},n.a.createElement("div",{className:"text-center"},n.a.createElement("h3",null,"Or upload/take pic:"),n.a.createElement("div",{className:"d-flex flex-row flex-nowrap"},n.a.createElement("input",{type:"file",capture:"camera",accept:"image/*",name:"file",onChange:function(e){e.target.files[0]&&l(e.target.files[0])}}),n.a.createElement("input",{type:"submit",className:"ml-auto"}))))),n.a.createElement(s.a,{md:"6"},n.a.createElement("div",{className:"parent px-1"},n.a.createElement(i,{letters:d}),n.a.createElement("div",{className:"child"},n.a.createElement(v,{directions:N,size:T}))))),n.a.createElement("div",{className:"mt-3"},n.a.createElement(b,{words:H}))),n.a.createElement("footer",{className:"bg-dark text-light text-center text-xs p-3 absolute bottom-0 w-full to-bottom"},"\xa9 Copyright Steven Yao 2020"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(65);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.2209fd5b.chunk.js.map