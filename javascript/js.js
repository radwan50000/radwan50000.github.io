let buttons = document.querySelectorAll(".button");

let topButton = document.querySelector("#toTop");

let section = document.querySelector("section");

let sections = document.querySelectorAll("section");

let aboutButton = document.querySelector("#about");

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        sections[i].scrollIntoView({behavior: "smooth",block: "start",inline: "nearest"});
    })
}

topButton.addEventListener("click",function(){
    scrollTo(x=0,y=0)
});

for(let i=0;i<sections.length;i++){
    for(let j=0;j<25;j++){
        sections[i].innerHTML += "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptas accusamus repellendus ullam dolorum soluta blanditiis numquam animi deserunt. Corrupti saepe sint ullam quam quod ad asperiores neque officia cumque."
    }
}

aboutButton.addEventListener("click",function(){
    document.getElementById("footer").scrollIntoView({behavior: "smooth",block : "start" , inline : "nearest"});
})

function myFunction() {
    /* Get the text field */
    let copy = document.getElementById("copy");
    /* Select the text field */
    let copyText = copy.textContent;
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);
}

// all the copy icons
let copyElement = document.querySelectorAll(".copyElement");
// all the numbers to contact => whatsapp & phone
let copyNumber = document.querySelectorAll(".copyNumber");
function copyClipboard(input){
    let copyText = input.textContent;
    navigator.clipboard.writeText(copyText);
    alert(`the number has been copied to clipboard`);
}

for(let i=0;i<copyElement.length;i++){
    copyElement[i].addEventListener("click",function(){
        copyClipboard(copyNumber[i]);
    })
}