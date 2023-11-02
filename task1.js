// dengan Algoritma di flowchart :
{
const upperToLower = (kata) => {                                                    // membuat fungsi upperToLower yang menerima satu parameter berupa string
    const upper = {                                                                 // membuat object upper yang berisi key berupa huruf besar dan value berupa kode Unicode atau kode unik yang mewakili karakter huruf key itu sendiri
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
    }

    const lower = {                                                                     // membuat object lower yang berisi key berupa unicode atau kode unik yang mewakili karakter huruf dalam value
        97 : "a",
        98 : "b",
        99 : "c",
        100: "d",
        101: "e",
        102: "f",
        103: "g",
        104: "h",
        105: "i",
        106: "j",
        107: "k",
        108: "l",
        109: "m",
        110: "n",
        111: "o",
        112: "p",
        113: "q",
        114: "r",
        115: "s",
        116: "t",
        117: "u",
        118: "v",
        119: "w",
        120: "x",
        121: "y",
        122: "z",
    }

    let kataLowerCase = ""                                                          // INISIALISASI variable lowerCase dengan STRING kosong
    for(let i = 0; i < kata.length; i++){                                           // melooping text untuk mengambil tiap huruf
        if(kata[i] >= 'A' && kata[i] <= 'Z'){                                       // jika huruf adalah huruf besar atau berada di antara huruf A kapital dan Z kapital maka huruf tersebut akan di konversi menjadi huruf kecil dan di simpan di variable lowerCase secara KONKATENASI
            kataLowerCase += lower[upper[kata[i]] + 32]                             // lower[upper[M] + 32] = lower[upper[77] + 32] = lower[109] = "m"
        }else{                                                                      // jika bukan huruf besar maka akan langsung di simpan di variable lowerCase secara KONKATENASI
            kataLowerCase += kata[i]
        }
    }
    return kataLowerCase                                                           // mereturn variable lowerCase yang berisi nilai string berupa text yang sudah di konversi menjadi huruf kecil yang nantinya bisa di gunakan di tempat lain saat fungsi upperToLower di panggil
}



const cekPalindrom = (kata, callback) => {                                          // membuat fungsi cekPalindrom yang menerima satu parameter berupa string sebagai inputan
    const kataLowerCase = callback(kata)                                            // ASSIGNMENT variable kataLowerCase dengan pemanggilan callback dan mengirim parameter berupa string untuk di ubah menjadi huruf kecil

    let kataReverse = ""                                                            // inisialisasi variable kataReverse dengan string kosong

    for(let x = kataLowerCase.length-1; x >= 0; x--){                               // melooping kata untuk mengambil tiap huruf yang di mulai dari huruf yang paling belakang
        kataReverse += kataLowerCase[x]                                             // assignment variable kataReverse dengan tiap huruf yang di concat menjadi kata yang terbalik
    }

    if(kataLowerCase === kataReverse){                                              // memeriksa apakah kata dan kataReverse sama 
        console.log(`kata "${kata}" adalah Palindrom`)                              // jika sama akan mencetak "Palindrom"
    }else{
        console.log(`kata "${kata}" bukan Palindrom`)                               // jika tidak sama akan mencetak "bukan Palindrom"
    }
}

cekPalindrom("MaLam", upperToLower)                                                 // memanggil fungsi cekPalindrom dengan mengirim parameter string kata
}







// dengan built in function :
{
const cekPalindrom = (kata) => {                                    // membuat fungsi yang menerima satu parameter
    if(typeof kata != "string"){                                    // metode guarding untuk memeriksa jika inputan bukan berupa string maka program akan dihentikan dan menampilkan pesan tersebut
        return console.log("masukan satu string kata")
    }

    const kataLowerCase = kata.toLowerCase()                        // mengubah kata menjadi lowercase => "RuMah" menjadi "rumah"

    let kataReverse =                                               // INISIALISASI kataReverse
                      Array.from(kataLowerCase)                     // membuat array baru dari huruf-huruf di dalam string => ["r", "u", "m", "a", "h"]
                      .reverse()                                    // membalik urutan element-element dalam array => ["h", "a", "m", "u", "r"]
                      .join("")                                     // membuat string baru dari element-element array yang di KONKATENASI => "hamur"

    if(kataLowerCase === kataReverse){                              // memeriksa jika kataLowerCase sama dengan kataReverse maka output adalah "Palindrom" jika tidak maka output adalah "bukan Palindrom"
        console.log(`kata "${kata}" adalah Palindrom`)
    }else{
        console.log(`kata "${kata}" bukan Palindrom`)
    }
}

cekPalindrom("KatAk")                                               // memanggil fungsi cekPalindrom dan mengirim parameter string kata
}