/*
====
Balada Tuan Tanah
====
Tuan Postoro adalah tuan tanah dengan aset properti yang sangat banyak yang tersebar di banyak komplek. Kali ini dia menugaskan anak buahnya untuk berkeliling dan menuliskan laporan pendapatan dan pengeluaran dari semua properti nya, per komplek. Sang anak buah memberikan laporan berupa array, dan akunting Tuan Postoro akan mengkompillasi laporan nya.

Angka positif : mendapatkan pembayaran sewa sebesar angka dikali harga sewa properti, yaitu sebesar 100 dollar per properti
Angka negatif : harus membayar pajak sebesar 20 dollar per properti
Angka nol     : semua properti di komplek itu sedang kosong

Contoh :
input = [1, 0, -1]
output :
Tuan Postoro mendapat 100 dollar, harus membayar pajak sebesar 20 dollar, dan ada 1 komplek yang kosong

input = [1, 1, 1]
output :
Tuan Postoro mendapat 300 dollar, harus membayar pajak sebesar 0 dollar, dan ada 0 komplek yang kosong

input = [1, -2, 3, 0, 5]
output :
Tuan Postoro mendapat 900 dollar, harus membayar pajak sebesar 40 dollar, dan ada 1 komplek yang kosong
*/

function tanah(arr) {
    let counterPositif = 0
    let positif = 0;
    let counterNegatif = 0
    let negatif = 0
    let counterNol = 0
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        if (arr[i] < 0) {
            counterNegatif++;
            negatif += arr[i] * -1 * 20;
        }
        if (arr[i] > 0) {
            counterPositif++;
            positif += arr[i] * 100;
        }
        if (arr[i] === 0) {
            counterNol++
        }
    }
    return `Tuan Postoro mendapat ${positif} dollar, harus membayar pajak sebesar ${negatif} dollar, dan ada ${counterNol} komplek yang kosong`
}

console.log(tanah([1, 0, -1]))
console.log(tanah([1, 1, 1]))
console.log(tanah([1, -2, 3, 0, 5]))