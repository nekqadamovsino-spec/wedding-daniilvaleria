const weddingDate = new Date('2026-08-15T10:30:00+03:00');

function tick(){
  const now = new Date();
  let diff = weddingDate - now;
  if(diff < 0) diff = 0;

  days.textContent = Math.floor(diff / (1000*60*60*24));
  hours.textContent = String(Math.floor((diff / (1000*60*60)) % 24)).padStart(2,'0');
  minutes.textContent = String(Math.floor((diff / (1000*60)) % 60)).padStart(2,'0');
  seconds.textContent = String(Math.floor((diff / 1000) % 60)).padStart(2,'0');
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
const closeRsvp = document.getElementById('closeRsvp');
const rsvpModal = document.getElementById('rsvpModal');
const submitRsvp = document.getElementById('submitRsvp');

openRsvp.onclick = () => {
  rsvpModal.style.display = 'flex';
};

closeRsvp.onclick = () => {
  rsvpModal.style.display = 'none';
};

submitRsvp.onclick = () => {
  rsvpModal.style.display = 'none';
};

rsvpModal.onclick = (e) => {
  if(e.target === rsvpModal){
    rsvpModal.style.display = 'none';
  }
};
