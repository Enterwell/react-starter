(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[699],{6836:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return K}});var n=r(7294),i=r(1217),a=r(1163),s=r(1664),o=r(1048),c=r(2793),u=(r(5697),r(6010)),l=r(7192),h=r(917),p=r(8216),d=r(7623),f=r(4786),m=r(3620);function v(e){return(0,m.Z)("MuiCircularProgress",e)}(0,r(6087).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var g=r(5893);const k=["className","color","disableShrink","size","style","thickness","value","variant"];let b,w,x,Z,y=e=>e;const _=44,P=(0,h.F4)(b||(b=y`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),j=(0,h.F4)(w||(w=y`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),O=(0,f.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,p.Z)(r.color)}`]]}})((({ownerState:e,theme:t})=>(0,c.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:t.palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,h.iv)(x||(x=y`
      animation: ${0} 1.4s linear infinite;
    `),P))),D=(0,f.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),S=(0,f.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,p.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,c.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,h.iv)(Z||(Z=y`
      animation: ${0} 1.4s ease-in-out infinite;
    `),j)));var N=n.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiCircularProgress"}),{className:n,color:i="primary",disableShrink:a=!1,size:s=40,style:h,thickness:f=3.6,value:m=0,variant:b="indeterminate"}=r,w=(0,o.Z)(r,k),x=(0,c.Z)({},r,{color:i,disableShrink:a,size:s,thickness:f,value:m,variant:b}),Z=(e=>{const{classes:t,variant:r,color:n,disableShrink:i}=e,a={root:["root",r,`color${(0,p.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,p.Z)(r)}`,i&&"circleDisableShrink"]};return(0,l.Z)(a,v,t)})(x),y={},P={},j={};if("determinate"===b){const e=2*Math.PI*((_-f)/2);y.strokeDasharray=e.toFixed(3),j["aria-valuenow"]=Math.round(m),y.strokeDashoffset=`${((100-m)/100*e).toFixed(3)}px`,P.transform="rotate(-90deg)"}return(0,g.jsx)(O,(0,c.Z)({className:(0,u.Z)(Z.root,n),style:(0,c.Z)({width:s,height:s},P,h),ownerState:x,ref:t,role:"progressbar"},j,w,{children:(0,g.jsx)(D,{className:Z.svg,ownerState:x,viewBox:"22 22 44 44",children:(0,g.jsx)(S,{className:Z.circle,style:y,ownerState:x,cx:_,cy:_,r:(_-f)/2,fill:"none",strokeWidth:f})})}))})),E=r(2090),C=r.n(E);var M=function(e){var t=e.isLoading,r=e.children;return(0,g.jsx)("div",{className:C().container,children:t?(0,g.jsx)(N,{}):r})},q=r(5861),L=r(5671),T=r(3144),V=r(4942),R=r(7757),$=r.n(R),z=r(8949),B=r(7368),F=r(7459),I=r(9703),W=function(){function e(){(0,L.Z)(this,e),(0,V.Z)(this,"userAppModel",void 0),(0,V.Z)(this,"isLoading",void 0),(0,V.Z)(this,"pokemon",void 0),this.userAppModel=B.Z.instance,this.isLoading=!0,this.pokemon=null,(0,z.rC)(this,{isLoading:z.LO,pokemon:z.LO,loadPokemon:z.aD.bound})}return(0,T.Z)(e,[{key:"loadPokemon",value:function(){var e=(0,q.Z)($().mark((function e(t){var r,n=this;return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isLoading=!0,e.prev=1,e.next=4,F.Z.getSinglePokemon(t);case 4:r=e.sent,(0,z.z)((function(){n.pokemon=r})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),I.Z.showDefaultErrorNotification();case 11:(0,z.z)((function(){n.isLoading=!1}));case 12:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}],[{key:"instance",get:function(){return new e}}]),e}(),X=r(8582),A=r(62),H=r.n(A);var U=(0,X.Wc)((0,i.Pi)((function(e){var t=e.viewModel,r=t.userAppModel,i=t.isLoading,o=t.pokemon,c=t.loadPokemon,u=r.user,l=(0,a.useRouter)();return(0,n.useEffect)((function(){l.query&&l.query.id&&c(l.query.id)}),[l.query]),(0,g.jsx)(M,{isLoading:i,children:o&&(0,g.jsxs)("div",{className:H().container,children:[(0,g.jsx)("img",{className:H().image,src:o.image,alt:o.name}),(0,g.jsx)("span",{className:H().name,children:o.name}),(0,g.jsxs)("div",{className:H().data,children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("span",{className:H().label,children:"Weight:"}),(0,g.jsx)("span",{children:o.weight})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("span",{className:H().label,children:"Height:"}),(0,g.jsx)("span",{children:o.height})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("span",{className:H().label,children:"Base experience:"}),(0,g.jsx)("span",{children:o.baseExperience})]})]}),(0,g.jsxs)("div",{className:H().feedback,children:["What do you think about ".concat(o.name," "),(0,g.jsx)("span",{className:H().user,children:"".concat(u?u.name:"John Doe")}),"?"]}),(0,g.jsx)(s.default,{href:"/pokemons",children:(0,g.jsx)("a",{className:H().link,children:"Go back"})})]})})})),W);function G(){return(0,g.jsx)(U,{})}G.title="Pokemon details",G.showUser=!0;var K=G},7459:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(4942),i=r(5861),a=r(5671),s=r(3144),o=r(7757),c=r.n(o),u=r(9669),l=r.n(u);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}l().interceptors.response.use((function(e){return e}),(function(e){return e}));var d=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"_request",value:function(){var t=(0,i.Z)(c().mark((function t(r,n,i,a){var s;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s={url:"".concat(e._getBaseUrl()).concat(n),method:r,headers:p(p({},e._getDefaultHeaders()),a)},"get"!==r.toLowerCase()?s=p(p({},s),{},{data:i}):i instanceof String?s=i:i instanceof Object&&(s=p(p({},s),{},{params:i})),t.abrupt("return",l()(s));case 3:case"end":return t.stop()}}),t)})));return function(e,r,n,i){return t.apply(this,arguments)}}()},{key:"get",value:function(){var t=(0,i.Z)(c().mark((function t(r,n,i){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._request("get",r,n,i,{}));case 1:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"post",value:function(){var t=(0,i.Z)(c().mark((function t(r,n,i,a){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._request("post",r,n,i,a));case 1:case"end":return t.stop()}}),t)})));return function(e,r,n,i){return t.apply(this,arguments)}}()},{key:"put",value:function(){var t=(0,i.Z)(c().mark((function t(r,n,i){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._request("put",r,n,i));case 1:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"delete",value:function(){var t=(0,i.Z)(c().mark((function t(r,n,i){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._request("delete",r,n,i));case 1:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}()}]),e}();(0,n.Z)(d,"_getBaseUrl",(function(){return"https://pokeapi.co/api/v2/"})),(0,n.Z)(d,"_getDefaultHeaders",(function(){}));var f=d,m=r(1451),v=function(){function e(){(0,a.Z)(this,e),(0,n.Z)(this,"id",void 0),(0,n.Z)(this,"name",void 0),(0,n.Z)(this,"height",void 0),(0,n.Z)(this,"weight",void 0),(0,n.Z)(this,"abilities",void 0),(0,n.Z)(this,"baseExperience",void 0),(0,n.Z)(this,"image",void 0)}return(0,s.Z)(e,[{key:"clone",value:function(){var t=new e;return t.id=this.id,t.name=this.name,t.height=this.height,t.weight=this.weight,t.abilities=(0,m.Z)(this.abilities),t.baseExperience=this.baseExperience,t.image=this.image,t}}]),e}(),g=function(){function e(){(0,a.Z)(this,e),(0,n.Z)(this,"id",void 0),(0,n.Z)(this,"name",void 0),(0,n.Z)(this,"height",void 0),(0,n.Z)(this,"weight",void 0),(0,n.Z)(this,"abilities",void 0),(0,n.Z)(this,"baseExperience",void 0),(0,n.Z)(this,"image",void 0)}return(0,s.Z)(e,[{key:"clone",value:function(){var t=new e;return t.id=this.id,t.name=this.name,t.height=this.height,t.weight=this.weight,t.abilities=(0,m.Z)(this.abilities),t.baseExperience=this.baseExperience,t.image=this.image,t}}]),e}(),k=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"mapDtosToPokemons",value:function(e){return e.map((function(e){var t=e.url.split("/"),r=new g;return r.id=t[t.length-2],r.name=e.name,r.image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(String(r.id).padStart(3,"0"),".png"),r}))}},{key:"mapDtoToSinglePokemon",value:function(e){var t=new v;return t.id=e.id,t.name=e.name,t.height=e.height,t.weight=e.weight,t.abilities=e.abilities.map((function(e){return e.ability.name})),t.baseExperience=e.base_experience,t.image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(String(t.id).padStart(3,"0"),".png"),t}}]),e}();function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"getPokemons",value:function(){var e=(0,i.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("pokemon",t);case 2:return r=e.sent,n=r.data,e.abrupt("return",w(w({},n),{},{results:k.mapDtosToPokemons(n.results)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSinglePokemon",value:function(){var e=(0,i.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("pokemon/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",k.mapDtoToSinglePokemon(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()},1894:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pokemons/[id]",function(){return r(6836)}])},2090:function(e){e.exports={container:"LoadingContainer_container__uCTuG"}},62:function(e){e.exports={container:"PokemonDetailsView_container__NrKqf",image:"PokemonDetailsView_image__KcTpB",name:"PokemonDetailsView_name__OM__1",data:"PokemonDetailsView_data__zI0jN",label:"PokemonDetailsView_label__XINtR",feedback:"PokemonDetailsView_feedback__vVtq3",user:"PokemonDetailsView_user__M_3wk",link:"PokemonDetailsView_link__rXT8q"}},1163:function(e,t,r){e.exports=r(9898)}},function(e){e.O(0,[861,774,888,179],(function(){return t=1894,e(e.s=t);var t}));var t=e.O();_N_E=t}]);