var settingsmenu=document.querySelector(".setting-menu");
var darkBtn=document.getElementById("dark-btn");

function settingMenuToggle() {
    settingsmenu.classList.toggle("setting-menu-height");

}
darkBtn.onclick=function() {
    darkBtn.classList.toggle("dart-btn-on")
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme")=="light") {
        localStorage.setItem("theme","dark")
    }                 
    else  {
        localStorage.setItem("theme","light")
    }
}
if (localStorage.getItem("theme")=="light"){
    darkBtn.classList.remove("dart-btn-on");
    document.body.classList.remove("dark-theme");
}
else if (localStorage.getItem("theme")=="dark"){
    darkBtn.classList.add("dart-btn-on");
    document.body.classList.add("dark-theme");
}
else {
    localStorage.setItem("theme","light");
}