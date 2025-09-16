function showPage(id) {
  let pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));

  let target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0); // biar otomatis ke atas
  }
}