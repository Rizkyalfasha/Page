// Contoh fungsi klik menu
document.querySelectorAll(".menu-item").forEach(item => {
  item.addEventListener("click", () => {
    alert("Kamu memilih: " + item.innerText);
  });
});