const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const dropBtn = document.querySelector('.dropbtn');

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active'); // animate lines
  });

  // Dropdown toggle on mobile
  dropBtn.addEventListener('click', function (e) {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      this.parentElement.classList.toggle('open');
    }
  });

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const video = document.querySelector(".hero-video");

  video.style.transform =
    `translate(-50%, calc(-50% + ${scrolled * 0.25}px))`;
});

counters.forEach(counter => observer.observe(counter));
// INIT MAP
var map = L.map('map', { zoomControl: false }).setView([-3.6, 39.8], 9);

// TILE
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png').addTo(map);

// MARKERS
var markerStyle = {
  radius: 7,
  fillColor: "#5f9c43",
  color: "#fff",
  weight: 2,
  fillOpacity: 1
};

var markers = [
  L.circleMarker([-3.94, 39.74], markerStyle).addTo(map)
    .bindPopup("<b>Mtwapa</b><br>Propagation Hub"),

  L.circleMarker([-3.27, 39.95], markerStyle).addTo(map)
    .bindPopup("<b>Kakuyuni</b><br>Experimental Farm"),

  L.circleMarker([-2.8, 39.7], markerStyle).addTo(map)
    .bindPopup("<b>Koromi Farm</b><br>Agroforestry Demonstration")
];

// SCROLL INTERACTION
var steps = document.querySelectorAll(".step");

function activateStep(step) {
  var lat = step.dataset.lat;
  var lng = step.dataset.lng;
  var zoom = step.dataset.zoom;

  map.flyTo([lat, lng], zoom, {
    duration: 1.5
  });
}

// OBSERVER
var observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      activateStep(entry.target);
    }
  });
}, {
  threshold: 0.6
});

steps.forEach(step => observer.observe(step));


const slides = document.querySelectorAll(".hero-slideshow .slide");
let current = 0;

function showSlide(index) {
  slides.forEach((s, i) => {
    s.classList.remove("active");
    if (i === index) s.classList.add("active");
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

setInterval(nextSlide, 5000); // change every 5s


