import{h as X}from"./headerNavHighlightsUtils-zXgUO7cl.js";/* empty css              */import{a as ee}from"./animals-CV2fTrRu.js";import{g as te,a as R}from"./handleDataUtils-D8eKRCF6.js";const $=e=>`
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
  `,oe=[{number:"01",image:"../../assets/images/pay-and-feed_image_1.png",icon:"../../assets/images/pay-and-feed_icon_1.png",heading:"Your donation has an impact",description:"Providing our animals with high-quality nutritious diets is just one element of animal care at our Zoo. We do all the best so that our animals can eat food similar to what they might find in their natural habitats while making sure they get the right mix of nutrients, proteins, and vitamins to be happy and healthy. Please help us provide nutritious food for our animals by donating. The generosity of people like you can help us make sure that our animals enjoy good food that keeps them in great condition."},{number:"02",image:"../../assets/images/pay-and-feed_image_2.png",icon:"../../assets/images/pay-and-feed_icon_2.png",heading:"Make a donation",description:"You can donate through your credit card without any fees. It is easy and safe. We do not keep donors' personal information on an online network. Choose an amount to give and the pet's name if needed. One of the most effective ways you can give is by making regular donations."},{number:"03",image:"../../assets/images/pay-and-feed_image_3.png",icon:"../../assets/images/pay-and-feed_icon_3.png",heading:"Bring your food charity — straight to your favorites pets.",description:"After your donation, the animal receives its favorite foods. You can support your favorite animals or any animal you care about and make a real personal impact. Never doubt that your donation can make a difference even if it is small. "}],ne=e=>`
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
          <img src="../../assets/icons/quotes.png" alt="icon quote">
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
    `,u=(e,t,o,n)=>{t.innerHTML=e.map(a=>o(a,n)).join("")},U=e=>[...e.slice(1),e[0]],V=e=>[e[e.length-1],...e.slice(0,-1)],O=e=>`
    <button class="button turquoise" type='button' id='${e.slice(1)}'>
        ${e}
    </button>
    `,F=e=>{const t=document.createElement("div");t.classList.add("loader"),t.style.display="block",e.appendChild(t)},ae=(e,t)=>{var o;e==null||e.addEventListener("click",()=>{t.style.display="none",document.body.style.overflow="auto",document.querySelector(".overlay").style.display="none"}),document.addEventListener("keydown",n=>{n.key==="Escape"&&(t.style.display="none",document.body.style.overflow="auto",document.querySelector(".overlay").style.display="none")}),(o=document.querySelector(".overlay"))==null||o.addEventListener("click",n=>{n.target.contains(t)||(t.style.display="none",document.body.style.overflow="auto",document.querySelector(".overlay").style.display="none")})},x=(e,t,o,n)=>{const a=o.nextElementSibling.lastElementChild,s=o.nextElementSibling.firstElementChild;a&&(!e&&a?(a.textContent=t,s.style.display="inline",o.classList.add("error"),n.find(r=>r.fieldName===o.id).isValid=!1):(s.style.display="none",a.textContent="",o.classList.remove("error"),n.find(r=>r.fieldName===o.id).isValid=!0))},P=(e,t)=>{e.includes(!1)?t.disabled=!0:t.disabled=!1},y=document.querySelector(".carousel"),re=document.querySelector(".pay-and-feed__cards"),g=document.querySelector(".feedback__right-panel"),B=document.querySelector(".care-for .bottom-panel"),ie=document.getElementById("carouselLeftButton"),ce=document.getElementById("carouselRightButton"),le=document.getElementById("feedbackLeftButton"),de=document.getElementById("feedbackRightButton"),ue=document.querySelector(".feed-dialog"),z=(e,t,o)=>{e.addEventListener("click",n=>{n.target.closest(".button")&&(o.classList.add("dialog-opened"),document.body.style.overflow="hidden",document.querySelector(".overlay").style.display="block")}),t.addEventListener("click",()=>{o.classList.remove("dialog-opened"),document.body.style.overflow="auto",document.querySelector(".overlay").style.display="none"})};re.innerHTML=oe.map(e=>ne(e)).join("");const me=ee.map(e=>({feedCardImgPath:e.feedCardImgPath,feedCardDescription:e.feedCardDescription}));B.innerHTML=me.filter(({feedCardDescription:e})=>!!e).map(e=>se(e)).join("");const v=document.createElement("img");v.setAttribute("src","../../assets/images/koala_feedcard.png");v.setAttribute("alt","Koala image");v.setAttribute("height","660px");v.setAttribute("width","910px");B.prepend(v);const pe=document.querySelector("#feedDonationCloseBtn"),ye=document.querySelector(".action-container"),W=["$20","$30","$50","$80","$100","other amount"];ye.innerHTML=W.map(e=>O(e)).join("");z(B,pe,ue);window.onload=async()=>{X(0),J(localStorage.getItem("username")),await xe(C),S()};const ge=document.querySelector(".donation-dialog__container"),fe=document.querySelector(".donation-dialog__chips--container"),f=document.querySelector("#backBtn"),h=document.querySelector("#nextBtn"),M=document.querySelector("#completeDonationBtn"),he=document.querySelectorAll(".step-list__item"),ve=document.querySelectorAll(".donation-dialog__info");let c=1;const S=()=>{c===1?f.style.opacity="0":f.style.opacity="1",c===3?(M.style.display="block",h.style.display="none"):(M.style.display="none",h.style.display="block"),he.forEach((e,t,o)=>{c===[...o].indexOf(e)+1?e.classList.add("active-step"):e.classList.remove("active-step")}),ve.forEach(e=>{const t=+e.id.slice(-1);c===t?e.style.display="block":e.style.display="none"})},K=()=>{c+=1},_e=()=>{c>=1&&(c-=1)};f==null||f.addEventListener("click",()=>{_e(),S()});h==null||h.addEventListener("click",()=>{K(),S()});fe.innerHTML=W.slice(0,-1).map(e=>O(e)).join("");const be=e=>!!Number(e),Z=e=>!!e,d=[{fieldName:"otherAmount",isValid:!1,validate:e=>be(e),errorMsg:"Please enter a valid amount"},{fieldName:"selectedPet",isValid:!1,validate:e=>Z(e),errorMsg:"Please select a pet"}],E=document.querySelectorAll(".donation-dialog__chips--container button"),A=document.querySelector("#donationsAmount"),_=document.querySelector("#otherAmount"),k=document.querySelector("#step1Form"),T=document.querySelector("#nextBtnStep1"),N=document.querySelector(".error-container.subheader"),Se=document.querySelectorAll(".select-pet__list--item"),Ee=document.querySelector("#selectedPet");d.forEach(({fieldName:e,validate:t,isValid:o,errorMsg:n})=>{const a=document.querySelector(`#${e}`);a&&(E.forEach(s=>{s.addEventListener("click",()=>{E.forEach(m=>m.classList.remove("active")),s.classList.add("active");const r=s.id;_.value="",A.value=r})}),_.addEventListener("blur",s=>{E.forEach(p=>p.classList.remove("active"));const{value:r}=s.target;o=t(r),A.value=_.value,_.value,x(o,n,a,d);const m=d.map(p=>p.isValid);P(m,T),N.textContent=""}),Se.forEach(s=>{s.addEventListener("click",()=>{const r=s.id;if(e==="selectedPet"){o=Z(r),console.log(a),Ee.value=r,x(o,n,a,d);const m=d.map(p=>p.isValid);P(m,T),console.log(d),N.textContent=""}})}),k==null||k.addEventListener("submit",s=>{s.preventDefault(),K(),S()}))});const L=document.querySelector("#petsDropdownBtn"),b=document.querySelector(".select-pet__list"),ke=document.querySelector("#monthDropdownBtn"),Le=document.querySelector(".select-month__list"),qe=document.querySelector("#yearDropdownBtn"),we=document.querySelector(".select-year__list"),Ce=document.querySelector("#donationsSectionBtn"),$e=document.querySelector("#makeYourDonationCloseBtn"),G=(e,t,o)=>{e.addEventListener("click",n=>{t&&n.target.closest(`${o}`)&&(t==null||t.classList.toggle("open"))})};L==null||L.addEventListener("click",e=>{b&&e.target.closest("#petsDropdownBtn")&&(b==null||b.classList.toggle("open"))});G(ke,Le,"#monthDropdownBtn");G(qe,we,"#yearDropdownBtn");z(Ce,$e,ge);const q=document.querySelector(".login-user__info"),D=document.querySelector(".login-user__modal"),j=document.querySelector(".user-login"),Ie=document.querySelector(".login-user__profile-info--name"),Be=document.querySelector(".login-user__profile-info--email"),Y=document.querySelector("#isLoggedIn"),H=document.querySelector("#isLoggedOut"),De=document.querySelector("#userLoginModalCloseBtn"),w=document.querySelector("#signOutBtn");let C=!1;const J=e=>{e?(console.log("is loged in"),j.textContent=e,C=!0,Y.style.display="flex",H.style.display="none"):(console.log("is not loged in"),j.textContent="",Y.style.display="none",H.style.display="flex",C=!1)};async function xe(e){if(e){const t=localStorage.getItem("auth_token"),{data:{name:o,email:n}}=await te(t,"/auth/profile");localStorage.setItem("name",o),localStorage.setItem("email",n),Ie.textContent=o,Be.textContent=n}}q==null||q.addEventListener("click",e=>{e.target.closest(".login-user__info")&&(D.style.display="block",document.body.style.overflow="hidden",document.querySelector(".overlay").style.display="block")});ae(De,D);const Pe=()=>{localStorage.clear(),J(localStorage.getItem("username"))};w==null||w.addEventListener("click",()=>{Pe(),D.style.display="none",document.body.style.overflow="auto",document.querySelector(".overlay").style.display="none"});const Me=["../../assets/images/panda_lucas.png","../../assets/images/lemur_andy.png","../../assets/images/gorilla_glen.png","../../assets/images/crocodile_mike.png","../../assets/images/did_you_know_eagles.png","../../assets/images/koala_liz.png","../../assets/images/lion_shake.png","../../assets/images/tiger_senja.png"];let l;const Q=(e,t)=>{const o="Something went wrong. Please, refresh the page";t.innerHTML=`<p class="subheader error-message">
      <span>${e.message}.</span>
      <br>
      <span>${o}</span>
      </p>
    `};async function Ae(){F(y);try{const t=(await R("pets")).data.slice(0,8).map((o,n)=>o={...o,img:Me[n]});l=[...t],u(t,y,$)}catch(e){Q(e,y)}}ie.addEventListener("click",()=>{l=V(l),u(l,y,$)});ce.addEventListener("click",()=>{l=U(l),u(l,y,$)});let i;async function Te(){F(g);try{i=[...(await R("feedback")).data],u(i,g,I)}catch(e){Q(e,g)}}async function Ne(){await Ae(),await Te()}Ne();le.addEventListener("click",()=>{i=V(i),u(i,g,I)});de.addEventListener("click",()=>{i=U(i),u(i,g,I)});
