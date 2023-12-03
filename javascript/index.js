let langButton = document.querySelector("#lang-select"),
    selectedLangBox = document.querySelector("#selected-lang-box"),
    main = document.querySelector("main"),
    seatNumButton = document.querySelector("#seat-number"),
    resultsButton = document.querySelector("#results"),
    attr = 'ar',
    english = false;


function changeLanguage(){
    if(!english){
        main.style.cssText = "animation: Ar_to_En_main 0.6s ease-in-out forwards !important;";
        selectedLangBox.style.cssText = "transform: translateX(-100%);";
        
    }else{
        main.style.cssText = "animation: En_to_Ar_main 0.6s ease-in-out forwards !important;";
        selectedLangBox.style.cssText = "transform: translateX(0%);";
    }
    selectedLangBox.textContent = language[attr].langBox;
    seatNumButton.textContent = language[attr].seatNumButton;
    resultsButton.textContent = language[attr].resultsButton;
    
}

let language = {
    en: {
        langBox: 'ع',
        resultsButton: 'Semester Result',
        seatNumButton: 'Sitting Number',
    },
    ar: {
        langBox: 'En',
        resultsButton: 'نتيجة الفصل الدراسي',
        seatNumButton: 'رقم الجلوس',
    }

}

langButton.addEventListener("click",function(){
    english = english == true ? false:true;
    attr = english ? 'en':'ar';
    changeLanguage();
});

changeLanguage();

console.log(language);