let pageContainer = document.querySelector("#pageContainer");

let containerBox = document.querySelector("#loadingBox");

let topButton = document.querySelector("#topButtonContainer");

topButton.addEventListener("click",function(){
    scrollTo(0,0)
})

document.addEventListener("scroll",function(e){
    if(scrollY >= 350){
        topButton.style.display = "flex";
    }else{
        topButton.style.display = "none"
    }
})

setTimeout(function(){
    containerBox.style.display = "none"
    pageContainer.style.display = "block"
},1500);