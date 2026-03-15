import"./buttons-CH7OIFB-.js";/* empty css              */import{a as X}from"./animals-BAIZUoss.js";import{h as ee}from"./headerNavHighlightsUtils-BD3-y1ED.js";import{g as te,a as Y}from"./handleDataUtils-MkUHwuzO.js";import{s as z,c as P}from"./handleFormInputUtils-BpVNkJOq.js";const $=e=>`
    <a href="../zoos/?id=${e.id}" class="carousel-item">
      <div class="carousel-item__wrapper">
        <div class="top-part">
          <p class="subheader animal-name">${e.name}</p>
          <img src="${e.img}" alt="${e.name}">
        </div>
        <div class="bottom-part">
          <p class="subheader">${e.commonName}</p>
          <p>${e.description}</p>
          <span class="button blank">
            <span>view live cam</span>
            <i class="fa-solid fa-arrow-right"></i>
          </span>
        </div>
      </div>
    </a>
  `,oe=[{number:"01",image:"/online-zoo/assets/images/pay-and-feed_image_1.png",icon:"/online-zoo/assets/images/pay-and-feed_icon_1.png",heading:"Your donation has an impact",description:"Providing our animals with high-quality nutritious diets is just one element of animal care at our Zoo. We do all the best so that our animals can eat food similar to what they might find in their natural habitats while making sure they get the right mix of nutrients, proteins, and vitamins to be happy and healthy. Please help us provide nutritious food for our animals by donating. The generosity of people like you can help us make sure that our animals enjoy good food that keeps them in great condition."},{number:"02",image:"/online-zoo/assets/images/pay-and-feed_image_2.png",icon:"/online-zoo/assets/images/pay-and-feed_icon_2.png",heading:"Make a donation",description:"You can donate through your credit card without any fees. It is easy and safe. We do not keep donors' personal information on an online network. Choose an amount to give and the pet's name if needed. One of the most effective ways you can give is by making regular donations."},{number:"03",image:"/online-zoo/assets/images/pay-and-feed_image_3.png",icon:"/online-zoo/assets/images/pay-and-feed_icon_3.png",heading:"Bring your food charity — straight to your favorites pets.",description:"After your donation, the animal receives its favorite foods. You can support your favorite animals or any animal you care about and make a real personal impact. Never doubt that your donation can make a difference even if it is small. "}],ne=e=>`
    <div>
        <div class="pay-and-feed__header">
            <span>${e.number}</span>
            <hr class="pay-and-feed__header--line">
        </div>
        <div class="pay-and-feed__content">
            <img class="pay-and-feed__image" src="${e.image}" alt="pay and feed image ${e.number}">
            <div class="pay-and-feed__description">
                <img class="pay-and-feed__icon" src="${e.icon}" alt="pay and feed icon ${e.number}">
                <p class="subheader">${e.heading}</p>
                <p>${e.description}</p>
            </div>
        </div>
    </div>
  `,I=e=>`
    <div class="feedback__card">
          <img src="/online-zoo/assets/icons/quotes.png" alt="icon quote">
          <p class="subheader">
            <span>${e.city}</span>, <span>${e.month}</span> <span>${e.year}</span>
          </p>
          <p>${e.text}</p>
          <p class="feedback__card--user">${e.name}</p>
    </div>
  `,se=e=>`
        <div class="feedcard">
            <img src="${e.feedCardImgPath}" alt="feedcard">
            <p>${e.feedCardDescription}</p>
            <button class="button blank">
                <span>feed</span>
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    `,u=(e,t,o,n)=>{t.innerHTML=e.map(c=>o(c,n)).join("")},H=e=>[...e.slice(1),e[0]],R=e=>[e[e.length-1],...e.slice(0,-1)],U=e=>`
    <button class="button turquoise" type='button' id='${e.slice(1)}'>
        ${e}
    </button>
    `,O=e=>{const t=document.createElement("div");t.classList.add("loader"),t.style.display="block",e.appendChild(t)},ae=(e,t)=>{var o;e==null||e.addEventListener("click",()=>{t.style.display="none",document.body.style.overflow="auto",document.querySelector(".overlay").style.display="none"}),document.addEventListener("keydown",n=>{n.key==="Escape"&&(t.style.display="none",document.body.style.overflow="auto",document.querySelector(".overlay").style.display="none")}),(o=document.querySelector(".overlay"))==null||o.addEventListener("click",n=>{n.target.contains(t)||(t.style.display="none",document.body.style.overflow="auto",document.querySelector(".overlay").style.display="none")})},y=document.querySelector(".carousel"),ie=document.querySelector(".pay-and-feed__cards"),g=document.querySelector(".feedback__right-panel"),B=document.querySelector(".care-for .bottom-panel"),re=document.getElementById("carouselLeftButton"),ce=document.getElementById("carouselRightButton"),le=document.getElementById("feedbackLeftButton"),de=document.getElementById("feedbackRightButton"),ue=document.querySelector(".feed-dialog"),V=(e,t,o)=>{e.addEventListener("click",n=>{n.target.closest(".button")&&(o.classList.add("dialog-opened"),document.body.style.overflow="hidden",document.querySelector(".overlay").style.display="block")}),t.addEventListener("click",()=>{o.classList.remove("dialog-opened"),document.body.style.overflow="auto",document.querySelector(".overlay").style.display="none"})};ie.innerHTML=oe.map(e=>ne(e)).join("");const me=X.map(e=>({feedCardImgPath:e.feedCardImgPath,feedCardDescription:e.feedCardDescription}));B.innerHTML=me.filter(({feedCardDescription:e})=>!!e).map(e=>se(e)).join("");const v=document.createElement("img");v.setAttribute("src","/online-zoo/assets/images/koala_feedcard.png");v.setAttribute("alt","Koala image");v.setAttribute("height","660px");v.setAttribute("width","910px");B.prepend(v);const pe=document.querySelector("#feedDonationCloseBtn"),ye=document.querySelector(".action-container"),W=["$20","$30","$50","$80","$100","other amount"];ye.innerHTML=W.map(e=>U(e)).join("");V(B,pe,ue);window.onload=async()=>{ee(0),J(localStorage.getItem("username")),await ze(C),S()};const ge=document.querySelector(".donation-dialog__container"),fe=document.querySelector(".donation-dialog__chips--container"),f=document.querySelector("#backBtn"),h=document.querySelector("#nextBtn"),x=document.querySelector("#completeDonationBtn"),he=document.querySelectorAll(".step-list__item"),ve=document.querySelectorAll(".donation-dialog__info");let i=1;const S=()=>{i===1?f.style.opacity="0":f.style.opacity="1",i===3?(x.style.display="block",h.style.display="none"):(x.style.display="none",h.style.display="block"),he.forEach((e,t,o)=>{i===[...o].indexOf(e)+1?e.classList.add("active-step"):e.classList.remove("active-step")}),ve.forEach(e=>{const t=+e.id.slice(-1);i===t?e.style.display="block":e.style.display="none"})},K=()=>{i+=1},_e=()=>{i>=1&&(i-=1)};f==null||f.addEventListener("click",()=>{_e(),S()});h==null||h.addEventListener("click",()=>{K(),S()});fe.innerHTML=W.slice(0,-1).map(e=>U(e)).join("");const be=e=>!!Number(e),Z=e=>!!e,d=[{fieldName:"otherAmount",isValid:!1,validate:e=>be(e),errorMsg:"Please enter a valid amount"},{fieldName:"selectedPet",isValid:!1,validate:e=>Z(e),errorMsg:"Please select a pet"}],E=document.querySelectorAll(".donation-dialog__chips--container button"),A=document.querySelector("#donationsAmount"),_=document.querySelector("#otherAmount"),k=document.querySelector("#step1Form"),M=document.querySelector("#nextBtnStep1"),T=document.querySelector(".error-container.subheader"),Se=document.querySelectorAll(".select-pet__list--item"),Ee=document.querySelector("#selectedPet");d.forEach(({fieldName:e,validate:t,isValid:o,errorMsg:n})=>{const c=document.querySelector(`#${e}`);c&&(E.forEach(s=>{s.addEventListener("click",()=>{E.forEach(m=>m.classList.remove("active")),s.classList.add("active");const l=s.id;_.value="",A.value=l})}),_.addEventListener("blur",s=>{E.forEach(p=>p.classList.remove("active"));const{value:l}=s.target;o=t(l),A.value=_.value,_.value,z(o,n,c,d);const m=d.map(p=>p.isValid);P(m,M),T.textContent=""}),Se.forEach(s=>{s.addEventListener("click",()=>{const l=s.id;if(e==="selectedPet"){o=Z(l),console.log(c),Ee.value=l,z(o,n,c,d);const m=d.map(p=>p.isValid);P(m,M),console.log(d),T.textContent=""}})}),k==null||k.addEventListener("submit",s=>{s.preventDefault(),K(),S()}))});const q=document.querySelector("#petsDropdownBtn"),b=document.querySelector(".select-pet__list"),ke=document.querySelector("#monthDropdownBtn"),qe=document.querySelector(".select-month__list"),Le=document.querySelector("#yearDropdownBtn"),we=document.querySelector(".select-year__list"),Ce=document.querySelector("#donationsSectionBtn"),$e=document.querySelector("#makeYourDonationCloseBtn"),G=(e,t,o)=>{e.addEventListener("click",n=>{t&&n.target.closest(`${o}`)&&(t==null||t.classList.toggle("open"))})};q==null||q.addEventListener("click",e=>{b&&e.target.closest("#petsDropdownBtn")&&(b==null||b.classList.toggle("open"))});G(ke,qe,"#monthDropdownBtn");G(Le,we,"#yearDropdownBtn");V(Ce,$e,ge);const L=document.querySelector(".login-user__info"),D=document.querySelector(".login-user__modal"),j=document.querySelector(".user-login"),Ie=document.querySelector(".login-user__profile-info--name"),Be=document.querySelector(".login-user__profile-info--email"),F=document.querySelector("#isLoggedIn"),N=document.querySelector("#isLoggedOut"),De=document.querySelector("#userLoginModalCloseBtn"),w=document.querySelector("#signOutBtn");let C=!1;const J=e=>{e?(console.log("is loged in"),j.textContent=e,C=!0,F.style.display="flex",N.style.display="none"):(console.log("is not loged in"),j.textContent="",F.style.display="none",N.style.display="flex",C=!1)};async function ze(e){if(e){const t=localStorage.getItem("auth_token"),{data:{name:o,email:n}}=await te(t,"/auth/profile");localStorage.setItem("name",o),localStorage.setItem("email",n),Ie.textContent=o,Be.textContent=n}}L==null||L.addEventListener("click",e=>{e.target.closest(".login-user__info")&&(D.style.display="block",document.body.style.overflow="hidden",document.querySelector(".overlay").style.display="block")});ae(De,D);const Pe=()=>{localStorage.clear(),J(localStorage.getItem("username"))};w==null||w.addEventListener("click",()=>{Pe(),D.style.display="none",document.body.style.overflow="auto",document.querySelector(".overlay").style.display="none"});const xe=["/online-zoo/assets/images/panda_lucas.png","/online-zoo/assets/images/lemur_andy.png","/online-zoo/assets/images/gorilla_glen.png","/online-zoo/assets/images/crocodile_mike.png","/online-zoo/assets/images/did_you_know_eagles.png","/online-zoo/assets/images/koala_liz.png","/online-zoo/assets/images/lion_shake.png","/online-zoo/assets/images/tiger_senja.png"];let r;const Q=(e,t)=>{const o="Something went wrong. Please, refresh the page";t.innerHTML=`<p class="subheader error-message">
      <span>${e.message}.</span>
      <br>
      <span>${o}</span>
      </p>
    `};async function Ae(){O(y);try{const t=(await Y("pets")).data.slice(0,8).map((o,n)=>o={...o,img:xe[n]});r=[...t],u(t,y,$)}catch(e){Q(e,y)}}re.addEventListener("click",()=>{r=R(r),u(r,y,$)});ce.addEventListener("click",()=>{r=H(r),u(r,y,$)});let a;async function Me(){O(g);try{a=[...(await Y("feedback")).data],u(a,g,I)}catch(e){Q(e,g)}}async function Te(){await Ae(),await Me()}Te();le.addEventListener("click",()=>{a=R(a),u(a,g,I)});de.addEventListener("click",()=>{a=H(a),u(a,g,I)});
