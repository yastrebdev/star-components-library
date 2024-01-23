import{r as N}from"./index-4g5l5LRQ.js";import{g as R}from"./_commonjsHelpers-4gQjN7DL.js";var g={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=N,w=Symbol.for("react.element"),k=Symbol.for("react.fragment"),D=Object.prototype.hasOwnProperty,I=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P={key:!0,ref:!0,__self:!0,__source:!0};function E(t,r,n){var o,a={},e=null,s=null;n!==void 0&&(e=""+n),r.key!==void 0&&(e=""+r.key),r.ref!==void 0&&(s=r.ref);for(o in r)D.call(r,o)&&!P.hasOwnProperty(o)&&(a[o]=r[o]);if(t&&t.defaultProps)for(o in r=t.defaultProps,r)a[o]===void 0&&(a[o]=r[o]);return{$$typeof:w,type:t,key:e,ref:s,props:a,_owner:I.current}}f.Fragment=k;f.jsx=E;f.jsxs=E;g.exports=f;var l=g.exports,z={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var r={}.hasOwnProperty;function n(){for(var e="",s=0;s<arguments.length;s++){var p=arguments[s];p&&(e=a(e,o(p)))}return e}function o(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var s="";for(var p in e)r.call(e,p)&&e[p]&&(s=a(s,p));return s}function a(e,s){return s?e?e+" "+s:e+s:e}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(z);var T=z.exports;const $=R(T),i=({type:t="primary",size:r="lg",children:n="I'm button"})=>l.jsx("div",{className:$("button",{[`button__type-${t}`]:t,[`button__size-${r}`]:r}),children:n});try{i.displayName="Button",i.__docgenInfo={description:"",displayName:"Button",props:{type:{defaultValue:{value:"primary"},description:"",name:"type",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"string"}}}}}catch{}const B={types:["primary","secondary"],sizes:["sm","lg"]},F={title:"Button",component:i,tags:["autodocs"]},u=()=>l.jsx(i,{}),c=()=>B.types.map((t,r)=>l.jsx(i,{type:t},r)),m=()=>B.sizes.map((t,r)=>l.jsx(i,{size:t},r));var d,y,_;u.parameters={...u.parameters,docs:{...(d=u.parameters)==null?void 0:d.docs,source:{originalSource:"() => <Button />",...(_=(y=u.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var x,v,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`() => options.types.map((type, index) => {
  return <Button key={index} type={type} />;
})`,...(S=(v=c.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var j,O,b;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`() => options.sizes.map((size, index) => {
  return <Button key={index} size={size} />;
})`,...(b=(O=m.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};const L=["Default","Types","Sizes"];export{u as Default,m as Sizes,c as Types,L as __namedExportsOrder,F as default};
