function PTB2() {
    alert('Giai phuong trinh bac 2');
    alert('Nhap 3 he so a b c:')
    let a = prompt('nhap he so a');
    let b = prompt('nhap he so b');
    let c = prompt('nhap he so c');
    let delta = b * b - 4 * a * c;
    let x1 = (-b + Math.sqrt(delta)) / 2 * a;
    let x2 = (-b - Math.sqrt(delta)) / 2 * a;

    if (a == 0 && b == 0 && c == 0) {
        alert('Phuong trinh vo so nghiem');
    } else if (a == 0 && b == 0 && c != 0) {
        alert('Phuong trinh vo ngiem');
    } else if (a == 0 && b != 0) {
        alert('Phuong trinh co nghiem duy nhat : x =' + -c / b);
    } else if (a != 0) {
        if (delta < 0) {
            alert('Phuong trinh vo nghiem');
        } else if (delta == 0) {
            alert('Phuong co nghiem kep: x1 = x2 =' + -b / 2 * a);
        } else {
            alert('Phuong trinh co 2 nghiem phan biet x1 x2 :' + x1 + "x2:" + x2);
        }
    }
}