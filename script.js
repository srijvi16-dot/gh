const $=(s,p=document)=>p.querySelector(s), $$=(s,p=document)=>[...p.querySelectorAll(s)];
let lang=localStorage.getItem("gamehubLang")||"bn";
let cart=JSON.parse(localStorage.getItem("gamehubCart")||"[]");
let wishlist=JSON.parse(localStorage.getItem("gamehubWishlist")||"[]");

const products=[
  {id:"gta",nameBn:"Grand Theft Auto V",nameEn:"Grand Theft Auto V",platformBn:"PC • Rockstar",platformEn:"PC • Rockstar",price:2499,old:3499,image:"https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",category:"games",rating:4.9,badge:29},
  {id:"rdr",nameBn:"Red Dead Redemption 2",nameEn:"Red Dead Redemption 2",platformBn:"PC • Rockstar",platformEn:"PC • Rockstar",price:3999,old:4999,image:"https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",category:"games",rating:4.9,badge:20},
  {id:"fc",nameBn:"EA Sports FC 25",nameEn:"EA Sports FC 25",platformBn:"PC • EA Sports",platformEn:"PC • EA Sports",price:4599,old:5999,image:"https://cdn.cloudflare.steamstatic.com/steam/apps/2669320/header.jpg",category:"games",rating:4.7,badge:23},
  {id:"cyberpunk",nameBn:"Cyberpunk 2077",nameEn:"Cyberpunk 2077",platformBn:"PC • CD Projekt",platformEn:"PC • CD Projekt",price:2999,old:4299,image:"https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",category:"games",rating:4.8,badge:30},
  {id:"re4",nameBn:"Resident Evil 4 Remake",nameEn:"Resident Evil 4 Remake",platformBn:"PC • Capcom",platformEn:"PC • Capcom",price:3699,old:4999,image:"https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg",category:"games",rating:4.9,badge:26},
  {id:"gow",nameBn:"God of War Ragnarök",nameEn:"God of War Ragnarök",platformBn:"PC • PlayStation",platformEn:"PC • PlayStation",price:4999,old:6299,image:"https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg",category:"games",rating:4.9,badge:21},
  {id:"elden",nameBn:"Elden Ring",nameEn:"Elden Ring",platformBn:"PC • FromSoftware",platformEn:"PC • FromSoftware",price:4299,old:4999,image:"https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",category:"games",rating:4.8,badge:14},
  {id:"forza",nameBn:"Forza Horizon 5",nameEn:"Forza Horizon 5",platformBn:"PC • Xbox",platformEn:"PC • Xbox",price:3199,old:3999,image:"https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg",category:"games",rating:4.7,badge:20},
  {id:"keyboard",nameBn:"রাইনো মেকানিক্যাল কিবোর্ড",nameEn:"Rhyno Mechanical Keyboard",platformBn:"RGB • Blue Switch",platformEn:"RGB • Blue Switch",price:3499,old:4999,image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",category:"accessory",rating:4.8,badge:30},
  {id:"mouse",nameBn:"সাইবারপ্রো গেমিং মাউস",nameEn:"CyberPro Gaming Mouse",platformBn:"16000 DPI • RGB",platformEn:"16000 DPI • RGB",price:1599,old:2199,image:"https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=600&q=80",category:"accessory",rating:4.7,badge:27},
  {id:"headset",nameBn:"সাউন্ডফোর্স ৭.১ হেডসেট",nameEn:"SoundForce 7.1 Headset",platformBn:"7.1 Surround",platformEn:"7.1 Surround",price:2899,old:3999,image:"https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=600&q=80",category:"accessory",rating:4.8,badge:28},
  {id:"controller",nameBn:"অলটাইম কন্ট্রোলার",nameEn:"All-Time Controller",platformBn:"PC • PS • Xbox",platformEn:"PC • PS • Xbox",price:3799,old:4899,image:"https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=600&q=80",category:"accessory",rating:4.6,badge:22},
  {id:"chair",nameBn:"নাইটওয়াচ গেমিং চেয়ার",nameEn:"Nightwatch Gaming Chair",platformBn:"Ergonomic • Recliner",platformEn:"Ergonomic • Recliner",price:18999,old:22999,image:"https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=600&q=80",category:"accessory",rating:4.9,badge:18},
  {id:"monitor",nameBn:"ভিশন এক্স ২৭ মনিটর",nameEn:"Vision X27 Monitor",platformBn:"144Hz • 1ms",platformEn:"144Hz • 1ms",price:27999,old:32999,image:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",category:"accessory",rating:4.8,badge:15},
  {id:"mic",nameBn:"স্ট্রিমমিক স্টুডিও মাইক",nameEn:"StreamMic Studio Mic",platformBn:"USB • RGB",platformEn:"USB • RGB",price:4499,old:5999,image:"https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80",category:"accessory",rating:4.7,badge:25},
  {id:"mousepad",nameBn:"আরগিবি এক্সট্রা প্যাড",nameEn:"RGB Extra Mousepad",platformBn:"80cm • RGB",platformEn:"80cm • RGB",price:1299,old:1799,image:"https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?auto=format&fit=crop&w=600&q=80",category:"accessory",rating:4.5,badge:28}
];

const categories=[
  ["pc","PC গেমস","PC Games","https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=500&q=75"],
  ["playstation","প্লেস্টেশন গেমস","PlayStation Games","https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=500&q=75"],
  ["xbox","এক্সবক্স গেমস","Xbox Games","https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=500&q=75"],
  ["keyboard","গেমিং কিবোর্ড","Gaming Keyboards","https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=500&q=75"],
  ["mouse","গেমিং মাউস","Gaming Mouse","https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=500&q=75"],
  ["headphone","গেমিং হেডফোন","Gaming Headphones","https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=500&q=75"],
  ["controller","গেমিং কন্ট্রোলার","Gaming Controllers","https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=500&q=75"],
  ["chair","গেমিং চেয়ার","Gaming Chairs","https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=500&q=75"],
  ["monitor","গেমিং মনিটর","Gaming Monitors","https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=75"],
  ["accessory","গেমিং অ্যাক্সেসরিজ","Gaming Accessories","https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=500&q=75"]
];

const featureText=[
  ["আসল পণ্য","Authentic Products","অরিজিনাল এবং যাচাই করা গেমস ও গ্যামিং গিয়ার।","Original and verified games and gaming gear.","◆"],
  ["সেরা দাম","Competitive Prices","বাজেটের ভেতরে সেরা গেমিং ডিল।","The best gaming deals within your budget.","%"],
  ["দ্রুত ডেলিভারি","Fast Bangladesh Delivery","সারা বাংলাদেশে দ্রুত ও নিরাপদ ডেলিভারি।","Fast and secure delivery across Bangladesh.","↗"],
  ["নিরাপদ পেমেন্ট","Secure Payments","ক্যাশ অন ডেলিভারি ও নিরাপদ অনলাইন বিকল্প।","Cash on delivery and secure online options.","✓"],
  ["২৪/৭ সহায়তা","Customer Support","আপনার সব প্রশ্নের জন্য বন্ধুত্বপূর্ণ সহায়তা।","Friendly support for all your questions.","?"],
  ["সহজ অর্ডার","Easy Ordering","মাত্র কয়েকটি ক্লিকেই নিজের পছন্দের পণ্য কিনুন।","Buy your favorite products in just a few clicks.","▱"]
];
const faqs=[
  ["কীভাবে অর্ডার করব?","How do I place an order?","কার্টে পণ্য যোগ করে চেকআউট ফর্ম পূরণ করুন।","Add products to your cart and complete the checkout form."],
  ["কীভাবে পেমেন্ট করব?","How do I make payment?","ডেমোতে বিকাশ, নগদ, কার্ড বা ক্যাশ অন ডেলিভারি দেখানো হয়েছে।","The demo displays bKash, Nagad, card, and cash-on-delivery options."],
  ["সারা বাংলাদেশে কি ডেলিভারি হয়?","Do you deliver across Bangladesh?","হ্যাঁ, সারা বাংলাদেশে ডেলিভারি সাপোর্ট আছে।","Yes, delivery support is available across Bangladesh."],
  ["গেমগুলো কি অরিজিনাল?","Are the games authentic?","হ্যাঁ, সব গেম প্রোডাক্ট আসল সোর্স থেকে সংযুক্ত হিসেবে প্রদর্শিত।","Yes, all games are presented as authentic source products."],
  ["রিফান্ড পলিসি কী?","What is the refund policy?","আনবক্সিংয়ের সমস্যা থাকলে ৭ দিনের মধ্যে যোগাযোগ করুন।","Contact support within 7 days if you have an unboxing issue."],
  ["কীভাবে যোগাযোগ করব?","How can I contact you?","যোগাযোগ ফর্ম, ইমেইল বা WhatsApp ব্যবহার করুন।","Use the contact form, email, or WhatsApp."]
];
const reviews=[
  {nameBn:'আরিফ রহমান',nameEn:'Arif Rahman',textBn:'প্যাকেজিং চমৎকার ছিল এবং গেমটি দ্রুত ডেলিভারি পেয়েছি।',textEn:'The packaging was excellent and the game arrived quickly.',img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'},
  {nameBn:'তাসনিম আক্তার',nameEn:'Tasnim Akter',textBn:'এক্সেসরিজের পছন্দ এবং দাম দুইটাই বেশ ভালো লেগেছে।',textEn:'I loved the product selection and the fair prices.',img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'},
  {nameBn:'সায়েম ইসলাম',nameEn:'Sayem Islam',textBn:'সাপোর্ট টিম দারুণভাবে সাহায্য করেছে। পারফরম্যান্সের কারণে আবার কিনব।',textEn:'The support team helped wonderfully. I will buy again.',img:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80'}
];

function money(n){return "৳"+n.toLocaleString("en-BD")}
function productName(p){return lang==="bn"?p.nameBn:p.nameEn}
function platformName(p){return lang==="bn"?p.platformBn:p.platformEn}
function saveStore(){localStorage.setItem("gamehubCart",JSON.stringify(cart));localStorage.setItem("gamehubWishlist",JSON.stringify(wishlist))}

function card(p,newBadge=false){
  const wished=wishlist.includes(p.id);
  return `<article class="product-card" data-id="${p.id}">
    <img class="product-image" src="${p.image}" alt="${productName(p)}" loading="lazy">
    ${newBadge?`<span class="product-badge new-badge" data-bn="নতুন" data-en="NEW">${lang==="bn"?"নতুন":"NEW"}</span>`:`<span class="product-badge">-${p.badge}%</span>`}
    <button class="wishlist-toggle ${wished?"active":""}" type="button" data-wishlist="${p.id}" aria-label="Wishlist">${wished?"♥":"♡"}</button>
    <div class="product-info"><span class="product-platform">${platformName(p)}</span><h3>${productName(p)}</h3><div class="rating">★ ${p.rating} <span>(${p.rating===4.9?"210":"128"})</span></div><div class="product-prices"><strong>${money(p.price)}</strong><del>${money(p.old)}</del></div><button class="add-cart" type="button" data-add="${p.id}" data-bn="কার্টে যোগ করুন" data-en="Add to Cart">${lang==="bn"?"কার্টে যোগ করুন":"Add to Cart"}</button></div>
  </article>`;
}
function renderProducts(filter="all",sort=false){
  const game=[...products].filter(p=>p.category==="games");
  const accessories=[...products].filter(p=>p.category==="accessory");
  $("#trending-grid").innerHTML=(filter==="search"?products.filter(p=>p.category==="games"):game).slice(0,8).map(p=>card(p)).join("");
  $("#accessories-grid").innerHTML=accessories.map(p=>card(p)).join("");
  $("#arrivals-grid").innerHTML=products.filter(p=>["keyboard","controller","re4","elden","mic"].includes(p.id)).map(p=>card(p,true)).join("");
  $("#bestsellers-grid").innerHTML=[...products].sort((a,b)=>b.rating-a.rating).slice(0,4).map(p=>card(p)).join("");
  bindProductActions();
}
function renderCategories(){
  $("#category-grid").innerHTML=categories.map((c,i)=>`<article class="category-card" data-category="${c[0]}"><img src="${c[3]}" alt="${lang==="bn"?c[1]:c[2]}" loading="${i<5?"eager":"lazy"}"><div><h3>${lang==="bn"?c[1]:c[2]}</h3><span>${lang==="bn"?"দেখুন":"Explore"} →</span></div></article>`).join("");
  $$(".category-card").forEach(el=>el.addEventListener("click",()=>{const target=el.dataset.category==="pc"||["playstation","xbox"].includes(el.dataset.category)?"trending":"accessories";document.getElementById(target).scrollIntoView({behavior:"smooth"})}));
}
function renderFeatures(){
  $("#feature-grid").innerHTML=featureText.map(f=>`<article class="feature-card"><span class="feature-icon">${f[4]}</span><h3>${lang==="bn"?f[0]:f[1]}</h3><p>${lang==="bn"?f[2]:f[3]}</p></article>`).join("");
}
function renderFaq(){
  $("#accordion").innerHTML=faqs.map((f,i)=>`<article class="accordion-item"><button class="accordion-button" type="button" aria-expanded="${i===0}"><span>${lang==="bn"?f[0]:f[1]}</span><span>+</span></button><div class="accordion-content" ${i===0?'style="max-height:100px"':""}><p>${lang==="bn"?f[2]:f[3]}</p></div></article>`).join("");
  $$(".accordion-button").forEach(btn=>btn.addEventListener("click",()=>{
    const item=btn.closest(".accordion-item"),content=$(".accordion-content",item),open=btn.getAttribute("aria-expanded")==="true";
    $$(".accordion-button").forEach(b=>{b.setAttribute("aria-expanded","false");$(".accordion-content",b.closest(".accordion-item")).style.maxHeight="0";$("span:last-child",b).textContent="+"});
    if(!open){btn.setAttribute("aria-expanded","true");content.style.maxHeight=content.scrollHeight+"px";$("span:last-child",btn).textContent="−"}
  }));
}

let reviewIndex=0;
function renderReview(){
  const r=reviews[reviewIndex];
  $("#review-card").innerHTML=`<img src="${r.img}" alt="${lang==="bn"?r.nameBn:r.nameEn}" loading="lazy"><div class="stars">★★★★★</div><p>“${lang==="bn"?r.textBn:r.textEn}”</p><h3>${lang==="bn"?r.nameBn:r.nameEn}</h3><span class="demo-label">${lang==="bn"?"ডেমো কাস্টমার রিভিউ":"Demo customer review"}</span>`;
}
function bindProductActions(){
  $$("[data-add]").forEach(btn=>btn.onclick=()=>addToCart(btn.dataset.add));
  $$("[data-wishlist]").forEach(btn=>btn.onclick=()=>toggleWishlist(btn.dataset.wishlist));
  $$(".product-card").forEach(cardEl=>cardEl.ondblclick=()=>openPreview(cardEl.dataset.id));
  $$(".product-image").forEach(img=>img.onclick=()=>openPreview(img.closest(".product-card").dataset.id));
}
function addToCart(id){
  const item=cart.find(x=>x.id===id);item?item.qty++:cart.push({id,qty:1});saveStore();updateCounters();renderCart();showToast(lang==="bn"?"কার্টে যোগ হয়েছে":"Added to cart");
}
function toggleWishlist(id){
  wishlist=wishlist.includes(id)?wishlist.filter(x=>x!==id):[...wishlist,id];saveStore();updateCounters();renderProducts();renderWishlist();
}
function updateCounters(){
  $("#cart-count").textContent=cart.reduce((n,x)=>n+x.qty,0);$("#wishlist-count").textContent=wishlist.length;
}
function getProduct(id){return products.find(p=>p.id===id)}
function openDrawer(drawer){$("#overlay").classList.add("open");drawer.classList.add("open");drawer.setAttribute("aria-hidden","false")}
function closeDrawers(){ $$(".drawer").forEach(d=>{d.classList.remove("open");d.setAttribute("aria-hidden","true")});$("#overlay").classList.remove("open")}
function renderCart(){
  const root=$("#cart-items");
  if(!cart.length){root.innerHTML=`<p>${lang==="bn"?"আপনার কার্ট খালি।":"Your cart is empty."}</p>`;$("#cart-total").textContent="৳0";return}
  let total=0;
  root.innerHTML=cart.map(x=>{const p=getProduct(x.id);total+=p.price*x.qty;return `<div class="cart-item"><img src="${p.image}" alt="${productName(p)}"><div><h4>${productName(p)}</h4><div class="qty"><button type="button" data-qty="-1" data-id="${p.id}">−</button><span>${x.qty}</span><button type="button" data-qty="1" data-id="${p.id}">+</button></div></div><button class="remove-item" type="button" data-remove="${p.id}" aria-label="Remove">×</button></div>`}).join("");
  $("#cart-total").textContent=money(total);
  $$("[data-qty]").forEach(b=>b.onclick=()=>changeQty(b.dataset.id,Number(b.dataset.qty)));
  $$("[data-remove]").forEach(b=>b.onclick=()=>{cart=cart.filter(x=>x.id!==b.dataset.remove);saveStore();updateCounters();renderCart()});
}
function changeQty(id,delta){const item=cart.find(x=>x.id===id);if(!item)return;item.qty+=delta;if(item.qty<1)cart=cart.filter(x=>x.id!==id);saveStore();updateCounters();renderCart()}
function renderWishlist(){
  const root=$("#wishlist-items");
  if(!wishlist.length){root.innerHTML=`<p>${lang==="bn"?"কোনো পণ্য সংরক্ষণ করা হয়নি।":"No saved products."}</p>`;return}
  root.innerHTML=wishlist.map(id=>{const p=getProduct(id);return `<div class="cart-item"><img src="${p.image}" alt="${productName(p)}"><div><h4>${productName(p)}</h4><strong>${money(p.price)}</strong></div><button class="remove-item" type="button" data-wish-remove="${id}">×</button></div>`}).join("");
  $$("[data-wish-remove]").forEach(b=>b.onclick=()=>toggleWishlist(b.dataset.wishRemove));
}
function openPreview(id){
  const p=getProduct(id);if(!p)return;
  $("#modal-content").innerHTML=`<div class="preview-grid"><img src="${p.image}" alt="${productName(p)}"><div><span class="product-platform">${platformName(p)}</span><h2>${productName(p)}</h2><div class="rating">★ ${p.rating}</div><div class="product-prices"><strong>${money(p.price)}</strong><del>${money(p.old)}</del></div><button class="button button-primary full-width" type="button" data-preview-add="${p.id}">${lang==="bn"?"কার্টে যোগ করুন":"Add to Cart"}</button></div></div>`;
  $("#preview-modal").classList.add("open");$("#preview-modal").setAttribute("aria-hidden","false");$("[data-preview-add]").onclick=()=>{addToCart(p.id);closeModal($("#preview-modal"))};
}
function closeModal(modal){modal.classList.remove("open");modal.setAttribute("aria-hidden","true")}
function showToast(message){let t=$("#toast");if(!t){t=document.createElement("div");t.id="toast";t.style.cssText="position:fixed;z-index:500;left:50%;bottom:25px;transform:translateX(-50%);background:#171a2b;color:#fff;padding:12px 18px;border-radius:10px;box-shadow:0 10px 30px #0003";document.body.appendChild(t)}t.textContent=message;t.style.display="block";clearTimeout(t.timer);t.timer=setTimeout(()=>t.style.display="none",2200)}

function setLanguage(next){
  lang=next;localStorage.setItem("gamehubLang",lang);document.documentElement.lang=lang==="bn"?"bn":"en";document.body.classList.toggle("en",lang==="en");
  $$("[data-bn][data-en]").forEach(el=>el.textContent=el.dataset[lang]);
  $$("[data-placeholder-bn][data-placeholder-en]").forEach(el=>el.placeholder=el.dataset[`placeholder${lang==="bn"?"Bn":"En"}`]);
  $$(".language-switch button").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));
  renderProducts();renderCategories();renderFeatures();renderFaq();renderReview();renderCart();renderWishlist();updateCounters();
}

$("#close-announcement").onclick=()=>$("#announcement").remove();
$("#theme-toggle").onclick=()=>{document.body.classList.toggle("dark");const dark=document.body.classList.contains("dark");localStorage.setItem("gamehubTheme",dark?"dark":"light");$("#theme-toggle").textContent=dark?"☀":"☾"};
if(localStorage.getItem("gamehubTheme")==="dark"){document.body.classList.add("dark");$("#theme-toggle").textContent="☀"}
$("#menu-toggle").onclick=()=>{const nav=$("#main-nav"),search=$("#search-form");nav.classList.toggle("open");search.classList.toggle("open");$("#menu-toggle").setAttribute("aria-expanded",nav.classList.contains("open"))};
$$(".nav a").forEach(a=>a.onclick=()=>$("#main-nav").classList.remove("open"));
$$(".language-switch button").forEach(b=>b.onclick=()=>setLanguage(b.dataset.lang));
$("#cart-button").onclick=()=>openDrawer($("#cart-drawer"));
$("#wishlist-button").onclick=()=>openDrawer($("#wishlist-drawer"));
$$("[data-close-drawer]").forEach(b=>b.onclick=closeDrawers);$("#overlay").onclick=closeDrawers;
$$(".modal-close").forEach(b=>b.onclick=()=>closeModal(b.closest(".modal")));$$(".modal").forEach(m=>m.onclick=e=>{if(e.target===m)closeModal(m)});
$("#checkout-button").onclick=()=>{if(!cart.length)return showToast(lang==="bn"?"কার্টে পণ্য নেই":"Your cart is empty");$("#checkout-modal").classList.add("open")};
$("#join-community").onclick=e=>{e.preventDefault();showToast(lang==="bn"?"কমিউনিটি লিংক আসছে!":"Community link coming soon!")};
$("#search-form").onsubmit=e=>{e.preventDefault();const q=$("#search-input").value.trim().toLowerCase();if(!q)return;const matches=products.filter(p=>(productName(p)+platformName(p)).toLowerCase().includes(q));if(matches.length){$("#trending-grid").innerHTML=matches.map(p=>card(p)).join("");bindProductActions();$("#trending").scrollIntoView({behavior:"smooth"})}else{showToast(lang==="bn"?"কোনো পণ্য পাওয়া যায়নি":"No products found")}};
$$(".sort-button").forEach(btn=>btn.onclick=()=>{const grid=btn.dataset.sort==="trending"?$("#trending-grid"):$("#accessories-grid");const cards=[...grid.querySelectorAll(".product-card")].sort((a,b)=>{const pa=getProduct(a.dataset.id).price,pb=getProduct(b.dataset.id).price;return pa-pb});grid.append(...cards);showToast(lang==="bn"?"কম দামের আগে সাজানো হয়েছে":"Sorted by low price")});

$("#newsletter-form").onsubmit=e=>{e.preventDefault();const input=$("#newsletter-email"),msg=$("#newsletter-message");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)){msg.textContent=lang==="bn"?"সঠিক ইমেইল দিন।":"Enter a valid email.";msg.className="form-message error"}else{msg.textContent=lang==="bn"?"সাবস্ক্রিপশন সফল—ধন্যবাদ!":"Subscription successful. Thank you!";msg.className="form-message success";input.value=""}};
$("#contact-form").onsubmit=e=>{e.preventDefault();const f=e.currentTarget,msg=$("#contact-message");if(!f.checkValidity()){msg.textContent=lang==="bn"?"সব ঘর সঠিকভাবে পূরণ করুন।":"Please complete all fields correctly.";msg.className="form-message error"}else{msg.textContent=lang==="bn"?"ডেমো ফর্মটি সফলভাবে পূরণ হয়েছে।":"Demo form submitted successfully.";msg.className="form-message success";f.reset()}};
$("#checkout-form").onsubmit=e=>{e.preventDefault();const msg=$("#checkout-message");if(!e.currentTarget.checkValidity()){msg.textContent=lang==="bn"?"অর্ডার তথ্য পূরণ করুন।":"Complete your order details.";msg.className="form-message error"}else{msg.textContent=lang==="bn"?"ডেমো অর্ডার তৈরি হয়েছে। আসল পেমেন্ট নেওয়া হয়নি।":"Demo order created. No real payment was taken.";msg.className="form-message success";cart=[];saveStore();updateCounters();renderCart()}};

let reviewTimer=setInterval(()=>{reviewIndex=(reviewIndex+1)%reviews.length;renderReview()},6000);
$("#review-prev").onclick=()=>{reviewIndex=(reviewIndex-1+reviews.length)%reviews.length;renderReview();clearInterval(reviewTimer)};
$("#review-next").onclick=()=>{reviewIndex=(reviewIndex+1)%reviews.length;renderReview();clearInterval(reviewTimer)};

const end=Date.now()+((2*24+18)*60*60+44*60)*1000;
setInterval(()=>{const d=Math.max(0,end-Date.now()),s=Math.floor(d/1000);$("#days").textContent=String(Math.floor(s/86400)).padStart(2,"0");$("#hours").textContent=String(Math.floor(s%86400/3600)).padStart(2,"0");$("#minutes").textContent=String(Math.floor(s%3600/60)).padStart(2,"0");$("#seconds").textContent=String(s%60).padStart(2,"0")},1000);

const observer=new IntersectionObserver(entries=>entries.forEach(en=>en.isIntersecting&&en.target.classList.add("in-view")),{threshold:.12});$$(".reveal").forEach(el=>observer.observe(el));
window.addEventListener("scroll",()=>{$("#back-to-top").classList.toggle("visible",scrollY>500)});
$("#back-to-top").onclick=()=>scrollTo({top:0,behavior:"smooth"});
$("#year").textContent=new Date().getFullYear();

renderProducts();renderCategories();renderFeatures();renderFaq();renderReview();renderCart();renderWishlist();updateCounters();setLanguage(lang);
window.addEventListener("load",()=>setTimeout(()=>$("#loader").classList.add("done"),500));
