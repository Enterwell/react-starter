(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43],{2051:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pokemons",function(){return o(8117)}])},8117:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return le}});var a=o(5893),n=o(7294),i=o(1217),r=o(1664),s=o(5675),l=o(6010),c=o(7462),d=o(3366),u=o(7192),p=o(4502),m=o(8979),g=o(6087);function h(e){return(0,m.Z)("MuiPagination",e)}(0,g.Z)("MuiPagination",["root","ul","outlined","text"]);var f=o(8925);const b=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];var v=o(1796);function x(e){return(0,m.Z)("MuiPaginationItem",e)}var y=(0,g.Z)("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),P=o(2734),w=o(2607),k=o(8216),Z=o(8169),L=(0,Z.Z)((0,a.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),N=(0,Z.Z)((0,a.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),z=(0,Z.Z)((0,a.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),C=(0,Z.Z)((0,a.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),O=o(2973);const _=["className","color","component","components","disabled","page","selected","shape","size","type","variant"],S=(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`size${(0,k.Z)(o.size)}`],"text"===o.variant&&t[`text${(0,k.Z)(o.color)}`],"outlined"===o.variant&&t[`outlined${(0,k.Z)(o.color)}`],"rounded"===o.shape&&t.rounded,"page"===o.type&&t.page,("start-ellipsis"===o.type||"end-ellipsis"===o.type)&&t.ellipsis,("previous"===o.type||"next"===o.type)&&t.previousNext,("first"===o.type||"last"===o.type)&&t.firstLast]},j=(0,O.ZP)("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:S})((({theme:e,ownerState:t})=>(0,c.Z)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary,height:"auto",[`&.${y.disabled}`]:{opacity:e.palette.action.disabledOpacity}},"small"===t.size&&{minWidth:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===t.size&&{minWidth:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15)}))),M=(0,O.ZP)(w.Z,{name:"MuiPaginationItem",slot:"Root",overridesResolver:S})((({theme:e,ownerState:t})=>(0,c.Z)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary,[`&.${y.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`&.${y.disabled}`]:{opacity:e.palette.action.disabledOpacity},transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${y.selected}`]:{backgroundColor:e.palette.action.selected,"&:hover":{backgroundColor:(0,v.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.action.selected}},[`&.${y.focusVisible}`]:{backgroundColor:(0,v.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},[`&.${y.disabled}`]:{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}}},"small"===t.size&&{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===t.size&&{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15)},"rounded"===t.shape&&{borderRadius:e.shape.borderRadius})),(({theme:e,ownerState:t})=>(0,c.Z)({},"text"===t.variant&&{[`&.${y.selected}`]:(0,c.Z)({},"standard"!==t.color&&{color:e.palette[t.color].contrastText,backgroundColor:e.palette[t.color].main,"&:hover":{backgroundColor:e.palette[t.color].dark,"@media (hover: none)":{backgroundColor:e.palette[t.color].main}},[`&.${y.focusVisible}`]:{backgroundColor:e.palette[t.color].dark}},{[`&.${y.disabled}`]:{color:e.palette.action.disabled}})},"outlined"===t.variant&&{border:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),[`&.${y.selected}`]:(0,c.Z)({},"standard"!==t.color&&{color:e.palette[t.color].main,border:`1px solid ${(0,v.Fq)(e.palette[t.color].main,.5)}`,backgroundColor:(0,v.Fq)(e.palette[t.color].main,e.palette.action.activatedOpacity),"&:hover":{backgroundColor:(0,v.Fq)(e.palette[t.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${y.focusVisible}`]:{backgroundColor:(0,v.Fq)(e.palette[t.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity)}},{[`&.${y.disabled}`]:{borderColor:e.palette.action.disabledBackground,color:e.palette.action.disabled}})}))),R=(0,O.ZP)("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(e,t)=>t.icon})((({theme:e,ownerState:t})=>(0,c.Z)({fontSize:e.typography.pxToRem(20),margin:"0 -8px"},"small"===t.size&&{fontSize:e.typography.pxToRem(18)},"large"===t.size&&{fontSize:e.typography.pxToRem(22)})));var B=n.forwardRef((function(e,t){const o=(0,p.Z)({props:e,name:"MuiPaginationItem"}),{className:n,color:i="standard",component:r,components:s={first:L,last:N,next:C,previous:z},disabled:m=!1,page:g,selected:h=!1,shape:f="circular",size:b="medium",type:v="page",variant:y="text"}=o,w=(0,d.Z)(o,_),Z=(0,c.Z)({},o,{color:i,disabled:m,selected:h,shape:f,size:b,type:v,variant:y}),O=(0,P.Z)(),S=(e=>{const{classes:t,color:o,disabled:a,selected:n,size:i,shape:r,type:s,variant:l}=e,c={root:["root",`size${(0,k.Z)(i)}`,l,r,"standard"!==o&&`${l}${(0,k.Z)(o)}`,a&&"disabled",n&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[s]],icon:["icon"]};return(0,u.Z)(c,x,t)})(Z),B=("rtl"===O.direction?{previous:s.next||C,next:s.previous||z,last:s.first||L,first:s.last||N}:{previous:s.previous||z,next:s.next||C,first:s.first||L,last:s.last||N})[v];return"start-ellipsis"===v||"end-ellipsis"===v?(0,a.jsx)(j,{ref:t,ownerState:Z,className:(0,l.Z)(S.root,n),children:"\u2026"}):(0,a.jsxs)(M,(0,c.Z)({ref:t,ownerState:Z,component:r,disabled:m,className:(0,l.Z)(S.root,n)},w,{children:["page"===v&&g,B?(0,a.jsx)(R,{as:B,ownerState:Z,className:S.icon}):null]}))}));const $=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],F=(0,O.ZP)("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant]]}})({}),I=(0,O.ZP)("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(e,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function W(e,t,o){return"page"===e?`${o?"":"Go to "}page ${t}`:`Go to ${e} page`}var T=n.forwardRef((function(e,t){const o=(0,p.Z)({props:e,name:"MuiPagination"}),{boundaryCount:n=1,className:i,color:r="standard",count:s=1,defaultPage:m=1,disabled:g=!1,getItemAriaLabel:v=W,hideNextButton:x=!1,hidePrevButton:y=!1,renderItem:P=(e=>(0,a.jsx)(B,(0,c.Z)({},e))),shape:w="circular",showFirstButton:k=!1,showLastButton:Z=!1,siblingCount:L=1,size:N="medium",variant:z="text"}=o,C=(0,d.Z)(o,$),{items:O}=function(e={}){const{boundaryCount:t=1,componentName:o="usePagination",count:a=1,defaultPage:n=1,disabled:i=!1,hideNextButton:r=!1,hidePrevButton:s=!1,onChange:l,page:u,showFirstButton:p=!1,showLastButton:m=!1,siblingCount:g=1}=e,h=(0,d.Z)(e,b),[v,x]=(0,f.Z)({controlled:u,default:n,name:o,state:"page"}),y=(e,t)=>{u||x(t),l&&l(e,t)},P=(e,t)=>{const o=t-e+1;return Array.from({length:o},((t,o)=>e+o))},w=P(1,Math.min(t,a)),k=P(Math.max(a-t+1,t+1),a),Z=Math.max(Math.min(v-g,a-t-2*g-1),t+2),L=Math.min(Math.max(v+g,t+2*g+2),k.length>0?k[0]-2:a-1),N=[...p?["first"]:[],...s?[]:["previous"],...w,...Z>t+2?["start-ellipsis"]:t+1<a-t?[t+1]:[],...P(Z,L),...L<a-t-1?["end-ellipsis"]:a-t>t?[a-t]:[],...k,...r?[]:["next"],...m?["last"]:[]],z=e=>{switch(e){case"first":return 1;case"previous":return v-1;case"next":return v+1;case"last":return a;default:return null}},C=N.map((e=>"number"===typeof e?{onClick:t=>{y(t,e)},type:"page",page:e,selected:e===v,disabled:i,"aria-current":e===v?"true":void 0}:{onClick:t=>{y(t,z(e))},type:e,page:z(e),selected:!1,disabled:i||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?v>=a:v<=1)}));return(0,c.Z)({items:C},h)}((0,c.Z)({},o,{componentName:"Pagination"})),_=(0,c.Z)({},o,{boundaryCount:n,color:r,count:s,defaultPage:m,disabled:g,getItemAriaLabel:v,hideNextButton:x,hidePrevButton:y,renderItem:P,shape:w,showFirstButton:k,showLastButton:Z,siblingCount:L,size:N,variant:z}),S=(e=>{const{classes:t,variant:o}=e,a={root:["root",o],ul:["ul"]};return(0,u.Z)(a,h,t)})(_);return(0,a.jsx)(F,(0,c.Z)({"aria-label":"pagination navigation",className:(0,l.Z)(S.root,i),ownerState:_,ref:t},C,{children:(0,a.jsx)(I,{className:S.ul,ownerState:_,children:O.map(((e,t)=>(0,a.jsx)("li",{children:P((0,c.Z)({},e,{color:r,"aria-label":v(e.type,e.page,e.selected),shape:w,size:N,variant:z}))},t)))})}))})),E=o(6247),V=o.n(E);function q(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function A(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var D=function(e){var t=e.classes,o=void 0===t?{}:t,n=A(e,["classes"]);return(0,a.jsx)(T,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},a=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),a.forEach((function(t){q(e,t,o[t])}))}return e}({classes:{root:o.root,ul:(0,l.Z)(o.ul,V().pagesList)}},n))},G=o(4051),H=o.n(G),U=o(8949),X=o(5785),J=o(8688);function K(e,t,o,a,n,i,r){try{var s=e[i](r),l=s.value}catch(c){return void o(c)}s.done?t(l):Promise.resolve(l).then(a,n)}function Q(e){return function(){var t=this,o=arguments;return new Promise((function(a,n){var i=e.apply(t,o);function r(e){K(i,a,n,r,s,"next",e)}function s(e){K(i,a,n,r,s,"throw",e)}r(void 0)}))}}function Y(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ee(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var te=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),ee(this,"isFirstLoad",void 0),ee(this,"isLoading",void 0),ee(this,"pokemons",void 0),ee(this,"pageNumber",void 0),ee(this,"pageSize",void 0),ee(this,"totalPokemons",void 0),this.isFirstLoad=!0,this.isLoading=!0,this.pokemons=[],this.pageNumber=0,this.pageSize=10,this.totalPokemons=0,(0,U.rC)(this,{isFirstLoad:U.LO,isLoading:U.LO,pokemons:U.LO,pageNumber:U.LO,pageSize:U.LO,totalPokemons:U.LO,loadPokemons:U.aD.bound})}var t,o,a;return t=e,o=[{key:"loadPokemons",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.pageNumber,t=this;return Q(H().mark((function o(){var a,n,i,r;return H().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(t.isFirstLoad||!t.isLoading){o.next=2;break}return o.abrupt("return");case 2:if(!(e<0)){o.next=4;break}return o.abrupt("return");case 4:return t.isLoading=!0,o.prev=5,a={offset:e*t.pageSize,limit:t.pageSize},o.next=9,X.Z.getPokemons(a);case 9:n=o.sent,i=n.results,r=n.count,(0,U.z)((function(){t.pokemons=i,t.pageNumber=e,t.totalPokemons=r})),o.next=18;break;case 15:o.prev=15,o.t0=o.catch(5),J.Z.showDefaultErrorNotification();case 18:(0,U.z)((function(){t.isLoading=!1}));case 19:case"end":return o.stop()}}),o,null,[[5,15]])})))()}}],a=[{key:"instance",get:function(){return null===e._viewModel&&(e._viewModel=new e),e._viewModel}}],o&&Y(t.prototype,o),a&&Y(t,a),e}();ee(te,"_viewModel",null);var oe=te,ae=o(6925),ne=o(5271),ie=o.n(ne);var re=(0,ae.Wc)((0,i.Pi)((function(e){var t=e.viewModel,o=t.pokemons,i=t.loadPokemons,l=t.pageNumber,c=t.pageSize,d=t.totalPokemons;return(0,n.useEffect)((function(){0===l&&i()}),[]),(0,a.jsxs)("div",{className:ie().container,children:[(0,a.jsx)("div",{className:ie().list,children:o.map((function(e){return(0,a.jsx)(r.default,{href:"/pokemons/[id]",as:"/pokemons/".concat(e.id),passHref:!0,children:(0,a.jsxs)("div",{className:ie().item,children:[(0,a.jsx)("div",{className:ie().imageWrapper,children:(0,a.jsx)(s.default,{src:e.image,alt:e.name,width:36,height:36})}),(0,a.jsx)("span",{className:ie().name,children:e.name})]})},e.id)}))}),(0,a.jsx)(D,{color:"primary",count:Math.max(1,Math.ceil(d/c)),onChange:function(e,t){i(t-1)},page:l+1,siblingCount:2})]})})),oe);function se(){return(0,a.jsx)(re,{})}se.title="Pokemons",se.showUser=!0;var le=se},6247:function(e){e.exports={pagesList:"Pagination_pagesList__L4RIk"}},5271:function(e){e.exports={container:"PokemonsView_container__66yTP",list:"PokemonsView_list__wGu4Z",item:"PokemonsView_item__8tvN_",imageWrapper:"PokemonsView_imageWrapper__R9v8_",name:"PokemonsView_name__TeSWZ"}}},function(e){e.O(0,[600,785,774,888,179],(function(){return t=2051,e(e.s=t);var t}));var t=e.O();_N_E=t}]);