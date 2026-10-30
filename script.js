const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const langToggle = $('#langToggle');
let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  $$('[data-en][data-vi]').forEach(el => {
    const value = el.dataset[lang];
    if (value !== undefined) el.innerHTML = value;
  });
  langToggle.textContent = lang === 'en' ? 'VI / EN' : 'EN / VI';
}
langToggle.addEventListener('click', () => setLanguage(currentLang === 'en' ? 'vi' : 'en'));

$('#menuToggle').addEventListener('click', () => $('#nav').classList.toggle('open'));
$$('#nav a').forEach(a => a.addEventListener('click', () => $('#nav').classList.remove('open')));
$('#printCv').addEventListener('click', () => window.print());

const photoInput = $('#photoInput');
const profilePhoto = $('#profilePhoto');
const savedPhoto = localStorage.getItem('nganPortfolioPhoto');
if (savedPhoto) profilePhoto.src = savedPhoto;

photoInput.addEventListener('change', () => {
  const file = photoInput.files && photoInput.files[0];
  if (!file) return;
  if (!file.type.startsWith('image/')) {
    showToast(currentLang === 'en' ? 'Please choose an image file.' : 'Vui lòng chọn tệp hình ảnh.');
    return;
  }
  if (file.size > 5 * 1024 * 1024) {
    showToast(currentLang === 'en' ? 'Image is too large. Please choose a file under 5 MB.' : 'Ảnh quá lớn. Vui lòng chọn ảnh dưới 5 MB.');
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    profilePhoto.src = reader.result;
    try {
      localStorage.setItem('nganPortfolioPhoto', reader.result);
      showToast(currentLang === 'en' ? 'Photo updated on this browser.' : 'Đã cập nhật ảnh trên trình duyệt này.');
    } catch (e) {
      showToast(currentLang === 'en' ? 'Photo displayed for this session only. Storage is full.' : 'Ảnh chỉ hiển thị trong phiên này do bộ nhớ trình duyệt đã đầy.');
    }
  };
  reader.readAsDataURL(file);
});

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
$$('.reveal').forEach(el => observer.observe(el));

const sections = $$('main section[id]');
const navLinks = $$('#nav a');
const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(section => navObserver.observe(section));
