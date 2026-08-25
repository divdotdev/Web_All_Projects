const themeInput = document.getElementById('theme-switch-input');
const knobIcon = document.querySelector('.slider-knob');
themeInput.addEventListener('change', () => {
  document.body.classList.toggle('night-theme');
  if (themeInput.checked) {
    knobIcon.textContent = '🌛';
  } else {
    knobIcon.textContent = '🌞';
  }
});