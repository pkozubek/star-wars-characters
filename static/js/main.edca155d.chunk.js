(window["webpackJsonpstar-wars"]=window["webpackJsonpstar-wars"]||[]).push([[0],{35:function(e,n,t){e.exports=t.p+"static/media/space.8644e275.png"},41:function(e,n,t){e.exports=t(69)},46:function(e,n,t){},69:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(11),o=t.n(c);t(46),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(8),u=t(29),l=t(9),s=t(12),p=t(30),d=t(31),f=t(37),h=t(32),m=t(38),g=t(3),b=t(4);function v(){var e=Object(g.a)(["\n  width: calc(60% - 50px);\n  border: 1px solid rgba(5, 162, 252, 0.2);\n  margin: 25px auto;\n  padding: 25px;\n  border-radius: 25px;\n\n  label {\n    font-weight: bold;\n  }\n\n  h2 {\n    width: 80;\n    margin: 5px auto;\n    padding-bottom: 5px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  }\n"]);return v=function(){return e},e}var O=b.b.div(v()),w=function(e){var n=e.data,t=Object.keys(n).map((function(e){return{name:e,value:n[e]}})),a=t.name,c=t.map((function(e){var n=e.name,t=e.value;return"name"===n?r.a.createElement("h2",{key:a+n},t):r.a.createElement("p",{key:a+n},r.a.createElement("label",null,n,": "),t)}));return r.a.createElement(O,null,c)};function y(){var e=Object(g.a)(["\n  width: 100%;\n"]);return y=function(){return e},e}var E=b.b.div(y()),j=Object(i.b)((function(e){return{charactersArray:e.characters}}))((function(e){var n=e.charactersArray,t=e.filters,a=n.length>0?function(e){return function(e,n){var t=e.name,a=e.minHeight,r=e.gender,c=n;return""!==t.trim()&&(c=c.filter((function(e){return e.name.includes(t)}))),a&&(c=c.filter((function(e){return Number(e.height)>=a}))),"All"!==r&&(c=c.filter((function(e){return e.gender===r}))),c}(t,e).map((function(e){return r.a.createElement(w,{key:e.name,data:e})}))}(n):"nie dziala";return r.a.createElement(E,null,a)})),x=t(6),k=t.n(x),C=t(13),A=t(10),P=t.n(A),D="https://swapi.co/api/people/?page=";function S(){return(S=Object(C.a)(k.a.mark((function e(n){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("".concat(D).concat(n)).then((function(e){var n=e.data,t=n.results;return{hasNextPage:null!==n.next,results:t}})).catch((function(e){alert(e)}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(C.a)(k.a.mark((function e(n,t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.all([P.a.get(n),P.a.get(t)]).then(P.a.spread((function(e,n){return{homeName:e.data.name,specieName:n.data.name}})));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=function(e){return function(n){(function(e){return S.apply(this,arguments)})(e).then((function(e){var t=e.results,a=e.hasNextPage;n(R(a)),t.forEach((function(e){delete e.created,delete e.edited,delete e.url,delete e.films,delete e.vehicles,delete e.starships,function(e,n){return B.apply(this,arguments)}(e.homeworld,e.species).then((function(t){var a=t.homeName,r=t.specieName;e.homeworld=a,e.species=r,n(N(e))}))}))}))}},N=function(e){return{type:"ADD_CHARACTER",characterData:e}},R=function(e){return{type:"SET_BLOCK",isBlocked:e}},H=t(35),I=t.n(H);function T(){var e=Object(g.a)(["\n  width: 100%;\n  text-align: center;\n\n  input {\n    margin-left: 5px;\n  }\n\n  label {\n    margin: 0 5px 0 5px;\n  }\n\n  button {\n    margin-left: 5px;\n  }\n"]);return T=function(){return e},e}function L(){var e=Object(g.a)(["\n  background: rgba(0, 0, 0, 0.8);\n  width: 80%;\n  padding: 0;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return L=function(){return e},e}function M(){var e=Object(g.a)(["\n  body {\n    background-color: black;\n    background: url(",");\n    font-family: 'Open Sans', sans-serif;\n    color: white;\n  }\n\n  h1{\n    color: yellow;\n    font-family: 'Poller One', cursive;\n    margin-top: 10px;\n    text-align: center;\n    font-size: 1.8em;\n  }\n"]);return M=function(){return e},e}var W=Object(b.a)(M(),(function(e){return e.image})),K=b.b.div(L()),z=b.b.form(T()),J=function(e){function n(){var e,t;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(f.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(r)))).state={page:1,name:"",minHeight:"",gender:"All"},t.loadPage=function(e){(0,t.props.loadCharacters)(e),t.setState({page:e})},t.handleInputChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(s.a)({},a,r))},t}return Object(m.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.state.page;(0,this.props.loadCharacters)(e)}},{key:"render",value:function(){var e=this,n=this.state,t=n.name,a=n.minHeight,c=n.gender,o=this.props.isBlocked;return r.a.createElement(K,{className:"App"},r.a.createElement(W,{image:I.a}),r.a.createElement("h1",null,"STAR WARS CHARACTER WIKI"),r.a.createElement(z,null,r.a.createElement("input",{value:t,onChange:this.handleInputChange,name:"name",type:"text",placeholder:"name"}),r.a.createElement("input",{onChange:this.handleInputChange,value:a,name:"minHeight",type:"number",placeholder:"height above"}),r.a.createElement("label",null,"Gender: "),r.a.createElement("select",{onChange:this.handleInputChange,value:c,name:"gender"},r.a.createElement("option",{value:"ll"},"All"),r.a.createElement("option",{value:"male"},"Male"),r.a.createElement("option",{value:"female"},"Female"))),r.a.createElement(j,{filters:{name:t,minHeight:a,gender:c}}),r.a.createElement("button",{disabled:!o,onClick:function(){return e.loadPage(e.state.page+1)}},"LoadMore"))}}]),n}(a.Component),X=Object(i.b)((function(e){return{isBlocked:e.isBlocked}}),(function(e){return{loadCharacters:function(n){return e(_(n))}}}))(J),F=t(36);function G(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?G(t,!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var V={characters:[],isBlocked:!1,isLoading:!1},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,n=arguments.length>1?arguments[1]:void 0,t=n.type;switch(t){case"ADD_CHARACTER":var a=n.characterData;return U({},e,{characters:[].concat(Object(F.a)(e.characters),[a])});case"SET_BLOCK":var r=n.isBlocked;return U({},e,{isBlocked:r});default:return e}},q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,Q=Object(l.d)($,q(Object(l.a)(u.a))),Y=r.a.createElement(i.a,{store:Q},r.a.createElement(X,null));o.a.render(Y,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.edca155d.chunk.js.map