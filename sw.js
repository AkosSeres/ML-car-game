if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let o={};const s=e=>n(e,a),f={module:{uri:a},exports:o,require:s};i[a]=Promise.all(r.map((e=>f[e]||s(e)))).then((e=>(c(...e),o)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"6efc77f222c6bf663467047bc82018eb"},{url:"android-chrome-512x512.png",revision:"1eb615a7eacb796013a67a642fbd24a8"},{url:"apple-touch-icon.png",revision:"3ab9c84a7b4fcf6ec8e3250349f31575"},{url:"assets/index.639c9d4e.css",revision:null},{url:"favicon-16x16.png",revision:"9784bd5328c4c17c365874254a09b68f"},{url:"favicon-32x32.png",revision:"6b2fe7ae36e2f83da69b62042e807e7e"},{url:"favicon.ico",revision:"b4ce3bd501f5f59060003b0336bc0479"},{url:"index.html",revision:"2269ea96dd9873d97a52591d5a927b45"},{url:"mstile-144x144.png",revision:"0c6d4a089f558c8ee599c38f28caa677"},{url:"mstile-150x150.png",revision:"7efdd0096336081367e1d7862737e713"},{url:"mstile-310x150.png",revision:"d368af03452e016a187ecf89e344d320"},{url:"mstile-310x310.png",revision:"5133f62b53a78d4667ce92a38fd888f4"},{url:"mstile-70x70.png",revision:"ca6e9b9399b2b45e4c1a270da55c586e"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"safari-pinned-tab.svg",revision:"b7a13630a9975aa9bc1662a0dd608df2"},{url:"favicon.ico",revision:"b4ce3bd501f5f59060003b0336bc0479"},{url:"apple-touch-icon.png",revision:"3ab9c84a7b4fcf6ec8e3250349f31575"},{url:"safari-pinned-tab.svg",revision:"b7a13630a9975aa9bc1662a0dd608df2"},{url:"android-chrome-192x192.png",revision:"6efc77f222c6bf663467047bc82018eb"},{url:"android-chrome-512x512.png",revision:"1eb615a7eacb796013a67a642fbd24a8"},{url:"manifest.webmanifest",revision:"89981fd889f304e2a3662c007fab7130"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
