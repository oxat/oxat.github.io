(function () {
  const cv = document.getElementById('bg-canvas');
  const cx = cv.getContext('2d');
  let W, H, stoneCache = null;

  function resize() { W = cv.width = innerWidth; H = cv.height = innerHeight; stoneCache = null; }
  resize();
  addEventListener('resize', resize);

  function buildStone() {
    const off = document.createElement('canvas');
    off.width = W; off.height = H;
    const oc = off.getContext('2d');
    const bg = oc.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, '#0a0804');
    bg.addColorStop(.5, '#0d0b08');
    bg.addColorStop(1, '#060504');
    oc.fillStyle = bg;
    oc.fillRect(0, 0, W, H);
    const bw = 110, bh = 56;
    for (let r = 0; r * bh < H + bh; r++) {
      const ox = (r % 2) * (bw / 2);
      for (let c = -1; c * bw < W + bw; c++) {
        const x = c * bw + ox, y = r * bh;
        oc.fillStyle = `rgba(255,220,160,${(Math.random() * .018).toFixed(4)})`;
        oc.fillRect(x + 1, y + 1, bw - 2, bh - 2);
        oc.fillStyle = `rgba(255,240,200,${(Math.random() * .007).toFixed(4)})`;
        oc.fillRect(x + 1, y + 1, bw - 2, 1);
        oc.strokeStyle = 'rgba(0,0,0,.45)';
        oc.lineWidth = 1;
        oc.strokeRect(x + .5, y + .5, bw - 1, bh - 1);
      }
    }
    stoneCache = off;
  }

  class Ember {
    constructor() { this.reset(); }
    reset() {
      const side = Math.random() > .5 ? W * .04 : W * .96;
      this.x = side + (Math.random() - .5) * 50;
      this.y = H * (.28 + Math.random() * .08);
      this.vx = (Math.random() - .5) * .7;
      this.vy = -(Math.random() * 1.6 + .6);
      this.life = 1;
      this.dec = Math.random() * .009 + .004;
      this.r = Math.random() * 1.8 + .5;
      this.ph = Math.random() * Math.PI * 2;
    }
    tick(t) {
      this.x += this.vx + Math.sin(t * .003 + this.ph) * .35;
      this.y += this.vy;
      this.life -= this.dec;
      if (this.life <= 0 || this.y < 0) this.reset();
    }
    draw() {
      cx.save(); cx.globalAlpha = Math.max(0, this.life * .95);
      const g = cx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r * 3.5);
      g.addColorStop(0, '#fffde0'); g.addColorStop(.25, '#ff9900'); g.addColorStop(1, 'rgba(255,50,0,0)');
      cx.fillStyle = g; cx.beginPath(); cx.arc(this.x, this.y, this.r * 3.5, 0, Math.PI * 2); cx.fill(); cx.restore();
    }
  }

  class Snow {
    constructor(init) { this.reset(init); }
    reset(init) {
      this.x = Math.random() * W;
      this.y = init ? Math.random() * H : -8;
      this.r = Math.random() * 2.4 + .8;
      this.spd = Math.random() * .75 + .3;
      this.drift = (Math.random() - .5) * .45;
      this.op = Math.random() * .45 + .15;
      this.wb = Math.random() * Math.PI * 2;
    }
    tick() {
      this.wb += .012; this.x += this.drift + Math.sin(this.wb) * .32; this.y += this.spd;
      if (this.y > H) this.reset(false);
    }
    draw() {
      cx.save(); cx.globalAlpha = this.op;
      const g = cx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
      g.addColorStop(0, 'rgba(255,255,255,.95)'); g.addColorStop(.5, 'rgba(210,225,255,.55)'); g.addColorStop(1, 'rgba(190,210,255,0)');
      cx.fillStyle = g; cx.beginPath(); cx.arc(this.x, this.y, this.r, 0, Math.PI * 2); cx.fill(); cx.restore();
    }
  }

  const parts = [...Array.from({length:40},()=>new Ember()), ...Array.from({length:90},()=>new Snow(true))];

  function loop(t) {
    if (!stoneCache) buildStone();
    cx.clearRect(0, 0, W, H);
    cx.drawImage(stoneCache, 0, 0);
    parts.forEach(p => { p.tick(t); p.draw(); });
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
})();

const SOCIAL_MAP = [
  { label:'Instagram', icon:'fab fa-instagram',  color:'#E1306C', url:v=>`https://instagram.com/${v}` },
  { label:'Facebook',  icon:'fab fa-facebook-f', color:'#1877F2', url:v=>`https://facebook.com/${v}` },
  { label:'X',         icon:'fab fa-x-twitter',  color:'#e8e8e8', url:v=>`https://x.com/${v}` },
  { label:'YouTube',   icon:'fab fa-youtube',    color:'#FF0000', url:v=>`https://youtube.com/@${v}` },
  { label:'Snapchat',  icon:'fab fa-snapchat',   color:'#FFFC00', url:v=>`https://snapchat.com/add/${v}` },
  { label:'Steam',     icon:'fab fa-steam',      color:'#66c0f4', url:v=>`https://steamcommunity.com/profiles/${v}` },
  { label:'Twitch',    icon:'fab fa-twitch',     color:'#9146FF', url:v=>`https://twitch.tv/${v}` },
  { label:'Spotify',   icon:'fab fa-spotify',    color:'#1DB954', url:v=>`https://open.spotify.com/user/${v}` },
  { label:'Pinterest', icon:'fab fa-pinterest',  color:'#E60023', url:v=>`https://pinterest.com/${v}` },
  { label:'xat Group', icon:'fas fa-comments',   color:'#c9a84c', url:v=>`https://xat.com/${v}` },
  { label:'xat Forum', icon:'fas fa-scroll',     color:'#c9a84c', url:v=>`https://forum.xat.com/profile/${v}` },
  { label:'TikTok',    icon:'fab fa-tiktok',     color:'#69C9D0', url:v=>`https://tiktok.com/@${v}` },
];

async function loadProfile() {
  const t = Date.now();
  try {
    const res = await fetch(`https://xat.com/web_gear/chat/profile2.php?n=ionut97&t=${t}`);
    const raw = await res.json();
    const m = raw?.Err?.Media;
    if (!m) throw new Error('no media');

    const av = m.avatar2 || (m.avatar||'').split('#')[0];
    if (av) document.getElementById('avatar-img').src = av;

    const cp = (m.custom||'').split('~');
    const name = cp[0] || m.Name || 'Ionut';
    const cc = cp[6] || '';
    document.getElementById('hero-name').textContent = name;
    document.title = `${name} — Lord of Code`;

    const flag = cc.length === 2
      ? [...cc.toUpperCase()].map(c=>String.fromCodePoint(c.charCodeAt(0)+127397)).join('')
      : '';
    document.getElementById('hero-subtitle').innerHTML =
      `Lord of Code &nbsp;·&nbsp; Master of Digital Realms${flag ? `&nbsp;·&nbsp;${flag}` : ''}`;
    const parts = (m.social||'').split('~');
    renderSidebar(parts);
    checkStatus(m.id || '1481979077');

  } catch(e) {
    console.warn('Profile load failed:', e);
    document.getElementById('hero-name').textContent = 'Ionut';
    document.title = 'Ionut — Lord of Code';
    document.getElementById('social-sidebar-items').innerHTML = '';
    checkStatus('1481979077');
  }
}

function renderSidebar(parts) {
  const container = document.getElementById('social-sidebar-items');
  container.innerHTML = '';

  let count = 0;
  SOCIAL_MAP.forEach((def, i) => {
    const val = (parts[i] || '').trim();
    if (!val) return;
    count++;

    const a = document.createElement('a');
    a.href = def.url(val);
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'si-item';
    a.style.setProperty('--ic', def.color);
    a.style.opacity = '0';
    a.style.transform = 'translateX(20px)';
    a.style.transition = `opacity .4s ease ${count * 80}ms, transform .4s ease ${count * 80}ms, width .35s cubic-bezier(.4,0,.2,1), border-color .3s, background .3s, box-shadow .3s`;

    a.innerHTML = `
      <div class="si-label">
        <span class="si-label-name">${def.label}</span>
        <span class="si-label-handle">${val}</span>
      </div>
      <div class="si-icon-wrap"><i class="${def.icon}"></i></div>
    `;

    container.appendChild(a);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        a.style.opacity = '1';
        a.style.transform = 'translateX(0)';
      });
    });
  });
  if (count === 0) {
    document.getElementById('social-sidebar').style.display = 'none';
  }
}

async function checkStatus(id) {
  try {
    const r = await fetch(`https://oceanbot.net/online.php?id=${id}&t=${Date.now()}`);
    const d = await r.json();
    const online = d?.status === 'online';
    document.getElementById('status-dot').className = 'status-dot' + (online ? '' : ' offline');
    document.getElementById('status-text').textContent = online ? 'Online' : 'Offline';
  } catch {
    document.getElementById('status-dot').className = 'status-dot offline';
    document.getElementById('status-text').textContent = 'Offline';
  }
}

(function(){
  const phrases = [
    'A Developer Always Debugs His Code',
    'Winter is Coming... But Code is Forever',
    'When You Play the Game of Code, You Win or You Learn',
    'The Night is Dark and Full of Errors',
    'I Drink Coffee and I Know Things',
    'What is Dead May Never Die, But Rises Harder and Stronger'
  ];
  let pi=0,ci=0,del=false;
  const el=document.getElementById('typing-out');
  function tick(){
    const p=phrases[pi];
    if(!del){el.textContent=p.slice(0,++ci);if(ci===p.length){del=true;return setTimeout(tick,2400);}}
    else{el.textContent=p.slice(0,--ci);if(ci===0){del=false;pi=(pi+1)%phrases.length;return setTimeout(tick,450);}}
    setTimeout(tick,del?42:92);
  }
  setTimeout(tick,1400);
})();

(function(){
  const quotes=[
    'Valar Morghulis — All Bugs Must Die',
    'In Code We Trust, In Testing We Must',
    'Fire and Blood... But Mostly Coffee',
    'The Code Must Flow',
    'A Coder Never Forgets His First Hello World',
    'Not All Those Who Wander Are Lost — Some Are Just Debugging'
  ];
  let qi=0;
  const el=document.getElementById('quote-el');
  el.style.transition='opacity .5s ease';
  setInterval(()=>{
    el.style.opacity='0';
    setTimeout(()=>{qi=(qi+1)%quotes.length;el.textContent=quotes[qi];el.style.opacity='1';},520);
  },7500);
})();

new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(!e.isIntersecting)return;
    e.target.querySelectorAll('.skill-card').forEach((card,i)=>{
      setTimeout(()=>{card.querySelector('.skill-bar-fill').style.width=card.dataset.pct+'%';},i*80);
    });
    e.target._skillObs && e.target._skillObs.unobserve(e.target);
  });
},{threshold:.15}).observe(document.getElementById('skills-grid'));

const ro=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');ro.unobserve(e.target);}});
},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

(function(){
  const audio=document.getElementById('audio');
  const btn=document.getElementById('play-btn');
  const ico=document.getElementById('play-ico');
  const vol=document.getElementById('vol-slider');
  const pct=document.getElementById('vol-pct');
  const pl=document.getElementById('player');
  audio.volume=.7;
  btn.addEventListener('click',()=>{
    if(audio.paused){audio.play().then(()=>{ico.className='fas fa-pause';pl.classList.add('playing');}).catch(()=>{});}
    else{audio.pause();ico.className='fas fa-play';pl.classList.remove('playing');}
  });
  vol.addEventListener('input',e=>{audio.volume=e.target.value/100;pct.textContent=e.target.value+'%';});
})();

loadProfile();
setInterval(()=>checkStatus('1481979077'),30000);
