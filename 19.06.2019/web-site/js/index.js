"use strict";
const bgColorInput = document.getElementById("bg-color");
const allColorInput = document.getElementById("all-color");
const bgImg = document.getElementById("bg-img");
const bolBgImg = document.getElementById("bol-img");
const bolSize = document.getElementById("bol-size");
const spedAnimation = document.getElementById("animation-sped");


const workArea = document.getElementsByClassName("work-area")[0];
const bol = document.getElementsByClassName("bol")[0];
const spedAnimationValue = document.getElementsByClassName("animation-sped-show")[0];

bgColorInput.addEventListener('change', function(){
    workArea.style.backgroundColor = this.value;
})

allColorInput.addEventListener('change', function(){
    workArea.style.color = this.value;
    bol.style.backgroundColor = this.value;
})

bgImg.addEventListener('change', function(){
   workArea.style.backgroundImage = `url(${this.value})`;
})

bolBgImg.addEventListener('change', function(){
    bol.style.backgroundImage = `url(${this.value})`;
 })

bolSize.addEventListener('change', function(){
    bol.style.width = this.value +"px";
    bol.style.height = this.value +"px";

 })

 spedAnimation.addEventListener('change', function(){
    spedAnimationValue.innerText = this.value/10;
    if(this.value/10 == 0.1){
        bol.classList.add("sped1");
        bol.classList.remove("sped2","sped3","sped3","sped4","sped5","sped6","sped7","sped8","sped9","sped10")
    }
    else if(this.value/10 == 0.2){
        bol.classList.add("sped2")
        bol.classList.remove("sped1","sped3","sped3","sped4","sped5","sped6","sped7","sped8","sped9","sped10")


    }
    else if(this.value/10 == 0.3){
        bol.classList.add("sped3")
        bol.classList.remove("sped1","sped2","sped4","sped5","sped6","sped7","sped8","sped9","sped10")


    }
    else if(this.value/10 == 0.4){
        bol.classList.add("sped4")
        bol.classList.remove("sped1","sped2","sped3","sped5","sped6","sped7","sped8","sped9","sped10")


    }
    else if(this.value/10 == 0.5){
        bol.classList.add("sped5")
        bol.classList.remove("sped1","sped2","sped3","sped4","sped6","sped7","sped8","sped9","sped10")


    }
    else if(this.value/10 == 0.6){
        bol.classList.add("sped6")
        bol.classList.remove("sped1","sped2","sped3","sped4","sped5","sped7","sped8","sped9","sped10")


    }
    else if(this.value/10 == 0.7){
        bol.classList.add("sped7")
        bol.classList.remove("sped1","sped2","sped3","sped4","sped5","sped6","sped8","sped9","sped10")
        
    }
    else if(this.value/10 == 0.8){
        bol.classList.add("sped8")
        bol.classList.remove("sped1","sped2","sped3","sped4","sped5","sped6","sped7","sped9","sped10")


    }
    else if(this.value/10 == 0.9){
        bol.classList.add("sped9")
        bol.classList.remove("sped1","sped2","sped3","sped4","sped5","sped6","sped7","sped8","sped10")
        
    }
    else if(this.value/10 == 1){
        bol.classList.add("sped10")
        bol.classList.remove("sped1","sped2","sped3","sped4","sped5","sped6","sped7","sped8","sped9")


    }
 })