/* 버거 라벨 · 프로젝트 카드 · 복사 버튼
   프로젝트 이름/설명은 아래 const L 에서 고치세요 */
(function(){
  const L=[
    {k:"lettuce",ing:"Lettuce",c:"var(--lettuce)",title:"About Me",about:true,pt:[65.8,21.3],top:24},
    {k:"onion",ing:"Onion",c:"var(--onion)",title:"하이볼 브랜드",cat:"BRAND · UX/UI",
     desc:"키치한 무드의 하이볼 브랜드. 세 가지 맛을 각각의 캐릭터와 컬러로 풀었어요.",did:"브랜드 콘셉트 · 패키지 · UI",tags:["Branding","Package","3 Flavors"],
     pt:[62.3,25],top:37},
    {k:"tomato",ing:"Tomato",c:"var(--tomato)",title:"찻잔 브랜드",cat:"BRAND · UX/UI",
     desc:"레이스와 리본으로 꾸민 공주풍 찻잔 브랜드. 프랑스 밀크티 감성을 담았어요.",did:"브랜드 콘셉트 · 패키지 · UI",tags:["Branding","Lace & Ribbon","Milk Tea"],
     pt:[61.6,27.5],top:50},
    {k:"cheese",ing:"Cheese",c:"var(--cheese)",title:"WithUs",cat:"WEB DESIGN · 팀 프로젝트",
     desc:"케이팝 팬덤 고객에게 메일과 쿠폰을 보내는 CRM 마케팅 자동화 툴.",did:"고객 · 대시보드 · 세그먼트 · 쿠폰 · 로그인 화면 디자인",tags:["Web App","Dashboard","React · Next.js"],
     pt:[61.6,29.8],top:63},
    {k:"patty",ing:"Patty",c:"var(--patty)",title:"약값알림 재디자인",cat:"WEB DESIGN · 개인 프로젝트",
     desc:"약 이름으로 근처 최저가 약국을 찾는 서비스를, 검색부터 결과까지 쓰기 쉽게 다시 디자인했어요.",did:"사용 흐름 재설계 · UI 리디자인",tags:["Web","Redesign","UX"],
     pt:[64.9,32.8],top:76}
  ];
  const NS="http://www.w3.org/2000/svg",svg=document.getElementById("leaders"),tags=document.getElementById("tags"),projects=document.getElementById("projects");
  const H=46.9,groups={};
  L.forEach(d=>{
    // 지시선
    const g=document.createElementNS(NS,"g");g.style.setProperty("--c",d.c);
    const ty=d.top/100*H,[x,y]=d.pt;
    [[x,y,72,ty],[72,ty,75,ty]].forEach(([x1,y1,x2,y2])=>{const l=document.createElementNS(NS,"line");
      l.setAttribute("x1",x1);l.setAttribute("y1",y1);l.setAttribute("x2",x2);l.setAttribute("y2",y2);g.appendChild(l)});
    const c=document.createElementNS(NS,"circle");c.setAttribute("cx",x);c.setAttribute("cy",y);c.setAttribute("r",.75);g.appendChild(c);
    svg.appendChild(g);groups[d.k]=g;
    // 라벨
    const b=document.createElement("button");b.className="tag";b.style.setProperty("--c",d.c);b.style.top=d.top+"%";
    b.innerHTML=`<i></i><span><small>${d.ing}</small><b>${d.title}</b></span>`;
    const target=d.about?"about":"p-"+d.k;
    b.setAttribute("aria-label",`${d.ing}: ${d.title} 보기`);
    b.addEventListener("mouseenter",()=>g.classList.add("on"));
    b.addEventListener("mouseleave",()=>g.classList.remove("on"));
    b.addEventListener("click",()=>{
      const el=document.getElementById(target);el.scrollIntoView({block:"start"});
      if(!d.about){el.classList.add("flash");setTimeout(()=>el.classList.remove("flash"),1600)}
    });
    tags.appendChild(b);
    // 작업 카드
    if(d.about)return;
    const a=document.createElement("article");a.className="proj";a.id="p-"+d.k;a.style.setProperty("--c",d.c);
    a.innerHTML=`<div class="thumb"><span class="ing">${d.ing}</span><img src="images/projects/${d.k}.jpg" alt="${d.title} 대표 이미지" onerror="this.remove()"><span class="ph">images/projects/${d.k}.jpg 를 넣어주세요</span></div>
      <div class="body"><span class="cat">${d.cat}</span><h3>${d.title}</h3><p>${d.desc}</p>
      <span class="did"><b>담당</b>${d.did}</span><div class="chips">${d.tags.map(t=>`<span>${t}</span>`).join("")}</div>
      <a class="more" href="projects/${d.k}.html">자세히 보기 →</a></div>`;
    projects.appendChild(a);
  });
  document.querySelectorAll(".copy").forEach(b=>b.addEventListener("click",()=>{
    const t=b.dataset.copy,done=()=>{b.textContent="COPIED";setTimeout(()=>b.textContent="COPY",1400)};
    const fb=()=>{const r=document.createRange();r.selectNodeContents(b.previousElementSibling);const s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent="SELECTED"};
    try{navigator.clipboard.writeText(t).then(done,fb)}catch(e){fb()}
  }));
})();
