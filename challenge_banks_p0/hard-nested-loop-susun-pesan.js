/*
Buatlah fungsi dengan nama susunPesan, dengan parameter input berupa array 2 dimensi. Setiap elemen array akan berupa array yang berisi kata dan posisi nya. Tugas fungsi ini adalah untuk menghasilkan kalimat sesuai dengan posisi kata. Silakan menambahkan contoh soal lain jika merasa perlu

Contoh :

[
  ['besok', 4],
  ['kita', 1],
  ['akan', 2],
  ['menyerang', 3],
  ['pagi', 5],
]

outputnya : 'kita akan menyerang besok pagi'


[
  ['granat', 3],
  ['musuh', 1],
  ['membawa', 2],
]

outputnya : 'musuh membawa granat'
*/
function susunPesan(arr) {
  let temp = []
  let output = '';

  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i][1])
    temp.sort()
  }

  for (let j = 0; j < temp.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (temp[j] === arr[i][1]) {
        output += arr[i][0]
      }
    }

    if (j === temp.length - 1) {
      break
    }

    output += ' '
  }

  return output
}


console.log(susunPesan([
  ['besok', 4],
  ['kita', 1],
  ['akan', 2],
  ['menyerang', 3],
  ['pagi', 5]
]))
console.log(susunPesan([
  ['granat', 3],
  ['musuh', 1],
  ['membawa', 2]
]))