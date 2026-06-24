// FAQ アコーディオン
function toggleFaq(btn) {
  const item = btn.parentElement;
  item.classList.toggle('open');
}

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
