const interior = ['IMG_7109.webp','IMG_7118.webp','IMG_7116.webp','IMG_7117.webp','IMG_7112.webp','IMG_7119.webp','IMG_7105.webp','IMG_7104.webp','IMG_7102.webp','IMG_7114.webp','IMG_7103.webp'];
const chosen = ['DSC09363.webp','DSC09358.webp','DSC09362.webp','DSC09364.webp','DSC09368.webp','DSC09355.webp','DSC09370.webp'];
const allPhotos = [...chosen, ...interior];
const src = name => `/photos/${name}`;
document.querySelector('#app').innerHTML = `
<header class="top"><a class="brand" href="#uvod">KODIAQ <span>2017</span></a><nav><a href="#fotografie">Fotografie</a><a href="#vybava">Výbava</a><a href="#detaily">Detaily</a></nav><a class="nav-cta" href="#kontakt">Mám zájem ↗</a></header>
<main id="uvod"><section class="hero"><div class="hero-photo"><img src="${src(chosen[0])}" alt="Bílá Škoda Kodiaq – exteriér" fetchpriority="high"><span class="photo-label">ŠKODA KODIAQ / STYLE</span></div><div class="hero-panel"><div class="eyebrow">SOUKROMÝ PRODEJ · 2017</div><h1>Prostor pro sedm.<br><em>Výbava pro každý den.</em></h1><p class="intro">Škoda Kodiaq 2.0 TDI, DSG, 4×4 ve výjimečně bohaté konfiguraci. Komfort na dlouhé cesty, jistota v zimě a třetí řada sedadel, když je potřeba.</p><div class="price">449 000 Kč</div><div class="hero-facts"><span>193 xxx km</span><span>140 kW + úprava</span><span>7 míst</span></div><a class="button" href="#kontakt">Domluvit prohlídku <span>↗</span></a></div></section>
<section class="stats" aria-label="Základní údaje"><div><small>MOTOR</small><strong>2.0 TDI</strong><span>140 kW · diesel</span></div><div><small>POHON</small><strong>4×4</strong><span>7stupňové DSG</span></div><div><small>KAPACITA</small><strong>7 míst</strong><span>3. řada sedadel</span></div><div><small>PŮVODNÍ KONFIGURACE</small><strong>1,41 mil. Kč</strong><span>dle konfigurace z roku 2017</span></div></section>
<section class="section" id="fotografie"><div class="section-head"><div><span class="eyebrow">01 / FOTOGRAFIE</span><h2>Prohlédněte si vůz</h2></div><p>Výběr fotografií exteriéru a interiéru vozu.</p></div><div class="gallery">${chosen.map((p,i)=>`<button class="tile ${i===0?'wide':''}" data-index="${i}" aria-label="Otevřít fotografii ${i+1}"><img src="${src(p)}" alt="Škoda Kodiaq – fotografie exteriéru ${i+1}" loading="lazy"><span>0${i+1} / 0${chosen.length}</span></button>`).join('')}</div><h3 class="gallery-subtitle">Interiér a praktičnost</h3><div class="gallery interior-gallery">${interior.map((p,i)=>`<button class="tile" data-index="${chosen.length+i}" aria-label="Otevřít fotografii interiéru ${i+1}"><img src="${src(p)}" alt="Škoda Kodiaq – interiér ${i+1}" loading="lazy"><span>0${i+1} / 0${interior.length}</span></button>`).join('')}</div></section>
<section class="feature-band"><div><span class="eyebrow">VÝJIMEČNĚ BOHATÁ VÝBAVA</span><h2>Komfort, který oceníte při každé jízdě.</h2></div><p>Původní konfigurace vozu zahrnovala řadu příplatků včetně adaptivního podvozku, kamerového systému a nezávislého topení.</p></section>
<section class="section equipment" id="vybava"><div class="section-head"><div><span class="eyebrow">02 / VÝBAVA</span><h2>Co v autě najdete</h2></div></div><div class="cards"><article><span class="card-no">01</span><h3>Komfort</h3><ul><li>Nezávislé topení s dálkovým ovládáním</li><li>Kožená ventilovaná přední sedadla</li><li>Vyhřívaná přední a zadní sedadla</li><li>Elektrická přední sedadla s pamětí</li><li>Vyhřívaný volant</li><li>Adaptivní podvozek DCC a jízdní režimy</li></ul></article><article><span class="card-no">02</span><h3>Technologie</h3><ul><li>360° kamerový systém Area View</li><li>Trailer Assist a parkovací senzory</li><li>Adaptivní tempomat ACC do 210 km/h</li><li>Lane Assist a Blind Spot Detect</li><li>LED světlomety s natáčením</li><li>Automatická dálková světla</li><li>Velký dotykový infotainment</li></ul></article><article><span class="card-no">03</span><h3>Praktičnost</h3><ul><li>7 míst a třetí řada sedadel</li><li>Pohon všech kol 4×4</li><li>Sklopné, elektronicky uzamykatelné tažné</li><li>ISOFIX i na sedadle spolujezdce</li><li>Family paket a paket pro spaní</li><li>KESSY s alarmem</li><li>Rezervní dojezdové kolo v zavazadlovém prostoru</li></ul></article></div></section>
<section class="details section" id="detaily"><div><span class="eyebrow">03 / PODROBNOSTI</span><h2>Podstatné údaje<br>na jednom místě</h2><p>Sériový výkon je 140 kW. Motor má softwarovou úpravu od UR Tuning s deklarovaným navýšením přibližně o 40 koní. Konkrétní parametry úpravy rád upřesním při prohlídce.</p></div><dl><div><dt>Model / výbava</dt><dd>Škoda Kodiaq Style</dd></div><div><dt>Rok</dt><dd>2017</dd></div><div><dt>Nájezd</dt><dd>193 xxx km</dd></div><div><dt>Motor</dt><dd>2.0 TDI · 140 kW v sérii</dd></div><div><dt>Převodovka</dt><dd>7stupňové DSG</dd></div><div><dt>Pohon</dt><dd>4×4</dd></div><div><dt>Barva</dt><dd>Bílá Pearl</dd></div><div><dt>Počet míst</dt><dd>7</dd></div><div><dt>Historie oprav</dt><dd>Bez významných oprav nad rámec pravidelného servisu</dd></div><div><dt>Pravidelný servis</dt><dd>Motorový olej a pylový filtr každých 10 000 km</dd></div><div><dt>Brzdy</dt><dd>Kotouče a destičky měněny ve 120 000 km</dd></div><div><dt>Rozvody</dt><dd>Výměna ve 163 000 km</dd></div><div><dt>Olej v převodovce</dt><dd>Výměna 04/2026</dd></div></dl></section>
<section class="accessories section"><span class="eyebrow">04 / PŘÍSLUŠENSTVÍ</span><h2>Podle dohody i s příslušenstvím</h2><div class="access-grid"><div><strong>Druhá sada kol</strong><p>Originální 19″ kola Škoda Triglav s druhou sadou pneumatik. Letní pneu mají za sebou dvě sezóny, zimní vstupují do třetí.</p></div><div><strong>Na cesty</strong><p>Originální příčné střešní nosiče a střešní box lze dokoupit po dohodě.</p></div></div><p class="note">Příslušenství není zahrnuto v uvedené ceně vozu.</p></section>
<section class="condition section"><span class="eyebrow">05 / STAV VOZU</span><h2>Stav vozu otevřeně</h2><p>Na předním pravém blatníku je kosmetické poškození po kontaktu při parkování. Při prohlídce ho rád ukážu a vysvětlím. Detailní fotografii doplním.</p></section>
<section class="contact" id="kontakt"><span class="eyebrow">06 / KONTAKT</span><h2>Chcete auto vidět osobně?</h2><p>Napište mi pro další informace nebo domluvení prohlídky. Vůz je k dispozici od 1. 11. 2026 nebo dle domluvy. Kontaktní údaj doplním před zveřejněním.</p><div class="contact-price">449 000 Kč</div></section></main><footer><span>ŠKODA KODIAQ · 2017</span><a href="#uvod">Zpět nahoru ↑</a></footer>
<dialog id="lightbox"><button class="close" aria-label="Zavřít fotografii">×</button><button class="prev" aria-label="Předchozí fotografie">‹</button><img alt="Zvětšená fotografie vozu"><button class="next" aria-label="Další fotografie">›</button><span class="counter"></span></dialog>`;
const dialog=document.querySelector('#lightbox');let active=0;function show(n){active=(n+allPhotos.length)%allPhotos.length;dialog.querySelector('img').src=src(allPhotos[active]);dialog.querySelector('.counter').textContent=`${active+1} / ${allPhotos.length}`};document.querySelectorAll('.tile').forEach((el,i)=>el.addEventListener('click',()=>{show(i);dialog.showModal()}));dialog.querySelector('.close').onclick=()=>dialog.close();dialog.querySelector('.prev').onclick=()=>show(active-1);dialog.querySelector('.next').onclick=()=>show(active+1);dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});document.addEventListener('keydown',e=>{if(!dialog.open)return;if(e.key==='ArrowLeft')show(active-1);if(e.key==='ArrowRight')show(active+1)});
// Odstranění věty o parametrech úpravy.
const tuningText = document.querySelector('#detaily > div > p');
if (tuningText) {
  tuningText.textContent = tuningText.textContent.replace(
    ' Konkrétní parametry úpravy rád upřesním při prohlídce.',
    ''
  );
}

// Doplnění výbavy bez opakování již uvedených položek.
const extraEquipment = [
  [
    'Bederní opěry předních sedadel',
    'Funkce Off-road',
    'Zatmavená zadní boční skla a zadní okno',
    'Vnější zrcátka s pamětí, vyhříváním a automatickým stmíváním',
    'Automaticky stmívatelné vnitřní zrcátko'
  ],
  [
    'Parkovací pilot / automatické parkování',
    'Prémiový audiosystém',
    'AUX-IN a 2× USB',
    'Světelný a dešťový senzor',
    'Crew Protect Assist a rozpoznání únavy řidiče'
  ],
  [
    'Dvojitá podlaha zavazadlového prostoru',
    'Paket pro špatné cesty',
    'Osvětlení prostoru pro nohy vpředu i vzadu',
    'Sada nářadí a zvedák'
  ]
];

document.querySelectorAll('#vybava .cards ul').forEach((list, index) => {
  (extraEquipment[index] || []).forEach(text => {
    if ([...list.children].some(item => item.textContent === text)) return;
    const item = document.createElement('li');
    item.textContent = text;
    list.appendChild(item);
  });
});

document.querySelectorAll('.interior-gallery .tile span').forEach((label, i) => {
  label.textContent =
    `${String(i + 1).padStart(2, '0')} / ${interior.length}`;
});
