(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],[,function(e,t,n){e.exports={player:"J5C2l4o1kksYawq9Q3sPp",mainImage:"_1uZYaDBJZTo3JtyKuoaZ57",arrowButton:"_33y9p4CqXA-zlELbMj0i87",rewindButton:"_1pgFDxksw2alg--juI1vw-",hideButton:"_3kjaLvg5ZdBJk41C3zM3O1",viewMode:"_3oASVoSz7UoaVuClHHAe0p",viewButton:"_3EO_ZxIkful6hwUTwCIy2",gameTitle:"_3GrIj7q-FWxZtJhMaVwUR-",tooltip:"CV0TxX8Aihg5Ba-ImEdvc",icon:"_1Tdj6LtDxwKTmcuPyxLjzB",normal:"_3A9AslzK-5JYdIn7Q29GS8",wide:"_1B3e8tjOycxxoDjaSMgyDG",rotateHorizontal:"AI03vv8mMyvBi7DJ0sM1o"}},function(e,t,n){e.exports={colorPicker:"_1mOmwaY3NO1CmfBdyxRK0w",colorButton:"_2g5iCOcjoqYf8e0ok50Y9X",black:"xN-S_Slh-uXjZ1VQR0Qhs",dark:"_3OpNa3MSz2_8LZJpZ3B5rX",light:"_37LZ9U2_8h_joqEeW9Y762",darkblue:"_3C7Vpo2qFNNz-fJ6cevocm",purple:"_3nG8iB75V3UBIqNN7RaIYE",darkgreen:"FPn4Lo8xTFHSEHHSJTz9V",white:"_12MLQE2A3iRvp6nt3jpVyP"}},function(e,t,n){e.exports={previewImage:"oE9FEaKg7_340bprDB_gp",gallery:"_26VSGZdhrkGmux4x-aNbtG",currentImage:"_213NXhwLtTng9wq2Aa-8Dl"}},,function(e,t,n){e.exports={app:"_1aiweI1hnqR71SRL2AbRqR"}},function(e,t,n){e.exports={list:"_3RKHXqOZ8qnU_DXQLNvO25",title:"CSCdXnyoQ8yN_wlLuM_Kw"}},,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(8),r=n.n(i),s=n(4),c=n(5),l=n.n(c),u=n(1),m=n.n(u),g=n(6),d=n.n(g),p=function(e){return o.a.createElement("div",{className:[m.a.player,e.viewMode].join(" "),onMouseEnter:function(){return e.setShowButtons("")},onMouseLeave:function(){return e.setShowButtons(m.a.hideButton)}},o.a.createElement("img",{className:[m.a.rewindButton,e.showButtons].join(" "),onClick:function(){return e.setSelectedImage(1)},onMouseOver:function(){return e.setTooltip("Rewind to first image")},onMouseLeave:function(){return e.setTooltip("")},src:"./assets/icons/rewind.png",alt:""}),o.a.createElement("div",{className:[m.a.arrowButton,e.showButtons].join(" "),onClick:function(){return e.selectedImage>1&&e.setSelectedImage((function(e){return e-1}))},onMouseOver:function(){return e.setTooltip("Show previous image (left arrow or a)")},onMouseLeave:function(){return e.setTooltip("")}},o.a.createElement("img",{className:m.a.icon,src:"./assets/icons/previous.png",alt:""})),o.a.createElement("img",{className:m.a.mainImage,src:"./assets/images/"+e.title+"/"+e.shortTitle+" ("+e.selectedImage+").jpg",alt:""}),o.a.createElement("div",{className:[m.a.arrowButton,e.showButtons].join(" "),onClick:function(){return e.selectedImage<e.imageLength&&e.setSelectedImage((function(e){return e+1}))},onMouseOver:function(){return e.setTooltip("Show next image (right arrow or d)")},onMouseLeave:function(){return e.setTooltip("")}},o.a.createElement("img",{className:[m.a.icon].join(" "),src:"./assets/icons/next.png",alt:""})),o.a.createElement("img",{className:[m.a.rewindButton,e.showButtons,m.a.rotateHorizontal].join(" "),onClick:function(){return e.setSelectedImage(e.imageLength)},onMouseOver:function(){return e.setTooltip("Rewind to last image")},onMouseLeave:function(){return e.setTooltip("")},src:"./assets/icons/rewind.png",alt:""}))},f=function(e){return o.a.createElement("div",{className:m.a.viewMode},o.a.createElement("div",{className:m.a.viewButton,onClick:function(){return e.setViewMode(m.a.normal)}},"N"),o.a.createElement("div",{className:m.a.viewButton,onClick:function(){return e.setViewMode(m.a.wide)}},"W"))},w=n(2),h=n.n(w),v=function(e){return o.a.createElement("div",{className:h.a.colorPicker},o.a.createElement("div",{className:[h.a.colorButton,h.a.black].join(" "),onClick:function(){return e.setBackground(h.a.black)}}),o.a.createElement("div",{className:[h.a.colorButton,h.a.dark].join(" "),onClick:function(){return e.setBackground(h.a.dark)}}),o.a.createElement("div",{className:[h.a.colorButton,h.a.light].join(" "),onClick:function(){return e.setBackground(h.a.light)}}),o.a.createElement("div",{className:[h.a.colorButton,h.a.darkblue].join(" "),onClick:function(){return e.setBackground(h.a.darkblue)}}),o.a.createElement("div",{className:[h.a.colorButton,h.a.purple].join(" "),onClick:function(){return e.setBackground(h.a.purple)}}),o.a.createElement("div",{className:[h.a.colorButton,h.a.darkgreen].join(" "),onClick:function(){return e.setBackground(h.a.darkgreen)}}),o.a.createElement("div",{className:[h.a.colorButton,h.a.white].join(" "),onClick:function(){return e.setBackground(h.a.white)}}))},k=function(e){return o.a.createElement("div",{className:m.a.gameTitle},e.gameTitle)},E=function(e){return o.a.createElement("div",{className:m.a.tooltip},e.tooltip)},T=n(3),I=n.n(T),j=function(e){return o.a.createElement("div",{className:I.a.gallery},e.selectedImage>3&&o.a.createElement("img",{className:I.a.previewImage,src:"./assets/images/"+e.title+"/"+e.shortTitle+" ("+(e.selectedImage+-3)+").jpg",onClick:function(){return e.setSelectedImage((function(e){return e-3}))},onMouseOver:function(){return e.setTooltip("Show selected image")},onMouseLeave:function(){return e.setTooltip("")},alt:""}),e.selectedImage>2&&o.a.createElement("img",{className:I.a.previewImage,src:"./assets/images/"+e.title+"/"+e.shortTitle+" ("+(e.selectedImage+-2)+").jpg",onClick:function(){return e.setSelectedImage((function(e){return e-2}))},onMouseOver:function(){return e.setTooltip("Show selected image")},onMouseLeave:function(){return e.setTooltip("")},alt:""}),e.selectedImage>1&&o.a.createElement("img",{className:I.a.previewImage,src:"./assets/images/"+e.title+"/"+e.shortTitle+" ("+(e.selectedImage+-1)+").jpg",onClick:function(){return e.setSelectedImage((function(e){return e-1}))},onMouseOver:function(){return e.setTooltip("Show selected image")},onMouseLeave:function(){return e.setTooltip("")},alt:""}),o.a.createElement("img",{className:[I.a.previewImage,I.a.currentImage].join(" "),src:"./assets/images/"+e.title+"/"+e.shortTitle+" ("+(e.selectedImage+0)+").jpg",onMouseOver:function(){return e.setTooltip("Current image")},onMouseLeave:function(){return e.setTooltip("")},alt:""}),e.selectedImage<e.imageLength&&o.a.createElement("img",{className:I.a.previewImage,src:"./assets/images/"+e.title+"/"+e.shortTitle+" ("+(e.selectedImage+1)+").jpg",onClick:function(){return e.setSelectedImage((function(e){return e+1}))},onMouseOver:function(){return e.setTooltip("Show selected image")},onMouseLeave:function(){return e.setTooltip("")},alt:""}),e.selectedImage<e.imageLength-1&&o.a.createElement("img",{className:I.a.previewImage,src:"./assets/images/"+e.title+"/"+e.shortTitle+" ("+(e.selectedImage+2)+").jpg",onClick:function(){return e.setSelectedImage((function(e){return e+2}))},onMouseOver:function(){return e.setTooltip("Show selected image")},onMouseLeave:function(){return e.setTooltip("")},alt:""}),e.selectedImage<e.imageLength-2&&o.a.createElement("img",{className:I.a.previewImage,src:"./assets/images/"+e.title+"/"+e.shortTitle+" ("+(e.selectedImage+3)+").jpg",onClick:function(){return e.setSelectedImage((function(e){return e+3}))},onMouseOver:function(){return e.setTooltip("Show selected image")},onMouseLeave:function(){return e.setTooltip("")},alt:""}))},B=function(){var e=Object(a.useState)(1),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(l.a.white),c=Object(s.a)(r,2),u=c[0],g=c[1],w=Object(a.useState)(!1),h=Object(s.a)(w,2),T=h[0],I=h[1],B=Object(a.useState)(""),S=Object(s.a)(B,2),L=S[0],N=S[1],M=Object(a.useState)(m.a.normal),O=Object(s.a)(M,2),y=O[0],C=O[1],_=Object(a.useState)(0),b=Object(s.a)(_,2),x=b[0],z=b[1],R=Object(a.useState)(null),A=Object(s.a)(R,2),V=A[0],q=(A[1],[{title:"Bia\u0142a Podlaska",imageLength:32,shortTitle:"Biala"},{title:"Gdynia",imageLength:46,shortTitle:"Gdynia"},{title:"Szczecin",imageLength:26,shortTitle:"Szczecin"},{title:"Bergamo",imageLength:21,shortTitle:"Bergamo"},{title:"Rzym",imageLength:61,shortTitle:"Rzym"},{title:"Mediolan",imageLength:30,shortTitle:"Mediolan"}]);return Object(a.useEffect)((function(){var e=function(e){console.log(e.key),("ArrowLeft"===e.key||"a"===e.key)&&n>1?i((function(e){return e-1})):"ArrowRight"===e.key||"d"===e.key?n<q[x].imageLength&&i((function(e){return e+1})):" "===e.key?y===m.a.wide?C(m.a.normal):C(m.a.wide):"ArrowDown"===e.key||"s"===e.key?x<q.length-1&&z((function(e){return e+1})):"ArrowUp"===e.key||"w"===e.key?x>0&&z((function(e){return e-1})):"z"===e.key?i(1):"x"===e.key&&i(q[x].imageLength)};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}})),Object(a.useEffect)((function(){i(1)}),[x]),o.a.createElement("div",{className:[l.a.app,u].join(" ")},o.a.createElement("div",{className:d.a.list},q.map((function(e,t){return o.a.createElement("div",{className:d.a.title,onClick:function(){z(t),i(1)}},e.title)}))),o.a.createElement(k,{gameTitle:q[x].title}),o.a.createElement(E,{tooltip:L}),o.a.createElement(v,{setBackground:g}),o.a.createElement(f,{setViewMode:C}),o.a.createElement(p,{viewMode:y,selectedImage:n,setSelectedImage:i,showButtons:T,setShowButtons:I,setTooltip:N,imageLength:q[x].imageLength,title:q[x].title,shortTitle:q[x].shortTitle,buttonState:V}),o.a.createElement(j,{selectedImage:n,setSelectedImage:i,setTooltip:N,imageLength:q[x].imageLength,title:q[x].title,shortTitle:q[x].shortTitle}))};r.a.render(o.a.createElement(B,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.dd41eefb.chunk.js.map