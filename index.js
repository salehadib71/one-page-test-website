var menu = document.getElementById("ul");
menu.style.maxHeight = "0px";
function menuItems(){
    if(menu.style.maxHeight == "0px"){
        menu.style.maxHeight = "320px";
    }else{
        menu.style.maxHeight = "0px";
    }
}