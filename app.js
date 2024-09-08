let body=document.querySelector("body");
let scrollPage=document.querySelector(".scroll");
let sub=document.querySelector(".sub");


window.addEventListener("scroll",function(){
    if(window.scrollY>300){
        let totalHeight=body.clientHeight;
        let scrollPosition=window.scrollY;

        let innerHeight=window.innerHeight;
        let countHeight=totalHeight-innerHeight;
        let scrollPercentage=Math.round((scrollPosition/totalHeight)*100);
        // console.log(scrollPercentage);
        scrollPage.style.background=`conic-gradient(red ${scrollPercentage}%,green ${scrollPercentage}%)`
        sub.innerHTML=scrollPercentage
    }
 
})



let navbar=document.querySelector("nav");
let a=0;

window.addEventListener("scroll",function(){
    let b=window.scrollY;
   

    if(a>window.scrollY){
        navbar.classList.add("active")
    }else{
        navbar.classList.remove("active")
    }
    a=b;

})
