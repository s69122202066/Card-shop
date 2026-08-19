// ระบบตะกร้าสินค้า (จำลองการเพิ่ม)
let cartCount = 0;
function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert('เพิ่มการ์ดเกมลงในตะกร้าเรียบร้อยแล้ว!');
}

// ระบบกรองหมวดหมู่สินค้า
function filterSelection(category, event) {
    let items = document.getElementsByClassName('filter-item');
    let btns = document.getElementsByClassName('cat-btn');

    // 1. เปลี่ยนสีปุ่มให้รู้ว่ากำลังเลือกหมวดหมู่นี้อยู่
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('active');
    }
    event.currentTarget.classList.add('active');

    // 2. ซ่อน/แสดง สินค้าตามหมวดหมู่
    if (category === 'all') {
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('hide');
        }
    } else {
        for (let i = 0; i < items.length; i++) {
            if (items[i].classList.contains(category)) {
                items[i].classList.remove('hide');
            } else {
                items[i].classList.add('hide');
            }
        }
    }
}
