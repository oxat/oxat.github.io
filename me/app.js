(() => {
'use strict';

/* ───────────── CONFIG ───────────── */
const CFG = {
  user: 'ionut97',
  statusId: '1481979077',
  song: 'https://oxat.github.io/eminem.mp3',
  avatar: 'https://i.imgur.com/MCXJWcg.png',
};

const SKILLS = [
  ['HTML5','html5-plain','#E34F26',92],['CSS3','css3-plain','#1572B6',88],
  ['JavaScript','javascript-plain','#F7DF1E',95],['TypeScript','typescript-plain','#3178C6',80],
  ['React','react-original','#61DAFB',85],['Next.js','nextjs-plain','#ffffff',72],
  ['Node.js','nodejs-plain','#339933',78],['Express','express-original','#c4c4c4',70],
  ['PHP','php-plain','#8892BE',80],['Python','python-plain','#3776AB',75],
  ['MySQL','mysql-plain','#4479A1',74],['MongoDB','mongodb-plain','#47A248',68],
  ['Git','git-plain','#F05032',82],['Docker','docker-plain','#2496ED',65],
  ['Linux','linux-plain','#FCC624',78],['Redis','redis-plain','#DC382D',60],
];

const SOCIAL = [
  ['Instagram','fab fa-instagram','#E1306C',v=>`https://instagram.com/${v}`],
  ['Facebook','fab fa-facebook-f','#1877F2',v=>`https://facebook.com/${v}`],
  ['X','fab fa-x-twitter','#e8e8e8',v=>`https://x.com/${v}`],
  ['YouTube','fab fa-youtube','#FF0000',v=>`https://youtube.com/@${v}`],
  ['Snapchat','fab fa-snapchat','#FFFC00',v=>`https://snapchat.com/add/${v}`],
  ['Steam','fab fa-steam','#66c0f4',v=>`https://steamcommunity.com/profiles/${v}`],
  ['Twitch','fab fa-twitch','#9146FF',v=>`https://twitch.tv/${v}`],
  ['Spotify','fab fa-spotify','#1DB954',v=>`https://open.spotify.com/user/${v}`],
  ['Pinterest','fab fa-pinterest','#E60023',v=>`https://pinterest.com/${v}`],
  ['xat Group','fas fa-comments','#c9a84c',v=>`https://xat.com/${v}`],
  ['xat Forum','fas fa-scroll','#c9a84c',v=>`https://forum.xat.com/profile/${v}`],
  ['TikTok','fab fa-tiktok','#69C9D0',v=>`https://tiktok.com/@${v}`],
];

const PHRASES = [
  'A Developer Always Debugs His Code',
  'Winter is Coming... But Code is Forever',
  'When You Play the Game of Code, You Win or You Learn',
  'The Night is Dark and Full of Errors',
  'I Drink Coffee and I Know Things',
  'What is Dead May Never Die, But Rises Harder and Stronger',
];
const QUOTES = [
  'Valar Morghulis — All Bugs Must Die',
  'In Code We Trust, In Testing We Must',
  'Fire and Blood... But Mostly Coffee',
  'The Code Must Flow',
  'A Coder Never Forgets His First Hello World',
  'Not All Those Who Wander Are Lost — Some Are Just Debugging',
];
const RANKS = [[90, 'Legendary'], [80, 'Master'], [70, 'Adept'], [0, 'Apprentice']];

/* ───────────── CSS ───────────── */
const CSS = `
:root{--gold:#c9a84c;--gold-l:#f0d080;--gold-d:#7a5c1e;--ember:#ff6b1a;--dark:#0d0b08;--parch:#e8d9b5;--parch-d:#b09a72;--bdr:rgba(201,168,76,.3);--bdr-b:rgba(201,168,76,.65)}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:'Cinzel',serif;background:var(--dark);color:var(--parch);overflow-x:hidden}
#bg{position:fixed;inset:0;z-index:0;pointer-events:none}
.vignette{position:fixed;inset:0;z-index:1;background:radial-gradient(ellipse at center,transparent 30%,rgba(0,0,0,.5) 70%,rgba(0,0,0,.88) 100%);pointer-events:none}
.noise{position:fixed;inset:0;z-index:2;opacity:.03;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}

/* sidebar */
.sb{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:20;display:flex;flex-direction:column;align-items:flex-end}
.sb-label{writing-mode:vertical-rl;font-size:8px;letter-spacing:3px;text-transform:uppercase;color:var(--gold-d);padding:0 6px 10px;opacity:.7}
.sb-items{display:flex;flex-direction:column;align-items:flex-end;gap:6px}
.si{display:flex;align-items:center;justify-content:flex-end;position:relative;height:44px;width:44px;overflow:hidden;cursor:pointer;
  border-radius:6px 0 0 6px;border:1px solid var(--bdr);border-right:none;text-decoration:none;color:var(--parch);
  background:linear-gradient(to right,rgba(13,11,8,0),rgba(13,11,8,.92));
  transition:width .35s cubic-bezier(.4,0,.2,1),border-color .3s,box-shadow .3s,background .3s,opacity .4s,transform .4s}
.si:hover{width:150px;border-color:var(--bdr-b);background:rgba(16,13,9,.97);box-shadow:-6px 0 24px rgba(0,0,0,.6)}
.si::before{content:'';position:absolute;left:0;top:0;bottom:0;width:2px;background:var(--ic);opacity:0;transition:opacity .3s}
.si:hover::before{opacity:1;box-shadow:0 0 8px var(--ic)}
.si-ico{flex:0 0 44px;height:44px;display:flex;align-items:center;justify-content:center;font-size:18px;color:var(--ic);order:2;transition:transform .3s,filter .3s}
.si:hover .si-ico{transform:scale(1.12);filter:drop-shadow(0 0 6px var(--ic))}
.si-txt{order:1;padding-left:14px;display:flex;flex-direction:column;white-space:nowrap;opacity:0;transform:translateX(8px);transition:opacity .25s .08s,transform .25s .08s}
.si:hover .si-txt{opacity:1;transform:none}
.si-n{font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--gold)}
.si-h{font-family:'IM Fell English',serif;font-style:italic;font-size:10px;color:var(--parch-d);max-width:90px;overflow:hidden;text-overflow:ellipsis}

/* layout */
.page{position:relative;z-index:10;max-width:860px;margin:0 auto;padding:0 30px 120px}
.hero{display:flex;flex-direction:column;align-items:center;padding:80px 0 60px;text-align:center}
.shield{position:relative;width:200px;height:230px;margin-bottom:60px;filter:drop-shadow(0 20px 60px rgba(0,0,0,.9));
  transform:perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));transition:transform .25s ease-out;animation:float 6s ease-in-out infinite}
.shield .frame{position:absolute;inset:0;width:100%;height:100%}
.shield img{position:absolute;top:50%;left:50%;transform:translate(-50%,-52%);width:130px;height:130px;border-radius:50%;object-fit:cover;border:3px solid var(--gold-d);box-shadow:0 0 30px rgba(255,120,30,.35);transition:box-shadow .4s}
.shield:hover img{box-shadow:0 0 46px rgba(255,140,40,.65)}
.aura{position:absolute;left:50%;top:50%;width:280px;height:280px;margin:-140px 0 0 -140px;border-radius:50%;background:radial-gradient(circle,rgba(255,130,40,.3),rgba(255,90,20,.09) 45%,transparent 70%);animation:breathe 4s ease-in-out infinite;pointer-events:none}
.orbit{position:absolute;left:50%;top:50%;width:300px;height:300px;margin:-150px 0 0 -150px;fill:none;overflow:visible;pointer-events:none}
.o1{animation:spin 40s linear infinite}.o1 circle{stroke:rgba(201,168,76,.4);stroke-width:1;stroke-dasharray:2 10}
.o2{animation:spin 60s linear infinite reverse}.o2 circle{stroke:rgba(240,208,128,.25);stroke-width:1;stroke-dasharray:40 18 4 18}
.orb{position:absolute;left:50%;top:50%;width:5px;height:5px;margin:-2.5px;border-radius:50%;background:#ffe9a8;box-shadow:0 0 8px 2px var(--ember);animation:orbit var(--d,8s) linear infinite;animation-delay:var(--s,0s);pointer-events:none}
.avring{position:absolute;top:50%;left:50%;width:144px;height:144px;margin:-74.6px 0 0 -72px;border-radius:50%;pointer-events:none;
  background:conic-gradient(transparent 0 55%,rgba(240,208,128,.95) 85%,transparent 100%);
  -webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 3px),#000 calc(100% - 2px));mask:radial-gradient(farthest-side,transparent calc(100% - 3px),#000 calc(100% - 2px));animation:spin 3.5s linear infinite}
.shine{position:absolute;inset:0;pointer-events:none;clip-path:polygon(50% 3%,92% 17%,92% 62%,50% 97%,8% 62%,8% 17%);
  background:linear-gradient(115deg,transparent 40%,rgba(255,240,200,.25) 50%,transparent 60%) 250% 0/250% 100% no-repeat;animation:shsweep 6s 1s ease-in-out infinite}
@keyframes spin{to{rotate:360deg}}
@keyframes float{50%{translate:0 -8px}}
@keyframes breathe{50%{transform:scale(1.15);opacity:.65}}
@keyframes orbit{from{transform:rotate(0) translateX(var(--r,130px))}to{transform:rotate(360deg) translateX(var(--r,130px))}}
@keyframes shsweep{0%{background-position:250% 0}45%,100%{background-position:-150% 0}}
.badge{position:absolute;bottom:22px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:6px;background:rgba(8,7,4,.96);border:1px solid var(--bdr-b);border-radius:20px;padding:5px 14px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--gold-l);white-space:nowrap}
.dot{width:7px;height:7px;border-radius:50%;background:#4ade80;box-shadow:0 0 8px #4ade80;animation:dp 2s ease-in-out infinite}
.dot.off{background:#f87171;box-shadow:0 0 8px #f87171}
@keyframes dp{50%{opacity:.6;transform:scale(.85)}}
.name{display:inline-block;padding:.08em .16em .12em .1em;font-family:'Cinzel Decorative',serif;font-size:clamp(44px,7vw,76px);font-weight:900;line-height:1.1;letter-spacing:6px;
  background:linear-gradient(105deg,transparent 42%,rgba(255,250,225,.95) 50%,transparent 58%) 250% 0/250% 100% no-repeat,linear-gradient(180deg,var(--gold-l),var(--gold) 40%,var(--gold-d));
  -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;
  animation:nameIn 1.6s cubic-bezier(.2,.8,.2,1) backwards,sweep 5s 2s ease-in-out infinite,glow 4s ease-in-out infinite}
@keyframes nameIn{from{opacity:0;letter-spacing:22px}}
@keyframes sweep{0%{background-position:250% 0,0 0}40%,100%{background-position:-150% 0,0 0}}
@keyframes glow{0%,100%{filter:drop-shadow(0 0 4px rgba(201,168,76,.3))}50%{filter:drop-shadow(0 0 16px rgba(240,208,128,.5))}}
.div{display:flex;align-items:center;gap:12px;margin:18px auto;width:380px;max-width:100%}
.dl{flex:1;height:1px;background:linear-gradient(to right,transparent,var(--gold-d),transparent)}
.gem{width:8px;height:8px;background:var(--gold);transform:rotate(45deg);box-shadow:0 0 8px var(--gold);animation:gem 2.6s ease-in-out infinite}
@keyframes gem{50%{transform:rotate(225deg) scale(1.3);box-shadow:0 0 18px 2px var(--gold-l)}}
.sub{font-family:'IM Fell English',serif;font-size:16px;font-style:italic;color:var(--parch-d);letter-spacing:3px;text-transform:uppercase;margin-bottom:30px;animation:subIn 1.8s .5s cubic-bezier(.2,.8,.2,1) backwards}
@keyframes subIn{from{opacity:0;letter-spacing:10px}}
.flag{height:14px;width:auto;vertical-align:-2px;margin-left:2px;border-radius:2px;box-shadow:0 0 0 1px rgba(201,168,76,.45),0 2px 8px rgba(0,0,0,.6)}
@property --ang{syntax:'<angle>';initial-value:0deg;inherits:false}
.scroll{position:relative;max-width:560px;width:100%;padding:24px 34px;border:1px solid transparent;border-radius:6px;
  background:linear-gradient(135deg,rgba(26,22,16,.92),rgba(13,11,8,.96)) padding-box,conic-gradient(from var(--ang),rgba(201,168,76,.25) 0 60%,var(--gold-l) 80%,rgba(201,168,76,.25) 100%) border-box;
  box-shadow:0 8px 32px rgba(0,0,0,.6),inset 0 0 30px rgba(201,168,76,.05);animation:ang 6s linear infinite}
@keyframes ang{to{--ang:360deg}}
.scroll::before,.scroll::after{content:'✦';position:absolute;top:50%;margin-top:-8px;font-size:11px;color:var(--gold-d);text-shadow:0 0 8px var(--gold);animation:tw 2.4s ease-in-out infinite}
.scroll::before{left:12px}.scroll::after{right:12px;animation-delay:1.2s}
@keyframes tw{50%{opacity:.3}}
.typing{font-family:'IM Fell English',serif;font-style:italic;font-size:16px;min-height:26px;line-height:1.6;color:var(--parch);text-shadow:0 0 12px rgba(201,168,76,.25)}
.cursor{display:inline-block;width:2px;height:17px;background:var(--ember);box-shadow:0 0 8px var(--ember);vertical-align:middle;margin-left:3px;animation:bl 1s step-end infinite}
@keyframes bl{50%{opacity:0}}

/* skills */
.section{margin-top:70px}
.sh{display:flex;align-items:center;gap:20px;margin-bottom:28px}
.sh .dl{background:linear-gradient(to right,var(--gold-d),transparent)}
.st{font-family:'Cinzel Decorative',serif;font-size:12px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:var(--gold);white-space:nowrap}
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:13px}

.card{--c:#c9a84c;--mx:50%;--my:0%;position:relative;overflow:hidden;padding:22px 14px 16px;display:flex;flex-direction:column;align-items:center;gap:8px;
  background:linear-gradient(145deg,rgba(28,22,14,.95),rgba(13,11,8,.98));border:1px solid var(--bdr);border-radius:8px;
  transition:transform .15s ease-out,border-color .3s,box-shadow .3s;will-change:transform}
.card:not(.go){opacity:0}
.card.go{animation:cardIn .8s cubic-bezier(.2,.8,.2,1) backwards}
@keyframes cardIn{from{opacity:0;transform:translateY(26px) scale(.94)}}
.card:hover{border-color:color-mix(in srgb,var(--c) 55%,var(--gold-d));box-shadow:0 16px 40px rgba(0,0,0,.65),0 0 26px color-mix(in srgb,var(--c) 20%,transparent)}
.card::before{content:'';position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .3s;
  background:radial-gradient(200px circle at var(--mx) var(--my),color-mix(in srgb,var(--c) 20%,transparent),transparent 70%)}
.card:hover::before{opacity:1}
.card::after{content:'';position:absolute;top:0;bottom:0;left:-60%;width:40%;pointer-events:none;transform:skewX(-20deg);
  background:linear-gradient(100deg,transparent,rgba(255,240,200,.2),transparent)}
.card.done::after{animation:shine 1.1s ease-out}
@keyframes shine{to{left:140%}}

.ring{position:relative;width:80px;height:80px;display:grid;place-items:center}
.ring svg{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg);overflow:visible}
.ring circle{fill:none;stroke-width:3}
.rt{stroke:rgba(201,168,76,.12)}
.rf{stroke:var(--gold);stroke-linecap:round;stroke-dasharray:213.63;stroke-dashoffset:213.63;filter:drop-shadow(0 0 4px rgba(201,168,76,.7))}
.rdot{position:absolute;left:37px;top:37px;width:6px;height:6px;border-radius:50%;background:var(--gold-l);box-shadow:0 0 8px 2px var(--gold);opacity:0;transform:translateY(-34px)}
.ic{width:52px;height:52px;border-radius:50%;display:grid;place-items:center;font-size:26px;background:radial-gradient(circle,rgba(0,0,0,.6),rgba(0,0,0,.25));transition:transform .3s}
.card:hover .ic{transform:scale(1.1)}
.card:hover .ic i{filter:drop-shadow(0 0 8px currentColor)}
.sn{font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--parch-d);margin-top:2px}
.pc{font-family:'Cinzel Decorative',serif;font-size:22px;font-weight:700;line-height:1;color:var(--gold-l);text-shadow:0 0 12px rgba(201,168,76,.4);font-variant-numeric:tabular-nums}
.pc small{font-size:11px;color:var(--gold);margin-left:2px}
.rk{font-size:8px;letter-spacing:3px;text-transform:uppercase;color:var(--gold-d);opacity:0;transform:translateY(4px);transition:opacity .6s,transform .6s}
.card.done .rk{opacity:1;transform:none}
.card.legend .rk{color:var(--gold-l)}
.card.legend.done .ring{animation:pulse 3s ease-in-out infinite}
@keyframes pulse{50%{filter:drop-shadow(0 0 10px rgba(240,208,128,.55))}}

/* quote */
.quote{margin:70px 0;padding:40px 50px;background:linear-gradient(135deg,rgba(24,20,13,.7),rgba(10,9,6,.82));border:1px solid var(--bdr);border-radius:6px;text-align:center}
.qt{font-family:'IM Fell English',serif;font-size:20px;font-style:italic;line-height:1.8;transition:opacity .5s}
.qa{margin-top:16px;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--gold-d)}
.reveal{opacity:0;transform:translateY(22px);transition:opacity .7s,transform .7s}
.reveal.in{opacity:1;transform:none}

/* player */
.player{position:fixed;bottom:24px;left:24px;z-index:100;width:280px;padding:14px 16px 12px;border-radius:14px;overflow:hidden;
  background:linear-gradient(145deg,rgba(28,22,14,.82),rgba(10,9,6,.92));backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);
  border:1px solid var(--bdr);box-shadow:0 12px 40px rgba(0,0,0,.75),inset 0 1px 0 rgba(240,208,128,.12);transition:border-color .4s,box-shadow .4s}
.player.on{border-color:var(--bdr-b);box-shadow:0 12px 40px rgba(0,0,0,.75),0 0 30px rgba(255,120,30,.18),inset 0 1px 0 rgba(240,208,128,.2)}
.p-glow{position:absolute;left:-30px;top:-30px;width:140px;height:140px;border-radius:50%;background:radial-gradient(circle,rgba(255,120,30,.3),transparent 70%);opacity:0;transition:opacity .6s;pointer-events:none}
.player.on .p-glow{opacity:1;animation:breathe 3s ease-in-out infinite}
.p-main{position:relative;display:flex;align-items:center;gap:12px}
.p-min{position:absolute;top:-12px;right:-12px;width:22px;height:22px;background:none;border:0;color:var(--parch-d);font-size:9px;cursor:pointer;transition:color .3s}
.p-min:hover{color:var(--gold-l)}
.p-min i{transition:transform .3s}
.vinyl{flex:0 0 54px;height:54px;border-radius:50%;padding:2px;background:linear-gradient(135deg,var(--gold),var(--gold-d));box-shadow:0 4px 14px rgba(0,0,0,.7)}
.disc{position:relative;width:100%;height:100%;border-radius:50%;
  background:radial-gradient(circle,var(--gold) 0 17%,#0a0804 18% 21%,transparent 22%),repeating-radial-gradient(circle,#100e0a 0 2px,#1d1912 2px 3px);animation:spin 3.2s linear infinite;animation-play-state:paused}
.disc::before{content:'';position:absolute;inset:0;border-radius:50%;background:conic-gradient(from 20deg,transparent,rgba(255,255,255,.14) 10%,transparent 25%,transparent 50%,rgba(255,255,255,.1) 60%,transparent 75%)}
.disc::after{content:'';position:absolute;left:50%;top:50%;width:5px;height:5px;margin:-2.5px;border-radius:50%;background:#0a0804}
.player.on .disc{animation-play-state:running}
.p-meta{flex:1;min-width:0}
.tn{font-size:10px;font-weight:700;letter-spacing:.5px;color:var(--gold-l);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ta{font-family:'IM Fell English',serif;font-style:italic;font-size:12px;color:var(--parch-d);margin-top:3px}
.pb{flex:0 0 38px;height:38px;border-radius:50%;border:1px solid var(--gold-d);background:radial-gradient(circle at 30% 30%,rgba(240,208,128,.3),rgba(201,168,76,.08));color:var(--gold-l);font-size:12px;cursor:pointer;transition:transform .2s,box-shadow .3s}
.pb:hover{transform:scale(1.08);box-shadow:0 0 18px rgba(201,168,76,.4)}
.pb:active{transform:scale(.94)}
.viz{display:block;width:100%;height:36px;margin:12px 0 6px}
.prog{position:relative;height:12px;cursor:pointer;display:flex;align-items:center}
.prog::before{content:'';position:absolute;left:0;right:0;height:3px;border-radius:2px;background:rgba(255,255,255,.08)}
.pf{position:relative;height:3px;width:0;border-radius:2px;background:linear-gradient(to right,var(--gold-d),var(--gold),var(--gold-l));box-shadow:0 0 8px rgba(201,168,76,.5);transition:width .3s linear}
.pf::after{content:'';position:absolute;right:-4px;top:-3px;width:9px;height:9px;border-radius:50%;background:var(--gold-l);box-shadow:0 0 8px var(--gold);transform:scale(0);transition:transform .2s}
.prog:hover .pf::after{transform:scale(1)}
.times{display:flex;justify-content:space-between;font-size:9px;letter-spacing:1px;color:var(--parch-d);font-variant-numeric:tabular-nums;margin-top:2px}
.vol{display:flex;align-items:center;gap:8px;margin-top:8px;font-size:9px;color:var(--parch-d)}
.vol button{background:none;border:0;color:var(--parch-d);cursor:pointer;font-size:11px;width:16px;transition:color .3s}
.vol button:hover{color:var(--gold-l)}
.vol input{flex:1;height:3px;accent-color:var(--gold);cursor:pointer}
.vol span{min-width:28px;text-align:right}
.player.min{width:auto;padding:10px 12px}
.player.min .p-meta,.player.min .viz,.player.min .prog,.player.min .times,.player.min .vol{display:none}
.player.min .p-min{position:static}
.player.min .p-min i{transform:rotate(180deg)}

@media(max-width:960px){.grid{grid-template-columns:repeat(3,1fr)}}
@media(max-width:700px){.grid{grid-template-columns:repeat(2,1fr)}.sb{display:none}.player{left:50%;transform:translateX(-50%);bottom:16px}.quote{padding:28px 22px}.qt{font-size:16px}}
`;

/* ───────────── DOM ───────────── */
const $ = (s, r = document) => r.querySelector(s);
document.head.appendChild(Object.assign(document.createElement('style'), { textContent: CSS }));

document.body.insertAdjacentHTML('beforeend', `
<canvas id="bg"></canvas><div class="vignette"></div><div class="noise"></div>
<aside class="sb" id="sb"><div class="sb-label">Alliances</div><div class="sb-items" id="sb-items"></div></aside>
<main class="page">
  <section class="hero">
    <div class="shield"><div class="aura"></div><svg class="orbit o1" viewBox="0 0 300 300"><circle cx="150" cy="150" r="140"/></svg><svg class="orbit o2" viewBox="0 0 300 300"><circle cx="150" cy="150" r="128"/></svg>
      <svg class="frame" viewBox="0 0 200 240" fill="none"><defs>
        <linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3a2e1a"/><stop offset=".5" stop-color="#1a1610"/><stop offset="1" stop-color="#0d0b08"/></linearGradient>
        <linearGradient id="sb2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c9a84c"/><stop offset=".5" stop-color="#7a5c1e"/><stop offset="1" stop-color="#c9a84c"/></linearGradient>
        <filter id="ss"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#000" flood-opacity=".7"/></filter></defs>
        <path d="M100 8 L188 42 L188 148 L100 232 L12 148 L12 42Z" fill="url(#sg)" stroke="url(#sb2)" stroke-width="2.5" filter="url(#ss)"/>
        <path d="M100 22 L176 52 L176 144 L100 218 L24 144 L24 52Z" stroke="rgba(201,168,76,.2)"/></svg>
      <div class="shine"></div><img id="avatar" src="${CFG.avatar}" alt="Avatar"/><div class="avring"></div><i class="orb" style="--r:135px;--d:9s"></i><i class="orb" style="--r:118px;--d:7s;--s:-2s"></i><i class="orb" style="--r:148px;--d:12s;--s:-5s"></i>
      <div class="badge"><span class="dot off" id="dot"></span><span id="stxt">...</span></div>
    </div>
    <h1 class="name" id="name">—</h1>
    <div class="div"><div class="dl"></div><div class="gem"></div><div class="dl"></div></div>
    <p class="sub" id="sub">Lord of Code &nbsp;·&nbsp; Master of Digital Realms</p>
    <div class="scroll"><div class="typing"><span id="typing"></span><span class="cursor"></span></div></div>
  </section>
  <section class="section reveal">
    <div class="sh"><span class="st">Arsenal of Skills</span><div class="dl"></div><div class="gem"></div></div>
    <div class="grid" id="grid"></div>
  </section>
  <div class="quote reveal"><p class="qt" id="qt">${QUOTES[0]}</p><p class="qa">— Ionut, Lord of Code</p></div>
</main>
<div class="player" id="player">
  <div class="p-glow"></div>
  <div class="p-main">
    <div class="vinyl"><div class="disc"></div></div>
    <div class="p-meta"><div class="tn">The Real Slim Shady</div><div class="ta">Eminem</div></div>
    <button class="pb" id="pb" aria-label="Play"><i class="fas fa-play"></i></button>
    <button class="p-min" id="pmin" aria-label="Minimize"><i class="fas fa-chevron-down"></i></button>
  </div>
  <canvas class="viz" id="viz"></canvas>
  <div class="prog" id="prog"><div class="pf" id="pf"></div></div>
  <div class="times"><span id="tc">0:00</span><span id="td">0:00</span></div>
  <div class="vol"><button id="mute" aria-label="Mute"><i class="fas fa-volume-low"></i></button><input type="range" min="0" max="100" value="70" id="vol"/><span id="vp">70%</span></div>
</div>`);

$('#grid').innerHTML = SKILLS.map(([n, ic, c, p]) => `
  <div class="card${p >= 90 ? ' legend' : ''}" data-p="${p}" style="--c:${c}">
    <div class="ring">
      <svg viewBox="0 0 80 80"><circle class="rt" cx="40" cy="40" r="34"/><circle class="rf" cx="40" cy="40" r="34"/></svg>
      <span class="rdot"></span>
      <div class="ic"><i class="devicon-${ic}" style="color:${c}"></i></div>
    </div>
    <div class="sn">${n}</div>
    <div class="pc"><span class="pn">0</span><small>%</small></div>
    <div class="rk">${RANKS.find(([m]) => p >= m)[1]}</div>
  </div>`).join('');

/* ───────────── BACKGROUND ENGINE ───────────── */
(() => {
  const cv = $('#bg'), ctx = cv.getContext('2d');
  let W = 0, H = 0, stone = null, last = performance.now();
  const rnd = Math.random;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // PRNG cu seed ca piatra sa nu se schimbe la resize
  const mulberry = a => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };

  function resize() {
    const d = Math.min(devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    cv.width = W * d; cv.height = H * d;
    ctx.setTransform(d, 0, 0, d, 0, 0);
    buildStone(d);
  }

  function buildStone(d) {
    const o = document.createElement('canvas'); o.width = W * d; o.height = H * d;
    const c = o.getContext('2d'); c.scale(d, d);
    const g = c.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#0a0804'); g.addColorStop(.5, '#0d0b08'); g.addColorStop(1, '#060504');
    c.fillStyle = g; c.fillRect(0, 0, W, H);
    const r = mulberry(1337), bw = 110, bh = 56;
    for (let y = 0, row = 0; y < H + bh; y += bh, row++) {
      for (let x = -bw + (row % 2) * bw / 2; x < W + bw; x += bw) {
        c.fillStyle = `rgba(255,220,160,${(r() * .02).toFixed(4)})`; c.fillRect(x + 1, y + 1, bw - 2, bh - 2);
        c.fillStyle = `rgba(255,240,200,${(r() * .008).toFixed(4)})`; c.fillRect(x + 1, y + 1, bw - 2, 1);
        c.strokeStyle = 'rgba(0,0,0,.45)'; c.strokeRect(x + .5, y + .5, bw - 1, bh - 1);
      }
    }
    stone = o;
  }

  const sprite = (r, g, b, mid = .4) => {
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const x = c.getContext('2d'), gr = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, `rgba(${r},${g},${b},1)`); gr.addColorStop(mid, `rgba(${r},${g},${b},.4)`); gr.addColorStop(1, `rgba(${r},${g},${b},0)`);
    x.fillStyle = gr; x.fillRect(0, 0, 64, 64); return c;
  };
  const lerp = (a, b, t) => a + (b - a) * t;
  const STEPS = 16;
  const FIRE = Array.from({ length: STEPS }, (_, i) => {
    const u = i / (STEPS - 1);
    return u < .4
      ? sprite(255, lerp(245, 150, u / .4) | 0, lerp(180, 30, u / .4) | 0)
      : sprite(lerp(255, 190, (u - .4) / .6) | 0, lerp(150, 35, (u - .4) / .6) | 0, lerp(30, 10, (u - .4) / .6) | 0);
  });
  const SMOKE = sprite(90, 90, 90, .2), SPARK = sprite(255, 200, 100, .2), FLAKE = sprite(225, 235, 255, .35);

  // vânt global, variază lent
  const wind = t => Math.sin(t * .0004) * 18 + Math.sin(t * .0013) * 9;
  const flick = t => .82 + .1 * Math.sin(t * .017) + .05 * Math.sin(t * .041 + 1) + .03 * Math.sin(t * .097 + 2);

  class Torch {
    constructor(side) { this.side = side; this.f = []; this.s = []; this.k = []; this.acc = { f: 0, s: 0, k: 0 }; }
    get x() { return this.side < 0 ? 48 : W - 48; }
    get y() { return 130; }
    spawn(dt) {
      const a = this.acc, x = this.x, y = this.y;
      a.f += dt * 70; a.s += dt * 7; a.k += dt * 9;
      for (; a.f >= 1; a.f--) this.f.push({ x: x + (rnd() - .5) * 12, y: y - 4, vx: (rnd() - .5) * 14, vy: -(55 + rnd() * 55), a: 0, m: .55 + rnd() * .5, sz: 12 + rnd() * 12, ph: rnd() * 6.28 });
      for (; a.s >= 1; a.s--) this.s.push({ x: x + (rnd() - .5) * 8, y: y - 10, vx: (rnd() - .5) * 40, vy: -(70 + rnd() * 110), a: 0, m: 1.2 + rnd() * 1.8, sz: .6 + rnd() * 1.2, ph: rnd() * 6.28 });
      for (; a.k >= 1; a.k--) this.k.push({ x: x + (rnd() - .5) * 10, y: y - 55, vx: 0, vy: -(22 + rnd() * 16), a: 0, m: 2.2 + rnd() * 1.5, sz: 10 + rnd() * 8 });
    }
    update(dt, t) {
      this.spawn(dt);
      const w = wind(t), bx = this.x;
      for (const p of this.f) {
        p.a += dt; const u = p.a / p.m;
        p.vx += (bx - p.x) * 3 * dt + w * .6 * dt * u + Math.sin(t * .008 + p.ph) * 22 * dt;
        p.x += p.vx * dt; p.y += p.vy * dt;
      }
      for (const p of this.s) { p.a += dt; p.vx += (w * .8 + Math.sin(t * .01 + p.ph) * 60) * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 12 * dt; }
      for (const p of this.k) { p.a += dt; p.vx += w * .5 * dt; p.x += p.vx * dt; p.y += p.vy * dt; }
      this.f = this.f.filter(p => p.a < p.m); this.s = this.s.filter(p => p.a < p.m); this.k = this.k.filter(p => p.a < p.m);
    }
    drawBody() {
      const x = this.x, y = this.y;
      ctx.fillStyle = '#3a2010'; ctx.fillRect(x - 13, y + 78, 26, 7);            // consolă
      const h = ctx.createLinearGradient(x - 5, 0, x + 5, 0);
      h.addColorStop(0, '#5a3820'); h.addColorStop(1, '#1a0e08');
      ctx.fillStyle = h; ctx.fillRect(x - 5, y + 10, 10, 72);                      // mâner
      ctx.fillStyle = '#4a2c18'; ctx.beginPath();                                   // cupă
      ctx.moveTo(x - 13, y - 6); ctx.lineTo(x + 13, y - 6); ctx.lineTo(x + 7, y + 12); ctx.lineTo(x - 7, y + 12); ctx.fill();
      ctx.strokeStyle = '#7a5030'; ctx.stroke();
    }
    drawSmoke() {
      for (const p of this.k) {
        const u = p.a / p.m, s = p.sz * (1 + u * 3);
        ctx.globalAlpha = .07 * Math.sin(u * Math.PI);
        ctx.drawImage(SMOKE, p.x - s, p.y - s, s * 2, s * 2);
      }
    }
    drawLight(t) {
      const f = flick(t + this.side * 300), r = 300 * f;
      const g = ctx.createRadialGradient(this.x, this.y - 25, 0, this.x, this.y - 25, r);
      g.addColorStop(0, `rgba(255,130,40,${.3 * f})`); g.addColorStop(.4, `rgba(255,90,20,${.1 * f})`); g.addColorStop(1, 'rgba(255,60,0,0)');
      ctx.fillStyle = g; ctx.fillRect(this.x - r, this.y - 25 - r, r * 2, r * 2);
    }
    drawFire() {
      for (const p of this.f) {
        const u = p.a / p.m, s = p.sz * (1 - u * .65);
        ctx.globalAlpha = Math.pow(1 - u, 1.3) * .85;
        ctx.drawImage(FIRE[Math.min(STEPS - 1, u * STEPS | 0)], p.x - s, p.y - s, s * 2, s * 2);
      }
      for (const p of this.s) {
        const u = p.a / p.m, tw = .6 + .4 * Math.sin(p.a * 30 + p.ph), s = p.sz * 4;
        ctx.globalAlpha = (1 - u) * tw;
        ctx.drawImage(SPARK, p.x - s, p.y - s, s * 2, s * 2);
      }
    }
  }

  const torches = [new Torch(-1), new Torch(1)];
  const flakes = Array.from({ length: reduce ? 30 : 120 }, () => mkFlake(true));
  function mkFlake(init) {
    const z = .3 + rnd() * .7;
    return { x: rnd() * (W || 1200), y: init ? rnd() * (H || 800) : -10, z, sz: .8 + z * 2.4, v: 25 + z * 55, ph: rnd() * 6.28, al: .2 + z * .45 };
  }

  function frame(now) {
    requestAnimationFrame(frame);
    if (document.hidden) { last = now; return; }
    const dt = Math.min((now - last) / 1000, .05); last = now;
    const showTorch = W > 700;

    ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, W, H); ctx.drawImage(stone, 0, 0, W, H);

    if (showTorch) for (const t of torches) { t.update(dt, now); t.drawBody(); t.drawSmoke(); }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'lighter';
    if (showTorch) for (const t of torches) { t.drawLight(now); t.drawFire(); }

    // zăpadă
    ctx.globalCompositeOperation = 'source-over';
    const w = wind(now);
    for (const f of flakes) {
      f.ph += dt * (.8 + f.z);
      f.x += (w * f.z * .6 + Math.sin(f.ph) * 14 * f.z) * dt;
      f.y += f.v * dt;
      if (f.y > H + 10) Object.assign(f, mkFlake(false), { x: rnd() * W });
      if (f.x > W + 10) f.x = -10; else if (f.x < -10) f.x = W + 10;
      ctx.globalAlpha = f.al;
      ctx.drawImage(FLAKE, f.x - f.sz, f.y - f.sz, f.sz * 2, f.sz * 2);
    }
    ctx.globalAlpha = 1;
  }

  resize(); addEventListener('resize', resize);
  requestAnimationFrame(frame);
})();

/* ───────────── SIDEBAR + PROFIL ───────────── */
function renderSidebar(parts) {
  const box = $('#sb-items'); box.innerHTML = '';
  let n = 0;
  SOCIAL.forEach(([label, icon, color, url], i) => {
    const v = (parts[i] || '').trim(); if (!v) return;
    const a = document.createElement('a');
    a.className = 'si'; a.href = url(v); a.target = '_blank'; a.rel = 'noopener noreferrer';
    a.style.setProperty('--ic', color);
    a.style.opacity = '0'; a.style.transform = 'translateX(20px)';
    const txt = document.createElement('div'); txt.className = 'si-txt';
    txt.innerHTML = `<span class="si-n"></span><span class="si-h"></span>`;
    txt.children[0].textContent = label; txt.children[1].textContent = v;   // textContent = fără XSS
    const ic = document.createElement('div'); ic.className = 'si-ico'; ic.innerHTML = `<i class="${icon}"></i>`;
    a.append(txt, ic); box.appendChild(a);
    setTimeout(() => { a.style.opacity = '1'; a.style.transform = 'none'; }, 80 * ++n);
  });
  if (!n) $('#sb').style.display = 'none';
}

async function checkStatus() {
  let on = false;
  try { on = (await (await fetch(`https://oceanbot.net/online.php?id=${CFG.statusId}&t=${Date.now()}`)).json())?.status === 'online'; } catch {}
  $('#dot').className = 'dot' + (on ? '' : ' off');
  $('#stxt').textContent = on ? 'Online' : 'Offline';
}

async function loadProfile() {
  try {
    const raw = await (await fetch(`https://xat.com/web_gear/chat/profile2.php?n=${CFG.user}&t=${Date.now()}`)).json();
    const m = raw?.Err?.Media; if (!m) throw 0;
    const av = m.avatar2 || (m.avatar || '').split('#')[0];
    if (av) $('#avatar').src = av;
    const cp = (m.custom || '').split('~');
    const name = cp[0] || m.Name || 'Ionut', cc = cp[6] || '';
    $('#name').textContent = name; document.title = `${name} — Lord of Code`;
    const flag = /^[a-z]{2}$/i.test(cc) ? `<img class="flag" src="https://flagcdn.com/w40/${cc.toLowerCase()}.png" alt="${cc.toUpperCase()}">` : '';
    $('#sub').innerHTML = `Lord of Code &nbsp;·&nbsp; Master of Digital Realms${flag ? `&nbsp;·&nbsp;${flag}` : ''}`;
    renderSidebar((m.social || '').split('~'));
  } catch {
    $('#name').textContent = 'Ionut'; document.title = 'Ionut — Lord of Code';
    $('#sb').style.display = 'none';
  }
  checkStatus();
}

/* ───────────── TYPING + QUOTES ───────────── */
(() => {
  const el = $('#typing'); let p = 0, c = 0, del = false;
  const tick = () => {
    const s = PHRASES[p];
    if (!del) { el.textContent = s.slice(0, ++c); if (c === s.length) { del = true; return setTimeout(tick, 2400); } }
    else { el.textContent = s.slice(0, --c); if (!c) { del = false; p = (p + 1) % PHRASES.length; return setTimeout(tick, 450); } }
    setTimeout(tick, del ? 42 : 92);
  };
  setTimeout(tick, 1400);

  const q = $('#qt'); let i = 0;
  setInterval(() => { q.style.opacity = 0; setTimeout(() => { q.textContent = QUOTES[i = (i + 1) % QUOTES.length]; q.style.opacity = 1; }, 520); }, 7500);
})();

/* ───────────── REVEAL ───────────── */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('in'); io.unobserve(e.target);
}), { threshold: .08 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ───────────── SKILL CARDS ───────────── */
(() => {
  const C = 2 * Math.PI * 34, ease = t => 1 - Math.pow(1 - t, 4);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function fill(card) {
    const p = +card.dataset.p, rf = $('.rf', card), dot = $('.rdot', card), pn = $('.pn', card);
    const set = v => {
      rf.style.strokeDashoffset = C * (1 - v / 100);
      dot.style.transform = `rotate(${v * 3.6}deg) translateY(-34px)`;
      pn.textContent = Math.round(v);
    };
    if (reduce) { set(p); dot.style.opacity = 1; card.classList.add('done'); return; }
    const t0 = performance.now(), dur = 1700;
    dot.style.opacity = 1;
    const step = now => {
      const k = Math.min((now - t0) / dur, 1);
      set(p * ease(k));
      k < 1 ? requestAnimationFrame(step) : card.classList.add('done');
    };
    requestAnimationFrame(step);
  }

  // înclinare 3D + spotlight
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      card.style.setProperty('--mx', x * 100 + '%'); card.style.setProperty('--my', y * 100 + '%');
      card.style.transform = `perspective(700px) rotateX(${(.5 - y) * 10}deg) rotateY(${(x - .5) * 12}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });

  new IntersectionObserver((es, o) => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.querySelectorAll('.card').forEach((c, i) => setTimeout(() => { c.classList.add('go'); fill(c); }, i * 90));
    o.disconnect();
  }), { threshold: .15 }).observe($('#grid'));
})();

/* ───────────── AVATAR TILT ───────────── */
(() => {
  if (matchMedia('(hover:none)').matches) return;
  const hero = $('.hero'), sh = $('.shield');
  const set = (x, y) => { sh.style.setProperty('--ry', x + 'deg'); sh.style.setProperty('--rx', y + 'deg'); };
  hero.addEventListener('mousemove', e => {
    const r = sh.getBoundingClientRect();
    set((((e.clientX - r.left - r.width / 2) / innerWidth) * 24).toFixed(2), (-((e.clientY - r.top - r.height / 2) / innerHeight) * 18).toFixed(2));
  });
  hero.addEventListener('mouseleave', () => set(0, 0));
})();

/* ───────────── PLAYER ───────────── */
(() => {
  const a = new Audio(); a.crossOrigin = 'anonymous'; a.preload = 'metadata'; a.loop = true; a.volume = .7; a.src = CFG.song;
  const pl = $('#player'), ico = $('#pb i'), pf = $('#pf'), cv = $('#viz'), g = cv.getContext('2d');
  const fmt = s => isFinite(s) ? `${s / 60 | 0}:${String(s % 60 | 0).padStart(2, '0')}` : '0:00';
  let ac, an, buf, fake = false;

  // dacă serverul nu permite CORS, redăm fără analizor (vizualizator simulat)
  a.addEventListener('error', () => { if (a.hasAttribute('crossorigin')) { a.removeAttribute('crossorigin'); fake = true; a.src = CFG.song; } }, { once: true });

  const setup = () => {
    if (ac || fake) return;
    try {
      ac = new (window.AudioContext || window.webkitAudioContext)();
      an = ac.createAnalyser(); an.fftSize = 128; an.smoothingTimeConstant = .8;
      ac.createMediaElementSource(a).connect(an); an.connect(ac.destination);
      buf = new Uint8Array(an.frequencyBinCount);
    } catch { fake = true; ac = an = null; }
  };

  // vizualizator
  const W = 232, H = 36, N = 28, lv = new Array(N).fill(0), dpr = Math.min(devicePixelRatio || 1, 2);
  cv.width = W * dpr; cv.height = H * dpr; g.scale(dpr, dpr);
  const gr = g.createLinearGradient(0, H, 0, 0);
  gr.addColorStop(0, '#7a5c1e'); gr.addColorStop(.6, '#c9a84c'); gr.addColorStop(1, '#f0d080');
  let idle = false;
  const draw = t => {
    requestAnimationFrame(draw);
    if (document.hidden || (idle && a.paused)) return;
    const on = !a.paused, real = on && an && !fake;
    if (real) an.getByteFrequencyData(buf);
    for (let i = 0; i < N; i++) {
      let v = 0;
      if (real) v = buf[2 + (i * .9 | 0)] / 255;
      else if (on) v = .35 + .35 * Math.sin(t * .006 + i * .7) * Math.sin(t * .0023 + i * 1.3) + .2 * Math.sin(t * .011 + i);
      v = Math.max(.04, v);
      lv[i] += (v - lv[i]) * (v > lv[i] ? .5 : .12);
    }
    idle = !on && lv.every(x => x < .05);
    g.clearRect(0, 0, W, H); g.fillStyle = gr;
    const step = W / N, bw = step - 3;
    for (let i = 0; i < N; i++) {
      const h = Math.max(2, lv[i] * (H - 2));
      g.beginPath(); (g.roundRect || g.rect).call(g, i * step + 1.5, H - h, bw, h, 2); g.fill();
    }
  };
  requestAnimationFrame(draw);

  // play / pause
  $('#pb').onclick = async () => {
    if (a.paused) {
      setup();
      try { if (ac) await ac.resume(); await a.play(); ico.className = 'fas fa-pause'; pl.classList.add('on'); } catch {}
    } else { a.pause(); ico.className = 'fas fa-play'; pl.classList.remove('on'); }
  };

  // progres
  a.addEventListener('timeupdate', () => { pf.style.width = (a.currentTime / a.duration * 100 || 0) + '%'; $('#tc').textContent = fmt(a.currentTime); });
  a.addEventListener('loadedmetadata', () => { $('#td').textContent = fmt(a.duration); });
  $('#prog').addEventListener('click', e => {
    const r = e.currentTarget.getBoundingClientRect();
    if (a.duration) a.currentTime = a.duration * Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
  });

  // volum
  const vi = $('#mute i');
  const icon = () => { vi.className = 'fas ' + (a.muted || a.volume === 0 ? 'fa-volume-xmark' : a.volume < .5 ? 'fa-volume-low' : 'fa-volume-high'); };
  $('#vol').oninput = e => { a.volume = e.target.value / 100; a.muted = false; $('#vp').textContent = e.target.value + '%'; icon(); };
  $('#mute').onclick = () => { a.muted = !a.muted; icon(); };
  $('#pmin').onclick = () => pl.classList.toggle('min');
})();

loadProfile();
setInterval(checkStatus, 30000);
})();
