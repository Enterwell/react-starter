(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43],{975:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pokemons",function(){return a(8117)}])},8117:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return eo}});var i=a(5893),o=a(7294),s=a(6670),n=a(1664),r=a.n(n),l=a(5675),c=a.n(l),d=a(6010),p=a(2793),u=a(1048),h=a(3427),g=a(4502),m=a(1588),v=a(7621);function b(e){return(0,v.Z)("MuiPagination",e)}(0,m.Z)("MuiPagination",["root","ul","outlined","text"]);var x=a(8925);let f=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];var y=a(1796);function Z(e){return(0,v.Z)("MuiPaginationItem",e)}let k=(0,m.Z)("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]);var w=a(2734),P=a(7739),L=a(8216),_=a(8169),C=(0,_.Z)((0,i.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),$=(0,_.Z)((0,i.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),N=(0,_.Z)((0,i.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),z=(0,_.Z)((0,i.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),O=a(8271);let M=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],S=(e,t)=>{let{ownerState:a}=e;return[t.root,t[a.variant],t[`size${(0,L.Z)(a.size)}`],"text"===a.variant&&t[`text${(0,L.Z)(a.color)}`],"outlined"===a.variant&&t[`outlined${(0,L.Z)(a.color)}`],"rounded"===a.shape&&t.rounded,"page"===a.type&&t.page,("start-ellipsis"===a.type||"end-ellipsis"===a.type)&&t.ellipsis,("previous"===a.type||"next"===a.type)&&t.previousNext,("first"===a.type||"last"===a.type)&&t.firstLast]},R=e=>{let{classes:t,color:a,disabled:i,selected:o,size:s,shape:n,type:r,variant:l}=e,c={root:["root",`size${(0,L.Z)(s)}`,l,n,"standard"!==a&&`${l}${(0,L.Z)(a)}`,i&&"disabled",o&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[r]],icon:["icon"]};return(0,h.Z)(c,Z,t)},j=(0,O.ZP)("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:S})(({theme:e,ownerState:t})=>(0,p.Z)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,height:"auto",[`&.${k.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"small"===t.size&&{minWidth:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===t.size&&{minWidth:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15)})),E=(0,O.ZP)(P.Z,{name:"MuiPaginationItem",slot:"Root",overridesResolver:S})(({theme:e,ownerState:t})=>(0,p.Z)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,[`&.${k.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${k.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${k.selected}`]:{backgroundColor:(e.vars||e).palette.action.selected,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selected} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,y.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(e.vars||e).palette.action.selected}},[`&.${k.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selected} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,y.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},[`&.${k.disabled}`]:{opacity:1,color:(e.vars||e).palette.action.disabled,backgroundColor:(e.vars||e).palette.action.selected}}},"small"===t.size&&{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===t.size&&{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15)},"rounded"===t.shape&&{borderRadius:(e.vars||e).shape.borderRadius}),({theme:e,ownerState:t})=>(0,p.Z)({},"text"===t.variant&&{[`&.${k.selected}`]:(0,p.Z)({},"standard"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}},[`&.${k.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}},{[`&.${k.disabled}`]:{color:(e.vars||e).palette.action.disabled}})},"outlined"===t.variant&&{border:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${"light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${k.selected}`]:(0,p.Z)({},"standard"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:(0,y.Fq)(e.palette[t.color].main,.5)}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.activatedOpacity})`:(0,y.Fq)(e.palette[t.color].main,e.palette.action.activatedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,y.Fq)(e.palette[t.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${k.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,y.Fq)(e.palette[t.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity)}},{[`&.${k.disabled}`]:{borderColor:(e.vars||e).palette.action.disabledBackground,color:(e.vars||e).palette.action.disabled}})})),F=(0,O.ZP)("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(e,t)=>t.icon})(({theme:e,ownerState:t})=>(0,p.Z)({fontSize:e.typography.pxToRem(20),margin:"0 -8px"},"small"===t.size&&{fontSize:e.typography.pxToRem(18)},"large"===t.size&&{fontSize:e.typography.pxToRem(22)})),B=o.forwardRef(function(e,t){let a=(0,g.Z)({props:e,name:"MuiPaginationItem"}),{className:o,color:s="standard",component:n,components:r={},disabled:l=!1,page:c,selected:h=!1,shape:m="circular",size:v="medium",slots:b={},type:x="page",variant:f="text"}=a,y=(0,u.Z)(a,M),Z=(0,p.Z)({},a,{color:s,disabled:l,selected:h,shape:m,size:v,type:x,variant:f}),k=(0,w.Z)(),P=R(Z),L="rtl"===k.direction?{previous:b.next||r.next||z,next:b.previous||r.previous||N,last:b.first||r.first||C,first:b.last||r.last||$}:{previous:b.previous||r.previous||N,next:b.next||r.next||z,first:b.first||r.first||C,last:b.last||r.last||$},_=L[x];return"start-ellipsis"===x||"end-ellipsis"===x?(0,i.jsx)(j,{ref:t,ownerState:Z,className:(0,d.Z)(P.root,o),children:"…"}):(0,i.jsxs)(E,(0,p.Z)({ref:t,ownerState:Z,component:n,disabled:l,className:(0,d.Z)(P.root,o)},y,{children:["page"===x&&c,_?(0,i.jsx)(F,{as:_,ownerState:Z,className:P.icon}):null]}))}),I=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],W=e=>{let{classes:t,variant:a}=e;return(0,h.Z)({root:["root",a],ul:["ul"]},b,t)},T=(0,O.ZP)("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,t[a.variant]]}})({}),V=(0,O.ZP)("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(e,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function q(e,t,a){return"page"===e?`${a?"":"Go to "}page ${t}`:`Go to ${e} page`}let A=o.forwardRef(function(e,t){let a=(0,g.Z)({props:e,name:"MuiPagination"}),{boundaryCount:o=1,className:s,color:n="standard",count:r=1,defaultPage:l=1,disabled:c=!1,getItemAriaLabel:h=q,hideNextButton:m=!1,hidePrevButton:v=!1,renderItem:b=e=>(0,i.jsx)(B,(0,p.Z)({},e)),shape:y="circular",showFirstButton:Z=!1,showLastButton:k=!1,siblingCount:w=1,size:P="medium",variant:L="text"}=a,_=(0,u.Z)(a,I),{items:C}=function(e={}){let{boundaryCount:t=1,componentName:a="usePagination",count:i=1,defaultPage:o=1,disabled:s=!1,hideNextButton:n=!1,hidePrevButton:r=!1,onChange:l,page:c,showFirstButton:d=!1,showLastButton:h=!1,siblingCount:g=1}=e,m=(0,u.Z)(e,f),[v,b]=(0,x.Z)({controlled:c,default:o,name:a,state:"page"}),y=(e,t)=>{c||b(t),l&&l(e,t)},Z=(e,t)=>Array.from({length:t-e+1},(t,a)=>e+a),k=Z(1,Math.min(t,i)),w=Z(Math.max(i-t+1,t+1),i),P=Math.max(Math.min(v-g,i-t-2*g-1),t+2),L=Math.min(Math.max(v+g,t+2*g+2),w.length>0?w[0]-2:i-1),_=[...d?["first"]:[],...r?[]:["previous"],...k,...P>t+2?["start-ellipsis"]:t+1<i-t?[t+1]:[],...Z(P,L),...L<i-t-1?["end-ellipsis"]:i-t>t?[i-t]:[],...w,...n?[]:["next"],...h?["last"]:[]],C=e=>{switch(e){case"first":return 1;case"previous":return v-1;case"next":return v+1;case"last":return i;default:return null}},$=_.map(e=>"number"==typeof e?{onClick:t=>{y(t,e)},type:"page",page:e,selected:e===v,disabled:s,"aria-current":e===v?"true":void 0}:{onClick:t=>{y(t,C(e))},type:e,page:C(e),selected:!1,disabled:s||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?v>=i:v<=1)});return(0,p.Z)({items:$},m)}((0,p.Z)({},a,{componentName:"Pagination"})),$=(0,p.Z)({},a,{boundaryCount:o,color:n,count:r,defaultPage:l,disabled:c,getItemAriaLabel:h,hideNextButton:m,hidePrevButton:v,renderItem:b,shape:y,showFirstButton:Z,showLastButton:k,siblingCount:w,size:P,variant:L}),N=W($);return(0,i.jsx)(T,(0,p.Z)({"aria-label":"pagination navigation",className:(0,d.Z)(N.root,s),ownerState:$,ref:t},_,{children:(0,i.jsx)(V,{className:N.ul,ownerState:$,children:C.map((e,t)=>(0,i.jsx)("li",{children:b((0,p.Z)({},e,{color:n,"aria-label":h(e.type,e.page,e.selected),shape:y,size:P,variant:L}))},t))})}))});var U=a(6499),G=a.n(U),X=function(e){let{classes:t={},...a}=e;return(0,i.jsx)(A,{classes:{root:t.root,ul:(0,d.Z)(t.ul,G().pagesList)},...a})},D=a(4924),H=a(8949),J=a(8688),K=a(5785);class Q{static get instance(){return null===Q._viewModel&&(Q._viewModel=new Q),Q._viewModel}async loadPokemons(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.pageNumber;if((this.isFirstLoad||!this.isLoading)&&!(e<0)){this.isLoading=!0;try{let t={offset:e*this.pageSize,limit:this.pageSize},{results:a,count:i}=await (0,K.L)(t);(0,H.z)(()=>{this.pokemons=a,this.pageNumber=e,this.totalPokemons=i})}catch(e){console.error(e),(0,J.Uo)()}(0,H.z)(()=>{this.isLoading=!1})}}constructor(){(0,D.Z)(this,"isFirstLoad",void 0),(0,D.Z)(this,"isLoading",void 0),(0,D.Z)(this,"pokemons",void 0),(0,D.Z)(this,"pageNumber",void 0),(0,D.Z)(this,"pageSize",void 0),(0,D.Z)(this,"totalPokemons",void 0),this.isFirstLoad=!0,this.isLoading=!0,this.pokemons=[],this.pageNumber=0,this.pageSize=10,this.totalPokemons=0,(0,H.rC)(this,{isFirstLoad:H.LO,isLoading:H.LO,pokemons:H.LO,pageNumber:H.LO,pageSize:H.LO,totalPokemons:H.LO,loadPokemons:H.aD.bound})}}(0,D.Z)(Q,"_viewModel",null);var Y=a(6925),ee=a(4029),et=a.n(ee),ea=(0,Y.Wc)((0,s.Pi)(function(e){let{viewModel:t}=e,{pokemons:a,loadPokemons:s,pageNumber:n,pageSize:l,totalPokemons:d}=t;(0,o.useEffect)(()=>{0===n&&s()},[s,n]);let p=(e,t)=>{s(t-1)};return(0,i.jsxs)("div",{className:et().container,children:[(0,i.jsx)("div",{className:et().list,children:a.map(e=>(0,i.jsxs)(r(),{href:"/pokemons/[id]",as:"/pokemons/".concat(e.id),className:et().item,children:[(0,i.jsx)("div",{className:et().imageWrapper,children:(0,i.jsx)(c(),{src:e.image,alt:e.name,width:36,height:36})}),(0,i.jsx)("span",{className:et().name,children:e.name})]},e.id))}),(0,i.jsx)(X,{color:"primary",count:Math.max(1,Math.ceil(d/l)),onChange:p,page:n+1,siblingCount:2})]})}),Q);function ei(){return(0,i.jsx)(ea,{})}ei.title="Pokemons",ei.showUser=!0;var eo=ei},5785:function(e,t,a){"use strict";a.d(t,{L:function(){return p},e:function(){return u}});var i=a(6154),o=a(4155);let s=o.env.NEXT_PUBLIC_LOCAL_SERVER;async function n(e,t,a,o){let n={url:"".concat(s?"https://localhost:5001/v1/":"https://pokeapi.co/api/v2/").concat(t),method:e,headers:{...o}};return"get"!==e.toLowerCase()?n={...n,data:a}:a instanceof String?n=a:a instanceof Object&&(n={...n,params:a}),(0,i.Z)(n)}async function r(e,t,a){return n("get",e,t,a,{})}i.Z.interceptors.response.use(e=>e,e=>e);var l=a(4924);class c{clone(){let e=new c;return e.id=this.id,e.name=this.name,e.height=this.height,e.weight=this.weight,e.abilities=[...this.abilities],e.baseExperience=this.baseExperience,e.image=this.image,e}constructor(){(0,l.Z)(this,"id",void 0),(0,l.Z)(this,"name",void 0),(0,l.Z)(this,"height",void 0),(0,l.Z)(this,"weight",void 0),(0,l.Z)(this,"abilities",void 0),(0,l.Z)(this,"baseExperience",void 0),(0,l.Z)(this,"image",void 0)}}class d{clone(){let e=new d;return e.id=this.id,e.name=this.name,e.height=this.height,e.weight=this.weight,e.abilities=[...this.abilities],e.baseExperience=this.baseExperience,e.image=this.image,e}constructor(){(0,l.Z)(this,"id",void 0),(0,l.Z)(this,"name",void 0),(0,l.Z)(this,"height",void 0),(0,l.Z)(this,"weight",void 0),(0,l.Z)(this,"abilities",void 0),(0,l.Z)(this,"baseExperience",void 0),(0,l.Z)(this,"image",void 0)}}async function p(e){let{data:t}=await r("pokemon",e);return{...t,results:t.results.map(e=>{let t=e.url.split("/"),a=new d;return a.id=t[t.length-2],a.name=e.name,a.image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(String(a.id).padStart(3,"0"),".png"),a})}}async function u(e){let{data:t}=await r("pokemon/".concat(e));return function(e){let t=new c;return t.id=e.id,t.name=e.name,t.height=e.height,t.weight=e.weight,t.abilities=e.abilities.map(e=>e.ability.name),t.baseExperience=e.base_experience,t.image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(String(t.id).padStart(3,"0"),".png"),t}(t)}},6499:function(e){e.exports={pagesList:"Pagination_pagesList__L4RIk"}},4029:function(e){e.exports={container:"PokemonsView_container__66yTP",list:"PokemonsView_list__wGu4Z",item:"PokemonsView_item__8tvN_",imageWrapper:"PokemonsView_imageWrapper__R9v8_",name:"PokemonsView_name__TeSWZ"}}},function(e){e.O(0,[664,280,774,888,179],function(){return e(e.s=975)}),_N_E=e.O()}]);
//# sourceMappingURL=pokemons-63939cf56206f394.js.map