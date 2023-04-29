const title = document.querySelector(".title");
const reload = document.querySelector(".reload");
const ul = document.querySelector("ul");

window.onload = function(){
    if(window.navigator.online){
        online()
    }else{
        offline()
    }
}

window.addEventListener("online" function(){
    online()
})

window.addEventListener("offline" function(){
    offline()
})

reload.onclick = function(){
    window.location.reload();
}

function online(){
    title.innerHTML = "Online now";
    ul.classList.add("hide");
    reload.classList.add("hide");
    title.style.color = "green";
}

function offline(){
    title.innerHTML = "Offline now";
    ul.classList.remove("hide");
    reload.classList.remove("hide");
    title.style.color = "black";
}