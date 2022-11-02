var pu=Object.defineProperty;var mu=(r,t,e)=>t in r?pu(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Lt=(r,t,e)=>(mu(r,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function ye(){}function ih(r){return r()}function qa(){return Object.create(null)}function Rn(r){r.forEach(ih)}function sh(r){return typeof r=="function"}function Dn(r,t){return r!=r?t==t:r!==t||r&&typeof r=="object"||typeof r=="function"}function gu(r){return Object.keys(r).length===0}function Pt(r,t){r.appendChild(t)}function _t(r,t,e){r.insertBefore(t,e||null)}function vt(r){r.parentNode.removeChild(r)}function ba(r,t){for(let e=0;e<r.length;e+=1)r[e]&&r[e].d(t)}function Mt(r){return document.createElement(r)}function Ve(r){return document.createTextNode(r)}function Ot(){return Ve(" ")}function vu(){return Ve("")}function He(r,t,e,n){return r.addEventListener(t,e,n),()=>r.removeEventListener(t,e,n)}function it(r,t,e){e==null?r.removeAttribute(t):r.getAttribute(t)!==e&&r.setAttribute(t,e)}function ia(r){return r===""?null:+r}function xu(r){return Array.from(r.childNodes)}function zs(r,t){t=""+t,r.wholeText!==t&&(r.data=t)}function Ji(r,t){r.value=t==null?"":t}function kr(r,t,e,n){e===null?r.style.removeProperty(t):r.style.setProperty(t,e,n?"important":"")}function Xa(r,t){return new r(t)}let Ns;function Ls(r){Ns=r}function _u(){if(!Ns)throw new Error("Function called outside component initialization");return Ns}function yu(r){_u().$$.on_mount.push(r)}const Ts=[],sa=[],Ir=[],ja=[],wu=Promise.resolve();let ra=!1;function bu(){ra||(ra=!0,wu.then(rh))}function oa(r){Ir.push(r)}const lo=new Set;let Ks=0;function rh(){const r=Ns;do{for(;Ks<Ts.length;){const t=Ts[Ks];Ks++,Ls(t),Mu(t.$$)}for(Ls(null),Ts.length=0,Ks=0;sa.length;)sa.pop()();for(let t=0;t<Ir.length;t+=1){const e=Ir[t];lo.has(e)||(lo.add(e),e())}Ir.length=0}while(Ts.length);for(;ja.length;)ja.pop()();ra=!1,lo.clear(),Ls(r)}function Mu(r){if(r.fragment!==null){r.update(),Rn(r.before_update);const t=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,t),r.after_update.forEach(oa)}}const zr=new Set;let ri;function Su(){ri={r:0,c:[],p:ri}}function Eu(){ri.r||Rn(ri.c),ri=ri.p}function fi(r,t){r&&r.i&&(zr.delete(r),r.i(t))}function is(r,t,e,n){if(r&&r.o){if(zr.has(r))return;zr.add(r),ri.c.push(()=>{zr.delete(r),n&&(e&&r.d(1),n())}),r.o(t)}else n&&n()}function ss(r){r&&r.c()}function pi(r,t,e,n){const{fragment:i,after_update:s}=r.$$;i&&i.m(t,e),n||oa(()=>{const o=r.$$.on_mount.map(ih).filter(sh);r.$$.on_destroy?r.$$.on_destroy.push(...o):Rn(o),r.$$.on_mount=[]}),s.forEach(oa)}function mi(r,t){const e=r.$$;e.fragment!==null&&(Rn(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function Tu(r,t){r.$$.dirty[0]===-1&&(Ts.push(r),bu(),r.$$.dirty.fill(0)),r.$$.dirty[t/31|0]|=1<<t%31}function Vn(r,t,e,n,i,s,o,a=[-1]){const l=Ns;Ls(r);const c=r.$$={fragment:null,ctx:[],props:s,update:ye,not_equal:i,bound:qa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:qa(),dirty:a,skip_bound:!1,root:t.target||l.$$.root};o&&o(c.root);let h=!1;if(c.ctx=e?e(r,t.props||{},(u,d,...p)=>{const g=p.length?p[0]:d;return c.ctx&&i(c.ctx[u],c.ctx[u]=g)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](g),h&&Tu(r,u)),d}):[],c.update(),h=!0,Rn(c.before_update),c.fragment=n?n(c.ctx):!1,t.target){if(t.hydrate){const u=xu(t.target);c.fragment&&c.fragment.l(u),u.forEach(vt)}else c.fragment&&c.fragment.c();t.intro&&fi(r.$$.fragment),pi(r,t.target,t.anchor,t.customElement),rh()}Ls(l)}class Hn{$destroy(){mi(this,1),this.$destroy=ye}$on(t,e){if(!sh(e))return ye;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const i=n.indexOf(e);i!==-1&&n.splice(i,1)}}$set(t){this.$$set&&!gu(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ma="146",Pi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Au=0,Ya=1,Cu=2,oh=1,ah=2,As=3,rs=0,je=1,qe=2,Wn=0,ts=1,$a=2,Za=3,Ja=4,Lu=5,$i=100,Pu=101,Ru=102,Ka=103,Qa=104,Du=200,Iu=201,zu=202,Nu=203,lh=204,ch=205,Fu=206,Ou=207,Bu=208,Uu=209,ku=210,Gu=0,Wu=1,Vu=2,aa=3,Hu=4,qu=5,Xu=6,ju=7,Xr=0,Yu=1,$u=2,Pn=0,Zu=1,Ju=2,Ku=3,Qu=4,td=5,hh=300,os=301,as=302,la=303,ca=304,jr=306,ha=1e3,tn=1001,ua=1002,Ae=1003,tl=1004,el=1005,Ge=1006,ed=1007,Yr=1008,gi=1009,nd=1010,id=1011,uh=1012,sd=1013,oi=1014,ai=1015,Fs=1016,rd=1017,od=1018,es=1020,ad=1021,ld=1022,en=1023,cd=1024,hd=1025,ui=1026,ls=1027,ud=1028,dd=1029,fd=1030,pd=1031,md=1033,co=33776,ho=33777,uo=33778,fo=33779,nl=35840,il=35841,sl=35842,rl=35843,gd=36196,ol=37492,al=37496,ll=37808,cl=37809,hl=37810,ul=37811,dl=37812,fl=37813,pl=37814,ml=37815,gl=37816,vl=37817,xl=37818,_l=37819,yl=37820,wl=37821,bl=36492,vi=3e3,te=3001,vd=3200,xd=3201,$r=0,_d=1,Cn="srgb",li="srgb-linear",po=7680,yd=519,Ml=35044,Sl="300 es",da=1035;class Si{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mo=Math.PI/180,El=180/Math.PI;function ds(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[r&255]+be[r>>8&255]+be[r>>16&255]+be[r>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function Me(r,t,e){return Math.max(t,Math.min(e,r))}function wd(r,t){return(r%t+t)%t}function go(r,t,e){return(1-e)*r+e*t}function Tl(r){return(r&r-1)===0&&r!==0}function fa(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Qs(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Pe(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],m=i[0],f=i[3],v=i[6],x=i[1],_=i[4],w=i[7],y=i[2],S=i[5],L=i[8];return s[0]=o*m+a*x+l*y,s[3]=o*f+a*_+l*S,s[6]=o*v+a*w+l*L,s[1]=c*m+h*x+u*y,s[4]=c*f+h*_+u*S,s[7]=c*v+h*w+u*L,s[2]=d*m+p*x+g*y,s[5]=d*f+p*_+g*S,s[8]=d*v+p*w+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,p=c*s-o*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return t[0]=u*m,t[1]=(i*c-h*n)*m,t[2]=(a*n-i*o)*m,t[3]=d*m,t[4]=(h*e-i*l)*m,t[5]=(i*s-a*e)*m,t[6]=p*m,t[7]=(n*l-c*e)*m,t[8]=(o*e-n*s)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],h=i[7];return i[0]=e*s+n*l,i[3]=e*o+n*c,i[6]=e*a+n*h,i[1]=-n*s+e*l,i[4]=-n*o+e*c,i[7]=-n*a+e*h,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function dh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Gr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function di(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Nr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const vo={[Cn]:{[li]:di},[li]:{[Cn]:Nr}},$e={legacyMode:!0,get workingColorSpace(){return li},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.legacyMode||t===e||!t||!e)return r;if(vo[t]&&vo[t][e]!==void 0){const n=vo[t][e];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}},fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},he={r:0,g:0,b:0},Ze={h:0,s:0,l:0},tr={h:0,s:0,l:0};function xo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}function er(r,t){return t.r=r.r,t.g=r.g,t.b=r.b,t}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$e.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=li){return this.r=t,this.g=e,this.b=n,$e.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=li){if(t=wd(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=xo(o,s,t+1/3),this.g=xo(o,s,t),this.b=xo(o,s,t-1/3)}return $e.toWorkingColorSpace(this,i),this}setStyle(t,e=Cn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,$e.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,$e.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,$e.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,$e.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=Cn){const n=fh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=Nr(t.r),this.g=Nr(t.g),this.b=Nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Cn){return $e.fromWorkingColorSpace(er(this,he),t),Me(he.r*255,0,255)<<16^Me(he.g*255,0,255)<<8^Me(he.b*255,0,255)<<0}getHexString(t=Cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=li){$e.fromWorkingColorSpace(er(this,he),e);const n=he.r,i=he.g,s=he.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=li){return $e.fromWorkingColorSpace(er(this,he),e),t.r=he.r,t.g=he.g,t.b=he.b,t}getStyle(t=Cn){return $e.fromWorkingColorSpace(er(this,he),t),t!==Cn?`color(${t} ${he.r} ${he.g} ${he.b})`:`rgb(${he.r*255|0},${he.g*255|0},${he.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(Ze),Ze.h+=t,Ze.s+=e,Ze.l+=n,this.setHSL(Ze.h,Ze.s,Ze.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ze),t.getHSL(tr);const n=go(Ze.h,tr.h,e),i=go(Ze.s,tr.s,e),s=go(Ze.l,tr.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}qt.NAMES=fh;let Di;class ph{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Di===void 0&&(Di=Gr("canvas")),Di.width=t.width,Di.height=t.height;const n=Di.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Gr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=di(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class mh{constructor(t=null){this.isSource=!0,this.uuid=ds(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(_o(i[o].image)):s.push(_o(i[o]))}else s=_o(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function _o(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ph.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bd=0;class sn extends Si{constructor(t=sn.DEFAULT_IMAGE,e=sn.DEFAULT_MAPPING,n=tn,i=tn,s=Ge,o=Yr,a=en,l=gi,c=1,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=ds(),this.name="",this.source=new mh(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ha:t.x=t.x-Math.floor(t.x);break;case tn:t.x=t.x<0?0:1;break;case ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ha:t.y=t.y-Math.floor(t.y);break;case tn:t.y=t.y<0?0:1;break;case ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=hh;class ve{constructor(t=0,e=0,n=0,i=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],m=l[2],f=l[6],v=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,w=(p+1)/2,y=(v+1)/2,S=(h+d)/4,L=(u+m)/4,b=(g+f)/4;return _>w&&_>y?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=S/n,s=L/n):w>y?w<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),n=S/i,s=b/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=L/s,i=b/s),this.set(n,i,s,e),this}let x=Math.sqrt((f-g)*(f-g)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(f-g)/x,this.y=(u-m)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+v-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xi extends Si{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new sn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ge,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new mh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gh extends sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Md extends sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _i{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],p=s[o+1],g=s[o+2],m=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=m;return}if(u!==m||l!==d||c!==p||h!==g){let f=1-a;const v=l*d+c*p+h*g+u*m,x=v>=0?1:-1,_=1-v*v;if(_>Number.EPSILON){const y=Math.sqrt(_),S=Math.atan2(y,v*x);f=Math.sin(f*S)/y,a=Math.sin(a*S)/y}const w=a*x;if(l=l*f+d*w,c=c*f+p*w,h=h*f+g*w,u=u*f+m*w,f===1-a){const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Al.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Al.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*i-a*n,h=l*n+a*e-s*i,u=l*i+s*n-o*e,d=-s*e-o*n-a*i;return this.x=c*l+d*-s+h*-a-u*-o,this.y=h*l+d*-o+u*-s-c*-a,this.z=u*l+d*-a+c*-o-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return yo.copy(this).projectOnVector(t),this.sub(yo)}reflect(t){return this.sub(yo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yo=new O,Al=new _i;class qs{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.length;l<c;l+=3){const h=t[l],u=t[l+1],d=t[l+2];h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.count;l<c;l++){const h=t.getX(l),u=t.getY(l),d=t.getZ(l);h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Jn.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Jn)}else n.boundingBox===null&&n.computeBoundingBox(),wo.copy(n.boundingBox),wo.applyMatrix4(t.matrixWorld),this.union(wo);const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Jn),Jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vs),nr.subVectors(this.max,vs),Ii.subVectors(t.a,vs),zi.subVectors(t.b,vs),Ni.subVectors(t.c,vs),zn.subVectors(zi,Ii),Nn.subVectors(Ni,zi),Kn.subVectors(Ii,Ni);let e=[0,-zn.z,zn.y,0,-Nn.z,Nn.y,0,-Kn.z,Kn.y,zn.z,0,-zn.x,Nn.z,0,-Nn.x,Kn.z,0,-Kn.x,-zn.y,zn.x,0,-Nn.y,Nn.x,0,-Kn.y,Kn.x,0];return!bo(e,Ii,zi,Ni,nr)||(e=[1,0,0,0,1,0,0,0,1],!bo(e,Ii,zi,Ni,nr))?!1:(ir.crossVectors(zn,Nn),e=[ir.x,ir.y,ir.z],bo(e,Ii,zi,Ni,nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Jn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Jn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const vn=[new O,new O,new O,new O,new O,new O,new O,new O],Jn=new O,wo=new qs,Ii=new O,zi=new O,Ni=new O,zn=new O,Nn=new O,Kn=new O,vs=new O,nr=new O,ir=new O,Qn=new O;function bo(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Qn.fromArray(r,s);const a=i.x*Math.abs(Qn.x)+i.y*Math.abs(Qn.y)+i.z*Math.abs(Qn.z),l=t.dot(Qn),c=e.dot(Qn),h=n.dot(Qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Sd=new qs,xs=new O,Mo=new O;class Zr{constructor(t=new O,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Sd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xs.subVectors(t,this.center);const e=xs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(xs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xs.copy(t.center).add(Mo)),this.expandByPoint(xs.copy(t.center).sub(Mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new O,So=new O,sr=new O,Fn=new O,Eo=new O,rr=new O,To=new O;class Sa{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.direction).multiplyScalar(e).add(this.origin),xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){So.copy(t).add(e).multiplyScalar(.5),sr.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(So);const s=t.distanceTo(e)*.5,o=-this.direction.dot(sr),a=Fn.dot(this.direction),l=-Fn.dot(sr),c=Fn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const m=1/h;u*=m,d*=m,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(sr).multiplyScalar(d).add(So),p}intersectSphere(t,e){xn.subVectors(t.center,this.origin);const n=xn.dot(this.direction),i=xn.dot(xn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,n,i,s){Eo.subVectors(e,t),rr.subVectors(n,t),To.crossVectors(Eo,rr);let o=this.direction.dot(To),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fn.subVectors(this.origin,t);const l=a*this.direction.dot(rr.crossVectors(Fn,rr));if(l<0)return null;const c=a*this.direction.dot(Eo.cross(Fn));if(c<0||l+c>o)return null;const h=-a*Fn.dot(To);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,o,a,l,c,h,u,d,p,g,m,f){const v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=i,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=h,v[10]=u,v[14]=d,v[3]=p,v[7]=g,v[11]=m,v[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Fi.setFromMatrixColumn(t,0).length(),s=1/Fi.setFromMatrixColumn(t,1).length(),o=1/Fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,m=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-m*c,e[9]=-a*l,e[2]=m-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,m=c*u;e[0]=d+m*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=m+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,m=c*u;e[0]=d-m*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=m-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,m=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+m,e[1]=l*u,e[5]=m*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,m=a*c;e[0]=l*h,e[4]=m-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-m*u}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,m=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+m,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=m*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ed,t,Td)}lookAt(t,e,n){const i=this.elements;return Re.subVectors(t,e),Re.lengthSq()===0&&(Re.z=1),Re.normalize(),On.crossVectors(n,Re),On.lengthSq()===0&&(Math.abs(n.z)===1?Re.x+=1e-4:Re.z+=1e-4,Re.normalize(),On.crossVectors(n,Re)),On.normalize(),or.crossVectors(Re,On),i[0]=On.x,i[4]=or.x,i[8]=Re.x,i[1]=On.y,i[5]=or.y,i[9]=Re.y,i[2]=On.z,i[6]=or.z,i[10]=Re.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],m=n[6],f=n[10],v=n[14],x=n[3],_=n[7],w=n[11],y=n[15],S=i[0],L=i[4],b=i[8],T=i[12],I=i[1],G=i[5],j=i[9],R=i[13],P=i[2],F=i[6],B=i[10],Z=i[14],k=i[3],z=i[7],C=i[11],H=i[15];return s[0]=o*S+a*I+l*P+c*k,s[4]=o*L+a*G+l*F+c*z,s[8]=o*b+a*j+l*B+c*C,s[12]=o*T+a*R+l*Z+c*H,s[1]=h*S+u*I+d*P+p*k,s[5]=h*L+u*G+d*F+p*z,s[9]=h*b+u*j+d*B+p*C,s[13]=h*T+u*R+d*Z+p*H,s[2]=g*S+m*I+f*P+v*k,s[6]=g*L+m*G+f*F+v*z,s[10]=g*b+m*j+f*B+v*C,s[14]=g*T+m*R+f*Z+v*H,s[3]=x*S+_*I+w*P+y*k,s[7]=x*L+_*G+w*F+y*z,s[11]=x*b+_*j+w*B+y*C,s[15]=x*T+_*R+w*Z+y*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],m=t[7],f=t[11],v=t[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*p-n*l*p)+m*(+e*l*p-e*c*d+s*o*d-i*o*p+i*c*h-s*l*h)+f*(+e*c*u-e*a*p-s*o*u+n*o*p+s*a*h-n*c*h)+v*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],m=t[13],f=t[14],v=t[15],x=u*f*c-m*d*c+m*l*p-a*f*p-u*l*v+a*d*v,_=g*d*c-h*f*c-g*l*p+o*f*p+h*l*v-o*d*v,w=h*m*c-g*u*c+g*a*p-o*m*p-h*a*v+o*u*v,y=g*u*l-h*m*l-g*a*d+o*m*d+h*a*f-o*u*f,S=e*x+n*_+i*w+s*y;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/S;return t[0]=x*L,t[1]=(m*d*s-u*f*s-m*i*p+n*f*p+u*i*v-n*d*v)*L,t[2]=(a*f*s-m*l*s+m*i*c-n*f*c-a*i*v+n*l*v)*L,t[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*p-n*l*p)*L,t[4]=_*L,t[5]=(h*f*s-g*d*s+g*i*p-e*f*p-h*i*v+e*d*v)*L,t[6]=(g*l*s-o*f*s-g*i*c+e*f*c+o*i*v-e*l*v)*L,t[7]=(o*d*s-h*l*s+h*i*c-e*d*c-o*i*p+e*l*p)*L,t[8]=w*L,t[9]=(g*u*s-h*m*s-g*n*p+e*m*p+h*n*v-e*u*v)*L,t[10]=(o*m*s-g*a*s+g*n*c-e*m*c-o*n*v+e*a*v)*L,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*p-e*a*p)*L,t[12]=y*L,t[13]=(h*m*i-g*u*i+g*n*d-e*m*d-h*n*f+e*u*f)*L,t[14]=(g*a*i-o*m*i-g*n*l+e*m*l+o*n*f-e*a*f)*L,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*L,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,p=s*h,g=s*u,m=o*h,f=o*u,v=a*u,x=l*c,_=l*h,w=l*u,y=n.x,S=n.y,L=n.z;return i[0]=(1-(m+v))*y,i[1]=(p+w)*y,i[2]=(g-_)*y,i[3]=0,i[4]=(p-w)*S,i[5]=(1-(d+v))*S,i[6]=(f+x)*S,i[7]=0,i[8]=(g+_)*L,i[9]=(f-x)*L,i[10]=(1-(d+m))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Fi.set(i[0],i[1],i[2]).length();const o=Fi.set(i[4],i[5],i[6]).length(),a=Fi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Je.copy(this);const c=1/s,h=1/o,u=1/a;return Je.elements[0]*=c,Je.elements[1]*=c,Je.elements[2]*=c,Je.elements[4]*=h,Je.elements[5]*=h,Je.elements[6]*=h,Je.elements[8]*=u,Je.elements[9]*=u,Je.elements[10]*=u,e.setFromRotationMatrix(Je),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o){const a=this.elements,l=2*s/(e-t),c=2*s/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),d=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,s,o){const a=this.elements,l=1/(e-t),c=1/(n-i),h=1/(o-s),u=(e+t)*l,d=(n+i)*c,p=(o+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Fi=new O,Je=new ne,Ed=new O(0,0,0),Td=new O(1,1,1),On=new O,or=new O,Re=new O,Cl=new ne,Ll=new _i;class Xs{constructor(t=0,e=0,n=0,i=Xs.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Cl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Xs.DefaultOrder="XYZ";Xs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ea{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ad=0;const Pl=new O,Oi=new _i,_n=new ne,ar=new O,_s=new O,Cd=new O,Ld=new _i,Rl=new O(1,0,0),Dl=new O(0,1,0),Il=new O(0,0,1),Pd={type:"added"},zl={type:"removed"};class xe extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DefaultUp.clone();const t=new O,e=new Xs,n=new _i,i=new O(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new Xe}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=xe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xe.DefaultMatrixWorldAutoUpdate,this.layers=new Ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(Rl,t)}rotateY(t){return this.rotateOnAxis(Dl,t)}rotateZ(t){return this.rotateOnAxis(Il,t)}translateOnAxis(t,e){return Pl.copy(t).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rl,t)}translateY(t){return this.translateOnAxis(Dl,t)}translateZ(t){return this.translateOnAxis(Il,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ar.copy(t):ar.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(_s,ar,this.up):_n.lookAt(ar,_s,this.up),this.quaternion.setFromRotationMatrix(_n),i&&(_n.extractRotation(i.matrixWorld),Oi.setFromRotationMatrix(_n),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Pd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(zl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,Cd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Ld,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}xe.DefaultUp=new O(0,1,0);xe.DefaultMatrixAutoUpdate=!0;xe.DefaultMatrixWorldAutoUpdate=!0;const Ke=new O,yn=new O,Ao=new O,wn=new O,Bi=new O,Ui=new O,Nl=new O,Co=new O,Lo=new O,Po=new O;class Ln{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ke.subVectors(t,e),i.cross(Ke);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ke.subVectors(i,e),yn.subVectors(n,e),Ao.subVectors(t,e);const o=Ke.dot(Ke),a=Ke.dot(yn),l=Ke.dot(Ao),c=yn.dot(yn),h=yn.dot(Ao),u=o*c-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,wn),wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getUV(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,wn),l.set(0,0),l.addScaledVector(s,wn.x),l.addScaledVector(o,wn.y),l.addScaledVector(a,wn.z),l}static isFrontFacing(t,e,n,i){return Ke.subVectors(n,e),yn.subVectors(t,e),Ke.cross(yn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),Ke.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ln.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Ln.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Bi.subVectors(i,n),Ui.subVectors(s,n),Co.subVectors(t,n);const l=Bi.dot(Co),c=Ui.dot(Co);if(l<=0&&c<=0)return e.copy(n);Lo.subVectors(t,i);const h=Bi.dot(Lo),u=Ui.dot(Lo);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Bi,o);Po.subVectors(t,s);const p=Bi.dot(Po),g=Ui.dot(Po);if(g>=0&&p<=g)return e.copy(s);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ui,a);const f=h*g-p*u;if(f<=0&&u-h>=0&&p-g>=0)return Nl.subVectors(s,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(Nl,a);const v=1/(f+m+d);return o=m*v,a=d*v,e.copy(n).addScaledVector(Bi,o).addScaledVector(Ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Rd=0;class qn extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=ts,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=lh,this.blendDst=ch,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=po,this.stencilZFail=po,this.stencilZPass=po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(n.blending=this.blending),this.side!==rs&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ei extends qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const oe=new O,lr=new ot;class pn{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=Ml,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)lr.fromBufferAttribute(this,e),lr.applyMatrix3(t),this.setXY(e,lr.x,lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix3(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix4(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyNormalMatrix(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.transformDirection(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ml&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class vh extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class xh extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Dd=0;const Ue=new ne,Ro=new xe,ki=new O,De=new qs,ys=new qs,ge=new O;class Ie extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dh(t)?xh:vh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,n){return Ue.makeTranslation(t,e,n),this.applyMatrix4(Ue),this}scale(t,e,n){return Ue.makeScale(t,e,n),this.applyMatrix4(Ue),this}lookAt(t){return Ro.lookAt(t),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ie(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];De.setFromBufferAttribute(s),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ys.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(De.min,ys.min),De.expandByPoint(ge),ge.addVectors(De.max,ys.max),De.expandByPoint(ge)):(De.expandByPoint(ys.min),De.expandByPoint(ys.max))}De.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)ge.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ge));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ge.fromBufferAttribute(a,c),l&&(ki.fromBufferAttribute(t,c),ge.add(ki)),i=Math.max(i,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let I=0;I<a;I++)c[I]=new O,h[I]=new O;const u=new O,d=new O,p=new O,g=new ot,m=new ot,f=new ot,v=new O,x=new O;function _(I,G,j){u.fromArray(i,I*3),d.fromArray(i,G*3),p.fromArray(i,j*3),g.fromArray(o,I*2),m.fromArray(o,G*2),f.fromArray(o,j*2),d.sub(u),p.sub(u),m.sub(g),f.sub(g);const R=1/(m.x*f.y-f.x*m.y);!isFinite(R)||(v.copy(d).multiplyScalar(f.y).addScaledVector(p,-m.y).multiplyScalar(R),x.copy(p).multiplyScalar(m.x).addScaledVector(d,-f.x).multiplyScalar(R),c[I].add(v),c[G].add(v),c[j].add(v),h[I].add(x),h[G].add(x),h[j].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let I=0,G=w.length;I<G;++I){const j=w[I],R=j.start,P=j.count;for(let F=R,B=R+P;F<B;F+=3)_(n[F+0],n[F+1],n[F+2])}const y=new O,S=new O,L=new O,b=new O;function T(I){L.fromArray(s,I*3),b.copy(L);const G=c[I];y.copy(G),y.sub(L.multiplyScalar(L.dot(G))).normalize(),S.crossVectors(b,G);const R=S.dot(h[I])<0?-1:1;l[I*4]=y.x,l[I*4+1]=y.y,l[I*4+2]=y.z,l[I*4+3]=R}for(let I=0,G=w.length;I<G;++I){const j=w[I],R=j.start,P=j.count;for(let F=R,B=R+P;F<B;F+=3)T(n[F+0]),T(n[F+1]),T(n[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new O,s=new O,o=new O,a=new O,l=new O,c=new O,h=new O,u=new O;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),m=t.getX(d+1),f=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,f),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,f),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let m=0,f=l.length;m<f;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*h;for(let v=0;v<h;v++)d[g++]=c[p++]}return new pn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fl=new ne,Gi=new Sa,Do=new Zr,Bn=new O,Un=new O,kn=new O,Io=new O,zo=new O,No=new O,cr=new O,hr=new O,ur=new O,dr=new ot,fr=new ot,pr=new ot,Fo=new O,mr=new O;class Jt extends xe{constructor(t=new Ie,e=new Ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(s),t.ray.intersectsSphere(Do)===!1)||(Fl.copy(s).invert(),Gi.copy(t.ray).applyMatrix4(Fl),n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,p=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,f=p.length;m<f;m++){const v=p[m],x=i[v.materialIndex],_=Math.max(v.start,g.start),w=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let y=_,S=w;y<S;y+=3){const L=a.getX(y),b=a.getX(y+1),T=a.getX(y+2);o=gr(this,x,t,Gi,l,c,h,u,d,L,b,T),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=v.materialIndex,e.push(o))}}else{const m=Math.max(0,g.start),f=Math.min(a.count,g.start+g.count);for(let v=m,x=f;v<x;v+=3){const _=a.getX(v),w=a.getX(v+1),y=a.getX(v+2);o=gr(this,i,t,Gi,l,c,h,u,d,_,w,y),o&&(o.faceIndex=Math.floor(v/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,f=p.length;m<f;m++){const v=p[m],x=i[v.materialIndex],_=Math.max(v.start,g.start),w=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let y=_,S=w;y<S;y+=3){const L=y,b=y+1,T=y+2;o=gr(this,x,t,Gi,l,c,h,u,d,L,b,T),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=v.materialIndex,e.push(o))}}else{const m=Math.max(0,g.start),f=Math.min(l.count,g.start+g.count);for(let v=m,x=f;v<x;v+=3){const _=v,w=v+1,y=v+2;o=gr(this,i,t,Gi,l,c,h,u,d,_,w,y),o&&(o.faceIndex=Math.floor(v/3),e.push(o))}}}}function Id(r,t,e,n,i,s,o,a){let l;if(t.side===je?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side!==qe,a),l===null)return null;mr.copy(a),mr.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(mr);return c<e.near||c>e.far?null:{distance:c,point:mr.clone(),object:r}}function gr(r,t,e,n,i,s,o,a,l,c,h,u){Bn.fromBufferAttribute(i,c),Un.fromBufferAttribute(i,h),kn.fromBufferAttribute(i,u);const d=r.morphTargetInfluences;if(s&&d){cr.set(0,0,0),hr.set(0,0,0),ur.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const f=d[g],v=s[g];f!==0&&(Io.fromBufferAttribute(v,c),zo.fromBufferAttribute(v,h),No.fromBufferAttribute(v,u),o?(cr.addScaledVector(Io,f),hr.addScaledVector(zo,f),ur.addScaledVector(No,f)):(cr.addScaledVector(Io.sub(Bn),f),hr.addScaledVector(zo.sub(Un),f),ur.addScaledVector(No.sub(kn),f)))}Bn.add(cr),Un.add(hr),kn.add(ur)}r.isSkinnedMesh&&(r.boneTransform(c,Bn),r.boneTransform(h,Un),r.boneTransform(u,kn));const p=Id(r,t,e,n,Bn,Un,kn,Fo);if(p){a&&(dr.fromBufferAttribute(a,c),fr.fromBufferAttribute(a,h),pr.fromBufferAttribute(a,u),p.uv=Ln.getUV(Fo,Bn,Un,kn,dr,fr,pr,new ot)),l&&(dr.fromBufferAttribute(l,c),fr.fromBufferAttribute(l,h),pr.fromBufferAttribute(l,u),p.uv2=Ln.getUV(Fo,Bn,Un,kn,dr,fr,pr,new ot));const g={a:c,b:h,c:u,normal:new O,materialIndex:0};Ln.getNormal(Bn,Un,kn,g.normal),p.face=g}return p}class Xn extends Ie{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function g(m,f,v,x,_,w,y,S,L,b,T){const I=w/L,G=y/b,j=w/2,R=y/2,P=S/2,F=L+1,B=b+1;let Z=0,k=0;const z=new O;for(let C=0;C<B;C++){const H=C*G-R;for(let q=0;q<F;q++){const Y=q*I-j;z[m]=Y*x,z[f]=H*_,z[v]=P,c.push(z.x,z.y,z.z),z[m]=0,z[f]=0,z[v]=S>0?1:-1,h.push(z.x,z.y,z.z),u.push(q/L),u.push(1-C/b),Z+=1}}for(let C=0;C<b;C++)for(let H=0;H<L;H++){const q=d+H+F*C,Y=d+H+F*(C+1),at=d+(H+1)+F*(C+1),St=d+(H+1)+F*C;l.push(q,Y,St),l.push(Y,at,St),k+=6}a.addGroup(p,k,T),p+=k,d+=Z}}static fromJSON(t){return new Xn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function cs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ee(r){const t={};for(let e=0;e<r.length;e++){const n=cs(r[e]);for(const i in n)t[i]=n[i]}return t}function zd(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}const Nd={clone:cs,merge:Ee};var Fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fd,this.fragmentShader=Od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=zd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class _h extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class We extends _h{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=El*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return El*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(mo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wi=90,Vi=1;class Bd extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new We(Wi,Vi,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new O(1,0,0)),this.add(i);const s=new We(Wi,Vi,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new O(-1,0,0)),this.add(s);const o=new We(Wi,Vi,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new O(0,1,0)),this.add(o);const a=new We(Wi,Vi,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new O(0,-1,0)),this.add(a);const l=new We(Wi,Vi,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new O(0,0,1)),this.add(l);const c=new We(Wi,Vi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new O(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,h=t.getRenderTarget(),u=t.toneMapping,d=t.xr.enabled;t.toneMapping=Pn,t.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=p,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class yh extends sn{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:os,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ud extends xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new yh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ge}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Xn(5,5,5),s=new yi({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:Wn});s.uniforms.tEquirect.value=e;const o=new Jt(i,s),a=e.minFilter;return e.minFilter===Yr&&(e.minFilter=Ge),new Bd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Oo=new O,kd=new O,Gd=new Xe;class ei{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Oo.subVectors(n,e).cross(kd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(Oo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(n).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gd.getNormalMatrix(t),i=this.coplanarPoint(Oo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new Zr,vr=new O;class Ta{constructor(t=new ei,e=new ei,n=new ei,i=new ei,s=new ei,o=new ei){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],p=n[9],g=n[10],m=n[11],f=n[12],v=n[13],x=n[14],_=n[15];return e[0].setComponents(a-i,u-l,m-d,_-f).normalize(),e[1].setComponents(a+i,u+l,m+d,_+f).normalize(),e[2].setComponents(a+s,u+c,m+p,_+v).normalize(),e[3].setComponents(a-s,u-c,m-p,_-v).normalize(),e[4].setComponents(a-o,u-h,m-g,_-x).normalize(),e[5].setComponents(a+o,u+h,m+g,_+x).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSprite(t){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(vr.x=i.normal.x>0?t.max.x:t.min.x,vr.y=i.normal.y>0?t.max.y:t.min.y,vr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(vr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wh(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Wd(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,p=r.createBuffer();r.bindBuffer(h,p),r.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,p=h.updateRange;r.bindBuffer(u,c),p.count===-1?r.bufferSubData(u,0,d):(e?r.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):r.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class Jr extends Ie{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],m=[],f=[];for(let v=0;v<h;v++){const x=v*d-o;for(let _=0;_<c;_++){const w=_*u-s;g.push(w,-x,0),m.push(0,0,1),f.push(_/a),f.push(1-v/l)}}for(let v=0;v<l;v++)for(let x=0;x<a;x++){const _=x+c*v,w=x+c*(v+1),y=x+1+c*(v+1),S=x+1+c*v;p.push(_,w,S),p.push(w,y,S)}this.setIndex(p),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(m,3)),this.setAttribute("uv",new ie(f,2))}static fromJSON(t){return new Jr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$d="vec3 transformed = vec3( position );",Zd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jd=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Kd=`#ifdef USE_IRIDESCENCE
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
#endif`,Qd=`#ifdef USE_BUMPMAP
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
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cf=`#define PI 3.141592653589793
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
}`,hf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uf=`vec3 transformedNormal = objectNormal;
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
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",vf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ef=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Af=`#ifdef USE_GRADIENTMAP
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
}`,Cf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rf=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Df=`uniform bool receiveShadow;
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
#endif`,If=`#if defined( USE_ENVMAP )
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
#endif`,zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nf=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Bf=`PhysicalMaterial material;
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
#endif`,Uf=`struct PhysicalMaterial {
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
}`,kf=`
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
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Vf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tp=`#ifdef USE_MORPHNORMALS
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
#endif`,ep=`#ifdef USE_MORPHTARGETS
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
#endif`,np=`#ifdef USE_MORPHTARGETS
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
#endif`,ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,sp=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lp=`#ifdef USE_NORMALMAP
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
#endif`,cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mp=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sp=`float getShadowMask() {
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
}`,Ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,Ap=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cp=`#ifdef USE_SKINNING
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
#endif`,Lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ip=`#ifdef USE_TRANSMISSION
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
#endif`,zp=`#ifdef USE_TRANSMISSION
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
#endif`,Np=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Fp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Op=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Bp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Up=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,kp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vp=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yp=`#include <common>
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
}`,$p=`#if DEPTH_PACKING == 3200
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
}`,Zp=`#define DISTANCE
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
}`,Jp=`#define DISTANCE
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
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tm=`uniform float scale;
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
}`,em=`uniform vec3 diffuse;
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
}`,nm=`#include <common>
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
}`,im=`uniform vec3 diffuse;
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
}`,sm=`#define LAMBERT
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
}`,rm=`#define LAMBERT
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
}`,om=`#define MATCAP
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
}`,am=`#define MATCAP
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
}`,lm=`#define NORMAL
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
}`,cm=`#define NORMAL
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
}`,hm=`#define PHONG
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
}`,um=`#define PHONG
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
}`,dm=`#define STANDARD
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
}`,fm=`#define STANDARD
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
}`,pm=`#define TOON
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
}`,mm=`#define TOON
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
}`,gm=`uniform float size;
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
}`,vm=`uniform vec3 diffuse;
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
}`,xm=`#include <common>
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
}`,_m=`uniform vec3 color;
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
}`,ym=`uniform float rotation;
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
}`,wm=`uniform vec3 diffuse;
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
}`,It={alphamap_fragment:Vd,alphamap_pars_fragment:Hd,alphatest_fragment:qd,alphatest_pars_fragment:Xd,aomap_fragment:jd,aomap_pars_fragment:Yd,begin_vertex:$d,beginnormal_vertex:Zd,bsdfs:Jd,iridescence_fragment:Kd,bumpmap_pars_fragment:Qd,clipping_planes_fragment:tf,clipping_planes_pars_fragment:ef,clipping_planes_pars_vertex:nf,clipping_planes_vertex:sf,color_fragment:rf,color_pars_fragment:of,color_pars_vertex:af,color_vertex:lf,common:cf,cube_uv_reflection_fragment:hf,defaultnormal_vertex:uf,displacementmap_pars_vertex:df,displacementmap_vertex:ff,emissivemap_fragment:pf,emissivemap_pars_fragment:mf,encodings_fragment:gf,encodings_pars_fragment:vf,envmap_fragment:xf,envmap_common_pars_fragment:_f,envmap_pars_fragment:yf,envmap_pars_vertex:wf,envmap_physical_pars_fragment:If,envmap_vertex:bf,fog_vertex:Mf,fog_pars_vertex:Sf,fog_fragment:Ef,fog_pars_fragment:Tf,gradientmap_pars_fragment:Af,lightmap_fragment:Cf,lightmap_pars_fragment:Lf,lights_lambert_fragment:Pf,lights_lambert_pars_fragment:Rf,lights_pars_begin:Df,lights_toon_fragment:zf,lights_toon_pars_fragment:Nf,lights_phong_fragment:Ff,lights_phong_pars_fragment:Of,lights_physical_fragment:Bf,lights_physical_pars_fragment:Uf,lights_fragment_begin:kf,lights_fragment_maps:Gf,lights_fragment_end:Wf,logdepthbuf_fragment:Vf,logdepthbuf_pars_fragment:Hf,logdepthbuf_pars_vertex:qf,logdepthbuf_vertex:Xf,map_fragment:jf,map_pars_fragment:Yf,map_particle_fragment:$f,map_particle_pars_fragment:Zf,metalnessmap_fragment:Jf,metalnessmap_pars_fragment:Kf,morphcolor_vertex:Qf,morphnormal_vertex:tp,morphtarget_pars_vertex:ep,morphtarget_vertex:np,normal_fragment_begin:ip,normal_fragment_maps:sp,normal_pars_fragment:rp,normal_pars_vertex:op,normal_vertex:ap,normalmap_pars_fragment:lp,clearcoat_normal_fragment_begin:cp,clearcoat_normal_fragment_maps:hp,clearcoat_pars_fragment:up,iridescence_pars_fragment:dp,output_fragment:fp,packing:pp,premultiplied_alpha_fragment:mp,project_vertex:gp,dithering_fragment:vp,dithering_pars_fragment:xp,roughnessmap_fragment:_p,roughnessmap_pars_fragment:yp,shadowmap_pars_fragment:wp,shadowmap_pars_vertex:bp,shadowmap_vertex:Mp,shadowmask_pars_fragment:Sp,skinbase_vertex:Ep,skinning_pars_vertex:Tp,skinning_vertex:Ap,skinnormal_vertex:Cp,specularmap_fragment:Lp,specularmap_pars_fragment:Pp,tonemapping_fragment:Rp,tonemapping_pars_fragment:Dp,transmission_fragment:Ip,transmission_pars_fragment:zp,uv_pars_fragment:Np,uv_pars_vertex:Fp,uv_vertex:Op,uv2_pars_fragment:Bp,uv2_pars_vertex:Up,uv2_vertex:kp,worldpos_vertex:Gp,background_vert:Wp,background_frag:Vp,backgroundCube_vert:Hp,backgroundCube_frag:qp,cube_vert:Xp,cube_frag:jp,depth_vert:Yp,depth_frag:$p,distanceRGBA_vert:Zp,distanceRGBA_frag:Jp,equirect_vert:Kp,equirect_frag:Qp,linedashed_vert:tm,linedashed_frag:em,meshbasic_vert:nm,meshbasic_frag:im,meshlambert_vert:sm,meshlambert_frag:rm,meshmatcap_vert:om,meshmatcap_frag:am,meshnormal_vert:lm,meshnormal_frag:cm,meshphong_vert:hm,meshphong_frag:um,meshphysical_vert:dm,meshphysical_frag:fm,meshtoon_vert:pm,meshtoon_frag:mm,points_vert:gm,points_frag:vm,shadow_vert:xm,shadow_frag:_m,sprite_vert:ym,sprite_frag:wm},rt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Xe},uv2Transform:{value:new Xe},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xe}}},fn={basic:{uniforms:Ee([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:Ee([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new qt(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:Ee([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:Ee([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:Ee([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new qt(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:Ee([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:Ee([rt.points,rt.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:Ee([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:Ee([rt.common,rt.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:Ee([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:Ee([rt.sprite,rt.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:Ee([rt.common,rt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:Ee([rt.lights,rt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};fn.physical={uniforms:Ee([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ot(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};function bm(r,t,e,n,i,s,o){const a=new qt(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function g(f,v){let x=!1,_=v.isScene===!0?v.background:null;_&&_.isTexture&&(_=(v.backgroundBlurriness>0?e:t).get(_));const w=r.xr,y=w.getSession&&w.getSession();y&&y.environmentBlendMode==="additive"&&(_=null),_===null?m(a,l):_&&_.isColor&&(m(_,1),x=!0),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===jr)?(h===void 0&&(h=new Jt(new Xn(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:cs(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,L,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,(u!==_||d!==_.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=r.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Jt(new Jr(2,2),new yi({name:"BackgroundMaterial",uniforms:cs(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,p=r.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function m(f,v){n.buffers.color.setClear(f.r,f.g,f.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(f,v=1){a.set(f),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,m(a,l)},render:g}}function Mm(r,t,e,n){const i=r.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=f(null);let c=l,h=!1;function u(P,F,B,Z,k){let z=!1;if(o){const C=m(Z,B,F);c!==C&&(c=C,p(c.object)),z=v(P,Z,B,k),z&&x(P,Z,B,k)}else{const C=F.wireframe===!0;(c.geometry!==Z.id||c.program!==B.id||c.wireframe!==C)&&(c.geometry=Z.id,c.program=B.id,c.wireframe=C,z=!0)}k!==null&&e.update(k,34963),(z||h)&&(h=!1,b(P,F,B,Z),k!==null&&r.bindBuffer(34963,e.get(k).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function m(P,F,B){const Z=B.wireframe===!0;let k=a[P.id];k===void 0&&(k={},a[P.id]=k);let z=k[F.id];z===void 0&&(z={},k[F.id]=z);let C=z[Z];return C===void 0&&(C=f(d()),z[Z]=C),C}function f(P){const F=[],B=[],Z=[];for(let k=0;k<i;k++)F[k]=0,B[k]=0,Z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:Z,object:P,attributes:{},index:null}}function v(P,F,B,Z){const k=c.attributes,z=F.attributes;let C=0;const H=B.getAttributes();for(const q in H)if(H[q].location>=0){const at=k[q];let St=z[q];if(St===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(St=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(St=P.instanceColor)),at===void 0||at.attribute!==St||St&&at.data!==St.data)return!0;C++}return c.attributesNum!==C||c.index!==Z}function x(P,F,B,Z){const k={},z=F.attributes;let C=0;const H=B.getAttributes();for(const q in H)if(H[q].location>=0){let at=z[q];at===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(at=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(at=P.instanceColor));const St={};St.attribute=at,at&&at.data&&(St.data=at.data),k[q]=St,C++}c.attributes=k,c.attributesNum=C,c.index=Z}function _(){const P=c.newAttributes;for(let F=0,B=P.length;F<B;F++)P[F]=0}function w(P){y(P,0)}function y(P,F){const B=c.newAttributes,Z=c.enabledAttributes,k=c.attributeDivisors;B[P]=1,Z[P]===0&&(r.enableVertexAttribArray(P),Z[P]=1),k[P]!==F&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),k[P]=F)}function S(){const P=c.newAttributes,F=c.enabledAttributes;for(let B=0,Z=F.length;B<Z;B++)F[B]!==P[B]&&(r.disableVertexAttribArray(B),F[B]=0)}function L(P,F,B,Z,k,z){n.isWebGL2===!0&&(B===5124||B===5125)?r.vertexAttribIPointer(P,F,B,k,z):r.vertexAttribPointer(P,F,B,Z,k,z)}function b(P,F,B,Z){if(n.isWebGL2===!1&&(P.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const k=Z.attributes,z=B.getAttributes(),C=F.defaultAttributeValues;for(const H in z){const q=z[H];if(q.location>=0){let Y=k[H];if(Y===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){const at=Y.normalized,St=Y.itemSize,Q=e.get(Y);if(Q===void 0)continue;const Ut=Q.buffer,Tt=Q.type,At=Q.bytesPerElement;if(Y.isInterleavedBufferAttribute){const mt=Y.data,Xt=mt.stride,Rt=Y.offset;if(mt.isInstancedInterleavedBuffer){for(let bt=0;bt<q.locationSize;bt++)y(q.location+bt,mt.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let bt=0;bt<q.locationSize;bt++)w(q.location+bt);r.bindBuffer(34962,Ut);for(let bt=0;bt<q.locationSize;bt++)L(q.location+bt,St/q.locationSize,Tt,at,Xt*At,(Rt+St/q.locationSize*bt)*At)}else{if(Y.isInstancedBufferAttribute){for(let mt=0;mt<q.locationSize;mt++)y(q.location+mt,Y.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let mt=0;mt<q.locationSize;mt++)w(q.location+mt);r.bindBuffer(34962,Ut);for(let mt=0;mt<q.locationSize;mt++)L(q.location+mt,St/q.locationSize,Tt,at,St*At,St/q.locationSize*mt*At)}}else if(C!==void 0){const at=C[H];if(at!==void 0)switch(at.length){case 2:r.vertexAttrib2fv(q.location,at);break;case 3:r.vertexAttrib3fv(q.location,at);break;case 4:r.vertexAttrib4fv(q.location,at);break;default:r.vertexAttrib1fv(q.location,at)}}}}S()}function T(){j();for(const P in a){const F=a[P];for(const B in F){const Z=F[B];for(const k in Z)g(Z[k].object),delete Z[k];delete F[B]}delete a[P]}}function I(P){if(a[P.id]===void 0)return;const F=a[P.id];for(const B in F){const Z=F[B];for(const k in Z)g(Z[k].object),delete Z[k];delete F[B]}delete a[P.id]}function G(P){for(const F in a){const B=a[F];if(B[P.id]===void 0)continue;const Z=B[P.id];for(const k in Z)g(Z[k].object),delete Z[k];delete B[P.id]}}function j(){R(),h=!0,c!==l&&(c=l,p(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:j,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:I,releaseStatesOfProgram:G,initAttributes:_,enableAttribute:w,disableUnusedAttributes:S}}function Sm(r,t,e,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,h){r.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,p;if(i)d=r,p="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,h,u),e.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=l}function Em(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(34930),d=r.getParameter(35660),p=r.getParameter(3379),g=r.getParameter(34076),m=r.getParameter(34921),f=r.getParameter(36347),v=r.getParameter(36348),x=r.getParameter(36349),_=d>0,w=o||t.has("OES_texture_float"),y=_&&w,S=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:f,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:w,floatVertexTextures:y,maxSamples:S}}function Tm(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new ei,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,p){const g=u.length!==0||d||n!==0||i;return i=d,e=h(u,p,0),n=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,d,p){const g=u.clippingPlanes,m=u.clipIntersection,f=u.clipShadows,v=r.get(u);if(!i||g===null||g.length===0||s&&!f)s?h(null):c();else{const x=s?0:n,_=x*4;let w=v.clippingState||null;l.value=w,w=h(g,d,_,p);for(let y=0;y!==_;++y)w[y]=e[y];v.clippingState=w,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const m=u!==null?u.length:0;let f=null;if(m!==0){if(f=l.value,g!==!0||f===null){const v=p+m*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(f===null||f.length<v)&&(f=new Float32Array(v));for(let _=0,w=p;_!==m;++_,w+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(f,w),f[w+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,f}}function Am(r){let t=new WeakMap;function e(o,a){return a===la?o.mapping=os:a===ca&&(o.mapping=as),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===la||a===ca)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ud(l.height/2);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class bh extends _h{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ki=4,Ol=[.125,.215,.35,.446,.526,.582],ii=20,Bo=new bh,Bl=new qt;let Uo=null;const ni=(1+Math.sqrt(5))/2,qi=1/ni,Ul=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,ni,qi),new O(0,ni,-qi),new O(qi,0,ni),new O(-qi,0,ni),new O(ni,qi,0),new O(-ni,qi,0)];class kl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Uo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Uo),t.scissorTest=!1,xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uo=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:Fs,format:en,encoding:vi,depthBuffer:!1},i=Gl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cm(s)),this._blurMaterial=Lm(s,t,e)}return i}_compileMaterial(t){const e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,Bo)}_sceneToCubeUV(t,e,n,i){const a=new We(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Bl),h.toneMapping=Pn,h.autoClear=!1;const p=new Ei({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new Jt(new Xn,p);let m=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,m=!0):(p.color.copy(Bl),m=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):x===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const _=this._cubeSize;xr(i,x*_,v>2?_:0,_,_),h.setRenderTarget(i),m&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===os||t.mapping===as;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;xr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Bo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ul[(i-1)%Ul.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Jt(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ii-1),m=s/g,f=isFinite(s)?1+Math.floor(h*m):ii;f>ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ii}`);const v=[];let x=0;for(let L=0;L<ii;++L){const b=L/m,T=Math.exp(-b*b/2);v.push(T),L===0?x+=T:L<f&&(x+=2*T)}for(let L=0;L<v.length;L++)v[L]=v[L]/x;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=v,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const w=this._sizeLods[i],y=3*w*(i>_-Ki?i-_+Ki:0),S=4*(this._cubeSize-w);xr(e,y,S,3*w,2*w),l.setRenderTarget(e),l.render(u,Bo)}}function Cm(r){const t=[],e=[],n=[];let i=r;const s=r-Ki+1+Ol.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ki?l=Ol[o-r+Ki-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,m=3,f=2,v=1,x=new Float32Array(m*g*p),_=new Float32Array(f*g*p),w=new Float32Array(v*g*p);for(let S=0;S<p;S++){const L=S%3*2/3-1,b=S>2?0:-1,T=[L,b,0,L+2/3,b,0,L+2/3,b+1,0,L,b,0,L+2/3,b+1,0,L,b+1,0];x.set(T,m*g*S),_.set(d,f*g*S);const I=[S,S,S,S,S,S];w.set(I,v*g*S)}const y=new Ie;y.setAttribute("position",new pn(x,m)),y.setAttribute("uv",new pn(_,f)),y.setAttribute("faceIndex",new pn(w,v)),t.push(y),i>Ki&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Gl(r,t,e){const n=new xi(r,t,e);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Lm(r,t,e){const n=new Float32Array(ii),i=new O(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Wl(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Vl(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Aa(){return`

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
	`}function Pm(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===la||l===ca,h=l===os||l===as;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new kl(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new kl(r));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Rm(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Dm(r,t,e,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],34962);const p=u.morphAttributes;for(const g in p){const m=p[g];for(let f=0,v=m.length;f<v;f++)t.update(m[f],34962)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let m=0;if(p!==null){const x=p.array;m=p.version;for(let _=0,w=x.length;_<w;_+=3){const y=x[_+0],S=x[_+1],L=x[_+2];d.push(y,S,S,L,L,y)}}else{const x=g.array;m=g.version;for(let _=0,w=x.length/3-1;_<w;_+=3){const y=_+0,S=_+1,L=_+2;d.push(y,S,S,L,L,y)}}const f=new(dh(d)?xh:vh)(d,1);f.version=m;const v=s.get(u);v&&t.remove(v),s.set(u,f)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Im(r,t,e,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,p){r.drawElements(s,p,a,d*l),e.update(p,s,1)}function u(d,p,g){if(g===0)return;let m,f;if(i)m=r,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,p,a,d*l,g),e.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function zm(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(s/3);break;case 1:e.lines+=a*(s/2);break;case 3:e.lines+=a*(s-1);break;case 2:e.lines+=a*s;break;case 0:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Nm(r,t){return r[0]-t[0]}function Fm(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Om(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new ve,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,d){const p=c.morphTargetInfluences;if(t.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=m!==void 0?m.length:0;let v=s.get(h);if(v===void 0||v.count!==f){let B=function(){P.dispose(),s.delete(h),h.removeEventListener("dispose",B)};var g=B;v!==void 0&&v.texture.dispose();const w=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let I=0;w===!0&&(I=1),y===!0&&(I=2),S===!0&&(I=3);let G=h.attributes.position.count*I,j=1;G>t.maxTextureSize&&(j=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const R=new Float32Array(G*j*4*f),P=new gh(R,G,j,f);P.type=ai,P.needsUpdate=!0;const F=I*4;for(let Z=0;Z<f;Z++){const k=L[Z],z=b[Z],C=T[Z],H=G*j*4*Z;for(let q=0;q<k.count;q++){const Y=q*F;w===!0&&(o.fromBufferAttribute(k,q),R[H+Y+0]=o.x,R[H+Y+1]=o.y,R[H+Y+2]=o.z,R[H+Y+3]=0),y===!0&&(o.fromBufferAttribute(z,q),R[H+Y+4]=o.x,R[H+Y+5]=o.y,R[H+Y+6]=o.z,R[H+Y+7]=0),S===!0&&(o.fromBufferAttribute(C,q),R[H+Y+8]=o.x,R[H+Y+9]=o.y,R[H+Y+10]=o.z,R[H+Y+11]=C.itemSize===4?o.w:1)}}v={count:f,texture:P,size:new ot(G,j)},s.set(h,v),h.addEventListener("dispose",B)}let x=0;for(let w=0;w<p.length;w++)x+=p[w];const _=h.morphTargetsRelative?1:1-x;d.getUniforms().setValue(r,"morphTargetBaseInfluence",_),d.getUniforms().setValue(r,"morphTargetInfluences",p),d.getUniforms().setValue(r,"morphTargetsTexture",v.texture,e),d.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{const m=p===void 0?0:p.length;let f=n[h.id];if(f===void 0||f.length!==m){f=[];for(let y=0;y<m;y++)f[y]=[y,0];n[h.id]=f}for(let y=0;y<m;y++){const S=f[y];S[0]=y,S[1]=p[y]}f.sort(Fm);for(let y=0;y<8;y++)y<m&&f[y][1]?(a[y][0]=f[y][0],a[y][1]=f[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Nm);const v=h.morphAttributes.position,x=h.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const S=a[y],L=S[0],b=S[1];L!==Number.MAX_SAFE_INTEGER&&b?(v&&h.getAttribute("morphTarget"+y)!==v[L]&&h.setAttribute("morphTarget"+y,v[L]),x&&h.getAttribute("morphNormal"+y)!==x[L]&&h.setAttribute("morphNormal"+y,x[L]),i[y]=b,_+=b):(v&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),x&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const w=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(r,"morphTargetBaseInfluence",w),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Bm(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);return i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const Mh=new sn,Sh=new gh,Eh=new Md,Th=new yh,Hl=[],ql=[],Xl=new Float32Array(16),jl=new Float32Array(9),Yl=new Float32Array(4);function fs(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Hl[i];if(s===void 0&&(s=new Float32Array(i),Hl[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function de(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function fe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Kr(r,t){let e=ql[t];e===void 0&&(e=new Int32Array(t),ql[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Um(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function km(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;r.uniform2fv(this.addr,t),fe(e,t)}}function Gm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;r.uniform3fv(this.addr,t),fe(e,t)}}function Wm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;r.uniform4fv(this.addr,t),fe(e,t)}}function Vm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;Yl.set(n),r.uniformMatrix2fv(this.addr,!1,Yl),fe(e,n)}}function Hm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;jl.set(n),r.uniformMatrix3fv(this.addr,!1,jl),fe(e,n)}}function qm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;Xl.set(n),r.uniformMatrix4fv(this.addr,!1,Xl),fe(e,n)}}function Xm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function jm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;r.uniform2iv(this.addr,t),fe(e,t)}}function Ym(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;r.uniform3iv(this.addr,t),fe(e,t)}}function $m(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;r.uniform4iv(this.addr,t),fe(e,t)}}function Zm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Jm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;r.uniform2uiv(this.addr,t),fe(e,t)}}function Km(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;r.uniform3uiv(this.addr,t),fe(e,t)}}function Qm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;r.uniform4uiv(this.addr,t),fe(e,t)}}function tg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Mh,i)}function eg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Eh,i)}function ng(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Th,i)}function ig(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Sh,i)}function sg(r){switch(r){case 5126:return Um;case 35664:return km;case 35665:return Gm;case 35666:return Wm;case 35674:return Vm;case 35675:return Hm;case 35676:return qm;case 5124:case 35670:return Xm;case 35667:case 35671:return jm;case 35668:case 35672:return Ym;case 35669:case 35673:return $m;case 5125:return Zm;case 36294:return Jm;case 36295:return Km;case 36296:return Qm;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}function rg(r,t){r.uniform1fv(this.addr,t)}function og(r,t){const e=fs(t,this.size,2);r.uniform2fv(this.addr,e)}function ag(r,t){const e=fs(t,this.size,3);r.uniform3fv(this.addr,e)}function lg(r,t){const e=fs(t,this.size,4);r.uniform4fv(this.addr,e)}function cg(r,t){const e=fs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function hg(r,t){const e=fs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function ug(r,t){const e=fs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function dg(r,t){r.uniform1iv(this.addr,t)}function fg(r,t){r.uniform2iv(this.addr,t)}function pg(r,t){r.uniform3iv(this.addr,t)}function mg(r,t){r.uniform4iv(this.addr,t)}function gg(r,t){r.uniform1uiv(this.addr,t)}function vg(r,t){r.uniform2uiv(this.addr,t)}function xg(r,t){r.uniform3uiv(this.addr,t)}function _g(r,t){r.uniform4uiv(this.addr,t)}function yg(r,t,e){const n=this.cache,i=t.length,s=Kr(e,i);de(n,s)||(r.uniform1iv(this.addr,s),fe(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Mh,s[o])}function wg(r,t,e){const n=this.cache,i=t.length,s=Kr(e,i);de(n,s)||(r.uniform1iv(this.addr,s),fe(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Eh,s[o])}function bg(r,t,e){const n=this.cache,i=t.length,s=Kr(e,i);de(n,s)||(r.uniform1iv(this.addr,s),fe(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Th,s[o])}function Mg(r,t,e){const n=this.cache,i=t.length,s=Kr(e,i);de(n,s)||(r.uniform1iv(this.addr,s),fe(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Sh,s[o])}function Sg(r){switch(r){case 5126:return rg;case 35664:return og;case 35665:return ag;case 35666:return lg;case 35674:return cg;case 35675:return hg;case 35676:return ug;case 5124:case 35670:return dg;case 35667:case 35671:return fg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return vg;case 36295:return xg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return Mg}}class Eg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=sg(e.type)}}class Tg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Sg(e.type)}}class Ag{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const ko=/(\w+)(\])?(\[|\.)?/g;function $l(r,t){r.seq.push(t),r.map[t.id]=t}function Cg(r,t,e){const n=r.name,i=n.length;for(ko.lastIndex=0;;){const s=ko.exec(n),o=ko.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){$l(e,c===void 0?new Eg(a,r,t):new Tg(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Ag(a),$l(e,u)),e=u}}}class Fr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Cg(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Zl(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let Lg=0;function Pg(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Rg(r){switch(r){case vi:return["Linear","( value )"];case te:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Jl(r,t,e){const n=r.getShaderParameter(t,35713),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Pg(r.getShaderSource(t),o)}else return i}function Dg(r,t){const e=Rg(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Ig(r,t){let e;switch(t){case Zu:e="Linear";break;case Ju:e="Reinhard";break;case Ku:e="OptimizedCineon";break;case Qu:e="ACESFilmic";break;case td:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function zg(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}function Ng(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fg(r,t){const e={},n=r.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Cs(r){return r!==""}function Kl(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ql(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Og=/^[ \t]*#include +<([\w\d./]+)>/gm;function pa(r){return r.replace(Og,Bg)}function Bg(r,t){const e=It[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return pa(e)}const Ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tc(r){return r.replace(Ug,kg)}function kg(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ec(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Gg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===oh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===ah?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===As&&(t="SHADOWMAP_TYPE_VSM"),t}function Wg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case os:case as:t="ENVMAP_TYPE_CUBE";break;case jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case as:t="ENVMAP_MODE_REFRACTION";break}return t}function Hg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Xr:t="ENVMAP_BLENDING_MULTIPLY";break;case Yu:t="ENVMAP_BLENDING_MIX";break;case $u:t="ENVMAP_BLENDING_ADD";break}return t}function qg(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Xg(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Gg(e),c=Wg(e),h=Vg(e),u=Hg(e),d=qg(e),p=e.isWebGL2?"":zg(e),g=Ng(s),m=i.createProgram();let f,v,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=[g].filter(Cs).join(`
`),f.length>0&&(f+=`
`),v=[p,g].filter(Cs).join(`
`),v.length>0&&(v+=`
`)):(f=[ec(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),v=[p,ec(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?It.tonemapping_pars_fragment:"",e.toneMapping!==Pn?Ig("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",It.encodings_pars_fragment,Dg("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cs).join(`
`)),o=pa(o),o=Kl(o,e),o=Ql(o,e),a=pa(a),a=Kl(a,e),a=Ql(a,e),o=tc(o),a=tc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["#define varying in",e.glslVersion===Sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const _=x+f+o,w=x+v+a,y=Zl(i,35633,_),S=Zl(i,35632,w);if(i.attachShader(m,y),i.attachShader(m,S),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),r.debug.checkShaderErrors){const T=i.getProgramInfoLog(m).trim(),I=i.getShaderInfoLog(y).trim(),G=i.getShaderInfoLog(S).trim();let j=!0,R=!0;if(i.getProgramParameter(m,35714)===!1){j=!1;const P=Jl(i,y,"vertex"),F=Jl(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+T+`
`+P+`
`+F)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(I===""||G==="")&&(R=!1);R&&(this.diagnostics={runnable:j,programLog:T,vertexShader:{log:I,prefix:f},fragmentShader:{log:G,prefix:v}})}i.deleteShader(y),i.deleteShader(S);let L;this.getUniforms=function(){return L===void 0&&(L=new Fr(i,m)),L};let b;return this.getAttributes=function(){return b===void 0&&(b=Fg(i,m)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=e.shaderName,this.id=Lg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=S,this}let jg=0;class Yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new $g(t),e.set(t,n)),n}}class $g{constructor(t){this.id=jg++,this.code=t,this.usedTimes=0}}function Zg(r,t,e,n,i,s,o){const a=new Ea,l=new Yg,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b,T,I,G,j){const R=G.fog,P=j.geometry,F=b.isMeshStandardMaterial?G.environment:null,B=(b.isMeshStandardMaterial?e:t).get(b.envMap||F),Z=!!B&&B.mapping===jr?B.image.height:null,k=g[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const z=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,C=z!==void 0?z.length:0;let H=0;P.morphAttributes.position!==void 0&&(H=1),P.morphAttributes.normal!==void 0&&(H=2),P.morphAttributes.color!==void 0&&(H=3);let q,Y,at,St;if(k){const Xt=fn[k];q=Xt.vertexShader,Y=Xt.fragmentShader}else q=b.vertexShader,Y=b.fragmentShader,l.update(b),at=l.getVertexShaderID(b),St=l.getFragmentShaderID(b);const Q=r.getRenderTarget(),Ut=b.alphaTest>0,Tt=b.clearcoat>0,At=b.iridescence>0;return{isWebGL2:h,shaderID:k,shaderName:b.type,vertexShader:q,fragmentShader:Y,defines:b.defines,customVertexShaderID:at,customFragmentShaderID:St,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:d,outputEncoding:Q===null?r.outputEncoding:Q.isXRRenderTarget===!0?Q.texture.encoding:vi,map:!!b.map,matcap:!!b.matcap,envMap:!!B,envMapMode:B&&B.mapping,envMapCubeUVHeight:Z,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===_d,tangentSpaceNormalMap:b.normalMapType===$r,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===te,clearcoat:Tt,clearcoatMap:Tt&&!!b.clearcoatMap,clearcoatRoughnessMap:Tt&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:Tt&&!!b.clearcoatNormalMap,iridescence:At,iridescenceMap:At&&!!b.iridescenceMap,iridescenceThicknessMap:At&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===ts,alphaMap:!!b.alphaMap,alphaTest:Ut,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!P.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||b.transmission>0||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||b.sheen>0||!!b.sheenColorMap||!!b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!R,useFog:b.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:u,skinning:j.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:H,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:b.toneMapped?r.toneMapping:Pn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===qe,flipSided:b.side===je,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function f(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)T.push(I),T.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(v(T,b),x(T,b),T.push(r.outputEncoding)),T.push(b.customProgramCacheKey),T.join()}function v(b,T){b.push(T.precision),b.push(T.outputEncoding),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.combine),b.push(T.vertexUvs),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function x(b,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),b.push(a.mask)}function _(b){const T=g[b.type];let I;if(T){const G=fn[T];I=Nd.clone(G.uniforms)}else I=b.uniforms;return I}function w(b,T){let I;for(let G=0,j=c.length;G<j;G++){const R=c[G];if(R.cacheKey===T){I=R,++I.usedTimes;break}}return I===void 0&&(I=new Xg(r,T,b,s),c.push(I)),I}function y(b){if(--b.usedTimes===0){const T=c.indexOf(b);c[T]=c[c.length-1],c.pop(),b.destroy()}}function S(b){l.remove(b)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:w,releaseProgram:y,releaseShaderCache:S,programs:c,dispose:L}}function Jg(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Kg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function nc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ic(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,p,g,m,f){let v=r[t];return v===void 0?(v={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:m,group:f},r[t]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=p,v.groupOrder=g,v.renderOrder=u.renderOrder,v.z=m,v.group=f),t++,v}function a(u,d,p,g,m,f){const v=o(u,d,p,g,m,f);p.transmission>0?n.push(v):p.transparent===!0?i.push(v):e.push(v)}function l(u,d,p,g,m,f){const v=o(u,d,p,g,m,f);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):e.unshift(v)}function c(u,d){e.length>1&&e.sort(u||Kg),n.length>1&&n.sort(d||nc),i.length>1&&i.sort(d||nc)}function h(){for(let u=t,d=r.length;u<d;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Qg(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new ic,r.set(n,[o])):i>=s.length?(o=new ic,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function t0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new qt};break;case"SpotLight":e={position:new O,direction:new O,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new O,halfWidth:new O,halfHeight:new O};break}return r[t.id]=e,e}}}function e0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let n0=0;function i0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function s0(r,t){const e=new t0,n=e0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new O);const s=new O,o=new ne,a=new ne;function l(h,u){let d=0,p=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let m=0,f=0,v=0,x=0,_=0,w=0,y=0,S=0,L=0,b=0;h.sort(i0);const T=u!==!0?Math.PI:1;for(let G=0,j=h.length;G<j;G++){const R=h[G],P=R.color,F=R.intensity,B=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=P.r*F*T,p+=P.g*F*T,g+=P.b*F*T;else if(R.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(R.sh.coefficients[k],F);else if(R.isDirectionalLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity*T),R.castShadow){const z=R.shadow,C=n.get(R);C.shadowBias=z.bias,C.shadowNormalBias=z.normalBias,C.shadowRadius=z.radius,C.shadowMapSize=z.mapSize,i.directionalShadow[m]=C,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=R.shadow.matrix,w++}i.directional[m]=k,m++}else if(R.isSpotLight){const k=e.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(P).multiplyScalar(F*T),k.distance=B,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,i.spot[v]=k;const z=R.shadow;if(R.map&&(i.spotLightMap[L]=R.map,L++,z.updateMatrices(R),R.castShadow&&b++),i.spotLightMatrix[v]=z.matrix,R.castShadow){const C=n.get(R);C.shadowBias=z.bias,C.shadowNormalBias=z.normalBias,C.shadowRadius=z.radius,C.shadowMapSize=z.mapSize,i.spotShadow[v]=C,i.spotShadowMap[v]=Z,S++}v++}else if(R.isRectAreaLight){const k=e.get(R);k.color.copy(P).multiplyScalar(F),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),i.rectArea[x]=k,x++}else if(R.isPointLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity*T),k.distance=R.distance,k.decay=R.decay,R.castShadow){const z=R.shadow,C=n.get(R);C.shadowBias=z.bias,C.shadowNormalBias=z.normalBias,C.shadowRadius=z.radius,C.shadowMapSize=z.mapSize,C.shadowCameraNear=z.camera.near,C.shadowCameraFar=z.camera.far,i.pointShadow[f]=C,i.pointShadowMap[f]=Z,i.pointShadowMatrix[f]=R.shadow.matrix,y++}i.point[f]=k,f++}else if(R.isHemisphereLight){const k=e.get(R);k.skyColor.copy(R.color).multiplyScalar(F*T),k.groundColor.copy(R.groundColor).multiplyScalar(F*T),i.hemi[_]=k,_++}}x>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==m||I.pointLength!==f||I.spotLength!==v||I.rectAreaLength!==x||I.hemiLength!==_||I.numDirectionalShadows!==w||I.numPointShadows!==y||I.numSpotShadows!==S||I.numSpotMaps!==L)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=x,i.point.length=f,i.hemi.length=_,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+L-b,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=b,I.directionalLength=m,I.pointLength=f,I.spotLength=v,I.rectAreaLength=x,I.hemiLength=_,I.numDirectionalShadows=w,I.numPointShadows=y,I.numSpotShadows=S,I.numSpotMaps=L,i.version=n0++)}function c(h,u){let d=0,p=0,g=0,m=0,f=0;const v=u.matrixWorldInverse;for(let x=0,_=h.length;x<_;x++){const w=h[x];if(w.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(v),d++}else if(w.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(v),y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(v),g++}else if(w.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(v),a.identity(),o.copy(w.matrixWorld),o.premultiply(v),a.extractRotation(o),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(w.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(v),p++}else if(w.isHemisphereLight){const y=i.hemi[f];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(v),f++}}}return{setup:l,setupView:c,state:i}}function sc(r,t){const e=new s0(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function r0(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new sc(r,t),e.set(s,[l])):o>=a.length?(l=new sc(r,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class o0 extends qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class a0 extends qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const l0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c0=`uniform sampler2D shadow_pass;
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
}`;function h0(r,t,e){let n=new Ta;const i=new ot,s=new ot,o=new ve,a=new o0({depthPacking:xd}),l=new a0,c={},h=e.maxTextureSize,u={0:je,1:rs,2:qe},d=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:l0,fragmentShader:c0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ie;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Jt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oh,this.render=function(w,y,S){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const L=r.getRenderTarget(),b=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Wn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let G=0,j=w.length;G<j;G++){const R=w[G],P=R.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const F=P.getFrameExtents();if(i.multiply(F),s.copy(P.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/F.x),i.x=s.x*F.x,P.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/F.y),i.y=s.y*F.y,P.mapSize.y=s.y)),P.map===null){const Z=this.type!==As?{minFilter:Ae,magFilter:Ae}:{};P.map=new xi(i.x,i.y,Z),P.map.texture.name=R.name+".shadowMap",P.camera.updateProjectionMatrix()}r.setRenderTarget(P.map),r.clear();const B=P.getViewportCount();for(let Z=0;Z<B;Z++){const k=P.getViewport(Z);o.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),I.viewport(o),P.updateMatrices(R,Z),n=P.getFrustum(),_(y,S,P.camera,R,this.type)}P.isPointLightShadow!==!0&&this.type===As&&v(P,S),P.needsUpdate=!1}f.needsUpdate=!1,r.setRenderTarget(L,b,T)};function v(w,y){const S=t.update(m);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new xi(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(y,null,S,d,m,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(y,null,S,p,m,null)}function x(w,y,S,L,b,T){let I=null;const G=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(G!==void 0?I=G:I=S.isPointLight===!0?l:a,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0){const j=I.uuid,R=y.uuid;let P=c[j];P===void 0&&(P={},c[j]=P);let F=P[R];F===void 0&&(F=I.clone(),P[R]=F),I=F}return I.visible=y.visible,I.wireframe=y.wireframe,T===As?I.side=y.shadowSide!==null?y.shadowSide:y.side:I.side=y.shadowSide!==null?y.shadowSide:u[y.side],I.alphaMap=y.alphaMap,I.alphaTest=y.alphaTest,I.clipShadows=y.clipShadows,I.clippingPlanes=y.clippingPlanes,I.clipIntersection=y.clipIntersection,I.displacementMap=y.displacementMap,I.displacementScale=y.displacementScale,I.displacementBias=y.displacementBias,I.wireframeLinewidth=y.wireframeLinewidth,I.linewidth=y.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(S.matrixWorld),I.nearDistance=L,I.farDistance=b),I}function _(w,y,S,L,b){if(w.visible===!1)return;if(w.layers.test(y.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===As)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);const G=t.update(w),j=w.material;if(Array.isArray(j)){const R=G.groups;for(let P=0,F=R.length;P<F;P++){const B=R[P],Z=j[B.materialIndex];if(Z&&Z.visible){const k=x(w,Z,L,S.near,S.far,b);r.renderBufferDirect(S,null,G,k,w,B)}}}else if(j.visible){const R=x(w,j,L,S.near,S.far,b);r.renderBufferDirect(S,null,G,R,w,null)}}const I=w.children;for(let G=0,j=I.length;G<j;G++)_(I[G],y,S,L,b)}}function u0(r,t,e){const n=e.isWebGL2;function i(){let U=!1;const K=new ve;let et=null;const dt=new ve(0,0,0,0);return{setMask:function(yt){et!==yt&&!U&&(r.colorMask(yt,yt,yt,yt),et=yt)},setLocked:function(yt){U=yt},setClear:function(yt,Wt,me,we,Yn){Yn===!0&&(yt*=we,Wt*=we,me*=we),K.set(yt,Wt,me,we),dt.equals(K)===!1&&(r.clearColor(yt,Wt,me,we),dt.copy(K))},reset:function(){U=!1,et=null,dt.set(-1,0,0,0)}}}function s(){let U=!1,K=null,et=null,dt=null;return{setTest:function(yt){yt?Ut(2929):Tt(2929)},setMask:function(yt){K!==yt&&!U&&(r.depthMask(yt),K=yt)},setFunc:function(yt){if(et!==yt){switch(yt){case Gu:r.depthFunc(512);break;case Wu:r.depthFunc(519);break;case Vu:r.depthFunc(513);break;case aa:r.depthFunc(515);break;case Hu:r.depthFunc(514);break;case qu:r.depthFunc(518);break;case Xu:r.depthFunc(516);break;case ju:r.depthFunc(517);break;default:r.depthFunc(515)}et=yt}},setLocked:function(yt){U=yt},setClear:function(yt){dt!==yt&&(r.clearDepth(yt),dt=yt)},reset:function(){U=!1,K=null,et=null,dt=null}}}function o(){let U=!1,K=null,et=null,dt=null,yt=null,Wt=null,me=null,we=null,Yn=null;return{setTest:function(Zt){U||(Zt?Ut(2960):Tt(2960))},setMask:function(Zt){K!==Zt&&!U&&(r.stencilMask(Zt),K=Zt)},setFunc:function(Zt,gn,Oe){(et!==Zt||dt!==gn||yt!==Oe)&&(r.stencilFunc(Zt,gn,Oe),et=Zt,dt=gn,yt=Oe)},setOp:function(Zt,gn,Oe){(Wt!==Zt||me!==gn||we!==Oe)&&(r.stencilOp(Zt,gn,Oe),Wt=Zt,me=gn,we=Oe)},setLocked:function(Zt){U=Zt},setClear:function(Zt){Yn!==Zt&&(r.clearStencil(Zt),Yn=Zt)},reset:function(){U=!1,K=null,et=null,dt=null,yt=null,Wt=null,me=null,we=null,Yn=null}}}const a=new i,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let d={},p={},g=new WeakMap,m=[],f=null,v=!1,x=null,_=null,w=null,y=null,S=null,L=null,b=null,T=!1,I=null,G=null,j=null,R=null,P=null;const F=r.getParameter(35661);let B=!1,Z=0;const k=r.getParameter(7938);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),B=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),B=Z>=2);let z=null,C={};const H=r.getParameter(3088),q=r.getParameter(2978),Y=new ve().fromArray(H),at=new ve().fromArray(q);function St(U,K,et){const dt=new Uint8Array(4),yt=r.createTexture();r.bindTexture(U,yt),r.texParameteri(U,10241,9728),r.texParameteri(U,10240,9728);for(let Wt=0;Wt<et;Wt++)r.texImage2D(K+Wt,0,6408,1,1,0,6408,5121,dt);return yt}const Q={};Q[3553]=St(3553,3553,1),Q[34067]=St(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ut(2929),l.setFunc(aa),le(!1),Ce(Ya),Ut(2884),se(Wn);function Ut(U){d[U]!==!0&&(r.enable(U),d[U]=!0)}function Tt(U){d[U]!==!1&&(r.disable(U),d[U]=!1)}function At(U,K){return p[U]!==K?(r.bindFramebuffer(U,K),p[U]=K,n&&(U===36009&&(p[36160]=K),U===36160&&(p[36009]=K)),!0):!1}function mt(U,K){let et=m,dt=!1;if(U)if(et=g.get(K),et===void 0&&(et=[],g.set(K,et)),U.isWebGLMultipleRenderTargets){const yt=U.texture;if(et.length!==yt.length||et[0]!==36064){for(let Wt=0,me=yt.length;Wt<me;Wt++)et[Wt]=36064+Wt;et.length=yt.length,dt=!0}}else et[0]!==36064&&(et[0]=36064,dt=!0);else et[0]!==1029&&(et[0]=1029,dt=!0);dt&&(e.isWebGL2?r.drawBuffers(et):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(et))}function Xt(U){return f!==U?(r.useProgram(U),f=U,!0):!1}const Rt={[$i]:32774,[Pu]:32778,[Ru]:32779};if(n)Rt[Ka]=32775,Rt[Qa]=32776;else{const U=t.get("EXT_blend_minmax");U!==null&&(Rt[Ka]=U.MIN_EXT,Rt[Qa]=U.MAX_EXT)}const bt={[Du]:0,[Iu]:1,[zu]:768,[lh]:770,[ku]:776,[Bu]:774,[Fu]:772,[Nu]:769,[ch]:771,[Uu]:775,[Ou]:773};function se(U,K,et,dt,yt,Wt,me,we){if(U===Wn){v===!0&&(Tt(3042),v=!1);return}if(v===!1&&(Ut(3042),v=!0),U!==Lu){if(U!==x||we!==T){if((_!==$i||S!==$i)&&(r.blendEquation(32774),_=$i,S=$i),we)switch(U){case ts:r.blendFuncSeparate(1,771,1,771);break;case $a:r.blendFunc(1,1);break;case Za:r.blendFuncSeparate(0,769,0,1);break;case Ja:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ts:r.blendFuncSeparate(770,771,1,771);break;case $a:r.blendFunc(770,1);break;case Za:r.blendFuncSeparate(0,769,0,1);break;case Ja:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,y=null,L=null,b=null,x=U,T=we}return}yt=yt||K,Wt=Wt||et,me=me||dt,(K!==_||yt!==S)&&(r.blendEquationSeparate(Rt[K],Rt[yt]),_=K,S=yt),(et!==w||dt!==y||Wt!==L||me!==b)&&(r.blendFuncSeparate(bt[et],bt[dt],bt[Wt],bt[me]),w=et,y=dt,L=Wt,b=me),x=U,T=null}function pe(U,K){U.side===qe?Tt(2884):Ut(2884);let et=U.side===je;K&&(et=!et),le(et),U.blending===ts&&U.transparent===!1?se(Wn):se(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const dt=U.stencilWrite;c.setTest(dt),dt&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),jt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ut(32926):Tt(32926)}function le(U){I!==U&&(U?r.frontFace(2304):r.frontFace(2305),I=U)}function Ce(U){U!==Au?(Ut(2884),U!==G&&(U===Ya?r.cullFace(1029):U===Cu?r.cullFace(1028):r.cullFace(1032))):Tt(2884),G=U}function ce(U){U!==j&&(B&&r.lineWidth(U),j=U)}function jt(U,K,et){U?(Ut(32823),(R!==K||P!==et)&&(r.polygonOffset(K,et),R=K,P=et)):Tt(32823)}function Ne(U){U?Ut(3089):Tt(3089)}function Fe(U){U===void 0&&(U=33984+F-1),z!==U&&(r.activeTexture(U),z=U)}function D(U,K,et){et===void 0&&(z===null?et=33984+F-1:et=z);let dt=C[et];dt===void 0&&(dt={type:void 0,texture:void 0},C[et]=dt),(dt.type!==U||dt.texture!==K)&&(z!==et&&(r.activeTexture(et),z=et),r.bindTexture(U,K||Q[U]),dt.type=U,dt.texture=K)}function E(){const U=C[z];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function $(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function N(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(U){Y.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Y.copy(U))}function gt(U){at.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),at.copy(U))}function Ft(U,K){let et=u.get(K);et===void 0&&(et=new WeakMap,u.set(K,et));let dt=et.get(U);dt===void 0&&(dt=r.getUniformBlockIndex(K,U.name),et.set(U,dt))}function Bt(U,K){const dt=u.get(K).get(U);h.get(U)!==dt&&(r.uniformBlockBinding(K,dt,U.__bindingPointIndex),h.set(U,dt))}function Yt(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},z=null,C={},p={},g=new WeakMap,m=[],f=null,v=!1,x=null,_=null,w=null,y=null,S=null,L=null,b=null,T=!1,I=null,G=null,j=null,R=null,P=null,Y.set(0,0,r.canvas.width,r.canvas.height),at.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ut,disable:Tt,bindFramebuffer:At,drawBuffers:mt,useProgram:Xt,setBlending:se,setMaterial:pe,setFlipSided:le,setCullFace:Ce,setLineWidth:ce,setPolygonOffset:jt,setScissorTest:Ne,activeTexture:Fe,bindTexture:D,unbindTexture:E,compressedTexImage2D:$,compressedTexImage3D:nt,texImage2D:pt,texImage3D:ht,updateUBOMapping:Ft,uniformBlockBinding:Bt,texStorage2D:W,texStorage3D:ut,texSubImage2D:st,texSubImage3D:ct,compressedTexSubImage2D:Et,compressedTexSubImage3D:N,scissor:xt,viewport:gt,reset:Yt}}function d0(r,t,e,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap;let m;const f=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,E){return v?new OffscreenCanvas(D,E):Gr("canvas")}function _(D,E,$,nt){let st=1;if((D.width>nt||D.height>nt)&&(st=nt/Math.max(D.width,D.height)),st<1||E===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const ct=E?fa:Math.floor,Et=ct(st*D.width),N=ct(st*D.height);m===void 0&&(m=x(Et,N));const W=$?x(Et,N):m;return W.width=Et,W.height=N,W.getContext("2d").drawImage(D,0,0,Et,N),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+Et+"x"+N+")."),W}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function w(D){return Tl(D.width)&&Tl(D.height)}function y(D){return a?!1:D.wrapS!==tn||D.wrapT!==tn||D.minFilter!==Ae&&D.minFilter!==Ge}function S(D,E){return D.generateMipmaps&&E&&D.minFilter!==Ae&&D.minFilter!==Ge}function L(D){r.generateMipmap(D)}function b(D,E,$,nt,st=!1){if(a===!1)return E;if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ct=E;return E===6403&&($===5126&&(ct=33326),$===5131&&(ct=33325),$===5121&&(ct=33321)),E===33319&&($===5126&&(ct=33328),$===5131&&(ct=33327),$===5121&&(ct=33323)),E===6408&&($===5126&&(ct=34836),$===5131&&(ct=34842),$===5121&&(ct=nt===te&&st===!1?35907:32856),$===32819&&(ct=32854),$===32820&&(ct=32855)),(ct===33325||ct===33326||ct===33327||ct===33328||ct===34842||ct===34836)&&t.get("EXT_color_buffer_float"),ct}function T(D,E,$){return S(D,$)===!0||D.isFramebufferTexture&&D.minFilter!==Ae&&D.minFilter!==Ge?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function I(D){return D===Ae||D===tl||D===el?9728:9729}function G(D){const E=D.target;E.removeEventListener("dispose",G),R(E),E.isVideoTexture&&g.delete(E)}function j(D){const E=D.target;E.removeEventListener("dispose",j),F(E)}function R(D){const E=n.get(D);if(E.__webglInit===void 0)return;const $=D.source,nt=f.get($);if(nt){const st=nt[E.__cacheKey];st.usedTimes--,st.usedTimes===0&&P(D),Object.keys(nt).length===0&&f.delete($)}n.remove(D)}function P(D){const E=n.get(D);r.deleteTexture(E.__webglTexture);const $=D.source,nt=f.get($);delete nt[E.__cacheKey],o.memory.textures--}function F(D){const E=D.texture,$=n.get(D),nt=n.get(E);if(nt.__webglTexture!==void 0&&(r.deleteTexture(nt.__webglTexture),o.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let st=0;st<6;st++)r.deleteFramebuffer($.__webglFramebuffer[st]),$.__webglDepthbuffer&&r.deleteRenderbuffer($.__webglDepthbuffer[st]);else{if(r.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&r.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&r.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let st=0;st<$.__webglColorRenderbuffer.length;st++)$.__webglColorRenderbuffer[st]&&r.deleteRenderbuffer($.__webglColorRenderbuffer[st]);$.__webglDepthRenderbuffer&&r.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let st=0,ct=E.length;st<ct;st++){const Et=n.get(E[st]);Et.__webglTexture&&(r.deleteTexture(Et.__webglTexture),o.memory.textures--),n.remove(E[st])}n.remove(E),n.remove(D)}let B=0;function Z(){B=0}function k(){const D=B;return D>=l&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l),B+=1,D}function z(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.encoding),E.join()}function C(D,E){const $=n.get(D);if(D.isVideoTexture&&Ne(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){const nt=D.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Tt($,D,E);return}}e.bindTexture(3553,$.__webglTexture,33984+E)}function H(D,E){const $=n.get(D);if(D.version>0&&$.__version!==D.version){Tt($,D,E);return}e.bindTexture(35866,$.__webglTexture,33984+E)}function q(D,E){const $=n.get(D);if(D.version>0&&$.__version!==D.version){Tt($,D,E);return}e.bindTexture(32879,$.__webglTexture,33984+E)}function Y(D,E){const $=n.get(D);if(D.version>0&&$.__version!==D.version){At($,D,E);return}e.bindTexture(34067,$.__webglTexture,33984+E)}const at={[ha]:10497,[tn]:33071,[ua]:33648},St={[Ae]:9728,[tl]:9984,[el]:9986,[Ge]:9729,[ed]:9985,[Yr]:9987};function Q(D,E,$){if($?(r.texParameteri(D,10242,at[E.wrapS]),r.texParameteri(D,10243,at[E.wrapT]),(D===32879||D===35866)&&r.texParameteri(D,32882,at[E.wrapR]),r.texParameteri(D,10240,St[E.magFilter]),r.texParameteri(D,10241,St[E.minFilter])):(r.texParameteri(D,10242,33071),r.texParameteri(D,10243,33071),(D===32879||D===35866)&&r.texParameteri(D,32882,33071),(E.wrapS!==tn||E.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(D,10240,I(E.magFilter)),r.texParameteri(D,10241,I(E.minFilter)),E.minFilter!==Ae&&E.minFilter!==Ge&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const nt=t.get("EXT_texture_filter_anisotropic");if(E.type===ai&&t.has("OES_texture_float_linear")===!1||a===!1&&E.type===Fs&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(D,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Ut(D,E){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",G));const nt=E.source;let st=f.get(nt);st===void 0&&(st={},f.set(nt,st));const ct=z(E);if(ct!==D.__cacheKey){st[ct]===void 0&&(st[ct]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,$=!0),st[ct].usedTimes++;const Et=st[D.__cacheKey];Et!==void 0&&(st[D.__cacheKey].usedTimes--,Et.usedTimes===0&&P(E)),D.__cacheKey=ct,D.__webglTexture=st[ct].texture}return $}function Tt(D,E,$){let nt=3553;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(nt=35866),E.isData3DTexture&&(nt=32879);const st=Ut(D,E),ct=E.source;e.bindTexture(nt,D.__webglTexture,33984+$);const Et=n.get(ct);if(ct.version!==Et.__version||st===!0){e.activeTexture(33984+$),r.pixelStorei(37440,E.flipY),r.pixelStorei(37441,E.premultiplyAlpha),r.pixelStorei(3317,E.unpackAlignment),r.pixelStorei(37443,0);const N=y(E)&&w(E.image)===!1;let W=_(E.image,N,!1,h);W=Fe(E,W);const ut=w(W)||a,pt=s.convert(E.format,E.encoding);let ht=s.convert(E.type),xt=b(E.internalFormat,pt,ht,E.encoding,E.isVideoTexture);Q(nt,E,ut);let gt;const Ft=E.mipmaps,Bt=a&&E.isVideoTexture!==!0,Yt=Et.__version===void 0||st===!0,U=T(E,W,ut);if(E.isDepthTexture)xt=6402,a?E.type===ai?xt=36012:E.type===oi?xt=33190:E.type===es?xt=35056:xt=33189:E.type===ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ui&&xt===6402&&E.type!==uh&&E.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=oi,ht=s.convert(E.type)),E.format===ls&&xt===6402&&(xt=34041,E.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=es,ht=s.convert(E.type))),Yt&&(Bt?e.texStorage2D(3553,1,xt,W.width,W.height):e.texImage2D(3553,0,xt,W.width,W.height,0,pt,ht,null));else if(E.isDataTexture)if(Ft.length>0&&ut){Bt&&Yt&&e.texStorage2D(3553,U,xt,Ft[0].width,Ft[0].height);for(let K=0,et=Ft.length;K<et;K++)gt=Ft[K],Bt?e.texSubImage2D(3553,K,0,0,gt.width,gt.height,pt,ht,gt.data):e.texImage2D(3553,K,xt,gt.width,gt.height,0,pt,ht,gt.data);E.generateMipmaps=!1}else Bt?(Yt&&e.texStorage2D(3553,U,xt,W.width,W.height),e.texSubImage2D(3553,0,0,0,W.width,W.height,pt,ht,W.data)):e.texImage2D(3553,0,xt,W.width,W.height,0,pt,ht,W.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Bt&&Yt&&e.texStorage3D(35866,U,xt,Ft[0].width,Ft[0].height,W.depth);for(let K=0,et=Ft.length;K<et;K++)gt=Ft[K],E.format!==en?pt!==null?Bt?e.compressedTexSubImage3D(35866,K,0,0,0,gt.width,gt.height,W.depth,pt,gt.data,0,0):e.compressedTexImage3D(35866,K,xt,gt.width,gt.height,W.depth,0,gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?e.texSubImage3D(35866,K,0,0,0,gt.width,gt.height,W.depth,pt,ht,gt.data):e.texImage3D(35866,K,xt,gt.width,gt.height,W.depth,0,pt,ht,gt.data)}else{Bt&&Yt&&e.texStorage2D(3553,U,xt,Ft[0].width,Ft[0].height);for(let K=0,et=Ft.length;K<et;K++)gt=Ft[K],E.format!==en?pt!==null?Bt?e.compressedTexSubImage2D(3553,K,0,0,gt.width,gt.height,pt,gt.data):e.compressedTexImage2D(3553,K,xt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?e.texSubImage2D(3553,K,0,0,gt.width,gt.height,pt,ht,gt.data):e.texImage2D(3553,K,xt,gt.width,gt.height,0,pt,ht,gt.data)}else if(E.isDataArrayTexture)Bt?(Yt&&e.texStorage3D(35866,U,xt,W.width,W.height,W.depth),e.texSubImage3D(35866,0,0,0,0,W.width,W.height,W.depth,pt,ht,W.data)):e.texImage3D(35866,0,xt,W.width,W.height,W.depth,0,pt,ht,W.data);else if(E.isData3DTexture)Bt?(Yt&&e.texStorage3D(32879,U,xt,W.width,W.height,W.depth),e.texSubImage3D(32879,0,0,0,0,W.width,W.height,W.depth,pt,ht,W.data)):e.texImage3D(32879,0,xt,W.width,W.height,W.depth,0,pt,ht,W.data);else if(E.isFramebufferTexture){if(Yt)if(Bt)e.texStorage2D(3553,U,xt,W.width,W.height);else{let K=W.width,et=W.height;for(let dt=0;dt<U;dt++)e.texImage2D(3553,dt,xt,K,et,0,pt,ht,null),K>>=1,et>>=1}}else if(Ft.length>0&&ut){Bt&&Yt&&e.texStorage2D(3553,U,xt,Ft[0].width,Ft[0].height);for(let K=0,et=Ft.length;K<et;K++)gt=Ft[K],Bt?e.texSubImage2D(3553,K,0,0,pt,ht,gt):e.texImage2D(3553,K,xt,pt,ht,gt);E.generateMipmaps=!1}else Bt?(Yt&&e.texStorage2D(3553,U,xt,W.width,W.height),e.texSubImage2D(3553,0,0,0,pt,ht,W)):e.texImage2D(3553,0,xt,pt,ht,W);S(E,ut)&&L(nt),Et.__version=ct.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function At(D,E,$){if(E.image.length!==6)return;const nt=Ut(D,E),st=E.source;e.bindTexture(34067,D.__webglTexture,33984+$);const ct=n.get(st);if(st.version!==ct.__version||nt===!0){e.activeTexture(33984+$),r.pixelStorei(37440,E.flipY),r.pixelStorei(37441,E.premultiplyAlpha),r.pixelStorei(3317,E.unpackAlignment),r.pixelStorei(37443,0);const Et=E.isCompressedTexture||E.image[0].isCompressedTexture,N=E.image[0]&&E.image[0].isDataTexture,W=[];for(let K=0;K<6;K++)!Et&&!N?W[K]=_(E.image[K],!1,!0,c):W[K]=N?E.image[K].image:E.image[K],W[K]=Fe(E,W[K]);const ut=W[0],pt=w(ut)||a,ht=s.convert(E.format,E.encoding),xt=s.convert(E.type),gt=b(E.internalFormat,ht,xt,E.encoding),Ft=a&&E.isVideoTexture!==!0,Bt=ct.__version===void 0||nt===!0;let Yt=T(E,ut,pt);Q(34067,E,pt);let U;if(Et){Ft&&Bt&&e.texStorage2D(34067,Yt,gt,ut.width,ut.height);for(let K=0;K<6;K++){U=W[K].mipmaps;for(let et=0;et<U.length;et++){const dt=U[et];E.format!==en?ht!==null?Ft?e.compressedTexSubImage2D(34069+K,et,0,0,dt.width,dt.height,ht,dt.data):e.compressedTexImage2D(34069+K,et,gt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?e.texSubImage2D(34069+K,et,0,0,dt.width,dt.height,ht,xt,dt.data):e.texImage2D(34069+K,et,gt,dt.width,dt.height,0,ht,xt,dt.data)}}}else{U=E.mipmaps,Ft&&Bt&&(U.length>0&&Yt++,e.texStorage2D(34067,Yt,gt,W[0].width,W[0].height));for(let K=0;K<6;K++)if(N){Ft?e.texSubImage2D(34069+K,0,0,0,W[K].width,W[K].height,ht,xt,W[K].data):e.texImage2D(34069+K,0,gt,W[K].width,W[K].height,0,ht,xt,W[K].data);for(let et=0;et<U.length;et++){const yt=U[et].image[K].image;Ft?e.texSubImage2D(34069+K,et+1,0,0,yt.width,yt.height,ht,xt,yt.data):e.texImage2D(34069+K,et+1,gt,yt.width,yt.height,0,ht,xt,yt.data)}}else{Ft?e.texSubImage2D(34069+K,0,0,0,ht,xt,W[K]):e.texImage2D(34069+K,0,gt,ht,xt,W[K]);for(let et=0;et<U.length;et++){const dt=U[et];Ft?e.texSubImage2D(34069+K,et+1,0,0,ht,xt,dt.image[K]):e.texImage2D(34069+K,et+1,gt,ht,xt,dt.image[K])}}}S(E,pt)&&L(34067),ct.__version=st.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function mt(D,E,$,nt,st){const ct=s.convert($.format,$.encoding),Et=s.convert($.type),N=b($.internalFormat,ct,Et,$.encoding);n.get(E).__hasExternalTextures||(st===32879||st===35866?e.texImage3D(st,0,N,E.width,E.height,E.depth,0,ct,Et,null):e.texImage2D(st,0,N,E.width,E.height,0,ct,Et,null)),e.bindFramebuffer(36160,D),jt(E)?d.framebufferTexture2DMultisampleEXT(36160,nt,st,n.get($).__webglTexture,0,ce(E)):(st===3553||st>=34069&&st<=34074)&&r.framebufferTexture2D(36160,nt,st,n.get($).__webglTexture,0),e.bindFramebuffer(36160,null)}function Xt(D,E,$){if(r.bindRenderbuffer(36161,D),E.depthBuffer&&!E.stencilBuffer){let nt=33189;if($||jt(E)){const st=E.depthTexture;st&&st.isDepthTexture&&(st.type===ai?nt=36012:st.type===oi&&(nt=33190));const ct=ce(E);jt(E)?d.renderbufferStorageMultisampleEXT(36161,ct,nt,E.width,E.height):r.renderbufferStorageMultisample(36161,ct,nt,E.width,E.height)}else r.renderbufferStorage(36161,nt,E.width,E.height);r.framebufferRenderbuffer(36160,36096,36161,D)}else if(E.depthBuffer&&E.stencilBuffer){const nt=ce(E);$&&jt(E)===!1?r.renderbufferStorageMultisample(36161,nt,35056,E.width,E.height):jt(E)?d.renderbufferStorageMultisampleEXT(36161,nt,35056,E.width,E.height):r.renderbufferStorage(36161,34041,E.width,E.height),r.framebufferRenderbuffer(36160,33306,36161,D)}else{const nt=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let st=0;st<nt.length;st++){const ct=nt[st],Et=s.convert(ct.format,ct.encoding),N=s.convert(ct.type),W=b(ct.internalFormat,Et,N,ct.encoding),ut=ce(E);$&&jt(E)===!1?r.renderbufferStorageMultisample(36161,ut,W,E.width,E.height):jt(E)?d.renderbufferStorageMultisampleEXT(36161,ut,W,E.width,E.height):r.renderbufferStorage(36161,W,E.width,E.height)}}r.bindRenderbuffer(36161,null)}function Rt(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),C(E.depthTexture,0);const nt=n.get(E.depthTexture).__webglTexture,st=ce(E);if(E.depthTexture.format===ui)jt(E)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,nt,0,st):r.framebufferTexture2D(36160,36096,3553,nt,0);else if(E.depthTexture.format===ls)jt(E)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,nt,0,st):r.framebufferTexture2D(36160,33306,3553,nt,0);else throw new Error("Unknown depthTexture format")}function bt(D){const E=n.get(D),$=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Rt(E.__webglFramebuffer,D)}else if($){E.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(36160,E.__webglFramebuffer[nt]),E.__webglDepthbuffer[nt]=r.createRenderbuffer(),Xt(E.__webglDepthbuffer[nt],D,!1)}else e.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),Xt(E.__webglDepthbuffer,D,!1);e.bindFramebuffer(36160,null)}function se(D,E,$){const nt=n.get(D);E!==void 0&&mt(nt.__webglFramebuffer,D,D.texture,36064,3553),$!==void 0&&bt(D)}function pe(D){const E=D.texture,$=n.get(D),nt=n.get(E);D.addEventListener("dispose",j),D.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture()),nt.__version=E.version,o.memory.textures++);const st=D.isWebGLCubeRenderTarget===!0,ct=D.isWebGLMultipleRenderTargets===!0,Et=w(D)||a;if(st){$.__webglFramebuffer=[];for(let N=0;N<6;N++)$.__webglFramebuffer[N]=r.createFramebuffer()}else{if($.__webglFramebuffer=r.createFramebuffer(),ct)if(i.drawBuffers){const N=D.texture;for(let W=0,ut=N.length;W<ut;W++){const pt=n.get(N[W]);pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&D.samples>0&&jt(D)===!1){const N=ct?E:[E];$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,$.__webglMultisampledFramebuffer);for(let W=0;W<N.length;W++){const ut=N[W];$.__webglColorRenderbuffer[W]=r.createRenderbuffer(),r.bindRenderbuffer(36161,$.__webglColorRenderbuffer[W]);const pt=s.convert(ut.format,ut.encoding),ht=s.convert(ut.type),xt=b(ut.internalFormat,pt,ht,ut.encoding,D.isXRRenderTarget===!0),gt=ce(D);r.renderbufferStorageMultisample(36161,gt,xt,D.width,D.height),r.framebufferRenderbuffer(36160,36064+W,36161,$.__webglColorRenderbuffer[W])}r.bindRenderbuffer(36161,null),D.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),Xt($.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(36160,null)}}if(st){e.bindTexture(34067,nt.__webglTexture),Q(34067,E,Et);for(let N=0;N<6;N++)mt($.__webglFramebuffer[N],D,E,36064,34069+N);S(E,Et)&&L(34067),e.unbindTexture()}else if(ct){const N=D.texture;for(let W=0,ut=N.length;W<ut;W++){const pt=N[W],ht=n.get(pt);e.bindTexture(3553,ht.__webglTexture),Q(3553,pt,Et),mt($.__webglFramebuffer,D,pt,36064+W,3553),S(pt,Et)&&L(3553)}e.unbindTexture()}else{let N=3553;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(a?N=D.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(N,nt.__webglTexture),Q(N,E,Et),mt($.__webglFramebuffer,D,E,36064,N),S(E,Et)&&L(N),e.unbindTexture()}D.depthBuffer&&bt(D)}function le(D){const E=w(D)||a,$=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let nt=0,st=$.length;nt<st;nt++){const ct=$[nt];if(S(ct,E)){const Et=D.isWebGLCubeRenderTarget?34067:3553,N=n.get(ct).__webglTexture;e.bindTexture(Et,N),L(Et),e.unbindTexture()}}}function Ce(D){if(a&&D.samples>0&&jt(D)===!1){const E=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],$=D.width,nt=D.height;let st=16384;const ct=[],Et=D.stencilBuffer?33306:36096,N=n.get(D),W=D.isWebGLMultipleRenderTargets===!0;if(W)for(let ut=0;ut<E.length;ut++)e.bindFramebuffer(36160,N.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ut,36161,null),e.bindFramebuffer(36160,N.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ut,3553,null,0);e.bindFramebuffer(36008,N.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,N.__webglFramebuffer);for(let ut=0;ut<E.length;ut++){ct.push(36064+ut),D.depthBuffer&&ct.push(Et);const pt=N.__ignoreDepthValues!==void 0?N.__ignoreDepthValues:!1;if(pt===!1&&(D.depthBuffer&&(st|=256),D.stencilBuffer&&(st|=1024)),W&&r.framebufferRenderbuffer(36008,36064,36161,N.__webglColorRenderbuffer[ut]),pt===!0&&(r.invalidateFramebuffer(36008,[Et]),r.invalidateFramebuffer(36009,[Et])),W){const ht=n.get(E[ut]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ht,0)}r.blitFramebuffer(0,0,$,nt,0,0,$,nt,st,9728),p&&r.invalidateFramebuffer(36008,ct)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),W)for(let ut=0;ut<E.length;ut++){e.bindFramebuffer(36160,N.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ut,36161,N.__webglColorRenderbuffer[ut]);const pt=n.get(E[ut]).__webglTexture;e.bindFramebuffer(36160,N.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ut,3553,pt,0)}e.bindFramebuffer(36009,N.__webglMultisampledFramebuffer)}}function ce(D){return Math.min(u,D.samples)}function jt(D){const E=n.get(D);return a&&D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ne(D){const E=o.render.frame;g.get(D)!==E&&(g.set(D,E),D.update())}function Fe(D,E){const $=D.encoding,nt=D.format,st=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===da||$!==vi&&($===te?a===!1?t.has("EXT_sRGB")===!0&&nt===en?(D.format=da,D.minFilter=Ge,D.generateMipmaps=!1):E=ph.sRGBToLinear(E):(nt!==en||st!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",$)),E}this.allocateTextureUnit=k,this.resetTextureUnits=Z,this.setTexture2D=C,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=Y,this.rebindTextures=se,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=jt}function f0(r,t,e){const n=e.isWebGL2;function i(s,o=null){let a;if(s===gi)return 5121;if(s===rd)return 32819;if(s===od)return 32820;if(s===nd)return 5120;if(s===id)return 5122;if(s===uh)return 5123;if(s===sd)return 5124;if(s===oi)return 5125;if(s===ai)return 5126;if(s===Fs)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ad)return 6406;if(s===en)return 6408;if(s===cd)return 6409;if(s===hd)return 6410;if(s===ui)return 6402;if(s===ls)return 34041;if(s===ud)return 6403;if(s===ld)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===da)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===dd)return 36244;if(s===fd)return 33319;if(s===pd)return 33320;if(s===md)return 36249;if(s===co||s===ho||s===uo||s===fo)if(o===te)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===co)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===fo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===co)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ho)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===uo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===fo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===nl||s===il||s===sl||s===rl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===nl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===il)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===rl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===gd)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ol||s===al)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ol)return o===te?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===al)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ll||s===cl||s===hl||s===ul||s===dl||s===fl||s===pl||s===ml||s===gl||s===vl||s===xl||s===_l||s===yl||s===wl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ll)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cl)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hl)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ul)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===dl)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fl)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pl)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ml)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gl)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vl)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xl)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_l)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yl)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wl)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===bl)return o===te?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===es?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class p0 extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _r extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const m0={type:"move"};class Go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const m of t.hand.values()){const f=e.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const x=new _r;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[m.jointName]=x,c.add(x)}const v=c.joints[m.jointName];f!==null&&(v.matrix.fromArray(f.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=f.radius),v.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(m0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class g0 extends sn{constructor(t,e,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:ui,h!==ui&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ui&&(n=oi),n===void 0&&h===ls&&(n=es),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ae,this.minFilter=l!==void 0?l:Ae,this.flipY=!1,this.generateMipmaps=!1}}class v0 extends Si{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=null,c=null,h=null,u=null,d=null,p=null;const g=e.getContextAttributes();let m=null,f=null;const v=[],x=[],_=new We;_.layers.enable(1),_.viewport=new ve;const w=new We;w.layers.enable(2),w.viewport=new ve;const y=[_,w],S=new p0;S.layers.enable(1),S.layers.enable(2);let L=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let C=v[z];return C===void 0&&(C=new Go,v[z]=C),C.getTargetRaySpace()},this.getControllerGrip=function(z){let C=v[z];return C===void 0&&(C=new Go,v[z]=C),C.getGripSpace()},this.getHand=function(z){let C=v[z];return C===void 0&&(C=new Go,v[z]=C),C.getHandSpace()};function T(z){const C=x.indexOf(z.inputSource);if(C===-1)return;const H=v[C];H!==void 0&&H.dispatchEvent({type:z.type,data:z.inputSource})}function I(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",G);for(let z=0;z<v.length;z++){const C=x[z];C!==null&&(x[z]=null,v[z].disconnect(C))}L=null,b=null,t.setRenderTarget(m),d=null,u=null,h=null,i=null,f=null,k.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",I),i.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const C={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,C),i.updateRenderState({baseLayer:d}),f=new xi(d.framebufferWidth,d.framebufferHeight,{format:en,type:gi,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let C=null,H=null,q=null;g.depth&&(q=g.stencil?35056:33190,C=g.stencil?ls:ui,H=g.stencil?es:oi);const Y={colorFormat:32856,depthFormat:q,scaleFactor:s};h=new XRWebGLBinding(i,e),u=h.createProjectionLayer(Y),i.updateRenderState({layers:[u]}),f=new xi(u.textureWidth,u.textureHeight,{format:en,type:gi,depthTexture:new g0(u.textureWidth,u.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,C),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const at=t.properties.get(f);at.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),k.setContext(i),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function G(z){for(let C=0;C<z.removed.length;C++){const H=z.removed[C],q=x.indexOf(H);q>=0&&(x[q]=null,v[q].dispatchEvent({type:"disconnected",data:H}))}for(let C=0;C<z.added.length;C++){const H=z.added[C];let q=x.indexOf(H);if(q===-1){for(let at=0;at<v.length;at++)if(at>=x.length){x.push(H),q=at;break}else if(x[at]===null){x[at]=H,q=at;break}if(q===-1)break}const Y=v[q];Y&&Y.dispatchEvent({type:"connected",data:H})}}const j=new O,R=new O;function P(z,C,H){j.setFromMatrixPosition(C.matrixWorld),R.setFromMatrixPosition(H.matrixWorld);const q=j.distanceTo(R),Y=C.projectionMatrix.elements,at=H.projectionMatrix.elements,St=Y[14]/(Y[10]-1),Q=Y[14]/(Y[10]+1),Ut=(Y[9]+1)/Y[5],Tt=(Y[9]-1)/Y[5],At=(Y[8]-1)/Y[0],mt=(at[8]+1)/at[0],Xt=St*At,Rt=St*mt,bt=q/(-At+mt),se=bt*-At;C.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(se),z.translateZ(bt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const pe=St+bt,le=Q+bt,Ce=Xt-se,ce=Rt+(q-se),jt=Ut*Q/le*pe,Ne=Tt*Q/le*pe;z.projectionMatrix.makePerspective(Ce,ce,jt,Ne,pe,le)}function F(z,C){C===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(C.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;S.near=w.near=_.near=z.near,S.far=w.far=_.far=z.far,(L!==S.near||b!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,b=S.far);const C=z.parent,H=S.cameras;F(S,C);for(let Y=0;Y<H.length;Y++)F(H[Y],C);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),z.matrix.copy(S.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const q=z.children;for(let Y=0,at=q.length;Y<at;Y++)q[Y].updateMatrixWorld(!0);H.length===2?P(S,_,w):S.projectionMatrix.copy(_.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(z){u!==null&&(u.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)};let B=null;function Z(z,C){if(c=C.getViewerPose(l||o),p=C,c!==null){const H=c.views;d!==null&&(t.setRenderTargetFramebuffer(f,d.framebuffer),t.setRenderTarget(f));let q=!1;H.length!==S.cameras.length&&(S.cameras.length=0,q=!0);for(let Y=0;Y<H.length;Y++){const at=H[Y];let St=null;if(d!==null)St=d.getViewport(at);else{const Ut=h.getViewSubImage(u,at);St=Ut.viewport,Y===0&&(t.setRenderTargetTextures(f,Ut.colorTexture,u.ignoreDepthValues?void 0:Ut.depthStencilTexture),t.setRenderTarget(f))}let Q=y[Y];Q===void 0&&(Q=new We,Q.layers.enable(Y),Q.viewport=new ve,y[Y]=Q),Q.matrix.fromArray(at.transform.matrix),Q.projectionMatrix.fromArray(at.projectionMatrix),Q.viewport.set(St.x,St.y,St.width,St.height),Y===0&&S.matrix.copy(Q.matrix),q===!0&&S.cameras.push(Q)}}for(let H=0;H<v.length;H++){const q=x[H],Y=v[H];q!==null&&Y!==void 0&&Y.update(q,C,l||o)}B&&B(z,C),p=null}const k=new wh;k.setAnimationLoop(Z),this.setAnimationLoop=function(z){B=z},this.dispose=function(){}}}function x0(r,t){function e(m,f){m.fogColor.value.copy(f.color),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,v,x,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(m,f):f.isMeshToonMaterial?(i(m,f),h(m,f)):f.isMeshPhongMaterial?(i(m,f),c(m,f)):f.isMeshStandardMaterial?(i(m,f),u(m,f),f.isMeshPhysicalMaterial&&d(m,f,_)):f.isMeshMatcapMaterial?(i(m,f),p(m,f)):f.isMeshDepthMaterial?i(m,f):f.isMeshDistanceMaterial?(i(m,f),g(m,f)):f.isMeshNormalMaterial?i(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?a(m,f,v,x):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===je&&(m.bumpScale.value*=-1)),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===je&&m.normalScale.value.negate()),f.specularMap&&(m.specularMap.value=f.specularMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=t.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const w=r.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*w}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity);let x;f.map?x=f.map:f.specularMap?x=f.specularMap:f.displacementMap?x=f.displacementMap:f.normalMap?x=f.normalMap:f.bumpMap?x=f.bumpMap:f.roughnessMap?x=f.roughnessMap:f.metalnessMap?x=f.metalnessMap:f.alphaMap?x=f.alphaMap:f.emissiveMap?x=f.emissiveMap:f.clearcoatMap?x=f.clearcoatMap:f.clearcoatNormalMap?x=f.clearcoatNormalMap:f.clearcoatRoughnessMap?x=f.clearcoatRoughnessMap:f.iridescenceMap?x=f.iridescenceMap:f.iridescenceThicknessMap?x=f.iridescenceThicknessMap:f.specularIntensityMap?x=f.specularIntensityMap:f.specularColorMap?x=f.specularColorMap:f.transmissionMap?x=f.transmissionMap:f.thicknessMap?x=f.thicknessMap:f.sheenColorMap?x=f.sheenColorMap:f.sheenRoughnessMap&&(x=f.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix));let _;f.aoMap?_=f.aoMap:f.lightMap&&(_=f.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uv2Transform.value.copy(_.matrix))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function a(m,f,v,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=x*.5,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v;f.map?v=f.map:f.alphaMap&&(v=f.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.roughness.value=f.roughness,m.metalness.value=f.metalness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),m.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===je&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap)}function p(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){m.referencePosition.value.copy(f.referencePosition),m.nearDistance.value=f.nearDistance,m.farDistance.value=f.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function _0(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(35375):0;function l(x,_){const w=_.program;n.uniformBlockBinding(x,w)}function c(x,_){let w=i[x.id];w===void 0&&(g(x),w=h(x),i[x.id]=w,x.addEventListener("dispose",f));const y=_.program;n.updateUBOMapping(x,y);const S=t.render.frame;s[x.id]!==S&&(d(x),s[x.id]=S)}function h(x){const _=u();x.__bindingPointIndex=_;const w=r.createBuffer(),y=x.__size,S=x.usage;return r.bindBuffer(35345,w),r.bufferData(35345,y,S),r.bindBuffer(35345,null),r.bindBufferBase(35345,_,w),w}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=i[x.id],w=x.uniforms,y=x.__cache;r.bindBuffer(35345,_);for(let S=0,L=w.length;S<L;S++){const b=w[S];if(p(b,S,y)===!0){const T=b.value,I=b.__offset;typeof T=="number"?(b.__data[0]=T,r.bufferSubData(35345,I,b.__data)):(b.value.isMatrix3?(b.__data[0]=b.value.elements[0],b.__data[1]=b.value.elements[1],b.__data[2]=b.value.elements[2],b.__data[3]=b.value.elements[0],b.__data[4]=b.value.elements[3],b.__data[5]=b.value.elements[4],b.__data[6]=b.value.elements[5],b.__data[7]=b.value.elements[0],b.__data[8]=b.value.elements[6],b.__data[9]=b.value.elements[7],b.__data[10]=b.value.elements[8],b.__data[11]=b.value.elements[0]):T.toArray(b.__data),r.bufferSubData(35345,I,b.__data))}}r.bindBuffer(35345,null)}function p(x,_,w){const y=x.value;if(w[_]===void 0)return typeof y=="number"?w[_]=y:w[_]=y.clone(),!0;if(typeof y=="number"){if(w[_]!==y)return w[_]=y,!0}else{const S=w[_];if(S.equals(y)===!1)return S.copy(y),!0}return!1}function g(x){const _=x.uniforms;let w=0;const y=16;let S=0;for(let L=0,b=_.length;L<b;L++){const T=_[L],I=m(T);if(T.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=w,L>0){S=w%y;const G=y-S;S!==0&&G-I.boundary<0&&(w+=y-S,T.__offset=w)}w+=I.storage}return S=w%y,S>0&&(w+=y-S),x.__size=w,x.__cache={},this}function m(x){const _=x.value,w={boundary:0,storage:0};return typeof _=="number"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),w}function f(x){const _=x.target;_.removeEventListener("dispose",f);const w=o.indexOf(_.__bindingPointIndex);o.splice(w,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function v(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:v}}function y0(){const r=Gr("canvas");return r.style.display="block",r}function Ah(r={}){this.isWebGLRenderer=!0;const t=r.canvas!==void 0?r.canvas:y0(),e=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let u=null,d=null;const p=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=vi,this.physicallyCorrectLights=!1,this.toneMapping=Pn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let f=!1,v=0,x=0,_=null,w=-1,y=null;const S=new ve,L=new ve;let b=null,T=t.width,I=t.height,G=1,j=null,R=null;const P=new ve(0,0,T,I),F=new ve(0,0,T,I);let B=!1;const Z=new Ta;let k=!1,z=!1,C=null;const H=new ne,q=new ot,Y=new O,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function St(){return _===null?G:1}let Q=e;function Ut(A,X){for(let J=0;J<A.length;J++){const V=A[J],tt=t.getContext(V,X);if(tt!==null)return tt}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ma}`),t.addEventListener("webglcontextlost",xt,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",Ft,!1),Q===null){const X=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&X.shift(),Q=Ut(X,A),Q===null)throw Ut(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Q.getShaderPrecisionFormat===void 0&&(Q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Tt,At,mt,Xt,Rt,bt,se,pe,le,Ce,ce,jt,Ne,Fe,D,E,$,nt,st,ct,Et,N,W,ut;function pt(){Tt=new Rm(Q),At=new Em(Q,Tt,r),Tt.init(At),N=new f0(Q,Tt,At),mt=new u0(Q,Tt,At),Xt=new zm,Rt=new Jg,bt=new d0(Q,Tt,mt,Rt,At,N,Xt),se=new Am(m),pe=new Pm(m),le=new Wd(Q,At),W=new Mm(Q,Tt,le,At),Ce=new Dm(Q,le,Xt,W),ce=new Bm(Q,Ce,le,Xt),st=new Om(Q,At,bt),E=new Tm(Rt),jt=new Zg(m,se,pe,Tt,At,W,E),Ne=new x0(m,Rt),Fe=new Qg,D=new r0(Tt,At),nt=new bm(m,se,pe,mt,ce,h,o),$=new h0(m,ce,At),ut=new _0(Q,Xt,At,mt),ct=new Sm(Q,Tt,Xt,At),Et=new Im(Q,Tt,Xt,At),Xt.programs=jt.programs,m.capabilities=At,m.extensions=Tt,m.properties=Rt,m.renderLists=Fe,m.shadowMap=$,m.state=mt,m.info=Xt}pt();const ht=new v0(m,Q);this.xr=ht,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const A=Tt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Tt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(T,I,!1))},this.getSize=function(A){return A.set(T,I)},this.setSize=function(A,X,J){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=A,I=X,t.width=Math.floor(A*G),t.height=Math.floor(X*G),J!==!1&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(T*G,I*G).floor()},this.setDrawingBufferSize=function(A,X,J){T=A,I=X,G=J,t.width=Math.floor(A*J),t.height=Math.floor(X*J),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(P)},this.setViewport=function(A,X,J,V){A.isVector4?P.set(A.x,A.y,A.z,A.w):P.set(A,X,J,V),mt.viewport(S.copy(P).multiplyScalar(G).floor())},this.getScissor=function(A){return A.copy(F)},this.setScissor=function(A,X,J,V){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,X,J,V),mt.scissor(L.copy(F).multiplyScalar(G).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(A){mt.setScissorTest(B=A)},this.setOpaqueSort=function(A){j=A},this.setTransparentSort=function(A){R=A},this.getClearColor=function(A){return A.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(A=!0,X=!0,J=!0){let V=0;A&&(V|=16384),X&&(V|=256),J&&(V|=1024),Q.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",Ft,!1),Fe.dispose(),D.dispose(),Rt.dispose(),se.dispose(),pe.dispose(),ce.dispose(),W.dispose(),ut.dispose(),jt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",dt),ht.removeEventListener("sessionend",yt),C&&(C.dispose(),C=null),Wt.stop()};function xt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const A=Xt.autoReset,X=$.enabled,J=$.autoUpdate,V=$.needsUpdate,tt=$.type;pt(),Xt.autoReset=A,$.enabled=X,$.autoUpdate=J,$.needsUpdate=V,$.type=tt}function Ft(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Bt(A){const X=A.target;X.removeEventListener("dispose",Bt),Yt(X)}function Yt(A){U(A),Rt.remove(A)}function U(A){const X=Rt.get(A).programs;X!==void 0&&(X.forEach(function(J){jt.releaseProgram(J)}),A.isShaderMaterial&&jt.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,J,V,tt,wt){X===null&&(X=at);const Ct=tt.isMesh&&tt.matrixWorld.determinant()<0,zt=hu(A,X,J,V,tt);mt.setMaterial(V,Ct);let Dt=J.index;const Vt=J.attributes.position;if(Dt===null){if(Vt===void 0||Vt.count===0)return}else if(Dt.count===0)return;let Nt=1;V.wireframe===!0&&(Dt=Ce.getWireframeAttribute(J),Nt=2),W.setup(tt,V,zt,J,Dt);let kt,Qt=ct;Dt!==null&&(kt=le.get(Dt),Qt=Et,Qt.setIndex(kt));const $n=Dt!==null?Dt.count:Vt.count,Ai=J.drawRange.start*Nt,Ci=J.drawRange.count*Nt,an=wt!==null?wt.start*Nt:0,Ht=wt!==null?wt.count*Nt:1/0,Li=Math.max(Ai,an),re=Math.min($n,Ai+Ci,an+Ht)-1,Be=Math.max(0,re-Li+1);if(Be!==0){if(tt.isMesh)V.wireframe===!0?(mt.setLineWidth(V.wireframeLinewidth*St()),Qt.setMode(1)):Qt.setMode(4);else if(tt.isLine){let In=V.linewidth;In===void 0&&(In=1),mt.setLineWidth(In*St()),tt.isLineSegments?Qt.setMode(1):tt.isLineLoop?Qt.setMode(2):Qt.setMode(3)}else tt.isPoints?Qt.setMode(0):tt.isSprite&&Qt.setMode(4);if(tt.isInstancedMesh)Qt.renderInstances(Li,Be,tt.count);else if(J.isInstancedBufferGeometry){const In=Math.min(J.instanceCount,J._maxInstanceCount);Qt.renderInstances(Li,Be,In)}else Qt.render(Li,Be)}},this.compile=function(A,X){function J(V,tt,wt){V.transparent===!0&&V.side===qe?(V.side=je,V.needsUpdate=!0,Oe(V,tt,wt),V.side=rs,V.needsUpdate=!0,Oe(V,tt,wt),V.side=qe):Oe(V,tt,wt)}d=D.get(A),d.init(),g.push(d),A.traverseVisible(function(V){V.isLight&&V.layers.test(X.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),d.setupLights(m.physicallyCorrectLights),A.traverse(function(V){const tt=V.material;if(tt)if(Array.isArray(tt))for(let wt=0;wt<tt.length;wt++){const Ct=tt[wt];J(Ct,A,V)}else J(tt,A,V)}),g.pop(),d=null};let K=null;function et(A){K&&K(A)}function dt(){Wt.stop()}function yt(){Wt.start()}const Wt=new wh;Wt.setAnimationLoop(et),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(A){K=A,ht.setAnimationLoop(A),A===null?Wt.stop():Wt.start()},ht.addEventListener("sessionstart",dt),ht.addEventListener("sessionend",yt),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(X),X=ht.getCamera()),A.isScene===!0&&A.onBeforeRender(m,A,X,_),d=D.get(A,g.length),d.init(),g.push(d),H.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Z.setFromProjectionMatrix(H),z=this.localClippingEnabled,k=E.init(this.clippingPlanes,z,X),u=Fe.get(A,p.length),u.init(),p.push(u),me(A,X,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(j,R),k===!0&&E.beginShadows();const J=d.state.shadowsArray;if($.render(J,A,X),k===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),nt.render(u,A),d.setupLights(m.physicallyCorrectLights),X.isArrayCamera){const V=X.cameras;for(let tt=0,wt=V.length;tt<wt;tt++){const Ct=V[tt];we(u,A,Ct,Ct.viewport)}}else we(u,A,X);_!==null&&(bt.updateMultisampleRenderTarget(_),bt.updateRenderTargetMipmap(_)),A.isScene===!0&&A.onAfterRender(m,A,X),W.resetDefaultState(),w=-1,y=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,p.pop(),p.length>0?u=p[p.length-1]:u=null};function me(A,X,J,V){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){V&&Y.setFromMatrixPosition(A.matrixWorld).applyMatrix4(H);const Ct=ce.update(A),zt=A.material;zt.visible&&u.push(A,Ct,zt,J,Y.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Xt.render.frame&&(A.skeleton.update(),A.skeleton.frame=Xt.render.frame),!A.frustumCulled||Z.intersectsObject(A))){V&&Y.setFromMatrixPosition(A.matrixWorld).applyMatrix4(H);const Ct=ce.update(A),zt=A.material;if(Array.isArray(zt)){const Dt=Ct.groups;for(let Vt=0,Nt=Dt.length;Vt<Nt;Vt++){const kt=Dt[Vt],Qt=zt[kt.materialIndex];Qt&&Qt.visible&&u.push(A,Ct,Qt,J,Y.z,kt)}}else zt.visible&&u.push(A,Ct,zt,J,Y.z,null)}}const wt=A.children;for(let Ct=0,zt=wt.length;Ct<zt;Ct++)me(wt[Ct],X,J,V)}function we(A,X,J,V){const tt=A.opaque,wt=A.transmissive,Ct=A.transparent;d.setupLightsView(J),wt.length>0&&Yn(tt,X,J),V&&mt.viewport(S.copy(V)),tt.length>0&&Zt(tt,X,J),wt.length>0&&Zt(wt,X,J),Ct.length>0&&Zt(Ct,X,J),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Yn(A,X,J){const V=At.isWebGL2;C===null&&(C=new xi(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")?Fs:gi,minFilter:Yr,samples:V&&s===!0?4:0})),m.getDrawingBufferSize(q),V?C.setSize(q.x,q.y):C.setSize(fa(q.x),fa(q.y));const tt=m.getRenderTarget();m.setRenderTarget(C),m.clear();const wt=m.toneMapping;m.toneMapping=Pn,Zt(A,X,J),m.toneMapping=wt,bt.updateMultisampleRenderTarget(C),bt.updateRenderTargetMipmap(C),m.setRenderTarget(tt)}function Zt(A,X,J){const V=X.isScene===!0?X.overrideMaterial:null;for(let tt=0,wt=A.length;tt<wt;tt++){const Ct=A[tt],zt=Ct.object,Dt=Ct.geometry,Vt=V===null?Ct.material:V,Nt=Ct.group;zt.layers.test(J.layers)&&gn(zt,X,J,Dt,Vt,Nt)}}function gn(A,X,J,V,tt,wt){A.onBeforeRender(m,X,J,V,tt,wt),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),tt.onBeforeRender(m,X,J,V,A,wt),tt.transparent===!0&&tt.side===qe?(tt.side=je,tt.needsUpdate=!0,m.renderBufferDirect(J,X,V,tt,A,wt),tt.side=rs,tt.needsUpdate=!0,m.renderBufferDirect(J,X,V,tt,A,wt),tt.side=qe):m.renderBufferDirect(J,X,V,tt,A,wt),A.onAfterRender(m,X,J,V,tt,wt)}function Oe(A,X,J){X.isScene!==!0&&(X=at);const V=Rt.get(A),tt=d.state.lights,wt=d.state.shadowsArray,Ct=tt.state.version,zt=jt.getParameters(A,tt.state,wt,X,J),Dt=jt.getProgramCacheKey(zt);let Vt=V.programs;V.environment=A.isMeshStandardMaterial?X.environment:null,V.fog=X.fog,V.envMap=(A.isMeshStandardMaterial?pe:se).get(A.envMap||V.environment),Vt===void 0&&(A.addEventListener("dispose",Bt),Vt=new Map,V.programs=Vt);let Nt=Vt.get(Dt);if(Nt!==void 0){if(V.currentProgram===Nt&&V.lightsStateVersion===Ct)return Va(A,zt),Nt}else zt.uniforms=jt.getUniforms(A),A.onBuild(J,zt,m),A.onBeforeCompile(zt,m),Nt=jt.acquireProgram(zt,Dt),Vt.set(Dt,Nt),V.uniforms=zt.uniforms;const kt=V.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=E.uniform),Va(A,zt),V.needsLights=du(A),V.lightsStateVersion=Ct,V.needsLights&&(kt.ambientLightColor.value=tt.state.ambient,kt.lightProbe.value=tt.state.probe,kt.directionalLights.value=tt.state.directional,kt.directionalLightShadows.value=tt.state.directionalShadow,kt.spotLights.value=tt.state.spot,kt.spotLightShadows.value=tt.state.spotShadow,kt.rectAreaLights.value=tt.state.rectArea,kt.ltc_1.value=tt.state.rectAreaLTC1,kt.ltc_2.value=tt.state.rectAreaLTC2,kt.pointLights.value=tt.state.point,kt.pointLightShadows.value=tt.state.pointShadow,kt.hemisphereLights.value=tt.state.hemi,kt.directionalShadowMap.value=tt.state.directionalShadowMap,kt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,kt.spotShadowMap.value=tt.state.spotShadowMap,kt.spotLightMatrix.value=tt.state.spotLightMatrix,kt.spotLightMap.value=tt.state.spotLightMap,kt.pointShadowMap.value=tt.state.pointShadowMap,kt.pointShadowMatrix.value=tt.state.pointShadowMatrix);const Qt=Nt.getUniforms(),$n=Fr.seqWithValue(Qt.seq,kt);return V.currentProgram=Nt,V.uniformsList=$n,Nt}function Va(A,X){const J=Rt.get(A);J.outputEncoding=X.outputEncoding,J.instancing=X.instancing,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function hu(A,X,J,V,tt){X.isScene!==!0&&(X=at),bt.resetTextureUnits();const wt=X.fog,Ct=V.isMeshStandardMaterial?X.environment:null,zt=_===null?m.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:vi,Dt=(V.isMeshStandardMaterial?pe:se).get(V.envMap||Ct),Vt=V.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Nt=!!V.normalMap&&!!J.attributes.tangent,kt=!!J.morphAttributes.position,Qt=!!J.morphAttributes.normal,$n=!!J.morphAttributes.color,Ai=V.toneMapped?m.toneMapping:Pn,Ci=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,an=Ci!==void 0?Ci.length:0,Ht=Rt.get(V),Li=d.state.lights;if(k===!0&&(z===!0||A!==y)){const Le=A===y&&V.id===w;E.setState(V,A,Le)}let re=!1;V.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Li.state.version||Ht.outputEncoding!==zt||tt.isInstancedMesh&&Ht.instancing===!1||!tt.isInstancedMesh&&Ht.instancing===!0||tt.isSkinnedMesh&&Ht.skinning===!1||!tt.isSkinnedMesh&&Ht.skinning===!0||Ht.envMap!==Dt||V.fog===!0&&Ht.fog!==wt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==E.numPlanes||Ht.numIntersection!==E.numIntersection)||Ht.vertexAlphas!==Vt||Ht.vertexTangents!==Nt||Ht.morphTargets!==kt||Ht.morphNormals!==Qt||Ht.morphColors!==$n||Ht.toneMapping!==Ai||At.isWebGL2===!0&&Ht.morphTargetsCount!==an)&&(re=!0):(re=!0,Ht.__version=V.version);let Be=Ht.currentProgram;re===!0&&(Be=Oe(V,X,tt));let In=!1,gs=!1,ro=!1;const Se=Be.getUniforms(),Zn=Ht.uniforms;if(mt.useProgram(Be.program)&&(In=!0,gs=!0,ro=!0),V.id!==w&&(w=V.id,gs=!0),In||y!==A){if(Se.setValue(Q,"projectionMatrix",A.projectionMatrix),At.logarithmicDepthBuffer&&Se.setValue(Q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),y!==A&&(y=A,gs=!0,ro=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const Le=Se.map.cameraPosition;Le!==void 0&&Le.setValue(Q,Y.setFromMatrixPosition(A.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Se.setValue(Q,"isOrthographic",A.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||tt.isSkinnedMesh)&&Se.setValue(Q,"viewMatrix",A.matrixWorldInverse)}if(tt.isSkinnedMesh){Se.setOptional(Q,tt,"bindMatrix"),Se.setOptional(Q,tt,"bindMatrixInverse");const Le=tt.skeleton;Le&&(At.floatVertexTextures?(Le.boneTexture===null&&Le.computeBoneTexture(),Se.setValue(Q,"boneTexture",Le.boneTexture,bt),Se.setValue(Q,"boneTextureSize",Le.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const oo=J.morphAttributes;if((oo.position!==void 0||oo.normal!==void 0||oo.color!==void 0&&At.isWebGL2===!0)&&st.update(tt,J,V,Be),(gs||Ht.receiveShadow!==tt.receiveShadow)&&(Ht.receiveShadow=tt.receiveShadow,Se.setValue(Q,"receiveShadow",tt.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Zn.envMap.value=Dt,Zn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),gs&&(Se.setValue(Q,"toneMappingExposure",m.toneMappingExposure),Ht.needsLights&&uu(Zn,ro),wt&&V.fog===!0&&Ne.refreshFogUniforms(Zn,wt),Ne.refreshMaterialUniforms(Zn,V,G,I,C),Fr.upload(Q,Ht.uniformsList,Zn,bt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Fr.upload(Q,Ht.uniformsList,Zn,bt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Se.setValue(Q,"center",tt.center),Se.setValue(Q,"modelViewMatrix",tt.modelViewMatrix),Se.setValue(Q,"normalMatrix",tt.normalMatrix),Se.setValue(Q,"modelMatrix",tt.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Le=V.uniformsGroups;for(let ao=0,fu=Le.length;ao<fu;ao++)if(At.isWebGL2){const Ha=Le[ao];ut.update(Ha,Be),ut.bind(Ha,Be)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Be}function uu(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function du(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(A,X,J){Rt.get(A.texture).__webglTexture=X,Rt.get(A.depthTexture).__webglTexture=J;const V=Rt.get(A);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=J===void 0,V.__autoAllocateDepthBuffer||Tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,X){const J=Rt.get(A);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,J=0){_=A,v=X,x=J;let V=!0,tt=null,wt=!1,Ct=!1;if(A){const Dt=Rt.get(A);Dt.__useDefaultFramebuffer!==void 0?(mt.bindFramebuffer(36160,null),V=!1):Dt.__webglFramebuffer===void 0?bt.setupRenderTarget(A):Dt.__hasExternalTextures&&bt.rebindTextures(A,Rt.get(A.texture).__webglTexture,Rt.get(A.depthTexture).__webglTexture);const Vt=A.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Ct=!0);const Nt=Rt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(tt=Nt[X],wt=!0):At.isWebGL2&&A.samples>0&&bt.useMultisampledRTT(A)===!1?tt=Rt.get(A).__webglMultisampledFramebuffer:tt=Nt,S.copy(A.viewport),L.copy(A.scissor),b=A.scissorTest}else S.copy(P).multiplyScalar(G).floor(),L.copy(F).multiplyScalar(G).floor(),b=B;if(mt.bindFramebuffer(36160,tt)&&At.drawBuffers&&V&&mt.drawBuffers(A,tt),mt.viewport(S),mt.scissor(L),mt.setScissorTest(b),wt){const Dt=Rt.get(A.texture);Q.framebufferTexture2D(36160,36064,34069+X,Dt.__webglTexture,J)}else if(Ct){const Dt=Rt.get(A.texture),Vt=X||0;Q.framebufferTextureLayer(36160,36064,Dt.__webglTexture,J||0,Vt)}w=-1},this.readRenderTargetPixels=function(A,X,J,V,tt,wt,Ct){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(zt=zt[Ct]),zt){mt.bindFramebuffer(36160,zt);try{const Dt=A.texture,Vt=Dt.format,Nt=Dt.type;if(Vt!==en&&N.convert(Vt)!==Q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const kt=Nt===Fs&&(Tt.has("EXT_color_buffer_half_float")||At.isWebGL2&&Tt.has("EXT_color_buffer_float"));if(Nt!==gi&&N.convert(Nt)!==Q.getParameter(35738)&&!(Nt===ai&&(At.isWebGL2||Tt.has("OES_texture_float")||Tt.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-V&&J>=0&&J<=A.height-tt&&Q.readPixels(X,J,V,tt,N.convert(Vt),N.convert(Nt),wt)}finally{const Dt=_!==null?Rt.get(_).__webglFramebuffer:null;mt.bindFramebuffer(36160,Dt)}}},this.copyFramebufferToTexture=function(A,X,J=0){const V=Math.pow(2,-J),tt=Math.floor(X.image.width*V),wt=Math.floor(X.image.height*V);bt.setTexture2D(X,0),Q.copyTexSubImage2D(3553,J,0,0,A.x,A.y,tt,wt),mt.unbindTexture()},this.copyTextureToTexture=function(A,X,J,V=0){const tt=X.image.width,wt=X.image.height,Ct=N.convert(J.format),zt=N.convert(J.type);bt.setTexture2D(J,0),Q.pixelStorei(37440,J.flipY),Q.pixelStorei(37441,J.premultiplyAlpha),Q.pixelStorei(3317,J.unpackAlignment),X.isDataTexture?Q.texSubImage2D(3553,V,A.x,A.y,tt,wt,Ct,zt,X.image.data):X.isCompressedTexture?Q.compressedTexSubImage2D(3553,V,A.x,A.y,X.mipmaps[0].width,X.mipmaps[0].height,Ct,X.mipmaps[0].data):Q.texSubImage2D(3553,V,A.x,A.y,Ct,zt,X.image),V===0&&J.generateMipmaps&&Q.generateMipmap(3553),mt.unbindTexture()},this.copyTextureToTexture3D=function(A,X,J,V,tt=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const wt=A.max.x-A.min.x+1,Ct=A.max.y-A.min.y+1,zt=A.max.z-A.min.z+1,Dt=N.convert(V.format),Vt=N.convert(V.type);let Nt;if(V.isData3DTexture)bt.setTexture3D(V,0),Nt=32879;else if(V.isDataArrayTexture)bt.setTexture2DArray(V,0),Nt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Q.pixelStorei(37440,V.flipY),Q.pixelStorei(37441,V.premultiplyAlpha),Q.pixelStorei(3317,V.unpackAlignment);const kt=Q.getParameter(3314),Qt=Q.getParameter(32878),$n=Q.getParameter(3316),Ai=Q.getParameter(3315),Ci=Q.getParameter(32877),an=J.isCompressedTexture?J.mipmaps[0]:J.image;Q.pixelStorei(3314,an.width),Q.pixelStorei(32878,an.height),Q.pixelStorei(3316,A.min.x),Q.pixelStorei(3315,A.min.y),Q.pixelStorei(32877,A.min.z),J.isDataTexture||J.isData3DTexture?Q.texSubImage3D(Nt,tt,X.x,X.y,X.z,wt,Ct,zt,Dt,Vt,an.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Q.compressedTexSubImage3D(Nt,tt,X.x,X.y,X.z,wt,Ct,zt,Dt,an.data)):Q.texSubImage3D(Nt,tt,X.x,X.y,X.z,wt,Ct,zt,Dt,Vt,an),Q.pixelStorei(3314,kt),Q.pixelStorei(32878,Qt),Q.pixelStorei(3316,$n),Q.pixelStorei(3315,Ai),Q.pixelStorei(32877,Ci),tt===0&&V.generateMipmaps&&Q.generateMipmap(Nt),mt.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?bt.setTextureCube(A,0):A.isData3DTexture?bt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?bt.setTexture2DArray(A,0):bt.setTexture2D(A,0),mt.unbindTexture()},this.resetState=function(){v=0,x=0,_=null,mt.reset(),W.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class w0 extends Ah{}w0.prototype.isWebGL1Renderer=!0;class b0 extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Ch extends qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const rc=new O,oc=new O,ac=new ne,Wo=new Sa,yr=new Zr;class M0 extends xe{constructor(t=new Ie,e=new Ch){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)rc.fromBufferAttribute(e,i-1),oc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=rc.distanceTo(oc);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(i),yr.radius+=s,t.ray.intersectsSphere(yr)===!1)return;ac.copy(i).invert(),Wo.copy(t.ray).applyMatrix4(ac);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new O,h=new O,u=new O,d=new O,p=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const v=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let _=v,w=x-1;_<w;_+=p){const y=g.getX(_),S=g.getX(_+1);if(c.fromBufferAttribute(f,y),h.fromBufferAttribute(f,S),Wo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const b=t.ray.origin.distanceTo(d);b<t.near||b>t.far||e.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let _=v,w=x-1;_<w;_+=p){if(c.fromBufferAttribute(f,_),h.fromBufferAttribute(f,_+1),Wo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const S=t.ray.origin.distanceTo(d);S<t.near||S>t.far||e.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,p=(o-h)/d;return(i+p)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new ot:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new O,i=[],s=[],o=[],a=new O,l=new ne;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Me(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(i[p],s[p])}if(e===!0){let p=Math.acos(Me(s[0].dot(s[t]),-1,1));p/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ca extends mn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new ot,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class S0 extends Ca{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function La(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,i(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const wr=new O,Vo=new La,Ho=new La,qo=new La;class Lh extends mn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new O){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(wr.subVectors(i[0],i[1]).add(i[0]),c=wr);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(wr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=wr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(h),p);m<1e-4&&(m=1),g<1e-4&&(g=m),f<1e-4&&(f=m),Vo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,m,f),Ho.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,m,f),qo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,m,f)}else this.curveType==="catmullrom"&&(Vo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ho.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),qo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Vo.calc(l),Ho.calc(l),qo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new O().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function lc(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function E0(r,t){const e=1-r;return e*e*t}function T0(r,t){return 2*(1-r)*r*t}function A0(r,t){return r*r*t}function Ps(r,t,e,n){return E0(r,t)+T0(r,e)+A0(r,n)}function C0(r,t){const e=1-r;return e*e*e*t}function L0(r,t){const e=1-r;return 3*e*e*r*t}function P0(r,t){return 3*(1-r)*r*r*t}function R0(r,t){return r*r*r*t}function Rs(r,t,e,n,i){return C0(r,t)+L0(r,e)+P0(r,n)+R0(r,i)}class Ph extends mn{constructor(t=new ot,e=new ot,n=new ot,i=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ot){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Rs(t,i.x,s.x,o.x,a.x),Rs(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class D0 extends mn{constructor(t=new O,e=new O,n=new O,i=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new O){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Rs(t,i.x,s.x,o.x,a.x),Rs(t,i.y,s.y,o.y,a.y),Rs(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pa extends mn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new ot;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class I0 extends mn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rh extends mn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ps(t,i.x,s.x,o.x),Ps(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class z0 extends mn{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ps(t,i.x,s.x,o.x),Ps(t,i.y,s.y,o.y),Ps(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dh extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(lc(a,l.x,c.x,h.x,u.x),lc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ot().fromArray(i))}return this}}var N0=Object.freeze({__proto__:null,ArcCurve:S0,CatmullRomCurve3:Lh,CubicBezierCurve:Ph,CubicBezierCurve3:D0,EllipseCurve:Ca,LineCurve:Pa,LineCurve3:I0,QuadraticBezierCurve:Rh,QuadraticBezierCurve3:z0,SplineCurve:Dh});class F0 extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Pa(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new N0[i.type]().fromJSON(i))}return this}}class ma extends F0{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Pa(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Rh(this.currentPoint.clone(),new ot(t,e),new ot(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new Ph(this.currentPoint.clone(),new ot(t,e),new ot(n,i),new ot(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Dh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new Ca(t,e,n,i,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Wr extends Ie{constructor(t=1,e=8,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new O,h=new ot;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(l,2))}static fromJSON(t){return new Wr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ci extends Ie{constructor(t=1,e=1,n=1,i=8,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],p=[];let g=0;const m=[],f=n/2;let v=0;x(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(p,2));function x(){const w=new O,y=new O;let S=0;const L=(e-t)/n;for(let b=0;b<=s;b++){const T=[],I=b/s,G=I*(e-t)+t;for(let j=0;j<=i;j++){const R=j/i,P=R*l+a,F=Math.sin(P),B=Math.cos(P);y.x=G*F,y.y=-I*n+f,y.z=G*B,u.push(y.x,y.y,y.z),w.set(F,L,B).normalize(),d.push(w.x,w.y,w.z),p.push(R,1-I),T.push(g++)}m.push(T)}for(let b=0;b<i;b++)for(let T=0;T<s;T++){const I=m[T][b],G=m[T+1][b],j=m[T+1][b+1],R=m[T][b+1];h.push(I,G,R),h.push(G,j,R),S+=6}c.addGroup(v,S,0),v+=S}function _(w){const y=g,S=new ot,L=new O;let b=0;const T=w===!0?t:e,I=w===!0?1:-1;for(let j=1;j<=i;j++)u.push(0,f*I,0),d.push(0,I,0),p.push(.5,.5),g++;const G=g;for(let j=0;j<=i;j++){const P=j/i*l+a,F=Math.cos(P),B=Math.sin(P);L.x=T*B,L.y=f*I,L.z=T*F,u.push(L.x,L.y,L.z),d.push(0,I,0),S.x=F*.5+.5,S.y=B*.5*I+.5,p.push(S.x,S.y),g++}for(let j=0;j<i;j++){const R=y+j,P=G+j;w===!0?h.push(P,P+1,R):h.push(P+1,P,R),b+=3}c.addGroup(v,b,w===!0?1:2),v+=b}}static fromJSON(t){return new ci(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ih extends ma{constructor(t){super(t),this.uuid=ds(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ma().fromJSON(i))}return this}}const O0={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=zh(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,d,p;if(n&&(s=W0(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(let g=e;g<i;g+=e)u=r[g],d=r[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return Os(s,o,e,a,l,p,0),o}};function zh(r,t,e,n,i){let s,o;if(i===Q0(r,t,e,n)>0)for(s=t;s<e;s+=n)o=cc(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=cc(s,r[s],r[s+1],o);return o&&Qr(o,o.next)&&(Us(o),o=o.next),o}function wi(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Qr(e,e.next)||Kt(e.prev,e,e.next)===0)){if(Us(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Os(r,t,e,n,i,s,o){if(!r)return;!o&&s&&j0(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?U0(r,n,i,s):B0(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),Us(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=k0(wi(r),t,e),Os(r,t,e,n,i,s,2)):o===2&&G0(r,t,e,n,i,s):Os(wi(r),t,e,n,i,s,1);break}}}function B0(r){const t=r.prev,e=r,n=r.next;if(Kt(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,d=i>s?i>o?i:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Qi(i,a,s,l,o,c,g.x,g.y)&&Kt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function U0(r,t,e,n){const i=r.prev,s=r,o=r.next;if(Kt(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,m=a>l?a>c?a:c:l>c?l:c,f=h>u?h>d?h:d:u>d?u:d,v=ga(p,g,t,e,n),x=ga(m,f,t,e,n);let _=r.prevZ,w=r.nextZ;for(;_&&_.z>=v&&w&&w.z<=x;){if(_.x>=p&&_.x<=m&&_.y>=g&&_.y<=f&&_!==i&&_!==o&&Qi(a,h,l,u,c,d,_.x,_.y)&&Kt(_.prev,_,_.next)>=0||(_=_.prevZ,w.x>=p&&w.x<=m&&w.y>=g&&w.y<=f&&w!==i&&w!==o&&Qi(a,h,l,u,c,d,w.x,w.y)&&Kt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;_&&_.z>=v;){if(_.x>=p&&_.x<=m&&_.y>=g&&_.y<=f&&_!==i&&_!==o&&Qi(a,h,l,u,c,d,_.x,_.y)&&Kt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;w&&w.z<=x;){if(w.x>=p&&w.x<=m&&w.y>=g&&w.y<=f&&w!==i&&w!==o&&Qi(a,h,l,u,c,d,w.x,w.y)&&Kt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function k0(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Qr(i,s)&&Nh(i,n,n.next,s)&&Bs(i,s)&&Bs(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Us(n),Us(n.next),n=r=s),n=n.next}while(n!==r);return wi(n)}function G0(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Z0(o,a)){let l=Fh(o,a);o=wi(o,o.next),l=wi(l,l.next),Os(o,t,e,n,i,s,0),Os(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function W0(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=zh(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push($0(c));for(i.sort(V0),s=0;s<i.length;s++)e=H0(i[s],e);return e}function V0(r,t){return r.x-t.x}function H0(r,t){const e=q0(r,t);if(!e)return t;const n=Fh(e,r);return wi(n,n.next),wi(e,e.next)}function q0(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Qi(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),Bs(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&X0(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function X0(r,t){return Kt(r.prev,r,t.prev)<0&&Kt(t.next,r,r.next)<0}function j0(r,t,e,n){let i=r;do i.z===0&&(i.z=ga(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Y0(i)}function Y0(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function ga(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function $0(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Qi(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function Z0(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!J0(r,t)&&(Bs(r,t)&&Bs(t,r)&&K0(r,t)&&(Kt(r.prev,r,t.prev)||Kt(r,t.prev,t))||Qr(r,t)&&Kt(r.prev,r,r.next)>0&&Kt(t.prev,t,t.next)>0)}function Kt(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Qr(r,t){return r.x===t.x&&r.y===t.y}function Nh(r,t,e,n){const i=Mr(Kt(r,t,e)),s=Mr(Kt(r,t,n)),o=Mr(Kt(e,n,r)),a=Mr(Kt(e,n,t));return!!(i!==s&&o!==a||i===0&&br(r,e,t)||s===0&&br(r,n,t)||o===0&&br(e,r,n)||a===0&&br(e,t,n))}function br(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Mr(r){return r>0?1:r<0?-1:0}function J0(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Nh(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Bs(r,t){return Kt(r.prev,r,r.next)<0?Kt(r,t,r.next)>=0&&Kt(r,r.prev,t)>=0:Kt(r,t,r.prev)<0||Kt(r,r.next,t)<0}function K0(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Fh(r,t){const e=new va(r.i,r.x,r.y),n=new va(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function cc(r,t,e,n){const i=new va(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Us(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function va(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Q0(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Ds{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Ds.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];hc(t),uc(n,t);let o=t.length;e.forEach(hc);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,uc(n,e[l]);const a=O0.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function hc(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function uc(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Ra extends Ie{constructor(t=.5,e=1,n=8,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,p=new O,g=new ot;for(let m=0;m<=i;m++){for(let f=0;f<=n;f++){const v=s+f/n*o;p.x=u*Math.cos(v),p.y=u*Math.sin(v),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let m=0;m<i;m++){const f=m*(n+1);for(let v=0;v<n;v++){const x=v+f,_=x,w=x+n+1,y=x+n+2,S=x+1;a.push(_,w,S),a.push(w,y,S)}}this.setIndex(a),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(h,2))}static fromJSON(t){return new Ra(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Da extends Ie{constructor(t=new Ih([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ie(i,3)),this.setAttribute("normal",new ie(s,3)),this.setAttribute("uv",new ie(o,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let p=d.shape;const g=d.holes;Ds.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,v=g.length;f<v;f++){const x=g[f];Ds.isClockWise(x)===!0&&(g[f]=x.reverse())}const m=Ds.triangulateShape(p,g);for(let f=0,v=g.length;f<v;f++){const x=g[f];p=p.concat(x)}for(let f=0,v=p.length;f<v;f++){const x=p[f];i.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let f=0,v=m.length;f<v;f++){const x=m[f],_=x[0]+u,w=x[1]+u,y=x[2]+u;n.push(_,w,y),l+=3}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return tv(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const o=e[t.shapes[i]];n.push(o)}return new Da(n,t.curveSegments)}}function tv(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class js extends qn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qt(16777215),this.specular=new qt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ev extends qn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Oh extends qn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bh extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Xo=new ne,dc=new O,fc=new O;class nv{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ta,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;dc.setFromMatrixPosition(t.matrixWorld),e.position.copy(dc),fc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fc),e.updateMatrixWorld(),Xo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class iv extends nv{constructor(){super(new bh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sv extends Bh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DefaultUp),this.updateMatrix(),this.target=new xe,this.shadow=new iv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class rv extends Bh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ov{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=pc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function pc(){return(typeof performance>"u"?Date:performance).now()}class Uh{constructor(t,e,n=0,i=1/0){this.ray=new Sa(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ea,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return xa(t,this,n,e),n.sort(mc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)xa(t[i],this,n,e);return n.sort(mc),n}}function mc(r,t){return r.distance-t.distance}function xa(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)xa(i[s],t,e,!0)}}class gc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const vc=new O;let Sr,jo;class av extends xe{constructor(t=new O(0,0,1),e=new O(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",Sr===void 0&&(Sr=new Ie,Sr.setAttribute("position",new ie([0,0,0,0,1,0],3)),jo=new ci(0,.5,1,5,1),jo.translate(0,-.5,0)),this.position.copy(e),this.line=new M0(Sr,new Ch({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Jt(jo,new Ei({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,s,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{vc.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(vc,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ma);class nn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new M);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new M);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new nn);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],u=n[5],d=n[6],p=n[7],g=n[8],m=i[0],f=i[1],v=i[2],x=i[3],_=i[4],w=i[5],y=i[6],S=i[7],L=i[8];return s[0]=o*m+a*x+l*y,s[1]=o*f+a*_+l*S,s[2]=o*v+a*w+l*L,s[3]=c*m+h*x+u*y,s[4]=c*f+h*_+u*S,s[5]=c*v+h*w+u*L,s[6]=d*m+p*x+g*y,s[7]=d*f+p*_+g*S,s[8]=d*v+p*w+g*L,e}scale(t,e){e===void 0&&(e=new nn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new M);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let l=3;const c=l;let h;const u=4;let d;do{if(o=c-l,s[o+i*o]===0){for(a=o+1;a<c;a++)if(s[o+i*a]!==0){h=u;do d=u-h,s[d+i*o]+=s[d+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<c;a++){const p=s[o+i*a]/s[o+i*o];h=u;do d=u-h,s[d+i*a]=d<=o?0:s[d+i*a]-s[d+i*o]*p;while(--h)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new nn);const e=3,n=6,i=lv;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const h=n;let u;do{if(s=l-a,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){c=h;do u=h-c,i[u+n*s]+=i[u+n*o];while(--c);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){const d=i[s+n*o]/i[s+n*s];c=h;do u=h-c,i[u+n*o]=u<=s?0:i[u+n*o]-i[u+n*s]*d;while(--c)}}while(--a);s=2;do{o=s-1;do{const d=i[s+n*o]/i[s+n*s];c=n;do u=n-c,i[u+n*o]=i[u+n*o]-i[u+n*s]*d;while(--c)}while(o--)}while(--s);s=2;do{const d=1/i[s+n*s];c=n;do u=n-c,i[u+n*s]=i[u+n*s]*d;while(--c)}while(s--);s=2;do{o=2;do{if(u=i[e+o+n*s],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,u)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,l=i+i,c=e*o,h=e*a,u=e*l,d=n*a,p=n*l,g=i*l,m=s*o,f=s*a,v=s*l,x=this.elements;return x[3*0+0]=1-(d+g),x[3*0+1]=h-v,x[3*0+2]=u+f,x[3*1+0]=h+v,x[3*1+1]=1-(c+g),x[3*1+2]=p-m,x[3*2+0]=u-f,x[3*2+1]=p+m,x[3*2+2]=1-(c+d),this}transpose(t){t===void 0&&(t=new nn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const lv=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new M);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*s-l*i,e.y=l*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new M(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new M(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new nn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new M);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new M);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new M),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new M),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new M),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=cv,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=hv;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(xc),xc.almostEquals(t,e)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const cv=new M,hv=new M,xc=new M;class ze{constructor(t){t===void 0&&(t={}),this.lowerBound=new M,this.upperBound=new M,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,_c),c=_c),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new ze().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=yc,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7];this.getCorners(i,s,o,a,l,c,h,u);for(let d=0;d!==8;d++){const p=n[d];t.pointToLocal(p,p)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=yc,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7];this.getCorners(i,s,o,a,l,c,h,u);for(let d=0;d!==8;d++){const p=n[d];t.pointToWorld(p,p)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,u=(this.lowerBound.z-n.z)*o,d=(this.upperBound.z-n.z)*o,p=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(u,d)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(u,d));return!(g<0||p>g)}}const _c=new M,yc=[new M,new M,new M,new M,new M,new M,new M,new M];class wc{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class kh{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class ee{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new M),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=uv,i=dv;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new ee);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*a+i*c-s*l,e.y=i*h+o*l+s*a-n*c,e.z=s*h+o*c+n*l-i*a,e.w=o*h-n*a-i*l-s*c,e}inverse(t){t===void 0&&(t=new ee);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new ee),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new M);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*s-l*i,u=c*i+l*n-o*s,d=c*s+o*i-a*n,p=-o*n-a*i-l*s;return e.x=h*c+p*-o+u*-l-d*-a,e.y=u*c+p*-a+d*-o-h*-l,e.z=d*c+p*-l+h*-a-u*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,s=0),n===void 0){const u=o*o,d=a*a,p=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*d-2*p),i=Math.asin(2*h),s=Math.atan2(2*o*c-2*a*l,1-2*u-2*p)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a+l*c*h),this}clone(){return new ee(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new ee);const i=this.x,s=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,h=t.z,u=t.w,d,p,g,m,f;return p=i*l+s*c+o*h+a*u,p<0&&(p=-p,l=-l,c=-c,h=-h,u=-u),1-p>1e-6?(d=Math.acos(p),g=Math.sin(d),m=Math.sin((1-e)*d)/g,f=Math.sin(e*d)/g):(m=1-e,f=e),n.x=m*i+f*l,n.y=m*s+f*c,n.z=m*o+f*h,n.w=m*a+f*u,n}integrate(t,e,n,i){i===void 0&&(i=new ee);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,u=this.w,d=e*.5;return i.x+=d*(s*u+o*h-a*c),i.y+=d*(o*u+a*l-s*h),i.z+=d*(a*u+s*c-o*l),i.w+=d*(-s*l-o*c-a*h),i}}const uv=new M,dv=new M,fv={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class ft{constructor(t){t===void 0&&(t={}),this.id=ft.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}ft.idCounter=0;ft.types=fv;class Gt{constructor(t){t===void 0&&(t={}),this.position=new M,this.quaternion=new ee,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Gt.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Gt.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),n.vsub(t,i),e.conjugate(bc),bc.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new M),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new M),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const bc=new ee;class Is extends ft{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:ft.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new M;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let h=!1;for(let u=0;u!==n.length;u++)if(n[u].almostEquals(i)||n[u].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new M;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];Is.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new M,o=new M;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,l,c){const h=new M;let u=-1,d=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const m=h.dot(o);m>d&&(d=m,u=g)}const p=[];for(let g=0;g<n.faces[u].length;g++){const m=n.vertices[n.faces[u][g]],f=new M;f.copy(m),s.vmult(f,f),i.vadd(f,f),p.push(f)}u>=0&&this.clipFaceAgainstHull(o,t,e,p,a,l,c)}findSeparatingAxis(t,e,n,i,s,o,a,l){const c=new M,h=new M,u=new M,d=new M,p=new M,g=new M;let m=Number.MAX_VALUE;const f=this;if(f.uniqueAxes)for(let v=0;v!==f.uniqueAxes.length;v++){n.vmult(f.uniqueAxes[v],c);const x=f.testSepAxis(c,t,e,n,i,s);if(x===!1)return!1;x<m&&(m=x,o.copy(c))}else{const v=a?a.length:f.faces.length;for(let x=0;x<v;x++){const _=a?a[x]:x;c.copy(f.faceNormals[_]),n.vmult(c,c);const w=f.testSepAxis(c,t,e,n,i,s);if(w===!1)return!1;w<m&&(m=w,o.copy(c))}}if(t.uniqueAxes)for(let v=0;v!==t.uniqueAxes.length;v++){s.vmult(t.uniqueAxes[v],h);const x=f.testSepAxis(h,t,e,n,i,s);if(x===!1)return!1;x<m&&(m=x,o.copy(h))}else{const v=l?l.length:t.faces.length;for(let x=0;x<v;x++){const _=l?l[x]:x;h.copy(t.faceNormals[_]),s.vmult(h,h);const w=f.testSepAxis(h,t,e,n,i,s);if(w===!1)return!1;w<m&&(m=w,o.copy(h))}}for(let v=0;v!==f.uniqueEdges.length;v++){n.vmult(f.uniqueEdges[v],d);for(let x=0;x!==t.uniqueEdges.length;x++)if(s.vmult(t.uniqueEdges[x],p),d.cross(p,g),!g.almostZero()){g.normalize();const _=f.testSepAxis(g,t,e,n,i,s);if(_===!1)return!1;_<m&&(m=_,o.copy(g))}}return i.vsub(e,u),u.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;Is.project(a,t,n,i,Yo),Is.project(e,t,s,o,$o);const l=Yo[0],c=Yo[1],h=$o[0],u=$o[1];if(l<u||h<c)return!1;const d=l-u,p=h-c;return d<p?d:p}calculateLocalInertia(t,e){const n=new M,i=new M;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const l=new M,c=new M,h=new M,u=new M,d=new M,p=new M,g=new M,m=new M,f=this,v=[],x=i,_=v;let w=-1,y=Number.MAX_VALUE;for(let I=0;I<f.faces.length;I++){l.copy(f.faceNormals[I]),n.vmult(l,l);const G=l.dot(t);G<y&&(y=G,w=I)}if(w<0)return;const S=f.faces[w];S.connectedFaces=[];for(let I=0;I<f.faces.length;I++)for(let G=0;G<f.faces[I].length;G++)S.indexOf(f.faces[I][G])!==-1&&I!==w&&S.connectedFaces.indexOf(I)===-1&&S.connectedFaces.push(I);const L=S.length;for(let I=0;I<L;I++){const G=f.vertices[S[I]],j=f.vertices[S[(I+1)%L]];G.vsub(j,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),u.copy(this.faceNormals[w]),n.vmult(u,u),e.vadd(u,u),h.cross(u,d),d.negate(d),p.copy(G),n.vmult(p,p),e.vadd(p,p);const R=S.connectedFaces[I];g.copy(this.faceNormals[R]);const P=this.getPlaneConstantOfFace(R);m.copy(g),n.vmult(m,m);const F=P-m.dot(e);for(this.clipFaceAgainstPlane(x,_,m,F);x.length;)x.shift();for(;_.length;)x.push(_.shift())}g.copy(this.faceNormals[w]);const b=this.getPlaneConstantOfFace(w);m.copy(g),n.vmult(m,m);const T=b-m.dot(e);for(let I=0;I<x.length;I++){let G=m.dot(x[I])+T;if(G<=s&&(console.log(`clamped: depth=${G} to minDist=${s}`),G=s),G<=o){const j=x[I];if(G<=1e-6){const R={point:j,normal:m,depth:G};a.push(R)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let h=0;h<a;h++){if(c=t[h],o=n.dot(c)+i,s<0)if(o<0){const u=new M;u.copy(c),e.push(u)}else{const u=new M;l.lerp(c,s/(s-o),u),e.push(u)}else if(o<0){const u=new M;l.lerp(c,s/(s-o),u),e.push(u),e.push(c)}l=c,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new M);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,l,c,h,u,d=new M;for(let p=0;p<s.length;p++){d.copy(s[p]),e.vmult(d,d),t.vadd(d,d);const g=d;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(u===void 0||g.z>u)&&(u=g.z)}n.set(o,a,l),i.set(c,h,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new M);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=null,o=new M;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let l=i[a];const c=e[n[a][0]],h=new M;t.vsub(c,h);const u=l.dot(h),d=new M;o.vsub(c,d);const p=l.dot(d);if(u<0&&p>0||u>0&&p<0)return!1}return s?1:-1}static project(t,e,n,i,s){const o=t.vertices.length,a=pv;let l=0,c=0;const h=mv,u=t.vertices;h.setZero(),Gt.vectorToLocalFrame(n,i,e,a),Gt.pointToLocalFrame(n,i,h,h);const d=h.dot(a);c=l=u[0].dot(a);for(let p=1;p<o;p++){const g=u[p].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=d,l-=d,c>l){const p=c;c=l,l=p}s[0]=l,s[1]=c}}const Yo=[],$o=[];new M;const pv=new M,mv=new M;class Ys extends ft{constructor(t){super({type:ft.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=M,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new Is({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new M),Ys.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)Gn.set(s[o][0],s[o][1],s[o][2]),e.vmult(Gn,Gn),t.vadd(Gn,Gn),n(Gn.x,Gn.y,Gn.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;ln[0].set(s.x,s.y,s.z),ln[1].set(-s.x,s.y,s.z),ln[2].set(-s.x,-s.y,s.z),ln[3].set(-s.x,-s.y,-s.z),ln[4].set(s.x,-s.y,-s.z),ln[5].set(s.x,s.y,-s.z),ln[6].set(-s.x,s.y,-s.z),ln[7].set(s.x,-s.y,s.z);const o=ln[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=ln[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,u=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),u>i.z&&(i.z=u),c<n.x&&(n.x=c),h<n.y&&(n.y=h),u<n.z&&(n.z=u)}}}const Gn=new M,ln=[new M,new M,new M,new M,new M,new M,new M,new M],Ia={DYNAMIC:1,STATIC:2,KINEMATIC:4},za={AWAKE:0,SLEEPY:1,SLEEPING:2};class lt extends kh{constructor(t){t===void 0&&(t={}),super(),this.id=lt.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new M,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new M,this.force=new M;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?lt.STATIC:lt.DYNAMIC,typeof t.type==typeof lt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=lt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new ee,this.initQuaternion=new ee,this.previousQuaternion=new ee,this.interpolatedQuaternion=new ee,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new M,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new nn,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new nn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new M(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new M(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new ze,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=Boolean(t.isTrigger),t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=lt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===lt.SLEEPING&&this.dispatchEvent(lt.wakeupEvent)}sleep(){this.sleepState=lt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===lt.AWAKE&&n<i?(this.sleepState=lt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(lt.sleepyEvent)):e===lt.SLEEPY&&n>i?this.wakeUp():e===lt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(lt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===lt.SLEEPING||this.type===lt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new M),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new M),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new M,s=new ee;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=gv,o=vv,a=this.quaternion,l=this.aabb,c=xv;for(let h=0;h!==i;h++){const u=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],o),u.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=_v,i=yv;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new M),this.type!==lt.DYNAMIC)return;this.sleepState===lt.SLEEPING&&this.wakeUp();const n=bv;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new M),this.type!==lt.DYNAMIC)return;const n=Mv,i=Sv;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===lt.DYNAMIC&&(this.sleepState===lt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new M),this.type!==lt.DYNAMIC)return;this.sleepState===lt.SLEEPING&&this.wakeUp();const n=e,i=Ev;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Tv;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new M),this.type!==lt.DYNAMIC)return;const n=Av,i=Cv;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=Lv;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Ys.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new M;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===lt.DYNAMIC||this.type===lt.KINEMATIC)||this.sleepState===lt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,u=this.invInertiaWorld,d=this.linearFactor,p=h*t;i.x+=a.x*p*d.x,i.y+=a.y*p*d.y,i.z+=a.z*p*d.z;const g=u.elements,m=this.angularFactor,f=l.x*m.x,v=l.y*m.y,x=l.z*m.z;s.x+=t*(g[0]*f+g[1]*v+g[2]*x),s.y+=t*(g[3]*f+g[4]*v+g[5]*x),s.z+=t*(g[6]*f+g[7]*v+g[8]*x),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}lt.idCounter=0;lt.COLLIDE_EVENT_NAME="collide";lt.DYNAMIC=Ia.DYNAMIC;lt.STATIC=Ia.STATIC;lt.KINEMATIC=Ia.KINEMATIC;lt.AWAKE=za.AWAKE;lt.SLEEPY=za.SLEEPY;lt.SLEEPING=za.SLEEPING;lt.wakeupEvent={type:"wakeup"};lt.sleepyEvent={type:"sleepy"};lt.sleepEvent={type:"sleep"};const gv=new M,vv=new ee,xv=new ze,_v=new nn,yv=new nn,wv=new nn,bv=new M,Mv=new M,Sv=new M,Ev=new M,Tv=new M,Av=new M,Cv=new M,Lv=new M;class Pv{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&lt.STATIC)!==0||t.sleepState===lt.SLEEPING)&&((e.type&lt.STATIC)!==0||e.sleepState===lt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=Rv;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=Dv,i=Iv,s=zv,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=s[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new M;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Rv=new M;new M;new ee;new M;const Dv={keys:[]},Iv=[],zv=[];new M;new M;new M;class Nv extends Pv{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class Vr{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let Gh,Wh,Vh,Hh,qh,Xh,jh;const Na={CLOSEST:1,ANY:2,ALL:4};Gh=ft.types.SPHERE;Wh=ft.types.PLANE;Vh=ft.types.BOX;Hh=ft.types.CYLINDER;qh=ft.types.CONVEXPOLYHEDRON;Xh=ft.types.HEIGHTFIELD;jh=ft.types.TRIMESH;class ae{get[Gh](){return this._intersectSphere}get[Wh](){return this._intersectPlane}get[Vh](){return this._intersectBox}get[Hh](){return this._intersectConvex}get[qh](){return this._intersectConvex}get[Xh](){return this._intersectHeightfield}get[jh](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new M),e===void 0&&(e=new M),this.from=t.clone(),this.to=e.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=ae.ANY,this.result=new Vr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||ae.ANY,this.result=e.result||new Vr,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Mc),Zo.length=0,t.broadphase.aabbQuery(t,Mc,Zo),this.intersectBodies(Zo),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=Fv,s=Ov;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(Jv(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,l=this.direction,c=new M(0,0,1);e.vmult(c,c);const h=new M;o.vsub(n,h);const u=h.dot(c);a.vsub(n,h);const d=h.dot(c);if(u*d>0||o.distanceTo(a)<u)return;const p=c.dot(l);if(Math.abs(p)<this.precision)return;const g=new M,m=new M,f=new M;o.vsub(n,g);const v=-c.dot(g)/p;l.scale(v,m),o.vadd(m,f),this.reportIntersection(c,f,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=Bv;o.from.copy(this.from),o.to.copy(this.to),Gt.pointToLocalFrame(n,e,o.from,o.from),Gt.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=Uv;let l,c,h,u;l=c=0,h=u=t.data.length-1;const d=new ze;o.getAABB(d),t.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(d.upperBound.x,d.upperBound.y,a,!0),h=Math.min(h,a[0]+1),u=Math.min(u,a[1]+1);for(let p=l;p<h;p++)for(let g=c;g<u;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(p,g,d),!!d.overlapsRay(o)){if(t.getConvexTrianglePillar(p,g,!1),Gt.pointToWorldFrame(n,e,t.pillarOffset,Er),this._intersectConvex(t.pillarConvex,e,Er,i,s,Sc),this.result.shouldStop)return;t.getConvexTrianglePillar(p,g,!0),Gt.pointToWorldFrame(n,e,t.pillarOffset,Er),this._intersectConvex(t.pillarConvex,e,Er,i,s,Sc)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),u=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,d=h**2-4*c*u,p=kv,g=Gv;if(!(d<0))if(d===0)o.lerp(a,d,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1);else{const m=(-h-Math.sqrt(d))/(2*c),f=(-h+Math.sqrt(d))/(2*c);if(m>=0&&m<=1&&(o.lerp(a,m,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1)),this.result.shouldStop)return;f>=0&&f<=1&&(o.lerp(a,f,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=Wv,l=Ec,c=o&&o.faceList||null,h=t.faces,u=t.vertices,d=t.faceNormals,p=this.direction,g=this.from,m=this.to,f=g.distanceTo(m),v=c?c.length:h.length,x=this.result;for(let _=0;!x.shouldStop&&_<v;_++){const w=c?c[_]:_,y=h[w],S=d[w],L=e,b=n;l.copy(u[y[0]]),L.vmult(l,l),l.vadd(b,l),l.vsub(g,l),L.vmult(S,a);const T=p.dot(a);if(Math.abs(T)<this.precision)continue;const I=a.dot(l)/T;if(!(I<0)){p.scale(I,Te),Te.vadd(g,Te),Qe.copy(u[y[0]]),L.vmult(Qe,Qe),b.vadd(Qe,Qe);for(let G=1;!x.shouldStop&&G<y.length-1;G++){cn.copy(u[y[G]]),hn.copy(u[y[G+1]]),L.vmult(cn,cn),L.vmult(hn,hn),b.vadd(cn,cn),b.vadd(hn,hn);const j=Te.distanceTo(g);!(ae.pointInTriangle(Te,Qe,cn,hn)||ae.pointInTriangle(Te,cn,Qe,hn))||j>f||this.reportIntersection(a,Te,s,i,w)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=Vv,l=$v,c=Zv,h=Ec,u=Hv,d=qv,p=Xv,g=Yv,m=jv,f=t.indices;t.vertices;const v=this.from,x=this.to,_=this.direction;c.position.copy(n),c.quaternion.copy(e),Gt.vectorToLocalFrame(n,e,_,u),Gt.pointToLocalFrame(n,e,v,d),Gt.pointToLocalFrame(n,e,x,p),p.x*=t.scale.x,p.y*=t.scale.y,p.z*=t.scale.z,d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,p.vsub(d,u),u.normalize();const w=d.distanceSquared(p);t.tree.rayQuery(this,c,l);for(let y=0,S=l.length;!this.result.shouldStop&&y!==S;y++){const L=l[y];t.getNormal(L,a),t.getVertex(f[L*3],Qe),Qe.vsub(d,h);const b=u.dot(a),T=a.dot(h)/b;if(T<0)continue;u.scale(T,Te),Te.vadd(d,Te),t.getVertex(f[L*3+1],cn),t.getVertex(f[L*3+2],hn);const I=Te.distanceSquared(d);!(ae.pointInTriangle(Te,cn,Qe,hn)||ae.pointInTriangle(Te,Qe,cn,hn))||I>w||(Gt.vectorToWorldFrame(e,a,m),Gt.pointToWorldFrame(n,e,Te,g),this.reportIntersection(m,g,s,i,L))}l.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case ae.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case ae.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case ae.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,si),n.vsub(e,ws),t.vsub(e,Jo);const s=si.dot(si),o=si.dot(ws),a=si.dot(Jo),l=ws.dot(ws),c=ws.dot(Jo);let h,u;return(h=l*a-o*c)>=0&&(u=s*c-o*a)>=0&&h+u<s*l-o*o}}ae.CLOSEST=Na.CLOSEST;ae.ANY=Na.ANY;ae.ALL=Na.ALL;const Mc=new ze,Zo=[],ws=new M,Jo=new M,Fv=new M,Ov=new ee,Te=new M,Qe=new M,cn=new M,hn=new M;new M;new Vr;const Sc={faceList:[0]},Er=new M,Bv=new ae,Uv=[],kv=new M,Gv=new M,Wv=new M;new M;new M;const Ec=new M,Vv=new M,Hv=new M,qv=new M,Xv=new M,jv=new M,Yv=new M;new ze;const $v=[],Zv=new Gt,si=new M,Tr=new M;function Jv(r,t,e){e.vsub(r,si);const n=si.dot(t);return t.scale(n,Tr),Tr.vadd(r,Tr),e.distanceTo(Tr)}class Yh{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class to{constructor(t,e,n){n===void 0&&(n={}),n=Yh.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=t,this.bodyB=e,this.id=to.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(t&&t.wakeUp(),e&&e.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){const t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!0}disable(){const t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!1}}to.idCounter=0;class Tc{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Ti{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Ti.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Tc,this.jacobianElementB=new Tc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,Ac),a.scale(h,Cc),n.invInertiaWorldSolve.vmult(o,Lc),i.invInertiaWorldSolve.vmult(l,Pc),t.multiplyVectors(Ac,Lc)+e.multiplyVectors(Cc,Pc)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+o;return a.vmult(t.rotational,Ar),c+=Ar.dot(t.rotational),l.vmult(e.rotational,Ar),c+=Ar.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=Kv;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Ti.idCounter=0;const Ac=new M,Cc=new M,Lc=new M,Pc=new M,Ar=new M,Kv=new M;class Or extends Ti{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,l=Qv,c=tx,h=i.velocity,u=i.angularVelocity;i.force,i.torque;const d=s.velocity,p=s.angularVelocity;s.force,s.torque;const g=ex,m=this.jacobianElementA,f=this.jacobianElementB,v=this.ni;o.cross(v,l),a.cross(v,c),v.negate(m.spatial),l.negate(m.rotational),f.spatial.copy(v),f.rotational.copy(c),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const x=v.dot(g),_=this.restitution+1,w=_*d.dot(v)-_*h.dot(v)+p.dot(c)-u.dot(l),y=this.computeGiMf();return-x*e-w*n-t*y}getImpactVelocityAlongNormal(){const t=nx,e=ix,n=sx,i=rx,s=ox;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const Qv=new M,tx=new M,ex=new M,nx=new M,ix=new M,sx=new M,rx=new M,ox=new M;class ax extends to{constructor(t,e,n,i,s){e===void 0&&(e=new M),i===void 0&&(i=new M),s===void 0&&(s=1e6),super(t,n),this.pivotA=e.clone(),this.pivotB=i.clone();const o=this.equationX=new Or(t,n),a=this.equationY=new Or(t,n),l=this.equationZ=new Or(t,n);this.equations.push(o,a,l),o.minForce=a.minForce=l.minForce=-s,o.maxForce=a.maxForce=l.maxForce=s,o.ni.set(1,0,0),a.ni.set(0,1,0),l.ni.set(0,0,1)}update(){const t=this.bodyA,e=this.bodyB,n=this.equationX,i=this.equationY,s=this.equationZ;t.quaternion.vmult(this.pivotA,n.ri),e.quaternion.vmult(this.pivotB,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj)}}new M;new M;class Rc extends Ti{constructor(t,e,n){n===void 0&&(n={});const i=typeof n.maxForce<"u"?n.maxForce:1e6;super(t,e,-i,i),this.axisA=n.axisA?n.axisA.clone():new M(1,0,0),this.axisB=n.axisB?n.axisB.clone():new M(0,1,0),this.maxAngle=Math.PI/2}computeB(t){const e=this.a,n=this.b,i=this.axisA,s=this.axisB,o=lx,a=cx,l=this.jacobianElementA,c=this.jacobianElementB;i.cross(s,o),s.cross(i,a),l.rotational.copy(a),c.rotational.copy(o);const h=Math.cos(this.maxAngle)-i.dot(s),u=this.computeGW(),d=this.computeGiMf();return-h*e-u*n-t*d}}const lx=new M,cx=new M;new M;new M;new M;new M;class hx extends Ti{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,-n,n),this.axisA=new M,this.axisB=new M,this.targetVelocity=0}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.axisA,i=this.axisB,s=this.jacobianElementA,o=this.jacobianElementB;s.rotational.copy(n),i.negate(o.rotational);const a=this.computeGW()-this.targetVelocity,l=this.computeGiMf();return-a*e-t*l}}class Cr extends ax{constructor(t,e,n){n===void 0&&(n={});const i=typeof n.maxForce<"u"?n.maxForce:1e6,s=n.pivotA?n.pivotA.clone():new M,o=n.pivotB?n.pivotB.clone():new M;super(t,s,e,o,i),(this.axisA=n.axisA?n.axisA.clone():new M(1,0,0)).normalize(),(this.axisB=n.axisB?n.axisB.clone():new M(1,0,0)).normalize(),this.collideConnected=!!n.collideConnected;const c=this.rotationalEquation1=new Rc(t,e,n),h=this.rotationalEquation2=new Rc(t,e,n),u=this.motorEquation=new hx(t,e,i);u.enabled=!1,this.equations.push(c,h,u)}enableMotor(){this.motorEquation.enabled=!0}disableMotor(){this.motorEquation.enabled=!1}setMotorSpeed(t){this.motorEquation.targetVelocity=t}setMotorMaxForce(t){this.motorEquation.maxForce=t,this.motorEquation.minForce=-t}update(){const t=this.bodyA,e=this.bodyB,n=this.motorEquation,i=this.rotationalEquation1,s=this.rotationalEquation2,o=ux,a=dx,l=this.axisA,c=this.axisB;super.update(),t.quaternion.vmult(l,o),e.quaternion.vmult(c,a),o.tangents(i.axisA,s.axisA),i.axisB.copy(a),s.axisB.copy(a),this.motorEquation.enabled&&(t.quaternion.vmult(this.axisA,n.axisA),e.quaternion.vmult(this.axisB,n.axisB))}}const ux=new M,dx=new M;class Dc extends Ti{constructor(t,e,n){super(t,e,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=fx,o=px,a=this.t;n.cross(a,s),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),u=this.computeGiMf();return-h*e-t*u}}const fx=new M,px=new M;class eo{constructor(t,e,n){n=Yh.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=eo.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}eo.idCounter=0;class jn{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=jn.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}jn.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new ae;new M;new M;new M;new M(1,0,0),new M(0,1,0),new M(0,0,1);new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class Lr extends ft{constructor(t){if(super({type:ft.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new M);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const l=o[a];n[l]=t[l]-s,i[l]=t[l]+s}}}new M;new M;new M;new M;new M;new M;new M;new M;new M;class mx extends ft{constructor(){super({type:ft.types.PLANE}),this.worldNormal=new M,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new M),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){bn.set(0,0,1),e.vmult(bn,bn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),bn.x===1?i.x=t.x:bn.x===-1&&(n.x=t.x),bn.y===1?i.y=t.y:bn.y===-1&&(n.y=t.y),bn.z===1?i.z=t.z:bn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const bn=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new ze;new M;new ze;new M;new M;new M;new M;new M;new M;new M;new ze;new M;new Gt;new ze;class gx{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class vx extends gx{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,h=t;let u,d,p,g,m,f;if(a!==0)for(let w=0;w!==c;w++)l[w].updateSolveMassProperties();const v=_x,x=yx,_=xx;v.length=a,x.length=a,_.length=a;for(let w=0;w!==a;w++){const y=o[w];_[w]=0,x[w]=y.computeB(h),v[w]=1/y.computeC()}if(a!==0){for(let S=0;S!==c;S++){const L=l[S],b=L.vlambda,T=L.wlambda;b.set(0,0,0),T.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let S=0;S!==a;S++){const L=o[S];u=x[S],d=v[S],f=_[S],m=L.computeGWlambda(),p=d*(u-m-L.eps*f),f+p<L.minForce?p=L.minForce-f:f+p>L.maxForce&&(p=L.maxForce-f),_[S]+=p,g+=p>0?p:-p,L.addToWlambda(p)}if(g*g<s)break}for(let S=0;S!==c;S++){const L=l[S],b=L.velocity,T=L.angularVelocity;L.vlambda.vmul(L.linearFactor,L.vlambda),b.vadd(L.vlambda,b),L.wlambda.vmul(L.angularFactor,L.wlambda),T.vadd(L.wlambda,T)}let w=o.length;const y=1/h;for(;w--;)o[w].multiplier=_[w]*y}return n}}const xx=[],_x=[],yx=[];lt.STATIC;class wx{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class bx extends wx{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const $t={sphereSphere:ft.types.SPHERE,spherePlane:ft.types.SPHERE|ft.types.PLANE,boxBox:ft.types.BOX|ft.types.BOX,sphereBox:ft.types.SPHERE|ft.types.BOX,planeBox:ft.types.PLANE|ft.types.BOX,convexConvex:ft.types.CONVEXPOLYHEDRON,sphereConvex:ft.types.SPHERE|ft.types.CONVEXPOLYHEDRON,planeConvex:ft.types.PLANE|ft.types.CONVEXPOLYHEDRON,boxConvex:ft.types.BOX|ft.types.CONVEXPOLYHEDRON,sphereHeightfield:ft.types.SPHERE|ft.types.HEIGHTFIELD,boxHeightfield:ft.types.BOX|ft.types.HEIGHTFIELD,convexHeightfield:ft.types.CONVEXPOLYHEDRON|ft.types.HEIGHTFIELD,sphereParticle:ft.types.PARTICLE|ft.types.SPHERE,planeParticle:ft.types.PLANE|ft.types.PARTICLE,boxParticle:ft.types.BOX|ft.types.PARTICLE,convexParticle:ft.types.PARTICLE|ft.types.CONVEXPOLYHEDRON,cylinderCylinder:ft.types.CYLINDER,sphereCylinder:ft.types.SPHERE|ft.types.CYLINDER,planeCylinder:ft.types.PLANE|ft.types.CYLINDER,boxCylinder:ft.types.BOX|ft.types.CYLINDER,convexCylinder:ft.types.CONVEXPOLYHEDRON|ft.types.CYLINDER,heightfieldCylinder:ft.types.HEIGHTFIELD|ft.types.CYLINDER,particleCylinder:ft.types.PARTICLE|ft.types.CYLINDER,sphereTrimesh:ft.types.SPHERE|ft.types.TRIMESH,planeTrimesh:ft.types.PLANE|ft.types.TRIMESH};class Mx{get[$t.sphereSphere](){return this.sphereSphere}get[$t.spherePlane](){return this.spherePlane}get[$t.boxBox](){return this.boxBox}get[$t.sphereBox](){return this.sphereBox}get[$t.planeBox](){return this.planeBox}get[$t.convexConvex](){return this.convexConvex}get[$t.sphereConvex](){return this.sphereConvex}get[$t.planeConvex](){return this.planeConvex}get[$t.boxConvex](){return this.boxConvex}get[$t.sphereHeightfield](){return this.sphereHeightfield}get[$t.boxHeightfield](){return this.boxHeightfield}get[$t.convexHeightfield](){return this.convexHeightfield}get[$t.sphereParticle](){return this.sphereParticle}get[$t.planeParticle](){return this.planeParticle}get[$t.boxParticle](){return this.boxParticle}get[$t.convexParticle](){return this.convexParticle}get[$t.cylinderCylinder](){return this.convexConvex}get[$t.sphereCylinder](){return this.sphereConvex}get[$t.planeCylinder](){return this.planeConvex}get[$t.boxCylinder](){return this.boxConvex}get[$t.convexCylinder](){return this.convexConvex}get[$t.heightfieldCylinder](){return this.heightfieldCylinder}get[$t.particleCylinder](){return this.particleCylinder}get[$t.sphereTrimesh](){return this.sphereTrimesh}get[$t.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new bx,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new Or(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,u=o.material||i.material;if(h&&u&&h.friction>=0&&u.friction>=0&&(c=h.friction*u.friction),c>0){const d=c*(a.frictionGravity||a.gravity).length();let p=n.invMass+i.invMass;p>0&&(p=1/p);const g=this.frictionEquationPool,m=g.length?g.pop():new Dc(n,i,d*p),f=g.length?g.pop():new Dc(n,i,d*p);return m.bi=f.bi=n,m.bj=f.bj=i,m.minForce=f.minForce=-d*p,m.maxForce=f.maxForce=d*p,m.ri.copy(t.ri),m.rj.copy(t.rj),f.ri.copy(t.ri),f.rj.copy(t.rj),t.ni.tangents(m.t,f.t),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),f.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.enabled=f.enabled=t.enabled,e.push(m,f),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];ti.setZero(),Xi.setZero(),ji.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(ti.vadd(e.ni,ti),Xi.vadd(e.ri,Xi),ji.vadd(e.rj,ji)):(ti.vsub(e.ni,ti),Xi.vadd(e.rj,Xi),ji.vadd(e.ri,ji));const o=1/t;Xi.scale(o,n.ri),ji.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),ti.normalize(),ti.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=Tx,c=Ax,h=Sx,u=Ex;for(let d=0,p=t.length;d!==p;d++){const g=t[d],m=e[d];let f=null;g.material&&m.material&&(f=n.getContactMaterial(g.material,m.material)||null);const v=g.type&lt.KINEMATIC&&m.type&lt.STATIC||g.type&lt.STATIC&&m.type&lt.KINEMATIC||g.type&lt.KINEMATIC&&m.type&lt.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],l),g.quaternion.vmult(g.shapeOffsets[x],h),h.vadd(g.position,h);const _=g.shapes[x];for(let w=0;w<m.shapes.length;w++){m.quaternion.mult(m.shapeOrientations[w],c),m.quaternion.vmult(m.shapeOffsets[w],u),u.vadd(m.position,u);const y=m.shapes[w];if(!(_.collisionFilterMask&y.collisionFilterGroup&&y.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(u)>_.boundingSphereRadius+y.boundingSphereRadius)continue;let S=null;_.material&&y.material&&(S=n.getContactMaterial(_.material,y.material)||null),this.currentContactMaterial=S||f||n.defaultContactMaterial;const L=_.type|y.type,b=this[L];if(b){let T=!1;_.type<y.type?T=b.call(this,_,y,h,u,l,c,g,m,_,y,v):T=b.call(this,y,_,u,h,c,l,m,g,_,y,v),T&&v&&(n.shapeOverlapKeeper.set(_.id,y.id),n.bodyOverlapKeeper.set(g.id,m.id))}}}}}sphereSphere(t,e,n,i,s,o,a,l,c,h,u){if(u)return n.distanceSquared(i)<(t.radius+e.radius)**2;const d=this.createContactEquation(a,l,t,e,c,h);i.vsub(n,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(t.radius,d.ri),d.rj.scale(-e.radius,d.rj),d.ri.vadd(n,d.ri),d.ri.vsub(a.position,d.ri),d.rj.vadd(i,d.rj),d.rj.vsub(l.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,l,c,h,u){const d=this.createContactEquation(a,l,t,e,c,h);if(d.ni.set(0,0,1),o.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(t.radius,d.ri),n.vsub(i,Pr),d.ni.scale(d.ni.dot(Pr),Ic),Pr.vsub(Ic,d.rj),-Pr.dot(d.ni)<=t.radius){if(u)return!0;const p=d.ri,g=d.rj;p.vadd(n,p),p.vsub(a.position,p),g.vadd(i,g),g.vsub(l.position,g),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,u)}sphereBox(t,e,n,i,s,o,a,l,c,h,u){const d=this.v3pool,p=Qx;n.vsub(i,Rr),e.getSideNormals(p,o);const g=t.radius;let m=!1;const f=e_,v=n_,x=i_;let _=null,w=0,y=0,S=0,L=null;for(let B=0,Z=p.length;B!==Z&&m===!1;B++){const k=Zx;k.copy(p[B]);const z=k.length();k.normalize();const C=Rr.dot(k);if(C<z+g&&C>0){const H=Jx,q=Kx;H.copy(p[(B+1)%3]),q.copy(p[(B+2)%3]);const Y=H.length(),at=q.length();H.normalize(),q.normalize();const St=Rr.dot(H),Q=Rr.dot(q);if(St<Y&&St>-Y&&Q<at&&Q>-at){const Ut=Math.abs(C-z-g);if((L===null||Ut<L)&&(L=Ut,y=St,S=Q,_=z,f.copy(k),v.copy(H),x.copy(q),w++,u))return!0}}}if(w){m=!0;const B=this.createContactEquation(a,l,t,e,c,h);f.scale(-g,B.ri),B.ni.copy(f),B.ni.negate(B.ni),f.scale(_,f),v.scale(y,v),f.vadd(v,f),x.scale(S,x),f.vadd(x,B.rj),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),B.rj.vadd(i,B.rj),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}let b=d.get();const T=t_;for(let B=0;B!==2&&!m;B++)for(let Z=0;Z!==2&&!m;Z++)for(let k=0;k!==2&&!m;k++)if(b.set(0,0,0),B?b.vadd(p[0],b):b.vsub(p[0],b),Z?b.vadd(p[1],b):b.vsub(p[1],b),k?b.vadd(p[2],b):b.vsub(p[2],b),i.vadd(b,T),T.vsub(n,T),T.lengthSquared()<g*g){if(u)return!0;m=!0;const z=this.createContactEquation(a,l,t,e,c,h);z.ri.copy(T),z.ri.normalize(),z.ni.copy(z.ri),z.ri.scale(g,z.ri),z.rj.copy(b),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),z.rj.vadd(i,z.rj),z.rj.vsub(l.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}d.release(b),b=null;const I=d.get(),G=d.get(),j=d.get(),R=d.get(),P=d.get(),F=p.length;for(let B=0;B!==F&&!m;B++)for(let Z=0;Z!==F&&!m;Z++)if(B%3!==Z%3){p[Z].cross(p[B],I),I.normalize(),p[B].vadd(p[Z],G),j.copy(n),j.vsub(G,j),j.vsub(i,j);const k=j.dot(I);I.scale(k,R);let z=0;for(;z===B%3||z===Z%3;)z++;P.copy(n),P.vsub(R,P),P.vsub(G,P),P.vsub(i,P);const C=Math.abs(k),H=P.length();if(C<p[z].length()&&H<g){if(u)return!0;m=!0;const q=this.createContactEquation(a,l,t,e,c,h);G.vadd(R,q.rj),q.rj.copy(q.rj),P.negate(q.ni),q.ni.normalize(),q.ri.copy(q.rj),q.ri.vadd(i,q.ri),q.ri.vsub(n,q.ri),q.ri.normalize(),q.ri.scale(g,q.ri),q.ri.vadd(n,q.ri),q.ri.vsub(a.position,q.ri),q.rj.vadd(i,q.rj),q.rj.vsub(l.position,q.rj),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}}d.release(I,G,j,R,P)}planeBox(t,e,n,i,s,o,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,u)}convexConvex(t,e,n,i,s,o,a,l,c,h,u,d,p){const g=x_;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,g,d,p)){const m=[],f=__;t.clipAgainstHull(n,s,e,i,o,g,-100,100,m);let v=0;for(let x=0;x!==m.length;x++){if(u)return!0;const _=this.createContactEquation(a,l,t,e,c,h),w=_.ri,y=_.rj;g.negate(_.ni),m[x].normal.negate(f),f.scale(m[x].depth,f),m[x].point.vadd(f,w),y.copy(m[x].point),w.vsub(n,w),y.vsub(i,y),w.vadd(n,w),w.vsub(a.position,w),y.vadd(i,y),y.vsub(l.position,y),this.result.push(_),v++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&v&&this.createFrictionFromAverage(v)}}sphereConvex(t,e,n,i,s,o,a,l,c,h,u){const d=this.v3pool;n.vsub(i,s_);const p=e.faceNormals,g=e.faces,m=e.vertices,f=t.radius;let v=!1;for(let x=0;x!==m.length;x++){const _=m[x],w=l_;o.vmult(_,w),i.vadd(w,w);const y=a_;if(w.vsub(n,y),y.lengthSquared()<f*f){if(u)return!0;v=!0;const S=this.createContactEquation(a,l,t,e,c,h);S.ri.copy(y),S.ri.normalize(),S.ni.copy(S.ri),S.ri.scale(f,S.ri),w.vsub(i,S.rj),S.ri.vadd(n,S.ri),S.ri.vsub(a.position,S.ri),S.rj.vadd(i,S.rj),S.rj.vsub(l.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult);return}}for(let x=0,_=g.length;x!==_&&v===!1;x++){const w=p[x],y=g[x],S=c_;o.vmult(w,S);const L=h_;o.vmult(m[y[0]],L),L.vadd(i,L);const b=u_;S.scale(-f,b),n.vadd(b,b);const T=d_;b.vsub(L,T);const I=T.dot(S),G=f_;if(n.vsub(L,G),I<0&&G.dot(S)>0){const j=[];for(let R=0,P=y.length;R!==P;R++){const F=d.get();o.vmult(m[y[R]],F),i.vadd(F,F),j.push(F)}if($x(j,S,n)){if(u)return!0;v=!0;const R=this.createContactEquation(a,l,t,e,c,h);S.scale(-f,R.ri),S.negate(R.ni);const P=d.get();S.scale(-I,P);const F=d.get();S.scale(-f,F),n.vsub(i,R.rj),R.rj.vadd(F,R.rj),R.rj.vadd(P,R.rj),R.rj.vadd(i,R.rj),R.rj.vsub(l.position,R.rj),R.ri.vadd(n,R.ri),R.ri.vsub(a.position,R.ri),d.release(P),d.release(F),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult);for(let B=0,Z=j.length;B!==Z;B++)d.release(j[B]);return}else for(let R=0;R!==y.length;R++){const P=d.get(),F=d.get();o.vmult(m[y[(R+1)%y.length]],P),o.vmult(m[y[(R+2)%y.length]],F),i.vadd(P,P),i.vadd(F,F);const B=r_;F.vsub(P,B);const Z=o_;B.unit(Z);const k=d.get(),z=d.get();n.vsub(P,z);const C=z.dot(Z);Z.scale(C,k),k.vadd(P,k);const H=d.get();if(k.vsub(n,H),C>0&&C*C<B.lengthSquared()&&H.lengthSquared()<f*f){if(u)return!0;const q=this.createContactEquation(a,l,t,e,c,h);k.vsub(i,q.rj),k.vsub(n,q.ni),q.ni.normalize(),q.ni.scale(f,q.ri),q.rj.vadd(i,q.rj),q.rj.vsub(l.position,q.rj),q.ri.vadd(n,q.ri),q.ri.vsub(a.position,q.ri),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult);for(let Y=0,at=j.length;Y!==at;Y++)d.release(j[Y]);d.release(P),d.release(F),d.release(k),d.release(H),d.release(z);return}d.release(P),d.release(F),d.release(k),d.release(H),d.release(z)}for(let R=0,P=j.length;R!==P;R++)d.release(j[R])}}}planeConvex(t,e,n,i,s,o,a,l,c,h,u){const d=p_,p=m_;p.set(0,0,1),s.vmult(p,p);let g=0;const m=g_;for(let f=0;f!==e.vertices.length;f++)if(d.copy(e.vertices[f]),o.vmult(d,d),i.vadd(d,d),d.vsub(n,m),p.dot(m)<=0){if(u)return!0;const x=this.createContactEquation(a,l,t,e,c,h),_=v_;p.scale(p.dot(m),_),d.vsub(_,_),_.vsub(n,x.ri),x.ni.copy(p),d.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(l.position,x.rj),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,u)}sphereHeightfield(t,e,n,i,s,o,a,l,c,h,u){const d=e.data,p=t.radius,g=e.elementSize,m=R_,f=P_;Gt.pointToLocalFrame(i,o,n,f);let v=Math.floor((f.x-p)/g)-1,x=Math.ceil((f.x+p)/g)+1,_=Math.floor((f.y-p)/g)-1,w=Math.ceil((f.y+p)/g)+1;if(x<0||w<0||v>d.length||_>d[0].length)return;v<0&&(v=0),x<0&&(x=0),_<0&&(_=0),w<0&&(w=0),v>=d.length&&(v=d.length-1),x>=d.length&&(x=d.length-1),w>=d[0].length&&(w=d[0].length-1),_>=d[0].length&&(_=d[0].length-1);const y=[];e.getRectMinMax(v,_,x,w,y);const S=y[0],L=y[1];if(f.z-p>L||f.z+p<S)return;const b=this.result;for(let T=v;T<x;T++)for(let I=_;I<w;I++){const G=b.length;let j=!1;if(e.getConvexTrianglePillar(T,I,!1),Gt.pointToWorldFrame(i,o,e.pillarOffset,m),n.distanceTo(m)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(j=this.sphereConvex(t,e.pillarConvex,n,m,s,o,a,l,t,e,u)),u&&j||(e.getConvexTrianglePillar(T,I,!0),Gt.pointToWorldFrame(i,o,e.pillarOffset,m),n.distanceTo(m)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(j=this.sphereConvex(t,e.pillarConvex,n,m,s,o,a,l,t,e,u)),u&&j))return!0;if(b.length-G>2)return}}boxHeightfield(t,e,n,i,s,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,u)}convexHeightfield(t,e,n,i,s,o,a,l,c,h,u){const d=e.data,p=e.elementSize,g=t.boundingSphereRadius,m=C_,f=L_,v=A_;Gt.pointToLocalFrame(i,o,n,v);let x=Math.floor((v.x-g)/p)-1,_=Math.ceil((v.x+g)/p)+1,w=Math.floor((v.y-g)/p)-1,y=Math.ceil((v.y+g)/p)+1;if(_<0||y<0||x>d.length||w>d[0].length)return;x<0&&(x=0),_<0&&(_=0),w<0&&(w=0),y<0&&(y=0),x>=d.length&&(x=d.length-1),_>=d.length&&(_=d.length-1),y>=d[0].length&&(y=d[0].length-1),w>=d[0].length&&(w=d[0].length-1);const S=[];e.getRectMinMax(x,w,_,y,S);const L=S[0],b=S[1];if(!(v.z-g>b||v.z+g<L))for(let T=x;T<_;T++)for(let I=w;I<y;I++){let G=!1;if(e.getConvexTrianglePillar(T,I,!1),Gt.pointToWorldFrame(i,o,e.pillarOffset,m),n.distanceTo(m)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.convexConvex(t,e.pillarConvex,n,m,s,o,a,l,null,null,u,f,null)),u&&G||(e.getConvexTrianglePillar(T,I,!0),Gt.pointToWorldFrame(i,o,e.pillarOffset,m),n.distanceTo(m)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.convexConvex(t,e.pillarConvex,n,m,s,o,a,l,null,null,u,f,null)),u&&G))return!0}}sphereParticle(t,e,n,i,s,o,a,l,c,h,u){const d=M_;if(d.set(0,0,1),i.vsub(n,d),d.lengthSquared()<=t.radius*t.radius){if(u)return!0;const g=this.createContactEquation(l,a,e,t,c,h);d.normalize(),g.rj.copy(d),g.rj.scale(t.radius,g.rj),g.ni.copy(d),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,l,c,h,u){const d=y_;d.set(0,0,1),a.quaternion.vmult(d,d);const p=w_;if(i.vsub(a.position,p),d.dot(p)<=0){if(u)return!0;const m=this.createContactEquation(l,a,e,t,c,h);m.ni.copy(d),m.ni.negate(m.ni),m.ri.set(0,0,0);const f=b_;d.scale(d.dot(i),f),i.vsub(f,f),m.rj.copy(f),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,u)}convexParticle(t,e,n,i,s,o,a,l,c,h,u){let d=-1;const p=E_,g=T_;let m=null;const f=S_;if(f.copy(i),f.vsub(n,f),s.conjugate(zc),zc.vmult(f,f),t.pointIsInside(f)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let v=0,x=t.faces.length;v!==x;v++){const _=[t.worldVertices[t.faces[v][0]]],w=t.worldFaceNormals[v];i.vsub(_[0],Nc);const y=-w.dot(Nc);if(m===null||Math.abs(y)<Math.abs(m)){if(u)return!0;m=y,d=v,p.copy(w)}}if(d!==-1){const v=this.createContactEquation(l,a,e,t,c,h);p.scale(m,g),g.vadd(i,g),g.vsub(n,g),v.rj.copy(g),p.negate(v.ni),v.ri.set(0,0,0);const x=v.ri,_=v.rj;x.vadd(i,x),x.vsub(l.position,x),_.vadd(n,_),_.vsub(a.position,_),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,l,c,h,u){return this.convexHeightfield(e,t,i,n,o,s,l,a,c,h,u)}particleCylinder(t,e,n,i,s,o,a,l,c,h,u){return this.convexParticle(e,t,i,n,o,s,l,a,c,h,u)}sphereTrimesh(t,e,n,i,s,o,a,l,c,h,u){const d=Nx,p=Fx,g=Ox,m=Bx,f=Ux,v=kx,x=Hx,_=zx,w=Dx,y=qx;Gt.pointToLocalFrame(i,o,n,f);const S=t.radius;x.lowerBound.set(f.x-S,f.y-S,f.z-S),x.upperBound.set(f.x+S,f.y+S,f.z+S),e.getTrianglesInAABB(x,y);const L=Ix,b=t.radius*t.radius;for(let R=0;R<y.length;R++)for(let P=0;P<3;P++)if(e.getVertex(e.indices[y[R]*3+P],L),L.vsub(f,w),w.lengthSquared()<=b){if(_.copy(L),Gt.pointToWorldFrame(i,o,_,L),L.vsub(n,w),u)return!0;let F=this.createContactEquation(a,l,t,e,c,h);F.ni.copy(w),F.ni.normalize(),F.ri.copy(F.ni),F.ri.scale(t.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.copy(L),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}for(let R=0;R<y.length;R++)for(let P=0;P<3;P++){e.getVertex(e.indices[y[R]*3+P],d),e.getVertex(e.indices[y[R]*3+(P+1)%3],p),p.vsub(d,g),f.vsub(p,v);const F=v.dot(g);f.vsub(d,v);let B=v.dot(g);if(B>0&&F<0&&(f.vsub(d,v),m.copy(g),m.normalize(),B=v.dot(m),m.scale(B,v),v.vadd(d,v),v.distanceTo(f)<t.radius)){if(u)return!0;const k=this.createContactEquation(a,l,t,e,c,h);v.vsub(f,k.ni),k.ni.normalize(),k.ni.scale(t.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(a.position,k.ri),Gt.pointToWorldFrame(i,o,v,v),v.vsub(l.position,k.rj),Gt.vectorToWorldFrame(o,k.ni,k.ni),Gt.vectorToWorldFrame(o,k.ri,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}const T=Gx,I=Wx,G=Vx,j=Rx;for(let R=0,P=y.length;R!==P;R++){e.getTriangleVertices(y[R],T,I,G),e.getNormal(y[R],j),f.vsub(T,v);let F=v.dot(j);if(j.scale(F,v),f.vsub(v,v),F=v.distanceTo(f),ae.pointInTriangle(v,T,I,G)&&F<t.radius){if(u)return!0;let B=this.createContactEquation(a,l,t,e,c,h);v.vsub(f,B.ni),B.ni.normalize(),B.ni.scale(t.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),Gt.pointToWorldFrame(i,o,v,v),v.vsub(l.position,B.rj),Gt.vectorToWorldFrame(o,B.ni,B.ni),Gt.vectorToWorldFrame(o,B.ri,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}}y.length=0}planeTrimesh(t,e,n,i,s,o,a,l,c,h,u){const d=new M,p=Cx;p.set(0,0,1),s.vmult(p,p);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,d);const m=new M;m.copy(d),Gt.pointToWorldFrame(i,o,m,d);const f=Lx;if(d.vsub(n,f),p.dot(f)<=0){if(u)return!0;const x=this.createContactEquation(a,l,t,e,c,h);x.ni.copy(p);const _=Px;p.scale(f.dot(p),_),d.vsub(_,_),x.ri.copy(_),x.ri.vsub(a.position,x.ri),x.rj.copy(d),x.rj.vsub(l.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const ti=new M,Xi=new M,ji=new M,Sx=new M,Ex=new M,Tx=new ee,Ax=new ee,Cx=new M,Lx=new M,Px=new M,Rx=new M,Dx=new M;new M;const Ix=new M,zx=new M,Nx=new M,Fx=new M,Ox=new M,Bx=new M,Ux=new M,kx=new M,Gx=new M,Wx=new M,Vx=new M,Hx=new ze,qx=[],Pr=new M,Ic=new M,Xx=new M,jx=new M,Yx=new M;function $x(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=Xx;r[(s+1)%i].vsub(o,a);const l=jx;a.cross(t,l);const c=Yx;e.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const Rr=new M,Zx=new M,Jx=new M,Kx=new M,Qx=[new M,new M,new M,new M,new M,new M],t_=new M,e_=new M,n_=new M,i_=new M,s_=new M,r_=new M,o_=new M,a_=new M,l_=new M,c_=new M,h_=new M,u_=new M,d_=new M,f_=new M;new M;new M;const p_=new M,m_=new M,g_=new M,v_=new M,x_=new M,__=new M,y_=new M,w_=new M,b_=new M,M_=new M,zc=new ee,S_=new M;new M;const E_=new M,Nc=new M,T_=new M,A_=new M,C_=new M,L_=[0],P_=new M,R_=new M;class Fc{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||Oc(t,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||Oc(e,h)}}}function Oc(r,t){r.push((t&4294901760)>>16,t&65535)}const Ko=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class D_{constructor(){this.data={keys:[]}}get(t,e){const n=Ko(t,e);return this.data[n]}set(t,e,n){const i=Ko(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Ko(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class I_ extends kh{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Nv,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new vx,this.constraints=[],this.narrowphase=new Mx(this),this.collisionMatrix=new wc,this.collisionMatrixPrevious=new wc,this.bodyOverlapKeeper=new Fc,this.shapeOverlapKeeper=new Fc,this.contactmaterials=[],this.contactMaterialTable=new D_,this.defaultMaterial=new jn("default"),this.defaultContactMaterial=new eo(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Vr?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=ae.ALL,n.from=t,n.to=e,n.callback=i,Qo.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=ae.ANY,n.from=t,n.to=e,n.result=i,Qo.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=ae.CLOSEST,n.from=t,n.to=e,n.result=i,Qo.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof lt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=ue.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=ue.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(ue.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=B_,i=U_,s=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,u=lt.DYNAMIC;let d=-1/0;const p=this.constraints,g=O_;l.length();const m=l.x,f=l.y,v=l.z;let x=0;for(c&&(d=ue.now()),x=0;x!==s;x++){const R=o[x];if(R.type===u){const P=R.force,F=R.mass;P.x+=F*m,P.y+=F*f,P.z+=F*v}}for(let R=0,P=this.subsystems.length;R!==P;R++)this.subsystems[R].update();c&&(d=ue.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=ue.now()-d);let _=p.length;for(x=0;x!==_;x++){const R=p[x];if(!R.collideConnected)for(let P=n.length-1;P>=0;P-=1)(R.bodyA===n[P]&&R.bodyB===i[P]||R.bodyB===n[P]&&R.bodyA===i[P])&&(n.splice(P,1),i.splice(P,1))}this.collisionMatrixTick(),c&&(d=ue.now());const w=F_,y=e.length;for(x=0;x!==y;x++)w.push(e[x]);e.length=0;const S=this.frictionEquations.length;for(x=0;x!==S;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,w,this.frictionEquations,g),c&&(h.narrowphase=ue.now()-d),c&&(d=ue.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);const L=e.length;for(let R=0;R!==L;R++){const P=e[R],F=P.bi,B=P.bj,Z=P.si,k=P.sj;let z;if(F.material&&B.material?z=this.getContactMaterial(F.material,B.material)||this.defaultContactMaterial:z=this.defaultContactMaterial,z.friction,F.material&&B.material&&(F.material.friction>=0&&B.material.friction>=0&&F.material.friction*B.material.friction,F.material.restitution>=0&&B.material.restitution>=0&&(P.restitution=F.material.restitution*B.material.restitution)),a.addEquation(P),F.allowSleep&&F.type===lt.DYNAMIC&&F.sleepState===lt.SLEEPING&&B.sleepState===lt.AWAKE&&B.type!==lt.STATIC){const C=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),H=B.sleepSpeedLimit**2;C>=H*2&&(F.wakeUpAfterNarrowphase=!0)}if(B.allowSleep&&B.type===lt.DYNAMIC&&B.sleepState===lt.SLEEPING&&F.sleepState===lt.AWAKE&&F.type!==lt.STATIC){const C=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),H=F.sleepSpeedLimit**2;C>=H*2&&(B.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(F,B,!0),this.collisionMatrixPrevious.get(F,B)||(bs.body=B,bs.contact=P,F.dispatchEvent(bs),bs.body=F,B.dispatchEvent(bs)),this.bodyOverlapKeeper.set(F.id,B.id),this.shapeOverlapKeeper.set(Z.id,k.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=ue.now()-d,d=ue.now()),x=0;x!==s;x++){const R=o[x];R.wakeUpAfterNarrowphase&&(R.wakeUp(),R.wakeUpAfterNarrowphase=!1)}for(_=p.length,x=0;x!==_;x++){const R=p[x];R.update();for(let P=0,F=R.equations.length;P!==F;P++){const B=R.equations[P];a.addEquation(B)}}a.solve(t,this),c&&(h.solve=ue.now()-d),a.removeAllEquations();const b=Math.pow;for(x=0;x!==s;x++){const R=o[x];if(R.type&u){const P=b(1-R.linearDamping,t),F=R.velocity;F.scale(P,F);const B=R.angularVelocity;if(B){const Z=b(1-R.angularDamping,t);B.scale(Z,B)}}}this.dispatchEvent(N_),c&&(d=ue.now());const I=this.stepnumber%(this.quatNormalizeSkip+1)===0,G=this.quatNormalizeFast;for(x=0;x!==s;x++)o[x].integrate(t,I,G);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=ue.now()-d),this.stepnumber+=1,this.dispatchEvent(z_);let j=!0;if(this.allowSleep)for(j=!1,x=0;x!==s;x++){const R=o[x];R.sleepTick(this.time),R.sleepState!==lt.SLEEPING&&(j=!0)}this.hasActiveBodies=j}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Mn,Sn),t){for(let s=0,o=Mn.length;s<o;s+=2)Ms.bodyA=this.getBodyById(Mn[s]),Ms.bodyB=this.getBodyById(Mn[s+1]),this.dispatchEvent(Ms);Ms.bodyA=Ms.bodyB=null}if(e){for(let s=0,o=Sn.length;s<o;s+=2)Ss.bodyA=this.getBodyById(Sn[s]),Ss.bodyB=this.getBodyById(Sn[s+1]),this.dispatchEvent(Ss);Ss.bodyA=Ss.bodyB=null}Mn.length=Sn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Mn,Sn),n){for(let s=0,o=Mn.length;s<o;s+=2){const a=this.getShapeById(Mn[s]),l=this.getShapeById(Mn[s+1]);En.shapeA=a,En.shapeB=l,a&&(En.bodyA=a.body),l&&(En.bodyB=l.body),this.dispatchEvent(En)}En.bodyA=En.bodyB=En.shapeA=En.shapeB=null}if(i){for(let s=0,o=Sn.length;s<o;s+=2){const a=this.getShapeById(Sn[s]),l=this.getShapeById(Sn[s+1]);Tn.shapeA=a,Tn.shapeB=l,a&&(Tn.bodyA=a.body),l&&(Tn.bodyB=l.body),this.dispatchEvent(Tn)}Tn.bodyA=Tn.bodyB=Tn.shapeA=Tn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new ze;const Qo=new ae,ue=globalThis.performance||{};if(!ue.now){let r=Date.now();ue.timing&&ue.timing.navigationStart&&(r=ue.timing.navigationStart),ue.now=()=>Date.now()-r}new M;const z_={type:"postStep"},N_={type:"preStep"},bs={type:lt.COLLIDE_EVENT_NAME,body:null,contact:null},F_=[],O_=[],B_=[],U_=[],Mn=[],Sn=[],Ms={type:"beginContact",bodyA:null,bodyB:null},Ss={type:"endContact",bodyA:null,bodyB:null},En={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Tn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Bc={type:"change"},ta={type:"start"},Uc={type:"end"};class k_ extends Si{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pi.ROTATE,MIDDLE:Pi.DOLLY,RIGHT:Pi.PAN},this.touches={ONE:Ri.ROTATE,TWO:Ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",Fe),this._domElementKeyEvents=N},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Bc),n.update(),s=i.NONE},this.update=function(){const N=new O,W=new _i().setFromUnitVectors(t.up,new O(0,1,0)),ut=W.clone().invert(),pt=new O,ht=new _i,xt=2*Math.PI;return function(){const Ft=n.object.position;N.copy(Ft).sub(n.target),N.applyQuaternion(W),a.setFromVector3(N),n.autoRotate&&s===i.NONE&&T(L()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Bt=n.minAzimuthAngle,Yt=n.maxAzimuthAngle;return isFinite(Bt)&&isFinite(Yt)&&(Bt<-Math.PI?Bt+=xt:Bt>Math.PI&&(Bt-=xt),Yt<-Math.PI?Yt+=xt:Yt>Math.PI&&(Yt-=xt),Bt<=Yt?a.theta=Math.max(Bt,Math.min(Yt,a.theta)):a.theta=a.theta>(Bt+Yt)/2?Math.max(Bt,a.theta):Math.min(Yt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),N.setFromSpherical(a),N.applyQuaternion(ut),Ft.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,u||pt.distanceToSquared(n.object.position)>o||8*(1-ht.dot(n.object.quaternion))>o?(n.dispatchEvent(Bc),pt.copy(n.object.position),ht.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",$),n.domElement.removeEventListener("pointerdown",se),n.domElement.removeEventListener("pointercancel",Ce),n.domElement.removeEventListener("wheel",Ne),n.domElement.removeEventListener("pointermove",pe),n.domElement.removeEventListener("pointerup",le),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Fe)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new gc,l=new gc;let c=1;const h=new O;let u=!1;const d=new ot,p=new ot,g=new ot,m=new ot,f=new ot,v=new ot,x=new ot,_=new ot,w=new ot,y=[],S={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function b(){return Math.pow(.95,n.zoomSpeed)}function T(N){l.theta-=N}function I(N){l.phi-=N}const G=function(){const N=new O;return function(ut,pt){N.setFromMatrixColumn(pt,0),N.multiplyScalar(-ut),h.add(N)}}(),j=function(){const N=new O;return function(ut,pt){n.screenSpacePanning===!0?N.setFromMatrixColumn(pt,1):(N.setFromMatrixColumn(pt,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(ut),h.add(N)}}(),R=function(){const N=new O;return function(ut,pt){const ht=n.domElement;if(n.object.isPerspectiveCamera){const xt=n.object.position;N.copy(xt).sub(n.target);let gt=N.length();gt*=Math.tan(n.object.fov/2*Math.PI/180),G(2*ut*gt/ht.clientHeight,n.object.matrix),j(2*pt*gt/ht.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(G(ut*(n.object.right-n.object.left)/n.object.zoom/ht.clientWidth,n.object.matrix),j(pt*(n.object.top-n.object.bottom)/n.object.zoom/ht.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function P(N){n.object.isPerspectiveCamera?c/=N:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*N)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(N){n.object.isPerspectiveCamera?c*=N:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/N)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(N){d.set(N.clientX,N.clientY)}function Z(N){x.set(N.clientX,N.clientY)}function k(N){m.set(N.clientX,N.clientY)}function z(N){p.set(N.clientX,N.clientY),g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const W=n.domElement;T(2*Math.PI*g.x/W.clientHeight),I(2*Math.PI*g.y/W.clientHeight),d.copy(p),n.update()}function C(N){_.set(N.clientX,N.clientY),w.subVectors(_,x),w.y>0?P(b()):w.y<0&&F(b()),x.copy(_),n.update()}function H(N){f.set(N.clientX,N.clientY),v.subVectors(f,m).multiplyScalar(n.panSpeed),R(v.x,v.y),m.copy(f),n.update()}function q(N){N.deltaY<0?F(b()):N.deltaY>0&&P(b()),n.update()}function Y(N){let W=!1;switch(N.code){case n.keys.UP:R(0,n.keyPanSpeed),W=!0;break;case n.keys.BOTTOM:R(0,-n.keyPanSpeed),W=!0;break;case n.keys.LEFT:R(n.keyPanSpeed,0),W=!0;break;case n.keys.RIGHT:R(-n.keyPanSpeed,0),W=!0;break}W&&(N.preventDefault(),n.update())}function at(){if(y.length===1)d.set(y[0].pageX,y[0].pageY);else{const N=.5*(y[0].pageX+y[1].pageX),W=.5*(y[0].pageY+y[1].pageY);d.set(N,W)}}function St(){if(y.length===1)m.set(y[0].pageX,y[0].pageY);else{const N=.5*(y[0].pageX+y[1].pageX),W=.5*(y[0].pageY+y[1].pageY);m.set(N,W)}}function Q(){const N=y[0].pageX-y[1].pageX,W=y[0].pageY-y[1].pageY,ut=Math.sqrt(N*N+W*W);x.set(0,ut)}function Ut(){n.enableZoom&&Q(),n.enablePan&&St()}function Tt(){n.enableZoom&&Q(),n.enableRotate&&at()}function At(N){if(y.length==1)p.set(N.pageX,N.pageY);else{const ut=Et(N),pt=.5*(N.pageX+ut.x),ht=.5*(N.pageY+ut.y);p.set(pt,ht)}g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const W=n.domElement;T(2*Math.PI*g.x/W.clientHeight),I(2*Math.PI*g.y/W.clientHeight),d.copy(p)}function mt(N){if(y.length===1)f.set(N.pageX,N.pageY);else{const W=Et(N),ut=.5*(N.pageX+W.x),pt=.5*(N.pageY+W.y);f.set(ut,pt)}v.subVectors(f,m).multiplyScalar(n.panSpeed),R(v.x,v.y),m.copy(f)}function Xt(N){const W=Et(N),ut=N.pageX-W.x,pt=N.pageY-W.y,ht=Math.sqrt(ut*ut+pt*pt);_.set(0,ht),w.set(0,Math.pow(_.y/x.y,n.zoomSpeed)),P(w.y),x.copy(_)}function Rt(N){n.enableZoom&&Xt(N),n.enablePan&&mt(N)}function bt(N){n.enableZoom&&Xt(N),n.enableRotate&&At(N)}function se(N){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",pe),n.domElement.addEventListener("pointerup",le)),nt(N),N.pointerType==="touch"?D(N):ce(N))}function pe(N){n.enabled!==!1&&(N.pointerType==="touch"?E(N):jt(N))}function le(N){st(N),y.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",pe),n.domElement.removeEventListener("pointerup",le)),n.dispatchEvent(Uc),s=i.NONE}function Ce(N){st(N)}function ce(N){let W;switch(N.button){case 0:W=n.mouseButtons.LEFT;break;case 1:W=n.mouseButtons.MIDDLE;break;case 2:W=n.mouseButtons.RIGHT;break;default:W=-1}switch(W){case Pi.DOLLY:if(n.enableZoom===!1)return;Z(N),s=i.DOLLY;break;case Pi.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;k(N),s=i.PAN}else{if(n.enableRotate===!1)return;B(N),s=i.ROTATE}break;case Pi.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;B(N),s=i.ROTATE}else{if(n.enablePan===!1)return;k(N),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ta)}function jt(N){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;z(N);break;case i.DOLLY:if(n.enableZoom===!1)return;C(N);break;case i.PAN:if(n.enablePan===!1)return;H(N);break}}function Ne(N){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(N.preventDefault(),n.dispatchEvent(ta),q(N),n.dispatchEvent(Uc))}function Fe(N){n.enabled===!1||n.enablePan===!1||Y(N)}function D(N){switch(ct(N),y.length){case 1:switch(n.touches.ONE){case Ri.ROTATE:if(n.enableRotate===!1)return;at(),s=i.TOUCH_ROTATE;break;case Ri.PAN:if(n.enablePan===!1)return;St(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Ri.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ut(),s=i.TOUCH_DOLLY_PAN;break;case Ri.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Tt(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ta)}function E(N){switch(ct(N),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;At(N),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;mt(N),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Rt(N),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;bt(N),n.update();break;default:s=i.NONE}}function $(N){n.enabled!==!1&&N.preventDefault()}function nt(N){y.push(N)}function st(N){delete S[N.pointerId];for(let W=0;W<y.length;W++)if(y[W].pointerId==N.pointerId){y.splice(W,1);return}}function ct(N){let W=S[N.pointerId];W===void 0&&(W=new ot,S[N.pointerId]=W),W.set(N.pageX,N.pageY)}function Et(N){const W=N.pointerId===y[0].pointerId?y[1]:y[0];return S[W.pointerId]}n.domElement.addEventListener("contextmenu",$),n.domElement.addEventListener("pointerdown",se),n.domElement.addEventListener("pointercancel",Ce),n.domElement.addEventListener("wheel",Ne,{passive:!1}),this.update()}}class no{constructor(){this.meshes=[],this.bodies=[],this.constraints=[]}syncMeshesToBodies(){this.meshes.forEach((t,e)=>{t.position.x=this.bodies[e].position.x,t.position.y=this.bodies[e].position.y,t.position.z=this.bodies[e].position.z,t.quaternion.x=this.bodies[e].quaternion.x,t.quaternion.y=this.bodies[e].quaternion.y,t.quaternion.z=this.bodies[e].quaternion.z,t.quaternion.w=this.bodies[e].quaternion.w})}}class G_ extends no{constructor(t,e,n,i,s,o,a,l=1,c=.05,h=.1){super(),this.bodies.push(new lt({mass:l,position:new M(t,e,n),shape:new Ys(new M(i/2,s/2,o/2)),material:new jn({friction:c,restitution:h})}));let u=new Jt(new Xn(i,s,o),a);u.castShadow=!0,u.receiveShadow=!0,u.translateX(t),u.translateY(e),u.translateZ(n),this.meshes.push(u)}rotateY(t){this.bodies[0].quaternion.setFromAxisAngle(new M(0,1,0),t),this.meshes[0].rotateY(t)}}function rn(r,t){this.current=r,this.next=t,this._inNormal=this.inwardsNormal(),this._outNormal=this.outwardsNormal()}rn.prototype.outwardsNormal=function(){var r=this.inwardsNormal();return[-r[0],-r[1]]};rn.prototype.inwardsNormal=function(){var r=this.next[0]-this.current[0],t=this.next[1]-this.current[1],e=Math.sqrt(r*r+t*t);if(e===0)throw new Error("Vertices overlap");return[-t/e,r/e]};rn.prototype.offset=function(r,t){return rn.offsetEdge(this.current,this.next,r,t)};rn.prototype.inverseOffset=function(r,t){return rn.offsetEdge(this.next,this.current,r,t)};rn.offsetEdge=function(r,t,e,n){return new rn([r[0]+e,r[1]+n],[t[0]+e,t[1]+n])};rn.prototype.inverse=function(){return new rn(this.next,this.current)};var W_=rn,$h={exports:{}},Ye={exports:{}},Zh={NORMAL:0,NON_CONTRIBUTING:1,SAME_TRANSITION:2,DIFFERENT_TRANSITION:3},Fa={exports:{}};Fa.exports=ks;Fa.exports.default=ks;function ks(r,t){if(!(this instanceof ks))return new ks(r,t);if(this.data=r||[],this.length=this.data.length,this.compare=t||V_,this.length>0)for(var e=(this.length>>1)-1;e>=0;e--)this._down(e)}function V_(r,t){return r<t?-1:r>t?1:0}ks.prototype={push:function(r){this.data.push(r),this.length++,this._up(this.length-1)},pop:function(){if(this.length!==0){var r=this.data[0];return this.length--,this.length>0&&(this.data[0]=this.data[this.length],this._down(0)),this.data.pop(),r}},peek:function(){return this.data[0]},_up:function(r){for(var t=this.data,e=this.compare,n=t[r];r>0;){var i=r-1>>1,s=t[i];if(e(n,s)>=0)break;t[r]=s,r=i}t[r]=n},_down:function(r){for(var t=this.data,e=this.compare,n=this.length>>1,i=t[r];r<n;){var s=(r<<1)+1,o=s+1,a=t[s];if(o<this.length&&e(t[o],a)<0&&(s=o,a=t[o]),e(a,i)>=0)break;t[r]=a,r=s}t[r]=i}};function on(){}on.prototype.clear=function(){this._root=null,this.size=0};on.prototype.find=function(r){for(var t=this._root;t!==null;){var e=this._comparator(r,t.data);if(e===0)return t.data;t=t.get_child(e>0)}return null};on.prototype.findIter=function(r){for(var t=this._root,e=this.iterator();t!==null;){var n=this._comparator(r,t.data);if(n===0)return e._cursor=t,e;e._ancestors.push(t),t=t.get_child(n>0)}return null};on.prototype.lowerBound=function(r){for(var t=this._root,e=this.iterator(),n=this._comparator;t!==null;){var i=n(r,t.data);if(i===0)return e._cursor=t,e;e._ancestors.push(t),t=t.get_child(i>0)}for(var s=e._ancestors.length-1;s>=0;--s)if(t=e._ancestors[s],n(r,t.data)<0)return e._cursor=t,e._ancestors.length=s,e;return e._ancestors.length=0,e};on.prototype.upperBound=function(r){for(var t=this.lowerBound(r),e=this._comparator;t.data()!==null&&e(t.data(),r)===0;)t.next();return t};on.prototype.min=function(){var r=this._root;if(r===null)return null;for(;r.left!==null;)r=r.left;return r.data};on.prototype.max=function(){var r=this._root;if(r===null)return null;for(;r.right!==null;)r=r.right;return r.data};on.prototype.iterator=function(){return new ps(this)};on.prototype.each=function(r){for(var t=this.iterator(),e;(e=t.next())!==null;)if(r(e)===!1)return};on.prototype.reach=function(r){for(var t=this.iterator(),e;(e=t.prev())!==null;)if(r(e)===!1)return};function ps(r){this._tree=r,this._ancestors=[],this._cursor=null}ps.prototype.data=function(){return this._cursor!==null?this._cursor.data:null};ps.prototype.next=function(){if(this._cursor===null){var r=this._tree._root;r!==null&&this._minNode(r)}else if(this._cursor.right===null){var t;do if(t=this._cursor,this._ancestors.length)this._cursor=this._ancestors.pop();else{this._cursor=null;break}while(this._cursor.right===t)}else this._ancestors.push(this._cursor),this._minNode(this._cursor.right);return this._cursor!==null?this._cursor.data:null};ps.prototype.prev=function(){if(this._cursor===null){var r=this._tree._root;r!==null&&this._maxNode(r)}else if(this._cursor.left===null){var t;do if(t=this._cursor,this._ancestors.length)this._cursor=this._ancestors.pop();else{this._cursor=null;break}while(this._cursor.left===t)}else this._ancestors.push(this._cursor),this._maxNode(this._cursor.left);return this._cursor!==null?this._cursor.data:null};ps.prototype._minNode=function(r){for(;r.left!==null;)this._ancestors.push(r),r=r.left;this._cursor=r};ps.prototype._maxNode=function(r){for(;r.right!==null;)this._ancestors.push(r),r=r.right;this._cursor=r};var Jh=on,H_=Jh;function ns(r){this.data=r,this.left=null,this.right=null,this.red=!0}ns.prototype.get_child=function(r){return r?this.right:this.left};ns.prototype.set_child=function(r,t){r?this.right=t:this.left=t};function io(r){this._root=null,this._comparator=r,this.size=0}io.prototype=new H_;io.prototype.insert=function(r){var t=!1;if(this._root===null)this._root=new ns(r),t=!0,this.size++;else{var e=new ns(void 0),n=0,i=0,s=null,o=e,a=null,l=this._root;for(o.right=this._root;;){if(l===null?(l=new ns(r),a.set_child(n,l),t=!0,this.size++):ke(l.left)&&ke(l.right)&&(l.red=!0,l.left.red=!1,l.right.red=!1),ke(l)&&ke(a)){var c=o.right===s;l===a.get_child(i)?o.set_child(c,Gs(s,!i)):o.set_child(c,Kh(s,!i))}var h=this._comparator(l.data,r);if(h===0)break;i=n,n=h<0,s!==null&&(o=s),s=a,a=l,l=l.get_child(n)}this._root=e.right}return this._root.red=!1,t};io.prototype.remove=function(r){if(this._root===null)return!1;var t=new ns(void 0),e=t;e.right=this._root;for(var n=null,i=null,s=null,o=1;e.get_child(o)!==null;){var a=o;i=n,n=e,e=e.get_child(o);var l=this._comparator(r,e.data);if(o=l>0,l===0&&(s=e),!ke(e)&&!ke(e.get_child(o))){if(ke(e.get_child(!o))){var c=Gs(e,o);n.set_child(a,c),n=c}else if(!ke(e.get_child(!o))){var h=n.get_child(!a);if(h!==null)if(!ke(h.get_child(!a))&&!ke(h.get_child(a)))n.red=!1,h.red=!0,e.red=!0;else{var u=i.right===n;ke(h.get_child(a))?i.set_child(u,Kh(n,a)):ke(h.get_child(!a))&&i.set_child(u,Gs(n,a));var d=i.get_child(u);d.red=!0,e.red=!0,d.left.red=!1,d.right.red=!1}}}}return s!==null&&(s.data=e.data,n.set_child(n.right===e,e.get_child(e.left===null)),this.size--),this._root=t.right,this._root!==null&&(this._root.red=!1),s!==null};function ke(r){return r!==null&&r.red}function Gs(r,t){var e=r.get_child(!t);return r.set_child(!t,e.get_child(t)),e.set_child(t,r),r.red=!0,e.red=!1,e}function Kh(r,t){return r.set_child(!t,Gs(r.get_child(!t),!t)),Gs(r,t)}var q_=io,X_=Jh;function Ws(r){this.data=r,this.left=null,this.right=null}Ws.prototype.get_child=function(r){return r?this.right:this.left};Ws.prototype.set_child=function(r,t){r?this.right=t:this.left=t};function so(r){this._root=null,this._comparator=r,this.size=0}so.prototype=new X_;so.prototype.insert=function(r){if(this._root===null)return this._root=new Ws(r),this.size++,!0;for(var t=0,e=null,n=this._root;;){if(n===null)return n=new Ws(r),e.set_child(t,n),ret=!0,this.size++,!0;if(this._comparator(n.data,r)===0)return!1;t=this._comparator(n.data,r)<0,e=n,n=n.get_child(t)}};so.prototype.remove=function(r){if(this._root===null)return!1;var t=new Ws(void 0),e=t;e.right=this._root;for(var n=null,i=null,s=1;e.get_child(s)!==null;){n=e,e=e.get_child(s);var o=this._comparator(r,e.data);s=o>0,o===0&&(i=e)}return i!==null?(i.data=e.data,n.set_child(n.right===e,e.get_child(e.left===null)),this._root=t.right,this.size--,!0):!1};var j_=so,Y_={RBTree:q_,BinTree:j_},Oa=function(t,e,n){return(t[0]-n[0])*(e[1]-n[1])-(e[0]-n[0])*(t[1]-n[1])},kc=Oa,$_=Zh;function Qh(r,t,e,n,i){this.left=t,this.point=r,this.otherEvent=e,this.isSubject=n,this.type=i||$_.NORMAL,this.inOut=!1,this.otherInOut=!1,this.prevInResult=null,this.inResult=!1,this.resultInOut=!1}Qh.prototype={isBelow:function(r){return this.left?kc(this.point,this.otherEvent.point,r)>0:kc(this.otherEvent.point,this.point,r)>0},isAbove:function(r){return!this.isBelow(r)},isVertical:function(){return this.point[0]===this.otherEvent.point[0]}};var Z_=Qh,J_=Oa,tu=function(t,e){var n=t.point,i=e.point;return n[0]>i[0]?1:n[0]<i[0]?-1:n[1]!==i[1]?n[1]>i[1]?1:-1:K_(t,e,n)};function K_(r,t,e,n){return r.left!==t.left?r.left?1:-1:J_(e,r.otherEvent.point,t.otherEvent.point)!==0?r.isBelow(t.otherEvent.point)?-1:1:!r.isSubject&&t.isSubject?1:-1}var eu=function(t,e){return t[0]===e[0]&&t[1]===e[1]},Gc=Oa,Wc=tu,ea=eu,Q_=function(t,e){if(t===e)return 0;if(Gc(t.point,t.otherEvent.point,e.point)!==0||Gc(t.point,t.otherEvent.point,e.otherEvent.point)!==0)return ea(t.point,e.point)?t.isBelow(e.otherEvent.point)?-1:1:t.point[0]===e.point[0]?t.point[1]<e.point[1]?-1:1:Wc(t,e)===1?e.isAbove(t.point)?-1:1:t.isBelow(e.point)?-1:1;if(t.isSubject===e.isSubject){if(ea(t.point,e.point))return ea(t.otherEvent.point,e.otherEvent.point)?0:t.contourId>e.contourId?1:-1}else return t.isSubject?-1:1;return Wc(t,e)===1?1:-1},Vc=1e-9;function Dr(r,t){return r[0]*t[1]-r[1]*t[0]}function Es(r,t){return r[0]*t[0]+r[1]*t[1]}var ty=function(r,t,e,n,i){var s=[t[0]-r[0],t[1]-r[1]],o=[n[0]-e[0],n[1]-e[1]];function a(w,y,S){return[w[0]+y*S[0],w[1]+y*S[1]]}var l=[e[0]-r[0],e[1]-r[1]],c=Dr(s,o),h=c*c,u=Es(s,s),d=Es(o,o);if(h>Vc*u*d){var p=Dr(l,o)/c;if(p<0||p>1)return null;var g=Dr(l,s)/c;return g<0||g>1||i?null:[a(r,p,s)]}var m=Es(l,l);if(c=Dr(l,s),h=c*c,h>Vc*u*m)return null;var f=Es(s,l)/u,v=f+Es(s,o)/u,x=Math.min(f,v),_=Math.max(f,v);return x<=1&&_>=0?x===1?i?null:[a(r,x>0?x:0,s)]:_===0?i?null:[a(r,_<1?_:1,s)]:i&&x===0&&_===1?null:[a(r,x>0?x:0,s),a(r,_<1?_:1,s)]:null},bi=0,hs=1,Mi=2,$s=3,Hr=[],hi=Zh,ey=Fa.exports,ny=Y_.RBTree,qr=Z_,us=tu,iy=Q_,sy=ty,dn=eu,Hc=Math.max,_a=Math.min;function ry(r,t,e,n,i,s){var o=new qr(r,!1,void 0,e),a=new qr(t,!1,o,e);o.otherEvent=a,o.contourId=a.contourId=n,us(o,a)>0?a.left=!0:o.left=!0,s[0]=_a(s[0],r[0]),s[1]=_a(s[1],r[1]),s[2]=Hc(s[2],r[0]),s[3]=Hc(s[3],r[1]),i.push(o),i.push(a)}var ya=0;function wa(r,t,e,n,i){var s,o;if(typeof r[0][0]=="number")for(s=0,o=r.length-1;s<o;s++)ry(r[s],r[s+1],t,e+1,n,i);else for(s=0,o=r.length;s<o;s++)ya++,wa(r[s],t,ya,n,i)}function nu(r,t,e,n){var i=new ey(null,us);return ya=0,wa(r,!0,0,i,e),wa(t,!1,0,i,n),i}function Zi(r,t,e,n){t===null?(r.inOut=!1,r.otherInOut=!0):r.isSubject===t.isSubject?(r.inOut=!t.inOut,r.otherInOut=t.otherInOut):(r.inOut=!t.otherInOut,r.otherInOut=t.isVertical()?!t.inOut:t.inOut),t&&(r.prevInResult=!qc(t,n)||t.isVertical()?t.prevInResult:t),r.inResult=qc(r,n)}function qc(r,t){switch(r.type){case hi.NORMAL:switch(t){case bi:return!r.otherInOut;case hs:return r.otherInOut;case Mi:return r.isSubject&&r.otherInOut||!r.isSubject&&!r.otherInOut;case $s:return!0}case hi.SAME_TRANSITION:return t===bi||t===hs;case hi.DIFFERENT_TRANSITION:return t===Mi;case hi.NON_CONTRIBUTING:return!1}return!1}function Br(r,t,e){var n=sy(r.point,r.otherEvent.point,t.point,t.otherEvent.point),i=n?n.length:0;if(i===0||i===1&&(dn(r.point,t.point)||dn(r.otherEvent.point,t.otherEvent.point)))return 0;if(i===2&&r.isSubject===t.isSubject)return r.contourId===t.contourId&&console.warn("Edges of the same polygon overlap",r.point,r.otherEvent.point,t.point,t.otherEvent.point),0;if(i===1)return!dn(r.point,n[0])&&!dn(r.otherEvent.point,n[0])&&An(r,n[0],e),!dn(t.point,n[0])&&!dn(t.otherEvent.point,n[0])&&An(t,n[0],e),1;var s=[],o=!1,a=!1;return dn(r.point,t.point)?o=!0:us(r,t)===1?s.push(t,r):s.push(r,t),dn(r.otherEvent.point,t.otherEvent.point)?a=!0:us(r.otherEvent,t.otherEvent)===1?s.push(t.otherEvent,r.otherEvent):s.push(r.otherEvent,t.otherEvent),o&&a||o?(r.type=hi.NON_CONTRIBUTING,t.type=r.inOut===t.inOut?hi.SAME_TRANSITION:hi.DIFFERENT_TRANSITION,o&&!a&&An(s[0].otherEvent,s[1].point,e),2):a?(An(s[0],s[1].point,e),3):s[0]!==s[3].otherEvent?(An(s[0],s[1].point,e),An(s[1],s[2].point,e),3):(An(s[0],s[1].point,e),An(s[3].otherEvent,s[2].point,e),3)}function An(r,t,e){var n=new qr(t,!1,r,r.isSubject),i=new qr(t,!0,r.otherEvent,r.isSubject);return dn(r.point,r.otherEvent.point)&&console.warn("what is that?",r),n.contourId=i.contourId=r.contourId,us(i,r.otherEvent)>0&&(r.otherEvent.left=!0,i.left=!1),r.otherEvent.otherEvent=i,r.otherEvent=n,e.push(i),e.push(n),e}function iu(r,t,e,n,i,s){for(var a=[],c,h,o=new ny(iy),a=[],l=_a(n[2],i[2]),c,h;r.length;){var u=r.pop();if(a.push(u),s===bi&&u.point[0]>l||s===Mi&&u.point[0]>n[2])break;if(u.left){if(o.insert(u),h=o.findIter(u),c=o.findIter(u),u.iterator=o.findIter(u),!c||!h){console.log("brute");var d=oy(o);c=d[0],h=d[1]}if(c.data()!==o.min()?c.prev():(c=o.iterator(),c.prev(),c.next()),h.next(),Zi(u,c.data(),o,s),h.data()&&Br(u,h.data(),r)===2&&(Zi(u,c.data(),o,s),Zi(u,h.data(),o,s)),c.data()&&Br(c.data(),u,r)===2){var p=o.findIter(c.data());p.data()!==o.min()?p.prev():(p=o.findIter(o.max()),p.next()),Zi(c.data(),p.data(),o,s),Zi(u,c.data(),o,s)}}else{if(u=u.otherEvent,h=o.findIter(u),c=o.findIter(u),!(c&&h))continue;c.data()!==o.min()?c.prev():(c=o.iterator(),c.prev(),c.next()),h.next(),o.remove(u),h.data()&&c.data()&&Br(c.data(),h.data(),r)}}return a}function oy(r,t){for(var e=r.iterator(),n=r.iterator(),i=r.iterator(),s;(s=i.next())!==null&&(e.next(),n.next(),s!==event););return[e,n]}function ay(r,t,e){var n=r[t];r[t]=r[e],r[e]=n}function ly(r){return r.reverse()}function Xc(r){return Object.prototype.toString.call(r)==="[object Array]"}function jc(r,t){return Xc(r[0])&&!Xc(r[0][0])&&(r=[r]),r[t]=[],r}function cy(r){var t,e,n,i=[];for(e=0,n=r.length;e<n;e++)t=r[e],(t.left&&t.inResult||!t.left&&t.otherEvent.inResult)&&i.push(t);for(var s=!1;!s;)for(s=!0,e=0,n=i.length;e<n;e++)e+1<n&&us(i[e],i[e+1])===1&&(ay(i,e,e+1),s=!1);for(e=0,n=i.length;e<n;e++)i[e].pos=e;for(e=0,n=i.length;e<n;e++)if(!i[e].left){var o=i[e].pos;i[e].pos=i[e].otherEvent.pos,i[e].otherEvent.pos=o}return i}function hy(r){var t,e,n=cy(r),i=Array(n.length),s=[],o=[],a=[],l={};for(t=0,e=n.length;t<e;t++)if(!i[t]){var c=[];s.push(c);var h=s.length-1;if(o.push(0),a.push(-1),n[t].prevInResult){var u=n[t].prevInResult.contourId;n[t].prevInResult.resultInOut?l[u]&&(jc(s[a[u]],h),a[h]=a[u],o[h]=o[u],l[h]=!0):(jc(s[u],h),a[h]=u,o[h]=o[u]+1,l[h]=!0)}var d=t,p=n[t].point;for(c.push(p);d>=t;)i[d]=!0,n[d].left?(n[d].resultInOut=!1,n[d].contourId=h):(n[d].otherEvent.resultInOut=!0,n[d].otherEvent.contourId=h),d=n[d].pos,i[d]=!0,c.push(n[d].point),d=uy(d,n,i);d=d===-1?t:d,i[d]=i[n[d].pos]=!0,n[d].otherEvent.resultInOut=!0,n[d].otherEvent.contourId=h,o[h]&1&&ly(c)}return s}function uy(r,t,e){for(var n=r+1,i=t.length;n<i&&dn(t[n].point,t[r].point);)if(e[n])n=n+1;else return n;for(n=r-1;e[n];)n=n-1;return n}function dy(r,t,e){var n=null;return r.length*t.length===0&&(e===bi?n=Hr:e===Mi?n=r:(e===hs||e===$s)&&(n=r.length===0?t:r)),n}function fy(r,t,e,n,i){var s=null;return(e[0]>n[2]||n[0]>e[2]||e[1]>n[3]||n[1]>e[3])&&(i===bi?s=Hr:i===Mi?s=r:(i===hs||i===$s)&&(s=r.concat(t))),s}function Zs(r,t,e){var n=dy(r,t,e);if(n)return n===Hr?null:n;var i=[1/0,1/0,-1/0,-1/0],s=[1/0,1/0,-1/0,-1/0],o=nu(r,t,i,s);if(n=fy(r,t,i,s,e),n)return n===Hr?null:n;var a=iu(o,r,t,i,s,e);return hy(a)}Ye.exports=Zs;Ye.exports.union=function(r,t){return Zs(r,t,hs)};Ye.exports.diff=function(r,t){return Zs(r,t,Mi)};Ye.exports.xor=function(r,t){return Zs(r,t,$s)};Ye.exports.intersection=function(r,t){return Zs(r,t,bi)};Ye.exports.operations={INTERSECTION:bi,DIFFERENCE:Mi,UNION:hs,XOR:$s};Ye.exports.fillQueue=nu;Ye.exports.computeFields=Zi;Ye.exports.subdivideSegments=iu;Ye.exports.divideSegment=An;Ye.exports.possibleIntersection=Br;(function(r){r.exports=Ye.exports})($h);var Js={},py=Js.isArray=Array.isArray||function(r){return Object.prototype.toString.call(r)==="[object Array]"},na=Js.isNonEmptyArray=function(r){return py(r)&&r.length};Js.equals=function(t,e){return t[0]===e[0]&&t[1]===e[1]};Js.orientRings=function r(t,e,n){e=e||0;var i,s;if(na(t)&&typeof t[0][0]=="number"){var o=0,a=t;for(i=0,s=a.length;i<s;i++){var l=a[i],c=a[(i+1)%s];o+=l[0]*c[1],o-=c[0]*l[1]}(!n&&o>0||n&&o<0)&&a.reverse()}else for(i=0,s=t.length;i<s;i++)r(t[i],e+1,i>0);if(e===0&&na(t)&&na(t[0])&&typeof t[0][0][0]=="number"){var h=t[0].slice(0,1)[0];t[0].pop(),t[0].push([h[0],h[1]])}return t};var my=W_,Vs=$h.exports,Ba=Js,Hs=Ba.isArray,su=Ba.equals,ms=Ba.orientRings;function _e(r,t){this.vertices=null,this.edges=null,this._closed=!1,this._distance=0,r&&this.data(r),this._arcSegments=t!==void 0?t:5}_e.prototype.data=function(r){if(this._edges=[],!Hs(r))throw new Error("Offset requires at least one coodinate to work with");return Hs(r)&&typeof r[0]=="number"?this.vertices=r:(this.vertices=ms(r),this._processContour(this.vertices,this._edges)),this};_e.prototype._processContour=function(r,t){var e,n;if(Hs(r[0])&&typeof r[0][0]=="number")for(n=r.length,su(r[0],r[n-1])&&(n-=1),e=0;e<n;e++)t.push(new my(r[e],r[(e+1)%n]));else for(e=0,n=r.length;e<n;e++)t.push([]),this._processContour(r[e],t[t.length-1])};_e.prototype.arcSegments=function(r){return this._arcSegments=r,this};_e.prototype.validate=function(r){var t=r.length;return typeof r[0]=="number"?[r]:(r[0][0]===r[t-1][0]&&r[0][1]===r[t-1][1]&&t>1&&(r=r.slice(0,t-1),this._closed=!0),r)};_e.prototype.createArc=function(r,t,e,n,i,s,o){var a=Math.PI*2,l=Math.atan2(n[1]-t[1],n[0]-t[0]),c=Math.atan2(i[1]-t[1],i[0]-t[0]);s%2===0&&(s-=1),l<0&&(l+=a),c<0&&(c+=a);var h=l>c?l-c:l+a-c,u=(o?-h:a-h)/s;r.push(n);for(var d=1;d<s;++d)h=l+u*d,r.push([t[0]+Math.cos(h)*e,t[1]+Math.sin(h)*e]);return r.push(i),r};_e.prototype.distance=function(r,t){return this._distance=r||0,this};_e.degreesToUnits=function(r,t){switch(t){case"miles":r=r/69.047;break;case"feet":r=r/364568;break;case"kilometers":r=r/111.12;break;case"meters":case"metres":r=r/111120;break}return r};_e.prototype.ensureLastPoint=function(r){return su(r[0],r[r.length-1])||r.push([r[0][0],r[0][1]]),r};_e.prototype.offset=function(r){return this.distance(r),this._distance===0?this.vertices:this._distance>0?this.margin(this._distance):this.padding(-this._distance)};_e.prototype._offsetSegment=function(r,t,e,n){for(var i=[],s=[e.offset(e._inNormal[0]*n,e._inNormal[1]*n),e.inverseOffset(e._outNormal[0]*n,e._outNormal[1]*n)],o=0,a=2;o<a;o++){var l=s[o],c=s[(o+a-1)%a];this.createArc(i,o===0?r:t,n,c.next,l.current,this._arcSegments,!0)}return i};_e.prototype.margin=function(r){if(this.distance(r),typeof this.vertices[0]=="number")return this.offsetPoint(this._distance);if(r===0)return this.vertices;var t=this.offsetLines(this._distance);return t=Vs.union(this.vertices,t),ms(t)};_e.prototype.padding=function(r){if(this.distance(r),this._distance===0)return this.ensureLastPoint(this.vertices);if(this.vertices.length===2&&typeof this.vertices[0]=="number")return this.vertices;var t=this.offsetLines(this._distance),e=Vs.diff(this.vertices,t);return ms(e)};_e.prototype.offsetLine=function(r){return r===0?this.vertices:ms(this.offsetLines(r))};_e.prototype.offsetLines=function(r){if(r<0)throw new Error("Cannot apply negative margin to the line");var t;if(this.distance(r),Hs(this.vertices[0])&&typeof this.vertices[0][0]!="number")for(var e=0,n=this._edges.length;e<n;e++)t=e===0?this.offsetContour(this.vertices[e],this._edges[e]):Vs.union(t,this.offsetContour(this.vertices[e],this._edges[e]));else t=this.vertices.length===1?this.offsetPoint():this.offsetContour(this.vertices,this._edges);return t};_e.prototype.offsetContour=function(r,t){var e,n,i;if(Hs(r[0])&&typeof r[0][0]=="number")for(n=0,i=r.length-1;n<i;n++){var s=this.ensureLastPoint(this._offsetSegment(r[n],r[n+1],t[n],this._distance));e=n===0?[this.ensureLastPoint(s)]:Vs.union(e,this.ensureLastPoint(s))}else for(n=0,i=t.length;n<i;n++)e=n===0?this.offsetContour(r[n],t[n]):Vs.union(e,this.offsetContour(r[n],t[n]));return e};_e.prototype.offsetPoint=function(r){this.distance(r);var t=this._arcSegments*2,e=[],n=this.vertices,i=this._distance,s=0;t%2===0&&t++;for(var o=0;o<t;o++)s+=2*Math.PI/t,e.push([n[0]+i*Math.cos(s),n[1]+i*Math.sin(s)]);return ms([this.ensureLastPoint(e)])};_e.orientRings=ms;var gy=_e;const Ua=4,Yc=16,ru=.19,vy=new Xn(.04,.04,ru),xy=new js({color:16777215}),_y=new Oh({color:5329233,wireframe:!1}),yy=new js({color:16753920}),wy=new js({color:65280});class $c extends no{constructor(t,e=1,n=.15){super(),this.roadSpline=new Lh(t,!1,"catmullrom",.5),this.roadWidth=e,this.roadLength=this.roadSpline.getLength();let i=new gy,s=new Oh({color:16771584,wireframe:!1});const o=new lt({mass:0,material:new jn({friction:.15,restitution:.25})}),a=this.roadSpline.getSpacedPoints(Math.floor(this.roadLength/n)).map(_=>[_.x,_.z]),l=i.data(a).arcSegments(20).offsetLine(e/2).map(_=>_.map(w=>new O(w[0],0,w[1]))),c=new Ih(l[0].map(_=>new ot(_.x,_.z)));for(let _=0;_<l.length;_++){const w=l[_];_>0&&c.holes.push(new ma(w.map(y=>new ot(y.x,y.z))));for(let y=1;y<w.length;y++){let S=w[y].clone().sub(w[y-1]),L=w[y].clone().add(w[y-1]).divideScalar(2),b=new G_(L.x,L.y+.1,L.z,S.length(),.2,.01,s,0);b.rotateY(Math.atan2(-S.z,S.x)),b.meshes[0].layers.enable(Ua),b.meshes[0].receiveShadow=!1,o.addShape(b.bodies[0].shapes[0],b.bodies[0].position,b.bodies[0].quaternion),this.meshes.push(b.meshes[0])}}let h=new Da(c),u=new Jt(h,_y);u.rotateX(Math.PI/2),u.scale.setZ(-1),u.translateZ(-.01),u.receiveShadow=!0,this.meshes.push(u);let d=this.roadSpline.getLength(),p=Math.floor(d/ru/2);for(let _=1;_<p;_+=2){let w=_/p,y=this.roadSpline.getPointAt(w),S=this.roadSpline.getTangentAt(w),L=new Jt(vy,xy);L.receiveShadow=!0,L.castShadow=!1,L.position.x=y.x,L.position.y=y.y,L.position.z=y.z,L.rotateY(Math.atan2(S.x,S.z)),this.meshes.push(L)}const g=new Wr(this.roadWidth/2,16);g.rotateX(-Math.PI/2),g.translate(t[0].x,.025,t[0].z);const m=new Jt(g,yy);this.meshes.push(m);const f=new Wr(this.roadWidth/2,16);f.rotateX(-Math.PI/2),f.translate(t[t.length-1].x,.025,t[t.length-1].z);const v=new Jt(f,wy);this.meshes.push(v),o.collisionFilterGroup=Yc,o.collisionFilterMask=~Yc,this.bodies.push(o),this.barrrierBody=o,this.startX=t[0].x,this.startZ=t[0].z;const x=this.roadSpline.getTangentAt(0);this.startRotation=-Math.atan2(-x.z,x.x)+Math.PI/2,this.endX=t[t.length-1].x,this.endZ=t[t.length-1].z}syncMeshesToBodies(){}}const by=new js({color:16777215});class My extends no{constructor(t=0,e=100,n=100){super(),this.ylevel=t;const i=new Jr(e,n),s=new Jt(i,by);s.rotation.x=-Math.PI/2,s.position.y=t,s.layers.enable(Ua),this.mesh=s,this.meshes.push(s);const o=new mx,a=new lt({mass:0,material:new jn({friction:.12,restitution:.5})});a.addShape(o),a.quaternion.setFromAxisAngle(new M(1,0,0),-Math.PI/2),a.position.y=t,this.body=a,this.bodies.push(a)}syncMeshesToBodies(){}}class Sy{constructor(t){Lt(this,"canvas");Lt(this,"scene");Lt(this,"renderer");Lt(this,"gameObjects");Lt(this,"world");Lt(this,"controls");Lt(this,"camera");Lt(this,"cameraPosition");Lt(this,"cameraQuaternion");Lt(this,"resizeFunction");Lt(this,"callback");Lt(this,"ground");Lt(this,"raceTrack");this.canvas=t,this.createCamera(),this.scene=new b0,this.addLighting(),this.createRenderer(),this.enableAutoResizer(),this.setupControls(),this.createPhyiscsWorld(),this.callback=()=>{};let e=new ov;const n=()=>{const i=Math.min(e.getDelta(),.1);i>0&&this.update(i)};this.renderer.setAnimationLoop(n),this.gameObjects=[],this.ground=new My,this.addGameObject(this.ground)}update(t){this.world.step(t),this.gameObjects.forEach(n=>n.syncMeshesToBodies()),this.controls.update(),this.cameraPosition.lerp(this.camera.position,1-.9**(t/.016)),this.cameraQuaternion.slerp(this.camera.quaternion,1-.9**(t/.016));const e=this.camera.clone();e.position.copy(this.cameraPosition),e.quaternion.copy(this.cameraQuaternion),this.callback(t),this.renderer.render(this.scene,e)}requestCallbackBeforeRender(t){this.callback=t}addGameObject(t){this.gameObjects.push(t),t.meshes.forEach(e=>this.scene.add(e)),t.bodies.forEach(e=>this.world.addBody(e)),t.constraints.forEach(e=>this.world.addConstraint(e))}removeGameObject(t){this.gameObjects=this.gameObjects.filter(e=>e!==t),t.meshes.forEach(e=>this.scene.remove(e)),t.bodies.forEach(e=>this.world.removeBody(e)),t.constraints.forEach(e=>this.world.removeConstraint(e))}addLighting(){this.scene.add(new rv(4210752));const t=new sv(16777215,.6);t.position.set(-1.1,1,.9),t.castShadow=!0,t.shadow.mapSize.width=1024,t.shadow.mapSize.height=1024,this.scene.add(t)}createRenderer(){this.renderer=new Ah({antialias:!0,canvas:this.canvas}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ah}createCamera(){this.camera=new We(70,window.innerWidth/window.innerHeight,.01,100),this.camera.position.z=6,this.camera.position.y=3,this.camera.position.x=6,this.cameraPosition=this.camera.position.clone(),this.cameraQuaternion=this.camera.quaternion.clone()}createPhyiscsWorld(){this.world=new I_,this.world.gravity.set(0,-9.82,0),this.world.allowSleep=!0}setGravity(t,e,n){this.world.gravity.set(t,e,n)}enableAutoResizer(){if(this.resizeFunction)return;const t=()=>{this.canvas.width=this.canvas.offsetWidth,this.canvas.height=this.canvas.offsetHeight,this.renderer.setSize(this.canvas.offsetWidth,this.canvas.offsetHeight,!1),this.camera.aspect=this.canvas.offsetWidth/this.canvas.offsetHeight,this.camera.updateProjectionMatrix()};this.resizeFunction=t,window.addEventListener("resize",t),t()}disableAutoResizer(){this.resizeFunction&&window.removeEventListener("resize",this.resizeFunction),this.resizeFunction=void 0}setupControls(){this.controls=new k_(this.camera,this.renderer.domElement),this.controls.enableDamping=!1}}const Yi=[];function Ey(r,t=ye){let e;const n=new Set;function i(a){if(Dn(r,a)&&(r=a,e)){const l=!Yi.length;for(const c of n)c[1](),Yi.push(c,r);if(l){for(let c=0;c<Yi.length;c+=2)Yi[c][0](Yi[c+1]);Yi.length=0}}}function s(a){i(a(r))}function o(a,l=ye){const c=[a,l];return n.add(c),n.size===1&&(e=t(i)||ye),a(r),()=>{n.delete(c),n.size===0&&(e(),e=null)}}return{set:i,update:s,subscribe:o}}const ou=Ey(null);function Ty(r){let t;return{c(){t=Mt("canvas"),it(t,"class","svelte-1v9nuep")},m(e,n){_t(e,t,n),r[1](t)},p:ye,i:ye,o:ye,d(e){e&&vt(t),r[1](null)}}}function Ay(r,t,e){let n,i;yu(()=>{i=new Sy(n),ou.set(i)});function s(o){sa[o?"unshift":"push"](()=>{n=o,e(0,n)})}return[n,s]}class Cy extends Hn{constructor(t){super(),Vn(this,t,Ay,Ty,Dn,{})}}function Ly(r){let t,e,n,i=r[0].brushSize+"",s,o,a,l,c;return{c(){t=Mt("label"),e=Ve("Road width: "),n=Mt("b"),s=Ve(i),o=Ot(),a=Mt("input"),it(t,"for","steps-range"),it(t,"class","block mb-2 text-sm font-medium text-gray-300"),it(a,"id","steps-range"),it(a,"type","range"),it(a,"min","0.8"),it(a,"max","2"),it(a,"step","0.1"),it(a,"class","w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-lg appearance-none cursor-pointer range-lg")},m(h,u){_t(h,t,u),Pt(t,e),Pt(t,n),Pt(n,s),_t(h,o,u),_t(h,a,u),Ji(a,r[0].brushSize),l||(c=[He(a,"change",r[1]),He(a,"input",r[1])],l=!0)},p(h,[u]){u&1&&i!==(i=h[0].brushSize+"")&&zs(s,i),u&1&&Ji(a,h[0].brushSize)},i:ye,o:ye,d(h){h&&vt(t),h&&vt(o),h&&vt(a),l=!1,Rn(c)}}}function Py(r,t,e){let{mode:n}=t;function i(){n.brushSize=ia(this.value),e(0,n)}return r.$$set=s=>{"mode"in s&&e(0,n=s.mode)},[n,i]}class Ry extends Hn{constructor(t){super(),Vn(this,t,Py,Ly,Dn,{mode:0})}}function Zc(r){let t,e,n,i=r[0].ground.body.material.friction+"",s,o,a,l,c,h,u,d=r[0].raceTrack.barrrierBody.material.friction+"",p,g,m,f,v;return{c(){t=Mt("label"),e=Ve("Ground friction: "),n=Mt("b"),s=Ve(i),o=Ot(),a=Mt("input"),l=Ot(),c=Mt("label"),h=Ve("Barrier friction: "),u=Mt("b"),p=Ve(d),g=Ot(),m=Mt("input"),it(t,"for","steps-range"),it(t,"class","block mb-2 text-sm font-medium text-gray-300"),it(a,"id","steps-range"),it(a,"type","range"),it(a,"min","0.05"),it(a,"max","1"),it(a,"step","0.02"),it(a,"class","w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-lg appearance-none cursor-pointer range-lg"),it(c,"for","steps-range"),it(c,"class","block my-2 text-sm font-medium text-gray-300"),it(m,"id","steps-range"),it(m,"type","range"),it(m,"min","0.0"),it(m,"max","1"),it(m,"step","0.02"),it(m,"class","w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-lg appearance-none cursor-pointer range-lg")},m(x,_){_t(x,t,_),Pt(t,e),Pt(t,n),Pt(n,s),_t(x,o,_),_t(x,a,_),Ji(a,r[0].ground.body.material.friction),_t(x,l,_),_t(x,c,_),Pt(c,h),Pt(c,u),Pt(u,p),_t(x,g,_),_t(x,m,_),Ji(m,r[0].raceTrack.barrrierBody.material.friction),f||(v=[He(a,"change",r[1]),He(a,"input",r[1]),He(m,"change",r[2]),He(m,"input",r[2])],f=!0)},p(x,_){_&1&&i!==(i=x[0].ground.body.material.friction+"")&&zs(s,i),_&1&&Ji(a,x[0].ground.body.material.friction),_&1&&d!==(d=x[0].raceTrack.barrrierBody.material.friction+"")&&zs(p,d),_&1&&Ji(m,x[0].raceTrack.barrrierBody.material.friction)},d(x){x&&vt(t),x&&vt(o),x&&vt(a),x&&vt(l),x&&vt(c),x&&vt(g),x&&vt(m),f=!1,Rn(v)}}}function Dy(r){let t,e=r[0]!==null&&Zc(r);return{c(){e&&e.c(),t=vu()},m(n,i){e&&e.m(n,i),_t(n,t,i)},p(n,[i]){n[0]!==null?e?e.p(n,i):(e=Zc(n),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:ye,o:ye,d(n){e&&e.d(n),n&&vt(t)}}}function Iy(r,t,e){let{gameWorld:n}=t;function i(){n.ground.body.material.friction=ia(this.value),e(0,n)}function s(){n.raceTrack.barrrierBody.material.friction=ia(this.value),e(0,n)}return r.$$set=o=>{"gameWorld"in o&&e(0,n=o.gameWorld)},[n,i,s]}class au extends Hn{constructor(t){super(),Vn(this,t,Iy,Dy,Dn,{gameWorld:0})}}function Jc(r,t,e){const n=r.slice();return n[4]=t[e],n[6]=e,n}function Kc(r){let t,e,n=r[4].toFixed(2)+"",i;return{c(){t=Mt("div"),e=Mt("div"),i=Ve(n),it(e,"id","arrow-length-indicator-"+r[6]),it(e,"class","bg-blue-600 mb-px bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"),kr(e,"width",r[4]*100+"%"),it(t,"class","w-full bg-gray-200 rounded-full dark:bg-gray-700")},m(s,o){_t(s,t,o),Pt(t,e),Pt(e,i)},p(s,o){o&1&&n!==(n=s[4].toFixed(2)+"")&&zs(i,n),o&1&&kr(e,"width",s[4]*100+"%")},d(s){s&&vt(t)}}}function zy(r){let t,e,n,i,s,o,a,l,c,h,u,d,p,g,m,f,v,x,_,w,y,S,L,b,T,I,G,j,R,P,F,B,Z,k=r[0].arrowLengths,z=[];for(let C=0;C<k.length;C+=1)z[C]=Kc(Jc(r,k,C));return I=new au({props:{gameWorld:r[0].gameWorld}}),{c(){t=Mt("label"),e=Mt("input"),n=Ot(),i=Mt("div"),s=Ot(),o=Mt("span"),o.textContent="Chase camera",a=Ot(),l=Mt("br"),c=Ot(),h=Mt("label"),u=Mt("input"),d=Ot(),p=Mt("div"),g=Ot(),m=Mt("span"),m.textContent="Visualize sensors",f=Ot(),v=Mt("hr"),x=Ot(),_=Mt("div"),_.innerHTML='<span class="text-base font-medium text-blue-700 dark:text-white">Sensors</span>',w=Ot();for(let C=0;C<z.length;C+=1)z[C].c();y=Ot(),S=Mt("div"),S.innerHTML='<span class="text-base font-medium text-blue-700 dark:text-white">Velocity: <span id="velocity-element"></span></span>',L=Ot(),b=Mt("hr"),T=Ot(),ss(I.$$.fragment),G=Ot(),j=Mt("hr"),R=Ot(),P=Mt("button"),P.textContent="Reset car",it(e,"type","checkbox"),e.__value="",e.value=e.__value,it(e,"id","chase-mode-toggle"),it(e,"class","sr-only peer"),it(i,"class","w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"),it(o,"class","ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"),it(t,"for","chase-mode-toggle"),it(t,"class","inline-flex relative items-center cursor-pointer mb-4"),it(u,"type","checkbox"),u.__value="",u.value=u.__value,it(u,"id","show-sensors-toggle"),it(u,"class","sr-only peer"),it(p,"class","w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"),it(m,"class","ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"),it(h,"for","show-sensors-toggle"),it(h,"class","inline-flex relative items-center cursor-pointer"),it(v,"class","my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 dark:bg-gray-700"),it(_,"class","flex justify-between mb-1"),it(S,"class","flex justify-between mt-4 mb-1"),it(b,"class","my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 dark:bg-gray-700"),it(j,"class","my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 dark:bg-gray-700"),it(P,"type","button"),it(P,"class","block grow mx-auto focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-md px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900")},m(C,H){_t(C,t,H),Pt(t,e),e.checked=r[0].chaseMode,Pt(t,n),Pt(t,i),Pt(t,s),Pt(t,o),Pt(t,a),_t(C,l,H),_t(C,c,H),_t(C,h,H),Pt(h,u),u.checked=r[0].showSensors,Pt(h,d),Pt(h,p),Pt(h,g),Pt(h,m),_t(C,f,H),_t(C,v,H),_t(C,x,H),_t(C,_,H),_t(C,w,H);for(let q=0;q<z.length;q+=1)z[q].m(C,H);_t(C,y,H),_t(C,S,H),_t(C,L,H),_t(C,b,H),_t(C,T,H),pi(I,C,H),_t(C,G,H),_t(C,j,H),_t(C,R,H),_t(C,P,H),F=!0,B||(Z=[He(e,"change",r[1]),He(u,"change",r[2]),He(P,"click",r[3])],B=!0)},p(C,[H]){if(H&1&&(e.checked=C[0].chaseMode),H&1&&(u.checked=C[0].showSensors),H&1){k=C[0].arrowLengths;let Y;for(Y=0;Y<k.length;Y+=1){const at=Jc(C,k,Y);z[Y]?z[Y].p(at,H):(z[Y]=Kc(at),z[Y].c(),z[Y].m(y.parentNode,y))}for(;Y<z.length;Y+=1)z[Y].d(1);z.length=k.length}const q={};H&1&&(q.gameWorld=C[0].gameWorld),I.$set(q)},i(C){F||(fi(I.$$.fragment,C),F=!0)},o(C){is(I.$$.fragment,C),F=!1},d(C){C&&vt(t),C&&vt(l),C&&vt(c),C&&vt(h),C&&vt(f),C&&vt(v),C&&vt(x),C&&vt(_),C&&vt(w),ba(z,C),C&&vt(y),C&&vt(S),C&&vt(L),C&&vt(b),C&&vt(T),mi(I,C),C&&vt(G),C&&vt(j),C&&vt(R),C&&vt(P),B=!1,Rn(Z)}}}function Ny(r,t,e){let{mode:n}=t;function i(){n.chaseMode=this.checked,e(0,n)}function s(){n.showSensors=this.checked,e(0,n)}const o=()=>{n.respawnCar()};return r.$$set=a=>{"mode"in a&&e(0,n=a.mode)},[n,i,s,o]}class Fy extends Hn{constructor(t){super(),Vn(this,t,Ny,zy,Dn,{mode:0})}}function Oy(r){let t;return{c(){t=Ve("Train panel")},m(e,n){_t(e,t,n)},p:ye,i:ye,o:ye,d(e){e&&vt(t)}}}function By(r,t,e){let{mode:n}=t;return r.$$set=i=>{"mode"in i&&e(0,n=i.mode)},[n]}class Uy extends Hn{constructor(t){super(),Vn(this,t,By,Oy,Dn,{mode:0})}}function Qc(r,t,e){const n=r.slice();return n[3]=t[e],n[5]=e,n}function th(r){let t,e,n=r[3].toFixed(2)+"",i;return{c(){t=Mt("div"),e=Mt("div"),i=Ve(n),it(e,"id","arrow-length-indicator-"+r[5]),it(e,"class","bg-blue-600 mb-px bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"),kr(e,"width",r[3]*100+"%"),it(t,"class","w-full bg-gray-200 rounded-full dark:bg-gray-700")},m(s,o){_t(s,t,o),Pt(t,e),Pt(e,i)},p(s,o){o&1&&n!==(n=s[3].toFixed(2)+"")&&zs(i,n),o&1&&kr(e,"width",s[3]*100+"%")},d(s){s&&vt(t)}}}function ky(r){let t,e,n,i,s,o,a,l,c,h,u,d,p,g,m,f,v,x,_,w,y,S,L,b,T,I,G,j,R,P,F,B,Z,k=r[0].arrowLengths,z=[];for(let C=0;C<k.length;C+=1)z[C]=th(Qc(r,k,C));return P=new au({props:{gameWorld:r[0].gameWorld}}),{c(){t=Mt("div"),t.innerHTML=`<button type="button" class="focus:outline-none text-white grow flex-1 transition py-1 px-2 text-sm focus:ring-red-300 font-bold rounded-l-lg border border-gray-200 focus:z-10 focus:ring-1 bg-red-600 border-gray-600 text-white hover:text-white hover:bg-red-700">Record input</button> 
    <button type="button" class="text-purple-700 hover:text-white grow flex-1 transition border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-r-lg text-sm px-2 py-1 text-center dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Test AI car</button>`,e=Ot(),n=Mt("hr"),i=Ot(),s=Mt("label"),o=Mt("input"),a=Ot(),l=Mt("div"),c=Ot(),h=Mt("span"),h.textContent="Chase camera",u=Ot(),d=Mt("br"),p=Ot(),g=Mt("label"),m=Mt("input"),f=Ot(),v=Mt("div"),x=Ot(),_=Mt("span"),_.textContent="Visualize sensors",w=Ot(),y=Mt("hr"),S=Ot(),L=Mt("div"),L.innerHTML='<span class="text-base font-medium text-blue-700 dark:text-white">Sensors</span>',b=Ot();for(let C=0;C<z.length;C+=1)z[C].c();T=Ot(),I=Mt("div"),I.innerHTML='<span class="text-base font-medium text-blue-700 dark:text-white">Velocity: <span id="velocity-element"></span></span>',G=Ot(),j=Mt("hr"),R=Ot(),ss(P.$$.fragment),it(t,"class","flex rounded-md shadow-sm"),it(t,"role","group"),it(n,"class","my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 dark:bg-gray-700"),it(o,"type","checkbox"),o.__value="",o.value=o.__value,it(o,"id","chase-mode-toggle"),it(o,"class","sr-only peer"),it(l,"class","w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"),it(h,"class","ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"),it(s,"for","chase-mode-toggle"),it(s,"class","inline-flex relative items-center cursor-pointer mb-4"),it(m,"type","checkbox"),m.__value="",m.value=m.__value,it(m,"id","show-sensors-toggle"),it(m,"class","sr-only peer"),it(v,"class","w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"),it(_,"class","ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"),it(g,"for","show-sensors-toggle"),it(g,"class","inline-flex relative items-center cursor-pointer"),it(y,"class","my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 dark:bg-gray-700"),it(L,"class","flex justify-between mb-1"),it(I,"class","flex justify-between mt-4 mb-1"),it(j,"class","my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 dark:bg-gray-700")},m(C,H){_t(C,t,H),_t(C,e,H),_t(C,n,H),_t(C,i,H),_t(C,s,H),Pt(s,o),o.checked=r[0].chaseMode,Pt(s,a),Pt(s,l),Pt(s,c),Pt(s,h),Pt(s,u),_t(C,d,H),_t(C,p,H),_t(C,g,H),Pt(g,m),m.checked=r[0].showSensors,Pt(g,f),Pt(g,v),Pt(g,x),Pt(g,_),_t(C,w,H),_t(C,y,H),_t(C,S,H),_t(C,L,H),_t(C,b,H);for(let q=0;q<z.length;q+=1)z[q].m(C,H);_t(C,T,H),_t(C,I,H),_t(C,G,H),_t(C,j,H),_t(C,R,H),pi(P,C,H),F=!0,B||(Z=[He(o,"change",r[1]),He(m,"change",r[2])],B=!0)},p(C,[H]){if(H&1&&(o.checked=C[0].chaseMode),H&1&&(m.checked=C[0].showSensors),H&1){k=C[0].arrowLengths;let Y;for(Y=0;Y<k.length;Y+=1){const at=Qc(C,k,Y);z[Y]?z[Y].p(at,H):(z[Y]=th(at),z[Y].c(),z[Y].m(T.parentNode,T))}for(;Y<z.length;Y+=1)z[Y].d(1);z.length=k.length}const q={};H&1&&(q.gameWorld=C[0].gameWorld),P.$set(q)},i(C){F||(fi(P.$$.fragment,C),F=!0)},o(C){is(P.$$.fragment,C),F=!1},d(C){C&&vt(t),C&&vt(e),C&&vt(n),C&&vt(i),C&&vt(s),C&&vt(d),C&&vt(p),C&&vt(g),C&&vt(w),C&&vt(y),C&&vt(S),C&&vt(L),C&&vt(b),ba(z,C),C&&vt(T),C&&vt(I),C&&vt(G),C&&vt(j),C&&vt(R),mi(P,C),B=!1,Rn(Z)}}}function Gy(r,t,e){let{mode:n}=t;function i(){n.chaseMode=this.checked,e(0,n)}function s(){n.showSensors=this.checked,e(0,n)}return r.$$set=o=>{"mode"in o&&e(0,n=o.mode)},[n,i,s]}class Wy extends Hn{constructor(t){super(),Vn(this,t,Gy,ky,Dn,{mode:0})}}const Ur=new Ra(.45,.5,32,1);Ur.rotateX(Math.PI/2);const ka=new Ei({color:0,side:qe});ka.depthTest=!1;ka.depthWrite=!1;const Ga=new Ei({color:16753920,side:qe});Ga.depthTest=!1;Ga.depthWrite=!1;const lu=new Ei({color:65280,side:qe});lu.depthTest=!1;lu.depthWrite=!1;const Wa=new Ei({color:255,side:qe});Wa.depthTest=!1;Wa.depthWrite=!1;class Vy{constructor(t){Lt(this,"gameWorld");Lt(this,"raycaster");Lt(this,"pointer");Lt(this,"ring");Lt(this,"brushSize",1);Lt(this,"onPointerMove");Lt(this,"onMouseUp");Lt(this,"onMouseDown");Lt(this,"mouseDown");Lt(this,"rings");Lt(this,"road");Lt(this,"roadPoints");this.gameWorld=t,this.roadPoints=[new O(4,0,4),new O(-4,0,4),new O(-4,0,0),new O(4,0,0),new O(4,0,-4),new O(-4,0,-4)],this.road=new $c(this.roadPoints,1),this.gameWorld.addGameObject(this.road),this.gameWorld.raceTrack=this.road,this.raycaster=new Uh,this.pointer=new ot(0,0),this.onPointerMove=e=>{this.pointer.x=e.offsetX/this.gameWorld.canvas.offsetWidth*2-1,this.pointer.y=-(e.offsetY/this.gameWorld.canvas.offsetHeight)*2+1},this.ring=new Jt(Ur,ka),this.ring.scale.set(this.brushSize,this.brushSize,this.brushSize),this.ring.castShadow=!1,this.ring.receiveShadow=!1,this.ring.renderOrder=999,this.rings=[],this.mouseDown=!1,this.onMouseUp=e=>{e.button===0&&this.endDrawing(),document.removeEventListener("mouseup",this.onMouseUp)},this.onMouseDown=e=>{e.button===0&&(this.startDrawing(),document.addEventListener("mouseup",this.onMouseUp))}}startDrawing(){this.mouseDown=!0;const t=new Jt(Ur,Ga);t.scale.set(this.brushSize,this.brushSize,this.brushSize),t.castShadow=!1,t.receiveShadow=!1,t.renderOrder=999,t.position.copy(this.ring.position),this.rings=[t],this.gameWorld.scene.add(t)}addDrawing(){if(this.rings.some(n=>this.ring.position.distanceTo(n.position)<this.brushSize))return;const e=new Jt(Ur,Wa);e.scale.set(this.brushSize,this.brushSize,this.brushSize),e.castShadow=!1,e.receiveShadow=!1,e.renderOrder=999,e.position.copy(this.ring.position),this.rings.push(e),this.gameWorld.scene.add(e)}endDrawing(){this.mouseDown=!1,this.rings.length>3&&(this.gameWorld.removeGameObject(this.road),this.roadPoints=this.rings.map(t=>t.position),this.road=new $c(this.roadPoints,this.brushSize),this.gameWorld.addGameObject(this.road),this.gameWorld.raceTrack=this.road),this.rings.forEach(t=>{this.gameWorld.scene.remove(t)}),this.rings=[]}update(t){this.raycaster.setFromCamera(this.pointer,this.gameWorld.camera);const e=this.raycaster.intersectObjects([this.gameWorld.ground.mesh]);if(e.length>0){const n=e[0].point;this.ring.position.set(n.x,n.y,n.z),this.ring.visible=!0}else this.ring.visible=!1;this.ring.scale.set(this.brushSize,this.brushSize,this.brushSize),this.mouseDown&&this.addDrawing(),this.gameWorld.controls.target.set(0,0,0)}activate(){this.gameWorld.controls.maxPolarAngle=0,this.gameWorld.controls.minAzimuthAngle=0,this.gameWorld.controls.maxAzimuthAngle=0,this.gameWorld.controls.minDistance=8,this.gameWorld.controls.maxDistance=8,this.gameWorld.controls.target.set(0,0,0),this.ring.visible=!1,this.gameWorld.scene.add(this.ring),this.gameWorld.canvas.addEventListener("pointermove",this.onPointerMove),this.gameWorld.canvas.addEventListener("mousedown",this.onMouseDown)}deactivate(){this.gameWorld.controls.maxPolarAngle=Math.PI,this.gameWorld.controls.minAzimuthAngle=1/0,this.gameWorld.controls.maxAzimuthAngle=1/0,this.gameWorld.controls.minDistance=0,this.gameWorld.controls.maxDistance=50,this.gameWorld.controls.reset(),this.gameWorld.scene.remove(this.ring),this.gameWorld.canvas.removeEventListener("pointermove",this.onPointerMove),this.gameWorld.canvas.removeEventListener("mousedown",this.onMouseDown)}}const un=8;class Hy extends no{constructor(t,e,n,i,s,o=1,a=.25,l=.1){super();const c=new jn({friction:a,restitution:l}),h=new Xn(.1,.1,.2),u=new Jt(h,i);u.castShadow=!0,u.receiveShadow=!0,u.position.x=t,u.position.y=e,u.position.z=n,u.updateMatrix(),this.meshes.push(u),this.carBodyMesh=u;const d=new Ys(new M(.05,.05,.1)),p=new lt({mass:o/2,allowSleep:!1,collisionFilterGroup:un,collisionFilterMask:~un});p.addShape(d),p.position.x=u.position.x,p.position.y=u.position.y,p.position.z=u.position.z,this.bodies.push(p);const g=new ci(.033,.033,.02,16);g.rotateZ(Math.PI/2);const m=new Jt(g,s);m.castShadow=!0,m.receiveShadow=!0,m.position.x=-.1+u.position.x,m.position.y=-.05+u.position.y,m.position.z=-.1+u.position.z,this.meshes.push(m),this.wheelLFMesh=m;const f=new Lr(.033),v=new lt({mass:o/8,allowSleep:!1,material:c,collisionFilterGroup:un,collisionFilterMask:~un});v.addShape(f),v.position.x=m.position.x,v.position.y=m.position.y,v.position.z=m.position.z,this.bodies.push(v);const x=new ci(.033,.033,.02,16);x.rotateZ(Math.PI/2);const _=new Jt(x,s);_.castShadow=!0,_.receiveShadow=!0,_.position.x=.1+u.position.x,_.position.y=-.05+u.position.y,_.position.z=-.1+u.position.z,this.meshes.push(_),this.wheelRFMesh=_;const w=new Lr(.033),y=new lt({mass:o/8,allowSleep:!1,material:c,collisionFilterGroup:un,collisionFilterMask:~un});y.addShape(w),y.position.x=_.position.x,y.position.y=_.position.y,y.position.z=_.position.z,this.bodies.push(y);const S=new ci(.04,.04,.033);S.rotateZ(Math.PI/2);const L=new Jt(S,s);L.castShadow=!0,L.receiveShadow=!0,L.position.x=-.1+u.position.x,L.position.y=-.05+u.position.y,L.position.z=.1+u.position.z,this.meshes.push(L),this.wheelLBMesh=L;const b=new Lr(.04),T=new lt({mass:o/8,allowSleep:!1,material:c,collisionFilterGroup:un,collisionFilterMask:~un});T.addShape(b),T.position.x=L.position.x,T.position.y=L.position.y,T.position.z=L.position.z,this.bodies.push(T);const I=new ci(.04,.04,.033);I.rotateZ(Math.PI/2);const G=new Jt(I,s);G.castShadow=!0,G.receiveShadow=!0,G.position.x=.1+u.position.x,G.position.y=-.05+u.position.y,G.position.z=.1+u.position.z,this.meshes.push(G),this.wheelRBMesh=G;const j=new Lr(.04),R=new lt({mass:o/8,allowSleep:!1,material:c,collisionFilterGroup:un,collisionFilterMask:~un});R.addShape(j),R.position.x=G.position.x,R.position.y=G.position.y,R.position.z=G.position.z,this.bodies.push(R);const P=new M(1,0,0),F=new M(1,0,0),B=new M(1,0,0),Z=new M(1,0,0);this.constraintLF=new Cr(p,v,{pivotA:new M(-.1,-.05,-.1),axisA:P,maxForce:.99}),this.constraints.push(this.constraintLF),this.constraintRF=new Cr(p,y,{pivotA:new M(.1,-.05,-.1),axisA:F,maxForce:.99}),this.constraints.push(this.constraintRF),this.constraintLB=new Cr(p,T,{pivotA:new M(-.1,-.05,.1),axisA:B,maxForce:.99}),this.constraints.push(this.constraintLB),this.constraintRB=new Cr(p,R,{pivotA:new M(.1,-.05,.1),axisA:Z,maxForce:.99}),this.constraints.push(this.constraintRB),this.accelMotorForce=.004,this.brakeMotorForce=1,this.constraintLB.setMotorMaxForce(this.accelMotorForce),this.constraintRB.setMotorMaxForce(this.accelMotorForce),this.constraintLF.setMotorMaxForce(this.brakeMotorForce),this.constraintRF.setMotorMaxForce(this.brakeMotorForce),this.constraintLB.enableMotor(),this.constraintRB.enableMotor()}getRays(){let t=this.wheelLFMesh.position.clone().sub(this.wheelLBMesh.position).normalize(),e=this.wheelRFMesh.position.clone().sub(this.wheelRBMesh.position).normalize(),n=t.clone().add(e).divideScalar(2),i=this.wheelLBMesh.position.clone().sub(this.wheelRBMesh.position).normalize(),s=this.wheelLFMesh.position.clone().sub(this.wheelRFMesh.position).normalize(),o=i.clone().add(s).normalize();n.clone().cross(o);let a=this.carBodyMesh.position.clone().add(n.clone().multiplyScalar(.1));return[0,-15,15,-30,30,-45,45,-60,60,-75,75,-90,90].map(h=>h*Math.PI/180).sort(function(h,u){return h-u}).map(h=>{let u=n.clone().multiplyScalar(Math.cos(h)).add(o.clone().multiplyScalar(Math.sin(h))),d=a.clone().add(o.clone().multiplyScalar(.05*Math.sin(h)));return new Uh(d,u,.01,1)})}getPosition(){return this.carBodyMesh.position.clone()}getForwardDir(){let t=this.wheelLFMesh.position.clone().sub(this.wheelLBMesh.position).normalize(),e=this.wheelRFMesh.position.clone().sub(this.wheelRBMesh.position).normalize();return t.clone().add(e).divideScalar(2)}rotateY(t){const e=this.getPosition();this.bodies.forEach(n=>{const i=new O(n.position.x,n.position.y,n.position.z).sub(e);i.applyAxisAngle(new O(0,1,0),t),n.position.set(i.x+e.x,i.y+e.y,i.z+e.z),n.quaternion=n.quaternion.mult(new ee().setFromAxisAngle(new M(0,1,0),-t))})}applyInput(t,e,n,i,s){t&&!n&&(this.constraintLB.setMotorSpeed(100),this.constraintRB.setMotorSpeed(100)),n&&!t&&(this.constraintLB.setMotorSpeed(-20),this.constraintRB.setMotorSpeed(-20)),(!t&&!n||t&&n)&&(this.constraintLB.setMotorSpeed(0),this.constraintRB.setMotorSpeed(0)),e&&!i&&(this.constraintLF.axisA.z=-.25,this.constraintRF.axisA.z=-.25),i&&!e&&(this.constraintLF.axisA.z=.25,this.constraintRF.axisA.z=.25),(!e&&!i||e&&i)&&(this.constraintLF.axisA.z=0,this.constraintRF.axisA.z=0),s?(this.constraintLB.setMotorMaxForce(this.brakeMotorForce),this.constraintRB.setMotorMaxForce(this.brakeMotorForce),this.constraintLB.setMotorSpeed(0),this.constraintRB.setMotorSpeed(0),this.constraintLF.enableMotor(),this.constraintRF.enableMotor(),this.constraintLF.setMotorMaxForce(this.brakeMotorForce),this.constraintRF.setMotorMaxForce(this.brakeMotorForce),this.constraintLF.setMotorSpeed(0),this.constraintRF.setMotorSpeed(0)):(this.constraintLF.disableMotor(),this.constraintRF.disableMotor(),this.constraintLB.setMotorMaxForce(this.accelMotorForce),this.constraintRB.setMotorMaxForce(this.accelMotorForce))}}const qy=new ev,Xy=new js({color:2236962});class cu{constructor(t){Lt(this,"gameWorld");Lt(this,"car");Lt(this,"keyupHandler");Lt(this,"keydownHandler");Lt(this,"arrowHelpers",[]);Lt(this,"arrowLengths",[]);Lt(this,"chaseMode",!0);Lt(this,"W",!1);Lt(this,"A",!1);Lt(this,"S",!1);Lt(this,"D",!1);Lt(this,"SPACE",!1);Lt(this,"_showSensors",!1);this.gameWorld=t,this.keydownHandler=e=>{switch(e.key){case"w":this.W=!0,e.preventDefault();break;case"a":this.A=!0,e.preventDefault();break;case"s":this.S=!0,e.preventDefault();break;case"d":this.D=!0,e.preventDefault();break;case" ":this.SPACE=!0,e.preventDefault();break}},this.keyupHandler=e=>{switch(e.key){case"w":this.W=!1,e.preventDefault();break;case"a":this.A=!1,e.preventDefault();break;case"s":this.S=!1,e.preventDefault();break;case"d":this.D=!1,e.preventDefault();break;case" ":this.SPACE=!1,e.preventDefault();break}}}update(t){var e;if((e=this.car)==null||e.getRays().forEach((n,i)=>{var c;n.layers.set(Ua);const s=n.intersectObjects(this.gameWorld.scene.children);let o=1;s.forEach(h=>{h.distance<o&&(o=h.distance)});const a=this.arrowHelpers[i];a.setLength(o,.05,.03),this.arrowLengths[i]=o,a.setDirection(n.ray.direction),a.position.x=n.ray.origin.x,a.position.y=n.ray.origin.y,a.position.z=n.ray.origin.z,a.updateMatrix();const l=document.getElementById("arrow-length-indicator-"+i);l&&(l.style.width=o*100+"%",l.innerText=o.toFixed(2)),(c=this.car)==null||c.applyInput(this.W,this.A,this.S,this.D,this.SPACE)}),this.car){let n=this.car.getForwardDir();n.y=0,n.normalize();let i=this.car.bodies[0].velocity;document.getElementById("velocity-element").innerText=n.dot(new O(i.x,i.y,i.z)).toFixed(2)}if(this.chaseMode&&this.car){this.gameWorld.controls.target=this.car.getPosition(),this.gameWorld.controls.target.y+=.2;let n=this.car.getForwardDir();n.y=0,n.normalize(),n.multiplyScalar(-.5),n.y=.2,this.gameWorld.camera.position.copy(this.car.getPosition()),this.gameWorld.camera.position.add(n)}}get showSensors(){return this._showSensors}set showSensors(t){this._showSensors=t,this.arrowHelpers.forEach(e=>{e.visible=t})}removeCar(){this.car&&this.gameWorld.removeGameObject(this.car),delete this.car,this.arrowHelpers.forEach(t=>{this.gameWorld.scene.remove(t),t.dispose()}),this.arrowHelpers=[],this.arrowLengths=[]}respawnCar(){this.removeCar(),this.car=new Hy(this.gameWorld.raceTrack.startX,.4,this.gameWorld.raceTrack.startZ,qy,Xy,5,.25,.1),this.car.rotateY(this.gameWorld.raceTrack.startRotation),this.gameWorld.addGameObject(this.car),this.arrowHelpers=this.car.getRays().map(t=>{const e=t.ray.direction;e.normalize();const n=t.ray.origin,i=e.length(),s=16776960,o=new av(e,n,i,s);return o.visible=this.showSensors,this.gameWorld.scene.add(o),this.arrowLengths.push(i),o})}activate(){this.W=this.A=this.S=this.D=this.SPACE=!1,this.respawnCar(),document.addEventListener("keydown",this.keydownHandler),document.addEventListener("keyup",this.keyupHandler)}deactivate(){this.removeCar(),document.removeEventListener("keydown",this.keydownHandler),document.removeEventListener("keyup",this.keyupHandler)}}class jy{constructor(t){Lt(this,"gameWorld");this.gameWorld=t}update(t){}activate(){this.gameWorld.controls.reset()}deactivate(){}}class Yy extends cu{constructor(t){super(t)}}function eh(r,t,e){const n=r.slice();return n[7]=t[e],n[9]=e,n}function nh(r){let t,e=r[7]+"",n,i,s,o,a;function l(){return r[5](r[9])}return{c(){t=Mt("button"),n=Ve(e),i=Ot(),it(t,"type","button"),it(t,"class",s="transition-all grow py-2 px-4 text-md "+(r[9]===0?"rounded-bl-2xl":"")+" "+(r[9]===r[1].length-1?"rounded-br-2xl":"")+" "+(r[9]===r[0]?"font-bold text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800":"font-medium border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white text-gray-900 bg-white")+" focus:z-10")},m(c,h){_t(c,t,h),Pt(t,n),Pt(t,i),o||(a=He(t,"click",l),o=!0)},p(c,h){r=c,h&1&&s!==(s="transition-all grow py-2 px-4 text-md "+(r[9]===0?"rounded-bl-2xl":"")+" "+(r[9]===r[1].length-1?"rounded-br-2xl":"")+" "+(r[9]===r[0]?"font-bold text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800":"font-medium border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white text-gray-900 bg-white")+" focus:z-10")&&it(t,"class",s)},d(c){c&&vt(t),o=!1,a()}}}function $y(r){let t,e,n,i,s,o=r[1],a=[];for(let h=0;h<o.length;h+=1)a[h]=nh(eh(r,o,h));var l=r[2][r[0]];function c(h){return{props:{mode:h[3][h[0]]}}}return l&&(i=Xa(l,c(r))),{c(){t=Mt("div");for(let h=0;h<a.length;h+=1)a[h].c();e=Ot(),n=Mt("div"),i&&ss(i.$$.fragment),it(t,"class","sticky top-0 z-50 inline-flex rounded-md shadow-sm w-full"),it(t,"role","group"),it(n,"class","p-4")},m(h,u){_t(h,t,u);for(let d=0;d<a.length;d+=1)a[d].m(t,null);_t(h,e,u),_t(h,n,u),i&&pi(i,n,null),s=!0},p(h,[u]){if(u&19){o=h[1];let p;for(p=0;p<o.length;p+=1){const g=eh(h,o,p);a[p]?a[p].p(g,u):(a[p]=nh(g),a[p].c(),a[p].m(t,null))}for(;p<a.length;p+=1)a[p].d(1);a.length=o.length}const d={};if(u&1&&(d.mode=h[3][h[0]]),l!==(l=h[2][h[0]])){if(i){Su();const p=i;is(p.$$.fragment,1,0,()=>{mi(p,1)}),Eu()}l?(i=Xa(l,c(h)),ss(i.$$.fragment),fi(i.$$.fragment,1),pi(i,n,null)):i=null}else l&&i.$set(d)},i(h){s||(i&&fi(i.$$.fragment,h),s=!0)},o(h){i&&is(i.$$.fragment,h),s=!1},d(h){h&&vt(t),ba(a,h),h&&vt(e),h&&vt(n),i&&mi(i)}}}const Zy=2;function Jy(r,t,e){const n=["Draw","Play","Train","Teach"],i=[Ry,Fy,Uy,Wy],s=[];let o=-1,a;ou.subscribe(h=>{h&&(a=h,s.push(new Vy(a)),s.push(new cu(a)),s.push(new jy(a)),s.push(new Yy(a)),l(Zy))});function l(h){o!==h&&(o!==-1&&s[o].deactivate(),e(0,o=h),s[o].activate(),a.requestCallbackBeforeRender(s[o].update.bind(s[o])))}return[o,n,i,s,l,h=>l(h)]}class Ky extends Hn{constructor(t){super(),Vn(this,t,Jy,$y,Dn,{})}}function Qy(r){let t,e,n,i,s,o,a;return n=new Cy({}),o=new Ky({}),{c(){t=Mt("main"),e=Mt("div"),ss(n.$$.fragment),i=Ot(),s=Mt("div"),ss(o.$$.fragment),it(e,"id","canvas-pane"),it(e,"class","svelte-k4hl9j"),it(s,"id","menu-pane"),it(s,"class","overflow-y-scroll svelte-k4hl9j"),it(t,"class","svelte-k4hl9j")},m(l,c){_t(l,t,c),Pt(t,e),pi(n,e,null),Pt(t,i),Pt(t,s),pi(o,s,null),a=!0},p:ye,i(l){a||(fi(n.$$.fragment,l),fi(o.$$.fragment,l),a=!0)},o(l){is(n.$$.fragment,l),is(o.$$.fragment,l),a=!1},d(l){l&&vt(t),mi(n),mi(o)}}}class tw extends Hn{constructor(t){super(),Vn(this,t,null,Qy,Dn,{})}}new tw({target:document.getElementById("app")});
