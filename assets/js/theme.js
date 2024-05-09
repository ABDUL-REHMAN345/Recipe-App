/**
 * @license MIT
 * @author codewithrehman <abdulrehman034551@gmail.com>
 * @copyright codewithrehman 2023
 */

"use strict";

// Node Element
const $HTML =document.documentElement;
// Boolean
const isDark=window.matchMedia("(prefers-color-scheme:dark)").matches;

if(sessionStorage.getItem("theme")){
    $HTML.dataset.theme = sessionStorage.getItem("theme");
}else{
    $HTML.dataset.theme=isDark ? "light" : "dark";
}

let /**{Boolean} */ isPressed= true;

const changeTheme=function(){
isPressed=isPressed ? false : true;
this.setAttribute("aria-pressed",isPressed)
$HTML.setAttribute("data-theme",($HTML.dataset.theme==="light") ? "dark" : "light");
sessionStorage.setItem("theme",$HTML.dataset.theme);
}


window.addEventListener("load", function(){
const /**{Node Element} */$themeBtn=this.document.querySelector("[data-theme-btn]");
$themeBtn.addEventListener("click",changeTheme);
});

