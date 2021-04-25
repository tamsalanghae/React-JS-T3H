// switch case
// vong lap
// vong lap for, while, do while

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

// for (let index = 0; index <= 5; index++) {
//     console.log(index);

// }

// let array = ["tam", "thu", "oanh"]
// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);

// }

// i++ -> i = i+ 1
// i+=2 -> i = i + 2

// for(let i = 0; i<10; i++){
//     for(let j = 0; j<10; j++){
//         console.log("i j =", i, j);
//     }
// }

// vong lăp while

// let number = 0;
// while(number < 10){
//     console.log(number);
//     number++;
// }

// let number = 0;
// do {
//     console.log(number);
//     number++;
// } while (number <10)

// nhap vao 1 so tu nhien, in ra cac so le tu 0 den so do

// let number = 0;
// while(number % 2 == 1){
//     console.log(number);
//     number++;
// }

// for (int i = 0; i <= n; i++) {
//     if (i % 2 != 0) {
//         answer += i;
//     }
//     console.log();
// }

// let input = prompt("bai toan in ra so le")
// let input = 20;
// for (let index = 0; index < input; index ++){
//     if(index % 2 !== 0){
//         console.log(index);
//     }
// }



// Nếu n < 1 => là không phải số nguyên tố
// Nếu n = 2 => là số nguyên tố
// Nếu n % 2 == 0 => không phải là số nguyên tố
// Lặp từ 3 -> (n-1) với bước nhảy là 2 (chỉ lặp các số lẻ) và trong quá trình 
// lặp nếu tồn tại số mà n chia hết thì n không phải là số nguyên tố

// function SNT(){
//     let input = 20;
//     if (input < 2){
//         console.log("so nhap vao ko phai la so nguyen to");
//     } else if (input == 2){
//         console.log("so nhap vao la so nguyen to");
//     } else if (input % 2 == 0){
//         console.log("so nhap vao khong phai la so nguyen to");
//     } else {
//         for (let i = 3; i < input -1; i +=2){
//             if(input % i == 0){
//                 console.log("so nhap vao khong phai la so nguyen to");
//             }
//             else {
//                 console.log("so nhap vao la so nguyen to")
//             }
//         }
//     }
// }



let n = 9;
check = true;
if (n < 2){
    check = false;
}  else if (n == 2) {
    check = true;
}{
    for(let index = 3; index < n-1; index += 2){
        if (n % index == 0){
            check = false;
        }
    }
}
if (check === true) {
    console.log("n la so nguyen to");
} else {
    console.log("n cha la cai gi");
}



// function hello(name, age, sex){
//     console.log(`xin chao ${name} ${age} ${sex}`);
//     return 12;
// }
// hello("tung");


function checkSNT(n){
    if (n < 2){
        return false;
    } else if ( n == 2){
        return true;
    } else if ( n % 2 == 0){
        return false;
    } else {
        for(let index = 3; index < )
    }
}
