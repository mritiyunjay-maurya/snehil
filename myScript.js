// console.log("assa");
let first =document.querySelector("#first");
let second =document.querySelector("#second");
let third =document.querySelector("#third");
let fourth =document.querySelector("#fourth");
let fifth =document.querySelector("#fifth");

let scrolll=document.querySelector("#scrollable");

scrolll.addEventListener("scroll",(x)=>{
    var divbox=window.pageYOffset;
    // console.log(x);
    console.log(divbox);
    console.log(first.scrollTop);
    console.log("Sdad");

    // if(first.offsetTop<=divbox && first.offsetTop > divbox)
    // {
    //     console.log("first");
    // }
    // else if(second.offsetTop<=divbox && first.offsetTop > divbox)
    // {
    //     console.log("Second");
    // }
})