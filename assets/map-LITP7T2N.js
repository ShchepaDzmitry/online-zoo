import"./buttons-CH7OIFB-.js";import{a as o}from"./animals-BAIZUoss.js";import{h as t}from"./headerNavHighlightsUtils-BD3-y1ED.js";const m=a=>{const n=a.mapPageIconPath.split("/")[4].split(".")[0];return`
    <img src="${a.mapPageIconPath}" alt="Animal map icon" class="${n}">
  `},e=document.querySelector(".map-container");e.innerHTML=o.map(a=>m(a)).join("");window.onload=()=>{t(1)};
