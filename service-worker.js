if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,i,r)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}})).then(e=>{const s=r(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-f8d4e228"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.f2077539.css",revision:"cd1aa59af4439eb61c8bfaa7151da76f"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/25.04026ae9.js",revision:"014ed9eb6b874a6c8b31e4127051f9b5"},{url:"assets/js/26.15199ef4.js",revision:"beb1671f4eb8d8f2eff028db6d0c69c2"},{url:"assets/js/app.c1cf61e5.js",revision:"dca6f819f48fa6c2e041d768210c1549"},{url:"assets/js/layout-Blog.82dce7ad.js",revision:"4a37940a87e1bf3afe89dc4a06ed8db4"},{url:"assets/js/layout-Layout.2be11ea2.js",revision:"8a417b3ba71d3d56e844f20a7f4a55dd"},{url:"assets/js/layout-NotFound.409c3cda.js",revision:"bed1d2da53d3986ce5c5a8966ef8f6a5"},{url:"assets/js/layout-Slide.fbcce3e0.js",revision:"1f3ec4ce20babc832a87aeb16908ef4d"},{url:"assets/js/page--4c69b3e0.930bc502.js",revision:"860276fb503b81c5a32e1e5a72d913b8"},{url:"assets/js/page--7024a1db.cfa3aa1c.js",revision:"f53c680f9179ab7b9dd060e71ac78c08"},{url:"assets/js/page--dff2a364.9fc3e511.js",revision:"dab556f9b0779011025227f08c7ba873"},{url:"assets/js/page-AdvancedFront-EndFrameworks--e3bd767c.1afd3959.js",revision:"971f8516259fc0c354a94011a649f5b1"},{url:"assets/js/page-ApplicationArchitecture,MVCDesignPattern--7376447c.c465cee2.js",revision:"96a5a4676849a2ed4656e4678594e9ff"},{url:"assets/js/page-CFundamentals--41c6417c.3966f59f.js",revision:"cdb4b6b1174392b785b5873ffc243af8"},{url:"assets/js/page-DeployingApplications--7fcf42fc.8812692e.js",revision:"d12e41a8b3156641f194ba5f9f0e7e53"},{url:"assets/js/page-FindMoreAboutmehere--0f690267.f47293b7.js",revision:"f2ef8b5b0a09764cc7b376ec9cf40aee"},{url:"assets/js/page-FoundationsofWebDevelopment--6256aa42.8477c852.js",revision:"8f73ddae4ee4de6f88d9be4dea3b6d8f"},{url:"assets/js/page-IntrotoJavaScript--d76477fc.85541c25.js",revision:"6d3c455ea839fce03ce17700b2977c32"},{url:"assets/js/page-IntrotoServersideconcernswithJavaScript--2a331142.c3846377.js",revision:"8e5ce9ab06d360793b91839126d7c273"},{url:"assets/js/page-Mytesttitle--48a67f7c.9e40ed52.js",revision:"a7b2747381fed1ca46616f50b1803c0a"},{url:"assets/js/page-UnderStandingAsynchronousCode,andAPI's--0f8810fc.a5b94407.js",revision:"9913adc74f195a45ac185144acfdf99a"},{url:"assets/js/page-UnderstandingPersistentRelationalData--5c2a2b02.0d175506.js",revision:"46b73d0c1f05bc09aa6ea11254db20e3"},{url:"assets/js/page-WorkinginaProfessionalEnvironment--1be10f7c.2657a76e.js",revision:"a528609859295a75c4853c2a60e64a38"},{url:"assets/js/vendors~layout-Blog~layout-Layout.60a5b978.js",revision:"667943e234586fa90b70902cb04fc8d4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.022dd1bd.js",revision:"4e78380c045460fc098c93f949d5619c"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.a6166c07.js",revision:"fbd3678b04a3945e66331259905922af"},{url:"assets/js/vendors~photo-swipe.837736ad.js",revision:"23b5edb7b56d583f73d3c3b28c6212d3"},{url:"404.html",revision:"58f5fa10b5d18d875c6e252dcbc4e7c2"},{url:"article/index.html",revision:"39e8c349a3e21a480f7b60620138b0e8"},{url:"category/index.html",revision:"e629b31a41b3baa3cde48039f6c150b4"},{url:"encrypt/index.html",revision:"b9ad06d0aa3424f9fbf0d107917dfaca"},{url:"index.html",revision:"5605a324c6197ff63d8e60e6bedd378c"},{url:"reflections/index.html",revision:"af330f1c94b6e103e95715c99a94b95f"},{url:"reflections/wk1/Intro/index.html",revision:"0606070f77b62dba50ee4afb566f8b30"},{url:"reflections/wk1/quiz1/index.html",revision:"7ce28d76252a084b4bd2539ab70d7db7"},{url:"reflections/wk10/quiz10/index.html",revision:"972568c7440219b9198ede9576bc4518"},{url:"reflections/wk11/placeholder/index.html",revision:"2b1b4b4b9365c16a3dc0bc24942bf32e"},{url:"reflections/wk12/placeholder/index.html",revision:"7128c3e77d8405368fdcd9b5d07a4a86"},{url:"reflections/wk2/quiz2/index.html",revision:"c51420c5187c482ee02c069c85bec7e8"},{url:"reflections/wk3/quiz3/index.html",revision:"ef11a8ff9373a9c68cdcda503ad5f841"},{url:"reflections/wk4/quiz4/index.html",revision:"a55293120579068e51a81c90c81a1756"},{url:"reflections/wk5/quiz5/index.html",revision:"a152860486f603da180a569c045f91ff"},{url:"reflections/wk6/quiz6/index.html",revision:"15ede84f452fdbb80aa342389e0e5c4f"},{url:"reflections/wk7/quiz7/index.html",revision:"16d81aa94b6a7e5a878bc35ab2ad86e5"},{url:"reflections/wk8/quiz8/index.html",revision:"0efa833b41c5b3366e2066eeb673c0a6"},{url:"reflections/wk9/quiz9/index.html",revision:"8c252dc707fda9073c13d1ea45711a12"},{url:"slide/index.html",revision:"3884d591953ad33359eeb732235f6ada"},{url:"tag/index.html",revision:"96c44397f20fe7a87225b5138946cee9"},{url:"timeline/index.html",revision:"371aefb1c1b20e7247f8451fa6c3cf86"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
