/*
===
Caesar Encryption
===
Caesar Encryption adalah metoda enkripsi tertua dan ringan. Enkripsi dilakukan hanya dengan memajukan atau memundurkan setiap karakter sejumlah yang ditentukan.

NOTE :
1. selain alphabet, tidak usah di olah

RELEASE 1
-
Buat lah sebuah fungsi encrypt, dengan input sebuah string dan angka yang menunjukkan jumlah langkah maju karakter. Jika sampai huruf z, pemrosesan selanjutnya akan balik lagi ke a dan seterusnya

Contoh :
console.log(caesar_encrypt('hacktiv8', 2)) // jcemvkx8
console.log(caesar_encrypt('xyz', 4)) // bcd
console.log(caesar_encrypt('aku anak sehat', 1)) // blv bobl tfibu


RELEASE 2
-
Buat lah sebuah fungsi decrypt, dengan input sebuah string dan angka yang menunjukkan jumlah langkah mundur karakter. Jika sampai huruf a, pemrosesan selanjutnya akan balik lagi ke z dan seterusnya

Contoh :
console.log(caesar_decrypt('jcemvkx8', 2)) // hacktiv8
console.log(caesar_decrypt('bcd', 4)) // xyz
console.log(caesar_decrypt('blv bobl tfibu', 1)) // aku anak sehat
*/

// ENCRYPT

let abjad = 'abcdefghijklmnopqrstuvwxyz';
let nomer = '1234567890'
function caesar_encrypt(str, num) {
    let output = '';

    for (let i = 0; i < str.length; i++) {
        // console.log(str[i])
        if (str[i] === ' ') {
            output += str[i]
            // console.log(output, `ini 38`)
        }
        for (let j = 0; j < abjad.length; j++) {
            if (str[i] === abjad[j] && abjad[j + num] === undefined) {
                // console.log(str[i])
                output += abjad[(j - 26) + num]
            }
            if (str[i] === abjad[j] && abjad[j + num] !== undefined) {
                output += abjad[j + num];
            }
            
        }
        for (let k = 0; k < nomer.length; k++) {
            if (str[i] === nomer[k]) {
                output += nomer[k]
            }
        }
    }

//     return output
}

// console.log(caesar_encrypt('hacktiv8', 2)) // jcemvkx8
// console.log(caesar_encrypt('xyz', 4)) // bcd
// console.log(caesar_encrypt('aku anak sehat', 1)) // blv bobl tfibu


// DECRYPT
function caesar_decrypt(str, num) {
    let output = '';

    for (let i = 0; i < str.length; i++) {
        // console.log(str[i])
        if (str[i] === ' ') {
            output += str[i]
            // console.log(output, `ini 38`)
        }
        for (let j = abjad.length - 1; j >= 0; j--) {
            if (str[i] === abjad[j] && abjad[j - num] === undefined) {
                // console.log(str[i])
                output += abjad[(j + 26) - num]
            }
            if (str[i] === abjad[j] && abjad[j - num] !== undefined) {
                output += abjad[j - num];
            }
            
        }
        for (let k = 0; k < nomer.length; k++) {
            if (str[i] === nomer[k]) {
                output += nomer[k]
            }
        }
    }

    return output
}

console.log(caesar_decrypt('jcemvkx8', 2)) // hacktiv8
console.log(caesar_decrypt('bcd', 4)) // xyz
console.log(caesar_decrypt('blv bobl tfibu', 1)) // aku anak sehat