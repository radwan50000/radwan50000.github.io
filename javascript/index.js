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
    english = true,
    lang = "en";


const sussesBtn = (msg) => {
    Toastify({
        text: msg,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: 'top',
        positionLeft: false,
        avatar: './../images/successLogo.png',
        backgroundColor: '#50ac54',
    }).showToast();
};

const failedBtn = (msg) => {
    Toastify({
        text: msg,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: 'top',
        positionLeft: false,
        avatar: './../images/failedLogo.png',
        backgroundColor: '#e81c24',
    }).showToast();
};

function changeLanguage(){
    if(!english){
        selectedLangBox.style.cssText = "position: absolute;top: 0;right: 0 !important;";
        selectedLangBox.textContent = "ع";
        header_1.textContent = "ادخل الرقم القومي او الكود الجامعي";
        header_3.textContent = "يرجى إدخال البيانات التالية للحصول على معلوماتك";
        header_5.innerHTML = "نتمنى لك كل التوفيق في اختباراتك، يرجى عدم<br> تبادل المعلومات مع الغير ";
        national_id.textContent = "الرقم القومي";
        email_id.textContent = "كود الطالب";
        input_field.placeholder = "ادخل البيانات...";
        for(let i=0;i<radio_div.length;i++){
            radio_div[i].style.cssText = "direction: rtl";
        }
        submit_button.textContent = "استعلام";
    }else{
        selectedLangBox.style.cssText = "position: absolute;top: 0;left: 0 !important;";
        selectedLangBox.textContent = "En";
        header_1.textContent = "Enter National ID or Student ID";
        national_id.textContent = "National ID";
        email_id.textContent = "Student ID";
        input_field.placeholder = "Enter Data...";
        for(let i=0;i<radio_div.length;i++){
            radio_div[i].style.cssText = "direction: ltr";
        }
        submit_button.textContent = "Submit";
        header_3.textContent = "Please enter the following data for your information";
        header_5.innerHTML = "We wish you all the best in your exams. Please do not <br>share information with others";
    }
}

langButton.addEventListener("click",function(){
    english = english == true ? false:true;
    changeLanguage();
});

function enableSubmitButton() {
    submit_button.disabled = false;
    submit_button.style.cursor = 'pointer';
    submit_button.style.backgroundColor = '#039be5';
    submit_button.style.color = 'white';
    if (input_field.value == '') {
        submit_button.disabled = true;
        submit_button.style.cursor = 'not-allowed';
        submit_button.style.backgroundColor = '#039be5';
        submit_button.style.color = 'white';
    }
}
enableSubmitButton();

input_field.addEventListener("change",function(){
    enableSubmitButton();
})


// async function getStudentData() {
//     let flag = document.querySelector(
//         'input[name="get-data-type"]:checked'
//     ).value;
//     let id = input_field.value;
//     const response = await fetch(
//         `https://eia-seat-number.onrender.com/api/v1/students/getSeatNumber/${flag}/${id}`
//     );
//     const studentSeatNumber = await response.json();
//     console.log(studentSeatNumber);
//     //showData(studentSeatNumber);
// }

// submit_button.addEventListener("click",function(){
//     getStudentData();
// })