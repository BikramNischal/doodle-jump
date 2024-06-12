var u=Object.defineProperty;var f=(t,e,n)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var s=(t,e,n)=>(f(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const c=document.querySelector(".game-container"),r=document.querySelector(".canvas"),l=r.getContext("2d");r.height=c.getBoundingClientRect().height;r.width=c.getBoundingClientRect().width;class m{constructor(e){s(this,"x");s(this,"y");s(this,"h");s(this,"w");s(this,"img");s(this,"dx");s(this,"dy");s(this,"gravity");s(this,"loaded");s(this,"jumpHeight");s(this,"moveingRight");s(this,"moveingLeft");this.x=r.width/2,this.y=r.height/2,this.h=50,this.w=50,this.dx=5,this.dy=0,this.gravity=.1,this.jumpHeight=-4,this.moveingRight=!1,this.moveingLeft=!1,this.img=new Image,this.img.src=e,this.loaded=!1,this.img.onload=()=>{this.loaded=!0,this.drawDoodler()}}drawDoodler(){this.loaded&&l.drawImage(this.img,this.x,this.y,this.w,this.h)}updateImage(e){this.img.src=e,this.drawDoodler()}fall(){this.dy+=this.gravity,this.y+=this.dy,this.y+this.h>r.height&&(this.y=r.height-this.h,this.dy=0)}jump(){this.dy=this.jumpHeight}update(){this.moveingLeft?(this.updateImage("./doodler-left.png"),this.x-=this.dx):this.moveingRight&&(this.updateImage("./doodler-right.png"),this.x+=this.dx),this.x+this.w<0&&(this.x=r.width),this.x>r.width&&(this.x=0),this.fall()}}function y(t,e){t.key===" "?e.jump():t.key==="ArrowRight"?e.moveingRight=!0:t.key==="ArrowLeft"&&(e.moveingLeft=!0)}function p(t,e){t.key==="ArrowRight"?e.moveingRight=!1:t.key==="ArrowLeft"&&(e.moveingLeft=!1)}const w=document.querySelector(".btn--start"),v=document.querySelector(".main-menu");let h=new m("./doodler-right.png");h.drawDoodler();function g(){l.clearRect(0,0,r.width,r.height),h.drawDoodler(),h.update(),requestAnimationFrame(g)}w.onclick=()=>{v.style.display="none",g()};document.addEventListener("keydown",t=>y(t,h));document.addEventListener("keyup",t=>p(t,h));
