(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),c=a.n(i),r=a(7),o=a.n(r),l=a(25);a(87);var s=function(e){return Object(n.jsx)("div",{className:"Navigation",children:e.item.map((function(t){return Object(n.jsx)(l.c,{className:"NavItem "+e.class,exact:!0,to:t.path,children:t.name},t.path)}))})},O={APPLICATION:"WORDATA",PLACEHOLDER:{TITLE:"\uc81c\ubaa9",GENRE:"\uc7a5\ub974",FILE:"filename",EMPTY_TABLE:"No Data"},TEXT:{PERSONAL:"\uac1c\uc778",ACCOUNT:"\uacc4\uc815",DIFFICULTY:"\ub09c\uc774\ub3c4",MY:"\ub0b4",WORD_LIST:"\ub2e8\uc5b4\uc7a5",MAIN_TITLE:"\ub2e8\uc5b4\uc7a5 \ubd84\uc11d \uc5f0\uad6c \uc2e0\uccad\uc11c",MORE:"\ub354\ubcf4\uae30",GRADE:"\ub4f1\uae09",MAIL:"\uba54\uc77c",PASSWORD:"\ube44\ubc00\ubc88\ud638",ID:"\uc544\uc774\ub514",ABOUT:"\uc548\ub0b4",MOVE:"\uc73c\ub85c \uc774\ub3d9",NAME:"\uc774\ub984",NAME_:"\uba85",INPUT:"\uc785\ub825",INFO:"\uc815\ubcf4",TYPE:"\ud0c0\uc785",FILE:"\ud30c\uc77c",PROFILE:"\ud504\ub85c\ud544",SETTING:"\ud658\uacbd\uc124\uc815",LEVEL:"Lv",NOT_FOUND:"404 Page Not Found"},BUTTON:{IMAGE:"\uc0ac\uc9c4",UPLOAD:"\uc5c5\ub85c\ub4dc",CREATE:"\uc0dd\uc131",DELETE:"\uc0ad\uc81c",CHANGE:"\ubcc0\uacbd",EDIT:"\uc218\uc815",SEARCH:"\uac80\uc0c9",CONFIRM:"\ud655\uc778",CANCEL:"\ucde8\uc18c",MANAGE:"\uad00\ub9ac",LOGOUT:"\ub85c\uadf8\uc544\uc6c3",LOGIN:"\ub85c\uadf8\uc778"},ALERT:{ERROR:{SEARCH:{TITLE:"\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"}},INFO:{},SUCCESS:{},CONFIRM:{}},TABLE:{COLUMNS:{LABEL:{IMAGE:"\ud3ec\uc2a4\ud130",TITLE:"\uc81c\ubaa9",DIRECTOR:"\uac10\ub3c5",ACTORS:"\ubc30\uc6b0",RATING:"\ud3c9\uc810"},VALUE:{IMAGE:"image",TITLE:"title",DIRECTOR:"director",ACTORS:"actor",RATING:"userRating"}}},ROUTER:{PATH:{HOME:"/",LIST:"/list",MAIN:"/main",MYPAGE:"/mypage",LOGIN:"/login",WHAT:"/what",WHY:"/why",HOW:"/how",NOT_FOUND:"*"},NAME:{"":"Home",HOME:"Home",LIST:"Movie",MAIN:"\ubd84\uc11d \ud398\uc774\uc9c0",MYPAGE:"My Page",LOGIN:"Log In",WHAT:"What",WHY:"Who",HOW:"How",NOT_FOUND:"NOTFOUND"},META:{CATEGORY:{MAIN:1,SUB:2}}},URL:{QUERY:{QUERY:"query",GENRE:"genre",START:"start",SIZE:"display"}}};a(92);var d=function(e){var t=W.filter((function(e){return e.name===O.ROUTER.NAME.LIST}));return Object(n.jsxs)("div",{className:"Home",children:[Object(n.jsx)("div",{className:"SizeRes26",children:O.ROUTER.NAME.HOME}),Object(n.jsx)(s,{class:"ColorPrimary ButtonDarken Size26",item:t})]})},u=a(18),j=a(19),E=a(22),T=a(21),h=a(38),m=a(160),R=a(162),N={ajax:{query:"/v1/search/movie.json",key:{CLIENT_ID:"DXGGyoy_R6h_AXjrehxL",CLIENT_SECRET:"oYB51nGp7j"},config:{headers:{"X-Naver-Client-Id":"DXGGyoy_R6h_AXjrehxL","X-Naver-Client-Secret":"oYB51nGp7j"},mode:{CORS:"cors"}},get:{},post:{}},default:{image:"https://via.placeholder.com/100"}},v={TABULATOR:{data:{genreList:[{title:"\uc804\uccb4",value:0},{title:"\ub4dc\ub77c\ub9c8",value:1},{title:"\ud310\ud0c0\uc9c0",value:2},{title:"\uc11c\ubd80",value:3},{title:"\uacf5\ud3ec",value:4},{title:"\ub85c\ub9e8\uc2a4",value:5},{title:"\ubaa8\ud5d8",value:6},{title:"\uc2a4\ub9b4\ub7ec",value:7},{title:"\ub290\uc640\ub974",value:8},{title:"\uceec\ud2b8",value:9},{title:"\ub2e4\ud050\uba58\ud130\ub9ac",value:10},{title:"\ucf54\ubbf8\ub514",value:11},{title:"\uac00\uc871",value:12},{title:"\ubbf8\uc2a4\ud130\ub9ac",value:13},{title:"\uc804\uc7c1",value:14},{title:"\uc560\ub2c8\uba54\uc774\uc158",value:15},{title:"\ubc94\uc8c4",value:16},{title:"\ubba4\uc9c0\uceec",value:17},{title:"SF",value:18},{title:"\uc561\uc158",value:19},{title:"\ubb34\ud611",value:20},{title:"\uc5d0\ub85c",value:21},{title:"\uc11c\uc2a4\ud39c\uc2a4",value:22},{title:"\uc11c\uc0ac",value:23},{title:"\ube14\ub799\ucf54\ubbf8\ub514",value:24},{title:"\uc2e4\ud5d8",value:25},{title:"\uc601\ud654\uce74\ud230",value:26},{title:"\uc601\ud654\uc74c\uc545",value:27},{title:"\uc601\ud654\ud328\ub7ec\ub514\ud3ec\uc2a4\ud130",value:28}]},options:{common:{height:"calc(100% - 40px)",layout:"fitColumns",placeholder:O.PLACEHOLDER.EMPTY_TABLE,movableColumns:!0,ajaxConfig:{mode:N.ajax.config.mode.CORS,method:"GET",headers:N.ajax.config.headers},pagination:"remote",paginationSize:10}}},MATERIAL_UI:{}},A=(a(93),function(e){Object(E.a)(a,e);var t=Object(T.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).chagneTitle=function(t){if(13===t.keyCode||9===t.keyCode){if(!t.target.value)return alert(O.ALERT.ERROR.SEARCH.TITLE),t.preventDefault(),!1;var a={key:O.URL.QUERY.QUERY,value:t.target.value};e.props.onSearch(a)}},e.changeGenre=function(t,a,n){var i={key:O.URL.QUERY.GENRE,value:a.value};e.props.onSearch(i)},e}return Object(j.a)(a,[{key:"render",value:function(){return console.log("Render : Toolbar component"),Object(n.jsxs)("div",{className:"Toolbar",children:[Object(n.jsx)("div",{className:"Search",children:Object(n.jsx)(m.a,{id:"search-title",style:{width:200},label:O.PLACEHOLDER.TITLE,required:!0,onKeyDown:this.chagneTitle})}),Object(n.jsx)("div",{className:"Search",children:Object(n.jsx)(R.a,{id:"search-genre",style:{width:200},disableClearable:!0,defaultValue:v.TABULATOR.data.genreList[0],options:v.TABULATOR.data.genreList,getOptionLabel:function(e){return e.title},onChange:this.changeGenre,renderInput:function(e){return Object(n.jsx)(m.a,Object(h.a)(Object(h.a)({},e),{},{label:O.PLACEHOLDER.GENRE}))}})})]})}}]),a}(c.a.Component)),b=a(68),L=(a(106),function(e){Object(E.a)(a,e);var t=Object(T.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).ajaxURLGenerator=function(e,t,a){console.log("ajaxURLGenerator",e,a);var n="".concat(e,"?").concat(O.URL.QUERY.QUERY,"=").concat(a.query,"&").concat(O.URL.QUERY.START,"=").concat((a.page-1)*a.size+1);return n+=a.genre?"&".concat(O.URL.QUERY.GENRE,"=").concat(a.genre):""},n.ajaxResponse=function(e,t,a){var n=a.items;return console.log("ajaxResponse",e,a),n.forEach((function(e){return e.title="".concat(e.title,"<br><i>").concat(e.subtitle,"</i>"),e.image=""===e.image?N.default.image:e.image,e.actor=e.actor.replace(/\|/gi," || "),e.director=e.director.slice(0,-1),e.userRating/=2,e})),{last_page:Math.min(Math.ceil(a.total/10),100),data:n}},n.ajaxError=function(e){console.log("ajaxError",e)},n.myRef=c.a.createRef(),n.columns=[{title:O.TABLE.COLUMNS.LABEL.IMAGE,field:O.TABLE.COLUMNS.VALUE.IMAGE,minWidth:150,width:150,hozAlign:"center",formatter:"image",headerSort:!1},{title:O.TABLE.COLUMNS.LABEL.TITLE,field:O.TABLE.COLUMNS.VALUE.TITLE,minWidth:200,formatter:"html"},{title:O.TABLE.COLUMNS.LABEL.DIRECTOR,field:O.TABLE.COLUMNS.VALUE.DIRECTOR,minWidth:120},{title:O.TABLE.COLUMNS.LABEL.ACTORS,field:O.TABLE.COLUMNS.VALUE.ACTORS,minWidth:150},{title:O.TABLE.COLUMNS.LABEL.RATING,field:O.TABLE.COLUMNS.VALUE.RATING,minWidth:100,width:150,hozAlign:"center",formatter:"star"}],n.options=Object(h.a)(Object(h.a)({},v.TABULATOR.options.common),{},{ajaxURLGenerator:n.ajaxURLGenerator,ajaxResponse:n.ajaxResponse,ajaxError:n.ajaxError}),n}return Object(j.a)(a,[{key:"render",value:function(){return console.log("Render : Movie component"),Object(n.jsx)("div",{className:"Movie",children:Object(n.jsx)(b.ReactTabulator,{ref:this.myRef,className:"Table",columns:this.columns,options:this.options,data:[]})})}},{key:"componentDidMount",value:function(){console.log("componentDidMount : Movie component")}},{key:"componentDidUpdate",value:function(){(console.log("componentDidUpdate : Movie component"),this.props.urlQuery[O.URL.QUERY.QUERY])?this.myRef.current.table.setData(N.ajax.query,this.props.urlQuery):alert(O.ALERT.ERROR.SEARCH.TITLE)}}]),a}(c.a.Component)),f=(a(107),function(e){Object(E.a)(a,e);var t=Object(T.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleSearch=function(e){n.setState((function(t){var a=t.urlQuery;return a[e.key]=e.value,{urlQuery:a}}))},n.state={urlQuery:{}},n}return Object(j.a)(a,[{key:"render",value:function(){console.log("Render : List component");var e=this.state.urlQuery;return Object(n.jsxs)("div",{className:"List",children:[Object(n.jsx)(A,{onSearch:this.handleSearch}),Object(n.jsx)(L,{urlQuery:e})]})}}]),a}(c.a.Component)),x=a(163),p=a(159),U=a(69),C=a.n(U),I=function(e){Object(E.a)(a,e);var t=Object(T.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleUpload=function(e){console.log("image change",e);var t=new FileReader,a=e.target.files[0];t.onloadend=function(){console.log("onloaded"),n.setState({selectedFile:a,previewUrl:t.result})},t.readAsDataURL(a)},n.state={selectedFile:null,previewUrl:null},n}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"Profile",children:[Object(n.jsx)(x.a,{className:"ProfileImage",src:this.state.previewUrl}),Object(n.jsxs)("div",{className:"ProfileUpload BackColorPrimary Opacity8 Radius50",children:[Object(n.jsx)("input",{accept:"image/*",className:"Hidden",id:"profile-upload",type:"file",onChange:this.handleUpload}),Object(n.jsx)("label",{htmlFor:"profile-upload",children:Object(n.jsx)(p.a,{className:"Button ColorWhite",variant:"contained","aria-label":"upload picture",component:"span",children:Object(n.jsx)(C.a,{})})})]})]})}}]),a}(c.a.Component),g=a(161);var M=function(e){return Object(n.jsx)(g.a,{className:"Popover",id:e.id,anchorEl:e.anchor,open:!!e.anchor,onClose:e.onClose,children:e.content,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"center",horizontal:"left"}})},S=a(70),y=a.n(S),B=function(e){Object(E.a)(a,e);var t=Object(T.a)(a);function a(e){var i;return Object(u.a)(this,a),(i=t.call(this,e)).handleClick=function(e){i.setState({anchor:e.currentTarget})},i.handleClose=function(){i.setState({anchor:null})},i.generateContent=function(){return Object(n.jsxs)("div",{className:"Item",children:[Object(n.jsx)("div",{className:"ColorPrimary Bold",children:O.TEXT.PROFILE}),Object(n.jsx)("div",{className:"ColorExtra Size14",children:O.TEXT.PERSONAL}),Object(n.jsx)("div",{className:"ColorExtra Size14",children:O.TEXT.WORD_LIST}),Object(n.jsxs)("div",{className:"ColorExtra Size14",children:[O.TEXT.GRADE,O.TEXT.ABOUT]}),Object(n.jsxs)("div",{className:"ColorExtra Size14",children:[O.TEXT.INFO,O.TEXT.MORE]})]})},i.popoverID="popover",i.state={anchor:null,content:null},i}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"InfoMin",children:[Object(n.jsxs)("div",{className:"Title",children:[Object(n.jsxs)("span",{className:"ColorExtra Size34 Left",children:[O.TEXT.LEVEL,". ",8]}),Object(n.jsx)("span",{className:"ColorBody SizeRes34 Right Bold",children:"\uc6cc\ub514"}),Object(n.jsx)("div",{className:"ColorWarning",children:Object(n.jsx)(y.a,{className:"RoundButtonDarken",onClick:this.handleClick,ref:this.myRef})})]}),Object(n.jsxs)("div",{className:"Size16 Item",children:[Object(n.jsx)("span",{className:"ColorExtra Left",children:O.TEXT.ID}),Object(n.jsx)("span",{className:"ColorBody Right",children:"wordy"})]}),Object(n.jsxs)("div",{className:"Size16 Item",children:[Object(n.jsx)("span",{className:"ColorExtra Left",children:O.TEXT.MAIL}),Object(n.jsx)("span",{className:"ColorBody Right",children:"wordy@gmail.com"})]}),Object(n.jsxs)("div",{className:"Size14 Bottom",children:[Object(n.jsx)(l.b,{className:"ButtonDarken ColorPrimary",to:"/",children:O.BUTTON.LOGOUT}),Object(n.jsxs)(l.b,{className:"ButtonDarken ColorPrimary",to:O.ROUTER.PATH.LOGIN,children:[O.TEXT.PERSONAL,O.TEXT.INFO," ",O.BUTTON.EDIT]})]}),Object(n.jsx)(M,{anchor:this.state.anchor,id:this.popoverID,onClose:this.handleClose,content:this.state.content})]})}},{key:"componentDidMount",value:function(){this.setState({content:this.generateContent()})}}]),a}(c.a.Component);var G=function(e){return Object(n.jsx)(l.c,{className:"Preview BackColorBody",exact:!0,to:O.ROUTER.PATH.LIST,children:Object(n.jsxs)("div",{className:"ColorWhite ButtonDarken",children:[Object(n.jsx)("div",{className:"ColorPrimary Size14 Bold",children:O.ROUTER.NAME.LIST}),Object(n.jsx)("div",{children:"~~~~~"}),Object(n.jsx)("div",{children:"~~~"}),Object(n.jsx)("div",{children:"~~~~"})]})})};var P=function(e){return Object(n.jsxs)("div",{className:"GridList Board",children:[Object(n.jsxs)("div",{className:"Title",children:[O.TEXT.MY," ",O.TEXT.WORD_LIST]}),Object(n.jsxs)("div",{className:"Item Radius2",children:[Object(n.jsx)(G,{}),Object(n.jsx)(G,{}),Object(n.jsx)(G,{}),Object(n.jsx)(G,{}),Object(n.jsx)(G,{}),Object(n.jsx)(G,{})]})]})};var D=function(e){return Object(n.jsxs)("div",{className:"CustomField Board",children:[Object(n.jsx)("div",{className:"Title",children:O.TEXT.SETTING}),Object(n.jsx)("div",{className:"Item Radius2"})]})};a(109);var H=function(e){return Object(n.jsxs)("div",{className:"MyPage",children:[Object(n.jsx)(I,{}),Object(n.jsx)(B,{}),Object(n.jsx)(P,{}),Object(n.jsx)(D,{})]})};a(110);var Y=function(e){return Object(n.jsx)("div",{className:"Login",children:O.ROUTER.NAME.LOGIN})};a(111);var F=function(e){var t=W.filter((function(e){return e.name===O.ROUTER.NAME.HOME}));return Object(n.jsxs)("div",{className:"NotFound",children:[Object(n.jsx)("div",{className:"SizeRes26",children:O.TEXT.NOT_FOUND}),Object(n.jsx)(s,{class:"ColorPrimary ButtonDarken Size26",item:t})]})},z=(a(112),function(e){Object(E.a)(a,e);var t=Object(T.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleUpload=function(e){console.log("file change",e.target.files);var t=new FileReader,a=e.target.files[0];t.onloadend=function(){console.log("onloaded"),n.setState({fileName:a.name,fileType:a.type})},t.readAsDataURL(a)},n.changeFile=function(e){console.log("changeFile"),n.setState({fileName:e.target.value})},n.state={fileName:null,fileType:null},n}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"Main BorderBody",children:[Object(n.jsx)("div",{className:"Title BorderPrimary SizeRes20 Bold",children:O.TEXT.MAIN_TITLE}),Object(n.jsxs)("div",{className:"Item BorderWarning",children:[Object(n.jsxs)("div",{className:"Upload",children:[Object(n.jsxs)("div",{className:"SubItem",children:[Object(n.jsx)("input",{className:"Hidden",id:"file-upload",type:"file",onChange:this.handleUpload}),Object(n.jsx)("button",{className:"BackColorPrimary ColorWhite",children:Object(n.jsxs)("label",{htmlFor:"file-upload",className:"Button",children:[O.TEXT.FILE," ",O.BUTTON.UPLOAD]})})]}),Object(n.jsxs)("div",{className:"SubItem",children:[Object(n.jsxs)("div",{className:"ColorBody Left",children:[" ",O.TEXT.FILE,O.TEXT.NAME_]}),Object(n.jsx)(m.a,{id:"file-name",style:{minWidth:120},label:O.PLACEHOLDER.FILE,value:this.state.fileName||"",onChange:this.changeFile})]}),Object(n.jsxs)("div",{className:"SubItem",children:[Object(n.jsx)("div",{className:"ColorBody Left",children:O.TEXT.TYPE}),Object(n.jsx)("div",{className:"ColorExtra Right BorderExtra Size14",children:this.state.fileType})]})]}),Object(n.jsx)("div",{})]})]})}}]),a}(c.a.Component)),W=[{path:O.ROUTER.PATH.HOME,component:d,name:O.ROUTER.NAME.HOME,meta:{category:O.ROUTER.META.CATEGORY.MAIN,authorization:!1}},{path:O.ROUTER.PATH.WHAT,component:F,name:O.ROUTER.NAME.WHAT,meta:{category:O.ROUTER.META.CATEGORY.MAIN,authorization:!1}},{path:O.ROUTER.PATH.WHY,component:F,name:O.ROUTER.NAME.WHY,meta:{category:O.ROUTER.META.CATEGORY.MAIN,authorization:!1}},{path:O.ROUTER.PATH.HOW,component:F,name:O.ROUTER.NAME.HOW,meta:{category:O.ROUTER.META.CATEGORY.MAIN,authorization:!1}},{path:O.ROUTER.PATH.MYPAGE,component:H,name:O.ROUTER.NAME.MYPAGE,meta:{category:O.ROUTER.META.CATEGORY.MAIN,authorization:!0,redirect:O.ROUTER.PATH.LOGIN}},{path:O.ROUTER.PATH.LIST,component:f,name:O.ROUTER.NAME.LIST,meta:{category:null,authorization:!1}},{path:O.ROUTER.PATH.LOGIN,component:Y,name:O.ROUTER.NAME.LOGIN,meta:{category:O.ROUTER.META.CATEGORY.SUB,authorization:!1}},{path:O.ROUTER.PATH.MAIN,component:z,name:O.ROUTER.NAME.MAIN,meta:{category:O.ROUTER.META.CATEGORY.SUB,authorization:!1}},{path:O.ROUTER.PATH.NOT_FOUND,component:F,name:O.ROUTER.NAME.NOT_FOUND,meta:{category:null,authorization:!1}}];a(113);var k=function(e){var t=W.filter((function(e){return e.meta.category===O.ROUTER.META.CATEGORY.MAIN})),a=W.filter((function(e){return e.meta.category===O.ROUTER.META.CATEGORY.SUB}));return Object(n.jsxs)("div",{className:"Header",children:[Object(n.jsx)("div",{className:"Title ColorWhite",children:O.APPLICATION}),Object(n.jsx)("div",{className:"MainNav",children:Object(n.jsx)(s,{item:t,class:"ColorWhite Button Size14"})}),Object(n.jsx)("div",{className:"SubNav",children:Object(n.jsx)(s,{item:a,class:"ColorWhite Button Size14"})})]})},X=a(12);a(114);var _=function(){return Object(n.jsx)("div",{className:"Page",children:Object(n.jsx)(X.d,{children:W.map((function(e){return Object(n.jsx)(X.b,{exact:!0,path:e.path,render:function(){return e.meta.authorization,Object(n.jsx)(e.component,{})}},e.name)}))})})};a(115);var w=function(){return Object(n.jsx)("div",{className:"Footer"})};a(116),a(117),a(118),a(119),a(120),a(121);var Q=function(){return Object(n.jsx)(l.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(k,{}),Object(n.jsxs)("div",{className:"Body",children:[Object(n.jsx)(_,{}),Object(n.jsx)(w,{})]})]})})};o.a.render(Object(n.jsx)(Q,{}),document.getElementById("root"))},87:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){}},[[122,1,2]]]);
//# sourceMappingURL=main.09908716.chunk.js.map