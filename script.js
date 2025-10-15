document.querySelector(".btnKirim").addEventListener("click", () => { //efek saat kirim
    const nama = document.querySelector(".nama").value;
    const email = document.querySelector(".email").value;
    const pesan = document.querySelector(".pesan").value;
    const status = document.querySelector(".StatusPesan");
    

    if (nama && email && pesan) {
        status.classList.add("show"); //supaya class tampil
    } else {
        alert("Harap isi semua kolom!"); //untuk peringatan jika belum isi
    }
});

