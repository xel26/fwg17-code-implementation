{
    const fazzFood = (harga, voucher, jarak, pajak) => {                                    // membuat fungsi yang menerima 4 parameter
        if (jarak <= 0 || harga <= 0){                                                      // metode guarding untuk memeriksa jika inputan jarak atau harga kurang dari atau sama dengan 0 maka program di hentikan dan menampilkan pesan tersebut
            return console.log("input tidak valid")
        }

        const vouchers = [
            {
                nama: "FAZZFOOD50",
                minHarga: 50000,
                maxPotongan: 50000,
                discon: 50/100
            },
            {
                nama: "DITRAKTIR60",
                minHarga: 25000,
                maxPotongan: 30000,
                discon: 60/100
            }
        ]

        const promo = vouchers.map(item => item.nama).indexOf(voucher)                      // mengecek apakah ada voucher yang dipilih ada di dalam array. jika ada akan mengembalikan index dari voucher tersebut. jika tidak ada maka akan mengembalikan -1
            
        let potongan = 0                                                                    // INISIALISASI potongan dengan nilai default 0
        if(promo !== -1){                                                                   // artinya voucher tersedia di dalam array
            if(harga >= vouchers[promo].minHarga){                                          // memeriksa harga lebih dari atau sama dengan minimal harga dari voucher
                potongan = harga * vouchers[promo].discon                                   // menentukan potongan dengan menghitung harga di kali dengan persentase discon
                if(potongan >= vouchers[promo].maxPotongan){                                // jika potongan yang di dapat melebihi maximal potongan maka. maka nilai maximal potongan yang akan di pakai
                    potongan = vouchers[promo].maxPotongan
                }
            }
        }
    
        let biayaAntar = 5000                                                               // INISIALISASI biayaAntar dengan nilai default 5000
        if(jarak > 2){                                                                      // jika jarak lebih dari 2 maka nilai biayaAntar akan di REASSIGNMENT dengan hasil perhitungan tersebut 
            biayaAntar = (jarak - 2) * 3000 + biayaAntar
        }
    
        let tambahanPajak = 0                                                               // INISIALISASI tambahanPajak dengan nilai default 0
        if(pajak){                                                                          // jika pajak bernilai true maka tambahanPajak akan di REASSIGNMENT dengan hasil perhitungan tersebut
            tambahanPajak = harga * 5/100
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
    
    fazzFood(75000, "FAZZFOOD50", 5, true)                                                  // memanggil fungsi fazzFood dengan mengirim parameter harga, voucher, jarak, dan pajak
}