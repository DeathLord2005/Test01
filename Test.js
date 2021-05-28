// Bài 1

let n = Number(prompt("Enter n"));
let inputNumber = Number(prompt("Enter the input number"));
if (n < 4 || n > 20 || n % 2 == 1) {
    n = Number(prompt("Hãy nhập lại n"));
};
if (inputNumber < 0 || inputNumber >= n) {
    inputNumber = Number(prompt("Hãy nhập lại inputNumber"));
}
console.log(`inputNumber:${inputNumber}`);
console.log(`n:${n}`);

function findOppositeNumber(a, b) {
    if (b < a / 2) {
        return result = b + a / 2;
    } else if (b == a / 2) {
        return result = 0;
    } else if (b > a / 2) {
        return result = b - a / 2;
    }
}

findOppositeNumber(n, inputNumber);
console.log(`result:${result}`);

// Bài 2

let s1 = String(prompt("Nhập chuỗi s1"));
let s2 = String(prompt("Nhập chuỗi s2"));

s1 = s1.split('');
s2 = s2.split('');
let ex2Result = [];
console.log(s1)

for (x in s1) {
    for (x in s2) {
        newString = s1[x].concat(s2[x]);
        if (!ex2Result.includes(newString)) {
            ex2Result.push(newString);
        }
    }
}
if (s1.length > s2.length) {

    ex2Result = ex2Result + s1[s1.length - 1];

    console.log(ex2Result);
} else if (s1.length < s2.length) {

    ex2Result = ex2Result + s2[s2.length - 1];

    console.log(ex2Result);
} else if (s1.length == s2.length) {

    console.log(ex2Result);
}

// Bài 3

function lucky() {
    let input = Number(document.getElementById("input").value);
    document.getElementById("input").value = input;
    console.log(input);
    if (input < 0 || input > 10) {
        alert("Hãy nhập lại");
    } else {
        let i = Math.floor((Math.random() * 10));
        if (input != i) {
            alert(` Kết quả đúng là ${i}`);
        } else if (input == i) {
            alert(` Bạn đã trúng thưởng`);
        }
    }
}