/*
====
Menuju 1 digit
====
Input : diberikan sebuah angka multi digit
Proses : tambahkan semua digit dalam angka, masukkan ke dalam array output, proses berhenti ketika angka sudah 1 digit
Output : tampilkan seluruh angka yang terbentuk dari penjumlahan semua digit angka, hingga mendapat angka 1 digit

Contoh :
Input : 123
Output : [6]

Input : 999
Output : [27, 9]

Input : 542984
Output : [32, 5]

Input : 9992
Output : [29, 11, 2]
*/

function menujuSatuDigit(numb) {
    numb = numb.toString()
    let output = []
    let temp = 0;

    for (let i = 0; i < numb.length; i++) {
        // console.log(numb[i])
        temp += Number(numb[i])
    }
    output.push(temp);
    temp = 0;
    if (output[0] >= 10) {
        let tempArr = output;
        tempArr = tempArr.toString()
        for (let i = 0; i < tempArr.length; i++) {
            temp += Number(tempArr[i])
        }
        output.push(temp)
    }
    temp = 0;
    if (output[1] >= 10) {
        let tempArr = output;
        tempArr = tempArr.toString()
        // console.log(tempArr, `ini arr`)
        for (let i = 0; i < tempArr[1].length; i++) {
            temp += Number(tempArr[i])
        }
        output.push(temp)
    }
    return output
}

console.log(menujuSatuDigit(123))
console.log(menujuSatuDigit(999))
console.log(menujuSatuDigit(542984))
console.log(menujuSatuDigit(9992))