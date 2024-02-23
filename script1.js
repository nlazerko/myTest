const list = document.querySelector('.list_type');
const dropBtn = document.querySelector('.drop_btn');
const char = document.querySelector('.fa-sharp .fa-solid .fa-chevron-down');

dropBtn.addEventListener('click', (e) => {
  e.preventDefault();
  list.style.display = list.style.display === 'block' ? 'none' : 'block';
  dropBtn.classList.toggle('drop_btn_dark');
});

document.addEventListener('click', (event) => {
  const target = event.target;

  if (!dropBtn.contains(target) && !list.contains(target)) {
    list.style.display = 'none';
  }
});

const slider = document.querySelector('.form__slider');
const percent = document.querySelector('.form__percentage');

slider.addEventListener('input', () => {
  const currentValue = slider.value;
  percent.innerText = currentValue + '%';
});

window.onload = () => {
  const initialValue = slider.value;
  percent.innerText = initialValue + '%';
};
