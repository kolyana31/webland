import '../styles/style.scss'
import "normalize.css"
import {isInViewport,isElementInViewport} from "./helpers"

let blocks = [document.getElementById("header"),document.getElementById("about"),document.getElementById("services"),document.getElementById("prices"),document.getElementById("contacts")]
let scrollindicator = document.getElementById("ScrollIndicator");

document.addEventListener("scroll",()=>{
    blocks.forEach((el,i) => {
        if (isInViewport(el)) {
            [...scrollindicator.children].forEach((el2,i2)=>{
                if(i==i2){
                    el2.dataset.active="1"
                }
                else{
                    el2.dataset.active="0"
                }
            })
        }
    });
})

let menubtn = document.getElementById("header_menuBTN")

menubtn.addEventListener("click",()=>{
        menubtn.classList.toggle("center_active");
        [...document.getElementById("header_links").children].forEach((el,i)=>{
            setTimeout(() => {
                el.classList.toggle("hidden_menu")
            }, i*30); 
        })
})

let showuppers = [...document.getElementsByClassName('showupper')];

window.onscroll= ()=>{
    showuppers.forEach((el,i)=>{
       if(isElementInViewport(el, el.dataset)){
            el.style.animationPlayState = "running";
       }
    })
}

window.onscroll();