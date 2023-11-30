let langButton = document.querySelector("#lang-select"),
    selectedLangBox = document.querySelector("#selected-lang-box"),
    main = document.querySelector("main"),
    seatNumButton = document.querySelector("#seat-number"),
    resultsButton = document.querySelector("#results"),
    english = true;


function changeLanguage(){
    if(!english){
        main.style.cssText = "animation: Ar_to_En_main 0.6s ease-in-out forwards !important;";
        selectedLangBox.style.cssText = "transform: translateX(-100%);";
        selectedLangBox.textContent = "En";
        seatNumButton.textContent = 'رقم الجلوس';
        resultsButton.textContent = 'نتيجة الفصل الدراسي';
    }else{
        main.style.cssText = "animation: En_to_Ar_main 0.6s ease-in-out forwards !important;";
        selectedLangBox.style.cssText = "transform: translateX(0%);";
        seatNumButton.textContent = 'sitting number';
        resultsButton.textContent = 'Semester result';
        selectedLangBox.textContent = "ع";
    }
    
}

langButton.addEventListener("click",function(){
    english = english == true ? false:true;
    changeLanguage();
});

