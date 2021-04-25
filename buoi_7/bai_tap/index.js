//b1: Viết chương trình in ra các số từ 1 đến n?

function print(n) {
  for (let i = 1; i <= n; i++) {
      console.log(i);
  }
}
print(10);

//b2: Viết chương trình in ra các số lẻ từ 1 đến n?

function soLe(n) {
    for(let i = 1; i <= n; i++){
        if( i % 2 == 1){
            console.log(i);
        }
    }
}
soLe(10);

// b3: Viết chương trình in ra các số chẳn từ 1 đến n?

function soChan(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
soChan(10);

// b4: Viết chương trình in ra các số là nguyên tố trong khoảng 1 đến n?

function soNguyenTo(n) {
    check = true;
    let sum = 0; 

    if (n < 2){
        console.log("khong co so nguyen to nao ca");
    }  else if (n == 2) {
        console.log("2");
    }else {
        for(let index = 3; index < n-1; index += 2){
            if (n % index == 0){
                sum = sum + index;
            }
        }
        console.log(sum);
    }
}
soNguyenTo(10);

// b5: Viết chương trình tính tổng từ 1 đến n?

function tong(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum = sum + i;
    }
    console.log(sum);
}
tong(10);

// b6: Viết chương trình tính tổng bình phương của các số từ 1 đến n?

function tongBinhPhuong(n) {
    let count = 0;
    for (let i = 0; i <= n; i++){
        count = count + i*i;
    }
    console.log(count);
}
tongBinhPhuong(3);

// b7: Tính tổng các số lẻ trong khoảng 1 đến n?

function tongSoLe(n) {
    let sum = 0;
    for (i = 1; i <= n; i++){
        if(i % 2 == 1){
            sum = sum + i;
        }
    }
    console.log(sum);
}
tongSoLe(5);

//b8: Kiểm tra số n có toàn số lẻ tạo thành hay không?

function kiemTraSoLe(n) {
  let arr = n.split("").map(function (t) {return parseInt(t);});
  let doDai = arr.length;
  let flag = true;

  for (let i = 0; i < doDai; i++) {
    if (arr[i] % 2 == 0) {
      flag = false;
    }
  }

  if (flag === false){
      console.log("NO");
  } else {
      console.log("YES");
  }
};
kiemTraSoLe("1234");
kiemTraSoLe("135");

