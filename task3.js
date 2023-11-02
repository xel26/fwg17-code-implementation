const potonganHarga = (potongan, harga, persentase) => {                                // membuat fungsi yg menerima 3 parameter untuk menentukan potongan harga . di buatkan fungsi agar tidak ada kode yg berulang
    const discon = harga * persentase/100                                               // menghitung discon
    if(discon < potongan){                                                              // jika discon lebih kecil dari potongan maka REASSIGNMENT potongan dengan nilai discon lalu return nilainya
        return potongan = discon
    }
    return potongan                                                                     // jika discon lebih besar atau sama dengan potongan maka return nilai potongan yang di kirim di parameter
}

const fazzFood = (harga, voucher, jarak, pajak) => {                                    // membuat fungsi yang menerima 4 parameter
    if (jarak <= 0 || harga <= 0){                                                      // metode guarding untuk memeriksa jika inputan jarak atau harga kurang dari atau sama dengan 0 maka program di hentikan dan menampilkan pesan tersebut
        return console.log("input tidak valid")
    }

    let biayaAntar = 5000                                                               // INISIALISASI biayaAntar dengan nilai default 5000
    if(jarak > 2){                                                                      // jika jarak lebih dari 2 maka nilai biayaAntar akan di REASSIGNMENT dengan hasil perhitungan tersebut 
        biayaAntar = (jarak - 2) * 3000 + 5000
    }

    let tambahanPajak = 0                                                               // INISIALISASI tambahanPajak dengan nilai default 0
    if(pajak){                                                                          // jika pajak bernilai true maka tambahanPajak akan di REASSIGNMENT dengan hasil perhitungan tersebut
        tambahanPajak = harga * 5/100
    }

    let potongan = 0                                                                    // INISIALISASI potongan dengan nilai default 0
    if(voucher === "FAZZFOOD50" && (harga >= 50000)){                                   // jika memenuhi kondisi maka potongan akan di REASSIGNMENT dengan pemanggilan fungsi potonganHarga dengan mengirim parameter nilai default potongan, harga, dan persentase discon
        potongan = potonganHarga(50000, harga, 50)
    }else if(voucher === "DITRAKTIR60" && (harga >= 25000)){
        potongan = potonganHarga(30000, harga, 60)
    }

    const subTotal = (harga - potongan) + biayaAntar + tambahanPajak                   // menghitung total

    console.log(                                                                       // menampilkan output
    `                                                                      
        Harga : ${harga}
        Potongan: ${potongan}
        Biaya Antar : ${biayaAntar}
        Pajak : ${tambahanPajak}
        subTotal : ${subTotal}
    `)
}

fazzFood(75000, "FAZZFOOD50", 5, true)                                                 // memanggil fungsi fazzFood dengan mengirim parameter harga, voucher, jarak, dan pajak