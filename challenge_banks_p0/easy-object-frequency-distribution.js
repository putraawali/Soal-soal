/*
===
Frequency Distribution
===
Buatlah sebuah fungsi yang bernama getFrequencies yang akan melakukan pelaporan rangkuman atas nilai-nilai yang tesebar dalam sebuah array

Contoh :
getFrequencies(["A", "B", "A", "A", "A"]) // { A: 4, B: 1 }

getFrequencies([1, 2, 3, 3, 2]) // { "1": 1, "2": 2, "3": 2 }

getFrequencies([true, false, true, false, false]) // { true: 2, false: 3 }

getFrequencies([]) // {}
*/

function getFrequencies(arr) {
    let output = {};

    for (let i = 0; i < arr.length; i++){
        if (output[arr[i]] === undefined) {
            output[arr[i]] = 0;
        }
        output[arr[i]] ++
    }

    return output
}

console.log(getFrequencies(["A", "B", "A", "A", "A"])) // { A: 4, B: 1 }

console.log(getFrequencies([1, 2, 3, 3, 2])) // { "1": 1, "2": 2, "3": 2 }

console.log(getFrequencies([true, false, true, false, false])) // { true: 2, false: 3 }

console.log(getFrequencies([])) // {}