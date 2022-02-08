// alert("This is javascript");

// const a=10;
// var b=20,a=10;

// function add(x,y)
// {
//     return x+y;
// }

// console.log(add(a,b));
// [a,b]=[b,a]
// console.log(a,b);

// console.log(document.getElementsByClassName("list-item"));
// document.getElementsByClassName("list-item")[0].innerHTML="This text came from js";

// console.log(document.getElementById("three"));
// document.getElementById("three").innerHTML="This text came from js"
// document.getElementById("three").style="color:#fff;background:black"
// document.getElementsByTagName("p");
// console.log(document.querySelector(".list-item"));
// console.log(document.querySelectorAll(".list-item"));
// document.querySelectorAll(".list-item")[2].innerHTML="hello 1234";

// document.querySelector("#para").classList.add("newClass");
var x=0;
function counter(){
    x = x+1;
    document.querySelector("#count").innerHTML=x;
}

// document.querySelector("#btn").addEventListener(onclick,function(){
//     // counter();
//     console.log("da")
// });
document.querySelector("#btn").addEventListener("click",counter)
// $(document).ready(function(){
// $("#btn").click(function(){
// counter();
// });
// });
// $("#btn").click(function(){
// counter();
// });



setInterval(function(){
    var curdate=new Date().getTime();
    var finaldate=new Date("April 20 2022 12:00:00").getTime();
    
    console.log(finaldate-curdate);
    var time=finaldate-curdate;
    
    var days=Math.floor(time/(1000*60*60*24));
    var hours=Math.floor((time%(1000*60*60*24))/(1000*60*60));
    var mins=Math.floor((time%(1000*60*60))/(1000*60));
    var seconds=Math.floor((time%(1000*60))/(1000));
    document.querySelector("#timer").innerHTML= days + ' d ' +hours+" h " +mins + " min " +seconds +" sec ";

},1000);

function fun1()
{
    document.querySelector("#box").innerHTML=" MOUSE UP";
}
function fun2()
{
    document.querySelector("#box").innerHTML=" MOUSE Down";
}