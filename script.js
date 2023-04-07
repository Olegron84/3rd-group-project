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
let header_select_btn = document.querySelector(".header__select-name-btn-image")
let header_select_options = document.querySelector(".header__select-options")
header_select_btn.addEventListener("click", ()=>{
    if (header_select_btn.classList.contains("select-btn-active")){
        header_select_btn.classList.remove("select-btn-active")
        header_select_options.classList.remove("select-options-active")
    }else{
        header_select_btn.classList.add("select-btn-active")
        header_select_options.classList.add("select-options-active")
    }
    
 
})/////
let head_link = document.querySelector(".link-theme")
let header_theme = document.querySelector(".slider");
header_theme.addEventListener("click", ()=>{
    let currTheme = head_link.getAttribute("href");
    if(currTheme == "style.css")
    {
   	 currTheme = "style-black.css";
    }
    else
    {    
   	 currTheme = "style.css";
    }

    head_link.setAttribute("href", currTheme);
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
/////
let Numdivide = document.getElementById("divide");
let Numminus = document.getElementById("minus");
let Nummultiply = document.getElementById("multiply");
let Numplus = document.getElementById("plus");
let Numequal = document.getElementById("equal");
let num1 = document.getElementById("read1");
let num2 = document.getElementById("read2");
let Inputequal = document.getElementById("resultNum");
var symbol;
Numdivide.addEventListener("click", function () {
  symbol = "/";
});
Numminus.addEventListener("click", function () {
  symbol = "-";
});
Nummultiply.addEventListener("click", function () {
  symbol = "*";
});
Numplus.addEventListener("click", function () {
  symbol = "+";
});
Numequal.addEventListener("click", function () {
  switch (symbol) {
    case "*":
      Inputequal.value = +num1.value * +num2.value;
      break;
    case "/":
      Inputequal.value = +num1.value / +num2.value;
      break;
    case "+":
      Inputequal.value = +num1.value + +num2.value;
      break;
    case "-":
      Inputequal.value = +num1.value - +num2.value;
      break;
  }
});
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
let dino_game = document.querySelector(".dino__game");
let dino = document.querySelector(".dino__image")
let cactus1 = document.querySelector(".dino__cactus1-image")

dino_game.addEventListener("click", ()=>{
    dino.classList.add("dino-running")
    cactus1.classList.add("cactus_active")

        document.addEventListener("keydown", function(event){
            if(event.shiftKey && cactus1.classList.contains("cactus_active")){
                dino.classList.remove("dino-running")
                dino.classList.add("dino-jumping")
                setTimeout(() => {
                    dino.classList.remove("dino-jumping")
                }, 500);
                dino.classList.add("dino-running")
            }
        
        })
        setInterval(() => {
            let dino_top = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
            let cactus_left = parseInt(window.getComputedStyle(cactus1).getPropertyValue("left"))
            if(cactus_left<147 && cactus_left>0 && dino_top>=86){
                alert("GAME OVER")
                dino.classList.remove("dino-running")
                cactus1.classList.remove("cactus_active")
            }
        }, 10);
    
})
/////
let football_canvas = document.querySelector(".f-canvas")
let footbal_context = football_canvas.getContext("2d")

var mouseXblock = 0
var mouseYblock = 0

football_canvas.addEventListener("click", function(event){
  var mouseX = event.pageX
  var mouseY = event.clientY
  var block = document.querySelector(".f-canvas")
  var blockRectangle = block.getBoundingClientRect()
  var blockX = blockRectangle.left
  var blockY = blockRectangle.top
  mouseXblock = mouseX - blockX - 25
  mouseYblock = mouseY - blockY - 25
})

let ball = new Image()
ball.src = "./img/foot_ball.png"

football_canvas.width = 720
football_canvas.height = 220

function draw(){
    footbal_context.fillStyle = "green"
    footbal_context.fillRect(0, 0, 720, 720)
    footbal_context.drawImage(ball, mouseXblock, mouseYblock)
  if(mouseXblock > 0){
    footbal_context.fillStyle = "green"
    footbal_context.fillRect(0, 0, 720, 720)
    footbal_context.drawImage(ball, mouseXblock, mouseYblock)
  }
}
setInterval(draw, 30)
/////
const btn = document.getElementById("para");
let x = document.getElementById("numLow");
let y = document.getElementById("numDraw");
let a = document.getElementById("numMax");
btn.addEventListener("click", inputResult);
function inputResult() {
     btn.innerHTML = `Найбільше число яке ви ввели - це ${Math.max(+x.value, +y.value, +a.value)}`;
}
/////

let offset = 0;
const sliderLine = document.querySelector('.my-pictures-section');

document.querySelector('#arrow-right').addEventListener('click', function(){
    offset = offset + 256;
    if (offset > 768) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('#arrow-left').addEventListener('click', function () {
    offset = offset - 256;
    if (offset < 0) {
        offset = 768;
    }
    sliderLine.style.left = -offset + 'px';
});
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
