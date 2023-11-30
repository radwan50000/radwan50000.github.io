//change language
let langButton = document.querySelector("#lang-select"),
    selectedLangBox = document.querySelector("#selected-lang-box"),
    header_1 = document.querySelector("#E-D-H-1"),
    header_3 = document.querySelector("#E-D-H-3"),
    header_5 = document.querySelector("#E-D-H-5"),
    radio_div = document.querySelectorAll(".radio-div"),
    national_id = document.querySelector("#national-id-text"),
    email_id = document.querySelector("#email-id-text"),
    input_field = document.querySelector("#input-field"),
    submit_button = document.querySelector("#submit-button"),
    main = document.querySelector("main"),
    stu_name_p = document.querySelector("#student-name-p")
    seat_num_p = document.querySelector("#seat-number-p"),
    board_floor_p = document.querySelector("#board-floor-p"),
    board_num_p = document.querySelector("#board-number-p"),
    stu_name = document.querySelector("#student-name")
    seat_num = document.querySelector("#seat-number"),
    board_floor = document.querySelector("#board-floor"),
    board_num = document.querySelector("#board-number"),
    student_details_container = document.querySelector("#student_details_container"),
    footer_text = document.querySelector("footer p"),
    english = true,
    lang = "en";



function changeLanguage(){
    if(!english){
        main.style.cssText = "animation: Ar_to_En_main 0.6s ease-in-out forwards !important;";
        footer_text.style.cssText = "animation: Ar_to_En_main 0.6s ease-in-out forwards !important;";
        header_5.style.cssText = "animation: Ar_to_En_main 0.6s ease-in-out forwards !important;";
        selectedLangBox.style.cssText = "transform: translateX(-100%);";
        selectedLangBox.textContent = "En";
        header_1.textContent = "ادخل الرقم القومي او الكود الجامعي";
        header_3.textContent = "يرجى إدخال البيانات التالية للحصول على معلوماتك";
        header_5.innerHTML = "نتمنى لك كل التوفيق في اختباراتك، يرجى عدم<br> تبادل المعلومات مع الغير ";
        stu_name_p.textContent = 'اسم الطالب';
        seat_num_p.textContent = 'رقم الجلوس';
        board_floor_p.textContent = 'رقم الدور';
        board_num_p.textContent = 'رقم اللجنة';
        student_details_container.style.cssText +="align-items: flex-end !important;";
        for(let i=0;i<document.querySelectorAll(".student-details").length;i++){
            document.querySelectorAll(".student-details")[i].style.cssText = "justify-content: right;align-items: center;";
        }
        national_id.textContent = "الرقم القومي";
        email_id.textContent = "كود الطالب";
        input_field.placeholder = "ادخل البيانات...";
        for(let i=0;i<radio_div.length;i++){
            radio_div[i].style.cssText = "direction: rtl";
        }
        submit_button.textContent = "استعلام";
        footer_text.innerHTML = 'تم بواسطة فريق من طلاب المعهد تحت إشراف <b>أ. محمد شعبان</b> - معيد بقسم نظم';
    }else{
        main.style.cssText = "animation: En_to_Ar_main 0.6s ease-in-out forwards !important;";
        footer_text.style.cssText = "animation: En_to_Ar_main 0.6s ease-in-out forwards !important;";
        header_5.style.cssText = "animation: En_to_Ar_main 0.6s ease-in-out forwards !important;";
        selectedLangBox.style.cssText = "transform: translateX(0%);";
        selectedLangBox.textContent = "ع";
        header_1.textContent = "Enter National ID or Student ID";
        header_3.textContent = "Please enter the following data for your information";
        header_5.innerHTML = "We wish you all the best in your exams. Please do not <br>share information with others";
        national_id.textContent = "National ID";
        email_id.textContent = "Student ID";
        input_field.placeholder = "Enter Data...";
        stu_name_p.textContent = 'Student Name';
        seat_num_p.textContent = 'Seat Number';
        board_floor_p.textContent = 'Board Floor';
        board_num_p.textContent = 'Board Number';
        student_details_container.style.cssText += "align-items: flex-start !important;";
        for(let i=0;i<document.querySelectorAll(".student-details").length;i++){
            document.querySelectorAll(".student-details")[i].style.cssText = "justify-content: left;align-items: center;";
        }
        for(let i=0;i<radio_div.length;i++){
            radio_div[i].style.cssText = "direction: ltr";
        }
        submit_button.textContent = "Submit";
        footer_text.innerHTML = 'This website by a team of institute students under the supervision of <b>Mr. Mohamed Shaban</b>.';
        
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
        submit_button.style.backgroundColor = '#5faacf';
        submit_button.style.color = 'white';
    }
}


input_field.addEventListener("keyup",function(){
    enableSubmitButton();
})



async function getStudentData() {
    let flag = document.querySelector(
        'input[name="get-data-type"]:checked'
    ).value;
    let id = input_field.value;
    const response = await fetch(
        `https://eia-seat-number.onrender.com/api/v1/students/getSeatNumber/${flag}/${id}`
    );
    const studentSeatNumber = await response.json();
    showData(studentSeatNumber);
}
submit_button.addEventListener("click",function(){
    getStudentData();
})

async function showData(input){
    if(input.message === 'success'){
        student_details_container.style.cssText += "display: flex";
        let value = input.seatNumber;
        stu_name.innerHTML = value.name;
        seat_num.innerHTML = value.seatNumber;
        board_floor.innerHTML = value.boardFloor;
        board_num.innerHTML = value.boardNumber;
    }else{
        student_details_container.style.cssText += "display: none";
    }
}


enableSubmitButton();

