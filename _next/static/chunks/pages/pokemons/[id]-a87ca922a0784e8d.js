(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[699],{2163:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pokemons/[id]",function(){return t(4990)}])},4990:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return H}});var s=t(1527),n=t(959),a=t(9984),r=t(7541),o=t(20),c=t.n(o),l=t(9895),d=t.n(l),h=t(45),m=t(8957),u=t(5341),p=t(9971),g=t(6731),v=t(8854),k=t(6184),f=t(2501),x=t(8752),_=t(6448);function w(e){return(0,_.Z)("MuiCircularProgress",e)}(0,x.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);let b=["className","color","disableShrink","size","style","thickness","value","variant"],Z=e=>e,j,y,P,N,D=(0,g.F4)(j||(j=Z`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),E=(0,g.F4)(y||(y=Z`
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
`)),S=e=>{let{classes:i,variant:t,color:s,disableShrink:n}=e,a={root:["root",t,`color${(0,v.Z)(s)}`],svg:["svg"],circle:["circle",`circle${(0,v.Z)(t)}`,n&&"circleDisableShrink"]};return(0,p.Z)(a,w,i)},C=(0,f.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,i)=>{let{ownerState:t}=e;return[i.root,i[t.variant],i[`color${(0,v.Z)(t.color)}`]]}})(({ownerState:e,theme:i})=>(0,m.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:i.transitions.create("transform")},"inherit"!==e.color&&{color:(i.vars||i).palette[e.color].main}),({ownerState:e})=>"indeterminate"===e.variant&&(0,g.iv)(P||(P=Z`
      animation: ${0} 1.4s linear infinite;
    `),D)),M=(0,f.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,i)=>i.svg})({display:"block"}),L=(0,f.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,i)=>{let{ownerState:t}=e;return[i.circle,i[`circle${(0,v.Z)(t.variant)}`],t.disableShrink&&i.circleDisableShrink]}})(({ownerState:e,theme:i})=>(0,m.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:i.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,g.iv)(N||(N=Z`
      animation: ${0} 1.4s ease-in-out infinite;
    `),E)),R=n.forwardRef(function(e,i){let t=(0,k.Z)({props:e,name:"MuiCircularProgress"}),{className:n,color:a="primary",disableShrink:r=!1,size:o=40,style:c,thickness:l=3.6,value:d=0,variant:p="indeterminate"}=t,g=(0,h.Z)(t,b),v=(0,m.Z)({},t,{color:a,disableShrink:r,size:o,thickness:l,value:d,variant:p}),f=S(v),x={},_={},w={};if("determinate"===p){let e=2*Math.PI*((44-l)/2);x.strokeDasharray=e.toFixed(3),w["aria-valuenow"]=Math.round(d),x.strokeDashoffset=`${((100-d)/100*e).toFixed(3)}px`,_.transform="rotate(-90deg)"}return(0,s.jsx)(C,(0,m.Z)({className:(0,u.Z)(f.root,n),style:(0,m.Z)({width:o,height:o},_,c),ownerState:v,ref:i,role:"progressbar"},w,g,{children:(0,s.jsx)(M,{className:f.svg,ownerState:v,viewBox:"22 22 44 44",children:(0,s.jsx)(L,{className:f.circle,style:x,ownerState:v,cx:44,cy:44,r:(44-l)/2,fill:"none",strokeWidth:l})})}))});var V=t(7083),q=t.n(V),O=function(e){let{isLoading:i,children:t}=e;return(0,s.jsx)("div",{className:q().container,children:i?(0,s.jsx)(R,{}):t})},$=t(3962),I=t(5707),T=t(2868),U=t(5924),W=t(1183);class X{static get instance(){return null==X._viewModel&&(X._viewModel=new X),X._viewModel}async loadPokemon(e){this.isLoading=!0;try{let i=await (0,W.e)(e);(0,I.z)(()=>{this.pokemon=i})}catch(e){console.error(e),(0,U.Uo)()}(0,I.z)(()=>{this.isLoading=!1})}onUnmount(){this.isLoading=!0,this.pokemon=null}constructor(){(0,$.Z)(this,"userAppModel",void 0),(0,$.Z)(this,"isLoading",void 0),(0,$.Z)(this,"pokemon",void 0),this.userAppModel=T.Z.instance,this.isLoading=!0,this.pokemon=null,(0,I.rC)(this,{isLoading:I.LO,pokemon:I.LO,loadPokemon:I.aD.bound,onUnmount:I.aD.bound})}}(0,$.Z)(X,"_viewModel",null);var z=t(6410),F=t(8005),A=t.n(F),B=(0,z.Wc)((0,a.Pi)(function(e){let{viewModel:i}=e,{userAppModel:t,isLoading:a,pokemon:o,loadPokemon:l,onUnmount:h}=i,{user:m}=t,u=(0,r.useRouter)();return(0,n.useEffect)(()=>(u.query&&u.query.id&&l(u.query.id),h),[l,h,u.query]),(0,s.jsx)(O,{isLoading:a,children:o&&(0,s.jsxs)("div",{className:A().container,children:[(0,s.jsx)("div",{className:A().imageWrapper,children:(0,s.jsx)(d(),{src:o.image,alt:o.name,width:250,height:250})}),(0,s.jsx)("span",{className:A().name,"data-testid":"pokemon-name",children:o.name}),(0,s.jsxs)("div",{className:A().data,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:A().label,children:"Weight:"}),(0,s.jsx)("span",{children:o.weight})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:A().label,children:"Height:"}),(0,s.jsx)("span",{children:o.height})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:A().label,children:"Base experience:"}),(0,s.jsx)("span",{children:o.baseExperience})]})]}),(0,s.jsxs)("div",{className:A().feedback,children:["What do you think about ".concat(o.name," "),(0,s.jsx)("span",{className:A().user,"data-testid":"pokemon-user-name",children:"".concat(m?m.name:"John Doe")}),"?"]}),(0,s.jsx)(c(),{href:"/pokemons",className:A().link,"data-testid":"pokemon-link",children:"Go back"})]})})}),X);function G(){return(0,s.jsx)(B,{})}G.title="Pokemon details",G.showUser=!0;var H=G},1183:function(e,i,t){"use strict";t.d(i,{L:function(){return h},e:function(){return m}});var s=t(7647),n=t(4224);let a=n.env.NEXT_PUBLIC_LOCAL_SERVER;async function r(e,i,t,n){let r={url:"".concat(a?"https://localhost:5001/v1/":"https://pokeapi.co/api/v2/").concat(i),method:e,headers:{...n}};return"get"!==e.toLowerCase()?r={...r,data:t}:t instanceof String?r=t:t instanceof Object&&(r={...r,params:t}),(0,s.Z)(r)}async function o(e,i,t){return r("get",e,i,t,{})}s.Z.interceptors.response.use(e=>e,e=>e);var c=t(3962);class l{clone(){let e=new l;return e.id=this.id,e.name=this.name,e.height=this.height,e.weight=this.weight,e.abilities=[...this.abilities],e.baseExperience=this.baseExperience,e.image=this.image,e}constructor(){(0,c.Z)(this,"id",void 0),(0,c.Z)(this,"name",void 0),(0,c.Z)(this,"height",void 0),(0,c.Z)(this,"weight",void 0),(0,c.Z)(this,"abilities",void 0),(0,c.Z)(this,"baseExperience",void 0),(0,c.Z)(this,"image",void 0)}}class d{clone(){let e=new d;return e.id=this.id,e.name=this.name,e.height=this.height,e.weight=this.weight,e.abilities=[...this.abilities],e.baseExperience=this.baseExperience,e.image=this.image,e}constructor(){(0,c.Z)(this,"id",void 0),(0,c.Z)(this,"name",void 0),(0,c.Z)(this,"height",void 0),(0,c.Z)(this,"weight",void 0),(0,c.Z)(this,"abilities",void 0),(0,c.Z)(this,"baseExperience",void 0),(0,c.Z)(this,"image",void 0)}}async function h(e){let{data:i}=await o("pokemon",e);return{...i,results:i.results.map(e=>{let i=e.url.split("/"),t=new d;return t.id=i[i.length-2],t.name=e.name,t.image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(String(t.id).padStart(3,"0"),".png"),t})}}async function m(e){let{data:i}=await o("pokemon/".concat(e));return function(e){let i=new l;return i.id=e.id,i.name=e.name,i.height=e.height,i.weight=e.weight,i.abilities=e.abilities.map(e=>e.ability.name),i.baseExperience=e.base_experience,i.image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(String(i.id).padStart(3,"0"),".png"),i}(i)}},7083:function(e){e.exports={container:"LoadingContainer_container__uCTuG"}},8005:function(e){e.exports={container:"PokemonDetailsView_container__NrKqf",name:"PokemonDetailsView_name__OM__1",data:"PokemonDetailsView_data__zI0jN",label:"PokemonDetailsView_label__XINtR",feedback:"PokemonDetailsView_feedback__vVtq3",user:"PokemonDetailsView_user__M_3wk",link:"PokemonDetailsView_link__rXT8q"}},7541:function(e,i,t){e.exports=t(4084)}},function(e){e.O(0,[20,803,774,888,179],function(){return e(e.s=2163)}),_N_E=e.O()}]);
//# sourceMappingURL=[id]-a87ca922a0784e8d.js.map