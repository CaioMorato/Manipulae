(this.webpackJsonpmanipulae=this.webpackJsonpmanipulae||[]).push([[0],{87:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var r,a,c,i,o,s,u,l,d,b,h,A,p,j,f,O,g=n(1),x=n.n(g),v=n(26),m=n.n(v),y=n(13),S=n(9),C=n(10),w=n(12),k=n(11),T=n(23),F=n(7),R=n(8),B=n(14),P=n.n(B),E=n(20),N=n(27),I=n.n(N),q="CURRENT_SONG",G="SEARCH_SONGS_LOADING",M="SEARCH_SONGS_SUCCESS",z="SEARCH_SONGS_FAILED",K="FAVORITE_SONG",L="RESET_FAVORITES",X="PAGE_CHANGE",V=function(e){return{type:q,payload:e}},D=function(e,t){return{type:M,payload:e,query:t}},J=function(e){return{type:z,payload:e}},U=function(e){return function(){var t=Object(E.a)(P.a.mark((function t(n){var r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:G}),t.prev=1,t.next=4,I.a.get("/search?q=".concat(e.query,"&index=").concat(e.quantity));case 4:r=t.sent,n(D(r,e.query)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n(J(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},H=function(e){return{type:K,payload:e}},Y=n(5),Z=n(6),Q=Z.a.header(r||(r=Object(Y.a)(["\n  background-color: white;\n  box-shadow: 1px 1px 7px 2px rgba(0, 0, 0, 0.2);\n  display: flex;\n  font-family: 'Roboto', sans-serif;\n  justify-content: space-around;\n\n  a {\n    color: black;\n    text-decoration: none;\n  }\n"]))),W=Z.a.div(a||(a=Object(Y.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n"]))),_=Z.a.div(c||(c=Object(Y.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  width: 50%;\n\n  > img {\n    height: 24px;\n    left: 32px;\n    position: relative;\n  }\n\n  > button {\n    background-color: white;\n    border: none;\n    font-size: 20px;\n    margin: 0 0 0 10px;\n    width: 10%;\n  }\n\n  > button:hover {\n    cursor: pointer;\n  }\n\n  > button:active {\n    font-size: 19px;\n  }\n"]))),$=Z.a.input(i||(i=Object(Y.a)(["\n  border-radius: 10px;\n  font-size: 15px;\n  font-weight: 600;\n  height: 40%;\n  outline: none;\n  padding: 0 0 0 34px;\n  width: 55%;\n"]))),ee=Z.a.div(o||(o=Object(Y.a)(["\n  align-items: center;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  \n  > p {\n    margin: 7px auto;\n  }\n"]))),te=n(2),ne=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){var e;return Object(S.a)(this,n),(e=t.call(this)).fetchSongsByQuery=e.fetchSongsByQuery.bind(Object(R.a)(e)),e.handleChange=e.handleChange.bind(Object(R.a)(e)),e.state={query:""},e}return Object(C.a)(n,[{key:"handleChange",value:function(e){var t=e.target;this.setState({query:t.value})}},{key:"fetchSongsByQuery",value:function(){var e=this.props.fetchSearch,t=this.state.query;t&&e({query:t,quantity:"0"})}},{key:"render",value:function(){var e=this,t=this.props.redirect;return this.state.shouldRedirect?Object(te.jsx)(F.a,{to:"/"}):Object(te.jsxs)(Q,{children:[Object(te.jsx)(W,{children:Object(te.jsx)("a",{href:"https://manipulae.com.br/",target:"_blank",rel:"noreferrer",children:Object(te.jsx)("img",{src:"https://manipulae.com.br/static/assets/images/Manipulae_colorido.png",height:"55.66px",alt:"Logo da minha futura empresa querida <3"})})}),Object(te.jsxs)(_,{children:[Object(te.jsx)("img",{src:"https://cdn2.iconfinder.com/data/icons/lightly-icons/30/search-480.png",alt:"\xcdcone de lupa"}),Object(te.jsx)($,{type:"text",placeholder:"Pesquise por nome de m\xfasica, artista ou \xe1lbum",onChange:this.handleChange}),Object(te.jsx)("button",{type:"button",onClick:function(){e.fetchSongsByQuery(),t&&e.setState({shouldRedirect:!0})},children:"Pesquisar"})]}),Object(te.jsx)(T.b,{to:t||"MyLibrary",children:Object(te.jsxs)(ee,{children:[Object(te.jsx)("img",{src:"data:image/png;base64,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",alt:"Foto de perfil"}),Object(te.jsx)("p",{children:t?"Voltar ao TOP Charts":"Minha biblioteca"})]})})]})}}]),n}(x.a.Component),re=Object(y.b)(null,(function(e){return{fetchSearch:function(t){return e(U(t))}}}))(ne),ae=n(4),ce=Z.a.ul(s||(s=Object(Y.a)(["\n  border-radius: 9px;\n  display: flex;\n  list-style-type: none;\n  margin: auto;\n  padding: 2%;\n  width: max-content;\n\n  li + li {\n    color: blue;\n    margin-left: 1rem;\n  }\n\n  .current-index {\n    background: none;\n    border: none;\n    font-size: 25px;\n    font-weight: bold;\n    text-decoration: underline;\n  }\n"]))),ie=Z.a.li(u||(u=Object(Y.a)(["\n  button {\n    background-color: rgb(255, 255, 255, 0);\n    border: none;\n    font-size: 20px;\n    outline: none;\n  }\n"]))),oe=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){var e=this.props,t=e.limit,n=e.total,r=e.offset,a=e.setOffset,c=e.changePage,i=r?r/t+1:1,o=Math.ceil(n/t),s=Math.max(i-4,1);return Object(te.jsx)(ce,{children:Array.from({length:Math.min(9,o)}).map((function(e,t){return t+s})).map((function(e){return Object(te.jsx)(ie,{children:Object(te.jsx)("button",{type:"button",onClick:function(){var n=Object(E.a)(P.a.mark((function n(r){var i;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=r.target,n.next=3,c(i.innerHTML);case 3:a((e-1)*t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),className:e===i?"current-index":null,children:e})})}))})}}]),n}(x.a.Component),se=Object(y.b)(null,(function(e){return{changePage:function(t){return e(function(e){return{type:X,payload:e}}(t))}}}))(oe),ue=Z.a.p(l||(l=Object(Y.a)(["\n  font-size: ",";\n  margin: auto;\n  text-align: center;\n"])),(function(e){return e.fontSize||"larger"})),le=Z.a.h1(d||(d=Object(Y.a)(["\n  font-family: 'Recursive', sans-serif;\n  margin: 23px auto;\n  text-align: center;\n"]))),de=Z.a.div(b||(b=Object(Y.a)(["\n  font-family: 'Recursive', sans-serif;\n  margin-bottom: 7%;\n  min-height: max-content;\n"]))),be=Z.a.div(h||(h=Object(Y.a)(["\n  background-color: white;\n  border-radius: 9px;\n  box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-flow: row wrap;\n  padding: 2%;\n"]))),he=Z.a.div(A||(A=Object(Y.a)(["\n  border-radius: 4px;\n  border: 1px black solid;\n  box-shadow: -2px 2px 5px 3px rgba(0, 0, 0, 0.2);\n  padding: 12px;\n  margin: 12px auto;\n  max-width: 220px;\n\n  > h4,\n  p,\n  h5 {\n    margin: 6px;\n    text-align: center;\n  }\n\n  > img {\n    border: 1px #b1dcd9 solid;\n    width: 190px;\n  }\n"]))),Ae=Z.a.div(p||(p=Object(Y.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n\n  > button {\n    align-items: center;\n    background-color: white;\n    border: 1px black solid;\n    border-radius: 20px;\n    display: flex;\n    height: 20px;\n    justify-content: center;\n    outline: none;\n    width: 40px;\n  }\n\n  > button:hover {\n    cursor: pointer;\n    background-color: #b1dcd9;\n    transform: scale(1.04);\n  }\n\n  .react-fav-icon:hover {\n    color: red;\n    cursor: pointer;\n  }\n\n  .react-fav-icon:active {\n    color: red;\n    transform: scale(0.9);\n  }\n"]))),pe=n(28),je=n(29),fe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAASIAAAEiAEYmh6dAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAJNQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKxUt3AAAADB0Uk5TAAcIEBcYGR8tMD1JWF9gYmlqeICEiIuXmJ6rsbS1tru9vsHI0NPZ2tvh4uPo8vP14B05xQAAARdJREFUOMuNU9FCgzAMDGWbY6DbEC3T6RQ2cU4g//91XqhDtHT1Hq6hubZJSIh6BHFeVE1TFXkckI2ZrrlHrWd/3Cpr+RfaTA3905ItlNMf//zEIzjN+/Ojfii+71AlO1CaODJ2Iuvya92CVrLVo65dkiRLZo361ZcEdUDxcPsQAgexNjCusMaUDwXHa+Ao1iuMFdaciqFgL1HvuXMQhVgLqsC3aZp2xfi4AXb4Sp9hrLFTUQNeRFH0III3GNHmTAvsNH6BPLHGfS+fwLs88XQm84QEGSKiO7LIBClprpDTVs5tJc2eTJpSqIlS6l5ZNOkKJaVeoq6PiUWm1PKz3AL9n9/tbRh/y3mb1t/2/sHxj55/eN3j/wXDg3QrkV6VjQAAAABJRU5ErkJggg==",Oe=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){var e;return Object(S.a)(this,n),(e=t.call(this)).setOffset=e.setOffset.bind(Object(R.a)(e)),e.saveFavorites=e.saveFavorites.bind(Object(R.a)(e)),e.convertTime=e.convertTime.bind(Object(R.a)(e)),e.saveStorage=e.saveStorage.bind(Object(R.a)(e)),e.state={offSet:0},e}return Object(C.a)(n,[{key:"setOffset",value:function(e){var t=this.props,n=t.fetchSearch,r=t.query,a=t.quantity;this.setState((function(t){return Object(ae.a)(Object(ae.a)({},t),{},{offSet:e})})),n({query:r,quantity:a})}},{key:"saveFavorites",value:function(){var e=Object(E.a)(P.a.mark((function e(t){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.sendFavoriteToRedux,e.next=3,n(t);case 3:this.saveStorage();case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"saveStorage",value:function(){var e=this.props.favorites;localStorage.setItem("favoriteSongs",JSON.stringify(e))}},{key:"convertTime",value:function(e){var t=Math.floor(e/60),n=Math.ceil(e-60*t);return"".concat(t,":").concat(n>9?n:"0"+n)}},{key:"render",value:function(){var e=this,t=this.props,n=t.chart,r=t.search_songs,a=t.sendSongToRedux,c=t.showChart,i=t.headers,o=this.state.offSet,s=c?n.tracks:r.data;return Object(te.jsxs)(de,{children:[Object(te.jsx)(be,{children:s.data.map((function(t,n){return Object(te.jsxs)(he,{children:[Object(te.jsx)("h4",{children:t.title}),Object(te.jsx)("img",{src:t.album.cover_medium,alt:"Capa da m\xfasica ".concat(t.title)}),Object(te.jsx)("p",{children:t.artist.name}),Object(te.jsx)("h5",{children:e.convertTime(t.duration)}),Object(te.jsxs)(Ae,{children:[Object(te.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:Object(te.jsx)("img",{src:fe,alt:"\xcdcone do logo do deezer"})}),Object(te.jsx)("button",{type:"button",onClick:function(){return a(t)},children:Object(te.jsx)(pe.a,{})}),Object(te.jsx)(je.b,{className:"react-fav-icon",size:20,onClick:function(){return e.saveFavorites(t)}})]})]},n)}))}),Object(te.jsx)("div",{children:!c&&Object(te.jsx)(se,{limit:25,total:i?i["content-length"]:1,offset:o,setOffset:this.setOffset})})]})}}]),n}(x.a.Component),ge=Object(y.b)((function(e){var t=e.topChartReducer,n=e.musicReducer;return{chart:t.chart,showChart:n.showChart,search_songs:n.search_songs,quantity:n.quantity,query:n.query,headers:n.headers,favorites:n.favorites}}),(function(e){return{sendSongToRedux:function(t){return e(V(t))},fetchSearch:function(t){return e(U(t))},sendFavoriteToRedux:function(t){e(H(t))}}}))(Oe),xe=n(25),ve=Z.a.footer(j||(j=Object(Y.a)(["\n  align-items: center;\n  background-color: #fff;\n  box-shadow: 1px 1px 11px 2px rgba(0, 0, 0, 0.2);\n  display: flex;\n  height: 13vh;\n  justify-content: space-evenly;\n  position: fixed;\n  top: 87vh;\n  width: 100%;\n\n  > div img {\n    border-radius: 7px;\n    height: 60px;\n    margin: 0;\n    width: 60px;\n  }\n\n  div:nth-of-type(2) {\n    align-items: center;\n    display: flex;\n    height: 40px;\n    justify-content: center;\n    width: 40px;\n  }\n\n  div:nth-of-type(2):hover {\n    background-color: #c3c3c3;\n    border-radius: 50%;\n  }\n\n  .slider {\n    -webkit-appearance: none;\n    background-color: black;\n    border-radius: 20px;\n    height: 9px;\n  }\n\n  .slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background: #fff;\n    border: 1px solid black;\n    border-radius: 7px;\n    box-shadow: 1px 1px 6px #000000;\n    cursor: pointer;\n    height: 22px;\n    margin-top: -3.6px;\n    width: 14px;\n  }\n\n  .react-fav-icon:hover {\n    color: red;\n    cursor: pointer;\n  }\n\n  .react-fav-icon:active {\n    transform: scale(0.9);\n    color: red;\n  }\n"]))),me=Z.a.div(f||(f=Object(Y.a)(["\n  display: flex;\n  flex-flow: column;\n  width: 30%;\n"]))),ye=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){var e;return Object(S.a)(this,n),(e=t.call(this)).changeSongState=e.changeSongState.bind(Object(R.a)(e)),e.slideBar=e.slideBar.bind(Object(R.a)(e)),e.saveFavorites=e.saveFavorites.bind(Object(R.a)(e)),e.audioPlayer=x.a.createRef(),e.progressBar=x.a.createRef(),e.state={isPlaying:!1,current_time:0},e}return Object(C.a)(n,[{key:"changeSongState",value:function(){var e=this;this.state.isPlaying?(this.setState({isPlaying:!1}),this.audioPlayer.current.pause()):(this.setState({isPlaying:!0}),this.audioPlayer.current.play(),setInterval((function(){e.setState((function(e){return{current_time:e.current_time+1}}))}),1e3))}},{key:"slideBar",value:function(){this.audioPlayer.current.currentTime=this.progressBar.current.value}},{key:"saveFavorites",value:function(e){(0,this.props.sendFavoriteToRedux)(e)}},{key:"render",value:function(){var e,t=this,n=this.props.music_preview,r=this.state,a=r.isPlaying,c=r.current_time,i=null===(e=this.audioPlayer.current)||void 0===e?void 0:e.duration;return Object(te.jsxs)(ve,{children:[Object(te.jsxs)("div",{children:[Object(te.jsx)("audio",{src:n.preview,ref:this.audioPlayer}),Object(te.jsx)("img",{src:n.album.cover_small,alt:"Capa da m\xfasica que est\xe1 tocando agora"})]}),Object(te.jsx)("div",{children:a?Object(te.jsx)(xe.b,{size:30,onClick:this.changeSongState,color:"black"}):Object(te.jsx)(xe.c,{size:30,onClick:this.changeSongState,color:"black"})}),Object(te.jsxs)(me,{children:[Object(te.jsx)("input",{type:"range",defaultValue:c,max:i,onChange:function(){t.slideBar()},ref:this.progressBar,className:"slider"}),Object(te.jsx)("p",{children:"Infelizmente o slider n\xe3o acompanha a m\xfasica sozinho, mas ao arrastar, a m\xfasica acompanha o slider! \ud83d\ude06"})]}),Object(te.jsx)(je.a,{className:"react-fav-icon",onClick:function(){return t.saveFavorites(n)},size:40})]})}}]),n}(x.a.Component),Se=Object(y.b)((function(e){return{music_preview:e.musicReducer.music_preview}}),(function(e){return{sendFavoriteToRedux:function(t){return e(H(t))}}}))(ye),Ce=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){var e;return Object(S.a)(this,n),(e=t.call(this)).loadingGenerator=e.renderLoading.bind(Object(R.a)(e)),e}return Object(C.a)(n,[{key:"renderLoading",value:function(){if(this.props.loading)return Object(te.jsx)(ue,{fontSize:"40px",children:"Carregando as melhores m\xfasicas pra voc\xea"})}},{key:"render",value:function(){var e=this.props,t=e.showChart,n=e.query;return Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(le,{children:t?"Top 10 m\xfasicas mais ouvidas":"Buscas relacionadas a '".concat(n,"'")}),this.renderLoading()||Object(te.jsx)(ge,{}),Object(te.jsx)(Se,{})]})}}]),n}(x.a.Component),we=Object(y.b)((function(e){var t=e.topChartReducer,n=e.musicReducer;return{loading:t.loading,showChart:n.showChart,query:n.query}}))(Ce),ke="TOP_10",Te="SET_LOADING",Fe="FETCH_ERROR",Re=function(e){return{type:Fe,payload:e}},Be=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.topChartFetch)()}},{key:"render",value:function(){return Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(re,{}),Object(te.jsx)(we,{})]})}}]),n}(x.a.Component),Pe=Object(y.b)(null,(function(e){return{topChartFetch:function(){return e(function(){var e=Object(E.a)(P.a.mark((function e(t){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:Te}),e.prev=1,e.next=4,I.a.get("/chart");case 4:n=e.sent,t({type:ke,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(Re(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}}}))(Be),Ee=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){var e;return Object(S.a)(this,n),(e=t.call(this)).convertTime=e.convertTime.bind(Object(R.a)(e)),e.removeFavorites=e.removeFavorites.bind(Object(R.a)(e)),e.updateLocalStorage=e.updateLocalStorage.bind(Object(R.a)(e)),e}return Object(C.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.updateFavorites;localStorage.getItem("favoriteSongs")&&e(JSON.parse(localStorage.getItem("favoriteSongs")))}},{key:"convertTime",value:function(e){var t=Math.floor(e/60),n=Math.ceil(e-60*t);return"".concat(t,":").concat(n>9?n:"0"+n)}},{key:"removeFavorites",value:function(){var e=Object(E.a)(P.a.mark((function e(t){var n,r,a,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props,r=n.updateFavorites,a=n.favorites,c=a.filter((function(e){return e.id!==t.id})),e.next=4,r(c);case 4:this.updateLocalStorage();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateLocalStorage",value:function(){var e=this.props.favorites;localStorage.setItem("favoriteSongs",JSON.stringify(e))}},{key:"render",value:function(){var e=this,t=this.props,n=t.sendSongToRedux,r=t.favorites;return Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(re,{redirect:"/"}),Object(te.jsx)(le,{children:"Minhas favoritas"}),Object(te.jsx)(de,{children:Object(te.jsx)(be,{children:r.length>0?r.map((function(t,r){return Object(te.jsxs)(he,{children:[Object(te.jsx)("h4",{children:t.title}),Object(te.jsx)("img",{src:t.album.cover_medium,alt:"Capa da m\xfasica ".concat(t.title)}),Object(te.jsx)("p",{children:t.artist.name}),Object(te.jsx)("h5",{children:e.convertTime(t.duration)}),Object(te.jsxs)(Ae,{children:[Object(te.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:Object(te.jsx)("img",{src:fe,alt:"\xcdcone do logo do deezer"})}),Object(te.jsx)("button",{type:"button",onClick:function(){return n(t)},children:Object(te.jsx)(pe.a,{})}),Object(te.jsx)(xe.a,{className:"react-fav-icon",size:20,onClick:function(){return e.removeFavorites(t)}})]})]},r)})):Object(te.jsx)(ue,{children:"Sem Favoritos encontrados"})})}),Object(te.jsx)(Se,{})]})}}]),n}(x.a.Component),Ne=Object(y.b)((function(e){return{favorites:e.musicReducer.favorites}}),(function(e){return{sendSongToRedux:function(t){return e(V(t))},updateFavorites:function(t){return e(function(e){return{type:L,payload:e}}(t))}}}))(Ee),Ie=Z.a.div(O||(O=Object(Y.a)(["\n  text-align: center;\n\n  > a {\n    color: black;\n    font-size: x-large;\n  }\n"]))),qe=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){return Object(te.jsxs)(Ie,{children:[Object(te.jsx)(le,{children:"N\xe3o tem nada aqui \u2639"}),Object(te.jsx)(T.b,{to:"/",children:"Voltar ao in\xedcio"})]})}}]),n}(x.a.Component),Ge=(n(87),function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){return Object(te.jsx)(T.a,{children:Object(te.jsxs)(F.d,{children:[Object(te.jsx)(F.b,{exact:!0,path:"/",component:Pe}),Object(te.jsx)(F.b,{path:"/MyLibrary",component:Ne}),Object(te.jsx)(F.b,{path:"*",component:qe})]})})}}]),n}(x.a.Component)),Me=n(24),ze=n(50),Ke=n(51),Le={loading:!0,chart:{},error:{}},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ke:return Object(ae.a)(Object(ae.a)({},e),{},{chart:t.payload.data,loading:!1});case Te:return Object(ae.a)(Object(ae.a)({},e),{},{loading:!0});case Fe:return Object(ae.a)(Object(ae.a)({},e),{},{error:t.payload});default:return e}},Ve=n(52),De={showChart:!0,loading:!1,search_songs:{},quantity:0,query:"",music_preview:{duration:0,album:{cover_small:"https://i.pinimg.com/736x/3f/97/38/3f973871057b3f076e38f5c1413b06e6.jpg"}},favorites:[],error:{}},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(ae.a)(Object(ae.a)({},e),{},{music_preview:t.payload});case M:return Object(ae.a)(Object(ae.a)({},e),{},{search_songs:t.payload,query:t.query,loading:!1,showChart:!1,headers:t.payload.headers});case G:return Object(ae.a)(Object(ae.a)({},e),{},{loading:!0});case z:return Object(ae.a)(Object(ae.a)({},e),{},{error:t.payload});case K:return Object(ae.a)(Object(ae.a)({},e),{},{favorites:[].concat(Object(Ve.a)(e.favorites),[t.payload])});case L:return Object(ae.a)(Object(ae.a)({},e),{},{favorites:t.payload});case X:return Object(ae.a)(Object(ae.a)({},e),{},{quantity:25*(t.payload-1)});default:return e}},Ue=Object(Me.combineReducers)({topChartReducer:Xe,musicReducer:Je}),He=Object(Me.createStore)(Ue,Object(ze.composeWithDevTools)(Object(Me.applyMiddleware)(Ke.a)));m.a.render(Object(te.jsx)(y.a,{store:He,children:Object(te.jsx)(Ge,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.a77808a5.chunk.js.map