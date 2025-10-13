document.getElementById("btnKirim").addEventListener("click", () => { //efek saat kirim
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;
    const status = document.getElementById("StatusPesan");
    

    if (nama && email && pesan) {
        status.classList.add("show"); //supaya class tampil
    } else {
        alert("Harap isi semua kolom!"); //untuk peringatan jika belum isi
    }
});

