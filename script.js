// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// diluar sidebar untuk menghilangkan navnya
const hamburger = document.querySelector("#menu");
document.addEventListener("click", function (event) {
  if (!hamburger.contains(event.target) && !navbarNav.contains(event.target)) {
    navbarNav.classList.remove("active");
  }
});

// slide

const slide = document.querySelector(".slide");
const komentar = document.querySelector(".kolom-komentar-komentator");
const tombol1 = document.querySelector(".tombol1");
const tombol2 = document.querySelector(".tombol2");
const tombol3 = document.querySelector(".tombol3");
const tombol4 = document.querySelector(".tombol4");
const tombol5 = document.querySelector(".tombol5");

tombol1.addEventListener("click", (event) => {
  komentar.innerHTML =
    '<img src="komentator/matt.png" alt=""> <p class="komentar"><span>Matt Journey</span> Masakan khas madura yang susah untuk tidak mampir jika melewati jalan arah ke Pamekasan (jika dari arah barat) atau jalan arah ke Sampang (jika dari arah timur)</p>';
});
tombol2.addEventListener("click", (event) => {
  komentar.innerHTML =
    '<img src="komentator/puteri.png" alt=""> <p class="komentar"><span>Puteri Qotrina</span> Makanan seafood enak bumbu rumahan harga bersahabat banget. Potongan ikannya gede2. Fresh. Ada jg non seafood. RM oldschool tp tetap survive Krn RASA </p>';
});
tombol3.addEventListener("click", (event) => {
  komentar.innerHTML =
    '<img src="komentator/arifin.png" alt=""> <p class="komentar"><span>arifin waluya</span>Tempat ini easy to notice Masakannya cocok dengan lidah saya lidah jawa harga Alhamdulillah bersahabat </p>';
});
tombol4.addEventListener("click", (event) => {
  komentar.innerHTML =
    '<img src="komentator/rezeki.png" alt=""> <p class="komentar"><span>Awal M Rezeki</span> Harga murah, rasa enak, variasi menu banyak, lokasi strategis, tempat bersih dan luas... Yg terpenting lagi penjualnya ramah</p>';
});
tombol5.addEventListener("click", (event) => {
  komentar.innerHTML =
    '<img src="komentator/saifudin.png" alt=""> <p class="komentar"><span>Saifudin Gituloh</span>.....Disini disediakan tempat lesehan maupun duduk. Untuk harga cukup murah. Lahan parkir yang disediakan luas. Waktu saya berkunjung disini tidak ada tukang parkir sehingga bebas parkir.</p>';
});
