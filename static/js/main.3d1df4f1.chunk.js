(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{114:function(e,t,i){},141:function(e,t,i){},142:function(e,t,i){},143:function(e,t,i){},145:function(e,t,i){"use strict";i.r(t);var g=i(0),s=i.n(g),a=i(36),n=i.n(a),A=(i(114),i(26)),u=i(39),r=i(9),I=i(1),c=function(e){var t=e.content,i=e.onClick,s=e.active,a=Object(g.useState)(!1),n=Object(u.a)(a,2),r=n[0],c=n[1];return Object(I.jsx)("div",{style:Object(A.a)(Object(A.a)({textAlign:"center",fontFamily:"quadon",fontSize:"2vmin",margin:"1.5% 1% 1.5% 1%",color:"#FFFFFF",border:"0.08em solid #000000",borderColor:"transparent"},r?{borderColor:"#FFFFFF"}:{}),s?{backgroundColor:"#002d72"}:{}),onClick:i,onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},children:Object(I.jsx)("div",{style:{padding:"0.8em 1.2em 0.8em 1.2em"},children:t})})},C=function(){var e=Object(r.f)(),t=Object(r.g)().pathname;return Object(I.jsx)("div",{style:{width:"100vw",display:"flex",justifyContent:"center",margin:"auto",backgroundColor:"black"},children:Object(I.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(I.jsx)(c,{content:"Home",onClick:function(){return e.push("/home")},active:"/home"===t||"/"===t}),Object(I.jsx)(c,{content:"Projects",onClick:function(){return e.push("/projects")},active:t.startsWith("/projects")}),Object(I.jsx)(c,{content:"About",onClick:function(){return e.push("/about")},active:"/about"===t}),Object(I.jsx)(c,{content:"Misc",onClick:function(){return e.push("/misc")},active:"/misc"===t}),Object(I.jsx)(c,{content:"Contact",onClick:function(){return e.push("/contact")},active:"/contact"===t})]})})},l=function(){return Object(I.jsx)("div",{id:"DummyPageNav",children:Object(I.jsx)("div",{style:{width:"100vw",display:"flex",justifyContent:"center",margin:"auto",backgroundColor:"black"},children:Object(I.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:[1,2,3,4,5].map((function(e,t){return Object(I.jsx)("div",{style:{textAlign:"center",fontFamily:"quadon",fontSize:"2vmin",margin:"1.5% 1% 1.5% 1%",color:"#FFFFFF",border:"0.08em solid #000000",borderColor:"transparent"},children:Object(I.jsx)("div",{style:{padding:"0.8em 1.2em 0.8em 1.2em"},children:"Button"})},t)}))})})})},o=i(78),m=i.n(o),d=i(99),b=i(80),p=i(162),j=i(100),h=i.n(j);function v(e){return new Promise((function(t){return setTimeout(t,e)}))}var f=function(){var e=Object(d.a)(m.a.mark((function e(t,i){var g,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v(500);case 3:return e.next=5,h.a.get("https://api.github.com/repos/david-andrew/".concat(t));case 5:g=e.sent,s=new Date(g.data.updated_at),i(s),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),i(void 0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,i){return e.apply(this,arguments)}}(),x=function(e){var t=e.title,i=e.github,s=e.lastUpdated,a=e.imgSrc,n=e.internalLink,c=e.externalLink,C=e.summary,l=e.tags,o=Object(r.f)(),m=Object(g.useState)(void 0),d=Object(u.a)(m,2),j=d[0],h=d[1];Object(g.useEffect)((function(){return void 0!==i?f(i,(function(e){h(void 0!==e?"Last Updated: ".concat(e.toLocaleDateString("default",{day:"2-digit",month:"long",year:"numeric"})):"Last Updated: <Failed to fetch timestamp>")})):h(void 0!==s?"Last Updated: ".concat(s):"Last Update: Unknown"),function(){return h(void 0)}}),[i,s]);var v=function(e){return void 0!==e?Object(I.jsx)(I.Fragment,{children:e}):Object(I.jsxs)(I.Fragment,{children:["Last Updated: ",Object(I.jsx)(b.a,{loading:!0,name:"clock outline"})]})}(j),x=Object(g.useState)(!1),O=Object(u.a)(x,2),y=O[0],S=O[1],M=function(){void 0!==n?o.push(n):void 0===c&&o.push("/wip")},q=void 0!==c?{as:"a",href:c,target:"_blank"}:{as:"div",onClick:M};return Object(I.jsxs)(p.a,Object(A.a)(Object(A.a)({},q),{},{style:{color:"white",padding:"1em",border:"0.08em solid #000000",borderColor:y?"#FFFFFF":"transparent"},onClick:M,onMouseEnter:function(){return S(!0)},onMouseLeave:function(){return S(!1)},children:[Object(I.jsx)(p.a.Image,{verticalAlign:"middle",src:a,style:{width:"7.5em"}}),Object(I.jsxs)(p.a.Content,{children:[Object(I.jsx)(p.a.Header,{style:{color:"white",fontFamily:"quadon",fontWeight:"normal"},children:t}),Object(I.jsx)(p.a.Meta,{style:{color:"white"},children:v}),Object(I.jsx)(p.a.Description,{style:{color:"white"},children:C}),l&&Object(I.jsxs)(p.a.Extra,{style:{color:"#DDDDDD",fontSize:"80%"},children:["Tags: ",l.join(", ")]})]})]}))},O=i(160),y=function(e){var t=e.children;return Object(I.jsxs)("div",{style:{backgroundColor:"black"},children:[Object(I.jsx)(l,{}),Object(I.jsx)(O.a,{children:Object(I.jsx)("div",{style:{fontFamily:"gentona",fontSize:"100%",textAlign:"justify",paddingTop:"1em",paddingBottom:"1em"},children:t})})]})},S=function(){return Object(I.jsx)(y,{children:Object(I.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales odio a semper elementum. Cras non rhoncus neque, scelerisque dignissim nisl. Proin ac augue sit amet magna eleifend lacinia. Vivamus sollicitudin luctus posuere. Nulla mattis purus vel vehicula bibendum. Nunc non auctor turpis, a posuere velit. In eleifend sem id vehicula dictum. Integer eros magna, porttitor vel lectus at, dictum hendrerit metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ornare orci quis diam porttitor dapibus. Morbi eget euismod odio. Maecenas quis varius est, id aliquet lectus.",Object(I.jsx)("br",{}),Object(I.jsx)("br",{}),"Curabitur malesuada porttitor mauris, eget faucibus justo malesuada non. Maecenas venenatis, felis sit amet hendrerit facilisis, est massa tempus dolor, ac ultrices turpis urna vitae enim. Pellentesque lacus erat, vehicula ut ante quis, semper semper ligula. Aliquam eu viverra magna. In iaculis dapibus magna, nec convallis turpis commodo eu. Aliquam bibendum ipsum turpis. Pellentesque faucibus ipsum in convallis laoreet. Suspendisse leo eros, aliquam ut elit a, blandit bibendum lectus. Suspendisse sed semper sapien. Aliquam auctor, tellus id aliquet accumsan, lorem ante placerat velit, quis maximus tellus eros interdum tellus. Integer nibh turpis, auctor vel vulputate eu, sollicitudin ut tortor.",Object(I.jsx)("br",{}),Object(I.jsx)("br",{}),"Vestibulum iaculis elementum dui euismod viverra. Nullam a facilisis felis. Praesent vehicula nisl ac urna commodo, in vulputate lacus blandit. Maecenas vitae faucibus libero, a gravida lacus. Mauris orci est, fringilla ut eros faucibus, vestibulum lobortis sem. Aliquam erat volutpat. Curabitur convallis tincidunt ex, sit amet accumsan massa varius ac. Praesent dignissim enim dui, at blandit ligula rhoncus non. Suspendisse vel arcu turpis. Mauris facilisis luctus congue. Nullam ornare id ipsum eget dictum. Maecenas dapibus sapien et lectus semper, quis dignissim justo tempor. Etiam nec dignissim metus. Integer id egestas nibh, et pellentesque mi. Suspendisse eget viverra magna. Morbi congue lectus vitae orci semper pellentesque. Aenean tristique erat id purus imperdiet tempor. In vitae velit vitae tortor placerat consectetur ac a urna. In vel velit id sapien semper blandit id eget risus. Nullam vulputate dolor nec tempus dignissim. Vivamus ultricies viverra libero id finibus. Ut vitae nisi condimentum, maximus sapien quis, accumsan est. Quisque mollis dolor id justo condimentum, a pharetra orci ultrices. Phasellus tincidunt, velit ac lacinia sodales, metus eros accumsan tortor, ultricies consequat massa nibh in nunc.",Object(I.jsx)("br",{}),Object(I.jsx)("br",{}),"Nulla dapibus massa in quam maximus convallis in sed ipsum. Nam commodo ac elit ullamcorper bibendum. Aenean pulvinar quam enim, eu porttitor massa suscipit eu. In fermentum quam sed arcu dignissim elementum. Cras tellus nunc, elementum id nisl vel, tristique rhoncus risus. Morbi dignissim semper mollis. Pellentesque feugiat purus sed efficitur feugiat. Maecenas vestibulum magna id nunc posuere, sit amet rhoncus lectus maximus. Aenean tristique, libero et pellentesque varius, arcu ligula luctus mauris, vel imperdiet nulla massa in turpis. Donec congue, mauris ac ornare lobortis, lacus metus bibendum enim, vel dapibus mauris erat ac lectus. Aliquam eu elit vel sem elementum scelerisque vel id libero. Duis cursus laoreet elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu est a dui consequat lacinia. Aenean ipsum ex, congue in nunc in, blandit consectetur erat. Maecenas in scelerisque magna, non ullamcorper est.",Object(I.jsx)("br",{}),Object(I.jsx)("br",{}),"Nulla dapibus massa in quam maximus convallis in sed ipsum. Nam commodo ac elit ullamcorper bibendum. Aenean pulvinar quam enim, eu porttitor massa suscipit eu. In fermentum quam sed arcu dignissim elementum. Cras tellus nunc, elementum id nisl vel, tristique rhoncus risus. Morbi dignissim semper mollis. Pellentesque feugiat purus sed efficitur feugiat. Maecenas vestibulum magna id nunc posuere, sit amet rhoncus lectus maximus. Aenean tristique, libero et pellentesque varius, arcu ligula luctus mauris, vel imperdiet nulla massa in turpis. Donec congue, mauris ac ornare lobortis, lacus metus bibendum enim, vel dapibus mauris erat ac lectus. Aliquam eu elit vel sem elementum scelerisque vel id libero. Duis cursus laoreet elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu est a dui consequat lacinia. Aenean ipsum ex, congue in nunc in, blandit consectetur erat. Maecenas in scelerisque magna, non ullamcorper est."]})})},M=function(){return Object(I.jsx)("div",{children:"Contact Page"})},q=i.p+"static/media/profile.2f44e726.jpg",w=(i(141),i(142),i(143),function(){return Object(I.jsxs)("div",{id:"HomePage",style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(I.jsx)("div",{style:{fontFamily:"quadon",fontSize:"10vmin",textAlign:"center"},children:Object(I.jsx)("p",{children:"David-Andrew Samson"})}),Object(I.jsx)("img",{src:q,style:{display:"block",marginLeft:"auto",marginRight:"auto",width:"50vmin"}}),Object(I.jsx)("div",{style:{fontFamily:"quadon",fontSize:"5vmin",textAlign:"center"},children:Object(I.jsx)("p",{children:"AI/ML - Music - Game Dev"})})]})}),k=function(){return Object(I.jsx)("div",{children:"Misc Page"})},P=i(161),D=i.p+"static/media/logo.354ef2ec.png",L="data:image/png;base64,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ZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgIHhtbG5zOkdJTVA9Imh0dHA6Ly93d3cuZ2ltcC5vcmcveG1wLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICB4bXBNTTpEb2N1bWVudElEPSJnaW1wOmRvY2lkOmdpbXA6ODhiZWUyNWYtZmQ0YS00ZTk0LWFiNjEtZTM3NGM0NmIyYjMwIgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdjMDNkZTAyLTcxMDgtNGViNC04YmMyLWIyZDNlMjYwN2Q2ZiIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAwYjkyMWI4LWYzN2MtNDliMi05ZDRlLWM3Mjk5NTY3OTlhYiIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIEdJTVA6QVBJPSIyLjAiCiAgIEdJTVA6UGxhdGZvcm09IkxpbnV4IgogICBHSU1QOlRpbWVTdGFtcD0iMTYyMTIyMTA3OTY5MTY2MCIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjI0IgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCI+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpCYWc+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjVkYWZmNDIxLWViMmYtNDdiOC1hZjJhLTM3ODc3YWUzYTdhOSIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChMaW51eCkiCiAgICAgIHN0RXZ0OndoZW49IjIwMjEtMDUtMTZUMjM6MTE6MTktMDQ6MDAiLz4KICAgIDwvcmRmOkJhZz4KICAgPC94bXBNTTpIaXN0b3J5PgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+kCw25QAAAYRpQ0NQSUNDIHByb2ZpbGUAACiRfZE9SMNAGIbfppaKVETsINIhQ3WyICriqFUoQoVQK7TqYHLpHzQxJCkujoJrwcGfxaqDi7OuDq6CIPgD4ubmpOgiJX6XFFrEeHB3D+9978vdd4DQqDLN6hoDNN02M6mkmMuviOFXhNCPIK0xmVnGrCSl4Tu+7hHg+12CZ/nX/Tl61YLFgIBIPMMM0yZeJ57atA3O+8RRVpZV4nPiUZMuSPzIdcXjN84llwWeGTWzmTniKLFY6mClg1nZ1IgnieOqplO+kPNY5bzFWavWWOue/IWRgr68xHWaMaSwgEVIEKGghgqqsJGgXSfFQobOkz7+IdcvkUshVwWMHPPYgAbZ9YP/we/eWsWJcS8pkgRCL47zMQyEd4Fm3XG+jx2neQIEn4Erve3faADTn6TX21r8COjbBi6u25qyB1zuAINPhmzKrhSkKRSLwPsZfVMeGLgFela9vrXOcfoAZKlX6Rvg4BAYKVH2ms+7uzv79m9Nq38//Y1yeDtqexIAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflBREDCxPPFLlXAAABRklEQVR42u3dUQqDMBBF0Yy4/y2PS1B4ETWe89+i5TKSWLRGjx781uYnEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJgFfvyZ1jh59sEQAAIAAEgAASAALAPsMw6P/3+NgEQAAJAAAgAASAA7AO8RXe2UK8qEwABIAAEgAAQAALAPsAs6f32u+/H98PnZwIgAASAABAAAkAAzFyFv/2dQSfr6PR+f3x4Z/8XaBMAASAABIAAEAACwD7AVV9/tXGNMgEQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAAUp4TmB6e5wTiEoAAEAACQAAIAPsA09b56dGlpxc/5897A3EJQAAIAAEgAASAfQBMAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAmOsAa0sj9l8vNxEAAAAASUVORK5CYII=",F=i.p+"static/media/dewy_dandelion.bfc731f1.jpg",E=[{title:"Dewy Programming Language",github:"dewy",imgSrc:F,internalLink:"/projects/dewy",summary:"An engineering focused programming language I am developing. Leverages a custom SRNGLR parser written entierly in C, which allows for much flexibility in the langiage Context Free Grammar specification",tags:["C","compilers","parsers","SRNGLR"]},{title:"Personal Website",github:"website",imgSrc:D,externalLink:"https://github.com/david-andrew/website",summary:"This website, written in react/typescript",tags:["Typescript","React","Semantic UI","CSS","HTML"]},{title:"Escort Mission 2020",github:"escort_mission_2020",imgSrc:L,summary:"Submission for the 2020 GMTK Game Jam",tags:["Godot","GDScript","2D Adventure Game"]},{title:"Musical DL Voice Synthesizer",github:"MusicalDL",imgSrc:D,summary:"2019 Machine Learning: Deep Learning (EN.601.682) capstone project",tags:["Python","PyTorch","AI/ML","choral","music","synthesis"]},{title:"Mechatronics Robot",imgSrc:D,summary:"Robot from mechatronics"},{title:"Draw Robot",imgSrc:D,summary:"UR5 robot arm project"},{title:"Boat Simulator",imgSrc:D,summary:"HopHacks 20XX submission"},{title:"Rewind",imgSrc:D,summary:"Fusce dictum dolor varius orci aliquet posuere. Donec interdum dui condimentum "},{title:"Ensemble (Hacking Harmony)",imgSrc:D,summary:"Fusce dictum dolor varius orci aliquet posuere. Donec interdum dui condimentum"},{title:"Dewy Programming Language",github:"dewy",imgSrc:F,internalLink:"/projects/dewy",summary:"An engineering focused programming language I am developing. Leverages a custom SRNGLR parser written entierly in C, which allows for much flexibility in the langiage Context Free Grammar specification",tags:["C","compilers","parsers","SRNGLR"]},{title:"Personal Website",github:"website",imgSrc:D,externalLink:"https://github.com/david-andrew/website",summary:"This website, written in react/typescript",tags:["Typescript","React","Semantic UI","CSS","HTML"]},{title:"Escort Mission 2020",github:"escort_mission_2020",imgSrc:L,summary:"Submission for the 2020 GMTK Game Jam",tags:["Godot","GDScript","2D Adventure Game"]},{title:"Musical DL Voice Synthesizer",github:"MusicalDL",imgSrc:D,summary:"2019 Machine Learning: Deep Learning (EN.601.682) capstone project",tags:["Python","PyTorch","AI/ML","choral","music","synthesis"]},{title:"Mechatronics Robot",imgSrc:D,summary:"Robot from mechatronics"},{title:"Draw Robot",imgSrc:D,summary:"UR5 robot arm project"},{title:"Boat Simulator",imgSrc:D,summary:"HopHacks 20XX submission"},{title:"Rewind",imgSrc:D,summary:"Fusce dictum dolor varius orci aliquet posuere. Donec interdum dui condimentum "},{title:"Ensemble (Hacking Harmony)",imgSrc:D,summary:"Fusce dictum dolor varius orci aliquet posuere. Donec interdum dui condimentum"}];var G=function(e){var t=e.pageSize,i=e.activePage,g=e.setActivePage;if(E.length<=t)return Object(I.jsx)(I.Fragment,{});var s=Math.ceil(E.length/t);return Object(I.jsx)("div",{id:"paginationmenu",style:{position:"fixed",width:"100vw",bottom:0,backgroundColor:"black",zIndex:100},children:Object(I.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",margin:"0.5% 0% 0.5% 0%"},children:Object(I.jsx)(P.a,{inverted:!0,style:{backgroundColor:"black",fontFamily:"quadon",fontSize:"100%"},firstItem:null,lastItem:null,totalPages:s,activePage:i,onPageChange:function(e,t){g(t.activePage)}})})})},N=function(){return Object(I.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",paddingBottom:"10px"},children:Object(I.jsx)(P.a,{inverted:!0,style:{backgroundColor:"black",fontFamily:"quadon",fontSize:"100%"},firstItem:null,lastItem:null,totalPages:3,activePage:1})})},R=function(){var e=Object(g.useState)(1),t=Object(u.a)(e,2),i=t[0],s=t[1],a=function(e,t,i){var g,s="string"===typeof(i=null!==(g=i)&&void 0!==g?g:1)?parseInt(i):i,a=(s-1)*t,n=Math.min(e.length,s*t);return e.slice(a,n)}(E,10,i);return Object(I.jsxs)("div",{style:{backgroundColor:"black"},children:[Object(I.jsx)(l,{}),Object(I.jsx)(O.a,{style:{marginBottom:"1em"},children:Object(I.jsx)("div",{style:{fontSize:"100%",fontFamily:"gentona",backgroundColor:"black",marginTop:"1em"},children:Object(I.jsx)(p.a.Group,{style:{color:"white"},children:a.map((function(e,t){return Object(g.createElement)(x,Object(A.a)(Object(A.a)({},e),{},{key:t}))}))})})}),Object(I.jsx)(G,{pageSize:10,activePage:i,setActivePage:s}),Object(I.jsx)(N,{})]})},T={fontWeight:"normal",fontFamily:"quadon"},W=function(e){var t=e.children;return Object(I.jsx)("h1",{style:T,children:t})},Z=function(){return Object(I.jsx)(y,{children:Object(I.jsx)(W,{children:"404: Page not found"})})},B=function(){return Object(I.jsx)(y,{children:Object(I.jsx)(W,{children:"This page is still under construction"})})},V=function(){return Object(I.jsxs)(y,{children:[Object(I.jsx)(W,{children:"Dewy Programming Language"}),Object(I.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur mi a blandit faucibus. Praesent vitae dapibus lorem, eget egestas nisl. Suspendisse condimentum vulputate turpis id sagittis. Nunc sodales augue velit, et porta ante scelerisque ut. Phasellus dapibus suscipit nulla, quis elementum lectus consectetur ut. Pellentesque eu lacus eget libero lacinia posuere. Morbi a arcu ut diam feugiat rutrum. Donec tristique, lacus id mollis ullamcorper, nibh elit ultrices metus, at tincidunt nibh metus ac quam. Donec convallis consequat magna eu ultricies. Pellentesque id libero et lectus venenatis tincidunt. Phasellus vestibulum risus at lorem dignissim sodales. Nam ac varius eros.",Object(I.jsx)("br",{}),Object(I.jsx)("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra posuere velit et maximus. Proin laoreet dolor quis sapien pharetra, in faucibus lorem bibendum. Praesent sagittis et nunc non vulputate. Vestibulum sit amet enim in massa feugiat fringilla. In a leo posuere, dictum eros nec, posuere augue. Sed iaculis sit amet nisl sed sollicitudin. Morbi consequat augue non porta porta. Sed maximus ac lorem sed mattis. Maecenas luctus blandit semper. Integer vestibulum ullamcorper nulla, eu accumsan tellus feugiat sed. Vestibulum tempor, risus et condimentum bibendum, ante massa molestie nibh, a mollis diam metus sit amet leo. Sed odio neque, pulvinar vel lacinia ac, facilisis eget massa. Donec tempor lectus justo, at luctus mauris vehicula id. Nullam dictum, nisi in vehicula semper, erat mi aliquet dolor, sit amet sagittis velit dolor at dui. Donec rutrum est et porttitor vulputate. Vestibulum maximus, mi ac tempor posuere, enim ligula condimentum lectus, sed ullamcorper metus felis quis ligula. Proin sit amet tincidunt mauris. Sed gravida velit at lacus lobortis, vel dignissim elit finibus. In consectetur tortor ut odio auctor venenatis. Maecenas et cursus tellus, non mollis dolor. Phasellus molestie porttitor nisl, nec semper diam mollis a. Aliquam nec nibh eget massa scelerisque ultrices. Vestibulum justo libero, accumsan vitae ex id, lacinia mattis massa. Sed eu dui dolor. Suspendisse ac nunc blandit, sagittis lorem ut, ornare neque. Vestibulum arcu urna, elementum in justo eget, sodales tristique elit. Cras condimentum semper tortor, non tristique sem scelerisque eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In scelerisque ligula est, ut pharetra tellus egestas non. Aliquam erat volutpat. Maecenas rutrum, erat sit amet volutpat ultrices, risus lacus lacinia purus, aliquet blandit sem tellus in neque. Donec id ipsum neque. Vestibulum imperdiet, quam sed consectetur vulputate, nisi lectus tristique tortor, vitae rutrum dui est sit amet tellus. Praesent gravida consectetur augue, ac ullamcorper enim euismod ac. Ut bibendum mi varius enim laoreet scelerisque. Fusce ut enim eget justo convallis fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque fermentum ultrices elit, vel porttitor libero cursus vel. Integer sit amet mollis lacus. Sed sit amet mauris aliquam, vehicula quam vitae, feugiat orci. Fusce congue dictum massa. Sed bibendum auctor enim ac cursus. Nunc sed diam quis mi congue volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed nec tellus magna. Nullam et velit dignissim, ornare nunc a, scelerisque nisl. Quisque rhoncus magna sed nibh tincidunt, nec pretium arcu ultrices. Vivamus condimentum magna ante, eget faucibus diam blandit ac."]})]})},Y=i(56),Q=function(){var e=[{page:V,path:"/projects/dewy"}];return Object(I.jsx)("div",{id:"View",style:{backgroundColor:"black",color:"white",width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between",fontFamily:"gentona"},children:Object(I.jsxs)(Y.a,{children:[Object(I.jsx)("div",{id:"PageNav",style:{position:"fixed",width:"100wv",backgroundColor:"red",zIndex:100},children:Object(I.jsx)(C,{})}),Object(I.jsx)("div",{id:"PageBody",style:{flexGrow:1},children:Object(I.jsxs)(r.c,{children:[Object(I.jsx)(r.a,{exact:!0,path:["/","/home"],children:Object(I.jsx)(w,{})}),Object(I.jsx)(r.a,{exact:!0,path:"/projects",children:Object(I.jsx)(R,{})}),e.map((function(e,t){var i=e.page,g=e.path;return Object(I.jsx)(r.a,{exact:!0,path:g,children:i()},t)})),Object(I.jsx)(r.a,{exact:!0,path:"/about",children:Object(I.jsx)(S,{})}),Object(I.jsx)(r.a,{exact:!0,path:"/misc",children:Object(I.jsx)(k,{})}),Object(I.jsx)(r.a,{exact:!0,path:"/contact",children:Object(I.jsx)(M,{})}),Object(I.jsx)(r.a,{exact:!0,path:"/wip",children:Object(I.jsx)(B,{})}),Object(I.jsx)(r.a,{path:"*",children:Object(I.jsx)(Z,{})})]})})]})})},H=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,164)).then((function(t){var i=t.getCLS,g=t.getFID,s=t.getFCP,a=t.getLCP,n=t.getTTFB;i(e),g(e),s(e),a(e),n(e)}))};i(144);n.a.render(Object(I.jsx)(s.a.StrictMode,{children:Object(I.jsx)(Q,{})}),document.getElementById("root")),H()}},[[145,1,2]]]);
//# sourceMappingURL=main.3d1df4f1.chunk.js.map