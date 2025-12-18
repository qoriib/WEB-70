function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const status = document.getElementById('formStatus');
  const name = form.name.value.trim();
  const platform = form.platform.value;
  status.textContent = `Halo ${name || 'teman'}! Kami akan mengirim undangan akses awal ke ${platform}.`;
  status.style.color = '#ffd447';
}

function scrollToCTA() {
  const cta = document.getElementById('cta');
  if (cta) cta.scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('DOMContentLoaded', () => {
  if (window.feather) {
    window.feather.replace();
  }
});
