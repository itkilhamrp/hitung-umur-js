function hitungUmur() {
    // Mendapatkan elemen input dan hasil dari DOM
    let inputTahun = document.getElementById("tahun");
    let elemenHasil = document.getElementById("hasil");

    // Mengambil nilai tahun lahir dari input
    let tahunLahir = inputTahun.value;

    // --- Validasi ---

    // 1. Periksa apakah input kosong
    if (tahunLahir === "") {
        alert("Tahun lahir tidak boleh kosong");
        return; // Hentikan eksekusi fungsi jika input kosong
    }

    // 2. Konversi nilai input ke integer (bilangan bulat)
    // parseInt untuk memastikan yang dihitung adalah angka
    tahunLahir = parseInt(tahunLahir);

    // Periksa apakah yang dimasukkan bukan angka
    if (isNaN(tahunLahir)) {
        alert("Masukkan tahun lahir yang valid (angka).");
        return; // Hentikan eksekusi fungsi jika bukan angka
    }

    // Mendapatkan tahun sekarang
    let tahunSekarang = new Date().getFullYear();

    // 3. Periksa apakah tahun lahir lebih besar dari tahun sekarang
    if (tahunLahir > tahunSekarang) {
        // Tampilkan pesan error di elemen hasil
        alert("Error: Tahun lahir tidak boleh lebih besar dari tahun sekarang (" + tahunSekarang + ").");
        return; // Hentikan eksekusi fungsi
    }

    // --- Proses Hitung Umur (Jika semua validasi lolos) ---


    let umur = tahunSekarang - tahunLahir;

    // Tampilkan hasil perhitungan
    elemenHasil.innerHTML = "Umur kamu sekarang adalah " + umur + " tahun.";
    console.log("Umur mu", umur);
}
