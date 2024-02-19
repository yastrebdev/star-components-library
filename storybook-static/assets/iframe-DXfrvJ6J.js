import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();const E="modulepreload",O=function(r,s){return new URL(r,s).href},u={},t=function(s,n,a){let e=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");e=Promise.all(n.map(o=>{if(o=O(o,a),o in u)return;u[o]=!0;const m=o.endsWith(".css"),d=m?'[rel="stylesheet"]':"";if(!!a)for(let c=i.length-1;c>=0;c--){const l=i[c];if(l.href===o&&(!m||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${d}`))return;const _=document.createElement("link");if(_.rel=m?"stylesheet":E,m||(_.as="script",_.crossOrigin=""),_.href=o,document.head.appendChild(_),m)return new Promise((c,l)=>{_.addEventListener("load",c),_.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${o}`)))})}))}return e.then(()=>s()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:T}=__STORYBOOK_MODULE_PREVIEW_API__,p=R({page:"preview"});T.setChannel(p);window.__STORYBOOK_ADDONS_CHANNEL__=p;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=p);const v={"./src/stories/primitive/icon/Icon.stories.tsx":async()=>t(()=>import("./Icon.stories-DIeuorVD.js").then(r=>r.I),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),"./src/stories/primitive/icon/IconDock.mdx":async()=>t(()=>import("./IconDock-6_80HL0d.js"),__vite__mapDeps([7,1,2,3,8,9,10,11,12,0,4,5,6,13]),import.meta.url),"./src/stories/primitive/typography/link/Link.stories.tsx":async()=>t(()=>import("./Link.stories-0lDOqBKB.js").then(r=>r.L),__vite__mapDeps([14,15,1,2,3,5,16]),import.meta.url),"./src/stories/primitive/typography/link/LinkDock.mdx":async()=>t(()=>import("./LinkDock-oxA2uijF.js"),__vite__mapDeps([17,1,2,3,8,9,10,11,12,14,15,5,16,13]),import.meta.url),"./src/stories/primitive/typography/text/Text.stories.tsx":async()=>t(()=>import("./Text.stories-KHzcV2S4.js").then(r=>r.T),__vite__mapDeps([18,1,2,3,15,5,16]),import.meta.url),"./src/stories/primitive/typography/text/TextDocs.mdx":async()=>t(()=>import("./TextDocs-ljWvj4ve.js"),__vite__mapDeps([19,1,2,3,8,9,10,11,12,18,15,5,16,13]),import.meta.url),"./src/stories/primitive/typography/title/Title.stories.tsx":async()=>t(()=>import("./Title.stories-1II8IKc5.js").then(r=>r.T),__vite__mapDeps([20,1,2,3,15,5,16]),import.meta.url),"./src/stories/primitive/typography/title/TitleDocs.mdx":async()=>t(()=>import("./TitleDocs-8um9A0X5.js"),__vite__mapDeps([21,1,2,3,8,9,10,11,12,20,15,5,16,13]),import.meta.url),"./src/stories/simple/avatar/Avatar.stories.tsx":async()=>t(()=>import("./Avatar.stories-DQZZewPO.js").then(r=>r.A),__vite__mapDeps([22,1,2,3,23,4,5,6,24]),import.meta.url),"./src/stories/simple/avatar/AvatarDock.mdx":async()=>t(()=>import("./AvatarDock-0g4Cff6q.js"),__vite__mapDeps([25,1,2,3,8,9,10,11,12,22,23,4,5,6,24,13]),import.meta.url),"./src/stories/simple/badges/Badges.stories.tsx":async()=>t(()=>import("./Badges.stories-ymyvQDq8.js").then(r=>r.B),__vite__mapDeps([26,1,2,3,4,5,6,23,24,27]),import.meta.url),"./src/stories/simple/badges/BadgesDocs.mdx":async()=>t(()=>import("./BadgesDocs-wtfl4BAF.js"),__vite__mapDeps([28,1,2,3,8,9,10,11,12,26,4,5,6,23,24,27,13]),import.meta.url),"./src/stories/simple/button/Button.stories.tsx":async()=>t(()=>import("./Button.stories-Sm1y9HB8.js").then(r=>r.B),__vite__mapDeps([29,1,2,3,30,15,5,16,4,6,31]),import.meta.url),"./src/stories/simple/button/ButtonDoc.mdx":async()=>t(()=>import("./ButtonDoc-n8ijX7gD.js"),__vite__mapDeps([32,1,2,3,8,9,10,11,12,29,30,15,5,16,4,6,31,13]),import.meta.url),"./src/stories/simple/card/clickable-card/ClickableCard.stories.tsx":async()=>t(()=>import("./ClickableCard.stories-K6VTZ063.js").then(r=>r.C),__vite__mapDeps([33,1,2,3,34,4,5,6,35]),import.meta.url),"./src/stories/simple/card/clickable-card/ClickableCardDock.mdx":async()=>t(()=>import("./ClickableCardDock-CzXbSX_W.js"),__vite__mapDeps([36,1,2,3,8,9,10,11,12,33,34,4,5,6,35,13]),import.meta.url),"./src/stories/simple/card/static-card/StaticCard.stories.tsx":async()=>t(()=>import("./StaticCard.stories-KZDDvYrp.js").then(r=>r.S),__vite__mapDeps([37,1,2,3,34,4,5,6,35]),import.meta.url),"./src/stories/simple/card/static-card/StaticCardDocs.mdx":async()=>t(()=>import("./StaticCardDocs-5X1ydYji.js"),__vite__mapDeps([38,1,2,3,8,9,10,11,12,37,34,4,5,6,35,13]),import.meta.url),"./src/stories/simple/message/Message.stories.tsx":async()=>t(()=>import("./Message.stories-_vad1WDo.js"),__vite__mapDeps([39,1,2,3,4,5,6,40]),import.meta.url),"./src/stories/smart/input/Input.stories.tsx":async()=>t(()=>import("./Input.stories-LSxcuErx.js"),__vite__mapDeps([41,1,2,3,30,15,5,16,4,6,31,42]),import.meta.url),"./src/stories/smart/select/Select.stories.tsx":async()=>t(()=>import("./Select.stories-g0GpiCRo.js"),__vite__mapDeps([43,1,2,3,4,5,6,44]),import.meta.url),"./src/stories/smart/switch/Switch.stories.tsx":async()=>t(()=>import("./Switch.stories-Jcy9w-R6.js"),__vite__mapDeps([45,1,2,3,4,5,6,46]),import.meta.url),"./src/stories/smart/tag/Tag.stories.tsx":async()=>t(()=>import("./Tag.stories-bYElYA1j.js"),__vite__mapDeps([47,1,2,3,4,5,6,48]),import.meta.url)};async function P(r){return v[r]()}const{composeConfigs:y,PreviewWeb:L,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,D=async()=>{const r=await Promise.all([t(()=>import("./entry-preview-OIOrqgri.js"),__vite__mapDeps([49,2,3,50,9]),import.meta.url),t(()=>import("./entry-preview-docs-q7Yq2_Fm.js"),__vite__mapDeps([51,11,3,12,2]),import.meta.url),t(()=>import("./preview-VI2eoWmp.js"),__vite__mapDeps([52,10]),import.meta.url),t(()=>import("./preview-e5ja0c6Z.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-OnO0tzRj.js"),__vite__mapDeps([53,12]),import.meta.url),t(()=>import("./preview-FekBEZxm.js"),__vite__mapDeps([54,12]),import.meta.url),t(()=>import("./preview-TkXSQy1x.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([55,12]),import.meta.url),t(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-70qxeh8F.js"),__vite__mapDeps([56,3]),import.meta.url),t(()=>import("./preview-Som55fjU.js"),__vite__mapDeps([57,1,2,3,58]),import.meta.url)]);return y(r)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new I({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:P,getProjectAnnotations:D});export{t as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Icon.stories-DIeuorVD.js","./jsx-runtime-vNq4Oc-g.js","./index-4g5l5LRQ.js","./_commonjsHelpers-4gQjN7DL.js","./Icon-j9HTkUdV.js","./index-XNbs-YUW.js","./Icon-mcOtVWc1.css","./IconDock-6_80HL0d.js","./index-yUZw_wMm.js","./index-jmm5gWkb.js","./index-ogXoivrg.js","./index-MVbLLYTZ.js","./index-PPLHz8o0.js","./index-_VGcpBFS.js","./Link.stories-0lDOqBKB.js","./Typography-P_f6KuW6.js","./Typography-Q4P7FtyJ.css","./LinkDock-oxA2uijF.js","./Text.stories-KHzcV2S4.js","./TextDocs-ljWvj4ve.js","./Title.stories-1II8IKc5.js","./TitleDocs-8um9A0X5.js","./Avatar.stories-DQZZewPO.js","./Avatar-Kqp7wDjw.js","./Avatar-vEUF80s_.css","./AvatarDock-0g4Cff6q.js","./Badges.stories-ymyvQDq8.js","./Badges-ZLe3veyu.css","./BadgesDocs-wtfl4BAF.js","./Button.stories-Sm1y9HB8.js","./Button-4VuafJ3B.js","./Button-7cP9VsdZ.css","./ButtonDoc-n8ijX7gD.js","./ClickableCard.stories-K6VTZ063.js","./Card-Njrw5mX8.js","./Card-bgnJpPIA.css","./ClickableCardDock-CzXbSX_W.js","./StaticCard.stories-KZDDvYrp.js","./StaticCardDocs-5X1ydYji.js","./Message.stories-_vad1WDo.js","./Message-Ue5dmNr8.css","./Input.stories-LSxcuErx.js","./Input-F-5OuzeQ.css","./Select.stories-g0GpiCRo.js","./Select-oZsbokCu.css","./Switch.stories-Jcy9w-R6.js","./Switch-xTyjG19L.css","./Tag.stories-bYElYA1j.js","./Tag-afoTt8q8.css","./entry-preview-OIOrqgri.js","./react-18-ba7OOUbL.js","./entry-preview-docs-q7Yq2_Fm.js","./preview-VI2eoWmp.js","./preview-OnO0tzRj.js","./preview-FekBEZxm.js","./preview-u8M_OEO2.js","./preview-70qxeh8F.js","./preview-Som55fjU.js","./preview-YvbIIsSF.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
