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

const sliders = document.querySelectorAll('.before-after');

sliders.forEach(container => {

const slider = container.querySelector('.slider');
const afterImg = container.querySelector('.after');

let isDragging = false;

slider.addEventListener('mousedown', () => isDragging = true);
window.addEventListener('mouseup', () => isDragging = false);

window.addEventListener('mousemove', (e) => {
if (!isDragging) return;

const rect = container.getBoundingClientRect();
let x = e.clientX - rect.left;

if (x < 0) x = 0;
if (x > rect.width) x = rect.width;

const percent = (x / rect.width) * 100;

afterImg.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
slider.style.left = percent + "%";
});

});
