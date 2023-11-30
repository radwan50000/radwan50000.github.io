let langButton = document.querySelector("#lang-select"),
    selectedLangBox = document.querySelector("#selected-lang-box"),
    header_1 = document.querySelector("#E-D-H-1"),
    header_3 = document.querySelector("#E-D-H-3"),
    header_5 = document.querySelector("#E-D-H-5"),
    main = document.querySelector("main"),
    input_field_container = document.querySelector("#input-fields-container"),
    input_p_user = document.querySelector("#input-p-user"),
    input_p_pass = document.querySelector("#input-p-pass"),
    email_field = document.querySelector("#email-field"),
    pass_field = document.querySelector("#pass-field"),
    submit_button = document.querySelector("#submit-button"),
    footer_text = document.querySelector("footer p"),
    english = false;

function changeLanguage(){
    if(!english){
        selectedLangBox.style.cssText = "transform: translateX(-100%);";
        selectedLangBox.textContent = "En";
        main.style.cssText = "animation: Ar_to_En_main 0.6s ease-in-out forwards !important;";
        footer_text.style.cssText = "animation: Ar_to_En_main 0.6s ease-in-out forwards !important;";
        header_1.textContent = "تسجيل الدخول";
        header_3.textContent = "يرجى إدخال البيانات التالية للحصول على معلوماتك";
        input_field_container.style.cssText = "direction: rtl !important";
        input_p_user.textContent = 'اسم المستخدم أو البريد الإلكتروني';
        input_p_pass.textContent = 'كلمة السر';
        email_field.placeholder = 'ادخل البريد الاكتروني';
        email_field.style.cssText = 'text-align: right !important';
        pass_field.placeholder = 'ادخل كلمة المرور';
        pass_field.style.cssText = 'text-align: right !important';
        submit_button.textContent = 'تسجيل الدخول';
        footer_text.innerHTML = 'تم بواسطة فريق من طلاب المعهد تحت إشراف <b>أ. محمد شعبان</b> - معيد بقسم نظم';
    }else{
        selectedLangBox.style.cssText = "transform: translateX(0%);";
        selectedLangBox.textContent = "ع";
        main.style.cssText = "animation: En_to_Ar_main 0.6s ease-in-out forwards !important;";
        footer_text.style.cssText = "animation: En_to_Ar_main 0.6s ease-in-out forwards !important;";
        header_1.textContent = "Login";
        header_3.textContent = "Please Enter Your Email And Password";
        input_field_container.style.cssText = 'direction: ltr !important;';
        input_p_user.textContent = 'Username or Email Address';
        input_p_pass.textContent = 'Password';
        email_field.placeholder = 'Enter Email Address';
        email_field.style.cssText = 'text-align: left !important';
        pass_field.placeholder = 'Enter Password';
        pass_field.style.cssText = 'text-align: left !important';
        submit_button.textContent = 'Login';
        
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
    if (email_field.value == '' || pass_field.value == '') {
        submit_button.disabled = true;
        submit_button.style.cursor = 'not-allowed';
        submit_button.style.backgroundColor = '#5faacf';
        submit_button.style.color = 'white';
    }
}

email_field.addEventListener("keyup",function(){
    enableSubmitButton();
});

pass_field.addEventListener("keyup",function(){
    enableSubmitButton();
});

enableSubmitButton();
changeLanguage();