var H=Object.defineProperty;var I=(e,t,n)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var i=(e,t,n)=>(I(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const p=document.querySelector(".game-container"),d=document.querySelector(".canvas"),c=d.getContext("2d");d.height=p.getBoundingClientRect().height;d.width=p.getBoundingClientRect().width;const r=d.height,a=d.width,P=50,S=50,w=50,T=10,M=12,x=r/8;class L{constructor(t){i(this,"x");i(this,"y");i(this,"h");i(this,"w");i(this,"img");i(this,"dx");i(this,"dy");i(this,"gravity");i(this,"loaded");i(this,"jumpHeight");i(this,"moveingRight");i(this,"moveingLeft");this.x=a/2,this.y=r/2,this.h=S,this.w=P,this.dx=8,this.dy=0,this.gravity=.1,this.jumpHeight=-4,this.moveingRight=!1,this.moveingLeft=!1,this.img=new Image,this.img.src=t,this.loaded=!1,this.img.onload=()=>{this.loaded=!0,this.draw()}}draw(){this.loaded&&c.drawImage(this.img,this.x,this.y,this.w,this.h)}updateImage(t){this.img.src=t,this.draw()}fall(){this.dy+=this.gravity,this.y+=this.dy}jump(){this.dy=this.jumpHeight}onPlatform(t){if(this.y+this.h>=t.y&&this.y+this.h<=t.y+t.h){let n=t.x-this.w,l=t.x+t.w;this.x>=n&&this.x<=l&&this.jump()}}update(){this.moveingLeft?(this.updateImage("./doodler-left.png"),this.x-=this.dx):this.moveingRight&&(this.updateImage("./doodler-right.png"),this.x+=this.dx),this.x+this.w<0&&(this.x=a),this.x>a&&(this.x=0),this.y<r/2&&(this.y=r/2),this.fall()}}function v(e){return Math.floor(Math.random()*e)}class q{constructor(t,n){i(this,"x");i(this,"y");i(this,"h");i(this,"w");i(this,"dy");i(this,"img");this.x=t,this.y=n,this.w=w,this.h=T,this.dy=5,this.img=new Image,this.img.src="./platform.png"}draw(){c.drawImage(this.img,this.x,this.y,this.w,this.h)}update(){this.y>r&&(this.y=0+x,this.x=v(a-this.w))}}function A(){const e=[];for(let t=0;t<M;++t)e.push(new q(v(a-w),r-t*x));return e}function E(e,t){e.key==="ArrowRight"?t.moveingRight=!0:e.key==="ArrowLeft"&&(t.moveingLeft=!0)}function D(e,t){e.key==="ArrowRight"?t.moveingRight=!1:e.key==="ArrowLeft"&&(t.moveingLeft=!1)}const _=document.querySelector(".btn--start"),F=document.querySelector(".btn--restart"),b=document.querySelector(".main-menu"),y=document.querySelector(".restart-menu"),C=document.querySelector(".score");let h=new L("./doodler-right.png"),R=A(),f=0,u=!1;function G(){c.fillStyle="black",c.font="32px Arial",c.fillText("Score: "+f,20,50)}function j(){h=new L("./doodler-right.png"),R=A(),f=0,u=!1}function g(){u||(c.clearRect(0,0,a,r),R.forEach(e=>{const t=e.y-h.dy;t>e.y&&(e.y=t),e.y>r&&f++,e.update(),e.draw(),h.onPlatform(e)}),h.draw(),h.update(),G(),h.y>r&&(u=!0),requestAnimationFrame(g))}function O(){_.onclick=()=>{b.style.display="none",g()},F.onclick=()=>{y.style.display="none",j(),g()},u&&(y.style.display="flex",C.innerHTML=`Score ${f} points`),requestAnimationFrame(O)}O();document.addEventListener("keydown",e=>E(e,h));document.addEventListener("keyup",e=>D(e,h));