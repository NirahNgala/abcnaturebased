import { initNavbar } from './navbar.js';

async function loadNavbar() {
  const container = document.getElementById('navbar-container');

  if (!container) return;

  const res = await fetch('navbar.html');
  const html = await res.text();

  container.innerHTML = html;

  initNavbar();
}

document.addEventListener('DOMContentLoaded', () => {
  loadNavbar();
});
