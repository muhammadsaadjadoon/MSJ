const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.nav-links');

function setMenu(open){
  if(!toggle||!nav)return;
  nav.classList.toggle('open',open);
  document.body.classList.toggle('menu-open',open);
  toggle.setAttribute('aria-expanded',String(open));
  toggle.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');
  const icon=toggle.querySelector('i');
  if(icon){
    icon.classList.toggle('fa-bars',!open);
    icon.classList.toggle('fa-xmark',open);
  }
}

if(toggle&&nav){
  toggle.addEventListener('click',()=>setMenu(!nav.classList.contains('open')));
  document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
  document.addEventListener('click',e=>{
    if(nav.classList.contains('open')&&!nav.contains(e.target)&&!toggle.contains(e.target))setMenu(false);
  });
  window.addEventListener('resize',()=>{if(innerWidth>980)setMenu(false)},{passive:true});
}

const lines=['I build intelligent AI systems 🤖','I engineer Machine Learning solutions 📊','I develop Generative AI applications ✨','I connect AI models with full-stack products 💻'];
const t=document.getElementById('typed');let li=0,ci=0,del=false;
function loop(){if(!t)return;let s=lines[li];t.textContent=s.slice(0,ci);if(!del&&ci<s.length){ci++;setTimeout(loop,45)}else if(!del){del=true;setTimeout(loop,1400)}else if(ci>0){ci--;setTimeout(loop,24)}else{del=false;li=(li+1)%lines.length;setTimeout(loop,240)}}
if(t)setTimeout(loop,350);

if('IntersectionObserver' in window){
  const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');ro.unobserve(e.target)}}),{threshold:.07});
  document.querySelectorAll('.reveal').forEach(e=>ro.observe(e));

  const secs=[...document.querySelectorAll('main section[id]')],links=[...document.querySelectorAll('.nav-links a')];
  const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-35% 0px -55%',threshold:.01});
  secs.forEach(s=>so.observe(s));
}else{
  document.querySelectorAll('.reveal').forEach(e=>e.classList.add('in'));
}

const topBtn=document.querySelector('.to-top');
if(topBtn){
  addEventListener('scroll',()=>topBtn.classList.toggle('show',scrollY>500),{passive:true});
}
