const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// function batterySum (array) {
// let totalBatteries = 0;

//     for (const num of array) {
//         totalBatteries += num;
//     };

// return totalBatteries;
// }

// console.log(batterySum(batteryBatches));

let totalBatteries = batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue);