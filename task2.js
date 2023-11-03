// dengan Algoritma di flowchart:

{
const reverseWords = (kalimat) => {                                     // membuat fungsi reverseWords yang menerima parameter


    let kalimatReverse = ""                                             // INISIALISASI variable kalimatReverse dengan STRING kosong 
    let kata = ""                                                       // INISIALISASI variable kata dengan STRING kosong

    for(let x = kalimat.length-1; x >= 0; x--){                         // melooping kalimat untuk mengambil tiap huruf yang di mulai dari huruf yang paling belakang
        if(kalimat[x] != " "){                                          // jika bukan merupakan karakter spasi maka huruf akan di simpan di variable kata
            kata = kalimat[x] + kata                                    // REASSIGNMENT KONKATENASI kata dengan huruf plus kata sehingga urutan huruf tidak berubah dan kata tidak terbalik
        }else{                                                          // jika merupakan karakter spasi maka kata plus spasi akan di simpan di variable kalimatReverse
            kalimatReverse += kata + " "                                // REASSIGNMENT KONKATENASI kalimatReverse dengan kata + spasi
            kata = ""                                                   // REASSIGNMENT kata dengan STRING kosong agar kata yang ada sebelumnya terhapus dan variable kembali kosong
        }
    }

    kalimatReverse += kata                                              // REASSIGNMENT KONKATENASI kalimatReverse dengan variable kata yang berisi kata yang posisinya paling awal didalam kalimat
    console.log(kalimatReverse)                                         // menampilkan kalimat yang sudah di balik urutan katanya
}

reverseWords("Saya Belajar CSS")                                        // memanggil fungsi reverseWords dengan mengirim satu parameter berupa kalimat STRING
}








// dengan built in function :
{
const reverseWords = (kalimat) => {                                         // membuat fungsi reverseWords yg menerima 1 parameter
    if(!kalimat                                                             // memeriksa dengan negasi/kebalikan. jika di dalam inputan tidak terdapat spasi maka program akan dihentikan dan menampilkan pesan tersebut
        .trim()                                                             // menghapus spasi berlebih di kanan dan kiri dalam string
        .includes(" ")){                                                    // memeriksa apakah di dalam inputan terdapat spasi. 
        return console.log("masukan lebih dari satu kata")
    }

    const kalimatReverse = kalimat                                          // INISIALISASI kalimatReverse dengan inputan yang di eksekusi dengan metode chaining
                        .split(" ")                                         // membuat array baru dari string yg di pisah-pisah berdasarkan karakter spasi => ["Saya", "Belajar", "Javascript"]
                        .reverse()                                          // membalik urutan element-element dalam array => ["Javascript", "Belajar", "Saya"]
                        .join(" ")                                          // membuat string baru dari element-element array yg di KONKATENASI dan tiap element akan di pisah dengan karakter spasi => "Javascript Belajar Saya"

    console.log(kalimatReverse)                                             // menampilkan output
}
reverseWords("Saya Belajar Javascript")                                     // memanggil fungsi dengan mengirim kalimat string
}