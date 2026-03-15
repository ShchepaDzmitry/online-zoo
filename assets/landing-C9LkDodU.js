import"./buttons-CH7OIFB-.js";/* empty css              */import{s as Y}from"./loaderUtils-q2Ly5egC.js";import{a as X}from"./animals-BAIZUoss.js";import{h as ee}from"./headerNavHighlightsUtils-BD3-y1ED.js";import{g as te,a as H}from"./handleDataUtils-BfIG_Wfg.js";import{c as oe}from"./closeModalUtils-DZX_4jou.js";import{s as z,c as P}from"./handleFormInputUtils-BpVNkJOq.js";const B=e=>`
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
  `,ne=[{number:"01",image:"/online-zoo/assets/images/pay-and-feed_image_1.png",icon:"/online-zoo/assets/images/pay-and-feed_icon_1.png",heading:"Your donation has an impact",description:"Providing our animals with high-quality nutritious diets is just one element of animal care at our Zoo. We do all the best so that our animals can eat food similar to what they might find in their natural habitats while making sure they get the right mix of nutrients, proteins, and vitamins to be happy and healthy. Please help us provide nutritious food for our animals by donating. The generosity of people like you can help us make sure that our animals enjoy good food that keeps them in great condition."},{number:"02",image:"/online-zoo/assets/images/pay-and-feed_image_2.png",icon:"/online-zoo/assets/images/pay-and-feed_icon_2.png",heading:"Make a donation",description:"You can donate through your credit card without any fees. It is easy and safe. We do not keep donors' personal information on an online network. Choose an amount to give and the pet's name if needed. One of the most effective ways you can give is by making regular donations."},{number:"03",image:"/online-zoo/assets/images/pay-and-feed_image_3.png",icon:"/online-zoo/assets/images/pay-and-feed_icon_3.png",heading:"Bring your food charity — straight to your favorites pets.",description:"After your donation, the animal receives its favorite foods. You can support your favorite animals or any animal you care about and make a real personal impact. Never doubt that your donation can make a difference even if it is small. "}],se=e=>`
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
  `,$=e=>`
    <div class="feedback__card">
          <img src="/online-zoo/assets/icons/quotes.png" alt="icon quote">
          <p class="subheader">
            <span>${e.city}</span>, <span>${e.month}</span> <span>${e.year}</span>
          </p>
          <p>${e.text}</p>
          <p class="feedback__card--user">${e.name}</p>
    </div>
  `,ae=e=>`
        <div class="feedcard">
            <img src="${e.feedCardImgPath}" alt="feedcard">
            <p>${e.feedCardDescription}</p>
            <button class="button blank">
                <span>feed</span>
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    `,u=(e,o,t,n)=>{o.innerHTML=e.map(c=>t(c,n)).join("")},R=e=>[...e.slice(1),e[0]],U=e=>[e[e.length-1],...e.slice(0,-1)],O=e=>`
    <button class="button turquoise" type='button' id='${e.slice(1)}'>
        ${e}
    </button>
    `,g=document.querySelector(".carousel"),ie=document.querySelector(".pay-and-feed__cards"),y=document.querySelector(".feedback__right-panel"),I=document.querySelector(".care-for .bottom-panel"),re=document.getElementById("carouselLeftButton"),ce=document.getElementById("carouselRightButton"),le=document.getElementById("feedbackLeftButton"),de=document.getElementById("feedbackRightButton"),ue=document.querySelector(".feed-dialog"),V=(e,o,t)=>{e.addEventListener("click",n=>{n.target.closest(".button")&&(t.classList.add("dialog-opened"),document.body.style.overflow="hidden",document.querySelector(".overlay").style.display="block")}),o.addEventListener("click",()=>{t.classList.remove("dialog-opened"),document.body.style.overflow="auto",document.querySelector(".overlay").style.display="none"})};ie.innerHTML=ne.map(e=>se(e)).join("");const me=X.map(e=>({feedCardImgPath:e.feedCardImgPath,feedCardDescription:e.feedCardDescription}));I.innerHTML=me.filter(({feedCardDescription:e})=>!!e).map(e=>ae(e)).join("");const v=document.createElement("img");v.setAttribute("src","/online-zoo/assets/images/koala_feedcard.png");v.setAttribute("alt","Koala image");v.setAttribute("height","660px");v.setAttribute("width","910px");I.prepend(v);const pe=document.querySelector("#feedDonationCloseBtn"),ge=document.querySelector(".action-container"),W=["$20","$30","$50","$80","$100","other amount"];ge.innerHTML=W.map(e=>O(e)).join("");V(I,pe,ue);window.onload=async()=>{ee(0),J(localStorage.getItem("username")),await ze(w),S()};const ye=document.querySelector(".donation-dialog__container"),fe=document.querySelector(".donation-dialog__chips--container"),f=document.querySelector("#backBtn"),h=document.querySelector("#nextBtn"),M=document.querySelector("#completeDonationBtn"),he=document.querySelectorAll(".step-list__item"),ve=document.querySelectorAll(".donation-dialog__info");let i=1;const S=()=>{i===1?f.style.opacity="0":f.style.opacity="1",i===3?(M.style.display="block",h.style.display="none"):(M.style.display="none",h.style.display="block"),he.forEach((e,o,t)=>{i===[...t].indexOf(e)+1?e.classList.add("active-step"):e.classList.remove("active-step")}),ve.forEach(e=>{const o=+e.id.slice(-1);i===o?e.style.display="block":e.style.display="none"})},K=()=>{i+=1},_e=()=>{i>=1&&(i-=1)};f==null||f.addEventListener("click",()=>{_e(),S()});h==null||h.addEventListener("click",()=>{K(),S()});fe.innerHTML=W.slice(0,-1).map(e=>O(e)).join("");const be=e=>!!Number(e),Z=e=>!!e,d=[{fieldName:"otherAmount",isValid:!1,validate:e=>be(e),errorMsg:"Please enter a valid amount"},{fieldName:"selectedPet",isValid:!1,validate:e=>Z(e),errorMsg:"Please select a pet"}],E=document.querySelectorAll(".donation-dialog__chips--container button"),x=document.querySelector("#donationsAmount"),_=document.querySelector("#otherAmount"),k=document.querySelector("#step1Form"),A=document.querySelector("#nextBtnStep1"),T=document.querySelector(".error-container.subheader"),Se=document.querySelectorAll(".select-pet__list--item"),Ee=document.querySelector("#selectedPet");d.forEach(({fieldName:e,validate:o,isValid:t,errorMsg:n})=>{const c=document.querySelector(`#${e}`);c&&(E.forEach(s=>{s.addEventListener("click",()=>{E.forEach(m=>m.classList.remove("active")),s.classList.add("active");const l=s.id;_.value="",x.value=l})}),_.addEventListener("blur",s=>{E.forEach(p=>p.classList.remove("active"));const{value:l}=s.target;t=o(l),x.value=_.value,_.value,z(t,n,c,d);const m=d.map(p=>p.isValid);P(m,A),T.textContent=""}),Se.forEach(s=>{s.addEventListener("click",()=>{const l=s.id;if(e==="selectedPet"){t=Z(l),console.log(c),Ee.value=l,z(t,n,c,d);const m=d.map(p=>p.isValid);P(m,A),console.log(d),T.textContent=""}})}),k==null||k.addEventListener("submit",s=>{s.preventDefault(),K(),S()}))});const q=document.querySelector("#petsDropdownBtn"),b=document.querySelector(".select-pet__list"),ke=document.querySelector("#monthDropdownBtn"),qe=document.querySelector(".select-month__list"),Le=document.querySelector("#yearDropdownBtn"),Ce=document.querySelector(".select-year__list"),we=document.querySelector("#donationsSectionBtn"),Be=document.querySelector("#makeYourDonationCloseBtn"),G=(e,o,t)=>{e.addEventListener("click",n=>{o&&n.target.closest(`${t}`)&&(o==null||o.classList.toggle("open"))})};q==null||q.addEventListener("click",e=>{b&&e.target.closest("#petsDropdownBtn")&&(b==null||b.classList.toggle("open"))});G(ke,qe,"#monthDropdownBtn");G(Le,Ce,"#yearDropdownBtn");V(we,Be,ye);const L=document.querySelector(".login-user__info"),D=document.querySelector(".login-user__modal"),j=document.querySelector(".user-login"),$e=document.querySelector(".login-user__profile-info--name"),Ie=document.querySelector(".login-user__profile-info--email"),F=document.querySelector("#isLoggedIn"),N=document.querySelector("#isLoggedOut"),De=document.querySelector("#userLoginModalCloseBtn"),C=document.querySelector("#signOutBtn");let w=!1;const J=e=>{e?(console.log("is loged in"),j.textContent=e,w=!0,F.style.display="flex",N.style.display="none"):(console.log("is not loged in"),j.textContent="",F.style.display="none",N.style.display="flex",w=!1)};async function ze(e){if(e){const o=localStorage.getItem("auth_token"),{data:{name:t,email:n}}=await te(o,"/auth/profile");localStorage.setItem("name",t),localStorage.setItem("email",n),$e.textContent=t,Ie.textContent=n}}L==null||L.addEventListener("click",e=>{e.target.closest(".login-user__info")&&(D.style.display="block",document.body.style.overflow="hidden",document.querySelector(".overlay").style.display="block")});oe(De,D);const Pe=()=>{localStorage.clear(),J(localStorage.getItem("username"))};C==null||C.addEventListener("click",()=>{Pe(),D.style.display="none",document.body.style.overflow="auto",document.querySelector(".overlay").style.display="none"});const Me=["/online-zoo/assets/images/panda_lucas.png","/online-zoo/assets/images/lemur_andy.png","/online-zoo/assets/images/gorilla_glen.png","/online-zoo/assets/images/crocodile_mike.png","/online-zoo/assets/images/did_you_know_eagles.png","/online-zoo/assets/images/koala_liz.png","/online-zoo/assets/images/lion_shake.png","/online-zoo/assets/images/tiger_senja.png"];let r;const Q=(e,o)=>{const t="Something went wrong. Please, refresh the page";o.innerHTML=`<p class="subheader error-message">
      <span>${e.message}.</span>
      <br>
      <span>${t}</span>
      </p>
    `};async function xe(){Y(g);try{const o=(await H("pets")).data.slice(0,8).map((t,n)=>t={...t,img:Me[n]});r=[...o],u(o,g,B)}catch(e){Q(e,g)}}re.addEventListener("click",()=>{r=U(r),u(r,g,B)});ce.addEventListener("click",()=>{r=R(r),u(r,g,B)});let a;async function Ae(){Y(y);try{a=[...(await H("feedback")).data],u(a,y,$)}catch(e){Q(e,y)}}async function Te(){await xe(),await Ae()}Te();le.addEventListener("click",()=>{a=U(a),u(a,y,$)});de.addEventListener("click",()=>{a=R(a),u(a,y,$)});
