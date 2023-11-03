// dengan built-in-function :

{
    const divideAndSort = (numbers) => {                        // membuat fungsi yg menerima 1 parameter berupa NUMBER
    let string = ""                                             // INISIALISASI variable string dengan STRING kosong

    numbers                                                     // mengeksekusi inputan numbers dengan metode chaining
    .toString()                                                 // mengubah numbers jadi string =>  "5956560159466056"
    .split("0")                                                 // mengubah string menjadi array of string-number yang di pisah-pisah berdasarkan angka 0 => [ '595656', '159466', '56' ]
    .map(arr => {                                               // tiap element dalam array di looping => '595656' -> '159466' ->  '56'
        const array = Array.from(arr)                           // membuat array baru dari string. sehingga string-number menjadi di pisah-pisah tiap angka  => [ '5', '9', '5', '6', '5', '6' ] -> [ '1', '5', '9', '4', '6', '6' ]  ->  [ '5', '6' ]
                           .sort()                              // mengurutkan angka  => [ '5', '5', '5', '6', '6', '9' ] -> [ '1', '4', '5', '6', '6', '9' ] -> [ '5', '6' ] 
                           .join("")                            // membuat string baru dari array yang di konkatenasi => "555669" -> "145669" -> "56"
        string += array                                         // hasil string-number di konkatenasi ke variable string =>  "55566914566956"
    })

    const numbersWithout0 = Number(string)                      // mengubah type string menjadi type number => 55566914566956
    console.log(numbersWithout0)                                // menampilkan hasil
    }

    divideAndSort(5956560159466056)                             // memanggil fungsi dengan mengirim parameter number
}

















//dengan Algoritma : 

{
    const divideAndSort = (numbers) => {                                                    // membuat fungsi yg menerima 1 parameter berisi nilai NUMBER
        let stringNumbers = numbers + ""                                                    // merubah NUMBER menjadi STRING dengan cara menambahkan NUMBER dengan STRING kosong => "5956560159466056"

        let slice = ""                                                                      // INISIALISASI slice dengan STRING kosong
        let arraySlice = []                                                                 // INISIALISASI arraySlice dengan ARRAY kosong

        for(let i = 0; i < stringNumbers.length; i++){                                      // melooping stringNumbers untuk mengambil tiap angka yang bertipe string
            if(stringNumbers[i] !== "0"){                                                   // jika bukan karakter "0" maka akan di simpan di slice secara KONKATENASI => "595656" -> "159466" -> "56"
                slice += stringNumbers[i]
            }else{                                                                          // jika menemukan karakter "0" maka nilai variable slice akan di simpan di arraySlice => ["595656"] -> ["595656", "159466"]
                arraySlice = [...arraySlice, slice]
                slice = ""
            }
        }
        arraySlice = [...arraySlice, slice]                                                 // hasil akhir arraySlice => ["595656", "159466", "56"]

        let sortedString = ""                                                              // INISIALISASI sortedNumbers dengan ARRAY kosong. yg nantinya berisi numbers STRING yg sudah berurut

        for(let i = 0; i < arraySlice.length; i++){                                         // melooping arraySlice yang berisi potongan-potongan STRING numbers

            let segmentNumber = []                                                          // DEKLARASI segmentNumber dengan ARRAY kosong yg nantinya berisi ARRAY of NUMBER
            for(let j = 0; j < arraySlice[i].length; j++){                                  // mengambil tiap angka yang di kali dengan true agar berubah menjadi tipe NUMBER lalu di simpan di ARRAY segmentNumber => [ 5, 9, 5, 6, 5, 6 ] -> [ 1, 5, 9, 4, 6, 6 ] -> [ 5, 6 ]
                segmentNumber = [...segmentNumber, arraySlice[i][j] * true]
            }

            for(let x = 0; x < segmentNumber.length; x++){                                  // mengurutkan angka dengan bubble sort => [ 5, 5, 5, 6, 6, 9 ] -> [ 1, 4, 5, 6, 6, 9 ] -> [ 5, 6 ]
                for(let y = x + 1; y < segmentNumber.length; y++){
                    if(segmentNumber[x] > segmentNumber[y]){
                        const shift = segmentNumber[x]
                        segmentNumber[x] = segmentNumber[y]
                        segmentNumber[y] = shift
                    }
                }
            }

            for(let n = 0; n < segmentNumber.length; n++){                                  // melooping segmentNumber untuk mengambil tiap angka yang di tambah dengan STRING kosong agar tipe NUMBER berubah jadi STRING kemudian di simpan di sortedString secara KONKATENASI => "55566914566956"
                sortedString += segmentNumber[n] + ""
            }
        }

        console.log(sortedString * true)                                                    // mengkalikan sortedString dengan true untuk merubah STRING menjadi NUMBER lalu di tampilkan => 55566914566956
    }

    divideAndSort(5956560159466056)                                                         // memanggil fungsi dividAndSort dan mengirim parameter NUMBER
}