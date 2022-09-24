let arr = [4, '8', 16, 32, undefined, null, 's', 1];

function countEvenOdd (arr){
    let countEven = 0;
    let countOdd = 0;
    let countOther = 0;

    for (let i = 0; i < arr.length; i++){
        if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
            countOther++;
        } else {
            if (arr[i] % 2 === 0) {
                countEven++;
            } else {
                countOdd++;
            }
        }
    }

    return [countEven, countOdd, countOther];
}

let rez = countEvenOdd(arr);


console.log("Even " + rez[0] + " elements");
console.log("Odd " + rez[1] + " elements");
console.log("Other " + rez[2] + " elements");
