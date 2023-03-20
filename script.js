document.addEventListener("DOMContentLoaded", ()=> {
    let header_modal = document.querySelector(".header-modal")
    let header_modal_input = document.querySelector(".modal-form-input")
    let header_modal_close = document.querySelector(".icon-close");
    let header_username = document.querySelector(".header__user");
    let header_modal_btn = document.querySelector(".modal-form-btn");
    header_modal.classList.add("hdm_active")
    document.getElementById("body").style = "overflow:hidden;"
    header_modal_btn.addEventListener("click", ()=>{
        header_username.innerHTML = `<span>${header_modal_input.value}, вітаємо</span>`;
        header_modal_input.value = "";
        header_modal.classList.remove("hdm_active");
        document.getElementById("body").style = "overflow:auto";
    })
    header_modal_close.addEventListener("click", ()=>{
        header_modal.classList.remove("hdm_active");
        document.getElementById("body").style = "overflow:auto";
    }) 
//////
let frstk_input = document.getElementById("check");
let frstk_text = document.getElementById("result");

let frstk_btn = document.getElementById("but");

frstk_btn.addEventListener("click", function(){
    if(frstk_input.value % 4 == 0){
        frstk_text.innerHTML = ("ви народились в високосний рік!!!");
        frstk_text.style.color = "green";
    }else{
        frstk_text.innerHTML = ("нажаль ви не народились в високосний рік(((");
        frstk_text.style.color = "red";
    }
});
////////
    let c_form = document.querySelector(".c-number__input");
    let c_res = document.querySelector(".c-number__result");
    let c_btn = document.querySelector(".c-number__image");
    c_btn.addEventListener("click", () =>{
        console.log(c_res)
        let number = Math.floor(Math.random() * 10);
        let user_number = c_form.value;
        if (user_number == number){
            c_res.innerText = "Ви виграли!"
            c_res.style = "color:green;"
        }else{
            c_res.innerText = "Ви програли!"
            c_res.style = "color:red;"
        };
    })
///////////
let srp_arr = ["s", "r", "p"]
let srp__image = document.getElementsByClassName(".srp__image")
let rock = document.getElementById("r")
let scissors = document.getElementById("s")
let paper = document.getElementById("p")
let srp_cvariation = document.querySelector(".srp__cvariation")
let srp_player;
let srp_c;
let srp__result = document.querySelector(".srp__result")
let srp__c_res = document.querySelector(".srp__c-res")
let srp__p_res = document.querySelector(".srp__p-res")
let cc = 0;
let pc = 0;
rock.addEventListener("click", () =>{
    srp_player = "r";
});
scissors.addEventListener("click", () =>{
    srp_player = "s";
});
paper.addEventListener("click", () =>{
    srp_player = "p";
});
function lose(){
    srp__result.innerHTML = "<span>Ви програли!</span>";
    srp__result.style = "color:red";
    cc++
    srp__c_res.innerHTML = `<span>Компьютер: ${cc}</span>`
}
function win(){
    srp__result.innerHTML = "<span>Ви виграли!</span>";
    srp__result.style = "color:green";
    pc++
    srp__p_res.innerHTML = `<span>Ви: ${pc}</span>`
}
function draw(){
    srp__result.innerHTML = "<span>Нічия!</span>";
    srp__result.style = "color:grey";
}
    srp_cvariation.onclick = function(){
        let srp_number = Math.floor(Math.random() * 3);
        srp_c = srp_arr[srp_number];
        if(srp_player=="s" && srp_c == "r"){
            lose();
        }else if (srp_player=="s" && srp_c == "p"){
            win();
        }else if  (srp_player=="s" && srp_c == "s"){
            draw();
        }
        if(srp_player=="r" && srp_c == "p"){
            lose();
        }else if (srp_player=="r" && srp_c == "s"){
            win();
        }else if  (srp_player=="r" && srp_c == "r"){
            draw();
        }
        if(srp_player=="p" && srp_c == "s"){
            lose();
        }else if (srp_player=="p" && srp_c == "r"){
            win();
        }else if  (srp_player=="p" && srp_c == "p"){
            draw();
        }
        srp_c = 0;
        srp_player = 0;
};
})
///////
let calc_time_input = document.querySelector(".calc-time__input")
let calc_time_result = document.querySelector(".calc-time__result")
let calc_time_btn = document.querySelector(".calc-time__image");
calc_time_btn.addEventListener("click", ()=>{
    let mins = calc_time_input.value;

    const day = Math.floor(mins/(60*24));
    mins = mins% (60*24);
    let hours = Math.floor(mins/60);
    if(hours <10){
        hours = "0" + hours; 
    }
    mins = mins%60;
    if(mins < 10){
        mins = "0" + mins;
    }
    calc_time_result.innerHTML = `<span>${day} дн. ${hours} год. ${mins} хв.</span>`;   
})
//////
let footer_submit = document.querySelector(".footer__form-button")
let footer_modal = document.querySelector(".footer__modal")
let footer_modal_close = document.querySelector(".f-icon-close");
let footer_input = document.querySelector(".footer__input");
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
function validateEmail(value) {
    return EMAIL_REGEXP.test(value);
  }
footer_submit.addEventListener("click", ()=>{
    if(validateEmail(footer_input.value)){
        footer_modal.classList.add("fma")
        document.getElementById("body").style = "overflow:hidden;"
        footer_input.value="";
    }
})
footer_modal_close.addEventListener("click", ()=>{
    footer_modal.classList.remove("fma");
    document.getElementById("body").style = "overflow:auto";
})
