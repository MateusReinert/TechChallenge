(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,97055,t=>{"use strict";t.i(47167);var e=t.i(71645),a=t.i(7670),i=t.i(1447),n=t.i(84364),r=t.i(55323),o=t.i(51221),s=t.i(78564),l=t.i(41322),d=t.i(64719),p=t.i(69072);function h(t){return(0,p.default)("MuiSkeleton",t)}(0,d.default)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var u=t.i(43476);let f=n.keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,m=n.keyframes`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,c="string"!=typeof f?n.css`
        animation: ${f} 2s ease-in-out 0.5s infinite;
      `:null,y="string"!=typeof m?n.css`
        &::after {
          animation: ${m} 2s linear 0.5s infinite;
        }
      `:null,g=(0,r.styled)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:a}=t;return[e.root,e[a.variant],!1!==a.animation&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})((0,o.default)(({theme:t})=>{let e=String(t.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1]||"px",a=parseFloat(t.shape.borderRadius),i=(0,l.getReducedMotionStyles)(t,{animation:"none"}),n=(0,l.getReducedMotionStyles)(t,{"&::after":{animation:"none",display:"none"}});return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:t.alpha(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${e}/${Math.round(a/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:t})=>t.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:t})=>t.hasChildren&&!t.width,style:{maxWidth:"fit-content"}},{props:({ownerState:t})=>t.hasChildren&&!t.height,style:{height:"auto"}},{props:{animation:"pulse"},style:c||{animation:`${f} 2s ease-in-out 0.5s infinite`}},...i?[{props:{animation:"pulse"},style:i}]:[],{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:y||{"&::after":{animation:`${m} 2s linear 0.5s infinite`}}},...n?[{props:{animation:"wave"},style:n}]:[]]}})),v=e.forwardRef(function(t,e){let n=(0,s.useDefaultProps)({props:t,name:"MuiSkeleton"}),{animation:r="pulse",className:o,component:l="span",height:d,style:p,variant:f="text",width:m,...c}=n,y={...n,animation:r,component:l,variant:f,hasChildren:!!c.children},v=(t=>{let{classes:e,variant:a,animation:n,hasChildren:r,width:o,height:s}=t;return(0,i.default)({root:["root",a,n,r&&"withChildren",r&&!o&&"fitContent",r&&!s&&"heightAuto"]},h,e)})(y);return(0,u.jsx)(g,{as:l,ref:e,className:(0,a.default)(v.root,o),ownerState:y,...c,style:{width:m,height:d,...p}})});t.s(["default",0,v],97055)}]);