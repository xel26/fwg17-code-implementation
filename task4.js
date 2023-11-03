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












//dengan Algoritma : belum efektif !!!
{
    const divideAndSort = (numbers) => {                                                    // membuat fungsi yg menerima 1 parameter berisi nilai NUMBER
        const stringNumbers = numbers + ""                                                  // merubah NUMBER menjadi STRING dengan cara menambahkan NUMBER dengan STRING kosong => "5956560159466056"

        let slice = []                                                                      // INISIALISASI slice dengan STRING kosong
        let string = ""                                                                     // INISIALISASI arraySlice dengan ARRAY kosong

        for(let i = 0; i <= stringNumbers.length; i++){                                     // melooping stringNumbers untuk mengambil tiap angka yang bertipe string dan mengambil satu index terakhir yg bernilai undefined
            if(stringNumbers[i] !== "0" && stringNumbers[i] !== undefined){                 // jika bukan angka 0 dan bukan undefined maka tiap angka yg bertipe STRING dikalikan dengna TRUE agar tipe menjadi NUMBER dan dan disimpan di variable slice => [5, 9, 5, 6, 5, 6]        
                slice = [...slice, stringNumbers[i] * true]                                 // tujuan angka di ubah jadi tipe NUMBER adalah untuk menghindari perbandingan berdasarkan urutan leksikografis karakter.

            }else if(stringNumbers[i] === "0" || stringNumbers[i] === undefined){                                                                          
                for(let x = 0; x < slice.length; x++){                                      // jika menemukan angka 0 atau undefined maka angka yang ada di slice akan di urutkan dengan bubble sort => [5, 5, 5, 6, 6, 9]
                    for(let y = x + 1; y < slice.length; y++){
                        if(slice[x] > slice[y]){
                            const shift = slice[x]
                            slice[x] = slice[y]
                            slice[y] = shift
                        }
                    }
                }

                for(let i = 0; i < slice.length; i++){                                      // setelah di urutkan slice akan di looping dan tiap angka di tambahkan string agar menjadi tipe data STRING lalu di KONKATENASI ke variable string => "555669"
                    string += slice[i] + ""
                }

                slice = []                                                                  // slice dikosongkan kembali                                                                  
            }
        }

        console.log(string * true)                                                          // hasil akhir variable string di kali dengan TRUE agar tipe data STRING berubah jadi NUMBER => "55566914566956" menjadi 55566914566956
    }
  
    divideAndSort(5956560159466056)                                                        // memanggil fungsi dengan mengirim parameter number
}