// Ambil elemen dari HTML berdasarkan id
var tombolProfile = document.getElementById("tombolProfile");
var menuProfile = document.getElementById("menuProfile");
 
// Saat tombol Profile diklik...
tombolProfile.onclick = function (event) {
  event.preventDefault(); // supaya halaman tidak loncat ke atas
 
  // ...tambah/hapus class "tampil" (muncul/sembunyi)
  menuProfile.classList.toggle("tampil");