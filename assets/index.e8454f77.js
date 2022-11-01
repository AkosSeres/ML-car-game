var Qh=Object.defineProperty;var tu=(r,t,e)=>t in r?Qh(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var It=(r,t,e)=>(tu(r,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function _e(){}function Hc(r){return r()}function Fa(){return Object.create(null)}function pi(r){r.forEach(Hc)}function qc(r){return typeof r=="function"}function mi(r,t){return r!=r?t==t:r!==t||r&&typeof r=="object"||typeof r=="function"}function eu(r){return Object.keys(r).length===0}function fe(r,t){r.appendChild(t)}function xe(r,t,e){r.insertBefore(t,e||null)}function pe(r){r.parentNode.removeChild(r)}function nu(r,t){for(let e=0;e<r.length;e+=1)r[e]&&r[e].d(t)}function ne(r){return document.createElement(r)}function As(r){return document.createTextNode(r)}function Je(){return As(" ")}function qi(r,t,e,n){return r.addEventListener(t,e,n),()=>r.removeEventListener(t,e,n)}function Lt(r,t,e){e==null?r.removeAttribute(t):r.getAttribute(t)!==e&&r.setAttribute(t,e)}function iu(r){return r===""?null:+r}function su(r){return Array.from(r.childNodes)}function ru(r,t){t=""+t,r.wholeText!==t&&(r.data=t)}function Oa(r,t){r.value=t==null?"":t}function Ba(r,t){return new r(t)}let Cs;function Ms(r){Cs=r}function ou(){if(!Cs)throw new Error("Function called outside component initialization");return Cs}function au(r){ou().$$.on_mount.push(r)}const _s=[],ta=[],Lr=[],Ua=[],lu=Promise.resolve();let ea=!1;function cu(){ea||(ea=!0,lu.then(Xc))}function na(r){Lr.push(r)}const ro=new Set;let Ys=0;function Xc(){const r=Cs;do{for(;Ys<_s.length;){const t=_s[Ys];Ys++,Ms(t),hu(t.$$)}for(Ms(null),_s.length=0,Ys=0;ta.length;)ta.pop()();for(let t=0;t<Lr.length;t+=1){const e=Lr[t];ro.has(e)||(ro.add(e),e())}Lr.length=0}while(_s.length);for(;Ua.length;)Ua.pop()();ea=!1,ro.clear(),Ms(r)}function hu(r){if(r.fragment!==null){r.update(),pi(r.before_update);const t=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,t),r.after_update.forEach(na)}}const Pr=new Set;let Kn;function uu(){Kn={r:0,c:[],p:Kn}}function du(){Kn.r||pi(Kn.c),Kn=Kn.p}function Ls(r,t){r&&r.i&&(Pr.delete(r),r.i(t))}function Fr(r,t,e,n){if(r&&r.o){if(Pr.has(r))return;Pr.add(r),Kn.c.push(()=>{Pr.delete(r),n&&(e&&r.d(1),n())}),r.o(t)}else n&&n()}function Or(r){r&&r.c()}function Ps(r,t,e,n){const{fragment:i,after_update:s}=r.$$;i&&i.m(t,e),n||na(()=>{const o=r.$$.on_mount.map(Hc).filter(qc);r.$$.on_destroy?r.$$.on_destroy.push(...o):pi(o),r.$$.on_mount=[]}),s.forEach(na)}function Rs(r,t){const e=r.$$;e.fragment!==null&&(pi(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function fu(r,t){r.$$.dirty[0]===-1&&(_s.push(r),cu(),r.$$.dirty.fill(0)),r.$$.dirty[t/31|0]|=1<<t%31}function ns(r,t,e,n,i,s,o,a=[-1]){const l=Cs;Ms(r);const c=r.$$={fragment:null,ctx:[],props:s,update:_e,not_equal:i,bound:Fa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:Fa(),dirty:a,skip_bound:!1,root:t.target||l.$$.root};o&&o(c.root);let h=!1;if(c.ctx=e?e(r,t.props||{},(u,d,...p)=>{const g=p.length?p[0]:d;return c.ctx&&i(c.ctx[u],c.ctx[u]=g)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](g),h&&fu(r,u)),d}):[],c.update(),h=!0,pi(c.before_update),c.fragment=n?n(c.ctx):!1,t.target){if(t.hydrate){const u=su(t.target);c.fragment&&c.fragment.l(u),u.forEach(pe)}else c.fragment&&c.fragment.c();t.intro&&Ls(r.$$.fragment),Ps(r,t.target,t.anchor,t.customElement),Xc()}Ms(l)}class is{$destroy(){Rs(this,1),this.$destroy=_e}$on(t,e){if(!qc(e))return _e;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const i=n.indexOf(e);i!==-1&&n.splice(i,1)}}$set(t){this.$$set&&!eu(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xa="146",Mi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pu=0,ka=1,mu=2,jc=1,Yc=2,ys=3,$i=0,He=1,Ve=2,Bn=0,Xi=1,Ga=2,Va=3,Wa=4,gu=5,Gi=100,vu=101,xu=102,Ha=103,qa=104,_u=200,yu=201,wu=202,Mu=203,$c=204,Zc=205,bu=206,Su=207,Eu=208,Tu=209,Au=210,Cu=0,Lu=1,Pu=2,ia=3,Ru=4,Du=5,Iu=6,zu=7,Wr=0,Nu=1,Fu=2,Cn=0,Ou=1,Bu=2,Uu=3,ku=4,Gu=5,Jc=300,Zi=301,Ji=302,sa=303,ra=304,Hr=306,oa=1e3,Ke=1001,aa=1002,Te=1003,Xa=1004,ja=1005,ke=1006,Vu=1007,qr=1008,oi=1009,Wu=1010,Hu=1011,Kc=1012,qu=1013,Qn=1014,ti=1015,Ds=1016,Xu=1017,ju=1018,ji=1020,Yu=1021,$u=1022,Qe=1023,Zu=1024,Ju=1025,si=1026,Ki=1027,Ku=1028,Qu=1029,td=1030,ed=1031,nd=1033,oo=33776,ao=33777,lo=33778,co=33779,Ya=35840,$a=35841,Za=35842,Ja=35843,id=36196,Ka=37492,Qa=37496,tl=37808,el=37809,nl=37810,il=37811,sl=37812,rl=37813,ol=37814,al=37815,ll=37816,cl=37817,hl=37818,ul=37819,dl=37820,fl=37821,pl=36492,ai=3e3,$t=3001,sd=3200,rd=3201,Xr=0,od=1,Tn="srgb",ei="srgb-linear",ho=7680,ad=519,ml=35044,gl="300 es",la=1035;class gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uo=Math.PI/180,vl=180/Math.PI;function ss(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[r&255]+we[r>>8&255]+we[r>>16&255]+we[r>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function Me(r,t,e){return Math.max(t,Math.min(e,r))}function ld(r,t){return(r%t+t)%t}function fo(r,t,e){return(1-e)*r+e*t}function xl(r){return(r&r-1)===0&&r!==0}function ca(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function $s(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Le(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],m=i[0],f=i[3],v=i[6],x=i[1],_=i[4],y=i[7],w=i[2],S=i[5],L=i[8];return s[0]=o*m+a*x+l*w,s[3]=o*f+a*_+l*S,s[6]=o*v+a*y+l*L,s[1]=c*m+h*x+u*w,s[4]=c*f+h*_+u*S,s[7]=c*v+h*y+u*L,s[2]=d*m+p*x+g*w,s[5]=d*f+p*_+g*S,s[8]=d*v+p*y+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,p=c*s-o*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return t[0]=u*m,t[1]=(i*c-h*n)*m,t[2]=(a*n-i*o)*m,t[3]=d*m,t[4]=(h*e-i*l)*m,t[5]=(i*s-a*e)*m,t[6]=p*m,t[7]=(n*l-c*e)*m,t[8]=(o*e-n*s)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],h=i[7];return i[0]=e*s+n*l,i[3]=e*o+n*c,i[6]=e*a+n*h,i[1]=-n*s+e*l,i[4]=-n*o+e*c,i[7]=-n*a+e*h,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function Qc(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Br(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ri(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Rr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const po={[Tn]:{[ei]:ri},[ei]:{[Tn]:Rr}},Xe={legacyMode:!0,get workingColorSpace(){return ei},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.legacyMode||t===e||!t||!e)return r;if(po[t]&&po[t][e]!==void 0){const n=po[t][e];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}},th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oe={r:0,g:0,b:0},je={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function mo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}function Js(r,t){return t.r=r.r,t.g=r.g,t.b=r.b,t}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ei){return this.r=t,this.g=e,this.b=n,Xe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ei){if(t=ld(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=mo(o,s,t+1/3),this.g=mo(o,s,t),this.b=mo(o,s,t-1/3)}return Xe.toWorkingColorSpace(this,i),this}setStyle(t,e=Tn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Xe.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Xe.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Xe.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Xe.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=Tn){const n=th[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=Rr(t.r),this.g=Rr(t.g),this.b=Rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Tn){return Xe.fromWorkingColorSpace(Js(this,oe),t),Me(oe.r*255,0,255)<<16^Me(oe.g*255,0,255)<<8^Me(oe.b*255,0,255)<<0}getHexString(t=Tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ei){Xe.fromWorkingColorSpace(Js(this,oe),e);const n=oe.r,i=oe.g,s=oe.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ei){return Xe.fromWorkingColorSpace(Js(this,oe),e),t.r=oe.r,t.g=oe.g,t.b=oe.b,t}getStyle(t=Tn){return Xe.fromWorkingColorSpace(Js(this,oe),t),t!==Tn?`color(${t} ${oe.r} ${oe.g} ${oe.b})`:`rgb(${oe.r*255|0},${oe.g*255|0},${oe.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(je),je.h+=t,je.s+=e,je.l+=n,this.setHSL(je.h,je.s,je.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(je),t.getHSL(Zs);const n=fo(je.h,Zs.h,e),i=fo(je.s,Zs.s,e),s=fo(je.l,Zs.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}kt.NAMES=th;let Si;class eh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Si===void 0&&(Si=Br("canvas")),Si.width=t.width,Si.height=t.height;const n=Si.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Br("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ri(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class nh{constructor(t=null){this.isSource=!0,this.uuid=ss(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(go(i[o].image)):s.push(go(i[o]))}else s=go(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function go(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?eh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cd=0;class en extends gi{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,n=Ke,i=Ke,s=ke,o=qr,a=Qe,l=oi,c=1,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=ss(),this.name="",this.source=new nh(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oa:t.x=t.x-Math.floor(t.x);break;case Ke:t.x=t.x<0?0:1;break;case aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oa:t.y=t.y-Math.floor(t.y);break;case Ke:t.y=t.y<0?0:1;break;case aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Jc;class me{constructor(t=0,e=0,n=0,i=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],m=l[2],f=l[6],v=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,y=(p+1)/2,w=(v+1)/2,S=(h+d)/4,L=(u+m)/4,b=(g+f)/4;return _>y&&_>w?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=S/n,s=L/n):y>w?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=S/i,s=b/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=L/s,i=b/s),this.set(n,i,s,e),this}let x=Math.sqrt((f-g)*(f-g)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(f-g)/x,this.y=(u-m)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+v-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class li extends gi{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new en(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ke,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new nh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ih extends en{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Te,this.minFilter=Te,this.wrapR=Ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hd extends en{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Te,this.minFilter=Te,this.wrapR=Ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ci{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],p=s[o+1],g=s[o+2],m=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=m;return}if(u!==m||l!==d||c!==p||h!==g){let f=1-a;const v=l*d+c*p+h*g+u*m,x=v>=0?1:-1,_=1-v*v;if(_>Number.EPSILON){const w=Math.sqrt(_),S=Math.atan2(w,v*x);f=Math.sin(f*S)/w,a=Math.sin(a*S)/w}const y=a*x;if(l=l*f+d*y,c=c*f+p*y,h=h*f+g*y,u=u*f+m*y,f===1-a){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,n=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_l.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_l.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*i-a*n,h=l*n+a*e-s*i,u=l*i+s*n-o*e,d=-s*e-o*n-a*i;return this.x=c*l+d*-s+h*-a-u*-o,this.y=h*l+d*-o+u*-s-c*-a,this.z=u*l+d*-a+c*-o-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vo.copy(this).projectOnVector(t),this.sub(vo)}reflect(t){return this.sub(vo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vo=new z,_l=new ci;class Gs{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.length;l<c;l+=3){const h=t[l],u=t[l+1],d=t[l+2];h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.count;l<c;l++){const h=t.getX(l),u=t.getY(l),d=t.getZ(l);h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Hn.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Hn)}else n.boundingBox===null&&n.computeBoundingBox(),xo.copy(n.boundingBox),xo.applyMatrix4(t.matrixWorld),this.union(xo);const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hs),Ks.subVectors(this.max,hs),Ei.subVectors(t.a,hs),Ti.subVectors(t.b,hs),Ai.subVectors(t.c,hs),Pn.subVectors(Ti,Ei),Rn.subVectors(Ai,Ti),qn.subVectors(Ei,Ai);let e=[0,-Pn.z,Pn.y,0,-Rn.z,Rn.y,0,-qn.z,qn.y,Pn.z,0,-Pn.x,Rn.z,0,-Rn.x,qn.z,0,-qn.x,-Pn.y,Pn.x,0,-Rn.y,Rn.x,0,-qn.y,qn.x,0];return!_o(e,Ei,Ti,Ai,Ks)||(e=[1,0,0,0,1,0,0,0,1],!_o(e,Ei,Ti,Ai,Ks))?!1:(Qs.crossVectors(Pn,Rn),e=[Qs.x,Qs.y,Qs.z],_o(e,Ei,Ti,Ai,Ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Hn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const mn=[new z,new z,new z,new z,new z,new z,new z,new z],Hn=new z,xo=new Gs,Ei=new z,Ti=new z,Ai=new z,Pn=new z,Rn=new z,qn=new z,hs=new z,Ks=new z,Qs=new z,Xn=new z;function _o(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Xn.fromArray(r,s);const a=i.x*Math.abs(Xn.x)+i.y*Math.abs(Xn.y)+i.z*Math.abs(Xn.z),l=t.dot(Xn),c=e.dot(Xn),h=n.dot(Xn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ud=new Gs,us=new z,yo=new z;class jr{constructor(t=new z,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ud.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;us.subVectors(t,this.center);const e=us.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(us,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(us.copy(t.center).add(yo)),this.expandByPoint(us.copy(t.center).sub(yo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new z,wo=new z,tr=new z,Dn=new z,Mo=new z,er=new z,bo=new z;class _a{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gn.copy(this.direction).multiplyScalar(e).add(this.origin),gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){wo.copy(t).add(e).multiplyScalar(.5),tr.copy(e).sub(t).normalize(),Dn.copy(this.origin).sub(wo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(tr),a=Dn.dot(this.direction),l=-Dn.dot(tr),c=Dn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const m=1/h;u*=m,d*=m,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(tr).multiplyScalar(d).add(wo),p}intersectSphere(t,e){gn.subVectors(t.center,this.origin);const n=gn.dot(this.direction),i=gn.dot(gn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,gn)!==null}intersectTriangle(t,e,n,i,s){Mo.subVectors(e,t),er.subVectors(n,t),bo.crossVectors(Mo,er);let o=this.direction.dot(bo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,t);const l=a*this.direction.dot(er.crossVectors(Dn,er));if(l<0)return null;const c=a*this.direction.dot(Mo.cross(Dn));if(c<0||l+c>o)return null;const h=-a*Dn.dot(bo);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,o,a,l,c,h,u,d,p,g,m,f){const v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=i,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=h,v[10]=u,v[14]=d,v[3]=p,v[7]=g,v[11]=m,v[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ci.setFromMatrixColumn(t,0).length(),s=1/Ci.setFromMatrixColumn(t,1).length(),o=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,m=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-m*c,e[9]=-a*l,e[2]=m-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,m=c*u;e[0]=d+m*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=m+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,m=c*u;e[0]=d-m*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=m-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,m=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+m,e[1]=l*u,e[5]=m*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,m=a*c;e[0]=l*h,e[4]=m-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-m*u}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,m=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+m,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=m*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dd,t,fd)}lookAt(t,e,n){const i=this.elements;return Pe.subVectors(t,e),Pe.lengthSq()===0&&(Pe.z=1),Pe.normalize(),In.crossVectors(n,Pe),In.lengthSq()===0&&(Math.abs(n.z)===1?Pe.x+=1e-4:Pe.z+=1e-4,Pe.normalize(),In.crossVectors(n,Pe)),In.normalize(),nr.crossVectors(Pe,In),i[0]=In.x,i[4]=nr.x,i[8]=Pe.x,i[1]=In.y,i[5]=nr.y,i[9]=Pe.y,i[2]=In.z,i[6]=nr.z,i[10]=Pe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],m=n[6],f=n[10],v=n[14],x=n[3],_=n[7],y=n[11],w=n[15],S=i[0],L=i[4],b=i[8],A=i[12],I=i[1],G=i[5],X=i[9],P=i[13],R=i[2],N=i[6],F=i[10],Z=i[14],V=i[3],O=i[7],H=i[11],Q=i[15];return s[0]=o*S+a*I+l*R+c*V,s[4]=o*L+a*G+l*N+c*O,s[8]=o*b+a*X+l*F+c*H,s[12]=o*A+a*P+l*Z+c*Q,s[1]=h*S+u*I+d*R+p*V,s[5]=h*L+u*G+d*N+p*O,s[9]=h*b+u*X+d*F+p*H,s[13]=h*A+u*P+d*Z+p*Q,s[2]=g*S+m*I+f*R+v*V,s[6]=g*L+m*G+f*N+v*O,s[10]=g*b+m*X+f*F+v*H,s[14]=g*A+m*P+f*Z+v*Q,s[3]=x*S+_*I+y*R+w*V,s[7]=x*L+_*G+y*N+w*O,s[11]=x*b+_*X+y*F+w*H,s[15]=x*A+_*P+y*Z+w*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],m=t[7],f=t[11],v=t[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*p-n*l*p)+m*(+e*l*p-e*c*d+s*o*d-i*o*p+i*c*h-s*l*h)+f*(+e*c*u-e*a*p-s*o*u+n*o*p+s*a*h-n*c*h)+v*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],m=t[13],f=t[14],v=t[15],x=u*f*c-m*d*c+m*l*p-a*f*p-u*l*v+a*d*v,_=g*d*c-h*f*c-g*l*p+o*f*p+h*l*v-o*d*v,y=h*m*c-g*u*c+g*a*p-o*m*p-h*a*v+o*u*v,w=g*u*l-h*m*l-g*a*d+o*m*d+h*a*f-o*u*f,S=e*x+n*_+i*y+s*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/S;return t[0]=x*L,t[1]=(m*d*s-u*f*s-m*i*p+n*f*p+u*i*v-n*d*v)*L,t[2]=(a*f*s-m*l*s+m*i*c-n*f*c-a*i*v+n*l*v)*L,t[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*p-n*l*p)*L,t[4]=_*L,t[5]=(h*f*s-g*d*s+g*i*p-e*f*p-h*i*v+e*d*v)*L,t[6]=(g*l*s-o*f*s-g*i*c+e*f*c+o*i*v-e*l*v)*L,t[7]=(o*d*s-h*l*s+h*i*c-e*d*c-o*i*p+e*l*p)*L,t[8]=y*L,t[9]=(g*u*s-h*m*s-g*n*p+e*m*p+h*n*v-e*u*v)*L,t[10]=(o*m*s-g*a*s+g*n*c-e*m*c-o*n*v+e*a*v)*L,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*p-e*a*p)*L,t[12]=w*L,t[13]=(h*m*i-g*u*i+g*n*d-e*m*d-h*n*f+e*u*f)*L,t[14]=(g*a*i-o*m*i-g*n*l+e*m*l+o*n*f-e*a*f)*L,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*L,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,p=s*h,g=s*u,m=o*h,f=o*u,v=a*u,x=l*c,_=l*h,y=l*u,w=n.x,S=n.y,L=n.z;return i[0]=(1-(m+v))*w,i[1]=(p+y)*w,i[2]=(g-_)*w,i[3]=0,i[4]=(p-y)*S,i[5]=(1-(d+v))*S,i[6]=(f+x)*S,i[7]=0,i[8]=(g+_)*L,i[9]=(f-x)*L,i[10]=(1-(d+m))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Ci.set(i[0],i[1],i[2]).length();const o=Ci.set(i[4],i[5],i[6]).length(),a=Ci.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Ye.copy(this);const c=1/s,h=1/o,u=1/a;return Ye.elements[0]*=c,Ye.elements[1]*=c,Ye.elements[2]*=c,Ye.elements[4]*=h,Ye.elements[5]*=h,Ye.elements[6]*=h,Ye.elements[8]*=u,Ye.elements[9]*=u,Ye.elements[10]*=u,e.setFromRotationMatrix(Ye),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o){const a=this.elements,l=2*s/(e-t),c=2*s/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),d=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,s,o){const a=this.elements,l=1/(e-t),c=1/(n-i),h=1/(o-s),u=(e+t)*l,d=(n+i)*c,p=(o+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ci=new z,Ye=new Jt,dd=new z(0,0,0),fd=new z(1,1,1),In=new z,nr=new z,Pe=new z,yl=new Jt,wl=new ci;class Vs{constructor(t=0,e=0,n=0,i=Vs.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wl.setFromEuler(this),this.setFromQuaternion(wl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Vs.DefaultOrder="XYZ";Vs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ya{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pd=0;const Ml=new z,Li=new ci,vn=new Jt,ir=new z,ds=new z,md=new z,gd=new ci,bl=new z(1,0,0),Sl=new z(0,1,0),El=new z(0,0,1),vd={type:"added"},Tl={type:"removed"};class ge extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DefaultUp.clone();const t=new z,e=new Vs,n=new ci,i=new z(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Jt},normalMatrix:{value:new We}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=ge.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ge.DefaultMatrixWorldAutoUpdate,this.layers=new ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(bl,t)}rotateY(t){return this.rotateOnAxis(Sl,t)}rotateZ(t){return this.rotateOnAxis(El,t)}translateOnAxis(t,e){return Ml.copy(t).applyQuaternion(this.quaternion),this.position.add(Ml.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bl,t)}translateY(t){return this.translateOnAxis(Sl,t)}translateZ(t){return this.translateOnAxis(El,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ir.copy(t):ir.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(ds,ir,this.up):vn.lookAt(ir,ds,this.up),this.quaternion.setFromRotationMatrix(vn),i&&(vn.extractRotation(i.matrixWorld),Li.setFromRotationMatrix(vn),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(vd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Tl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(vn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,t,md),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,gd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ge.DefaultUp=new z(0,1,0);ge.DefaultMatrixAutoUpdate=!0;ge.DefaultMatrixWorldAutoUpdate=!0;const $e=new z,xn=new z,So=new z,_n=new z,Pi=new z,Ri=new z,Al=new z,Eo=new z,To=new z,Ao=new z;class An{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),$e.subVectors(t,e),i.cross($e);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){$e.subVectors(i,e),xn.subVectors(n,e),So.subVectors(t,e);const o=$e.dot($e),a=$e.dot(xn),l=$e.dot(So),c=xn.dot(xn),h=xn.dot(So),u=o*c-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,_n),_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getUV(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,_n),l.set(0,0),l.addScaledVector(s,_n.x),l.addScaledVector(o,_n.y),l.addScaledVector(a,_n.z),l}static isFrontFacing(t,e,n,i){return $e.subVectors(n,e),xn.subVectors(t,e),$e.cross(xn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),$e.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return An.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return An.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Pi.subVectors(i,n),Ri.subVectors(s,n),Eo.subVectors(t,n);const l=Pi.dot(Eo),c=Ri.dot(Eo);if(l<=0&&c<=0)return e.copy(n);To.subVectors(t,i);const h=Pi.dot(To),u=Ri.dot(To);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Pi,o);Ao.subVectors(t,s);const p=Pi.dot(Ao),g=Ri.dot(Ao);if(g>=0&&p<=g)return e.copy(s);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ri,a);const f=h*g-p*u;if(f<=0&&u-h>=0&&p-g>=0)return Al.subVectors(s,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(Al,a);const v=1/(f+m+d);return o=m*v,a=d*v,e.copy(n).addScaledVector(Pi,o).addScaledVector(Ri,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let xd=0;class Un extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=Xi,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=$c,this.blendDst=Zc,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ho,this.stencilZFail=ho,this.stencilZPass=ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==$i&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class vi extends Un{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ee=new z,sr=new rt;class dn{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=ml,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sr.fromBufferAttribute(this,e),sr.applyMatrix3(t),this.setXY(e,sr.x,sr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyMatrix3(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyMatrix4(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyNormalMatrix(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.transformDirection(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$s(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$s(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$s(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ml&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class sh extends dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class rh extends dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Kt extends dn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let _d=0;const Be=new Jt,Co=new ge,Di=new z,Re=new Gs,fs=new Gs,de=new z;class De extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qc(t)?rh:sh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return Co.lookAt(t),Co.updateMatrix(),this.applyMatrix4(Co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Kt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Re.setFromBufferAttribute(s),this.morphTargetsRelative?(de.addVectors(this.boundingBox.min,Re.min),this.boundingBox.expandByPoint(de),de.addVectors(this.boundingBox.max,Re.max),this.boundingBox.expandByPoint(de)):(this.boundingBox.expandByPoint(Re.min),this.boundingBox.expandByPoint(Re.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(Re.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];fs.setFromBufferAttribute(a),this.morphTargetsRelative?(de.addVectors(Re.min,fs.min),Re.expandByPoint(de),de.addVectors(Re.max,fs.max),Re.expandByPoint(de)):(Re.expandByPoint(fs.min),Re.expandByPoint(fs.max))}Re.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)de.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(de));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)de.fromBufferAttribute(a,c),l&&(Di.fromBufferAttribute(t,c),de.add(Di)),i=Math.max(i,n.distanceToSquared(de))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let I=0;I<a;I++)c[I]=new z,h[I]=new z;const u=new z,d=new z,p=new z,g=new rt,m=new rt,f=new rt,v=new z,x=new z;function _(I,G,X){u.fromArray(i,I*3),d.fromArray(i,G*3),p.fromArray(i,X*3),g.fromArray(o,I*2),m.fromArray(o,G*2),f.fromArray(o,X*2),d.sub(u),p.sub(u),m.sub(g),f.sub(g);const P=1/(m.x*f.y-f.x*m.y);!isFinite(P)||(v.copy(d).multiplyScalar(f.y).addScaledVector(p,-m.y).multiplyScalar(P),x.copy(p).multiplyScalar(m.x).addScaledVector(d,-f.x).multiplyScalar(P),c[I].add(v),c[G].add(v),c[X].add(v),h[I].add(x),h[G].add(x),h[X].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let I=0,G=y.length;I<G;++I){const X=y[I],P=X.start,R=X.count;for(let N=P,F=P+R;N<F;N+=3)_(n[N+0],n[N+1],n[N+2])}const w=new z,S=new z,L=new z,b=new z;function A(I){L.fromArray(s,I*3),b.copy(L);const G=c[I];w.copy(G),w.sub(L.multiplyScalar(L.dot(G))).normalize(),S.crossVectors(b,G);const P=S.dot(h[I])<0?-1:1;l[I*4]=w.x,l[I*4+1]=w.y,l[I*4+2]=w.z,l[I*4+3]=P}for(let I=0,G=y.length;I<G;++I){const X=y[I],P=X.start,R=X.count;for(let N=P,F=P+R;N<F;N+=3)A(n[N+0]),A(n[N+1]),A(n[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new z,s=new z,o=new z,a=new z,l=new z,c=new z,h=new z,u=new z;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),m=t.getX(d+1),f=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,f),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,f),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)de.fromBufferAttribute(t,e),de.normalize(),t.setXYZ(e,de.x,de.y,de.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let m=0,f=l.length;m<f;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*h;for(let v=0;v<h;v++)d[g++]=c[p++]}return new dn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cl=new Jt,Ii=new _a,Lo=new jr,zn=new z,Nn=new z,Fn=new z,Po=new z,Ro=new z,Do=new z,rr=new z,or=new z,ar=new z,lr=new rt,cr=new rt,hr=new rt,Io=new z,ur=new z;class Xt extends ge{constructor(t=new De,e=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(s),t.ray.intersectsSphere(Lo)===!1)||(Cl.copy(s).invert(),Ii.copy(t.ray).applyMatrix4(Cl),n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,p=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,f=p.length;m<f;m++){const v=p[m],x=i[v.materialIndex],_=Math.max(v.start,g.start),y=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let w=_,S=y;w<S;w+=3){const L=a.getX(w),b=a.getX(w+1),A=a.getX(w+2);o=dr(this,x,t,Ii,l,c,h,u,d,L,b,A),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=v.materialIndex,e.push(o))}}else{const m=Math.max(0,g.start),f=Math.min(a.count,g.start+g.count);for(let v=m,x=f;v<x;v+=3){const _=a.getX(v),y=a.getX(v+1),w=a.getX(v+2);o=dr(this,i,t,Ii,l,c,h,u,d,_,y,w),o&&(o.faceIndex=Math.floor(v/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,f=p.length;m<f;m++){const v=p[m],x=i[v.materialIndex],_=Math.max(v.start,g.start),y=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let w=_,S=y;w<S;w+=3){const L=w,b=w+1,A=w+2;o=dr(this,x,t,Ii,l,c,h,u,d,L,b,A),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=v.materialIndex,e.push(o))}}else{const m=Math.max(0,g.start),f=Math.min(l.count,g.start+g.count);for(let v=m,x=f;v<x;v+=3){const _=v,y=v+1,w=v+2;o=dr(this,i,t,Ii,l,c,h,u,d,_,y,w),o&&(o.faceIndex=Math.floor(v/3),e.push(o))}}}}function yd(r,t,e,n,i,s,o,a){let l;if(t.side===He?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side!==Ve,a),l===null)return null;ur.copy(a),ur.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(ur);return c<e.near||c>e.far?null:{distance:c,point:ur.clone(),object:r}}function dr(r,t,e,n,i,s,o,a,l,c,h,u){zn.fromBufferAttribute(i,c),Nn.fromBufferAttribute(i,h),Fn.fromBufferAttribute(i,u);const d=r.morphTargetInfluences;if(s&&d){rr.set(0,0,0),or.set(0,0,0),ar.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const f=d[g],v=s[g];f!==0&&(Po.fromBufferAttribute(v,c),Ro.fromBufferAttribute(v,h),Do.fromBufferAttribute(v,u),o?(rr.addScaledVector(Po,f),or.addScaledVector(Ro,f),ar.addScaledVector(Do,f)):(rr.addScaledVector(Po.sub(zn),f),or.addScaledVector(Ro.sub(Nn),f),ar.addScaledVector(Do.sub(Fn),f)))}zn.add(rr),Nn.add(or),Fn.add(ar)}r.isSkinnedMesh&&(r.boneTransform(c,zn),r.boneTransform(h,Nn),r.boneTransform(u,Fn));const p=yd(r,t,e,n,zn,Nn,Fn,Io);if(p){a&&(lr.fromBufferAttribute(a,c),cr.fromBufferAttribute(a,h),hr.fromBufferAttribute(a,u),p.uv=An.getUV(Io,zn,Nn,Fn,lr,cr,hr,new rt)),l&&(lr.fromBufferAttribute(l,c),cr.fromBufferAttribute(l,h),hr.fromBufferAttribute(l,u),p.uv2=An.getUV(Io,zn,Nn,Fn,lr,cr,hr,new rt));const g={a:c,b:h,c:u,normal:new z,materialIndex:0};An.getNormal(zn,Nn,Fn,g.normal),p.face=g}return p}class kn extends De{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function g(m,f,v,x,_,y,w,S,L,b,A){const I=y/L,G=w/b,X=y/2,P=w/2,R=S/2,N=L+1,F=b+1;let Z=0,V=0;const O=new z;for(let H=0;H<F;H++){const Q=H*G-P;for(let q=0;q<N;q++){const tt=q*I-X;O[m]=tt*x,O[f]=Q*_,O[v]=R,c.push(O.x,O.y,O.z),O[m]=0,O[f]=0,O[v]=S>0?1:-1,h.push(O.x,O.y,O.z),u.push(q/L),u.push(1-H/b),Z+=1}}for(let H=0;H<b;H++)for(let Q=0;Q<L;Q++){const q=d+Q+N*H,tt=d+Q+N*(H+1),ht=d+(Q+1)+N*(H+1),yt=d+(Q+1)+N*H;l.push(q,tt,yt),l.push(tt,ht,yt),V+=6}a.addGroup(p,V,A),p+=V,d+=Z}}static fromJSON(t){return new kn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qi(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Se(r){const t={};for(let e=0;e<r.length;e++){const n=Qi(r[e]);for(const i in n)t[i]=n[i]}return t}function wd(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}const Md={clone:Qi,merge:Se};var bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends Un{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bd,this.fragmentShader=Sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=wd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class oh extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ge extends oh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vl*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(uo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zi=90,Ni=1;class Ed extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ge(zi,Ni,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new z(1,0,0)),this.add(i);const s=new Ge(zi,Ni,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new z(-1,0,0)),this.add(s);const o=new Ge(zi,Ni,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new z(0,1,0)),this.add(o);const a=new Ge(zi,Ni,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new z(0,-1,0)),this.add(a);const l=new Ge(zi,Ni,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new z(0,0,1)),this.add(l);const c=new Ge(zi,Ni,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new z(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,h=t.getRenderTarget(),u=t.toneMapping,d=t.xr.enabled;t.toneMapping=Cn,t.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=p,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class ah extends en{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Zi,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Td extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ah(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new kn(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:Bn});s.uniforms.tEquirect.value=e;const o=new Xt(i,s),a=e.minFilter;return e.minFilter===qr&&(e.minFilter=ke),new Ed(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const zo=new z,Ad=new z,Cd=new We;class Yn{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=zo.subVectors(n,e).cross(Ad.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(zo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(n).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Cd.getNormalMatrix(t),i=this.coplanarPoint(zo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new jr,fr=new z;class wa{constructor(t=new Yn,e=new Yn,n=new Yn,i=new Yn,s=new Yn,o=new Yn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],p=n[9],g=n[10],m=n[11],f=n[12],v=n[13],x=n[14],_=n[15];return e[0].setComponents(a-i,u-l,m-d,_-f).normalize(),e[1].setComponents(a+i,u+l,m+d,_+f).normalize(),e[2].setComponents(a+s,u+c,m+p,_+v).normalize(),e[3].setComponents(a-s,u-c,m-p,_-v).normalize(),e[4].setComponents(a-o,u-h,m-g,_-x).normalize(),e[5].setComponents(a+o,u+h,m+g,_+x).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSprite(t){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(fr.x=i.normal.x>0?t.max.x:t.min.x,fr.y=i.normal.y>0?t.max.y:t.min.y,fr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lh(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Ld(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,p=r.createBuffer();r.bindBuffer(h,p),r.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,p=h.updateRange;r.bindBuffer(u,c),p.count===-1?r.bufferSubData(u,0,d):(e?r.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):r.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class Yr extends De{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],m=[],f=[];for(let v=0;v<h;v++){const x=v*d-o;for(let _=0;_<c;_++){const y=_*u-s;g.push(y,-x,0),m.push(0,0,1),f.push(_/a),f.push(1-v/l)}}for(let v=0;v<l;v++)for(let x=0;x<a;x++){const _=x+c*v,y=x+c*(v+1),w=x+1+c*(v+1),S=x+1+c*v;p.push(_,y,S),p.push(y,w,S)}this.setIndex(p),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(m,3)),this.setAttribute("uv",new Kt(f,2))}static fromJSON(t){return new Yr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Rd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fd="vec3 transformed = vec3( position );",Od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bd=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Ud=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$d=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Zd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",sf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,af=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,_f=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yf=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,bf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Ef=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Tf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Af=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Pf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Df=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,If=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ff=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Of=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Vf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Wf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Hf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,qf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$f=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Zf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Kf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Qf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ep=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ap=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hp=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,up=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_p=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,wp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Mp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,bp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Sp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ep=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Tp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ap=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Cp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pp=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Np=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Op=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Yp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,am=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,At={alphamap_fragment:Pd,alphamap_pars_fragment:Rd,alphatest_fragment:Dd,alphatest_pars_fragment:Id,aomap_fragment:zd,aomap_pars_fragment:Nd,begin_vertex:Fd,beginnormal_vertex:Od,bsdfs:Bd,iridescence_fragment:Ud,bumpmap_pars_fragment:kd,clipping_planes_fragment:Gd,clipping_planes_pars_fragment:Vd,clipping_planes_pars_vertex:Wd,clipping_planes_vertex:Hd,color_fragment:qd,color_pars_fragment:Xd,color_pars_vertex:jd,color_vertex:Yd,common:$d,cube_uv_reflection_fragment:Zd,defaultnormal_vertex:Jd,displacementmap_pars_vertex:Kd,displacementmap_vertex:Qd,emissivemap_fragment:tf,emissivemap_pars_fragment:ef,encodings_fragment:nf,encodings_pars_fragment:sf,envmap_fragment:rf,envmap_common_pars_fragment:of,envmap_pars_fragment:af,envmap_pars_vertex:lf,envmap_physical_pars_fragment:yf,envmap_vertex:cf,fog_vertex:hf,fog_pars_vertex:uf,fog_fragment:df,fog_pars_fragment:ff,gradientmap_pars_fragment:pf,lightmap_fragment:mf,lightmap_pars_fragment:gf,lights_lambert_fragment:vf,lights_lambert_pars_fragment:xf,lights_pars_begin:_f,lights_toon_fragment:wf,lights_toon_pars_fragment:Mf,lights_phong_fragment:bf,lights_phong_pars_fragment:Sf,lights_physical_fragment:Ef,lights_physical_pars_fragment:Tf,lights_fragment_begin:Af,lights_fragment_maps:Cf,lights_fragment_end:Lf,logdepthbuf_fragment:Pf,logdepthbuf_pars_fragment:Rf,logdepthbuf_pars_vertex:Df,logdepthbuf_vertex:If,map_fragment:zf,map_pars_fragment:Nf,map_particle_fragment:Ff,map_particle_pars_fragment:Of,metalnessmap_fragment:Bf,metalnessmap_pars_fragment:Uf,morphcolor_vertex:kf,morphnormal_vertex:Gf,morphtarget_pars_vertex:Vf,morphtarget_vertex:Wf,normal_fragment_begin:Hf,normal_fragment_maps:qf,normal_pars_fragment:Xf,normal_pars_vertex:jf,normal_vertex:Yf,normalmap_pars_fragment:$f,clearcoat_normal_fragment_begin:Zf,clearcoat_normal_fragment_maps:Jf,clearcoat_pars_fragment:Kf,iridescence_pars_fragment:Qf,output_fragment:tp,packing:ep,premultiplied_alpha_fragment:np,project_vertex:ip,dithering_fragment:sp,dithering_pars_fragment:rp,roughnessmap_fragment:op,roughnessmap_pars_fragment:ap,shadowmap_pars_fragment:lp,shadowmap_pars_vertex:cp,shadowmap_vertex:hp,shadowmask_pars_fragment:up,skinbase_vertex:dp,skinning_pars_vertex:fp,skinning_vertex:pp,skinnormal_vertex:mp,specularmap_fragment:gp,specularmap_pars_fragment:vp,tonemapping_fragment:xp,tonemapping_pars_fragment:_p,transmission_fragment:yp,transmission_pars_fragment:wp,uv_pars_fragment:Mp,uv_pars_vertex:bp,uv_vertex:Sp,uv2_pars_fragment:Ep,uv2_pars_vertex:Tp,uv2_vertex:Ap,worldpos_vertex:Cp,background_vert:Lp,background_frag:Pp,backgroundCube_vert:Rp,backgroundCube_frag:Dp,cube_vert:Ip,cube_frag:zp,depth_vert:Np,depth_frag:Fp,distanceRGBA_vert:Op,distanceRGBA_frag:Bp,equirect_vert:Up,equirect_frag:kp,linedashed_vert:Gp,linedashed_frag:Vp,meshbasic_vert:Wp,meshbasic_frag:Hp,meshlambert_vert:qp,meshlambert_frag:Xp,meshmatcap_vert:jp,meshmatcap_frag:Yp,meshnormal_vert:$p,meshnormal_frag:Zp,meshphong_vert:Jp,meshphong_frag:Kp,meshphysical_vert:Qp,meshphysical_frag:tm,meshtoon_vert:em,meshtoon_frag:nm,points_vert:im,points_frag:sm,shadow_vert:rm,shadow_frag:om,sprite_vert:am,sprite_frag:lm},st={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new We},uv2Transform:{value:new We},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new We}}},un={basic:{uniforms:Se([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:Se([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new kt(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:Se([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:Se([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:Se([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new kt(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:Se([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:Se([st.points,st.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:Se([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:Se([st.common,st.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:Se([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:Se([st.sprite,st.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distanceRGBA:{uniforms:Se([st.common,st.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distanceRGBA_vert,fragmentShader:At.distanceRGBA_frag},shadow:{uniforms:Se([st.lights,st.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};un.physical={uniforms:Se([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new rt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};function cm(r,t,e,n,i,s,o){const a=new kt(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function g(f,v){let x=!1,_=v.isScene===!0?v.background:null;_&&_.isTexture&&(_=(v.backgroundBlurriness>0?e:t).get(_));const y=r.xr,w=y.getSession&&y.getSession();w&&w.environmentBlendMode==="additive"&&(_=null),_===null?m(a,l):_&&_.isColor&&(m(_,1),x=!0),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Hr)?(h===void 0&&(h=new Xt(new kn(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Qi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,L,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,(u!==_||d!==_.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=r.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Xt(new Yr(2,2),new hi({name:"BackgroundMaterial",uniforms:Qi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,p=r.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function m(f,v){n.buffers.color.setClear(f.r,f.g,f.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(f,v=1){a.set(f),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,m(a,l)},render:g}}function hm(r,t,e,n){const i=r.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=f(null);let c=l,h=!1;function u(R,N,F,Z,V){let O=!1;if(o){const H=m(Z,F,N);c!==H&&(c=H,p(c.object)),O=v(R,Z,F,V),O&&x(R,Z,F,V)}else{const H=N.wireframe===!0;(c.geometry!==Z.id||c.program!==F.id||c.wireframe!==H)&&(c.geometry=Z.id,c.program=F.id,c.wireframe=H,O=!0)}V!==null&&e.update(V,34963),(O||h)&&(h=!1,b(R,N,F,Z),V!==null&&r.bindBuffer(34963,e.get(V).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function m(R,N,F){const Z=F.wireframe===!0;let V=a[R.id];V===void 0&&(V={},a[R.id]=V);let O=V[N.id];O===void 0&&(O={},V[N.id]=O);let H=O[Z];return H===void 0&&(H=f(d()),O[Z]=H),H}function f(R){const N=[],F=[],Z=[];for(let V=0;V<i;V++)N[V]=0,F[V]=0,Z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:Z,object:R,attributes:{},index:null}}function v(R,N,F,Z){const V=c.attributes,O=N.attributes;let H=0;const Q=F.getAttributes();for(const q in Q)if(Q[q].location>=0){const ht=V[q];let yt=O[q];if(yt===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(yt=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(yt=R.instanceColor)),ht===void 0||ht.attribute!==yt||yt&&ht.data!==yt.data)return!0;H++}return c.attributesNum!==H||c.index!==Z}function x(R,N,F,Z){const V={},O=N.attributes;let H=0;const Q=F.getAttributes();for(const q in Q)if(Q[q].location>=0){let ht=O[q];ht===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(ht=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(ht=R.instanceColor));const yt={};yt.attribute=ht,ht&&ht.data&&(yt.data=ht.data),V[q]=yt,H++}c.attributes=V,c.attributesNum=H,c.index=Z}function _(){const R=c.newAttributes;for(let N=0,F=R.length;N<F;N++)R[N]=0}function y(R){w(R,0)}function w(R,N){const F=c.newAttributes,Z=c.enabledAttributes,V=c.attributeDivisors;F[R]=1,Z[R]===0&&(r.enableVertexAttribArray(R),Z[R]=1),V[R]!==N&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,N),V[R]=N)}function S(){const R=c.newAttributes,N=c.enabledAttributes;for(let F=0,Z=N.length;F<Z;F++)N[F]!==R[F]&&(r.disableVertexAttribArray(F),N[F]=0)}function L(R,N,F,Z,V,O){n.isWebGL2===!0&&(F===5124||F===5125)?r.vertexAttribIPointer(R,N,F,V,O):r.vertexAttribPointer(R,N,F,Z,V,O)}function b(R,N,F,Z){if(n.isWebGL2===!1&&(R.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const V=Z.attributes,O=F.getAttributes(),H=N.defaultAttributeValues;for(const Q in O){const q=O[Q];if(q.location>=0){let tt=V[Q];if(tt===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(tt=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(tt=R.instanceColor)),tt!==void 0){const ht=tt.normalized,yt=tt.itemSize,J=e.get(tt);if(J===void 0)continue;const zt=J.buffer,Mt=J.type,bt=J.bytesPerElement;if(tt.isInterleavedBufferAttribute){const pt=tt.data,Gt=pt.stride,Et=tt.offset;if(pt.isInstancedInterleavedBuffer){for(let _t=0;_t<q.locationSize;_t++)w(q.location+_t,pt.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let _t=0;_t<q.locationSize;_t++)y(q.location+_t);r.bindBuffer(34962,zt);for(let _t=0;_t<q.locationSize;_t++)L(q.location+_t,yt/q.locationSize,Mt,ht,Gt*bt,(Et+yt/q.locationSize*_t)*bt)}else{if(tt.isInstancedBufferAttribute){for(let pt=0;pt<q.locationSize;pt++)w(q.location+pt,tt.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let pt=0;pt<q.locationSize;pt++)y(q.location+pt);r.bindBuffer(34962,zt);for(let pt=0;pt<q.locationSize;pt++)L(q.location+pt,yt/q.locationSize,Mt,ht,yt*bt,yt/q.locationSize*pt*bt)}}else if(H!==void 0){const ht=H[Q];if(ht!==void 0)switch(ht.length){case 2:r.vertexAttrib2fv(q.location,ht);break;case 3:r.vertexAttrib3fv(q.location,ht);break;case 4:r.vertexAttrib4fv(q.location,ht);break;default:r.vertexAttrib1fv(q.location,ht)}}}}S()}function A(){X();for(const R in a){const N=a[R];for(const F in N){const Z=N[F];for(const V in Z)g(Z[V].object),delete Z[V];delete N[F]}delete a[R]}}function I(R){if(a[R.id]===void 0)return;const N=a[R.id];for(const F in N){const Z=N[F];for(const V in Z)g(Z[V].object),delete Z[V];delete N[F]}delete a[R.id]}function G(R){for(const N in a){const F=a[N];if(F[R.id]===void 0)continue;const Z=F[R.id];for(const V in Z)g(Z[V].object),delete Z[V];delete F[R.id]}}function X(){P(),h=!0,c!==l&&(c=l,p(c.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:X,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:I,releaseStatesOfProgram:G,initAttributes:_,enableAttribute:y,disableUnusedAttributes:S}}function um(r,t,e,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,h){r.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,p;if(i)d=r,p="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,h,u),e.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=l}function dm(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(34930),d=r.getParameter(35660),p=r.getParameter(3379),g=r.getParameter(34076),m=r.getParameter(34921),f=r.getParameter(36347),v=r.getParameter(36348),x=r.getParameter(36349),_=d>0,y=o||t.has("OES_texture_float"),w=_&&y,S=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:f,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:S}}function fm(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Yn,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,p){const g=u.length!==0||d||n!==0||i;return i=d,e=h(u,p,0),n=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,d,p){const g=u.clippingPlanes,m=u.clipIntersection,f=u.clipShadows,v=r.get(u);if(!i||g===null||g.length===0||s&&!f)s?h(null):c();else{const x=s?0:n,_=x*4;let y=v.clippingState||null;l.value=y,y=h(g,d,_,p);for(let w=0;w!==_;++w)y[w]=e[w];v.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const m=u!==null?u.length:0;let f=null;if(m!==0){if(f=l.value,g!==!0||f===null){const v=p+m*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(f===null||f.length<v)&&(f=new Float32Array(v));for(let _=0,y=p;_!==m;++_,y+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(f,y),f[y+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,f}}function pm(r){let t=new WeakMap;function e(o,a){return a===sa?o.mapping=Zi:a===ra&&(o.mapping=Ji),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===sa||a===ra)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Td(l.height/2);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class ch extends oh{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Wi=4,Ll=[.125,.215,.35,.446,.526,.582],Zn=20,No=new ch,Pl=new kt;let Fo=null;const $n=(1+Math.sqrt(5))/2,Oi=1/$n,Rl=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,$n,Oi),new z(0,$n,-Oi),new z(Oi,0,$n),new z(-Oi,0,$n),new z($n,Oi,0),new z(-$n,Oi,0)];class Dl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Fo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fo),t.scissorTest=!1,pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===Ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fo=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:Ds,format:Qe,encoding:ai,depthBuffer:!1},i=Il(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Il(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mm(s)),this._blurMaterial=gm(s,t,e)}return i}_compileMaterial(t){const e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,No)}_sceneToCubeUV(t,e,n,i){const a=new Ge(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Pl),h.toneMapping=Cn,h.autoClear=!1;const p=new vi({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new Xt(new kn,p);let m=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,m=!0):(p.color.copy(Pl),m=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):x===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const _=this._cubeSize;pr(i,x*_,v>2?_:0,_,_),h.setRenderTarget(i),m&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Zi||t.mapping===Ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;pr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,No)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Rl[(i-1)%Rl.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Xt(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Zn-1),m=s/g,f=isFinite(s)?1+Math.floor(h*m):Zn;f>Zn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Zn}`);const v=[];let x=0;for(let L=0;L<Zn;++L){const b=L/m,A=Math.exp(-b*b/2);v.push(A),L===0?x+=A:L<f&&(x+=2*A)}for(let L=0;L<v.length;L++)v[L]=v[L]/x;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=v,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const y=this._sizeLods[i],w=3*y*(i>_-Wi?i-_+Wi:0),S=4*(this._cubeSize-y);pr(e,w,S,3*y,2*y),l.setRenderTarget(e),l.render(u,No)}}function mm(r){const t=[],e=[],n=[];let i=r;const s=r-Wi+1+Ll.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Wi?l=Ll[o-r+Wi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,m=3,f=2,v=1,x=new Float32Array(m*g*p),_=new Float32Array(f*g*p),y=new Float32Array(v*g*p);for(let S=0;S<p;S++){const L=S%3*2/3-1,b=S>2?0:-1,A=[L,b,0,L+2/3,b,0,L+2/3,b+1,0,L,b,0,L+2/3,b+1,0,L,b+1,0];x.set(A,m*g*S),_.set(d,f*g*S);const I=[S,S,S,S,S,S];y.set(I,v*g*S)}const w=new De;w.setAttribute("position",new dn(x,m)),w.setAttribute("uv",new dn(_,f)),w.setAttribute("faceIndex",new dn(y,v)),t.push(w),i>Wi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Il(r,t,e){const n=new li(r,t,e);return n.texture.mapping=Hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function gm(r,t,e){const n=new Float32Array(Zn),i=new z(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function zl(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Nl(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Ma(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vm(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===sa||l===ra,h=l===Zi||l===Ji;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Dl(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Dl(r));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function xm(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _m(r,t,e,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],34962);const p=u.morphAttributes;for(const g in p){const m=p[g];for(let f=0,v=m.length;f<v;f++)t.update(m[f],34962)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let m=0;if(p!==null){const x=p.array;m=p.version;for(let _=0,y=x.length;_<y;_+=3){const w=x[_+0],S=x[_+1],L=x[_+2];d.push(w,S,S,L,L,w)}}else{const x=g.array;m=g.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const w=_+0,S=_+1,L=_+2;d.push(w,S,S,L,L,w)}}const f=new(Qc(d)?rh:sh)(d,1);f.version=m;const v=s.get(u);v&&t.remove(v),s.set(u,f)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function ym(r,t,e,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,p){r.drawElements(s,p,a,d*l),e.update(p,s,1)}function u(d,p,g){if(g===0)return;let m,f;if(i)m=r,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,p,a,d*l,g),e.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function wm(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(s/3);break;case 1:e.lines+=a*(s/2);break;case 3:e.lines+=a*(s-1);break;case 2:e.lines+=a*s;break;case 0:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Mm(r,t){return r[0]-t[0]}function bm(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Sm(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new me,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,d){const p=c.morphTargetInfluences;if(t.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=m!==void 0?m.length:0;let v=s.get(h);if(v===void 0||v.count!==f){let F=function(){R.dispose(),s.delete(h),h.removeEventListener("dispose",F)};var g=F;v!==void 0&&v.texture.dispose();const y=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let I=0;y===!0&&(I=1),w===!0&&(I=2),S===!0&&(I=3);let G=h.attributes.position.count*I,X=1;G>t.maxTextureSize&&(X=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const P=new Float32Array(G*X*4*f),R=new ih(P,G,X,f);R.type=ti,R.needsUpdate=!0;const N=I*4;for(let Z=0;Z<f;Z++){const V=L[Z],O=b[Z],H=A[Z],Q=G*X*4*Z;for(let q=0;q<V.count;q++){const tt=q*N;y===!0&&(o.fromBufferAttribute(V,q),P[Q+tt+0]=o.x,P[Q+tt+1]=o.y,P[Q+tt+2]=o.z,P[Q+tt+3]=0),w===!0&&(o.fromBufferAttribute(O,q),P[Q+tt+4]=o.x,P[Q+tt+5]=o.y,P[Q+tt+6]=o.z,P[Q+tt+7]=0),S===!0&&(o.fromBufferAttribute(H,q),P[Q+tt+8]=o.x,P[Q+tt+9]=o.y,P[Q+tt+10]=o.z,P[Q+tt+11]=H.itemSize===4?o.w:1)}}v={count:f,texture:R,size:new rt(G,X)},s.set(h,v),h.addEventListener("dispose",F)}let x=0;for(let y=0;y<p.length;y++)x+=p[y];const _=h.morphTargetsRelative?1:1-x;d.getUniforms().setValue(r,"morphTargetBaseInfluence",_),d.getUniforms().setValue(r,"morphTargetInfluences",p),d.getUniforms().setValue(r,"morphTargetsTexture",v.texture,e),d.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{const m=p===void 0?0:p.length;let f=n[h.id];if(f===void 0||f.length!==m){f=[];for(let w=0;w<m;w++)f[w]=[w,0];n[h.id]=f}for(let w=0;w<m;w++){const S=f[w];S[0]=w,S[1]=p[w]}f.sort(bm);for(let w=0;w<8;w++)w<m&&f[w][1]?(a[w][0]=f[w][0],a[w][1]=f[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(Mm);const v=h.morphAttributes.position,x=h.morphAttributes.normal;let _=0;for(let w=0;w<8;w++){const S=a[w],L=S[0],b=S[1];L!==Number.MAX_SAFE_INTEGER&&b?(v&&h.getAttribute("morphTarget"+w)!==v[L]&&h.setAttribute("morphTarget"+w,v[L]),x&&h.getAttribute("morphNormal"+w)!==x[L]&&h.setAttribute("morphNormal"+w,x[L]),i[w]=b,_+=b):(v&&h.hasAttribute("morphTarget"+w)===!0&&h.deleteAttribute("morphTarget"+w),x&&h.hasAttribute("morphNormal"+w)===!0&&h.deleteAttribute("morphNormal"+w),i[w]=0)}const y=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(r,"morphTargetBaseInfluence",y),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Em(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);return i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const hh=new en,uh=new ih,dh=new hd,fh=new ah,Fl=[],Ol=[],Bl=new Float32Array(16),Ul=new Float32Array(9),kl=new Float32Array(4);function rs(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Fl[i];if(s===void 0&&(s=new Float32Array(i),Fl[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function le(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ce(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function $r(r,t){let e=Ol[t];e===void 0&&(e=new Int32Array(t),Ol[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Tm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Am(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;r.uniform2fv(this.addr,t),ce(e,t)}}function Cm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(le(e,t))return;r.uniform3fv(this.addr,t),ce(e,t)}}function Lm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;r.uniform4fv(this.addr,t),ce(e,t)}}function Pm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;kl.set(n),r.uniformMatrix2fv(this.addr,!1,kl),ce(e,n)}}function Rm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;Ul.set(n),r.uniformMatrix3fv(this.addr,!1,Ul),ce(e,n)}}function Dm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;Bl.set(n),r.uniformMatrix4fv(this.addr,!1,Bl),ce(e,n)}}function Im(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function zm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;r.uniform2iv(this.addr,t),ce(e,t)}}function Nm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;r.uniform3iv(this.addr,t),ce(e,t)}}function Fm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;r.uniform4iv(this.addr,t),ce(e,t)}}function Om(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Bm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;r.uniform2uiv(this.addr,t),ce(e,t)}}function Um(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;r.uniform3uiv(this.addr,t),ce(e,t)}}function km(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;r.uniform4uiv(this.addr,t),ce(e,t)}}function Gm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||hh,i)}function Vm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||dh,i)}function Wm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||fh,i)}function Hm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||uh,i)}function qm(r){switch(r){case 5126:return Tm;case 35664:return Am;case 35665:return Cm;case 35666:return Lm;case 35674:return Pm;case 35675:return Rm;case 35676:return Dm;case 5124:case 35670:return Im;case 35667:case 35671:return zm;case 35668:case 35672:return Nm;case 35669:case 35673:return Fm;case 5125:return Om;case 36294:return Bm;case 36295:return Um;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Hm}}function Xm(r,t){r.uniform1fv(this.addr,t)}function jm(r,t){const e=rs(t,this.size,2);r.uniform2fv(this.addr,e)}function Ym(r,t){const e=rs(t,this.size,3);r.uniform3fv(this.addr,e)}function $m(r,t){const e=rs(t,this.size,4);r.uniform4fv(this.addr,e)}function Zm(r,t){const e=rs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Jm(r,t){const e=rs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Km(r,t){const e=rs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Qm(r,t){r.uniform1iv(this.addr,t)}function tg(r,t){r.uniform2iv(this.addr,t)}function eg(r,t){r.uniform3iv(this.addr,t)}function ng(r,t){r.uniform4iv(this.addr,t)}function ig(r,t){r.uniform1uiv(this.addr,t)}function sg(r,t){r.uniform2uiv(this.addr,t)}function rg(r,t){r.uniform3uiv(this.addr,t)}function og(r,t){r.uniform4uiv(this.addr,t)}function ag(r,t,e){const n=this.cache,i=t.length,s=$r(e,i);le(n,s)||(r.uniform1iv(this.addr,s),ce(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||hh,s[o])}function lg(r,t,e){const n=this.cache,i=t.length,s=$r(e,i);le(n,s)||(r.uniform1iv(this.addr,s),ce(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||dh,s[o])}function cg(r,t,e){const n=this.cache,i=t.length,s=$r(e,i);le(n,s)||(r.uniform1iv(this.addr,s),ce(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||fh,s[o])}function hg(r,t,e){const n=this.cache,i=t.length,s=$r(e,i);le(n,s)||(r.uniform1iv(this.addr,s),ce(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||uh,s[o])}function ug(r){switch(r){case 5126:return Xm;case 35664:return jm;case 35665:return Ym;case 35666:return $m;case 35674:return Zm;case 35675:return Jm;case 35676:return Km;case 5124:case 35670:return Qm;case 35667:case 35671:return tg;case 35668:case 35672:return eg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return sg;case 36295:return rg;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return hg}}class dg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=qm(e.type)}}class fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=ug(e.type)}}class pg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Oo=/(\w+)(\])?(\[|\.)?/g;function Gl(r,t){r.seq.push(t),r.map[t.id]=t}function mg(r,t,e){const n=r.name,i=n.length;for(Oo.lastIndex=0;;){const s=Oo.exec(n),o=Oo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Gl(e,c===void 0?new dg(a,r,t):new fg(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new pg(a),Gl(e,u)),e=u}}}class Dr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);mg(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Vl(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let gg=0;function vg(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function xg(r){switch(r){case ai:return["Linear","( value )"];case $t:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Wl(r,t,e){const n=r.getShaderParameter(t,35713),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+vg(r.getShaderSource(t),o)}else return i}function _g(r,t){const e=xg(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function yg(r,t){let e;switch(t){case Ou:e="Linear";break;case Bu:e="Reinhard";break;case Uu:e="OptimizedCineon";break;case ku:e="ACESFilmic";break;case Gu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function wg(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ws).join(`
`)}function Mg(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function bg(r,t){const e={},n=r.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function ws(r){return r!==""}function Hl(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ql(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ha(r){return r.replace(Sg,Eg)}function Eg(r,t){const e=At[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return ha(e)}const Tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xl(r){return r.replace(Tg,Ag)}function Ag(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function jl(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Cg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===jc?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Yc?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ys&&(t="SHADOWMAP_TYPE_VSM"),t}function Lg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Zi:case Ji:t="ENVMAP_TYPE_CUBE";break;case Hr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Pg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ji:t="ENVMAP_MODE_REFRACTION";break}return t}function Rg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Wr:t="ENVMAP_BLENDING_MULTIPLY";break;case Nu:t="ENVMAP_BLENDING_MIX";break;case Fu:t="ENVMAP_BLENDING_ADD";break}return t}function Dg(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ig(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Cg(e),c=Lg(e),h=Pg(e),u=Rg(e),d=Dg(e),p=e.isWebGL2?"":wg(e),g=Mg(s),m=i.createProgram();let f,v,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=[g].filter(ws).join(`
`),f.length>0&&(f+=`
`),v=[p,g].filter(ws).join(`
`),v.length>0&&(v+=`
`)):(f=[jl(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),v=[p,jl(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?At.tonemapping_pars_fragment:"",e.toneMapping!==Cn?yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",At.encodings_pars_fragment,_g("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ws).join(`
`)),o=ha(o),o=Hl(o,e),o=ql(o,e),a=ha(a),a=Hl(a,e),a=ql(a,e),o=Xl(o),a=Xl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["#define varying in",e.glslVersion===gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const _=x+f+o,y=x+v+a,w=Vl(i,35633,_),S=Vl(i,35632,y);if(i.attachShader(m,w),i.attachShader(m,S),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),r.debug.checkShaderErrors){const A=i.getProgramInfoLog(m).trim(),I=i.getShaderInfoLog(w).trim(),G=i.getShaderInfoLog(S).trim();let X=!0,P=!0;if(i.getProgramParameter(m,35714)===!1){X=!1;const R=Wl(i,w,"vertex"),N=Wl(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+A+`
`+R+`
`+N)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(I===""||G==="")&&(P=!1);P&&(this.diagnostics={runnable:X,programLog:A,vertexShader:{log:I,prefix:f},fragmentShader:{log:G,prefix:v}})}i.deleteShader(w),i.deleteShader(S);let L;this.getUniforms=function(){return L===void 0&&(L=new Dr(i,m)),L};let b;return this.getAttributes=function(){return b===void 0&&(b=bg(i,m)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=e.shaderName,this.id=gg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=S,this}let zg=0;class Ng{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Fg(t),e.set(t,n)),n}}class Fg{constructor(t){this.id=zg++,this.code=t,this.usedTimes=0}}function Og(r,t,e,n,i,s,o){const a=new ya,l=new Ng,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b,A,I,G,X){const P=G.fog,R=X.geometry,N=b.isMeshStandardMaterial?G.environment:null,F=(b.isMeshStandardMaterial?e:t).get(b.envMap||N),Z=!!F&&F.mapping===Hr?F.image.height:null,V=g[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const O=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,H=O!==void 0?O.length:0;let Q=0;R.morphAttributes.position!==void 0&&(Q=1),R.morphAttributes.normal!==void 0&&(Q=2),R.morphAttributes.color!==void 0&&(Q=3);let q,tt,ht,yt;if(V){const Gt=un[V];q=Gt.vertexShader,tt=Gt.fragmentShader}else q=b.vertexShader,tt=b.fragmentShader,l.update(b),ht=l.getVertexShaderID(b),yt=l.getFragmentShaderID(b);const J=r.getRenderTarget(),zt=b.alphaTest>0,Mt=b.clearcoat>0,bt=b.iridescence>0;return{isWebGL2:h,shaderID:V,shaderName:b.type,vertexShader:q,fragmentShader:tt,defines:b.defines,customVertexShaderID:ht,customFragmentShaderID:yt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,instancing:X.isInstancedMesh===!0,instancingColor:X.isInstancedMesh===!0&&X.instanceColor!==null,supportsVertexTextures:d,outputEncoding:J===null?r.outputEncoding:J.isXRRenderTarget===!0?J.texture.encoding:ai,map:!!b.map,matcap:!!b.matcap,envMap:!!F,envMapMode:F&&F.mapping,envMapCubeUVHeight:Z,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===od,tangentSpaceNormalMap:b.normalMapType===Xr,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===$t,clearcoat:Mt,clearcoatMap:Mt&&!!b.clearcoatMap,clearcoatRoughnessMap:Mt&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:Mt&&!!b.clearcoatNormalMap,iridescence:bt,iridescenceMap:bt&&!!b.iridescenceMap,iridescenceThicknessMap:bt&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===Xi,alphaMap:!!b.alphaMap,alphaTest:zt,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!R.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||b.transmission>0||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||b.sheen>0||!!b.sheenColorMap||!!b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!P,useFog:b.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:Q,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:b.toneMapped?r.toneMapping:Cn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ve,flipSided:b.side===He,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function f(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)A.push(I),A.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(v(A,b),x(A,b),A.push(r.outputEncoding)),A.push(b.customProgramCacheKey),A.join()}function v(b,A){b.push(A.precision),b.push(A.outputEncoding),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.combine),b.push(A.vertexUvs),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function x(b,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),b.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),b.push(a.mask)}function _(b){const A=g[b.type];let I;if(A){const G=un[A];I=Md.clone(G.uniforms)}else I=b.uniforms;return I}function y(b,A){let I;for(let G=0,X=c.length;G<X;G++){const P=c[G];if(P.cacheKey===A){I=P,++I.usedTimes;break}}return I===void 0&&(I=new Ig(r,A,b,s),c.push(I)),I}function w(b){if(--b.usedTimes===0){const A=c.indexOf(b);c[A]=c[c.length-1],c.pop(),b.destroy()}}function S(b){l.remove(b)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:y,releaseProgram:w,releaseShaderCache:S,programs:c,dispose:L}}function Bg(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Ug(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Yl(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function $l(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,p,g,m,f){let v=r[t];return v===void 0?(v={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:m,group:f},r[t]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=p,v.groupOrder=g,v.renderOrder=u.renderOrder,v.z=m,v.group=f),t++,v}function a(u,d,p,g,m,f){const v=o(u,d,p,g,m,f);p.transmission>0?n.push(v):p.transparent===!0?i.push(v):e.push(v)}function l(u,d,p,g,m,f){const v=o(u,d,p,g,m,f);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):e.unshift(v)}function c(u,d){e.length>1&&e.sort(u||Ug),n.length>1&&n.sort(d||Yl),i.length>1&&i.sort(d||Yl)}function h(){for(let u=t,d=r.length;u<d;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function kg(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new $l,r.set(n,[o])):i>=s.length?(o=new $l,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Gg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new kt};break;case"SpotLight":e={position:new z,direction:new z,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new z,halfWidth:new z,halfHeight:new z};break}return r[t.id]=e,e}}}function Vg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Wg=0;function Hg(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function qg(r,t){const e=new Gg,n=Vg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new z);const s=new z,o=new Jt,a=new Jt;function l(h,u){let d=0,p=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let m=0,f=0,v=0,x=0,_=0,y=0,w=0,S=0,L=0,b=0;h.sort(Hg);const A=u!==!0?Math.PI:1;for(let G=0,X=h.length;G<X;G++){const P=h[G],R=P.color,N=P.intensity,F=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=R.r*N*A,p+=R.g*N*A,g+=R.b*N*A;else if(P.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(P.sh.coefficients[V],N);else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*A),P.castShadow){const O=P.shadow,H=n.get(P);H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,i.directionalShadow[m]=H,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=P.shadow.matrix,y++}i.directional[m]=V,m++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(R).multiplyScalar(N*A),V.distance=F,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,i.spot[v]=V;const O=P.shadow;if(P.map&&(i.spotLightMap[L]=P.map,L++,O.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[v]=O.matrix,P.castShadow){const H=n.get(P);H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=Z,S++}v++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(R).multiplyScalar(N),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=V,x++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*A),V.distance=P.distance,V.decay=P.decay,P.castShadow){const O=P.shadow,H=n.get(P);H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,H.shadowCameraNear=O.camera.near,H.shadowCameraFar=O.camera.far,i.pointShadow[f]=H,i.pointShadowMap[f]=Z,i.pointShadowMatrix[f]=P.shadow.matrix,w++}i.point[f]=V,f++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(N*A),V.groundColor.copy(P.groundColor).multiplyScalar(N*A),i.hemi[_]=V,_++}}x>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==m||I.pointLength!==f||I.spotLength!==v||I.rectAreaLength!==x||I.hemiLength!==_||I.numDirectionalShadows!==y||I.numPointShadows!==w||I.numSpotShadows!==S||I.numSpotMaps!==L)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=x,i.point.length=f,i.hemi.length=_,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=S+L-b,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=b,I.directionalLength=m,I.pointLength=f,I.spotLength=v,I.rectAreaLength=x,I.hemiLength=_,I.numDirectionalShadows=y,I.numPointShadows=w,I.numSpotShadows=S,I.numSpotMaps=L,i.version=Wg++)}function c(h,u){let d=0,p=0,g=0,m=0,f=0;const v=u.matrixWorldInverse;for(let x=0,_=h.length;x<_;x++){const y=h[x];if(y.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(v),d++}else if(y.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(v),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(v),g++}else if(y.isRectAreaLight){const w=i.rectArea[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(v),a.identity(),o.copy(y.matrixWorld),o.premultiply(v),a.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const w=i.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(v),p++}else if(y.isHemisphereLight){const w=i.hemi[f];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(v),f++}}}return{setup:l,setupView:c,state:i}}function Zl(r,t){const e=new qg(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Xg(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new Zl(r,t),e.set(s,[l])):o>=a.length?(l=new Zl(r,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class jg extends Un{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Yg extends Un{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const $g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jg(r,t,e){let n=new wa;const i=new rt,s=new rt,o=new me,a=new jg({depthPacking:rd}),l=new Yg,c={},h=e.maxTextureSize,u={0:He,1:$i,2:Ve},d=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:$g,fragmentShader:Zg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new De;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Xt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jc,this.render=function(y,w,S){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||y.length===0)return;const L=r.getRenderTarget(),b=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Bn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let G=0,X=y.length;G<X;G++){const P=y[G],R=P.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const N=R.getFrameExtents();if(i.multiply(N),s.copy(R.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/N.x),i.x=s.x*N.x,R.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/N.y),i.y=s.y*N.y,R.mapSize.y=s.y)),R.map===null){const Z=this.type!==ys?{minFilter:Te,magFilter:Te}:{};R.map=new li(i.x,i.y,Z),R.map.texture.name=P.name+".shadowMap",R.camera.updateProjectionMatrix()}r.setRenderTarget(R.map),r.clear();const F=R.getViewportCount();for(let Z=0;Z<F;Z++){const V=R.getViewport(Z);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),I.viewport(o),R.updateMatrices(P,Z),n=R.getFrustum(),_(w,S,R.camera,P,this.type)}R.isPointLightShadow!==!0&&this.type===ys&&v(R,S),R.needsUpdate=!1}f.needsUpdate=!1,r.setRenderTarget(L,b,A)};function v(y,w){const S=t.update(m);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new li(i.x,i.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(w,null,S,d,m,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(w,null,S,p,m,null)}function x(y,w,S,L,b,A){let I=null;const G=S.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(G!==void 0?I=G:I=S.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const X=I.uuid,P=w.uuid;let R=c[X];R===void 0&&(R={},c[X]=R);let N=R[P];N===void 0&&(N=I.clone(),R[P]=N),I=N}return I.visible=w.visible,I.wireframe=w.wireframe,A===ys?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:u[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaTest,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(S.matrixWorld),I.nearDistance=L,I.farDistance=b),I}function _(y,w,S,L,b){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&b===ys)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,y.matrixWorld);const G=t.update(y),X=y.material;if(Array.isArray(X)){const P=G.groups;for(let R=0,N=P.length;R<N;R++){const F=P[R],Z=X[F.materialIndex];if(Z&&Z.visible){const V=x(y,Z,L,S.near,S.far,b);r.renderBufferDirect(S,null,G,V,y,F)}}}else if(X.visible){const P=x(y,X,L,S.near,S.far,b);r.renderBufferDirect(S,null,G,P,y,null)}}const I=y.children;for(let G=0,X=I.length;G<X;G++)_(I[G],w,S,L,b)}}function Kg(r,t,e){const n=e.isWebGL2;function i(){let B=!1;const $=new me;let et=null;const ut=new me(0,0,0,0);return{setMask:function(vt){et!==vt&&!B&&(r.colorMask(vt,vt,vt,vt),et=vt)},setLocked:function(vt){B=vt},setClear:function(vt,Ot,ue,ye,Gn){Gn===!0&&(vt*=ye,Ot*=ye,ue*=ye),$.set(vt,Ot,ue,ye),ut.equals($)===!1&&(r.clearColor(vt,Ot,ue,ye),ut.copy($))},reset:function(){B=!1,et=null,ut.set(-1,0,0,0)}}}function s(){let B=!1,$=null,et=null,ut=null;return{setTest:function(vt){vt?zt(2929):Mt(2929)},setMask:function(vt){$!==vt&&!B&&(r.depthMask(vt),$=vt)},setFunc:function(vt){if(et!==vt){switch(vt){case Cu:r.depthFunc(512);break;case Lu:r.depthFunc(519);break;case Pu:r.depthFunc(513);break;case ia:r.depthFunc(515);break;case Ru:r.depthFunc(514);break;case Du:r.depthFunc(518);break;case Iu:r.depthFunc(516);break;case zu:r.depthFunc(517);break;default:r.depthFunc(515)}et=vt}},setLocked:function(vt){B=vt},setClear:function(vt){ut!==vt&&(r.clearDepth(vt),ut=vt)},reset:function(){B=!1,$=null,et=null,ut=null}}}function o(){let B=!1,$=null,et=null,ut=null,vt=null,Ot=null,ue=null,ye=null,Gn=null;return{setTest:function(qt){B||(qt?zt(2960):Mt(2960))},setMask:function(qt){$!==qt&&!B&&(r.stencilMask(qt),$=qt)},setFunc:function(qt,pn,Fe){(et!==qt||ut!==pn||vt!==Fe)&&(r.stencilFunc(qt,pn,Fe),et=qt,ut=pn,vt=Fe)},setOp:function(qt,pn,Fe){(Ot!==qt||ue!==pn||ye!==Fe)&&(r.stencilOp(qt,pn,Fe),Ot=qt,ue=pn,ye=Fe)},setLocked:function(qt){B=qt},setClear:function(qt){Gn!==qt&&(r.clearStencil(qt),Gn=qt)},reset:function(){B=!1,$=null,et=null,ut=null,vt=null,Ot=null,ue=null,ye=null,Gn=null}}}const a=new i,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let d={},p={},g=new WeakMap,m=[],f=null,v=!1,x=null,_=null,y=null,w=null,S=null,L=null,b=null,A=!1,I=null,G=null,X=null,P=null,R=null;const N=r.getParameter(35661);let F=!1,Z=0;const V=r.getParameter(7938);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=Z>=2);let O=null,H={};const Q=r.getParameter(3088),q=r.getParameter(2978),tt=new me().fromArray(Q),ht=new me().fromArray(q);function yt(B,$,et){const ut=new Uint8Array(4),vt=r.createTexture();r.bindTexture(B,vt),r.texParameteri(B,10241,9728),r.texParameteri(B,10240,9728);for(let Ot=0;Ot<et;Ot++)r.texImage2D($+Ot,0,6408,1,1,0,6408,5121,ut);return vt}const J={};J[3553]=yt(3553,3553,1),J[34067]=yt(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),zt(2929),l.setFunc(ia),se(!1),Ae(ka),zt(2884),Qt(Bn);function zt(B){d[B]!==!0&&(r.enable(B),d[B]=!0)}function Mt(B){d[B]!==!1&&(r.disable(B),d[B]=!1)}function bt(B,$){return p[B]!==$?(r.bindFramebuffer(B,$),p[B]=$,n&&(B===36009&&(p[36160]=$),B===36160&&(p[36009]=$)),!0):!1}function pt(B,$){let et=m,ut=!1;if(B)if(et=g.get($),et===void 0&&(et=[],g.set($,et)),B.isWebGLMultipleRenderTargets){const vt=B.texture;if(et.length!==vt.length||et[0]!==36064){for(let Ot=0,ue=vt.length;Ot<ue;Ot++)et[Ot]=36064+Ot;et.length=vt.length,ut=!0}}else et[0]!==36064&&(et[0]=36064,ut=!0);else et[0]!==1029&&(et[0]=1029,ut=!0);ut&&(e.isWebGL2?r.drawBuffers(et):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(et))}function Gt(B){return f!==B?(r.useProgram(B),f=B,!0):!1}const Et={[Gi]:32774,[vu]:32778,[xu]:32779};if(n)Et[Ha]=32775,Et[qa]=32776;else{const B=t.get("EXT_blend_minmax");B!==null&&(Et[Ha]=B.MIN_EXT,Et[qa]=B.MAX_EXT)}const _t={[_u]:0,[yu]:1,[wu]:768,[$c]:770,[Au]:776,[Eu]:774,[bu]:772,[Mu]:769,[Zc]:771,[Tu]:775,[Su]:773};function Qt(B,$,et,ut,vt,Ot,ue,ye){if(B===Bn){v===!0&&(Mt(3042),v=!1);return}if(v===!1&&(zt(3042),v=!0),B!==gu){if(B!==x||ye!==A){if((_!==Gi||S!==Gi)&&(r.blendEquation(32774),_=Gi,S=Gi),ye)switch(B){case Xi:r.blendFuncSeparate(1,771,1,771);break;case Ga:r.blendFunc(1,1);break;case Va:r.blendFuncSeparate(0,769,0,1);break;case Wa:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Xi:r.blendFuncSeparate(770,771,1,771);break;case Ga:r.blendFunc(770,1);break;case Va:r.blendFuncSeparate(0,769,0,1);break;case Wa:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,w=null,L=null,b=null,x=B,A=ye}return}vt=vt||$,Ot=Ot||et,ue=ue||ut,($!==_||vt!==S)&&(r.blendEquationSeparate(Et[$],Et[vt]),_=$,S=vt),(et!==y||ut!==w||Ot!==L||ue!==b)&&(r.blendFuncSeparate(_t[et],_t[ut],_t[Ot],_t[ue]),y=et,w=ut,L=Ot,b=ue),x=B,A=null}function he(B,$){B.side===Ve?Mt(2884):zt(2884);let et=B.side===He;$&&(et=!et),se(et),B.blending===Xi&&B.transparent===!1?Qt(Bn):Qt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),a.setMask(B.colorWrite);const ut=B.stencilWrite;c.setTest(ut),ut&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Vt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?zt(32926):Mt(32926)}function se(B){I!==B&&(B?r.frontFace(2304):r.frontFace(2305),I=B)}function Ae(B){B!==pu?(zt(2884),B!==G&&(B===ka?r.cullFace(1029):B===mu?r.cullFace(1028):r.cullFace(1032))):Mt(2884),G=B}function re(B){B!==X&&(F&&r.lineWidth(B),X=B)}function Vt(B,$,et){B?(zt(32823),(P!==$||R!==et)&&(r.polygonOffset($,et),P=$,R=et)):Mt(32823)}function ze(B){B?zt(3089):Mt(3089)}function Ne(B){B===void 0&&(B=33984+N-1),O!==B&&(r.activeTexture(B),O=B)}function C(B,$,et){et===void 0&&(O===null?et=33984+N-1:et=O);let ut=H[et];ut===void 0&&(ut={type:void 0,texture:void 0},H[et]=ut),(ut.type!==B||ut.texture!==$)&&(O!==et&&(r.activeTexture(et),O=et),r.bindTexture(B,$||J[B]),ut.type=B,ut.texture=$)}function E(){const B=H[O];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function nt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function it(){try{r.texSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function at(){try{r.texSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function wt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function D(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function U(){try{r.texStorage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{r.texStorage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ft(){try{r.texImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function lt(){try{r.texImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function gt(B){tt.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),tt.copy(B))}function mt(B){ht.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),ht.copy(B))}function Rt(B,$){let et=u.get($);et===void 0&&(et=new WeakMap,u.set($,et));let ut=et.get(B);ut===void 0&&(ut=r.getUniformBlockIndex($,B.name),et.set(B,ut))}function Dt(B,$){const ut=u.get($).get(B);h.get(B)!==ut&&(r.uniformBlockBinding($,ut,B.__bindingPointIndex),h.set(B,ut))}function Wt(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},O=null,H={},p={},g=new WeakMap,m=[],f=null,v=!1,x=null,_=null,y=null,w=null,S=null,L=null,b=null,A=!1,I=null,G=null,X=null,P=null,R=null,tt.set(0,0,r.canvas.width,r.canvas.height),ht.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:zt,disable:Mt,bindFramebuffer:bt,drawBuffers:pt,useProgram:Gt,setBlending:Qt,setMaterial:he,setFlipSided:se,setCullFace:Ae,setLineWidth:re,setPolygonOffset:Vt,setScissorTest:ze,activeTexture:Ne,bindTexture:C,unbindTexture:E,compressedTexImage2D:j,compressedTexImage3D:nt,texImage2D:ft,texImage3D:lt,updateUBOMapping:Rt,uniformBlockBinding:Dt,texStorage2D:U,texStorage3D:ct,texSubImage2D:it,texSubImage3D:at,compressedTexSubImage2D:wt,compressedTexSubImage3D:D,scissor:gt,viewport:mt,reset:Wt}}function Qg(r,t,e,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap;let m;const f=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,E){return v?new OffscreenCanvas(C,E):Br("canvas")}function _(C,E,j,nt){let it=1;if((C.width>nt||C.height>nt)&&(it=nt/Math.max(C.width,C.height)),it<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const at=E?ca:Math.floor,wt=at(it*C.width),D=at(it*C.height);m===void 0&&(m=x(wt,D));const U=j?x(wt,D):m;return U.width=wt,U.height=D,U.getContext("2d").drawImage(C,0,0,wt,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+wt+"x"+D+")."),U}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return xl(C.width)&&xl(C.height)}function w(C){return a?!1:C.wrapS!==Ke||C.wrapT!==Ke||C.minFilter!==Te&&C.minFilter!==ke}function S(C,E){return C.generateMipmaps&&E&&C.minFilter!==Te&&C.minFilter!==ke}function L(C){r.generateMipmap(C)}function b(C,E,j,nt,it=!1){if(a===!1)return E;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let at=E;return E===6403&&(j===5126&&(at=33326),j===5131&&(at=33325),j===5121&&(at=33321)),E===33319&&(j===5126&&(at=33328),j===5131&&(at=33327),j===5121&&(at=33323)),E===6408&&(j===5126&&(at=34836),j===5131&&(at=34842),j===5121&&(at=nt===$t&&it===!1?35907:32856),j===32819&&(at=32854),j===32820&&(at=32855)),(at===33325||at===33326||at===33327||at===33328||at===34842||at===34836)&&t.get("EXT_color_buffer_float"),at}function A(C,E,j){return S(C,j)===!0||C.isFramebufferTexture&&C.minFilter!==Te&&C.minFilter!==ke?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function I(C){return C===Te||C===Xa||C===ja?9728:9729}function G(C){const E=C.target;E.removeEventListener("dispose",G),P(E),E.isVideoTexture&&g.delete(E)}function X(C){const E=C.target;E.removeEventListener("dispose",X),N(E)}function P(C){const E=n.get(C);if(E.__webglInit===void 0)return;const j=C.source,nt=f.get(j);if(nt){const it=nt[E.__cacheKey];it.usedTimes--,it.usedTimes===0&&R(C),Object.keys(nt).length===0&&f.delete(j)}n.remove(C)}function R(C){const E=n.get(C);r.deleteTexture(E.__webglTexture);const j=C.source,nt=f.get(j);delete nt[E.__cacheKey],o.memory.textures--}function N(C){const E=C.texture,j=n.get(C),nt=n.get(E);if(nt.__webglTexture!==void 0&&(r.deleteTexture(nt.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let it=0;it<6;it++)r.deleteFramebuffer(j.__webglFramebuffer[it]),j.__webglDepthbuffer&&r.deleteRenderbuffer(j.__webglDepthbuffer[it]);else{if(r.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&r.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&r.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let it=0;it<j.__webglColorRenderbuffer.length;it++)j.__webglColorRenderbuffer[it]&&r.deleteRenderbuffer(j.__webglColorRenderbuffer[it]);j.__webglDepthRenderbuffer&&r.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let it=0,at=E.length;it<at;it++){const wt=n.get(E[it]);wt.__webglTexture&&(r.deleteTexture(wt.__webglTexture),o.memory.textures--),n.remove(E[it])}n.remove(E),n.remove(C)}let F=0;function Z(){F=0}function V(){const C=F;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),F+=1,C}function O(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.encoding),E.join()}function H(C,E){const j=n.get(C);if(C.isVideoTexture&&ze(C),C.isRenderTargetTexture===!1&&C.version>0&&j.__version!==C.version){const nt=C.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(j,C,E);return}}e.bindTexture(3553,j.__webglTexture,33984+E)}function Q(C,E){const j=n.get(C);if(C.version>0&&j.__version!==C.version){Mt(j,C,E);return}e.bindTexture(35866,j.__webglTexture,33984+E)}function q(C,E){const j=n.get(C);if(C.version>0&&j.__version!==C.version){Mt(j,C,E);return}e.bindTexture(32879,j.__webglTexture,33984+E)}function tt(C,E){const j=n.get(C);if(C.version>0&&j.__version!==C.version){bt(j,C,E);return}e.bindTexture(34067,j.__webglTexture,33984+E)}const ht={[oa]:10497,[Ke]:33071,[aa]:33648},yt={[Te]:9728,[Xa]:9984,[ja]:9986,[ke]:9729,[Vu]:9985,[qr]:9987};function J(C,E,j){if(j?(r.texParameteri(C,10242,ht[E.wrapS]),r.texParameteri(C,10243,ht[E.wrapT]),(C===32879||C===35866)&&r.texParameteri(C,32882,ht[E.wrapR]),r.texParameteri(C,10240,yt[E.magFilter]),r.texParameteri(C,10241,yt[E.minFilter])):(r.texParameteri(C,10242,33071),r.texParameteri(C,10243,33071),(C===32879||C===35866)&&r.texParameteri(C,32882,33071),(E.wrapS!==Ke||E.wrapT!==Ke)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,10240,I(E.magFilter)),r.texParameteri(C,10241,I(E.minFilter)),E.minFilter!==Te&&E.minFilter!==ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const nt=t.get("EXT_texture_filter_anisotropic");if(E.type===ti&&t.has("OES_texture_float_linear")===!1||a===!1&&E.type===Ds&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(C,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function zt(C,E){let j=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",G));const nt=E.source;let it=f.get(nt);it===void 0&&(it={},f.set(nt,it));const at=O(E);if(at!==C.__cacheKey){it[at]===void 0&&(it[at]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,j=!0),it[at].usedTimes++;const wt=it[C.__cacheKey];wt!==void 0&&(it[C.__cacheKey].usedTimes--,wt.usedTimes===0&&R(E)),C.__cacheKey=at,C.__webglTexture=it[at].texture}return j}function Mt(C,E,j){let nt=3553;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(nt=35866),E.isData3DTexture&&(nt=32879);const it=zt(C,E),at=E.source;e.bindTexture(nt,C.__webglTexture,33984+j);const wt=n.get(at);if(at.version!==wt.__version||it===!0){e.activeTexture(33984+j),r.pixelStorei(37440,E.flipY),r.pixelStorei(37441,E.premultiplyAlpha),r.pixelStorei(3317,E.unpackAlignment),r.pixelStorei(37443,0);const D=w(E)&&y(E.image)===!1;let U=_(E.image,D,!1,h);U=Ne(E,U);const ct=y(U)||a,ft=s.convert(E.format,E.encoding);let lt=s.convert(E.type),gt=b(E.internalFormat,ft,lt,E.encoding,E.isVideoTexture);J(nt,E,ct);let mt;const Rt=E.mipmaps,Dt=a&&E.isVideoTexture!==!0,Wt=wt.__version===void 0||it===!0,B=A(E,U,ct);if(E.isDepthTexture)gt=6402,a?E.type===ti?gt=36012:E.type===Qn?gt=33190:E.type===ji?gt=35056:gt=33189:E.type===ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===si&&gt===6402&&E.type!==Kc&&E.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Qn,lt=s.convert(E.type)),E.format===Ki&&gt===6402&&(gt=34041,E.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=ji,lt=s.convert(E.type))),Wt&&(Dt?e.texStorage2D(3553,1,gt,U.width,U.height):e.texImage2D(3553,0,gt,U.width,U.height,0,ft,lt,null));else if(E.isDataTexture)if(Rt.length>0&&ct){Dt&&Wt&&e.texStorage2D(3553,B,gt,Rt[0].width,Rt[0].height);for(let $=0,et=Rt.length;$<et;$++)mt=Rt[$],Dt?e.texSubImage2D(3553,$,0,0,mt.width,mt.height,ft,lt,mt.data):e.texImage2D(3553,$,gt,mt.width,mt.height,0,ft,lt,mt.data);E.generateMipmaps=!1}else Dt?(Wt&&e.texStorage2D(3553,B,gt,U.width,U.height),e.texSubImage2D(3553,0,0,0,U.width,U.height,ft,lt,U.data)):e.texImage2D(3553,0,gt,U.width,U.height,0,ft,lt,U.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Dt&&Wt&&e.texStorage3D(35866,B,gt,Rt[0].width,Rt[0].height,U.depth);for(let $=0,et=Rt.length;$<et;$++)mt=Rt[$],E.format!==Qe?ft!==null?Dt?e.compressedTexSubImage3D(35866,$,0,0,0,mt.width,mt.height,U.depth,ft,mt.data,0,0):e.compressedTexImage3D(35866,$,gt,mt.width,mt.height,U.depth,0,mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?e.texSubImage3D(35866,$,0,0,0,mt.width,mt.height,U.depth,ft,lt,mt.data):e.texImage3D(35866,$,gt,mt.width,mt.height,U.depth,0,ft,lt,mt.data)}else{Dt&&Wt&&e.texStorage2D(3553,B,gt,Rt[0].width,Rt[0].height);for(let $=0,et=Rt.length;$<et;$++)mt=Rt[$],E.format!==Qe?ft!==null?Dt?e.compressedTexSubImage2D(3553,$,0,0,mt.width,mt.height,ft,mt.data):e.compressedTexImage2D(3553,$,gt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?e.texSubImage2D(3553,$,0,0,mt.width,mt.height,ft,lt,mt.data):e.texImage2D(3553,$,gt,mt.width,mt.height,0,ft,lt,mt.data)}else if(E.isDataArrayTexture)Dt?(Wt&&e.texStorage3D(35866,B,gt,U.width,U.height,U.depth),e.texSubImage3D(35866,0,0,0,0,U.width,U.height,U.depth,ft,lt,U.data)):e.texImage3D(35866,0,gt,U.width,U.height,U.depth,0,ft,lt,U.data);else if(E.isData3DTexture)Dt?(Wt&&e.texStorage3D(32879,B,gt,U.width,U.height,U.depth),e.texSubImage3D(32879,0,0,0,0,U.width,U.height,U.depth,ft,lt,U.data)):e.texImage3D(32879,0,gt,U.width,U.height,U.depth,0,ft,lt,U.data);else if(E.isFramebufferTexture){if(Wt)if(Dt)e.texStorage2D(3553,B,gt,U.width,U.height);else{let $=U.width,et=U.height;for(let ut=0;ut<B;ut++)e.texImage2D(3553,ut,gt,$,et,0,ft,lt,null),$>>=1,et>>=1}}else if(Rt.length>0&&ct){Dt&&Wt&&e.texStorage2D(3553,B,gt,Rt[0].width,Rt[0].height);for(let $=0,et=Rt.length;$<et;$++)mt=Rt[$],Dt?e.texSubImage2D(3553,$,0,0,ft,lt,mt):e.texImage2D(3553,$,gt,ft,lt,mt);E.generateMipmaps=!1}else Dt?(Wt&&e.texStorage2D(3553,B,gt,U.width,U.height),e.texSubImage2D(3553,0,0,0,ft,lt,U)):e.texImage2D(3553,0,gt,ft,lt,U);S(E,ct)&&L(nt),wt.__version=at.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function bt(C,E,j){if(E.image.length!==6)return;const nt=zt(C,E),it=E.source;e.bindTexture(34067,C.__webglTexture,33984+j);const at=n.get(it);if(it.version!==at.__version||nt===!0){e.activeTexture(33984+j),r.pixelStorei(37440,E.flipY),r.pixelStorei(37441,E.premultiplyAlpha),r.pixelStorei(3317,E.unpackAlignment),r.pixelStorei(37443,0);const wt=E.isCompressedTexture||E.image[0].isCompressedTexture,D=E.image[0]&&E.image[0].isDataTexture,U=[];for(let $=0;$<6;$++)!wt&&!D?U[$]=_(E.image[$],!1,!0,c):U[$]=D?E.image[$].image:E.image[$],U[$]=Ne(E,U[$]);const ct=U[0],ft=y(ct)||a,lt=s.convert(E.format,E.encoding),gt=s.convert(E.type),mt=b(E.internalFormat,lt,gt,E.encoding),Rt=a&&E.isVideoTexture!==!0,Dt=at.__version===void 0||nt===!0;let Wt=A(E,ct,ft);J(34067,E,ft);let B;if(wt){Rt&&Dt&&e.texStorage2D(34067,Wt,mt,ct.width,ct.height);for(let $=0;$<6;$++){B=U[$].mipmaps;for(let et=0;et<B.length;et++){const ut=B[et];E.format!==Qe?lt!==null?Rt?e.compressedTexSubImage2D(34069+$,et,0,0,ut.width,ut.height,lt,ut.data):e.compressedTexImage2D(34069+$,et,mt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?e.texSubImage2D(34069+$,et,0,0,ut.width,ut.height,lt,gt,ut.data):e.texImage2D(34069+$,et,mt,ut.width,ut.height,0,lt,gt,ut.data)}}}else{B=E.mipmaps,Rt&&Dt&&(B.length>0&&Wt++,e.texStorage2D(34067,Wt,mt,U[0].width,U[0].height));for(let $=0;$<6;$++)if(D){Rt?e.texSubImage2D(34069+$,0,0,0,U[$].width,U[$].height,lt,gt,U[$].data):e.texImage2D(34069+$,0,mt,U[$].width,U[$].height,0,lt,gt,U[$].data);for(let et=0;et<B.length;et++){const vt=B[et].image[$].image;Rt?e.texSubImage2D(34069+$,et+1,0,0,vt.width,vt.height,lt,gt,vt.data):e.texImage2D(34069+$,et+1,mt,vt.width,vt.height,0,lt,gt,vt.data)}}else{Rt?e.texSubImage2D(34069+$,0,0,0,lt,gt,U[$]):e.texImage2D(34069+$,0,mt,lt,gt,U[$]);for(let et=0;et<B.length;et++){const ut=B[et];Rt?e.texSubImage2D(34069+$,et+1,0,0,lt,gt,ut.image[$]):e.texImage2D(34069+$,et+1,mt,lt,gt,ut.image[$])}}}S(E,ft)&&L(34067),at.__version=it.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function pt(C,E,j,nt,it){const at=s.convert(j.format,j.encoding),wt=s.convert(j.type),D=b(j.internalFormat,at,wt,j.encoding);n.get(E).__hasExternalTextures||(it===32879||it===35866?e.texImage3D(it,0,D,E.width,E.height,E.depth,0,at,wt,null):e.texImage2D(it,0,D,E.width,E.height,0,at,wt,null)),e.bindFramebuffer(36160,C),Vt(E)?d.framebufferTexture2DMultisampleEXT(36160,nt,it,n.get(j).__webglTexture,0,re(E)):(it===3553||it>=34069&&it<=34074)&&r.framebufferTexture2D(36160,nt,it,n.get(j).__webglTexture,0),e.bindFramebuffer(36160,null)}function Gt(C,E,j){if(r.bindRenderbuffer(36161,C),E.depthBuffer&&!E.stencilBuffer){let nt=33189;if(j||Vt(E)){const it=E.depthTexture;it&&it.isDepthTexture&&(it.type===ti?nt=36012:it.type===Qn&&(nt=33190));const at=re(E);Vt(E)?d.renderbufferStorageMultisampleEXT(36161,at,nt,E.width,E.height):r.renderbufferStorageMultisample(36161,at,nt,E.width,E.height)}else r.renderbufferStorage(36161,nt,E.width,E.height);r.framebufferRenderbuffer(36160,36096,36161,C)}else if(E.depthBuffer&&E.stencilBuffer){const nt=re(E);j&&Vt(E)===!1?r.renderbufferStorageMultisample(36161,nt,35056,E.width,E.height):Vt(E)?d.renderbufferStorageMultisampleEXT(36161,nt,35056,E.width,E.height):r.renderbufferStorage(36161,34041,E.width,E.height),r.framebufferRenderbuffer(36160,33306,36161,C)}else{const nt=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let it=0;it<nt.length;it++){const at=nt[it],wt=s.convert(at.format,at.encoding),D=s.convert(at.type),U=b(at.internalFormat,wt,D,at.encoding),ct=re(E);j&&Vt(E)===!1?r.renderbufferStorageMultisample(36161,ct,U,E.width,E.height):Vt(E)?d.renderbufferStorageMultisampleEXT(36161,ct,U,E.width,E.height):r.renderbufferStorage(36161,U,E.width,E.height)}}r.bindRenderbuffer(36161,null)}function Et(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);const nt=n.get(E.depthTexture).__webglTexture,it=re(E);if(E.depthTexture.format===si)Vt(E)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,nt,0,it):r.framebufferTexture2D(36160,36096,3553,nt,0);else if(E.depthTexture.format===Ki)Vt(E)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,nt,0,it):r.framebufferTexture2D(36160,33306,3553,nt,0);else throw new Error("Unknown depthTexture format")}function _t(C){const E=n.get(C),j=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Et(E.__webglFramebuffer,C)}else if(j){E.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(36160,E.__webglFramebuffer[nt]),E.__webglDepthbuffer[nt]=r.createRenderbuffer(),Gt(E.__webglDepthbuffer[nt],C,!1)}else e.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),Gt(E.__webglDepthbuffer,C,!1);e.bindFramebuffer(36160,null)}function Qt(C,E,j){const nt=n.get(C);E!==void 0&&pt(nt.__webglFramebuffer,C,C.texture,36064,3553),j!==void 0&&_t(C)}function he(C){const E=C.texture,j=n.get(C),nt=n.get(E);C.addEventListener("dispose",X),C.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture()),nt.__version=E.version,o.memory.textures++);const it=C.isWebGLCubeRenderTarget===!0,at=C.isWebGLMultipleRenderTargets===!0,wt=y(C)||a;if(it){j.__webglFramebuffer=[];for(let D=0;D<6;D++)j.__webglFramebuffer[D]=r.createFramebuffer()}else{if(j.__webglFramebuffer=r.createFramebuffer(),at)if(i.drawBuffers){const D=C.texture;for(let U=0,ct=D.length;U<ct;U++){const ft=n.get(D[U]);ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Vt(C)===!1){const D=at?E:[E];j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,j.__webglMultisampledFramebuffer);for(let U=0;U<D.length;U++){const ct=D[U];j.__webglColorRenderbuffer[U]=r.createRenderbuffer(),r.bindRenderbuffer(36161,j.__webglColorRenderbuffer[U]);const ft=s.convert(ct.format,ct.encoding),lt=s.convert(ct.type),gt=b(ct.internalFormat,ft,lt,ct.encoding,C.isXRRenderTarget===!0),mt=re(C);r.renderbufferStorageMultisample(36161,mt,gt,C.width,C.height),r.framebufferRenderbuffer(36160,36064+U,36161,j.__webglColorRenderbuffer[U])}r.bindRenderbuffer(36161,null),C.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),Gt(j.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(36160,null)}}if(it){e.bindTexture(34067,nt.__webglTexture),J(34067,E,wt);for(let D=0;D<6;D++)pt(j.__webglFramebuffer[D],C,E,36064,34069+D);S(E,wt)&&L(34067),e.unbindTexture()}else if(at){const D=C.texture;for(let U=0,ct=D.length;U<ct;U++){const ft=D[U],lt=n.get(ft);e.bindTexture(3553,lt.__webglTexture),J(3553,ft,wt),pt(j.__webglFramebuffer,C,ft,36064+U,3553),S(ft,wt)&&L(3553)}e.unbindTexture()}else{let D=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?D=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(D,nt.__webglTexture),J(D,E,wt),pt(j.__webglFramebuffer,C,E,36064,D),S(E,wt)&&L(D),e.unbindTexture()}C.depthBuffer&&_t(C)}function se(C){const E=y(C)||a,j=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let nt=0,it=j.length;nt<it;nt++){const at=j[nt];if(S(at,E)){const wt=C.isWebGLCubeRenderTarget?34067:3553,D=n.get(at).__webglTexture;e.bindTexture(wt,D),L(wt),e.unbindTexture()}}}function Ae(C){if(a&&C.samples>0&&Vt(C)===!1){const E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],j=C.width,nt=C.height;let it=16384;const at=[],wt=C.stencilBuffer?33306:36096,D=n.get(C),U=C.isWebGLMultipleRenderTargets===!0;if(U)for(let ct=0;ct<E.length;ct++)e.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ct,36161,null),e.bindFramebuffer(36160,D.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ct,3553,null,0);e.bindFramebuffer(36008,D.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,D.__webglFramebuffer);for(let ct=0;ct<E.length;ct++){at.push(36064+ct),C.depthBuffer&&at.push(wt);const ft=D.__ignoreDepthValues!==void 0?D.__ignoreDepthValues:!1;if(ft===!1&&(C.depthBuffer&&(it|=256),C.stencilBuffer&&(it|=1024)),U&&r.framebufferRenderbuffer(36008,36064,36161,D.__webglColorRenderbuffer[ct]),ft===!0&&(r.invalidateFramebuffer(36008,[wt]),r.invalidateFramebuffer(36009,[wt])),U){const lt=n.get(E[ct]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,lt,0)}r.blitFramebuffer(0,0,j,nt,0,0,j,nt,it,9728),p&&r.invalidateFramebuffer(36008,at)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),U)for(let ct=0;ct<E.length;ct++){e.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ct,36161,D.__webglColorRenderbuffer[ct]);const ft=n.get(E[ct]).__webglTexture;e.bindFramebuffer(36160,D.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ct,3553,ft,0)}e.bindFramebuffer(36009,D.__webglMultisampledFramebuffer)}}function re(C){return Math.min(u,C.samples)}function Vt(C){const E=n.get(C);return a&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ze(C){const E=o.render.frame;g.get(C)!==E&&(g.set(C,E),C.update())}function Ne(C,E){const j=C.encoding,nt=C.format,it=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===la||j!==ai&&(j===$t?a===!1?t.has("EXT_sRGB")===!0&&nt===Qe?(C.format=la,C.minFilter=ke,C.generateMipmaps=!1):E=eh.sRGBToLinear(E):(nt!==Qe||it!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",j)),E}this.allocateTextureUnit=V,this.resetTextureUnits=Z,this.setTexture2D=H,this.setTexture2DArray=Q,this.setTexture3D=q,this.setTextureCube=tt,this.rebindTextures=Qt,this.setupRenderTarget=he,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Vt}function t0(r,t,e){const n=e.isWebGL2;function i(s,o=null){let a;if(s===oi)return 5121;if(s===Xu)return 32819;if(s===ju)return 32820;if(s===Wu)return 5120;if(s===Hu)return 5122;if(s===Kc)return 5123;if(s===qu)return 5124;if(s===Qn)return 5125;if(s===ti)return 5126;if(s===Ds)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Yu)return 6406;if(s===Qe)return 6408;if(s===Zu)return 6409;if(s===Ju)return 6410;if(s===si)return 6402;if(s===Ki)return 34041;if(s===Ku)return 6403;if(s===$u)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===la)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Qu)return 36244;if(s===td)return 33319;if(s===ed)return 33320;if(s===nd)return 36249;if(s===oo||s===ao||s===lo||s===co)if(o===$t)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===oo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ao)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===lo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===oo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ao)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===lo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===co)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ya||s===$a||s===Za||s===Ja)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ya)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$a)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Za)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ja)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===id)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ka||s===Qa)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ka)return o===$t?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Qa)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===tl||s===el||s===nl||s===il||s===sl||s===rl||s===ol||s===al||s===ll||s===cl||s===hl||s===ul||s===dl||s===fl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===tl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===el)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===nl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===il)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ol)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===al)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ll)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ul)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===dl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fl)return o===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===pl)return o===$t?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ji?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class e0 extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class mr extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const n0={type:"move"};class Bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const m of t.hand.values()){const f=e.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const x=new mr;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[m.jointName]=x,c.add(x)}const v=c.joints[m.jointName];f!==null&&(v.matrix.fromArray(f.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=f.radius),v.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(n0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class i0 extends en{constructor(t,e,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:si,h!==si&&h!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===si&&(n=Qn),n===void 0&&h===Ki&&(n=ji),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Te,this.minFilter=l!==void 0?l:Te,this.flipY=!1,this.generateMipmaps=!1}}class s0 extends gi{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=null,c=null,h=null,u=null,d=null,p=null;const g=e.getContextAttributes();let m=null,f=null;const v=[],x=[],_=new Ge;_.layers.enable(1),_.viewport=new me;const y=new Ge;y.layers.enable(2),y.viewport=new me;const w=[_,y],S=new e0;S.layers.enable(1),S.layers.enable(2);let L=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let H=v[O];return H===void 0&&(H=new Bo,v[O]=H),H.getTargetRaySpace()},this.getControllerGrip=function(O){let H=v[O];return H===void 0&&(H=new Bo,v[O]=H),H.getGripSpace()},this.getHand=function(O){let H=v[O];return H===void 0&&(H=new Bo,v[O]=H),H.getHandSpace()};function A(O){const H=x.indexOf(O.inputSource);if(H===-1)return;const Q=v[H];Q!==void 0&&Q.dispatchEvent({type:O.type,data:O.inputSource})}function I(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",G);for(let O=0;O<v.length;O++){const H=x[O];H!==null&&(x[O]=null,v[O].disconnect(H))}L=null,b=null,t.setRenderTarget(m),d=null,u=null,h=null,i=null,f=null,V.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",I),i.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const H={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,H),i.updateRenderState({baseLayer:d}),f=new li(d.framebufferWidth,d.framebufferHeight,{format:Qe,type:oi,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let H=null,Q=null,q=null;g.depth&&(q=g.stencil?35056:33190,H=g.stencil?Ki:si,Q=g.stencil?ji:Qn);const tt={colorFormat:32856,depthFormat:q,scaleFactor:s};h=new XRWebGLBinding(i,e),u=h.createProjectionLayer(tt),i.updateRenderState({layers:[u]}),f=new li(u.textureWidth,u.textureHeight,{format:Qe,type:oi,depthTexture:new i0(u.textureWidth,u.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const ht=t.properties.get(f);ht.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),V.setContext(i),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function G(O){for(let H=0;H<O.removed.length;H++){const Q=O.removed[H],q=x.indexOf(Q);q>=0&&(x[q]=null,v[q].dispatchEvent({type:"disconnected",data:Q}))}for(let H=0;H<O.added.length;H++){const Q=O.added[H];let q=x.indexOf(Q);if(q===-1){for(let ht=0;ht<v.length;ht++)if(ht>=x.length){x.push(Q),q=ht;break}else if(x[ht]===null){x[ht]=Q,q=ht;break}if(q===-1)break}const tt=v[q];tt&&tt.dispatchEvent({type:"connected",data:Q})}}const X=new z,P=new z;function R(O,H,Q){X.setFromMatrixPosition(H.matrixWorld),P.setFromMatrixPosition(Q.matrixWorld);const q=X.distanceTo(P),tt=H.projectionMatrix.elements,ht=Q.projectionMatrix.elements,yt=tt[14]/(tt[10]-1),J=tt[14]/(tt[10]+1),zt=(tt[9]+1)/tt[5],Mt=(tt[9]-1)/tt[5],bt=(tt[8]-1)/tt[0],pt=(ht[8]+1)/ht[0],Gt=yt*bt,Et=yt*pt,_t=q/(-bt+pt),Qt=_t*-bt;H.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Qt),O.translateZ(_t),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const he=yt+_t,se=J+_t,Ae=Gt-Qt,re=Et+(q-Qt),Vt=zt*J/se*he,ze=Mt*J/se*he;O.projectionMatrix.makePerspective(Ae,re,Vt,ze,he,se)}function N(O,H){H===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(H.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;S.near=y.near=_.near=O.near,S.far=y.far=_.far=O.far,(L!==S.near||b!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,b=S.far);const H=O.parent,Q=S.cameras;N(S,H);for(let tt=0;tt<Q.length;tt++)N(Q[tt],H);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),O.matrix.copy(S.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);const q=O.children;for(let tt=0,ht=q.length;tt<ht;tt++)q[tt].updateMatrixWorld(!0);Q.length===2?R(S,_,y):S.projectionMatrix.copy(_.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(O){u!==null&&(u.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)};let F=null;function Z(O,H){if(c=H.getViewerPose(l||o),p=H,c!==null){const Q=c.views;d!==null&&(t.setRenderTargetFramebuffer(f,d.framebuffer),t.setRenderTarget(f));let q=!1;Q.length!==S.cameras.length&&(S.cameras.length=0,q=!0);for(let tt=0;tt<Q.length;tt++){const ht=Q[tt];let yt=null;if(d!==null)yt=d.getViewport(ht);else{const zt=h.getViewSubImage(u,ht);yt=zt.viewport,tt===0&&(t.setRenderTargetTextures(f,zt.colorTexture,u.ignoreDepthValues?void 0:zt.depthStencilTexture),t.setRenderTarget(f))}let J=w[tt];J===void 0&&(J=new Ge,J.layers.enable(tt),J.viewport=new me,w[tt]=J),J.matrix.fromArray(ht.transform.matrix),J.projectionMatrix.fromArray(ht.projectionMatrix),J.viewport.set(yt.x,yt.y,yt.width,yt.height),tt===0&&S.matrix.copy(J.matrix),q===!0&&S.cameras.push(J)}}for(let Q=0;Q<v.length;Q++){const q=x[Q],tt=v[Q];q!==null&&tt!==void 0&&tt.update(q,H,l||o)}F&&F(O,H),p=null}const V=new lh;V.setAnimationLoop(Z),this.setAnimationLoop=function(O){F=O},this.dispose=function(){}}}function r0(r,t){function e(m,f){m.fogColor.value.copy(f.color),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,v,x,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(m,f):f.isMeshToonMaterial?(i(m,f),h(m,f)):f.isMeshPhongMaterial?(i(m,f),c(m,f)):f.isMeshStandardMaterial?(i(m,f),u(m,f),f.isMeshPhysicalMaterial&&d(m,f,_)):f.isMeshMatcapMaterial?(i(m,f),p(m,f)):f.isMeshDepthMaterial?i(m,f):f.isMeshDistanceMaterial?(i(m,f),g(m,f)):f.isMeshNormalMaterial?i(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?a(m,f,v,x):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===He&&(m.bumpScale.value*=-1)),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===He&&m.normalScale.value.negate()),f.specularMap&&(m.specularMap.value=f.specularMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=t.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const y=r.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*y}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity);let x;f.map?x=f.map:f.specularMap?x=f.specularMap:f.displacementMap?x=f.displacementMap:f.normalMap?x=f.normalMap:f.bumpMap?x=f.bumpMap:f.roughnessMap?x=f.roughnessMap:f.metalnessMap?x=f.metalnessMap:f.alphaMap?x=f.alphaMap:f.emissiveMap?x=f.emissiveMap:f.clearcoatMap?x=f.clearcoatMap:f.clearcoatNormalMap?x=f.clearcoatNormalMap:f.clearcoatRoughnessMap?x=f.clearcoatRoughnessMap:f.iridescenceMap?x=f.iridescenceMap:f.iridescenceThicknessMap?x=f.iridescenceThicknessMap:f.specularIntensityMap?x=f.specularIntensityMap:f.specularColorMap?x=f.specularColorMap:f.transmissionMap?x=f.transmissionMap:f.thicknessMap?x=f.thicknessMap:f.sheenColorMap?x=f.sheenColorMap:f.sheenRoughnessMap&&(x=f.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix));let _;f.aoMap?_=f.aoMap:f.lightMap&&(_=f.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uv2Transform.value.copy(_.matrix))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function a(m,f,v,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=x*.5,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v;f.map?v=f.map:f.alphaMap&&(v=f.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.roughness.value=f.roughness,m.metalness.value=f.metalness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),m.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===He&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap)}function p(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){m.referencePosition.value.copy(f.referencePosition),m.nearDistance.value=f.nearDistance,m.farDistance.value=f.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function o0(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(35375):0;function l(x,_){const y=_.program;n.uniformBlockBinding(x,y)}function c(x,_){let y=i[x.id];y===void 0&&(g(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",f));const w=_.program;n.updateUBOMapping(x,w);const S=t.render.frame;s[x.id]!==S&&(d(x),s[x.id]=S)}function h(x){const _=u();x.__bindingPointIndex=_;const y=r.createBuffer(),w=x.__size,S=x.usage;return r.bindBuffer(35345,y),r.bufferData(35345,w,S),r.bindBuffer(35345,null),r.bindBufferBase(35345,_,y),y}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=i[x.id],y=x.uniforms,w=x.__cache;r.bindBuffer(35345,_);for(let S=0,L=y.length;S<L;S++){const b=y[S];if(p(b,S,w)===!0){const A=b.value,I=b.__offset;typeof A=="number"?(b.__data[0]=A,r.bufferSubData(35345,I,b.__data)):(b.value.isMatrix3?(b.__data[0]=b.value.elements[0],b.__data[1]=b.value.elements[1],b.__data[2]=b.value.elements[2],b.__data[3]=b.value.elements[0],b.__data[4]=b.value.elements[3],b.__data[5]=b.value.elements[4],b.__data[6]=b.value.elements[5],b.__data[7]=b.value.elements[0],b.__data[8]=b.value.elements[6],b.__data[9]=b.value.elements[7],b.__data[10]=b.value.elements[8],b.__data[11]=b.value.elements[0]):A.toArray(b.__data),r.bufferSubData(35345,I,b.__data))}}r.bindBuffer(35345,null)}function p(x,_,y){const w=x.value;if(y[_]===void 0)return typeof w=="number"?y[_]=w:y[_]=w.clone(),!0;if(typeof w=="number"){if(y[_]!==w)return y[_]=w,!0}else{const S=y[_];if(S.equals(w)===!1)return S.copy(w),!0}return!1}function g(x){const _=x.uniforms;let y=0;const w=16;let S=0;for(let L=0,b=_.length;L<b;L++){const A=_[L],I=m(A);if(A.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=y,L>0){S=y%w;const G=w-S;S!==0&&G-I.boundary<0&&(y+=w-S,A.__offset=y)}y+=I.storage}return S=y%w,S>0&&(y+=w-S),x.__size=y,x.__cache={},this}function m(x){const _=x.value,y={boundary:0,storage:0};return typeof _=="number"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function f(x){const _=x.target;_.removeEventListener("dispose",f);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function v(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:v}}function a0(){const r=Br("canvas");return r.style.display="block",r}function ph(r={}){this.isWebGLRenderer=!0;const t=r.canvas!==void 0?r.canvas:a0(),e=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let u=null,d=null;const p=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ai,this.physicallyCorrectLights=!1,this.toneMapping=Cn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let f=!1,v=0,x=0,_=null,y=-1,w=null;const S=new me,L=new me;let b=null,A=t.width,I=t.height,G=1,X=null,P=null;const R=new me(0,0,A,I),N=new me(0,0,A,I);let F=!1;const Z=new wa;let V=!1,O=!1,H=null;const Q=new Jt,q=new rt,tt=new z,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function yt(){return _===null?G:1}let J=e;function zt(T,W){for(let Y=0;Y<T.length;Y++){const k=T[Y],K=t.getContext(k,W);if(K!==null)return K}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xa}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",Rt,!1),J===null){const W=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&W.shift(),J=zt(W,T),J===null)throw zt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Mt,bt,pt,Gt,Et,_t,Qt,he,se,Ae,re,Vt,ze,Ne,C,E,j,nt,it,at,wt,D,U,ct;function ft(){Mt=new xm(J),bt=new dm(J,Mt,r),Mt.init(bt),D=new t0(J,Mt,bt),pt=new Kg(J,Mt,bt),Gt=new wm,Et=new Bg,_t=new Qg(J,Mt,pt,Et,bt,D,Gt),Qt=new pm(m),he=new vm(m),se=new Ld(J,bt),U=new hm(J,Mt,se,bt),Ae=new _m(J,se,Gt,U),re=new Em(J,Ae,se,Gt),it=new Sm(J,bt,_t),E=new fm(Et),Vt=new Og(m,Qt,he,Mt,bt,U,E),ze=new r0(m,Et),Ne=new kg,C=new Xg(Mt,bt),nt=new cm(m,Qt,he,pt,re,h,o),j=new Jg(m,re,bt),ct=new o0(J,Gt,bt,pt),at=new um(J,Mt,Gt,bt),wt=new ym(J,Mt,Gt,bt),Gt.programs=Vt.programs,m.capabilities=bt,m.extensions=Mt,m.properties=Et,m.renderLists=Ne,m.shadowMap=j,m.state=pt,m.info=Gt}ft();const lt=new s0(m,J);this.xr=lt,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const T=Mt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Mt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(A,I,!1))},this.getSize=function(T){return T.set(A,I)},this.setSize=function(T,W,Y){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=T,I=W,t.width=Math.floor(T*G),t.height=Math.floor(W*G),Y!==!1&&(t.style.width=T+"px",t.style.height=W+"px"),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(A*G,I*G).floor()},this.setDrawingBufferSize=function(T,W,Y){A=T,I=W,G=Y,t.width=Math.floor(T*Y),t.height=Math.floor(W*Y),this.setViewport(0,0,T,W)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,W,Y,k){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,W,Y,k),pt.viewport(S.copy(R).multiplyScalar(G).floor())},this.getScissor=function(T){return T.copy(N)},this.setScissor=function(T,W,Y,k){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,W,Y,k),pt.scissor(L.copy(N).multiplyScalar(G).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(T){pt.setScissorTest(F=T)},this.setOpaqueSort=function(T){X=T},this.setTransparentSort=function(T){P=T},this.getClearColor=function(T){return T.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(T=!0,W=!0,Y=!0){let k=0;T&&(k|=16384),W&&(k|=256),Y&&(k|=1024),J.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Rt,!1),Ne.dispose(),C.dispose(),Et.dispose(),Qt.dispose(),he.dispose(),re.dispose(),U.dispose(),ct.dispose(),Vt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",ut),lt.removeEventListener("sessionend",vt),H&&(H.dispose(),H=null),Ot.stop()};function gt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const T=Gt.autoReset,W=j.enabled,Y=j.autoUpdate,k=j.needsUpdate,K=j.type;ft(),Gt.autoReset=T,j.enabled=W,j.autoUpdate=Y,j.needsUpdate=k,j.type=K}function Rt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Dt(T){const W=T.target;W.removeEventListener("dispose",Dt),Wt(W)}function Wt(T){B(T),Et.remove(T)}function B(T){const W=Et.get(T).programs;W!==void 0&&(W.forEach(function(Y){Vt.releaseProgram(Y)}),T.isShaderMaterial&&Vt.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,Y,k,K,xt){W===null&&(W=ht);const St=K.isMesh&&K.matrixWorld.determinant()<0,Ct=$h(T,W,Y,k,K);pt.setMaterial(k,St);let Tt=Y.index;const Bt=Y.attributes.position;if(Tt===null){if(Bt===void 0||Bt.count===0)return}else if(Tt.count===0)return;let Pt=1;k.wireframe===!0&&(Tt=Ae.getWireframeAttribute(Y),Pt=2),U.setup(K,k,Ct,Y,Tt);let Nt,Yt=at;Tt!==null&&(Nt=se.get(Tt),Yt=wt,Yt.setIndex(Nt));const Vn=Tt!==null?Tt.count:Bt.count,_i=Y.drawRange.start*Pt,yi=Y.drawRange.count*Pt,rn=xt!==null?xt.start*Pt:0,Ut=xt!==null?xt.count*Pt:1/0,wi=Math.max(_i,rn),te=Math.min(Vn,_i+yi,rn+Ut)-1,Oe=Math.max(0,te-wi+1);if(Oe!==0){if(K.isMesh)k.wireframe===!0?(pt.setLineWidth(k.wireframeLinewidth*yt()),Yt.setMode(1)):Yt.setMode(4);else if(K.isLine){let Ln=k.linewidth;Ln===void 0&&(Ln=1),pt.setLineWidth(Ln*yt()),K.isLineSegments?Yt.setMode(1):K.isLineLoop?Yt.setMode(2):Yt.setMode(3)}else K.isPoints?Yt.setMode(0):K.isSprite&&Yt.setMode(4);if(K.isInstancedMesh)Yt.renderInstances(wi,Oe,K.count);else if(Y.isInstancedBufferGeometry){const Ln=Math.min(Y.instanceCount,Y._maxInstanceCount);Yt.renderInstances(wi,Oe,Ln)}else Yt.render(wi,Oe)}},this.compile=function(T,W){function Y(k,K,xt){k.transparent===!0&&k.side===Ve?(k.side=He,k.needsUpdate=!0,Fe(k,K,xt),k.side=$i,k.needsUpdate=!0,Fe(k,K,xt),k.side=Ve):Fe(k,K,xt)}d=C.get(T),d.init(),g.push(d),T.traverseVisible(function(k){k.isLight&&k.layers.test(W.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights(m.physicallyCorrectLights),T.traverse(function(k){const K=k.material;if(K)if(Array.isArray(K))for(let xt=0;xt<K.length;xt++){const St=K[xt];Y(St,T,k)}else Y(K,T,k)}),g.pop(),d=null};let $=null;function et(T){$&&$(T)}function ut(){Ot.stop()}function vt(){Ot.start()}const Ot=new lh;Ot.setAnimationLoop(et),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(T){$=T,lt.setAnimationLoop(T),T===null?Ot.stop():Ot.start()},lt.addEventListener("sessionstart",ut),lt.addEventListener("sessionend",vt),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(W),W=lt.getCamera()),T.isScene===!0&&T.onBeforeRender(m,T,W,_),d=C.get(T,g.length),d.init(),g.push(d),Q.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(Q),O=this.localClippingEnabled,V=E.init(this.clippingPlanes,O,W),u=Ne.get(T,p.length),u.init(),p.push(u),ue(T,W,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(X,P),V===!0&&E.beginShadows();const Y=d.state.shadowsArray;if(j.render(Y,T,W),V===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),nt.render(u,T),d.setupLights(m.physicallyCorrectLights),W.isArrayCamera){const k=W.cameras;for(let K=0,xt=k.length;K<xt;K++){const St=k[K];ye(u,T,St,St.viewport)}}else ye(u,T,W);_!==null&&(_t.updateMultisampleRenderTarget(_),_t.updateRenderTargetMipmap(_)),T.isScene===!0&&T.onAfterRender(m,T,W),U.resetDefaultState(),y=-1,w=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,p.pop(),p.length>0?u=p[p.length-1]:u=null};function ue(T,W,Y,k){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){k&&tt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Q);const St=re.update(T),Ct=T.material;Ct.visible&&u.push(T,St,Ct,Y,tt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Gt.render.frame&&(T.skeleton.update(),T.skeleton.frame=Gt.render.frame),!T.frustumCulled||Z.intersectsObject(T))){k&&tt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Q);const St=re.update(T),Ct=T.material;if(Array.isArray(Ct)){const Tt=St.groups;for(let Bt=0,Pt=Tt.length;Bt<Pt;Bt++){const Nt=Tt[Bt],Yt=Ct[Nt.materialIndex];Yt&&Yt.visible&&u.push(T,St,Yt,Y,tt.z,Nt)}}else Ct.visible&&u.push(T,St,Ct,Y,tt.z,null)}}const xt=T.children;for(let St=0,Ct=xt.length;St<Ct;St++)ue(xt[St],W,Y,k)}function ye(T,W,Y,k){const K=T.opaque,xt=T.transmissive,St=T.transparent;d.setupLightsView(Y),xt.length>0&&Gn(K,W,Y),k&&pt.viewport(S.copy(k)),K.length>0&&qt(K,W,Y),xt.length>0&&qt(xt,W,Y),St.length>0&&qt(St,W,Y),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Gn(T,W,Y){const k=bt.isWebGL2;H===null&&(H=new li(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")?Ds:oi,minFilter:qr,samples:k&&s===!0?4:0})),m.getDrawingBufferSize(q),k?H.setSize(q.x,q.y):H.setSize(ca(q.x),ca(q.y));const K=m.getRenderTarget();m.setRenderTarget(H),m.clear();const xt=m.toneMapping;m.toneMapping=Cn,qt(T,W,Y),m.toneMapping=xt,_t.updateMultisampleRenderTarget(H),_t.updateRenderTargetMipmap(H),m.setRenderTarget(K)}function qt(T,W,Y){const k=W.isScene===!0?W.overrideMaterial:null;for(let K=0,xt=T.length;K<xt;K++){const St=T[K],Ct=St.object,Tt=St.geometry,Bt=k===null?St.material:k,Pt=St.group;Ct.layers.test(Y.layers)&&pn(Ct,W,Y,Tt,Bt,Pt)}}function pn(T,W,Y,k,K,xt){T.onBeforeRender(m,W,Y,k,K,xt),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(m,W,Y,k,T,xt),K.transparent===!0&&K.side===Ve?(K.side=He,K.needsUpdate=!0,m.renderBufferDirect(Y,W,k,K,T,xt),K.side=$i,K.needsUpdate=!0,m.renderBufferDirect(Y,W,k,K,T,xt),K.side=Ve):m.renderBufferDirect(Y,W,k,K,T,xt),T.onAfterRender(m,W,Y,k,K,xt)}function Fe(T,W,Y){W.isScene!==!0&&(W=ht);const k=Et.get(T),K=d.state.lights,xt=d.state.shadowsArray,St=K.state.version,Ct=Vt.getParameters(T,K.state,xt,W,Y),Tt=Vt.getProgramCacheKey(Ct);let Bt=k.programs;k.environment=T.isMeshStandardMaterial?W.environment:null,k.fog=W.fog,k.envMap=(T.isMeshStandardMaterial?he:Qt).get(T.envMap||k.environment),Bt===void 0&&(T.addEventListener("dispose",Dt),Bt=new Map,k.programs=Bt);let Pt=Bt.get(Tt);if(Pt!==void 0){if(k.currentProgram===Pt&&k.lightsStateVersion===St)return za(T,Ct),Pt}else Ct.uniforms=Vt.getUniforms(T),T.onBuild(Y,Ct,m),T.onBeforeCompile(Ct,m),Pt=Vt.acquireProgram(Ct,Tt),Bt.set(Tt,Pt),k.uniforms=Ct.uniforms;const Nt=k.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Nt.clippingPlanes=E.uniform),za(T,Ct),k.needsLights=Jh(T),k.lightsStateVersion=St,k.needsLights&&(Nt.ambientLightColor.value=K.state.ambient,Nt.lightProbe.value=K.state.probe,Nt.directionalLights.value=K.state.directional,Nt.directionalLightShadows.value=K.state.directionalShadow,Nt.spotLights.value=K.state.spot,Nt.spotLightShadows.value=K.state.spotShadow,Nt.rectAreaLights.value=K.state.rectArea,Nt.ltc_1.value=K.state.rectAreaLTC1,Nt.ltc_2.value=K.state.rectAreaLTC2,Nt.pointLights.value=K.state.point,Nt.pointLightShadows.value=K.state.pointShadow,Nt.hemisphereLights.value=K.state.hemi,Nt.directionalShadowMap.value=K.state.directionalShadowMap,Nt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Nt.spotShadowMap.value=K.state.spotShadowMap,Nt.spotLightMatrix.value=K.state.spotLightMatrix,Nt.spotLightMap.value=K.state.spotLightMap,Nt.pointShadowMap.value=K.state.pointShadowMap,Nt.pointShadowMatrix.value=K.state.pointShadowMatrix);const Yt=Pt.getUniforms(),Vn=Dr.seqWithValue(Yt.seq,Nt);return k.currentProgram=Pt,k.uniformsList=Vn,Pt}function za(T,W){const Y=Et.get(T);Y.outputEncoding=W.outputEncoding,Y.instancing=W.instancing,Y.skinning=W.skinning,Y.morphTargets=W.morphTargets,Y.morphNormals=W.morphNormals,Y.morphColors=W.morphColors,Y.morphTargetsCount=W.morphTargetsCount,Y.numClippingPlanes=W.numClippingPlanes,Y.numIntersection=W.numClipIntersection,Y.vertexAlphas=W.vertexAlphas,Y.vertexTangents=W.vertexTangents,Y.toneMapping=W.toneMapping}function $h(T,W,Y,k,K){W.isScene!==!0&&(W=ht),_t.resetTextureUnits();const xt=W.fog,St=k.isMeshStandardMaterial?W.environment:null,Ct=_===null?m.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:ai,Tt=(k.isMeshStandardMaterial?he:Qt).get(k.envMap||St),Bt=k.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Pt=!!k.normalMap&&!!Y.attributes.tangent,Nt=!!Y.morphAttributes.position,Yt=!!Y.morphAttributes.normal,Vn=!!Y.morphAttributes.color,_i=k.toneMapped?m.toneMapping:Cn,yi=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,rn=yi!==void 0?yi.length:0,Ut=Et.get(k),wi=d.state.lights;if(V===!0&&(O===!0||T!==w)){const Ce=T===w&&k.id===y;E.setState(k,T,Ce)}let te=!1;k.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==wi.state.version||Ut.outputEncoding!==Ct||K.isInstancedMesh&&Ut.instancing===!1||!K.isInstancedMesh&&Ut.instancing===!0||K.isSkinnedMesh&&Ut.skinning===!1||!K.isSkinnedMesh&&Ut.skinning===!0||Ut.envMap!==Tt||k.fog===!0&&Ut.fog!==xt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==E.numPlanes||Ut.numIntersection!==E.numIntersection)||Ut.vertexAlphas!==Bt||Ut.vertexTangents!==Pt||Ut.morphTargets!==Nt||Ut.morphNormals!==Yt||Ut.morphColors!==Vn||Ut.toneMapping!==_i||bt.isWebGL2===!0&&Ut.morphTargetsCount!==rn)&&(te=!0):(te=!0,Ut.__version=k.version);let Oe=Ut.currentProgram;te===!0&&(Oe=Fe(k,W,K));let Ln=!1,cs=!1,no=!1;const be=Oe.getUniforms(),Wn=Ut.uniforms;if(pt.useProgram(Oe.program)&&(Ln=!0,cs=!0,no=!0),k.id!==y&&(y=k.id,cs=!0),Ln||w!==T){if(be.setValue(J,"projectionMatrix",T.projectionMatrix),bt.logarithmicDepthBuffer&&be.setValue(J,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),w!==T&&(w=T,cs=!0,no=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const Ce=be.map.cameraPosition;Ce!==void 0&&Ce.setValue(J,tt.setFromMatrixPosition(T.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&be.setValue(J,"isOrthographic",T.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||K.isSkinnedMesh)&&be.setValue(J,"viewMatrix",T.matrixWorldInverse)}if(K.isSkinnedMesh){be.setOptional(J,K,"bindMatrix"),be.setOptional(J,K,"bindMatrixInverse");const Ce=K.skeleton;Ce&&(bt.floatVertexTextures?(Ce.boneTexture===null&&Ce.computeBoneTexture(),be.setValue(J,"boneTexture",Ce.boneTexture,_t),be.setValue(J,"boneTextureSize",Ce.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const io=Y.morphAttributes;if((io.position!==void 0||io.normal!==void 0||io.color!==void 0&&bt.isWebGL2===!0)&&it.update(K,Y,k,Oe),(cs||Ut.receiveShadow!==K.receiveShadow)&&(Ut.receiveShadow=K.receiveShadow,be.setValue(J,"receiveShadow",K.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Wn.envMap.value=Tt,Wn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),cs&&(be.setValue(J,"toneMappingExposure",m.toneMappingExposure),Ut.needsLights&&Zh(Wn,no),xt&&k.fog===!0&&ze.refreshFogUniforms(Wn,xt),ze.refreshMaterialUniforms(Wn,k,G,I,H),Dr.upload(J,Ut.uniformsList,Wn,_t)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Dr.upload(J,Ut.uniformsList,Wn,_t),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&be.setValue(J,"center",K.center),be.setValue(J,"modelViewMatrix",K.modelViewMatrix),be.setValue(J,"normalMatrix",K.normalMatrix),be.setValue(J,"modelMatrix",K.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ce=k.uniformsGroups;for(let so=0,Kh=Ce.length;so<Kh;so++)if(bt.isWebGL2){const Na=Ce[so];ct.update(Na,Oe),ct.bind(Na,Oe)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Oe}function Zh(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function Jh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(T,W,Y){Et.get(T.texture).__webglTexture=W,Et.get(T.depthTexture).__webglTexture=Y;const k=Et.get(T);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=Y===void 0,k.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,W){const Y=Et.get(T);Y.__webglFramebuffer=W,Y.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(T,W=0,Y=0){_=T,v=W,x=Y;let k=!0,K=null,xt=!1,St=!1;if(T){const Tt=Et.get(T);Tt.__useDefaultFramebuffer!==void 0?(pt.bindFramebuffer(36160,null),k=!1):Tt.__webglFramebuffer===void 0?_t.setupRenderTarget(T):Tt.__hasExternalTextures&&_t.rebindTextures(T,Et.get(T.texture).__webglTexture,Et.get(T.depthTexture).__webglTexture);const Bt=T.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(St=!0);const Pt=Et.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(K=Pt[W],xt=!0):bt.isWebGL2&&T.samples>0&&_t.useMultisampledRTT(T)===!1?K=Et.get(T).__webglMultisampledFramebuffer:K=Pt,S.copy(T.viewport),L.copy(T.scissor),b=T.scissorTest}else S.copy(R).multiplyScalar(G).floor(),L.copy(N).multiplyScalar(G).floor(),b=F;if(pt.bindFramebuffer(36160,K)&&bt.drawBuffers&&k&&pt.drawBuffers(T,K),pt.viewport(S),pt.scissor(L),pt.setScissorTest(b),xt){const Tt=Et.get(T.texture);J.framebufferTexture2D(36160,36064,34069+W,Tt.__webglTexture,Y)}else if(St){const Tt=Et.get(T.texture),Bt=W||0;J.framebufferTextureLayer(36160,36064,Tt.__webglTexture,Y||0,Bt)}y=-1},this.readRenderTargetPixels=function(T,W,Y,k,K,xt,St){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Et.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(Ct=Ct[St]),Ct){pt.bindFramebuffer(36160,Ct);try{const Tt=T.texture,Bt=Tt.format,Pt=Tt.type;if(Bt!==Qe&&D.convert(Bt)!==J.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Nt=Pt===Ds&&(Mt.has("EXT_color_buffer_half_float")||bt.isWebGL2&&Mt.has("EXT_color_buffer_float"));if(Pt!==oi&&D.convert(Pt)!==J.getParameter(35738)&&!(Pt===ti&&(bt.isWebGL2||Mt.has("OES_texture_float")||Mt.has("WEBGL_color_buffer_float")))&&!Nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-k&&Y>=0&&Y<=T.height-K&&J.readPixels(W,Y,k,K,D.convert(Bt),D.convert(Pt),xt)}finally{const Tt=_!==null?Et.get(_).__webglFramebuffer:null;pt.bindFramebuffer(36160,Tt)}}},this.copyFramebufferToTexture=function(T,W,Y=0){const k=Math.pow(2,-Y),K=Math.floor(W.image.width*k),xt=Math.floor(W.image.height*k);_t.setTexture2D(W,0),J.copyTexSubImage2D(3553,Y,0,0,T.x,T.y,K,xt),pt.unbindTexture()},this.copyTextureToTexture=function(T,W,Y,k=0){const K=W.image.width,xt=W.image.height,St=D.convert(Y.format),Ct=D.convert(Y.type);_t.setTexture2D(Y,0),J.pixelStorei(37440,Y.flipY),J.pixelStorei(37441,Y.premultiplyAlpha),J.pixelStorei(3317,Y.unpackAlignment),W.isDataTexture?J.texSubImage2D(3553,k,T.x,T.y,K,xt,St,Ct,W.image.data):W.isCompressedTexture?J.compressedTexSubImage2D(3553,k,T.x,T.y,W.mipmaps[0].width,W.mipmaps[0].height,St,W.mipmaps[0].data):J.texSubImage2D(3553,k,T.x,T.y,St,Ct,W.image),k===0&&Y.generateMipmaps&&J.generateMipmap(3553),pt.unbindTexture()},this.copyTextureToTexture3D=function(T,W,Y,k,K=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xt=T.max.x-T.min.x+1,St=T.max.y-T.min.y+1,Ct=T.max.z-T.min.z+1,Tt=D.convert(k.format),Bt=D.convert(k.type);let Pt;if(k.isData3DTexture)_t.setTexture3D(k,0),Pt=32879;else if(k.isDataArrayTexture)_t.setTexture2DArray(k,0),Pt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(37440,k.flipY),J.pixelStorei(37441,k.premultiplyAlpha),J.pixelStorei(3317,k.unpackAlignment);const Nt=J.getParameter(3314),Yt=J.getParameter(32878),Vn=J.getParameter(3316),_i=J.getParameter(3315),yi=J.getParameter(32877),rn=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;J.pixelStorei(3314,rn.width),J.pixelStorei(32878,rn.height),J.pixelStorei(3316,T.min.x),J.pixelStorei(3315,T.min.y),J.pixelStorei(32877,T.min.z),Y.isDataTexture||Y.isData3DTexture?J.texSubImage3D(Pt,K,W.x,W.y,W.z,xt,St,Ct,Tt,Bt,rn.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(Pt,K,W.x,W.y,W.z,xt,St,Ct,Tt,rn.data)):J.texSubImage3D(Pt,K,W.x,W.y,W.z,xt,St,Ct,Tt,Bt,rn),J.pixelStorei(3314,Nt),J.pixelStorei(32878,Yt),J.pixelStorei(3316,Vn),J.pixelStorei(3315,_i),J.pixelStorei(32877,yi),K===0&&k.generateMipmaps&&J.generateMipmap(Pt),pt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?_t.setTextureCube(T,0):T.isData3DTexture?_t.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?_t.setTexture2DArray(T,0):_t.setTexture2D(T,0),pt.unbindTexture()},this.resetState=function(){v=0,x=0,_=null,pt.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class l0 extends ph{}l0.prototype.isWebGL1Renderer=!0;class c0 extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class mh extends Un{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Jl=new z,Kl=new z,Ql=new Jt,Uo=new _a,gr=new jr;class h0 extends ge{constructor(t=new De,e=new mh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Jl.fromBufferAttribute(e,i-1),Kl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Jl.distanceTo(Kl);t.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(i),gr.radius+=s,t.ray.intersectsSphere(gr)===!1)return;Ql.copy(i).invert(),Uo.copy(t.ray).applyMatrix4(Ql);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new z,h=new z,u=new z,d=new z,p=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const v=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let _=v,y=x-1;_<y;_+=p){const w=g.getX(_),S=g.getX(_+1);if(c.fromBufferAttribute(f,w),h.fromBufferAttribute(f,S),Uo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const b=t.ray.origin.distanceTo(d);b<t.near||b>t.far||e.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let _=v,y=x-1;_<y;_+=p){if(c.fromBufferAttribute(f,_),h.fromBufferAttribute(f,_+1),Uo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const S=t.ray.origin.distanceTo(d);S<t.near||S>t.far||e.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class fn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,p=(o-h)/d;return(i+p)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new rt:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new z,i=[],s=[],o=[],a=new z,l=new Jt;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new z)}s[0]=new z,o[0]=new z;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Me(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(i[p],s[p])}if(e===!0){let p=Math.acos(Me(s[0].dot(s[t]),-1,1));p/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ba extends fn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new rt,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class u0 extends ba{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Sa(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,i(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const vr=new z,ko=new Sa,Go=new Sa,Vo=new Sa;class gh extends fn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new z){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(vr.subVectors(i[0],i[1]).add(i[0]),c=vr);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(vr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=vr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(h),p);m<1e-4&&(m=1),g<1e-4&&(g=m),f<1e-4&&(f=m),ko.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,m,f),Go.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,m,f),Vo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,m,f)}else this.curveType==="catmullrom"&&(ko.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Go.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Vo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ko.calc(l),Go.calc(l),Vo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new z().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function tc(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function d0(r,t){const e=1-r;return e*e*t}function f0(r,t){return 2*(1-r)*r*t}function p0(r,t){return r*r*t}function bs(r,t,e,n){return d0(r,t)+f0(r,e)+p0(r,n)}function m0(r,t){const e=1-r;return e*e*e*t}function g0(r,t){const e=1-r;return 3*e*e*r*t}function v0(r,t){return 3*(1-r)*r*r*t}function x0(r,t){return r*r*r*t}function Ss(r,t,e,n,i){return m0(r,t)+g0(r,e)+v0(r,n)+x0(r,i)}class vh extends fn{constructor(t=new rt,e=new rt,n=new rt,i=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new rt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ss(t,i.x,s.x,o.x,a.x),Ss(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _0 extends fn{constructor(t=new z,e=new z,n=new z,i=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new z){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ss(t,i.x,s.x,o.x,a.x),Ss(t,i.y,s.y,o.y,a.y),Ss(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ea extends fn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new rt;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class y0 extends fn{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xh extends fn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(bs(t,i.x,s.x,o.x),bs(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class w0 extends fn{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(bs(t,i.x,s.x,o.x),bs(t,i.y,s.y,o.y),bs(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _h extends fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(tc(a,l.x,c.x,h.x,u.x),tc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new rt().fromArray(i))}return this}}var M0=Object.freeze({__proto__:null,ArcCurve:u0,CatmullRomCurve3:gh,CubicBezierCurve:vh,CubicBezierCurve3:_0,EllipseCurve:ba,LineCurve:Ea,LineCurve3:y0,QuadraticBezierCurve:xh,QuadraticBezierCurve3:w0,SplineCurve:_h});class b0 extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Ea(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new M0[i.type]().fromJSON(i))}return this}}class ua extends b0{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ea(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new xh(this.currentPoint.clone(),new rt(t,e),new rt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new vh(this.currentPoint.clone(),new rt(t,e),new rt(n,i),new rt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new _h(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new ba(t,e,n,i,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ur extends De{constructor(t=1,e=8,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new z,h=new rt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(a,3)),this.setAttribute("uv",new Kt(l,2))}static fromJSON(t){return new Ur(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ni extends De{constructor(t=1,e=1,n=1,i=8,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],p=[];let g=0;const m=[],f=n/2;let v=0;x(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(p,2));function x(){const y=new z,w=new z;let S=0;const L=(e-t)/n;for(let b=0;b<=s;b++){const A=[],I=b/s,G=I*(e-t)+t;for(let X=0;X<=i;X++){const P=X/i,R=P*l+a,N=Math.sin(R),F=Math.cos(R);w.x=G*N,w.y=-I*n+f,w.z=G*F,u.push(w.x,w.y,w.z),y.set(N,L,F).normalize(),d.push(y.x,y.y,y.z),p.push(P,1-I),A.push(g++)}m.push(A)}for(let b=0;b<i;b++)for(let A=0;A<s;A++){const I=m[A][b],G=m[A+1][b],X=m[A+1][b+1],P=m[A][b+1];h.push(I,G,P),h.push(G,X,P),S+=6}c.addGroup(v,S,0),v+=S}function _(y){const w=g,S=new rt,L=new z;let b=0;const A=y===!0?t:e,I=y===!0?1:-1;for(let X=1;X<=i;X++)u.push(0,f*I,0),d.push(0,I,0),p.push(.5,.5),g++;const G=g;for(let X=0;X<=i;X++){const R=X/i*l+a,N=Math.cos(R),F=Math.sin(R);L.x=A*F,L.y=f*I,L.z=A*N,u.push(L.x,L.y,L.z),d.push(0,I,0),S.x=N*.5+.5,S.y=F*.5*I+.5,p.push(S.x,S.y),g++}for(let X=0;X<i;X++){const P=w+X,R=G+X;y===!0?h.push(R,R+1,P):h.push(R+1,R,P),b+=3}c.addGroup(v,b,y===!0?1:2),v+=b}}static fromJSON(t){return new ni(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yh extends ua{constructor(t){super(t),this.uuid=ss(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ua().fromJSON(i))}return this}}const S0={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=wh(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,d,p;if(n&&(s=L0(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(let g=e;g<i;g+=e)u=r[g],d=r[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return Is(s,o,e,a,l,p,0),o}};function wh(r,t,e,n,i){let s,o;if(i===k0(r,t,e,n)>0)for(s=t;s<e;s+=n)o=ec(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=ec(s,r[s],r[s+1],o);return o&&Zr(o,o.next)&&(Ns(o),o=o.next),o}function ui(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Zr(e,e.next)||jt(e.prev,e,e.next)===0)){if(Ns(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Is(r,t,e,n,i,s,o){if(!r)return;!o&&s&&z0(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?T0(r,n,i,s):E0(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),Ns(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=A0(ui(r),t,e),Is(r,t,e,n,i,s,2)):o===2&&C0(r,t,e,n,i,s):Is(ui(r),t,e,n,i,s,1);break}}}function E0(r){const t=r.prev,e=r,n=r.next;if(jt(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,d=i>s?i>o?i:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Hi(i,a,s,l,o,c,g.x,g.y)&&jt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function T0(r,t,e,n){const i=r.prev,s=r,o=r.next;if(jt(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,m=a>l?a>c?a:c:l>c?l:c,f=h>u?h>d?h:d:u>d?u:d,v=da(p,g,t,e,n),x=da(m,f,t,e,n);let _=r.prevZ,y=r.nextZ;for(;_&&_.z>=v&&y&&y.z<=x;){if(_.x>=p&&_.x<=m&&_.y>=g&&_.y<=f&&_!==i&&_!==o&&Hi(a,h,l,u,c,d,_.x,_.y)&&jt(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=m&&y.y>=g&&y.y<=f&&y!==i&&y!==o&&Hi(a,h,l,u,c,d,y.x,y.y)&&jt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=v;){if(_.x>=p&&_.x<=m&&_.y>=g&&_.y<=f&&_!==i&&_!==o&&Hi(a,h,l,u,c,d,_.x,_.y)&&jt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=x;){if(y.x>=p&&y.x<=m&&y.y>=g&&y.y<=f&&y!==i&&y!==o&&Hi(a,h,l,u,c,d,y.x,y.y)&&jt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function A0(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Zr(i,s)&&Mh(i,n,n.next,s)&&zs(i,s)&&zs(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Ns(n),Ns(n.next),n=r=s),n=n.next}while(n!==r);return ui(n)}function C0(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&O0(o,a)){let l=bh(o,a);o=ui(o,o.next),l=ui(l,l.next),Is(o,t,e,n,i,s,0),Is(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function L0(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=wh(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(F0(c));for(i.sort(P0),s=0;s<i.length;s++)e=R0(i[s],e);return e}function P0(r,t){return r.x-t.x}function R0(r,t){const e=D0(r,t);if(!e)return t;const n=bh(e,r);return ui(n,n.next),ui(e,e.next)}function D0(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Hi(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),zs(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&I0(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function I0(r,t){return jt(r.prev,r,t.prev)<0&&jt(t.next,r,r.next)<0}function z0(r,t,e,n){let i=r;do i.z===0&&(i.z=da(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,N0(i)}function N0(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function da(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function F0(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Hi(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function O0(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!B0(r,t)&&(zs(r,t)&&zs(t,r)&&U0(r,t)&&(jt(r.prev,r,t.prev)||jt(r,t.prev,t))||Zr(r,t)&&jt(r.prev,r,r.next)>0&&jt(t.prev,t,t.next)>0)}function jt(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Zr(r,t){return r.x===t.x&&r.y===t.y}function Mh(r,t,e,n){const i=_r(jt(r,t,e)),s=_r(jt(r,t,n)),o=_r(jt(e,n,r)),a=_r(jt(e,n,t));return!!(i!==s&&o!==a||i===0&&xr(r,e,t)||s===0&&xr(r,n,t)||o===0&&xr(e,r,n)||a===0&&xr(e,t,n))}function xr(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function _r(r){return r>0?1:r<0?-1:0}function B0(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Mh(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function zs(r,t){return jt(r.prev,r,r.next)<0?jt(r,t,r.next)>=0&&jt(r,r.prev,t)>=0:jt(r,t,r.prev)<0||jt(r,r.next,t)<0}function U0(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function bh(r,t){const e=new fa(r.i,r.x,r.y),n=new fa(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function ec(r,t,e,n){const i=new fa(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ns(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function fa(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function k0(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Es{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Es.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];nc(t),ic(n,t);let o=t.length;e.forEach(nc);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,ic(n,e[l]);const a=S0.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function nc(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function ic(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Ta extends De{constructor(t=.5,e=1,n=8,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,p=new z,g=new rt;for(let m=0;m<=i;m++){for(let f=0;f<=n;f++){const v=s+f/n*o;p.x=u*Math.cos(v),p.y=u*Math.sin(v),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let m=0;m<i;m++){const f=m*(n+1);for(let v=0;v<n;v++){const x=v+f,_=x,y=x+n+1,w=x+n+2,S=x+1;a.push(_,y,S),a.push(y,w,S)}}this.setIndex(a),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(h,2))}static fromJSON(t){return new Ta(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Aa extends De{constructor(t=new yh([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Kt(i,3)),this.setAttribute("normal",new Kt(s,3)),this.setAttribute("uv",new Kt(o,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let p=d.shape;const g=d.holes;Es.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,v=g.length;f<v;f++){const x=g[f];Es.isClockWise(x)===!0&&(g[f]=x.reverse())}const m=Es.triangulateShape(p,g);for(let f=0,v=g.length;f<v;f++){const x=g[f];p=p.concat(x)}for(let f=0,v=p.length;f<v;f++){const x=p[f];i.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let f=0,v=m.length;f<v;f++){const x=m[f],_=x[0]+u,y=x[1]+u,w=x[2]+u;n.push(_,y,w),l+=3}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return G0(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const o=e[t.shapes[i]];n.push(o)}return new Aa(n,t.curveSegments)}}function G0(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class Ws extends Un{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new kt(16777215),this.specular=new kt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xr,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class V0 extends Un{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xr,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Sh extends Un{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xr,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Eh extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Wo=new Jt,sc=new z,rc=new z;class W0{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wa,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;sc.setFromMatrixPosition(t.matrixWorld),e.position.copy(sc),rc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rc),e.updateMatrixWorld(),Wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class H0 extends W0{constructor(){super(new ch(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class q0 extends Eh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DefaultUp),this.updateMatrix(),this.target=new ge,this.shadow=new H0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class X0 extends Eh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class j0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=oc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=oc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function oc(){return(typeof performance>"u"?Date:performance).now()}class Th{constructor(t,e,n=0,i=1/0){this.ray=new _a(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ya,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return pa(t,this,n,e),n.sort(ac),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)pa(t[i],this,n,e);return n.sort(ac),n}}function ac(r,t){return r.distance-t.distance}function pa(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)pa(i[s],t,e,!0)}}class lc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const cc=new z;let yr,Ho;class Y0 extends ge{constructor(t=new z(0,0,1),e=new z(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",yr===void 0&&(yr=new De,yr.setAttribute("position",new Kt([0,0,0,0,1,0],3)),Ho=new ni(0,.5,1,5,1),Ho.translate(0,-.5,0)),this.position.copy(e),this.line=new h0(yr,new mh({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Xt(Ho,new vi({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,s,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{cc.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(cc,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xa);class tn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new M);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new M);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new tn);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],u=n[5],d=n[6],p=n[7],g=n[8],m=i[0],f=i[1],v=i[2],x=i[3],_=i[4],y=i[5],w=i[6],S=i[7],L=i[8];return s[0]=o*m+a*x+l*w,s[1]=o*f+a*_+l*S,s[2]=o*v+a*y+l*L,s[3]=c*m+h*x+u*w,s[4]=c*f+h*_+u*S,s[5]=c*v+h*y+u*L,s[6]=d*m+p*x+g*w,s[7]=d*f+p*_+g*S,s[8]=d*v+p*y+g*L,e}scale(t,e){e===void 0&&(e=new tn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new M);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let l=3;const c=l;let h;const u=4;let d;do{if(o=c-l,s[o+i*o]===0){for(a=o+1;a<c;a++)if(s[o+i*a]!==0){h=u;do d=u-h,s[d+i*o]+=s[d+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<c;a++){const p=s[o+i*a]/s[o+i*o];h=u;do d=u-h,s[d+i*a]=d<=o?0:s[d+i*a]-s[d+i*o]*p;while(--h)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new tn);const e=3,n=6,i=$0;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const h=n;let u;do{if(s=l-a,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){c=h;do u=h-c,i[u+n*s]+=i[u+n*o];while(--c);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){const d=i[s+n*o]/i[s+n*s];c=h;do u=h-c,i[u+n*o]=u<=s?0:i[u+n*o]-i[u+n*s]*d;while(--c)}}while(--a);s=2;do{o=s-1;do{const d=i[s+n*o]/i[s+n*s];c=n;do u=n-c,i[u+n*o]=i[u+n*o]-i[u+n*s]*d;while(--c)}while(o--)}while(--s);s=2;do{const d=1/i[s+n*s];c=n;do u=n-c,i[u+n*s]=i[u+n*s]*d;while(--c)}while(s--);s=2;do{o=2;do{if(u=i[e+o+n*s],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,u)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,l=i+i,c=e*o,h=e*a,u=e*l,d=n*a,p=n*l,g=i*l,m=s*o,f=s*a,v=s*l,x=this.elements;return x[3*0+0]=1-(d+g),x[3*0+1]=h-v,x[3*0+2]=u+f,x[3*1+0]=h+v,x[3*1+1]=1-(c+g),x[3*1+2]=p-m,x[3*2+0]=u-f,x[3*2+1]=p+m,x[3*2+2]=1-(c+d),this}transpose(t){t===void 0&&(t=new tn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const $0=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new M);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*s-l*i,e.y=l*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new M(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new M(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new tn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new M);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new M);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new M),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new M),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new M),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=Z0,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=J0;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(hc),hc.almostEquals(t,e)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const Z0=new M,J0=new M,hc=new M;class Ie{constructor(t){t===void 0&&(t={}),this.lowerBound=new M,this.upperBound=new M,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,uc),c=uc),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Ie().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=dc,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7];this.getCorners(i,s,o,a,l,c,h,u);for(let d=0;d!==8;d++){const p=n[d];t.pointToLocal(p,p)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=dc,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7];this.getCorners(i,s,o,a,l,c,h,u);for(let d=0;d!==8;d++){const p=n[d];t.pointToWorld(p,p)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,u=(this.lowerBound.z-n.z)*o,d=(this.upperBound.z-n.z)*o,p=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(u,d)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(u,d));return!(g<0||p>g)}}const uc=new M,dc=[new M,new M,new M,new M,new M,new M,new M,new M];class fc{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Ah{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class Zt{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new M),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=K0,i=Q0;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Zt);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*a+i*c-s*l,e.y=i*h+o*l+s*a-n*c,e.z=s*h+o*c+n*l-i*a,e.w=o*h-n*a-i*l-s*c,e}inverse(t){t===void 0&&(t=new Zt);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Zt),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new M);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*s-l*i,u=c*i+l*n-o*s,d=c*s+o*i-a*n,p=-o*n-a*i-l*s;return e.x=h*c+p*-o+u*-l-d*-a,e.y=u*c+p*-a+d*-o-h*-l,e.z=d*c+p*-l+h*-a-u*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,s=0),n===void 0){const u=o*o,d=a*a,p=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*d-2*p),i=Math.asin(2*h),s=Math.atan2(2*o*c-2*a*l,1-2*u-2*p)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a+l*c*h),this}clone(){return new Zt(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Zt);const i=this.x,s=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,h=t.z,u=t.w,d,p,g,m,f;return p=i*l+s*c+o*h+a*u,p<0&&(p=-p,l=-l,c=-c,h=-h,u=-u),1-p>1e-6?(d=Math.acos(p),g=Math.sin(d),m=Math.sin((1-e)*d)/g,f=Math.sin(e*d)/g):(m=1-e,f=e),n.x=m*i+f*l,n.y=m*s+f*c,n.z=m*o+f*h,n.w=m*a+f*u,n}integrate(t,e,n,i){i===void 0&&(i=new Zt);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,u=this.w,d=e*.5;return i.x+=d*(s*u+o*h-a*c),i.y+=d*(o*u+a*l-s*h),i.z+=d*(a*u+s*c-o*l),i.w+=d*(-s*l-o*c-a*h),i}}const K0=new M,Q0=new M,tv={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class dt{constructor(t){t===void 0&&(t={}),this.id=dt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}dt.idCounter=0;dt.types=tv;class Ft{constructor(t){t===void 0&&(t={}),this.position=new M,this.quaternion=new Zt,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Ft.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Ft.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),n.vsub(t,i),e.conjugate(pc),pc.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new M),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new M),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const pc=new Zt;class Ts extends dt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:dt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new M;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let h=!1;for(let u=0;u!==n.length;u++)if(n[u].almostEquals(i)||n[u].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new M;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];Ts.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new M,o=new M;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,l,c){const h=new M;let u=-1,d=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const m=h.dot(o);m>d&&(d=m,u=g)}const p=[];for(let g=0;g<n.faces[u].length;g++){const m=n.vertices[n.faces[u][g]],f=new M;f.copy(m),s.vmult(f,f),i.vadd(f,f),p.push(f)}u>=0&&this.clipFaceAgainstHull(o,t,e,p,a,l,c)}findSeparatingAxis(t,e,n,i,s,o,a,l){const c=new M,h=new M,u=new M,d=new M,p=new M,g=new M;let m=Number.MAX_VALUE;const f=this;if(f.uniqueAxes)for(let v=0;v!==f.uniqueAxes.length;v++){n.vmult(f.uniqueAxes[v],c);const x=f.testSepAxis(c,t,e,n,i,s);if(x===!1)return!1;x<m&&(m=x,o.copy(c))}else{const v=a?a.length:f.faces.length;for(let x=0;x<v;x++){const _=a?a[x]:x;c.copy(f.faceNormals[_]),n.vmult(c,c);const y=f.testSepAxis(c,t,e,n,i,s);if(y===!1)return!1;y<m&&(m=y,o.copy(c))}}if(t.uniqueAxes)for(let v=0;v!==t.uniqueAxes.length;v++){s.vmult(t.uniqueAxes[v],h);const x=f.testSepAxis(h,t,e,n,i,s);if(x===!1)return!1;x<m&&(m=x,o.copy(h))}else{const v=l?l.length:t.faces.length;for(let x=0;x<v;x++){const _=l?l[x]:x;h.copy(t.faceNormals[_]),s.vmult(h,h);const y=f.testSepAxis(h,t,e,n,i,s);if(y===!1)return!1;y<m&&(m=y,o.copy(h))}}for(let v=0;v!==f.uniqueEdges.length;v++){n.vmult(f.uniqueEdges[v],d);for(let x=0;x!==t.uniqueEdges.length;x++)if(s.vmult(t.uniqueEdges[x],p),d.cross(p,g),!g.almostZero()){g.normalize();const _=f.testSepAxis(g,t,e,n,i,s);if(_===!1)return!1;_<m&&(m=_,o.copy(g))}}return i.vsub(e,u),u.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;Ts.project(a,t,n,i,qo),Ts.project(e,t,s,o,Xo);const l=qo[0],c=qo[1],h=Xo[0],u=Xo[1];if(l<u||h<c)return!1;const d=l-u,p=h-c;return d<p?d:p}calculateLocalInertia(t,e){const n=new M,i=new M;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const l=new M,c=new M,h=new M,u=new M,d=new M,p=new M,g=new M,m=new M,f=this,v=[],x=i,_=v;let y=-1,w=Number.MAX_VALUE;for(let I=0;I<f.faces.length;I++){l.copy(f.faceNormals[I]),n.vmult(l,l);const G=l.dot(t);G<w&&(w=G,y=I)}if(y<0)return;const S=f.faces[y];S.connectedFaces=[];for(let I=0;I<f.faces.length;I++)for(let G=0;G<f.faces[I].length;G++)S.indexOf(f.faces[I][G])!==-1&&I!==y&&S.connectedFaces.indexOf(I)===-1&&S.connectedFaces.push(I);const L=S.length;for(let I=0;I<L;I++){const G=f.vertices[S[I]],X=f.vertices[S[(I+1)%L]];G.vsub(X,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),u.copy(this.faceNormals[y]),n.vmult(u,u),e.vadd(u,u),h.cross(u,d),d.negate(d),p.copy(G),n.vmult(p,p),e.vadd(p,p);const P=S.connectedFaces[I];g.copy(this.faceNormals[P]);const R=this.getPlaneConstantOfFace(P);m.copy(g),n.vmult(m,m);const N=R-m.dot(e);for(this.clipFaceAgainstPlane(x,_,m,N);x.length;)x.shift();for(;_.length;)x.push(_.shift())}g.copy(this.faceNormals[y]);const b=this.getPlaneConstantOfFace(y);m.copy(g),n.vmult(m,m);const A=b-m.dot(e);for(let I=0;I<x.length;I++){let G=m.dot(x[I])+A;if(G<=s&&(console.log(`clamped: depth=${G} to minDist=${s}`),G=s),G<=o){const X=x[I];if(G<=1e-6){const P={point:X,normal:m,depth:G};a.push(P)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let h=0;h<a;h++){if(c=t[h],o=n.dot(c)+i,s<0)if(o<0){const u=new M;u.copy(c),e.push(u)}else{const u=new M;l.lerp(c,s/(s-o),u),e.push(u)}else if(o<0){const u=new M;l.lerp(c,s/(s-o),u),e.push(u),e.push(c)}l=c,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new M);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,l,c,h,u,d=new M;for(let p=0;p<s.length;p++){d.copy(s[p]),e.vmult(d,d),t.vadd(d,d);const g=d;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(u===void 0||g.z>u)&&(u=g.z)}n.set(o,a,l),i.set(c,h,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new M);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=null,o=new M;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let l=i[a];const c=e[n[a][0]],h=new M;t.vsub(c,h);const u=l.dot(h),d=new M;o.vsub(c,d);const p=l.dot(d);if(u<0&&p>0||u>0&&p<0)return!1}return s?1:-1}static project(t,e,n,i,s){const o=t.vertices.length,a=ev;let l=0,c=0;const h=nv,u=t.vertices;h.setZero(),Ft.vectorToLocalFrame(n,i,e,a),Ft.pointToLocalFrame(n,i,h,h);const d=h.dot(a);c=l=u[0].dot(a);for(let p=1;p<o;p++){const g=u[p].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=d,l-=d,c>l){const p=c;c=l,l=p}s[0]=l,s[1]=c}}const qo=[],Xo=[];new M;const ev=new M,nv=new M;class Hs extends dt{constructor(t){super({type:dt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=M,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new Ts({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new M),Hs.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)On.set(s[o][0],s[o][1],s[o][2]),e.vmult(On,On),t.vadd(On,On),n(On.x,On.y,On.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;on[0].set(s.x,s.y,s.z),on[1].set(-s.x,s.y,s.z),on[2].set(-s.x,-s.y,s.z),on[3].set(-s.x,-s.y,-s.z),on[4].set(s.x,-s.y,-s.z),on[5].set(s.x,s.y,-s.z),on[6].set(-s.x,s.y,-s.z),on[7].set(s.x,-s.y,s.z);const o=on[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=on[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,u=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),u>i.z&&(i.z=u),c<n.x&&(n.x=c),h<n.y&&(n.y=h),u<n.z&&(n.z=u)}}}const On=new M,on=[new M,new M,new M,new M,new M,new M,new M,new M],Ca={DYNAMIC:1,STATIC:2,KINEMATIC:4},La={AWAKE:0,SLEEPY:1,SLEEPING:2};class ot extends Ah{constructor(t){t===void 0&&(t={}),super(),this.id=ot.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new M,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new M,this.force=new M;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?ot.STATIC:ot.DYNAMIC,typeof t.type==typeof ot.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=ot.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new Zt,this.initQuaternion=new Zt,this.previousQuaternion=new Zt,this.interpolatedQuaternion=new Zt,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new M,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new tn,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new tn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new M(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new M(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Ie,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=Boolean(t.isTrigger),t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=ot.AWAKE,this.wakeUpAfterNarrowphase=!1,t===ot.SLEEPING&&this.dispatchEvent(ot.wakeupEvent)}sleep(){this.sleepState=ot.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===ot.AWAKE&&n<i?(this.sleepState=ot.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(ot.sleepyEvent)):e===ot.SLEEPY&&n>i?this.wakeUp():e===ot.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ot.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ot.SLEEPING||this.type===ot.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new M),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new M),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new M,s=new Zt;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=iv,o=sv,a=this.quaternion,l=this.aabb,c=rv;for(let h=0;h!==i;h++){const u=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],o),u.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=ov,i=av;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new M),this.type!==ot.DYNAMIC)return;this.sleepState===ot.SLEEPING&&this.wakeUp();const n=cv;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new M),this.type!==ot.DYNAMIC)return;const n=hv,i=uv;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===ot.DYNAMIC&&(this.sleepState===ot.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new M),this.type!==ot.DYNAMIC)return;this.sleepState===ot.SLEEPING&&this.wakeUp();const n=e,i=dv;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=fv;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new M),this.type!==ot.DYNAMIC)return;const n=pv,i=mv;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=gv;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Hs.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new M;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ot.DYNAMIC||this.type===ot.KINEMATIC)||this.sleepState===ot.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,u=this.invInertiaWorld,d=this.linearFactor,p=h*t;i.x+=a.x*p*d.x,i.y+=a.y*p*d.y,i.z+=a.z*p*d.z;const g=u.elements,m=this.angularFactor,f=l.x*m.x,v=l.y*m.y,x=l.z*m.z;s.x+=t*(g[0]*f+g[1]*v+g[2]*x),s.y+=t*(g[3]*f+g[4]*v+g[5]*x),s.z+=t*(g[6]*f+g[7]*v+g[8]*x),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ot.idCounter=0;ot.COLLIDE_EVENT_NAME="collide";ot.DYNAMIC=Ca.DYNAMIC;ot.STATIC=Ca.STATIC;ot.KINEMATIC=Ca.KINEMATIC;ot.AWAKE=La.AWAKE;ot.SLEEPY=La.SLEEPY;ot.SLEEPING=La.SLEEPING;ot.wakeupEvent={type:"wakeup"};ot.sleepyEvent={type:"sleepy"};ot.sleepEvent={type:"sleep"};const iv=new M,sv=new Zt,rv=new Ie,ov=new tn,av=new tn,lv=new tn,cv=new M,hv=new M,uv=new M,dv=new M,fv=new M,pv=new M,mv=new M,gv=new M;class vv{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&ot.STATIC)!==0||t.sleepState===ot.SLEEPING)&&((e.type&ot.STATIC)!==0||e.sleepState===ot.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=xv;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=_v,i=yv,s=wv,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=s[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new M;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const xv=new M;new M;new Zt;new M;const _v={keys:[]},yv=[],wv=[];new M;new M;new M;class Mv extends vv{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class kr{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let Ch,Lh,Ph,Rh,Dh,Ih,zh;const Pa={CLOSEST:1,ANY:2,ALL:4};Ch=dt.types.SPHERE;Lh=dt.types.PLANE;Ph=dt.types.BOX;Rh=dt.types.CYLINDER;Dh=dt.types.CONVEXPOLYHEDRON;Ih=dt.types.HEIGHTFIELD;zh=dt.types.TRIMESH;class ie{get[Ch](){return this._intersectSphere}get[Lh](){return this._intersectPlane}get[Ph](){return this._intersectBox}get[Rh](){return this._intersectConvex}get[Dh](){return this._intersectConvex}get[Ih](){return this._intersectHeightfield}get[zh](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new M),e===void 0&&(e=new M),this.from=t.clone(),this.to=e.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=ie.ANY,this.result=new kr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||ie.ANY,this.result=e.result||new kr,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(mc),jo.length=0,t.broadphase.aabbQuery(t,mc,jo),this.intersectBodies(jo),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=bv,s=Sv;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(Bv(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,l=this.direction,c=new M(0,0,1);e.vmult(c,c);const h=new M;o.vsub(n,h);const u=h.dot(c);a.vsub(n,h);const d=h.dot(c);if(u*d>0||o.distanceTo(a)<u)return;const p=c.dot(l);if(Math.abs(p)<this.precision)return;const g=new M,m=new M,f=new M;o.vsub(n,g);const v=-c.dot(g)/p;l.scale(v,m),o.vadd(m,f),this.reportIntersection(c,f,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=Ev;o.from.copy(this.from),o.to.copy(this.to),Ft.pointToLocalFrame(n,e,o.from,o.from),Ft.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=Tv;let l,c,h,u;l=c=0,h=u=t.data.length-1;const d=new Ie;o.getAABB(d),t.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(d.upperBound.x,d.upperBound.y,a,!0),h=Math.min(h,a[0]+1),u=Math.min(u,a[1]+1);for(let p=l;p<h;p++)for(let g=c;g<u;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(p,g,d),!!d.overlapsRay(o)){if(t.getConvexTrianglePillar(p,g,!1),Ft.pointToWorldFrame(n,e,t.pillarOffset,wr),this._intersectConvex(t.pillarConvex,e,wr,i,s,gc),this.result.shouldStop)return;t.getConvexTrianglePillar(p,g,!0),Ft.pointToWorldFrame(n,e,t.pillarOffset,wr),this._intersectConvex(t.pillarConvex,e,wr,i,s,gc)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),u=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,d=h**2-4*c*u,p=Av,g=Cv;if(!(d<0))if(d===0)o.lerp(a,d,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1);else{const m=(-h-Math.sqrt(d))/(2*c),f=(-h+Math.sqrt(d))/(2*c);if(m>=0&&m<=1&&(o.lerp(a,m,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1)),this.result.shouldStop)return;f>=0&&f<=1&&(o.lerp(a,f,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=Lv,l=vc,c=o&&o.faceList||null,h=t.faces,u=t.vertices,d=t.faceNormals,p=this.direction,g=this.from,m=this.to,f=g.distanceTo(m),v=c?c.length:h.length,x=this.result;for(let _=0;!x.shouldStop&&_<v;_++){const y=c?c[_]:_,w=h[y],S=d[y],L=e,b=n;l.copy(u[w[0]]),L.vmult(l,l),l.vadd(b,l),l.vsub(g,l),L.vmult(S,a);const A=p.dot(a);if(Math.abs(A)<this.precision)continue;const I=a.dot(l)/A;if(!(I<0)){p.scale(I,Ee),Ee.vadd(g,Ee),Ze.copy(u[w[0]]),L.vmult(Ze,Ze),b.vadd(Ze,Ze);for(let G=1;!x.shouldStop&&G<w.length-1;G++){an.copy(u[w[G]]),ln.copy(u[w[G+1]]),L.vmult(an,an),L.vmult(ln,ln),b.vadd(an,an),b.vadd(ln,ln);const X=Ee.distanceTo(g);!(ie.pointInTriangle(Ee,Ze,an,ln)||ie.pointInTriangle(Ee,an,Ze,ln))||X>f||this.reportIntersection(a,Ee,s,i,y)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=Pv,l=Fv,c=Ov,h=vc,u=Rv,d=Dv,p=Iv,g=Nv,m=zv,f=t.indices;t.vertices;const v=this.from,x=this.to,_=this.direction;c.position.copy(n),c.quaternion.copy(e),Ft.vectorToLocalFrame(n,e,_,u),Ft.pointToLocalFrame(n,e,v,d),Ft.pointToLocalFrame(n,e,x,p),p.x*=t.scale.x,p.y*=t.scale.y,p.z*=t.scale.z,d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,p.vsub(d,u),u.normalize();const y=d.distanceSquared(p);t.tree.rayQuery(this,c,l);for(let w=0,S=l.length;!this.result.shouldStop&&w!==S;w++){const L=l[w];t.getNormal(L,a),t.getVertex(f[L*3],Ze),Ze.vsub(d,h);const b=u.dot(a),A=a.dot(h)/b;if(A<0)continue;u.scale(A,Ee),Ee.vadd(d,Ee),t.getVertex(f[L*3+1],an),t.getVertex(f[L*3+2],ln);const I=Ee.distanceSquared(d);!(ie.pointInTriangle(Ee,an,Ze,ln)||ie.pointInTriangle(Ee,Ze,an,ln))||I>y||(Ft.vectorToWorldFrame(e,a,m),Ft.pointToWorldFrame(n,e,Ee,g),this.reportIntersection(m,g,s,i,L))}l.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case ie.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case ie.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case ie.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Jn),n.vsub(e,ps),t.vsub(e,Yo);const s=Jn.dot(Jn),o=Jn.dot(ps),a=Jn.dot(Yo),l=ps.dot(ps),c=ps.dot(Yo);let h,u;return(h=l*a-o*c)>=0&&(u=s*c-o*a)>=0&&h+u<s*l-o*o}}ie.CLOSEST=Pa.CLOSEST;ie.ANY=Pa.ANY;ie.ALL=Pa.ALL;const mc=new Ie,jo=[],ps=new M,Yo=new M,bv=new M,Sv=new Zt,Ee=new M,Ze=new M,an=new M,ln=new M;new M;new kr;const gc={faceList:[0]},wr=new M,Ev=new ie,Tv=[],Av=new M,Cv=new M,Lv=new M;new M;new M;const vc=new M,Pv=new M,Rv=new M,Dv=new M,Iv=new M,zv=new M,Nv=new M;new Ie;const Fv=[],Ov=new Ft,Jn=new M,Mr=new M;function Bv(r,t,e){e.vsub(r,Jn);const n=Jn.dot(t);return t.scale(n,Mr),Mr.vadd(r,Mr),e.distanceTo(Mr)}class Nh{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Jr{constructor(t,e,n){n===void 0&&(n={}),n=Nh.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=t,this.bodyB=e,this.id=Jr.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(t&&t.wakeUp(),e&&e.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){const t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!0}disable(){const t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!1}}Jr.idCounter=0;class xc{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class xi{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=xi.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new xc,this.jacobianElementB=new xc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,_c),a.scale(h,yc),n.invInertiaWorldSolve.vmult(o,wc),i.invInertiaWorldSolve.vmult(l,Mc),t.multiplyVectors(_c,wc)+e.multiplyVectors(yc,Mc)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+o;return a.vmult(t.rotational,br),c+=br.dot(t.rotational),l.vmult(e.rotational,br),c+=br.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=Uv;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}xi.idCounter=0;const _c=new M,yc=new M,wc=new M,Mc=new M,br=new M,Uv=new M;class Ir extends xi{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,l=kv,c=Gv,h=i.velocity,u=i.angularVelocity;i.force,i.torque;const d=s.velocity,p=s.angularVelocity;s.force,s.torque;const g=Vv,m=this.jacobianElementA,f=this.jacobianElementB,v=this.ni;o.cross(v,l),a.cross(v,c),v.negate(m.spatial),l.negate(m.rotational),f.spatial.copy(v),f.rotational.copy(c),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const x=v.dot(g),_=this.restitution+1,y=_*d.dot(v)-_*h.dot(v)+p.dot(c)-u.dot(l),w=this.computeGiMf();return-x*e-y*n-t*w}getImpactVelocityAlongNormal(){const t=Wv,e=Hv,n=qv,i=Xv,s=jv;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const kv=new M,Gv=new M,Vv=new M,Wv=new M,Hv=new M,qv=new M,Xv=new M,jv=new M;class Yv extends Jr{constructor(t,e,n,i,s){e===void 0&&(e=new M),i===void 0&&(i=new M),s===void 0&&(s=1e6),super(t,n),this.pivotA=e.clone(),this.pivotB=i.clone();const o=this.equationX=new Ir(t,n),a=this.equationY=new Ir(t,n),l=this.equationZ=new Ir(t,n);this.equations.push(o,a,l),o.minForce=a.minForce=l.minForce=-s,o.maxForce=a.maxForce=l.maxForce=s,o.ni.set(1,0,0),a.ni.set(0,1,0),l.ni.set(0,0,1)}update(){const t=this.bodyA,e=this.bodyB,n=this.equationX,i=this.equationY,s=this.equationZ;t.quaternion.vmult(this.pivotA,n.ri),e.quaternion.vmult(this.pivotB,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj)}}new M;new M;class bc extends xi{constructor(t,e,n){n===void 0&&(n={});const i=typeof n.maxForce<"u"?n.maxForce:1e6;super(t,e,-i,i),this.axisA=n.axisA?n.axisA.clone():new M(1,0,0),this.axisB=n.axisB?n.axisB.clone():new M(0,1,0),this.maxAngle=Math.PI/2}computeB(t){const e=this.a,n=this.b,i=this.axisA,s=this.axisB,o=$v,a=Zv,l=this.jacobianElementA,c=this.jacobianElementB;i.cross(s,o),s.cross(i,a),l.rotational.copy(a),c.rotational.copy(o);const h=Math.cos(this.maxAngle)-i.dot(s),u=this.computeGW(),d=this.computeGiMf();return-h*e-u*n-t*d}}const $v=new M,Zv=new M;new M;new M;new M;new M;class Jv extends xi{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,-n,n),this.axisA=new M,this.axisB=new M,this.targetVelocity=0}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.axisA,i=this.axisB,s=this.jacobianElementA,o=this.jacobianElementB;s.rotational.copy(n),i.negate(o.rotational);const a=this.computeGW()-this.targetVelocity,l=this.computeGiMf();return-a*e-t*l}}class Sr extends Yv{constructor(t,e,n){n===void 0&&(n={});const i=typeof n.maxForce<"u"?n.maxForce:1e6,s=n.pivotA?n.pivotA.clone():new M,o=n.pivotB?n.pivotB.clone():new M;super(t,s,e,o,i),(this.axisA=n.axisA?n.axisA.clone():new M(1,0,0)).normalize(),(this.axisB=n.axisB?n.axisB.clone():new M(1,0,0)).normalize(),this.collideConnected=!!n.collideConnected;const c=this.rotationalEquation1=new bc(t,e,n),h=this.rotationalEquation2=new bc(t,e,n),u=this.motorEquation=new Jv(t,e,i);u.enabled=!1,this.equations.push(c,h,u)}enableMotor(){this.motorEquation.enabled=!0}disableMotor(){this.motorEquation.enabled=!1}setMotorSpeed(t){this.motorEquation.targetVelocity=t}setMotorMaxForce(t){this.motorEquation.maxForce=t,this.motorEquation.minForce=-t}update(){const t=this.bodyA,e=this.bodyB,n=this.motorEquation,i=this.rotationalEquation1,s=this.rotationalEquation2,o=Kv,a=Qv,l=this.axisA,c=this.axisB;super.update(),t.quaternion.vmult(l,o),e.quaternion.vmult(c,a),o.tangents(i.axisA,s.axisA),i.axisB.copy(a),s.axisB.copy(a),this.motorEquation.enabled&&(t.quaternion.vmult(this.axisA,n.axisA),e.quaternion.vmult(this.axisB,n.axisB))}}const Kv=new M,Qv=new M;class Sc extends xi{constructor(t,e,n){super(t,e,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=tx,o=ex,a=this.t;n.cross(a,s),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),u=this.computeGiMf();return-h*e-t*u}}const tx=new M,ex=new M;class Kr{constructor(t,e,n){n=Nh.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Kr.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Kr.idCounter=0;class os{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=os.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}os.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new ie;new M;new M;new M;new M(1,0,0),new M(0,1,0),new M(0,0,1);new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class Er extends dt{constructor(t){if(super({type:dt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new M);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const l=o[a];n[l]=t[l]-s,i[l]=t[l]+s}}}new M;new M;new M;new M;new M;new M;new M;new M;new M;class nx extends dt{constructor(){super({type:dt.types.PLANE}),this.worldNormal=new M,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new M),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){yn.set(0,0,1),e.vmult(yn,yn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),yn.x===1?i.x=t.x:yn.x===-1&&(n.x=t.x),yn.y===1?i.y=t.y:yn.y===-1&&(n.y=t.y),yn.z===1?i.z=t.z:yn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const yn=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new Ie;new M;new Ie;new M;new M;new M;new M;new M;new M;new M;new Ie;new M;new Ft;new Ie;class ix{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class sx extends ix{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,h=t;let u,d,p,g,m,f;if(a!==0)for(let y=0;y!==c;y++)l[y].updateSolveMassProperties();const v=ox,x=ax,_=rx;v.length=a,x.length=a,_.length=a;for(let y=0;y!==a;y++){const w=o[y];_[y]=0,x[y]=w.computeB(h),v[y]=1/w.computeC()}if(a!==0){for(let S=0;S!==c;S++){const L=l[S],b=L.vlambda,A=L.wlambda;b.set(0,0,0),A.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let S=0;S!==a;S++){const L=o[S];u=x[S],d=v[S],f=_[S],m=L.computeGWlambda(),p=d*(u-m-L.eps*f),f+p<L.minForce?p=L.minForce-f:f+p>L.maxForce&&(p=L.maxForce-f),_[S]+=p,g+=p>0?p:-p,L.addToWlambda(p)}if(g*g<s)break}for(let S=0;S!==c;S++){const L=l[S],b=L.velocity,A=L.angularVelocity;L.vlambda.vmul(L.linearFactor,L.vlambda),b.vadd(L.vlambda,b),L.wlambda.vmul(L.angularFactor,L.wlambda),A.vadd(L.wlambda,A)}let y=o.length;const w=1/h;for(;y--;)o[y].multiplier=_[y]*w}return n}}const rx=[],ox=[],ax=[];ot.STATIC;class lx{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class cx extends lx{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const Ht={sphereSphere:dt.types.SPHERE,spherePlane:dt.types.SPHERE|dt.types.PLANE,boxBox:dt.types.BOX|dt.types.BOX,sphereBox:dt.types.SPHERE|dt.types.BOX,planeBox:dt.types.PLANE|dt.types.BOX,convexConvex:dt.types.CONVEXPOLYHEDRON,sphereConvex:dt.types.SPHERE|dt.types.CONVEXPOLYHEDRON,planeConvex:dt.types.PLANE|dt.types.CONVEXPOLYHEDRON,boxConvex:dt.types.BOX|dt.types.CONVEXPOLYHEDRON,sphereHeightfield:dt.types.SPHERE|dt.types.HEIGHTFIELD,boxHeightfield:dt.types.BOX|dt.types.HEIGHTFIELD,convexHeightfield:dt.types.CONVEXPOLYHEDRON|dt.types.HEIGHTFIELD,sphereParticle:dt.types.PARTICLE|dt.types.SPHERE,planeParticle:dt.types.PLANE|dt.types.PARTICLE,boxParticle:dt.types.BOX|dt.types.PARTICLE,convexParticle:dt.types.PARTICLE|dt.types.CONVEXPOLYHEDRON,cylinderCylinder:dt.types.CYLINDER,sphereCylinder:dt.types.SPHERE|dt.types.CYLINDER,planeCylinder:dt.types.PLANE|dt.types.CYLINDER,boxCylinder:dt.types.BOX|dt.types.CYLINDER,convexCylinder:dt.types.CONVEXPOLYHEDRON|dt.types.CYLINDER,heightfieldCylinder:dt.types.HEIGHTFIELD|dt.types.CYLINDER,particleCylinder:dt.types.PARTICLE|dt.types.CYLINDER,sphereTrimesh:dt.types.SPHERE|dt.types.TRIMESH,planeTrimesh:dt.types.PLANE|dt.types.TRIMESH};class hx{get[Ht.sphereSphere](){return this.sphereSphere}get[Ht.spherePlane](){return this.spherePlane}get[Ht.boxBox](){return this.boxBox}get[Ht.sphereBox](){return this.sphereBox}get[Ht.planeBox](){return this.planeBox}get[Ht.convexConvex](){return this.convexConvex}get[Ht.sphereConvex](){return this.sphereConvex}get[Ht.planeConvex](){return this.planeConvex}get[Ht.boxConvex](){return this.boxConvex}get[Ht.sphereHeightfield](){return this.sphereHeightfield}get[Ht.boxHeightfield](){return this.boxHeightfield}get[Ht.convexHeightfield](){return this.convexHeightfield}get[Ht.sphereParticle](){return this.sphereParticle}get[Ht.planeParticle](){return this.planeParticle}get[Ht.boxParticle](){return this.boxParticle}get[Ht.convexParticle](){return this.convexParticle}get[Ht.cylinderCylinder](){return this.convexConvex}get[Ht.sphereCylinder](){return this.sphereConvex}get[Ht.planeCylinder](){return this.planeConvex}get[Ht.boxCylinder](){return this.boxConvex}get[Ht.convexCylinder](){return this.convexConvex}get[Ht.heightfieldCylinder](){return this.heightfieldCylinder}get[Ht.particleCylinder](){return this.particleCylinder}get[Ht.sphereTrimesh](){return this.sphereTrimesh}get[Ht.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new cx,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new Ir(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,u=o.material||i.material;if(h&&u&&h.friction>=0&&u.friction>=0&&(c=h.friction*u.friction),c>0){const d=c*(a.frictionGravity||a.gravity).length();let p=n.invMass+i.invMass;p>0&&(p=1/p);const g=this.frictionEquationPool,m=g.length?g.pop():new Sc(n,i,d*p),f=g.length?g.pop():new Sc(n,i,d*p);return m.bi=f.bi=n,m.bj=f.bj=i,m.minForce=f.minForce=-d*p,m.maxForce=f.maxForce=d*p,m.ri.copy(t.ri),m.rj.copy(t.rj),f.ri.copy(t.ri),f.rj.copy(t.rj),t.ni.tangents(m.t,f.t),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),f.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.enabled=f.enabled=t.enabled,e.push(m,f),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];jn.setZero(),Bi.setZero(),Ui.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(jn.vadd(e.ni,jn),Bi.vadd(e.ri,Bi),Ui.vadd(e.rj,Ui)):(jn.vsub(e.ni,jn),Bi.vadd(e.rj,Bi),Ui.vadd(e.ri,Ui));const o=1/t;Bi.scale(o,n.ri),Ui.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),jn.normalize(),jn.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=fx,c=px,h=ux,u=dx;for(let d=0,p=t.length;d!==p;d++){const g=t[d],m=e[d];let f=null;g.material&&m.material&&(f=n.getContactMaterial(g.material,m.material)||null);const v=g.type&ot.KINEMATIC&&m.type&ot.STATIC||g.type&ot.STATIC&&m.type&ot.KINEMATIC||g.type&ot.KINEMATIC&&m.type&ot.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],l),g.quaternion.vmult(g.shapeOffsets[x],h),h.vadd(g.position,h);const _=g.shapes[x];for(let y=0;y<m.shapes.length;y++){m.quaternion.mult(m.shapeOrientations[y],c),m.quaternion.vmult(m.shapeOffsets[y],u),u.vadd(m.position,u);const w=m.shapes[y];if(!(_.collisionFilterMask&w.collisionFilterGroup&&w.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(u)>_.boundingSphereRadius+w.boundingSphereRadius)continue;let S=null;_.material&&w.material&&(S=n.getContactMaterial(_.material,w.material)||null),this.currentContactMaterial=S||f||n.defaultContactMaterial;const L=_.type|w.type,b=this[L];if(b){let A=!1;_.type<w.type?A=b.call(this,_,w,h,u,l,c,g,m,_,w,v):A=b.call(this,w,_,u,h,c,l,m,g,_,w,v),A&&v&&(n.shapeOverlapKeeper.set(_.id,w.id),n.bodyOverlapKeeper.set(g.id,m.id))}}}}}sphereSphere(t,e,n,i,s,o,a,l,c,h,u){if(u)return n.distanceSquared(i)<(t.radius+e.radius)**2;const d=this.createContactEquation(a,l,t,e,c,h);i.vsub(n,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(t.radius,d.ri),d.rj.scale(-e.radius,d.rj),d.ri.vadd(n,d.ri),d.ri.vsub(a.position,d.ri),d.rj.vadd(i,d.rj),d.rj.vsub(l.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,l,c,h,u){const d=this.createContactEquation(a,l,t,e,c,h);if(d.ni.set(0,0,1),o.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(t.radius,d.ri),n.vsub(i,Tr),d.ni.scale(d.ni.dot(Tr),Ec),Tr.vsub(Ec,d.rj),-Tr.dot(d.ni)<=t.radius){if(u)return!0;const p=d.ri,g=d.rj;p.vadd(n,p),p.vsub(a.position,p),g.vadd(i,g),g.vsub(l.position,g),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,u)}sphereBox(t,e,n,i,s,o,a,l,c,h,u){const d=this.v3pool,p=kx;n.vsub(i,Ar),e.getSideNormals(p,o);const g=t.radius;let m=!1;const f=Vx,v=Wx,x=Hx;let _=null,y=0,w=0,S=0,L=null;for(let F=0,Z=p.length;F!==Z&&m===!1;F++){const V=Ox;V.copy(p[F]);const O=V.length();V.normalize();const H=Ar.dot(V);if(H<O+g&&H>0){const Q=Bx,q=Ux;Q.copy(p[(F+1)%3]),q.copy(p[(F+2)%3]);const tt=Q.length(),ht=q.length();Q.normalize(),q.normalize();const yt=Ar.dot(Q),J=Ar.dot(q);if(yt<tt&&yt>-tt&&J<ht&&J>-ht){const zt=Math.abs(H-O-g);if((L===null||zt<L)&&(L=zt,w=yt,S=J,_=O,f.copy(V),v.copy(Q),x.copy(q),y++,u))return!0}}}if(y){m=!0;const F=this.createContactEquation(a,l,t,e,c,h);f.scale(-g,F.ri),F.ni.copy(f),F.ni.negate(F.ni),f.scale(_,f),v.scale(w,v),f.vadd(v,f),x.scale(S,x),f.vadd(x,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}let b=d.get();const A=Gx;for(let F=0;F!==2&&!m;F++)for(let Z=0;Z!==2&&!m;Z++)for(let V=0;V!==2&&!m;V++)if(b.set(0,0,0),F?b.vadd(p[0],b):b.vsub(p[0],b),Z?b.vadd(p[1],b):b.vsub(p[1],b),V?b.vadd(p[2],b):b.vsub(p[2],b),i.vadd(b,A),A.vsub(n,A),A.lengthSquared()<g*g){if(u)return!0;m=!0;const O=this.createContactEquation(a,l,t,e,c,h);O.ri.copy(A),O.ri.normalize(),O.ni.copy(O.ri),O.ri.scale(g,O.ri),O.rj.copy(b),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),O.rj.vadd(i,O.rj),O.rj.vsub(l.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}d.release(b),b=null;const I=d.get(),G=d.get(),X=d.get(),P=d.get(),R=d.get(),N=p.length;for(let F=0;F!==N&&!m;F++)for(let Z=0;Z!==N&&!m;Z++)if(F%3!==Z%3){p[Z].cross(p[F],I),I.normalize(),p[F].vadd(p[Z],G),X.copy(n),X.vsub(G,X),X.vsub(i,X);const V=X.dot(I);I.scale(V,P);let O=0;for(;O===F%3||O===Z%3;)O++;R.copy(n),R.vsub(P,R),R.vsub(G,R),R.vsub(i,R);const H=Math.abs(V),Q=R.length();if(H<p[O].length()&&Q<g){if(u)return!0;m=!0;const q=this.createContactEquation(a,l,t,e,c,h);G.vadd(P,q.rj),q.rj.copy(q.rj),R.negate(q.ni),q.ni.normalize(),q.ri.copy(q.rj),q.ri.vadd(i,q.ri),q.ri.vsub(n,q.ri),q.ri.normalize(),q.ri.scale(g,q.ri),q.ri.vadd(n,q.ri),q.ri.vsub(a.position,q.ri),q.rj.vadd(i,q.rj),q.rj.vsub(l.position,q.rj),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}}d.release(I,G,X,P,R)}planeBox(t,e,n,i,s,o,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,u)}convexConvex(t,e,n,i,s,o,a,l,c,h,u,d,p){const g=r_;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,g,d,p)){const m=[],f=o_;t.clipAgainstHull(n,s,e,i,o,g,-100,100,m);let v=0;for(let x=0;x!==m.length;x++){if(u)return!0;const _=this.createContactEquation(a,l,t,e,c,h),y=_.ri,w=_.rj;g.negate(_.ni),m[x].normal.negate(f),f.scale(m[x].depth,f),m[x].point.vadd(f,y),w.copy(m[x].point),y.vsub(n,y),w.vsub(i,w),y.vadd(n,y),y.vsub(a.position,y),w.vadd(i,w),w.vsub(l.position,w),this.result.push(_),v++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&v&&this.createFrictionFromAverage(v)}}sphereConvex(t,e,n,i,s,o,a,l,c,h,u){const d=this.v3pool;n.vsub(i,qx);const p=e.faceNormals,g=e.faces,m=e.vertices,f=t.radius;let v=!1;for(let x=0;x!==m.length;x++){const _=m[x],y=$x;o.vmult(_,y),i.vadd(y,y);const w=Yx;if(y.vsub(n,w),w.lengthSquared()<f*f){if(u)return!0;v=!0;const S=this.createContactEquation(a,l,t,e,c,h);S.ri.copy(w),S.ri.normalize(),S.ni.copy(S.ri),S.ri.scale(f,S.ri),y.vsub(i,S.rj),S.ri.vadd(n,S.ri),S.ri.vsub(a.position,S.ri),S.rj.vadd(i,S.rj),S.rj.vsub(l.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult);return}}for(let x=0,_=g.length;x!==_&&v===!1;x++){const y=p[x],w=g[x],S=Zx;o.vmult(y,S);const L=Jx;o.vmult(m[w[0]],L),L.vadd(i,L);const b=Kx;S.scale(-f,b),n.vadd(b,b);const A=Qx;b.vsub(L,A);const I=A.dot(S),G=t_;if(n.vsub(L,G),I<0&&G.dot(S)>0){const X=[];for(let P=0,R=w.length;P!==R;P++){const N=d.get();o.vmult(m[w[P]],N),i.vadd(N,N),X.push(N)}if(Fx(X,S,n)){if(u)return!0;v=!0;const P=this.createContactEquation(a,l,t,e,c,h);S.scale(-f,P.ri),S.negate(P.ni);const R=d.get();S.scale(-I,R);const N=d.get();S.scale(-f,N),n.vsub(i,P.rj),P.rj.vadd(N,P.rj),P.rj.vadd(R,P.rj),P.rj.vadd(i,P.rj),P.rj.vsub(l.position,P.rj),P.ri.vadd(n,P.ri),P.ri.vsub(a.position,P.ri),d.release(R),d.release(N),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult);for(let F=0,Z=X.length;F!==Z;F++)d.release(X[F]);return}else for(let P=0;P!==w.length;P++){const R=d.get(),N=d.get();o.vmult(m[w[(P+1)%w.length]],R),o.vmult(m[w[(P+2)%w.length]],N),i.vadd(R,R),i.vadd(N,N);const F=Xx;N.vsub(R,F);const Z=jx;F.unit(Z);const V=d.get(),O=d.get();n.vsub(R,O);const H=O.dot(Z);Z.scale(H,V),V.vadd(R,V);const Q=d.get();if(V.vsub(n,Q),H>0&&H*H<F.lengthSquared()&&Q.lengthSquared()<f*f){if(u)return!0;const q=this.createContactEquation(a,l,t,e,c,h);V.vsub(i,q.rj),V.vsub(n,q.ni),q.ni.normalize(),q.ni.scale(f,q.ri),q.rj.vadd(i,q.rj),q.rj.vsub(l.position,q.rj),q.ri.vadd(n,q.ri),q.ri.vsub(a.position,q.ri),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult);for(let tt=0,ht=X.length;tt!==ht;tt++)d.release(X[tt]);d.release(R),d.release(N),d.release(V),d.release(Q),d.release(O);return}d.release(R),d.release(N),d.release(V),d.release(Q),d.release(O)}for(let P=0,R=X.length;P!==R;P++)d.release(X[P])}}}planeConvex(t,e,n,i,s,o,a,l,c,h,u){const d=e_,p=n_;p.set(0,0,1),s.vmult(p,p);let g=0;const m=i_;for(let f=0;f!==e.vertices.length;f++)if(d.copy(e.vertices[f]),o.vmult(d,d),i.vadd(d,d),d.vsub(n,m),p.dot(m)<=0){if(u)return!0;const x=this.createContactEquation(a,l,t,e,c,h),_=s_;p.scale(p.dot(m),_),d.vsub(_,_),_.vsub(n,x.ri),x.ni.copy(p),d.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(l.position,x.rj),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,u)}sphereHeightfield(t,e,n,i,s,o,a,l,c,h,u){const d=e.data,p=t.radius,g=e.elementSize,m=x_,f=v_;Ft.pointToLocalFrame(i,o,n,f);let v=Math.floor((f.x-p)/g)-1,x=Math.ceil((f.x+p)/g)+1,_=Math.floor((f.y-p)/g)-1,y=Math.ceil((f.y+p)/g)+1;if(x<0||y<0||v>d.length||_>d[0].length)return;v<0&&(v=0),x<0&&(x=0),_<0&&(_=0),y<0&&(y=0),v>=d.length&&(v=d.length-1),x>=d.length&&(x=d.length-1),y>=d[0].length&&(y=d[0].length-1),_>=d[0].length&&(_=d[0].length-1);const w=[];e.getRectMinMax(v,_,x,y,w);const S=w[0],L=w[1];if(f.z-p>L||f.z+p<S)return;const b=this.result;for(let A=v;A<x;A++)for(let I=_;I<y;I++){const G=b.length;let X=!1;if(e.getConvexTrianglePillar(A,I,!1),Ft.pointToWorldFrame(i,o,e.pillarOffset,m),n.distanceTo(m)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(X=this.sphereConvex(t,e.pillarConvex,n,m,s,o,a,l,t,e,u)),u&&X||(e.getConvexTrianglePillar(A,I,!0),Ft.pointToWorldFrame(i,o,e.pillarOffset,m),n.distanceTo(m)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(X=this.sphereConvex(t,e.pillarConvex,n,m,s,o,a,l,t,e,u)),u&&X))return!0;if(b.length-G>2)return}}boxHeightfield(t,e,n,i,s,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,u)}convexHeightfield(t,e,n,i,s,o,a,l,c,h,u){const d=e.data,p=e.elementSize,g=t.boundingSphereRadius,m=m_,f=g_,v=p_;Ft.pointToLocalFrame(i,o,n,v);let x=Math.floor((v.x-g)/p)-1,_=Math.ceil((v.x+g)/p)+1,y=Math.floor((v.y-g)/p)-1,w=Math.ceil((v.y+g)/p)+1;if(_<0||w<0||x>d.length||y>d[0].length)return;x<0&&(x=0),_<0&&(_=0),y<0&&(y=0),w<0&&(w=0),x>=d.length&&(x=d.length-1),_>=d.length&&(_=d.length-1),w>=d[0].length&&(w=d[0].length-1),y>=d[0].length&&(y=d[0].length-1);const S=[];e.getRectMinMax(x,y,_,w,S);const L=S[0],b=S[1];if(!(v.z-g>b||v.z+g<L))for(let A=x;A<_;A++)for(let I=y;I<w;I++){let G=!1;if(e.getConvexTrianglePillar(A,I,!1),Ft.pointToWorldFrame(i,o,e.pillarOffset,m),n.distanceTo(m)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.convexConvex(t,e.pillarConvex,n,m,s,o,a,l,null,null,u,f,null)),u&&G||(e.getConvexTrianglePillar(A,I,!0),Ft.pointToWorldFrame(i,o,e.pillarOffset,m),n.distanceTo(m)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.convexConvex(t,e.pillarConvex,n,m,s,o,a,l,null,null,u,f,null)),u&&G))return!0}}sphereParticle(t,e,n,i,s,o,a,l,c,h,u){const d=h_;if(d.set(0,0,1),i.vsub(n,d),d.lengthSquared()<=t.radius*t.radius){if(u)return!0;const g=this.createContactEquation(l,a,e,t,c,h);d.normalize(),g.rj.copy(d),g.rj.scale(t.radius,g.rj),g.ni.copy(d),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,l,c,h,u){const d=a_;d.set(0,0,1),a.quaternion.vmult(d,d);const p=l_;if(i.vsub(a.position,p),d.dot(p)<=0){if(u)return!0;const m=this.createContactEquation(l,a,e,t,c,h);m.ni.copy(d),m.ni.negate(m.ni),m.ri.set(0,0,0);const f=c_;d.scale(d.dot(i),f),i.vsub(f,f),m.rj.copy(f),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,u)}convexParticle(t,e,n,i,s,o,a,l,c,h,u){let d=-1;const p=d_,g=f_;let m=null;const f=u_;if(f.copy(i),f.vsub(n,f),s.conjugate(Tc),Tc.vmult(f,f),t.pointIsInside(f)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let v=0,x=t.faces.length;v!==x;v++){const _=[t.worldVertices[t.faces[v][0]]],y=t.worldFaceNormals[v];i.vsub(_[0],Ac);const w=-y.dot(Ac);if(m===null||Math.abs(w)<Math.abs(m)){if(u)return!0;m=w,d=v,p.copy(y)}}if(d!==-1){const v=this.createContactEquation(l,a,e,t,c,h);p.scale(m,g),g.vadd(i,g),g.vsub(n,g),v.rj.copy(g),p.negate(v.ni),v.ri.set(0,0,0);const x=v.ri,_=v.rj;x.vadd(i,x),x.vsub(l.position,x),_.vadd(n,_),_.vsub(a.position,_),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,l,c,h,u){return this.convexHeightfield(e,t,i,n,o,s,l,a,c,h,u)}particleCylinder(t,e,n,i,s,o,a,l,c,h,u){return this.convexParticle(e,t,i,n,o,s,l,a,c,h,u)}sphereTrimesh(t,e,n,i,s,o,a,l,c,h,u){const d=Mx,p=bx,g=Sx,m=Ex,f=Tx,v=Ax,x=Rx,_=wx,y=_x,w=Dx;Ft.pointToLocalFrame(i,o,n,f);const S=t.radius;x.lowerBound.set(f.x-S,f.y-S,f.z-S),x.upperBound.set(f.x+S,f.y+S,f.z+S),e.getTrianglesInAABB(x,w);const L=yx,b=t.radius*t.radius;for(let P=0;P<w.length;P++)for(let R=0;R<3;R++)if(e.getVertex(e.indices[w[P]*3+R],L),L.vsub(f,y),y.lengthSquared()<=b){if(_.copy(L),Ft.pointToWorldFrame(i,o,_,L),L.vsub(n,y),u)return!0;let N=this.createContactEquation(a,l,t,e,c,h);N.ni.copy(y),N.ni.normalize(),N.ri.copy(N.ni),N.ri.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.copy(L),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}for(let P=0;P<w.length;P++)for(let R=0;R<3;R++){e.getVertex(e.indices[w[P]*3+R],d),e.getVertex(e.indices[w[P]*3+(R+1)%3],p),p.vsub(d,g),f.vsub(p,v);const N=v.dot(g);f.vsub(d,v);let F=v.dot(g);if(F>0&&N<0&&(f.vsub(d,v),m.copy(g),m.normalize(),F=v.dot(m),m.scale(F,v),v.vadd(d,v),v.distanceTo(f)<t.radius)){if(u)return!0;const V=this.createContactEquation(a,l,t,e,c,h);v.vsub(f,V.ni),V.ni.normalize(),V.ni.scale(t.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),Ft.pointToWorldFrame(i,o,v,v),v.vsub(l.position,V.rj),Ft.vectorToWorldFrame(o,V.ni,V.ni),Ft.vectorToWorldFrame(o,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}const A=Cx,I=Lx,G=Px,X=xx;for(let P=0,R=w.length;P!==R;P++){e.getTriangleVertices(w[P],A,I,G),e.getNormal(w[P],X),f.vsub(A,v);let N=v.dot(X);if(X.scale(N,v),f.vsub(v,v),N=v.distanceTo(f),ie.pointInTriangle(v,A,I,G)&&N<t.radius){if(u)return!0;let F=this.createContactEquation(a,l,t,e,c,h);v.vsub(f,F.ni),F.ni.normalize(),F.ni.scale(t.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),Ft.pointToWorldFrame(i,o,v,v),v.vsub(l.position,F.rj),Ft.vectorToWorldFrame(o,F.ni,F.ni),Ft.vectorToWorldFrame(o,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}w.length=0}planeTrimesh(t,e,n,i,s,o,a,l,c,h,u){const d=new M,p=mx;p.set(0,0,1),s.vmult(p,p);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,d);const m=new M;m.copy(d),Ft.pointToWorldFrame(i,o,m,d);const f=gx;if(d.vsub(n,f),p.dot(f)<=0){if(u)return!0;const x=this.createContactEquation(a,l,t,e,c,h);x.ni.copy(p);const _=vx;p.scale(f.dot(p),_),d.vsub(_,_),x.ri.copy(_),x.ri.vsub(a.position,x.ri),x.rj.copy(d),x.rj.vsub(l.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const jn=new M,Bi=new M,Ui=new M,ux=new M,dx=new M,fx=new Zt,px=new Zt,mx=new M,gx=new M,vx=new M,xx=new M,_x=new M;new M;const yx=new M,wx=new M,Mx=new M,bx=new M,Sx=new M,Ex=new M,Tx=new M,Ax=new M,Cx=new M,Lx=new M,Px=new M,Rx=new Ie,Dx=[],Tr=new M,Ec=new M,Ix=new M,zx=new M,Nx=new M;function Fx(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=Ix;r[(s+1)%i].vsub(o,a);const l=zx;a.cross(t,l);const c=Nx;e.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const Ar=new M,Ox=new M,Bx=new M,Ux=new M,kx=[new M,new M,new M,new M,new M,new M],Gx=new M,Vx=new M,Wx=new M,Hx=new M,qx=new M,Xx=new M,jx=new M,Yx=new M,$x=new M,Zx=new M,Jx=new M,Kx=new M,Qx=new M,t_=new M;new M;new M;const e_=new M,n_=new M,i_=new M,s_=new M,r_=new M,o_=new M,a_=new M,l_=new M,c_=new M,h_=new M,Tc=new Zt,u_=new M;new M;const d_=new M,Ac=new M,f_=new M,p_=new M,m_=new M,g_=[0],v_=new M,x_=new M;class Cc{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||Lc(t,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||Lc(e,h)}}}function Lc(r,t){r.push((t&4294901760)>>16,t&65535)}const $o=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class __{constructor(){this.data={keys:[]}}get(t,e){const n=$o(t,e);return this.data[n]}set(t,e,n){const i=$o(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=$o(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class y_ extends Ah{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Mv,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new sx,this.constraints=[],this.narrowphase=new hx(this),this.collisionMatrix=new fc,this.collisionMatrixPrevious=new fc,this.bodyOverlapKeeper=new Cc,this.shapeOverlapKeeper=new Cc,this.contactmaterials=[],this.contactMaterialTable=new __,this.defaultMaterial=new os("default"),this.defaultContactMaterial=new Kr(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof kr?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=ie.ALL,n.from=t,n.to=e,n.callback=i,Zo.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=ie.ANY,n.from=t,n.to=e,n.result=i,Zo.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=ie.CLOSEST,n.from=t,n.to=e,n.result=i,Zo.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof ot&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=ae.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=ae.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(ae.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=E_,i=T_,s=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,u=ot.DYNAMIC;let d=-1/0;const p=this.constraints,g=S_;l.length();const m=l.x,f=l.y,v=l.z;let x=0;for(c&&(d=ae.now()),x=0;x!==s;x++){const P=o[x];if(P.type===u){const R=P.force,N=P.mass;R.x+=N*m,R.y+=N*f,R.z+=N*v}}for(let P=0,R=this.subsystems.length;P!==R;P++)this.subsystems[P].update();c&&(d=ae.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=ae.now()-d);let _=p.length;for(x=0;x!==_;x++){const P=p[x];if(!P.collideConnected)for(let R=n.length-1;R>=0;R-=1)(P.bodyA===n[R]&&P.bodyB===i[R]||P.bodyB===n[R]&&P.bodyA===i[R])&&(n.splice(R,1),i.splice(R,1))}this.collisionMatrixTick(),c&&(d=ae.now());const y=b_,w=e.length;for(x=0;x!==w;x++)y.push(e[x]);e.length=0;const S=this.frictionEquations.length;for(x=0;x!==S;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,y,this.frictionEquations,g),c&&(h.narrowphase=ae.now()-d),c&&(d=ae.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);const L=e.length;for(let P=0;P!==L;P++){const R=e[P],N=R.bi,F=R.bj,Z=R.si,V=R.sj;let O;if(N.material&&F.material?O=this.getContactMaterial(N.material,F.material)||this.defaultContactMaterial:O=this.defaultContactMaterial,O.friction,N.material&&F.material&&(N.material.friction>=0&&F.material.friction>=0&&N.material.friction*F.material.friction,N.material.restitution>=0&&F.material.restitution>=0&&(R.restitution=N.material.restitution*F.material.restitution)),a.addEquation(R),N.allowSleep&&N.type===ot.DYNAMIC&&N.sleepState===ot.SLEEPING&&F.sleepState===ot.AWAKE&&F.type!==ot.STATIC){const H=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),Q=F.sleepSpeedLimit**2;H>=Q*2&&(N.wakeUpAfterNarrowphase=!0)}if(F.allowSleep&&F.type===ot.DYNAMIC&&F.sleepState===ot.SLEEPING&&N.sleepState===ot.AWAKE&&N.type!==ot.STATIC){const H=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),Q=N.sleepSpeedLimit**2;H>=Q*2&&(F.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(N,F,!0),this.collisionMatrixPrevious.get(N,F)||(ms.body=F,ms.contact=R,N.dispatchEvent(ms),ms.body=N,F.dispatchEvent(ms)),this.bodyOverlapKeeper.set(N.id,F.id),this.shapeOverlapKeeper.set(Z.id,V.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=ae.now()-d,d=ae.now()),x=0;x!==s;x++){const P=o[x];P.wakeUpAfterNarrowphase&&(P.wakeUp(),P.wakeUpAfterNarrowphase=!1)}for(_=p.length,x=0;x!==_;x++){const P=p[x];P.update();for(let R=0,N=P.equations.length;R!==N;R++){const F=P.equations[R];a.addEquation(F)}}a.solve(t,this),c&&(h.solve=ae.now()-d),a.removeAllEquations();const b=Math.pow;for(x=0;x!==s;x++){const P=o[x];if(P.type&u){const R=b(1-P.linearDamping,t),N=P.velocity;N.scale(R,N);const F=P.angularVelocity;if(F){const Z=b(1-P.angularDamping,t);F.scale(Z,F)}}}this.dispatchEvent(M_),c&&(d=ae.now());const I=this.stepnumber%(this.quatNormalizeSkip+1)===0,G=this.quatNormalizeFast;for(x=0;x!==s;x++)o[x].integrate(t,I,G);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=ae.now()-d),this.stepnumber+=1,this.dispatchEvent(w_);let X=!0;if(this.allowSleep)for(X=!1,x=0;x!==s;x++){const P=o[x];P.sleepTick(this.time),P.sleepState!==ot.SLEEPING&&(X=!0)}this.hasActiveBodies=X}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(wn,Mn),t){for(let s=0,o=wn.length;s<o;s+=2)gs.bodyA=this.getBodyById(wn[s]),gs.bodyB=this.getBodyById(wn[s+1]),this.dispatchEvent(gs);gs.bodyA=gs.bodyB=null}if(e){for(let s=0,o=Mn.length;s<o;s+=2)vs.bodyA=this.getBodyById(Mn[s]),vs.bodyB=this.getBodyById(Mn[s+1]),this.dispatchEvent(vs);vs.bodyA=vs.bodyB=null}wn.length=Mn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(wn,Mn),n){for(let s=0,o=wn.length;s<o;s+=2){const a=this.getShapeById(wn[s]),l=this.getShapeById(wn[s+1]);bn.shapeA=a,bn.shapeB=l,a&&(bn.bodyA=a.body),l&&(bn.bodyB=l.body),this.dispatchEvent(bn)}bn.bodyA=bn.bodyB=bn.shapeA=bn.shapeB=null}if(i){for(let s=0,o=Mn.length;s<o;s+=2){const a=this.getShapeById(Mn[s]),l=this.getShapeById(Mn[s+1]);Sn.shapeA=a,Sn.shapeB=l,a&&(Sn.bodyA=a.body),l&&(Sn.bodyB=l.body),this.dispatchEvent(Sn)}Sn.bodyA=Sn.bodyB=Sn.shapeA=Sn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Ie;const Zo=new ie,ae=globalThis.performance||{};if(!ae.now){let r=Date.now();ae.timing&&ae.timing.navigationStart&&(r=ae.timing.navigationStart),ae.now=()=>Date.now()-r}new M;const w_={type:"postStep"},M_={type:"preStep"},ms={type:ot.COLLIDE_EVENT_NAME,body:null,contact:null},b_=[],S_=[],E_=[],T_=[],wn=[],Mn=[],gs={type:"beginContact",bodyA:null,bodyB:null},vs={type:"endContact",bodyA:null,bodyB:null},bn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Sn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class Qr{constructor(){this.meshes=[],this.bodies=[],this.constraints=[]}syncMeshesToBodies(){this.meshes.forEach((t,e)=>{t.position.x=this.bodies[e].position.x,t.position.y=this.bodies[e].position.y,t.position.z=this.bodies[e].position.z,t.quaternion.x=this.bodies[e].quaternion.x,t.quaternion.y=this.bodies[e].quaternion.y,t.quaternion.z=this.bodies[e].quaternion.z,t.quaternion.w=this.bodies[e].quaternion.w})}}class A_ extends Qr{constructor(t,e,n,i,s,o,a,l=1,c=.05,h=.1){super(),this.bodies.push(new ot({mass:l,position:new M(t,e,n),shape:new Hs(new M(i/2,s/2,o/2)),material:new os({friction:c,restitution:h})}));let u=new Xt(new kn(i,s,o),a);u.castShadow=!0,u.receiveShadow=!0,u.translateX(t),u.translateY(e),u.translateZ(n),this.meshes.push(u)}rotateY(t){this.bodies[0].quaternion.setFromAxisAngle(new M(0,1,0),t),this.meshes[0].rotateY(t)}}const Pc={type:"change"},Jo={type:"start"},Rc={type:"end"};class C_ extends gi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mi.ROTATE,MIDDLE:Mi.DOLLY,RIGHT:Mi.PAN},this.touches={ONE:bi.ROTATE,TWO:bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",Ne),this._domElementKeyEvents=D},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Pc),n.update(),s=i.NONE},this.update=function(){const D=new z,U=new ci().setFromUnitVectors(t.up,new z(0,1,0)),ct=U.clone().invert(),ft=new z,lt=new ci,gt=2*Math.PI;return function(){const Rt=n.object.position;D.copy(Rt).sub(n.target),D.applyQuaternion(U),a.setFromVector3(D),n.autoRotate&&s===i.NONE&&A(L()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Dt=n.minAzimuthAngle,Wt=n.maxAzimuthAngle;return isFinite(Dt)&&isFinite(Wt)&&(Dt<-Math.PI?Dt+=gt:Dt>Math.PI&&(Dt-=gt),Wt<-Math.PI?Wt+=gt:Wt>Math.PI&&(Wt-=gt),Dt<=Wt?a.theta=Math.max(Dt,Math.min(Wt,a.theta)):a.theta=a.theta>(Dt+Wt)/2?Math.max(Dt,a.theta):Math.min(Wt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),D.setFromSpherical(a),D.applyQuaternion(ct),Rt.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,u||ft.distanceToSquared(n.object.position)>o||8*(1-lt.dot(n.object.quaternion))>o?(n.dispatchEvent(Pc),ft.copy(n.object.position),lt.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",j),n.domElement.removeEventListener("pointerdown",Qt),n.domElement.removeEventListener("pointercancel",Ae),n.domElement.removeEventListener("wheel",ze),n.domElement.removeEventListener("pointermove",he),n.domElement.removeEventListener("pointerup",se),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Ne)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new lc,l=new lc;let c=1;const h=new z;let u=!1;const d=new rt,p=new rt,g=new rt,m=new rt,f=new rt,v=new rt,x=new rt,_=new rt,y=new rt,w=[],S={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function b(){return Math.pow(.95,n.zoomSpeed)}function A(D){l.theta-=D}function I(D){l.phi-=D}const G=function(){const D=new z;return function(ct,ft){D.setFromMatrixColumn(ft,0),D.multiplyScalar(-ct),h.add(D)}}(),X=function(){const D=new z;return function(ct,ft){n.screenSpacePanning===!0?D.setFromMatrixColumn(ft,1):(D.setFromMatrixColumn(ft,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(ct),h.add(D)}}(),P=function(){const D=new z;return function(ct,ft){const lt=n.domElement;if(n.object.isPerspectiveCamera){const gt=n.object.position;D.copy(gt).sub(n.target);let mt=D.length();mt*=Math.tan(n.object.fov/2*Math.PI/180),G(2*ct*mt/lt.clientHeight,n.object.matrix),X(2*ft*mt/lt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(G(ct*(n.object.right-n.object.left)/n.object.zoom/lt.clientWidth,n.object.matrix),X(ft*(n.object.top-n.object.bottom)/n.object.zoom/lt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(D){n.object.isPerspectiveCamera?c/=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*D)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(D){n.object.isPerspectiveCamera?c*=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/D)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(D){d.set(D.clientX,D.clientY)}function Z(D){x.set(D.clientX,D.clientY)}function V(D){m.set(D.clientX,D.clientY)}function O(D){p.set(D.clientX,D.clientY),g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const U=n.domElement;A(2*Math.PI*g.x/U.clientHeight),I(2*Math.PI*g.y/U.clientHeight),d.copy(p),n.update()}function H(D){_.set(D.clientX,D.clientY),y.subVectors(_,x),y.y>0?R(b()):y.y<0&&N(b()),x.copy(_),n.update()}function Q(D){f.set(D.clientX,D.clientY),v.subVectors(f,m).multiplyScalar(n.panSpeed),P(v.x,v.y),m.copy(f),n.update()}function q(D){D.deltaY<0?N(b()):D.deltaY>0&&R(b()),n.update()}function tt(D){let U=!1;switch(D.code){case n.keys.UP:P(0,n.keyPanSpeed),U=!0;break;case n.keys.BOTTOM:P(0,-n.keyPanSpeed),U=!0;break;case n.keys.LEFT:P(n.keyPanSpeed,0),U=!0;break;case n.keys.RIGHT:P(-n.keyPanSpeed,0),U=!0;break}U&&(D.preventDefault(),n.update())}function ht(){if(w.length===1)d.set(w[0].pageX,w[0].pageY);else{const D=.5*(w[0].pageX+w[1].pageX),U=.5*(w[0].pageY+w[1].pageY);d.set(D,U)}}function yt(){if(w.length===1)m.set(w[0].pageX,w[0].pageY);else{const D=.5*(w[0].pageX+w[1].pageX),U=.5*(w[0].pageY+w[1].pageY);m.set(D,U)}}function J(){const D=w[0].pageX-w[1].pageX,U=w[0].pageY-w[1].pageY,ct=Math.sqrt(D*D+U*U);x.set(0,ct)}function zt(){n.enableZoom&&J(),n.enablePan&&yt()}function Mt(){n.enableZoom&&J(),n.enableRotate&&ht()}function bt(D){if(w.length==1)p.set(D.pageX,D.pageY);else{const ct=wt(D),ft=.5*(D.pageX+ct.x),lt=.5*(D.pageY+ct.y);p.set(ft,lt)}g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const U=n.domElement;A(2*Math.PI*g.x/U.clientHeight),I(2*Math.PI*g.y/U.clientHeight),d.copy(p)}function pt(D){if(w.length===1)f.set(D.pageX,D.pageY);else{const U=wt(D),ct=.5*(D.pageX+U.x),ft=.5*(D.pageY+U.y);f.set(ct,ft)}v.subVectors(f,m).multiplyScalar(n.panSpeed),P(v.x,v.y),m.copy(f)}function Gt(D){const U=wt(D),ct=D.pageX-U.x,ft=D.pageY-U.y,lt=Math.sqrt(ct*ct+ft*ft);_.set(0,lt),y.set(0,Math.pow(_.y/x.y,n.zoomSpeed)),R(y.y),x.copy(_)}function Et(D){n.enableZoom&&Gt(D),n.enablePan&&pt(D)}function _t(D){n.enableZoom&&Gt(D),n.enableRotate&&bt(D)}function Qt(D){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",he),n.domElement.addEventListener("pointerup",se)),nt(D),D.pointerType==="touch"?C(D):re(D))}function he(D){n.enabled!==!1&&(D.pointerType==="touch"?E(D):Vt(D))}function se(D){it(D),w.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",he),n.domElement.removeEventListener("pointerup",se)),n.dispatchEvent(Rc),s=i.NONE}function Ae(D){it(D)}function re(D){let U;switch(D.button){case 0:U=n.mouseButtons.LEFT;break;case 1:U=n.mouseButtons.MIDDLE;break;case 2:U=n.mouseButtons.RIGHT;break;default:U=-1}switch(U){case Mi.DOLLY:if(n.enableZoom===!1)return;Z(D),s=i.DOLLY;break;case Mi.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;V(D),s=i.PAN}else{if(n.enableRotate===!1)return;F(D),s=i.ROTATE}break;case Mi.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;F(D),s=i.ROTATE}else{if(n.enablePan===!1)return;V(D),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Jo)}function Vt(D){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;O(D);break;case i.DOLLY:if(n.enableZoom===!1)return;H(D);break;case i.PAN:if(n.enablePan===!1)return;Q(D);break}}function ze(D){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(D.preventDefault(),n.dispatchEvent(Jo),q(D),n.dispatchEvent(Rc))}function Ne(D){n.enabled===!1||n.enablePan===!1||tt(D)}function C(D){switch(at(D),w.length){case 1:switch(n.touches.ONE){case bi.ROTATE:if(n.enableRotate===!1)return;ht(),s=i.TOUCH_ROTATE;break;case bi.PAN:if(n.enablePan===!1)return;yt(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case bi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;zt(),s=i.TOUCH_DOLLY_PAN;break;case bi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Mt(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Jo)}function E(D){switch(at(D),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;bt(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;pt(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Et(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_t(D),n.update();break;default:s=i.NONE}}function j(D){n.enabled!==!1&&D.preventDefault()}function nt(D){w.push(D)}function it(D){delete S[D.pointerId];for(let U=0;U<w.length;U++)if(w[U].pointerId==D.pointerId){w.splice(U,1);return}}function at(D){let U=S[D.pointerId];U===void 0&&(U=new rt,S[D.pointerId]=U),U.set(D.pageX,D.pageY)}function wt(D){const U=D.pointerId===w[0].pointerId?w[1]:w[0];return S[U.pointerId]}n.domElement.addEventListener("contextmenu",j),n.domElement.addEventListener("pointerdown",Qt),n.domElement.addEventListener("pointercancel",Ae),n.domElement.addEventListener("wheel",ze,{passive:!1}),this.update()}}const L_=new Ws({color:16777215});class P_ extends Qr{constructor(t=0,e=100,n=100){super(),this.ylevel=t;const i=new Yr(e,n),s=new Xt(i,L_);s.rotation.x=-Math.PI/2,s.position.y=t,this.mesh=s,this.meshes.push(s);const o=new nx,a=new ot({mass:0});a.addShape(o),a.quaternion.setFromAxisAngle(new M(1,0,0),-Math.PI/2),a.position.y=t,this.body=a,this.bodies.push(a)}syncMeshesToBodies(){}}class R_{constructor(t){It(this,"canvas");It(this,"scene");It(this,"renderer");It(this,"gameObjects");It(this,"world");It(this,"controls");It(this,"camera");It(this,"cameraPosition");It(this,"cameraQuaternion");It(this,"resizeFunction");It(this,"callback");It(this,"ground");It(this,"raceTrack");this.canvas=t,this.createCamera(),this.scene=new c0,this.addLighting(),this.createRenderer(),this.enableAutoResizer(),this.setupControls(),this.createPhyiscsWorld(),this.callback=()=>{};let e=new j0;const n=()=>{const i=Math.min(e.getDelta(),.1);i>0&&this.update(i)};this.renderer.setAnimationLoop(n),this.gameObjects=[],this.ground=new P_,this.addGameObject(this.ground)}update(t){this.world.step(t),this.gameObjects.forEach(n=>n.syncMeshesToBodies()),this.controls.update(),this.cameraPosition.lerp(this.camera.position,.1),this.cameraQuaternion.slerp(this.camera.quaternion,.1);const e=this.camera.clone();e.position.copy(this.cameraPosition),e.quaternion.copy(this.cameraQuaternion),this.callback(t),this.renderer.render(this.scene,e)}requestCallbackBeforeRender(t){this.callback=t}addGameObject(t){this.gameObjects.push(t),t.meshes.forEach(e=>this.scene.add(e)),t.bodies.forEach(e=>this.world.addBody(e)),t.constraints.forEach(e=>this.world.addConstraint(e))}removeGameObject(t){this.gameObjects=this.gameObjects.filter(e=>e!==t),t.meshes.forEach(e=>this.scene.remove(e)),t.bodies.forEach(e=>this.world.removeBody(e)),t.constraints.forEach(e=>this.world.removeConstraint(e))}addLighting(){this.scene.add(new X0(4210752));const t=new q0(16777215,.6);t.position.set(-1.1,1,.9),t.castShadow=!0,t.shadow.mapSize.width=1024,t.shadow.mapSize.height=1024,this.scene.add(t)}createRenderer(){this.renderer=new ph({antialias:!0,canvas:this.canvas}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Yc}createCamera(){this.camera=new Ge(70,window.innerWidth/window.innerHeight,.01,100),this.camera.position.z=4,this.camera.position.y=4,this.camera.position.x=4,this.cameraPosition=this.camera.position.clone(),this.cameraQuaternion=this.camera.quaternion.clone()}createPhyiscsWorld(){this.world=new y_,this.world.gravity.set(0,-9.82,0),this.world.allowSleep=!0}setGravity(t,e,n){this.world.gravity.set(t,e,n)}enableAutoResizer(){if(this.resizeFunction)return;const t=()=>{this.canvas.width=this.canvas.offsetWidth,this.canvas.height=this.canvas.offsetHeight,this.renderer.setSize(this.canvas.offsetWidth,this.canvas.offsetHeight,!1),this.camera.aspect=this.canvas.offsetWidth/this.canvas.offsetHeight,this.camera.updateProjectionMatrix()};this.resizeFunction=t,window.addEventListener("resize",t),t()}disableAutoResizer(){this.resizeFunction&&window.removeEventListener("resize",this.resizeFunction),this.resizeFunction=void 0}setupControls(){this.controls=new C_(this.camera,this.renderer.domElement),this.controls.enableDamping=!1}}const cn=8;class D_ extends Qr{constructor(t,e,n,i,s,o=1,a=.25,l=.1){super();const c=new os({friction:a,restitution:l}),h=new kn(.1,.1,.2),u=new Xt(h,i);u.castShadow=!0,u.receiveShadow=!0,u.position.x=t,u.position.y=e,u.position.z=n,u.updateMatrix(),this.meshes.push(u),this.carBodyMesh=u;const d=new Hs(new M(.05,.05,.1)),p=new ot({mass:o/2,collisionFilterGroup:cn,collisionFilterMask:~cn});p.addShape(d),p.position.x=u.position.x,p.position.y=u.position.y,p.position.z=u.position.z,this.bodies.push(p);const g=new ni(.033,.033,.02,16);g.rotateZ(Math.PI/2);const m=new Xt(g,s);m.castShadow=!0,m.receiveShadow=!0,m.position.x=-.1+u.position.x,m.position.y=-.05+u.position.y,m.position.z=-.1+u.position.z,this.meshes.push(m),this.wheelLFMesh=m;const f=new Er(.033),v=new ot({mass:o/8,material:c,collisionFilterGroup:cn,collisionFilterMask:~cn});v.addShape(f),v.position.x=m.position.x,v.position.y=m.position.y,v.position.z=m.position.z,this.bodies.push(v);const x=new ni(.033,.033,.02,16);x.rotateZ(Math.PI/2);const _=new Xt(x,s);_.castShadow=!0,_.receiveShadow=!0,_.position.x=.1+u.position.x,_.position.y=-.05+u.position.y,_.position.z=-.1+u.position.z,this.meshes.push(_),this.wheelRFMesh=_;const y=new Er(.033),w=new ot({mass:1,material:c,collisionFilterGroup:cn,collisionFilterMask:~cn});w.addShape(y),w.position.x=_.position.x,w.position.y=_.position.y,w.position.z=_.position.z,this.bodies.push(w);const S=new ni(.04,.04,.033);S.rotateZ(Math.PI/2);const L=new Xt(S,s);L.castShadow=!0,L.receiveShadow=!0,L.position.x=-.1+u.position.x,L.position.y=-.05+u.position.y,L.position.z=.1+u.position.z,this.meshes.push(L),this.wheelLBMesh=L;const b=new Er(.04),A=new ot({mass:1,material:c,collisionFilterGroup:cn,collisionFilterMask:~cn});A.addShape(b),A.position.x=L.position.x,A.position.y=L.position.y,A.position.z=L.position.z,this.bodies.push(A);const I=new ni(.04,.04,.033);I.rotateZ(Math.PI/2);const G=new Xt(I,s);G.castShadow=!0,G.receiveShadow=!0,G.position.x=.1+u.position.x,G.position.y=-.05+u.position.y,G.position.z=.1+u.position.z,this.meshes.push(G),this.wheelRBMesh=G;const X=new Er(.04),P=new ot({mass:1,material:c,collisionFilterGroup:cn,collisionFilterMask:~cn});P.addShape(X),P.position.x=G.position.x,P.position.y=G.position.y,P.position.z=G.position.z,this.bodies.push(P);const R=new M(1,0,0),N=new M(1,0,0),F=new M(1,0,0),Z=new M(1,0,0);this.constraintLF=new Sr(p,v,{pivotA:new M(-.1,-.05,-.1),axisA:R,maxForce:.99}),this.constraints.push(this.constraintLF),this.constraintRF=new Sr(p,w,{pivotA:new M(.1,-.05,-.1),axisA:N,maxForce:.99}),this.constraints.push(this.constraintRF),this.constraintLB=new Sr(p,A,{pivotA:new M(-.1,-.05,.1),axisA:F,maxForce:.99}),this.constraints.push(this.constraintLB),this.constraintRB=new Sr(p,P,{pivotA:new M(.1,-.05,.1),axisA:Z,maxForce:.99}),this.constraints.push(this.constraintRB),this.accelMotorForce=.004,this.brakeMotorForce=1,this.constraintLB.setMotorMaxForce(this.accelMotorForce),this.constraintRB.setMotorMaxForce(this.accelMotorForce),this.constraintLF.setMotorMaxForce(this.brakeMotorForce),this.constraintRF.setMotorMaxForce(this.brakeMotorForce),this.constraintLB.enableMotor(),this.constraintRB.enableMotor()}getRays(){let t=this.wheelLFMesh.position.clone().sub(this.wheelLBMesh.position).normalize(),e=this.wheelRFMesh.position.clone().sub(this.wheelRBMesh.position).normalize(),n=t.clone().add(e).divideScalar(2),i=this.wheelLBMesh.position.clone().sub(this.wheelRBMesh.position).normalize(),s=this.wheelLFMesh.position.clone().sub(this.wheelRFMesh.position).normalize(),o=i.clone().add(s).normalize();n.clone().cross(o);let a=this.carBodyMesh.position.clone().add(n.clone().multiplyScalar(.1));return[0,-15,15,-30,30,-45,45,-60,60,-75,75,-90,90].map(h=>h*Math.PI/180).map(h=>{let u=n.clone().multiplyScalar(Math.cos(h)).add(o.clone().multiplyScalar(Math.sin(h))),d=a.clone().add(o.clone().multiplyScalar(.05*Math.sin(h)));return new Th(d,u,.01,1)})}getPosition(){return this.carBodyMesh.position.clone()}getForwardDir(){let t=this.wheelLFMesh.position.clone().sub(this.wheelLBMesh.position).normalize(),e=this.wheelRFMesh.position.clone().sub(this.wheelRBMesh.position).normalize();return t.clone().add(e).divideScalar(2)}rotateY(t){this.bodies.forEach(e=>{e.quaternion=e.quaternion.mult(new Zt().setFromAxisAngle(new M(0,1,0),-t))})}applyInput(t,e,n,i,s){t?(this.constraintLB.setMotorSpeed(100),this.constraintRB.setMotorSpeed(100)):n?(this.constraintLB.setMotorSpeed(-20),this.constraintRB.setMotorSpeed(-20)):(this.constraintLB.setMotorSpeed(0),this.constraintRB.setMotorSpeed(0)),e?(this.constraintLF.axisA.z=-.5,this.constraintRF.axisA.z=-.5):i?(this.constraintLF.axisA.z=.5,this.constraintRF.axisA.z=.5):(this.constraintLF.axisA.z=0,this.constraintRF.axisA.z=0),s?(this.constraintLB.setMotorMaxForce(this.brakeMotorForce),this.constraintRB.setMotorMaxForce(this.brakeMotorForce),this.constraintLB.setMotorSpeed(0),this.constraintRB.setMotorSpeed(0),this.constraintLF.enableMotor(),this.constraintRF.enableMotor(),this.constraintLF.setMotorMaxForce(this.brakeMotorForce),this.constraintRF.setMotorMaxForce(this.brakeMotorForce),this.constraintLF.setMotorSpeed(0),this.constraintRF.setMotorSpeed(0)):(this.constraintLF.disableMotor(),this.constraintRF.disableMotor(),this.constraintLB.setMotorMaxForce(this.accelMotorForce),this.constraintRB.setMotorMaxForce(this.accelMotorForce))}}const ki=[];function I_(r,t=_e){let e;const n=new Set;function i(a){if(mi(r,a)&&(r=a,e)){const l=!ki.length;for(const c of n)c[1](),ki.push(c,r);if(l){for(let c=0;c<ki.length;c+=2)ki[c][0](ki[c+1]);ki.length=0}}}function s(a){i(a(r))}function o(a,l=_e){const c=[a,l];return n.add(c),n.size===1&&(e=t(i)||_e),a(r),()=>{n.delete(c),n.size===0&&(e(),e=null)}}return{set:i,update:s,subscribe:o}}const Fh=I_(null);function z_(r){let t;return{c(){t=ne("canvas"),Lt(t,"class","svelte-1v9nuep")},m(e,n){xe(e,t,n),r[1](t)},p:_e,i:_e,o:_e,d(e){e&&pe(t),r[1](null)}}}function N_(r,t,e){let n,i;au(()=>{i=new R_(n),Fh.set(i)});function s(o){ta[o?"unshift":"push"](()=>{n=o,e(0,n)})}return[n,s]}class F_ extends is{constructor(t){super(),ns(this,t,N_,z_,mi,{})}}function nn(r,t){this.current=r,this.next=t,this._inNormal=this.inwardsNormal(),this._outNormal=this.outwardsNormal()}nn.prototype.outwardsNormal=function(){var r=this.inwardsNormal();return[-r[0],-r[1]]};nn.prototype.inwardsNormal=function(){var r=this.next[0]-this.current[0],t=this.next[1]-this.current[1],e=Math.sqrt(r*r+t*t);if(e===0)throw new Error("Vertices overlap");return[-t/e,r/e]};nn.prototype.offset=function(r,t){return nn.offsetEdge(this.current,this.next,r,t)};nn.prototype.inverseOffset=function(r,t){return nn.offsetEdge(this.next,this.current,r,t)};nn.offsetEdge=function(r,t,e,n){return new nn([r[0]+e,r[1]+n],[t[0]+e,t[1]+n])};nn.prototype.inverse=function(){return new nn(this.next,this.current)};var O_=nn,Oh={exports:{}},qe={exports:{}},Bh={NORMAL:0,NON_CONTRIBUTING:1,SAME_TRANSITION:2,DIFFERENT_TRANSITION:3},Ra={exports:{}};Ra.exports=Fs;Ra.exports.default=Fs;function Fs(r,t){if(!(this instanceof Fs))return new Fs(r,t);if(this.data=r||[],this.length=this.data.length,this.compare=t||B_,this.length>0)for(var e=(this.length>>1)-1;e>=0;e--)this._down(e)}function B_(r,t){return r<t?-1:r>t?1:0}Fs.prototype={push:function(r){this.data.push(r),this.length++,this._up(this.length-1)},pop:function(){if(this.length!==0){var r=this.data[0];return this.length--,this.length>0&&(this.data[0]=this.data[this.length],this._down(0)),this.data.pop(),r}},peek:function(){return this.data[0]},_up:function(r){for(var t=this.data,e=this.compare,n=t[r];r>0;){var i=r-1>>1,s=t[i];if(e(n,s)>=0)break;t[r]=s,r=i}t[r]=n},_down:function(r){for(var t=this.data,e=this.compare,n=this.length>>1,i=t[r];r<n;){var s=(r<<1)+1,o=s+1,a=t[s];if(o<this.length&&e(t[o],a)<0&&(s=o,a=t[o]),e(a,i)>=0)break;t[r]=a,r=s}t[r]=i}};function sn(){}sn.prototype.clear=function(){this._root=null,this.size=0};sn.prototype.find=function(r){for(var t=this._root;t!==null;){var e=this._comparator(r,t.data);if(e===0)return t.data;t=t.get_child(e>0)}return null};sn.prototype.findIter=function(r){for(var t=this._root,e=this.iterator();t!==null;){var n=this._comparator(r,t.data);if(n===0)return e._cursor=t,e;e._ancestors.push(t),t=t.get_child(n>0)}return null};sn.prototype.lowerBound=function(r){for(var t=this._root,e=this.iterator(),n=this._comparator;t!==null;){var i=n(r,t.data);if(i===0)return e._cursor=t,e;e._ancestors.push(t),t=t.get_child(i>0)}for(var s=e._ancestors.length-1;s>=0;--s)if(t=e._ancestors[s],n(r,t.data)<0)return e._cursor=t,e._ancestors.length=s,e;return e._ancestors.length=0,e};sn.prototype.upperBound=function(r){for(var t=this.lowerBound(r),e=this._comparator;t.data()!==null&&e(t.data(),r)===0;)t.next();return t};sn.prototype.min=function(){var r=this._root;if(r===null)return null;for(;r.left!==null;)r=r.left;return r.data};sn.prototype.max=function(){var r=this._root;if(r===null)return null;for(;r.right!==null;)r=r.right;return r.data};sn.prototype.iterator=function(){return new as(this)};sn.prototype.each=function(r){for(var t=this.iterator(),e;(e=t.next())!==null;)if(r(e)===!1)return};sn.prototype.reach=function(r){for(var t=this.iterator(),e;(e=t.prev())!==null;)if(r(e)===!1)return};function as(r){this._tree=r,this._ancestors=[],this._cursor=null}as.prototype.data=function(){return this._cursor!==null?this._cursor.data:null};as.prototype.next=function(){if(this._cursor===null){var r=this._tree._root;r!==null&&this._minNode(r)}else if(this._cursor.right===null){var t;do if(t=this._cursor,this._ancestors.length)this._cursor=this._ancestors.pop();else{this._cursor=null;break}while(this._cursor.right===t)}else this._ancestors.push(this._cursor),this._minNode(this._cursor.right);return this._cursor!==null?this._cursor.data:null};as.prototype.prev=function(){if(this._cursor===null){var r=this._tree._root;r!==null&&this._maxNode(r)}else if(this._cursor.left===null){var t;do if(t=this._cursor,this._ancestors.length)this._cursor=this._ancestors.pop();else{this._cursor=null;break}while(this._cursor.left===t)}else this._ancestors.push(this._cursor),this._maxNode(this._cursor.left);return this._cursor!==null?this._cursor.data:null};as.prototype._minNode=function(r){for(;r.left!==null;)this._ancestors.push(r),r=r.left;this._cursor=r};as.prototype._maxNode=function(r){for(;r.right!==null;)this._ancestors.push(r),r=r.right;this._cursor=r};var Uh=sn,U_=Uh;function Yi(r){this.data=r,this.left=null,this.right=null,this.red=!0}Yi.prototype.get_child=function(r){return r?this.right:this.left};Yi.prototype.set_child=function(r,t){r?this.right=t:this.left=t};function to(r){this._root=null,this._comparator=r,this.size=0}to.prototype=new U_;to.prototype.insert=function(r){var t=!1;if(this._root===null)this._root=new Yi(r),t=!0,this.size++;else{var e=new Yi(void 0),n=0,i=0,s=null,o=e,a=null,l=this._root;for(o.right=this._root;;){if(l===null?(l=new Yi(r),a.set_child(n,l),t=!0,this.size++):Ue(l.left)&&Ue(l.right)&&(l.red=!0,l.left.red=!1,l.right.red=!1),Ue(l)&&Ue(a)){var c=o.right===s;l===a.get_child(i)?o.set_child(c,Os(s,!i)):o.set_child(c,kh(s,!i))}var h=this._comparator(l.data,r);if(h===0)break;i=n,n=h<0,s!==null&&(o=s),s=a,a=l,l=l.get_child(n)}this._root=e.right}return this._root.red=!1,t};to.prototype.remove=function(r){if(this._root===null)return!1;var t=new Yi(void 0),e=t;e.right=this._root;for(var n=null,i=null,s=null,o=1;e.get_child(o)!==null;){var a=o;i=n,n=e,e=e.get_child(o);var l=this._comparator(r,e.data);if(o=l>0,l===0&&(s=e),!Ue(e)&&!Ue(e.get_child(o))){if(Ue(e.get_child(!o))){var c=Os(e,o);n.set_child(a,c),n=c}else if(!Ue(e.get_child(!o))){var h=n.get_child(!a);if(h!==null)if(!Ue(h.get_child(!a))&&!Ue(h.get_child(a)))n.red=!1,h.red=!0,e.red=!0;else{var u=i.right===n;Ue(h.get_child(a))?i.set_child(u,kh(n,a)):Ue(h.get_child(!a))&&i.set_child(u,Os(n,a));var d=i.get_child(u);d.red=!0,e.red=!0,d.left.red=!1,d.right.red=!1}}}}return s!==null&&(s.data=e.data,n.set_child(n.right===e,e.get_child(e.left===null)),this.size--),this._root=t.right,this._root!==null&&(this._root.red=!1),s!==null};function Ue(r){return r!==null&&r.red}function Os(r,t){var e=r.get_child(!t);return r.set_child(!t,e.get_child(t)),e.set_child(t,r),r.red=!0,e.red=!1,e}function kh(r,t){return r.set_child(!t,Os(r.get_child(!t),!t)),Os(r,t)}var k_=to,G_=Uh;function Bs(r){this.data=r,this.left=null,this.right=null}Bs.prototype.get_child=function(r){return r?this.right:this.left};Bs.prototype.set_child=function(r,t){r?this.right=t:this.left=t};function eo(r){this._root=null,this._comparator=r,this.size=0}eo.prototype=new G_;eo.prototype.insert=function(r){if(this._root===null)return this._root=new Bs(r),this.size++,!0;for(var t=0,e=null,n=this._root;;){if(n===null)return n=new Bs(r),e.set_child(t,n),ret=!0,this.size++,!0;if(this._comparator(n.data,r)===0)return!1;t=this._comparator(n.data,r)<0,e=n,n=n.get_child(t)}};eo.prototype.remove=function(r){if(this._root===null)return!1;var t=new Bs(void 0),e=t;e.right=this._root;for(var n=null,i=null,s=1;e.get_child(s)!==null;){n=e,e=e.get_child(s);var o=this._comparator(r,e.data);s=o>0,o===0&&(i=e)}return i!==null?(i.data=e.data,n.set_child(n.right===e,e.get_child(e.left===null)),this._root=t.right,this.size--,!0):!1};var V_=eo,W_={RBTree:k_,BinTree:V_},Da=function(t,e,n){return(t[0]-n[0])*(e[1]-n[1])-(e[0]-n[0])*(t[1]-n[1])},Dc=Da,H_=Bh;function Gh(r,t,e,n,i){this.left=t,this.point=r,this.otherEvent=e,this.isSubject=n,this.type=i||H_.NORMAL,this.inOut=!1,this.otherInOut=!1,this.prevInResult=null,this.inResult=!1,this.resultInOut=!1}Gh.prototype={isBelow:function(r){return this.left?Dc(this.point,this.otherEvent.point,r)>0:Dc(this.otherEvent.point,this.point,r)>0},isAbove:function(r){return!this.isBelow(r)},isVertical:function(){return this.point[0]===this.otherEvent.point[0]}};var q_=Gh,X_=Da,Vh=function(t,e){var n=t.point,i=e.point;return n[0]>i[0]?1:n[0]<i[0]?-1:n[1]!==i[1]?n[1]>i[1]?1:-1:j_(t,e,n)};function j_(r,t,e,n){return r.left!==t.left?r.left?1:-1:X_(e,r.otherEvent.point,t.otherEvent.point)!==0?r.isBelow(t.otherEvent.point)?-1:1:!r.isSubject&&t.isSubject?1:-1}var Wh=function(t,e){return t[0]===e[0]&&t[1]===e[1]},Ic=Da,zc=Vh,Ko=Wh,Y_=function(t,e){if(t===e)return 0;if(Ic(t.point,t.otherEvent.point,e.point)!==0||Ic(t.point,t.otherEvent.point,e.otherEvent.point)!==0)return Ko(t.point,e.point)?t.isBelow(e.otherEvent.point)?-1:1:t.point[0]===e.point[0]?t.point[1]<e.point[1]?-1:1:zc(t,e)===1?e.isAbove(t.point)?-1:1:t.isBelow(e.point)?-1:1;if(t.isSubject===e.isSubject){if(Ko(t.point,e.point))return Ko(t.otherEvent.point,e.otherEvent.point)?0:t.contourId>e.contourId?1:-1}else return t.isSubject?-1:1;return zc(t,e)===1?1:-1},Nc=1e-9;function Cr(r,t){return r[0]*t[1]-r[1]*t[0]}function xs(r,t){return r[0]*t[0]+r[1]*t[1]}var $_=function(r,t,e,n,i){var s=[t[0]-r[0],t[1]-r[1]],o=[n[0]-e[0],n[1]-e[1]];function a(y,w,S){return[y[0]+w*S[0],y[1]+w*S[1]]}var l=[e[0]-r[0],e[1]-r[1]],c=Cr(s,o),h=c*c,u=xs(s,s),d=xs(o,o);if(h>Nc*u*d){var p=Cr(l,o)/c;if(p<0||p>1)return null;var g=Cr(l,s)/c;return g<0||g>1||i?null:[a(r,p,s)]}var m=xs(l,l);if(c=Cr(l,s),h=c*c,h>Nc*u*m)return null;var f=xs(s,l)/u,v=f+xs(s,o)/u,x=Math.min(f,v),_=Math.max(f,v);return x<=1&&_>=0?x===1?i?null:[a(r,x>0?x:0,s)]:_===0?i?null:[a(r,_<1?_:1,s)]:i&&x===0&&_===1?null:[a(r,x>0?x:0,s),a(r,_<1?_:1,s)]:null},di=0,ts=1,fi=2,qs=3,Gr=[],ii=Bh,Z_=Ra.exports,J_=W_.RBTree,Vr=q_,es=Vh,K_=Y_,Q_=$_,hn=Wh,Fc=Math.max,ma=Math.min;function ty(r,t,e,n,i,s){var o=new Vr(r,!1,void 0,e),a=new Vr(t,!1,o,e);o.otherEvent=a,o.contourId=a.contourId=n,es(o,a)>0?a.left=!0:o.left=!0,s[0]=ma(s[0],r[0]),s[1]=ma(s[1],r[1]),s[2]=Fc(s[2],r[0]),s[3]=Fc(s[3],r[1]),i.push(o),i.push(a)}var ga=0;function va(r,t,e,n,i){var s,o;if(typeof r[0][0]=="number")for(s=0,o=r.length-1;s<o;s++)ty(r[s],r[s+1],t,e+1,n,i);else for(s=0,o=r.length;s<o;s++)ga++,va(r[s],t,ga,n,i)}function Hh(r,t,e,n){var i=new Z_(null,es);return ga=0,va(r,!0,0,i,e),va(t,!1,0,i,n),i}function Vi(r,t,e,n){t===null?(r.inOut=!1,r.otherInOut=!0):r.isSubject===t.isSubject?(r.inOut=!t.inOut,r.otherInOut=t.otherInOut):(r.inOut=!t.otherInOut,r.otherInOut=t.isVertical()?!t.inOut:t.inOut),t&&(r.prevInResult=!Oc(t,n)||t.isVertical()?t.prevInResult:t),r.inResult=Oc(r,n)}function Oc(r,t){switch(r.type){case ii.NORMAL:switch(t){case di:return!r.otherInOut;case ts:return r.otherInOut;case fi:return r.isSubject&&r.otherInOut||!r.isSubject&&!r.otherInOut;case qs:return!0}case ii.SAME_TRANSITION:return t===di||t===ts;case ii.DIFFERENT_TRANSITION:return t===fi;case ii.NON_CONTRIBUTING:return!1}return!1}function zr(r,t,e){var n=Q_(r.point,r.otherEvent.point,t.point,t.otherEvent.point),i=n?n.length:0;if(i===0||i===1&&(hn(r.point,t.point)||hn(r.otherEvent.point,t.otherEvent.point)))return 0;if(i===2&&r.isSubject===t.isSubject)return r.contourId===t.contourId&&console.warn("Edges of the same polygon overlap",r.point,r.otherEvent.point,t.point,t.otherEvent.point),0;if(i===1)return!hn(r.point,n[0])&&!hn(r.otherEvent.point,n[0])&&En(r,n[0],e),!hn(t.point,n[0])&&!hn(t.otherEvent.point,n[0])&&En(t,n[0],e),1;var s=[],o=!1,a=!1;return hn(r.point,t.point)?o=!0:es(r,t)===1?s.push(t,r):s.push(r,t),hn(r.otherEvent.point,t.otherEvent.point)?a=!0:es(r.otherEvent,t.otherEvent)===1?s.push(t.otherEvent,r.otherEvent):s.push(r.otherEvent,t.otherEvent),o&&a||o?(r.type=ii.NON_CONTRIBUTING,t.type=r.inOut===t.inOut?ii.SAME_TRANSITION:ii.DIFFERENT_TRANSITION,o&&!a&&En(s[0].otherEvent,s[1].point,e),2):a?(En(s[0],s[1].point,e),3):s[0]!==s[3].otherEvent?(En(s[0],s[1].point,e),En(s[1],s[2].point,e),3):(En(s[0],s[1].point,e),En(s[3].otherEvent,s[2].point,e),3)}function En(r,t,e){var n=new Vr(t,!1,r,r.isSubject),i=new Vr(t,!0,r.otherEvent,r.isSubject);return hn(r.point,r.otherEvent.point)&&console.warn("what is that?",r),n.contourId=i.contourId=r.contourId,es(i,r.otherEvent)>0&&(r.otherEvent.left=!0,i.left=!1),r.otherEvent.otherEvent=i,r.otherEvent=n,e.push(i),e.push(n),e}function qh(r,t,e,n,i,s){for(var a=[],c,h,o=new J_(K_),a=[],l=ma(n[2],i[2]),c,h;r.length;){var u=r.pop();if(a.push(u),s===di&&u.point[0]>l||s===fi&&u.point[0]>n[2])break;if(u.left){if(o.insert(u),h=o.findIter(u),c=o.findIter(u),u.iterator=o.findIter(u),!c||!h){console.log("brute");var d=ey(o);c=d[0],h=d[1]}if(c.data()!==o.min()?c.prev():(c=o.iterator(),c.prev(),c.next()),h.next(),Vi(u,c.data(),o,s),h.data()&&zr(u,h.data(),r)===2&&(Vi(u,c.data(),o,s),Vi(u,h.data(),o,s)),c.data()&&zr(c.data(),u,r)===2){var p=o.findIter(c.data());p.data()!==o.min()?p.prev():(p=o.findIter(o.max()),p.next()),Vi(c.data(),p.data(),o,s),Vi(u,c.data(),o,s)}}else{if(u=u.otherEvent,h=o.findIter(u),c=o.findIter(u),!(c&&h))continue;c.data()!==o.min()?c.prev():(c=o.iterator(),c.prev(),c.next()),h.next(),o.remove(u),h.data()&&c.data()&&zr(c.data(),h.data(),r)}}return a}function ey(r,t){for(var e=r.iterator(),n=r.iterator(),i=r.iterator(),s;(s=i.next())!==null&&(e.next(),n.next(),s!==event););return[e,n]}function ny(r,t,e){var n=r[t];r[t]=r[e],r[e]=n}function iy(r){return r.reverse()}function Bc(r){return Object.prototype.toString.call(r)==="[object Array]"}function Uc(r,t){return Bc(r[0])&&!Bc(r[0][0])&&(r=[r]),r[t]=[],r}function sy(r){var t,e,n,i=[];for(e=0,n=r.length;e<n;e++)t=r[e],(t.left&&t.inResult||!t.left&&t.otherEvent.inResult)&&i.push(t);for(var s=!1;!s;)for(s=!0,e=0,n=i.length;e<n;e++)e+1<n&&es(i[e],i[e+1])===1&&(ny(i,e,e+1),s=!1);for(e=0,n=i.length;e<n;e++)i[e].pos=e;for(e=0,n=i.length;e<n;e++)if(!i[e].left){var o=i[e].pos;i[e].pos=i[e].otherEvent.pos,i[e].otherEvent.pos=o}return i}function ry(r){var t,e,n=sy(r),i=Array(n.length),s=[],o=[],a=[],l={};for(t=0,e=n.length;t<e;t++)if(!i[t]){var c=[];s.push(c);var h=s.length-1;if(o.push(0),a.push(-1),n[t].prevInResult){var u=n[t].prevInResult.contourId;n[t].prevInResult.resultInOut?l[u]&&(Uc(s[a[u]],h),a[h]=a[u],o[h]=o[u],l[h]=!0):(Uc(s[u],h),a[h]=u,o[h]=o[u]+1,l[h]=!0)}var d=t,p=n[t].point;for(c.push(p);d>=t;)i[d]=!0,n[d].left?(n[d].resultInOut=!1,n[d].contourId=h):(n[d].otherEvent.resultInOut=!0,n[d].otherEvent.contourId=h),d=n[d].pos,i[d]=!0,c.push(n[d].point),d=oy(d,n,i);d=d===-1?t:d,i[d]=i[n[d].pos]=!0,n[d].otherEvent.resultInOut=!0,n[d].otherEvent.contourId=h,o[h]&1&&iy(c)}return s}function oy(r,t,e){for(var n=r+1,i=t.length;n<i&&hn(t[n].point,t[r].point);)if(e[n])n=n+1;else return n;for(n=r-1;e[n];)n=n-1;return n}function ay(r,t,e){var n=null;return r.length*t.length===0&&(e===di?n=Gr:e===fi?n=r:(e===ts||e===qs)&&(n=r.length===0?t:r)),n}function ly(r,t,e,n,i){var s=null;return(e[0]>n[2]||n[0]>e[2]||e[1]>n[3]||n[1]>e[3])&&(i===di?s=Gr:i===fi?s=r:(i===ts||i===qs)&&(s=r.concat(t))),s}function Xs(r,t,e){var n=ay(r,t,e);if(n)return n===Gr?null:n;var i=[1/0,1/0,-1/0,-1/0],s=[1/0,1/0,-1/0,-1/0],o=Hh(r,t,i,s);if(n=ly(r,t,i,s,e),n)return n===Gr?null:n;var a=qh(o,r,t,i,s,e);return ry(a)}qe.exports=Xs;qe.exports.union=function(r,t){return Xs(r,t,ts)};qe.exports.diff=function(r,t){return Xs(r,t,fi)};qe.exports.xor=function(r,t){return Xs(r,t,qs)};qe.exports.intersection=function(r,t){return Xs(r,t,di)};qe.exports.operations={INTERSECTION:di,DIFFERENCE:fi,UNION:ts,XOR:qs};qe.exports.fillQueue=Hh;qe.exports.computeFields=Vi;qe.exports.subdivideSegments=qh;qe.exports.divideSegment=En;qe.exports.possibleIntersection=zr;(function(r){r.exports=qe.exports})(Oh);var js={},cy=js.isArray=Array.isArray||function(r){return Object.prototype.toString.call(r)==="[object Array]"},Qo=js.isNonEmptyArray=function(r){return cy(r)&&r.length};js.equals=function(t,e){return t[0]===e[0]&&t[1]===e[1]};js.orientRings=function r(t,e,n){e=e||0;var i,s;if(Qo(t)&&typeof t[0][0]=="number"){var o=0,a=t;for(i=0,s=a.length;i<s;i++){var l=a[i],c=a[(i+1)%s];o+=l[0]*c[1],o-=c[0]*l[1]}(!n&&o>0||n&&o<0)&&a.reverse()}else for(i=0,s=t.length;i<s;i++)r(t[i],e+1,i>0);if(e===0&&Qo(t)&&Qo(t[0])&&typeof t[0][0][0]=="number"){var h=t[0].slice(0,1)[0];t[0].pop(),t[0].push([h[0],h[1]])}return t};var hy=O_,Us=Oh.exports,Ia=js,ks=Ia.isArray,Xh=Ia.equals,ls=Ia.orientRings;function ve(r,t){this.vertices=null,this.edges=null,this._closed=!1,this._distance=0,r&&this.data(r),this._arcSegments=t!==void 0?t:5}ve.prototype.data=function(r){if(this._edges=[],!ks(r))throw new Error("Offset requires at least one coodinate to work with");return ks(r)&&typeof r[0]=="number"?this.vertices=r:(this.vertices=ls(r),this._processContour(this.vertices,this._edges)),this};ve.prototype._processContour=function(r,t){var e,n;if(ks(r[0])&&typeof r[0][0]=="number")for(n=r.length,Xh(r[0],r[n-1])&&(n-=1),e=0;e<n;e++)t.push(new hy(r[e],r[(e+1)%n]));else for(e=0,n=r.length;e<n;e++)t.push([]),this._processContour(r[e],t[t.length-1])};ve.prototype.arcSegments=function(r){return this._arcSegments=r,this};ve.prototype.validate=function(r){var t=r.length;return typeof r[0]=="number"?[r]:(r[0][0]===r[t-1][0]&&r[0][1]===r[t-1][1]&&t>1&&(r=r.slice(0,t-1),this._closed=!0),r)};ve.prototype.createArc=function(r,t,e,n,i,s,o){var a=Math.PI*2,l=Math.atan2(n[1]-t[1],n[0]-t[0]),c=Math.atan2(i[1]-t[1],i[0]-t[0]);s%2===0&&(s-=1),l<0&&(l+=a),c<0&&(c+=a);var h=l>c?l-c:l+a-c,u=(o?-h:a-h)/s;r.push(n);for(var d=1;d<s;++d)h=l+u*d,r.push([t[0]+Math.cos(h)*e,t[1]+Math.sin(h)*e]);return r.push(i),r};ve.prototype.distance=function(r,t){return this._distance=r||0,this};ve.degreesToUnits=function(r,t){switch(t){case"miles":r=r/69.047;break;case"feet":r=r/364568;break;case"kilometers":r=r/111.12;break;case"meters":case"metres":r=r/111120;break}return r};ve.prototype.ensureLastPoint=function(r){return Xh(r[0],r[r.length-1])||r.push([r[0][0],r[0][1]]),r};ve.prototype.offset=function(r){return this.distance(r),this._distance===0?this.vertices:this._distance>0?this.margin(this._distance):this.padding(-this._distance)};ve.prototype._offsetSegment=function(r,t,e,n){for(var i=[],s=[e.offset(e._inNormal[0]*n,e._inNormal[1]*n),e.inverseOffset(e._outNormal[0]*n,e._outNormal[1]*n)],o=0,a=2;o<a;o++){var l=s[o],c=s[(o+a-1)%a];this.createArc(i,o===0?r:t,n,c.next,l.current,this._arcSegments,!0)}return i};ve.prototype.margin=function(r){if(this.distance(r),typeof this.vertices[0]=="number")return this.offsetPoint(this._distance);if(r===0)return this.vertices;var t=this.offsetLines(this._distance);return t=Us.union(this.vertices,t),ls(t)};ve.prototype.padding=function(r){if(this.distance(r),this._distance===0)return this.ensureLastPoint(this.vertices);if(this.vertices.length===2&&typeof this.vertices[0]=="number")return this.vertices;var t=this.offsetLines(this._distance),e=Us.diff(this.vertices,t);return ls(e)};ve.prototype.offsetLine=function(r){return r===0?this.vertices:ls(this.offsetLines(r))};ve.prototype.offsetLines=function(r){if(r<0)throw new Error("Cannot apply negative margin to the line");var t;if(this.distance(r),ks(this.vertices[0])&&typeof this.vertices[0][0]!="number")for(var e=0,n=this._edges.length;e<n;e++)t=e===0?this.offsetContour(this.vertices[e],this._edges[e]):Us.union(t,this.offsetContour(this.vertices[e],this._edges[e]));else t=this.vertices.length===1?this.offsetPoint():this.offsetContour(this.vertices,this._edges);return t};ve.prototype.offsetContour=function(r,t){var e,n,i;if(ks(r[0])&&typeof r[0][0]=="number")for(n=0,i=r.length-1;n<i;n++){var s=this.ensureLastPoint(this._offsetSegment(r[n],r[n+1],t[n],this._distance));e=n===0?[this.ensureLastPoint(s)]:Us.union(e,this.ensureLastPoint(s))}else for(n=0,i=t.length;n<i;n++)e=n===0?this.offsetContour(r[n],t[n]):Us.union(e,this.offsetContour(r[n],t[n]));return e};ve.prototype.offsetPoint=function(r){this.distance(r);var t=this._arcSegments*2,e=[],n=this.vertices,i=this._distance,s=0;t%2===0&&t++;for(var o=0;o<t;o++)s+=2*Math.PI/t,e.push([n[0]+i*Math.cos(s),n[1]+i*Math.sin(s)]);return ls([this.ensureLastPoint(e)])};ve.orientRings=ls;var uy=ve;const jh=4,kc=16,Yh=.19,dy=new kn(.04,.04,Yh),fy=new Ws({color:16777215}),py=new Sh({color:5329233,wireframe:!1}),my=new Ws({color:16753920}),gy=new Ws({color:65280});class Gc extends Qr{constructor(t,e=1,n=.15){super(),this.roadSpline=new gh(t,!1,"catmullrom",.5),this.roadWidth=e,this.roadLength=this.roadSpline.getLength();let i=new uy,s=new Sh({color:16771584,wireframe:!1});const o=new ot({mass:0}),a=this.roadSpline.getSpacedPoints(Math.floor(this.roadLength/n)).map(_=>[_.x,_.z]),l=i.data(a).arcSegments(20).offsetLine(e/2).map(_=>_.map(y=>new z(y[0],0,y[1]))),c=new yh(l[0].map(_=>new rt(_.x,_.z)));for(let _=0;_<l.length;_++){const y=l[_];_>0&&c.holes.push(new ua(y.map(w=>new rt(w.x,w.z))));for(let w=1;w<y.length;w++){let S=y[w].clone().sub(y[w-1]),L=y[w].clone().add(y[w-1]).divideScalar(2),b=new A_(L.x,L.y+.1,L.z,S.length(),.2,.01,s,0);b.rotateY(Math.atan2(-S.z,S.x)),b.meshes[0].layers.enable(jh),b.meshes[0].receiveShadow=!1,o.addShape(b.bodies[0].shapes[0],b.bodies[0].position,b.bodies[0].quaternion),this.meshes.push(b.meshes[0])}}let h=new Aa(c),u=new Xt(h,py);u.rotateX(Math.PI/2),u.scale.setZ(-1),u.translateZ(-.01),u.receiveShadow=!0,this.meshes.push(u);let d=this.roadSpline.getLength(),p=Math.floor(d/Yh/2);for(let _=1;_<p;_+=2){let y=_/p,w=this.roadSpline.getPointAt(y),S=this.roadSpline.getTangentAt(y),L=new Xt(dy,fy);L.receiveShadow=!0,L.castShadow=!1,L.position.x=w.x,L.position.y=w.y,L.position.z=w.z,L.rotateY(Math.atan2(S.x,S.z)),this.meshes.push(L)}const g=new Ur(this.roadWidth/2,16);g.rotateX(-Math.PI/2),g.translate(t[0].x,.025,t[0].z);const m=new Xt(g,my);this.meshes.push(m);const f=new Ur(this.roadWidth/2,16);f.rotateX(-Math.PI/2),f.translate(t[t.length-1].x,.025,t[t.length-1].z);const v=new Xt(f,gy);this.meshes.push(v),o.collisionFilterGroup=kc,o.collisionFilterMask=~kc,this.bodies.push(o),this.startX=t[0].x,this.startZ=t[0].z;const x=this.roadSpline.getTangentAt(0);this.startRotation=-Math.atan2(-x.z,x.x)+Math.PI/2,this.endX=t[t.length-1].x,this.endZ=t[t.length-1].z}syncMeshesToBodies(){}}const Nr=new Ta(.45,.5,32,1);Nr.rotateX(Math.PI/2);const vy=new vi({color:0,side:Ve}),xy=new vi({color:16753920,side:Ve});new vi({color:65280,side:Ve});const _y=new vi({color:255,side:Ve});class yy{constructor(t){It(this,"gameWorld");It(this,"raycaster");It(this,"pointer");It(this,"ring");It(this,"brushSize",1);It(this,"onPointerMove");It(this,"onMouseUp");It(this,"onMouseDown");It(this,"mouseDown");It(this,"rings");It(this,"road");It(this,"roadPoints");this.gameWorld=t,this.roadPoints=[new z(4,0,4),new z(-4,0,4),new z(-4,0,0),new z(4,0,0),new z(4,0,-4),new z(-4,0,-4)],this.road=new Gc(this.roadPoints,1),this.gameWorld.addGameObject(this.road),this.gameWorld.raceTrack=this.road,this.raycaster=new Th,this.pointer=new rt(0,0),this.onPointerMove=e=>{this.pointer.x=e.offsetX/this.gameWorld.canvas.offsetWidth*2-1,this.pointer.y=-(e.offsetY/this.gameWorld.canvas.offsetHeight)*2+1},this.ring=new Xt(Nr,vy),this.ring.scale.set(this.brushSize,this.brushSize,this.brushSize),this.ring.castShadow=!1,this.ring.receiveShadow=!1,this.ring.renderOrder=999,this.ring.material.depthTest=!1,this.ring.material.depthWrite=!1,this.rings=[],this.mouseDown=!1,this.onMouseUp=e=>{e.button===0&&this.endDrawing(),document.removeEventListener("mouseup",this.onMouseUp)},this.onMouseDown=e=>{e.button===0&&(this.startDrawing(),document.addEventListener("mouseup",this.onMouseUp))}}startDrawing(){this.mouseDown=!0;const t=new Xt(Nr,xy);t.scale.set(this.brushSize,this.brushSize,this.brushSize),t.castShadow=!1,t.receiveShadow=!1,t.renderOrder=999,t.material.depthTest=!1,t.material.depthWrite=!1,t.position.copy(this.ring.position),this.rings=[t],this.gameWorld.scene.add(t)}addDrawing(){if(this.rings.some(n=>this.ring.position.distanceTo(n.position)<this.brushSize))return;const e=new Xt(Nr,_y);e.scale.set(this.brushSize,this.brushSize,this.brushSize),e.castShadow=!1,e.receiveShadow=!1,e.renderOrder=999,e.material.depthTest=!1,e.material.depthWrite=!1,e.position.copy(this.ring.position),this.rings.push(e),this.gameWorld.scene.add(e)}endDrawing(){this.mouseDown=!1,this.rings.length>3&&(this.gameWorld.removeGameObject(this.road),this.roadPoints=this.rings.map(t=>t.position),this.road=new Gc(this.roadPoints,this.brushSize),this.gameWorld.addGameObject(this.road),this.gameWorld.raceTrack=this.road),this.rings.forEach(t=>{this.gameWorld.scene.remove(t)}),this.rings=[]}update(t){this.raycaster.setFromCamera(this.pointer,this.gameWorld.camera);const e=this.raycaster.intersectObjects([this.gameWorld.ground.mesh]);if(e.length>0){const n=e[0].point;this.ring.position.set(n.x,n.y,n.z),this.ring.visible=!0}else this.ring.visible=!1;this.ring.scale.set(this.brushSize,this.brushSize,this.brushSize),this.mouseDown&&this.addDrawing()}activate(){this.gameWorld.controls.maxPolarAngle=0,this.gameWorld.controls.minAzimuthAngle=0,this.gameWorld.controls.maxAzimuthAngle=0,this.gameWorld.controls.minDistance=8,this.gameWorld.controls.maxDistance=8,this.gameWorld.controls.target=new z(0,0,0),this.ring.visible=!1,this.gameWorld.scene.add(this.ring),this.gameWorld.canvas.addEventListener("pointermove",this.onPointerMove),this.gameWorld.canvas.addEventListener("mousedown",this.onMouseDown)}deactivate(){this.gameWorld.controls.maxPolarAngle=Math.PI,this.gameWorld.controls.minAzimuthAngle=1/0,this.gameWorld.controls.maxAzimuthAngle=1/0,this.gameWorld.controls.minDistance=0,this.gameWorld.controls.maxDistance=50,this.gameWorld.controls.reset(),this.gameWorld.scene.remove(this.ring),this.gameWorld.canvas.removeEventListener("pointermove",this.onPointerMove),this.gameWorld.canvas.removeEventListener("mousedown",this.onMouseDown)}}function wy(r){let t,e,n,i=r[0].brushSize+"",s,o,a,l,c;return{c(){t=ne("label"),e=As("Road width: "),n=ne("b"),s=As(i),o=Je(),a=ne("input"),Lt(t,"for","steps-range"),Lt(t,"class","block mb-2 text-sm font-medium text-gray-300"),Lt(a,"id","steps-range"),Lt(a,"type","range"),Lt(a,"min","0.8"),Lt(a,"max","2"),Lt(a,"step","0.1"),Lt(a,"class","w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-lg appearance-none cursor-pointer range-lg")},m(h,u){xe(h,t,u),fe(t,e),fe(t,n),fe(n,s),xe(h,o,u),xe(h,a,u),Oa(a,r[0].brushSize),l||(c=[qi(a,"change",r[1]),qi(a,"input",r[1])],l=!0)},p(h,[u]){u&1&&i!==(i=h[0].brushSize+"")&&ru(s,i),u&1&&Oa(a,h[0].brushSize)},i:_e,o:_e,d(h){h&&pe(t),h&&pe(o),h&&pe(a),l=!1,pi(c)}}}function My(r,t,e){let{mode:n}=t;function i(){n.brushSize=iu(this.value),e(0,n)}return r.$$set=s=>{"mode"in s&&e(0,n=s.mode)},[n,i]}class by extends is{constructor(t){super(),ns(this,t,My,wy,mi,{mode:0})}}const Sy=new V0,Ey=new Ws({color:2236962});class Ty{constructor(t){It(this,"gameWorld");It(this,"car");It(this,"keyupHandler");It(this,"keydownHandler");It(this,"arrowHelpers",[]);It(this,"chaseMode");It(this,"_showSensors",!1);this.gameWorld=t,this.chaseMode=!1;let e=!1,n=!1,i=!1,s=!1,o=!1;this.keydownHandler=a=>{var l;switch(a.key){case"w":e=!0;break;case"a":n=!0;break;case"s":i=!0;break;case"d":s=!0;break;case" ":o=!0;break}(l=this.car)==null||l.applyInput(e,n,i,s,o)},this.keyupHandler=a=>{var l;switch(a.key){case"w":e=!1;break;case"a":n=!1;break;case"s":i=!1;break;case"d":s=!1;break;case" ":o=!1;break}(l=this.car)==null||l.applyInput(e,n,i,s,o)}}update(t){var e;if((e=this.car)==null||e.getRays().forEach((n,i)=>{n.layers.set(jh);const s=n.intersectObjects(this.gameWorld.scene.children);let o=1;s.forEach(l=>{l.distance<o&&(o=l.distance)});const a=this.arrowHelpers[i];a.setLength(o,.05,.03),a.setDirection(n.ray.direction),a.position.x=n.ray.origin.x,a.position.y=n.ray.origin.y,a.position.z=n.ray.origin.z,a.updateMatrix()}),this.chaseMode&&this.car){this.gameWorld.controls.target=this.car.getPosition(),this.gameWorld.controls.target.y+=.2;let n=this.car.getForwardDir();n.y=0,n.normalize(),n.multiplyScalar(-.5),n.y=.2,this.gameWorld.camera.position.copy(this.car.getPosition()),this.gameWorld.camera.position.add(n)}}get showSensors(){return this._showSensors}set showSensors(t){this._showSensors=t,this.arrowHelpers.forEach(e=>{e.visible=t})}removeCar(){this.car&&this.gameWorld.removeGameObject(this.car),delete this.car,this.arrowHelpers.forEach(t=>{this.gameWorld.scene.remove(t)}),this.arrowHelpers=[]}respawnCar(){this.removeCar(),this.car=new D_(this.gameWorld.raceTrack.startX,.4,this.gameWorld.raceTrack.startZ,Sy,Ey,5,.25,.1),this.car.rotateY(this.gameWorld.raceTrack.startRotation),this.gameWorld.addGameObject(this.car),this.arrowHelpers=this.car.getRays().map(t=>{const e=t.ray.direction;e.normalize();const n=t.ray.origin,i=e.length(),s=16776960,o=new Y0(e,n,i,s);return o.visible=this.showSensors,this.gameWorld.scene.add(o),o})}activate(){this.respawnCar(),document.addEventListener("keydown",this.keydownHandler),document.addEventListener("keyup",this.keyupHandler)}deactivate(){this.removeCar(),document.removeEventListener("keydown",this.keydownHandler),document.removeEventListener("keyup",this.keyupHandler)}}function Ay(r){let t,e,n,i,s,o,a,l,c,h,u,d,p,g,m,f,v,x,_;return{c(){t=ne("label"),e=ne("input"),n=Je(),i=ne("div"),s=Je(),o=ne("span"),o.textContent="Chase camera",a=Je(),l=ne("label"),c=ne("input"),h=Je(),u=ne("div"),d=Je(),p=ne("span"),p.textContent="Show sensors",g=Je(),m=ne("hr"),f=Je(),v=ne("button"),v.textContent="Reset car",Lt(e,"type","checkbox"),e.__value="",e.value=e.__value,Lt(e,"id","chase-mode-toggle"),Lt(e,"class","sr-only peer"),Lt(i,"class","w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"),Lt(o,"class","ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"),Lt(t,"for","chase-mode-toggle"),Lt(t,"class","inline-flex relative items-center cursor-pointer mb-4"),Lt(c,"type","checkbox"),c.__value="",c.value=c.__value,Lt(c,"id","show-sensors-toggle"),Lt(c,"class","sr-only peer"),Lt(u,"class","w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"),Lt(p,"class","ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"),Lt(l,"for","show-sensors-toggle"),Lt(l,"class","inline-flex relative items-center cursor-pointer"),Lt(m,"class","my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 dark:bg-gray-700"),Lt(v,"type","button"),Lt(v,"class","block grow mx-auto focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-md px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900")},m(y,w){xe(y,t,w),fe(t,e),e.checked=r[0].chaseMode,fe(t,n),fe(t,i),fe(t,s),fe(t,o),xe(y,a,w),xe(y,l,w),fe(l,c),c.checked=r[0].showSensors,fe(l,h),fe(l,u),fe(l,d),fe(l,p),xe(y,g,w),xe(y,m,w),xe(y,f,w),xe(y,v,w),x||(_=[qi(e,"change",r[1]),qi(c,"change",r[2]),qi(v,"click",r[3])],x=!0)},p(y,[w]){w&1&&(e.checked=y[0].chaseMode),w&1&&(c.checked=y[0].showSensors)},i:_e,o:_e,d(y){y&&pe(t),y&&pe(a),y&&pe(l),y&&pe(g),y&&pe(m),y&&pe(f),y&&pe(v),x=!1,pi(_)}}}function Cy(r,t,e){let{mode:n}=t;function i(){n.chaseMode=this.checked,e(0,n)}function s(){n.showSensors=this.checked,e(0,n)}const o=()=>{n.respawnCar()};return r.$$set=a=>{"mode"in a&&e(0,n=a.mode)},[n,i,s,o]}class Ly extends is{constructor(t){super(),ns(this,t,Cy,Ay,mi,{mode:0})}}function Py(r){let t;return{c(){t=As("Train panel")},m(e,n){xe(e,t,n)},p:_e,i:_e,o:_e,d(e){e&&pe(t)}}}class Ry extends is{constructor(t){super(),ns(this,t,null,Py,mi,{})}}class Dy{constructor(t){It(this,"gameWorld");this.gameWorld=t}update(t){}activate(){}deactivate(){}}function Vc(r,t,e){const n=r.slice();return n[7]=t[e],n[9]=e,n}function Wc(r){let t,e=r[7]+"",n,i,s,o,a;function l(){return r[5](r[9])}return{c(){t=ne("button"),n=As(e),i=Je(),Lt(t,"type","button"),Lt(t,"class",s="transition-all grow py-2 px-4 text-md "+(r[9]===0?"rounded-l-lg":"")+" "+(r[9]===r[1].length-1?"rounded-r-lg":"")+" "+(r[9]===r[0]?"font-bold text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800":"font-medium border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white text-gray-900 bg-white")+" focus:z-10")},m(c,h){xe(c,t,h),fe(t,n),fe(t,i),o||(a=qi(t,"click",l),o=!0)},p(c,h){r=c,h&1&&s!==(s="transition-all grow py-2 px-4 text-md "+(r[9]===0?"rounded-l-lg":"")+" "+(r[9]===r[1].length-1?"rounded-r-lg":"")+" "+(r[9]===r[0]?"font-bold text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800":"font-medium border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white text-gray-900 bg-white")+" focus:z-10")&&Lt(t,"class",s)},d(c){c&&pe(t),o=!1,a()}}}function Iy(r){let t,e,n,i,s,o=r[1],a=[];for(let h=0;h<o.length;h+=1)a[h]=Wc(Vc(r,o,h));var l=r[2][r[0]];function c(h){return{props:{mode:h[3][h[0]]}}}return l&&(i=Ba(l,c(r))),{c(){t=ne("div");for(let h=0;h<a.length;h+=1)a[h].c();e=Je(),n=ne("div"),i&&Or(i.$$.fragment),Lt(t,"class","inline-flex rounded-md shadow-sm w-full"),Lt(t,"role","group"),Lt(n,"class","p-4")},m(h,u){xe(h,t,u);for(let d=0;d<a.length;d+=1)a[d].m(t,null);xe(h,e,u),xe(h,n,u),i&&Ps(i,n,null),s=!0},p(h,[u]){if(u&19){o=h[1];let p;for(p=0;p<o.length;p+=1){const g=Vc(h,o,p);a[p]?a[p].p(g,u):(a[p]=Wc(g),a[p].c(),a[p].m(t,null))}for(;p<a.length;p+=1)a[p].d(1);a.length=o.length}const d={};if(u&1&&(d.mode=h[3][h[0]]),l!==(l=h[2][h[0]])){if(i){uu();const p=i;Fr(p.$$.fragment,1,0,()=>{Rs(p,1)}),du()}l?(i=Ba(l,c(h)),Or(i.$$.fragment),Ls(i.$$.fragment,1),Ps(i,n,null)):i=null}else l&&i.$set(d)},i(h){s||(i&&Ls(i.$$.fragment,h),s=!0)},o(h){i&&Fr(i.$$.fragment,h),s=!1},d(h){h&&pe(t),nu(a,h),h&&pe(e),h&&pe(n),i&&Rs(i)}}}const zy=2;function Ny(r,t,e){const n=["Draw","Play","Train"],i=[by,Ly,Ry],s=[];let o=-1,a;Fh.subscribe(h=>{h&&(a=h,s.push(new yy(a)),s.push(new Ty(a)),s.push(new Dy(a)),l(zy))});function l(h){o!==h&&(o!==-1&&s[o].deactivate(),e(0,o=h),s[o].activate(),a.requestCallbackBeforeRender(s[o].update.bind(s[o])))}return[o,n,i,s,l,h=>l(h)]}class Fy extends is{constructor(t){super(),ns(this,t,Ny,Iy,mi,{})}}function Oy(r){let t,e,n,i,s,o,a;return n=new F_({}),o=new Fy({}),{c(){t=ne("main"),e=ne("div"),Or(n.$$.fragment),i=Je(),s=ne("div"),Or(o.$$.fragment),Lt(e,"id","canvas-pane"),Lt(e,"class","svelte-k4hl9j"),Lt(s,"id","menu-pane"),Lt(s,"class","svelte-k4hl9j"),Lt(t,"class","svelte-k4hl9j")},m(l,c){xe(l,t,c),fe(t,e),Ps(n,e,null),fe(t,i),fe(t,s),Ps(o,s,null),a=!0},p:_e,i(l){a||(Ls(n.$$.fragment,l),Ls(o.$$.fragment,l),a=!0)},o(l){Fr(n.$$.fragment,l),Fr(o.$$.fragment,l),a=!1},d(l){l&&pe(t),Rs(n),Rs(o)}}}class By extends is{constructor(t){super(),ns(this,t,null,Oy,mi,{})}}new By({target:document.getElementById("app")});
