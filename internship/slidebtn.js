document.getElementById('next').onclick = function () {
    const widthItem = document.querySelector('.product').offsetWidth;
    document.getElementById('formList').scrollLeft += widthItem;
}
document.getElementById('prev').onclick = function () {
    const widthItem = document.querySelector('.product').offsetWidth;
    document.getElementById('formList').scrollLeft -= widthItem;
}
// ------------------------
document.getElementById('next2').onclick = function () {
    const widthItem = document.querySelector('.product2').offsetWidth;
    document.getElementById('formList2').scrollLeft += widthItem;
}
document.getElementById('prev2').onclick = function () {
    const widthItem = document.querySelector('.product2').offsetWidth;
    document.getElementById('formList2').scrollLeft -= widthItem;
}
// ---------------------------
document.getElementById('next3').onclick = function () {
    const widthItem = document.querySelector('.product3').offsetWidth;
    document.getElementById('formList3').scrollLeft += widthItem;
}
document.getElementById('prev3').onclick = function () {
    const widthItem = document.querySelector('.product3').offsetWidth;
    document.getElementById('formList3').scrollLeft -= widthItem;
}