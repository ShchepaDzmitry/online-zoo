import{h as o}from"./headerNavHighlightsUtils-zXgUO7cl.js";import{a as t}from"./animals-CV2fTrRu.js";const e=a=>{const n=a.mapPageIconPath.split("/")[4].split(".")[0];return`
    <img src="${a.mapPageIconPath}" alt="Animal map icon" class="${n}">
  `},m=document.querySelector(".map-container");m.innerHTML=t.map(a=>e(a)).join("");window.onload=()=>{o(1)};
