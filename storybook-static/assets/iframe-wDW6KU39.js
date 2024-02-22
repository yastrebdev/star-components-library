import"../sb-preview/runtime.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function m(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=m(e);fetch(e.href,i)}})();const E="modulepreload",O=function(r,o){return new URL(r,o).href},u={},t=function(o,m,a){let e=Promise.resolve();if(m&&m.length>0){const i=document.getElementsByTagName("link");e=Promise.all(m.map(s=>{if(s=O(s,a),s in u)return;u[s]=!0;const n=s.endsWith(".css"),d=n?'[rel="stylesheet"]':"";if(!!a)for(let c=i.length-1;c>=0;c--){const l=i[c];if(l.href===s&&(!n||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${d}`))return;const _=document.createElement("link");if(_.rel=n?"stylesheet":E,n||(_.as="script",_.crossOrigin=""),_.href=s,document.head.appendChild(_),n)return new Promise((c,l)=>{_.addEventListener("load",c),_.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})}))}return e.then(()=>o()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:T}=__STORYBOOK_MODULE_PREVIEW_API__,p=R({page:"preview"});T.setChannel(p);window.__STORYBOOK_ADDONS_CHANNEL__=p;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=p);const P={"./src/stories/primitive/icon/Icon.stories.tsx":async()=>t(()=>import("./Icon.stories-fI6ZMbfu.js").then(r=>r.I),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),"./src/stories/primitive/icon/IconDock.mdx":async()=>t(()=>import("./IconDock-dYCeJHNI.js"),__vite__mapDeps([7,1,2,3,8,9,10,11,12,0,4,5,6,13]),import.meta.url),"./src/stories/primitive/typography/link/Link.stories.tsx":async()=>t(()=>import("./Link.stories-0lDOqBKB.js").then(r=>r.L),__vite__mapDeps([14,15,1,2,3,5,16]),import.meta.url),"./src/stories/primitive/typography/link/LinkDock.mdx":async()=>t(()=>import("./LinkDock-2GaowN1o.js"),__vite__mapDeps([17,1,2,3,8,9,10,11,12,14,15,5,16,13]),import.meta.url),"./src/stories/primitive/typography/text/Text.stories.tsx":async()=>t(()=>import("./Text.stories-KHzcV2S4.js").then(r=>r.T),__vite__mapDeps([18,1,2,3,15,5,16]),import.meta.url),"./src/stories/primitive/typography/text/TextDocs.mdx":async()=>t(()=>import("./TextDocs-dHIUEuSj.js"),__vite__mapDeps([19,1,2,3,8,9,10,11,12,18,15,5,16,13]),import.meta.url),"./src/stories/primitive/typography/title/Title.stories.tsx":async()=>t(()=>import("./Title.stories-1II8IKc5.js").then(r=>r.T),__vite__mapDeps([20,1,2,3,15,5,16]),import.meta.url),"./src/stories/primitive/typography/title/TitleDocs.mdx":async()=>t(()=>import("./TitleDocs-qk7oQLY4.js"),__vite__mapDeps([21,1,2,3,8,9,10,11,12,20,15,5,16,13]),import.meta.url),"./src/stories/simple/avatar/Avatar.stories.tsx":async()=>t(()=>import("./Avatar.stories-oznvUcoY.js").then(r=>r.A),__vite__mapDeps([22,1,2,3,23,4,5,6,24]),import.meta.url),"./src/stories/simple/avatar/AvatarDock.mdx":async()=>t(()=>import("./AvatarDock-J0Wl7pvR.js"),__vite__mapDeps([25,1,2,3,8,9,10,11,12,22,23,4,5,6,24,13]),import.meta.url),"./src/stories/simple/badges/Badges.stories.tsx":async()=>t(()=>import("./Badges.stories-qy0AaN64.js").then(r=>r.B),__vite__mapDeps([26,1,2,3,4,5,6,23,24,27]),import.meta.url),"./src/stories/simple/badges/BadgesDocs.mdx":async()=>t(()=>import("./BadgesDocs-X1v_k_0P.js"),__vite__mapDeps([28,1,2,3,8,9,10,11,12,26,4,5,6,23,24,27,13]),import.meta.url),"./src/stories/simple/button/Button.stories.tsx":async()=>t(()=>import("./Button.stories-sZlpeKil.js").then(r=>r.B),__vite__mapDeps([29,1,2,3,30,15,5,16,4,6,31]),import.meta.url),"./src/stories/simple/button/ButtonDocs.mdx":async()=>t(()=>import("./ButtonDocs-4VdhnYe0.js"),__vite__mapDeps([32,1,2,3,8,9,10,11,12,29,30,15,5,16,4,6,31,13]),import.meta.url),"./src/stories/simple/card/clickable-card/ClickableCard.stories.tsx":async()=>t(()=>import("./ClickableCard.stories-0YaTDwIM.js").then(r=>r.C),__vite__mapDeps([33,1,2,3,34,4,5,6,35]),import.meta.url),"./src/stories/simple/card/clickable-card/ClickableCardDock.mdx":async()=>t(()=>import("./ClickableCardDock-MxBWcreG.js"),__vite__mapDeps([36,1,2,3,8,9,10,11,12,33,34,4,5,6,35,13]),import.meta.url),"./src/stories/simple/card/static-card/StaticCard.stories.tsx":async()=>t(()=>import("./StaticCard.stories-HpnV8bNB.js").then(r=>r.S),__vite__mapDeps([37,1,2,3,34,4,5,6,35]),import.meta.url),"./src/stories/simple/card/static-card/StaticCardDocs.mdx":async()=>t(()=>import("./StaticCardDocs-pQVxj42s.js"),__vite__mapDeps([38,1,2,3,8,9,10,11,12,37,34,4,5,6,35,13]),import.meta.url),"./src/stories/simple/message/Message.stories.tsx":async()=>t(()=>import("./Message.stories-XB87kPAm.js").then(r=>r.M),__vite__mapDeps([39,1,2,3,30,15,5,16,4,6,31,40]),import.meta.url),"./src/stories/simple/message/MessageDocs.mdx":async()=>t(()=>import("./MessageDocs-Pp37uxGd.js"),__vite__mapDeps([41,1,2,3,8,9,10,11,12,39,30,15,5,16,4,6,31,40,13]),import.meta.url),"./src/stories/smart/input/default/Default.stories.tsx":async()=>t(()=>import("./Default.stories-lPs7xHjH.js").then(r=>r.I),__vite__mapDeps([42,1,2,3,43,30,15,5,16,4,6,31,44]),import.meta.url),"./src/stories/smart/input/default/DefaultDocs.mdx":async()=>t(()=>import("./DefaultDocs-H-sDmh5h.js"),__vite__mapDeps([45,1,2,3,8,9,10,11,12,42,43,30,15,5,16,4,6,31,44,13]),import.meta.url),"./src/stories/smart/input/password/Password.stories.tsx":async()=>t(()=>import("./Password.stories-rYB_D76f.js").then(r=>r.I),__vite__mapDeps([46,1,2,3,43,30,15,5,16,4,6,31,44]),import.meta.url),"./src/stories/smart/input/password/PasswordDocs.mdx":async()=>t(()=>import("./PasswordDocs-NIH4C2om.js"),__vite__mapDeps([47,1,2,3,8,9,10,11,12,46,43,30,15,5,16,4,6,31,44,13]),import.meta.url),"./src/stories/smart/select/Select.stories.tsx":async()=>t(()=>import("./Select.stories-lT-le3qn.js").then(r=>r.S),__vite__mapDeps([48,1,2,3,4,5,6,49]),import.meta.url),"./src/stories/smart/select/SelectDocs.mdx":async()=>t(()=>import("./SelectDocs-AF6b5786.js"),__vite__mapDeps([50,1,2,3,8,9,10,11,12,48,4,5,6,49,13]),import.meta.url),"./src/stories/smart/switch/Switch.stories.tsx":async()=>t(()=>import("./Switch.stories-T4iOaZHS.js").then(r=>r.S),__vite__mapDeps([51,1,2,3,4,5,6,52]),import.meta.url),"./src/stories/smart/switch/SwitchDocs.mdx":async()=>t(()=>import("./SwitchDocs-cNys_pi8.js"),__vite__mapDeps([53,1,2,3,8,9,10,11,12,51,4,5,6,52,13]),import.meta.url),"./src/stories/smart/tag/Tag.stories.tsx":async()=>t(()=>import("./Tag.stories-ajSRjM7u.js").then(r=>r.T),__vite__mapDeps([54,1,2,3,4,5,6,55]),import.meta.url),"./src/stories/smart/tag/TagDocs.mdx":async()=>t(()=>import("./TagDocs-WeK3J2W-.js"),__vite__mapDeps([56,1,2,3,8,9,10,11,12,54,4,5,6,55,13]),import.meta.url)};async function v(r){return P[r]()}const{composeConfigs:D,PreviewWeb:y,ClientApi:L}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const r=await Promise.all([t(()=>import("./entry-preview-OIOrqgri.js"),__vite__mapDeps([57,2,3,58,9]),import.meta.url),t(()=>import("./entry-preview-docs-q7Yq2_Fm.js"),__vite__mapDeps([59,11,3,12,2]),import.meta.url),t(()=>import("./preview-VI2eoWmp.js"),__vite__mapDeps([60,10]),import.meta.url),t(()=>import("./preview-gmb1xB2W.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-OnO0tzRj.js"),__vite__mapDeps([61,12]),import.meta.url),t(()=>import("./preview-FekBEZxm.js"),__vite__mapDeps([62,12]),import.meta.url),t(()=>import("./preview-TkXSQy1x.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([63,12]),import.meta.url),t(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-70qxeh8F.js"),__vite__mapDeps([64,3]),import.meta.url),t(()=>import("./preview-Som55fjU.js"),__vite__mapDeps([65,1,2,3,66]),import.meta.url)]);return D(r)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new y;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new L({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:v,getProjectAnnotations:I});export{t as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Icon.stories-fI6ZMbfu.js","./jsx-runtime-vNq4Oc-g.js","./index-4g5l5LRQ.js","./_commonjsHelpers-4gQjN7DL.js","./Icon-TQ-jYXSw.js","./index-XNbs-YUW.js","./Icon-mcOtVWc1.css","./IconDock-dYCeJHNI.js","./index-V_dUK7xA.js","./index-jmm5gWkb.js","./index-ogXoivrg.js","./index-MVbLLYTZ.js","./index-PPLHz8o0.js","./index-_VGcpBFS.js","./Link.stories-0lDOqBKB.js","./Typography-P_f6KuW6.js","./Typography-Q4P7FtyJ.css","./LinkDock-2GaowN1o.js","./Text.stories-KHzcV2S4.js","./TextDocs-dHIUEuSj.js","./Title.stories-1II8IKc5.js","./TitleDocs-qk7oQLY4.js","./Avatar.stories-oznvUcoY.js","./Avatar-eZnnG9G3.js","./Avatar-vEUF80s_.css","./AvatarDock-J0Wl7pvR.js","./Badges.stories-qy0AaN64.js","./Badges-ZLe3veyu.css","./BadgesDocs-X1v_k_0P.js","./Button.stories-sZlpeKil.js","./Button-Yd4SJNgF.js","./Button-7cP9VsdZ.css","./ButtonDocs-4VdhnYe0.js","./ClickableCard.stories-0YaTDwIM.js","./Card-cyfQIDqr.js","./Card-bgnJpPIA.css","./ClickableCardDock-MxBWcreG.js","./StaticCard.stories-HpnV8bNB.js","./StaticCardDocs-pQVxj42s.js","./Message.stories-XB87kPAm.js","./Message-xCgI3-pf.css","./MessageDocs-Pp37uxGd.js","./Default.stories-lPs7xHjH.js","./Default-s_uA9_HN.js","./Default-F-5OuzeQ.css","./DefaultDocs-H-sDmh5h.js","./Password.stories-rYB_D76f.js","./PasswordDocs-NIH4C2om.js","./Select.stories-lT-le3qn.js","./Select-oZsbokCu.css","./SelectDocs-AF6b5786.js","./Switch.stories-T4iOaZHS.js","./Switch-xTyjG19L.css","./SwitchDocs-cNys_pi8.js","./Tag.stories-ajSRjM7u.js","./Tag-afoTt8q8.css","./TagDocs-WeK3J2W-.js","./entry-preview-OIOrqgri.js","./react-18-ba7OOUbL.js","./entry-preview-docs-q7Yq2_Fm.js","./preview-VI2eoWmp.js","./preview-OnO0tzRj.js","./preview-FekBEZxm.js","./preview-u8M_OEO2.js","./preview-70qxeh8F.js","./preview-Som55fjU.js","./preview-YvbIIsSF.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
