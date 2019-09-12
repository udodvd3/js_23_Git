$(document).ready(function () {

let myWrap = $('.wraper');
$('.myBtn').on('click',function (e) {
    console.log(e.target);
    let myUl = "<ul></ul>";
    let myNum = (Math.random()*1000).toFixed(0);
    alert(myNum);
    $('<li>New Num - '+myNum+'</li>').appendTo(myUl).appendTo(myWrap);
})

let mySecCommit = 'MySec Commit There';
alert(mySecCommit);

let materCommit_v3 = "V3.0 Commit";

let myNewBranchCommit = 'New branch Commit is HERE';
alert(myNewBranchCommit);

let NewBranchCommit_2 = "My sec commit in New Branch";
//Вопрос 1-ый конфликт с переменными!!

//2-ой - не было возможности замерджить!!


})