const weddingDate = new Date('2026-08-15T10:30:00+03:00');
function tick(){
  const now = new Date();
  let diff = weddingDate - now;
  if(diff < 0) diff = 0;
  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  days.textContent = d;
  hours.textContent = String(h).padStart(2,'0');
  minutes.textContent = String(m).padStart(2,'0');
  seconds.textContent = String(s).padStart(2,'0');
}
tick();
setInterval(tick,1000);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
const openRsvp = document.getElementById('openRsvp');
const rsvpModal = document.getElementById('rsvpModal');

openRsvp.onclick = function(){
    rsvpModal.style.display = 'flex';
  const openRsvp = document.getElementById('openRsvp');
const rsvpModal = document.getElementById('rsvpModal');

openRsvp.addEventListener('click', () => {
    rsvpModal.style.display = 'block';
});
}

