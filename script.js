document.addEventListener("DOMContentLoaded", () => {

  /* =====NAVIGATION============= */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const dropBtn = document.querySelector('.dropbtn');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  if (dropBtn) {
    dropBtn.addEventListener('click', function (e) {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        this.parentElement.classList.toggle('open');
      }
    });
  }


  /* =====HERO SCROLL EFFECT========= */
  window.addEventListener("scroll", () => {
    const video = document.querySelector(".hero-video");
    if (!video) return;

    const scrolled = window.scrollY;
    video.style.transform =
      `translate(-50%, calc(-50% + ${scrolled * 0.25}px))`;
  });


  /* === COUNTERS (SAFE) */
  if (typeof counters !== "undefined" && typeof observer !== "undefined") {
    counters.forEach(counter => observer.observe(counter));
  }


  /*MAP (LEAFLET)============== */
  const mapContainer = document.getElementById('map');

  if (mapContainer && typeof L !== "undefined") {

    const map = L.map('map', { zoomControl: false })
      .setView([-3.6, 39.8], 9);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png')
      .addTo(map);

    const markerStyle = {
      radius: 7,
      fillColor: "#5f9c43",
      color: "#fff",
      weight: 2,
      fillOpacity: 1
    };

    L.circleMarker([-3.94, 39.74], markerStyle)
      .addTo(map)
      .bindPopup("<b>Mtwapa</b><br>Propagation Hub");

    L.circleMarker([-3.27, 39.95], markerStyle)
      .addTo(map)
      .bindPopup("<b>Kakuyuni</b><br>Experimental Farm");

    L.circleMarker([-2.8, 39.7], markerStyle)
      .addTo(map)
      .bindPopup("<b>Koromi Farm</b><br>Agroforestry Demonstration");


    /* =========================
       MAP SCROLL INTERACTION
    ========================== */
    const steps = document.querySelectorAll(".step");

    if (steps.length > 0) {

      const activateStep = (step) => {
        const lat = parseFloat(step.dataset.lat);
        const lng = parseFloat(step.dataset.lng);
        const zoom = parseInt(step.dataset.zoom);

        if (!lat || !lng || !zoom) return;

        map.flyTo([lat, lng], zoom, { duration: 1.5 });
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            activateStep(entry.target);
          }
        });
      }, { threshold: 0.6 });

      steps.forEach(step => observer.observe(step));
    }
  }


  /* =========================
     HERO SLIDESHOW
  ========================== */
  const slides = document.querySelectorAll(".hero-slideshow .slide");

  if (slides.length > 0) {
    let current = 0;

    const showSlide = (index) => {
      slides.forEach((s, i) => {
        s.classList.toggle("active", i === index);
      });
    };

    const nextSlide = () => {
      current = (current + 1) % slides.length;
      showSlide(current);
    };

    setInterval(nextSlide, 5000);
  }

});

