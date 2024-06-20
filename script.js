let b1=document.querySelector("#b1");
let b2=document.querySelector("#b2");
let b3=document.querySelector("#b3");
let con=document.querySelector("#continue");
let msg=document.querySelector("#msg");
let popup = document.querySelector('.popup');
let check=document.querySelector(".checkmark");
let sec1=document.querySelector(".section1");
let sec2=document.querySelector(".section2");
let sec3=document.querySelector(".section3");
b1.onclick=()=>{
    msg.innerText="you selected FREE plan of $0 ..."
    console.log(msg.innerText);
    popup.classList.toggle('on');
    sec1.classList.toggle('off');
    sec2.classList.toggle('off');
    sec3.classList.toggle('off');
}

b2.onclick=()=>{
    msg.innerText="you selected BASIC plan of $29 ..."
    console.log(msg.innerText);
    popup.classList.toggle('on');
    sec1.classList.toggle('off');
    sec2.classList.toggle('off');
    sec3.classList.toggle('off');
}

b3.onclick=()=>{
    msg.innerText="you selected PREMIUM plan of $99 ..."
    console.log(msg.innerText);
    popup.classList.toggle('on');
    sec1.classList.toggle('off');
    sec2.classList.toggle('off');
    sec3.classList.toggle('off');
}
con.onclick=()=>{
    console.log("continue clicked...");
    popup.classList.toggle('off');
    check.classList.toggle('on');
}