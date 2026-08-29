const nav = document.getElementById("mainNav");
const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const activitiesGrid = document.getElementById("activitiesGrid");
const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function nextDateForDay(dayNumber) {
  const now = new Date();
  const date = new Date(now);
  const diff = (dayNumber - now.getDay() + 7) % 7;
  date.setDate(now.getDate() + diff);
  return date;
}
function formatDate(date) {
  return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
function renderActivities() {
  const sorted = [...ALC_ACTIVITIES].sort((a,b) => {
    const da = nextDateForDay(a.day).getTime();
    const db = nextDateForDay(b.day).getTime();
    return da - db || a.time.localeCompare(b.time);
  });
  activitiesGrid.innerHTML = sorted.map(item => {
    const date = nextDateForDay(item.day);
    return `<article class="activity-card">
      <span class="activity-icon">${item.icon}</span>
      <div class="activity-day">${dayNames[item.day]}</div>
      <div class="activity-date">${formatDate(date)}</div>
      <h3>${item.title}</h3>
      <div class="activity-time">${item.time}</div>
    </article>`;
  }).join("");
}
renderActivities();
document.getElementById("year").textContent = new Date().getFullYear();

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
document.querySelectorAll(".gallery-item").forEach(item => item.addEventListener("click", () => {
  lightboxImage.src = item.dataset.full;
  lightboxImage.alt = item.querySelector("img").alt;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden","false");
}));
document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if(e.target === lightbox) closeLightbox(); });
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden","true");
}
