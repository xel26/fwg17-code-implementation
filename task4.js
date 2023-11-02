// dengan built-in-function :

{
    const divideAndSort = (numbers) => {                        // membuat fungsi yg menerima 1 parameter
    let string = ""                                             // INISIALISASI variable string dengan STRING kosong

    numbers                                                     // mengeksekusi inputan numbers dengan metode chaining
    .toString()                                                 // mengubah numbers jadi string =>  "5956560159466056"
    .split("0")                                                 // mengubah string menjadi array of string-number yang di pisah-pisah berdasarkan angka 0 => [ '595656', '159466', '56' ]
    .map(arr => {                                               // tiap element dalam array di looping
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





// dengan Algoritma : belum selesai 

// const sort = (arraySlice) => {
//     for(let i = 0; i < arraySlice.length; i++){
//         for(let j = 0; j < arraySlice[i].length; j++){
//             for(let k = j + 1; k < arraySlice[i].length; k++){
//                     // console.log( arraySlice[i][j], arraySlice[i][k])
//                 if(arraySlice[i][j] > arraySlice[i][k]){
//                     const shift = arraySlice[i][j]
//                     arraySlice[i][j] = arraySlice[i][k]
//                     arraySlice[i][k] = shift
//                 }
//             }
//         }
//         console.log(arraySlice[i])
//     }
// }

// sort([ '595656', '159466', '56' ])

// {
//     const divideAndSort = (numbers) => {
//         let stringNumbers = numbers + ""
//         let slice = ""
//         let arraySlice = []

//         for(let i = 0; i < stringNumbers.length; i++){
//             if(stringNumbers[i] !== "0"){
//                 slice += stringNumbers[i]
//             }else{
//                 arraySlice = [...arraySlice, slice]
//                 slice = ""
//             }
//         }

//         arraySlice = [...arraySlice, slice]

//         const output = callback(arraySlice)
//     }
//     divideAndSort(5956560159466056)
// }