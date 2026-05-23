const menuButton = document.querySelector('#menuButton');
const navMenu = document.querySelector('#navMenu');
const specialty = document.querySelector('#specialty');
const doctor = document.querySelector('#doctor');
const date = document.querySelector('#date');
const summarySpecialty = document.querySelector('#summarySpecialty');
const summaryDoctor = document.querySelector('#summaryDoctor');
const summaryDate = document.querySelector('#summaryDate');
const summaryTime = document.querySelector('#summaryTime');
const toast = document.querySelector('#toast');

const today = new Date();
today.setDate(today.getDate() + 3);
date.valueAsDate = today;
summaryDate.textContent = today.toLocaleDateString('es-CO', { year: 'numeric', month: 'short', day: 'numeric' });

menuButton?.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

function refreshSummary(){
  summarySpecialty.textContent = specialty.value;
  summaryDoctor.textContent = doctor.value;
  if(date.value){
    const parsed = new Date(date.value + 'T12:00:00');
    summaryDate.textContent = parsed.toLocaleDateString('es-CO', { year: 'numeric', month: 'short', day: 'numeric' });
  }
}
[specialty, doctor, date].forEach(control => control.addEventListener('change', refreshSummary));

document.querySelectorAll('.time').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.time').forEach(item => item.classList.remove('active'));
    btn.classList.add('active');
    summaryTime.textContent = btn.dataset.time;
  });
});

document.querySelector('#confirmBtn')?.addEventListener('click', () => {
  refreshSummary();
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2600);
});
