/*
Buatlah sebuah function bernama myBubbleSort yang akan menerima sebuah array of number. Implementasikan algoritma bubble sort yang di improve dengan menggunakan flagging. Flagging dipakai untuk menentukan apakah pada iterasi terakhir ada dilakukan value switching ( penukaran nilai ). Jika tidak ada, maka tidak perlu melakukan iterasi lagi setelahnya, jika masih ada

Algoritma bubble sort nya silakan dicari via googling :P
*/

function myBubbleSort(arr) {
  // your code here

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = arr.length - 1; j >= 0; j--) {
  //     if (arr[j] > arr[j + 1]) {
  //       temp = arr[j + 1];
  //       arr[j + 1] = arr[j];
  //       arr[j] = temp;
  //     }
  //   }
  // }
  let flag = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      flag = true;
      temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
    }
    if (flag) {
      i = 0;
      flag = false
    }
  }
  // console.log(flag)
  return arr
}

let input = [1, 2, 3, 56, 2, 55, 7, 4, 77, 4, 3, 2, 1]
// let input = ['a', 'A', 'b', 'B', 'z', 'Z']
// let input = [true, false]
// let input = ['99', 1, 5, '5']
// let input = [typeof (1), typeof ('a')]
// let input = [typeof ('a'), typeof (1)]

console.log(myBubbleSort(input))
// [1, 1, 2,  2,  2, 3, 3, 4, 4, 7, 55, 56, 77]