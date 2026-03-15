import"./buttons-CH7OIFB-.js";import{h as C}from"./headerNavHighlightsUtils-BD3-y1ED.js";import{a as x}from"./handleDataUtils-MkUHwuzO.js";const P=new URLSearchParams(window.location.search),m=P.get("id"),u=[{id:1,imgPath:"/online-zoo/assets/images/did_you_know_panda.png",videoId:"gnEuhfyZPPQ"},{id:2,imgPath:"/online-zoo/assets/images/did_you_know_lemur.png",videoId:"2M1BmfHlOEI"},{id:3,imgPath:"/online-zoo/assets/images/did_you_know_gorilla.png",videoId:"yfSyjwY6zSQ"},{id:5,imgPath:"/online-zoo/assets/images/did_you_know_eagles.png",videoId:"41eq4VzCYc4"}],L=document.getElementById("didYouKnow"),B=document.getElementById("youtubePreviewContainer"),_=document.getElementById("commonName"),z=document.getElementById("scientificName"),k=document.getElementById("type"),N=document.getElementById("size"),Y=document.getElementById("diet"),D=document.getElementById("habitat"),K=document.getElementById("range"),H=document.getElementById("didYouKnowImgPath"),W=document.getElementById("didYouKnowDescription"),A=e=>{const{size:t,commonName:i,description:n,diet:o,detailedDescription:h,habitat:f,scientificName:v,range:I,type:S,id:b}=e.data,s=u.find(q=>q.id===b);console.log(u,s),N.textContent=t,Y.textContent=o,D.textContent=f,K.textContent=I,z.textContent=v,_.textContent=i,k.textContent=S,W.textContent=h,L.textContent=n,H.src=s.imgPath,w(s.videoId)},w=e=>{console.log(e),B.innerHTML=`
    <iframe 
        width="560"
        height="315"
        src="https://www.youtube.com/embed/${e}?si=jb_cw1zS6xHcHViX"
        title="YouTube video player"
        frameborder="0" 
        allow="accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture;
        web-share"
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
    </iframe>
    `},y=document.querySelector(".animal-nav"),a=document.querySelector(".panel-button"),g=document.querySelector(".fa-angles-left"),p=document.querySelector(".fa-angles-right"),E=document.querySelectorAll(".animal-nav-list-item");let l=!1;a==null||a.addEventListener("click",()=>{l?(l=!1,g.style.display="none",p.style.display="inline",y.classList.remove("panel-opened"),E.forEach(e=>{const t=e.querySelector(".nav-description");t.style.display="none",e.querySelector(".img-wrapper").classList.remove("img-wrapper-opened");const n=e.querySelector(".live-cams-img");n.style.height="60px",n.firstElementChild.style.fill="#20113d";const o=e.querySelector(".panel-list a");o.style.width="100%"})):(l=!0,p.style.display="none",g.style.display="inline",y.classList.add("panel-opened"),E.forEach(e=>{const t=e.querySelector(".nav-description");t.style.display="inline",e.querySelector(".img-wrapper").classList.add("img-wrapper-opened");const n=e.querySelector(".live-cams-img");n.style.height="50px",n.firstElementChild.style.fill="#f58021";const o=e.querySelector(".panel-list a");o.style.width="55%"}))});const c=document.getElementById("youtubeCarouselLeftButton"),d=document.getElementById("youtubeCarouselRightButton"),r=document.querySelector(".yt-carousel");c==null||c.addEventListener("click",()=>{});d==null||d.addEventListener("click",()=>{});r==null||r.addEventListener("click",e=>{const t=e.target.closest(".youtube-preview-thumbnail-container");if(!t)return;document.querySelector(".selected-yt-preview").classList.remove("selected-yt-preview"),t.classList.add("selected-yt-preview"),w(t.id)});window.onload=async()=>{console.log(m);const e=await M(m);console.log(e),A(e),C(2)};async function M(e){return await x(`/pets/${e}`)}
