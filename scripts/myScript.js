$(document).ready(function () {

let myWrap = $('.wraper');
$('.myBtn').on('click',function (e) {
    console.log(e.target);
    let myUl = "<ul></ul>";
    let myNum = (Math.random()*1000).toFixed(0);
    console.log(myNum);
    $('<li>New Num - '+myNum+'</li>').appendTo(myUl).appendTo(myWrap);
})
    $('.myBtn').on('click',function (e) {
        console.log(e.target);
        let myUl = "<ul></ul>";
        let myNum = (Math.random()*1000).toFixed(0);
        console.log(myNum);
        $('<li>New Num - '+myNum+'</li>').appendTo(myUl).appendTo(myWrap);
    })


})