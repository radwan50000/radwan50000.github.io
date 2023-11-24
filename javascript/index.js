//change language
let langButton = document.querySelector("#lang-select"),
    selectedLangBox = document.querySelector("#selected-lang-box");
    header_1 = document.querySelector("#E-D-H-1"),
    header_3 = document.querySelector("#E-D-H-3"),
    header_5 = document.querySelector("#E-D-H-5"),
    radio_div = document.querySelectorAll(".radio-div"),
    national_id = document.querySelector("#national-id-text"),
    email_id = document.querySelector("#email-id-text"),
    input_field = document.querySelector("#input-field"),
    submit_button = document.querySelector("#submit-button"),
    english = true;

langButton.addEventListener("click",function(){
    english = english == true ? false:true;
    if(!english){
        console.log('test');
        selectedLangBox.style.cssText = "position: absolute;top: 0;right: 0 !important;";
        selectedLangBox.textContent = "ع";
        header_1.textContent = "ادخل الرقم القومي او الكود الجامعي";
        header_3.textContent = "يرجى إدخال البيانات التالية للحصول على معلوماتك";
        header_5.innerHTML = "نتمنى لك كل التوفيق في اختباراتك، يرحى عدم<br> تبادل المعلومات مع الغير ";
        national_id.textContent = "الرقم القومي";
        email_id.textContent = "الكود";
        input_field.placeholder = "ادخل البيانات...";
        for(let i=0;i<radio_div.length;i++){
            radio_div[i].style.cssText = "direction: rtl";
        }
        submit_button.textContent = "استعلام";
    }else{
        selectedLangBox.style.cssText = "position: absolute;top: 0;left: 0 !important;";
        selectedLangBox.textContent = "En";
        header_1.textContent = "Enter National ID or Code";
        national_id.textContent = "National ID";
        email_id.textContent = "Code";
        input_field.placeholder = "Enter Data...";
        for(let i=0;i<radio_div.length;i++){
            radio_div[i].style.cssText = "direction: ltr";
        }
        submit_button.textContent = "Submit";
        header_3.textContent = "Please enter the following data for your information";
        header_5.innerHTML = "We wish you all the best in your exams. Please do not <br>share information with others";
    }
});



